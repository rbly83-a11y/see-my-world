# SEE MY WORLD — Core MVP Product Requirements Document
## Release Track A: SEE MY WORLD Core

> **STATUS: PROPOSAL FOR FOUNDER APPROVAL**
>
> This document is a proposal. It does **not** enact a scope freeze, and it does not resolve, recommend an outcome on, or silently work around any open founder decision. The Stage 02 scope freeze for Release Track A is a founder decision. Until the Founder approves this document — and separately settles the founder-decision items flagged in §10 — this PRD is a draft for decision, not an instruction to build.
>
> Originating assignment: `AI-DEVELOPMENT-ORGANIZATION.md` §5, persona 02 SAGE (Chief Product Architect) — user stories, journeys, edge cases, and acceptance criteria; empty-state, returning-user, refusal, and recovery experiences. Track definition: `AI-DEVELOPMENT-ORGANIZATION.md` §2, Release Track A.

---

## 1. Purpose and scope of this document

This PRD specifies the product requirements for **Release Track A — SEE MY WORLD Core**: the minimum complete journey adopted in Edition 1.2 (R28) and recorded at Edition 1.4, Appendix C, priority decision 2:

**First Light → owner correction → private World → bounded Lens → visitor Perspective → Seed → SEE YOURS**

Sources, in authority order for this document:

- **Baseline of record:** `SEE-MY-WORLD-Product-Bible-Edition-1.4.md` ("the Bible"), Parts I–VII for the Core journey, with Part VIII (Presentation Layer) where the visitor step depends on it. Every substantive requirement below cites its Bible chapter(s).
- **Primary scaffold:** `phase-zero/MVP_SCOPE.md` — the Phase Zero mapping of Track A against the corpus (what is specified, what is missing or blocked).
- **Founder-decision queue:** `phase-zero/FOUNDER_DECISION_REGISTER.md` — all blocked dependencies in §10 use its Q-numbering, unchanged.
- **Status labels and invariants:** `phase-zero/FEATURE_STATUS_INVENTORY.md` and `phase-zero/CANONICAL_REQUIREMENTS.md` (the 42 invariants, extracted verbatim from Bible Appendix B).

Pilot scope is product Layers 1–2 (My World; Share a View). Layer 3 is excluded from the pilot (Bible Appendix D, D-33; `MVP_SCOPE.md`, Track A preamble).

### 1.1 Honest status statement

- **No step in this journey is implemented.** There is no codebase (`phase-zero/PROJECT_STATE_AUDIT.md` §3, as summarised in `MVP_SCOPE.md`). "Specified" in this document always means *specified in the baseline text*.
- Feature statuses in this PRD use only two of the six labels — **Specified** and **Concept** — because that is all the evidence supports. Nothing in this document is labelled Implemented, Tested, Pilot Validated, or Production Ready.
- The Bible's Feature Status Register carries five features as "Tested (reported)" at Edition 1.1 scope, resting solely on reported v36 simulation results whose source archive is not in the workspace (`FEATURE_STATUS_INVENTORY.md`, Notes). This PRD does **not** promote any requirement on the basis of those reports; where a step's underlying feature was so reported, the requirement status here remains Specified.
- Every test suite mentioned in this document is **proposed only** — no case written, no case executed (`phase-zero/TEST_BASELINE.md`). In particular: the 104-case deterministic acceptance harness (Bible Ch. 36) is proposed only, and the Replayable World gate (Bible Ch. 36) stands at **0 of 10 reviewed**.

### 1.2 How to read a requirement

Each functional requirement has:

- a **stable ID** (e.g. `CORE-FL-01`) — IDs are never renumbered once this proposal is approved;
- a **status** — Specified or Concept;
- a **trace** — the Bible chapter(s) that specify it, plus the Phase Zero scaffold where relevant;
- where applicable, a **⚠ BLOCKED** marker naming the founder-decision Q-item(s) it waits on (see §10). A blocked requirement is stated only as far as the corpus specifies it today; the blocked portion is not filled in.

Acceptance criteria are given per journey step, not per requirement, following the SAGE assignment in `AI-DEVELOPMENT-ORGANIZATION.md` §5. Where the corpus is too thin to write a requirement without inventing, no requirement is written: the item appears in §12, "Gaps — not specified in the corpus."

### 1.3 Invariants binding the whole journey

The 42 canonical invariants (Bible Appendix B; `CANONICAL_REQUIREMENTS.md`) bind every step. The invariants most directly load-bearing for Track A are cited in each step and collected here for convenience — paraphrase for navigation only; Appendix B wording governs:

- Inv. 1 — Private by default.
- Inv. 2 — Owner correction is authoritative over inferred interest.
- Inv. 3 — Visitor access is only as broad as the Lens.
- Inv. 4 — Revocation invalidates promised capabilities.
- Inv. 5 — Idempotent writes do not duplicate under concurrency.
- Inv. 8 — Observation is not endorsement; inference is not identity; sharing is not consent to further processing.
- Inv. 9 — Detail(Output) ≤ Resolution(Grant).
- Inv. 11 — A rejection binds the rejected topic only.
- Inv. 12 — Testimony is a weight of human action; it never decays; strength decays.
- Inv. 13 — A refuted topic's internal record is never disclosed through a Perspective.
- Inv. 14 — Exploration appetite is owner-set only.
- Inv. 15 — Free-text "why" answers never leave the owner's World.
- Inv. 16 — Deleted Worlds do not return.
- Inv. 17 — A replay mismatch never authorises overwriting owner-authoritative state.
- Inv. 19 — The Atlas excludes attribute branches; a topic about a domain is not an attribute of its owner.
- Inv. 20 — In the pilot, no Perspective contains a PROPOSED or WITNESSED node.
- Inv. 22 — Presentation compilation cannot increase the information in the authorised projection.
- Inv. 28 — Compile, don't hide: what a visitor may not receive is excluded at compilation, server-side.
- Inv. 37 — Indexes and caches are not side paths; revocation invalidates them with the public projection.
- Inv. 40 — A saved reference is not a copy and not a licence.
- Inv. 42 — A manifest is not an authorisation token; access checks occur at request time.

---

## 2. Journey at a glance

| Step | Name | Primary actor | Step status (strongest honest label) |
|---|---|---|---|
| A1 | First Light | Owner (new) | Specified (Bible Ch. 9) |
| A2 | Owner correction | Owner | Specified (Bible Chs. 6–8, 25, 27) |
| A3 | Private World | Owner | Specified, with Cartographic Engine at Concept (Bible Chs. 12, 24, 26) |
| A4 | Bounded Lens | Owner | Specified (Bible Chs. 17–18) |
| A5 | Visitor Perspective | Visitor | Specified (Bible Chs. 17–19; Part VIII) |
| A6 | Seed | Visitor | Specified (Bible Chs. 3, 19) |
| A7 | SEE YOURS | Visitor → new owner | Concept-to-Specified: journey definition adopted; no separate Seed→World conversion contract beyond Ch. 19 exists (`MVP_SCOPE.md`, Step A7) |

Cross-cutting gates recorded in `MVP_SCOPE.md` and not repeated as requirements below: repository/environment creation is founder-gated (Q-43); founder decisions gating Track A code include Q-01, Q-06, Q-09, Q-13; decisions gating a Track A pilot include Q-02, Q-05, Q-27, Q-28, Q-29, Q-33, Q-35.

---

## 3. Step A1 — First Light

**Purpose.** First Light is the cold start: the moment a World is born (Bible Ch. 9). The Refutation Bootstrap inverts the conventional cold-start labour — instead of asking the owner to self-describe from a blank page, the system seeds minimally, drafts deliberately and disclosedly, and harvests the owner's argument with that draft. The five-interests → "Does this look like you?" recognition moment is the design centre (Ch. 9; `MVP_SCOPE.md`, Step A1).

**User stories.**

- As a new owner, I give a few starting interests (or one link) and immediately see a draft of my World I can argue with, so that I do not have to describe myself from nothing.
- As a new owner, I am told plainly that the draft is supposed to be wrong in places, so that correcting it feels like the intended activity, not a failure.
- As a new owner whose draft is entirely wrong, I can enter topics directly in my own words, reset without penalty, or get a re-draft from corrected seeds, so that refusal never strands me.

**Functional requirements.**

- **CORE-FL-01 — Minimal seed.** *Specified.* The system shall accept a minimum start of **three starting interests, or one link**; a one-link start shall be labelled *low-coverage* in the interface. **Five interests are the optional richer start.** Neither start is the "correct" one: the three-interest bootstrap and the five-interest start are both pilot test arms, compared by the pilot rather than presumed (Bible Ch. 9; Ch. 37; adopted bootstrap, priority decision 3 / R21).
- **CORE-FL-02 — Deliberate seed only.** *Specified.* The first World shall not depend on external account connections or imported browsing history: a seed is something the owner deliberately gives, in this session, for this purpose (Bible Ch. 9). External providers may only propose mappings into the Atlas; they may never create geography (Bible Ch. 10).
- **CORE-FL-03 — Disclosed, deliberately arguable draft.** *Specified.* The engine shall expand the seeds through the Atlas (Bible Ch. 10), choosing proposals for **reaction value** — topics near the seeds about which the owner is likely to have a definite feeling, one way or the other — and shall disclose the draft's nature in plain language, in the form: *"This is a first draft of your world. It is supposed to be argued with. Wrong is useful."* That disclosure is a load-bearing ethical requirement, not a courtesy (Bible Ch. 9).
- **CORE-FL-04 — Draft Selector fences.** *Specified.* Candidate generation shall apply eligibility and privacy restrictions **before** ranking — no score may admit an ineligible candidate. The Draft Selector's correction-information feature may estimate whether asking about a candidate would clarify the World; it must **never** be used to predict or provoke an emotional reaction. Proposals shall never probe adjacent to a REFUTED coastline, and the Atlas hard exclusions (Bible Ch. 10; invariant 19) bind candidate generation (Bible Ch. 9, "Bootstrap fences"; Continuation 04 §27 as cited in Ch. 9).
- **CORE-FL-05 — Rapid correction pass.** *Specified.* First Light shall be a rapid correction pass using the four operators of Bible Ch. 7, plus **at most one adjacency question** ("Does X live near Y in your world?"), designed to take **under four minutes**. Every tap is testimony (Bible Ch. 9). The correction mechanics themselves are specified in Step A2 (§4).
- **CORE-FL-06 — Whole-draft-wrong recovery.** *Specified.* If the owner rejects the draft wholesale, the system shall offer, as specified in Bible Ch. 9 (recovery specified as U03, adopted; `MVP_SCOPE.md`, Step A1): (a) **manual topic entry** — the owner names topics directly, in their own words, mapped into the Atlas with their confirmation; (b) **reset** — the draft is discarded without penalty or record of failure; and (c) **re-draft from corrected seeds**. An empty World after a fully rejected draft is a valid World state, not an error.
- **CORE-FL-07 — Draft Survival as diagnostic only.** *Specified (metric); ⚠ BLOCKED as a quality gate — Q-33.* The system shall be able to compute Draft Survival — the fraction of the draft surviving First Light (Bible Ch. 9). The 30–50% band recorded in the corpus is a **diagnostic hypothesis, never a target**, and no ratified threshold exists. No requirement in this PRD sets a pass/fail Draft Survival value. *Trace: Bible Ch. 9; Ch. 37; `FOUNDER_DECISION_REGISTER.md` Q-33.*
- **CORE-FL-08 — Draft Selector scoring term Q.** *Concept, unsettled; ⚠ BLOCKED — Q-37.* Draft Selector / discovery ranking formulae in the corpus contain a term **Q** whose meaning is unsettled — recorded positions are *correction-information value* and *source and classification quality* (`FOUNDER_DECISION_REGISTER.md` Q-37, A-03). Eligibility-before-scoring and the constrained multi-objective form are already normative; this PRD specifies no meaning for Q and no requirement may be built that depends on one meaning rather than the other. *Trace: Bible App. C (A-03) and App. D (D-38), as registered in Q-37; Feature Status Register labels the Q-definition "Concept, unsettled" (`FEATURE_STATUS_INVENTORY.md`).*

**Acceptance criteria (Step A1).**

1. Starting with three interests, with one link, and with five interests each produces a disclosed draft; the one-link draft is visibly labelled low-coverage.
2. No draft candidate is admitted by score after failing eligibility, Atlas exclusion, or the REFUTED-coastline fence (CORE-FL-04).
3. A wholesale rejection exercised in a test walkthrough reaches manual entry, reset, and re-draft with no penalty state and no failure framing (CORE-FL-06).
4. The correction pass presents no more than one adjacency question (CORE-FL-05).
5. Draft Survival is reportable as a diagnostic and is nowhere enforced as a threshold (CORE-FL-07).

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* before any seed, the World does not exist; after a fully rejected draft, an **empty World is a valid state, not an error** (Bible Ch. 9). No requirement specifies pre-seed screen content beyond this — see Gap G-01.
- *Returning user:* a returning owner does not re-enter First Light as a new draft; their World persists under Step A3. First Light re-entry occurs through the re-draft path of CORE-FL-06 and through SEE YOURS (Step A7).
- *Refusal:* refusal is never penalised — no standing, feature, or quality of service may depend on accepting proposals — and product language must never frame total rejection as the person being hard to understand (Bible Ch. 9). The audit register quoted in Ch. 9 is the specified tone standard.
- *Recovery:* CORE-FL-06 is the recovery path. Reset discards the draft "without penalty or record of failure" (Bible Ch. 9).

---

## 4. Step A2 — Owner correction (testimony)

**Purpose.** Correction is how a draft becomes the owner's World, and it is the deepest-specified step in the product (`MVP_SCOPE.md`, Step A2). The owner's corrections are the only authoritative writes to a World (Bible Ch. 7); testimony-v1 is **frozen** (priority decision 5, adopted in Edition 1.2). No requirement in this PRD modifies testimony-v1; any change is a separately versioned reducer, never a silent edit (see Q-01).

**User stories.**

- As an owner, I correct a topic with one of a small set of clear acts — boost it, reduce it, reject it, or keep watching it — and each act has a defined, explainable effect.
- As an owner, my "no" counts as testimony with the same weight as an embrace, and a topic I reject is not proposed to me again.
- As an owner, I can ask of any element of my World why it is here, who decided it belongs, and what can be changed (the Testimony Compass surface, Bible Chs. 3, 6, 34).

**Functional requirements.**

- **CORE-COR-01 — The four v1 operators, with frozen arithmetic.** *Specified.* The system shall implement exactly the testimony-v1 operators (Bible Ch. 7 §7.1–7.2):
  - **BOOST:** `strength ← min(1, s × 1.5)`; `testimony += 1.0`; provenance upgrades to DECLARED; `last_witnessed` ← event time.
  - **REDUCE:** `strength ← s × 0.6`; `testimony += 0.5`; provenance unchanged; `last_witnessed` ← event time.
  - **REJECT:** provenance → REFUTED; `testimony += 1.0`; strength unchanged and inert thereafter.
  - **KEEP_WATCHING:** `buoy ← true`; `strength ← max(s, 0.15)`; `testimony += 0.3`; `last_witnessed` ← event time.
  Underlying testimony weights are normative: direct declaration 1.0; confirmation 0.6; BOOST 1.0; REDUCE 0.5; REJECT 1.0; KEEP_WATCHING 0.3 (Bible Ch. 7). No v1 operator reads or writes the experimental `enduring_affinity` or `exploration_appetite` columns (Bible Ch. 7 §7.2; Ch. 6 §6.2).
- **CORE-COR-02 — BOOST-to-DECLARED under v1 as specified.** *Specified (v1 governs meanwhile); ⚠ BLOCKED for final semantics — Q-01.* Under testimony-v1 as specified, BOOST upgrades provenance to DECLARED (Bible Chs. 7, 25). Whether confirmation is instead an **explicit CONFIRM event** distinct from BOOST is the single named unresolved conflict, **D-34 / Q-01**. This PRD states the v1 rule because v1 governs the normative text; it does not settle the conflict. If the other recorded position prevails, it requires a separately versioned reducer. The correction UI's final action set cannot be frozen until Q-01 is settled. *Trace: Bible Ch. 7; App. D D-34; `FOUNDER_DECISION_REGISTER.md` Q-01.*
- **CORE-COR-03 — REFUTED guard and explicit restoration.** *Specified.* Any ordinary correction against a REFUTED node shall fail with "Explicit restoration required" (Bible Ch. 7 §7.3). Restoration is a separate explicit owner operation (RESTORE) — requiring owner authorisation, explicit confirmation, a current revision check, and an idempotency key, producing a `TOPIC_RESTORED` event — in which testimony persists as history and status/strength reset to an owner-selected state, never automatically to the pre-refutation strength (Bible Chs. 22 §22.4, 27 §27.3).
- **CORE-COR-04 — Known defect carried, not patched.** *Specified.* The known testimony-v1 defect is carried deliberately: **BOOST from strength 0 yields 0** (`0 × 1.5 = 0`), so a zero-strength node cannot be BOOST-recovered (Bible Ch. 7 §7.3). No implementation may substitute the v2-experimental formula, clamp zero to a small positive value, or repair the defect locally while claiming testimony-v1. The v2 formula is the designated remedy, **not adopted**; its coefficient *a* is unset (Q-32 — see §10 note; it blocks v2 only, not v1).
- **CORE-COR-05 — Deterministic reducer invocation.** *Specified.* Every correction shall be processed as an atomic state transition in the server order of Bible Ch. 25 §25.2: authenticate principal (from server session context, never trusted from the request body); authorise ownership; validate topic and correction enum; check the idempotency key within the authenticated operation scope; verify expected revision; apply the versioned rule; persist new state, Receipt, and idempotency result in **one transaction**; return the committed result. The correction endpoint is `POST /api/first-light/worlds/:worldId/corrections` with body `{topicId, type}` (Bible Chs. 22 §22.1, 25 §25.4). Error semantics are those of Bible Ch. 22 §22.3: 403 (which must not reveal private topic state), 404, 400, and 409 for a same-key/different-body idempotency collision; the same key with an identical body returns the original committed result and applies no change twice (invariants 5; Bible Ch. 25 §25.3, §25.5).
- **CORE-COR-06 — Receipts.** *Specified.* Every material system action — a proposal, a correction, a disclosure — must be able to produce a **Receipt**: an explanation of factors, provenance, classifier or fallback status, and permission basis, in terms the recipient is permitted to see (Bible Ch. 3, "Receipt"). A correction's Receipt identifies the algorithm version and the rule applied (Bible Ch. 25 §25.3, invariant 7 of that chapter). Receipts are queries against the Testimony Ledger, not generated explanations (Bible Ch. 7).
- **CORE-COR-07 — Canonical evaluation order and tidal decay.** *Specified.* Strength shall be materialised to the correction's authoritative event time under tidal-v1 **before** the reducer applies — materialise-decay-then-reduce (Bible Chs. 8 §8.1, 25 §25.8). Tidal-v1 parameters: half-lives DECLARED 180d, CONFIRMED 90d, PROPOSED 21d, WITNESSED 14d; buoy floor 0.15; submersion threshold 0.03; REFUTED has **no** half-life and no expiry (Bible Ch. 8). Testimony never decays (invariant 12).
- **CORE-COR-08 — Three distinct owner choices kept distinct.** *Specified.* The interface, API, and storage shall keep distinct: **keep exploring** (KEEP_WATCHING — hold visible without endorsement), **stop keeping it visible** (REMOVE_BUOY — removes the 0.15 floor, produces a `BUOY_REMOVED` event, neither rejects the topic nor erases its history), and **reject** (REJECT — exclusion under Bible Ch. 27 §27.1, reversible only through RESTORE). Collapsing any two is non-conforming (Bible Chs. 22 §22.4, 27 §27.4–27.5).
- **CORE-COR-09 — Complete provenance transition table.** *⚠ BLOCKED — Q-06.* The reducer and protocols specify the principal provenance transitions (Bible Chs. 7, 25, 27), but a **complete transition table for every event and provenance state** (DECLARED, CONFIRMED, PROPOSED, WITNESSED, REFUTED) is still owed (gap A02). This PRD requires that table to exist before reducer implementation can be called complete; it does not supply the missing entries. Any Q-01 ruling changes this table. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-06.*
- **CORE-COR-10 — Edge corrections.** *Specified (command contract); ⚠ BLOCKED in part — Q-07.* The correction command has an edge variant addressing a relationship by source topic, target topic, and relation type, under the same processing order, idempotency, revision, and transaction rules as node corrections, producing `EDGE_CONFIRMED`, `EDGE_REJECTED`, and (on explicit owner restoration) `EDGE_RESTORED` events; an edge decision governs that relationship in that owner's World only and alters neither the shared Atlas nor either endpoint topic's status (Bible Chs. 19 as cited in Ch. 25 §25.7; Ch. 22 §22.4; Ch. 25 §25.7). The edge-correction command contract is adopted (R9), but **edge creation/rejection weighting and decay semantics beyond the command are unspecified** (gap A06). *Trace: `FOUNDER_DECISION_REGISTER.md` Q-07.*

**Acceptance criteria (Step A2).**

1. For each operator, a worked correction reproduces the Ch. 7 arithmetic exactly, including the operator × dimension matrix (no v1 write to `enduring_affinity` / `exploration_appetite`).
2. A correction replayed under the same idempotency key applies once; the same key with a different body returns 409 (CORE-COR-05).
3. An ordinary BOOST against a REFUTED node fails with "Explicit restoration required"; RESTORE succeeds only as its own authorised operation (CORE-COR-03).
4. BOOST from strength 0 leaves strength at 0 under v1 — the defect is demonstrated, not repaired (CORE-COR-04).
5. A REJECT cannot be silently reversed by later evidence ingestion (Bible Ch. 25 §25.3).
6. KEEP_WATCHING never confirms an interest; REMOVE_BUOY does not reject (CORE-COR-08).
7. Every committed correction yields a Receipt naming the reducer version and rule (CORE-COR-06).
8. The proposed 104-case deterministic acceptance harness (Bible Ch. 36) is the recorded vehicle for these criteria — **proposed only**; no criterion here is claimed as tested.

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* a World with no corrected topics yet shows its draft remainder as honestly dotted/provisional (Bible Ch. 9, Step 3); provisional material is the owner's private working surface only (Bible Ch. 17 §17.2).
- *Returning user:* the owner's latest explicit assertion is authoritative for current state, while earlier events persist only as history under the owner's retention settings (Bible Ch. 6 §6.3). Testimony presentation must never render the action count as certainty, authenticity, sincerity, or strength of identity (Bible Ch. 6 §6.3).
- *Refusal:* REJECT is refusal as testimony — weight 1.0, equal to declaration (Bible Ch. 7). A rejection binds the rejected topic only; it never propagates to related topics or the parent territory; broader suppression is a separate owner operation (invariant 11; Bible Ch. 27 §27.2).
- *Recovery:* a submerged node (strength < 0.03, unbuoyed) is hidden from the Map, retained in the Ledger, and able to resurface if re-witnessed; submersion is neither deletion nor refutation (Bible Ch. 8). A REFUTED node recovers only via RESTORE (CORE-COR-03). Revision conflicts resolve by deliberate retry against the updated World, never by silent overwrite (Bible Ch. 25 §25.5).

---

## 5. Step A3 — Private World (the Worldprint)

**Purpose.** The corrected material constitutes the owner's private World: a private, evolving representation of user-approved interests and evidence, owned by exactly one owner, changing only through owner testimony, authorised evidence, and the versioned rules of the Bible (Bible Ch. 3, "World"). A World must be useful to its owner even if it is never shared (Bible Ch. 1).

**User stories.**

- As an owner, my World is private by default and mine alone, so that correcting it honestly costs me nothing socially.
- As an owner, I see my World as a map I can inspect and act on — where every element I can see, I can inspect, correct, or act on, subject to my own permissions.
- As an owner, my quiet interests are not deleted for going quiet, and my deleted material does not come back.

**Functional requirements.**

- **CORE-PW-01 — Private by default, single owner.** *Specified.* A World and all evidence held within it are private by default; nothing in it is published, shared, indexed for discovery, or made available to any other person by virtue of existing (invariant 1; Bible Ch. 17 §17.1). A World is owned by exactly one owner (Bible Ch. 3).
- **CORE-PW-02 — Node model: five dimensions, no confidence field.** *Specified.* Every node carries exactly the five testimony-v1 dimensions — `strength` ∈ [0,1], `testimony` ≥ 0, `provenance` (DECLARED / CONFIRMED / PROPOSED / WITNESSED / REFUTED), `last_witnessed`, `buoy` (Bible Ch. 6). In v1, `strength` **is** current presence; no separate `current_attention` field may be introduced under v1 semantics. **There is no confidence field:** no node field stores a system-computed probability that the owner holds an interest, and any internally derived ranking value must stay out of the node, the Perspective, and any explanation presented as a fact about the owner (Bible Ch. 6). Provenance authority rules bind: a WITNESSED signal may propose a node but can never establish one, never raise a node above PROPOSED, and is never shareable (Bible Ch. 6 §6.1; invariant 20 in part).
- **CORE-PW-03 — World State Contract: three states kept independent.** *Specified.* Owner-authoritative state, provisional state, and disclosure state shall be kept independent and never merged (World State Contract, Continuation 04 as compiled in Bible Ch. 24 §24.1; `MVP_SCOPE.md`, Step A3). A topic may be present in provisional state and absent from disclosure state; that difference is the product working correctly.
- **CORE-PW-04 — Five information categories kept separate.** *Specified.* World Schema v2.0 separates five categories, independent in storage and in every API response: identity and ownership; knowledge and testimony; discovery; disclosure; audit and continuity (Bible Ch. 24 §24.1). Storage rules are normative: unpredictable identifiers for user-owned objects; constrained numeric fields; an enforceable ownership path on every owner-scoped row; private evidence never copied into public Perspective rows; published Perspectives store only authorised disclosure projections, subject to grant validity and revocation (Bible Ch. 24 §24.3).
- **CORE-PW-05 — The Worldprint is never shared.** *Specified.* The Worldprint — the computational graph of topics, strength, testimony, provenance and relationships — is private. What may be shared is a Lens-derived projection of it, never the graph itself (Bible Ch. 3, "Worldprint"). Free-text "why" answers never leave the owner's World and never shape another user's draft, suggestions, or comparisons (invariant 15; Bible Ch. 14 as cited in Appendix B).
- **CORE-PW-06 — Event replay and the Five Laws of Event Integrity.** *Specified.* World state is a projection of authoritative events: given the same starting state, the same ordered events, and the same algorithm version, the system must reconstruct exactly the same World (Bible Ch. 26 §26.1). The Five Laws are mandatory (Bible Ch. 26 §26.3): Determinism; Atomicity; Idempotency; Traceability; Erasability. Server assigns sequence transactionally; timestamps never determine order (Bible Ch. 26 §26.2). Replay across versions uses the reducer version recorded for each event, or an explicitly validated migration transform (Bible Ch. 26 §26.4). On replay mismatch: quarantine affected derived projections and investigate; a mismatch never authorises overwriting owner-authoritative state (invariant 17; Bible Ch. 26 §26.5).
- **CORE-PW-07 — Map rendering semantics.** *Concept (Cartographic Engine status: Concept, Bible Ch. 12; `FEATURE_STATUS_INVENTORY.md`).* The World Map is a functional interface, not an illustration: every visual element corresponds to an understandable state, action, or relationship, and is operable subject to the viewer's permissions (Bible Ch. 12 §12.1). Meanings are fixed by the geography table (island, lighthouse, glowing/dotted pathway, fog, harbour, seasonal lighting, compass — Bible Ch. 12 §12.2). Prominence is not importance: island size encodes topic count, never strength, testimony weight, or inferred significance (Bible Ch. 12 §12.3). World View, Territory View, and Constellation View are three views of the **same** underlying state; divergence between views is a rendering defect (Bible Ch. 12 §12.4). Every element legible on the Map must be available in the accessible non-visual equivalent (Bible Ch. 3, "World Map"). Map distance is not a psychological measurement (Bible Ch. 3).
- **CORE-PW-08 — Deletion and erasure.** *Specified (mechanics); ⚠ BLOCKED on periods — Q-13.* Erasure mechanics are specified: single-topic erasure uses tombstone semantics — payload replaced with a redaction marker preserving sequence position, original payload crypto-shredded, replay treats the marker as a defined no-op, digest chain remains verifiable (Bible Ch. 26 §26.6); derived representations are enumerated through the deletion manifest and removed or invalidated under the same authorisation. Whole-World deletion runs through a separately authorised erasure process; a deleted World must not be reconstructible from snapshots, analytics, or backups once deletion obligations are fulfilled, and until then deletion is pending, not complete, and must not be reported as complete (invariant 16; Bible Ch. 26 §26.7). **Retention/deletion periods, erasure coverage periods, and backup expiration are undecided** (gap S05); until Q-13 is settled, the erasure-vs-replay collision (Bible App. D, D-12) stays open by design and no privacy policy can be written from this PRD. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-13.*
- **CORE-PW-09 — Persistence is a candidacy, not a confirmation.** *Specified as candidacy; ⚠ BLOCKED — Q-21, gated by Q-43.* World Schema v2.0 on PostgreSQL is recorded as the **candidate** persistence model, pending repository inventory — not a confirmed production database (Bible Ch. 24 §24.2; `MVP_SCOPE.md`, Step A3). Final persistence and event-replay strategy confirmation waits on Q-21; and no repository exists to inventory — repository/environment creation is itself founder-gated (Q-43), gating all code work. This PRD does not confirm a production database. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-21, Q-43.*

**Acceptance criteria (Step A3).**

1. No API response merges owner-authoritative, provisional, and disclosure state (CORE-PW-03), and the five schema categories remain independent in storage and response (CORE-PW-04).
2. Replaying a recorded event sequence under its recorded versions reproduces the World exactly; a forced mismatch quarantines derived projections and leaves owner-authoritative state untouched (CORE-PW-06).
3. A submerged node is absent from the Map and present in the Ledger; a buoyed node renders at no less than visible strength 0.15 (Bible Ch. 8; CORE-COR-07).
4. Island size in any view is demonstrably independent of strength and testimony (CORE-PW-07).
5. After whole-World deletion obligations are fulfilled, the World is not reconstructible from snapshots, analytics, or backups (CORE-PW-08) — noting that the periods defining "fulfilled" are blocked on Q-13.
6. The Replayable World gate stands at 0 of 10 reviewed (Bible Ch. 36); no acceptance claim in this step may cite it as passed.

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* an empty World (e.g. after wholesale draft rejection, CORE-FL-06) is valid and private; fog on the Map means unexplored territory, neither emptiness nor defect, and its interaction is a request for discovery, not an automatic filling-in (Bible Ch. 12 §12.2).
- *Returning user:* Returning Tides may recognise a previously important, now-quiet interest **only** where (1) the owner retained that history and (2) the owner has authorised its use through a standing, revocable setting; withdrawal stops future recognition, and recognition is never a default the owner must discover and disable (Bible Ch. 16 §16.3 — Continuity features carry Concept status where so labelled in `FEATURE_STATUS_INVENTORY.md`). The World Timeline is private by default and editable through explicit correction (Bible Ch. 16 §16.2).
- *Refusal:* the REJECT fence binds continuity exactly as it binds discovery: Returning Tides may never reintroduce a rejected interest because it was once important, because related interests revived, or because time passed (Bible Ch. 16 §16.5).
- *Recovery:* the system must never resurrect deleted or rejected interests from analytics, backups, or cached embeddings (Bible Ch. 16 §16.4). Replay/recovery behaviour is specified at Bible Ch. 26 §26.5: committed events survive; uncommitted events do not appear; deleted Worlds do not return. Owner lifecycle controls freeze / reset / simplify are recorded at **Concept** status (Bible Ch. 16 §16.6; `FEATURE_STATUS_INVENTORY.md`) and are not requirements of this PRD beyond this note.

---

## 6. Step A4 — Bounded Lens

**Purpose.** The Lens is the owner's disclosure decision in object form (Bible Ch. 3). Sharing never grants access; it grants **resolution** — the Law of Resolution (Bible Ch. 17 §17.3). The Lens Compiler is a deterministic, server-side privacy compiler, not a filter (Bible Ch. 18 §18.1).

**User stories.**

- As an owner, I choose what to show before I am asked at what detail, and I see the exact result a visitor will receive before anything is published.
- As an owner, I set who may open my Perspective and for how long, and I can revoke it at any time and have that revocation actually take effect.
- As an owner, material I have not testified to — and material I rejected — never appears in anything I share, even in generalised form.

**Functional requirements.**

- **CORE-LENS-01 — Lens as explicit selection; nothing disclosed except through a Lens.** *Specified.* A Lens is the tuple `(territory set, resolution, audience, expiry)` (Bible Ch. 17 §17.2). The territory set names what is included; everything not named is excluded. Publication requires an explicit owner action; silence is not consent, inactivity is not consent, and a prior publication is not consent to a later one; each Perspective stands on its own grant (Bible Ch. 17 §17.1).
- **CORE-LENS-02 — Literal preview and the Perspective Passport.** *Specified.* Before publication the owner must be shown the **exact visible result a visitor will receive, rendered from the compiled payload itself**; what the owner approves in preview is the most any visitor can receive (Bible Ch. 17 §17.2). The human-facing experience is the **Perspective Passport**: a human-readable summary of authorised subjects, detail level, recipient, expiration, and whether comparison is permitted — object-based first, resolution second; the Passport adds no disclosure beyond the preview and hides no disclosure within it, and changes no semantics in Bible Chs. 17–18 (Bible Ch. 17 §17.7; adopted A-04 per `MVP_SCOPE.md`, Step A4).
- **CORE-LENS-03 — Three resolutions as a pure function over the Atlas.** *Specified.* Resolution is one of: **Continent** (Atlas parent labels only, nothing finer); **Coast** (territory labels within the selected continents); **Harbour** (specific topics, together with such evidence labels as the owner chose to include) (Bible Ch. 17 §17.3). Generalisation happens in the model, at compile time — topic to territory at Coast, territory to continent at Continent (Bible Ch. 18 §18.2 step 5) — never in the presentation layer.
- **CORE-LENS-04 — The eight-step compilation sequence, server-side.** *Specified.* The Compiler shall enforce, in order, with no step skipped, weakened, or delegated to the client (Bible Ch. 18 §18.2): (1) authenticate the owner and validate Lens ownership; (2) resolve the Atlas version recorded for the Perspective; (3) exclude unconfirmed and unauthorised nodes; (4) apply territory selections and sensitivity restrictions; (5) generalise to the granted resolution; (6) remove private evidence, aliases, and hidden relationship details; (7) generate resolution-safe explanations from the compiled projection, after generalisation; (8) publish a versioned Perspective with a revocable grant bound to audience and expiry. Given the same World revision, Atlas version, and Lens, the Compiler produces the same payload (Bible Ch. 18 §18.1). This is invariant 28: compile, don't hide.
- **CORE-LENS-05 — Pilot rule: testified material only.** *Specified.* In the pilot, no Perspective contains a PROPOSED or WITNESSED node, at any resolution, under any Lens — including as an anonymised or generalised trace, since a generalised label tracing to a single provisional node would disclose it (invariant 20; Bible Ch. 17 §17.2). A REFUTED node's internal record is never disclosed through a Perspective (invariant 13); refuted material is excluded from compilation unless the owner separately authorised publication of a coastline, and then only as boundary shape at the granted resolution (Bible Ch. 18 §18.2 step 3 — see also Q-36, §10 note).
- **CORE-LENS-06 — Disclosure eligibility.** *Specified.* A generalised label is disclosure-eligible **only if it does not trace to a single non-public node, unless the owner explicitly approves that disclosure**; absent such approval, the Compiler must generalise the label further or omit it. Aggregation alone is not anonymisation. Approval must be specific to that label in that Lens, recorded with the grant, and visible in preview (Bible Ch. 18 §18.4).
- **CORE-LENS-07 — Revocation and expiry fail closed, server-side.** *Specified.* Every grant is revocable by its owner at any time, and every grant expires; revocation and expiry are server-side facts enforced at the moment of each attempted action, not presentation states (Bible Ch. 17 §17.4). Revocation must block new opens and block visitor actions previously issued under the grant, including actions in progress in active sessions (e.g. saving further Seeds); an expired grant fails closed the same way; no stale cache, retained session, or previously loaded page may extend a grant (Bible Ch. 17 §17.4; invariants 4, 37). Revocation invalidates projections, search results, and cached derivatives (invariants 4, 37; `MVP_SCOPE.md`, Step A5). The product must state plainly that revocation cannot erase what a visitor already saw, copied, or saved outside the system while the grant was valid (Bible Ch. 17 §17.4).
- **CORE-LENS-08 — Field-level disclosure schema per resolution.** *⚠ BLOCKED — Q-09.* Resolution semantics and disclosure eligibility are adopted (Bible Chs. 18, 33), but the **field-level disclosure schema** — what exactly each of Continent, Coast, and Harbour may disclose, field by field — is still owed (gap S01). `MVP_SCOPE.md` records this as the single largest specification gap in Track A: the Compiler cannot be built or privacy-tested to acceptance without it. This PRD does not invent the schema. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-09.*
- **CORE-LENS-09 — Audience, expiry, and resharing control.** *Specified (grants and expiry); ⚠ BLOCKED on forwarding — Q-10.* Recipient grants, link capabilities, and expiration are specified (Bible Chs. 17, 22; gap S02 status note). An **Invitation** is a Perspective-specific recipient grant, separate from broad public links; it names its Perspective and its recipient, and accepting or declining it changes nothing about either party's World beyond the access the grant itself confers (Bible Chs. 3, 22 §22.2). **Forwarding/resharing behaviour is not specified** in the corpus; no requirement here defines what a recipient may pass on. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-10.*

**Acceptance criteria (Step A4).**

1. For a test World containing PROPOSED, WITNESSED, and REFUTED nodes, the compiled payload at each resolution contains none of them in any form, including generalised traces (CORE-LENS-05).
2. The preview payload and the visitor payload are the same compiled payload (CORE-LENS-02).
3. Detail(Output) ≤ Resolution(Grant) holds structurally: finer data is absent from the payload, not suppressed in display (invariant 9; Bible Ch. 18 §18.3).
4. A label tracing to a single non-public node is generalised further or omitted unless a specific, recorded, preview-visible owner approval exists (CORE-LENS-06).
5. After revocation or expiry, new opens fail, in-progress visitor actions under the grant are blocked, and caches/indexes no longer serve the projection (CORE-LENS-07).
6. Sensitive territories are excluded from every Lens unless the owner authorises that territory specifically, for that Lens (Bible Ch. 17 §17.6).
7. No acceptance criterion in this step can be fully signed off until the field-level schema of CORE-LENS-08 exists (Q-09).

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* an owner with no testified material has nothing compilable under the pilot rule (CORE-LENS-05); a Lens over an empty territory set discloses nothing — everything not named is excluded (CORE-LENS-01). The corpus does not specify Lens-creation screen content for this case — see Gap G-01.
- *Returning user:* later changes to the World do **not** silently alter a published Perspective; republication is a new owner action producing a new version (Bible Ch. 17 §17.2). A prior publication is not consent to a later one (CORE-LENS-01).
- *Refusal:* refusals carry no penalty — an owner or visitor who declines to share, declines an Invitation, or revokes a grant loses nothing: no standing, no access to their own World, no unrelated feature (Bible Ch. 17 §17.6). Declining an Invitation is a defined response (`DECLINE`, Bible Ch. 22 §22.2).
- *Recovery:* revocation and expiry are the recovery mechanisms for over-sharing; their limits (material already seen or copied outside the system) must be stated plainly to the owner (CORE-LENS-07).

---

## 7. Step A5 — Visitor Perspective

**Purpose.** The visitor receives the compiled, authorised projection — **never the World** (Bible Chs. 17–19; `MVP_SCOPE.md`, Step A5). A Perspective is a published, versioned or immutable Lens-derived visitor view (Bible Ch. 3).

**User stories.**

- As a visitor, I open a Perspective and walk a finite set of discovery objects at the resolution the owner granted — with a clear beginning and end, no infinite feed, and no penalty for leaving partway through.
- As a visitor, I can ask "Why is this here?" of anything I am shown, and get an honest answer at the level I am permitted to see.
- As a visitor, nothing about my visit is treated as endorsement, agreement, or affinity by either party.

**Functional requirements.**

- **CORE-VIS-01 — Compiled projection only.** *Specified.* The visitor's client receives only the approved, generalised payload compiled under Step A4; filtering what a client displays is never a substitute for withholding what it must not have (Bible Ch. 18 §18.1). The visitor receives no private contents, evidence, or private names, and nothing about territories the Lens did not select (Bible Ch. 19 §19.1).
- **CORE-VIS-02 — Anonymous opening where the grant permits.** *Specified.* A visitor may open a valid Perspective anonymously, without registering or surrendering personal data, where the grant's audience permits it (Bible Ch. 19 §19.1). An invalid, expired, or revoked grant yields **no Perspective and no partial view** (Bible Ch. 19 §19.1).
- **CORE-VIS-03 — Finite visit.** *Specified.* The visit is a walk along someone else's coastline at the granted resolution: a finite set of discovery objects, with a clear beginning and end, no infinite feed, no artificial urgency, and no penalty for leaving partway through (Bible Ch. 19 §19.1).
- **CORE-VIS-04 — "Why is this here?" at resolution.** *Specified.* Each discovery object carries the question "Why is this here?", answered where permitted from the owner's Receipts **at the granted resolution** (Bible Chs. 18 §18.5, 19 §19.2). Where no resolution-safe answer exists, it is answered honestly at the level that does exist — for example, that the owner chose to include this territory — rather than by reaching into private evidence. A visitor Receipt may not name, paraphrase, count, or otherwise encode what was generalised away beneath a label (Bible Ch. 18 §18.5). The visitor never sees where the owner's map is still provisional; visitor-visible dotted coastlines are a deferred decision, not pilot behaviour (Bible Ch. 19 §19.2).
- **CORE-VIS-05 — Views are not endorsements; visitor behaviour never testifies.** *Specified.* Opening a Perspective, dwelling on an object, or saving a Seed records no approval by either party and no affinity in either World; behavioural signals from a visit may never testify in any World, and a visit must not be represented as agreement, compatibility, or mutual interest (invariant 8; Bible Ch. 19 §19.3). Visitor explanations and Receipts may cite only material in the compiled Perspective, at its resolution; telemetry must not carry private identifiers, names, or evidence from an unpublished World; caches hold only compiled, authorised payloads, keyed to grant and version, invalidated on revocation and expiry (Bible Ch. 17 §17.5).
- **CORE-VIS-06 — Presentation cannot add information.** *Specified.* Presentation Layer / Presentation Compiler / Render Manifest are Specified features (Part VIII; `FEATURE_STATUS_INVENTORY.md`). Presentation compilation cannot increase the information in the authorised World projection; aesthetic choices must never act as a secondary channel for revealing excluded information (invariant 22). Access checks occur at request time; a manifest is not an authorisation token (invariant 42).
- **CORE-VIS-07 — Exact visitor flows (anonymous vs registered).** *⚠ BLOCKED — Q-05.* The exact screen flows and error states for owner, **anonymous visitor, registered visitor**, and returning owner are not specified for Core (gap U05); Meridian's flows are separately specified but Core's are not. This PRD states the behavioural requirements above (CORE-VIS-01–06) and does not invent the flows. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-05.*
- **CORE-VIS-08 — Abuse flows for a shared Perspective.** *⚠ BLOCKED — Q-17.* Report, block, mute, and access-restriction flows are **unspecified** (gap D05). Bible Ch. 32 states the requirement's trigger: such flows are required **before wider social discovery**; the closed pilot journey is specified without them (`MVP_SCOPE.md`, Step A5). This PRD therefore does not make CORE-VIS-08 a requirement of the closed pilot, and records it as blocking any social pilot beyond that journey. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-17.*

**Acceptance criteria (Step A5).**

1. With an invalid, expired, or revoked grant, a visitor receives no Perspective and no partial view (CORE-VIS-02).
2. No visitor-facing channel — tooltip, explanation, comparison, cache, telemetry — contains finer data than the compiled payload (CORE-VIS-01, CORE-VIS-05, CORE-VIS-06).
3. Every discovery object answers "Why is this here?" at or below the granted resolution, or honestly at the level that exists (CORE-VIS-04).
4. A visit produces no testimony, endorsement, or affinity record in any World (CORE-VIS-05).
5. The visit terminates: the discovery set is finite and leavable at any point without penalty (CORE-VIS-03).
6. The proposed Presentation acceptance suite (130 cases, Continuation 12 §111 as recorded in `TEST_BASELINE.md`) is the recorded vehicle for presentation-layer criteria — **proposed only**.

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* a Perspective compiled from an owner-approved set is the whole of the visit; there is no "more content" state behind it, no feed to exhaust, and no partial view on grant failure (CORE-VIS-02, CORE-VIS-03).
- *Returning user:* a returning visitor re-enters under the grant's **current** validity — revocation and expiry are checked at request time, and a previously loaded page or retained session does not extend a grant (Bible Ch. 17 §17.4; invariant 42).
- *Refusal:* leaving partway through carries no penalty (CORE-VIS-03); declining an Invitation carries no penalty (Bible Ch. 17 §17.6).
- *Recovery:* on revocation mid-session, in-progress actions under the grant — including saving further Seeds — are blocked (Bible Ch. 17 §17.4). The corpus does not specify the visitor-facing wording or screen for that interruption — see Gap G-01 / Q-05.

---

## 8. Step A6 — Seed

**Purpose.** A Seed is how a discovery survives the visit: a visitor-owned reference to a permitted discovery object, saved by a deliberate act (Bible Chs. 3, 19). Seed ownership and revocation were adopted as priority decision 7 (R20). `MVP_SCOPE.md` records: "Nothing specification-level is recorded as missing for the pilot scope" for this step.

**User stories.**

- As a visitor, I deliberately save what I want to keep, and only what I deliberately save is kept.
- As a Seed holder, my notes are mine and survive; what does not survive is access to the owner's content if the owner revokes it.
- As an owner, a visitor's save gives them no copy of my Perspective and no licence over my material.

**Functional requirements.**

- **CORE-SEED-01 — Deliberate save only; never silently imported.** *Specified.* Anything the visitor deliberately saves becomes a Seed; Seeds are **never silently imported** — not because a topic was viewed, was adjacent to a save, or was promoted by the owner. The only bridge between two people's geographies is a deliberate save (Bible Ch. 19 §19.4).
- **CORE-SEED-02 — Seed content and its ceiling.** *Specified.* A Seed is a visitor-owned reference to a permitted discovery object — an Atlas topic id and/or an external resource reference — plus optional personal notes, saved by an explicit act of intent **at the resolution at which it was seen**. A Seed never contains copied private World state, and carries no finer detail than the grant allowed the visitor to see (Bible Chs. 3, 19 §19.4).
- **CORE-SEED-03 — A saved reference is not a copy and not a licence.** *Specified.* Saving a Seed confers no ownership and no permanent right, and remains bound by the contributor's current authorisation, including withdrawal (invariant 40).
- **CORE-SEED-04 — Effect of revocation on a held Seed.** *Specified.* If the Perspective a Seed was saved from is later revoked, the holder retains their own notes and any lawful public-resource bookmark, but never a copy of the revoked Perspective (Bible Chs. 3, 19 §19.4; §17.4). A visitor's independent saves are distinguished from access to the owner's revoked content (Bible Chs. 3, 19; `MVP_SCOPE.md`, Step A6).
- **CORE-SEED-05 — Seed as immutable reference with attribution.** *Specified.* A Seed is an immutable reference with attribution and permitted metadata (priority decision 7, adopted; `MVP_SCOPE.md`, Step A6). Saving a Seed changes nothing in any World until its holder deliberately acts on it (Bible Ch. 3, "Seed").
- **CORE-SEED-06 — Seeds on the owner's map surface.** *Specified (definition); rendering Concept under CORE-PW-07.* On the Cartographic geography table, a Harbour is a saved Seed — "Revisit discovery" (Bible Ch. 12 §12.2). Territory View includes saved Seeds among its contents (Bible Ch. 12 §12.4).
- **CORE-SEED-07 — Handoff to SEE YOURS without importing owner state.** *Specified.* Seeds are the sole starting material a visitor may carry into their own World under Step A7; the handoff transfers only what the visitor chose, at the resolution the owner granted — never the owner's private model (Bible Ch. 19 §19.5). The conversion mechanics beyond Ch. 19 are a recorded gap (see §12, Gap G-05), not a requirement invented here.

**Acceptance criteria (Step A6).**

1. Viewing, dwelling on, or being adjacent to a discovery object creates no Seed; only the explicit save act does (CORE-SEED-01).
2. A saved Seed contains no private World state and no detail finer than the grant's resolution (CORE-SEED-02).
3. After revocation of the source Perspective, the holder's notes and lawful public-resource bookmark remain accessible to the holder, and no copy of the revoked Perspective is retrievable through the Seed (CORE-SEED-04).
4. Saving a Seed mutates no World — neither the owner's nor the holder's (CORE-SEED-05).

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* a visitor who saves nothing leaves with nothing saved — and that is a complete, valid outcome of the visit (see also the meaningful-visit note at CORE-SY-05: a meaningful visit does not require a Seed save, Bible Ch. 37).
- *Returning user:* a returning Seed holder revisits discoveries via the Harbour surface (CORE-SEED-06), always subject to the source authorisation's **current** state (CORE-SEED-03).
- *Refusal:* not saving is not a failure state, and no funnel step or success criterion may treat the absence of a save as the absence of value (Bible Ch. 37 §37.4 as compiled; see CORE-SY-05).
- *Recovery:* revocation is the recovery path for the owner; its Seed-level effect is exactly CORE-SEED-04 — notes and lawful bookmarks survive, revoked content does not.

---

## 9. Step A7 — SEE YOURS (visitor's own World begun from Seeds)

**Purpose.** SEE YOURS is the journey's closing step: the visitor begins their own World from Seeds deliberately saved in another's Perspective, re-entering Step A1's bootstrap with Seed-derived starting material (Bible Ch. 19 §19.5; `MVP_SCOPE.md`, Step A7). The step is defined by the adopted minimum journey (R28).

**User stories.**

- As a visitor who saved Seeds, I can begin my own World from what visiting this person made of me — stated in those terms — and argue with that draft as my own First Light.
- As a new owner by this route, my World is mine from my first correction onward; nothing of the other person's private model came with me.

**Functional requirements.**

- **CORE-SY-01 — Born from chosen Seeds only.** *Specified (Ch. 19); step status Concept-to-Specified.* The visitor's provisional World is born from their chosen Seeds — "from what visiting this person made of them, stated in those terms: here is what visiting this owner made of you; argue with it" (Bible Ch. 19 §19.5). No other material from the visited Perspective seeds the new World.
- **CORE-SY-02 — Correction through the visitor's own First Light.** *Specified.* The visitor then corrects that draft through their own First Light correction pass (Steps A1–A2 apply unchanged), and the World is theirs from the first correction onward (Bible Ch. 19 §19.5).
- **CORE-SY-03 — Never a copy of the owner's private model.** *Specified.* A Seed-Born World is never created by copying the owner's private model: what crossed over was only what the visitor chose, at the resolution the owner granted (Bible Ch. 19 §19.5; invariants 40, 15 in part — the owner's free-text "why" answers never cross over).
- **CORE-SY-04 — Session claiming.** *Specified.* Visitor session claiming requires a valid capability and an authenticated owner: a visitor carrying Seeds into a World of their own must present the capability issued for that session and authenticate as that World's owner. A session may not be claimed by a different person, without its capability, or on the basis of device, network, or behavioural resemblance. An unclaimed session confers no rights and expires with its grant (Bible Ch. 19 §19.6).
- **CORE-SY-05 — Success measurement for this step.** *⚠ BLOCKED — Q-29, Q-35.* The north-star hypothesis is that a meaningful World Visit is an authorised perspective visit that produces a deliberate discovery action, such as saving a Seed or starting a reciprocal exploration (Bible Ch. 1) — a hypothesis, not a measured result. A meaningful visit does **not** require a Seed save (Bible Ch. 37). The **exact meaningful-visit definition is unratified** (Q-35) and **pilot success/evidence thresholds generally are undecided** (Q-29). This PRD therefore specifies no success threshold, funnel target, or go/no-go criterion for SEE YOURS. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-29, Q-35.*
- **CORE-SY-06 — Pilot population for this step.** *⚠ BLOCKED — Q-02.* The first target audience is undecided (gap P01); the pilot's cluster-recruitment model (Bible Ch. 37) assumes an answer. Until Q-02 is settled, the pilot population that would exercise SEE YOURS is undefined, and this PRD names none. *Trace: `FOUNDER_DECISION_REGISTER.md` Q-02.*

**Acceptance criteria (Step A7).**

1. A Seed-Born World contains, at birth, only material derived from the holder's deliberately saved Seeds, at no finer resolution than the source grant allowed (CORE-SY-01, CORE-SY-03).
2. The new World's first correction is processed under testimony-v1 exactly as in Step A2 (CORE-SY-02).
3. A session-claim attempt by a different person, without the capability, or on resemblance grounds fails; an unclaimed session expires with its grant (CORE-SY-04).
4. No metric shipped with the pilot treats absence of a Seed save as absence of a meaningful visit (CORE-SY-05).

**Empty-state / returning-user / refusal / recovery experiences.**

- *Empty state:* a visitor with no saved Seeds has no Seed-derived starting material; beginning a World then follows the ordinary First Light seed path of Step A1 (Bible Ch. 9). The corpus specifies no separate SEE YOURS empty-state screen — see Gap G-01.
- *Returning user:* once claimed and corrected, the Seed-Born World is an ordinary private World under Step A3; its owner is a returning owner under §§4–5.
- *Refusal:* a visitor may visit, save nothing, and never begin a World; no penalty, standing loss, or funnel failure attaches (Bible Chs. 17 §17.6, 19 §19.1, 37).
- *Recovery:* an unclaimed visitor session expires with its grant and confers no rights (CORE-SY-04) — the specified recovery boundary for an interrupted SEE YOURS start. Any richer interrupted-session recovery is not specified in the corpus — see §12.

---

## 10. Dependencies — founder decisions

Every requirement above that depends on an open founder decision is listed here, by Q-item, using the numbering of `phase-zero/FOUNDER_DECISION_REGISTER.md`. **This section flags and moves on: it states no recommendation and resolves nothing.** Where the register records positions, they are the corpus's own; this PRD adopts none of them.

| Q-item | Decision (as registered) | Blocked requirement(s) in this PRD | What remains specifiable today |
|---|---|---|---|
| Q-01 (D-34) | Whether confirmation is an explicit CONFIRM event, or BOOST→DECLARED is the confirmation act | CORE-COR-02 | Testimony-v1 as specified (BOOST→DECLARED) governs the normative text meanwhile; final reducer semantics and the correction UI's action set wait |
| Q-02 (P01) | Who is the first ideal customer / target audience | CORE-SY-06 | The journey itself; its pilot population does not exist until this is settled |
| Q-05 (U05) | Exact screen flows and error states (owner, anonymous visitor, registered visitor, returning owner) | CORE-VIS-07 (and the flow-level detail of every step — see Gap G-01) | Behavioural requirements and the Ch. 22 error semantics; frontend cannot be specified to acceptance without flows |
| Q-06 (A02) | Exact semantics of DECLARED, CONFIRMED, WITNESSED, REFUTED — complete provenance transition table | CORE-COR-09 | The principal transitions (Chs. 7, 25, 27) |
| Q-07 (A06) | How edges are created, rejected, weighted, and decayed | CORE-COR-10 (weighting/decay portion) | The edge-correction command contract (adopted, R9) |
| Q-09 (S01) | What exactly each Lens resolution can disclose — field-level disclosure schema | CORE-LENS-08 | Resolution semantics and disclosure eligibility (Chs. 18, 33); the Compiler cannot be built or privacy-tested to acceptance without the schema |
| Q-10 (S02) | Owner control of audience, expiry, and resharing — forwarding behaviour | CORE-LENS-09 (forwarding portion) | Recipient grants, link capabilities, expiration (Chs. 17, 22) |
| Q-13 (S05) | Deletion, exports, backups, and event-history retention periods | CORE-PW-08 (periods portion) | Erasure mechanics, tombstones, whole-World deletion process (Chs. 24, 26); the D-12 erasure-vs-replay collision stays open until periods exist |
| Q-17 (D05) | What happens when someone abuses a shared Perspective (report/block/mute/restriction flows) | CORE-VIS-08 | The closed pilot journey is specified without these flows; they block any wider social pilot, not the closed journey |
| Q-21 (E02) | Final persistence and event-replay strategy — production database confirmation | CORE-PW-09 | The strategy as specified (Chs. 24, 26, 28) and PostgreSQL's candidacy |
| Q-29 (V01) | What evidence proves the concept is valuable — pilot success and stop thresholds | CORE-SY-05 | The metric set as hypotheses (Ch. 37); no thresholds |
| Q-33 | Draft Survival thresholds | CORE-FL-07 (gate portion) | Draft Survival as a diagnostic in the 30–50% hypothesis band, never a target |
| Q-35 | Exact meaningful-visit definition | CORE-SY-05 | The north-star hypothesis (Ch. 1) and the rule that a meaningful visit does not require a Seed save (Ch. 37) |
| Q-37 (A-03) | What Q means in the Draft Selector / discovery utility formula | CORE-FL-08 | Eligibility-before-scoring and the constrained multi-objective form; Q's meaning is Concept, unsettled |
| Q-43 | Repository and environment creation | CORE-PW-09 (gating condition for all code work) | All specification work in this PRD; no engineering assignment can start |

**Count:** 13 numbered functional requirements in this PRD carry a ⚠ BLOCKED marker, waiting on 15 distinct Q-items (Q-01, Q-02, Q-05, Q-06, Q-07, Q-09, Q-10, Q-13, Q-17, Q-21, Q-29, Q-33, Q-35, Q-37, Q-43). CORE-PW-09 waits on two Q-items (Q-21, with Q-43 gating); CORE-SY-05 waits on two (Q-29, Q-35); CORE-LENS-09 and CORE-PW-08 are each blocked only in the named portion, with the remainder specified.

**Related Q-items noted but not counted as blocking a numbered requirement above:**

- **Q-32** — the testimony-v2-experimental coefficient *a* is unset; it blocks v2 only. Testimony-v1 (this PRD) is unaffected; see CORE-COR-04.
- **Q-36** — coastline disclosure (whether/how an owner may explicitly disclose refutations) is governed meanwhile by Bible Chs. 18/20 disclosure rules; a standalone coastline-sharing feature is a deferred decision, not pilot behaviour. See CORE-LENS-05.
- **Q-03 (P02)** — the primary reason to open the app; it blocks home/first-screen priorities, which this journey PRD does not specify (see Gap G-08).
- **Q-11 (S03)** — the differential-probing test programme for inference from comparison/map geometry; owed, and cannot run pre-code. It gates any public sharing release under the Bible's own gates, but no single requirement above can be written from it yet.
- **Q-14 (S06)** — what data external AI providers may receive; vendor terms are not specified. It blocks any provider integration; no Track A requirement above depends on a provider integration (see CORE-FL-02).
- **Q-22 (E03)** — complete API contracts (OpenAPI, auth rules, error codes, versioning) are at contract-sketch level; CORE-COR-05 and CORE-LENS-09 cite only the endpoints the Bible actually specifies.
- **Q-23 (E04)** — operating limits and recovery objectives are undefined; no requirement above states latency, capacity, uptime, or recovery targets.
- **Q-27 (O01)** and **Q-28 (O02)** — accountable legal/support/moderation/incident roles, and the platform-wide accessibility/device standard, gate a Track A *pilot* (`MVP_SCOPE.md`, cross-cutting gates) rather than any single functional requirement here. Note on Q-28: a WCAG 2.2 AA target is specified for Meridian's web interfaces (Continuation 30 §417) and is **not** an adopted platform-wide standard; this PRD does not import it into Track A.
- **Q-26 (B03)** — growth without an engagement feed; Seed-Born Worlds as a *growth mechanism* depend on it (`MVP_SCOPE.md`, Step A6). The Seed mechanics themselves (Step A6) are specified for the pilot.

## 11. Non-goals (brief)

This PRD covers Release Track A only. The following are out of scope here; the **full exclusion list is a separate document in the Stage 02 scope package** (the release-scope exclusion list from the SAGE first assignment, `AI-DEVELOPMENT-ORGANIZATION.md` §5) and this section cross-references it rather than duplicating it:

- **Release Track B** — the Meridian Experience (fictional district, five eras, Reality Lens, guided mission): a controlled reference implementation with its own gates; not a Track A dependency.
- **Release Track C** — Platform Expansion: Living Memory Network at scale, Creator Universes & Live Worlds, licensed literary worlds / Storyworld Engine, Education / Living Classroom, broader Living Cities, Public-Domain World Library. None may become a dependency of Track A launch (`MVP_SCOPE.md`, Track C).
- **Layer 3 social forms** (World Swap, Shared Worlds) — Concept status; excluded from the pilot (Bible App. D, D-33).
- **Algorithm Recipes** — Concept; excluded from the pilot (Bible Ch. 3).
- **Comparison and the Encounter Engine** as pilot features — the Encounter/consent protocol and Comparison are Specified/Concept in the corpus (Bible Chs. 20–21), but the adopted minimum journey in this PRD ends at SEE YOURS; Comparison's "unexplored" definition is itself unratified (Q-34, noted for completeness; it blocks no requirement in this PRD).
- **Commercial model** — who pays, for what, and when (Q-24) and unit cost (Q-25) are open founder decisions and are not specified here; invariant 21 (payments are never privacy/rights/spoiler grants) binds any future answer.
- **Testimony-v2-experimental** — not adopted; see CORE-COR-04 and Q-32.

## 12. Gaps — not specified in the corpus

The following items could not be written as requirements without inventing. They are recorded here instead, each with its source of absence. Inclusion here is not a recommendation that any of them be filled in any particular way.

- **G-01 — Exact screen flows, wireflows, and error-state presentation for Core.** The corpus specifies behaviour and API error semantics (Bible Ch. 22 §22.3) but not the flows for owner, anonymous visitor, registered visitor, or returning owner (Q-05). This gap covers, among other things: pre-seed First Light screen content; Lens creation over an empty territory set; the visitor-facing interruption when a grant is revoked mid-session; and the SEE YOURS empty state for a visitor with no Seeds. (`MVP_SCOPE.md`, Steps A1, A5; `FOUNDER_DECISION_REGISTER.md` Q-05.)
- **G-02 — Field-level disclosure schema for Continent / Coast / Harbour.** Still owed; the largest specification gap in Track A. Recorded as CORE-LENS-08 / Q-09 rather than invented.
- **G-03 — Forwarding and resharing behaviour for Perspectives and Invitations.** Grants and expiry are specified; forwarding is not (Q-10).
- **G-04 — Complete provenance transition table.** The principal transitions are specified; the complete table for every event × provenance state is owed (Q-06), and interacts with Q-01.
- **G-05 — Seed→World conversion contract beyond Bible Ch. 19.** `MVP_SCOPE.md` (Step A7) records that no separate contract for the conversion exists in the corpus beyond Ch. 19's journey definition. Details such as which Seed metadata becomes draft material, and in what form, are not specified and are not supplied here.
- **G-06 — Retention, deletion, export, and backup periods.** Mechanics specified; periods undecided (Q-13). Without them, no privacy policy and no deletion-lineage acceptance test can be written.
- **G-07 — Visitor abuse flows (report / block / mute / access restriction).** Unspecified (Q-17); required before wider social discovery (Bible Ch. 32).
- **G-08 — Home / first-screen priorities and the primary reason to open the app.** Open as Q-03 (P02); this journey PRD specifies the journey, not the home surface.
- **G-09 — Platform-wide accessibility and device-support standard.** No adopted standard exists for Track A (Q-28). The Bible Ch. 3 requirement that every Map element be available in a non-visual equivalent is specified and is carried at CORE-PW-07; a measurable standard against which to test it is not.
- **G-10 — Complete API contracts.** Endpoints cited in this PRD are those the Bible specifies (Bible Ch. 22; Ch. 25 §25.4). OpenAPI schemas, authentication rules beyond the session-context principle, and versioning/compatibility requirements are at contract-sketch level (Q-22).
- **G-11 — Operating limits and recovery objectives.** Latency, capacity, uptime, backup recovery, monitoring, and incident response targets are undefined in the corpus (Q-23); the replay/recovery *behaviours* of Bible Ch. 26 §26.5 are specified and carried at CORE-PW-06.
- **G-12 — External AI provider data terms.** Gateway safety rules are specified (Bible Ch. 31); consent, minimisation, vendor restrictions, logs, and retention for specific providers are not (Q-14).
- **G-13 — Differential-probing test programme.** Disclosure eligibility (CORE-LENS-06) is adopted as the primary mitigation against inference from generalised labels, map geometry, aggregates, and explanations; the testing programme that would probe those channels is owed and cannot run pre-code (Q-11).
- **G-14 — Draft composition beyond the recorded hypothesis.** Bible Ch. 9 records an 8-proposal composition (4 close / 2 cross-territory bridges / 2 novelty) as a **hypothesis** for cold-start composition, "not a mandatory production setting." It is therefore not stated as a requirement in §3.
- **G-15 — Interrupted-session recovery for SEE YOURS beyond grant expiry.** Bible Ch. 19 §19.6 specifies claiming and expiry; resumption of an interrupted Seed-Born World start in any richer form is not specified.
- **G-16 — Pilot thresholds and definitions generally.** Draft Survival thresholds (Q-33), the exact meaningful-visit definition (Q-35), and pilot success/stop conditions (Q-29, with accountable roles at Q-27) are all open; this PRD sets no numeric pilot target anywhere.

---

## 13. Traceability and test posture (summary)

- **Requirements count:** 57 numbered functional requirements — CORE-FL-01–08 (8), CORE-COR-01–10 (10), CORE-PW-01–09 (9), CORE-LENS-01–09 (9), CORE-VIS-01–08 (8), CORE-SEED-01–07 (7), CORE-SY-01–06 (6).
- **Statuses used:** Specified and Concept only. No requirement is labelled Implemented, Tested, Pilot Validated, or Production Ready, because no evidence in the corpus supports any such label for Track A (`FEATURE_STATUS_INVENTORY.md`; `PROJECT_STATE_AUDIT.md` §3).
- **Test suites:** the 104-case deterministic acceptance harness (Bible Ch. 36), the 130-case Presentation acceptance suite (Continuation 12 §111), and the Ch. 37 pilot programme are referenced in this PRD as **proposed only** — no case written, no case executed (`TEST_BASELINE.md`). The Replayable World gate (Bible Ch. 36) stands at 0 of 10 reviewed.
- **Invariants:** every step cites the Appendix B invariants that bind it; the full verbatim list is `phase-zero/CANONICAL_REQUIREMENTS.md`. Any conflict between this PRD and Edition 1.4 is resolved in favour of the baseline.

*End of proposal. Founder approval — and settlement of the Q-items in §10 — are the next events this document waits on; neither is enacted by it.*
