import test from 'node:test';
import assert from 'node:assert/strict';
import {Store} from '../src/store.js';
import {listExecutionConflicts} from '../src/execution-conflicts.js';

test('conflict inventory starts empty and remains read-only',()=>{
  const store=new Store(':memory:');
  try{assert.deepEqual(listExecutionConflicts(store),[]);assert.deepEqual(listExecutionConflicts(store),[]);}
  finally{store.close();}
});

test('conflict inventory returns recorded evidence without changing it',()=>{
  const store=new Store(':memory:');
  try{
    listExecutionConflicts(store);
    store.db.prepare(`INSERT INTO execution_conflicts(job_id,container_name,reason,observed_job_status,observed_lease_status,created_at) VALUES(?,?,?,?,?,?)`).run('JOB-test','world-forge-test','VERIFIED_STOP_LEDGER_CONFLICT','COMPLETED','ACTIVE','2026-11-21T00:00:00Z');
    const items=listExecutionConflicts(store);
    assert.equal(items.length,1);assert.equal(items[0].jobStatus,'COMPLETED');
    assert.equal(items[0].resolvedAt,null);
    assert.deepEqual(listExecutionConflicts(store),items);
  }finally{store.close();}
});
