// Fresh-process state dump for S02-08: opens the store cold and prints
// the persisted revision, digest, and grant state as JSON.
// Usage: node dump-state.mjs <dataDir> <worldId> <ownerId>
import { SqliteStorage } from '../../src/storage.js';
import { WorldService } from '../../src/service.js';

const [dataDir, worldId, ownerId] = process.argv.slice(2);
const storage = new SqliteStorage(dataDir).init();
const service = new WorldService(storage, {});
const view = service.getStudioView(ownerId, worldId);
console.log(JSON.stringify({
  revision: view.revision,
  digest: view.digest,
  grants: view.grants,
}));
service.close();
