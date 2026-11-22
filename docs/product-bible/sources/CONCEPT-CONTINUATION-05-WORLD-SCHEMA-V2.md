# SEE MY WORLD — Product Development · Continuation 05 · Engineering Specification

## World Schema v2.0 — Building the Living Perspective Engine

*Pasted by Bobby, 21 November 2026, following Continuation 04. Filed verbatim.*

---

We have reached the point where SEE MY WORLD needs more than conceptual expansion. It needs a durable technical foundation capable of supporting the entire experience without compromising its original promise:

The model serves the person.

This development phase defines the database architecture, correction engine, transactional integrity, algorithm lifecycle, and testing strategy.

The design builds upon the Product Bible v1.1's established World, Worldprint, Lens, Perspective, Seed, Receipt, and Invitation concepts. The database structures and algorithms below are proposed extensions, not verified features of the existing codebase.

## 36. World Schema v2.0

The system should separate five categories of information:

* Identity and ownership: Who controls a World.
* Knowledge and testimony: What has been proposed, confirmed, or rejected.
* Discovery: What the owner has explored and deliberately saved.
* Disclosure: What others have permission to see.
* Audit and continuity: How the World has changed and why.

I recommend PostgreSQL as the production database candidate, with a migration strategy that preserves the current application's behavior.

### Proposed relational architecture

*[Source note: the schema diagram in the original was a visual widget and did not survive pasting.]*

The actual schema also requires Atlas tables, evidence lineage, Perspectives, visitor grants, invitations, idempotency records, deletion jobs, and audit events.

### Recommended storage rules

Use UUIDs or comparably unpredictable identifiers for user-owned objects. Store normalized values as constrained numeric fields. Every owner-scoped row must have an enforceable ownership path.

Private evidence must never be copied into public Perspective rows.

Published Perspectives should store only authorized disclosure projections, and their access must remain subject to grant validity and revocation.

## 37. Preserve the Original Testimony Model

Before locking the database design, one important correction is necessary.

The supplied First Draft Engine defines testimony as accumulated human confirmation, with distinct weights for declarations, confirmations, refusals, and watching. Earlier expansions introduced a separate affinity score and treated confidence as an estimated classification reliability.

Those ideas can coexist, but they must not silently replace the original testimony model.

I recommend retaining:

* strength: the original tidal presence score.
* testimony: the original human-action weight.
* provenance: the original five classes, including WITNESSED.
* last_witnessed: the timestamp of the last qualifying human action.
* buoy: the original KEEP_WATCHING state.

Then introduce enduring_affinity, current_attention, and exploration_appetite as experimental extensions.

Most importantly, the original testimony value should not be renamed to statistical confidence. The original concept deliberately rejects that interpretation.

### Revised canonical node schema

```sql
CREATE TABLE world_nodes (
  world_id UUID NOT NULL
    REFERENCES worlds(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  provenance TEXT NOT NULL CHECK (
    provenance IN (
      'DECLARED',
      'CONFIRMED',
      'PROPOSED',
      'WITNESSED',
      'REFUTED'
    )
  ),
  strength NUMERIC(8,6) NOT NULL DEFAULT 0
    CHECK (strength BETWEEN 0 AND 1),
  testimony NUMERIC(12,4) NOT NULL DEFAULT 0
    CHECK (testimony >= 0),
  buoy BOOLEAN NOT NULL DEFAULT FALSE,
  last_witnessed TIMESTAMPTZ,
  enduring_affinity NUMERIC(8,6)
    CHECK (enduring_affinity BETWEEN 0 AND 1),
  exploration_appetite NUMERIC(8,6)
    CHECK (exploration_appetite BETWEEN 0 AND 1),
  revision BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY (world_id, topic_id)
);
```

The original strength remains authoritative until a versioned migration explicitly replaces its calculation. enduring_affinity and exploration_appetite are nullable because existing Worlds may not have that information.

A REFUTED topic remains private by default, regardless of its numerical testimony.

## 38. The Testimony Ledger

The next component is the authoritative record of corrections.

```sql
CREATE TABLE testimony_events (
  id UUID PRIMARY KEY,
  world_id UUID NOT NULL
    REFERENCES worlds(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  action TEXT NOT NULL CHECK (
    action IN (
      'BOOST',
      'REDUCE',
      'REJECT',
      'KEEP_WATCHING'
    )
  ),
  actor_id UUID NOT NULL
    REFERENCES users(id),
  previous_revision BIGINT NOT NULL,
  resulting_revision BIGINT NOT NULL,
  reducer_version TEXT NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL
    DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (world_id, resulting_revision)
);
```

The ledger is append-only during normal operation, but it must support privacy-governed erasure and retention policies. Deletion is not another ordinary correction.

For production, I would also include:

* A transactionally persisted idempotency table keyed by principal, operation, and request key.
* A receipt table containing the exact deterministic rule and permitted explanation.
* A database-enforced relationship between World ownership and authorized correction commands.
* A deletion manifest for all derived representations and publication artifacts.

## 39. Transactional Correction Processing

The current API contract already defines the correction endpoint:

POST /api/first-light/worlds/:worldId/corrections

That endpoint should remain compatible with the original payload containing topicId and type.

For clients supporting optimistic concurrency, add an optional expected revision and idempotency header without breaking existing callers.

### Proposed transaction

```
BEGIN TRANSACTION
1. Resolve authenticated user.
2. Lock the target World row.
3. Verify ownership.
   If unauthorized: deny access.
4. Look up the idempotency record.
   Same key + same request:
     return stored result.
   Same key + different request:
     return conflict.
5. Check expected revision if supplied.
6. Read the current topic node.
7. Apply the versioned reducer.
8. Update topic and World revisions.
9. Insert Testimony Ledger event.
10. Insert explanation Receipt.
11. Persist idempotency result.
COMMIT TRANSACTION
Return committed correction result.
```

The actual implementation must handle simultaneous requests with a unique database constraint, not only an application-level check.

It must also ensure that a failed transaction does not leave an idempotency record indicating success.

### Concurrency design

**Two corrections arriving together**

If two distinct requests both expect revision 7, only one should commit against that revision. The other receives a conflict and can be retried deliberately against the updated World.

If the requests are identical retries using the same idempotency key, they should return the same committed result rather than apply the action twice.

## 40. Database Migration Strategy

The Product Bible identifies the inspected v9.8 prototype as using a local JSON data store. It also distinguishes that older archive from the reported v36 release lineage.

We should therefore not assume the current production code uses the same storage engine.

The migration plan needs an inventory of the actual current repository before implementation.

I recommend five stages.

* **Schema inventory** — Identify every current World, Perspective, Invitation, correction, and session representation. Document their relationships and existing invariants.
* **Compatibility schema** — Introduce the PostgreSQL representation without changing public API semantics. Define deterministic ID mapping and preserve existing correction behavior.
* **Backfill and reconciliation** — Import existing data into staging, validate record counts and ownership, and compare normalized World state against the original storage.
* **Controlled cutover** — Freeze or safely reconcile writes during migration, rehearse rollback, and verify revocation and idempotency across the transition.
* **Post-cutover verification** — Run authorization, concurrency, recovery, deletion, and API compatibility suites against the real database.

Do not claim a migration is successful simply because the application starts. Its historical corrections, permissions, and published Perspectives must remain correct.

## 41. Runnable Acceptance Harness — Specification

The next independent test harness should target a real application instance and a disposable database.

It should not mock the critical authorization or transaction paths.

### Proposed test groups

| Test group | Tests |
|---|---|
| Schema constraints | 12 |
| Reducer determinism | 16 |
| Idempotency and races | 12 |
| Lens privacy | 18 |
| Migration and recovery | 12 |
| Deletion and revocation | 10 |
| Atlas and draft eligibility | 12 |
| Expedition and Encounter | 12 |

**Total proposed acceptance cases: 104**

Planned coverage only. No tests from this new suite have been executed or verified.

### Required adversarial scenarios

The harness should specifically attempt cross-user corrections, unauthorized Perspective opens, grant reuse after revocation, duplicate requests under contention, stale revisions, malformed Atlas identifiers, and deletion during an active visitor session.

It should also verify that WITNESSED evidence never independently upgrades a topic into a confirmed or shareable state.

A successful test suite is necessary but not sufficient. Production readiness also requires deployment review, operational recovery testing, accessibility validation, and security assessment.

## 42. The Next Architectural Decision

We now have a coherent path from the original testimony-based tidal cartography to a more sophisticated Living Perspective Engine.

The next step is to define the Normative Algorithm Specification v2.0, including exact correction arithmetic, decay rules, buoy behavior, testimony semantics, relationship eligibility, and the Lens projection function.

There is one design conflict we should resolve explicitly: the original First Draft Engine allows all interest strengths to ebb, including owner-declared interests, while our newer World Seasons proposal preserves enduring affinity separately.

My recommendation is to retain both concepts:

Strength may ebb. Testimony remains authoritative until revoked. Enduring affinity is a separate owner-controlled declaration.

That preserves the original philosophy while allowing the World to recognize the difference between an interest that has gone quiet and an interest that has been abandoned.

The result is a system that can change its understanding of a person's present without rewriting what that person previously chose to affirm.

And that is the central engineering challenge worth solving: building an algorithm that becomes more useful as it learns to respect the limits of what it knows.
