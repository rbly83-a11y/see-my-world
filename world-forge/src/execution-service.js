import {ContainerAcknowledgments} from './container-acknowledgment.js';
import {setTimeout as delay} from 'node:timers/promises';
import {ExecutionObservations} from './execution-observations.js';
// Supervised controller orchestration. Cleanup must be independently confirmed.
import {executeVerifiedJob} from './controller.js';
import {ExecutionSupervisor} from './supervisor.js';
import {JobLedger} from './jobs.js';
export async function executeSupervisedJob(store,jobId,config,{owner,cleanup,execute=executeVerifiedJob,supervisor=new ExecutionSupervisor(store),ledger=new JobLedger(store),heartbeatMs=10000,ttlMs=60000,acknowledge=null,dockerExec,ackTimeoutMs=3000,ackPollMs=100}={}){
  if(config?.execute!==true)throw Error('Explicit execution opt-in required');
  if(typeof cleanup!=='function')throw Error('Explicit cleanup verifier required');
  if(acknowledge!==null&&typeof acknowledge!=='function')throw Error('Invalid container acknowledgment verifier');
  const dockerExecution=config?.command!==undefined;
  if(dockerExecution&&(!Number.isSafeInteger(ackTimeoutMs)||ackTimeoutMs<1||ackTimeoutMs>30000||!Number.isSafeInteger(ackPollMs)||ackPollMs<1||ackPollMs>ackTimeoutMs))throw Error('Invalid Docker acknowledgment polling bounds');
  if(!Number.isSafeInteger(heartbeatMs)||heartbeatMs<100||heartbeatMs>=ttlMs/2)throw Error('Invalid heartbeat interval');
  const lease=supervisor.claim(jobId,{owner,ttlMs});
  const observations=new ExecutionObservations(store);
  let timer,heartbeatError=null,execution=null,executionError=null,cleanupConfirmed=false;
  const fence=()=>{
    const current=supervisor.get(jobId);
    if(heartbeatError||!current||current.token!==lease.token||current.owner!==owner||! ['CLAIMED','ACTIVE'].includes(current.status)||current.expires_at<=Date.now())throw Error('Execution fenced: lease no longer valid');
    const job=ledger.get(jobId);
    if(!job||!['QUEUED','RUNNING'].includes(job.status))throw Error('Execution fenced: job no longer active');
  };
  try{
    timer=setInterval(()=>{try{supervisor.heartbeat(jobId,lease.token,{ttlMs});}catch(e){heartbeatError=e;clearInterval(timer);}},heartbeatMs);
    timer.unref?.();
    try{execution=await execute(ledger,jobId,{...config,jobId,leaseToken:lease.token,onContainerPrepared:(containerName)=>{supervisor.attach(jobId,lease.token,containerName);observations.prepared(jobId,lease.token,containerName);},onDockerCliSpawned:async(containerName)=>{observations.cliSpawned(jobId,lease.token,containerName);if(dockerExecution){
          const acknowledgments=new ContainerAcknowledgments(store);
          const deadline=Date.now()+ackTimeoutMs;
          let verified=false;
          do {
            fence();
            const result=await acknowledgments.verifyAndRecord(jobId,lease.token,{exec:dockerExec});
            if(result.verified===true){verified=true;break;}
            if(Date.now()>=deadline)break;
            await delay(Math.min(ackPollMs,Math.max(1,deadline-Date.now())));
          } while(Date.now()<=deadline);
          if(!verified)throw Error('Docker creation acknowledgment timed out or unverified');
        } else if(acknowledge){const result=await acknowledge({store,jobId,leaseToken:lease.token,containerName,verify:({exec}={})=>new ContainerAcknowledgments(store).verifyAndRecord(jobId,lease.token,{exec})});if(result?.verified!==true)throw Error('Docker creation acknowledgment unverified');}fence();}},{fence});}catch(e){executionError=e;}
    // A custom executor must not bypass Docker startup verification by simply
    // returning a success value without invoking the runner callbacks.
    if(dockerExecution&&!executionError){
      try{
        const observed=observations.get(jobId);
        const acknowledged=new ContainerAcknowledgments(store).get(jobId);
        const bound=supervisor.get(jobId);
        if(!observed?.cliSpawnedAt||!acknowledged?.containerId||
           observed.containerName!==acknowledged.containerName||
           bound?.container_name!==acknowledged.containerName||
           bound?.token!==lease.token){
          throw Error('Docker execution lacks independently verified startup evidence');
        }
        fence();
      }catch(error){executionError=error;}
    }
  }finally{
    if(timer)clearInterval(timer);
    // This callback must inspect the actual runtime; never infer cleanup from a promise settling.
    try{cleanupConfirmed=(await cleanup({jobId,lease,execution,executionError}))===true;}catch{cleanupConfirmed=false;}
    if(cleanupConfirmed)supervisor.release(jobId,lease.token,{containerStopped:true});
  }
  if(heartbeatError)throw Error('Lease renewal failed; execution requires operator reconciliation');
  if(!cleanupConfirmed)throw Error('Cleanup unverified; lease retained for operator reconciliation');
  if(executionError)throw executionError;
  return {execution,leaseReleased:true};
}
export function recoveryQueue(store,{now=Date.now()}={}){
  const supervisor=new ExecutionSupervisor(store),ledger=new JobLedger(store);
  const expired=supervisor.expired(now);
  const running=ledger.list().filter(j=>j.status==='RUNNING');
  const byId=new Map([...expired.map(l=>[l.job_id,{jobId:l.job_id,reason:'EXPIRED_LEASE',leaseStatus:l.status,containerName:l.container_name,expiresAt:l.expires_at}])]);
  for(const job of running){const item=byId.get(job.id);if(item){item.jobStatus='RUNNING';}else{const lease=supervisor.get(job.id);byId.set(job.id,{jobId:job.id,reason:'RUNNING_JOB',jobStatus:job.status,leaseStatus:lease?.status??null,containerName:lease?.container_name??null});}}
  return [...byId.values()].sort((a,b)=>a.jobId.localeCompare(b.jobId));
}
