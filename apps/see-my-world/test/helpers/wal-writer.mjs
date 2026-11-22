// Leaves an uncheckpointed WAL beside the database for S02-16:
// performs a committed write with autocheckpoint disabled, then exits
// without closing the database, so -wal (and -shm) remain on disk.
// Usage: node wal-writer.mjs <dbPath>
import { DatabaseSync } from 'node:sqlite';

const [dbPath] = process.argv.slice(2);
const db = new DatabaseSync(dbPath);
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA wal_autocheckpoint = 0;');
db.prepare('UPDATE worlds SET quarantined = quarantined').run();
process.exit(0); // deliberately no db.close(): the WAL stays behind
