// Storage port and its provisional SQLite adapter.
//
// THE PORT (the contract the domain service depends on):
//   init() / close()
//   sweepTempFiles()
//   createWorld({ world, event })
//   getWorldRecord(worldId)            -> { projection, quarantined } | null
//   appendTransition({ worldId, expectedRevision, event, projection,
//                      idempotency })  -> committed revision (CAS)
//   getIdempotency(scope, key)         -> { requestHash, response } | null
//   listEvents(worldId)                -> [event, ...] in revision order
//   replaceProjection(worldId, projection)
//   setQuarantined(worldId, flag) / isQuarantined(worldId)
//   createGrant(grant) / getGrant(grantId) / getGrantByTokenHash(hash)
//   updateGrant(grant) / listGrants(worldId)
//   createGrantWithProjection(grant, projectionRecord)
//        -> grant + derived projection in ONE transaction (F-02)
//   saveDerivedProjection(record) / listDerivedProjections(worldId)
//   createVisitorPrincipal({ recipientId, credentialHash })
//   getVisitorPrincipalByCredentialHash(hash) -> { recipientId } | null
//        (F-01: visitor credentials are stored hashed, never in clear)
//   deleteWorld(worldId)               -> logical-deletion manifest counts
//   getDeletionManifest(worldId)
//   destroyDataDirectory()
//
// The SQLite implementation below is PROVISIONAL (proposal §6): it is
// an adapter behind this port and decides nothing about production
// persistence (Q-21). No SQLite concept appears in any other module.
//
// Retention boundary (R-03): everything persistent lives in one data
// directory — the database file and its WAL auxiliary files, nothing
// else. No backups, no exports. Journal mode is WAL; -wal/-shm are
// part of the database and are deleted only with the whole directory.

import { DatabaseSync } from 'node:sqlite';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { conflict } from './domain.js';

export const DB_FILENAME = 'see-my-world.db';

export class SqliteStorage {
  constructor(dataDir) {
    this.dataDir = dataDir;
    this.dbPath = join(dataDir, DB_FILENAME);
    this.db = null;
    // Deterministic fault-injection hook for the F-02/F-04 atomicity
    // tests: when set to a named write step, that step throws inside
    // its transaction, which must roll the whole operation back.
    // Always null in normal operation.
    this.faultAt = null;
  }

  init() {
    mkdirSync(this.dataDir, { recursive: true });
    this.sweepTempFiles();
    this.db = new DatabaseSync(this.dbPath);
    this.db.exec('PRAGMA journal_mode = WAL;');
    this.db.exec('PRAGMA foreign_keys = ON;');
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS worlds (
        world_id TEXT PRIMARY KEY,
        owner_id TEXT NOT NULL,
        revision INTEGER NOT NULL,
        projection_json TEXT NOT NULL,
        quarantined INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS events (
        world_id TEXT NOT NULL,
        revision INTEGER NOT NULL,
        event_id TEXT NOT NULL,
        event_json TEXT NOT NULL,
        PRIMARY KEY (world_id, revision)
      );
      CREATE TABLE IF NOT EXISTS idempotency (
        scope TEXT NOT NULL,
        key TEXT NOT NULL,
        request_hash TEXT NOT NULL,
        response_json TEXT NOT NULL,
        PRIMARY KEY (scope, key)
      );
      CREATE TABLE IF NOT EXISTS grants (
        grant_id TEXT PRIMARY KEY,
        world_id TEXT NOT NULL,
        token_hash TEXT NOT NULL UNIQUE,
        grant_json TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS derived_projections (
        projection_id TEXT NOT NULL,
        world_id TEXT NOT NULL,
        revision INTEGER NOT NULL,
        payload_json TEXT NOT NULL,
        PRIMARY KEY (world_id, projection_id)
      );
      CREATE TABLE IF NOT EXISTS deletion_manifest (
        world_id TEXT PRIMARY KEY,
        manifest_json TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS visitor_principals (
        credential_hash TEXT PRIMARY KEY,
        recipient_id TEXT NOT NULL
      );
    `);
    return this;
  }

  // Remove transient files a crash may have left inside the data
  // directory. Only *.tmp / *.staging files are ever swept; the
  // database and its WAL auxiliaries are never touched here.
  sweepTempFiles() {
    if (!existsSync(this.dataDir)) return;
    for (const entry of readdirSync(this.dataDir)) {
      if (entry.endsWith('.tmp') || entry.endsWith('.staging')) {
        rmSync(join(this.dataDir, entry), { force: true });
      }
    }
  }

  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  createWorld({ world, event }) {
    const tx = this.#transaction(() => {
      this.db.prepare(
        'INSERT INTO worlds (world_id, owner_id, revision, projection_json) VALUES (?, ?, ?, ?)',
      ).run(world.id, world.ownerId, world.revision, JSON.stringify(world));
      this.#insertEvent(event);
    });
    tx();
  }

  getWorldRecord(worldId) {
    const row = this.db.prepare('SELECT projection_json, quarantined FROM worlds WHERE world_id = ?').get(worldId);
    if (!row) return null;
    return { projection: JSON.parse(row.projection_json), quarantined: row.quarantined === 1 };
  }

  appendTransition({ worldId, expectedRevision, event, projection, idempotency }) {
    const run = this.#transaction(() => {
      const row = this.db.prepare('SELECT revision FROM worlds WHERE world_id = ?').get(worldId);
      if (!row || row.revision !== expectedRevision) {
        throw conflict('Revision conflict: the World has moved since the expected revision');
      }
      this.#insertEvent(event);
      this.#maybeFault('transition-event');
      this.db.prepare('UPDATE worlds SET revision = ?, projection_json = ? WHERE world_id = ?')
        .run(projection.revision, JSON.stringify(projection), worldId);
      this.#maybeFault('transition-projection');
      if (idempotency) {
        this.db.prepare('INSERT INTO idempotency (scope, key, request_hash, response_json) VALUES (?, ?, ?, ?)')
          .run(idempotency.scope, idempotency.key, idempotency.requestHash, JSON.stringify(idempotency.response));
        this.#maybeFault('transition-idempotency');
      }
    });
    run();
    return projection.revision;
  }

  getIdempotency(scope, key) {
    const row = this.db.prepare('SELECT request_hash, response_json FROM idempotency WHERE scope = ? AND key = ?').get(scope, key);
    if (!row) return null;
    return { requestHash: row.request_hash, response: JSON.parse(row.response_json) };
  }

  listEvents(worldId) {
    return this.db.prepare('SELECT event_json FROM events WHERE world_id = ? ORDER BY revision ASC')
      .all(worldId)
      .map((row) => JSON.parse(row.event_json));
  }

  replaceProjection(worldId, projection) {
    this.db.prepare('UPDATE worlds SET revision = ?, projection_json = ? WHERE world_id = ?')
      .run(projection.revision, JSON.stringify(projection), worldId);
  }

  setQuarantined(worldId, flag) {
    this.db.prepare('UPDATE worlds SET quarantined = ? WHERE world_id = ?').run(flag ? 1 : 0, worldId);
  }

  isQuarantined(worldId) {
    const row = this.db.prepare('SELECT quarantined FROM worlds WHERE world_id = ?').get(worldId);
    return row ? row.quarantined === 1 : false;
  }

  createGrant(grant) {
    this.#insertGrant(grant);
  }

  // F-02: the grant and its derived projection persist in ONE
  // transaction. A failure of the projection write (injected in the
  // F-02 test at the 'grant-projection' step) rolls the grant back
  // with it — a grant without its projection can never be observed.
  createGrantWithProjection(grant, projectionRecord) {
    const run = this.#transaction(() => {
      this.#insertGrant(grant);
      this.#maybeFault('grant-projection');
      this.#insertDerivedProjection(projectionRecord);
    });
    run();
  }

  #insertGrant(grant) {
    this.db.prepare('INSERT INTO grants (grant_id, world_id, token_hash, grant_json) VALUES (?, ?, ?, ?)')
      .run(grant.grantId, grant.worldId, grant.tokenHash, JSON.stringify(grant));
  }

  getGrant(grantId) {
    const row = this.db.prepare('SELECT grant_json FROM grants WHERE grant_id = ?').get(grantId);
    return row ? JSON.parse(row.grant_json) : null;
  }

  getGrantByTokenHash(tokenHash) {
    const row = this.db.prepare('SELECT grant_json FROM grants WHERE token_hash = ?').get(tokenHash);
    return row ? JSON.parse(row.grant_json) : null;
  }

  updateGrant(grant) {
    this.db.prepare('UPDATE grants SET grant_json = ? WHERE grant_id = ?')
      .run(JSON.stringify(grant), grant.grantId);
  }

  listGrants(worldId) {
    return this.db.prepare('SELECT grant_json FROM grants WHERE world_id = ? ORDER BY grant_id ASC')
      .all(worldId)
      .map((row) => JSON.parse(row.grant_json));
  }

  saveDerivedProjection(record) {
    this.#insertDerivedProjection(record);
  }

  #insertDerivedProjection(record) {
    this.db.prepare(
      'INSERT OR REPLACE INTO derived_projections (projection_id, world_id, revision, payload_json) VALUES (?, ?, ?, ?)',
    ).run(record.projectionId, record.worldId, record.revision, JSON.stringify(record.payload));
  }

  // F-01: visitor-principal registry. Only the credential's SHA-256
  // hash is stored; the service resolves a presented credential to
  // its recipientId server-side and never trusts a submitted ID.
  createVisitorPrincipal({ recipientId, credentialHash }) {
    this.db.prepare('INSERT INTO visitor_principals (credential_hash, recipient_id) VALUES (?, ?)')
      .run(credentialHash, recipientId);
  }

  getVisitorPrincipalByCredentialHash(credentialHash) {
    const row = this.db.prepare('SELECT recipient_id FROM visitor_principals WHERE credential_hash = ?').get(credentialHash);
    return row ? { recipientId: row.recipient_id } : null;
  }

  listDerivedProjections(worldId) {
    return this.db.prepare('SELECT payload_json FROM derived_projections WHERE world_id = ? ORDER BY projection_id ASC')
      .all(worldId)
      .map((row) => JSON.parse(row.payload_json));
  }

  // Logical deletion (C-02): removes the World's rows and every
  // derived projection in one operation and records a counts-only
  // manifest. This establishes logical deletion only; physical
  // erasure is not claimed and was not tested.
  deleteWorld(worldId) {
    let manifest;
    const run = this.#transaction(() => {
      const counts = {};
      for (const table of ['derived_projections', 'grants', 'events']) {
        const info = this.db.prepare(`DELETE FROM ${table} WHERE world_id = ?`).run(worldId);
        counts[table] = Number(info.changes);
      }
      const prefix = `${worldId}:`;
      const idem = this.db.prepare('DELETE FROM idempotency WHERE scope LIKE ?').run(`${prefix}%`);
      counts.idempotency = Number(idem.changes);
      const info = this.db.prepare('DELETE FROM worlds WHERE world_id = ?').run(worldId);
      counts.worlds = Number(info.changes);
      manifest = { worldId, deleted: counts, kind: 'LOGICAL_DELETION' };
      this.db.prepare('INSERT OR REPLACE INTO deletion_manifest (world_id, manifest_json) VALUES (?, ?)')
        .run(worldId, JSON.stringify(manifest));
    });
    run();
    return manifest;
  }

  getDeletionManifest(worldId) {
    const row = this.db.prepare('SELECT manifest_json FROM deletion_manifest WHERE world_id = ?').get(worldId);
    return row ? JSON.parse(row.manifest_json) : null;
  }

  // Delete the whole data directory — database, -wal, and -shm
  // together. Deleting the main file alone is not deletion (R-03).
  destroyDataDirectory() {
    this.close();
    rmSync(this.dataDir, { recursive: true, force: true });
  }

  #maybeFault(step) {
    if (this.faultAt === step) {
      throw new Error(`Injected fault at storage write step: ${step}`);
    }
  }

  #insertEvent(event) {
    this.db.prepare('INSERT INTO events (world_id, revision, event_id, event_json) VALUES (?, ?, ?, ?)')
      .run(event.worldId, event.revision, event.eventId, JSON.stringify(event));
  }

  #transaction(fn) {
    return () => {
      this.db.exec('BEGIN IMMEDIATE');
      try {
        fn();
        this.db.exec('COMMIT');
      } catch (error) {
        this.db.exec('ROLLBACK');
        throw error;
      }
    };
  }
}
