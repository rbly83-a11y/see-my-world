import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {inspectCancellationRecovery} from '../src/cancellation-recovery.js';

async function withStore(fn){const dir=mkdtempSync(join(tmpdir(),'wf-recovery-'));const s=new Store(join(dir,'db.sqlite'));try{return await fn(s);}finally{s.db.close();rmSync(dir,{recursive:true,force:true});}}
test('empty recovery queue is empty',async()=>withStore(async s=>assert.deepEqual(await inspectCancellationRecovery(s),[])));
test('orphan claim is flagged without destructive recovery',async()=>withStore(async s=>{
  s.db.exec("CREATE TABLE cancellation_claims(request_id TEXT PRIMARY KEY,created_at TEXT NOT NULL)");
  s.db.prepare('INSERT INTO cancellation_claims VALUES (?,?)').run('CANCEL-00000000-0000-0000-0000-000000000001','2026-01-01');
  const items=await inspectCancellationRecovery(s,{inspect:async()=>{throw Error('should not call')}});
  assert.equal(items.length,1);assert.equal(items[0].requestStatus,'MISSING');
  assert.equal(items[0].action,'MANUAL_RECONCILIATION_REQUIRED');
  assert.equal(s.db.prepare('SELECT COUNT(*) AS n FROM cancellation_claims').get().n,1);
}));
