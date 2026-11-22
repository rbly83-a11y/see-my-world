import { agentRegistry } from './registry.js';
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { Store } from './store.js';
import { constantTimeTokenMatch } from './evidence.js';
const dashboardHTML=readFileSync(new URL('../public/dashboard.html',import.meta.url),'utf8');
const MAX_BODY=8192;
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data));}
async function parseBody(req){
  let total=0;const chunks=[];
  for await(const chunk of req){total+=chunk.length;if(total>MAX_BODY)throw Error('Request too large');chunks.push(chunk);}
  const raw=Buffer.concat(chunks).toString('utf8');return JSON.parse(raw);
}
export function startDashboard({dbPath,token,operatorToken,reviewerToken,port=0,host='127.0.0.1'}) {
  if(typeof token!=='string'||token.length<32)throw Error('Strong viewer token required');
  if(operatorToken!==undefined && (typeof operatorToken!=='string'||operatorToken.length<32||operatorToken===token))throw Error('Distinct strong operator token required');
  if(reviewerToken!==undefined && (typeof reviewerToken!=='string'||reviewerToken.length<32||reviewerToken===token||reviewerToken===operatorToken))throw Error('Distinct strong reviewer token required');
  if(!['127.0.0.1','::1'].includes(host))throw Error('Prototype must bind to loopback');
  const server=createServer(async(req,res)=>{
    res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','no-referrer');
    res.setHeader('X-Frame-Options','DENY');
    if(req.method==='GET'&&req.url==='/dashboard'){
      res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'"});res.end(dashboardHTML);return;
    }
    const bearer=(req.headers.authorization||'').replace(/^Bearer /,'');
    const viewer=constantTimeTokenMatch(bearer,token);
    const operator=operatorToken ? constantTimeTokenMatch(bearer,operatorToken) : false;
    const reviewer=reviewerToken ? constantTimeTokenMatch(bearer,reviewerToken) : false;
    if(!viewer&&!operator&&!reviewer){json(res,401,{error:'Unauthorized'});return;}
    const path=new URL(req.url,'http://localhost').pathname;
    const dossierMatch=path.match(/^\/api\/dossiers\/([A-Z][A-Z0-9-]{2,39})$/);
    const read=req.method==='GET'&&(!!dossierMatch||['/api/tasks','/api/health','/api/audit','/api/agents','/api/reviews'].includes(path));
    const write=req.method==='POST'&&['/api/tasks','/api/transitions','/api/reviews','/api/review-decisions'].includes(path);
    if(!read&&!write){json(res,404,{error:'Not found'});return;}
    if(write && (path==='/api/review-decisions' ? !reviewer : !operator)){json(res,403,{error:'Operator token required'});return;}
    // Prevent cross-origin browser writes; bearer tokens are required regardless.
    if(write&&req.headers.origin){const expected=`http://${host}:${server.address().port}`;if(req.headers.origin!==expected){json(res,403,{error:'Origin rejected'});return;}}
    if(write&&!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||'')){json(res,415,{error:'JSON required'});return;}
    let store;
    try {
      const body=write?await parseBody(req):null;
      store=new Store(dbPath);
      if(dossierMatch&&read){json(res,200,store.taskDossier(dossierMatch[1]));return;}
      if(path==='/api/tasks'&&read){json(res,200,{tasks:store.tasks()});return;}
      if(path==='/api/agents'){json(res,200,agentRegistry());return;}
      if(path==='/api/reviews'&&read){json(res,200,{requests:store.reviewRequests()});return;}
      if(path==='/api/review-decisions'&&write){
        if(!body||Object.keys(body).some(k=>!['id','decision','commitSha'].includes(k)))throw Error('Invalid request');
        json(res,200,{decision:store.decideReview({...body,reviewer:'VERITY'})});return;
      }
      if(path==='/api/reviews'&&write){if(!body||Object.keys(body).some(k=>!['id','taskId','commitSha','requestedBy','reviewer'].includes(k)))throw Error('Invalid request');json(res,201,{request:store.requestReview(body)});return;}
      if(path==='/api/health'){json(res,200,{ok:true});return;}
      if(path==='/api/audit'){json(res,200,{verifiedEvents:store.verify()});return;}
      if(path==='/api/tasks'&&write){
        if(!body||Object.keys(body).some(k=>!['task','actor'].includes(k))||typeof body.actor!=='string'||!/^[-_a-zA-Z0-9]{2,50}$/.test(body.actor))throw Error('Invalid request');
        json(res,201,{task:store.addTask(body.task,body.actor)});return;
      }
      if(path==='/api/transitions'){
        if(!body||Object.keys(body).some(k=>!['taskId','next','actor'].includes(k))||typeof body.actor!=='string'||!/^[-_a-zA-Z0-9]{2,50}$/.test(body.actor))throw Error('Invalid request');
        if(typeof body.taskId!=='string'||typeof body.next!=='string')throw Error('Invalid request');
        json(res,200,{task:store.change(body.taskId,body.next,body.actor)});return;
      }
    } catch(e){
      const tooLarge=e.message==='Request too large';
      const bad=/Invalid|Unknown|Forbidden|Dependencies|not accepted|requires|Already|cycle|Self-dependency|Duplicate|Missing|Acceptance|task|review|requester|commit|SHA|UNIQUE|Reviewer|decided|review/i.test(e.message);
      json(res,tooLarge?413:(bad?400:500),{error:tooLarge?'Request too large':(bad?e.message:'Internal error')});
    } finally{store?.close();}
  });
  server.listen(port,host);return server;
}
if(process.argv[1]?.endsWith('/server.js')){
  const [dbPath]=process.argv.slice(2);
  if(!dbPath){console.error('Usage: WORLD_FORGE_TOKEN=... WORLD_FORGE_OPERATOR_TOKEN=... node src/server.js DB');process.exit(2);}
  const server=startDashboard({dbPath,token:process.env.WORLD_FORGE_TOKEN,operatorToken:process.env.WORLD_FORGE_OPERATOR_TOKEN,reviewerToken:process.env.WORLD_FORGE_REVIEWER_TOKEN});
  server.on('listening',()=>console.log(`Local API listening on http://127.0.0.1:${server.address().port}`));
}
