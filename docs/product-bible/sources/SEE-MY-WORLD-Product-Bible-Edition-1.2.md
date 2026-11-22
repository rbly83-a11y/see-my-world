# SEE MY WORLD

## Master Product Bible · Edition 1.2

**Compiled design document — Edition 1.2**

Product vision • user journeys • data model • algorithms • consent • architecture • QA • launch gates

Compiled 21 November 2026 | Controlled specification | Internal distribution

**THE MODEL SERVES THE PERSON.**

---

## Edition 1.2 notes

Edition 1.2 is a compilation and revision of the complete SEE MY WORLD design record. It supersedes Edition 1.1 as the working specification while preserving Edition 1.1's canonical definitions, security invariants, API contracts, and test-evidence distinctions.

**Baseline of record.** Edition 1.1 is frozen as the baseline of record. The original Edition 1.0 binary was not available when Edition 1.1 was prepared; Edition 1.1 was itself reconstructed from the Edition 1.0 chapter outline, release evidence, and inspected repository artifacts. Edition 1.2 diffs against Edition 1.1 explicitly, so that no future edition inherits an unrecorded baseline. Every conflict found between sources during compilation, and every optimization applied, is logged in Appendix D.

**What Edition 1.2 changes.** (1) It incorporates the First Draft Engine as the normative algorithmic core: the testimony model — strength, testimony, provenance, last_witnessed, buoy — is canonical, and the testimony-v1 correction arithmetic is specified exactly (Chapter 7). (2) It incorporates the Living Perspective Engine development line (Concept Expansion and Continuations 02–07): the Atlas v2.0, World Seasons as an experimental extension, the Cartographic, Expedition, Encounter, and Continuity engines, the deterministic Testimony Reducer, the World Schema v2.0, the Event-Replay Engine, and the Resolution Lens Compiler. (3) It adopts the development decisions of Continuation 04 §34 as the Edition 1.2 baseline (Chapter 4), including the product direction: personal discovery first, social discovery second. (4) It resolves, in Appendix D, the conflicts the development line accumulated — most importantly the drift between the original testimony model and the later affinity/confidence reframing, which is resolved in favour of the original model. There is no confidence field in the Edition 1.2 node model. (5) It adds the specifications the review found missing: an operator×dimension matrix, an evidence-event stream, tombstone semantics for partial erasure, an edge-correction command contract, disclosure eligibility as a single rule governing both Lens compilation and comparison, and a proposed definition of "unexplored" for New Frontier, pending ratification (Appendix C). (6) It integrates the *Complete Project Audit*, received while this edition was being compiled: the audit's 42-gap inventory becomes the decision register of Appendix C, its applicable recommendations are applied as revisions (comparison privacy, the Seed definition, onboarding reconciliation, provisional-sharing deferral, the Atlas attribute refinement, testimony presentation discipline, and the three-layer product organisation), and its one head-on conflict with the normative reducer — an explicit CONFIRM event versus BOOST upgrading provenance to DECLARED — is logged unresolved in Appendix D as a founder decision. The audit's own assessment is recorded there with it: concept originality 9/10, product definition 7/10, specification completeness 5/10, validated market demand unproven — the audit's editorial judgment, not a measured result.

**Evidence discipline.** This Bible distinguishes, throughout, between what is specified, what is proposed, and what has been tested. Test results from the v36.x release line are *reported*, never independently verified in this runtime; the inspected v9.8 archive belongs to a distinct, earlier version lineage and is not evidence for the v36 line; the 104-case acceptance harness of Chapter 36 is planned, and no case in it has been executed. No chapter of Edition 1.2 claims that any post-Edition-1.1 module is implemented. Synthetic test success supports a limited controlled pilot decision, not a production security or market-fit guarantee.

**Feature status labels.** Every major feature in this Bible carries one of six status labels, defined by the Complete Project Audit and adopted as an Edition 1.2 convention: **Concept** (proposed behaviour), **Specified** (normative contract stated in this Bible), **Implemented** (exists in a particular code revision), **Tested** (acceptance evidence recorded), **Pilot validated** (tested with actual participants), **Production ready** (release gates satisfied). The Feature Status Register (Appendix D.4) applies these labels to the major features. Under this Bible's evidence discipline, no post-Edition-1.1 module is labelled Implemented or Tested; where Edition 1.1-scope features rest on the v36 release evidence, the label is marked "(reported)".

**How to read this document.** Part I states what the product is and the decisions that govern it. Part II specifies the algorithm normatively. Parts III and IV specify the experience and the sharing model. Part V specifies the engineering contracts. Part VI states the trust architecture and the evidence. Part VII states the strategy. Appendices A–E carry the event dictionary, the canonical invariants, the open decisions, the complete system review and optimization log, and the revision and evidence log.

---

## Contents

**Part I — Foundations**
Chapter 1 — Executive product definition · Chapter 2 — Audience and jobs to be done · Chapter 3 — Canonical product objects · Chapter 4 — Product identity and adopted decisions

**Part II — The First Draft Engine**
Chapter 5 — The inversion and the three laws · Chapter 6 — The node model: five dimensions · Chapter 7 — Correction operators and testimony arithmetic · Chapter 8 — Tidal mathematics · Chapter 9 — First Light and the Refutation Bootstrap · Chapter 10 — The Atlas v2.0

**Part III — Experience**
Chapter 11 — Experience and design language · Chapter 12 — The Cartographic Engine · Chapter 13 — World Seasons · Chapter 14 — Constellations and the meaning layer · Chapter 15 — The Expedition Engine · Chapter 16 — Continuity: Timeline and Returning Tides

**Part IV — Sharing and Encounter**
Chapter 17 — Lens, Perspective and permission semantics · Chapter 18 — The Resolution Lens Compiler · Chapter 19 — Visitor journey and Seed-Born Worlds · Chapter 20 — Comparison, mathematically honest · Chapter 21 — The Encounter Engine and consent protocol · Chapter 22 — Invitations and API contract

**Part V — Engineering**
Chapter 23 — World Intelligence Model: five layers · Chapter 24 — World Schema v2.0 · Chapter 25 — The Deterministic Testimony Reducer · Chapter 26 — The Event-Replay Engine · Chapter 27 — Refutation, restoration, and buoy protocols · Chapter 28 — Algorithm versioning and migration · Chapter 29 — Draft Selector v2.0 · Chapter 30 — Architecture and persistence · Chapter 31 — AI gateway and provider safety

**Part VI — Trust, Safety, Evidence**
Chapter 32 — Privacy, abuse and security · Chapter 33 — Privacy threat model · Chapter 34 — Trust architecture: six guarantees · Chapter 35 — Test evidence and what it proves · Chapter 36 — Acceptance harness and test matrix · Chapter 37 — Pilot release gates and research programme

**Part VII — Strategy**
Chapter 38 — Commercial thesis and scope discipline · Chapter 39 — Strategic roadmap and release sequencing · Chapter 40 — Risks and mitigations · Chapter 41 — Decision rights and change control · Chapter 42 — The World Protocol

**Appendices**
Appendix A — Event dictionary · Appendix B — Canonical invariants · Appendix C — Open decisions · Appendix D — Edition 1.2 system review and optimization log · Appendix E — Revision and evidence log

---
# Part I — Foundations

Part I states what SEE MY WORLD is, whom it serves, what its canonical objects are, and which decisions Edition 1.2 adopts as its baseline. Later parts define the mathematics, engineering contracts, privacy enforcement, and release gates that give these foundations effect. Where a later, more specific chapter differs in detail, it governs the detail; nothing here overrides the invariants of private-by-default, owner authority over inference, and disclosure only through an authorised Lens.

A note on status applies to the whole Bible. Edition 1.1 described a product with reported prototype and release-candidate test evidence behind it. The material added in Edition 1.2 — the Living Perspective Engine framing, the World Schema v2 direction, the normative algorithm specification, and the deterministic replay model — is proposed specification. None of it is implemented, and nothing here should be read as a claim that it has been built, tested, or validated with users. Proposed material binds a build only when adopted through the change-control process of Chapter 34 and verified against the relevant chapter's acceptance tests.

## Chapter 1 — Executive product definition

SEE MY WORLD is a personal curiosity and discovery platform. Its social form is the Perspective Network: a privacy-first service for constructing a user-correctable interest map, sharing a bounded Lens, and letting another person explore that Perspective and optionally discover their own World. The order in that sentence is deliberate. In Edition 1.2, personal discovery comes first and social discovery second; a World must be useful to its owner even if it is never shared.

The fundamental product distinction is this:

> Social networks show people what you do. SEE MY WORLD helps people understand what captures your curiosity, how your interests connect, and which discoveries you might make together.

That distinction separates the product from a conventional social network in three ways. First, its subject is curiosity, not activity: it models what a person is drawn to, not a feed of what they have done. Second, its unit of value is connection: an interest matters partly through the interests it sits beside, and the map — not a list — is the primary representation. Third, its social promise is joint discovery, not audience: two people meet through voluntarily shared perspectives and a discovery both have authorised, not through followers, popularity, or an engagement feed.

The primary promise, carried unchanged from Edition 1.1, is:

> "Show someone how your world of curiosity fits together—without handing them everything you know or everything you have done."

The promise contains its own limit. Showing how a world fits together does not require handing over everything in it, and the product's privacy architecture exists to keep that limit enforceable rather than merely reassuring (see Chapter 18).

The north-star hypothesis, also carried from Edition 1.1, is that a meaningful World Visit is an authorised perspective visit that produces a deliberate discovery action, such as saving a Seed or starting a reciprocal exploration. The hypothesis is a hypothesis: it names the event the product treats as evidence of value so that the pilot can test it, refine its exact definition, and discard it if observation does not support it. It is not a measured result, and no retention, conversion, or revenue figure is claimed for it anywhere in this Bible.

Three principles, first articulated in the Living Perspective expansion, organise everything that follows. **Testimony:** the system may suggest who a person might be interested in becoming, but only the person can confirm what belongs in their World. **Tides:** interests evolve, fade, return, and connect; a World is not a permanent psychological profile. **Resolution:** the owner controls how much of their World another person can explore, without exposing the underlying private information. The system drafts; the person testifies; the map breathes.

Finally, a boundary on interpretation. A World is a model its owner builds and corrects with the system's help. It is not the person, not a measurement of personality, and not an objective account of identity. Every representation — map, comparison, explanation, or export — must respect that boundary.

## Chapter 2 — Audience and jobs to be done

Edition 1.2 retains the three audiences of Edition 1.1. Each audience has a distinct job, and the product must serve each job without quietly converting it into another audience's job.

**The Owner.** The owner's job is to understand and correct an evolving interest model, and to share a controlled slice of it with someone else. The owner is the authority over their World: they declare interests, confirm or reject proposals, set how strongly an interest matters and how much attention it is currently receiving, and decide what, if anything, leaves the World through a Lens. The product serves this job when the owner can look at a provisional map, recognise or dispute it, correct it with understandable effects, and preview exactly what a visitor would see before anything is published.

**The Visitor.** The visitor's job is to explore an authentic perspective without surrendering personal data or being required to register. A visitor arrives through a specific Perspective, sees only what that Perspective's Lens permits, and may save a Seed with explicit intent or begin building a provisional World of their own through the reciprocal journey. A view is never treated as endorsement, and a visit must never silently import the owner's private model into the visitor's World or the visitor's behaviour into the owner's.

**The Researcher or Creator.** The researcher/creator's job is to present connected interests as an intelligible map rather than a disorganised list of links. The product's value here is presentational: territories, relationships, and explanations that make a body of curiosity legible to others, under the same consent and disclosure rules as every other Perspective. This audience receives no privileged access to private Worlds and no exemption from Lens scope.

**Pilot non-goals.** Edition 1.1 named the pilot's exclusions, and Edition 1.2 retains them as product-level exclusions, not merely pilot scoping. SEE MY WORLD does not predict personality, does not infer political or religious identity, does not score relationships, and does not replace professional profiling. These are not capabilities deferred to a later phase; they are outside what the product is for. The same discipline excludes the adjacent forms named in Edition 1.1's commercial thesis: the product is not a dating app, a generalised social feed, a personality diagnostic, a creator marketplace, or a host for arbitrary code execution.

Two consequences follow. First, any feature requiring an excluded inference is ineligible by construction, however useful for ranking or matching; such eligibility rules are enforced before any ranking occurs (see Chapter 14). Second, success is measured in each audience's own terms — owner recognition and correction, deliberate visitor discovery, intelligible presentation — not by metrics rewarding unwanted exposure or compulsive use.

## Chapter 3 — Canonical product objects

The objects below are the product's canonical vocabulary. A term used in any later chapter, interface, or test means what this chapter defines, and new objects may be introduced only through change control. Edition 1.2 retains the twelve objects of Edition 1.1, revises one definition, and adds three new objects — Atlas, Testimony Ledger, and Evidence Event — that the intervening specification work showed the model requires.

**World.** A private, evolving representation of user-approved interests and evidence. A World is private by default, is owned by exactly one owner, and changes only through owner testimony, authorised evidence, and the versioned rules of this Bible.

**Worldprint.** The computational graph of topics, strength, testimony, provenance and relationships that underlies a World. Edition 1.2 revises the Edition 1.1 definition: the node model carries strength, testimony, and provenance, and no other scalar standing in for how sure the system is about the person. A Worldprint is private; what may be shared is a Lens-derived projection of it, never the graph itself.

**World Map.** The visual representation of a World, with an accessible non-visual equivalent. The Map is the primary experience (see Chapter 4), but it is a representation, not the underlying state: map distance is not a psychological measurement, and every element legible on the Map must be available in the non-visual equivalent.

**Territory.** A topic cluster, not a claim about identity. Territories organise topics into the broad domains a person navigates by; membership of a topic in a territory says where the topic belongs in the Atlas, not what kind of person is interested in it.

**Evidence.** A user-provided or authorised signal. Evidence is an input, not a conclusion: observed activity is distinguished from approval and from enduring preference, and the retention and visibility of evidence are governed separately from the state derived from it.

**Lens.** An explicit selection of territories, permissions, audience and expiry. The Lens is the owner's disclosure decision in object form; nothing is disclosed except through a Lens, and Lens enforcement is a server-side function (see Chapter 18).

**Perspective.** A published, versioned or immutable Lens-derived visitor view. A Perspective is what a visitor actually receives. It is derived from a Lens at a point in time, so the owner's later corrections do not silently alter a published view, and revocation acts on the Perspective's grants.

**Seed.** A visitor-owned reference to a permitted discovery object — an Atlas topic id and/or an external resource reference — plus optional personal notes; never silently imported. A Seed never contains copied private World state. It records that a person — owner or visitor — chose to keep a discovery for later, and saving one changes nothing in any World until its holder deliberately acts on it. If the Perspective a Seed was saved from is later revoked, the holder retains their own notes and any lawful public-resource bookmark, but never a copy of the revoked Perspective (see Chapters 19 and 33).

**Receipt.** An explanation of factors, provenance, classifier or fallback status, and permission basis. Every material system action — a proposal, a correction, a disclosure — must be able to produce a Receipt that says, in terms the recipient is permitted to see, why it happened.

**Comparison.** A presentation of Where We Meet, Where You Differ, and New Frontier, without a compatibility score. A Comparison is generated only from information both relevant disclosure policies permit, and it describes topics and paths; it does not rank people or relationships.

**Invitation.** A Perspective-specific recipient grant, separate from broad public links. An Invitation names its Perspective and its recipient; accepting or declining it changes nothing about either party's World beyond the access the grant itself confers.

**Recipe.** A future algorithm configuration; arbitrary repository execution is excluded from the pilot. Recipes are a controlled extension mechanism under governance, not a general right to run code against Worlds.

**Atlas** *(new in Edition 1.2).* The curated, versioned public tree of territories and topics, together with a separate relationship graph connecting topics across the tree. The Atlas is shared infrastructure: it defines where topics belong and how they may connect, it is identical for every World, and no owner's corrections alter it for anyone else. Certain categories are hard exclusions: political affiliation, religious identity, and health status are absent from the Atlas by construction — not filtered from results, but never present as topics to be proposed, confirmed, or disclosed in the first place.

**Testimony Ledger** *(new in Edition 1.2).* The append-only record of owner correction events from which World state is derived. Corrections are recorded as events — declaration, confirmation, BOOST, REDUCE, REJECT, KEEP_WATCHING, and their successors — and the World's current state is a deterministic projection of the Ledger, not a separately edited record (see Chapter 24). Append-only describes ordinary operation, not undeletability: the Ledger is subject to privacy-governed erasure, under which deletion must reach derived state, published views, and backups according to documented retention policy (see Chapter 26).

**Evidence Event** *(new in Edition 1.2).* A non-testimony record of proposal arrivals and authorised signals. Evidence Events capture what the system received or proposed — an evidence item's arrival, a candidate's generation, a provider's classification — separately from what the owner decided about it, which belongs to the Testimony Ledger. The separation matters because Receipts must be able to explain a proposal's origin without treating its arrival as endorsement, and because the two records carry different provenance, retention, and erasure rules (see Chapter 24).

## Chapter 4 — Product identity and adopted decisions

Continuation 04 of the Edition 1.2 development line closed with a table of decisions recommended for adoption as the architecture baseline, expressly as proposals until formally approved and integrated into the controlled Product Bible. This chapter performs that integration. In Edition 1.2 the following decisions are **adopted** as the baseline against which specifications, builds, and acceptance tests are judged. A later decision may supersede one of them only through change control, with the superseding decision recorded in the revision log.

| Decision | Adopted direction |
|---|---|
| Primary product identity | Personal curiosity and discovery platform |
| Social model | Optional, consent-based Perspective Network |
| Core intelligence | Versioned Atlas plus owner-controlled World graph |
| Algorithm authority | Human correction overrides inference |
| Primary experience | Interactive World Map |
| Discovery mechanism | Finite, explainable Expeditions |
| Social interaction | Independently authorised Encounters |
| Long-term memory | Editable and deletable Continuity history |
| Privacy enforcement | Server-side Lens Compiler |
| Monetization principle | Never require sale of private interest histories |

Three of these decisions carry the product's identity and deserve explicit statement beyond the table. First, the ordering: the primary identity is a *personal* curiosity and discovery platform, and the Perspective Network is its optional social model. Personal discovery first, social discovery second — a World must be useful even if never shared, and no core owner journey may depend on publishing, inviting, or being visited. Second, algorithm authority: human correction overrides inference, unconditionally. Where a model and its owner disagree, the owner's testimony governs the World, and the system's recourse is to explain, propose, and record — never to outvote. Third, the monetization principle is a constraint, not a strategy: whatever revenue model the product eventually adopts, it must never require the sale of private interest histories.

Adoption also settles how the World Protocol direction recorded in Continuation 04 (§33) is to be read in Edition 1.2. A portable, owner-controlled representation of interests remains a long-term research direction, governed by the principle stated there: share an approved perspective, not a copy of the person. It is not a pilot capability, it does not authorise exposing raw Worldprints or private derived data to third parties, and it may proceed only subject to independent security, privacy, interoperability, and legal review.

The product is organised in three layers, adopted in Edition 1.2 from the Complete Project Audit. **Layer 1 — My World:** construct, recognize, correct, and control a personal World (First Light, Atlas mapping, testimony, tidal state, the World Map, Receipts, private discovery). **Layer 2 — Share a View:** deliberately share a bounded Perspective and let another person explore it (Lenses, Perspectives, Invitations, visitor journeys, Seeds, SEE YOURS, permission-safe Comparison). **Layer 3 — Explore Together:** turn mutual curiosity into shared discovery (Expeditions, Encounters, Constellations, Returning Tides, collaborative Worlds, and eventually portable Perspectives). The pilot scope is Layers 1–2. Layer 3 modules are proposals, status-labelled as such in the Feature Status Register (Appendix D.4), and no Layer 3 capability may be presented as part of the first product. The minimum complete journey across the pilot layers is: First Light → correction → Lens → visit → Seed → SEE YOURS (Appendix C, priority decision 2). Chapter 39 sequences the roadmap against these layers.

With these decisions adopted, Part I's foundations are complete: a personal discovery product, three named audiences under explicit non-goals, fifteen canonical objects, and ten baseline decisions. Part II turns to how a World is represented, corrected, and kept truthful over time.
# Part II — The First Draft Engine

Part II is the algorithmic core of SEE MY WORLD. It specifies, in normative form, the model first set out in the First Draft Engine concept document and frozen as **testimony-v1** by the Normative Algorithm Specification (Continuation 06, §§43–50). A rule stated without qualification is normative for testimony-v1. Material belonging to the testimony-v2-experimental line is fenced, labelled experimental, and given no normative force; it is developed in Chapter 13. No implementation may substitute an experimental rule for a v1 rule silently: a version change is recorded, announced, and replayable, or it does not happen.

## Chapter 5 — The inversion and the three laws

Every conventional interest model — recommenders, advertising profiles, taste graphs — rests on three assumptions. The First Draft Engine inverts all three, and the inversion, not any single formula, is the design.

First, conventional systems assume **the system's job is to be right**. Behaviour is harvested, interests are inferred, and accuracy is the metric. The Engine assumes instead that **the system's job is to be correctable**. Its first model of a person is a draft — built to be argued with, not believed. The core metric is therefore not prediction accuracy but *recognition*: how quickly a person looking at the draft can say "that's me, that's not, that's almost." A system optimised for correctability wants its errors visible, legible, and cheap to fix; only that is compatible with the owner's authority.

Second, conventional systems treat confidence as **a probability the system computes about you**, from evidence you did not choose to give. In this design, confidence is testimony. A topic stands in exact proportion to how many times a human being has personally confirmed it. Inference can propose; only testimony can establish. Testimony is a count of human acts, never a probability about a person. This is a philosophical statement about where authority lies, not a licence to add a computed probability field to the node model: Chapter 6 defines the node, and it contains no such field.

Third, conventional systems build **a dossier**: a profile that accumulates, does not forget, and whose subject is the last to see it. The Engine holds that **the map is alive or it is a dossier**. Everything unconfirmed decays. Interests have tides. A World that cannot forget is a file kept on someone; a World that ebbs is a garden someone tends.

The summary is normative in substance: **The system drafts. The person testifies. The map breathes.**

### 5.1 The Law of Testimony

Nothing is established until the owner confirms it. System proposals enter the World as *dotted coastline* — visibly provisional — and can never, on their own, be shared, compared, or treated as fact about the person. Behavioural signals — a click, a dwell, a save by someone else — may propose but may never testify. Hence PROPOSED and WITNESSED nodes are ineligible for a Lens, a Perspective, and Comparison (Chapters 6, 10), and testimony increments (Chapter 7) attach only to human acts.

### 5.2 The Law of Tides

Every element of a World decays unless re-witnessed, at a rate set by how it got there. Declared interests ebb slowest; proposals ebb fastest. Forgetting is the machine's default; remembering is an act of the person. Corrections are never decayed — testimony is permanent until revoked. What decays is *strength*, not the record (Chapter 8).

### 5.3 The Law of Resolution

Sharing never grants *access*; it grants *resolution*. A Lens does not open a door to private contents — it sets the zoom at which a visitor may see: **Continent** (broad regions only), **Coast** (territories), or **Harbour** (specific topics). Zoom is consent, granted by the owner, revocable, and rendered exactly in preview. A visitor can never see finer detail than the Lens's resolution, because finer detail is never sent: generalisation happens in the model, not the presentation layer. The invariant Detail(Output) ≤ Resolution(Grant) and its Lens Compiler are specified in Part III; the Atlas structure making generalisation a tree walk is in Chapter 10.

## Chapter 6 — The node model: five dimensions

A World is a graph of topic nodes drawn from the Atlas (Chapter 10). In testimony-v1 every node carries exactly five dimensions; implementations must not add, rename, or reinterpret one within v1. Extensions are nullable, experimental, and identified below.

| Dimension | Type / range | Meaning |
|---|---|---|
| `strength` | number, [0, 1] | How present this interest currently is in the World. Decays tidally (Chapter 8). |
| `testimony` | number, ≥ 0 | The accumulated weight of human confirmation. Never computed from behaviour alone; never decays (Chapter 8). |
| `provenance` | enum, five classes | How the node got here, and therefore what authority it carries. |
| `last_witnessed` | timestamp or null | The time of the last human act touching this node. The anchor from which decay is materialised. |
| `buoy` | boolean | Set by KEEP_WATCHING: the node is held at a floor strength — watched, not endorsed (Chapters 7–8). |

**There is no confidence field.** No node field in v1 stores a system-computed probability that the owner holds an interest. Any such value derived internally for ranking proposals must stay out of the node, the Perspective, and any explanation presented as a fact about the owner; ranking is a Draft Selector concern (Chapter 9), not node state.

**Strength is current presence in v1 — explicitly.** In testimony-v1, `strength` *is* the node's current presence. There is no separate `current_attention` field in v1, and no implementation may introduce one under v1 semantics or split strength into two values while claiming v1 conformance. Attention-baseline behaviour — decay toward an owner baseline rather than toward zero — belongs to the v2-experimental line (Chapter 13).

### 6.1 Provenance: the five classes

Provenance classes, in descending authority:

- **DECLARED** — the owner stated it directly ("I am interested in X"). Testimony weight 1.0.
- **CONFIRMED** — the system proposed it; the owner affirmed it. Testimony weight 0.6.
- **PROPOSED** — the system suggests it; no human has ruled. Testimony weight 0. Rendered as dotted coastline. Ineligible for Lens, Perspective, and Comparison.
- **WITNESSED** — derived from an authorised behavioural signal. Its evidence weight is **capped at 0.3**. A WITNESSED signal may propose a node, but it can never establish one: it may never raise a node above PROPOSED status, it decays fastest (Chapter 8), and it is **never shareable**. WITNESSED evidence must not be confused with owner testimony, and no acceptance test passes if WITNESSED evidence alone upgrades a topic into a confirmed or shareable state.
- **REFUTED** — the owner rejected it. The node leaves the map's landmass and becomes coastline: negative space that shapes the World. A REFUTED node retains an internal record — necessary, among other things, to prevent the topic being proposed again — and **that record must never be disclosed through a Perspective**. Refutations are private by default; where an owner separately chooses to publish a coastline, what is published is boundary shape, never the internal record or a labelled list of rejections. The full refutation lifecycle is specified in Chapter 27; Chapter 7 states the rule binding every v1 implementation: an ordinary correction cannot restore a REFUTED node.

### 6.2 Experimental extensions: enduring affinity and exploration appetite

Continuation 05 (§37) restores the original testimony model and introduces two further values as experimental extensions, carried as **nullable** columns: absence means "not declared," never zero by implication.

- **`enduring_affinity`** (nullable, experimental) — an optional, owner-controlled declaration of lasting importance. It answers a different question from strength: strength may ebb, testimony remains authoritative until revoked, and enduring affinity is a separate owner declaration that an interest matters durably even while it is quiet. It does not silently decay, and no v1 correction operator writes it (Chapter 7, matrix).
- **`exploration_appetite`** (nullable, experimental) — the owner's interest in discovering more about a subject. A topic may have low testimony and high exploration appetite: the owner wants to explore it without yet claiming it. **`exploration_appetite` is owner-set only; no system action may raise it.** No proposal, inference, behavioural signal, or correction side-effect may increase it.

Both extensions coexist with the v1 model; neither replaces it. The original testimony value must not be renamed to, or reinterpreted as, a statistical reliability estimate — §37's restoration is normative on this point.

### 6.3 What testimony is not: presentation and interpretation discipline

Testimony counts qualifying human actions. It is therefore gameable by repetition — ten taps in ten seconds raise it exactly as ten considered acts do — and any presentation that converts the count into a claim about the person misrepresents it. The following rules are normative for every surface, receipt, and explanation:

- **Testimony is an action count.** It must never be rendered, described, or visualised as certainty, authenticity, sincerity, or strength of identity. A higher testimony value means *more qualifying actions*, nothing more.
- **The owner's latest explicit assertion is authoritative for current state.** An owner may affirm a topic and later change their mind; the latest assertion governs what the World currently says, while earlier events persist only as history under the owner's retention settings (Chapters 26–27).
- **Four records, four meanings.** Implementations and explanations must keep distinct: *action history* (every valid correction, preserved per retention rules), *owner assertion* (the current authoritative position), *engagement history* (optional records of repeated interaction), and *current prominence* (decaying strength, Chapter 8). Collapsing any two of these into a single number presented to a user is a specification violation.

Edges also carry provenance. **Surveyed edges** are owner-confirmed adjacencies; **dotted edges** are system-proposed, rendered dotted and excluded from Frontier computation until surveyed. Relationship categories are defined in Chapter 10.


## Chapter 7 — Correction operators and testimony arithmetic

The owner's corrections are the only authoritative writes to a World. Testimony-v1 has four correction operators — BOOST, REDUCE, REJECT, KEEP_WATCHING — whose arithmetic this chapter fixes. Each is an entry in a signed, append-only Testimony Ledger; current state is a pure fold over the ledger, so every state is reconstructable and every Receipt is a query against the ledger, not a generated explanation.

The underlying testimony weights are normative: direct declaration 1.0; confirmation 0.6; BOOST 1.0; REDUCE 0.5; REJECT 1.0; KEEP_WATCHING 0.3. Note what this buys: **a refusal counts as much as an embrace.** In existing systems "no" is the absence of data; here it is among the strongest signals an owner can give — owner correction authoritative over inferred interest, expressed as arithmetic.

### 7.1 The four operators (normative v1)

- **BOOST.** `strength ← min(1, s × 1.5)`; `testimony += 1.0`; provenance upgrades to DECLARED; `last_witnessed` ← event time. BOOST asserts the interest, which is why provenance rises to the highest class rather than to CONFIRMED.
- **REDUCE.** `strength ← s × 0.6`; `testimony += 0.5`; `last_witnessed` ← event time. REDUCE lowers presence without permanent rejection; provenance is unchanged — a reduced DECLARED interest is still declared, only quieter.
- **REJECT.** Provenance → REFUTED; `testimony += 1.0`; strength unchanged and **inert thereafter** — a REFUTED node has no tidal life (Chapter 8) and its retained strength carries no presentational meaning. The topic is ineligible for automatic proposals, publication, and related discovery paths unless explicitly restored (Chapter 27).
- **KEEP_WATCHING.** `buoy ← true`; `strength ← max(s, 0.15)`; `testimony += 0.3`; `last_witnessed` ← event time. It records curiosity without confirming affinity: held visible at the buoy floor, watched, not endorsed. Buoy removal is a separate operation (Part III); it neither rejects the topic nor erases its history.

Decay is not calculated inside the reducer: strength is first materialised to the correction timestamp (canonical order, Chapter 8), then the operator applies.

### 7.2 Operator × dimension matrix

The matrix below is normative for v1. It prevents the commonest implementation error in this design: an operator quietly writing a dimension it has no authority over.

| Operator | strength | testimony | provenance | buoy | enduring_affinity | exploration_appetite |
|---|---|---|---|---|---|---|
| BOOST | `min(1, s × 1.5)` | +1.0 | upgrades to DECLARED | unchanged | no effect in v1 | no effect in v1 |
| REDUCE | `s × 0.6` | +0.5 | unchanged | unchanged | no effect in v1 | no effect in v1 |
| REJECT | unchanged; inert thereafter | +1.0 | → REFUTED | unchanged | no effect in v1 | no effect in v1 |
| KEEP_WATCHING | `max(s, 0.15)` | +0.3 | unchanged | → true | no effect in v1 | no effect in v1 |

All four operators also set `last_witnessed` to the event time (§7.1). "No effect in v1" means a v1 reducer must neither read these experimental columns as inputs nor write them as side-effects. A future effect on either column is a new reducer version, not a v1 clarification.

### 7.3 The pure reducer

The core state transition is a deterministic function of previous state, action, and authoritative event time. The pseudocode below (Normative Algorithm Specification §47) implements testimony-v1 exactly, with one explicit safeguard: a refuted topic cannot be restored through an ordinary BOOST.

```ts
type Action =
  | "BOOST"
  | "REDUCE"
  | "REJECT"
  | "KEEP_WATCHING";
interface NodeState {
  strength: number;
  testimony: number;
  provenance:
    | "DECLARED"
    | "CONFIRMED"
    | "PROPOSED"
    | "WITNESSED"
    | "REFUTED";
  buoy: boolean;
  lastWitnessed: string | null;
}
function reduceTestimonyV1(
  node: NodeState,
  action: Action,
  eventTime: string
): NodeState {
  const next = { ...node };
  if (node.provenance === "REFUTED") {
    throw new Error("Explicit restoration required");
  }
  switch (action) {
    case "BOOST":
      next.strength = Math.min(
        1, node.strength * 1.5
      );
      next.testimony += 1;
      next.provenance = "DECLARED";
      break;
    case "REDUCE":
      next.strength = node.strength * 0.6;
      next.testimony += 0.5;
      break;
    case "REJECT":
      next.provenance = "REFUTED";
      next.testimony += 1;
      break;
    case "KEEP_WATCHING":
      next.buoy = true;
      next.strength = Math.max(
        node.strength, 0.15
      );
      next.testimony += 0.3;
      break;
  }
  next.lastWitnessed = eventTime;
  return next;
}
```

The REFUTED guard is part of v1 conformance, not optional hardening: any correction to a REFUTED node fails with "Explicit restoration required," and restoration proceeds only through its own owner-authorised operation. Deterministic implementation also requires validated timestamps, ordering by server-assigned sequence rather than timestamp alone, and specified arithmetic precision (Chapter 8).

> **KNOWN DEFECT — BOOST from zero (testimony-v1).** Under v1, BOOST from strength 0 yields 0 (0 × 1.5 = 0). A node at exactly zero therefore cannot be BOOST-recovered: repeated BOOSTs raise testimony and provenance, but strength remains 0. The designated remedy is the v2 formula in Annex 7.A — **pending adoption**. Until adoption on the evidence Chapter 13 requires, v1 is **not silently patched**: no implementation may substitute the v2 formula, clamp zero to a small positive value, or repair the defect locally while claiming testimony-v1.

### Annex 7.A — testimony-v2-experimental (not normative)

*Everything in this annex is experimental. It states the candidate successor formulas so they can be researched, implemented behind a version flag, and regression-tested. It confers no authority to change any live World.*

In the v2-experimental line, strength updates use an adjustment coefficient `a`:

- **BOOST:** s′ = s + a(1 − s) — a meaningful increase even when strength is zero, which is the designated remedy for the known defect above.
- **REDUCE:** s′ = s(1 − a) — a reduction in prominence without declaring permanent rejection.

REJECT in v2-experimental preserves refutation authority (status′ = REFUTED, with the same ineligibility and explicit-restoration requirement as v1), and KEEP_WATCHING preserves watching without endorsement.

Two further differences define the experimental line. First, **testimony in v2 is derived from a ledger fold rather than stored increments**: testimony is computed from qualifying ledger events, not incremented by application code. The formulas above therefore govern strength only; testimony updates must be separately defined and versioned. Second, this line's attention-baseline decay model is treated in Chapter 13, not Chapter 8.

**The coefficient `a` is an OPEN PARAMETER.** Its initial value was lost in source transit and **must not be invented** — not in this Bible, in code defaults, or in test fixtures presented as normative. Any experimental value is labelled as such, with provenance recorded. Adoption as a normative version requires user research and regression testing; until both are complete and adoption is recorded as a version decision, testimony-v1 remains the only normative arithmetic.


## Chapter 8 — Tidal mathematics

Strength ebbs by half-life, at a rate set by provenance — by how the node got there. The normative equation is:

**s(t) = s₀ · 2^(−Δt / H)**

where s₀ is strength at the last materialisation, Δt is elapsed time since that materialisation, and H is the half-life for the node's provenance class:

| Provenance | Half-life H |
|---|---|
| DECLARED | 180 days |
| CONFIRMED | 90 days |
| PROPOSED | 21 days |
| WITNESSED | 14 days |

The ordering is the philosophy expressed numerically: a declared interest has half a year before it halves; an unanswered suggestion, three weeks — it should embarrass itself off the map; a witnessed signal, the weakest warrant, two weeks.

**Buoys.** For a buoyed node, visible strength is floored: **s_visible(t) = max(0.15, s(t))**. The decayed value is still computed; the floor governs visibility only. Check: a PROPOSED node at 0.6, buoyed, after 90 days has decayed strength 0.6 · 2^(−90/21) ≈ 0.031, and visible strength max(0.15, 0.031) = 0.150.

**Submersion.** For an unbuoyed node, strength below **0.03** means the node is *submerged*: hidden from the Map, retained in the ledger, able to resurface if re-witnessed. Submersion is neither deletion nor refutation. Event history must be retained in enough detail to distinguish a human-confirmed node gone quiet from an unconfirmed proposal that has submerged — identical on a map, opposite in meaning.

**What never decays.** Testimony never decays. The Map is a picture of a living present; the Ledger preserves the whole history for the owner alone. An interest can submerge completely while its testimony stands intact, so resurfacing restores presence, not identity.

**REFUTED has no half-life.** None is defined in v1, and none is to be supplied. Refutation is an **exclusion state, not a decaying interest**: no decay, no expiry, and a refuted topic never becomes a proposal again through time. It returns, if at all, only through explicit restoration (Chapter 27).

### 8.1 The canonical decay policy: tidal-v1

Deterministic replay requires identical decay from identical inputs. The canonical policy (Continuation 07 §55):

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

Three rules bind this policy. First, **decay is evaluated at a supplied authoritative evaluation time**, never at an uncontrolled clock call inside the pure reducer. Second, the **canonical order is materialize-decay-then-reduce**: materialise strength to the correction time under tidal-v1, then apply the v1 reducer. Reversing the order produces a different World from the same ledger and is a conformance failure. Third, a caveat that must not be edited out: **rounding JavaScript floating-point results to six decimal places is not a complete cross-runtime determinism guarantee.** A reproducible implementation must also define a canonical rounding method, persist exact transition inputs, and use a validated numeric library or fixed-point representation where cross-runtime identity is required.

## Chapter 9 — First Light and the Refutation Bootstrap

First Light is the cold start: the moment a World is born. The conventional cold start — pick five interests, see a provisional map, answer "Does this look like you?" — asks the owner to do the hardest work, self-description from a blank page, and gives the algorithm the least to work with. The Refutation Bootstrap inverts the labour.

**Step 1 — Seed minimally.** The minimum start is **three starting interests, or one link** (a one-link start is labelled *low-coverage*, honestly, in the interface). **Five interests are the optional richer start**, carried from Edition 1.1's First Light: more seed, denser first draft. Neither start is the "correct" one: the three-interest bootstrap and the five-interest start are **both pilot test arms**, and the pilot compares them rather than presuming a winner (Chapter 37). Less is fine; the draft does the work. The first World must not depend on external account connections or imported browsing history: a seed is something the owner deliberately gives, in this session, for this purpose.

**Step 2 — Draft deliberately, and disclose it.** The engine expands the seeds through the Atlas (Chapter 10), choosing proposals **not for likelihood but for reaction value**: topics near the seeds about which this owner is likely to have a *definite* feeling, one way or the other. The draft is **deliberately arguable** and its nature is **disclosed**, in plain language:

> "This is a first draft of your world. It is supposed to be argued with. Wrong is useful."

That disclosure is not a courtesy; it is a load-bearing ethical requirement. A deliberately imperfect draft presented as a confident profile would be a trick; disclosed as a draft, it is an invitation.

The Draft Selector operates under a hard fence (Continuation 04 §27, normative here): its correction-information feature may **estimate whether asking about a candidate would clarify the World — and must NEVER be used to predict or provoke an emotional reaction**. Informative disagreement is the goal; deliberately irritating the owner is not. Eligibility and privacy restrictions always execute *before* ranking: no score can admit an ineligible candidate. As a **hypothesis** for cold-start composition — to be tested against shorter and longer drafts, not a mandatory production setting — §27 proposes eight proposals distributed **4 close connections / 2 cross-territory bridges / 2 novelty-oriented candidates**.

**Step 3 — Harvest the argument.** First Light is a rapid correction pass using the four operators of Chapter 7, plus at most one adjacency question ("Does X live near Y in your world?"), **designed to take under four minutes**. Every tap is testimony. By the end the World is mostly authored, and the dotted remainder is honestly dotted. Its quality gate is Draft Survival — the fraction of the draft surviving First Light — expected to be low: near 100% means the draft was too timid to be useful; near 0%, the Atlas expansion failed. Draft Survival and the other model-quality metrics are specified in Part IV.

**Step 4 — When the draft is entirely wrong.** The Bootstrap assumes the owner will recognize something; it must also survive recognizing nothing. If the owner rejects the draft wholesale, the recovery path is: **manual topic entry** (the owner names topics directly, in their own words, mapped into the Atlas with their confirmation), **reset** (the draft is discarded without penalty or record of failure), and **re-draft from corrected seeds** (a new draft built from what the owner has now actually said). Refusal is never penalised — no standing, feature, or quality of service may depend on accepting proposals — and the product's language must never frame total rejection as the person being hard to understand. The audit's suggested register is the standard: *"None of those suggestions fit. Your corrections are useful. You can add a topic directly, or we can try another draft based on what you've told us."* An empty World after a fully rejected draft is a valid World state, not an error.

**Bootstrap fences.** First, **proposals never probe adjacent to a REFUTED coastline**: refusals fence the Bootstrap permanently. Second, **sensitive-category exclusions bind the Bootstrap**: the Atlas's hard exclusions (Chapter 10) apply to candidate generation as everywhere else — the system may guess wrong about hobbies; it may never guess at all about excluded ground. Third, the draft may be arguable but never fabricated about sensitive ground.



## Chapter 10 — The Atlas v2.0

Nothing in Chapters 5–9 works without a shared geography. Machine-inferred topics would inherit provider biases and could not be governed; free-text topics would leave no two Worlds comparable. SEE MY WORLD therefore runs on a **curated, versioned Atlas**: a public hierarchy maintained editorially, like a map's legend.

### 10.1 Two structures, two questions

Atlas v2.0 (Continuation 02, §§10–12) preserves the hierarchy and adds a second, separate structure:

- **The hierarchy — Continent → Territory → Topic** — answers *where a topic belongs*. One stable location per topic makes the Atlas versionable, two Worlds comparable, and Lens generalisation (§5.3) a deterministic tree walk.
- **The relationship graph** — answers *how topics connect*. A topic may hold several relationships while belonging to exactly one place. The structures must remain distinct, or versioning and comparison break.

The five-layer World Intelligence Model of Continuation 02 §10 sits above both structures: Evidence, Inference, Testimony, World State, and Perspective. The layers are never interchangeable: observation is not endorsement, inference is not identity, sharing is not consent to further processing.

### 10.2 The starter taxonomy

The following eight-continent taxonomy is the Atlas v2.0 starter set — a proposed starting classification, not a finalised one. Changes to it follow the versioning and migration rules of §10.3.

| Continent | Example territories |
|---|---|
| Making & Repair | Restoration, woodworking, fabrication, mechanical repair |
| Science & Discovery | Astronomy, physics, ecology, mathematics |
| Stories & Expression | Literature, comedy, theatre, visual storytelling |
| History & Heritage | Archaeology, preservation, cultural history |
| Nature & Exploration | Wildlife, hiking, geology, gardening |
| Technology & Systems | Programming, robotics, engineering, game design |
| Everyday Arts | Cooking, music, photography, collecting |
| Games & Strategy | Chess, tabletop games, puzzles, competitive strategy |

The Atlas must also distinguish a topic from a claim about its owner: an interest in psychology must never become an inferred mental-health condition.

### 10.3 Atlas node metadata and versioning

Every Atlas node carries: a **stable id**, a **version**, a **parent**, **permitted aliases**, a **description**, **exclusions**, and a **migration policy**. Changes are versioned and announced; a World pinned to a given Atlas version renders identically under it — the precondition for Perspective immutability. Semantic changes follow Part III's migration discipline: never auto-confirm a split's children, never silently expand disclosed interests, never alter an existing Perspective grant.

Owners may attach **private names** to Atlas nodes — "what I call this" — governed separately, never required for the map to work, and removed by the Lens Compiler before any Perspective is generated (Part III).

### 10.4 The relationship graph

Relationships between topics are typed, and the type is part of the claim being made. The categories, from Continuation 04 §28, are:

| Relationship | Meaning |
|---|---|
| RELATED_TO | General conceptual relationship |
| TECHNIQUE_SHARED | Uses similar methods |
| HISTORICAL_LINK | Has a documented historical connection |
| CREATIVE_BRIDGE | Potential connection for creative exploration |
| OWNER_ASSOCIATED | Explicitly connected by the World owner |
| DISCOVERY_PATH | Proposed route between topics |

A relationship can be proposed by the Engine, confirmed by the owner, or rejected; the owner's decision governs whether it enters their personal Constellation, so the same two topics may mean different things in different Worlds. One rule is absolute: **an AI-generated creative bridge must never be presented as a verified historical connection.** A CREATIVE_BRIDGE proposes exploration; a HISTORICAL_LINK asserts a documented connection and requires the documentation. Only surveyed edges carry weight in Frontier computation (Part III); dotted edges are excluded until surveyed.

### 10.5 Exclusions by construction, and the limits of providers

The Atlas has **hard exclusions by construction — of attribute branches**. What is excluded is any category that constitutes a claim about the owner's identity: political affiliation, religious identity, health status *as attributes of the person*, or any other pilot non-goal category of that kind. The system cannot infer what its geography cannot represent — converting a policy promise ("we do not infer politics") into an architectural fact ("there is no attribute node for that"). The refinement matters and is normative: **a topic *about* a domain is not an attribute.** General educational topics — the history of a religion, the politics of a period, the science of a condition — are permissible Atlas topics like any other; what is prohibited is *inferring an attribute from a topic* (Appendix B, invariant 19). An owner exploring the history of a religion has expressed an interest in a subject, not a religious identity, and no component may record, suggest, or disclose the latter from the former. Owners may also create **private free-text topics** in their own words; these are owner-only, are never auto-promoted to the shared Atlas, and enter shared geography only through the editorial governance of Chapter 41. These exclusions bind every Atlas consumer, including the Bootstrap (Chapter 9) and Draft Selector eligibility.

Finally, the provider boundary: external providers **may only propose mappings into the Atlas and dotted edges within it; they may never create geography** — no continent, territory, topic, or relationship category. Provider failure degrades suggestion quality, never world structure; and because proposals are ledger entries, a Receipt can always say which provider proposed what. Editorial authority remains with the Atlas's human curators, under Part V's governance.
# Part III — Experience

Part III specifies how the systems of Parts I and II are encountered by a person: Part I's objects and invariants, and Part II's model — testimony, tidal decay, the Atlas, the Resolution Lens. Nothing here may weaken those definitions. Where an experience depends on the experimental line rather than testimony-v1, that dependency is stated in place.

## Chapter 11 — Experience and Design Language

### 11.1 Two vocabularies, one product

SEE MY WORLD speaks to its users in consumer terms and reserves technical terms for advanced explanation. This division, from Edition 1.1 §06, is normative for all product surfaces: onboarding, the World Map, sharing flows, receipts, help text, and error messages.

The consumer vocabulary is:

| Consumer term | What the person is doing |
|---|---|
| My World | Viewing and tending their own World |
| Share a View | Creating a Lens and publishing a Perspective |
| Why This Appears | Asking why a proposal, discovery, or comparison result appears |
| Correct This | Applying a correction — BOOST, REDUCE, REJECT, or KEEP_WATCHING |
| See Yours | Beginning one's own provisional World, typically from Seeds saved during a visit |
| Where We Meet | Viewing the shared ground in a Comparison |
| Different Paths | Viewing testified difference in a Comparison |
| New Frontier | Viewing the computed frontier in a Comparison |

The technical vocabulary — Worldprint, provenance, testimony weight, vector normalisation, Algorithm Recipe, the internal engine names — is reserved for advanced explanation: developer documentation, detailed receipts on request, and this Bible.

### 11.2 Legibility and accessibility

Territories must remain legible on small screens; where space forces a choice, the label is preserved and the decoration reduced, never the reverse. Accessibility is a release requirement, not an enhancement (Chapter 34):

- **Accessible list alternative.** Every World Map has a non-visual equivalent: a structured list of territories, topics, relationships, and proposals carrying the same information and supporting the same actions — an alternative rendering of the same state, not a reduced summary.
- **Keyboard navigation.** Every pointer action — opening a territory, inspecting a relationship, applying a correction, confirming or rejecting a proposed pathway — is available by keyboard, in a predictable order, with visible focus.
- **Reduced motion.** On request, tidal and seasonal animation is replaced by static indication. No information may be carried by motion alone; motion is emphasis, never the sole signal.

### 11.3 The returning owner

A returning owner — someone who opens the product after weeks or months away — is met by their existing World, exactly as they left it, before anything else. The home rule is normative: **the existing World opens first.** Changes since the last visit, dormant interests, and new suggestions may be offered, but they are optional and dismissible; no reconfirmation, review queue, or correction session may ever stand as a gate between an owner and access to their own World. The product asks; it never interrogates an owner as the price of readmission. (Returning Tides, the continuity mechanism that may *offer* a dormant interest for revisiting, is specified in Chapter 16 and operates under this rule.)

### 11.4 What the map must not claim

Map distance must not imply psychological measurement. A World's geography is a functional arrangement of topics and owner-approved relationships (Chapter 12); spacing is a layout decision. No comparison may convert geography into a score (Chapter 18).

### 11.5 Illustration: Maya's World

Maya, a night-shift nurse, begins with three seeds: mechanical watches, night photography, and her grandmother's recipes. The draft expands them through the Atlas, choosing proposals for reaction value rather than safety — watch repair, watch collecting and flipping, astronomy, urban exploration, film photography, oral-history recording, regional Italian cooking, shift-work sleep science. In a few minutes she BOOSTs repair, REJECTs flipping outright — "I fix them so they keep living, I don't sell them" — confirms film photography, REJECTs urban exploration, sets sleep science to KEEP_WATCHING, and answers the single adjacency question: yes, her grandmother's recipes live near oral history. Her World after First Light: seven established nodes, two stretches of authored coastline, one buoyed topic, one surveyed road.

She uses Share a View to publish a Perspective for a new colleague: Coast resolution, watches and photography only, seven-day expiry. The colleague saves two Seeds — watch repair and film photography — and her own provisional World opens from them under See Yours: *"Visiting Maya made this of you. Argue with it."* She corrects it. Only then does Comparison unlock, at Coast resolution: Where We Meet — film photography; Different Paths — nothing yet, neither woman having refuted anything the other confirmed; New Frontier — darkroom printing, one surveyed step from Maya's film photography, entered by neither. Its explanation is short, and every element is testimony; the system inferred nothing about either woman's politics, faith, or health — its geography contains no such places (Chapter 7).

## Chapter 12 — The Cartographic Engine

### 12.1 The map is an interface, not an illustration

The Cartographic Engine renders the approved state of a World as navigable geography: an archipelago of curiosity, with territories, connections, and undiscovered frontiers. Its governing rule, from Continuation 03 §16, is that the World Map must not be a decorative representation of the underlying algorithm. It is a functional interface: every visual element corresponds to an understandable state, action, or relationship, and is operable — to see a thing on the map is to be able to inspect, correct, or act on it, subject to the viewer's permissions.

### 12.2 The geography table

Each element's meaning is fixed by this table: renderings may vary in style, never in meaning.

| Map element | Product meaning | Interaction |
|---|---|---|
| Island | Confirmed topic cluster | Open territory |
| Lighthouse | Enduring declared interest | Inspect history |
| Glowing pathway | Approved relationship | Explore connection |
| Dotted pathway | Proposed relationship | Confirm or reject |
| Fog | Unexplored territory | Request discovery |
| Harbour | Saved Seed | Revisit discovery |
| Seasonal lighting | Current attention | Inspect change |
| Compass | Exploration preference | Choose discovery mode |

Two distinctions carry particular weight. Dotted and glowing pathways differ in exactly one respect — whether the owner has approved the relationship — and the rendering must make that unmistakable: it is the difference between the machine's guess and the person's testimony (Chapter 6). Fog is neither emptiness nor defect: its proper interaction is a request for discovery, leading to an Expedition (Chapter 15), not an automatic filling-in.

### 12.3 Prominence is not importance

Visual prominence must not automatically imply psychological importance: **island size encodes topic count, not importance.** No rendering may scale an island by strength, testimony weight, or inferred significance. Endurance is shown by the lighthouse; current presence by seasonal lighting (Chapter 13).

### 12.4 Three views, one World

The Cartographic Engine provides three views:

- **World View** — the entire approved interest landscape, grouped by continent and territory.
- **Territory View** — individual interests, approved relationships, saved Seeds, and discovery opportunities within one territory.
- **Constellation View** — a relationship-focused view showing how interests connect across otherwise separate territories (Chapter 14).

All three views are powered by the **same underlying World state**. No view may run a separate algorithm or invent a different understanding of the person because the visualisation changed. Switching views changes what is emphasised, never what is true: a topic confirmed in Territory View is confirmed in World View; a merely proposed relationship remains dotted in Constellation View; a refuted topic appears in no view as land. Divergence between views is a rendering defect, never a discovery about the owner. For a visitor, each view is bounded by the Lens at its granted resolution (Chapter 9).

## Chapter 13 — World Seasons

> **Status: experimental extension.** World Seasons, as a three-property model of interest, belongs to the experimental line described in §13.2. It is not part of testimony-v1, and no v1 implementation may present it as though it were.

### 13.1 Three properties that must not be conflated

Half-life decay is mathematically useful, but it confuses temporary inactivity with diminished interest. World Seasons therefore proposes separating three properties that a single decaying number cannot distinguish:

- **Enduring affinity** — how strongly the owner says the interest matters, as a lasting declaration. It is owner-declared, and it **never silently decays**; it changes only when the owner changes it.
- **Current attention** — how actively the interest is presently being explored. This is the property that may ebb and return with the seasons of a life.
- **Exploration appetite** — whether the owner wants to discover more about the interest. It is **owner-set only; no system action may raise it**, however strong the apparent signal.

The distinction exists because the conflation is false to experience. Someone may love astronomy for twenty years, then spend six months absorbed in woodworking. Astronomy has not disappeared or diminished; it is not receiving attention. One number must call that decline; three properties need not.

### 13.2 The state of the normative model

In **testimony-v1 there is no separate attention field**. As Chapter 6 specifies, strength *is* current presence: the single strength value, decaying by provenance half-life and floored for buoyed topics, is the whole of what v1 says about current presence. Enduring affinity and exploration appetite do not exist in v1 as independent stored properties; any v1 surface appearing to display them is displaying strength and the buoy under other names.

The attention-baseline formula belongs to the **v2-experimental line only**:

```
T(t + Δt) = b + (T − b) · e^(−λΔt)
```

Under this formula, attention decays toward a baseline `b` rather than toward zero, so an enduring interest remains faintly present instead of submerging. Binding constraint: **wherever a baseline `b` is used, it must be owner-set, or derived from enduring affinity by a stated formula — never learned from behaviour.** A baseline inferred from observed activity would smuggle behavioural inference back into the one place the model promises the owner's declaration governs, invisibly, inside a decay curve.

## Chapter 14 — Constellations and the Meaning Layer

### 14.1 From judgement to meaning

The four correction operators capture judgements: this belongs, this matters less, this does not belong, keep watching this. They do not capture *why*. The meaning layer (expansion §2) adds one optional second layer, and its restraint is its design. After a meaningful correction, the Engine may ask a single optional question:

> *What draws you to this?*

Never repeated as a nag, never required to complete the correction; the correction stands whether or not the owner answers. The answer remains private by default.

The question exists because topic overlap and meaningful overlap are different things. Two people may both confirm an interest in restoring antique objects: one loves preserving history; the other loves the technical challenge of making damaged things beautiful again. Their topics overlap; the meaning differs — and only a system holding owner-authored reasons can, with permission, propose connections that respect the difference.

### 14.2 What a Constellation is

A **Constellation** is a group of interests connected by a reason the owner has personally confirmed.

The division of labour is absolute: **the machine proposes meaning; the human authors it.** The Engine may propose that several interests share a theme; it may not declare that they *mean* that theme. The Constellation exists only when the owner confirms the reason as their own; until then the grouping is a dotted pathway in Constellation View (Chapter 12), as provisional as any other unconfirmed proposal.

### 14.3 Containment rules (normative)

Free-text "why" answers are the most sensitive material a World can hold: the owner's account of their motives, in their own words. These rules are normative and bind every subsystem, including discovery and comparison:

1. **Free-text "why" answers never leave the owner's World.** They are not transmitted to visitors, not included in any Perspective at any resolution, and not exposed through explanations, telemetry, or caches.
2. **They never shape any other user's draft, suggestions, or comparisons.** A reason given by one owner must not influence what the Engine proposes to anyone else, directly or through aggregate models trained or tuned on such text.
3. **Constellations publish only owner-authored labels.** What may be published is the label the owner authored. The underlying free text is never published as part of that act; only if the owner explicitly publishes that text itself, as a separate, specific decision.

## Chapter 15 — The Expedition Engine

### 15.1 Finite journeys instead of a feed

The Expedition Engine is the product's principal everyday experience of discovery. Instead of opening the application to an endless feed, a person opens their World and chooses somewhere to explore. The Engine generates a finite **Expedition**: two to five stops, connected by an explainable theme, with a clear beginning and ending.

The prohibitions are part of the definition. **No endless scroll. No artificial urgency. No punishment for leaving halfway through.** An abandoned Expedition simply remains abandoned; nothing is lost, and no streak, badge, or reminder may compel its completion.

### 15.2 Worked example: The Art of Preserving Time

1. **The familiar harbour — Stone restoration.** Begin with a confirmed interest: restoring natural stone, preserving original materials.
2. **The unexpected bridge — Archaeological conservation.** Explore how conservators distinguish restoration from preserving the evidence of age.
3. **The new frontier — Digital preservation.** Discover how photogrammetry and 3D scanning document objects and historic environments before physical deterioration.

The suggested connection is stated, not implied: preserving objects and preserving information about them use different techniques but share questions about authenticity, loss, and what should survive.

### 15.3 The explainability gate

Route generation follows Continuation 04 §29: select a permitted, confirmed starting topic; find candidate relationships within the authorised graph; exclude rejected topics, restricted categories, and unavailable resources; rank next stops for relevance, novelty, and explanatory coherence; select a finite path without repeats; explain each transition; validate resources and source status; present the Expedition without automatically changing the owner's confirmed World.

One constraint is a gate, not a preference: **an Expedition that cannot explain why one stop leads to the next is rejected during generation.** Novelty alone is insufficient. Stone restoration, Roman architecture, and digital archaeology form a plausible progression; stone restoration, tropical fish, and cryptocurrency would need an unusually convincing explanation — and if none can be produced, the Expedition is not presented at all. Chapter 35 tests explainability as a generation-time validity condition.

### 15.4 Source honesty

The Engine never manufactures source material and never pretends that a suggested resource has been verified. Every stop carries one of two source statuses:

- **VERIFIED_RESOURCE** — the stop rests on a real, validated resource, with a validation record: the **source**, the **validator**, and the **date** of validation. A stop without a complete record may not carry this status.
- **GENERATED_PROMPT** — the stop is an explicitly labelled generated learning prompt, presented as a prompt, not a resource; the label travels with the stop wherever it is shown or shared.

### 15.5 Outcomes

After each discovery, the owner may:

- **Save as Seed** — saved privately as a Harbour (Chapter 12). Saving is a bookmark, not an endorsement: **saving never auto-confirms an interest.** A Seed enters the confirmed World only through the owner's later testimony (Chapter 6).
- **Explore related** — continue toward connected subjects, within this Expedition or a new one.
- **Not interested** — decline the discovery; a decline amounting to rejection enters the REJECT fence of Chapter 6.
- **Share** — share the discovery, under the same source-status honesty: a shared GENERATED_PROMPT is shared as a prompt.

### 15.6 Content operations

Validated-resource supply is an **operational cost centre, not an algorithmic feature**: real resources must be found, validated, recorded, and re-validated by an operation the business must staff and fund. That cost is measured, not assumed: **cost per validated discovery is a tracked commercial metric** (Chapter 38). If it cannot be borne at the required quality, the honest response is more GENERATED_PROMPT stops, clearly labelled — never a quiet relaxation of what "verified" means.

## Chapter 16 — Continuity: Timeline and Returning Tides

### 16.1 A memory the owner controls

The Continuity Engine gives a World a memory of its own development, while respecting the owner's right to change or delete that history: a World that cannot forget becomes the dossier this product exists to refuse (Chapter 5). Continuity takes four owner-controlled forms:

| Feature | Purpose |
|---|---|
| World Timeline | See meaningful changes in confirmed interests |
| Returning Tides | Revisit dormant interests without assuming they disappeared |
| Discovery Journal | Save personal reflections on Expeditions |
| World Milestones | Mark owner-chosen moments of significance |

### 16.2 The World Timeline

The Timeline records changes in declared and confirmed interests without treating them as permanent identity claims — a history of testimony, not of behaviour. At First Light the owner confirms photography, astronomy, and writing; three months later photography grows more active and is connected to architectural history; six months later astronomy grows quieter while remaining a declared lifelong interest; a year later the owner sees what grew, changed, or was set aside.

Three properties are normative. The Timeline is **private by default** — part of the owner's World, not of any Perspective, unless the owner separately chooses otherwise. It is **editable through explicit correction** (Chapter 6). And it is **subject to meaningful deletion**: erasure must reach derived representations under Chapters 21 and 33, not merely hide entries, lest it become a permanent archive of things someone no longer wishes to retain.

### 16.3 Returning Tides

Returning Tides recognises that an interest can go quiet without ending. Someone spent years fascinated by astronomy, then stopped; two years later they begin reading about telescopes again. The Continuity Engine can recognise that it was previously important, and ask:

> *Astronomy seems to be returning to your World. Would you like to revisit your earlier discoveries?*

That recognition is permitted only under two cumulative conditions:

1. **The owner retained that history.** The earlier importance must be present in history the owner kept — the Timeline and testimony record as preserved. If the owner deleted it, there is nothing legitimate to recognise.
2. **The owner has authorised its use.** Recognition requires a standing, revocable owner setting authorising the use of retained history for this purpose. Withdrawal stops future recognition; recognition is never a default the owner must discover and disable after the fact.

### 16.4 The prohibition on resurrection

The system must **never resurrect deleted or rejected interests from analytics, backups, or cached embeddings**. A deletion honoured in the primary store but preserved in an analytics aggregate, an over-retained backup, or a cached embedding available to a suggestion pipeline is not honoured at all (Chapters 7 and 33). What the owner removed does not come back wearing the costume of a rediscovery.

### 16.5 The REJECT fence binds Continuity

The REJECT fence of Chapter 6 — a refuted topic is excluded, and rejection applies to that topic alone, never automatically to its relatives — **binds Continuity exactly as it binds discovery**. Returning Tides may never reintroduce a rejected interest because it was once important, because related interests revived, or because time has passed; a refuted topic returns only through the explicit restoration path of Chapter 7, initiated by the owner. The fence's narrowness also binds in reverse: rejecting one topic does not licence Continuity to suppress the Timeline record of its un-rejected neighbours. Continuity, so bounded, lets a World have a past without being trapped by it.
# Part IV — Sharing and Encounter

Part IV governs everything that crosses the boundary of a World. What another person receives is never the World itself, but a Perspective: a bounded, versioned, revocable projection compiled from it under an explicit Lens. This part defines the permission semantics of that projection (Chapter 17), the compiler that produces it (Chapter 18), the journey of the person who receives it (Chapter 19), the mathematics of comparing two Worlds (Chapter 20), the consent protocol under which two people meet (Chapter 21), and the API contract for invitations, corrections, and this edition's proposed extensions (Chapter 22). Nothing here weakens the earlier invariants: private by default, owner correction authoritative over inference, and disclosure only through an authorised Lens.

## Chapter 17 — Lens, Perspective and permission semantics

### 17.1 Private by default

A World, and all evidence held within it, is private by default. Nothing in it is published, shared, indexed for discovery, or made available to any other person by virtue of existing. Publication requires an explicit owner action: the deliberate creation and publication of a Lens. Silence is not consent, inactivity is not consent, and a prior publication is not consent to a later one. Each Perspective stands on its own grant.

Observation is not endorsement, inference is not identity, and sharing is not consent to further processing. Opening a Perspective does not authorise processing of the visitor beyond what the visit requires; sharing one Perspective does not authorise processing of the underlying World beyond compiling that Perspective.

### 17.2 The Lens

A Lens is the owner's explicit selection of what may be seen, by whom, at what detail, and for how long. Formally:

```
Lens = (territory set, resolution, audience, expiry)
```

The territory set names what is included; everything not named is excluded. The audience names who may open the resulting Perspective — a named recipient under an Invitation, or holders of a public link where the owner chose that policy. The expiry bounds the grant in time; the resolution, defined in §17.3, bounds it in detail.

Lens creation must support preview, scope, expiration, and revocation. Preview is normative, not cosmetic: before publication the owner must be shown the exact visible result a visitor will receive, rendered from the compiled payload itself. What the owner approves in preview is the most any visitor can receive.

Publication produces a Perspective: a versioned projection tied to the Atlas version and World revision from which it was compiled. Later changes to the World do not silently alter it; republication is a new owner action producing a new version.

**Pilot rule — testified material only.** In the pilot, a Perspective contains only material the owner has testified to. PROPOSED and WITNESSED nodes are never compiled into any Perspective, at any resolution, under any Lens (Appendix B, invariant 20). Provisional material is part of the owner's private working surface; it is not shareable content, and no visitor surface may render it — including as an anonymised or generalised trace, since a generalised label tracing to a single provisional node would disclose it (Chapter 18).

### 17.3 The Law of Resolution

Sharing never grants access; it grants resolution. This is the Law of Resolution. A Lens does not open a door into private contents — it sets the zoom at which a visitor is permitted to see:

- **Continent** — broad regions only: Atlas parent labels, and nothing finer.
- **Coast** — territories: territory labels within the selected continents.
- **Harbour** — specific topics, together with such evidence labels as the owner chose to include.

Resolution is granted by the owner, stated in the Lens, rendered exactly in preview, and revocable with the grant. Generalisation happens in the model, at compile time (Chapter 18) — not in the presentation layer. A visitor can never see finer detail than the resolution permits, because finer detail is never placed in the payload.

### 17.4 Revocation and expiry

Every grant is revocable by its owner at any time, and every grant expires. Revocation and expiry are server-side facts, enforced at the moment of each attempted action — not presentation states enforced by hiding an interface element.

Where immediate revocation is promised, revocation must block new opens and must block visitor actions previously issued under the grant — including actions in progress in active sessions, such as saving further Seeds or proceeding with a dependent comparison. An expired grant fails closed in the same way. No stale cache, retained session, or previously loaded page may extend a grant beyond its revocation or expiry (Chapters 21 and 22).

Revocation cannot erase what a visitor already saw, copied, or saved outside the system while the grant was valid. The product must state that limitation plainly.

### 17.5 No leakage through secondary channels

No private evidence may leak through explanations, telemetry, comparison, or cache. Visitor explanations and Receipts may cite only material in the compiled Perspective, at its resolution (Chapter 18); telemetry must not carry private identifiers, names, or evidence from an unpublished World; comparison outputs are disclosures under the same rule (Chapter 20); caches hold only compiled, authorised payloads, keyed to grant and version, invalidated on revocation and expiry.

### 17.6 Sensitive territories and refusal

Sensitive territories require explicit authorisation: a territory designated sensitive — by the owner, or by Atlas policy — is excluded from every Lens unless the owner authorises that territory specifically, for that Lens. A general act of sharing does not supply that authorisation. Refusals carry no penalty: an owner or visitor who declines to share, declines an Invitation, or revokes a grant loses nothing — no standing, no access to their own World, no unrelated feature. Consent that is costly to withhold is not consent.


## Chapter 18 — The Resolution Lens Compiler

### 18.1 A privacy compiler, not a filter

The Resolution Lens Compiler is a deterministic, server-side privacy compiler that converts a private World into a bounded Perspective. It is a privacy boundary, not a visual filter: the visitor's client receives only the approved, generalised payload, and filtering what a client displays is never a substitute for withholding what it must not have. Comparisons, explanations, caches, and saved Seeds are subject to the same boundary (Chapters 19–20). Given the same World revision, Atlas version, and Lens, it produces the same payload.

### 18.2 The compilation sequence

The Compiler must enforce the following sequence, in order. No step may be skipped, weakened, or delegated to the client.

1. **Authenticate the owner and validate Lens ownership.** The principal is established by the server's session context; only the World's owner may compile and publish a Lens from it.
2. **Resolve the Atlas version.** Compilation uses the Atlas version recorded for the Perspective, so its labels retain the meaning approved in preview.
3. **Exclude unconfirmed and unauthorised nodes.** Material the owner has not confirmed or declared is ineligible, as is any node the Lens does not authorise. Refuted material is excluded unless the owner separately authorised publication of a coastline, and then only as boundary shape at the granted resolution.
4. **Apply territory selections and sensitivity restrictions.** Only territories named in the Lens are carried forward; sensitive territories only under Chapter 17's specific authorisation.
5. **Generalise to the granted resolution.** Each surviving node is generalised by walking the Atlas hierarchy — topic to territory at Coast, territory to continent at Continent.
6. **Remove private evidence, aliases, and hidden relationship details.** What remains is the generalised label set and, at Harbour, the owner-chosen evidence labels.
7. **Generate resolution-safe explanations.** Visitor Receipts and "Why is this here?" explanations are generated from the compiled projection, after generalisation and removal — never from the private World and then redacted.
8. **Publish a versioned Perspective with a revocable grant**, bound to its audience and expiry, revocable under Chapter 17.

### 18.3 The resolution invariant

The Compiler's governing invariant is:

```
Detail(Output) ≤ Resolution(Grant)
```

The invariant is structural. Because generalisation happens during compilation, the payload never contains finer data; nothing finer can therefore leak through a tooltip, explanation, comparison, or cache, because no such channel is ever given finer data to carry. Any implementation in which finer data reaches a visitor-facing component and is merely suppressed in display violates this chapter, whether or not a leak has yet been observed.

### 18.4 Disclosure eligibility

Generalisation alone does not guarantee safety. If a continent appears solely because of one private topic beneath it, the generalised label reveals that something in that continent is present, and in a small or distinctive territory that may reveal the topic in substance. The Compiler therefore applies an explicit disclosure-eligibility rule, which is normative:

> A generalised label is disclosure-eligible only if it does not trace to a single non-public node, unless the owner explicitly approves that disclosure.

Where a label traces to a single non-public node without such approval, the Compiler must generalise it further or omit it. Aggregation alone is not anonymisation: counting, grouping, or relabelling a single private fact does not make it safe to publish. Approval must be specific to that label in that Lens, recorded with the grant, and visible in preview. This rule governs every Compiler output and, by reference, every comparison output (Chapter 20).

### 18.5 Receipts at resolution

Receipts served to a visitor may cite only factors at the granted resolution. A Continent Receipt may cite only Continent-level factors; it must not name, paraphrase, count, or otherwise encode what was generalised away beneath that label. Step 7 exists so this rule holds by construction, not by review of generated text.


## Chapter 19 — Visitor journey and Seed-Born Worlds

### 19.1 The anonymous visitor

A visitor may open a valid Perspective anonymously, without registering or surrendering personal data, where the grant's audience permits it. The visitor receives the compiled Perspective and nothing else — no private contents, evidence, or private names, and nothing about territories the Lens did not select. An invalid, expired, or revoked grant yields no Perspective and no partial view. The visit is a walk along someone else's coastline at the granted resolution: a finite set of discovery objects, with a clear beginning and end, no infinite feed, no artificial urgency, and no penalty for leaving partway through.

### 19.2 "Why is this here?"

Each discovery object carries the question "Why is this here?", answered where permitted from the owner's Receipts at the granted resolution (Chapter 18). Where no resolution-safe answer exists, it is answered honestly at the level that does exist — for example, that the owner chose to include this territory — rather than by reaching into private evidence. The visitor never sees where the owner's map is still provisional: dotted coastlines are an owner-facing rendering, and in the pilot no Perspective contains provisional material at all (§17.2). Visitor-visible dotted coastlines are a deferred decision (Appendix C.12), not pilot behaviour.

### 19.3 Views are not endorsements

A view is never an endorsement. Opening a Perspective, dwelling on an object, or saving a Seed records no approval by either party and no affinity in either World. Behavioural signals from a visit may never testify in any World, and a visit must not be represented as agreement, compatibility, or mutual interest.

### 19.4 Seeds

Anything the visitor deliberately saves becomes a Seed (definition: Chapter 3): a visitor-owned reference to a permitted discovery object — an Atlas topic id and/or an external resource reference — plus optional personal notes, saved by an explicit act of intent at the resolution at which it was seen. A Seed never contains copied private World state, and carries no finer detail than the grant allowed the visitor to see. Seeds are never silently imported — not because a topic was viewed, was adjacent to a save, or was promoted by the owner. The only bridge between two people's geographies is a deliberate save. If the Perspective a Seed was saved from is later revoked, the holder retains their own notes and any lawful public-resource bookmark — never a copy of the revoked Perspective (§17.4).

### 19.5 SEE YOURS: Seed-Born Worlds

SEE YOURS is the visitor's reciprocal beginning. The visitor's provisional World is born from their chosen Seeds — from what visiting this person made of them, stated in those terms: here is what visiting this owner made of you; argue with it. The visitor then corrects that draft through their own First Light correction pass, and the World is theirs from the first correction onward. A Seed-Born World is never created by copying the owner's private model: what crossed over was only what the visitor chose, at the resolution the owner granted.

### 19.6 Claiming a visitor session

Visitor session claiming requires a valid capability and an authenticated owner. A visitor carrying Seeds into a World of their own must present the capability issued for that session and authenticate as that World's owner. A session may not be claimed by a different person, without its capability, or on the basis of device, network, or behavioural resemblance. An unclaimed session confers no rights and expires with its grant.

## Chapter 20 — Comparison, mathematically honest

### 20.1 Preconditions

Comparison — Where We Meet, Where You Differ, and New Frontier — is the most disclosure-sensitive computation in the product, because two individually safe Perspectives can combine into an unsafe disclosure. Its rules are normative and cumulative: every output must satisfy Chapter 17, the resolution invariant and disclosure-eligibility rule of Chapter 18, and this chapter.

**Correction before comparison, for both parties.** Comparison is generated only after both parties have completed at least one correction pass on their own Worlds. Nobody is compared on the strength of a draft they have not argued with; a provisional, uncorrected World is ineligible on either side.

**Shared resolution only.** Comparison is computed at the lower of the two granted resolutions. If one party granted Continent and the other Harbour, the comparison is computed and rendered at Continent.

### 20.2 The sets

Let each party's corrected World, projected to the shared resolution under its grant, be described by two sets: **C**, topics confirmed or declared at that resolution, and **R**, topics refuted at that resolution *and explicitly disclosed for this comparison by their owner* — through a Lens or coastline-disclosure grant naming them. A refutation its owner has not disclosed for this comparison is not an input to the computation at all. For parties A and B:

```
Meet   = C_A ∩ C_B
Differ = (C_A ∩ R_B) ∪ (C_B ∩ R_A)
```

**Meet** (Where We Meet) is the set both parties have independently confirmed. Nothing enters it on one party's testimony alone, and no proposed or witnessed material enters it at all.

**Differ** (Where You Differ) is the set of topics one party has confirmed and the other has refuted *and chosen to disclose for this comparison* — testimony on both sides, with opposite outcomes, and disclosure on the refuting side. Refutations are private by default (Chapters 6, 27): an undisclosed refutation makes the topic simply absent from the comparison output — it appears in no set, is counted nowhere, and its absence must be indistinguishable from the absence of a topic never encountered, so that the fact of a rejection can never be inferred from the output's shape. **Absence is never disagreement.** Unvisited territory never renders as difference: a topic one party confirmed and the other simply never encountered belongs to neither set, and must not be presented, counted, or hinted at as a difference. The product can never report that two people differ on a subject when the truth is only that one of them never raised it.

### 20.3 New Frontier — proposed definition

Edition 1.1 named New Frontier without defining it computationally. The following definition is stated formally for the first time in this edition:

> **Edition 1.2 proposed definition, pending ratification (Appendix C):** A topic is *unexplored* for a pair if it has no node in either party's World at the shared resolution and is reachable by exactly one surveyed (owner-confirmed) edge from a node in Meet. **New Frontier** is the set of topics unexplored for that pair.

Three elements are load-bearing: absence from *both* Worlds at the shared resolution (a topic one party already holds is a difference of experience, not a frontier); a *surveyed* connecting edge — confirmed by its owner, never merely proposed; and a distance of exactly one edge from Meet. Every element of a New Frontier suggestion is therefore testimony, and its Receipt can say so in full. Until ratified, no shipped comparison may present a differently computed set under this name.

### 20.4 Disclosure eligibility in comparison

The disclosure-eligibility rule of Chapter 18 governs comparison outputs identically. A shared topic or label tracing to a single non-public node is generalised further or omitted, unless its owner explicitly approved that disclosure for that Encounter — with particular force in Meet, where a highly specific shared topic can reveal what one party never intended to disclose at that specificity, even where each Perspective was individually safe. The comparison engine operates only on the two approved disclosure sets and cites only factors at the shared resolution.

### 20.5 No ranking, no score

Comparisons never rank people and carry no compatibility score. There is no percentage, grade, or ordering of a pair in any comparison output or derived surface, and the size of Meet is not a score. Comparison answers one question only: what could these two people discover together?

### 20.6 Perspective Exchange questions

A Perspective Exchange question is a single question generated from a connection both parties have authorised, offered to open a conversation. It may be generated **only** from material both parties authorised for that Encounter. Material authorised for a different purpose, a different Encounter, or a one-way visit is ineligible, as is any material breaching the disclosure-eligibility rule. If no mutually authorised connection supports a question, none is generated; its absence is not a finding about the pair.


## Chapter 21 — The Encounter Engine and consent protocol

### 21.1 What an Encounter is

An Encounter is the voluntary exploration of an authorised connection between two Worlds: a two-party authorisation system, not a social-matching service. It begins not with a compatibility score or a judgment about a relationship, but with a question: *What could these two people discover together?* Each participant retains independent control of their World throughout, and no Encounter creates any standing right of access that survives it.

### 21.2 Three types of Encounter

- **Common Ground** — two people discover a subject they both independently confirmed, approached perhaps by different paths.
- **Different Paths** — two people explore different approaches to a shared subject.
- **Shared Frontier** — two people intentionally explore something neither has confirmed: the New Frontier of Chapter 20, taken up together by choice.

The three types describe the discovery, not the people; no type is ranked above another.

### 21.3 The Encounter Protocol

An Encounter proceeds by the following steps, each verified before the next begins:

1. Person A creates a bounded Perspective under a Lens of A's choosing (Chapters 17–18).
2. Person B accepts the Invitation (Chapter 22) and may optionally offer a separate Perspective, under a Lens of B's choosing.
3. The server validates both grants and computes only the permitted comparison (Chapter 20).
4. Both participants may review the suggested connections without publishing additional information.
5. Each participant independently chooses whether to start an Expedition or save a Seed; neither choice binds or obliges the other.
6. Either participant may revoke their grant at any time, ending future access to the affected shared material (Chapter 17).

### 21.4 Two independent permissions

A reciprocal Encounter requires two **independent** permissions. Accepting an invitation never authorises inspection of your World: B's acceptance of A's Invitation grants A nothing. Each Perspective is granted by its own owner, under its own Lens, revocable on its own terms; the initiator's Perspective does not grant access to the recipient's World, and vice versa.

If one participant has shared no Perspective, a one-way visit is possible (Chapter 19), but **no** two-World comparison may be generated. Comparison without two grants is prohibited, not merely degraded: there is no partial or one-sided form of it.

### 21.5 The Encounter data contract

The comparison output must contain only information both disclosure policies permit; its topic sets are those of Chapter 20, at the shared resolution.

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

`recipientPerspectiveId` is nullable precisely because of §21.4: an Encounter may exist, and a one-way visit may proceed, with no recipient Perspective — and in that state no `EncounterComparison` may be produced.

### 21.6 The authorisation matrix

| Operation | Owner A | Owner B | Anonymous visitor |
|---|---|---|---|
| Read A's private World | Yes | No | No |
| Open A's valid Perspective | If authorized | If granted | Only if public-link policy permits |
| Read B's private World | No | Yes | No |
| Generate mutual comparison | With both grants | With both grants | No |
| Revoke A's grant | Yes | No | No |
| Save personal Seed | Yes | Yes | Only in an explicitly permitted visitor session |

### 21.7 Verification at the moment of action

Permissions are verified server-side at the moment of each action, never inferred from a previous page load. Every protected action — opening a Perspective, saving a Seed, generating or re-reading a comparison, continuing an Encounter — re-checks the grant, its audience, expiry, and revocation state against current server state, and fails closed if any check fails. This makes Chapter 17's revocation promise real under concurrency, including revocation during an active visit and after a restart.

## Chapter 22 — Invitations and API contract

### 22.1 The correction endpoint

The canonical correction request, carried unchanged from Edition 1.1, is:

```
POST /api/first-light/worlds/:worldId/corrections
```

with body:

```json
{"topicId": "nature", "type": "BOOST"}
```

The allowed types are `BOOST`, `REDUCE`, `REJECT`, and `KEEP_WATCHING`. Corrections are scoped to the authenticated World owner; the principal is supplied by the server's session context, never trusted from the request body. The state each type produces is defined by the testimony model and is not restated here.

### 22.2 Invitations

Invitation creation:

```
POST /api/first-light/invitations
```

with body:

```json
{"perspectiveId": "...", "recipientUserId": "..."}
```

An Invitation is a Perspective-specific recipient grant, separate from any public link: it names one Perspective and one recipient, and confers no rights over any other Perspective or the owner's World.

The recipient responds via `POST /api/first-light/invitations/:id/respond` with body `{"action": "ACCEPT"}` or `{"action": "DECLINE"}`. Acceptance records willingness to visit and, where both parties grant Perspectives, to enter an Encounter (Chapter 21); it does not grant the inviter any access to the recipient's World (§21.4). Decline carries no penalty (§17.6).

### 22.3 Error semantics

The error semantics of Edition 1.1 are normative for every endpoint in this chapter, including §22.4's extensions:

- **403** — unauthorised ownership violations. A 403 must not reveal private topic state.
- **404** — unknown resources, where appropriate, including resources whose existence the requester has no right to learn of.
- **400** — malformed requests, including malformed action values and values outside an endpoint's allowed set.
- **409** — conflicts, including a same-key/different-body idempotency collision: reusing an idempotency key with a different body is rejected with 409. The same key with an identical body is not an error; it returns the original committed result and applies no change twice.

### 22.4 Proposed API extensions

The three operations in this section are **proposed API extensions** in Edition 1.2. They are specified here so that they can be built and tested as a set; none is part of the Edition 1.1 contract, and none replaces the correction endpoint of §22.1.

**RESTORE.** Restoration of a refuted topic is a separate, explicit operation, distinct from every correction type:

```
POST /api/first-light/worlds/:worldId/topics/:topicId/restore
```

Restore requires owner authorisation, explicit confirmation, a current revision check, and an idempotency key, and produces a `TOPIC_RESTORED` event. A refuted topic never returns by any other route — not through related material, new evidence, or time. On restore, **testimony persists as history** — the ledger record of declaration, corrections, and refutation is retained intact — and **status and strength reset to the owner-selected state**: the topic returns to a provisional or owner-selected state, never automatically to a strongly confirmed interest. Refutation applies to the rejected topic only; broader suppression is a separate owner choice.

**REMOVE_BUOY.** Removing a buoy removes the visibility floor that `KEEP_WATCHING` set, without rejecting the topic or erasing its history:

```
POST /api/first-light/worlds/:worldId/topics/:topicId/remove-buoy
```

After removal, ordinary decay applies with no floor; the operation produces a `BUOY_REMOVED` event. The API must keep the owner's three choices distinct: keep exploring (the buoy stands), stop keeping the topic visible (remove the buoy), or reject the topic (§22.1). Entire removal follows the deletion mechanism, not this operation.

**Edge corrections.** Edges carry the same provenance discipline as nodes, and only an owner-confirmed — surveyed — edge may ground computation, including New Frontier (Chapter 20). Edge corrections are **an edge variant of the correction command**: the command addresses a relationship by its edge id, within the authenticated owner's World, under the same authorisation, revision, and idempotency discipline as §22.1. They produce `EDGE_CONFIRMED`, `EDGE_REJECTED`, and `EDGE_RESTORED` events — the last under the same explicit restoration discipline as topic Restore. A rejected edge never returns silently, and rejecting an edge asserts nothing about either endpoint topic.

# Part V — Engineering

Part V states the normative engineering specification proposed for Edition 1.2, consolidating Continuations 02, 04, 05, 06, and 07 with §§07, 09, and 12 of the Product Bible v1.1. Nothing post-dating v1.1 is claimed as implemented. Results known only from a release report are marked **reported**. "Confidence" is not a model field in this Part: the distinction it once marked — between the owner's expressed relationship to a topic and any estimate of classification reliability — is preserved without adopting the term as a stored field.

## Chapter 23 — World Intelligence Model

### 23.1 The five layers

The World Intelligence Model (Continuation 02, §10) formalises the relationship among evidence, inference, testimony, and change over time into five independently governed layers:

1. **Evidence Layer** — what the user deliberately supplies or authorises.
2. **Inference Layer** — what the Engine proposes, with uncertainty.
3. **Testimony Layer** — what the owner confirms, reduces, rejects, or watches.
4. **World State** — the versioned graph of approved and provisional interests.
5. **Perspective Layer** — only what the owner explicitly permits another person to see.

Each layer has its own governance: evidence by supply and authorisation; inference by proposal and eligibility; testimony by owner correction alone; World State by versioned transition; the Perspective Layer by grant, resolution, and revocation (Chapter 21).

### 23.2 Non-interchangeability

The layers must never become interchangeable. This is a mandatory engineering invariant, not a design preference:

> **Observation is not endorsement. Inference is not identity. Sharing is not consent to further processing.**

Three consequences follow. First, evidence does not by itself establish endorsement, identification, or a condition: reading about depression is not evidence that the reader has depression; researching a political position is not endorsement of it. Second, a proposal, however well supported, does not become a fact about the owner until the owner acts on it in the Testimony Layer. Third, sharing — visiting a World, opening or publishing a Perspective — does not authorise further processing beyond that act's scope. No ingestion pipeline may write directly to World State as confirmed; no inference may be rendered in a Perspective as an owner declaration; no visitor interaction may be treated as testimony about visitor or owner.

### 23.3 Direction of flow

Information flows upward only through defined gates: evidence supports a proposal; a proposal is put to the owner; an owner correction creates testimony and changes World State; World State is projected through the Lens Compiler into a Perspective, subject to Chapter 21's invariant, Detail(Output) ≤ Resolution(Grant). There is no reverse flow. The reducer is specified in Chapter 25; the schema in Chapter 24.

## Chapter 24 — World Schema v2.0

### 24.1 Five information categories

World Schema v2.0 (Continuation 05, §36) separates five categories, independent in storage and in every API response:

- **Identity and ownership** — who controls a World.
- **Knowledge and testimony** — what has been proposed, confirmed, or rejected.
- **Discovery** — what the owner has explored and deliberately saved.
- **Disclosure** — what others have permission to see.
- **Audit and continuity** — how the World has changed and why.

Owner-authoritative, provisional, and disclosure state (Continuation 04, §25) map onto these categories and must not be merged. A topic may be present in provisional state and absent from disclosure state; that difference is the product working correctly.

### 24.2 Storage engine status

Continuation 05 recommends PostgreSQL as the production database candidate, **pending repository inventory** (Chapter 28). This is not a statement that the current production system uses PostgreSQL; the v9.8 archive and v36 reports describe distinct lineages (§28.3). Beyond the two tables below, the schema also requires Atlas tables, evidence lineage, Perspectives, visitor grants, invitations, idempotency records, deletion jobs, and audit events.

### 24.3 Storage rules

The following rules are normative:

- Use UUIDs or comparably unpredictable identifiers for user-owned objects.
- Store normalised values as constrained numeric fields.
- Every owner-scoped row must have an enforceable ownership path.
- Private evidence must never be copied into public Perspective rows.
- Published Perspectives store only authorised disclosure projections, and their access remains subject to grant validity and revocation.

### 24.4 Canonical node table

Reproduced faithfully from Continuation 05, §37, this table preserves the original testimony model: `strength` is the tidal presence score; `testimony` is the accumulated human-action weight; `provenance` carries the five original classes, including WITNESSED; `buoy` carries KEEP_WATCHING; `last_witnessed` records the last qualifying human action. `enduring_affinity` and `exploration_appetite` are experimental extensions, nullable because existing Worlds may lack them. `strength` remains authoritative until a versioned migration explicitly replaces its calculation. A REFUTED topic remains private by default, regardless of its numerical testimony.

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

Per Continuation 05, §42 (Chapter 20): strength may ebb; testimony remains authoritative until revoked; enduring affinity is a separate owner declaration. None may silently substitute for another.

### 24.5 The Testimony Ledger

The ledger is the authoritative record of corrections (Continuation 05, §38), reproduced faithfully:

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

The ledger is append-only during normal operation, subject to privacy-governed erasure and retention; deletion is not another ordinary correction (Chapter 26). A database-enforced relationship between World ownership and authorised correction commands is required.

### 24.6 Evidence events — non-testimony record (new section)

The ledger records testimony only; it cannot explain why a proposal exists. Receipts (Chapter 18) must be able to do so. This Edition therefore specifies an **evidence_events** table as a distinct, non-testimony record. An evidence event records, at minimum: World and topic; signal kind (a proposal arrival, a WITNESSED signal, or a provider attribution); source type and time; where a provider is involved, the provider identifier and its fallback status (primary, fallback, or unconfigured — Chapter 31); processing state; and the consent basis for the underlying material.

Three constraints are absolute:

1. Evidence events **never** enter the testimony fold: not summed into `testimony`, not assigned testimony weights, not replayed by the Testimony Reducer (Chapter 25).
2. An evidence event cannot change provenance beyond PROPOSED or WITNESSED. WITNESSED evidence may contribute to proposals, capped as specified in Chapter 20, but must never independently upgrade a topic into a confirmed or shareable state.
3. Evidence events exist so a Receipt can state why a topic was proposed — which signal, from which source, under which provider attribution — without converting that explanation into a claim about the owner.

This supplies the auditable record for PROPOSED/WITNESSED transitions that the ledger, rightly holding only human corrections, previously lacked.

### 24.7 Supporting tables

Production storage must also include (Continuation 05, §38): a **transactionally persisted idempotency table**, keyed by principal, operation, and request key; a **receipt table** holding the exact deterministic rule applied and the permitted explanation; and a **deletion manifest** for all derived representations and publication artefacts, so deletion (Chapter 26) can reach every derived copy — projections, caches, snapshots, analytics extracts — not only primary rows.

## Chapter 25 — The Deterministic Testimony Reducer

### 25.1 Contracts

Every owner correction is an atomic state transition: the reducer accepts a validated correction, applies a versioned rule, and produces a new state plus an explanation receipt (Continuation 04, §26; Continuation 06, §47).

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

where `CorrectionType` is `"BOOST" | "REDUCE" | "REJECT" | "KEEP_WATCHING"`. The authenticated principal is supplied by the server's session context, not trusted from the request body. The pure reducer itself — testimony-v1 arithmetic, the safeguard that a REFUTED node throws "Explicit restoration required", and the testimony-v2-experimental alternative — is specified in Chapter 20; this chapter specifies its invocation, guarding, and persistence.

### 25.2 Server processing order

The server must enforce this order (Continuation 04, §26):

1. Authenticate the principal.
2. Authorise ownership.
3. Validate the topic and correction enum.
4. Check the idempotency key within the authenticated operation scope.
5. Verify the expected revision.
6. Apply the deterministic, versioned correction rule.
7. Persist the new state, the receipt, and the idempotency result in **one transaction**.
8. Return the committed result.

### 25.3 Reducer invariants

The following seven invariants (Continuation 04, §26) are testable statements, not intended behaviour:

1. A REJECT cannot be silently reversed by later evidence ingestion.
2. KEEP_WATCHING never confirms an interest.
3. A BOOST cannot increase the governed value above 1.
4. A REDUCE cannot decrease the governed value below 0.
5. Repeating an identical committed request does not apply the correction twice.
6. Unauthorised corrections do not reveal private topic state.
7. The receipt identifies the algorithm version and the rule applied.

Invariant 1 binds ingestion too: evidence events (Chapter 24) may record new signals about a refuted topic, but none may restore it; restoration is governed solely by Chapter 27. Invariant 6 binds error behaviour: a denial must not disclose whether the topic exists in the World.

### 25.4 The eleven-step transaction

Continuation 05, §39, specifies the transaction for the correction endpoint, `POST /api/first-light/worlds/:worldId/corrections`:

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

### 25.5 Concurrency and failure

Concurrency is controlled by a unique idempotency constraint, enforced by the database and not only by an application-level check, together with revision-based compare-and-swap. If two distinct requests both expect the same revision, only one commits; the other receives a conflict and may be retried deliberately against the updated World. Identical retries under the same key return the same committed result; a conflicting payload under that key is rejected (Continuation 02, §14). A failed transaction must not leave an idempotency record indicating success: idempotency state, ledger event, receipt, and node update succeed or fail together.

### 25.6 Endpoint compatibility

The endpoint remains compatible with the v1.1 payload — `topicId` and `type` (Chapter 22). Clients may add an optional expected-revision field and idempotency headers without breaking existing callers. The server, not the client, establishes ownership and assigns the authoritative timestamp and sequence.

### 25.7 Edge corrections

The correction command has an **edge variant** addressing relationships rather than topics, identified by source topic, target topic, and relation type (Chapter 19). Edge corrections follow the same processing order, idempotency, revision, and transaction rules, and produce **EDGE_CONFIRMED**, **EDGE_REJECTED**, and — on explicit owner restoration of a rejected edge — **EDGE_RESTORED** events (Chapter 26). Their endpoint surface is in Chapter 22. An edge decision governs that relationship in that owner's World only; it alters neither the shared Atlas nor either endpoint topic's status.

### 25.8 Evaluation order

**Materialise-decay-then-reduce is the canonical evaluation order.** A node's strength must first be materialised to the correction's authoritative event time under the canonical DecayPolicy (Chapter 20; Continuation 07, §55); the pure reducer does not itself calculate elapsed-time decay (Continuation 06, §47). Reducing first, or letting the reducer read an uncontrolled clock, is non-conforming, because replay (Chapter 26) would no longer be deterministic.


## Chapter 26 — The Event-Replay Engine

### 26.1 World state as a projection

World state is a **projection of authoritative events** (Continuation 07, §51). Given the same starting state, the same ordered events, and the same algorithm version, the system must reconstruct exactly the same World: with initial state S₀ and ordered events E₁…Eₙ, Sₙ = Rᵥ(Rᵥ(… Rᵥ(S₀, E₁), E₂) …, Eₙ), where Rᵥ is the applicable versioned reducer. This guarantee founds recovery, auditing, migration, and debugging — without making history undeletable: Erasability is one of the Five Laws (§26.3), and §26.6 reconciles partial erasure with replay.

### 26.2 The WorldEvent envelope

Every event has a stable, versioned structure (Continuation 07, §51):

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

To this enumeration, Chapter 25 adds EDGE_RESTORED for the explicit owner restoration of a previously rejected edge. The authoritative **sequence is assigned transactionally by the server**. Timestamps are used for decay and for historical display; **timestamps never determine order**, because two corrections can occur within the same clock resolution.

### 26.3 The Five Laws of Event Integrity

The following guarantees are mandatory (Continuation 07, §52):

| Law | Requirement |
|---|---|
| Determinism | Identical ordered events and versions produce identical state |
| Atomicity | An event and its resulting state commit together |
| Idempotency | Repeated requests never create duplicate actions |
| Traceability | Every state change identifies its originating event |
| Erasability | Privacy-governed deletion can remove events and derived information |

### 26.4 Replay across versions

If events span different algorithm versions, replay must use the reducer version recorded for each event, or an explicitly validated migration transform (Chapter 28). Applying today's reducer to yesterday's events without migration would rewrite history and is prohibited. The same rule applies to each event's Atlas and payload versions.

Decay during replay is evaluated at a supplied authoritative time under the canonical DecayPolicy, in materialise-decay-then-reduce order (§25.8). Merely rounding floating-point results is not a complete cross-runtime determinism guarantee (Continuation 07, §55): a canonical rounding method, persisted exact transition inputs, and a validated numeric representation are required.

### 26.5 Verification and recovery

The system must periodically verify materialised state against the authoritative event sequence, by canonical digest. The digest is calculated from a canonical serialisation that **excludes nondeterministic fields**, such as processing duration. On **mismatch**: investigate, and quarantine the affected derived projections. A mismatch must **never** trigger an automatic overwrite of owner-authoritative state.

The acceptance suite must simulate at least: a crash after event creation but before commit; duplicate delivery after a network timeout; an interrupted snapshot write; a failed Atlas migration; and an attempt to replay a deleted World. The required behaviour in every case is:

> **Committed events survive. Uncommitted events do not appear. Deleted Worlds do not return.**

### 26.6 Tombstone semantics — partial erasure (new section)

Whole-World deletion is governed by §26.7. Erasing a **single topic** from a surviving World is distinct: removing its events outright would break the sequence and invalidate the digest chain. This Edition therefore specifies tombstone semantics.

- The event **payload is replaced with a redaction marker** preserving its sequence position, event identifier, and ordering version fields.
- The original payload is **crypto-shredded**: the key material making any retained copy readable is destroyed, so the payload is unrecoverable, not merely unlinked.
- Replay treats a marker as a **defined no-op**: it advances the sequence, applies no state change for the erased topic, and is a specified reducer input, not an error.
- The **digest chain remains verifiable**: the marker is part of the canonical serialisation from redaction onward. Post-redaction verification attests to the redacted history, and must not be represented as attesting to content that no longer exists.
- Derived representations — projections, Perspectives that included the topic under a then-valid grant, caches, analytics extracts — are enumerated through the deletion manifest (Chapter 24, §24.7) and removed or invalidated under the same authorisation. A tombstone alone does not discharge those obligations.

### 26.7 Whole-World deletion

The ledger and event stream are append-only during ordinary operation; deletion runs through a separately authorised erasure process (Continuation 07, §52). A deleted World must not be reconstructable from snapshots, analytics, or backups once its deletion obligations are fulfilled. Until then, deletion is pending, not complete, and must not be reported as complete.

## Chapter 27 — Refutation, restoration, and buoy protocols

### 27.1 Refutation protocol

Continuation 07, §53, defines what follows a REJECT:

- A refuted topic is **excluded from automatic drafts, discovery recommendations, and new public Perspectives**.
- It does **not automatically return** because the owner encounters related material.
- Restoration, if it happens at all, is a separate, explicit owner operation (§27.2).
- Refutation is an exclusion state, not a decaying interest (Chapter 8): it has no half-life and never auto-expires.

### 27.2 Topic scope — no propagation

Refutation is **topic-scoped only**: it applies to the rejected topic and **never automatically** to related topics, to incident edges beyond their own owner decisions, or to its parent territory. Broader suppression — of a territory, category, or family of topics — is a **separate owner operation** requiring its own explicit instruction, never inferred from a single REJECT.

### 27.3 RESTORE

Restoration is a separate explicit operation, with its own endpoint in Chapter 22 (proposed in Continuation 07, §53 as `POST /api/first-light/worlds/:worldId/topics/:topicId/restore`) — not a correction type. The pure reducer enforces this: an ordinary BOOST against a REFUTED node fails with "Explicit restoration required" (Chapter 20).

RESTORE requires owner authorisation, explicit confirmation, a current revision check, and an idempotency key, and produces a TOPIC_RESTORED event (Chapter 26). On restore, as decided for this Edition:

- **Testimony persists as history.** The ledger record of the original declaration, confirmation, or refutation is not rewritten; restoration is itself a new event in that history.
- **Status and strength reset to an owner-selected state** — a provisional or owner-selected state, never automatically a strongly confirmed interest or the pre-refutation strength.

### 27.4 REMOVE_BUOY

KEEP_WATCHING places a topic under a buoy — a minimum visibility floor (0.15 under tidal-v1, Chapter 20) holding it in view without confirming it. **REMOVE_BUOY** removes that floor and lets ordinary decay continue, without rejecting the topic, erasing its history, or changing its provenance. It produces a BUOY_REMOVED event (Chapter 26).

### 27.5 Three distinct owner choices

These protocols give the owner three choices that must remain distinct in interface, API, and storage: **keep exploring** (KEEP_WATCHING — hold visible, without endorsement); **stop keeping it visible** (REMOVE_BUOY — release the floor, without rejection); and **reject** (REJECT — exclude under §27.1, reversible only through RESTORE). Collapsing any two — for example, treating buoy removal as a soft rejection — misrepresents the owner's testimony and is non-conforming.

## Chapter 28 — Algorithm versioning and migration

### 28.1 Three change classes

Changes over a World's lifetime (Continuation 07, §56) fall into three classes:

| Change class | Example | Migration requirement |
|---|---|---|
| Presentation | New map colours | No semantic migration |
| Algorithmic | New decay coefficient | Versioned recalculation or opt-in |
| Semantic | Atlas topic split | Explicit mapping and review |

No change may be classified downward to avoid its requirement: a change altering what a stored value means is semantic, whatever its code footprint.

### 28.2 Semantic migration — the Atlas split

Suppose an early Atlas topic, Restoration, is later split into **Natural Stone Restoration**, **Furniture Restoration**, and **Architectural Conservation**. An owner who confirmed Restoration has not thereby confirmed all three children, nor any one of them. Normatively: split children are **never auto-confirmed**; the **original declaration is preserved pending owner review**, and the owner is asked which new classification, if any, fits; the migration must not silently expand disclosed interests or modify Perspective grants; and **published Perspectives remain tied to their original projection** until the owner authorises an update. The same discipline applies to merges, meaning-changing renames, and territory reassignments.

### 28.3 Repository inventory — do not assume the storage engine

Continuation 05, §40, begins from a caution: v1.1 identifies the inspected **v9.8** prototype as a Node.js 22+ archive with a **local JSON data store** — a distinct, earlier lineage from the **reported** v36 lineage. Their test totals must not be merged, and v9.8 must not be treated as the v36 deployment description (v1.1, §12). Accordingly: **do not assume the current production storage engine.** Whether Chapter 24's candidate, PostgreSQL, is an introduction, a replacement, or already present must be answered by inventorying the actual repository.

### 28.4 The five-stage migration strategy

Migration proceeds in five stages (Continuation 05, §40):

1. **Schema inventory** — Identify every current World, Perspective, Invitation, correction, and session representation, with relationships and invariants.
2. **Compatibility schema** — Introduce the new representation without changing public API semantics; define deterministic ID mapping; preserve existing correction behaviour.
3. **Backfill and reconciliation** — Import into staging, validate counts and ownership, compare normalised state against the original storage.
4. **Controlled cutover** — Freeze or safely reconcile writes, rehearse rollback, verify revocation and idempotency across the transition.
5. **Post-cutover verification** — Run authorisation, concurrency, recovery, deletion, and API compatibility suites against the real database.

A migration is **not successful merely because the application starts**: historical corrections, permissions, and published Perspectives must remain correct after cutover. Likewise, testimony-v1 is frozen as the backward-compatible baseline, and testimony-v2-experimental is adopted for existing Worlds only when research and regression testing justify it and adoption is made explicitly (Chapter 20).

## Chapter 29 — Draft Selector v2.0

### 29.1 Purpose and limit

The Draft Selector (Continuation 04, §27) ranks eligible proposal candidates. A useful proposal need not be correct — it may be valuable because it lets the owner say it is not them — but the Selector must distinguish informative disagreement from deliberate irritation. **The algorithm must never maximise rejection for its own sake.**

### 29.2 The ranking function

Ranking uses a transparent, configurable function rather than a single opaque prediction:

**U(c) = w_r·R + w_n·N + w_e·E + w_d·D + w_q·Q**

All features are normalised to [0,1]; coefficients are versioned and must sum to 1. The system may experiment with weights, but **eligibility and privacy restrictions always execute before ranking**: a refuted, ineligible, or sensitivity-excluded candidate is removed before U(c) is computed for any candidate, and no score can readmit it.

### 29.3 The Q feature — correction-information value

Q estimates whether asking about a candidate would help clarify the owner's World. Q **must not predict emotional provocation**, and no provocation proxy may be introduced under another feature name. The safeguard is structural: the distinction between an informative and an inappropriate candidate is **enforced through candidate eligibility, not left to model judgement**. Where an owner has confirmed architecture and history, historical preservation may carry genuine correction-information value; proposing a sensitive personal identity on that basis is not an eligible candidate at all, however informative a rejection might appear mathematically.

### 29.4 Weight hypothesis

The Expansion records an **initial weight hypothesis** of **0.30 / 0.25 / 0.20 / 0.15 / 0.10** for R, N, E, D, Q. It is a hypothesis requiring pilot experimentation — not a validated production setting, with no pilot result claimed — and a deployment's coefficients in force are its own versioned coefficients, not this hypothesis by default.

### 29.5 Cold start

The first World does not depend on external account connections or imported browsing history; the Engine uses the owner's manually selected interests (Chapter 31) for a bounded, explainable First Draft. The **cold-start distribution hypothesis** is eight proposals — **four** close connections, **two** cross-territory bridges, **two** novelty-oriented candidates (4/2/2) — a hypothesis to test against shorter and longer drafts, not a mandatory production setting.

### 29.6 Module contracts

The Draft Selector is one of four independently testable modules (Continuation 02, §14); the Testimony Reducer is implemented first, as the foundation of the World.

| Module | Responsibility | Required test |
|---|---|---|
| Atlas Service | Stable taxonomy and version migration | Old Perspectives retain their approved meaning |
| Testimony Reducer | Deterministic owner corrections | Replay yields identical state |
| Draft Selector | Eligible, explainable proposals | No excluded topic can enter a draft |
| Lens Compiler | Authorized disclosure | No output contains finer detail than permitted |

Each module must pass its required test in isolation; failure of any one is failure of the module, regardless of aggregate pass rates elsewhere.

## Chapter 30 — Architecture and persistence

### 30.1 Logical services

The v1.1 architecture (§12) defines the logical services this Part retains: web owner and visitor clients; session and authentication; the World and evidence domain; Lens and Perspective publishing; visitor sessions; invitations; comparison; the AI gateway (Chapter 31); aggregate metrics; and incident logging. These are logical boundaries; no deployment topology is prescribed, and no deployment claim is made beyond what v1.1 records.

Persistence follows Chapter 24's five categories, separable for authorisation, projection, and deletion.

### 30.2 Separate state machines

State is modelled as **separate state machines per concern** (Continuation 03, §20): **World lifecycle**, **topic testimony**, **Lens publication**, **invitations**, and **visitor sessions** — never one enormous status field for every permission and lifecycle condition. Each machine has its own states, transitions, and authorisation checks, and a transition in one implies none in another: a World becoming active does not publish a Lens; an accepted invitation does not start a visitor session; a topic's testimony state does not change because a Lens over it was revoked.

### 30.3 World lifecycle note

Within the World lifecycle machine, **ACTIVE and SHAREABLE are not mutually exclusive**. Publication is a **separate state dimension**: a World may be active and unshared, or active and shareable, with shareability expressed through the Lens publication machine and its grants — not by moving the World into a "shared" lifecycle state. Encoding publication as a lifecycle stage a World must enter by leaving ACTIVE is non-conforming.

## Chapter 31 — AI gateway and provider safety

### 31.1 Ingestion and evidence

Ingestion starts with **manual interests** and explicit **USER_SHARE** link capture (v1.1, §07) — not imported browsing history or external account connections (cf. §29.5). For each item, the system stores: source type, time, content identifier, processing state, consent, model version, and fallback status; these populate the evidence-event record of §24.6, including its provider attribution.

Two distinctions are normative. First, ingestion must **distinguish observed activity from approval** or enduring preference (Chapter 23, at the point of capture). Second, deletion semantics are defined **separately** for raw content, derived nodes, receipts, and analytics: a deletion instruction must state which it covers, with completion verified for each through the deletion manifest (§24.7).

### 31.2 URL and transport safety

The gateway must **reject unsafe destinations and credential-bearing URLs**, and constrain redirects and response sizes (v1.1, §07). A credential-bearing URL is never fetched, stored as evidence, or echoed into a Receipt or log. A redirect that would breach the constraints terminates the capture as a failure, not a partial success.

### 31.3 Provider governance

External providers **propose** structured classifications; **the application validates and governs** the result (v1.1, §09). A provider response is a proposal entering the Inference Layer (Chapter 23), subject to schema validation, Atlas eligibility, and Chapter 24's evidence-event rules. No provider output writes directly to testimony or confirmed World State, and none is exempt from validation because of the provider's identity or past accuracy.

### 31.4 Reported v36.1 hardening

The following are **reported** for v36.1 (v1.1, §09), recorded as reported, not verified: HTTPS-by-default; an optional host allowlist; an **8-second** timeout; a **128 KiB** input limit; and a **512 KiB** response limit. They must not be cited as measured properties of any current deployment.

### 31.5 Failure taxonomy and quality tracking

The gateway must distinguish, in its records and any owner-facing explanation, at least five failure conditions: **timeout**, **malformed** response, **provider failure**, **unconfigured** provider, and **oversized** response. Collapsing them into a generic failure is non-conforming.

Quality is tracked **separately** for primary, fallback, and combined runtime. A combined figure must never replace the separate figures where a decision — provider selection, fallback status on an evidence event, draft quality — depends on which path produced the result.

### 31.6 The fingerprint limitation

The deterministic **16-dimensional fingerprint** of earlier release notes is **prototype-only**: not a production semantic embedding, not to be stored or described as one, and not a basis for production similarity, comparison, or disclosure decisions. A production embedding requires its own specification, validation, and privacy review; the fingerprint does not satisfy that requirement by precedent.

---

*End of Part V.*
# Part VI — Trust, Safety, Evidence

Part VI states what SEE MY WORLD must prove, not merely intend, before a person is asked to trust it with a World. It defines the conditions under which the systems of the earlier Parts may be exposed to other people: the security controls protecting a private World, the threat model, the six trust guarantees and their honest limits, the test evidence that exists and what it does and does not prove, the acceptance harness that remains to be executed, and the gates and research programme governing a pilot. The evidence discipline is strict throughout: a result described as *reported* has not been verified by inspection in this Bible, a test described as *planned* has not been executed, and no synthetic result is presented as a production guarantee.

## Chapter 32 — Privacy, abuse and security

### 32.1 Authorization is server-side, on every access

Every object access — a World, a topic, evidence, a Lens, a Perspective, an invitation, a visitor session, a comparison — is authorized on the server, at the moment of access, against the authenticated principal and the current grant. Client-side hiding is never a control: an interface that does not render a private object has proved nothing about whether it can be retrieved; only a server that refuses the request has. The rule applies equally to reads embedded in other responses: explanations, receipts, telemetry, comparison output, and cached representations must each pass the same authorization as a direct request (Chapter 33).

Authorization is checked again for each action, not inherited from an earlier successful page load: a Perspective valid when a visit began may since have been revoked, expired, or narrowed, and subsequent protected actions are decided against the grant as it stands at that moment (Chapter 34).

### 32.2 Capabilities, sessions, and replay

Access to a published Perspective is mediated by unpredictable, scoped capabilities: unguessable, bound to the Perspective and audience they were issued for, and no broader — a capability that opens one Perspective confers no access to the owner's World, to another Perspective, or to a comparison not separately granted.

Every capability carries an expiry, and expiry is fail-closed: an expired token produces a refusal, not a degraded or cached view. Replay defenses must prevent a captured capability, request, or idempotency submission from obtaining an effect a second time. Session invalidation must be effective on revocation, on expiry, and on account-level events ending a session's authority, and must survive process restart — an invalidation held only in a terminated process's memory is not an invalidation (Chapter 34).

### 32.3 Provider egress, credentials, and secrets

Egress to external providers is bounded: requests are limited in destination, size, and content to what the calling feature requires; provider credentials are used only within that bounded path and never exposed to clients, embedded in World data, or carried in URLs. Provider failure is handled under the gateway rules of the earlier Parts and never silently presented as a primary-model result.

Secrets must be redacted in logs, at emission rather than by a later scrub: logs and incident records are written on the assumption that their readers have no need of the secret values they might otherwise contain.

### 32.4 Retention, deletion, export, and incident response

Before any live pilot, the following must be approved — as written schedules and procedures, not as intentions:

- **Retention schedules** for raw evidence, derived nodes, receipts, and analytics, defined separately for each category, since their deletion semantics differ.
- **Account deletion**, executed under the meaningful-deletion guarantee of Chapter 34 and the lineage requirements of Chapter 33.
- **Data export**, so that an owner can obtain what the system holds about their World in a usable form.
- **Incident response**: a named incident owner, a stop rule for privacy incidents, rapid capability invalidation, and a support path, rehearsed under the operations gate of Chapter 37.

### 32.5 Abuse, reporting, and moderation

Report and block flows, and an identified moderation responsibility, are required before wider public discovery. A controlled pilot among invited participants may precede full public moderation capacity; public discovery may not. No Perspective may become broadly discoverable while there is no working route to report it, block its source, and reach a party responsible for acting.

## Chapter 33 — Privacy threat model

### 33.1 Method

The threat model examines not only what the application intentionally reveals, but what an observer could infer from repeated, legitimate-looking use. Mitigations are requirements: a threat whose mitigation is unimplemented is an open defect against the blocking gates of Chapter 36, not a risk accepted by being written down.

### 33.2 The five threats

**1. Differential Lens probing.** An attacker repeatedly opens differently scoped Perspectives — or induces their creation — and differences the results to infer interests the owner never disclosed. *Ruling — primary mitigation:* disclosure eligibility (Chapter 18) is the primary mitigation. A generalized label is eligible for a disclosure projection only if it does not trace to a single non-public node, unless the owner explicitly approved that label for disclosure. Probing fails at the projection, before any question of how often the attacker may ask, because no permitted projection contains the signal the differencing would extract. *Secondary mitigations:* strict grant scopes, controlled Lens creation, and rate-limited comparison. These constrain the attacker's opportunities and are required, but they are secondary: a rate limit slows an inference that eligibility should have made impossible, and it is not a substitute for it.

**2. Explanation leakage.** A "Why This Appears" receipt or visitor explanation names, quotes, or paraphrases private evidence that was never itself disclosed, leaking through the explanation what the projection correctly withheld. *Mitigation:* visitor explanations are generated exclusively from the authorized disclosure projection. The explanation generator has no access to the private World, to private evidence, or to the unprojected receipt; if a factor cannot be stated from the projection alone, the explanation omits it or generalizes it under the eligibility rules of Chapter 18.

**3. Revocation races.** A visitor submits an action at the same moment the owner revokes access, and the action is authorized against a grant that no longer exists. *Mitigation:* authorization-sensitive writes are serialized against revocation using transactional grant state, with fail-closed checks at the moment of the write. Where the ordering cannot be resolved in the visitor's favour with certainty, the action is refused. The corresponding acceptance test is LENS-002 (Chapter 36), and the corresponding failure-injection case is specified in Chapter 34.

**4. Derived-data persistence.** A topic is deleted from the World, but representations derived from it — embeddings, caches, analytical snapshots, search indexes, and other derived forms — survive and continue to disclose or resurrect it. *Mitigation:* a data lineage registry records every derived representation created from World data, and the deletion workflow covers each registered representation. Deletion is not complete while any registered derivative remains unpurged (DELETE-002, Chapter 36). The system must never resurrect deleted or rejected interests from old analytics, backups, or cached embeddings.

**5. Cross-user graph contamination.** One person's corrections alter another person's World — through shared mutable graph state, a mis-scoped write, or an authorization fault under concurrency. *Mitigation:* shared Atlas definitions are immutable from the World layer; World state is owner-scoped in storage and in every API response; and authorization is tested across concurrent operations, not only in single-user sequences. The corresponding adversarial scenarios appear in Chapter 36.

### 33.3 Inference from combinations

A further concern cuts across all five threats: combinations of otherwise harmless topics can reveal a sensitive characteristic no single topic discloses. Eligibility is therefore assessed on combinations as presented, not only topic by topic, and the rules are conservative: where a permitted set, a comparison result, or a generalized label would allow such an inference, the projection generalizes further or omits the contributing material. The product does not infer sensitive characteristics, and must not arrange disclosures so that a visitor can.


## Chapter 34 — Trust architecture: six guarantees

### 34.1 The guarantees

Trust is the product's strongest potential differentiator, established as six non-negotiable guarantees. Each carries an engineering requirement; a guarantee without its requirement implemented and tested is a claim, not a guarantee, and may not be presented to users as one.

| Guarantee | Engineering requirement |
|---|---|
| Private by default | No World or evidence is published without explicit authorization |
| Correction authority | Owner decisions override contradictory inferences |
| Transparent reasoning | Explain why a suggestion appears and identify uncertainty |
| Bounded sharing | Every Perspective has defined scope and access conditions |
| Effective revocation | Revoke server-controlled access immediately |
| Meaningful deletion | Erase eligible personal data and derived representations under a documented retention policy |

Private by default and bounded sharing are enforced by the Lens and disclosure-eligibility rules (Chapters 9, 18, and 33). Correction authority is enforced by the testimony rules of Part II: a correction is authoritative over inference, and a rejection is not silently reversed by later evidence. Transparent reasoning is bounded by Chapter 33: an explanation may draw only on what its audience is authorized to see. Effective revocation and meaningful deletion are the guarantees most exposed to overclaim; §34.2 applies to them directly.

### 34.2 Honest limits (normative)

Revocation cannot erase information another person already saw, copied, or saved outside the system. The product must communicate this limitation rather than promise impossible control. Revocation governs server-controlled access — new opens, subsequent protected actions, and future comparison — completely and immediately; it governs a visitor's memory, screenshots, and external copies not at all, and no interface copy, onboarding text, or help material may imply otherwise.

The same honesty applies to deletion, backups, and external AI providers. Deletion erases eligible data and its registered derived representations under the documented retention policy (Chapters 32 and 33), on the schedule that policy states for backups and replicas — a schedule that must be disclosed rather than concealed behind the word "deleted." Material already sent to an external provider is governed by that provider's terms, which must be known and stated before the provider is used with live data. A limitation stated plainly is a term of the trust asked for; a limitation discovered later is a breach of it.

### 34.3 Verification: failure injection and recovery

The guarantees are verified by breaking the system in the ways it is most likely to break in service. The failure-injection and recovery specification of Edition 1.1 §19 is adopted as this chapter's verification programme. Each case must demonstrate the stated property, not merely survive the fault:

- **Terminate the process between authorization and persistence** — prove atomicity and safe retry: no half-authorized, half-persisted state, and no duplicate effect on retry.
- **Force provider timeout and malformed JSON** — prove deterministic fallback and accurate provenance: the fallback is labelled as a fallback, and a provider failure never masquerades as a primary-model result.
- **Race duplicate publication** — prove exactly-once publication, or explicit conflict semantics where exactly-once cannot be offered.
- **Revoke during a visitor action, and revoke followed by process restart** — prove capability invalidation in both cases, including after the in-memory state that recorded the revocation is gone.
- **Expire Perspective and session tokens** — prove fail-closed responses and no stale cache exposure.
- **Simulate storage corruption, failed migration, and restore** — prove recovery against documented recovery objectives, with historical corrections, permissions, and published Perspectives still correct afterwards.
- **Introduce network disconnects mid-response** — prove no unintended duplicate writes result from a client that retries what it cannot confirm was received.

A guarantee that has not passed its corresponding case remains unverified.

## Chapter 35 — Test evidence and what it proves

### 35.1 The reported v36 results

The following results are **reported**. They are recorded here exactly as reported in Edition 1.1 §15, and the word "reported" is not upgraded to "verified" anywhere in this Bible:

> Reported v36.2 RC1: five-user HTTP simulation 47/47; runtime 1,552/1,552; protocol 19/19. Reported v36.3 RC1: 20-user adversarial simulation 56/56; runtime 1,555/1,555; protocol 19/19.

The reported 20-user harness covers: 20 concurrent signups; 20 World creations; 380 directed Perspective opens; 19 simultaneous cross-user attacks; a 10-request idempotency race; revocation under five active sessions; and a 120-request anonymous rate-limit boundary. This is evidence — at the strength a report carries — that authorization, idempotency, revocation, and rate limiting behaved as required under synthetic adversarial load. It is not evidence about real users, real devices, or a production deployment.

### 35.2 The v9.8 archive: a separate lineage

Separately, a v9.8 archive was inspected directly: its validation report states 736/736 tests, 0 failures, and package version 9.8.0, identifying a Node.js 22+ prototype with a local JSON data store. The v9.8 archive is a **separate, earlier lineage**: it is not proof of the v36.3 results, its totals must not be merged with the v36 totals, and its README is not the v36 deployment description. Conversely, the v36.3 source archive was **not present** for direct verification; that absence is why the v36 results remain "reported" in §35.1, and only inspecting that archive can close it.

### 35.3 Ship status

The ship status recorded in Edition 1.1 §20 is carried forward unchanged: SEE MY WORLD is **not certified public-launch ready**. Synthetic test success supports a limited controlled pilot decision; it is not a production security guarantee and not a market-fit guarantee. Any document, pitch, or interface copy that converts the results of §35.1 into either guarantee misstates the evidence.

### 35.4 Release-readiness scorecard

Readiness is assessed across seven categories, each satisfied on its own evidence; strength in one does not compensate for absence in another.

| Category | What must be shown |
|---|---|
| Product completeness | Pilot journeys implemented and acceptance-tested; verified on actual supported browsers |
| Privacy | Retention and deletion, consent, and revocation behaviour documented and exercised |
| Security | Authorization matrix, dependency review, secret management, and penetration testing completed |
| Operations | Deployment, backup and restore, incident playbook, monitoring, and rollback rehearsed |
| Analytics | Events correct and privacy-reviewed; pilot decision criteria agreed |
| Legal | Terms, privacy notice, IP and trademark review, and vendor data-processing terms approved |
| Market | Pilot users demonstrate meaningful visits and willingness to repeat |

This scorecard is a standard to be met, not a record of categories passed.


## Chapter 36 — Acceptance harness and test matrix

### 36.1 The acceptance-test matrix

The expanded engine is validated against behavioural guarantees rather than by counting passing tests. The matrix below is reproduced faithfully from Continuation 04 §32, accompanied by property-based testing, fuzzing, migration testing, and real database concurrency tests.

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

Two tests are added in Edition 1.2 and are marked as additions; they are not part of the Continuation 04 matrix:

| Test ID | Scenario | Required result |
|---|---|---|
| EXP-003 *(Edition 1.2 addition)* | Expedition stop labelled VERIFIED_RESOURCE | The label traces to a validation record identifying the source, the validator, and the date of validation |
| DELETE-002 *(Edition 1.2 addition)* | Delete a World with derived representations | Embeddings, caches, and analytical snapshots are purged per the data lineage registry (Chapter 33) |

### 36.2 The 104-case harness (planned only)

Continuation 05 §41 specifies a runnable harness targeting a real application instance and a disposable database, without mocking the critical authorization or transaction paths. It comprises **104 planned cases** across eight groups:

| Test group | Planned cases |
|---|---|
| Schema constraints | 12 |
| Reducer determinism | 16 |
| Idempotency and races | 12 |
| Lens privacy | 18 |
| Migration and recovery | 12 |
| Deletion and revocation | 10 |
| Atlas and draft eligibility | 12 |
| Expedition and Encounter | 12 |

These cases are **planned only. None has been executed or verified**, and no result may be cited for them until a run exists. The required adversarial scenarios are: cross-user corrections; unauthorized Perspective opens; grant reuse after revocation; duplicate requests under contention; stale revisions; malformed Atlas identifiers; and deletion during an active visitor session. The harness must also verify that WITNESSED evidence never independently upgrades a topic into a confirmed or shareable state. A successful suite, when eventually run, is necessary but not sufficient: production readiness additionally requires deployment review, operational recovery testing, accessibility validation, and security assessment.

### 36.3 The Replayable World gate

Continuation 07 §58 sets a development gate that must pass before Expeditions, Encounters, or collaborative Worlds are built on the event-replay foundation. The ten acceptance criteria are:

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

At the time of writing, **0 of 10** criteria have been reviewed. The gate is therefore closed, and the capabilities behind it remain blocked on the foundation.

### 36.4 Release gates

From Continuation 04 §32, four release gates govern the expanded engine:

- **Authorization and disclosure — BLOCKING.** No known critical cross-user access or unauthorized disclosure defect.
- **Deterministic state integrity — BLOCKING.** No unresolved duplicate-write, lost-update, or correction-replay failure.
- **Expedition quality — pilot gate.** User-tested coherence, explanation usefulness, and acceptable resource validity.
- **World recognition — pilot gate.** Participants understand the provisional nature of the map and can correct it successfully.

A blocking gate cannot be waived by schedule, by pilot enthusiasm, or by passing results in another gate.

## Chapter 37 — Pilot release gates and research programme

### 37.1 Pilot release gates

A limited controlled pilot may proceed only when the Edition 1.1 §16 gates are met:

- **Security:** no known cross-user authorization bypass, private World leak, or critical unresolved vulnerability.
- **Reliability:** backup and restore rehearsal, process restart, provider outage, malformed state, and interrupted-write recovery — exercised, in substance, through the programme of Chapter 34.
- **Experience:** mobile, keyboard, screen reader, and reduced-motion support, and a clear sharing preview showing the exact visible result before publication.
- **Operations:** health checks, structured logs, alarms, a named incident owner, rollback, and a support path.
- **Research:** participant consent, structured interviews, a defined meaningful-visit metric, and stop conditions agreed in advance.

The pilot size hypothesis is 50 invited users with a minimum of 25 Worlds created, refined with actual observations. It aligns with §37.2's third stage; it is a hypothesis about a workable pilot, not a sample-size justification.

### 37.2 The staged research programme

Research proceeds in three stages of increasing exposure, each stage's questions settled before the next is admitted:

1. **10 people — usability exploration.** Test First Light, recognition, corrections, and the language of consent: whether a person can build, recognize, and correct a World, and understand what sharing will do, in the words the product actually uses.
2. **25 people — discovery evaluation.** Compare familiar and novelty-oriented drafts, and test finite Expeditions: whether discovery is useful without becoming a feed.
3. **50 people — controlled Perspective pilot.** Evaluate Lens comprehension, meaningful visits, reciprocal discovery, and revocation. Recruitment at this stage is by **cluster** — pairs, households, teams, and classes — because the phenomena under test are reciprocal and cannot be observed in isolated individuals. The headline measure is **Reciprocal Completion per cluster**.

### 37.3 Five research questions

| Research question | Measurement |
|---|---|
| Do users recognize their World? | Self-reported accuracy after First Light |
| Do corrections increase trust? | Trust rating before and after correction |
| Are Expeditions useful? | Deliberate saves and voluntary return visits |
| Do Encounters improve understanding? | Participant-reported understanding after comparison |
| Does sharing feel safe? | Comprehension of Lens preview, scope, and revocation |

These measurements are interpreted together. **High usage with low trust is not success** — it is the signature of a product people use despite its terms, and for a product whose differentiator is trust (Chapter 34) it is a failure result with traffic.

### 37.4 Model-quality metrics, framed as hypotheses

The following metrics are adopted as **hypotheses**, not thresholds. Each names something the pilot is designed to learn, with any expected band or direction stated as an expectation to be tested, never as a pass mark set in advance of evidence:

- **Draft Survival** — the share of the First Light draft surviving correction. A healthy band of **30–50% is a hypothesis, not a threshold**: near 100% would suggest a draft too timid to be informative; near 0%, a failed expansion. **Diagnostic only — never a target.** No team, experiment, or algorithm may optimise toward or away from any Draft Survival value; a metric that rewards rejection counts would reward provoking them.
- **Time to First Recognition** — time from draft reveal to first correction, signalling that recognition, or productive disagreement, has begun.
- **Testimony Depth** — owner testimony accumulated per World over time, signalling that correction remains worth the effort.
- **Frontier Yield** — Seeds saved per meaningful visit.
- **Reciprocal Completion** — clusters completing a full reciprocal share; the pilot's headline measure (§37.2).
- **Coastline Ratio** — refuted relative to confirmed nodes per World. A World with no refusals is a World nobody authored; some authored coastline is expected, and its absence is a question, not a success. **Diagnostic only — never a target**: no design may seek to raise or lower the amount of refusal in the system.

**A note on meaningful visits.** A meaningful visit does **not** require a Seed save. A visitor may learn something important, understand a friend better, and leave having saved nothing; that visit was meaningful. A Seed is a strong observable signal, not the definition, and no metric, funnel step, or success criterion in this programme may treat the absence of a save as the absence of value. The exact operational definition of MEANINGFUL_VISIT remains an open decision (Appendix C).

### 37.5 The draft experiment

Continuation 02 sets the pilot's central experiment design. The First Draft Engine assumes a draft with meaningful disagreements is more informative than a highly agreeable one; that is a promising hypothesis, not a proven preference. The pilot therefore compares **agreeable drafts against informative-contrast drafts** and measures recognition, perceived accuracy, correction effort, trust, and willingness to return — **not rejection counts**. A design scored on rejections would reward provoking them, which the Draft Selector is expressly forbidden to do.

### 37.6 The funnel and analytics discipline

Product analytics follow the funnel of Edition 1.1 §14 and Appendix A, reproduced here as a clean ordered sequence. Each step is an event; a World's or a visit's progress is read as movement through this sequence and nowhere else:

**WORLD_CREATED → FIRST_CORRECTION → SHARE_STARTED → PERSPECTIVE_PUBLISHED → VISIT_OPENED → MEANINGFUL_VISIT → SEE_YOURS → VISITOR_WORLD_CREATED → COMPARISON_COMPLETED → RECIPROCAL_SHARE**

Instrumentation must provide unique user and session denominators, event deduplication, drop-off between consecutive steps, meaningful action rates, and privacy-preserving aggregation. Two disciplines bind every metric here. First, no metric may reward unwanted exposure or compulsive usage: a measure that rises when a person is shown more than they chose is measuring the product's failure. Second, the metrics of §37.4 enter the funnel as first-class measures alongside it, so a pilot is judged simultaneously on movement through the sequence, on whether the model deserved its corrections, and on whether — per §37.3 — trust rose.
# Part VII — Strategy

Part VII states what SEE MY WORLD will and will not attempt commercially, in what order it will be built, what could cause it to fail, who may decide what, and what long-term direction is recorded without being promised. It merges Edition 1.1 §§17, 18, 21, and 22 with the four-stage model of the Living Perspective Engine expansion, the release priorities of Continuation 03 (§23), and Continuation 04 (§§33, 35). No commercial ambition here overrides private-by-default, owner authority over inference, or disclosure only through an authorised Lens. The pilot has not established market fit; this part records hypotheses and tracked metrics, and publishes no projections.

## Chapter 38 — Commercial thesis and scope discipline

The commercial thesis of Edition 1.1 (§17) is deliberately narrow, and Edition 1.2 retains it. Scope discipline is part of the thesis, not a temporary pilot constraint: the product's value depends on trusting that a World will not be repurposed into something its owner did not agree to build.

### 38.1 What the product is not

The initial product is not a dating app, a generalised social feed, a personality diagnostic, a creator marketplace, or a host for arbitrary code execution. Each exclusion excludes a business model as well as a feature set: a dating app would require scoring people, prohibited in Comparison (Chapter 3); a feed would require optimising for time spent, contradicting finite discovery (Chapter 29); a diagnostic would treat a World as a measurement of the person, which Chapter 1 denies; a marketplace would subordinate sharing to audience distribution; arbitrary code execution would break the controlled status of Recipes (Chapter 3). A proposal needing any of these forms is out of scope.

### 38.2 The narrow hypothesis

The hypothesis to be tested is single:

> User-governed perspective sharing is valuable enough to repeat, and eventually valuable enough to pay for, in collaboration or creator contexts.

Three qualifications bind it. The value is in *user-governed* sharing — the owner selects territories, resolution, audience, and expiry, and can revoke. The contexts are collaboration and creator contexts, where presenting connected interests intelligibly has a recognisable job; no advertising or data-sale model is asserted, and monetisation must never require sale of private interest histories (Chapter 4). And "eventually" is not a forecast: the pilot tests repeat value; payment is a later question, asked only of behaviour already observed.

### 38.3 What is not published, and what is tracked

This Bible publishes no invented TAM, retention, or revenue projections. None has been measured, and none is introduced here. Measured figures enter the record through the revision process, with method and sample stated.

The pilot tracks, from Edition 1.1 (§17): hosting cost per active World; inference cost per evidence item; support time; activation; repeat meaningful visits; and willingness to pay. "Meaningful visit" carries the Chapter 1 definition — an authorised perspective visit producing a deliberate discovery action, such as saving a Seed or starting a reciprocal exploration. No metric that rewards unwanted exposure or compulsive use may be substituted for it.

Edition 1.2 adds **cost per validated discovery**. An Expedition stop may be presented only if its resource has been validated, and validation is work: Expedition content operations — recording for each resource its source, validator, and date of validation (Chapter 29) — are an operational cost centre, not absorbed invisibly into general engineering time. The metric is that effort, with associated inference and hosting cost, divided by discoveries that pass validation and are actually presented.

Willingness-to-pay research in the pilot must likewise use a concrete price anchor — a stated price, for a stated offer, in a stated context — rather than an unpriced intention question of the form "would you pay for this?" An unpriced intention measures politeness, not demand, and must not be recorded as willingness-to-pay evidence. The anchor, offer, and context are recorded with the result.

## Chapter 39 — Strategic roadmap and release sequencing

Edition 1.1 (§18) sequenced the product as Phases A–E; the expansion used four stages — First Light, Perspective, Connection, Evolution — and Continuation 03 (§23) restated that order as Priorities 1–4. This chapter merges them into the single sequencing Edition 1.2 adopts; the priority order governs.

### 39.0 The three product layers

Sequencing is organised by the product layers adopted in Chapter 4: **Layer 1 — My World**, **Layer 2 — Share a View**, **Layer 3 — Explore Together**. Priorities 1–2 build Layers 1–2, which are the pilot scope; Priorities 3–4 build Layer 3, whose modules are proposals, status-labelled in the Feature Status Register (Appendix D.4), and may not be represented as part of the first product. The minimum complete journey the sequencing must deliver first is the pilot journey: **First Light → correction → Lens → visit → Seed → SEE YOURS**.

### 39.1 Priority 1 — Foundation (Phase A, pilot core)

Priority 1 is Phase A's pilot core: deterministic testimony, a versioned Atlas, correction semantics, authorisation, and Lens compilation — in product terms, World bootstrap, correction, Lens preview, Perspective publication, visitor discovery, comparison, invitation, and aggregate measurement, reduced to the elements without which the rest cannot be trusted (Chapters 7, 10, 18, and 24). If Priority 1 is incomplete, later priorities are not partially shippable; they are unbuilt on a foundation that does not yet hold.

### 39.2 Priority 2 — Discovery

Priority 2 builds discovery on the foundation: the interactive World Map (Chapter 12), an explainable Draft Selector (Chapter 9), finite Expeditions (Chapter 15), and private Seeds (Chapter 3). Its test is the owner's everyday experience — opening a World they recognise, exploring somewhere finite and explainable, and saving what they choose. Expedition stops carry Chapter 38's validation discipline.

### 39.3 Priority 3 — Connection (Phase D, gated)

Priority 3 is Connection: reciprocal Perspectives, safe comparisons, the Encounter Protocol (Chapter 21), and Shared Frontiers. It corresponds to Phase D's social elements — World Swap, Shared Worlds, Shared Frontiers, and creator and collaboration spaces — restated under Edition 1.2's consent model, in which each participant's grant is independent and accepting an invitation authorises nothing about one's own World.

Priority 3 is expressly gated on the Replayable World foundation of Chapter 36. Connection multiplies the consequences of any defect in state, revocation, or replay — a comparison from a World that cannot be deterministically reconstructed, or a grant that cannot be reliably invalidated, harms two people rather than one. The gate is not a scheduling preference.

### 39.4 Priority 4 — Evolution (Phase C, control elements)

Priority 4 is Evolution: Returning Tides (Chapter 16), Constellations, the World Timeline (Chapter 16), and optional collaborative Worlds — Phase C's control elements (Timeline, algorithm control dashboard, temporary interests, vetted Recipes, advanced Receipts). It is last because continuity features preserve and resurface history, and history must not be preserved by a system whose testimony, deletion, and replay semantics are still unsettled. Owner tide controls arrive with this phase (Chapter 40).

### 39.5 Phase B — Reliability, across all stages

Phase B is not a stage between stages. Failure injection, data migrations, restore rehearsals, moderation and reporting, accessibility, and real user research run across all four priorities, continuously — failure injection and restore rehearsals before any state-bearing release, moderation and reporting before wider public discovery, accessibility as a condition of the Map and its non-visual equivalent, and real user research as the only admissible substitute for synthetic evidence.

### 39.6 Phase E — Platform, subject to gates

Phase E — portable Worldprints, third-party Lens requests, and protocol and developer integrations — remains last and remains subject to legal and security gates. In Edition 1.2 its portable element is read through Chapter 42: what may eventually be portable is a narrowly scoped, owner-chosen export, not a raw Worldprint. Phase E requires its own approvals under Chapter 41, including the independent reviews Chapter 42 names.

### 39.7 Engineering execution order

Continuation 04 (§35) fixes the engineering order, adopted here as stated — foundations before the visual and social experiences that depend on them:

1. **World Schema v2** — relational storage, topic states, revisions, evidence references, migration rules.
2. **Testimony Reducer v2** — deterministic corrections, transactional persistence, Receipts, concurrency tests.
3. **Atlas and Relationship Graph** — taxonomy governance, graph edges, version compatibility, candidate eligibility.
4. **Lens Compiler** — privacy-safe disclosure projections, verified under revocation and concurrent access.
5. **First Draft Selector** — explainable candidate selection, tested for owner recognition and trust.
6. **Expedition Prototype** — verified resources connected to finite, explainable paths.
7. **Encounter Prototype** — reciprocal Perspectives and authorised comparison.

The order is load-bearing: each step assumes the contracts of those before it.

## Chapter 40 — Risks and mitigations

This chapter consolidates Edition 1.1 (§21) with the design risks of the First Draft Engine concept. A risk is recorded only with its mitigation; a risk with no mitigation is a stop condition under Chapter 41.

### 40.1 Product and operational risks

**Cold start.** An empty World gives its owner nothing to recognise or correct. *Mitigation:* the five-interest manual bootstrap plus visible correction, requiring no external account connection or imported history (Chapter 4).

**Scope creep.** Each concept here — protocol, social exchange, collaborative Worlds — invites expansion beyond the pilot. *Mitigation:* keep protocol, dating, arbitrary algorithms, and marketplace forms out of the pilot, per Chapter 38; any deferred capability requires the written record of Chapter 41 before reconsideration.

**Overclaim.** A World taken as the person, rather than as a model, is the product's central misunderstanding risk. *Mitigation:* explain that a World is a model, not the person — on every surface where it matters. Map distance is not a psychological measurement; a Comparison is not a judgement of a relationship.

**Sharing anxiety.** An owner who cannot predict what a visitor will see will not share, or will share and regret it. *Mitigation:* exact preview of the visible result, expiration, and immediate revoke (Chapter 18). The preview is the Lens's actual output, not a summary of it.

**Provider risk.** External providers may fail, change, return malformed output, or retain data they should not. *Mitigation:* byte caps, host controls, a deterministic fallback whose status is labelled rather than disguised, and quality tracked separately for primary provider, fallback, and combined runtime.

**Privacy incidents.** A cross-user disclosure would damage the exact trust the product sells. *Mitigation:* explicit stop rules agreed before the pilot, and rapid capability invalidation — affected grants invalidated first, investigated second, with the pilot paused under Chapter 34's stop conditions.

**Network fragility.** A small invited population produces sparse visits, easily misread as failure. *Mitigation:* instrument meaningful visits, not just clicks. Sparse deliberate discovery is the behaviour Chapter 38's hypothesis predicts; click volume would pressure the product toward the feed mechanics Chapter 38 excludes.

### 40.2 Design risks from the First Draft Engine

**(a) A deliberately imperfect draft can feel like a trick.** The First Draft proposes some candidates for the information in the owner's reaction, not from an expectation of agreement (Chapter 9); undisclosed, its errors feel like incompetence or manipulation. *Mitigation:* the disclosure itself — the draft is presented as provisional, correctable, and expected to be wrong in places — plus Atlas exclusions binding the Bootstrap, so no excluded category can appear in a first draft on the ground that a rejection would be informative.

**(b) Tides can annoy.** Resurfacing mistimed reads as nagging; decay misunderstood reads as loss. *Mitigation:* testimony never decays — only current strength ebbs (Chapter 8) — resurfacing is one tap to dismiss or act on, and owner tide controls arrive with the control phase at Priority 4 (Chapter 39).

**(c) The Atlas is editorial power.** Whoever sets the territories, topics, and exclusions decides what a World can contain. *Mitigation:* the Atlas is public, versioned, and change-logged, so that power is inspectable; private node names remain available as an escape valve, so no owner must describe an interest in the Atlas's terms in their own World; and Atlas governance is assigned in Chapter 41.

**(d) Reaction-value drafting optimises for strong feelings.** A selector valuing definite reactions can drift toward provocation, because strong disagreement is definite. *Mitigation:* proposal selection excludes anything adjacent to a REFUTED coastline, permanently — as an eligibility exclusion applied before ranking, not a penalty a high score elsewhere can overcome. A rejected topic and its immediate surroundings are never re-proposed in search of a reaction.

**(e) Coastlines are information too.** A published refusal reveals that a topic was proposed and rejected; a labelled list would disclose interests by negation. *Mitigation:* where an owner separately chooses to publish a coastline at all, published coastlines render as boundary shape at Continent resolution by default, never as a labelled list of rejections. Refutations are private by default (Chapter 6).

## Chapter 41 — Decision rights and change control

Edition 1.1 (§22) assigned decision rights in three sentences. Edition 1.2 retains them and extends the same discipline to Atlas change and algorithm version change.

### 41.1 Who decides what

The **founder / product owner** approves scope and the product promise. No other role may admit a Chapter 38 exclusion — a dating form, a generalised feed, a diagnostic claim, a marketplace, arbitrary code execution — by treating it as an implementation detail, nor weaken the Chapter 1 promise by treating it as a copy edit.

**Engineering** owns implementation integrity: conformance to this Bible's normative specifications, the determinism and transaction properties of Chapters 24 and 36, and the acceptance tests of Chapter 35. Engineering may refuse a non-conforming build; it may not resolve non-conformance by reinterpreting the specification. A specification that appears wrong is changed through this chapter, not in code.

**Security and privacy reviewers** can block release for unresolved safety risks. The block is a veto, not advice: the release does not proceed until the risk is resolved or the release re-scoped so the risk no longer applies. It covers, without limitation, cross-user authorisation defects, disclosure through explanations, comparisons, caches, or exports, and unresolved items in Chapter 33's threat model.

### 41.2 Deferred capabilities and the ADR

Every deferred capability requires a written ADR before it is scheduled, prototyped for release, or represented externally as forthcoming, covering: benefit; threat model; cost; metrics; acceptance tests; and rollback — including what happens to state created under the capability if it is withdrawn. A capability without a complete ADR is not deferred; it is undecided, and no work presuming it may be merged.

### 41.3 Atlas governance

Atlas governance sits here. Atlas changes are versioned, announced, and change-logged before they take effect in any World; none is applied silently or retrospectively without record. Semantic Atlas changes — altering what a topic means, where it belongs, or how existing Worlds map onto the new structure — follow the migration rules of Chapter 28. A semantic change that cannot be migrated under those rules is a breaking change, requiring the founder / product owner's approval under §41.1 and an ADR stating the migration and its effect on existing Worlds.

### 41.4 Algorithm version changes

Algorithm version changes require the same ADR discipline — in particular, any future adoption of testimony-v2-experimental in place of or alongside the frozen testimony-v1 rules (Chapter 13). Such adoption must be proposed by ADR and approved before any World is computed under it, and may never be applied silently to existing Worlds. A World records the algorithm version under which its state was derived (Chapters 24 and 36); changing that version is a recorded, replayable event in the World's history, reversible under the ADR's rollback terms — or it does not happen.

## Chapter 42 — The World Protocol

Continuation 04 (§33) identified a long-term opportunity beyond the application itself. This chapter records it at its correct status: a research direction, governed by one principle, and not part of the pilot.

### 42.1 What it would be

Once the core application is reliable, SEE MY WORLD could eventually support the World Protocol: a portable, user-controlled representation of interests — a narrowly scoped export containing only the topics, relationships, and declarations the owner explicitly chooses. Portability means carrying an approved selection into another context without surrendering the World it was selected from.

### 42.2 What it is not

The Protocol is not raw Worldprints or private embeddings. A Worldprint (Chapter 3) contains more than any disclosure decision has approved — provisional proposals, testimony history, structure never chosen for sharing — and exporting it would disclose by bulk what the Lens discloses by selection. The export contains only what the owner explicitly chooses, at the resolution the owner sets. Anything not chosen is absent: not redacted, not recoverable by the recipient, but absent.

### 42.3 Possible uses and the governing principle

Possible uses, illustrative and not committed, include educational tools, collaborative research, and creative applications — each without access to the owner's entire history, and each requiring its own authorisation model, ADR under Chapter 41, and review. The architectural principle, verbatim from Continuation 04 (§33), is:

> "Share an approved perspective, not a copy of the person."

The principle is an eligibility rule, not only a summary: any format or integration that would transfer a copy of the person — the full graph, the full history, or enough of either to reconstruct them — is out of scope, regardless of the consent language around it. Consent governs approved perspectives; it does not convert a copy into a perspective.

### 42.4 Status and gates

The World Protocol is a long-term research direction, subject to independent security, privacy, interoperability, and legal review, each completed and recorded before any implementation is scheduled, and governed by Phase E's gates (Chapter 39) and Chapter 41. It is **not part of the pilot**, not a Priority 1–4 deliverable, and no pilot decision may be justified by appeal to it.
# Appendices

## Appendix A — Event dictionary

SEE MY WORLD uses two distinct event families. They must never be merged: product events measure the funnel; World events constitute the World.

### A.1 Product and funnel events

| Event | Meaning |
|---|---|
| WORLD_CREATED | A new World was created |
| FIRST_CORRECTION | The owner applied their first correction |
| SHARE_STARTED | The owner began composing a Lens |
| PERSPECTIVE_PUBLISHED | A Perspective was published |
| VISIT_OPENED | A visitor opened a valid Perspective |
| MEANINGFUL_VISIT | A visit produced a deliberate discovery action (definition: Appendix C) |
| SEE_YOURS | A visitor began creating their own World from a visit |
| VISITOR_WORLD_CREATED | A visitor's provisional World was created |
| COMPARISON_COMPLETED | A Comparison was computed and viewed |
| RECIPROCAL_SHARE | A reciprocal Perspective was published |

The funnel order is: WORLD_CREATED → FIRST_CORRECTION → SHARE_STARTED → PERSPECTIVE_PUBLISHED → VISIT_OPENED → MEANINGFUL_VISIT → SEE_YOURS → VISITOR_WORLD_CREATED → COMPARISON_COMPLETED → RECIPROCAL_SHARE (see Chapter 37).

### A.2 World events (Testimony Ledger and replay envelope)

World events are the authoritative record from which World state is derived (Chapter 26). Each carries a server-assigned sequence, a payload version, the reducer version, and the Atlas version.

| Event type | Produced by |
|---|---|
| TOPIC_DECLARED | An owner's direct declaration of a topic |
| TOPIC_CONFIRMED | An owner's confirmation of a proposed topic |
| TOPIC_CORRECTED | A BOOST, REDUCE, REJECT, or KEEP_WATCHING correction |
| TOPIC_RESTORED | The RESTORE operation (Chapter 27) |
| BUOY_REMOVED | The REMOVE_BUOY operation (Chapter 27) |
| EDGE_CONFIRMED | An edge correction confirming a relationship (Chapter 22) |
| EDGE_REJECTED | An edge correction rejecting a relationship (Chapter 22) |
| EDGE_RESTORED | Restoration of a rejected relationship (Chapter 22) |

Evidence events — proposal arrivals, WITNESSED signals, and provider attributions — are recorded separately in the evidence-event stream (Chapter 24). They are not World events, never enter the testimony fold, and cannot change provenance beyond PROPOSED or WITNESSED.

## Appendix B — Canonical invariants

The following invariants bind every part of the system. The first seven are carried from Edition 1.1 unchanged; the remainder are promoted or added in Edition 1.2, with their source noted.

1. Private by default.
2. Owner correction is authoritative over inferred interest.
3. Visitor access is only as broad as the Lens.
4. Revocation invalidates promised capabilities.
5. Idempotent writes do not duplicate under concurrency.
6. Comparisons do not rank people.
7. Provider failure never silently masquerades as a primary-model result. *(Edition 1.2 wording: Edition 1.1's "confident primary-model result" is restated without the term the node model no longer carries; the substance is unchanged.)*
8. Observation is not endorsement. Inference is not identity. Sharing is not consent to further processing. *(Promoted verbatim from the five-layer model, Chapter 23.)*
9. Detail(Output) ≤ Resolution(Grant). A server response never contains finer-grained information than the authorized Lens permits. *(Chapter 18.)*
10. Absence is not disagreement. Unvisited territory never renders as difference. *(Chapter 20.)*
11. A rejection binds the rejected topic only. It never propagates to related topics or the parent territory; broader suppression is a separate owner operation. *(Chapter 27.)*
12. Testimony is a weight of human action. It is never a statistical estimate, is never renamed as one, and never decays; strength decays, testimony stands until revoked. *(Chapters 6–8.)*
13. A refuted topic's internal record is never disclosed through a Perspective. *(Chapter 6.)*
14. Exploration appetite is owner-set only. No system action may raise it. *(Chapter 6.)*
15. Free-text meaning ("why") answers never leave the owner's World and never shape another user's draft, suggestions, or comparisons. *(Chapter 14.)*
16. Deleted Worlds do not return: after deletion obligations are fulfilled, a World is not reconstructible from snapshots, analytics, or backups. *(Chapter 26.)*
17. A replay mismatch never authorizes overwriting owner-authoritative state; affected derived projections are quarantined and investigated. *(Chapter 26.)*
18. Semantic Atlas changes never auto-confirm new topics and never alter existing Perspective grants. *(Chapter 28.)*
19. The Atlas excludes attribute branches: no Atlas category constitutes a claim about an owner's identity. A topic *about* a domain is not an attribute of its owner, and inferring an attribute from a topic is prohibited. *(Chapter 10.)*
20. In the pilot, no Perspective contains a PROPOSED or WITNESSED node. Provisional material is private until the owner testifies to it. *(Chapters 17–19.)*

## Appendix C — Decision register and open decisions

This appendix is the project's decision register. It transcribes, in full, the 42-gap inventory of the Complete Project Audit (received during the compilation of this edition), each gap with the audit's recommended decision — recorded as a *recommendation*, not as a ruling of this Bible — and a status. A gap is marked **Adopted in Edition 1.2** only where a ruling of this edition (R1–R28, logged in Appendix D) settles it; every other gap is **Open — founder decision**. The audit's 12 priority decisions are listed first, in the audit's order.

### C.1 The 12 priority decisions (audit order)

| # | Decision | Source gaps | Status |
|---|---|---|---|
| 1 | Choose the first target audience | P01 | Open — founder decision |
| 2 | Define the minimum complete journey | P04 | Adopted in Edition 1.2 — First Light → correction → Lens → visit → Seed → SEE YOURS (R28) |
| 3 | Lock the First Light bootstrap | U01; audit contradiction 1 | Adopted in Edition 1.2 — three interests minimum, five as the optional richer start, one link labelled low-coverage; both are pilot test arms (R21) |
| 4 | Resolve correction and testimony semantics | A01, A02, U02 | Open — founder decision; contains the unresolved CONFIRM conflict (Appendix D, entry D-34) |
| 5 | Freeze the World state contract | A05; Continuation 04 §25 | Adopted in Edition 1.2 — owner-authoritative / provisional / disclosure state, testimony-v1 frozen (Chapters 24–26) |
| 6 | Define Lens disclosure precisely | S01 | Open — founder decision; resolution semantics and disclosure eligibility are adopted (Chapters 18, 33), the field-level disclosure schema is still owed |
| 7 | Define Seed ownership and revocation | D03, S04 | Adopted in Edition 1.2 (R20) |
| 8 | Specify Comparison and New Frontier | Chapter 20 | Open — founder decision; Edition 1.2 definitions are proposed (R12, R19), pending ratification |
| 9 | Establish Atlas governance | G01, G03 | Open — founder decision; the decision-rights home is assigned (Chapter 41), the process is still owed |
| 10 | Choose retention and deletion rules | S05 | Open — founder decision; erasure mechanics are specified (Chapters 24, 26), periods are undecided |
| 11 | Inspect and reconcile the real codebase | E01 | Open — founder decision |
| 12 | Define pilot success and stop conditions | V01 | Open — founder decision; metrics are framed as hypotheses (Chapter 37), thresholds are undecided |

### C.2 Product identity and market

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| P01 | Who is the first ideal customer? | Start with existing pairs and small groups who already want to understand each other's interests. | Open — founder decision |
| P02 | What is the primary reason to open the app? | Creating and correcting a World, followed by exploring someone else's Perspective. | Open — founder decision |
| P03 | Is the primary value personal discovery or social connection? | Personal discovery creates the asset; meaningful sharing is the primary network value. | Adopted in Edition 1.2 — personal discovery first, social discovery second (R4, Chapter 4) |
| P04 | What is the smallest complete product? | First Light → correction → Lens → visit → Seed → SEE YOURS. | Adopted in Edition 1.2 (R28) |
| P05 | What is explicitly outside the first release? | No public feed, dating, creator marketplace, arbitrary Recipes, or third-party protocol. | Adopted in Edition 1.2 — scope discipline carried in Chapter 38 and the adopted decisions of Chapter 4 |

### C.3 Onboarding and user experience

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| U01 | What happens when a user provides only one interest? | Offer a minimal draft, clearly labeled as low-coverage, without inventing personal facts. | Adopted in Edition 1.2 (R21, Chapter 9) |
| U02 | How does someone explicitly CONFIRM a proposed topic? | Add a separate confirmation action; do not force BOOST to serve two meanings. | Open — founder decision; the audit's proposal conflicts with Continuation 06 §47 and is logged unresolved (Appendix D, entry D-34) |
| U03 | What happens when the entire First Draft is wrong? | Provide manual topic entry, reset, and a new draft using corrected seeds. | Adopted in Edition 1.2 (R21, Chapter 9) |
| U04 | Can a person use the app without the map? | Yes. A fully functional list-based interface must exist. | Adopted in Edition 1.2 — the accessible list alternative is required (Chapter 11) |
| U05 | What are the exact screen flows and error states? | Produce complete wireflows for owner, anonymous visitor, registered visitor, and returning owner. | Open — founder decision |

### C.4 World model and algorithms

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| A01 | What does testimony mathematically represent? | A versioned sum of qualifying owner actions, not a probability or objective confidence. | Adopted in Edition 1.2 (R1, R24; Chapters 6–7) |
| A02 | What are the exact semantics of DECLARED, CONFIRMED, WITNESSED, and REFUTED? | Define a transition table for every event and provenance state. | Open — founder decision; the reducer and protocols specify the principal transitions (Chapters 7, 25, 27), a complete transition table is still owed |
| A03 | What happens when BOOST is applied at zero strength? | Resolve through a separately versioned reducer; preserve the v1 formula for existing states. | Adopted in Edition 1.2 — known defect D-03, v1 preserved, v2 formula is the designated remedy (R3) |
| A04 | What happens when a topic is restored or its buoy removed? | Define explicit owner operations and their effects on history and strength. | Adopted in Edition 1.2 — RESTORE and REMOVE_BUOY specified (R6; Chapters 22, 27) |
| A05 | How do tidal decay and enduring affinity interact? | Decay current prominence; preserve owner declarations until changed or deleted. | Adopted in Edition 1.2 (R8; Appendix D, entry D-04) |
| A06 | How are edges created, rejected, weighted, and decayed? | Specify a separate relationship state machine and provenance ledger. | Open — founder decision; the edge-correction command contract is adopted (R9), edge weighting and decay are unspecified |
| A07 | How do Atlas upgrades affect Worlds and published Perspectives? | Require explicit semantic migration and no silent disclosure expansion. | Adopted in Edition 1.2 (Chapter 28; Appendix B, invariant 18) |

### C.5 Privacy, consent, and security

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| S01 | What exactly can each Lens resolution disclose? | Define a field-level disclosure schema for Continent, Coast, and Harbour. | Open — founder decision |
| S02 | How does the owner control audience, expiry, and resharing? | Specify recipient grants, link capabilities, expiration, and forwarding behavior. | Open — founder decision; grants and expiry are specified (Chapters 17, 22), forwarding behaviour is not |
| S03 | Can a visitor infer hidden topics from comparison or map geometry? | Test differential queries, aggregates, explanations, and visual side channels. | Open — founder decision; disclosure eligibility is adopted as the primary mitigation (R7, Chapter 33), the differential testing programme is owed |
| S04 | What happens to Seeds and visited material after revocation? | Distinguish a visitor's independent saves from access to the owner's revoked content. | Adopted in Edition 1.2 (R20; Chapters 3, 19) |
| S05 | How are deletion, exports, backups, and event history handled? | Define retention schedules, erasure coverage, and backup expiration. | Open — founder decision |
| S06 | What data can external AI providers receive? | Specify consent, minimization, vendor restrictions, logs, and retention. | Open — founder decision; gateway safety rules are specified (Chapter 31), vendor terms are not |

### C.6 Discovery and social interaction

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| D01 | Where do Expedition resources come from? | Establish approved source types, verification rules, and licensing requirements. | Open — founder decision; the validation record and cost-per-validated-discovery metric are adopted (R14), source types and licensing are not |
| D02 | How are discovery paths evaluated? | Measure coherence, novelty, usefulness, and user control—not clicks alone. | Open — founder decision |
| D03 | What does a saved Seed actually contain? | Define immutable reference, attribution, permitted metadata, and owner-independent content. | Adopted in Edition 1.2 (R20; Chapters 3, 19) |
| D04 | How does an Encounter begin and end? | Define invitation, acceptance, reciprocal grants, comparison, expiration, and revocation. | Adopted in Edition 1.2 — the Encounter Protocol is specified (Chapter 21) |
| D05 | What happens when someone abuses a shared Perspective? | Introduce report, block, mute, and access-restriction flows before wider social discovery. | Open — founder decision; report/block is required before wider discovery (Chapter 32), the flows are unspecified |

### C.7 Atlas and content governance

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| G01 | Who can create, rename, merge, or retire topics? | Establish an editorial approval process and versioned change log. | Open — founder decision; Atlas governance sits in decision rights (Chapter 41), the editorial process is unspecified |
| G02 | How are user-created topics represented? | Allow private free-text topics without automatically promoting them to the shared Atlas. | Adopted in Edition 1.2 (R23, Chapter 10) |
| G03 | How are sensitive topics, ambiguous terms, and cultural bias handled? | Define exclusions, appeals, review criteria, and multilingual expansion rules. | Open — founder decision; the attribute/topic distinction and exclusion rule are adopted (R23), appeals and multilingual rules are not |

### C.8 Engineering and reliability

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| E01 | What is the authoritative current codebase and release lineage? | Inspect the actual v36 source, deployment, and database before changing architecture. | Open — founder decision |
| E02 | What is the final persistence and event-replay strategy? | Select a transactional database and specify ledger, snapshots, deletion, and recovery. | Open — founder decision; the strategy is specified (Chapters 24, 26, 28), production database confirmation is pending the repository inventory |
| E03 | What are the complete API contracts? | Publish OpenAPI schemas, authentication rules, error codes, versioning, and compatibility requirements. | Open — founder decision |
| E04 | What are the operating limits and recovery objectives? | Define latency, capacity, uptime goals, backup recovery, monitoring, and incident response. | Open — founder decision |

### C.9 Commercial model and growth

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| B01 | Who pays, for what, and when? | Test individual premium tools versus paid collaboration spaces after validating the free core. | Open — founder decision |
| B02 | What does one active World cost to operate? | Model storage, inference, resources, support, moderation, and visitor traffic. | Open — founder decision; the tracked cost metrics, including cost per validated discovery, are adopted (R14, Chapter 38), no cost model exists yet |
| B03 | How does the product grow without an engagement feed? | Test invitation clusters, Seed-Born Worlds, and organic reciprocal sharing. | Open — founder decision; cluster recruitment is adopted for the pilot (Chapter 37) |

### C.10 Operations, legal, and accessibility

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| O01 | Who owns legal, support, moderation, and incident responsibilities? | Define accountable roles, policies, response procedures, and vendor agreements. | Open — founder decision |
| O02 | What is the accessibility and device-support standard? | Set a measurable target such as WCAG 2.2 AA and specify supported platforms. | Open — founder decision; the target named here is the audit's example, not an adopted standard |

### C.11 Validation and decision governance

| ID | Unanswered question | Audit recommendation | Status |
|---|---|---|---|
| V01 | What evidence proves the concept is valuable? | Define recognition, correction quality, meaningful visits, repeat use, and reciprocal discovery. | Open — founder decision; the metric set is adopted as hypotheses (Chapter 37), evidence thresholds are undecided |
| V02 | Who decides when a feature or experiment becomes canonical? | Maintain a decision register, approval process, and explicit evidence threshold. | Open — founder decision; this register and the ADR discipline of Chapter 41 are adopted, the evidence threshold is not |

### C.12 Carried open items from the Edition 1.2 compilation

These open items arise from the compilation itself and stand alongside the audit register:

1. **Final product naming and trademark clearance.**
2. **The testimony-v2-experimental coefficient (a)** — its value was lost in source transit and must be set by experiment design, not by editorial choice.
3. **Draft Survival thresholds** — the 30–50% band is a diagnostic hypothesis (Chapter 37), never a target, and no threshold is ratified.
4. **Ratification of the "unexplored" definition** (Chapter 20) — proposed in this edition, pending ratification (priority decision 8).
5. **Exact meaningful-visit definition** — the north-star metric's precise operational form; a meaningful visit does not require a Seed save (Chapter 37).
6. **Coastline disclosure** — whether and how an owner may explicitly disclose refutations (as comparison input under Chapter 20, or as published coastline shape) is governed by the disclosure rules of Chapters 18 and 20; a standalone coastline-sharing feature is a deferred decision, not pilot behaviour.

## Appendix D — Edition 1.2 system review and optimization log

Edition 1.2 was compiled by reviewing the project as a complete system: the Edition 1.1 base, the First Draft Engine concept, the Concept Expansion, and Continuations 02–07, checked against each other and against the reconciliation record. This appendix is the review. It records what the review found sound, every conflict between sources and how it was resolved, every optimization applied, and the known defects carried forward deliberately.

### D.0 Review summary

The system's centre holds. The consent architecture of Edition 1.1 — private by default, bounded sharing, owner correction as authority, revocation as a real operation — survives contact with every later document, and the development line's best work (the Lens Compiler, disclosure eligibility, the five-layer separation, deterministic replay) strengthens it rather than diluting it. The review's principal finding is that the development line *drifted at the centre while strengthening the perimeter*: between the Concept Expansion and Continuation 04, the original testimony model was progressively reframed in affinity/confidence terms that the original concept explicitly rejects, and Continuation 05 §37 had to restore it. Edition 1.2 completes that restoration and removes the drift (entries D-01, D-02). The remaining findings are seams, not fractures: an edge-correction pathway that existed as events but not as a command (D-10), an audit gap around non-testimony provenance changes (D-11), a collision between erasure and replay determinism (D-12), and one term — "unexplored" — that the comparison mathematics used without defining (D-13). One known defect in testimony-v1 is carried forward deliberately and logged, not patched (D-03). Nothing in the compiled system requires a claim the evidence cannot support: the implementation status of every post-1.1 module is specified or proposed, none is built, and the pilot programme of Chapter 37 is the honest next step.

### D.1 Conflicts found and resolved

**D-01 — Testimony model drift (Continuations 01–04 vs First Draft Engine; Continuation 05 §37; Continuation 06 §45).** The expansion line introduced enduring affinity as a replacement axis and treated an estimated classification reliability ("confidence") as a node property, progressively displacing the original model. *Resolution (R1):* the original testimony model governs — strength, testimony, provenance (DECLARED, CONFIRMED, PROPOSED, WITNESSED, REFUTED), last_witnessed, buoy. Enduring affinity and exploration appetite survive only as nullable experimental extensions. There is no confidence field in the Edition 1.2 node model; the word appears in this Bible only in historical and review contexts such as this entry.

**D-02 — REDUCE contradiction (Continuation 02 §11).** The action table described REDUCE as decreasing current relevance while the accompanying formula applied REDUCE to affinity. *Resolution (R5):* the operator×dimension matrix in Chapter 7 states every operator's effect on every dimension and resolves the contradiction in favour of the testimony-v1 reducer: REDUCE acts on strength (×0.6) and adds 0.5 testimony; it has no effect on enduring affinity in v1.

**D-03 — KNOWN DEFECT, carried deliberately: testimony-v1 BOOST from zero.** Under v1, BOOST multiplies strength by 1.5; from strength 0 the result is 0, so a node at exactly zero cannot be BOOST-recovered. *Disposition (R3):* logged, not patched — testimony-v1 is frozen for backward compatibility, and silently changing its arithmetic would rewrite existing Worlds. The designated remedy is the testimony-v2-experimental formula (Annex 7.A), pending adoption through research and regression testing (Chapter 41).

**D-04 — Decay vs preservation (First Draft Engine vs World Seasons; Continuation 05 §42).** The original engine lets all strengths ebb, including declared interests; the Seasons proposal preserves enduring affinity separately. *Resolution:* both are retained, on separate axes — strength may ebb; testimony remains authoritative until revoked; enduring affinity is a separate owner-controlled declaration (Chapter 6). A quiet interest and an abandoned interest are different states, and the model now says so.

**D-05 — The missing attention column (Continuation 05 schema).** The World Schema v2.0 node table carries no current_attention field, while the Seasons material treats attention as a dimension. *Resolution (R8):* stated explicitly in Chapters 6 and 13 — in testimony-v1, strength *is* the node's current presence; a separate attention axis with baseline behaviour belongs to the v2-experimental line only.

**D-06 — REJECT scope (First Draft Engine coastline vs Continuation 02 §11 "equivalent representations").** Whether a rejection suppresses only the topic or also its equivalents and neighbours was undefined, and model-inferred equivalence would have let inference decide what the owner meant to refuse. *Resolution (R6, per Continuation 07 §53):* refutation is topic-scoped only; no propagation to related topics or the parent territory; broader suppression is a separate owner operation.

**D-07 — RESTORE semantics undefined (Continuation 07 flag).** Continuation 07 introduced RESTORE without stating its effect on accumulated testimony. *Resolution (R6):* on restore, testimony persists — it is the owner's history — and status and strength reset to the owner-selected state (Chapters 22, 27).

**D-08 — Differential-probing mitigation too weak (Continuation 04 §31).** Rate limits and Lens-creation controls slow a probing attacker without bounding what they learn. *Resolution (R7):* disclosure eligibility (Continuation 02 §13) is the primary mitigation in Chapter 33; rate limits and grant-scope controls are secondary.

**D-09 — One rule, two places (Continuation 03 flag).** The comparison-inference leak and the Lens Compiler's generalized-label leak are the same failure. *Resolution (R7):* a single disclosure-eligibility rule is specified once (Chapter 18) and applied identically to comparison outputs (Chapters 20–21): a label or shared topic is eligible only if it does not trace to a single non-public node, unless that node owner explicitly approved the disclosure.

**D-10 — Edges had events but no command (Continuation 04 flag).** The replay envelope defined EDGE_CONFIRMED / EDGE_REJECTED events, but the correction command contract was topic-scoped only, leaving relationships with no testimony pathway. *Resolution (R9):* Chapter 22 specifies an edge variant of the correction command, and Chapter 25 carries it through the reducer; edges hold the same provenance discipline as nodes.

**D-11 — Provenance changes without an audit record (Continuation 05 flag).** The Testimony Ledger rightly records only human corrections, leaving PROPOSED and WITNESSED arrivals — the very things a Receipt must explain — with no auditable record. *Resolution (R10):* Chapter 24 specifies a non-testimony evidence-event stream (proposal arrivals, WITNESSED signals, provider attributions with provider id and fallback status). Evidence events never enter the testimony fold and cannot change provenance beyond PROPOSED or WITNESSED.

**D-12 — Erasability vs Determinism (Continuation 07 flag).** Erasing a single topic inside a surviving World breaks the replay digest chain: the sequence has a hole, and verification can never match again. *Resolution (R11):* tombstone semantics in Chapter 26 — partial erasure replaces the payload with a redaction marker preserving its sequence position; payloads are crypto-shredded; replay treats markers as defined no-ops and the digest chain remains verifiable. Whole-World deletion follows the erasure law unchanged.

**D-13 — "Unexplored" undefined (Continuation 06 flag).** New Frontier depended on a term no source defined. *Resolution (R12):* Chapter 20 carries an Edition 1.2 proposed definition — no node in either party's World at the shared resolution, reachable by exactly one surveyed edge from a node in Meet — marked as proposed and carried to Appendix C for ratification.

**D-14 — Baseline provenance risk (Continuation 02 flag).** A behaviour-learned attention baseline would let WITNESSED data re-enter the model as if it were testimony. *Resolution (R8, Chapter 13):* wherever a baseline is used, it is owner-set or derived from enduring affinity by a stated formula — never learned from behaviour.

### D.2 Optimizations applied

**D-15 — Q fenced (Continuation 04 §27).** The Draft Selector's correction-usefulness feature is defined as correction-*information* value — whether asking would clarify the World — and explicitly may not estimate emotional provocation. The original concept's "reaction value" phrasing is superseded by this fence wherever the two differ.

**D-16 — Testimony as a fold (Continuation 06 §44).** In the v2-experimental line, testimony is derived from ledger events rather than incremented by application code, making the value reproducible by anyone holding the ledger.

**D-17 — Two acceptance tests added (Chapter 36).** EXP-003 (a VERIFIED_RESOURCE stop traces to a validation record) and DELETE-002 (derived representations purged per the lineage registry), closing the two gaps in Continuation 04's matrix.

**D-18 — Funnel repaired (Chapter 37).** Edition 1.1 §14's funnel, garbled in its PDF rendering, is reproduced as a clean ordered sequence (Appendix A.1).

**D-19 — Pilot programme merged and made honest (Chapter 37).** Edition 1.1's release gates, Continuation 03's staged research (10 / 25 / 50, cluster recruitment at the 50 stage), and the model-quality metrics are combined into one programme, with every metric — including Draft Survival's 30–50% band — framed as a hypothesis, and Continuation 02's agreeable-vs-contrast draft experiment as the design for testing the core assumption.

**D-20 — Expedition content operations priced (Chapters 15, 38).** Validated-resource supply is treated as an operational cost centre: VERIFIED_RESOURCE requires a validation record, and cost per validated discovery is a tracked commercial metric.

**D-21 — Meaning-layer containment (Chapter 14).** Free-text "why" answers never leave the owner's World and never shape another user's draft, suggestions, or comparisons; Constellations publish only owner-authored labels; Perspective Exchange questions are generated only from material both parties authorized for that Encounter.

**D-22 — Appetite invariant (Appendix B, invariant 14).** Exploration appetite is owner-set only; no system action may raise it. This closes the seam through which an engagement dial could have entered the model.

**D-23 — Evaluation order pinned (Chapter 25).** The canonical order is materialize-decay-then-reduce: decay is materialized to the authoritative event time before the pure reducer applies, which is the ordering replay determinism depends on.

**D-24 — Decisions adopted; baseline frozen (Chapters 4, 41).** Continuation 04 §34's decisions are adopted as the Edition 1.2 baseline, and Edition 1.1 is frozen as the baseline of record against which this edition diffs.

### D.3 Audit integration — the Complete Project Audit (R19–R28)

**D-25 — Audit received during compilation.** The *Complete Project Audit* — a whole-project review of Edition 1.1 and the First Draft Engine against all seven development installments — arrived while Edition 1.2 was being compiled and was integrated as rulings R19–R28 rather than held for a later edition. The audit's editorial assessment is recorded here as its own judgment, not as a measured result: **concept originality 9/10; product definition 7/10; specification completeness 5/10; validated market demand unproven** — "Strong concept, incomplete specification, unvalidated market." Its 42-gap inventory is transcribed in full as the decision register of Appendix C. Its sixth technical issue — a signed append-only ledger versus the requirement of full deletion — was already reconciled by entry D-12 (tombstone semantics) and the erasure law of Chapter 26: the ledger is append-only during ordinary operation, and deletion is a separately authorized erasure process, never an ordinary correction.

**D-26 — Comparison privacy: Differ restricted to disclosed refutations (R19; audit §3, contradiction 5).** As first compiled, Chapter 20's Differ set was computed from both parties' refutation sets — which would let a comparison reveal that a topic had been privately rejected, contradicting the rule that refutations are private by default. *Resolution:* Differ surfaces only refutations the owner has explicitly disclosed for that comparison, via a Lens or coastline-disclosure grant. An undisclosed refutation makes the topic simply absent from comparison output — absent, and never inferable from the output's shape. Chapter 20's definition is revised accordingly.

**D-27 — Provisional sharing deferred (R22; audit §3, contradiction 2).** The First Draft Engine's Frontier Walk optionally showed visitors a host's dotted (unconfirmed) coastline; the Law of Testimony prohibits representing unconfirmed material as part of a person's World to others. *Resolution:* for the pilot, the Testimony Law governs — no Perspective contains a PROPOSED or WITNESSED node (Appendix B, invariant 20), and visitor-visible dotted coastlines are deferred, recorded as a deferred decision (Appendix C.12) rather than presented as pilot behaviour. Chapters 17–19 are written to this rule.

**D-28 — Seed definition settled (R20; audit §8).** "A deliberately saved discovery object" left a Seed's contents — link, topic, snapshot, note — undefined, with divergent privacy and retention consequences. *Resolution:* a Seed is a visitor-owned reference to a permitted discovery object (an Atlas topic id and/or an external resource reference) plus optional personal notes; it never contains copied private World state. On revocation, the visitor retains their own notes and any lawful public-resource bookmark — never a copy of the revoked Perspective. Applied in Chapters 3 and 19.

**D-29 — Onboarding reconciled (R21; audit §§3, 5).** Edition 1.1's First Light required five interests; the First Draft Engine allowed three or a single link (audit contradiction 1). *Resolution:* the minimum is three interests, or one link labelled low-coverage; five interests are the optional richer start; both are pilot test arms (Chapter 9). The audit's two missing experiences are also specified: the empty-World recovery path (manual topic entry, reset, re-draft from corrected seeds; refusal is never penalised and never framed as the user being hard to understand) and the returning-owner home rule (the existing World opens first; suggestions are optional, never a gate to access). Chapters 9 and 11.

**D-30 — Atlas refinement: attributes vs topics (R23; audit §9).** The original exclusion rule — sensitive identity categories absent from the Atlas by construction — conflated subject matter with personal attributes: it would have barred a topic such as the history of a religion for fear of inferring religious identity. *Resolution:* the Atlas excludes *attribute branches* — categories constituting a claim about the owner's identity (political affiliation, religious identity, health status as attributes). General educational topics *about* such domains are permissible topics; inferring an attribute from a topic is prohibited. Private free-text topics are owner-only and never auto-promoted to the shared Atlas. Chapter 10 and Appendix B, invariant 19.

**D-31 — Testimony presentation and metric discipline (R24; audit §§6, 13).** Unbounded testimony accumulation can be gamed by repetition, and becomes actively misleading if a tap count is rendered as certainty. *Resolution:* testimony is an action count and must never be rendered or described as certainty, authenticity, or strength of identity; the owner's latest explicit assertion is authoritative for current state; Chapter 6 records the four-way separation — action history / owner assertion / engagement history / current prominence — as a clarifying model, without changing testimony-v1 arithmetic. Draft Survival and Coastline Ratio are diagnostic only, never targets (Chapter 37). A meaningful visit does not require a Seed save; Seeds are a strong signal, not the definition (Chapters 19, 37).

**D-32 — Feature status labels adopted (R25; audit §10).** The six status labels (Concept / Specified / Implemented / Tested / Pilot validated / Production ready) are adopted as a front-matter convention of this Bible, and the Feature Status Register at D.4 applies them under the evidence discipline of this edition.

**D-33 — Product layers adopted (R28; audit §14).** The product is organised in three layers — **Layer 1, My World** (construct, recognize, correct, and control a World); **Layer 2, Share a View** (bounded Perspectives, visitor journeys, Seeds, SEE YOURS, permission-safe Comparison); **Layer 3, Explore Together** (Expeditions, Encounters, Constellations, Returning Tides, collaborative Worlds, portable Perspectives). Pilot scope is Layers 1–2; Layer 3 modules are status-labelled proposals. Chapters 4 and 39 carry the layering, and the minimum complete journey (First Light → correction → Lens → visit → Seed → SEE YOURS) is recorded at Appendix C, priority decision 2.

**D-34 — UNRESOLVED CONFLICT: explicit CONFIRM event vs BOOST → DECLARED (R27; audit §3, contradiction 3, and gap U02).** This conflict is logged, not resolved. *Position A (the audit):* BOOST upgrading a node's provenance to DECLARED conflates two distinct owner acts — affirming a topic's prominence and declaring it as one's own. The audit recommends an explicit CONFIRM event (and a separate confirmation action in the interface) so that declaration and confirmation keep separate meanings and separate testimony semantics. *Position B (Continuation 06 §47, the latest normative source):* the pure reducer specifies that BOOST sets provenance to DECLARED, with testimony +1.0 — a single, simple, replayable rule, continuous with the original First Draft Engine's operator table, under which BOOST is precisely the act by which a proposed or confirmed topic becomes declared-equivalent. *Disposition:* the normative text of this Bible keeps testimony-v1 exactly as Position B specifies (Chapters 7, 25); no reducer behaviour is changed by this edition. The audit's explicit-CONFIRM-event proposal is recorded here and at Appendix C (priority decision 4; gap U02) as a proposed amendment and an open founder decision. Resolving it will require a founder ruling and, if Position A prevails, a separately versioned reducer — never a silent edit to v1.

**D-35 — Coastline sharing and the growth story (audit §17), noted, not decided.** The audit observes two further divergences it asks be resolved deliberately rather than buried: the original concept treats refutation as first-class geography (potentially shareable as coastline), while later specifications suppress refuted topics from sharing entirely; and the original growth story (a World grows by walking someone else's coastline) is joined in the expansions by private Expeditions that grow a World without a visitor. Edition 1.2's pilot position is conservative on the first (D-26, D-27: refutations surface only under explicit disclosure grants) and permissive on the second (Expeditions are Layer 3 proposals, not the pilot's growth claim). Both divergences are recorded here as deliberate, revisitable positions — not as settled doctrine.

### D.4 Feature Status Register

Status labels per the front-matter convention. "Tested (reported)" rests solely on the reported v36 release evidence of Chapter 35. The label **Implemented** is deliberately unused anywhere in this register: the authoritative v36 source has not been inspected (Appendix C, gap E01), so no feature's implementation is asserted by this Bible.

| Feature | Status | Basis |
|---|---|---|
| First Light owner journey (bootstrap, correction) | Tested (reported) | v36.x reported simulations (Chapter 35) |
| Lens and Perspective publication | Tested (reported) | v36.x reported simulations (Chapter 35) |
| Visitor journey and Seeds (Edition 1.1 scope) | Tested (reported) | v36.x reported simulations (Chapter 35) |
| Invitations | Tested (reported) | v36.x reported simulations (Chapter 35) |
| Comparison (Edition 1.1 scope) | Tested (reported) | v36.x reported simulations (Chapter 35) |
| Testimony model and Deterministic Reducer (testimony-v1) | Specified | Chapters 7, 25 |
| World Schema v2.0 | Specified | Chapter 24 |
| Event-Replay Engine | Specified | Chapter 26 |
| Resolution Lens Compiler | Specified | Chapter 18 |
| Atlas v2.0 (hierarchy and relationship graph) | Specified | Chapter 10 |
| Draft Selector v2.0 | Specified | Chapter 29 |
| Encounter Engine and consent protocol | Specified | Chapter 21 |
| Expedition Engine (planner contract) | Specified | Chapter 15; content operations remain Concept |
| Cartographic Engine (map rendering semantics) | Concept | Chapter 12 |
| World Seasons (affinity / attention / appetite extensions) | Concept | Chapter 13; experimental |
| Constellations and the meaning layer | Concept | Chapter 14 |
| Continuity: Timeline and Returning Tides | Concept | Chapter 16 |
| World Swap, Shared Worlds (Layer 3 social forms) | Concept | Chapters 21, 39 |
| Algorithm Recipes | Concept | Chapter 3; excluded from the pilot |
| The World Protocol | Concept | Chapter 42; long-term research direction |

No feature is labelled Pilot validated or Production ready. The Replayable World gate (Chapter 36) stands at 0 of 10 reviewed, and the pilot programme of Chapter 37 has not run.

### D.5 Carried forward, unresolved by design

The known defect D-03 stands until testimony-v2 is adopted or v1 is amended through change control. The unresolved conflict D-34 (explicit CONFIRM event vs BOOST → DECLARED) stands as a founder decision; testimony-v1 as specified in Chapters 7 and 25 governs until it is resolved. The open decisions of Appendix C stand. The Replayable World gate (Chapter 36) stands at 0 of 10 reviewed. The Lens Compiler's formal information-flow model, named in Continuation 07 as the next specification phase, is specified functionally in Chapter 18; its formal adversarial treatment remains future work.

## Appendix E — Revision and evidence log

### E.1 Edition history

**Edition 1.0** — Original Product Bible. The original binary was not available in the runtime when Edition 1.1 was prepared; Edition 1.0 survives through its documented chapter structure and text as carried into Edition 1.1.

**Edition 1.1** (21 November 2026) — Revised and expanded successor to Edition 1.0: explicit release-evidence separation; API examples; N=20 adversarial coverage; idempotency race and revocation semantics; failure-injection requirements; readiness scorecard; clearer prototype-versus-production claims. Evidence sources: the Edition 1.0 chapter outline and text in conversation; prior v36.1–v36.3 release and simulation reports in conversation; direct inspection of the v9.8 algorithm-proof archive, its validation report, and its package manifest.

**Edition 1.2** (21 November 2026) — Compilation of the complete design record: Edition 1.1 as base layer; the First Draft Engine concept as the normative algorithmic source; the Concept Expansion and Continuations 02–07 incorporated per the chapter map; the complete-system review performed and its conflicts and optimizations logged in Appendix D; the rulings of that review applied throughout and cross-referenced to Appendix D entries.

### E.2 Source provenance for Edition 1.2

1. *SEE MY WORLD — Master Product Bible, Edition 1.1 (Updated)*, PDF, 21 November 2026 — base layer: 22 chapters and Appendices A–D.
2. *The First Draft Engine* — Gizmo's algorithmic concept document, 21 November 2026 — normative source for testimony-v1: correction arithmetic, testimony weights, half-lives, the three laws, the Refutation Bootstrap, Seed-Born Worlds.
3. *Concept Expansion — Living Perspective Engine* (§§1–9), 21 November 2026 — World Seasons, the meaning layer, Personal Constellations, discovery modes and objective, the social layer, the World Timeline, mathematics corrections, the four-stage build.
4. *Continuation 02 — Technical and Experiential Expansion* (§§10–15) — five-layer World Intelligence Model, Testimony Engine v2.0 framing, Atlas v2.0 starter taxonomy, the Lens Compiler and disclosure eligibility, module contracts, Milestone 2.
5. *Continuation 03 — Architecture & Experience* (§§16–24) — Cartographic, Expedition, Encounter, and Continuity engines; state machines; trust guarantees; research programme; Edition 1.2 chapter plan and release priorities.
6. *Continuation 04 — Engineering Blueprint* (§§25–35) — World State contract, Deterministic Testimony Reducer, Draft Selector v2.0, Relationship Graph, Expedition Planner, Encounter consent protocol and authorization matrix, privacy threat model, acceptance-test matrix, World Protocol, decisions table, build sequence.
7. *Continuation 05 — World Schema v2.0* (§§36–42) — PostgreSQL schema, restoration of the original testimony model, Testimony Ledger, transactional correction processing, migration strategy, acceptance-harness specification.
8. *Continuation 06 — Normative Algorithm Specification* (§§43–50) — five-dimension node model, v2-experimental arithmetic, testimony-v1 frozen as baseline, tidal mathematics, the pure reducer, the Lens projection invariant, comparison mathematics.
9. *Continuation 07 — Deterministic Replay* (§§51–58) — Event-Replay Engine, Five Laws of Event Integrity, Refutation Protocol and RESTORE, buoy semantics and REMOVE_BUOY, deterministic time policy (tidal-v1), algorithm versioning and migration, replay verification, the Replayable World gate.
10. The reconciliation record (Gizmo's critique of Edition 1.1 and the per-continuation flags, 21 November 2026) — source of the rulings applied in Appendix D.
11. *Complete Project Audit* (21 November 2026, received during this edition's compilation) — whole-project review: 42-gap inventory (transcribed as Appendix C), five contradictions plus one technical issue, the feature status scheme adopted in the front matter and Appendix D.4, the three-layer product organisation, and the 12 priority decisions. Integrated via rulings R19–R28 (Appendix D.3); its correction-semantics conflict with Continuation 06 is logged unresolved at entry D-34.

### E.3 Evidence statement

Nothing in Edition 1.2 upgrades a reported result into a verified one. The v36.2 and v36.3 simulation results are reported by their release documents; the v36.3 source archive was not present in this runtime for direct verification. The v9.8 archive was directly inspected and belongs to a separate lineage. The 104-case harness of Chapter 36 is a specification, not a result. The buoy arithmetic example carried in the development record (0.6 × 2^(−90/21) ≈ 0.031; visible strength max(0.15, 0.031) = 0.150) was independently re-derived during compilation and is correct.
