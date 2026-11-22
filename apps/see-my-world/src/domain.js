// Domain primitives for the Stage 02 vertical slice.
//
// This module is persistence-agnostic and transport-agnostic. It knows
// nothing about SQLite, HTTP, or the filesystem (Q-21 stays open).

import { createHash } from 'node:crypto';

export const REDUCER_VERSION = 'testimony-v1';
export const DECAY_POLICY = 'tidal-v1';
export const ATLAS_VERSION = 'atlas-v1';

export const PROVENANCES = ['DECLARED', 'CONFIRMED', 'PROPOSED', 'WITNESSED', 'REFUTED'];
export const RESOLUTIONS = ['CONTINENT', 'COAST', 'HARBOUR'];

// The four testimony-v1 correction operators (Bible Ch. 7; CORE-COR-01).
// There is deliberately no CONFIRM entry: whether confirmation is an
// explicit event distinct from BOOST is the unresolved conflict
// Q-01/D-34, and this slice exposes no such operation (S02-09).
export const CORRECTION_TYPES = ['BOOST', 'REDUCE', 'REJECT', 'KEEP_WATCHING'];

// Testimony weights for topic entry acts (Bible Ch. 6.1 / Ch. 7).
export const DECLARATION_WEIGHTS = { DECLARED: 1.0, CONFIRMED: 0.6, PROPOSED: 0 };

// tidal-v1 half-lives in days (CORE-COR-07). REFUTED has no half-life.
export const HALF_LIVES_DAYS = { DECLARED: 180, CONFIRMED: 90, PROPOSED: 21, WITNESSED: 14 };
export const BUOY_FLOOR = 0.15;
export const SUBMERSION_THRESHOLD = 0.03;

export class ApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export const badRequest = (message, code = 'BAD_REQUEST') => new ApiError(400, code, message);
export const forbidden = () => new ApiError(403, 'FORBIDDEN', 'Forbidden');
export const notFound = () => new ApiError(404, 'NOT_FOUND', 'Not found');
export const conflict = (message, code = 'REVISION_CONFLICT') => new ApiError(409, code, message);

// Round to the tidal-v1 rounding scale (6) so replay is deterministic.
export function round6(value) {
  return Math.round(value * 1e6) / 1e6;
}

// Canonical JSON: stable key order, numbers at rounding scale 6.
export function canonicalStringify(value) {
  if (value === null || typeof value !== 'object') {
    if (typeof value === 'number') return JSON.stringify(round6(value));
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalStringify(item)).join(',')}]`;
  }
  const keys = Object.keys(value).sort();
  return `{${keys.map((key) => `${JSON.stringify(key)}:${canonicalStringify(value[key])}`).join(',')}}`;
}

export function canonicalDigest(value) {
  return createHash('sha256').update(canonicalStringify(value), 'utf8').digest('hex');
}

export function hashToken(token) {
  return createHash('sha256').update(String(token), 'utf8').digest('hex');
}

export function requestHash(body) {
  return canonicalDigest(body);
}

const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9_-]*$/;

export function requireId(value, field) {
  if (typeof value !== 'string' || !ID_PATTERN.test(value)) {
    throw badRequest(`Invalid ${field}`);
  }
  return value;
}

export function requireIsoTime(value, field) {
  if (typeof value !== 'string' || Number.isNaN(Date.parse(value))) {
    throw badRequest(`Invalid ${field}`);
  }
  return new Date(value).toISOString();
}

export function nowIso() {
  return new Date().toISOString();
}
