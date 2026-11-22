import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID,createHash} from 'node:crypto';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {ExecutionObservations} from '../src/execution-observations.js';
import {ContainerAcknowledgments} from '../src/container-acknowledgment.js';
function fixture(){
  const store=new Store(':memory:');new JobLedger(store);new ExecutionSupervisor(store);
  const obs=new ExecutionObservations(store),ack=new ContainerAcknowledgments(store);
  const id='JOB-'+randomUUID(),name='world-forge-'+randomUUID(),token=randomUUID(),now=new Date().toISOString();
  store.db.prepare('INSERT INTO tasks(id,body) VALUES(?,?)').run('TASK-1',JSON.stringify({id:'TASK-1',title:'Example',owner:'FORGE',dependencies:[],status:'RUNNING'}));
  store.db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run(id,'TASK-1','FORGE','a'.repeat(40),'{}','RUNNING',null,now,now);
  store.db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run(id,'worker',token,name,'ACTIVE',Date.now()+60000,now);
  const containerId='a'.repeat(64);
  const exec=async(_binary,args)=>({stdout:JSON.stringify({Id:containerId,Name:'/'+name,State:{Running:true},Config:{Labels:{'world-forge.job-id':id,'world-forge.lease-sha256':createHash('sha256').update(token).digest('hex')}}})});
  return {store,obs,ack,id,name,token,containerId,exec};
}
test('independently verified Docker container ID persisted with audit event',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);x.obs.cliSpawned(x.id,x.token,x.name);const r=await x.ack.verifyAndRecord(x.id,x.token,{exec:x.exec});assert.equal(r.containerId,x.containerId);assert.equal(x.ack.get(x.id).containerId,x.containerId);assert.ok(x.store.db.prepare("SELECT * FROM events WHERE kind='DOCKER_CONTAINER_VERIFIED'").get());x.store.close();});
test('CLI spawn alone is not a creation acknowledgment',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);x.obs.cliSpawned(x.id,x.token,x.name);assert.equal(x.ack.get(x.id),null);x.store.close();});
test('ownership mismatch cannot persist creation',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);x.obs.cliSpawned(x.id,x.token,x.name);const r=await x.ack.verifyAndRecord(x.id,x.token,{exec:async()=>({stdout:JSON.stringify({Id:x.containerId,Name:'/'+x.name,State:{Running:true},Config:{Labels:{}}})})});assert.equal(r.verified,false);assert.equal(x.ack.get(x.id),null);x.store.close();});
test('missing spawn observation blocks inspection',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);await assert.rejects(x.ack.verifyAndRecord(x.id,x.token,{exec:x.exec}),/spawned/);x.store.close();});
test('lease revoked during inspection prevents persistence',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);x.obs.cliSpawned(x.id,x.token,x.name);await assert.rejects(x.ack.verifyAndRecord(x.id,x.token,{exec:async(...args)=>{x.store.db.prepare("UPDATE execution_leases SET status='RELEASED' WHERE job_id=?").run(x.id);return x.exec(...args);}}),/changed/);assert.equal(x.ack.get(x.id),null);x.store.close();});
test('repeated verification is idempotent for the same Docker ID',async()=>{const x=fixture();x.obs.prepared(x.id,x.token,x.name);x.obs.cliSpawned(x.id,x.token,x.name);await x.ack.verifyAndRecord(x.id,x.token,{exec:x.exec});const r=await x.ack.verifyAndRecord(x.id,x.token,{exec:x.exec});assert.equal(r.alreadyRecorded,true);assert.equal(x.store.db.prepare("SELECT count(*) n FROM events WHERE kind='DOCKER_CONTAINER_VERIFIED'").get().n,1);x.store.close();});
