// Durable local evidence about Docker CLI process startup. A spawn event never
// proves container creation; actual Docker state requires independent inspection.
export class ExecutionObservations {
  constructor(store){
    this.store=store;
    store.db.exec(`CREATE TABLE IF NOT EXISTS execution_observations(
      job_id TEXT PRIMARY KEY REFERENCES execution_jobs(id),
      container_name TEXT NOT NULL, cli_spawned_at TEXT,
      updated_at TEXT NOT NULL);`);
  }
  get(jobId){return this.store.db.prepare('SELECT job_id AS jobId,container_name AS containerName,cli_spawned_at AS cliSpawnedAt FROM execution_observations WHERE job_id=?').get(jobId)||null;}
  prepared(jobId,token,containerName){
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const lease=db.prepare('SELECT * FROM execution_leases WHERE job_id=?').get(jobId);
      if(!lease||lease.token!==token||lease.status!=='ACTIVE'||lease.container_name!==containerName)throw Error('Prepared container not bound to active lease');
      if(this.get(jobId))throw Error('Container preparation already observed');
      db.prepare('INSERT INTO execution_observations(job_id,container_name,updated_at) VALUES(?,?,?)').run(jobId,containerName,new Date().toISOString());
      this.store.record('CONTAINER_PREPARED',{jobId,containerName});db.exec('COMMIT');
      return this.get(jobId);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
  cliSpawned(jobId,token,containerName){
    const db=this.store.db;db.exec('BEGIN IMMEDIATE');
    try{
      const lease=db.prepare('SELECT * FROM execution_leases WHERE job_id=?').get(jobId);
      const obs=this.get(jobId);
      if(!lease||lease.token!==token||lease.status!=='ACTIVE'||lease.container_name!==containerName||!obs||obs.containerName!==containerName||obs.cliSpawnedAt)throw Error('Docker CLI spawn not bound to prepared lease');
      const now=new Date().toISOString();
      db.prepare('UPDATE execution_observations SET cli_spawned_at=?,updated_at=? WHERE job_id=?').run(now,now,jobId);
      this.store.record('DOCKER_CLI_SPAWNED',{jobId,containerName});db.exec('COMMIT');
      return this.get(jobId);
    }catch(e){db.exec('ROLLBACK');throw e;}
  }
}
