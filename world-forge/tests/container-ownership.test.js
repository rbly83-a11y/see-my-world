import test from 'node:test';
import assert from 'node:assert/strict';
import {ownershipLabels,verifyContainerOwnership,stopOwnedContainer} from '../src/container-ownership.js';
const name='world-forge-12345678-1234-1234-1234-123456789abc';
const jobId='JOB-12345678-1234-1234-1234-123456789abc';
const leaseToken='12345678-1234-1234-1234-123456789abc';
const id='a'.repeat(64),identity={jobId,leaseToken};
const fixture=(labels=ownershipLabels(identity))=>JSON.stringify({Name:'/'+name,Id:id,State:{Running:true},Config:{Labels:labels}});
test('valid ownership inspection verifies both job and lease fingerprint',async()=>{
 const r=await verifyContainerOwnership(name,identity,{exec:async()=>({stdout:fixture()})});assert.equal(r.verified,true);assert.equal(r.containerId,id);
});
test('mismatched label rejects ownership',async()=>{
 const r=await verifyContainerOwnership(name,identity,{exec:async()=>({stdout:fixture({'world-forge.job-id':jobId})})});assert.equal(r.reason,'OWNERSHIP_MISMATCH');
});
test('malformed inspection fails closed',async()=>{
 const r=await verifyContainerOwnership(name,identity,{exec:async()=>({stdout:'oops'})});assert.equal(r.verified,false);
});
test('daemon error fails closed',async()=>{
 const r=await verifyContainerOwnership(name,identity,{exec:async()=>{throw Error('offline')}});assert.equal(r.reason,'INSPECTION_UNAVAILABLE');
});
test('owned stop uses inspected ID and verifies absence',async()=>{
 const calls=[];const r=await stopOwnedContainer(name,identity,{exec:async(_bin,args)=>{calls.push(args);if(args[0]==='inspect')return {stdout:fixture()};if(args[0]==='ps')return {stdout:''};return {stdout:''};}});
 assert.equal(r.confirmed,true);assert.deepEqual(calls[1].slice(0,3),['rm','--force',id]);
});
test('stop refuses mismatched ownership without removing anything',async()=>{
 let calls=0;const r=await stopOwnedContainer(name,identity,{exec:async()=>{calls++;return {stdout:fixture({})}}});assert.equal(r.confirmed,false);assert.equal(calls,1);
});
test('still present after removal fails closed',async()=>{
 const r=await stopOwnedContainer(name,identity,{exec:async(_bin,args)=>({stdout:args[0]==='inspect'?fixture():args[0]==='ps'?`${id} ${name}\n`:''})});assert.equal(r.reason,'STILL_PRESENT');
});
