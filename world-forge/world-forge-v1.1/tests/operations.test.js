import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {startDashboard} from '../src/server.js';
const viewer='v'.repeat(40),operator='o'.repeat(40);
async function setup(fn){
 const dir=mkdtempSync(join(tmpdir(),'wf-ops-')),path=join(dir,'test.db');
 const s=new Store(path);s.initialize([{id:'WF-001',owner:'LEDGER',title:'Canon',dependencies:[],status:'READY'}]);s.close();
 const server=startDashboard({dbPath:path,token:viewer,operatorToken:operator});
 await new Promise(r=>server.once('listening',r));
 const base=`http://127.0.0.1:${server.address().port}`;
 try{await fn({base,path});}finally{await new Promise(r=>server.close(r));rmSync(dir,{recursive:true,force:true});}
}
const post=(base,url,token,body,headers={})=>fetch(base+url,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
const draft={id:'WF-021',title:'Implement task API',owner:'ATLAS',dependencies:['WF-001'],status:'DRAFT'};
test('operator creates durable draft with audit record; viewer cannot write',async()=>setup(async({base,path})=>{
 assert.equal((await post(base,'/api/tasks',viewer,{task:draft,actor:'local-founder'})).status,403);
 const r=await post(base,'/api/tasks',operator,{task:draft,actor:'local-founder'});
 assert.equal(r.status,201);
 const store=new Store(path);assert.equal(store.tasks().length,2);assert.equal(store.verify(),2);store.close();
 assert.equal((await post(base,'/api/tasks',operator,{task:draft,actor:'local-founder'})).status,400);
}));
test('operator can transition draft but cannot bypass acceptance gate',async()=>setup(async({base,path})=>{
 await post(base,'/api/tasks',operator,{task:draft,actor:'local-founder'});
 assert.equal((await post(base,'/api/transitions',operator,{taskId:'WF-021',next:'READY',actor:'local-founder'})).status,200);
 assert.equal((await post(base,'/api/transitions',operator,{taskId:'WF-021',next:'RUNNING',actor:'local-founder'})).status,400);
 assert.equal((await post(base,'/api/transitions',operator,{taskId:'WF-021',next:'ACCEPTED',actor:'local-founder'})).status,400);
 const store=new Store(path);assert.equal(store.tasks().find(x=>x.id==='WF-021').status,'READY');assert.equal(store.verify(),3);store.close();
}));
test('rejects unexpected fields, cross-origin writes and oversized requests',async()=>setup(async({base})=>{
 assert.equal((await post(base,'/api/tasks',operator,{task:{...draft,canDeploy:true},actor:'local-founder'})).status,400);
 assert.equal((await post(base,'/api/tasks',operator,{task:draft,actor:'local-founder'},{Origin:'https://evil.example'})).status,403);
 const r=await fetch(base+'/api/tasks',{method:'POST',headers:{Authorization:'Bearer '+operator,'Content-Type':'application/json'},body:'x'.repeat(10000)});
 assert.equal(r.status,413);
}));
test('rejects nonloopback bind and token reuse',()=>{
 assert.throws(()=>startDashboard({dbPath:':memory:',token:viewer,operatorToken:viewer}),/Distinct/);
 assert.throws(()=>startDashboard({dbPath:':memory:',token:viewer,host:'0.0.0.0'}),/loopback/);
});
