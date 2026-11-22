// Thin HTTP surface over the world-data core.
//
// Studio routes are owner-only (principal from the x-owner-token
// session header, never from a body). The visitor route resolves its
// grant from the x-invitation-token header at request time AND
// authenticates the visitor principal from the separate
// x-visitor-credential header, which the service matches against
// the grant's named recipient (F-01). All responses are JSON with
// Cache-Control: no-store; error bodies are generic and reveal no
// private topic state (Ch. 22 §22.3).

import { createServer as createHttpServer } from 'node:http';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ApiError, badRequest } from './domain.js';
import { WorldService } from './service.js';
import { SqliteStorage } from './storage.js';

const appDir = join(dirname(fileURLToPath(import.meta.url)), '..');

export function createApp({ dataDir, ownerTokens }) {
  const storage = new SqliteStorage(dataDir).init();
  const service = new WorldService(storage, { ownerTokens });
  const server = createHttpServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      const body = await readBody(req);
      const result = route(service, req.method, url.pathname, req.headers, body);
      sendJson(res, result.status ?? 200, result.body);
    } catch (error) {
      if (error instanceof ApiError) {
        sendJson(res, error.status, { error: error.code, message: error.message });
      } else {
        sendJson(res, 500, { error: 'INTERNAL', message: 'Internal error' });
      }
    }
  });
  return { server, service, storage };
}

function route(service, method, path, headers, body) {
  const seg = path.split('/').filter(Boolean);
  const owner = () => service.authenticateOwner(headers['x-owner-token']);

  // Studio: visitor-principal registration (F-01). Owner-authenticated;
  // the credential is returned once and stored only as a hash.
  if (method === 'POST' && path === '/api/studio/visitor-principals') {
    owner();
    return { status: 201, body: service.registerVisitorPrincipal(body.recipientId) };
  }

  // Studio: worlds
  if (method === 'POST' && path === '/api/studio/worlds') {
    return { status: 201, body: service.createWorld(owner(), { worldId: body.worldId }) };
  }
  if (seg[0] === 'api' && seg[1] === 'studio' && seg[2] === 'worlds' && seg[3]) {
    const worldId = seg[3];
    if (method === 'GET' && seg.length === 4) {
      return { body: service.getStudioView(owner(), worldId) };
    }
    if (method === 'DELETE' && seg.length === 4) {
      return { body: { deletion: service.deleteWorld(owner(), worldId) } };
    }
    if (method === 'POST' && seg[4] === 'territories') {
      return { status: 201, body: service.addTerritory(owner(), worldId, body) };
    }
    if (method === 'POST' && seg[4] === 'topics' && seg.length === 5) {
      return { status: 201, body: service.declareTopic(owner(), worldId, body) };
    }
    if (method === 'POST' && seg[4] === 'topics' && seg[6] === 'restore') {
      return { body: service.restoreTopic(owner(), worldId, { ...body, topicId: seg[5] }) };
    }
    if (method === 'POST' && seg[4] === 'topics' && seg[6] === 'remove-buoy') {
      return { body: service.removeBuoy(owner(), worldId, { ...body, topicId: seg[5] }) };
    }
    if (method === 'POST' && seg[4] === 'grants' && seg.length === 5) {
      return { status: 201, body: service.createGrant(owner(), worldId, body) };
    }
    if (method === 'POST' && seg[4] === 'grants' && seg[6] === 'revoke') {
      return { body: service.revokeGrant(owner(), worldId, seg[5]) };
    }
  }

  // Corrections: the canonical Ch. 22 §22.1 endpoint (CORE-COR-05).
  if (method === 'POST' && seg[0] === 'api' && seg[1] === 'first-light' && seg[2] === 'worlds' && seg[4] === 'corrections') {
    return { body: service.correct(owner(), seg[3], body) };
  }

  // Explorer: owner reading
  if (method === 'GET' && seg[0] === 'api' && seg[1] === 'explorer' && seg[2] === 'worlds' && seg[3]) {
    return { body: service.getExplorerView(owner(), seg[3]) };
  }

  // Visitor: grant-checked, recipient-bound fixture Perspective
  if (method === 'GET' && seg[0] === 'api' && seg[1] === 'visitor' && seg[2] === 'worlds' && seg[4] === 'perspective') {
    return {
      body: service.getVisitorPerspective({
        worldId: seg[3],
        token: headers['x-invitation-token'],
        visitorCredential: headers['x-visitor-credential'],
      }),
    };
  }

  throw new ApiError(404, 'NOT_FOUND', 'Not found');
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const text = Buffer.concat(chunks).toString('utf8');
      if (!text) return resolve({});
      try {
        resolve(JSON.parse(text));
      } catch {
        reject(badRequest('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, body) {
  const text = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json',
    'cache-control': 'no-store',
    'content-length': Buffer.byteLength(text),
  });
  res.end(text);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dataDir = process.env.SMW_DATA_DIR ?? join(appDir, 'data');
  const ownerTokens = { [process.env.SMW_OWNER_TOKEN ?? 'owner-token']: 'owner-1' };
  const { server } = createApp({ dataDir, ownerTokens });
  const port = Number(process.env.PORT ?? 0);
  server.listen(port, () => {
    console.log(`see-my-world slice listening on ${server.address().port} (data: ${dataDir})`);
  });
}
