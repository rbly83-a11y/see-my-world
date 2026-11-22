// Fresh-process visitor probe for F-03: opens the store cold and
// attempts a visitor Perspective request exactly as the HTTP route
// would (invitation token + visitor credential), printing the
// outcome and the persisted quarantine flag as JSON. Used to prove
// that replay quarantine still denies after a process restart.
// Usage: node visitor-probe.mjs <dataDir> <worldId> <token> <credential>
import { SqliteStorage } from '../../src/storage.js';
import { WorldService } from '../../src/service.js';

const [dataDir, worldId, token, credential] = process.argv.slice(2);
const storage = new SqliteStorage(dataDir).init();
const service = new WorldService(storage, {});
let result;
try {
  const served = service.getVisitorPerspective({ worldId, token, visitorCredential: credential });
  result = { outcome: 'served', resolution: served.grant.resolution };
} catch (error) {
  result = { outcome: 'denied', status: error.status ?? 500, code: error.code ?? 'UNKNOWN' };
}
console.log(JSON.stringify({ ...result, quarantined: storage.isQuarantined(worldId) }));
service.close();
