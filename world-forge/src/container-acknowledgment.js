// Explicit, independently inspected Docker creation acknowledgment.
// Not invoked by CLI spawn: process startup alone never establishes creation.
import {verifyContainerOwnership} from './container-ownership.js';
const ID=/^[a-f0-9]{64}$/;
export class ContainerAcknowledgments {
  constructor(store){
    this.store=store;
    store.db.exec(`CREATE TABLE IF NOT EXISTS container_acknowledgments(
      job_id TEXT PRIMARY KEY REFERENCES execution_jobs(id),
      container_name TEXT NOT NULL, container_id TEXT NOT NULL,
      observed_running INTEGER NOT NULL CHECK(observed_running IN (0,1)),
      verified_at TEXT NOT NULL);`);
  }
  get(jobId){return this.store.db.prepare('SELECT job_id AS jobId,container_name AS containerName,container_id AS containerId,observed_running AS observedRunning,verified_at AS verifiedAt FROM container_acknowledgments WHERE job_id=?').get(jobId)||null;}
  async verifyAndRecord(jobId,leaseToken,{exec}={}){
    // Read the binding before inspection, then recheck inside a write transaction.
    const lease=this.store.db.prepare('SELECT * FROM execution_leases WHERE job_id=?').get(jobId);
    const observation=this.store.db.prepare('SELECT * FROM execution_observations WHERE job_id=?').get(jobId);
    if(!lease||lease.status!=='ACTIVE'||lease.token!==leaseToken||!lease.container_name||!observation?.cli_spawned_at||observation.container_name!==lease.container_name)throw Error('No active, spawned execution binding');
    const identity={jobId,leaseToken};
    const result=await verifyContainerOwnership(lease.container_name,identity,{exec});
    if(!result.verified||!ID.test(result.containerId||''))return {verified:false,reason:result.reason||'INVALID_DOCKER_IDENTITY'};
    const db=this.store.db;
    db.exec('BEGIN IMMEDIATE');
    try{
      const current=db.prepare('SELECT * FROM execution_leases WHERE job_id=?').get(jobId);
      const job=db.prepare('SELECT status FROM execution_jobs WHERE id=?').get(jobId);
      const obs=db.prepare('SELECT * FROM execution_observations WHERE job_id=?').get(jobId);
      if(!current||current.status!=='ACTIVE'||current.token!==leaseToken||current.container_name!==lease.container_name||current.expires_at<=Date.now()||job?.status!=='RUNNING'||!obs?.cli_spawned_at||obs.container_name!==lease.container_name)throw Error('Execution binding changed during Docker inspection');
      const previous=this.get(jobId);
      if(previous){
        if(previous.containerId!==result.containerId)throw Error('Container identity changed');
        db.exec('COMMIT');return {verified:true,containerId:previous.containerId,alreadyRecorded:true};
      }
      const at=new Date().toISOString();
      db.prepare('INSERT INTO container_acknowledgments VALUES(?,?,?,?,?)').run(jobId,lease.container_name,result.containerId,result.running?1:0,at);
      this.store.record('DOCKER_CONTAINER_VERIFIED',{jobId,containerName:lease.container_name,containerId:result.containerId,running:result.running,verifiedAt:at});
      db.exec('COMMIT');
      return {verified:true,containerId:result.containerId,running:result.running,verifiedAt:at};
    }catch(error){db.exec('ROLLBACK');throw error;}
  }
}
