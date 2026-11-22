import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {executeSupervisedJob} from '../src/execution-service.js';
import {ContainerAcknowledgments} from '../src/container-acknowledgment.js';
const name='world-forge-12345678-1234-1234-1234-123456789abc';
async function setup(t){const dir=await mkdtemp(join(tmpdir(),'wf-mandatory-'));t.after(()=>rm(dir,{recursive:true,force:true}));const store=new Store(join(dir,'db'));t.after(()=>store.close());store.initialize(JSON.parse(await readFile(new URL('../examples/tasks.json',import.meta.url),'utf8')));const ledger=new JobLedger(store);const tasks=store.tasks(),task=tasks.find(x=>x.status==='READY');const job=ledger.enqueue({tasks,assignment:{taskId:task.id,agentId:task.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:'a'.repeat(40)});return {store,job};}
const execute=async(ledger,id,config)=>{
  ledger.store.db.prepare("UPDATE execution_jobs SET status='RUNNING' WHERE id=?").run(id);
  await config.onContainerPrepared(name);
  await config.onDockerCliSpawned(name);
  return {ok:true};
};
test('Docker supervised execution records actual container ID without caller opt-in',async t=>{
  const {store,job}=await setup(t);
  const dockerExec=async(_cmd,args)=>({stdout:JSON.stringify({Id:'a'.repeat(64),Name:'/'+name,State:{Running:true},Config:{Labels:{'world-forge.job-id':job.id,'world-forge.lease-sha256':createHash('sha256').update(store.db.prepare('SELECT token FROM execution_leases WHERE job_id=?').get(job.id).token).digest('hex')}}})});
  await executeSupervisedJob(store,job.id,{execute:true,command:'test'},{owner:'worker_123',execute,cleanup:async()=>true,dockerExec,ackTimeoutMs:100,ackPollMs:1});
  assert.equal(new ContainerAcknowledgments(store).get(job.id).containerId,'a'.repeat(64));
});
test('Docker supervised execution rejects unverified identity even if optional callback claims success',async t=>{
  const {store,job}=await setup(t);
  await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true,command:'test'},{owner:'worker_123',execute,cleanup:async()=>true,acknowledge:async()=>({verified:true}),dockerExec:async()=>({stdout:'{}'}),ackTimeoutMs:5,ackPollMs:1}),/timed out or unverified/);
  assert.equal(new ContainerAcknowledgments(store).get(job.id),null);
});
test('invalid Docker polling bounds rejected before lease claim',async t=>{
  const {store,job}=await setup(t);
  await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true,command:'test'},{owner:'worker_123',cleanup:async()=>true,ackTimeoutMs:0}),/polling bounds/);
});
