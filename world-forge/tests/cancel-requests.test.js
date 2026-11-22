import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {CancellationRequests} from '../src/cancel-requests.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';

test('durable cancellation intent is audit recorded and deduplicated',()=>{
 const dir=mkdtempSync(join(tmpdir(),'wf-cancel-'));const store=new Store(join(dir,'db.sqlite'));
 try{
  const db=store.db;new JobLedger(store);new ExecutionSupervisor(store);
  // Minimal relationally valid fixtures; exercise the request service, not the preflight.
  db.exec("INSERT INTO tasks(id,body,version) VALUES('WF-001','{}',1)");
  const now=new Date().toISOString();
  db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run('JOB-12345678','WF-001','FORGE','a'.repeat(40),'{}','RUNNING',null,now,now);
  db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run('JOB-12345678','worker_12345678','private-token','world-forge-12345678-1234-1234-1234-123456789abc','ACTIVE',Date.now()+60000,now);
  const service=new CancellationRequests(store);const request=service.request({jobId:'JOB-12345678',actor:'LOCAL_OPERATOR'});
  assert.equal(request.status,'PENDING');assert.equal(service.list().length,1);
  assert.throws(()=>service.request({jobId:'JOB-12345678',actor:'LOCAL_OPERATOR'}),/already pending/);
  assert.equal(new JobLedger(store).get('JOB-12345678').status,'RUNNING');
  assert.ok(store.verify()>0);
  assert.ok(!JSON.stringify(service.list()).includes('private-token'));
 }finally{store.close();rmSync(dir,{recursive:true,force:true});}
});

test('cancellation intent rejects jobs without active container ownership',()=>{
 const dir=mkdtempSync(join(tmpdir(),'wf-cancel-'));const store=new Store(join(dir,'db.sqlite'));
 try{const service=new CancellationRequests(store);assert.throws(()=>service.request({jobId:'JOB-12345678',actor:'LOCAL_OPERATOR'}),/not actively bound/);assert.deepEqual(service.list(),[]);}
 finally{store.close();rmSync(dir,{recursive:true,force:true});}
});
