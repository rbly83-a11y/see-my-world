import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Store } from '../src/store.js';
import { startDashboard } from '../src/server.js';
test('local read-only dashboard rejects unauthenticated requests and returns tasks',async()=>{
  const dir=mkdtempSync(join(tmpdir(),'wf-'));const path=join(dir,'test.db');const s=new Store(path);
  s.initialize([{id:'WF-001',owner:'LEDGER',title:'Canon',dependencies:[],status:'READY'}]);s.close();
  const token='0123456789abcdef0123456789abcdef';const server=startDashboard({dbPath:path,token});
  await new Promise(r=>server.once('listening',r));const base=`http://127.0.0.1:${server.address().port}`;
  try {
    assert.equal((await fetch(base+'/api/tasks')).status,401);
    const headers={Authorization:`Bearer ${token}`};
    const response=await fetch(base+'/api/tasks',{headers});assert.equal(response.status,200);
    assert.equal((await response.json()).tasks[0].id,'WF-001');
    assert.equal((await fetch(base+'/api/audit',{headers}).then(r=>r.json())).verifiedEvents,1);
    assert.equal((await fetch(base+'/api/tasks',{method:'POST',headers})).status,403);
  }finally{await new Promise(r=>server.close(r));rmSync(dir,{recursive:true,force:true});}
});
