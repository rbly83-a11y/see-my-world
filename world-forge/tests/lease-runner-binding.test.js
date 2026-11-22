import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,rm,readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {EventEmitter} from 'node:events';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {executeSupervisedJob} from '../src/execution-service.js';
import {runIsolated} from '../src/runner.js';
const image='node@sha256:'+'a'.repeat(64);
const plan={mode:'PREFLIGHT_ONLY',executionAuthorized:false,networkAccess:false,secretAccess:false,productionAccess:false,writablePaths:['src/module.js']};
async function fixture(t){const dir=await mkdtemp(join(tmpdir(),'wf-binding-'));t.after(()=>rm(dir,{recursive:true,force:true}));const store=new Store(join(dir,'db'));t.after(()=>store.close());store.initialize(JSON.parse(await readFile(new URL('../examples/tasks.json',import.meta.url),'utf8')));const tasks=store.tasks(),task=tasks.find(x=>x.status==='READY');const job=new JobLedger(store).enqueue({tasks,assignment:{taskId:task.id,agentId:task.owner,writablePaths:['src/module.js'],networkAccess:false,secretAccess:false,productionAccess:false,maxAttempts:1},sourceSha:'a'.repeat(40)});return {dir,store,job};}
test('supervised execution passes lease identity and records container name before execution',async t=>{const {store,job}=await fixture(t);let bound=false;await executeSupervisedJob(store,job.id,{execute:true},{owner:'worker_123',execute:async(_ledger,id,config)=>{assert.equal(config.jobId,id);assert.ok(config.leaseToken);await config.onContainerPrepared('world-forge-12345678-1234-1234-1234-123456789abc');const lease=new ExecutionSupervisor(store).get(id);assert.equal(lease.status,'ACTIVE');assert.equal(lease.container_name,'world-forge-12345678-1234-1234-1234-123456789abc');bound=true;return {};},cleanup:async()=>true});assert.equal(bound,true);assert.equal(new ExecutionSupervisor(store).get(job.id).status,'RELEASED');});
test('runner invokes container binding before spawning Docker',async t=>{const {dir}=await fixture(t);const workspace=join(dir,'workspace'),output=join(dir,'output');await mkdir(workspace);await mkdir(output);let bound=null,spawned=false;const fake=()=>{assert.ok(bound);spawned=true;const child=new EventEmitter();child.stdout=new EventEmitter();child.stderr=new EventEmitter();child.kill=()=>{};queueMicrotask(()=>child.emit('close',0,null));return child;};await runIsolated(plan,{workspace,output,image,command:'test',execute:true,onContainerPrepared:async name=>{bound=name;}},{spawnImpl:fake});assert.equal(spawned,true);assert.match(bound,/^world-forge-/);});
test('failed container binding prevents Docker spawn',async t=>{const {dir}=await fixture(t);const workspace=join(dir,'workspace'),output=join(dir,'output');await mkdir(workspace);await mkdir(output);let spawned=false;await assert.rejects(runIsolated(plan,{workspace,output,image,command:'test',execute:true,onContainerPrepared:()=>{throw Error('binding rejected');}},{spawnImpl:()=>{spawned=true;}}),/binding rejected/);assert.equal(spawned,false);});
