// The shared world-data core: one service behind both surfaces.
//
// Studio (owner authoring) writes only through the testimony reducer
// and the append-only ledger. Explorer (reading) never reads the
// private World for a visitor: the visitor path checks a Lens grant
// at the moment of the attempt and serves a preapproved synthetic
// fixture verbatim (proposal §§3–4; R-01). Enforcement happens here,
// server-side, before any data reaches an interface.

import { randomBytes } from 'node:crypto';
import {
  CORRECTION_TYPES,
  DECLARATION_WEIGHTS,
  REDUCER_VERSION,
  RESOLUTIONS,
  ApiError,
  badRequest,
  canonicalDigest,
  conflict,
  forbidden,
  hashToken,
  notFound,
  nowIso,
  requestHash,
  requireId,
  requireIsoTime,
} from './domain.js';
import { FIXTURE_PAYLOADS } from './fixtures.js';
import { applyEvent, emptyProjection, foldEvents, materialiseNode, reduceTestimonyV1 } from './reducer.js';

const randomId = (prefix) => `${prefix}-${randomBytes(6).toString('hex')}`;

export class WorldService {
  // ownerTokens: { [bearerToken]: ownerId } — local fixture identities
  // for the prototype. The principal always comes from this server-side
  // session context, never from a request body (CORE-COR-05).
  constructor(storage, { ownerTokens = {} } = {}) {
    this.storage = storage;
    this.ownerTokens = ownerTokens;
  }

  authenticateOwner(token) {
    const ownerId = typeof token === 'string' ? this.ownerTokens[token] : undefined;
    if (!ownerId) throw forbidden();
    return ownerId;
  }

  // ---- Visitor principals (F-01) ---------------------------------------
  // A named recipient holds a visitor credential of their own: a
  // random secret, distinct from any Invitation token, shown once at
  // registration and stored only as a SHA-256 hash. The service
  // resolves a presented credential to its recipientId server-side —
  // mirroring the owner-token mapping above — so a submitted
  // recipientId is never trusted on its own.

  registerVisitorPrincipal(recipientId) {
    requireId(recipientId, 'recipientId');
    const credential = randomBytes(24).toString('hex');
    this.storage.createVisitorPrincipal({ recipientId, credentialHash: hashToken(credential) });
    return { recipientId, visitorCredential: credential };
  }

  #resolveVisitorPrincipal(credential) {
    if (typeof credential !== 'string' || credential.length === 0) throw forbidden();
    const principal = this.storage.getVisitorPrincipalByCredentialHash(hashToken(credential));
    if (!principal) throw forbidden();
    return principal.recipientId;
  }

  close() {
    this.storage.close();
  }

  // ---- Studio: world and territory authoring --------------------------

  createWorld(ownerId, { worldId, at = nowIso() } = {}) {
    const id = worldId ? requireId(worldId, 'worldId') : randomId('world');
    if (this.storage.getWorldRecord(id)) {
      throw conflict('A World with this id already exists', 'WORLD_EXISTS');
    }
    const projection = emptyProjection(id, ownerId, at);
    const event = {
      eventId: `${id}:0`,
      worldId: id,
      revision: 0,
      type: 'WORLD_CREATED',
      actor: ownerId,
      at,
      reducerVersion: REDUCER_VERSION,
      idempotencyKey: null,
      data: { ownerId },
    };
    this.storage.createWorld({ world: projection, event });
    return this.getStudioView(ownerId, id, at);
  }

  addTerritory(ownerId, worldId, { territoryId, name, expectedRevision, idempotencyKey, at = nowIso() }) {
    requireId(territoryId, 'territoryId');
    if (typeof name !== 'string' || name.length === 0 || name.length > 120) {
      throw badRequest('Invalid territory name');
    }
    return this.#transact({
      ownerId, worldId, operation: 'ADD_TERRITORY', idempotencyKey, expectedRevision, at,
      payload: { territoryId, name, expectedRevision },
      apply: (projection) => {
        if (projection.territories[territoryId]) {
          throw conflict('Territory already exists', 'TERRITORY_EXISTS');
        }
        return {
          event: { type: 'TERRITORY_ADDED', data: { territoryId, name } },
          response: { territory: { id: territoryId, name } },
        };
      },
    });
  }

  declareTopic(ownerId, worldId, { topicId, territoryId, name, provenance, strength, expectedRevision, idempotencyKey, at = nowIso() }) {
    requireId(topicId, 'topicId');
    requireId(territoryId, 'territoryId');
    if (!(provenance in DECLARATION_WEIGHTS)) {
      throw badRequest(`Unsupported declaration provenance: ${provenance}`);
    }
    if (typeof strength !== 'number' || strength < 0 || strength > 1) {
      throw badRequest('Invalid strength');
    }
    const label = name === undefined ? topicId : name;
    if (typeof label !== 'string' || label.length === 0 || label.length > 200) {
      throw badRequest('Invalid topic name');
    }
    return this.#transact({
      ownerId, worldId, operation: 'DECLARE_TOPIC', idempotencyKey, expectedRevision, at,
      payload: { topicId, territoryId, name: label, provenance, strength, expectedRevision },
      apply: (projection) => {
        if (!projection.territories[territoryId]) throw badRequest(`Unknown territory: ${territoryId}`);
        if (projection.nodes[topicId]) throw conflict('Topic already exists', 'TOPIC_EXISTS');
        return {
          event: { type: 'TOPIC_DECLARED', data: { topicId, territoryId, name: label, provenance, strength } },
          response: { topicId, provenance, strength },
        };
      },
    });
  }

  // ---- Studio: corrections (testimony-v1, CORE-COR-05 order) ----------

  correct(ownerId, worldId, { topicId, type, expectedRevision, idempotencyKey, at = nowIso() }) {
    requireId(topicId, 'topicId');
    if (!CORRECTION_TYPES.includes(type)) {
      // Includes CONFIRM: no such operation exists in this slice
      // (Q-01/D-34 unresolved; S02-09).
      throw badRequest(`Unsupported correction type: ${type}`, 'UNSUPPORTED_CORRECTION_TYPE');
    }
    return this.#transact({
      ownerId, worldId, operation: 'CORRECT', idempotencyKey, expectedRevision, at,
      payload: { topicId, type, expectedRevision },
      apply: (projection) => {
        const node = projection.nodes[topicId];
        if (!node) throw badRequest(`Unknown topic: ${topicId}`);
        const materialised = materialiseNode(node, at);
        const reduced = reduceTestimonyV1(materialised, type, at);
        return {
          event: { type: 'TOPIC_CORRECTED', data: { topicId, correctionType: type } },
          response: {
            topic: reduced,
            receipt: { reducerVersion: REDUCER_VERSION, rule: type, revision: projection.revision + 1 },
          },
        };
      },
    });
  }

  restoreTopic(ownerId, worldId, { topicId, provenance, strength, confirmed, expectedRevision, idempotencyKey, at = nowIso() }) {
    requireId(topicId, 'topicId');
    if (confirmed !== true) throw badRequest('Restore requires explicit confirmation');
    if (!['PROPOSED', 'CONFIRMED', 'DECLARED'].includes(provenance)) {
      throw badRequest(`Unsupported restore provenance: ${provenance}`);
    }
    if (typeof strength !== 'number' || strength < 0 || strength > 1) {
      throw badRequest('Invalid strength');
    }
    return this.#transact({
      ownerId, worldId, operation: 'RESTORE', idempotencyKey, expectedRevision, at,
      payload: { topicId, provenance, strength, confirmed, expectedRevision },
      apply: (projection) => {
        const node = projection.nodes[topicId];
        if (!node) throw badRequest(`Unknown topic: ${topicId}`);
        if (node.provenance !== 'REFUTED') throw badRequest('Topic is not refuted');
        return {
          event: { type: 'TOPIC_RESTORED', data: { topicId, provenance, strength } },
          response: { topicId, provenance, strength },
        };
      },
    });
  }

  removeBuoy(ownerId, worldId, { topicId, expectedRevision, idempotencyKey, at = nowIso() }) {
    requireId(topicId, 'topicId');
    return this.#transact({
      ownerId, worldId, operation: 'REMOVE_BUOY', idempotencyKey, expectedRevision, at,
      payload: { topicId, expectedRevision },
      apply: (projection) => {
        if (!projection.nodes[topicId]) throw badRequest(`Unknown topic: ${topicId}`);
        return {
          event: { type: 'BUOY_REMOVED', data: { topicId } },
          response: { topicId, buoy: false },
        };
      },
    });
  }

  // ---- Lens grants (named-recipient Invitations only) -----------------

  createGrant(ownerId, worldId, { recipientId, resolution, expiresAt, at = nowIso() }) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    requireId(recipientId, 'recipientId');
    if (!RESOLUTIONS.includes(resolution)) throw badRequest(`Unsupported resolution: ${resolution}`);
    const expiry = requireIsoTime(expiresAt, 'expiresAt');
    const token = randomBytes(24).toString('hex');
    const grant = {
      grantId: randomId('grant'),
      worldId,
      recipientId,
      resolution,
      expiresAt: expiry,
      createdAt: at,
      revokedAt: null,
      boundRevision: record.projection.revision,
      tokenHash: hashToken(token),
    };
    // The derived projection for this grant is the preapproved fixture
    // payload, bound to (world, revision, Atlas version). It is
    // derived data and is deleted with its World (R-03). Grant and
    // projection persist in ONE atomic storage operation (F-02).
    const payload = FIXTURE_PAYLOADS[resolution];
    this.storage.createGrantWithProjection(grant, {
      projectionId: payload.perspectiveId,
      worldId,
      revision: grant.boundRevision,
      payload,
    });
    return { grant: publicGrant(grant), invitationToken: token };
  }

  revokeGrant(ownerId, worldId, grantId, { at = nowIso() } = {}) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    const grant = this.storage.getGrant(grantId);
    if (!grant || grant.worldId !== worldId) throw notFound();
    grant.revokedAt = at;
    this.storage.updateGrant(grant);
    return { grant: publicGrant(grant) };
  }

  listGrants(ownerId, worldId) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    return this.storage.listGrants(worldId).map(publicGrant);
  }

  // ---- Explorer: owner reading ----------------------------------------

  getExplorerView(ownerId, worldId, at = nowIso()) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    return { surface: 'explorer', ...this.#worldView(record.projection, at) };
  }

  getStudioView(ownerId, worldId, at = nowIso()) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    const events = this.storage.listEvents(worldId);
    return {
      surface: 'studio',
      ...this.#worldView(record.projection, at),
      availableCorrectionTypes: [...CORRECTION_TYPES],
      grants: this.storage.listGrants(worldId).map(publicGrant),
      receipts: events.map((event) => ({
        revision: event.revision,
        type: event.type,
        rule: event.data?.correctionType ?? event.type,
        reducerVersion: event.reducerVersion,
        at: event.at,
      })),
    };
  }

  // ---- Visitor path: grant-checked fixture disclosure ------------------

  getVisitorPerspective({ worldId, token, visitorCredential, at = nowIso() }) {
    // Fail closed on every check, at the moment of the attempt
    // (CORE-LENS-07). Denials carry no private data, no counts, and
    // no distinguishing detail (CORE-VIS-06).
    if (this.storage.isQuarantined(worldId)) {
      throw new ApiError(503, 'PERSPECTIVE_UNAVAILABLE', 'Perspective unavailable');
    }
    if (!token) throw forbidden();
    const grant = this.storage.getGrantByTokenHash(hashToken(token));
    if (!grant || grant.worldId !== worldId) throw forbidden();
    // F-01: possessing the Invitation token is not enough. The
    // visitor must also authenticate as a principal, resolved
    // server-side from their own credential, and that principal must
    // be the grant's named recipient.
    const recipientId = this.#resolveVisitorPrincipal(visitorCredential);
    if (recipientId !== grant.recipientId) throw forbidden();
    if (grant.revokedAt) throw forbidden();
    if (Date.parse(grant.expiresAt) <= Date.parse(at)) throw forbidden();
    const record = this.storage.getWorldRecord(worldId);
    if (!record) throw forbidden();
    const fixture = FIXTURE_PAYLOADS[grant.resolution];
    const derived = this.storage.listDerivedProjections(worldId)
      .find((entry) => entry.perspectiveId === fixture.perspectiveId);
    if (!derived) throw forbidden();
    return {
      grant: {
        grantId: grant.grantId,
        recipientId: grant.recipientId,
        resolution: grant.resolution,
        worldRevision: grant.boundRevision,
        expiresAt: grant.expiresAt,
      },
      // Served verbatim: the stored fixture payload, unmodified.
      perspective: derived,
    };
  }

  // ---- Integrity and deletion ------------------------------------------

  verifyReplay(worldId) {
    const record = this.#requireWorld(worldId);
    const events = this.storage.listEvents(worldId);
    const folded = foldEvents(worldId, events);
    const storedDigest = canonicalDigest(record.projection);
    const replayDigest = canonicalDigest(folded);
    const match = storedDigest === replayDigest;
    // Digest gate (proposal §6): a mismatch quarantines derived
    // projections; the visitor path serves nothing while quarantined.
    this.storage.setQuarantined(worldId, !match);
    return { status: match ? 'MATCH' : 'MISMATCH', digest: storedDigest, replayDigest };
  }

  deleteWorld(ownerId, worldId) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    return this.storage.deleteWorld(worldId);
  }

  // ---- internals --------------------------------------------------------

  #requireWorld(worldId) {
    const record = this.storage.getWorldRecord(worldId);
    if (!record) throw notFound();
    return record;
  }

  #requireOwnership(record, ownerId) {
    if (record.projection.ownerId !== ownerId) throw forbidden();
  }

  #worldView(projection, at) {
    const nodes = Object.values(projection.nodes).map((node) => materialiseNode(node, at));
    return {
      worldId: projection.id,
      ownerId: projection.ownerId,
      revision: projection.revision,
      digest: canonicalDigest(projection),
      atlasVersion: projection.atlasVersion,
      algorithmVersion: projection.algorithmVersion,
      territories: Object.values(projection.territories),
      nodes,
    };
  }

  // The Ch. 25 processing order, shared by every owner mutation:
  // authorise ownership -> validate (in apply) -> idempotency check ->
  // expected-revision check -> apply the versioned rule -> persist
  // state + ledger event + receipt + idempotency result atomically.
  #transact({ ownerId, worldId, operation, idempotencyKey, expectedRevision, at, payload, apply }) {
    const record = this.#requireWorld(worldId);
    this.#requireOwnership(record, ownerId);
    const scope = `${worldId}:${operation}`;
    const hash = requestHash(payload);
    if (idempotencyKey) {
      const prior = this.storage.getIdempotency(scope, idempotencyKey);
      if (prior) {
        if (prior.requestHash !== hash) {
          throw conflict('Idempotency key reused with a different request', 'IDEMPOTENCY_CONFLICT');
        }
        return prior.response;
      }
    }
    const projection = record.projection;
    if (expectedRevision !== undefined && expectedRevision !== projection.revision) {
      throw conflict('Revision conflict: the World has moved since the expected revision');
    }
    const { event, response } = apply(structuredClone(projection));
    const fullEvent = {
      eventId: `${worldId}:${projection.revision + 1}`,
      worldId,
      revision: projection.revision + 1,
      actor: ownerId,
      at,
      reducerVersion: REDUCER_VERSION,
      idempotencyKey: idempotencyKey ?? null,
      ...event,
    };
    const nextProjection = applyEvent(projection, fullEvent);
    const finalResponse = {
      ...response,
      revision: nextProjection.revision,
      digest: canonicalDigest(nextProjection),
    };
    this.storage.appendTransition({
      worldId,
      expectedRevision: projection.revision,
      event: fullEvent,
      projection: nextProjection,
      idempotency: idempotencyKey
        ? { scope, key: idempotencyKey, requestHash: hash, response: finalResponse }
        : null,
    });
    return finalResponse;
  }
}

export function publicGrant(grant) {
  const { tokenHash, ...rest } = grant;
  return rest;
}
