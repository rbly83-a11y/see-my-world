// Durable, fail-closed supervisor lease and cleanup primitives.
// Leases are not proof of OS/container isolation; caller must reconcile Docker state.
import { randomUUID } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const execFileAsync=promisify(execFile);
const CONTAINER=/^world-forge-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const OWNER=/^[a-zA-Z0-9_-]{8,100}$/;
export class ExecutionSupervisor {
  constructor(store){this.store=store;store.db.exec(`CREATE TABLE IF NOT EXISTS execution_leases(
    job_id TEXT PRIMARY KEY REFERENCES execution_jobs(id),owner TEXT NOT NULL,token TEXT NOT NULL,
    container_name TEXT,status TEXT NOT NULL,expires_at INTEGER NOT NULL,updated_at TEXT NOT NULL);`);}
  get(jobId){return this.store.db.prepare('SELECT * FROM execution_leases WHERE job_id=?').get(jobId)||null;}
  claim(jobId,{owner,ttlMs=60000,now=Date.now()}={}){
    if(!OWNER.test(owner||''))throw Error('Invalid owner identity');
    if(!Number.isSafeInteger(ttlMs)||ttlMs<1000||ttlMs>120000)throw Error('Invalid lease duration');
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const job=db.prepare('SELECT status FROM execution_jobs WHERE id=?').get(jobId);
      if(!job||job.status!=='QUEUED')throw Error('Job must be queued');
      const prior=this.get(jobId);
      // Never steal an expired lease: orphan cleanup must be independently confirmed first.
      if(prior)throw Error('Lease already exists; reconcile before retry');
      const token=randomUUID(),updatedAt=new Date(now).toISOString();
      db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run(jobId,owner,token,null,'CLAIMED',now+ttlMs,updatedAt);
      this.store.record('LEASE_CLAIMED',{jobId,owner});db.exec('COMMIT');return this.get(jobId);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
  attach(jobId,token,containerName,{now=Date.now()}={}){
    if(!CONTAINER.test(containerName||''))throw Error('Invalid container name');
    return this.#update(jobId,token,'CLAIMED','ACTIVE',{container_name:containerName},now);
  }
  heartbeat(jobId,token,{ttlMs=60000,now=Date.now()}={}){
    if(!Number.isSafeInteger(ttlMs)||ttlMs<1000||ttlMs>120000)throw Error('Invalid lease duration');
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const lease=this.get(jobId);
      if(!lease||lease.token!==token||!['CLAIMED','ACTIVE'].includes(lease.status)||lease.expires_at<=now)throw Error('Lease not renewable');
      db.prepare('UPDATE execution_leases SET expires_at=?,updated_at=? WHERE job_id=?').run(now+ttlMs,new Date(now).toISOString(),jobId);
      this.store.record('LEASE_RENEWED',{jobId});db.exec('COMMIT');return this.get(jobId);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
  release(jobId,token,{containerStopped=false,now=Date.now()}={}){
    if(containerStopped!==true)throw Error('Container cleanup confirmation required');
    const lease=this.get(jobId);if(!lease||lease.token!==token)throw Error('Invalid lease token');
    if(lease.status==='RELEASED')throw Error('Lease already released');
    return this.#update(jobId,token,lease.status,'RELEASED',{},now);
  }
  expired(now=Date.now()){return this.store.db.prepare("SELECT * FROM execution_leases WHERE status IN ('CLAIMED','ACTIVE') AND expires_at<=? ORDER BY job_id").all(now);}
  #update(jobId,token,from,to,fields,now){
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');try{
      const lease=this.get(jobId);
      if(!lease||lease.token!==token||lease.status!==from)throw Error('Lease state/token mismatch');
      if(lease.expires_at<=now && to!=='RELEASED')throw Error('Lease expired');
      if(fields.container_name)db.prepare('UPDATE execution_leases SET status=?,container_name=?,updated_at=? WHERE job_id=?').run(to,fields.container_name,new Date(now).toISOString(),jobId);
      else db.prepare('UPDATE execution_leases SET status=?,updated_at=? WHERE job_id=?').run(to,new Date(now).toISOString(),jobId);
      this.store.record('LEASE_'+to,{jobId});db.exec('COMMIT');return this.get(jobId);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
}
// Kill only an explicitly identified WORLD FORGE container. Requires Docker permissions.
// This does not infer that a container was stopped merely because a process exited.
export async function stopContainer(containerName,{exec=execFileAsync}={}){
  if(!CONTAINER.test(containerName||''))throw Error('Refusing unsafe container name');
  await exec('docker',['rm','--force',containerName],{timeout:15000,maxBuffer:65536});
  return {containerName,stopCommandSucceeded:true};
}

// Read-only Docker inspection. Never treat missing Docker, missing containers, or
// malformed output as proof of cleanup. Caller must explicitly reconcile.
export async function inspectContainer(containerName,{exec=execFileAsync}={}){
  if(!CONTAINER.test(containerName||''))throw Error('Refusing unsafe container name');
  let stdout;
  try{({stdout}=await exec('docker',['inspect','--type=container','--format','{{json .}}',containerName],{timeout:15000,maxBuffer:1048576}));}
  catch(e){return {containerName,verified:false,reason:'INSPECTION_FAILED'};}
  try{
    const obj=JSON.parse(stdout);
    if(!obj||typeof obj!=='object'||obj.Name!=='/'+containerName||typeof obj.Id!=='string'||!/^[a-f0-9]{64}$/.test(obj.Id)||!obj.State||typeof obj.State.Running!=='boolean')throw Error('Malformed Docker inspection');
    return {containerName,containerId:obj.Id,running:obj.State.Running,status:String(obj.State.Status||''),verified:true};
  }catch{return {containerName,verified:false,reason:'INVALID_INSPECTION'};}
}
// Operator-triggered cancellation: a successful rm command is not enough.
// Reinspection must prove that the container no longer exists; Docker inspect
// failure is ambiguous, so this reports unverified rather than "stopped".
export async function requestContainerStop(containerName,{exec=execFileAsync}={}){
  const before=await inspectContainer(containerName,{exec});
  if(!before.verified)return {containerName,confirmed:false,reason:'PRE_INSPECTION_UNVERIFIED'};
  try{await stopContainer(containerName,{exec});}
  catch{return {containerName,confirmed:false,reason:'STOP_FAILED'};}
  // Docker inspect missing after rm is expected, but without daemon-level
  // container listing we cannot distinguish unavailable Docker from removal.
  try{
    const {stdout}=await exec('docker',['ps','-a','--no-trunc','--format','{{.Names}}'],{timeout:15000,maxBuffer:1048576});
    if(typeof stdout!=='string')throw Error('Invalid listing');
    const names=stdout.split(/\r?\n/).filter(Boolean);
    if(names.includes(containerName))return {containerName,confirmed:false,reason:'STILL_PRESENT'};
    return {containerName,confirmed:true,reason:'ABSENT_FROM_DOCKER_LIST'};
  }catch{return {containerName,confirmed:false,reason:'POST_INSPECTION_UNVERIFIED'};}
}
