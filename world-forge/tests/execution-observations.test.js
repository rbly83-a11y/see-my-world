import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {ExecutionObservations} from '../src/execution-observations.js';
import {randomUUID} from 'node:crypto';
function setup(){const store=new Store(':memory:');const ledger=new JobLedger(store);const supervisor=new ExecutionSupervisor(store);const observations=new ExecutionObservations(store);return {store,ledger,supervisor,observations};}
function fixture(){const x=setup(),id='JOB-'+randomUUID(),name='world-forge-'+randomUUID(),token=randomUUID(),now=new Date().toISOString();x.store.db.prepare('INSERT INTO tasks(id,body) VALUES(?,?)').run('TASK-1',JSON.stringify({id:'TASK-1',title:'Example',owner:'FORGE',dependencies:[],status:'RUNNING'}));x.store.db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run(id,'TASK-1','FORGE','a'.repeat(40),'{}','QUEUED',null,now,now);x.store.db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run(id,'worker-0001',token,name,'ACTIVE',Date.now()+60000,now);return {...x,id,name,token};}
test('preparation does not claim Docker container creation',()=>{const x=fixture();const r=x.observations.prepared(x.id,x.token,x.name);assert.equal(r.cliSpawnedAt,null);assert.equal(x.observations.get(x.id).containerName,x.name);x.store.close();});
test('Docker CLI spawn is recorded and audited, not called container creation',()=>{const x=fixture();x.observations.prepared(x.id,x.token,x.name);assert.ok(x.observations.cliSpawned(x.id,x.token,x.name).cliSpawnedAt);assert.ok(x.store.verify()>=2);x.store.close();});
test('wrong lease token cannot record preparation',()=>{const x=fixture();assert.throws(()=>x.observations.prepared(x.id,'wrong',x.name),/bound/);assert.equal(x.observations.get(x.id),null);x.store.close();});
test('CLI spawn cannot be recorded before preparation',()=>{const x=fixture();assert.throws(()=>x.observations.cliSpawned(x.id,x.token,x.name),/bound/);x.store.close();});
test('duplicate CLI spawn observation rejected',()=>{const x=fixture();x.observations.prepared(x.id,x.token,x.name);x.observations.cliSpawned(x.id,x.token,x.name);assert.throws(()=>x.observations.cliSpawned(x.id,x.token,x.name),/bound/);x.store.close();});
