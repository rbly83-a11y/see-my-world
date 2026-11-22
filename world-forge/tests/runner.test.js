import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {EventEmitter} from 'node:events';
import {buildSandboxInvocation,runIsolated} from '../src/runner.js';
const image='node@sha256:'+'a'.repeat(64);
const plan={mode:'PREFLIGHT_ONLY',executionAuthorized:false,networkAccess:false,secretAccess:false,productionAccess:false,writablePaths:['src/demo.js']};
async function fixture(fn){const root=await mkdtemp(join(tmpdir(),'wf-runner-'));const workspace=join(root,'workspace'),output=join(root,'output');await mkdir(workspace);await mkdir(output);try{return await fn({workspace,output})}finally{await rm(root,{recursive:true,force:true})}}
test('builds bounded Docker arguments without launching',()=>fixture(async f=>{const x=await buildSandboxInvocation(plan,{...f,image,command:'test'});assert.equal(x.binary,'docker');for(const v of ['none','--read-only','ALL','no-new-privileges','65534:65534'])assert.ok(x.args.includes(v));assert.equal(x.args.at(-2),'node');assert.equal(x.args.at(-1),'--test');assert.ok(x.args.some(a=>a.includes('readonly')))}));
test('rejects unpinned image and arbitrary commands',()=>fixture(async f=>{await assert.rejects(buildSandboxInvocation(plan,{...f,image:'node:latest',command:'test'}),/pinned/);await assert.rejects(buildSandboxInvocation(plan,{...f,image,command:'shell'}),/allowlisted/)}));
test('rejects overlapping mounts',()=>fixture(async f=>assert.rejects(buildSandboxInvocation(plan,{workspace:f.workspace,output:f.workspace,image,command:'test'}),/disjoint/)));
test('rejects missing preflight',()=>fixture(async f=>assert.rejects(buildSandboxInvocation({...plan,executionAuthorized:true},{...f,image,command:'test'}),/Preflight/)));
test('never runs without explicit execute flag',()=>fixture(async f=>assert.rejects(runIsolated(plan,{...f,image,command:'test'}),/explicit/)));
test('runner uses shell:false and sanitized environment',()=>fixture(async f=>{let seen;const fake=(bin,args,options)=>{seen={bin,args,options};const c=new EventEmitter();c.stdout=new EventEmitter();c.stderr=new EventEmitter();c.kill=()=>{};queueMicrotask(()=>c.emit('close',0,null));return c;};const r=await runIsolated(plan,{...f,image,command:'version',execute:true},{spawnImpl:fake});assert.equal(r.success,true);assert.equal(seen.options.shell,false);assert.deepEqual(Object.keys(seen.options.env),['PATH']);}));
