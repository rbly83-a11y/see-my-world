import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {cancelActiveJob} from '../src/cancellation.js';
const name='world-forge-12345678-1234-1234-1234-123456789abc';
async function fixture(t){
 const dir=await mkdtemp(join(tmpdir(),'wf-cancel-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 const store=new Store(join(dir,'store.db'));t.after(()=>store.db.close());
 store.initialize(JSON.parse(await readFile(new URL('../examples/tasks.json',import.meta.url),'utf8')));
 const ledger=new JobLedger(store),sup=new ExecutionSupervisor(store),tasks=store.tasks(),ready=tasks.find(x=>x.status==='READY');
 const job=ledger.enqueue({tasks,assignment:{taskId:ready.id,agentId:ready.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:'a'.repeat(40)});
 const lease=sup.claim(job.id,{owner:'worker_123'});sup.attach(job.id,lease.token,name);
 store.db.prepare("UPDATE execution_jobs SET status='RUNNING' WHERE id=?").run(job.id);
 return {store,ledger,sup,job,lease,args:{jobId:job.id,owner:'worker_123',leaseToken:lease.token,containerName:name}};
}
test('verified removal interrupts job and releases lease with audit',async t=>{const f=await fixture(t);const r=await cancelActiveJob(f.store,{...f.args,stop:async()=>({confirmed:true,containerName:name})});assert.equal(r.confirmed,true);assert.equal(f.ledger.get(f.job.id).status,'INTERRUPTED');assert.equal(f.sup.get(f.job.id).status,'RELEASED');assert.ok(f.store.verify()>0);});
test('unverified cleanup leaves running job and lease untouched',async t=>{const f=await fixture(t);const r=await cancelActiveJob(f.store,{...f.args,stop:async()=>({confirmed:false,containerName:name,reason:'DAEMON_DOWN'})});assert.equal(r.confirmed,false);assert.equal(f.ledger.get(f.job.id).status,'RUNNING');assert.equal(f.sup.get(f.job.id).status,'ACTIVE');});
test('wrong lease token refuses to invoke Docker',async t=>{const f=await fixture(t);let called=false;await assert.rejects(cancelActiveJob(f.store,{...f.args,leaseToken:'forged',stop:async()=>{called=true;}}),/mismatch/);assert.equal(called,false);});
test('wrong container refuses to invoke Docker',async t=>{const f=await fixture(t);await assert.rejects(cancelActiveJob(f.store,{...f.args,containerName:'world-forge-aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',stop:async()=>({confirmed:true,containerName:name})}),/mismatch/);});
test('concurrent completion refuses to overwrite successful job',async t=>{const f=await fixture(t);await assert.rejects(cancelActiveJob(f.store,{...f.args,stop:async()=>{f.store.db.prepare("UPDATE execution_jobs SET status='COMPLETED' WHERE id=?").run(f.job.id);return {confirmed:true,containerName:name};}}),/Concurrent state change/);assert.equal(f.ledger.get(f.job.id).status,'COMPLETED');assert.equal(f.sup.get(f.job.id).status,'ACTIVE');});
test('wrong confirmed container name is not accepted',async t=>{const f=await fixture(t);const r=await cancelActiveJob(f.store,{...f.args,stop:async()=>({confirmed:true,containerName:'different'})});assert.equal(r.confirmed,false);assert.equal(f.ledger.get(f.job.id).status,'RUNNING');});
