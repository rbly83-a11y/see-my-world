import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {executeSupervisedJob,recoveryQueue} from '../src/execution-service.js';
async function setup(t){const dir=await mkdtemp(join(tmpdir(),'wf-service-'));t.after(()=>rm(dir,{recursive:true,force:true}));const store=new Store(join(dir,'db'));t.after(()=>store.close());store.initialize(JSON.parse(await readFile(new URL('../examples/tasks.json',import.meta.url),'utf8')));const ledger=new JobLedger(store);const tasks=store.tasks(),task=tasks.find(x=>x.status==='READY');const job=ledger.enqueue({tasks,assignment:{taskId:task.id,agentId:task.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:'a'.repeat(40)});return {store,job};}
test('supervised execution releases lease only after verified cleanup',async t=>{const {store,job}=await setup(t);const result=await executeSupervisedJob(store,job.id,{execute:true},{owner:'worker_123',execute:async()=>({job:{status:'COMPLETED'}}),cleanup:async()=>true});assert.equal(result.leaseReleased,true);assert.equal(new ExecutionSupervisor(store).get(job.id).status,'RELEASED');});
test('unverified cleanup retains lease for reconciliation',async t=>{const {store,job}=await setup(t);await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true},{owner:'worker_123',execute:async()=>({}),cleanup:async()=>false}),/Cleanup unverified/);assert.equal(new ExecutionSupervisor(store).get(job.id).status,'CLAIMED');});
test('execution exception still runs cleanup, then propagates',async t=>{const {store,job}=await setup(t);let called=false;await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true},{owner:'worker_123',execute:async()=>{throw Error('runner broke');},cleanup:async()=>{called=true;return true;}}),/runner broke/);assert.equal(called,true);assert.equal(new ExecutionSupervisor(store).get(job.id).status,'RELEASED');});
test('recovery queue includes expired leases',async t=>{const {store,job}=await setup(t);new ExecutionSupervisor(store).claim(job.id,{owner:'worker_123',now:1000,ttlMs:1000});const items=recoveryQueue(store,{now:3000});assert.equal(items[0].reason,'EXPIRED_LEASE');assert.equal(items[0].jobId,job.id);});
test('invalid configuration cannot claim lease',async t=>{const {store,job}=await setup(t);await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true},{owner:'worker_123'}),/cleanup verifier/);assert.equal(new ExecutionSupervisor(store).get(job.id),null);});

test('custom executor cannot bypass Docker verification by returning success',async t=>{
  const {store,job}=await setup(t);
  let cleaned=false;
  await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true,command:'test'},
    {owner:'worker_123',execute:async()=>({job:{status:'COMPLETED'}}),cleanup:async()=>{cleaned=true;return true;}}),
    /lacks independently verified startup evidence/);
  assert.equal(cleaned,true);
});
test('custom executor without Docker evidence retains lease when cleanup is unverified',async t=>{
  const {store,job}=await setup(t);
  await assert.rejects(()=>executeSupervisedJob(store,job.id,{execute:true,command:'test'},
    {owner:'worker_123',execute:async()=>({job:{status:'COMPLETED'}}),cleanup:async()=>false}),
    /Cleanup unverified/);
  assert.equal(new ExecutionSupervisor(store).get(job.id).status,'CLAIMED');
});
