// Opt-in, real Docker + SQLite cancellation acceptance. Uses a disposable container
// and temp database. Never pulls an image or touches a pre-existing container.
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {randomUUID} from 'node:crypto';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {Store} from '../src/store.js';
import {JobLedger} from '../src/jobs.js';
import {ExecutionSupervisor} from '../src/supervisor.js';
import {CancellationRequests} from '../src/cancel-requests.js';
import {processCancellation} from '../src/cancellation-worker.js';
import {ownershipLabels,verifyContainerOwnership} from '../src/container-ownership.js';
const exec=promisify(execFile);
const run=(args)=>exec('docker',args,{timeout:20000,maxBuffer:1024*1024});
const image=process.env.WORLD_FORGE_TEST_IMAGE;
if(!image||!/^[-a-z0-9._/:]+@sha256:[a-f0-9]{64}$/.test(image)){
  console.error('WORLD_FORGE_TEST_IMAGE must be a locally available digest-pinned Node.js image.');process.exit(2);
}
try{await run(['info','--format','{{.ServerVersion}}']);await run(['image','inspect',image]);}
catch{console.error('Docker daemon or local pinned image unavailable; no test container created.');process.exit(2);}
const dir=mkdtempSync(join(tmpdir(),'wf-live-cancel-'));
const store=new Store(join(dir,'store.db'));
const jobId='JOB-'+randomUUID(),token=randomUUID(),name='world-forge-'+randomUUID();
let containerId=null,removed=false;
try{
  new JobLedger(store);new ExecutionSupervisor(store);
  const now=new Date().toISOString();
  store.db.prepare('INSERT INTO tasks(id,body,version) VALUES(?,?,?)').run('WF-LIVE','{}',1);
  store.db.prepare('INSERT INTO execution_jobs VALUES(?,?,?,?,?,?,?,?,?)').run(jobId,'WF-LIVE','FORGE','a'.repeat(40),'{}','RUNNING',null,now,now);
  store.db.prepare('INSERT INTO execution_leases VALUES(?,?,?,?,?,?,?)').run(jobId,'live_worker_1234',token,name,'ACTIVE',Date.now()+120000,now);
  const labels=ownershipLabels({jobId,leaseToken:token});
  const args=['create','--name',name,'--network','none','--read-only','--cap-drop','ALL','--security-opt','no-new-privileges','--pids-limit','32','--memory','128m','--cpus','0.5',
    ...Object.entries(labels).flatMap(([key,value])=>['--label',`${key}=${value}`]),image,'node','-e','setTimeout(()=>{},60000)'];
  const created=await run(args);containerId=created.stdout.trim();
  if(!/^[a-f0-9]{64}$/.test(containerId))throw Error('Docker create returned invalid ID');
  await run(['start',containerId]);
  const inspected=await verifyContainerOwnership(name,{jobId,leaseToken:token});
  if(!inspected.verified||!inspected.running||inspected.containerId!==containerId)throw Error('Live ownership/running check failed');
  const request=new CancellationRequests(store).request({jobId,actor:'LIVE_TEST_OPERATOR'});
  const result=await processCancellation(store,{requestId:request.id});
  if(!result.confirmed)throw Error('Cancellation not verified: '+result.reason);
  removed=true;
  const job=new JobLedger(store).get(jobId),lease=new ExecutionSupervisor(store).get(jobId);
  const saved=new CancellationRequests(store).list().find(x=>x.id===request.id);
  if(job.status!=='INTERRUPTED'||lease.status!=='RELEASED'||saved.status!=='RECONCILED')throw Error('Cancellation state mismatch');
  const auditEvents=store.verify();
  console.log(JSON.stringify({passed:true,containerId,jobStatus:job.status,leaseStatus:lease.status,cancellationStatus:saved.status,auditEvents},null,2));
}catch(e){console.error('LIVE CANCELLATION ACCEPTANCE FAILED:',e.message);process.exitCode=1;}
finally{
  if(containerId&&!removed){
    // A failed test must not remove a container without a fresh ownership check.
    try{const check=await verifyContainerOwnership(name,{jobId,leaseToken:token});
      if(check.verified&&check.containerId===containerId)await run(['rm','--force',containerId]);
      else console.error('MANUAL CLEANUP REQUIRED (ownership not verified):',name);
    }catch{console.error('MANUAL CLEANUP REQUIRED:',name);}
  }
  store.close();rmSync(dir,{recursive:true,force:true});
}
