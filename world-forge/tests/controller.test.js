import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {executeVerifiedJob} from '../src/controller.js';
const SHA='a'.repeat(40);
async function setup(){const dir=await mkdtemp(join(tmpdir(),'wf-controller-'));const store=new Store(join(dir,'db.sqlite'));
const task={id:'WF-200',title:'Controller test',owner:'FORGE',dependencies:[],status:'READY',risk:'LOW'};store.initialize([task]);const ledger=new JobLedger(store);
const assignment={taskId:task.id,agentId:'FORGE',writablePaths:['src/file.js'],productionAccess:false,secretAccess:false,networkAccess:false,maxAttempts:1};
const job=ledger.enqueue({tasks:[task],assignment,sourceSha:SHA});const workspace=join(dir,'workspace'),output=join(dir,'output'),snapshotParent=join(dir,'snapshots');
await Promise.all([mkdir(workspace),mkdir(output),mkdir(snapshotParent)]);
const config={execute:true,workspace,output,snapshotParent};const attest=async root=>({sha:SHA,clean:true,root});
return {dir,store,ledger,job,config,attest,cleanup:async()=>{store.close();await rm(dir,{recursive:true,force:true})}};}
test('verified controller snapshots output and records completion',async()=>{const x=await setup();try{
 const result=await executeVerifiedJob(x.ledger,x.job.id,x.config,{attest:x.attest,runner:async()=>{await writeFile(join(x.config.output,'result.txt'),'done');return {success:true,exitCode:0,stdout:'ok',stderr:''}}});
 assert.equal(result.job.status,'COMPLETED');assert.equal(result.snapshot.manifest.files[0].sha256.length,64);assert.equal(result.sourceAttestation.sha,SHA);assert.equal(x.store.verify(),4);
}finally{await x.cleanup()}});
test('rejects mismatched source without running or consuming job',async()=>{const x=await setup();try{let called=false;
 await assert.rejects(()=>executeVerifiedJob(x.ledger,x.job.id,x.config,{attest:async root=>({sha:'b'.repeat(40),clean:true,root}),runner:async()=>{called=true}}),/attestation/);
 assert.equal(called,false);assert.equal(x.ledger.get(x.job.id).status,'QUEUED');
}finally{await x.cleanup()}});
test('rejects nonempty output and overlapping paths before execution',async()=>{const x=await setup();try{
 await writeFile(join(x.config.output,'old.txt'),'old');await assert.rejects(()=>executeVerifiedJob(x.ledger,x.job.id,x.config,{attest:x.attest}),/empty/);
 await assert.rejects(()=>executeVerifiedJob(x.ledger,x.job.id,{...x.config,output:x.config.workspace},{attest:x.attest}),/disjoint/);
}finally{await x.cleanup()}});
test('snapshot failure records failed job, not successful job',async()=>{const x=await setup();try{
 const result=await executeVerifiedJob(x.ledger,x.job.id,x.config,{attest:x.attest,runner:async()=>({success:true,exitCode:0}),snapshot:async()=>{throw Error('snapshot refused')}});
 assert.equal(result.job.status,'FAILED');assert.match(result.job.result.error,/snapshot refused/);
}finally{await x.cleanup()}});
test('failed execution records failure without creating snapshot',async()=>{const x=await setup();try{
 const result=await executeVerifiedJob(x.ledger,x.job.id,x.config,{attest:x.attest,runner:async()=>({success:false,exitCode:1,stderr:'failed'})});
 assert.equal(result.job.status,'FAILED');assert.equal(result.snapshot,null);
}finally{await x.cleanup()}});
