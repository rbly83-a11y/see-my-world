// Simulates a crash mid-transaction for S02-17: leaves a stray staging
// file inside the data directory, begins a transaction, inserts a
// bogus event, and kills itself before commit. On restart the bogus
// event must be wholly absent and the staging file swept.
// Usage: node crash-writer.mjs <dataDir> <dbPath> <worldId>
import { DatabaseSync } from 'node:sqlite';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [dataDir, dbPath, worldId] = process.argv.slice(2);
writeFileSync(join(dataDir, 'orphan.staging'), 'interrupted');
const db = new DatabaseSync(dbPath);
db.exec('BEGIN IMMEDIATE');
db.prepare('INSERT INTO events (world_id, revision, event_id, event_json) VALUES (?, ?, ?, ?)')
  .run(worldId, 9999, 'bogus', JSON.stringify({ type: 'BOGUS' }));
process.kill(process.pid, 'SIGKILL');
