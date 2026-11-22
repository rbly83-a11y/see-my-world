// Operator-invoked cancellation reconciliation. The caller authenticates the operator;
// this module independently binds the request to the persisted lease and container.
import {ExecutionSupervisor,requestContainerStop} from './supervisor.js';
import {JobLedger} from './jobs.js';

export async function cancelActiveJob(store,{jobId,owner,leaseToken,containerName,stop=requestContainerStop}={}){
  if(typeof jobId!=='string'||!jobId.startsWith('JOB-'))throw Error('Invalid job id');
  if(typeof owner!=='string'||!owner.trim()||typeof leaseToken!=='string'||!leaseToken.trim())throw Error('Owner and lease token required');
  if(typeof stop!=='function')throw Error('Stop verifier required');
  const sup=new ExecutionSupervisor(store),ledger=new JobLedger(store);
  const job=ledger.get(jobId),lease=sup.get(jobId);
  if(!job||!lease||!['RUNNING','FAILED','INTERRUPTED'].includes(job.status))throw Error('Job not eligible for active cancellation');
  if(lease.owner!==owner||lease.token!==leaseToken||lease.status!=='ACTIVE'||!lease.container_name||lease.container_name!==containerName)throw Error('Lease ownership or container mismatch');
  // No database transaction is held during Docker calls. A post-stop CAS below
  // detects concurrent changes and refuses to rewrite a completed job.
  const result=await stop(containerName);
  if(result?.confirmed!==true||result.containerName!==containerName)return {confirmed:false,reason:result?.reason||'STOP_UNVERIFIED',jobId};
  const db=store.db;db.exec('BEGIN IMMEDIATE');
  try{
    const current=ledger.get(jobId),currentLease=sup.get(jobId);
    if(!current||!currentLease||current.status!==job.status||currentLease.owner!==owner||currentLease.token!==leaseToken||currentLease.status!=='ACTIVE'||currentLease.container_name!==containerName)throw Error('Concurrent state change; operator reconciliation required');
    const timestamp=new Date().toISOString();
    db.prepare('UPDATE execution_jobs SET status=?,result=?,updated_at=? WHERE id=?')
      .run('INTERRUPTED',JSON.stringify({reason:'Operator verified container removal; execution result not accepted'}),timestamp,jobId);
    db.prepare('UPDATE execution_leases SET status=?,updated_at=? WHERE job_id=?').run('RELEASED',timestamp,jobId);
    store.record('JOB_CANCELLED_VERIFIED',{jobId,containerName,owner});
    db.exec('COMMIT');
    return {confirmed:true,jobId,status:'INTERRUPTED',leaseStatus:'RELEASED'};
  }catch(error){
    db.exec('ROLLBACK');
    // Physical removal may have succeeded even though the ledger changed.
    // Preserve evidence for an operator; never rewrite a completed job.
    db.exec(`CREATE TABLE IF NOT EXISTS execution_conflicts(
      id INTEGER PRIMARY KEY AUTOINCREMENT,job_id TEXT NOT NULL,
      container_name TEXT NOT NULL,reason TEXT NOT NULL,
      observed_job_status TEXT,observed_lease_status TEXT,
      created_at TEXT NOT NULL,resolved_at TEXT)`);
    db.exec('BEGIN IMMEDIATE');
    try{
      const observedJob=ledger.get(jobId),observedLease=sup.get(jobId);
      db.prepare(`INSERT INTO execution_conflicts(job_id,container_name,reason,observed_job_status,observed_lease_status,created_at)
        VALUES(?,?,?,?,?,?)`).run(jobId,containerName,'VERIFIED_STOP_LEDGER_CONFLICT',observedJob?.status??null,observedLease?.status??null,new Date().toISOString());
      store.record('EXECUTION_CONFLICT_REQUIRES_RECONCILIATION',{jobId,containerName,reason:'VERIFIED_STOP_LEDGER_CONFLICT'});
      db.exec('COMMIT');
    }catch(recordError){db.exec('ROLLBACK');throw new AggregateError([error,recordError],'Cancellation conflict could not be recorded');}
    throw error;
  }
}

