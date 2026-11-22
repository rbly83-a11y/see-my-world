import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor,stopContainer} from '../src/supervisor.js';
const sha='a'.repeat(40);
async function setup(t){const dir=await mkdtemp(join(tmpdir(),'wf-supervisor-'));t.after(()=>rm(dir,{recursive:true,force:true}));const store=new Store(join(dir,'db.sqlite'));t.after(()=>store.db.close());store.initialize(JSON.parse((await import('node:fs/promises')).readFile?await (await import('node:fs/promises')).readFile(new URL('../examples/tasks.json',import.meta.url),'utf8'):'[]'));const jobs=new JobLedger(store);return {store,jobs,sup:new ExecutionSupervisor(store)};}
function queue({store,jobs}){const tasks=store.tasks();const ready=tasks.find(t=>t.status==='READY');assert.ok(ready,'fixture has ready task');return jobs.enqueue({tasks,assignment:{taskId:ready.id,agentId:ready.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:sha});}
test('lease claim exclusive and never stolen after expiry',async t=>{const x=await setup(t),j=queue(x),l=x.sup.claim(j.id,{owner:'worker_123',now:1000,ttlMs:2000});assert.ok(l.token);assert.throws(()=>x.sup.claim(j.id,{owner:'worker_456',now:5000}),/already exists/);assert.equal(x.sup.expired(5000).length,1);});
test('attach, heartbeat and confirmed release',async t=>{const x=await setup(t),j=queue(x),l=x.sup.claim(j.id,{owner:'worker_123',now:1000,ttlMs:5000});const name='world-forge-12345678-1234-1234-1234-123456789abc';assert.equal(x.sup.attach(j.id,l.token,name,{now:2000}).status,'ACTIVE');assert.equal(x.sup.heartbeat(j.id,l.token,{now:3000,ttlMs:6000}).expires_at,9000);assert.throws(()=>x.sup.release(j.id,l.token),/confirmation/);assert.equal(x.sup.release(j.id,l.token,{containerStopped:true,now:4000}).status,'RELEASED');});
test('reject forged token and expired heartbeat',async t=>{const x=await setup(t),j=queue(x),l=x.sup.claim(j.id,{owner:'worker_123',now:1000,ttlMs:2000});assert.throws(()=>x.sup.heartbeat(j.id,'bad',{now:2000}),/not renewable/);assert.throws(()=>x.sup.heartbeat(j.id,l.token,{now:3000}),/not renewable/);});
test('reject unsafe container identifiers',async()=>{await assert.rejects(()=>stopContainer('other-container'),/unsafe/);});
test('stop invokes only docker rm --force on validated name',async()=>{let seen;const name='world-forge-12345678-1234-1234-1234-123456789abc';const result=await stopContainer(name,{exec:async(...args)=>{seen=args;return {stdout:''};}});assert.deepEqual(seen[1],['rm','--force',name]);assert.equal(result.stopCommandSucceeded,true);});
