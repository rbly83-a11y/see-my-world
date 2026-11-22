// The testimony-v1 reducer and the ledger fold (Bible Ch. 7; CORE-COR).
//
// Pure functions only: no storage, no transport, no clock access.
// Current state is a deterministic fold over the append-only ledger;
// replaying the same events reproduces the same projection and digest.

import {
  ApiError,
  BUOY_FLOOR,
  DECLARATION_WEIGHTS,
  HALF_LIVES_DAYS,
  REDUCER_VERSION,
  badRequest,
  round6,
} from './domain.js';

export function emptyProjection(worldId, ownerId, at) {
  return {
    id: worldId,
    ownerId,
    revision: 0,
    atlasVersion: 'atlas-v1',
    algorithmVersion: REDUCER_VERSION,
    lifecycle: 'active',
    createdAt: at,
    territories: {},
    nodes: {},
  };
}

// Materialise tidal decay to an authoritative time (materialise first,
// then reduce — CORE-COR-07). Returns a copy; never mutates the node.
export function materialiseNode(node, atIso) {
  const next = { ...node };
  if (node.provenance === 'REFUTED' || !node.lastWitnessed) return next;
  const elapsedMs = Date.parse(atIso) - Date.parse(node.lastWitnessed);
  if (!(elapsedMs > 0)) return next;
  const halfLife = HALF_LIVES_DAYS[node.provenance];
  if (!halfLife) return next;
  const factor = 2 ** (-(elapsedMs / 86400000) / halfLife);
  let strength = round6(node.strength * factor);
  if (node.buoy) strength = Math.max(strength, BUOY_FLOOR);
  next.strength = strength;
  return next;
}

// The four v1 operators, with frozen arithmetic (CORE-COR-01).
// The known BOOST-from-zero defect is carried, not patched (CORE-COR-04).
export function reduceTestimonyV1(node, type, atIso) {
  if (node.provenance === 'REFUTED') {
    throw new ApiError(400, 'EXPLICIT_RESTORATION_REQUIRED', 'Explicit restoration required');
  }
  const next = { ...node };
  switch (type) {
    case 'BOOST':
      next.strength = Math.min(1, round6(node.strength * 1.5));
      next.testimony = round6(node.testimony + 1.0);
      next.provenance = 'DECLARED';
      break;
    case 'REDUCE':
      next.strength = round6(node.strength * 0.6);
      next.testimony = round6(node.testimony + 0.5);
      break;
    case 'REJECT':
      next.provenance = 'REFUTED';
      next.testimony = round6(node.testimony + 1.0);
      break;
    case 'KEEP_WATCHING':
      next.buoy = true;
      next.strength = Math.max(node.strength, BUOY_FLOOR);
      next.testimony = round6(node.testimony + 0.3);
      break;
    default:
      throw badRequest(`Unsupported correction type: ${type}`, 'UNSUPPORTED_CORRECTION_TYPE');
  }
  next.lastWitnessed = atIso;
  return next;
}

// Fold one ledger event into a projection. Corrections are recomputed
// from their recorded inputs (operator + event time), never copied
// from a stored snapshot, so replay genuinely re-derives state.
export function applyEvent(projection, event) {
  const next = structuredClone(projection);
  const data = event.data ?? {};
  next.revision = event.revision;
  switch (event.type) {
    case 'WORLD_CREATED':
      return emptyProjection(event.worldId, data.ownerId, event.at);
    case 'TERRITORY_ADDED':
      next.territories[data.territoryId] = {
        id: data.territoryId,
        name: data.name,
        topicIds: [],
      };
      break;
    case 'TOPIC_DECLARED': {
      const node = {
        topicId: data.topicId,
        territoryId: data.territoryId,
        name: data.name,
        strength: round6(data.strength),
        testimony: DECLARATION_WEIGHTS[data.provenance] ?? 0,
        provenance: data.provenance,
        buoy: false,
        lastWitnessed: event.at,
        revision: event.revision,
      };
      next.nodes[data.topicId] = node;
      const territory = next.territories[data.territoryId];
      if (territory && !territory.topicIds.includes(data.topicId)) {
        territory.topicIds.push(data.topicId);
      }
      break;
    }
    case 'TOPIC_CORRECTED': {
      const current = next.nodes[data.topicId];
      if (!current) throw badRequest(`Unknown topic: ${data.topicId}`);
      const materialised = materialiseNode(current, event.at);
      const reduced = reduceTestimonyV1(materialised, data.correctionType, event.at);
      reduced.revision = event.revision;
      next.nodes[data.topicId] = reduced;
      break;
    }
    case 'TOPIC_RESTORED': {
      const current = next.nodes[data.topicId];
      if (!current) throw badRequest(`Unknown topic: ${data.topicId}`);
      // Testimony persists as history; status and strength reset to the
      // owner-selected state, never to the pre-refutation strength
      // (CORE-COR-03).
      next.nodes[data.topicId] = {
        ...current,
        provenance: data.provenance,
        strength: round6(data.strength),
        buoy: false,
        lastWitnessed: event.at,
        revision: event.revision,
      };
      break;
    }
    case 'BUOY_REMOVED': {
      const current = next.nodes[data.topicId];
      if (!current) throw badRequest(`Unknown topic: ${data.topicId}`);
      next.nodes[data.topicId] = { ...current, buoy: false, revision: event.revision };
      break;
    }
    default:
      throw badRequest(`Unknown event type: ${event.type}`);
  }
  return next;
}

export function foldEvents(worldId, events) {
  let projection = null;
  for (const event of events) {
    projection = applyEvent(projection ?? emptyProjection(worldId, null, event.at), event);
  }
  return projection;
}
