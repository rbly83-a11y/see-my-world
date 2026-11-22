// Read-only operator evidence. No automatic job or lease changes.
export function listExecutionConflicts(store){
  store.db.exec(`CREATE TABLE IF NOT EXISTS execution_conflicts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,job_id TEXT NOT NULL,
    container_name TEXT NOT NULL,reason TEXT NOT NULL,
    observed_job_status TEXT,observed_lease_status TEXT,
    created_at TEXT NOT NULL,resolved_at TEXT)`);
  return store.db.prepare(`SELECT id,job_id AS jobId,container_name AS containerName,
    reason,observed_job_status AS jobStatus,observed_lease_status AS leaseStatus,
    created_at AS createdAt,resolved_at AS resolvedAt
    FROM execution_conflicts ORDER BY id DESC`).all();
}
