// Stage 02 acceptance suite (proposal §7, as revised by R-01/R-03 and
// addendum C-01/C-02). Each test is named with its S02 ID and asserts
// on raw network responses, not on rendered screens. S02-12 is a
// future Lens Compiler test and is intentionally absent (C-01).
// Deletion tests S02-15…S02-17 concern logical deletion only;
// physical erasure is not claimed and was not tested (C-02).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from '../src/server.js';
import { SqliteStorage, DB_FILENAME } from '../src/storage.js';
import { FIXTURE_PAYLOADS } from '../src/fixtures.js';

const execFileP = promisify(execFile);
const appDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEST_ROOT = join(appDir, 'data', 'test-runs');
const OWNER = { token: 'owner-token' };
const FUTURE = '2999-01-01T00:00:00.000Z';

async function startApp(t) {
  await mkdir(TEST_ROOT, { recursive: true });
  const dataDir = await mkdtemp(join(TEST_ROOT, 'run-'));
  const app = createApp({ dataDir, ownerTokens: { 'owner-token': 'owner-1', 'other-token': 'owner-2' } });
  await new Promise((resolve) => app.server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${app.server.address().port}`;
  let closed = false;
  const close = async () => {
    if (closed) return;
    closed = true;
    app.server.closeAllConnections?.();
    await new Promise((resolve) => app.server.close(resolve));
    app.service.close();
  };
  t.after(async () => {
    await close();
    await rm(dataDir, { recursive: true, force: true });
  });
  return { ...app, base, dataDir, close };
}

async function api(base, method, path, { token, visitorToken, visitorCredential, body } = {}) {
  const res = await fetch(base + path, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(token ? { 'x-owner-token': token } : {}),
      ...(visitorToken ? { 'x-invitation-token': visitorToken } : {}),
      ...(visitorCredential ? { 'x-visitor-credential': visitorCredential } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* non-JSON body */ }
  return { status: res.status, headers: res.headers, text, json };
}

async function makeWorld(base, worldId = 'world-1') {
  const created = await api(base, 'POST', '/api/studio/worlds', { ...OWNER, body: { worldId } });
  assert.equal(created.status, 201);
  return created.json;
}

async function addTerritoryAndTopic(base, worldId = 'world-1') {
  const territory = await api(base, 'POST', `/api/studio/worlds/${worldId}/territories`, {
    ...OWNER,
    body: { territoryId: 'harbour', name: 'Harbour', expectedRevision: 0, idempotencyKey: 'terr-1' },
  });
  assert.equal(territory.status, 201);
  const topic = await api(base, 'POST', `/api/studio/worlds/${worldId}/topics`, {
    ...OWNER,
    body: {
      topicId: 'secret-topic', territoryId: 'harbour', name: 'Owner private harbour notes',
      provenance: 'DECLARED', strength: 0.4, expectedRevision: 1, idempotencyKey: 'topic-1',
    },
  });
  assert.equal(topic.status, 201);
  return topic.json;
}

async function makeGrant(base, worldId = 'world-1', overrides = {}) {
  const grant = await api(base, 'POST', `/api/studio/worlds/${worldId}/grants`, {
    ...OWNER,
    body: { recipientId: 'visitor-1', resolution: 'CONTINENT', expiresAt: FUTURE, ...overrides },
  });
  assert.equal(grant.status, 201);
  return grant.json;
}

// F-01: register a visitor principal and return its one-time
// credential. Legitimate-recipient requests present this credential
// alongside the invitation token.
async function makeVisitorCredential(base, recipientId = 'visitor-1') {
  const res = await api(base, 'POST', '/api/studio/visitor-principals', {
    ...OWNER,
    body: { recipientId },
  });
  assert.equal(res.status, 201);
  assert.equal(res.json.recipientId, recipientId);
  assert.ok(res.json.visitorCredential);
  return res.json.visitorCredential;
}

test('S02-01 create or load an owner World fixture: authorized owner can view it', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  const view = await api(base, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(view.status, 200);
  assert.equal(view.json.worldId, 'world-1');
  assert.equal(view.json.revision, 0);
  assert.deepEqual(view.json.nodes, []);
  const stranger = await api(base, 'GET', '/api/studio/worlds/world-1', { token: 'other-token' });
  assert.equal(stranger.status, 403);
});

test('S02-02 open the World as an uninvited visitor: access denied, no private data returned', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const res = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective');
  assert.equal(res.status, 403);
  assert.ok(!res.text.includes('secret-topic'));
  assert.ok(!res.text.includes('Owner private harbour notes'));
  assert.ok(!res.text.includes('strength'));
});

test('S02-03 request a valid authorized Perspective: only Lens-permitted content, verified field by field', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const { grant, invitationToken } = await makeGrant(base);
  assert.equal(grant.boundRevision, 2);
  const visitorCredential = await makeVisitorCredential(base);
  const res = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(res.status, 200);
  assert.deepEqual(res.json.perspective, FIXTURE_PAYLOADS.CONTINENT);
  assert.ok(!res.text.includes('"strength"'));
  assert.ok(!res.text.includes('"testimony"'));
  assert.ok(!res.text.includes('SYN-T5'));
  assert.ok(!res.text.includes('SYN-T6'));
  assert.ok(!res.text.includes('secret-topic'));
});

test('S02-04 attempt to access hidden evidence through the API: protected content remains inaccessible', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  await makeWorld(base, 'world-2');
  const { invitationToken } = await makeGrant(base, 'world-1', { resolution: 'COAST' });
  const visitorCredential = await makeVisitorCredential(base);
  // Resolution escalation attempt: the grant's resolution governs.
  const escalated = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective?resolution=HARBOUR', { visitorToken: invitationToken, visitorCredential });
  assert.equal(escalated.status, 200);
  assert.equal(escalated.json.perspective.resolution, 'COAST');
  // A grant for one World opens no other World.
  const crossWorld = await api(base, 'GET', '/api/visitor/worlds/world-2/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(crossWorld.status, 403);
  // A visitor token is not an owner credential.
  const studio = await api(base, 'GET', '/api/studio/worlds/world-1', { token: invitationToken });
  assert.equal(studio.status, 403);
  // Forged token: identical generic denial, no private detail.
  const forged = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: 'forged-token' });
  assert.equal(forged.status, 403);
  assert.deepEqual(forged.json, crossWorld.json);
  assert.ok(!forged.text.includes('Owner private harbour notes'));
});

test('S02-05 revoke an existing Lens: subsequent access fails, including through cached views', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  const { grant, invitationToken } = await makeGrant(base);
  const visitorCredential = await makeVisitorCredential(base);
  const first = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(first.status, 200);
  assert.ok((first.headers.get('cache-control') ?? '').includes('no-store'));
  const revoked = await api(base, 'POST', `/api/studio/worlds/world-1/grants/${grant.grantId}/revoke`, { ...OWNER, body: {} });
  assert.equal(revoked.status, 200);
  assert.ok(revoked.json.grant.revokedAt);
  const after = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(after.status, 403);
  assert.ok(!after.text.includes('SYN-T1'));
});

test('S02-06 submit two conflicting revisions: one succeeds, the other receives a conflict', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const first = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { topicId: 'secret-topic', type: 'BOOST', expectedRevision: 2, idempotencyKey: 'c-1' },
  });
  assert.equal(first.status, 200);
  assert.equal(first.json.revision, 3);
  const second = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { topicId: 'secret-topic', type: 'REDUCE', expectedRevision: 2, idempotencyKey: 'c-2' },
  });
  assert.equal(second.status, 409);
});

test('S02-07 retry an identical authorized command: idempotency prevents duplicate effects', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const command = { topicId: 'secret-topic', type: 'BOOST', expectedRevision: 2, idempotencyKey: 'c-1' };
  const first = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', { ...OWNER, body: command });
  assert.equal(first.status, 200);
  assert.equal(first.json.receipt.reducerVersion, 'testimony-v1');
  assert.equal(first.json.receipt.rule, 'BOOST');
  const retry = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', { ...OWNER, body: command });
  assert.equal(retry.status, 200);
  assert.equal(retry.json.revision, first.json.revision);
  const view = await api(base, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(view.json.receipts.filter((r) => r.type === 'TOPIC_CORRECTED').length, 1);
  const collision = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { ...command, type: 'REDUCE' },
  });
  assert.equal(collision.status, 409);
  assert.equal(collision.json.error, 'IDEMPOTENCY_CONFLICT');
});

test('S02-08 reopen after a fresh process start: persisted state is consistent', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const { grant } = await makeGrant(app.base);
  const before = await api(app.base, 'GET', '/api/studio/worlds/world-1', OWNER);
  await app.close();
  const { stdout } = await execFileP(process.execPath, [
    '--disable-warning=ExperimentalWarning',
    join(appDir, 'test', 'helpers', 'dump-state.mjs'),
    app.dataDir, 'world-1', 'owner-1',
  ]);
  const dumped = JSON.parse(stdout);
  assert.equal(dumped.revision, before.json.revision);
  assert.equal(dumped.digest, before.json.digest);
  assert.equal(dumped.grants.length, 1);
  assert.equal(dumped.grants[0].grantId, grant.grantId);
  assert.equal(dumped.grants[0].revokedAt, null);
});

test('S02-09 attempt a disputed correction operation: the operation remains unavailable pending Q-01/D-34', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  for (const type of ['CONFIRM', 'RESTORE']) {
    const res = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
      ...OWNER, body: { topicId: 'secret-topic', type, expectedRevision: 2, idempotencyKey: `x-${type}` },
    });
    assert.equal(res.status, 400);
    assert.equal(res.json.error, 'UNSUPPORTED_CORRECTION_TYPE');
  }
  const view = await api(base, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.deepEqual(view.json.availableCorrectionTypes, ['BOOST', 'REDUCE', 'REJECT', 'KEEP_WATCHING']);
});

test('S02-10 switch Explorer and Studio views: both reflect the same authorized world revision', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const explorer = await api(base, 'GET', '/api/explorer/worlds/world-1', OWNER);
  const studio = await api(base, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(explorer.status, 200);
  assert.equal(studio.status, 200);
  assert.equal(explorer.json.revision, studio.json.revision);
  assert.equal(explorer.json.digest, studio.json.digest);
});

test('S02-11 replay determinism: rebuilt projection digest matches; a mismatch quarantines derived projections', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const { invitationToken } = await makeGrant(app.base);
  const visitorCredential = await makeVisitorCredential(app.base);
  const ok = app.service.verifyReplay('world-1');
  assert.equal(ok.status, 'MATCH');
  const record = app.storage.getWorldRecord('world-1');
  const tampered = structuredClone(record.projection);
  tampered.nodes['secret-topic'].strength = 0.99;
  app.storage.replaceProjection('world-1', tampered);
  const mismatch = app.service.verifyReplay('world-1');
  assert.equal(mismatch.status, 'MISMATCH');
  const visitor = await api(app.base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(visitor.status, 503);
  assert.ok(!visitor.text.includes('SYN-T1'));
});

test('S02-13 REFUTED guard: ordinary correction fails with "Explicit restoration required"; refuted node appears in no Perspective', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const { invitationToken } = await makeGrant(base);
  const visitorCredential = await makeVisitorCredential(base);
  const rejected = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { topicId: 'secret-topic', type: 'REJECT', expectedRevision: 2, idempotencyKey: 'rej-1' },
  });
  assert.equal(rejected.status, 200);
  assert.equal(rejected.json.topic.provenance, 'REFUTED');
  const guarded = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { topicId: 'secret-topic', type: 'BOOST', expectedRevision: 3, idempotencyKey: 'boost-after-reject' },
  });
  assert.equal(guarded.status, 400);
  assert.equal(guarded.json.message, 'Explicit restoration required');
  const visitor = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(visitor.status, 200);
  assert.ok(!visitor.text.includes('secret-topic'));
  const restored = await api(base, 'POST', '/api/studio/worlds/world-1/topics/secret-topic/restore', {
    ...OWNER,
    body: { confirmed: true, provenance: 'PROPOSED', strength: 0.1, expectedRevision: 3, idempotencyKey: 'restore-1' },
  });
  assert.equal(restored.status, 200);
  const boosted = await api(base, 'POST', '/api/first-light/worlds/world-1/corrections', {
    ...OWNER, body: { topicId: 'secret-topic', type: 'BOOST', expectedRevision: 4, idempotencyKey: 'boost-after-restore' },
  });
  assert.equal(boosted.status, 200);
});

test('S02-14 expiry: an expired grant fails closed at the moment of the attempted action', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  const { invitationToken } = await makeGrant(base, 'world-1', { expiresAt: '2000-01-01T00:00:00.000Z' });
  const visitorCredential = await makeVisitorCredential(base);
  const res = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(res.status, 403);
  assert.ok(!res.text.includes('SYN-T1'));
});

test('S02-15 logical deletion completeness: a deleted World, its ledger-derived state, and its derived projections are removed together', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const { invitationToken } = await makeGrant(app.base);
  const visitorCredential = await makeVisitorCredential(app.base);
  const deleted = await api(app.base, 'DELETE', '/api/studio/worlds/world-1', OWNER);
  assert.equal(deleted.status, 200);
  assert.equal(deleted.json.deletion.kind, 'LOGICAL_DELETION');
  assert.equal(deleted.json.deletion.deleted.worlds, 1);
  assert.ok(deleted.json.deletion.deleted.derived_projections >= 1);
  assert.ok(deleted.json.deletion.deleted.events >= 3);
  const view = await api(app.base, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(view.status, 404);
  assert.ok(!view.text.includes('secret-topic'));
  const visitor = await api(app.base, 'GET', '/api/visitor/worlds/world-1/perspective', { visitorToken: invitationToken, visitorCredential });
  assert.equal(visitor.status, 403);
  const manifest = app.storage.getDeletionManifest('world-1');
  assert.equal(manifest.kind, 'LOGICAL_DELETION');
});

test('S02-16 logical deletion of auxiliary files: database, -wal, and -shm are removed together with the data directory', async (t) => {
  await mkdir(TEST_ROOT, { recursive: true });
  const dataDir = await mkdtemp(join(TEST_ROOT, 'run-'));
  t.after(() => rm(dataDir, { recursive: true, force: true }));
  const dbPath = join(dataDir, DB_FILENAME);
  const first = createApp({ dataDir, ownerTokens: { 'owner-token': 'owner-1' } });
  await new Promise((resolve) => first.server.listen(0, '127.0.0.1', resolve));
  const base1 = `http://127.0.0.1:${first.server.address().port}`;
  await makeWorld(base1);
  first.server.closeAllConnections?.();
  await new Promise((resolve) => first.server.close(resolve));
  first.service.close();
  // Leave an uncheckpointed WAL beside the database.
  await execFileP(process.execPath, ['--disable-warning=ExperimentalWarning', join(appDir, 'test', 'helpers', 'wal-writer.mjs'), dbPath]);
  assert.ok(existsSync(`${dbPath}-wal`), 'expected an uncheckpointed -wal file');
  const storage = new SqliteStorage(dataDir).init();
  storage.destroyDataDirectory();
  assert.ok(!existsSync(dataDir));
  assert.ok(!existsSync(`${dbPath}-wal`));
  // Recreate the store in the same directory: no deleted-World data resurfaces.
  const second = createApp({ dataDir, ownerTokens: { 'owner-token': 'owner-1' } });
  await new Promise((resolve) => second.server.listen(0, '127.0.0.1', resolve));
  const base2 = `http://127.0.0.1:${second.server.address().port}`;
  const view = await api(base2, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(view.status, 404);
  second.server.closeAllConnections?.();
  await new Promise((resolve) => second.server.close(resolve));
  second.service.close();
});

test('S02-17 crash boundary: restart recovers exactly the last committed revision; the interrupted transaction is wholly absent', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const before = await api(app.base, 'GET', '/api/studio/worlds/world-1', OWNER);
  const eventCountBefore = app.service.storage.listEvents('world-1').length;
  const dbPath = join(app.dataDir, DB_FILENAME);
  await app.close();
  let crashError = null;
  try {
    await execFileP(process.execPath, [
      '--disable-warning=ExperimentalWarning',
      join(appDir, 'test', 'helpers', 'crash-writer.mjs'),
      app.dataDir, dbPath, 'world-1',
    ]);
  } catch (error) {
    crashError = error;
  }
  assert.equal(crashError?.signal, 'SIGKILL');
  const reopened = createApp({ dataDir: app.dataDir, ownerTokens: { 'owner-token': 'owner-1' } });
  await new Promise((resolve) => reopened.server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    reopened.server.closeAllConnections?.();
    await new Promise((resolve) => reopened.server.close(resolve));
    reopened.service.close();
  });
  const base2 = `http://127.0.0.1:${reopened.server.address().port}`;
  // Startup sweep removed the stray staging file.
  assert.ok(!existsSync(join(app.dataDir, 'orphan.staging')));
  const after = await api(base2, 'GET', '/api/studio/worlds/world-1', OWNER);
  assert.equal(after.status, 200);
  assert.equal(after.json.revision, before.json.revision);
  assert.equal(after.json.digest, before.json.digest);
  assert.equal(reopened.service.storage.listEvents('world-1').length, eventCountBefore);
  assert.equal(reopened.service.verifyReplay('world-1').status, 'MATCH');
});

// ---------------------------------------------------------------------
// Remediation tests (audit A-47): each is titled with its finding ID
// so the re-audit maps 1:1. The 16 S02 tests above are unchanged in
// their assertions; legitimate-recipient requests now also present
// the recipient's own visitor credential (F-01).
// ---------------------------------------------------------------------

test('F-01 wrong recipient with a valid token is denied', async (t) => {
  const { base } = await startApp(t);
  await makeWorld(base);
  await addTerritoryAndTopic(base);
  const { invitationToken } = await makeGrant(base); // named recipient: visitor-1
  const recipientCredential = await makeVisitorCredential(base, 'visitor-1');
  const wrongCredential = await makeVisitorCredential(base, 'visitor-2');
  // The named recipient, authenticating as themselves, is served.
  const legit = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken, visitorCredential: recipientCredential,
  });
  assert.equal(legit.status, 200);
  assert.deepEqual(legit.json.perspective, FIXTURE_PAYLOADS.CONTINENT);
  // A valid token in the wrong recipient's hands is denied — with the
  // identical generic body a forged token receives.
  const forged = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: 'forged-token', visitorCredential: recipientCredential,
  });
  assert.equal(forged.status, 403);
  const wrong = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken, visitorCredential: wrongCredential,
  });
  assert.equal(wrong.status, 403);
  assert.deepEqual(wrong.json, forged.json);
  assert.ok(!wrong.text.includes('SYN-T1'));
  // A submitted recipientId is never trusted: claiming visitor-1 in
  // the query while authenticating as visitor-2 changes nothing.
  const spoofed = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective?recipientId=visitor-1', {
    visitorToken: invitationToken, visitorCredential: wrongCredential,
  });
  assert.equal(spoofed.status, 403);
  assert.deepEqual(spoofed.json, forged.json);
  // Token alone (no credential) and a forged credential both fail.
  const noCredential = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken,
  });
  assert.equal(noCredential.status, 403);
  const forgedCredential = await api(base, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken, visitorCredential: 'forged-credential',
  });
  assert.equal(forgedCredential.status, 403);
  assert.deepEqual(forgedCredential.json, forged.json);
});

test('F-01 wrong recipient denied after fresh restart', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  const { invitationToken } = await makeGrant(app.base);
  const recipientCredential = await makeVisitorCredential(app.base, 'visitor-1');
  const wrongCredential = await makeVisitorCredential(app.base, 'visitor-2');
  await app.close();
  // Reopen the same data directory in a new app instance: the
  // recipient binding is persisted state, not process memory.
  const reopened = createApp({ dataDir: app.dataDir, ownerTokens: { 'owner-token': 'owner-1', 'other-token': 'owner-2' } });
  await new Promise((resolve) => reopened.server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    reopened.server.closeAllConnections?.();
    await new Promise((resolve) => reopened.server.close(resolve));
    reopened.service.close();
  });
  const base2 = `http://127.0.0.1:${reopened.server.address().port}`;
  const wrong = await api(base2, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken, visitorCredential: wrongCredential,
  });
  assert.equal(wrong.status, 403);
  assert.ok(!wrong.text.includes('SYN-T1'));
  const legit = await api(base2, 'GET', '/api/visitor/worlds/world-1/perspective', {
    visitorToken: invitationToken, visitorCredential: recipientCredential,
  });
  assert.equal(legit.status, 200);
  assert.deepEqual(legit.json.perspective, FIXTURE_PAYLOADS.CONTINENT);
});

test('F-02 grant creation is atomic: a failed projection write leaves neither grant nor projection', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  // Inject a deterministic failure at the second write of grant
  // creation (the derived-projection insert), inside its transaction.
  app.storage.faultAt = 'grant-projection';
  assert.throws(
    () => app.service.createGrant('owner-1', 'world-1', {
      recipientId: 'visitor-1', resolution: 'CONTINENT', expiresAt: FUTURE,
    }),
    /Injected fault/,
  );
  app.storage.faultAt = null;
  assert.equal(app.storage.listGrants('world-1').length, 0);
  assert.equal(app.storage.listDerivedProjections('world-1').length, 0);
  // With the fault cleared, the same operation persists both together.
  const { grant } = app.service.createGrant('owner-1', 'world-1', {
    recipientId: 'visitor-1', resolution: 'CONTINENT', expiresAt: FUTURE,
  });
  assert.equal(app.storage.listGrants('world-1').length, 1);
  assert.equal(app.storage.listGrants('world-1')[0].grantId, grant.grantId);
  assert.equal(app.storage.listDerivedProjections('world-1').length, 1);
});

test('F-03 replay quarantine persists across restart: visitor still denied in a fresh process', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const { invitationToken } = await makeGrant(app.base);
  const visitorCredential = await makeVisitorCredential(app.base);
  const record = app.storage.getWorldRecord('world-1');
  const tampered = structuredClone(record.projection);
  tampered.nodes['secret-topic'].strength = 0.99;
  app.storage.replaceProjection('world-1', tampered);
  assert.equal(app.service.verifyReplay('world-1').status, 'MISMATCH');
  assert.equal(app.storage.isQuarantined('world-1'), true);
  await app.close();
  // A genuinely fresh process re-opens the store: the quarantine flag
  // persisted and the visitor path still serves nothing.
  const { stdout } = await execFileP(process.execPath, [
    '--disable-warning=ExperimentalWarning',
    join(appDir, 'test', 'helpers', 'visitor-probe.mjs'),
    app.dataDir, 'world-1', invitationToken, visitorCredential,
  ]);
  const probe = JSON.parse(stdout);
  assert.equal(probe.quarantined, true);
  assert.equal(probe.outcome, 'denied');
  assert.equal(probe.status, 503);
});

test('F-04 appendTransition fault injection at each internal write step recovers to the last committed revision', async (t) => {
  const app = await startApp(t);
  await makeWorld(app.base);
  await addTerritoryAndTopic(app.base);
  const before = app.service.getStudioView('owner-1', 'world-1');
  assert.equal(before.revision, 2);
  const eventCountBefore = app.storage.listEvents('world-1').length;
  // Interrupt the full service operation (correct -> #transact ->
  // appendTransition) deterministically at each storage-write step
  // inside it. Every interruption must roll the whole transition
  // back: revision, digest, ledger, and idempotency all untouched.
  for (const step of ['transition-event', 'transition-projection', 'transition-idempotency']) {
    app.storage.faultAt = step;
    assert.throws(
      () => app.service.correct('owner-1', 'world-1', {
        topicId: 'secret-topic', type: 'BOOST', expectedRevision: 2, idempotencyKey: `fault-${step}`,
      }),
      /Injected fault/,
      `expected injected fault at ${step}`,
    );
    app.storage.faultAt = null;
    const view = app.service.getStudioView('owner-1', 'world-1');
    assert.equal(view.revision, before.revision, `revision moved after fault at ${step}`);
    assert.equal(view.digest, before.digest, `digest changed after fault at ${step}`);
    assert.equal(app.storage.listEvents('world-1').length, eventCountBefore);
    assert.equal(app.service.verifyReplay('world-1').status, 'MATCH');
  }
  // With faults cleared, the same correction commits cleanly — the
  // failed attempts consumed neither the revision nor the effect.
  const committed = app.service.correct('owner-1', 'world-1', {
    topicId: 'secret-topic', type: 'BOOST', expectedRevision: 2, idempotencyKey: 'fault-final',
  });
  assert.equal(committed.revision, 3);
});
