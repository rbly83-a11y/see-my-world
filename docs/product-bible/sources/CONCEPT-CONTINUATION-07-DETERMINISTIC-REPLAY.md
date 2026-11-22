# SEE MY WORLD — Product Development · Continuation 07 · Engineering Specification

## The Memory of a World — Deterministic Replay, Refutation, and Algorithm Evolution

*Pasted by Bobby, 21 November 2026, following Continuation 06. Filed verbatim; widget fragments retained and marked as debris, formulas restored in plain notation where pasting dropped symbols.*

---

We have now defined the major mathematical components of the First Draft Engine. The next challenge is making sure they behave correctly over time.

A World must be able to evolve without losing its history, accept corrections without producing contradictions, and survive software upgrades without silently changing what its owner previously confirmed.

This continuation advances the proposed Product Bible through Chapters 51–58.

The architectural objective: Given the same starting state, the same ordered events, and the same algorithm version, the system must reconstruct exactly the same World.

That single guarantee becomes the foundation for recovery, auditing, migration, debugging, and user trust.

## 51. The Event-Replay Engine

Rather than treating the current World Map as the primary record of truth, I recommend treating it as a projection of authoritative events.

Each qualifying owner action produces an event. The application uses those events to calculate the current World state.

### The Event Envelope

Every event should have a stable, versioned structure.

```ts
interface WorldEvent {
  eventId: string;
  worldId: string;
  sequence: number;
  eventType:
    | "TOPIC_DECLARED"
    | "TOPIC_CONFIRMED"
    | "TOPIC_CORRECTED"
    | "TOPIC_RESTORED"
    | "BUOY_REMOVED"
    | "EDGE_CONFIRMED"
    | "EDGE_REJECTED";
  payloadVersion: number;
  payload: unknown;
  reducerVersion: string;
  atlasVersion: string;
  occurredAt: string;
  recordedAt: string;
}
```

The authoritative sequence must be assigned transactionally by the server.

Timestamps are useful for decay and historical display, but timestamps alone must never determine event order. Two corrections can occur within the same clock resolution.

### Replay guarantee

Let [S_0] be the initial World state and [E_1…E_n] the ordered event sequence.

S_n = R_v(R_v(… R_v(S_0, E_1), E_2) …, E_n)

Where [R_v] is the applicable versioned reducer.

If events span different algorithm versions, replay must use the version recorded for each transition or an explicitly validated migration transform. Applying today's reducer to yesterday's events without migration would rewrite history.

## 52. The Five Laws of Event Integrity

I recommend making the following guarantees mandatory.

| Law | Requirement |
|---|---|
| Determinism | Identical ordered events and versions produce identical state |
| Atomicity | An event and its resulting state commit together |
| Idempotency | Repeated requests never create duplicate actions |
| Traceability | Every state change identifies its originating event |
| Erasability | Privacy-governed deletion can remove events and derived information |

The fifth law matters enormously.

Event sourcing is often described as maintaining an immutable history. That is useful operationally, but an indefinitely undeletable personal history would contradict SEE MY WORLD's privacy philosophy.

The ledger should be append-only during ordinary operation, while deletion is handled through a separately authorized erasure process.

A deleted World must not be reconstructed from historical snapshots, analytics, or backups after its deletion obligations have been fulfilled.

## 53. The Refutation Protocol

The original First Draft Engine gives REJECT a powerful role: the owner can tell the system that a proposed topic does not belong in their World.

We need to define exactly what happens afterward.

### Proposed refutation lifecycle

*[Source note: the lifecycle diagram in the original was a visual widget and did not survive pasting.]*

### Refutation rules

A refuted topic must be excluded from automatic drafts, discovery recommendations, and new public Perspectives.

It should not automatically return because the owner encounters related material.

The owner may deliberately restore it, but restoration must be a separate, explicit operation.

One important nuance: a rejection should apply to the rejected topic, not automatically to every related topic or its entire parent territory. Broader suppression requires a separate owner choice.

### New operation: RESTORE

I recommend introducing:

POST /api/first-light/worlds/:worldId/topics/:topicId/restore

This would be a proposed API extension, not a replacement for the existing correction endpoint.

Restoration should require owner authorization, explicit confirmation, a current revision check, and an idempotency key.

The restored topic should return to a provisional or owner-selected state, rather than automatically becoming a strongly confirmed interest.

## 54. Buoy Semantics — Curiosity Without Commitment

KEEP_WATCHING is one of the original concept's most useful distinctions.

A person may want to continue exploring something without agreeing that it belongs in their World.

That deserves a formal lifecycle.

*[Source debris retained: a "Buoy behavior simulator" widget fragment — Keep Watching enabled / Days since last qualifying action: 90 / Decayed strength: 0.031 / Visible strength: 0.150 — with its note: "Illustrative PROPOSED node: initial strength 0.6, half-life 21 days, buoy floor 0.15. This uses the proposed decay interpretation." Gizmo verified the arithmetic: 0.6 × 2^(−90/21) ≈ 0.031, and max(0.15, 0.031) = 0.150. Correct.]*

### New operation: REMOVE_BUOY

Removing a buoy should not reject the topic or erase its history.

It should simply remove the minimum visibility floor and allow ordinary decay to continue.

The owner should also be able to remove the topic entirely through the appropriate deletion mechanism.

This distinction gives users three different choices: keep exploring, stop keeping it visible, or reject the suggestion.

## 55. Deterministic Time and Numerical Precision

Time-based algorithms can produce inconsistent results when implemented carelessly.

For example, one server might calculate decay using milliseconds while another uses rounded days. Two servers could then generate slightly different World states.

To prevent that, I recommend a canonical arithmetic specification.

```ts
interface DecayPolicy {
  version: string;
  timeUnit: "MILLISECONDS";
  roundingScale: number;
  submergedThreshold: number;
  buoyFloor: number;
  halfLivesDays: {
    DECLARED: number;
    CONFIRMED: number;
    PROPOSED: number;
    WITNESSED: number;
  };
}
const decayPolicyV1: DecayPolicy = {
  version: "tidal-v1",
  timeUnit: "MILLISECONDS",
  roundingScale: 6,
  submergedThreshold: 0.03,
  buoyFloor: 0.15,
  halfLivesDays: {
    DECLARED: 180,
    CONFIRMED: 90,
    PROPOSED: 21,
    WITNESSED: 14
  }
};
```

The constants reflect the previously established tidal model. The precision and time-unit policy are proposed implementation choices.

For reproducible replay, the implementation should define a canonical rounding method, persist exact transition inputs, and use a validated numeric library or fixed-point representation. Merely rounding JavaScript floating-point results to six decimal places is not a complete cross-runtime determinism guarantee.

The Engine should calculate decay at a supplied authoritative evaluation time, not use an uncontrolled clock call inside the pure reducer.

## 56. Algorithm Versioning and World Migration

A World may exist for years. During that time, the Atlas, reducer, and discovery algorithm will inevitably change.

We need to distinguish three types of change.

| Change | Example | Migration requirement |
|---|---|---|
| Presentation | New map colors | No semantic migration |
| Algorithmic | New decay coefficient | Versioned recalculation or opt-in |
| Semantic | Atlas topic split | Explicit mapping and review |

### Example: An Atlas topic split

Suppose an early Atlas has a single topic called Restoration.

A later version separates it into Natural Stone Restoration, Furniture Restoration, and Architectural Conservation.

The system must not assume that someone who confirmed Restoration automatically confirmed all three new topics.

Instead, it should preserve the original declaration and ask which new classification, if any, accurately represents the owner's interest.

*[Source debris retained: an "Example migration decision" widget fragment — Previously confirmed: Restoration / Keep original classification pending review / Confirm Natural Stone Restoration / Review all three suggested categories individually — with its note: "The existing declaration remains intact. No new topics are confirmed."]*

A semantic migration must not silently expand a person's disclosed interests or modify existing Perspective grants.

Previously published Perspectives should remain tied to their original approved projection until the owner authorizes an update.

## 57. Replay Verification and Recovery

The system should periodically verify that its materialized World state matches the authoritative event sequence.

### Replay verification contract

```ts
interface ReplayVerification {
  worldId: string;
  fromSequence: number;
  toSequence: number;
  reducerVersions: string[];
  atlasVersions: string[];
  expectedStateDigest: string;
  actualStateDigest: string;
  result: "MATCH" | "MISMATCH";
}
```

The digest must be calculated from a canonical serialization that excludes nondeterministic fields such as processing duration.

A mismatch should trigger investigation and quarantine of affected derived projections, not an automatic overwrite of user-authoritative state.

### Recovery scenarios

The acceptance suite should simulate a crash after event creation but before commit, duplicate delivery after a network timeout, an interrupted snapshot write, a failed Atlas migration, and an attempt to replay a deleted World.

The required behavior is consistent:

Committed events survive. Uncommitted events do not appear. Deleted Worlds do not return.

## 58. Development Gate: The Replayable World

Before implementing advanced Expeditions, Encounters, or collaborative Worlds, I recommend completing the following foundation.

**Replayable World acceptance criteria** — *[Source debris retained: checklist widget, "0 / 10 reviewed," planning checklist.]*

1. Canonical event schema and ordering
2. Versioned correction reducer
3. Explicit restoration protocol
4. Buoy removal semantics
5. Deterministic time-decay evaluation
6. Atlas migration review workflow
7. Snapshot verification and replay
8. Deletion-safe event retention
9. Cross-user authorization regression
10. Concurrent write and restart recovery

### What this unlocks

Once the Replayable World foundation is implemented and validated, we can safely develop more sophisticated capabilities: Constellations that survive Atlas upgrades, Expeditions that reference stable World revisions, Encounters that respect revocation, and World Timelines that accurately explain how an interest evolved.

The next development phase should specify the Resolution Lens Compiler and its formal information-flow security model, including exact disclosure rules, projection schemas, revocation consistency, and adversarial tests for inference leakage.

That is the next major challenge: allowing people to share meaningful pieces of their Worlds while preventing the application from revealing what they chose to keep private.

A World should remember what its owner permits it to remember—and reveal only what its owner chooses to share.
