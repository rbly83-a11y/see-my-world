import { createHash, randomUUID } from 'node:crypto';
import { realpath, readdir, readFile, lstat, mkdir, writeFile, open } from 'node:fs/promises';
import { join, relative, sep, dirname, resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const execFileAsync=promisify(execFile);
import { prepareExecutionPlan } from './preflight.js';
import { runIsolated } from './runner.js';

const SHA=/^[a-f0-9]{40}$|^[a-f0-9]{64}$/;
const hash=b=>createHash('sha256').update(b).digest('hex');
const within=(base,p)=>{const r=relative(base,p);return r!==''&&r!=='..'&&!r.startsWith('..'+sep)&&!r.startsWith(sep);};

// Refuse symlinks, devices, excessive size/count, and ambiguous filenames.
export async function inventoryArtifacts(directory,{maxFiles=100,maxBytes=10_000_000}={}) {
  const root=await realpath(directory), entries=[];let total=0;
  async function walk(dir){
    for(const entry of await readdir(dir,{withFileTypes:true})){
      const p=join(dir,entry.name), rel=relative(root,p);
      if(!within(root,p)||entry.name==='.'||entry.name==='..')throw Error('Invalid artifact path');
      const st=await lstat(p);
      if(st.isSymbolicLink()||(!st.isFile()&&!st.isDirectory()))throw Error('Unsupported artifact type');
      if(st.isDirectory()){await walk(p);continue;}
      if(entries.length>=maxFiles||st.size>maxBytes-total)throw Error('Artifact budget exceeded');
      const bytes=await readFile(p);
      if(bytes.length!==st.size)throw Error('Artifact changed during inspection');
      total+=bytes.length;entries.push({path:rel.split(sep).join('/'),bytes:bytes.length,sha256:hash(bytes)});
    }
  }
  await walk(root);
  entries.sort((a,b)=>a.path.localeCompare(b.path));
  return {files:entries,totalBytes:total,manifestSha256:hash(JSON.stringify(entries))};
}

// Verify the actual checkout, not merely a claimed source revision.
// This does not attest the remote origin or supply-chain provenance.
export async function attestSourceRevision(workspace,expectedSha,{git=execFileAsync}={}) {
  if(!/^[a-f0-9]{40}$/.test(expectedSha??''))throw Error('Expected full Git SHA-1');
  const root=await realpath(workspace);
  const run=async args=>(await git('git',args,{cwd:root,timeout:10000,maxBuffer:1024*1024})).stdout.trim();
  const top=await realpath(await run(['rev-parse','--show-toplevel']));
  if(top!==root)throw Error('Workspace must be repository root');
  const sha=await run(['rev-parse','HEAD']);
  if(sha!==expectedSha)throw Error('Source revision mismatch');
  if(await run(['status','--porcelain','--untracked-files=all']))throw Error('Workspace contains uncommitted changes');
  return Object.freeze({sha,clean:true,root});
}

// Write a content-addressed snapshot in a separate trusted directory.
// Never trust the source folder after snapshotting; consumers verify hashes again.
export async function snapshotArtifacts(source,destination,limits={}) {
  const src=await realpath(source), dst=resolve(destination);
  if(src===dst||within(src,dst)||within(dst,src))throw Error('Snapshot location must be disjoint');
  const manifest=await inventoryArtifacts(src,limits);
  await mkdir(dst,{recursive:false,mode:0o700});
  try {
    for(const item of manifest.files){
      const from=join(src,item.path),to=join(dst,item.path);
      await mkdir(dirname(to),{recursive:true});
      const fd=await open(from,'r');
      try{
        const st=await fd.stat();
        if(!st.isFile())throw Error('Artifact is not a regular file');
        const bytes=await fd.readFile();
        if(bytes.length!==item.bytes||hash(bytes)!==item.sha256)throw Error('Artifact mutated during snapshot');
        await writeFile(to,bytes,{flag:'wx',mode:0o400});
      }finally{await fd.close();}
    }
    const check=await inventoryArtifacts(dst,limits);
    if(check.manifestSha256!==manifest.manifestSha256)throw Error('Snapshot integrity mismatch');
    return {directory:dst,manifest};
  }catch(e){
    // Leave partial snapshot for forensic inspection; never treat as verified.
    throw e;
  }
}

export class JobLedger {
  constructor(store){this.store=store;store.db.exec(`CREATE TABLE IF NOT EXISTS execution_jobs(
    id TEXT PRIMARY KEY,task_id TEXT NOT NULL REFERENCES tasks(id),agent_id TEXT NOT NULL,
    source_sha TEXT NOT NULL,plan TEXT NOT NULL,status TEXT NOT NULL,
    result TEXT,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);`);}
  get(id){const row=this.store.db.prepare('SELECT * FROM execution_jobs WHERE id=?').get(id);return row?this.#decode(row):null;}
  list(){return this.store.db.prepare('SELECT * FROM execution_jobs ORDER BY created_at,id').all().map(r=>this.#decode(r));}
  #decode(r){return {id:r.id,taskId:r.task_id,agentId:r.agent_id,sourceSha:r.source_sha,plan:JSON.parse(r.plan),status:r.status,result:r.result?JSON.parse(r.result):null,createdAt:r.created_at,updatedAt:r.updated_at};}
  enqueue({tasks,assignment,sourceSha,id=`JOB-${randomUUID()}`}){
    if(!SHA.test(sourceSha??''))throw Error('Invalid source revision');
    if(!/^JOB-[a-zA-Z0-9-]{8,80}$/.test(id))throw Error('Invalid job id');
    const plan=prepareExecutionPlan(tasks,assignment);
    const now=new Date().toISOString();const db=this.store.db;
    db.exec('BEGIN IMMEDIATE');try{
      // Ensure the supplied task snapshot still corresponds to persisted task state.
      const live=this.store.tasks().find(t=>t.id===plan.taskId);
      if(!live||JSON.stringify(live)!==JSON.stringify(tasks.find(t=>t.id===plan.taskId)))throw Error('Stale task snapshot');
      db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run(id,plan.taskId,plan.agentId,sourceSha,JSON.stringify(plan),'QUEUED',null,now,now);
      this.store.record('JOB_QUEUED',{id,taskId:plan.taskId,agentId:plan.agentId,sourceSha});db.exec('COMMIT');
      return this.get(id);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
  // Explicit operator recovery: after a process crash, RUNNING is not evidence of success.
  // The operator must first verify that no container from the interrupted run remains.
  recoverInterrupted({confirmedContainersStopped=false}={}){
    if(confirmedContainersStopped!==true)throw Error('Container cleanup confirmation required');
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const jobs=db.prepare("SELECT id FROM execution_jobs WHERE status='RUNNING' ORDER BY id").all();
      const now=new Date().toISOString();
      for(const {id} of jobs){
        db.prepare('UPDATE execution_jobs SET status=?,result=?,updated_at=? WHERE id=?')
          .run('INTERRUPTED',JSON.stringify({error:'Execution interrupted; completion unverified'}),now,id);
        this.store.record('JOB_INTERRUPTED',{id});
      }
      db.exec('COMMIT');return jobs.map(x=>x.id);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
  cancel(id){const db=this.store.db;db.exec('BEGIN IMMEDIATE');try{
    const job=this.get(id);if(!job||job.status!=='QUEUED')throw Error('Only queued jobs can be cancelled');
    db.prepare('UPDATE execution_jobs SET status=?,updated_at=? WHERE id=?').run('CANCELLED',new Date().toISOString(),id);
    this.store.record('JOB_CANCELLED',{id});db.exec('COMMIT');return this.get(id);
  }catch(e){db.exec('ROLLBACK');throw e;}}
  async execute(id,config,{runner=runIsolated,inventory=inventoryArtifacts,fence=null}={}){
    if(config?.execute!==true)throw Error('Explicit execution opt-in required');
    if(fence!==null&&typeof fence!=='function')throw Error('Invalid execution fence');
    if(fence)fence();
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');let job;
    try{
      job=this.get(id);if(!job||job.status!=='QUEUED')throw Error('Job not queued');
      const task=this.store.tasks().find(t=>t.id===job.taskId);
      if(!task||task.status!=='READY')throw Error('Task no longer ready');
      db.prepare('UPDATE execution_jobs SET status=?,updated_at=? WHERE id=?').run('RUNNING',new Date().toISOString(),id);
      this.store.record('JOB_STARTED',{id,taskId:job.taskId,sourceSha:job.sourceSha});db.exec('COMMIT');
    }catch(e){db.exec('ROLLBACK');throw e;}
    let result,status;
    try{
      const execution=await runner(job.plan,config);
      if(fence)fence();
      const artifacts=await inventory(config.output);
      if(fence)fence();
      result={exitCode:execution.exitCode,signal:execution.signal??null,success:execution.success===true,
        stdoutSha256:hash(execution.stdout??''),stderrSha256:hash(execution.stderr??''),artifacts};
      status=result.success?'COMPLETED':'FAILED';
    }catch(e){result={error:String(e.message||e).slice(0,500)};status='FAILED';}
    db.exec('BEGIN IMMEDIATE');try{
      const current=this.get(id);
      if(!current||current.status!=='RUNNING')throw Error('Execution fenced: job state changed; refusing stale completion');
      if(fence)fence();
      const changed=db.prepare("UPDATE execution_jobs SET status=?,result=?,updated_at=? WHERE id=? AND status='RUNNING'").run(status,JSON.stringify(result),new Date().toISOString(),id);
      if(changed.changes!==1)throw Error('Execution fenced: concurrent job update');
      this.store.record('JOB_FINISHED',{id,status,result});db.exec('COMMIT');
    }catch(e){db.exec('ROLLBACK');throw e;}
    return this.get(id);
  }
}
