// Fixed, synthetic, preapproved projection fixtures (proposal §3, R-01).
//
// Visitor disclosure in this slice is limited to these hard-coded
// payloads over the synthetic demonstration World W-SYN-1. Every value
// below is invented demonstration data; no real owner data is ever
// compiled into a visitor response, and this slice does not validate
// a complete Lens Compiler (that remains gated on Q-09).
//
// Payload fields are only the compiled public fields of Continuation
// 12 §106 / Bible Ch. 46: PUBLIC_PROMINENCE_BAND,
// PUBLIC_ASSERTION_STATE, PUBLIC_EXPLORATION_STATE. Raw strength and
// testimony never appear. SYN-T5 (PROPOSED) and SYN-T6 (REFUTED) are
// absent from every payload in every form (CORE-LENS-05).

export const FIXTURE_WORLD_ID = 'W-SYN-1';

const topic = (topicId, band, assertion, exploration, why) => ({
  topicId,
  PUBLIC_PROMINENCE_BAND: band,
  PUBLIC_ASSERTION_STATE: assertion,
  PUBLIC_EXPLORATION_STATE: exploration,
  ...(why ? { whyHere: why } : {}),
});

export const FIXTURE_PAYLOADS = Object.freeze({
  CONTINENT: Object.freeze({
    perspectiveId: 'P-SYN-CONTINENT',
    fixtureWorldId: FIXTURE_WORLD_ID,
    resolution: 'CONTINENT',
    atlasVersion: 'atlas-v1',
    dataClassification: 'SYNTHETIC_FIXTURE',
    topics: Object.freeze([
      topic('SYN-T1', 'HIGH', 'DECLARED', 'OPEN'),
      topic('SYN-T2', 'MODERATE', 'DECLARED', 'OPEN'),
      topic('SYN-T3', 'LOW', 'DECLARED', 'OPEN'),
      topic('SYN-T4', 'MODERATE', 'CONFIRMED', 'OPEN'),
    ]),
  }),
  COAST: Object.freeze({
    perspectiveId: 'P-SYN-COAST',
    fixtureWorldId: FIXTURE_WORLD_ID,
    resolution: 'COAST',
    atlasVersion: 'atlas-v1',
    dataClassification: 'SYNTHETIC_FIXTURE',
    topics: Object.freeze([
      topic('SYN-T1', 'VERY_HIGH', 'DECLARED', 'OPEN'),
      topic('SYN-T2', 'HIGH', 'DECLARED', 'OPEN'),
      topic('SYN-T3', 'LOW', 'DECLARED', 'QUIET'),
      topic('SYN-T4', 'HIGH', 'CONFIRMED', 'OPEN'),
    ]),
  }),
  HARBOUR: Object.freeze({
    perspectiveId: 'P-SYN-HARBOUR',
    fixtureWorldId: FIXTURE_WORLD_ID,
    resolution: 'HARBOUR',
    atlasVersion: 'atlas-v1',
    dataClassification: 'SYNTHETIC_FIXTURE',
    topics: Object.freeze([
      topic('SYN-T1', 'VERY_HIGH', 'DECLARED', 'OPEN', 'The owner chose to include this synthetic territory.'),
      topic('SYN-T2', 'HIGH', 'DECLARED', 'OPEN', 'The owner chose to include this synthetic territory.'),
      topic('SYN-T3', 'LOW', 'DECLARED', 'QUIET', 'The owner chose to include this synthetic territory.'),
      topic('SYN-T4', 'HIGH', 'CONFIRMED', 'OPEN', 'The owner chose to include this synthetic territory.'),
    ]),
  }),
});
