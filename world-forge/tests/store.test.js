import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Store,signApproval } from '../src/store.js';
const seed=[{id:'A',title:'Canon',owner:'LEDGER',status:'READY',dependencies:[]},{id:'B',title:'Build',owner:'FORGE',status:'READY',dependencies:['A']}];
function fixture(fn){const dir=mkdtempSync(join(tmpdir(),'wf3-')),path=join(dir,'store.db');try{return fn(path);}finally{rmSync(dir,{recursive:true,force:true});}}
test('persistence across reopen and audit chain',()=>fixture(path=>{let s=new Store(path);s.initialize(seed);s.change('A','RUNNING','ATLAS');assert.equal(s.verify(),2);s.close();s=new Store(path);assert.equal(s.tasks().find(t=>t.id==='A').status,'RUNNING');assert.equal(s.verify(),2);s.close();}));
test('dependencies enforced and failed mutation atomic',()=>fixture(path=>{const s=new Store(path);s.initialize(seed);assert.throws(()=>s.change('B','RUNNING','ATLAS'),/Dependencies/);assert.equal(s.verify(),1);assert.equal(s.tasks().find(t=>t.id==='B').status,'READY');s.close();}));
test('acceptance cannot be spoofed via transition',()=>fixture(path=>{const s=new Store(path);s.initialize(seed);assert.throws(()=>s.change('A','ACCEPTED','ATLAS'),/not enabled/);s.close();}));
test('signed approval recorded, forged approval rejected',()=>fixture(path=>{const s=new Store(path);s.initialize(seed);const secret='a'.repeat(40),input={id:'p1',taskId:'A',kind:'FOUNDER',commitSha:'abc123',actor:'founder'};assert.throws(()=>s.addApproval({...input,signature:'0'.repeat(64)},secret),/Invalid/);s.addApproval({...input,signature:signApproval(input,secret)},secret);assert.equal(s.verify(),2);s.close();}));
test('audit tampering detected',()=>fixture(path=>{const s=new Store(path);s.initialize(seed);s.db.prepare("UPDATE events SET payload='{}' WHERE seq=1").run();assert.throws(()=>s.verify(),/integrity/);s.close();}));
test('duplicate approval rolls back audit event',()=>fixture(path=>{const s=new Store(path);s.initialize(seed);const secret='a'.repeat(40),input={id:'p1',taskId:'A',kind:'FOUNDER',commitSha:'abc123',actor:'founder'};const a={...input,signature:signApproval(input,secret)};s.addApproval(a,secret);assert.throws(()=>s.addApproval(a,secret));assert.equal(s.verify(),2);s.close();}));
