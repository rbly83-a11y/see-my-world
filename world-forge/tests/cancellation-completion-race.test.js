import {listExecutionConflicts} from '../src/execution-conflicts.js';
import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {cancelActiveJob} from '../src/cancellation.js';

const containerName='world-forge-12345678-1234-1234-1234-123456789abc';
async function fixture(t){
  const dir=await mkdtemp(join(tmpdir(),'wf-race-'));
  t.after(()=>rm(dir,{recursive:true,force:true}));
  const store=new Store(join(dir,'db'));
  t.after(()=>store.close());
  store.initialize(JSON.parse(await readFile(new URL('../examples/tasks.json',import.meta.url),'utf8')));
  const ledger=new JobLedger(store),sup=new ExecutionSupervisor(store);
  const tasks=store.tasks(),task=tasks.find(t=>t.status==='READY');
  const job=ledger.enqueue({tasks,assignment:{taskId:task.id,agentId:task.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:'a'.repeat(40)});
  const lease=sup.claim(job.id,{owner:'worker_123'});
  sup.attach(job.id,lease.token,containerName);
  return {store,ledger,sup,job,lease,args:{jobId:job.id,owner:'worker_123',leaseToken:lease.token,containerName}};
}
function deferred(){let resolve;const promise=new Promise(r=>resolve=r);return {promise,resolve};}
const inventory=async()=>[];
const runnerResult={exitCode:0,success:true,stdout:'ok',stderr:''};

test('verified cancellation wins while runner is active; stale success cannot commit',async t=>{
  const f=await fixture(t),started=deferred(),resume=deferred();
  const run=f.ledger.execute(f.job.id,{execute:true},{runner:async()=>{started.resolve();await resume.promise;return runnerResult;},inventory});
  await started.promise;
  const cancel=await cancelActiveJob(f.store,{...f.args,stop:async()=>({confirmed:true,containerName})});
  assert.equal(cancel.confirmed,true);
  resume.resolve();
  await assert.rejects(run,/Execution fenced: job state changed/);
  assert.equal(f.ledger.get(f.job.id).status,'INTERRUPTED');
  assert.equal(f.sup.get(f.job.id).status,'RELEASED');
  assert.ok(f.store.verify()>0);
});

test('completed execution wins; cancellation cannot overwrite completed job',async t=>{
  const f=await fixture(t);
  const run=await f.ledger.execute(f.job.id,{execute:true},{runner:async()=>runnerResult,inventory});
  assert.equal(run.status,'COMPLETED');
  let stopCalled=false;
  await assert.rejects(cancelActiveJob(f.store,{...f.args,stop:async()=>{stopCalled=true;return {confirmed:true,containerName};}}),/not eligible/);
  assert.equal(stopCalled,false);
  assert.equal(f.ledger.get(f.job.id).status,'COMPLETED');
});

test('completion during asynchronous container stop cannot be overwritten by cancellation',async t=>{
  const f=await fixture(t),entered=deferred(),resume=deferred();
  f.store.db.prepare("UPDATE execution_jobs SET status='RUNNING' WHERE id=?").run(f.job.id);
  const cancellation=cancelActiveJob(f.store,{...f.args,stop:async()=>{entered.resolve();await resume.promise;return {confirmed:true,containerName};}});
  await entered.promise;
  f.store.db.prepare("UPDATE execution_jobs SET status='COMPLETED' WHERE id=?").run(f.job.id);
  resume.resolve();
  await assert.rejects(cancellation,/Concurrent state change/);
  assert.equal(f.ledger.get(f.job.id).status,'COMPLETED');
  assert.equal(f.sup.get(f.job.id).status,'ACTIVE');
  const conflicts=listExecutionConflicts(f.store);
  assert.equal(conflicts.length,1);
  assert.equal(conflicts[0].jobStatus,'COMPLETED');
  assert.equal(conflicts[0].reason,'VERIFIED_STOP_LEDGER_CONFLICT');
  assert.ok(f.store.verify()>0);
});

test('unverified stop does not interrupt active execution',async t=>{
  const f=await fixture(t),started=deferred(),resume=deferred();
  const run=f.ledger.execute(f.job.id,{execute:true},{runner:async()=>{started.resolve();await resume.promise;return runnerResult;},inventory});
  await started.promise;
  const cancel=await cancelActiveJob(f.store,{...f.args,stop:async()=>({confirmed:false,reason:'DOCKER_UNAVAILABLE',containerName})});
  assert.equal(cancel.confirmed,false);
  resume.resolve();
  assert.equal((await run).status,'COMPLETED');
  assert.equal(f.sup.get(f.job.id).status,'ACTIVE');
  assert.equal(listExecutionConflicts(f.store).length,0);
});
