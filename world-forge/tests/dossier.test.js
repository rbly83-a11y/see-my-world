import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../src/store.js';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
test('dossier binds local evidence to task and refuses merge authority',()=>{
 const dir=mkdtempSync(join(tmpdir(),'wf-dossier-'));const store=new Store(join(dir,'db.sqlite'));
 try {store.initialize([{id:'WF-001',title:'Canon registry',owner:'LEDGER',dependencies:[],status:'DRAFT'}]);
 const d=store.taskDossier('WF-001');assert.equal(d.task.id,'WF-001');assert.equal(d.events.length,1);assert.equal(d.readiness.authorizedForMerge,false);assert.equal(d.readiness.liveCiVerified,false);assert.equal(d.verifiedEvents,1);
 assert.throws(()=>store.taskDossier('WF-999'),/Unknown task/);
 }finally{store.close();rmSync(dir,{recursive:true,force:true})}
});
