// Durable cancellation intent. This does NOT stop Docker containers.
// A separate trusted operator must reconcile intent against runtime evidence.
import {randomUUID,createHash} from 'node:crypto';
import {JobLedger} from './jobs.js';
import {ExecutionSupervisor} from './supervisor.js';
export class CancellationRequests {
  constructor(store){this.store=store;new JobLedger(store);new ExecutionSupervisor(store);
    store.db.exec(`CREATE TABLE IF NOT EXISTS cancellation_requests (
      id TEXT PRIMARY KEY, job_id TEXT NOT NULL REFERENCES execution_jobs(id),
      requested_by TEXT NOT NULL, status TEXT NOT NULL CHECK(status IN ('PENDING','RECONCILED')),
      lease_token_fingerprint TEXT NOT NULL, container_name TEXT NOT NULL,
      created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
      CREATE UNIQUE INDEX IF NOT EXISTS one_pending_cancellation ON cancellation_requests(job_id) WHERE status='PENDING';`);
  }
  list(){return this.store.db.prepare('SELECT id,job_id,requested_by,status,container_name,created_at,updated_at FROM cancellation_requests ORDER BY created_at,id').all();}
  request({jobId,actor}){
    if(typeof actor!=='string'||!/^[a-zA-Z0-9_-]{2,50}$/.test(actor))throw Error('Invalid operator identity label');
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const job=new JobLedger(this.store).get(jobId),lease=new ExecutionSupervisor(this.store).get(jobId);
      if(!job||job.status!=='RUNNING'||!lease||lease.status!=='ACTIVE'||!lease.container_name)throw Error('Job not actively bound to container');
      const existing=db.prepare("SELECT id FROM cancellation_requests WHERE job_id=? AND status='PENDING'").get(jobId);
      if(existing)throw Error('Cancellation already pending');
      const id=`CANCEL-${randomUUID()}`,now=new Date().toISOString();
      // Fingerprint is only a binding hint; never expose or log the actual lease token.
      const fingerprint=createHash('sha256').update(lease.token).digest('hex');
      db.prepare('INSERT INTO cancellation_requests VALUES(?,?,?,?,?,?,?,?)').run(id,jobId,actor,'PENDING',fingerprint,lease.container_name,now,now);
      this.store.record('CANCELLATION_REQUESTED',{id,jobId,actor,containerName:lease.container_name});
      db.exec('COMMIT');return {id,jobId,status:'PENDING',containerName:lease.container_name};
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
}
