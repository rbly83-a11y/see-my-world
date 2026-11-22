import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {CancellationRequests} from '../src/cancel-requests.js';
import {processCancellation} from '../src/cancellation-worker.js';
const container='world-forge-12345678-1234-1234-1234-123456789abc';
function fixture(t){const dir=mkdtempSync(join(tmpdir(),'wf-worker-'));const store=new Store(join(dir,'db.sqlite'));t.after(()=>{store.close();rmSync(dir,{recursive:true,force:true});});new JobLedger(store);new ExecutionSupervisor(store);store.db.exec("INSERT INTO tasks(id,body,version) VALUES('WF-001','{}',1)");const now=new Date().toISOString();store.db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run('JOB-12345678','WF-001','FORGE','a'.repeat(40),'{}','RUNNING',null,now,now);store.db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run('JOB-12345678','worker_12345678','private-token',container,'ACTIVE',Date.now()+60000,now);const requests=new CancellationRequests(store);const request=requests.request({jobId:'JOB-12345678',actor:'LOCAL_OPERATOR'});return {store,requests,request};}
test('worker verifies stop and reconciles request, job and lease',async t=>{const f=fixture(t);const r=await processCancellation(f.store,{requestId:f.request.id,stop:async()=>({confirmed:true,containerName:container})});assert.equal(r.confirmed,true);assert.equal(f.requests.list()[0].status,'RECONCILED');assert.equal(new JobLedger(f.store).get('JOB-12345678').status,'INTERRUPTED');assert.equal(new ExecutionSupervisor(f.store).get('JOB-12345678').status,'RELEASED');assert.ok(f.store.verify()>0);});
test('unverified stop remains pending',async t=>{const f=fixture(t);const r=await processCancellation(f.store,{requestId:f.request.id,stop:async()=>({confirmed:false,containerName:container,reason:'DAEMON_DOWN'})});assert.equal(r.confirmed,false);assert.equal(f.requests.list()[0].status,'PENDING');});
test('changed lease blocks Docker invocation',async t=>{const f=fixture(t);f.store.db.prepare('UPDATE execution_leases SET token=?').run('changed');let called=false;await assert.rejects(processCancellation(f.store,{requestId:f.request.id,stop:async()=>{called=true;}}),/Lease changed/);assert.equal(called,false);});
test('duplicate concurrent processing is rejected',async t=>{const f=fixture(t);let release;const hold=new Promise(resolve=>release=resolve);let entered;const started=new Promise(resolve=>entered=resolve);const first=processCancellation(f.store,{requestId:f.request.id,stop:async()=>{entered();await hold;return {confirmed:true,containerName:container};}});await started;await assert.rejects(processCancellation(f.store,{requestId:f.request.id,stop:async()=>({confirmed:true,containerName:container})}),/UNIQUE constraint/);release();await first;});
