// Trusted local cancellation worker. No remote endpoint, and no secret tokens in output.
import {createHash} from 'node:crypto';
import {CancellationRequests} from './cancel-requests.js';
import {ExecutionSupervisor} from './supervisor.js';
import {cancelActiveJob} from './cancellation.js';
import {stopOwnedContainer} from './container-ownership.js';

export async function processCancellation(store,{requestId,stop}={}){
  if(typeof requestId!=='string'||!/^CANCEL-[0-9a-f-]{36}$/.test(requestId))throw Error('Invalid cancellation request ID');
  const requests=new CancellationRequests(store),sup=new ExecutionSupervisor(store),db=store.db;
  db.exec(`CREATE TABLE IF NOT EXISTS cancellation_claims(request_id TEXT PRIMARY KEY, created_at TEXT NOT NULL)`);
  // Claim atomically; never allow two workers to send concurrent Docker stop commands.
  db.exec('BEGIN IMMEDIATE');
  let request,lease;
  try{
    request=db.prepare('SELECT * FROM cancellation_requests WHERE id=?').get(requestId);
    if(!request||request.status!=='PENDING')throw Error('Request is not pending');
    lease=sup.get(request.job_id);
    if(!lease||lease.status!=='ACTIVE'||lease.container_name!==request.container_name||
      createHash('sha256').update(lease.token).digest('hex')!==request.lease_token_fingerprint)
      throw Error('Lease changed; manual reconciliation required');
    db.prepare('INSERT INTO cancellation_claims VALUES(?,?)').run(requestId,new Date().toISOString());
    db.exec('COMMIT');
  }catch(e){db.exec('ROLLBACK');throw e;}
  let result;
  try{
    // The default stop path verifies Docker labels before terminating the container.
    // Explicit stop injection is reserved for tests and trusted local adapters.
    const verifiedStop=stop??((name)=>stopOwnedContainer(name,{jobId:request.job_id,leaseToken:lease.token}));
    result=await cancelActiveJob(store,{jobId:request.job_id,owner:lease.owner,leaseToken:lease.token,containerName:request.container_name,stop:verifiedStop});
    if(result.confirmed){
      db.exec('BEGIN IMMEDIATE');
      try{
        db.prepare("UPDATE cancellation_requests SET status='RECONCILED',updated_at=? WHERE id=? AND status='PENDING'").run(new Date().toISOString(),requestId);
        store.record('CANCELLATION_RECONCILED',{requestId,jobId:request.job_id});
        db.prepare('DELETE FROM cancellation_claims WHERE request_id=?').run(requestId);
        db.exec('COMMIT');
      }catch(e){db.exec('ROLLBACK');throw e;}
    }
    return {requestId,jobId:request.job_id,confirmed:result.confirmed===true,reason:result.reason||null};
  }finally{
    // An unverified stop remains PENDING for explicit operator retry.
    // A crashed worker leaves its claim in place for manual investigation.
    if(!result?.confirmed)db.prepare('DELETE FROM cancellation_claims WHERE request_id=?').run(requestId);
  }
}
