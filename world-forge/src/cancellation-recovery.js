// Crash-recovery inspection for cancellation claims. Deliberately read-only:
// never retry Docker removal or release a lease based on stale observations.
import {CancellationRequests} from './cancel-requests.js';
import {ExecutionSupervisor,inspectContainer} from './supervisor.js';
import {JobLedger} from './jobs.js';

export async function inspectCancellationRecovery(store,{inspect=inspectContainer}={}){
  new CancellationRequests(store);new ExecutionSupervisor(store);new JobLedger(store);
  const db=store.db;
  db.exec('CREATE TABLE IF NOT EXISTS cancellation_claims(request_id TEXT PRIMARY KEY, created_at TEXT NOT NULL)');
  const claims=db.prepare(`SELECT c.request_id,c.created_at,r.job_id,r.status AS request_status,
    r.container_name,r.lease_token_fingerprint FROM cancellation_claims c
    LEFT JOIN cancellation_requests r ON r.id=c.request_id ORDER BY c.created_at,c.request_id`).all();
  const output=[];
  for(const claim of claims){
    const job=claim.job_id?new JobLedger(store).get(claim.job_id):null;
    const lease=claim.job_id?new ExecutionSupervisor(store).get(claim.job_id):null;
    let observation={verified:false,reason:'NOT_INSPECTED'};
    if(claim.container_name){
      try{observation=await inspect(claim.container_name);}
      catch{observation={verified:false,reason:'INSPECTION_ERROR'};}
    }
    const containerVerified=observation?.verified===true&&observation.containerName===claim.container_name;
    output.push({requestId:claim.request_id,jobId:claim.job_id||null,
      requestStatus:claim.request_status||'MISSING',jobStatus:job?.status||'MISSING',
      leaseStatus:lease?.status||'MISSING',containerName:claim.container_name||null,
      containerObserved:containerVerified?{running:observation.running,containerId:observation.containerId}:null,
      inspectionVerified:containerVerified,action:'MANUAL_RECONCILIATION_REQUIRED'});
  }
  return output;
}
