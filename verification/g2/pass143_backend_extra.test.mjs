// Pass 143 supplementary, read-only-to-repository contract tests.
// Place this file in apps/see-my-world/test/pass143_backend_extra.test.mjs
// and run: node --test test/pass143_backend_extra.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createApp } from '../src/server.js';
import { FIXTURE_PAYLOADS } from '../src/fixtures.js';
const FUTURE='2999-01-01T00:00:00.000Z';
const OWNER='owner-test-143', OTHER='other-test-143';
async function setup(t){
 const dataDir=await mkdtemp(join(tmpdir(),'paravex-143-'));
 const app=createApp({dataDir,ownerTokens:{[OWNER]:'owner-143',[OTHER]:'other-143'}});
 await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
 t.after(async()=>{app.server.closeAllConnections?.();await new Promise(resolve=>app.server.close(resolve));app.service.close();await rm(dataDir,{recursive:true,force:true})});
 const base=`http://127.0.0.1:${app.server.address().port}`;
 const req=async(method,path,{owner,invite,credential,body}={})=>{
  const res=await fetch(base+path,{method,headers:{'content-type':'application/json',...(owner?{'x-owner-token':owner}:{}),...(invite?{'x-invitation-token':invite}:{}),...(credential?{'x-visitor-credential':credential}:{})},...(body!==undefined?{body:JSON.stringify(body)}:{})});
  return {status:res.status,json:await res.json(),cache:res.headers.get('cache-control')};
 };
 const world='pass143-world';
 const create=await req('POST','/api/studio/worlds',{owner:OWNER,body:{worldId:world}});
 assert.equal(create.status,201);
 const register=async(recipientId)=>{const r=await req('POST','/api/studio/visitor-principals',{owner:OWNER,body:{recipientId}});assert.equal(r.status,201);return r.json.visitorCredential};
 const grant=async(resolution='CONTINENT',recipientId='recipient-143',expiresAt=FUTURE)=>{const r=await req('POST',`/api/studio/worlds/${world}/grants`,{owner:OWNER,body:{recipientId,resolution,expiresAt}});assert.equal(r.status,201);return r.json};
 const visit=(invite,credential)=>req('GET',`/api/visitor/worlds/${world}/perspective`,{invite,credential});
 return {app,req,world,register,grant,visit};
}
for(const resolution of ['CONTINENT','COAST','HARBOUR']){
 test(`P143 fixture parity and privacy ${resolution}`,async t=>{
  const s=await setup(t);const credential=await s.register('recipient-143');const g=await s.grant(resolution);
  const r=await s.visit(g.invitationToken,credential);
  assert.equal(r.status,200);assert.deepEqual(r.json.perspective,FIXTURE_PAYLOADS[resolution]);
  assert.equal(r.cache,'no-store');
  const raw=JSON.stringify(r.json.perspective);
  for(const forbidden of ['"strength"','"testimony"','SYN-T5','SYN-T6'])assert.equal(raw.includes(forbidden),false);
  assert.equal(r.json.perspective.topics.every(x=>Object.hasOwn(x,'whyHere')),resolution==='HARBOUR');
 });
}
test('P143 generic denial parity and recipient binding',async t=>{
 const s=await setup(t);const credential=await s.register('recipient-143');const wrong=await s.register('wrong-143');const g=await s.grant();
 const missing=await s.visit(undefined,undefined),wrongRecipient=await s.visit(g.invitationToken,wrong),forged=await s.visit('forged',credential),tokenOnly=await s.visit(g.invitationToken,undefined);
 for(const r of [missing,wrongRecipient,forged,tokenOnly]){assert.equal(r.status,403);assert.equal(r.cache,'no-store');assert.deepEqual(r.json,missing.json)}
});
test('P143 revocation is effective at request time',async t=>{
 const s=await setup(t);const credential=await s.register('recipient-143');const g=await s.grant();
 assert.equal((await s.visit(g.invitationToken,credential)).status,200);
 const r=await s.req('POST',`/api/studio/worlds/${s.world}/grants/${g.grant.grantId}/revoke`,{owner:OWNER,body:{}});assert.equal(r.status,200);
 assert.equal((await s.visit(g.invitationToken,credential)).status,403);
});
test('P143 expired grant is generic denial',async t=>{
 const s=await setup(t);const credential=await s.register('recipient-143');const g=await s.grant('CONTINENT','recipient-143','2000-01-01T00:00:00.000Z');
 const r=await s.visit(g.invitationToken,credential);assert.equal(r.status,403);
});
test('P143 owner isolation and no-store on denied responses',async t=>{
 const s=await setup(t);for(const owner of [undefined,OTHER]){const r=await s.req('GET',`/api/studio/worlds/${s.world}`,{owner});assert.equal(r.status,403);assert.equal(r.cache,'no-store')}
});
test('P143 stale revision is 409 and leaves revision unchanged',async t=>{
 const s=await setup(t);const path=`/api/studio/worlds/${s.world}/territories`;
 const first=await s.req('POST',path,{owner:OWNER,body:{territoryId:'one',name:'One',expectedRevision:0,idempotencyKey:'first'}});assert.equal(first.status,201);
 const stale=await s.req('POST',path,{owner:OWNER,body:{territoryId:'two',name:'Two',expectedRevision:0,idempotencyKey:'second'}});assert.equal(stale.status,409);
 const view=await s.req('GET',`/api/studio/worlds/${s.world}`,{owner:OWNER});assert.equal(view.json.revision,1);
});
test('P143 identical idempotent retry and changed-body conflict',async t=>{
 const s=await setup(t);const path=`/api/studio/worlds/${s.world}/territories`;
 const body={territoryId:'one',name:'One',expectedRevision:0,idempotencyKey:'same'};
 const first=await s.req('POST',path,{owner:OWNER,body});const again=await s.req('POST',path,{owner:OWNER,body});
 assert.equal(first.status,201);assert.deepEqual(first.json,again.json);
 const conflict=await s.req('POST',path,{owner:OWNER,body:{...body,name:'Different'}});assert.equal(conflict.status,409);
 const view=await s.req('GET',`/api/studio/worlds/${s.world}`,{owner:OWNER});assert.equal(view.json.revision,1);
});
test('P143 world deletion ends authorized access',async t=>{
 const s=await setup(t);const credential=await s.register('recipient-143');const g=await s.grant();
 assert.equal((await s.visit(g.invitationToken,credential)).status,200);
 const deletion=await s.req('DELETE',`/api/studio/worlds/${s.world}`,{owner:OWNER});assert.equal(deletion.status,200);
 const after=await s.visit(g.invitationToken,credential);assert.equal(after.status,403);
});
