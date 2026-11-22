import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {buildSandboxInvocation} from '../src/runner.js';
import {ownershipLabels} from '../src/container-ownership.js';
const image='node@sha256:'+'a'.repeat(64);
const jobId='JOB-12345678-1234-1234-1234-123456789abc';
const leaseToken='87654321-4321-4321-4321-cba987654321';
const plan={mode:'PREFLIGHT_ONLY',executionAuthorized:false,networkAccess:false,secretAccess:false,productionAccess:false,writablePaths:['src/demo.js']};
async function fixture(fn){const root=await mkdtemp(join(tmpdir(),'wf-labels-'));const workspace=join(root,'workspace'),output=join(root,'output');await mkdir(workspace);await mkdir(output);try{return await fn({workspace,output})}finally{await rm(root,{recursive:true,force:true})}}
test('runner includes expected ownership labels in Docker invocation',()=>fixture(async f=>{
 const invocation=await buildSandboxInvocation(plan,{...f,image,command:'test',jobId,leaseToken});
 const actual=invocation.args.flatMap((x,i)=>x==='--label'?[invocation.args[i+1]]:[]);
 const expected=ownershipLabels({jobId,leaseToken});
 assert.deepEqual(actual,Object.entries(expected).map(([k,v])=>`${k}=${v}`));
 assert.ok(!invocation.args.join(' ').includes(leaseToken));
 assert.equal(expected['world-forge.lease-sha256'],createHash('sha256').update(leaseToken).digest('hex'));
}));
test('runner rejects partial job and lease identity',()=>fixture(async f=>{
 await assert.rejects(buildSandboxInvocation(plan,{...f,image,command:'test',jobId}),/together/);
 await assert.rejects(buildSandboxInvocation(plan,{...f,image,command:'test',leaseToken}),/together/);
}));
test('runner rejects malformed job identity rather than launching',()=>fixture(async f=>{
 await assert.rejects(buildSandboxInvocation(plan,{...f,image,command:'test',jobId:'JOB-bad',leaseToken}),/Invalid job ID/);
}));
