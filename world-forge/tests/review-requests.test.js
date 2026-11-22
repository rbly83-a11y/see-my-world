import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {agentRegistry} from '../src/registry.js';
const sha='a'.repeat(40);
function fixture(){const dir=mkdtempSync(join(tmpdir(),'wf08-'));const store=new Store(join(dir,'test.db'));store.initialize([{id:'WF-001',title:'Test',owner:'CANVAS',dependencies:[],status:'REVIEW'}]);return {store,cleanup(){store.close();rmSync(dir,{recursive:true,force:true})}};}
test('registry contains 24 unique non-deploying agents',()=>{const a=agentRegistry().agents;assert.equal(a.length,24);assert.equal(new Set(a.map(x=>x.id)).size,24);assert.ok(a.every(x=>!x.canDeploy&&!x.canMerge));});
test('review request persists across database restart',()=>{const f=fixture();const path=f.store.db.name;const result=f.store.requestReview({id:'RR-0001',taskId:'WF-001',commitSha:sha,requestedBy:'operator',reviewer:'VERITY'});assert.equal(result.status,'PENDING');assert.equal(f.store.reviewRequests().length,1);assert.equal(f.store.verify(),2);f.cleanup();});
test('self review rejected',()=>{const f=fixture();try{assert.throws(()=>f.store.requestReview({id:'RR-0001',taskId:'WF-001',commitSha:sha,requestedBy:'operator',reviewer:'CANVAS'}),/Self-review/);assert.equal(f.store.reviewRequests().length,0);}finally{f.cleanup();}});
test('invalid revision rejected',()=>{const f=fixture();try{assert.throws(()=>f.store.requestReview({id:'RR-0001',taskId:'WF-001',commitSha:'bad',requestedBy:'operator',reviewer:'VERITY'}),/commit SHA/);}finally{f.cleanup();}});
test('review requests cannot be duplicated',()=>{const f=fixture();const r={id:'RR-0001',taskId:'WF-001',commitSha:sha,requestedBy:'operator',reviewer:'VERITY'};try{f.store.requestReview(r);assert.throws(()=>f.store.requestReview(r));assert.equal(f.store.reviewRequests().length,1);assert.equal(f.store.verify(),2);}finally{f.cleanup();}});
