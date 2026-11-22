# SEE MY WORLD — Product Development · Continuation 04 · Engineering Blueprint

## From Living Perspective to an Implementable Intelligence System

*Pasted by Bobby, 21 November 2026, following Continuation 03. Filed verbatim; interactive-widget fragments from the source are retained and marked as debris, and symbol losses from pasting are restored in [brackets] where unambiguous.*

---

The next development phase is to formalize the concepts we've established into technical contracts that engineers can implement and verify.

We are moving from what SEE MY WORLD should do to exactly how it should behave.

This continuation develops Chapters 25–31 of the proposed Product Bible Edition 1.2, with particular attention to the First Draft Engine, user authority, curiosity-driven discovery, and safe interaction between Worlds.

All new algorithms and interfaces below are proposed specifications, not claims about features already implemented in the existing application.

## 25. The World State Contract

The first major decision is to stop treating a World as a single interest-score vector.

Instead, a World becomes a versioned graph containing three distinct categories of information.

**Owner-authoritative state** — Interests, preferences, and relationships the owner has explicitly confirmed or declared.

**Provisional state** — Suggested interests and connections that remain unconfirmed and cannot be represented as facts about the owner.

**Disclosure state** — Explicit permissions governing which parts of the World may be included in a published Perspective.

These categories must remain independent in storage and in every API response.

### Normative TypeScript contract

```ts
type TopicStatus =
  | "PROPOSED"
  | "CONFIRMED"
  | "DECLARED"
  | "REFUTED";
type CorrectionType =
  | "BOOST"
  | "REDUCE"
  | "REJECT"
  | "KEEP_WATCHING";
interface World {
  id: string;
  ownerId: string;
  revision: number;
  atlasVersion: string;
  algorithmVersion: string;
  lifecycle: "PROVISIONAL" | "ACTIVE" |
             "DELETION_PENDING";
  createdAt: string;
  updatedAt: string;
}
interface InterestNode {
  worldId: string;
  topicId: string;
  status: TopicStatus;
  affinity: number;
  attention: number;
  explorationAppetite: number;
  confidence: number | null;
  watching: boolean;
  revision: number;
}
interface WorldEdge {
  id: string;
  worldId: string;
  sourceTopicId: string;
  targetTopicId: string;
  relationType: string;
  status: "PROPOSED" | "CONFIRMED" | "REJECTED";
  provenanceId: string | null;
  revision: number;
}
```

The important separation is between affinity and confidence.

Affinity represents the owner's expressed relationship to a topic. Confidence describes how reliable an unconfirmed classification is estimated to be.

They must not be combined into a single number and presented as a measurement of the person.

## 26. The Deterministic Testimony Reducer

Every owner correction should be processed as an atomic state transition.

The reducer accepts a validated correction, reads the current state, applies a versioned rule, and produces a new state plus an explanation receipt.

### Processing contract

```ts
interface CorrectionCommand {
  worldId: string;
  topicId: string;
  type: CorrectionType;
  expectedRevision: number;
  idempotencyKey: string;
}
interface CorrectionResult {
  worldRevision: number;
  topicRevision: number;
  receiptId: string;
  action: CorrectionType;
  changed: boolean;
}
```

The authenticated principal is supplied by the server's session context, not trusted from the request body.

The server should enforce this order:

* Authenticate the principal and authorize ownership.
* Validate the topic and correction enum.
* Check the idempotency key within the authenticated operation scope.
* Verify the expected revision.
* Apply the deterministic correction rule.
* Persist the new state, receipt, and idempotency result in one transaction.
* Return the committed result.

For concurrent writes, a unique idempotency constraint and revision-based compare-and-swap prevent duplicate or lost updates.

### Required invariants

* A REJECT cannot be silently reversed by later evidence ingestion.
* KEEP_WATCHING never confirms an interest.
* A BOOST cannot increase affinity above 1.
* A REDUCE cannot decrease affinity below 0.
* Repeating an identical committed request does not apply the correction twice.
* Unauthorized corrections do not reveal private topic state.
* The receipt identifies the algorithm version and the rule applied.

These are testable statements, not merely intended behavior.

## 27. The Draft Selector v2.0

The original First Draft Engine's most unusual idea is that a useful proposal does not necessarily have to be correct.

Sometimes a suggestion is valuable because it gives someone an opportunity to say, "Absolutely not. That's not me."

But we must distinguish informative disagreement from deliberately irritating the user.

The algorithm should never maximize rejection for its own sake.

### Candidate selection pipeline

*[Source note: the pipeline diagram in the original was a visual widget and did not survive pasting.]*

### The candidate utility function

I recommend using a transparent, configurable ranking function rather than a single opaque personality prediction.

U(c) = w_r·R(c) + w_n·N(c) + w_e·E(c) + w_d·D(c) + w_q·Q(c)

All features are normalized to the interval [0,1].

The coefficients are versioned and must sum to 1. The system may experiment with weights, but eligibility and privacy restrictions always execute before ranking.

### The correction-information problem

The proposed [Q] feature deserves special treatment.

It should estimate whether asking about a candidate would help clarify the owner's World. It must not predict which suggestions will provoke an emotional reaction.

For example, if someone confirms interests in architecture and history, asking about historical preservation may provide useful information. Suggesting a sensitive personal identity based on those interests would not be appropriate, regardless of how informative a rejection might appear mathematically.

This distinction should be enforced through candidate eligibility, not left to model judgment.

### Cold-start strategy

The first World should not depend on external account connections or imported browsing history.

Instead, the Engine should use the five manually selected interests to generate a bounded, explainable First Draft.

I recommend an initial experiment with eight proposals: four close connections, two cross-territory bridges, and two novelty-oriented candidates.

That distribution is a hypothesis to test against shorter and longer drafts, not a mandatory production setting.

## 28. The Relationship Graph

The Atlas hierarchy identifies where a topic belongs. The Relationship Graph identifies how topics might connect.

This second structure is essential for Constellations, Expeditions, and World Encounters.

### Relationship categories

| Relationship | Meaning |
|---|---|
| RELATED_TO | General conceptual relationship |
| TECHNIQUE_SHARED | Uses similar methods |
| HISTORICAL_LINK | Has a documented historical connection |
| CREATIVE_BRIDGE | Potential connection for creative exploration |
| OWNER_ASSOCIATED | Explicitly connected by the World owner |
| DISCOVERY_PATH | Proposed route between topics |

Relationships should carry provenance and confidence where applicable.

An AI-generated creative bridge must not be presented as a verified historical connection.

### Example: Two subjects, multiple connections

*[Source debris retained: an "Interactive relationship explorer" widget fragment — Technique / History / Creative — "Shared techniques: Both fields can involve detailed surface documentation, imaging, and assessment of deterioration. These are illustrative relationship descriptions. Production factual claims require verified sources."]*

A relationship can be proposed by the Engine, confirmed by the owner, or rejected. The owner's decision governs whether that relationship becomes part of their personal Constellation.

This also enables the same two topics to mean different things in different Worlds.

## 29. The Expedition Planner — Formal Algorithm

The Expedition Engine needs to generate a finite learning journey, not simply select three unrelated recommendations.

I propose representing an Expedition as an ordered path through eligible topic nodes and verified discovery resources.

### Expedition structure

```ts
interface Expedition {
  id: string;
  worldId: string;
  mode: "FAMILIAR" | "BALANCED" | "FRONTIER";
  status: "DRAFT" | "ACTIVE" |
          "COMPLETED" | "ABANDONED";
  stops: ExpeditionStop[];
  atlasVersion: string;
  algorithmVersion: string;
  createdAt: string;
}
interface ExpeditionStop {
  sequence: number;
  topicId: string;
  resourceId: string | null;
  explanation: string;
  sourceStatus:
    | "VERIFIED_RESOURCE"
    | "GENERATED_PROMPT";
  status: "UNSEEN" | "VIEWED" |
          "SAVED" | "SKIPPED";
}
```

### Route generation

The planner should:

* Select a permitted, confirmed starting topic.
* Find candidate relationships within the authorized graph.
* Exclude rejected topics, restricted categories, and unavailable resources.
* Rank possible next stops for relevance, novelty, and explanatory coherence.
* Select a finite path without repeated topics.
* Generate a concise explanation for each transition.
* Validate resources and source status.
* Present the Expedition without automatically changing the owner's confirmed World.

### An important quality constraint

An Expedition should be rejected during generation if it cannot explain why one stop leads to the next.

This prevents the system from assembling a collection of superficially interesting links and pretending they form a meaningful journey.

For example, an Expedition connecting marble restoration, Roman architecture, and digital archaeology has a plausible thematic progression.

An Expedition connecting marble restoration, tropical fish, and cryptocurrency would need an unusually convincing explanation. Novelty alone is insufficient.

## 30. The Encounter Engine — Consent Protocol

The Encounter Engine should be designed as a two-party authorization system, not as a conventional social-matching service.

Each participant retains independent control of their World.

### Encounter data contract

```ts
interface Encounter {
  id: string;
  initiatorId: string;
  recipientId: string;
  initiatorPerspectiveId: string;
  recipientPerspectiveId: string | null;
  status:
    | "INVITED"
    | "ACCEPTED"
    | "ACTIVE"
    | "ENDED"
    | "REVOKED";
  createdAt: string;
  expiresAt: string;
}
interface EncounterComparison {
  encounterId: string;
  perspectiveRevisions: [number, number];
  sharedTopics: string[];
  differentPaths: string[];
  proposedFrontiers: string[];
  generatedAt: string;
}
```

The comparison output must contain only information that both relevant disclosure policies permit.

The initiator's Perspective does not grant access to the recipient's World, and vice versa.

If one participant has not shared a Perspective, the system may allow a one-way visit but must not generate a private two-World comparison.

### Encounter authorization matrix

| Operation | Owner A | Owner B | Anonymous visitor |
|---|---|---|---|
| Read A's private World | Yes | No | No |
| Open A's valid Perspective | If authorized | If granted | Only if public-link policy permits |
| Read B's private World | No | Yes | No |
| Generate mutual comparison | With both grants | With both grants | No |
| Revoke A's grant | Yes | No | No |
| Save personal Seed | Yes | Yes | Only in an explicitly permitted visitor session |

The system must verify these permissions on the server at the moment of each action.

It cannot rely on a previous successful page load to prove that an invitation is still valid.

## 31. Privacy Threat Modeling

The more sophisticated the World becomes, the more opportunities exist for accidental disclosure.

A privacy-first design must examine not only what the application intentionally reveals, but also what someone could infer from repeated observations.

### Five high-priority threats

**Differential Lens probing** — An attacker repeatedly opens differently scoped Perspectives to infer hidden interests. Mitigation: Strict grant scopes, controlled Lens creation, disclosure review, and rate-limited comparison.

**Explanation leakage** — A "Why This Appears" receipt accidentally names private evidence. Mitigation: Generate visitor explanations exclusively from the authorized disclosure projection.

**Revocation races** — A visitor submits an action while the owner revokes access. Mitigation: Serialize authorization-sensitive writes against revocation using transactional grant state and fail-closed checks.

**Derived-data persistence** — Deleted topics remain in embeddings, caches, or analytical snapshots. Mitigation: Maintain a data lineage registry and deletion workflow covering each derived representation.

**Cross-user graph contamination** — One person's corrections accidentally alter another person's World. Mitigation: Immutable shared Atlas definitions, owner-scoped World state, and authorization tests across concurrent operations.

A further concern is inference from combinations of otherwise harmless topics. The product should avoid inferring or exposing sensitive personal characteristics and should use conservative disclosure rules for topics that could reveal them.

## 32. The Acceptance-Test Matrix

The expanded engine should be validated against behavioral guarantees rather than simply measuring how many tests pass.

The existing Product Bible records synthetic concurrency and authorization testing. These new modules need additional coverage.

| Test ID | Scenario | Required result |
|---|---|---|
| WORLD-001 | Create World from five interests | Provisional World created |
| WORLD-002 | Replay identical correction | No duplicate mutation |
| WORLD-003 | Concurrent corrections | No lost update |
| WORLD-004 | Reject an inferred topic | Topic remains suppressed |
| WORLD-005 | Decay current attention | Enduring affinity unchanged |
| ATLAS-001 | Upgrade taxonomy | Stable mapping or explicit migration |
| DRAFT-001 | Generate First Draft | Every candidate eligible |
| DRAFT-002 | Provider unavailable | Labeled fallback or safe failure |
| LENS-001 | Publish coarse Perspective | No fine-grained disclosure |
| LENS-002 | Revoke during visit | Subsequent protected actions denied |
| EXP-001 | Generate Expedition | Finite, explainable path |
| EXP-002 | Reject Expedition stop | No automatic interest confirmation |
| ENC-001 | One-sided invitation | No private reciprocal comparison |
| ENC-002 | Revoke mutual grant | Affected comparison access invalidated |
| DELETE-001 | Delete a World | Active grants revoked; deletion workflow completed according to policy |

These tests should be accompanied by property-based testing, fuzzing, migration testing, and real database concurrency tests.

### Suggested release gates

**Authorization and disclosure — Blocking.** No known critical cross-user access or unauthorized disclosure defect.

**Deterministic state integrity — Blocking.** No unresolved duplicate-write, lost-update, or correction-replay failure.

**Expedition quality — Pilot gate.** User-tested coherence, explanation usefulness, and acceptable resource validity.

**World recognition — Pilot gate.** Participants understand the provisional nature of the map and can correct it successfully.

## 33. A new strategic opportunity: The World Protocol

Once the core application is reliable, SEE MY WORLD could eventually support a portable, user-controlled representation of interests.

This is not a recommendation to expose raw Worldprints or private embeddings to third parties.

Instead, the platform could offer a narrowly scoped export format containing only the topics, relationships, and declarations the owner explicitly chooses.

A portable World might eventually be used to personalize educational tools, collaborative research, or creative applications without giving those services access to the entire underlying history.

The architectural principle would be: Share an approved perspective, not a copy of the person.

This remains a long-term research direction, subject to independent security, privacy, interoperability, and legal review.

## 34. Development decisions to lock

At this point, I recommend adopting the following decisions as the proposed Edition 1.2 architecture baseline.

| Decision | Proposed direction |
|---|---|
| Primary product identity | Personal curiosity and discovery platform |
| Social model | Optional, consent-based Perspective Network |
| Core intelligence | Versioned Atlas plus owner-controlled World graph |
| Algorithm authority | Human correction overrides inference |
| Primary experience | Interactive World Map |
| Discovery mechanism | Finite, explainable Expeditions |
| Social interaction | Independently authorized Encounters |
| Long-term memory | Editable and deletable Continuity history |
| Privacy enforcement | Server-side Lens Compiler |
| Monetization principle | Never require sale of private interest histories |

These decisions remain proposals until formally approved and integrated into the controlled Product Bible.

## 35. The next build sequence

The most efficient path forward is to implement the technical foundations before expanding the visual and social experiences.

Engineering execution order:

* **World Schema v2** — Define relational storage, topic states, revisions, evidence references, and migration rules.
* **Testimony Reducer v2** — Implement deterministic corrections, transactional persistence, receipts, and concurrency tests.
* **Atlas and Relationship Graph** — Establish taxonomy governance, graph edges, version compatibility, and candidate eligibility.
* **Lens Compiler** — Build privacy-safe disclosure projections and verify revocation under concurrent access.
* **First Draft Selector** — Implement explainable candidate selection and test whether users recognize and trust their Worlds.
* **Expedition Prototype** — Connect verified resources to finite, explainable discovery paths.
* **Encounter Prototype** — Introduce reciprocal Perspectives and authorized comparison.

### The larger vision

The most interesting outcome of this development is that SEE MY WORLD no longer needs to compete with conventional social media on the same terms.

It does not need an infinite feed, a popularity contest, or an algorithm designed to maximize time spent staring at a screen.

Its value can come from something fundamentally different: helping people organize their curiosity, understand how their interests connect, and share selected parts of that understanding with others.

The next continuation should focus on World Schema v2, the exact reducer pseudocode, PostgreSQL transaction design, and a runnable test-harness specification. Those are the remaining pieces needed to translate this architecture into an actionable engineering package while preserving the existing product's tested behavior.
