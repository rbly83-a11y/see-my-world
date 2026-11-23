# SEE MY WORLD — Stage 02, Continuation 62

Requirements-to-Architecture Reconciliation

The next refinement is important: the first vertical slice should demonstrate SEE MY WORLD's trust model, not merely demonstrate that a map editor works.

The Product Bible establishes that a private World is not the same thing as a shared Perspective. A visitor receives a bounded, revocable projection through an authorized Lens—not direct access to the owner's underlying World.

That changes how we should build Explorer and Studio.

## 1. Revised vertical slice

Owner's Private World — Authoritative state · Private evidence · Owner control

Authorized Lens — Explicit scope · Permission checks · Revocation

Visitor Perspective — Only permitted information · Versioned projection

Explorer — Presentation interface

Studio — Owner-authoring interface

This separation prevents a dangerous shortcut: letting Explorer hide private fields visually while still transmitting them to the visitor's browser.

Privacy must be enforced before data reaches the interface.

## 2. Source-backed requirements matrix

The following mappings are grounded in the Product Bible's named chapters. They are not yet a verified mapping to the separate PRD's individual requirement IDs.

| Bible reference | Required architectural behavior | Slice verification |
|---|---|---|
| Chapter 17 — Lens and permission semantics | World private by default | Uninvited visitor cannot retrieve owner data |
| Chapter 18 — Perspective compiler | Visitor receives bounded projection | Hidden information absent from response |
| Chapter 22 — API contracts | Respect existing command compatibility | No incompatible replacement endpoint |
| Chapter 25 — Corrections and concurrency | Revision and idempotency protections | Conflicting revisions do not silently overwrite |
| Chapter 26 — Replay | Preserve event-history integrity | Repeated replay produces consistent authorized state |
| Chapter 16 — World lifecycle | Freeze/reset/simplify are Concept-stage proposals | Excluded from initial slice |

The exact Q-item dependencies must still be reconciled against the PRD before these become implementation tickets.

## 3. Acceptance tests for the first slice

These are proposed tests, not executed results.

| ID | Scenario | Expected outcome |
|---|---|---|
| S02-01 | Create or load an owner World fixture | Authorized owner can view it |
| S02-02 | Open the World as an uninvited visitor | Access denied; no private data returned |
| S02-03 | Request a valid authorized Perspective | Only Lens-permitted content returned |
| S02-04 | Attempt to access hidden evidence through the API | Protected content remains inaccessible |
| S02-05 | Revoke an existing Lens | Subsequent access fails, including through cached views |
| S02-06 | Submit two conflicting revisions | One succeeds; the other receives a conflict |
| S02-07 | Retry an identical authorized command | Idempotency prevents duplicate effects |
| S02-08 | Reopen after a fresh process start | Persisted state is consistent |
| S02-09 | Attempt a disputed correction operation | Operation remains unavailable pending Q-01/D-34 |
| S02-10 | Switch Explorer and Studio views | Both reflect the same authorized world revision |

The proposed suite should additionally inspect network responses, not just rendered screens. A visually hidden field is still a privacy failure if its value was delivered to the client.

## 4. Founder decisions and implementation boundaries

Blocked pending canonical decisions: Q-09 field-level schema, Q-01/D-34 correction semantics, and any operation requiring an unresolved canonical field or event definition.

Potentially deferrable: Q-21 production persistence selection, provided the temporary adapter is replaceable and does not create incompatible durable records.

Terminology requiring confirmation: Whether Explorer and Studio become official interface names, and whether Territory is exclusively a visual grouping or corresponds to an existing canonical entity.

Recommended architectural decision: Use World, Lens, and Perspective as the existing canonical concepts. Treat Explorer and Studio as presentation surfaces. Treat Territory as a provisional visual term until its mapping is approved.

This gives us a coherent interface design without changing the product's underlying meaning.

## 5. Stage 02 approval readiness

Architecture coherence · Privacy and provenance boundaries · Vertical-slice testability · Exact PRD requirement-ID traceability · Founder terminology decisions

Recommendation: continue toward a conditional architecture approval, but do not begin implementation yet.

The next deliverable should be the final PRD traceability and decision register, distinguishing every operation that can be implemented immediately from those blocked by unresolved contracts. Once that is complete, Stage 02 can receive a narrowly scoped implementation authorization without accidentally deciding the future of the entire platform.

The goal is not simply to build a beautiful world. It is to build a world whose owner can trust what other people are allowed to see.

---

*Filed verbatim (formatting normalized to tables) from Bobby's message of 21 November 2026, 22:09 EST. Registered as A-39.*
