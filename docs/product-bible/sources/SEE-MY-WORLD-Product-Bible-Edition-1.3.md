# SEE MY WORLD

## Master Product Bible · Edition 1.3

**Compiled design document — Edition 1.3**

Product vision • user journeys • data model • algorithms • consent • architecture • presentation • creator and literary worlds • education • QA • launch gates

Compiled 21 November 2026 | Controlled specification | Internal distribution

**THE MODEL SERVES THE PERSON.**

---

## Edition 1.3 notes

Edition 1.3 is a compilation and revision of the complete SEE MY WORLD design record. It is built on Edition 1.2, whose 42 chapters and five appendices it carries forward, and it integrates the development documents received after Edition 1.2 was delivered.

**Baseline of record.** Edition 1.2 is frozen as the previous baseline of record. Edition 1.3 diffs against Edition 1.2 explicitly, so that no future edition inherits an unrecorded baseline. Every integration, conflict, and optimization applied in this edition is logged in Appendix D (§D.6).

**What Edition 1.3 changes.** (1) It weaves six amendments into Chapters 1–42 without altering their normative substance: the category positioning as a user-governed Perspective Network (Chapters 1, 38); the Perspective Passport as the primary human-facing permission experience (Chapter 17); controlled comparisons against simpler alternatives — the competitive prototype challenge — with the source scorecard recorded as hypotheses (Chapter 37); the signature naming layer, as product language naming existing mechanisms (Chapter 3); the freeze / reset / simplify owner controls (Chapters 12, 16); and the clarification that the core World model admits no paid promotion or sponsored placement (Chapter 38). One further amendment is recorded in Chapter 30 as Pass 3 engineering reconciliation input, explicitly not canon. (2) It adds **Part VIII — The Presentation Layer** (Chapters 43–48), compiling Continuations 11–12: the third independent system (Worldprint = meaning, Presentation = expression, Lens = permission), the Presentation Studio and layout engine, the Presentation object and dual-revision publication, visual bindings with the authoring/compiled surface distinction stated explicitly, the Soundscape, and the Presentation Compiler with its Render Manifest contract. (3) It adds **Part IX — Creator Universes & Live Worlds** (Chapters 49–54), compiling Continuation 13: the Creator Content Graph held strictly apart from the Personal Worldprint, live events inside published Perspectives, World Portals, the creator economy under the rule that payment entitlements are not privacy grants, and the creator pilot — with Continuation 13 §129's three decisions (streaming strategy, first creator category, monetization rollout) carried open. (4) It adds **Part X — Literary Universes & Storyworlds** (Chapters 55–62), compiling Continuations 15–17: the Storyworld Engine and Canon Graph, Canon Verification, canon-aware characters, the Reader Passport, the Rights and Licensing Engine, the Universe Pass and Entitlement Engine, franchise licensing and the Free Worlds Initiative. (5) It adds **Part XI — SEE MY WORLD: Education — The Living Classroom** (Chapters 63–70), compiling Continuation 19, which arrived while this edition was being compiled and was integrated under the founder's compile-all instruction: a fourth product pillar governed by a fourth authority regime — evidence and scholarly review — with the Historical Evidence Engine, Historical Figure Encounters, the Pantheon and Civilization Engines, the Teacher Studio, the School Integration Layer, and the student-privacy firewall. (6) It adds **Part XII — The Immersive World** (Chapters 71–77), compiling Continuation 20, which arrived with Continuation 19's integration still in progress: the Immersive World Runtime, adopted as a formal architectural proposal — the shared experiential foundation for all pillars, a runtime layer that consumes authorized manifests and is neither a pillar nor an authority regime — with the Immersion Ladder (all levels explicitly conceptual), the Living Environment, Memory & Consequence, Presence, Conversation, Agency, and Social Presence engines, the Living Artifact System, the Reality Lens, and the Immersion Director. (7) It adds **Part XIII — Era Worlds** (Chapters 78–83), compiling Continuation 21: the fifth experiential pillar — time as a World coordinate (WHEN × WHERE × WHO) — with the Everyday Life Engine, the Decade Simulator, the Cultural Atmosphere, Parallel History, and Time Shift engines, the Historical Persona Engine, the Era Artifact Registry, and the EraWorld contracts. The source document's §233/§248 pillar-count discrepancy is recorded in Appendix D, not silently harmonized. (8) It adds **Appendix F — Competitive Evidence Register** and **Appendix G — Glossary of Edition 1.3 terms**, promotes the student-privacy firewall to Appendix B invariants 24–27 and the immersion/era rules to invariants 28–30, and records the 238-case educational acceptance suite and the Immersion Acceptance Framework in Appendix E — the suite as planned and unexecuted, the framework as a framework with no case count.

**Founder decisions are compiled, not made.** The unresolved CONFIRM conflict (Appendix D, entry D-34), the Q-definition conflict (Appendix C, §C.11), Continuation 13 §129's three decisions, and every still-open item of Appendix C remain open in this edition, with positions stated fairly. No text in Edition 1.3 presents them as settled. Testimony-v1 is untouched: its weights, half-lives, buoy floor, submersion threshold, and reducer semantics are reproduced exactly as Edition 1.2 states them.

**Evidence discipline.** This Bible distinguishes, throughout, between what is specified, what is proposed, and what has been tested. Test results from the v36.x release line are *reported*, never independently verified in this runtime. The 104-case acceptance harness (Chapter 36), the 130-case Presentation suite (Chapter 48), and the 238-case educational suite (Chapter 70) are all planned, and no case in any of them has been executed; the Immersion Acceptance Framework (Chapter 77) is an evaluation framework whose source specifies no case count, and none is claimed for it. No chapter of Edition 1.3 claims that any post-Edition-1.1 module is implemented. All prices, funnel figures, and economics models appearing in Parts IX–XI are labelled illustrative or hypothetical where they appear; institutional pricing for the education pillar is deliberately unset in its source document and is recorded as undecided.

**Feature status labels.** Every major feature in this Bible carries one of six status labels, adopted as an Edition 1.2 convention and carried forward: **Concept** (proposed behaviour), **Specified** (normative contract stated in this Bible), **Implemented** (exists in a particular code revision), **Tested** (acceptance evidence recorded), **Pilot validated** (tested with actual participants), **Production ready** (release gates satisfied). The Feature Status Register (Appendix D.4) applies these labels to the major features, including all features introduced by Parts VIII–XI. Under this Bible's evidence discipline, no post-Edition-1.1 module is labelled Implemented or Tested; where Edition 1.1-scope features rest on the v36 release evidence, the label is marked "(reported)".

**How to read this document.** Part I states what the product is and the decisions that govern it. Part II specifies the algorithm normatively. Parts III and IV specify the experience and the sharing model. Part V specifies the engineering contracts. Part VI states the trust architecture and the evidence. Part VII states the strategy. Parts VIII–XIII specify the post-1.2 expansion lines — presentation, creator universes, literary universes, education, the immersive foundation, and era worlds — each independently governed and each labelled with its scope. Appendices A–G carry the event dictionary, the canonical invariants, the open decisions, the system review and optimization log, the revision and evidence log, the competitive evidence register, and the glossary of Edition 1.3 terms.

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

**Part VIII — The Presentation Layer**
Chapter 43 — The Presentation Layer: three systems, one experience · Chapter 44 — The Presentation Studio and the layout engine · Chapter 45 — The Presentation object and publication · Chapter 46 — Visual bindings: authoring surface and compiled surface · Chapter 47 — Soundscape · Chapter 48 — The Presentation Compiler, privacy, and pilot requirements

**Part IX — Creator Universes & Live Worlds**
Chapter 49 — Creator Universes: the foundational separation · Chapter 50 — The Creator Content Graph · Chapter 51 — Live Worlds and events · Chapter 52 — World Portals and collaborative Worlds · Chapter 53 — The creator economy and streaming · Chapter 54 — The creator pilot and the three open decisions

**Part X — Literary Universes & Storyworlds**
Chapter 55 — Literary Worlds and the Storyworld Engine · Chapter 56 — The Book-to-World Engine and Canon Verification · Chapter 57 — Canon-aware characters, narrative modes, and the Reader Passport · Chapter 58 — Rights and licensing · Chapter 59 — Universe Pass and the Entitlement Engine · Chapter 60 — Franchise licensing and subscription economics · Chapter 61 — The Free Worlds Initiative · Chapter 62 — The Vesper vertical slice and Storyworld acceptance

**Part XI — SEE MY WORLD: Education — The Living Classroom**
Chapter 63 — The Living Classroom: a fourth authority regime · Chapter 64 — The Temporal Knowledge Graph and the Historical Evidence Engine · Chapter 65 — Historical Figure Encounters · Chapter 66 — The Pantheon Engine and the Civilization Engine · Chapter 67 — Teacher Studio, Classroom Expeditions, and assessment · Chapter 68 — The School Integration Layer and the student-privacy firewall · Chapter 69 — Scholar Studio and the Educational Knowledge Graph · Chapter 70 — Institutional licensing and the Ancient Greece pilot

**Part XII — The Immersive World**
Chapter 71 — The Immersive World: seven dimensions and the Immersion Ladder · Chapter 72 — The Living Environment Engine · Chapter 73 — Memory, Consequence, and Presence · Chapter 74 — The Conversation Engine and the Sensory Director · Chapter 75 — Agency, Artifacts, and Social Presence · Chapter 76 — The Reality Lens and the Immersive World Runtime · Chapter 77 — Immersion prototypes, priorities, and the shared foundation

**Part XIII — Era Worlds**
Chapter 78 — Era Worlds: time as a World coordinate · Chapter 79 — The Everyday Life Engine and the Decade Simulator · Chapter 80 — Atmosphere, Parallel History, and Time Shift · Chapter 81 — Historical Personas and Event Portals · Chapter 82 — Era artifacts, rights, and contracts · Chapter 83 — Era Worlds across the pillars: integration and roadmap

**Appendices**
Appendix A — Event dictionary · Appendix B — Canonical invariants · Appendix C — Open decisions · Appendix D — System review and optimization log · Appendix E — Revision and evidence log · Appendix F — Competitive Evidence Register · Appendix G — Glossary of Edition 1.3 terms

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

**Category positioning (Edition 1.3).** The category this Bible specifies is the **user-governed Perspective Network**: not an interest-map app, and not a social network with a map attached. The map is a surface; the product is the governed network of Worlds, Lenses, and Perspectives through which a person authors what their curiosity means, controls what of it may be seen, and meets other people only through what both sides have authorized. Every competitive claim in this Bible is made for that category, and the Competitive Evidence Register (Appendix F) records what existing products verifiably do, so the claim never rests on a caricature of them.

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

**Signature product language** *(new in Edition 1.3).* Five names from the development line are adopted as product language. Each names a mechanism this Bible already specifies; none introduces new semantics, and where a name and a mechanism differ, the mechanism governs.

| Signature name | The mechanism it names |
|---|---|
| Testimony Compass | The provenance-and-Receipts explanation surface: every element of a World can answer why it is here, who decided it belongs, and what can be changed (Chapters 3, 34) |
| Perspective Passport | The human-facing permission experience over the Lens and Perspective (Chapter 17, §17.7) |
| Reciprocity Bridge | The Encounter: finite, mutually authorized discovery between two Worlds (Chapter 21) |
| The Unfinished World | The cartographic philosophy that a World is allowed to change — affirmed, proposed, exploring, and faded states are all legitimate (Chapters 12–13) |
| Seed-Born Worlds | The visitor bootstrap: a World begun from Seeds deliberately saved in another's Perspective (Chapter 19) |

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

All three views are powered by the **same underlying World state**. No view may run a separate algorithm or invent a different understanding of the person because the visualisation changed. Switching views changes what is emphasised, never what is true: a topic confirmed in Territory View is confirmed in World View; a merely proposed relationship remains dotted in Constellation View; a refuted topic appears in no view as land. Divergence between views is a rendering defect, never a discovery about the owner. For a visitor, each view is bounded by the Lens at its granted resolution (Chapter 9). The owner's lifecycle controls over the World's state and presentation — freeze, reset, simplify — are specified in Chapter 16 (§16.6).

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

### 16.6 Freeze, reset, simplify (Edition 1.3)

The Unfinished World proposal (Chapter 3) adds three owner controls over a World's lifecycle, specified here as proposals of Edition 1.3 (status: Concept). None of them writes testimony; all three operate on state and presentation, and all three remain subject to §16.4's prohibition on resurrection and §16.5's REJECT fence.

- **Freeze.** The owner suspends tidal change and presentational drift: the World holds its current materialized state until unfrozen. Freezing changes nothing in the Ledger; decay simply does not advance while the freeze holds, and resumes from the frozen state on release.
- **Reset.** The owner returns the World to a chosen earlier revision, computed by the replay machinery of Chapter 26 as a new state derived from retained history. Reset is not a rewriting of the Ledger, and it can never restore what deletion has reached: material erased under Chapters 24 and 26 is absent from retained history and stays absent.
- **Simplify.** The owner contracts the World's presentation to its declared core — declared and confirmed nodes, at the owner's chosen resolution — without deleting testimony or history. Simplification is presentational and reversible; the full World remains, unshown rather than removed.

The three controls answer a single ownership question the earlier chapters left open: a World the owner cannot pause, restore, or quiet is a World the system owns in practice, whatever the invariants say.

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


### 17.7 The Perspective Passport (Edition 1.3)

The **Perspective Passport** is the primary human-facing permission experience over the Lens semantics of this chapter and the compiler of Chapter 18. A Passport is a human-readable summary of what a visitor is authorized to explore: the approved subjects, the detail level, the recipient, the expiration, and whether comparison is permitted. The visitor receives the Passport's authorized projection — not access to the underlying World.

Two design rules govern the experience. **Object-based first, resolution second:** the owner chooses *what* they want to show before they are asked at what resolution, because people reason about subjects, not about zoom levels; the resolution model of §17.3 then applies to the chosen objects. **Literal preview:** the approval surface is §17.2's normative preview — the exact visible result, rendered from the compiled payload itself. What the owner approves in the preview is the most any visitor can receive; the Passport adds no disclosure beyond it and hides no disclosure within it.

The Passport changes no semantics in this chapter or Chapter 18. It is the experience layer through which the Lens is created, understood, and revoked — adopted as the direction for the Pass 2 UX specification, in direct answer to the audit's sharing-comprehension concern (Appendix C).

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

An Encounter is the voluntary exploration of an authorised connection between two Worlds: a two-party authorisation system, not a social-matching service. It begins not with a compatibility score or a judgment about a relationship, but with a question: *What could these two people discover together?* Each participant retains independent control of their World throughout, and no Encounter creates any standing right of access that survives it. In the signature language of Chapter 3, the Encounter is the **Reciprocity Bridge**: finite, mutually authorized discovery — never a compatibility score, and never a standing relationship inferred from one.

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

### 30.4 Pass 3 reconciliation inputs (not canon)

The Originality Lab's implementation recommendations are recorded here as inputs to the Pass 3 engineering reconciliation — **not** as decisions of this Bible and not as canon: a responsive web application first; a modular monolith with clear domain boundaries; revision-keyed private caches with strict invalidation; relational and text search before any specialized search infrastructure. They are consistent with Chapter 24's persistence model and Continuation 05's PostgreSQL candidacy, and they bind nothing: adoption, rejection, or amendment of each is Pass 3 work, recorded through change control (Chapter 41) when it happens.

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

### 37.7 Controlled comparisons and the competitive prototype challenge (Edition 1.3)

Edition 1.3 adds a comparative discipline to the research programme: before a complex feature is credited with value, the programme compares SEE MY WORLD against **simpler alternatives** — a static interest profile, a shared collection, a simple list of overlapping interests — on the same tasks, measuring recognition, trust, disclosure comprehension, and meaningful discovery. The World model's extra complexity must earn its place against the simpler thing, in the open, or the simpler thing wins.

The Originality Lab's competitive scorecard is recorded here as **hypotheses**, in the sense of §37.4 — expectations to be tested, not gates and not thresholds: first World creation at a median under 5 minutes; at least 80% of owners reporting their corrected World feels representative; at least 95% correctly identifying what a visitor can see in scenario tests; zero known critical unauthorized disclosures; at least 50% of visits reported meaningful; at least 30% of invited pairs completing a mutual exploration; at least 50% of participants expressing a concrete reason to return. Ratification of any figure as a pilot gate is a founder decision (Appendix C); until then the figures steer the research design and nothing else.
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

### 38.4 Edition 1.3 commercial clarifications

Two clarifications from the post-1.2 development line are adopted into the commercial thesis. **First, the category:** the product competes as a user-governed Perspective Network (Chapter 1) — a category defined by governed representation and authorized sharing — not as an interest-map application and not as a social feed; competitive comparisons in this Bible are drawn against that category (Appendix F). **Second, no sponsored placement:** the core World model admits no paid promotion and no sponsored topic placement. A sponsored topic inside a person's World would put commercial influence inside the owner's governed representation — the one place the product's thesis (§38.2) says influence may not go — and would do so invisibly, since a promoted topic is indistinguishable from a proposed one unless labelled, and labelling does not cure the conflict. Monetization in every part of this Bible is therefore by subscription, entitlement, licensing, and service — never by placement inside a World.

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
# Part VIII — The Presentation Layer

Part VIII specifies how a World is expressed, as distinct from what it means and what may be shared: **Worldprint = meaning, Presentation = expression, Lens = permission, Perspective = the authorized experience.** The Worldprint records the owner's affirmed interests and testimony; the Presentation records how the owner wants that World to look, sound, move, and welcome a visitor; the Lens determines what may be shared, at what resolution, and with whom; a Perspective is what results when an approved Presentation is applied, through compilation, to a Lens-authorized projection for a particular visitor. No system may do another's work. All material in this part is **Specified** where a normative contract is stated and **Concept** elsewhere. The Presentation Layer is post-pilot Pass 2 UX scope (register entries A-12 and A-14, from Continuations 11 and 12); it was not part of Edition 1.2, whose Chapter 12 specifies the map's visual semantics only. Nothing in this part is implemented or tested, and no acceptance case described here has been executed.

## Chapter 43 — The Presentation Layer: three systems, one experience

This chapter establishes the Presentation Layer as a third independent system and its governing principle. Earlier parts gave the owner authority over meaning and, through Chapters 17 and 18, over permission. This part extends that authority to expression. It is bounded: for a visitor, Presentation operates only on an authorized projection, never on the private Worldprint directly, and it never changes what the Worldprint says.

### 43.1 The separation

The three systems must remain independent but interoperable (§91): the Worldprint represents the owner's affirmed interests, the Presentation Layer expresses how the owner wants them experienced, and the Lens determines what may be shared.

Independence is concrete. Presentation data is stored, revised, and compiled separately from Worldprint data (Chapter 45). A change of colour, layout, material, or soundtrack is not a change of testimony and must not trigger a World graph migration or any correction operation; correction operators and their arithmetic are specified in Chapter 7 and are not restated here. Conversely, a Worldprint change does not by itself rewrite a layout or theme. The systems meet only at defined points: the Lens Compiler authorizes a projection, the Presentation Compiler (Chapter 48) applies an approved Presentation revision to it, and the result is a Perspective.

A Presentation must also be compilable against any projection the Lens may lawfully produce, including a reduced projection after a Lens is narrowed or revoked. Where it depends on data a grant does not permit, compilation must degrade under Chapters 44, 46, and 48 — omission, an approved fallback, or a lower-resolution representation — never by retaining the data and hiding it in the rendering layer.

### 43.2 Presentation is itself disclosable data

The central refinement in §91 is that presentation data must be treated as potentially revealing information. A theme name, module title, image, soundtrack, hidden layout region, or custom styling asset can disclose something about the owner even when no private node is included — an empty region shaped like what it conceals, a playlist title naming a private interest, an image identifier encoding a topic.

Therefore the Lens Compiler must authorize the presentation itself, not only the underlying graph — a direct extension of this Bible's disclosure-eligibility discipline, covering assets, module configurations, labels, and bindings. Chapter 48 carries the consequence into compilation, the threat model, and testing.

### 43.3 The Creative Ownership Principle

Section 97 names a second kind of authority:

- **Meaning** — what belongs in my World, what I reject, and what I am exploring.
- **Expression** — how my World looks, sounds, moves, and welcomes visitors.

Neither kind of authorship should override the other. A theme must not alter testimony. A model update must not destroy a carefully arranged layout. A Lens must not expose private content simply because it appears in a decorative module.

The goal is **maximum creative freedom within clear safety and interoperability constraints**. Custom HTML and CSS, where ever admitted (deferred for the pilot), cannot fetch private data, conceal mandatory privacy controls, impersonate the application, or break accessibility. Equivalent constraints apply throughout: bindings are a controlled language (Chapter 46), audio requires a gesture and a persistent mute (Chapter 47), and advanced creator facilities are deferred until a sandbox exists (Chapter 48). These restrictions protect the owner's freedom: a World that can leak, impersonate, or exclude is not fully under its owner's control.

### 43.4 Revised positioning: a user-authored social world

Section 98 revises the positioning: with presentation authorship, SEE MY WORLD has the potential to become **a user-authored social world where people control both their personal representation and the experience of visiting it.**

The positioning is a synthesis, not a claim of invention: MySpace's expressive profile ownership, Obsidian's connected information, Are.na's curiosity-driven discovery, visual world-building tools' creative freedom, and privacy-first systems' scoped disclosure, integrated into a coherent, accessible, permission-governed social experience. Continuation 12, §112, extends it into three forms of authorship — of meaning, of expression, and of access. This section is Concept: intended product identity, not market validation, and it settles no wider positioning decision reserved elsewhere.

### 43.5 Scope of this part

This part does not respecify Chapter 12's visual semantics, Chapters 17 and 18's permission semantics, or Part II's testimony. Where presentation and the Lens meet, the Lens governs permission in every case of doubt.

## Chapter 44 — The Presentation Studio and the layout engine

This chapter specifies the Studio, in three levels, and the modular layout engine, in three modes. The Studio is private and owner-side; its drafts are not publications and disclose nothing until Chapter 45's publication operation and Chapter 48's compilation have run. Level governs how much the owner may control; mode governs how layout is composed.

### 44.1 Studio levels

Section 92 derives three levels from the source designs:

| Level | Name | Scope | Status |
|---|---|---|---|
| Level 1 | Quick Style | Select a visual world, change its colours, choose typography, and apply a soundtrack. Designed for a beautiful result in minutes. | Core |
| Level 2 | World Studio | Customize territories, nodes, lighting, motion, modular layouts, and model-driven visual bindings. | Core |
| Level 3 | Creator Mode | Advanced styling, custom assets, reusable components, and eventually community themes. Requires stricter sandboxing and validation. | Future |

Quick Style and World Studio are Core; Creator Mode is Future, its facilities deferred in Chapter 48. The progression is one of increasing control, not correctness: a World styled only through Quick Style must be functionally equivalent to any other in testimony, disclosure, and accessibility (§93).

The Studio concept material illustrates World Studio with territory materials (Islands, Stars, Contours), palettes (Midnight, Dawn, Emerald), a node glow control, and an ambient motion control. It is illustrative prototype content, not a normative control list. One rule it carries is normative: production playback must respect reduced-motion settings, the owner's publication policy, and the visitor's accessibility preferences, as combined by the compiler (Chapter 48).

### 44.2 Layout modes

Section 93 recommends a modular layout engine with three presentation modes.

| Mode | Behavior | Best for |
|---|---|---|
| Guided | Responsive templates with movable sections | New users |
| Grid Studio | Drag, resize, nest, and reorder modules | Most creators |
| Advanced | Validated custom components and styling | Experienced designers |

Owners should be able to create entirely different-looking Worlds from the same graph — a hand-drawn explorer's journal, a luminous starfield, an architectural museum — all functionally equivalent in testimony, disclosure, and accessibility. Difference of information, permission, or operability between appearances is a defect.

Responsive behaviour is part of the layout contract. Continuation 12, §105, specifies a constrained grid model: a placement carries a desktop position and span, an optional tablet order and span, and a mobile order with an optional collapsed state. The system must validate that modules do not overlap in ways that obscure controls, create unreachable content, or break the accessible reading order. Mobile layout must reorganize, not merely shrink, the experience, under the same disclosure contract across breakpoints (Chapter 48).

### 44.3 Module contracts, disclosure eligibility, and fallbacks

A module is the unit of layout: a placed, configured component that reads declared data and renders it in its region. Under §93 each module needs more than a type and a position: its contract must specify its data dependencies, disclosure eligibility, supported breakpoints, accessible reading order, fallback behaviour, and whether it may contain owner-authored content.

The fallback rule is normative. **A module that cannot safely render under a Lens must be omitted or replaced with an explicitly approved fallback — never left as a suggestive empty space that reveals hidden content.** An empty region shaped like what it conceals is itself a disclosure. Compilation must therefore reflow layout after filtering (Chapter 48), so omission leaves no silhouette; an approved fallback is a defined substitute carrying only authorized information, not a placeholder announcing a withheld original. Chapter 48 (§104) carries the same rule into the compiler, with a fixed registry of built-in modules; third-party modules are deferred.

### 44.4 Editor workspaces, drafts, and publishing

Continuation 12, §103, divides the Studio into workspaces for the aspects an owner edits — in the source concept, Theme, Layout, Bindings, and Sound. The detailed interaction specification (drag-and-drop editing, theme presets) is named in §112 as the next development phase, the World Studio Interaction and Publishing Specification, and has not been written; only the properties already determined are specified here.

Three are normative: changes are preserved as **private drafts**, visible to no visitor; drafts carry **explicit save and restore controls**, never occurring as a side effect of navigation or of a system update; and **publishing is a separate operation**, requiring Chapter 45's preview and approval and producing the only artefact a visitor may receive.

### 44.5 Pilot scope caution

The Studio's place in the pilot is not settled here. Chapter 48's pilot table (§99) includes a Theme Studio, expanding the pilot build beyond Edition 1.2's scope, and the register records the caution explicitly: **adding a Studio to the pilot build is an expansion Bobby must ratify.** The source self-mitigates — Quick Style as the default route, the advanced facilities deferred — but mitigation is not ratification. The pilot table is therefore recorded as proposed, not adopted.

## Chapter 45 — The Presentation object and publication

This chapter specifies the Presentation as a data object: its interface, independent revision history, assets, and publication policy. The governing idea is separation with binding: a Presentation is revised independently of the Worldprint, but a published Perspective is bound to the exact revisions of both, so what a visitor receives can be traced to what the owner approved.

### 45.1 The Presentation object

Section 94 extends the original interface with independent revisioning, assets, and explicit publication rules, reproduced verbatim:

```ts
interface Presentation {
  version: "presentation-v1";
  revision: number;
  theme: Theme;
  layout: Layout;
  modules: ModuleInstance[];
  soundscape?: Soundscape;
  bindings: VisualBinding[];
  assets: PresentationAsset[];
  accessibility: AccessibilityPolicy;
  publication: PublicationPolicy;
  lastEdited: string;
}
interface PublicationPolicy {
  publishMode: "EXPLICIT_SNAPSHOT";
  allowVisitorAudio: boolean;
  allowVisitorMotion: boolean;
  requirePreviewApproval: true;
}
interface PresentationAsset {
  assetId: string;
  kind: "IMAGE" | "FONT" | "AUDIO";
  visibility: "PRIVATE" | "SHARE_ELIGIBLE";
  contentDigest: string;
}
```

The object is declarative: theme, layout, module instances, an optional soundscape (Chapter 47), visual bindings (Chapter 46), assets, an accessibility policy, and a publication policy. It carries no testimony, node state, or grant — those belong to the Worldprint and the Lens, and their absence is part of Chapter 43's separation. Its bindings are authoring bindings (Chapter 46): inputs to compilation, not instructions delivered to a visitor.

### 45.2 Independent Presentation revisioning

The Presentation revision is independent of the Worldprint revision (§94). Changing a colour, moving a module, or replacing an image modifies no testimony and triggers no World graph migration; every saved Presentation change advances its own counter and no other. Conversely, a Worldprint revision does not advance the Presentation revision, though it may make a Presentation unpublishable against a new projection until the owner reviews it — a publication question, not a revision question. Without independent revisioning, neither system could be restored, compared, or approved on its own.

### 45.3 Assets: visibility and digests

An asset carries an identifier, a kind, a visibility, and a content digest. **PRIVATE** assets must never be delivered to a visitor. **SHARE_ELIGIBLE** assets may be considered for delivery — eligibility is not publication: delivery requires Lens authorization of the element using it, approval under §45.4, and inclusion in the render manifest as an authorized asset (Chapter 48).

The content digest binds the record to the exact bytes approved; changed content has a changed digest, and an earlier approval does not extend to it. A digest is not an authorization token. Visitor-facing references must be opaque authorized references, not identifiers encoding private information.

### 45.4 Publication policy and the dual-revision rule

Publication is governed by the `PublicationPolicy` on the Presentation itself. `publishMode` is `EXPLICIT_SNAPSHOT`: a deliberate snapshot of an approved Presentation revision applied to a specified World source revision, never a live view drifting as the owner edits. `requirePreviewApproval` is `true`, a literal requirement: no publication proceeds without approval of the preview, and the exact visitor preview is mandatory in the pilot (Chapter 48). `allowVisitorAudio` and `allowVisitorMotion` record the owner's visitor permissions; they gate, but do not compel, an experience still subject to the visitor's accessibility preferences and to Chapter 47's audio rules.

The dual-revision rule (§94) is normative: **a published Perspective records both its World source revision and its Presentation revision.** The register (A-12) completes it: **Perspective reproducibility is a function of World revision + Presentation revision + Lens version.** If any of the three differs, the result is a different publication. The Render Manifest (Chapter 48) carries this binding — `worldRevision`, `presentationRevision`, `atlasVersion` — with the publication revision.

### 45.5 Theme versioning and recovery

Section 108 specifies independent Presentation revision history as the recovery mechanism for creative work.

- A Presentation's revision history is its own (§45.2).
- **Restore creates a new revision; it never overwrites.** The restored-from revision remains in the record; the restore becomes the newest revision.
- A restore does not change testimony, Atlas state, or previously published Perspectives.
- **Published Perspectives stay bound to their approved revision.** A Perspective published against revision *n* keeps that design even after further edits or a restore; republishing under a newer revision is a new publication, subject again to preview and approval.

The source illustrates this with three entries — a default World, a celestial constellation design, a midnight archipelago design — where restoring the second creates a fourth revision rather than rewriting the third. Theme revision history and restore are included in the pilot requirements (Chapter 48).

## Chapter 46 — Visual bindings: authoring surface and compiled surface

This chapter specifies visual bindings — the controlled language by which properties of a World drive its rendering (node scale, glow, outline, territory material). Its central point is a distinction between two binding surfaces the source continuations define separately: read without it they appear to conflict; read with it, they describe two ends of one compilation.

### 46.1 Bindings as a controlled language

Section 95 introduces bindings as a small, inspectable binding language in place of arbitrary script. A binding declares a source, a target, and a named transform, and can be enabled or disabled. Being declarative, it can be reviewed by the owner, validated before it runs, and assessed by the compiler — from the declaration alone — for the data it needs and whether a grant permits it. Arbitrary JavaScript, arbitrary computation, and undeclared data access are excluded by construction (see Chapter 48's dependency rule).

### 46.2 The two-layer distinction: authoring bindings and compiled bindings

**This distinction is normative for this part, and the two surfaces must not be conflated.**

**Layer 1 — the authoring surface (Continuation 11, §95).** The binding an owner writes in the Studio uses owner-side sources naming properties of the owner's own World:

```ts
interface VisualBinding {
  bindingId: string;
  source:
    | "NODE_STRENGTH"
    | "NODE_PROVENANCE"
    | "NODE_BUOY"
    | "NODE_TIDAL_STATE";
  target:
    | "NODE_SCALE"
    | "NODE_GLOW"
    | "NODE_OUTLINE"
    | "TERRITORY_MATERIAL";
  transformId: string;
  enabled: boolean;
}
```

These sources are valid inside the private World, where the owner is entitled to their own strength, provenance, buoy, and tidal state and may bind appearance to them for their own view; a strength-to-glow binding, for example, may use a normalized curve with a configurable minimum and maximum. The authoring surface is expression.

**Layer 2 — the compiled surface (Continuation 12, §106).** The binding that reaches a visitor is not the authoring binding. Compilation rewrites each authoring binding against the authorized projection, and the compiled binding may draw only on public projection fields:

```ts
type BindingSource =
  | "PUBLIC_PROMINENCE_BAND"
  | "PUBLIC_ASSERTION_STATE"
  | "PUBLIC_EXPLORATION_STATE";
type BindingTarget =
  | "NODE_SCALE"
  | "NODE_GLOW"
  | "NODE_OUTLINE"
  | "TERRITORY_MATERIAL";
interface CompiledBinding {
  source: BindingSource;
  target: BindingTarget;
  transform:
    | "LINEAR_CLAMPED"
    | "THREE_BAND"
    | "STATE_TO_STYLE";
}
```

The visitor-facing compiler does not expose raw private strength or testimony. **Authoring bindings compile down to projection fields**: `NODE_STRENGTH` compiles to `PUBLIC_PROMINENCE_BAND`; provenance and related state compile to `PUBLIC_ASSERTION_STATE` or `PUBLIC_EXPLORATION_STATE`, as the projection provides. The compiled transform set is likewise closed — `LINEAR_CLAMPED`, `THREE_BAND`, `STATE_TO_STYLE`. The register's reconciliation note (A-14) states the reading adopted here: §95 defines the authoring surface, §106 the compiled visitor surface, and there is no conflict between them.

### 46.3 Disclosure-safe quantization

The privacy catch in §95 governs §46.2: a public animation must never encode a private numeric strength the Lens does not authorize; a glow varying continuously with it would transmit it to any visitor who measured it.

Public bindings therefore use disclosure-safe quantization. The compiled prominence source is a three-level band, rendered in the owner's chosen treatment as **subtle, moderate, or prominent** (§95; carried into the pilot as strength-to-visual-intensity "with safe quantization," Chapter 48) — never exact private strength. The visitor learns the band, because the Lens authorized it; not the exact strength, its distance from a boundary, or a small change within the band. Provenance-to-outline, included in the pilot in the private World, compiles to a state-to-style mapping over authorized states — for example, owner-confirmed with a solid outline, owner-declared with a solid outline in a different owner-selected treatment, and public prominence as subtle, moderate, or strong glow by band.

Two exclusions are absolute at the compiled surface. First, **a theme cannot force proposed or refuted nodes into a public projection.** A node absent from the projection has no compiled binding, glow, outline, or residual effect on layout or animation; under the conservative pilot policy, proposed and refuted nodes remain private in a published Perspective — a refuted coastline may be meaningful in the owner's private World, but it does not appear publicly — and no binding changes that. Second, no compiled binding may reintroduce, through timing, ordering, density, or any other channel, information quantization removed (Chapter 48's invariant).

### 46.4 Owner-authored bindings, system prominence, and legibility

A nuance recorded in the amendment register (A-12) must be kept legible. Owner-authored bindings are **expression**: the emphasis is the owner's chosen treatment of authorized data and means what the owner intends. System-generated visual prominence is distinct and is governed by Chapter 12: it must not imply psychological importance — island size encodes topic count, not importance, and no system rendering may scale an element by strength, testimony weight, or inferred significance as though it were importance.

Both rules apply at once, to different actors. Visitor-facing explanation must keep the distinction legible: a node glows because the owner designed it to respond to its public prominence band, not because the system judged the topic important in some further sense. Where that distinction cannot be maintained, the binding's treatment — not the authorized band — must be simplified.

## Chapter 47 — Soundscape

This chapter specifies sound as part of a Presentation: the three modes, the visitor controls, the Soundscape object, and the open accessibility and rights questions. Sound is expression under Chapter 43, subject to the same separation: it is potentially revealing presentation data, must be authorized as part of the presentation, and must never become a channel for information no Lens granted.

### 47.1 Three modes

Section 96 supports three distinct modes (§107: curated, ambient, and none).

**Atmosphere:** ocean, rain, wind, distant ambience, or other original or properly licensed sounds — the ambient mode, drawn for the pilot from a small set of properly licensed tracks.

**Personal soundtrack:** owner-selected audio from supported sources, subject to platform terms and visitor authorization — the curated mode, publishable only under §47.2's explicit permission and §47.4's rights rules.

**Reactive ambience:** optional original generative audio whose parameters derive only from approved presentation state — never from private World state or an undeclared visitor signal. Generative audio is deferred (Chapter 48).

A soundscape is optional, and sound is never load-bearing for meaning (§47.5).

### 47.2 Visitor control: autoplay, gesture, and mute

Three visitor rules are normative in §96 and encoded in §47.3's object. **Autoplay is off by default. Audio requires a user gesture. And a visitor may mute or dismiss audio permanently within their session** — a session-level decision the compiled experience must honour at every module, track, and breakpoint. `allowVisitorAudio` (Chapter 45) gates whether a soundscape is compiled at all; where it permits audio, the visitor's gesture and mute still govern playback. Owner permission opens the possibility of sound; only the visitor's act realizes it.

### 47.3 The Soundscape object

Section 107 proposes the Soundscape object:

```ts
interface Soundscape {
  mode: "NONE" | "CURATED" | "AMBIENT";
  tracks: Array<{
    assetId: string;
    title: string;
    licenseRef?: string;
  }>;
  settings: {
    loop: boolean;
    defaultVolume: number;
    autoplay: false;
  };
  visitorPolicy: {
    offered: boolean;
    requiresUserGesture: true;
  };
}
```

Two fields are literals, and their literalness is the specification: `autoplay: false` admits no other value in this version, and `requiresUserGesture: true` is likewise fixed. Tracks are referenced by asset identifier, with a title and an optional licence reference; audio assets are Presentation assets under Chapter 45, with visibility and a content digest, so a private track cannot enter a compiled publication by reference alone. `visitorPolicy.offered` records whether the soundscape is offered in this publication. Loop and default volume are owner settings, always subject to the visitor's volume control and mute.

### 47.4 Music is not a signal; rights rules still owed

Section 96 states a rule adopted here without qualification: **music selection should never become an undeclared behavioural signal about the owner or the visitor.** A soundtrack is published expression, not testimony; it must not be mined or fed back into any model of the owner, and a visitor's decision to play, mute, or ignore it must not be treated as behavioural data about the visitor. No other use of audio-related information is specified here.

The production rules for audio rights are, by the source's own statement, **still owed**: licensing, hosting, third-party embeds, accessibility alternatives, and unavailability behaviour must be defined before production use (A-12: they join this Bible's open provider-contracts questions). Section 107 adds the pilot posture: properly licensed ambient tracks, plus owner-uploaded audio only where rights and hosting policies are established; streaming integrations evaluated separately, because linking to a song does not necessarily grant permission to embed, redistribute, remix, or synchronize it. Until those rules exist, the pilot includes a basic soundtrack only subject to licensing (Chapter 48), and an unavailable track is omitted cleanly under Chapter 44's fallback discipline.

### 47.5 Audio accessibility

Section 107's accessibility requirements are normative: every visitor must be able to mute audio, control volume, and navigate without sound; audio must not be required to understand a topic, relationship, correction, or invitation; and meaningful spoken content needs an equivalent text representation. Under Chapter 48's single-projection principle, the non-audio experience is the same authorized experience with the audio channel silent, not a reduced substitute assembled separately.

## Chapter 48 — The Presentation Compiler, privacy, and pilot requirements

This chapter specifies the Presentation Compiler, which turns an approved Presentation revision and a Lens-authorized projection into the only artefact a visitor receives, together with the Render Manifest contract, its module rules, the threat model, and this part's pilot requirements and acceptance suite. It stands alongside the Lens Compiler (Chapter 18): that compiler decides what may be known; this one decides how what may be known is presented, without enlarging it.

### 48.1 The compilation sequence and the critical invariant

Section 101 specifies that the compiler translate an owner's design into a safe rendering specification for desktop, tablet, mobile, and accessible nonvisual interfaces, without simply transmitting the entire Presentation object to the visitor. The compilation sequence is normative:

1. Authenticate the owner or visitor and validate the relevant grant.
2. Resolve the approved Worldprint revision.
3. Compile the Lens-authorized data projection.
4. Load the approved Presentation revision.
5. Remove modules and assets that exceed the grant.
6. Resolve visual bindings using only permitted projected data.
7. Validate the responsive layout and accessible reading order.
8. Produce an immutable render manifest for the authorized publication.
9. Revalidate access whenever protected manifest or asset content is requested.

The order matters: authorization (steps 1–3) precedes presentation (step 4); filtering (step 5) precedes binding resolution (step 6), so no binding is resolved against unfiltered data; and delivery (step 9) is a continuing obligation, so a revoked grant stops protected content even for a manifest compiled while the grant stood.

Above the sequence stands the critical invariant, stated normatively: **presentation compilation cannot increase the information available in the authorized World projection.** Aesthetic choices may change how permitted information appears; they must never act as a secondary channel for revealing excluded information. Chapters 44, 46, and 47's rules are applications of it, and any feature that cannot be shown to satisfy it is not compilable.

### 48.2 The Render Manifest contract

Section 102 treats the compiled Presentation as a declarative document rather than executable code. The contract is reproduced verbatim:

```ts
interface RenderManifest {
  manifestVersion: "render-v1";
  perspectiveId: string;
  publicationRevision: number;
  source: {
    worldRevision: number;
    presentationRevision: number;
    atlasVersion: string;
  };
  resolution: "CONTINENT" | "COAST" | "HARBOUR";
  theme: CompiledTheme;
  layout: CompiledLayout;
  modules: CompiledModule[];
  assets: AuthorizedAsset[];
  audio?: CompiledSoundscape;
  accessibility: {
    readingOrder: string[];
    reducedMotionFallback: boolean;
    nonVisualNavigation: boolean;
  };
}
```

The manifest is the complete rendering specification for one authorized publication: Perspective, publication revision, dual-revision source binding (Chapter 45), granted resolution, and compiled theme, layout, modules, assets, optional audio, and accessibility structure. The manifest must not contain raw testimony, hidden topic identifiers, internal evidence references, suppressed module identifiers, or private strength values; absence in it is genuine absence, not redaction.

A stable manifest digest is computed from its canonical contents, to detect unexpected changes, support cache consistency, and verify that a visitor receives the approved publication revision (see the revision-mismatch threat, §48.4). However, **the digest is not an authorization token**: possession of a digest or reference grants nothing, and access is revalidated per request (step 9).

### 48.3 Module contracts, dependency rule, and isolation

Section 104 gives each module a strict contract defining what it may read, display, and emit:

| Module | Reads | Required protection |
|---|---|---|
| Primary Map | Authorized regions and edges | No hidden nodes or geometry |
| Featured Territories | Approved pinned topics | No private rankings or counts |
| Constellations | Owner-approved groups | No inferred hidden memberships |
| Soundtrack | Approved audio references | No private listening history |
| Recent Seeds | Owner-selected Seed references | No originating private World snapshots |
| Timeline / Tides | Permitted temporal summaries | No unauthorized history |
| Journal / About | Explicitly approved owner text | No automatic private-note inclusion |
| Accessible List | Same authorized data as map | Equivalent navigation and information |

The dependency rule is normative: every module must declare its required data fields; if a required field is not permitted, the compiler must provide an approved lower-resolution representation or omit the module; it must never fetch private data and rely on the module's own code to hide it.

Modules must not inspect each other's private state or request arbitrary World data. The specified posture is a **fixed registry of built-in modules**, each with a validated configuration schema; **third-party modules are deferred** until a separate sandbox and permission model exists. The same posture governs advanced styling (§109): no arbitrary executable HTML, JavaScript, or unrestricted CSS in the first implementation, but a declarative component schema with validated style tokens and a restricted layout language; any later sandbox must be unable to read private data outside its projection, exfiltrate visitor information, hide required consent or accessibility controls, impersonate authorization dialogs, execute untrusted scripts in the main origin, or create uncontrolled motion, flashing, or audio. A custom theme must fall back to a safe, accessible default if its assets fail.

### 48.4 The presentation threat model and the single-projection principle

Section 110 tabulates the new information channels the Lens Compiler must explicitly control, and their required defences:

| Threat | Example | Required defense |
|---|---|---|
| Hidden-topic inference | Empty region reveals suppressed territory | Reflow layout after filtering |
| Visual strength leakage | Glow reveals exact private score | Use authorized prominence bands |
| Asset leakage | Image URL contains private identifiers | Opaque authorized asset references |
| Soundtrack inference | Private playlist exposed in visitor view | Explicit audio publication permission |
| Metadata leakage | Module title reveals a hidden topic | Sanitize labels and descriptions |
| CSS exfiltration | External asset URL transmits visitor data | Restrict external resources |
| Cache leakage | Revoked manifest remains accessible | Authorization-aware caching |
| Accessibility mismatch | Screen reader reveals hidden module | Compile accessible tree from same projection |
| Revision mismatch | Preview differs from publication | Bind approval to manifest digest |
| Cross-device mismatch | Mobile shows extra private details | Same disclosure contract across breakpoints |

One principle in §110 is stated separately: **the single-projection principle — the accessible tree is compiled from the same authorized projection as the visual map, never generated separately from the private World.** Otherwise two renderers could disagree about what a visitor may know, and the more permissive would become the disclosure channel. The Accessible List reads the same authorized data as the map, with equivalent navigation and information (§48.3), and reveals nothing the map withholds.

### 48.5 Pilot requirements

Section 99 incorporates the proposed pilot scope, with one addition: presentation disclosure testing must be part of the Lens security suite.

| Capability | Pilot status |
|---|---|
| Theme Studio with curated styles | Include |
| Responsive module layout | Include |
| Primary Map | Include |
| Featured Territories | Include |
| Accessible List | Mandatory |
| Basic Soundtrack | Include, subject to licensing |
| Strength → visual intensity | Include with safe quantization |
| Provenance → outline | Include in private World |
| Exact visitor preview | Mandatory |
| Theme revision history and restore | Include |
| Advanced CSS/HTML | Defer |
| Generative audio | Defer |
| Community theme marketplace | Defer |

Two capabilities are Mandatory: the **Accessible List**, because an equivalent nonvisual experience is a condition of publishing under the single-projection principle, and the **exact visitor preview**, because preview approval (Chapter 45) is meaningful only if the preview is exactly what the visitor receives. The deferred capabilities may not enter the pilot bundled inside an included capability.

The pilot should test whether customization makes people more willing to create, maintain, and share their Worlds, as well as whether it increases onboarding friction. **Quick Style is the default route for new users.** These purposes are Concept: what the pilot should learn, not what it has found. Presentation disclosure testing joins the Lens security suite (Chapters 31 and 36) as a **proposed test family**, directed at §48.4's channels. And §44.5's caution applies directly to this table: **the Studio expansion requires Bobby's ratification** before it binds the pilot.

### 48.6 The acceptance suite: planned only

Section 111 proposes a dedicated Presentation acceptance suite, testing creativity and privacy, in nine categories: theme validation (12 cases), layout responsiveness (14), module permissions (18), visual binding safety (16), asset authorization (12), soundscape behaviour (10), revision and recovery (10), accessibility (16), and adversarial disclosure (22) — **130 cases in total**. Its highest-priority regressions: a theme change must never modify testimony; a private node must never appear through a module, asset, animation, audio cue, accessibility tree, or metadata field; a Lens downgrade must reduce detail without breaking the experience; a revoked Perspective must stop serving protected manifests and assets; a restored theme must preserve the Worldprint and create a new Presentation revision; mobile must not disclose more than desktop; and a failed custom theme must fall back to a safe, accessible default.

As this Bible's evidence discipline requires: **the 130-case acceptance suite is planned only — no case in it has been executed.** It joins Chapter 36's 104-case harness as the project's second planned suite. Its figures are planning targets, not results, and no conclusion may be drawn from it until cases are executed and evidence recorded.

# Part IX — Creator Universes & Live Worlds

Part IX is a post-pilot expansion line. Edition 1.2's pilot remains Layers 1–2, as specified in Chapter 39, and nothing in this part amends that pilot scope, its release gates, or its sequencing. The creator roadmap here — Creator Universes, live events, collaborative Worlds, and a creator economy — is a separate staged programme, to be planned and validated on its own. All material in this part is **Concept** unless a contract is expressly stated as **Specified**; a stated contract specifies the intended contract for a future build and does not record that it exists in code. Nothing in this part is implemented or tested, and no figure given here — no price, threshold, or target — is a validated result.

## Chapter 49 — Creator Universes: the foundational separation

This chapter states the separation on which the creator line rests. A creator is first an owner: a person with a private personal World, governed by testimony, private by default, disclosed only through an authorised Lens. The expansion adds venues, audiences, schedules, and revenue around that person; it does not dissolve the boundary that makes the personal World trustworthy. The foundational rule is a separation, not a feature: running a public live event never requires, implies, or effects publication of the creator's private World.

### 49.1 A creator never publishes their private World to go live

A creator should never have to make their private personal World public to run a livestream. That sentence is normative for this part: no creator tool, event workflow, or monetisation configuration may treat publication of the private World as a precondition, a default, or a side effect of going live.

Instead, the creator publishes an approved **Creator Perspective**: an authorised view, produced through the same Lens and presentation discipline that governs any Perspective in Part IV, and approved by the creator for a defined audience and purpose. It is that published Perspective — not the World behind it — which becomes the setting for a live event.

The two objects have different lives. The private World changes whenever its owner testifies, corrects, or explores, under the owner's sole authority. A published Perspective is a fixed, approved disclosure: what this audience may see, at this resolution, for this purpose. An event built on the private World would inherit every private change as it happened; an event built on an approved Perspective inherits nothing the creator did not approve. Chapter 51 states the rule that follows: an event references a specific approved publication revision, and later edits to the underlying World do not flow into the event on their own.

### 49.2 What a live event carries of its own

Because the event is built on a published Perspective, not the private World, it is a governed object in its own right, with its own configuration:

- **Audience** — who may attend (publicly, by invitation, or by membership), independently of the creator's other Perspectives.
- **Schedule** — its own state machine life, specified in Chapter 51.
- **Interaction rules** — which participation is offered, to whom, under what moderation (Chapter 51).
- **Moderation team** — moderators under narrowly scoped authority for that event (Chapter 53).
- **Monetisation configuration** — free, ticketed, or membership-gated (Chapter 53); a payment configuration is an entitlement to attend, never a grant over private material.

None of these configurations reaches back into the private World: an audience list is not a Lens grant, a moderation team is not a set of co-owners, and a ticket is not a disclosure.

### 49.3 The Creator Universe hierarchy

The creator's public and semi-public activity is organised under a **Creator Universe**: a collection of governed Worlds and event venues under one creator's administrative ownership, so that profile, content library, community, and live venues are not separate destinations with separate rules. The hierarchy (§118) is:

- **Creator Universe** — Identity, branding, discovery, administrative ownership, and creator-wide settings.
- **Worlds** — Independently governed personal, fictional, educational, or collaborative environments.
- **Published Perspectives** — Authorized views of each World, with their own presentation and audience permissions.
- **Venues** — Reusable event locations such as stages, classrooms, theaters, galleries, and workshops.
- **Sessions** — Live or scheduled experiences hosted inside a venue.
- **Living Episodes** — Optional post-event publications with recordings, annotations, and discovery paths.

Each level has its own authority, content, access, and revision history. A Venue is reusable across Sessions; a Living Episode is what a Session may afterwards become, if the creator publishes it as a permanent, navigable chapter rather than leaving only a recording. A Published Perspective belongs to a World, not to the Universe as a whole, so approving a view of one World approves nothing about any other. Permissions are stated at the level where they apply, not collapsed into a single public-or-private switch.

### 49.4 What this chapter does not grant

This chapter grants a creator more environments, not more kinds of personal World. The boundary is stated in full in Chapter 50, and flagged here so the hierarchy is never misread: multiplying the Worlds under a Creator Universe does not multiply the owner's testimony World, and nothing in this part authorises a second personal World for the same owner. That question would be a new founder decision, outside this part's authority.

## Chapter 50 — The Creator Content Graph

This chapter introduces the second graph of the system and states the rule that keeps the two graphs apart. The personal Worldprint, specified in Parts II and V, represents one person's owner-affirmed interests and is governed by testimony. Creator activity produces material of other kinds — authored fiction, educational content, community contributions — which is not testimony about the creator and must not behave as if it were. This chapter therefore specifies a separate **Creator Content Graph**, with editorial semantics, and a never-merge rule between the two graphs, normative for the whole creator line.

### 50.1 Two graphs, two semantics

The original Worldprint is a representation of the owner's interests. A fictional World contains author-created canon; a classroom World contains educational content; a community World contains contributions from multiple people. These cannot all use the same testimony semantics, because they do not make the same kind of claim. Testimony says: this is true of me, as I affirm it, correctable through the process specified for the personal World (Chapter 7). Editorial publication says: this material has been authored or curated, approved through an editorial workflow, and published in a stated version. Confusing the two would let a fictional character's attributes, a lesson's contents, or a fan's contribution be read as assertions about the creator's own interests — a misreading the system must make impossible, not merely unlikely.

The personal World model is therefore preserved unchanged, and a separate Content Graph is introduced for creator-authored material. The two are compared in full below; the table is reproduced from the source document without abridgement, because every row carries a distinct obligation.

| Personal Worldprint | Creator Content Graph |
|---|---|
| Represents owner-affirmed interests | Represents authored or curated content |
| Governed by testimony | Governed by editorial approval |
| Uses strength, provenance, tides | Uses publication state, content versions, relationships |
| Private by default | Private or published according to creator settings |
| Cannot be edited by fans | May accept moderated contributions |
| Corrected through testimony | Revised through editorial workflows |

Read row by row, the table is a set of prohibitions as much as definitions. Content Graph material does not acquire strength, provenance, or tides, and must not be scored or surfaced by mechanisms that operate on those dimensions. Worldprint material does not acquire a publication state or a content version, and must not be put through an editorial workflow: no editor stands between an owner and their own testimony. Contributions from other people may exist only on the Content Graph side, and only under moderation; the Worldprint side admits no contributor other than its owner.

### 50.2 The never-merge rule

The two graphs may reference one another through explicit, authorized links. They should never silently merge.

That rule is normative. A link between the graphs is an act: created explicitly, by an authorised party, for a stated purpose, inspectable and revocable as a link. Nothing may infer such a link from proximity, shared subject matter, audience behaviour, or common ownership, and no synchronisation, import, recommendation, or analytics process may copy nodes from one graph into the other. Where a published territory points at a discovery in the creator's personal World, the link is made through the ordinary disclosure discipline — an authorised Perspective at a granted resolution — and the Content Graph holds the reference, never the private material behind it.

The rule protects both directions: authored and community material cannot drift into the record of what the creator personally affirms, and private testimony cannot leak into published material through a graph whose handling is publication according to creator settings. A merge, once performed, cannot be reliably unperformed. The rule is therefore architectural: two separate stores with separate semantics, joined only by authorised references.

### 50.3 Boundary: only the personal World runs on testimony

The boundary is stated explicitly, because the hierarchy in Chapter 49 could be misread as multiplying personal Worlds. It does not. The Creator Universe hierarchy multiplies **environments** per creator, but only the personal World runs on testimony — fictional, educational, and community Worlds run on the Content Graph. They are editorial objects: authored, versioned, approved, and published, and nothing in them testifies about their creator's own interests unless the creator separately affirms it, in their personal World, through testimony.

A second personal (testimony) World per owner is **not** granted by this document. Whether one owner should ever hold two testimony Worlds — with the questions that would raise about which World a Lens discloses and how correction in one would bear on the other — is not settled here, is not implied by the hierarchy, and would require a new founder decision, taken explicitly and recorded as such, before any specification work could begin. Until then, the model stands: one owner, one personal World, running on testimony; as many governed creator environments as the programme validates, running on the Content Graph.

### 50.4 Consequences for correction and revision

Because the two graphs revise differently, no correction mechanism crosses between them. An error in published material is revised editorially: a new content version, approved and published. A change of mind about the creator's own interests is corrected through testimony, under the arithmetic specified in Chapter 7, which this part does not restate or alter. An audience member who disputes published material has an editorial remedy — report, moderation, creator revision — and no testimony remedy: no audience action, in any quantity, corrects a creator's personal World.

## Chapter 51 — Live Worlds and events

This chapter specifies the live event: what it is, the two modes in which an audience experiences it, the data contract that governs it, and the limits on what an audience may affect while it runs. The central proposition is that a livestream is an event inside a World — a scheduled, governed occasion in a persistent place — not a separate page that temporarily replaces the World for the duration of a broadcast.

### 51.1 Watch Mode and Explore Mode

The viewer can choose between two experiences of the same event.

**Watch Mode** is a familiar video player with chat and basic event controls; the viewer needs to understand nothing about the map or the World model to attend. **Explore Mode** keeps the same livestream visible while the visitor navigates approved territories, opens supporting material, saves Seeds, and participates in authorized interactions.

The approach is dual-mode, and the duality is a requirement, not a preference: the system must never force spatial navigation on a viewer who only wants to watch. Equally, Explore Mode is not a decorative extra: the territories explorable during an event are the approved territories of the event's published Perspective, at the granted resolution, and live exploration discloses nothing that Perspective would not disclose to the same audience outside the event. The pilot targets in Chapter 54 include a measure of whether viewers understand the difference between the modes.

### 51.2 The WorldLiveEvent contract

The creator subsystem needs a new event model without altering the existing World reducer. The contract (§120), verbatim:

```ts
type EventState =
  | "DRAFT"
  | "SCHEDULED"
  | "LOBBY"
  | "LIVE"
  | "ENDED"
  | "CANCELLED";
interface WorldLiveEvent {
  eventId: string;
  creatorUniverseId: string;
  perspectiveId: string;
  publicationRevision: number;
  venueId: string;
  title: string;
  description?: string;
  state: EventState;
  audiencePolicy: {
    access: "PUBLIC" | "INVITED" | "MEMBERS";
    chatEnabled: boolean;
    participationEnabled: boolean;
  };
  media: {
    mode: "EXTERNAL" | "NATIVE";
    providerRef: string;
    recordingAllowed: boolean;
  };
  scheduledAt?: string;
  startedAt?: string;
  endedAt?: string;
}
```

Three fields carry the governance. `perspectiveId` with `publicationRevision` pins the event to one approved publication of one Perspective, so what the audience sees is auditable afterwards. `audiencePolicy` states access, chat, and participation as event-level facts set before the event runs. `media.mode` records whether the video is external or native — consequential, per Chapter 53, for chat, interactivity, and legal review — and `recordingAllowed` records whether a recording may exist at all.

### 51.3 The event state machine

The event state machine is: **DRAFT → SCHEDULED → LOBBY → LIVE → ENDED**. An event is drafted, then scheduled, then opened to its audience in a lobby state before it is live, then ended. Cancellation can occur from supported pre-event states; an event that has ended is not cancelled retrospectively, and an event that is live is interrupted or ended under the moderation controls of Chapter 53 rather than silently reclassified.

Unexpected disconnections are modelled separately from an intentional ending, allowing a limited reconnect period without misrepresenting the event as active. A dropped connection is a fact about the media path; an ending is an act of the creator. If the two shared a state, the system would either declare events over that their creators intend to resume, or present events as live when nothing is being broadcast. During the reconnect period the event is not represented as active; if reconnection does not occur within the limited period, the event passes to its ended handling by rule.

### 51.4 The publication revision rule

A live event references an approved Perspective publication revision. If the creator edits the underlying World during a stream, those edits must not automatically disclose new private content. For dynamic event changes, the system introduces explicit publication updates that pass through the Lens and Presentation compilers before becoming visible.

This rule is the live application of Chapter 49's separation, stated without exception: mid-stream World edits never auto-disclose, including edits to territories already visible at a coarser resolution. The compilers are the only path — a dynamic change is proposed as a publication update, compiled against the event's audience and grant like any other disclosure, and only then becomes visible. A change that cannot be compiled safely does not appear in degraded form; it waits, as any unapproved disclosure waits.

### 51.5 Audience participation and the LiveInteraction contract

Live Worlds offer interactions with meaning within the environment: voting on which territory to visit next, submitting a question to a stage moderator, selecting a permitted expedition branch, or saving an approved Seed. But audience participation must never directly alter the creator's personal Worldprint. The interaction contract (§121), verbatim:

```ts
interface LiveInteraction {
  interactionId: string;
  eventId: string;
  kind:
    | "POLL"
    | "QUESTION"
    | "EXPEDITION_CHOICE"
    | "SEED_OFFER";
  eligibility: "ALL_VIEWERS" | "MEMBERS";
  moderation: {
    approvalRequired: boolean;
    rateLimitKey: string;
  };
  closesAt?: string;
}
```

The contract's shape enforces its purpose. Every interaction is scoped to one event, is one of a closed list of kinds, and carries its own eligibility and moderation terms. A creator can let the audience influence the route of a presentation without giving it authority over the creator's identity, testimony, or private interests: a poll may choose which published territory the event visits next; it may not vote a private interest into or out of existence.

This distinction is enforced in the API, not merely explained in the UI. The service layer must reject, as a matter of contract, any interaction payload that attempts to write to a Worldprint, to testimony, or to unpublished material. Audience participation produces event-scoped records — votes, questions, choices, Seed offers — which no later process may promote into testimony. That includes aggregate promotion: a thousand viewers saving the same discovery is a fact about the event, and Chapter 50's never-merge rule bars it from becoming, by weight of numbers, a fact about the creator.

## Chapter 52 — World Portals and collaborative Worlds

This chapter specifies how Worlds meet: through World Portals, temporary reciprocal connections between two creators' approved territories, and through Community-Built Territories, designated areas to which others may contribute under governance. Both are collaborations without merger: each creator and contributor keeps the authority they had before, and the collaboration itself owns nothing, copies nothing, and testifies to nothing.

### 52.1 World Portals

Two creators could connect approved territories through a temporary Portal. Each contributes approved material; both retain independent control over their own Worlds. A science creator and a mythology creator, for example, could host a joint event about ancient astronomy, their audiences visiting both authorized Perspectives around a shared expedition on how ancient civilizations interpreted the night sky.

The Portal is the Reciprocity Bridge — the Encounter mechanism of Chapter 21 — at creator scale. Encounter is finite, mutually authorized discovery between two people, with no permanent residue either party did not choose; a Portal takes the same shape between two creators' published territories, productive of visits and chosen Seeds rather than of any merged structure. Portal design should follow Encounter's specified discipline and state its departures explicitly.

### 52.2 Portal security

Each Portal requires two independent approvals. Both parties must approve the relevant Perspectives, available content, duration, and visitor permissions. If either creator revokes their side, the Portal closes. A Portal must not copy one creator's private data into the other creator's World.

Each clause does distinct work. Two independent approvals mean no platform mediation can substitute for one side's consent, and the approval covers Perspectives, content, duration, and visitor permissions as a single whole. Revocation by either side closes the Portal on revocation, not at the end of the current event. And the no-copy rule keeps the Portal a connection rather than a transfer: visitors cross; data does not. What a visitor carries away is what they deliberately save as Seeds, under the ordinary Seed rules.

A Portal thus supports collaboration without a merged audience or shared account. When it closes, each creator's World and revision history are as they would have been had the collaboration been a shared event and nothing more. Any joint artefact, such as a Living Episode of a joint session, is published by each creator into their own Universe, linked by explicit authorized reference under Chapter 50's rule.

### 52.3 Community-Built Territories

Creators may invite contributors to propose resources, artwork, questions, or connections within a designated community territory. Contributions require moderation and creator approval before publication. They never become assertions about the creator's personal interests.

Community-Built Territories are the sixth of the seven expansions listed in Chapter 54, at Medium priority, with high moderation and governance complexity. The governance follows from Chapter 50: a community territory lives in the Creator Content Graph, so a contribution passes through two gates before it is public — moderation, against the territory's and the platform's rules, and creator approval, as an act of publication in the creator's Universe. Neither gate may be waived for trusted contributors or for time pressure during a live session.

The final clause is the boundary that makes the feature safe to offer. A community territory may grow large and closely associated with its creator; none of that makes its contents testimony. The system must not represent contributed material as the creator's interests, must not feed it into the creator's personal World by aggregate or inference, and must keep its provenance — contributed by whom, approved by whom, published when — inspectable. A contributor's standing in the territory confers no access to the creator's other Worlds, venues, or private material.

## Chapter 53 — The creator economy and streaming

This chapter covers how creators are paid, how their events are streamed, and what moderation must exist before any of it opens to the public. The subjects belong together: a revenue mechanism creates entitlements the streaming layer must honour without over-disclosing, and both create audiences at a scale static Perspective sharing never faced. The discipline throughout is that money buys access to what has been published for sale, and nothing else; streaming is adopted in stages under a recommendation that remains an open decision; and moderation is a precondition, not a follow-up.

### 53.1 Five revenue mechanisms

The monetization model should support creators without converting their audience's private interests into an advertising resource. Five revenue mechanisms (§122) are proposed for exploration:

| Revenue mechanism | Creator value | Implementation concerns |
|---|---|---|
| Memberships | Recurring access to approved venues and content | Billing, entitlement revocation, refunds |
| Ticketed events | Paid workshops, performances, launches | Capacity, payment disputes, access control |
| Tips and support | Voluntary audience support | Fraud, chargebacks, payment-provider policies |
| Digital products | Books, courses, downloads, templates | Licensing, fulfillment, taxes |
| Commissions and services | Consultations, creative work, classes | Scheduling, cancellations, dispute handling |

The mechanisms are proposals to explore, in a programme whose economics are unvalidated. None is approved for the pilot by this chapter; when monetisation is tested, and in what form, is the third open founder decision in Chapter 54. The concerns column is part of the proposal: a mechanism should not be offered to creators until its concern column has an owner and an answer.

### 53.2 Entitlements are not grants

The product distinguishes payment entitlements from privacy grants. A paid membership can authorize access to a designated published venue; it must not grant access to the creator's private World or unpublished material.

That rule is normative, and it generalises Chapter 4's monetisation decision: the platform never sells private interest histories, and never lets a purchase quietly become a disclosure. An entitlement answers one question only: has this person paid, or been granted, access to this designated published thing? It confers no Lens resolution, no Perspective beyond the designated venue's own, and no claim on unpublished material. When a membership lapses or is refunded, venue access ends with it, but Seeds lawfully saved under the venue's published Perspective are not retrospectively confiscated (Chapter 19). The entitlement store and the permission system must remain separate authorities consulted in sequence, so no payment record can be read, by any code path, as a grant.

The revenue philosophy is: creators own the experience; audiences choose their relationship to it; the platform provides the infrastructure. A subscription or transaction-fee model is worth testing, but pricing and platform economics are unvalidated. Accordingly, this part states no prices; any figure in source material or pilot planning for this line is illustrative, never a validated price, a benchmark, or a forecast of creator earnings.

### 53.3 Streaming: the hybrid recommendation

Three streaming approaches were considered: embedding an existing platform (fastest, but platform restrictions and inconsistent controls); native livestreaming (greatest control, at higher infrastructure, moderation, and operational cost); and a hybrid (external reach with native World interactions, requiring careful synchronization).

The document's recommendation (§119) is hybrid, introduced in stages. Start with approved external video sources where embedding is permitted. Run the World-specific interactions — navigation, Seeds, authorized polls, and event metadata — within SEE MY WORLD. Then introduce native streaming when pilot usage demonstrates that the experience justifies the cost. Do not build a custom video-transcoding infrastructure for the first pilot; that would consume engineering effort better spent validating the World experience. Any later native build would likely need an ingest protocol such as RTMP or SRT, a managed media pipeline, adaptive playback, captions, recording storage, and a separate low-latency channel for interactive events, with provider and protocols selected after measuring audience size, latency, cost, and supported devices.

This is the document's recommendation, and no more: the streaming strategy is still **open** — the first founder decision in Chapter 54, where the hybrid path is one option among three, its leaning noted and not adopted.

Two platform limitations shape any hybrid design. YouTube's native live chat is available on YouTube watch pages, not in embedded players. Twitch Extensions operate under platform-specific restrictions, including limits on off-platform linking and certain promotional uses. A creator streaming on another platform therefore cannot assume SEE MY WORLD can freely reproduce its chat, monetization, or interactive features; each integration needs its own legal and technical review.

### 53.4 Moderation preconditions

Streaming introduces a different threat profile from static Perspective sharing: harassment, impersonation, spam, unsafe submissions, copyright complaints, inappropriate broadcasts, and coordinated disruption. The following controls (§125) are therefore preconditions for public livestream discovery, established before the capability is publicly discoverable:

- Creator-controlled chat permissions and slow mode.
- Moderator roles with narrowly scoped authority.
- Viewer blocking, muting, and reporting.
- Event interruption and emergency shutdown.
- Abuse-rate limits and anti-spam measures.
- Recording consent and clear retention policies.
- Copyright and takedown procedures.
- Age-appropriate access controls where required.

For the first pilot, avoid open audience uploads and unrestricted user-generated overlays; they create substantial moderation and security complexity. Moderator authority is narrowly scoped: it acts on an event's chat, participation queue, and audience conduct, and confers no access to the creator's private World and no power to alter testimony, Perspectives, or entitlements. Emergency shutdown ends or interrupts an event; it does not delete its record, which is retained under the policies above so the incident remains auditable.

## Chapter 54 — The creator pilot and the three open decisions

This chapter closes the part by stating how the creator line is to be validated, in what stages it is to be built, and which decisions it deliberately does not take. Three archetypes, each answering one question, are measured against suggested thresholds and a comparison group, so the programme learns whether the World itself adds value before investing in later stages. The three founder decisions are recorded as open, their leanings noted and adopted nowhere.

### 54.1 Three pilot archetypes

A controlled creator pilot is proposed (§127) with three creator archetypes, each chosen to isolate a different claim of the creator line.

**Pilot A — The Storyteller.** An author or podcaster creates a World with published content, one live event, and a Living Episode afterward. Primary question: Does spatial storytelling improve discovery compared with a conventional content page?

**Pilot B — The Educator.** An educator creates a three-stop Expedition and hosts a live guided session. Primary question: Does the World improve comprehension and voluntary follow-up exploration?

**Pilot C — The Performer.** A musician or comedian creates a custom venue and hosts a live performance with moderated audience participation. Primary question: Does the personalized venue improve audience experience without creating unnecessary friction?

The archetypes are complementary, not interchangeable. The Storyteller tests persistence, the Educator guidance, the Performer presence under live pressure. A pilot that ran only one would validate at most one of the creator line's three claims, and its results must not be generalised across the others.

### 54.2 Pilot targets and the comparison group

The following are suggested validation thresholds, not established benchmarks: the source document's proposals for what would count as encouraging evidence, fixed in advance. They are not industry standards and not results from any prior run.

| Measure | Initial target |
|---|---|
| Creator venue setup | Median under 30 minutes |
| Viewer joins event successfully | At least 95% |
| Viewers understand Watch vs Explore | At least 90% |
| Event completion without critical technical failure | At least 98% |
| Participants reporting meaningful added value from the World | At least 60% |
| Critical privacy disclosures | Zero |
| Creators willing to host another event | At least 70% |

One row is not a threshold like the others. Zero critical privacy disclosures is absolute: a pilot that discloses private material even once has failed Chapter 49's foundational separation, whatever its other measures show.

The pilot should include a comparison group using an ordinary video page or standard livestream experience. Otherwise, the programme will not know whether the World itself creates additional value: satisfaction with a talented creator's event would be credited to the World that merely hosted it.

### 54.3 The five-stage roadmap

The creator line is a staged programme (§128), sequenced so that each stage's assumptions are validated by the stage before it:

**01 — Creator Foundations.** Add Creator Universes, Content Graphs, venues, editorial permissions, and public creator Perspectives. Preserve the existing personal World schema and testimony reducer.

**02 — Live World MVP.** Integrate permitted external video, event scheduling, Watch Mode, Explore Mode, basic chat or provider-supported chat, and moderated participation.

**03 — Persistent Discovery.** Add Living Episodes, creator Expeditions, and approved Seed exchange.

**04 — Collaborative Worlds.** Add reciprocal World Portals, joint events, and contributor-governed community territories.

**05 — Creator Economy and Native Media.** Add validated memberships, ticketing, digital products, and native media delivery only when demand and operational readiness justify them.

The ordering carries the part's argument: foundations precede events, persistence precedes collaboration, and the economy comes last and conditionally, because monetisation mistakes are hardest to refund, in trust as well as in money. No stage amends Edition 1.2's pilot.

### 54.4 The three open founder decisions

Three decisions (§129) are especially important before engineering begins. All three are **open founder decisions**. They are recorded here with their options stated fairly; where the source document leans, the leaning is noted as the document's and is not adopted by this Bible.

**Decision 1 — Initial streaming strategy.** (a) Hybrid: external video first, native interactions in-product — the source document's recommendation in §53.3; (b) native streaming from the beginning, accepting higher cost for full control from the first event; (c) external embeds only for the pilot, deferring deeper integration until pilot evidence exists. The leaning toward (a) is noted; the decision is open.

**Decision 2 — First creator category to validate.** (a) Authors, storytellers, and fictional Worlds; (b) educators and knowledge creators; (c) musicians, comedians, and performers; (d) a mixed creator pilot. The archetypes of §54.1 map onto the first three options; a mixed pilot runs all three at once, at higher cost and lower clarity per archetype. The source document does not settle which category leads; the decision is open.

**Decision 3 — Monetization rollout.** (a) Validate engagement before monetization, keeping the pilot free so its measures are uncontaminated by payment; (b) test ticketed events in the pilot; (c) test creator memberships in the pilot. Each option buys different knowledge at a different price in pilot complexity, and §53.1's concerns apply to whichever is chosen. The decision is open.

No text in this part settles any of these decisions. They are to be taken by the founder, explicitly, and recorded in Appendix C, before engineering on the affected stage begins.

### 54.5 The seven expansions

The source document names seven expansions (§117) beyond conventional creator streaming, ranked by strategic differentiation. Three are summarised here, at Very high priority; the remaining four follow with their priorities and the chapters where they are specified.

**Living Episodes** *(Very high priority).* Every livestream becomes a permanent, navigable chapter of the creator's World, with approved clips, resources, annotations, and Seeds attached to the territories discussed; unlike a recording archive, an episode can be explored through its underlying ideas. See Chapter 49 and Stage 03 above.

**Audience Expeditions** *(Very high priority).* A creator designs a finite journey through their World, each stop containing a video, explanation, activity, or resource; during a livestream the creator guides everyone through it, and afterward visitors can complete it independently. Exercised directly by Pilot B in §54.1.

**Creator-to-Viewer Seed Exchange** *(Very high priority).* A creator offers approved discoveries during an event; a viewer may save one, inspect its provenance, and decide whether to add it to their own World. Creator influence becomes a voluntary act of curiosity rather than an automatic inference about the viewer — Chapter 19's Seed discipline inside a live audience. Its live form is the `SEED_OFFER` interaction of Chapter 51.

The remaining four expansions are:

- **World Portals** *(High priority)* — reciprocal, time-limited connections between two creators' approved territories; specified in Chapter 52.
- **Creator Universes** *(High priority)* — multiple related Worlds under one umbrella, each with separate authority, content, access, and revision histories; specified in Chapters 49 and 50.
- **Community-Built Territories** *(Medium priority)* — contributor-proposed material in a designated territory, under moderation and creator approval, never becoming assertions about the creator's personal interests; specified in Chapter 52.
- **World Guides** *(Medium priority)* — an AI-assisted guide working from approved published material, helping visitors navigate lore, find resources, and revisit past events; a guide cites its sources, acknowledges uncertainty, and never impersonates the creator or invents private knowledge. World Guides are named here and not further specified in this part; their accuracy and trust requirements must be specified before any build.

# Part X — Literary Universes & Storyworlds

Part X proposes a third product pillar: the Storyworld Engine, alongside the Personal World Engine (Parts I–VI) and the Creator Universe Engine (Part VII). Where the first represents a person through their own testimony and the second publishes a creator's editorial content, the Storyworld Engine would convert authorized literary material into structured, navigable experiences governed by author-approved canon. This part is post-pilot, future-edition scope. All material is **Concept** unless a contract is expressly stated as **Specified**; nothing here is implemented or tested, and no price, funnel, or economic figure is a validated offer or forecast.

## Chapter 55 — Literary Worlds and the Storyworld Engine

This chapter defines the Literary World, distinguishes it from the Personal World, introduces the Canon Graph as a third graph semantics, and records the prior-art check bounding any novelty claim.

### 55.1 A Literary World

A Literary World is a special type of Creator Universe, generated from an authorized literary source and governed by the author's approved canon. It represents a fictional universe — characters, places, events, objects, lore — organized along narrative timelines and subject to publication revisions. It represents neither the author as a person nor any reader: the author or an authorized editor approves story facts, no reader interaction acquires authority over them, a character's beliefs must never be confused with the author's identity, and a reader's engagement must never be treated as testimony about the reader.

| Personal World | Literary World |
|---|---|
| Represents someone's interests | Represents a fictional universe |
| Governed by owner testimony | Governed by author-approved canon |
| Topics and affinity relationships | Characters, places, events, objects, lore |
| Tidal changes in personal interests | Narrative timelines and publication revisions |
| Lens controls personal disclosure | Access grants control spoilers and licensed content |
| Owner corrects personal assertions | Author or authorized editor approves story facts |

The system that builds and operates Literary Worlds is the **Storyworld Engine**. Its purpose is to convert literary material into structured, navigable experiences while preserving the creator's authority over canon — the defining constraint of the pillar, to which extraction, verification, character interaction, subscription access, and discovery are all subordinate.

A Literary World may be built for an independent author as effectively as for a major franchise. The engine assumes not scale, but authorization, a defined source, and an approver entitled to decide what the universe contains.

### 55.2 Three graph semantics

Edition 1.2 and its proposed extensions now distinguish three graphs, and Part X depends on keeping them distinct.

The **Worldprint** carries testimony semantics: a person's own statements about their interests, held under that person's authority and disclosed only through an authorized Lens. The **Content Graph**, proposed for Creator Universes, carries editorial publication semantics: content a creator has prepared, versioned, approved, and published. The **Canon Graph**, proposed here, carries canon semantics: source-linked statements about a fictional universe, each retaining its source, its location in that source, and its editorial status under the author's or authorized editor's approval; its governing question is whether a statement belongs in the fictional universe, on what source authority, and in what canon class (see §56.3).

The three graphs may reference each other only through explicit, authorized links. They never silently merge. A character's canonical relationship is not a relationship between the author and anyone; a reader saving a location is not a node in the Canon Graph; a creator's published commentary belongs to the Content Graph even when it discusses canon, and becomes canon only through the approval process in Chapter 56.

### 55.3 What already exists — and where this proposal goes further

The prior-art check recorded in the source material is explicit, and this Bible records it without amendment: pieces of this concept already exist.

**Hogwarts Legacy** is an immersive, explorable fictional-world game with original adventures, characters, and locations, presented as a single-player experience under the Portkey Games label. The opportunity identified here is not to outbuild a major 3D game, but persistent author-managed content, live events, reader communities, and interactive archives. **Interactive literary maps** already exist: an existing interactive Middle-earth map offers place pages, character journeys, a timeline, and story-following. The opportunity is to move beyond static geography into creator-approved interactions, events, updates, and connected reader Worlds. **Inworld AI** provides technology for responsive characters, speech, world state, and licensed-IP experiences. The opportunity is an integrated literary publishing platform in which character interaction is only one component of a canon-governed World.

The conclusion follows directly: explorable fictional worlds and conversational characters are not individually novel. The potentially distinctive combination is **author-controlled generation, verifiable canon, navigable literature, live participation, and voluntary connections to readers' personal Worlds** — unvalidated, and no document in this project may claim legal novelty for it.

## Chapter 56 — The Book-to-World Engine and Canon Verification

This chapter specifies how an authorized work becomes a Literary World — import under a Rights Manifest, extraction, verification of every assertion against its source, generation only from the approved graph — states the terminology guard, and describes the Author's Sandbox.

### 56.1 Stage 1 — Import with Rights Manifest

The author or rights holder may upload an EPUB, manuscript, series bible, character sheets, location artwork, or other authorized materials. The importer preserves chapter and section references, version history, and source boundaries, so every later assertion traces to its exact source material.

Import is accompanied by a Rights Manifest identifying which materials the uploader is authorized to use and for what purposes (the manifest contract is specified in Chapter 58). The rule is normative for this pillar: **uploading a book does not automatically authorize a public interactive adaptation.** Import authorizes, at most, the uses the verified manifest permits. Analysis of a manuscript in a private author workspace and publication of an interactive World built from it are different uses, and the second requires its own permission.

### 56.2 Stage 2 — Extraction of the fictional universe

From the imported source, the Storyworld Engine proposes structured entities and relationships for author review. The proposed entity schema is:

| Entity | Example |
|---|---|
| Location | A fictional place in which events occur |
| Character | A fictional person or agent in the work |
| Organization | A house, order, institution, or faction |
| Object | A significant artefact or instrument |
| Event | An occurrence on the narrative timeline |
| Rule | A governing principle of the fictional world, such as how its education or its magic operates |
| Relationship | Character affiliations, friendships, rivalries, and kinship, with temporal validity |
| Timeline | The ordering of events across one work or a series |

Extraction is a proposal mechanism: nothing extracted is canon by virtue of extraction. Every entity and assertion enters Stage 3 unverified and acquires standing only through verification and approval.

### 56.3 Stage 3 — The Canon Verification Engine

The Canon Verification Engine is the component on which this pillar stands or falls. Every extracted assertion retains four things: its **source**, its **chapter or passage location** in that source, its extraction classification metadata (see §56.4), and its **editorial status**.

The need is concrete: a location's existence may be explicitly established by the text while its exact dimensions remain unknown. A system that fills in plausible dimensions during generation has manufactured a story fact; canon verification exists to prevent that promotion of invention into fact.

The system distinguishes five canon classes:

* **Established canon:** Directly supported by authorized source material.
* **Supported interpretation:** A reasonable reading, not an explicit fact.
* **Creative expansion:** Newly invented material approved by the author.
* **Unresolved:** Conflicting or insufficient evidence.
* **Rejected:** An assertion the authorized editor has declined.

These classes travel with the assertion — in generation, character retrieval, encyclopaedic display, and connections between works (§60.2, §61.6). An interpretation or expansion must never be rendered indistinguishably from established canon.

The governing rule is stated without qualification: **a fabricated detail must never be silently labelled as canon.** A visually beautiful invention is still an invention. It may enter the World only as creative expansion, with the author's approval, labelled as such; or it does not enter at all.

### 56.4 Terminology guard — the extraction sense of one word

This subsection states a distinction that applies wherever the Canon Engine and the Personal World Engine share a document, including this Bible.

> The word "confidence" in Canon Verification means metadata about a **text assertion's** extraction classification, shown to the author or editor. It records how the extraction process classified a statement drawn from a text — for the purpose of routing that statement to human review.
>
> It is a different domain from the prohibited node field: a system probability about a **person**, which Edition 1.2 removed and which does not exist anywhere in this Bible.
>
> The two uses must never be conflated.

The distinction is one of subject, not of degree. Canon verification classifies statements about a fictional universe, extracted from a book, for an editor who can check them against the page. The removed field purported to quantify something about a real person inside their own Worldprint. The first is an editorial workflow aid under human authority; the second was a system judgement about a person, and it remains prohibited. No mechanism in this part assigns, stores, derives, or displays any such probability about a reader, an author, or any other person, and no extraction metadata may be carried across from the Canon Graph into a Worldprint.

### 56.5 Stage 4 — Generation from the approved Storyworld Graph

Only after verification does generation occur, from the approved Storyworld Graph — the Canon Graph as verified and approved, not the raw extraction. The author chooses a presentation style: illustrated cartography, 2.5D environments, architectural rooms, celestial geography, interactive comic panels, or, eventually, immersive 3D — and approves the World before readers enter it. No environment is published on the strength of its generation alone.

The principle governing all four stages is: **AI is a production assistant, not an unauthorized co-author.** The engine proposes, cross-references, identifies uncertainty, and drafts; the author or authorized editor disposes. The full sequence is: Ingest → Extract → Cross-reference → Identify uncertainty → Obtain approval → Generate → Preview → Publish. The author must be able to inspect every proposed character, relationship, location, and event before it becomes official World content.

### 56.6 The Author's Sandbox

The Author's Sandbox is a private, pre-publication environment where an author tests scenes, relationships, timeline changes, and hypothetical events against established canon, with contradictions flagged before publication.

The Sandbox is recorded here as the **wedge product** of this pillar: standalone author value before any reader exists. An author with an unpublished manuscript can use extraction and continuity checking immediately, without a licensing negotiation, a subscription, or a reader community — serving the whole literary lifecycle, not only publication. It is a proposal, not a decided first product; its priority remains an open founder decision.


## Chapter 57 — Canon-aware characters, narrative modes, and the Reader Passport

This chapter specifies the reader-facing mechanisms: characters contractually bounded by their position in the story, three narrative modes separating witnessing canon from changing it, and a Reader Passport held under the reader's own authority.

### 57.1 Canon-aware characters and the Character Canon Contract

A conventional chatbot can imitate a fictional personality; a Storyworld character must know its position in the story. Visited at three points in a series, its knowledge, relationships, emotional state, and available dialogue change with the selected narrative moment. Knowledge acquired in a later book is unavailable earlier, regardless of what the model can produce.

Every interactive character operates under a **Character Canon Contract** with seven elements:

1. An approved identity, biography, and characterization.
2. A time-specific knowledge boundary.
3. A relationship graph with temporal validity.
4. Explicitly prohibited spoilers and unpublished facts.
5. A distinction between canonical answers and improvisation.
6. A source-backed retrieval mechanism.
7. A creator-controlled approval and revision process.

Two rules follow from the contract and are normative for any implementation of this pillar. First, **a character must not reveal a plot twist merely because the AI model knows it.** The model's training or retrieval access is not the character's knowledge; the contract's time-specific boundary is. Second, **conversation must never rewrite canon.** No AI-generated character may permanently alter the author's canon through an ordinary conversation. A conversation may be memorable for the reader who had it; it does not become a story fact, it is not written back into the Canon Graph, and it does not change what the character says to the next reader — except through the creator-controlled approval and revision process, acting deliberately.

A character may answer from authorized material, participate in approved scenarios, and acknowledge when a question falls outside established canon — a correct response, not a failure. The system must never present an AI-generated conversation as an actual quotation from the author. A new adventure guided by a character is labelled an approved extension, a simulation, or a noncanonical exploration, per the rights holder's decision.

### 57.2 Three narrative modes

Interactive fiction poses a design problem: what happens when the reader wants to change a canonical event's outcome? Three distinct modes answer it, and the system must never confuse them.

| Mode | Reader freedom | Canon impact |
|---|---|---|
| Canon Journey | Explore and witness established events | None |
| Authorized Side Story | Participate in creator-approved new events | Only if author explicitly adopts them |
| What-If Realm | Experiment with alternative outcomes | None; clearly noncanonical |

In a **Canon Journey** the reader witnesses the story as written. In an **Authorized Side Story** the reader participates in creator-approved new events, which affect canon only if the author explicitly adopts them — participation alone adopts nothing. In a **What-If Realm** the reader experiments with alternative outcomes in a clearly noncanonical space from which nothing flows back into the Canon Graph. The mode is part of an experience's identity and must be visible before and during participation.

### 57.3 The Reader Passport

The Reader Passport records a reader's journey through fictional Worlds. It belongs to the reader, and it records only the experiences the reader deliberately chooses to retain: favourite places saved, storylines bookmarked, event souvenirs preserved, and the experiences the reader chooses to show on a public Passport.

The Passport's privacy rules are normative: it is **private by default**; retention is **deliberate only** — nothing is recorded merely because the reader visited, read, or purchased; and it **must not automatically disclose reading history, purchases, or fictional preferences to creators.**

Finally: **saving a character or location to a Passport is not testimony about the reader's identity.** It asserts no interest, affinity, or trait in the reader's Personal World. The Reader Passport is the reader-side sibling of the Perspective Passport — the human-facing control over what one retains of one's reading, and what anyone else may see of it. Any connection to a proposed interest in the reader's private World occurs only through a voluntary Seed, as a proposal the reader may accept or ignore.

### 57.4 A hypothetical licensed example

The source material illustrates these mechanisms with an officially licensed Hogwarts experience: a book-specific timeline, spoiler-free exploration, a live author or cast event where properly licensed, and interaction with approved characters under the Character Canon Contract, in areas such as a Great Hall, a library, the grounds, and a classroom.

**This example is hypothetical and unaffiliated** — a design illustration of what an official experience could contain if the rights were licensed. It is not an offer, a partnership, a statement of permission, or a plan to pursue that property. The same applies to every named property in this part: a name used to illustrate a mechanism grants no right to build the illustrated thing.


## Chapter 58 — Rights and licensing

This chapter states the rights discipline: a book licence is not an interactive licence, onboarding follows three pathways, and the Rights Manifest is the policy record against which the compiler permits or denies every public feature.

### 58.1 The derivative-rights rule

Copyright gives rights holders control over adaptations and other derivative uses of protected works. It follows that **a book licence does not include interactive or AI adaptation rights.** A licence to publish a book does not necessarily include rights to create games, interactive characters, audiovisual adaptations, or AI-powered experiences, and none of those rights may be inferred from a publishing agreement, from possession of a manuscript file, or from a relationship with the author alone.

The rights chain must be established, not assumed: publishing, film, television, gaming, interactive, and merchandising rights for one work may be held by different parties, so contacting an author may not suffice. Permission for one work establishes nothing about a catalogue; permission for one medium, nothing about another.

### 58.2 Three onboarding pathways

**Independent author.** The author uploads original manuscripts and establishes ownership or authorization; the platform must verify that publishing agreements have not assigned away the interactive adaptation rights — an author who has assigned them cannot grant them, however willing.

**Publisher or franchise licensee.** The agreement is configured in its actual scope — the specific books, characters, territories, media, countries, and commercial uses authorized — and that scope, not the partner's prominence, determines what may be built and served.

**Public-domain literature.** Worlds are built from texts in the public domain in the relevant jurisdictions, checking later translations, illustrations, adaptations, and trademarks separately (Chapter 61). A text's status settles nothing about the assets around it.

### 58.3 The Storyworld Rights Manifest

The manifest is the machine-readable policy record for a universe's rights. Its interface is **Specified** as follows:

```ts
interface StoryworldRightsManifest {
  rightsManifestId: string;
  universeId: string;
  rightsHolderId: string;
  verificationState:
    | "UNVERIFIED"
    | "UNDER_REVIEW"
    | "VERIFIED"
    | "SUSPENDED";
  permittedUses: Array<
    | "TEXT_ANALYSIS"
    | "INTERACTIVE_MAP"
    | "CHARACTER_DIALOGUE"
    | "GENERATED_VISUALS"
    | "LIVE_EVENTS"
    | "COMMERCIAL_ACCESS"
  >;
  permittedTerritories: string[];
  licensedWorks: string[];
  effectiveFrom: string;
  expiresAt?: string;
  restrictions: string[];
}
```

The manifest is a **policy record, not legal proof**: it records what the platform has verified and will enforce, creates no rights, and does not substitute for the underlying agreements. Verification and contractual review remain necessary, outside the system, by qualified people.

Enforcement is inside the system and normative: **the compiler must deny any public feature outside the verified permission scope.** A use, territory, or work not listed, a period outside the effective dates, or a manifest in any state other than `VERIFIED` — each is a denial, not a warning. Suspension suspends the dependent features.

## Chapter 59 — Universe Pass and the Entitlement Engine

This chapter defines the Universe Pass, specifies the entitlement contracts, and states the rule that payment, rights, spoilers, and privacy are separate gates — a subscription opens only the first.

### 59.1 The Universe Pass

A **Universe Pass** is a subscription entitlement that gives a reader access to a defined collection of authorized experiences within a literary universe. It is a first-class product object, not a flag on a user account, because it must carry its own scope, capabilities, territory restrictions, and rights revision (see §59.2).

Two negations define its limits: a Pass is **not ownership** of the underlying intellectual property, and it does **not grant access to unpublished creator material** — subscribers buy entry to authorized, published experiences, not a window into drafts, notes, or future books.

The proposed tiers are reproduced below. **All prices in this table are HYPOTHETICAL TESTING VALUES, not validated willingness-to-pay, not current offers, and not a pricing decision.**

| Tier | Price (hypothetical) | Scope |
|---|---|---|
| Visitor | $0 — Free entry | Public World map, introductory lore, event previews, and approved free expeditions |
| Explorer | $4.99/mo — One literary universe | Expanded locations, guided journeys, interactive archives, and subscriber events |
| Immersive | $9.99/mo — Enhanced participation | Eligible interactive characters, side stories, special live experiences, and advanced Expeditions |
| Multiverse | $19.99/mo — Selected participating universes | Access to a licensed bundle of Worlds, cross-universe discovery, and selected events |

The launch recommendation is narrow: **a free entry point and one paid Pass only.** Four tiers would test tier design instead of demand, and multiply the entitlement and rights surface before any reader behaviour is observed.

Two franchise shapes informed this design, as illustrations, not partnerships: an interconnected mythology entered through one work (where novel canon and television adaptation canon are separate continuities, never silently combined), and a connected multiverse of distinct works (the harder rights problem, since rights may be fragmented by work and medium). Both would run on the same infrastructure, without implying either property is available.

### 59.2 The entitlement contracts

The following interfaces are **Specified**:

```ts
interface UniversePass {
  passId: string;
  universeId: string;
  name: string;
  billingProductRef: string;
  includedExperiences: string[];
  allowedCapabilities: Array<
    | "EXPLORE"
    | "LIVING_EPISODES"
    | "CHARACTER_INTERACTION"
    | "LIVE_EVENTS"
    | "PREMIUM_EXPEDITIONS"
  >;
  territoryRestrictions: string[];
  rightsPolicyRevision: number;
}
interface SubscriberEntitlement {
  entitlementId: string;
  subscriberId: string;
  passId: string;
  status:
    | "ACTIVE"
    | "GRACE_PERIOD"
    | "EXPIRED"
    | "REVOKED";
  validFrom: string;
  validUntil?: string;
}
```

The Entitlement Engine answers one question only: whether access was purchased or granted. Whether a particular item may be served belongs to the rights, spoiler, Lens, and publication authorization systems, which operate in full after entitlement.

Hence the invariant, stated normatively: **a subscription must never override intellectual-property restrictions, spoiler settings, or privacy permissions.** Payment is not a rights grant, not a spoiler waiver, and not a privacy grant. A subscriber who has paid for a universe in which a particular character performance is not licensed in their territory does not receive that performance. A subscriber whose spoiler settings stop at Book One does not receive Book Three material because their tier is higher. A creator's private World does not become visible because a reader subscribes to their universe.

### 59.3 Rights-aware access

A franchise may hold separate rights for books, artwork, film likenesses, music, and interactive performances. A Universe Pass is therefore **compiled against the rights currently available** — hence `rightsPolicyRevision`. When rights change, the compiled Pass changes with them. Hence a promise discipline: **a paid subscriber is never promised content the platform is not licensed to provide**; marketing and previews may describe only the compiled, currently authorized scope.

### 59.4 Architecture and the protected-request chain

The Literary Subscription Engine introduces five components:

1. **Universe Registry** — tracks each literary universe, its works, its authorized publisher, and its participating rights holders.
2. **Rights Compiler** — determines which interactive uses are licensed for each work, territory, asset, and experience.
3. **Subscription & Entitlement Engine** — manages plans, billing references, access periods, cancellations, and purchases.
4. **Canon-Aware Experience Compiler** — produces approved storyworld experiences under the reader's spoiler settings and authorized access.
5. **Reader Passport** — stores the reader's private, portable journey without copying protected franchise content.

A protected request passes through every relevant check, in order:

**Identity → Subscription entitlement → Rights authorization → Spoiler policy → Publication authorization → Render**

Each gate is an independent denial: **where any required check fails, the content is not served** — no partial render and no fallback disclosing what the gate protected. Authorization is computed before rendering, never inferred from it, as in Lens compilation.

### 59.5 Subscription expiry and retention

Access to licensed experiences and ownership of personal records are separate things, and expiry separates them.

When a subscription expires, premium locations, licensed character interactions, and paid events become inaccessible per the agreement. Personal records survive: **Passport entries, personal notes, and noninfringing bookmarks are retained after expiry.** Licensed text, artwork, audio, or protected lore must not remain accessible through those records unless the agreement permits it — a bookmark may remember that a reader stood somewhere; it may not reproduce the protected material that was there.

A **purchased product, an active subscription, and a free Seed carry separate entitlements and retention rules**, and must not be collapsed into one "has access" flag: each ends differently, with its own consequences for what remains available and what remains recorded.

## Chapter 60 — Franchise licensing and subscription economics

This chapter records staged licensing, B2B licensing of the engine itself, the proposed differentiating features, and — explicitly labelled — the illustrative economics model.

### 60.1 Staged licensing

Licensing is approached in stages, each stage proving the capability the next stage's partners will ask about:

| Stage | Partner | Objective |
|---|---|---|
| 1 | Independent authors | Prove Book-to-World conversion and paid demand |
| 2 | Small publishers and author estates | Validate multi-title subscriptions |
| 3 | Mid-sized genre franchises | Demonstrate cross-book canon and live events |
| 4 | Major rights holders | Negotiate flagship licensed universes |

A major partner would reasonably expect editorial approval, brand controls, security assurances, revenue reporting, defined AI usage, moderation, and clear termination rights. For character interactions, the agreement must specify **per use** whether the platform may generate new dialogue, use likenesses or voices, and create side stories — **each separately permitted, no blanket permission.** Each is recorded, compiled, and enforced separately (Chapter 58).

Competitive evidence: a major rights holder has already partnered to enable licensed interactive fan-created adaptations of a literary property, so rights holders have demonstrated interest here. The offer SEE MY WORLD would need to make must exceed interactive fan fiction: persistent environments, canonical navigation, live experiences, subscription management, and cross-work continuity.

### 60.2 B2B licensing of the Storyworld Engine

A second revenue line licenses the Storyworld Engine itself as **white-label infrastructure**: a publisher operates its own branded universe under its own site, app, customer relationship, and billing, while SEE MY WORLD provides canon extraction, World generation, interactive maps, subscriptions, live events, analytics, and rights enforcement. Possible models: a setup fee, a recurring platform fee, usage-based fees, and negotiated revenue sharing. This line does not assume every franchise will join a shared marketplace. All such models are Concept; no fee, rate, or share is specified or validated here.

Canon discipline applies to connections as well as facts: a reader must always be able to distinguish a **direct canonical connection** from a recurring motif, an editorial interpretation, or a fan theory — the classes of §56.3 govern links between works as they govern assertions within one.

### 60.3 Five differentiating features

Five features are proposed specifically for Literary Universe subscriptions:

1. **Universe Key.** One entitlement unlocks a defined set of locations, archives, events, and experiences. The reader can always inspect what is included before subscribing.
2. **Living Seasons.** A universe can run curated thematic seasons — character histories, mysteries, location spotlights, or live events — without rewriting its established canon.
3. **Canon Vault.** An approved encyclopedia with source-linked facts, chronology, adaptation differences, and spoiler-aware navigation.
4. **Subscriber Gatherings.** Ticketed or included events, guided Expeditions, discussions, and interactive author experiences inside the World.
5. **Persistent Reader Journey.** A private Passport remembers deliberately saved locations, completed Expeditions, and story discoveries, subject to the reader's controls.

A universe must not promise a constant stream of AI-generated canonical content: editorial quality matters more than volume, and canon changes only through author approval (§56.5).

The longer-term form is a **Living Literary Library**: one Reader Passport across Worlds from several authors, each World keeping its own rights, canon, and access policies — discovered across, never merged, with connections editorially grounded and never implying shared canon.

### 60.4 The economics model — ILLUSTRATIVE

The following model is **ILLUSTRATIVE throughout**. It illustrates one possible single-universe subscription business in order to expose its cost structure. It is not a forecast, not a budget, and not evidence of viability.

| Line | Value |
|---|---|
| Monthly subscription price | $7.99 |
| Paying subscribers | 5,000 |
| Rights holder / creator revenue share | 35% |
| Variable delivery cost per subscriber | $1.20 |
| Monthly gross revenue | $39,950 |
| Rights holder / creator | $13,983 |
| Illustrative payment processing | $2,659 |
| Variable delivery | $6,000 |
| Contribution before fixed costs ("Remaining contribution") | $17,309 |

The model's stated assumptions are part of the model and must accompany it wherever it is reproduced: **all subscriptions bill successfully; the payment fee is a hypothetical 2.9% + $0.30; there are no refunds. The model excludes fixed engineering, moderation, marketing, taxes, minimum guarantees, and customer support**, and actual platform and app-store fees may differ substantially.

The key finding is structural: **per-experience cost — real-time AI characters, streaming, generated environments — not price, decides viability.** Subscribers do not all cost the same to serve, so any serious evaluation must model experience costs per capability; the flat variable figure above is a simplification the source itself flags as inadequate for a decision.

### 60.5 Three subscription products and the first experiment

Three subscription products are proposed for SEE MY WORLD:

* **Creator Pass:** access to a particular creator's approved events, content, and community.
* **Universe Pass:** access to one licensed literary or fictional universe.
* **Library Pass:** access to a defined bundle of participating universes, without implying that every franchise is included.

The **Library Pass comes last, only after single-universe validation.** A bundle multiplies every unsolved problem in this part — rights compilation across holders, revenue distribution, canon separation, and subscriber expectations — and is justified only once one universe has demonstrably worked.

The **first experiment** is a paid Literary World pilot with an independent author or an original universe, rather than an attempt to negotiate a major franchise licence immediately. It must answer four questions:

1. Will readers pay for access?
2. Which experiences cause them to return?
3. Can authors maintain the World without excessive editorial labour?
4. Can the platform deliver those experiences profitably?

Only answers supported by real usage data would strengthen the proposition for publishers, estates, and major rights holders; until then, franchise interest is evidence a conversation is possible, not that a business exists.

## Chapter 61 — The Free Worlds Initiative

This chapter proposes the Public-Domain World Library — the Free Worlds Initiative — as the pillar's acquisition layer: deeply developed free Worlds from public-domain literature, worthwhile in themselves and introducing readers, through transparent documented connections, to creator and franchise Worlds.

The governing principle is: the classics bring readers through the door; living authors give them new Worlds to discover.

### 61.1 Eligibility and the Public-Domain Rights Registry

For a U.S.-first launch, the broad rule is that **works published in 1930 or earlier are public domain in the United States as of 2026**, subject to verifying the particular edition, the source material, and the applicable legal circumstances. Eligibility is therefore a per-edition determination, never a per-title assumption.

Four standing limitations govern every eligibility decision:

1. A public-domain novel does not make every later film adaptation, illustration, translation, character redesign, or other later work free to use; **later adaptations, illustrations, translations, and redesigns are separate protected works.**
2. **Trademark survives copyright expiry.** Trademark law can still matter, particularly in branding and in any presentation that suggests official franchise affiliation.
3. **Terms differ by jurisdiction.** A U.S.-cleared World is not automatically cleared worldwide; permitted markets are part of the rights record.
4. **Modern editions carry protected additions.** Annotations, translations, introductions, and other newly created material in a modern edition may be protected even where the underlying text is not.

Eligibility is administered through a **Public-Domain Rights Registry**: human-reviewed records identifying the exact edition, original publication date, source jurisdiction, rights status, and restrictions on included assets. Automation may propose records; human review establishes them. A World may be generated only from a verified edition (§61.7).

### 61.2 The curated launch library

The Initiative launches with a small collection of deeply developed Worlds, not thousands of shallow imports. The eight candidate Worlds, with the gateway each provides to modern categories, are:

| # | World | Source work, author, date | Gateway |
|---|---|---|---|
| 1 | Wonderland | *Alice's Adventures in Wonderland* — Lewis Carroll · 1865 | Modern fantasy, magical academies, surreal fiction, creator-built dream worlds |
| 2 | Dracula's Domain | *Dracula* — Bram Stoker · 1897 | Contemporary vampire fiction, gothic romance, supernatural horror, potentially licensed vampire universes |
| 3 | Baker Street | *The Adventures of Sherlock Holmes* — Arthur Conan Doyle · 1892 | Modern detective fiction, thrillers, crime dramas, author-created mystery Worlds |
| 4 | The Creation Laboratory | *Frankenstein* — Mary Shelley · 1818 | Contemporary science fiction, philosophical horror, AI fiction, speculative literature |
| 5 | The Nautilus | *Twenty Thousand Leagues Under the Seas* — Jules Verne · 1869–1870 | Exploration fiction, steampunk, ocean science, modern adventure series |
| 6 | The Land of Oz | *The Wonderful Wizard of Oz* — L. Frank Baum · 1900 | Magical fantasy, family-friendly adventures, original creator universes |
| 7 | The Time Traveller's World | *The Time Machine* — H. G. Wells · 1895 | Time-travel fiction, dystopian literature, speculative science |
| 8 | The Mythic Mediterranean | *The Odyssey* — Homer · ancient epic | Modern mythology-based fiction, dark fantasy, divine-universe stories |


### 61.3 Public Domain Day

The library is not limited to nineteenth-century classics. Each January, a new cohort of works enters the U.S. public domain, and the Initiative marks the event as **Public Domain Day**: an annual release of newly explorable Worlds, creating a recurring occasion for discovery without depending entirely on paid franchise licensing.

The **Class of 2026** — works first published in 1930 that entered the U.S. public domain on January 1, 2026 — includes:

| Work | Author | Form |
|---|---|---|
| *The Murder at the Vicarage* | Agatha Christie | Village mystery |
| *The Maltese Falcon* | Dashiell Hammett | Noir investigation |
| *The Secret of the Old Clock* | Carolyn Keene | Detective adventure |
| *Last and First Men* | Olaf Stapledon | Epic future history |
| *As I Lay Dying* | William Faulkner | Multiple-perspective narrative |

Entry is granular, and the Registry must record it so: **only the first four Nancy Drew novels were freed in 2026; later books and later character developments were not.** A series is not an eligibility unit; a work, in a specific edition, is.

### 61.4 The Discovery Bridge and the targeting rule

The commercial opportunity is not advertising inside free Worlds, but meaningful literary connection: curated pathways from a classic to modern Worlds in a documented relationship to it.

| Free entry World | Reader interest | Potential paid destination |
|---|---|---|
| Dracula | Vampires and gothic mythology | Licensed vampire universe |
| Frankenstein | Creation, consciousness, responsibility | Contemporary science-fiction and philosophical-horror authors |
| Sherlock Holmes | Investigation and hidden connections | Modern detective and thriller universes |
| The Odyssey | Mythology, gods, epic journeys | Modern mythology-based literary Worlds |
| The Time Machine | Time travel and speculative futures | Contemporary science-fiction universes |

These are thematic connections, not shared canon or existing partnerships, presented as what they are. A reader must see **why** a recommendation is relevant: shared genre, literary influence, subject matter, or an editorially documented relationship.

The targeting rule is normative and is stated here as a rule of this Bible:

> **Recommendations to paid Worlds use the reader's current, explicitly chosen exploration context and editorially documented relationships. They are transparent and optional. They never mine the private Worldprint for commercial targeting.**

This is the no-hidden-profiling invariant applied to this pillar's growth engine. What a reader is openly exploring in this session may inform what they are shown; what their private World contains may not. Quietly converting personal testimony into commercial targeting is prohibited regardless of its conversion performance.

### 61.5 Free-tier ethics

Each free World offers: **Explore** (interactive locations and maps), **Read** (the original text), **Discover** (guided Expeditions), **Interact** (bounded character dialogue), **Remember** (a private Reader Passport), and **Attend** (free scheduled literary events).

The free library is a **full experience, not a crippled demo**. Expensive capabilities, particularly generative dialogue, may carry **reasonable usage limits**, provided a **source-backed scripted interaction remains available** when limits are reached. Paid differentiation is **by addition, never by deliberate frustration**: original stories, author participation, exclusive events, licensed media, richer experiences — never by making the free classics worse.

### 61.6 The Literary Genealogy Engine

The Literary Genealogy Engine maps the evolution of literary ideas — vampire literature, detective fiction, science fiction, fantasy, cosmic horror, mythology-based fiction, philosophical literature — applying the canon classes of §56.3 to literary history itself. Its central distinction is between **source-supported influence** and **mere thematic resemblance**: resemblance is not descent, and the graph must not draw a descent line on resemblance alone.

The example chain for vampire fiction is:

* **The Vampyre (1819)** — an early influential literary vampire story.
* **Carmilla (1872)** — gothic vampire fiction of intimacy, secrecy, and psychological tension.
* **Dracula (1897)** — a major landmark in the development of modern vampire literature.
* **Interview with the Vampire (1976)** — a later exploration of vampire identity and interior experience, **an interactive destination only under license**.

The last entry states the governing rule: **a genealogy link may be shown as scholarship while its destination is served only under license.** Literary history is discussable; a protected work's World is not thereby buildable. The scholarly graph and the rights graph are separate, and the first never overrides the second.

### 61.7 The acquisition funnel, the World Factory, and the SourceEdition

The funnel below is **ILLUSTRATIVE, not a forecast**. It states a hypothetical monthly cohort in order to define what would need to be measured; it predicts nothing.

| Stage | Rate | Count |
|---|---|---|
| Visitors | — | 100,000 |
| Visitors who explore a World | 40% | 40,000 |
| Explorers who create accounts | 35% | 14,000 |
| Account holders who subscribe | 8% | 1,120 |

That is: 100,000 × 40% × 35% × 8% = **1,120 subscribers** (1.12% end-to-end). The stages are **conditional**, and paid conversion depends on licensed inventory, pricing, and quality. The metric set for any real cohort is: **return visits, completed Expeditions, voluntary Seed saves, and Passport creation**, plus previews, subscriptions, cancellations, and creator revenue. The central question is whether free exploration creates enough ongoing value that readers naturally want more Worlds.

Scaling beyond flagship Worlds requires a repeatable pipeline, the **World Factory**, in eight steps:

1. **Rights verification** — confirm the exact source edition and intended markets.
2. **Source ingestion** — import structured text and preserve chapter references.
3. **Storyworld extraction** — identify locations, characters, events, objects, and relationships.
4. **Canon verification** — review extracted facts and unresolved interpretations.
5. **Experience generation** — build maps, Expeditions, and approved character interactions.
6. **Editorial quality assurance** — test navigation, accessibility, source fidelity, and content suitability.
7. **Publication** — release the free World with clear source attribution and edition information.
8. **Discovery connections** — add relevant, authorized pathways to other free or paid Worlds.

The pipeline rests on one architectural rule: **rights attach to editions, not works.** A World never vaguely claims to represent an author's entire body of work. The entity that carries this rule is the SourceEdition, **Specified** as follows:

```ts
interface SourceEdition {
  editionId: string;
  workId: string;
  title: string;
  author: string;
  originalPublicationYear: number;
  sourceUri: string;
  sourceDigest: string;
  language: string;
  translator?: string;
  illustrator?: string;
  rightsStatus:
    | "VERIFIED_US_PUBLIC_DOMAIN"
    | "VERIFIED_LICENSED"
    | "REVIEW_REQUIRED";
  permittedMarkets: string[];
  verificationRecordId: string;
}
```

**The Storyworld Engine generates only from verified source editions.** A later adaptation is a separate source with its own rights record, ingested and verified as itself, never inherited from the work it adapts. The practical consequence is visible in the launch library: for *The Odyssey*, an ancient work in no modern copyright, **translation rights are the gating item** — the specific translation used is a specific edition with a specific rights status, and the World cannot be built until that edition's record stands verified.

### 61.8 Phased launch and explicit deferrals

The library launches in three phases:

| Release | Worlds | Primary objective |
|---|---|---|
| Launch | Wonderland, Dracula, Sherlock Holmes | Prove fantasy, horror, and mystery exploration |
| Expansion | Frankenstein, Oz, The Nautilus | Broaden genre appeal and guided discovery |
| Literary Network | The Odyssey, The Time Machine, selected 1930 works | Establish cross-World connections and recurring releases |

The first three are distinct mechanic tests, not merely famous titles: Wonderland tests imaginative environments and nonlinear navigation; Dracula, documents, timelines, and gothic atmosphere; Holmes, evidence handling and reader participation.

Explicit deferrals, part of the proposal: **massive 3D open worlds, unrestricted AI character roleplay, thousands of automatically published books, and complex subscription bundles** — each adds cost and risk before readers' valuation of the core experience is known.

### 61.9 Four governing rules — a proposed Bible decision

The source material recommends formally establishing the Free Worlds Initiative as a permanent pillar of SEE MY WORLD, under four governing rules:

1. Public-domain Worlds remain **meaningfully accessible without payment**.
2. **Every World identifies its source edition, its rights status, and its canon boundaries.**
3. Recommendations to paid Worlds are **transparent, relevant, and optional**.
4. **Reader Passports and personal Worlds remain private and portable** according to their respective permissions.

**These four rules are a PROPOSED formal Bible decision**: recorded with their intended normative force, but not settled by this text and binding nothing until a founder decision adopts them. The Initiative's proposed permanence has the same status.

## Chapter 62 — The Vesper vertical slice and Storyworld acceptance

This chapter records the proposed first implementation — one rights-controlled universe built end to end as a vertical slice — and the acceptance standard a Storyworld pilot must meet before its results may be cited as evidence.

### 62.1 The proposal and its candidate

**The vertical slice in this chapter is a PROPOSAL, not a decided plan.** Nothing is commissioned, no schedule is set, and the choice of first universe remains a founder decision. The proposal is to begin not with a major licensed franchise or a photorealistic flagship, but with a complete universe whose rights and source materials are already under the creator's control. The source document names **God Complex / Vesper University** as its demonstration candidate.

A Vesper Literary World, as proposed, would include a navigable campus, its Houses, characters, familiars, divine instruments, student relationships, a controlled timeline, and live author events. Its suitability rests on difficulty: complex identity restrictions, multi-book revelations, and rules that must stay consistent across experiences. **A Book One reader must not encounter a Book Three revelation** — one requirement exercising the Character Canon Contract's knowledge boundaries, the spoiler gates of the protected-request chain, and the Canon Graph's temporal validity at once.

### 62.2 The vertical-slice list

The proposed first vertical slice comprises:

* Import one authorized novel together with its World Bible.
* Extract characters, locations, relationships, and events **with source references**.
* Provide an **author approval interface** for the extracted canon.
* Generate an **illustrated, navigable World with five approved locations**.
* Introduce **book-specific spoiler controls**.
* Provide a **Reader Passport**.
* Host **one live guided event** inside the World.
* Publish **one Living Episode with an optional Seed**.

The presentation is **illustrated 2D or 2.5D, not full 3D** — keeping production feasible while testing what matters: canon-governed navigation, bounded character knowledge, and spoiler safety for a real reader and author.

A Living Episode is the durable form of a live event: after a reading, discussion, launch, lesson, or guided tour inside the World, the experience persists as an episode with source-linked lore and optional Seeds (§57.3).

### 62.3 Success criteria and the acceptance bar

The pilot should measure whether readers can navigate the World, understand which information is canonical, avoid unwanted spoilers, and find value beyond a static encyclopedia — and whether authors can identify and correct extraction errors **without technical assistance**.

The acceptance bar is absolute, and is the standard for the whole pillar:

> **Zero known unauthorized canon or spoiler disclosures in the acceptance suite.**

"Known" is operative: every disclosure failure found in acceptance testing is a blocking defect, corrected and retested, and no pilot proceeds carrying a known failure. A beautiful World with one known spoiler leak has failed acceptance. The Storyworld acceptance suite, like the others named in this edition, is **planned and unexecuted**; no result is reported here, because no test has been run.

### 62.4 The three-product verdict and the next milestone

The strategic verdict of the source material is that this expansion creates three potentially valuable products within one platform:

| Product | Customer | Core value |
|---|---|---|
| Storyworld Studio | Authors and publishers | Turn authorized literary works into interactive environments |
| Living Library | Readers and fans | Explore books as persistent, connected experiences |
| Canon Engine | Authors, editors, franchise teams | Maintain continuity and control approved story knowledge |

The long-term opportunity, if the slice validates the mechanisms, is a marketplace of authorized Literary Worlds navigated under one private Passport and World. Any defensible advantage must come from execution — rights management, canon fidelity, spoiler safety, author control, meaningful reader experiences — each still a hypothesis under test.

The named next milestone is the **Storyworld Engine v1.0 specification** — manuscript extraction, source-linked canon verification, temporal character knowledge, spoiler-safe rendering, author approval workflows, and the first working prototype. **It is explicitly NOT commissioned**, in the same status as the Literary Subscription and Franchise Licensing Specification and the Free Worlds Library Blueprint named by the source material. Part X ends where the pillar stands: described as a proposal, governed by contracts where stated, awaiting the decisions that would turn any of it into work.

# Part XI — SEE MY WORLD: Education — The Living Classroom

Part XI establishes SEE MY WORLD: Education, named in its source as The Living Atlas of Human Knowledge, as the fourth product pillar of SEE MY WORLD. Its governing principle is stated verbatim: "The World makes knowledge explorable. The evidence makes it trustworthy. The learner remains in control." A student learning about ancient Greece, under this design, does not merely receive information: the student enters a reconstruction of Athens, investigates what happened and why, examines the sources on which the reconstruction rests, encounters a labelled simulation of Socrates, explores the mythology of Olympus, and compares the stories preserved about the gods with historical religious practice. Students investigate the material, question it, interact with it, and build an understanding of how its pieces connect. That is also the pillar's principal risk: an explorable World can make an interpretation feel settled merely because it is vivid, and a simulated person can be mistaken for the person simulated. This part therefore specifies the evidence structures, labelling rules, teacher controls, and privacy boundaries that keep exploration answerable to the record.

The four pillars are governed by four authority regimes, and the regimes never merge. A claim authoritative under one regime acquires no authority under another by being carried across a shared engine, a shared graph, or a shared interface.

| Pillar | Governing authority |
|---|---|
| Personal Worlds | Governed by owner testimony |
| Creator Worlds | Governed by editorial approval |
| Literary Worlds | Governed by author-approved canon |
| Educational Worlds | Governed by evidence and scholarly review; a classroom World is additionally governed by educational permissions and student privacy requirements |

Scope and status require plain statement. This part is post-pilot future scope, received as Continuation 19 while the Edition 1.3 compilation was in progress and integrated into the running build under the compile-all instruction, following the precedent set when the Complete Project Audit arrived during the Edition 1.2 build. The material in this part is Concept unless a contract is stated as Specified in the chapter that carries it. Nothing in this part is implemented or tested. The 238-case acceptance suite summarised in Chapter 70 is planned only; no case in it has been executed. No institutional price is set in this part, no standards certification is claimed in this part, and no founder decision is settled here. Where this part touches the testimony model specified earlier in this Bible, it cites Chapter 7 and does not restate that arithmetic.

## Chapter 63 — The Living Classroom: a fourth authority regime

This chapter defines the educational pillar as a fourth authority regime beside testimony, editorial approval, and canon, describes the five educational World types that run on the shared World Engine, and states the strategic frame in which the four pillars coexist without their rules being combined. In an Educational World, neither the owner's affirmation, nor a creator's editorial choice, nor an author's canon determines what may be presented as so. Evidence and scholarly review determine it, and where the evidence is thin, divided, or absent, the World must show that condition rather than conceal it.

### 63.1 Why a separate regime is required

The three earlier regimes each answer a legitimate question. Testimony answers what a person affirms about their own interests and experience. Editorial approval answers what a creator chooses to publish in a Creator World. Canon answers what an author or rights holder has approved as belonging to a literary universe. None of those answers the question an Educational World poses, which is what the surviving evidence supports, over what period it is believed to have held, and where informed interpreters disagree. A personal affirmation cannot settle a historical dating, and an author's approved text cannot settle what happened in a city in a given century, even when that text is a primary source, because its status as evidence still has to be assessed, cited, and placed beside other evidence.

The converse also holds: evidence and scholarly review do not govern a Personal World, and nothing in this part gives an educational reviewer authority over what a person affirms in their own World. A classroom World is additionally governed by educational permissions and student privacy requirements, specified in Chapter 68; those requirements constrain the educational deployment and do not extend educational authority into the other pillars. Where a learner moves between pillars, the governing regime changes at the boundary, and the interface must make the change visible.

### 63.2 The five educational World types

All five types run on the same underlying World Engine, with different evidence models and different educational interactions. Sharing an engine is an architectural economy; it is not a sharing of authority.

**Historical Worlds** are reconstructed civilisations, periods, cities, political systems, social movements, and major events. Students investigate what happened, why it happened, and whose perspectives survive in the evidence. The third question is integral to the type: the survival of perspectives is uneven, and a World that presents only the perspectives that happen to survive, without marking the absence of the others, teaches a distorted account by omission.

**Historical Figure Worlds** explore a person's life, writings, relationships, influences, decisions, and historical context. Artificial-intelligence-assisted conversations within such a World are labelled educational simulations. They are not authentic recordings, and they are not verbatim statements by the person. Chapter 65 specifies the three encounter modes and their labelling rules.

**Mythology and Pantheon Worlds** explore gods, genealogies, myths, rituals, symbols, and regional variations across Greek, Norse, Egyptian, and other traditions. Students distinguish historical belief, literary accounts, and modern reinterpretations — categories readily confused when a tradition is presented as a single coherent storyworld. Chapter 66 specifies the Pantheon Engine.

**Scientific Discovery Worlds** investigate scientific ideas through experiments, historical discoveries, models, and interactive simulations. Students learn how evidence changes scientific understanding — not only what is currently understood, but the process by which earlier understandings were displaced.

**Civilization and Connection Worlds** explore trade, migration, languages, technological exchange, cultural interaction, and the relationships between societies across geography and time. Connection itself is the object of study: societies are presented in relation to one another, not as isolated units developed independently and later compared.

### 63.3 The strategic frame: four pillars, one architecture

The strategic summary in the source (§214) presents SEE MY WORLD as four interconnected but independently governed experiences: Personal Worlds, offering owner-affirmed interests and private discovery; Creator Worlds, offering live experiences, communities, and original content; Literary Worlds, offering free classics and licensed fictional universes; and Educational Worlds, offering evidence-backed history, mythology, science, and learning. The central architecture remains unified; the rules of authority stay distinct. The source is explicit that those differences are not implementation details; they are the foundation of trust.

Interconnection without merger is the operative requirement. A learner should be able to travel from a mythological network to a historical environment to a literary work and back, and Chapter 69 provides the typed relation vocabulary that makes such travel intelligible. But travel is not transfer of standing: a figure depicted in myth does not become a historical person by being reachable from a historical city in the same session, and a literary treatment of a period does not become evidence for that period by being well researched. Each World entered carries its own regime, evidence model, and review status, visible at the point of entry.

## Chapter 64 — The Temporal Knowledge Graph and the Historical Evidence Engine

This chapter specifies the two structures on which the credibility of the educational pillar depends: the Temporal Knowledge Graph, which records when an assertion is believed to have been true and what evidence supports that dating, and the Historical Evidence Engine, which binds every educational claim to its evidence and its evidence status.

### 64.1 The Time Portal

The Time Portal is a historical time-navigation capability. A student selects a civilisation and moves through major periods, observing changes in geography, government, technology, culture, and everyday life. Its critical feature is that a location changes across time. The same city must not appear identical in 500 BCE and 100 CE. Buildings, borders, political institutions, populations, and cultural practices evolve, and a reconstruction that holds them constant across centuries teaches a falsehood more effectively than a textbook error would.

Reconstructions must therefore identify which features are evidence-based and which are interpretive, and period ranges used in navigation are illustrative historical ranges.

### 64.2 The Temporal Knowledge Graph

The World Engine requires a Temporal Knowledge Graph that records when an assertion is believed to have been true and the evidence supporting that dating. An assertion therefore carries temporal validity — the interval over which it is believed to hold — together with the dating evidence on which that interval rests. An assertion without temporal validity is not a historical assertion in this model; it is an unplaced claim, and presenting it inside a dated environment would silently assign it a date it never earned.

Temporal validity also disciplines change. When a student moves a location from one period to another, the graph determines which assertions enter, which leave, and which persist, and each determination traces to recorded evidence rather than to an authorial decision made at the level of the scene. Where dating is contested, the contested interval is itself part of the record: the graph holds the disagreement as data, with its supporting sources, instead of resolving it invisibly.

### 64.3 The Historical Evidence Engine

The Historical Evidence Engine is the architectural feature that makes the educational expansion credible. Every educational claim needs a relationship to evidence. The claim contract is stated in the source as follows, and is reproduced verbatim.

```ts
type EvidenceType =
  | "PRIMARY_SOURCE"
  | "ARCHAEOLOGICAL"
  | "SECONDARY_SCHOLARSHIP"
  | "ORAL_HISTORY"
  | "CULTURAL_TRADITION"
  | "RECONSTRUCTION";
interface EducationalClaim {
  claimId: string;
  worldId: string;
  statement: string;
  evidenceRefs: string[];
  evidenceStatus:
    | "WELL_SUPPORTED"
    | "SUPPORTED_WITH_LIMITATIONS"
    | "DISPUTED"
    | "UNKNOWN"
    | "SIMULATED";
  validFrom?: string;
  validUntil?: string;
  editorialRevision: number;
  reviewedBy: string[];
}
```

### 64.4 The rule against numerical certainty

The following is a rule of this part, stated as a rule: the system does not assign numerical certainty scores to historical interpretations. It shows what sources support a claim, what remains uncertain, and where scholarly disagreement exists.

A percentage attached to an interpretation would appear to summarise the evidence while actually concealing it, collapsing the number of sources, their independence, their proximity to the events, and the distribution of scholarly opinion into a single figure a learner could compare without understanding. Two claims could receive the same figure for entirely different reasons. The evidence status vocabulary in §64.3, together with the cited sources, conveys the distinctions that matter and leaves the judgement visible to the learner and reviewable by a teacher.

### 64.5 The Evidence Lens

The Evidence Lens gives students three views over the same World. **Experience View** is the reconstructed environment itself, explored as a place. **Evidence View** exposes the documents, artifacts, and scholarship supporting the reconstruction, so that a feature encountered in Experience View can be traced to what it rests on. **Uncertainty View** shows which buildings, events, appearances, or interpretations are disputed or speculative.

The three views are one World under three kinds of scrutiny, not three Worlds of differing quality. Their value lies in the movement between them: a learner who has walked a street in Experience View, inspected its basis in Evidence View, and then seen in Uncertainty View which of its buildings are conjectural has learned something about historical method that no single view teaches alone.

## Chapter 65 — Historical Figure Encounters

This chapter specifies how a learner may encounter a historical person inside an Educational World. The capability is among the most engaging the pillar proposes and among the easiest to misuse, because a conversational interface invites the learner to treat its output as the person's own speech. The chapter therefore begins from a prohibition and builds three labelled modes inside it.

### 65.1 The governing prohibition

A historical simulation must never masquerade as the actual person. This is normative for every encounter in every Educational World, whatever the figure and whatever the mode. The learner must always be in a position to know that they are interacting with a simulation constructed from sources, and the labelling that establishes this is part of the encounter itself, not a disclaimer held elsewhere in the product where it can be separated from the experience it qualifies.

### 65.2 The three modes

**Documented Voice** presents verified quotations or careful paraphrases of positions from verified sources, with citations. The citation is constitutive of the mode: a quotation without a source the learner or teacher can inspect is not Documented Voice, however accurate it may happen to be. Where direct writings do not survive, the mode identifies the later reporting sources through which the person's views are known — a requirement that matters most for precisely the figures learners are likeliest to want to encounter, many of whom wrote nothing that survives, or nothing at all.

**Historical Simulation** is an artificial-intelligence-assisted conversation grounded in period-specific knowledge, labelled as an educational reconstruction. The figure may explain ideas and reason in a manner consistent with the record. The mode must not invent undocumented personal experiences as historical fact: it may not supply a childhood memory, a private conversation, or a motive that no source records and present it in the figure's voice as though it were part of the life.

**Counterfactual Laboratory** allows students to test hypothetical decisions and compare possible consequences with what the historical record establishes. Hypotheticals are clearly separated from actual events, in presentation and not merely in underlying data: a learner who explores what might have followed from a different decision learns the shape of the actual record by seeing where the exploration departs from it.

### 65.3 The Socratic Encounter

The source's worked example is a student asking Socrates: "Why should I obey a law I believe is unjust?" The system can guide the student through Socratic questioning and present relevant passages from Plato's *Crito* and other sources. The encounter is stronger as a lesson than a chatbot speaking in period dress would be, because of what it must also explain.

Socrates left no known writings of his own. Knowledge of his views comes through accounts by others, which are not always consistent — and the simulation must say so. The disclosure is part of the encounter's content, not an interruption of it: a student who learns that the Socrates available to them is reported by Plato, by Xenophon, and by others whose accounts differ has learned something true about how knowledge of the ancient world reaches the present. Under Documented Voice, the encounter cites the reporting sources. Under Historical Simulation, it remains a labelled reconstruction grounded in those sources and does not resolve their inconsistencies silently into a single settled voice. Under the Counterfactual Laboratory, a student may test how an argument might have proceeded differently, with the variation marked as hypothetical.

## Chapter 66 — The Pantheon Engine and the Civilization Engine

This chapter specifies two engines concerned with whole systems of belief and whole societies. The Pantheon Engine handles mythology as a network of source-specific traditions preserved in their differences. The Civilization Engine reconstructs societies from multiple situated perspectives. Both refuse a convenient simplification: merging variant traditions into one authoritative tree, and letting one simulated person's experience stand for a whole population.

### 66.1 No single universal canon

There is no single universal canon in mythology. Different authors, regions, and periods frequently preserve different versions of the same myth. The Pantheon Engine must therefore support multiple source-specific traditions rather than forcing every account into one definitive family tree. A deity's parentage or role may differ between Hesiod, Homer, local cult traditions, and later writers. The interface shows these differences and allows students to compare them.

The rule is structural, not presentational. If the underlying graph held one merged genealogy and the interface merely annotated it with variants, the merged version would still be the version navigation was built on, and the variants would read as departures from it. Instead, traditions are held as source-specific accounts in their own right, each attributable to its source and period, and comparison is an operation across accounts rather than a correction of one account by another.

### 66.2 Living-tradition safeguards

Some traditions are ancient literary subjects; others are living religious traditions. The distinction governs what may be built and how. For living traditions, the platform works with qualified cultural experts and, where appropriate, community representatives. It does not expose restricted sacred knowledge. It does not reduce active religious practices to collectible game mechanics. A sacred figure is not a fictional NPC available for unrestricted roleplay.

These are constraints on design, not courtesies. Restricted knowledge is excluded because its restriction is the point: material a tradition does not make generally available does not become available because a platform can model it. Mechanics built around collection or reward must not be attached to living practice, because the mechanic reframes the practice as content to be acquired. Expert and community involvement is how these judgements are made competently, since which knowledge is restricted and which practices are active are facts its own qualified members and scholars are positioned to state.

### 66.3 The Civilization Engine

The Civilization Engine reconstructs entire civilisations as explorable environments entered from a chosen perspective. Entering ancient Rome, a student might choose among a merchant, a soldier, an enslaved person, a senator, or a visitor from another region. Each perspective reveals different aspects of the same historical society: different streets matter, different institutions are open or closed, different risks and obligations structure an ordinary day.

The accompanying rule is that one simulated person's experience never represents everyone in that group. A perspective is a situated account, showing what a society looks like from a particular position within it; it is not a sample from which the group's experience can be generalised, and the interface must not present it as one. Multiple perspectives are distinct, partial views whose partiality is itself information, and comparing them is one of the principal things the engine is for.

### 66.4 The first educational library

The source proposes the following civilisations for the first educational library.

| World | Educational focus | Interactive mechanic |
|---|---|---|
| Ancient Egypt | Society, architecture, religion, Nile agriculture | River and settlement exploration |
| Classical Greece | Philosophy, democracy, mythology, warfare | Debates and historical inquiry |
| Ancient Rome | Government, engineering, trade, empire | Civic and infrastructure simulation |
| Mesopotamia | Writing, cities, law, early states | Archaeological investigation |
| Medieval West Africa | Trade, scholarship, kingdoms | Trade-network expedition |
| Maya Civilizations | Astronomy, mathematics, cities | Calendar and observation activities |
| Silk Roads | Cultural exchange, commerce, geography | Connected trade-route Worlds |

The library is geographically broad, is developed with appropriate expertise, and is not centred only on Europe.

## Chapter 67 — Teacher Studio, Classroom Expeditions, and assessment

This chapter specifies the instruments by which the educational pillar becomes usable in a school: the Teacher Studio, through which a teacher binds a World to a lesson; the Classroom Expedition, the structured form a lesson takes inside a World; and an assessment model that measures understanding rather than engagement. Schools will not adopt the pillar merely because the Worlds are impressive.

### 67.1 The Teacher Studio

In the Teacher Studio, the teacher can select a World, choose a learning objective, assign a guided route, set an appropriate reading level, and review student work. Selecting a World and an objective ties exploration to a curriculum intention; a guided route gives a class a shared path through material too large to cover undirected in a lesson period; review of student work lets the teacher see what students produced rather than only where they went.

The Studio also supports a teacher-controlled mode in which students cannot wander into unrelated Worlds during an assigned lesson. The scope of that control is normative: teacher control applies to the classroom session, and it must not permanently alter the student's personal World. Session scope is the whole of the authority granted. A teacher may bound what a student can reach while the lesson is in progress, because a lesson is a bounded activity conducted under the school's responsibility. That bounding expires with the session. It does not reach into the student's own World, does not remove or demote anything there, and leaves no residue the student carries out of the classroom. The distinction preserves both the teacher's legitimate need to run a lesson and the boundary between the educational and personal regimes established in Chapter 63.

### 67.2 Classroom Expeditions

A Classroom Expedition is a structured learning journey with a beginning, investigative tasks, and an ending. The source's example asks: was Athens a democracy? The student visits the Agora and investigates public life, identifying who could participate in civic decisions; explores civic institutions, examining the Assembly, Council, and courts through historically supported reconstructions; compares perspectives, investigating the status of citizens, women, enslaved people, and resident foreigners; inspects the evidence, reading selected primary-source excerpts and modern historical commentary; and then makes an argument, answering the question with a claim, supporting evidence, and acknowledgement of limitations.

This is not a multiple-choice quiz disguised as a video game. It is a guided investigation designed to develop historical reasoning. The sequence matters: the question is posed before the answer is reachable, the investigation supplies material that cuts in more than one direction, the evidence is inspected as evidence rather than absorbed as scenery, and the concluding task requires the student to commit to a claim while stating its limits. An expedition ending in a score for having visited the right locations would measure navigation; this format ends in an argument, and is assessed as one under §67.3.

### 67.3 Assessment measures understanding

The platform distinguishes engagement from learning. Time spent exploring a World does not prove that a student understands the subject. Four assessment types are specified.

| Assessment | What it measures |
|---|---|
| Evidence identification | Can the student distinguish sources from interpretations? |
| Chronology reconstruction | Can the student place events in an appropriate sequence? |
| Comparative analysis | Can the student explain similarities and differences? |
| Evidence-based argument | Can the student support a conclusion and acknowledge uncertainty? |

Two further rules govern automated assessment. Artificial-intelligence-generated assessment feedback remains advisory, especially for nuanced historical or philosophical arguments. Teachers can review student responses and override any automated feedback; the override is a normal exercise of the teacher's judgement, which remains the authority in the classroom. And for a rigorous pilot, learning outcomes are compared against conventional instruction rather than immersive experience being assumed automatically better — a comparison carried into Chapter 70.

## Chapter 68 — The School Integration Layer and the student-privacy firewall

This chapter specifies how the educational product connects to the systems schools already run, and the privacy firewall that bounds everything it does with students. The two subjects belong in one chapter because the integration layer is where student data moves, and the firewall states the conditions under which it may move at all. Privacy here is a nonnegotiable architectural requirement.

### 68.1 The School Integration Layer

The educational product integrates with existing school systems rather than requiring institutions to replace them. The relevant standards are LTI 1.3 and LTI Advantage, which support secure launches from learning management systems together with services for assignment and grade integration; OneRoster, for roster exchange; QTI, for assessments; and CASE, for academic standards alignment. Together they cover launching the product from the system teachers already use, knowing which students are in which class, exchanging assessment material, and aligning content to the standards a school is accountable for.

Integration is phased. The first release supports secure LMS launch, teacher assignment links, and minimal necessary student identity information. Grade passback and roster synchronisation follow after the core classroom experience has been validated. The phasing is deliberate: launch, assignment links, and minimal identity are sufficient to run a lesson and are the smallest set of connections that makes the product usable, so they are also the smallest exposure of student data. Grade passback and roster synchronisation move more data in both directions and create dependencies between the platform's records and the institution's records of achievement and enrolment; they are deferred until the classroom experience they would serve has been shown to work.

The following is a rule of this part: no standards-certification claim is made until an implementation has actually passed certification. Supporting a standard, designing against a standard, and intending to certify against a standard are different states, and only the third, completed, permits the claim. This Bible records the integrations above as proposed and phased; it does not record any of them as certified, implemented, or tested.

### 68.2 The student-privacy firewall

The firewall is stated in full. School-managed educational identities are separate from personal, creator, and subscription identities. No advertising or commercial profiling is based on student activity. There is no automatic transfer of school activity into a student's private Worldprint. There are no public student profiles, no unrestricted messaging, and no open community interaction in the K–12 pilot. Teachers and institutions hold controls for retention, deletion, and access. Design is age-appropriate, accessibility is addressed, and applicable child-privacy requirements are reviewed, including COPPA where relevant. In the FERPA context, providers receiving student education-record information under the school-official exception must satisfy specific conditions, including school control and restrictions on unauthorised use or redisclosure, and schools are advised to review educational applications before use; the firewall is written to sit inside those conditions rather than to argue around them.

Each element excludes a specific failure. Separate identities prevent a child's school activity from becoming part of the identity they carry as a consumer. The prohibition on advertising and commercial profiling removes the incentive that would otherwise press against every other element, since profiling is what makes student activity valuable to retain and combine. The prohibition on automatic transfer into a private Worldprint is the firewall's sharpest edge: transfer would move activity conducted under a school's authority, in a setting the student did not choose to make personal, into a private record the school neither controls nor can delete. Any such connection would require its own explicit basis; automatic transfer has none, and is excluded. Institution controls over retention, deletion, and access place decisions about student records with the body answerable for them.

### 68.3 Insulation from consumer monetisation

The closing rule of this chapter follows from the firewall and is stated separately because it concerns intent as much as data flow. A school account must not become a funnel that automatically exposes minors to commercial subscriptions. The school environment is insulated from consumer monetisation.

A separately governed public library may exist outside the school environment, and the licensing model in Chapter 70 includes an open learning tier for the general public, families, and independent learners. Neither fact licenses a path from a child's classroom account toward a paid consumer relationship: the student did not choose the school deployment, and the school did not procure it in order to market to its students. Insulation is maintained as an architectural property — separate identities, no profiling, no automatic transfer.

## Chapter 69 — Scholar Studio and the Educational Knowledge Graph

This chapter specifies how Educational Worlds are authored by qualified people and how the resulting knowledge is connected across domains. The Scholar Studio gives historians and educators an authoring path parallel to the one authors have for literary Worlds. The Educational Knowledge Graph supplies the typed vocabulary that lets a learner move between mythology, history, religion, literature, science, and philosophy without those domains being treated as interchangeable.

### 69.1 The Scholar Studio

Just as authors can generate literary Worlds from manuscripts, historians and educators can generate educational Worlds from verified collections. The Scholar Studio workflow runs in six stages: Sources → Claims → Historical Graph → Reconstruction → Expert Review → Classroom Publication. A historian might upload licensed or public-domain source documents, archaeological reports, maps, and scholarly references. The system proposes a World and identifies uncertain relationships. The expert can then approve, revise, or reject those proposals. A university could publish an interactive reconstruction of a historical site while preserving explicit distinctions between evidence and conjecture.

The ordering of the stages is the substance of the workflow. Sources precede claims, so nothing enters the World unanchored. Claims precede the graph, so relationships are drawn between stated propositions rather than impressions. The graph precedes reconstruction, so the built environment derives from recorded knowledge. Expert review precedes classroom publication and is a genuine gate: the expert approves, revises, or rejects, and rejection is an available outcome with effect. Scholar Studio creates a second professional authoring market — educational institutions and cultural organisations alongside literary authors — but its significance here is epistemic: it is how the scholarly review governing this pillar is actually performed, by named reviewers, on stated claims, before learners encounter them.

### 69.2 Typed cross-domain connections

The architecture becomes particularly powerful where domains meet. A student exploring Greek mythology could move from a mythological account of Athena to historical Athens, then to the Parthenon, to classical sculpture, to philosophical debates, and to later literary adaptations. These are not all the same type of knowledge, and the platform must label each connection. A connection might mean that an entity is depicted in myth, worshipped in historical practice, represented in art, referenced by a literary work, or interpreted by modern scholarship. Athena is the source's example: those five relations have five different evidentiary characters.

This relationship vocabulary is essential. Without it, mythology, fiction, archaeology, and history risk being treated as interchangeable facts. Typed relations make the kind of connection part of what is taught, and a literary work's reference to a historical figure is recorded as a fact about the work, not imported into the historical record.

### 69.3 The Educational Knowledge Graph contracts

The Storyworld Graph requires an educational extension. The contracts are stated in the source as follows, and are reproduced verbatim.

```ts
type KnowledgeDomain =
  | "HISTORY"
  | "MYTHOLOGY"
  | "RELIGION"
  | "LITERATURE"
  | "SCIENCE"
  | "PHILOSOPHY";
type KnowledgeRelation =
  | "DOCUMENTED_IN"
  | "DEPICTED_IN"
  | "WORSHIPPED_IN"
  | "INFLUENCED"
  | "PRECEDED"
  | "LOCATED_AT"
  | "INTERPRETED_BY"
  | "DISPUTED_BY";
interface EducationalWorld {
  worldId: string;
  domain: KnowledgeDomain;
  sourceCollectionIds: string[];
  curriculumAlignmentIds: string[];
  reviewStatus:
    | "DRAFT"
    | "EXPERT_REVIEW"
    | "APPROVED"
    | "RETIRED";
  ageBand: string;
  publicationRevision: number;
}
```

The `KnowledgeDomain` union fixes the domains across which relations may be drawn, so that a World's domain is a declared property rather than an inference from its content. The `KnowledgeRelation` union fixes the permitted relation types, and its inclusion of `DISPUTED_BY` alongside `DOCUMENTED_IN` and `INTERPRETED_BY` records disagreement as a first-class connection rather than as an annotation. The `EducationalWorld` interface binds a World to its source collections and curriculum alignments, records its review status through draft, expert review, approved, and retired, and carries its age band and publication revision.

Three properties follow. The graph supports multiple perspectives and competing scholarly interpretations, held as interpretations with their sources rather than resolved into a single position before the learner arrives. And it supports explicit uncertainty, represented in the structure rather than smoothed out of the presentation. Presentation may differ by age band — the same underlying content may be presented differently for elementary, secondary, and university learners — while the evidence remains consistent across those presentations.

## Chapter 70 — Institutional licensing and the Ancient Greece pilot

This chapter states the institutional business model for the educational pillar, records its pricing as deliberately undecided, and specifies the first pilot by which the pillar would be tested. It closes the part with the acceptance suite planned for the pillar and its release gates: the suite is planned, and no case in it has been executed.

### 70.1 Institutional licensing

The educational product has a separate institutional business model, distinct from the consumer and creator models elsewhere in this Bible. Five plans are proposed.

| Plan | Intended audience | Access |
|---|---|---|
| Open Learning | General public, families, independent learners | Selected free historical, scientific, and mythology Worlds |
| Teacher Studio | Individual educators | Lesson creation and classroom tools, subject to institution approval |
| School License | K–12 schools | Managed classrooms, curriculum alignment, support, privacy controls |
| District License | School districts | Central administration, approved integrations, reporting |
| University–Museum License | Higher education and cultural institutions | Advanced research, exhibits, seminars, custom Worlds |

Institutional pricing is deliberately unset in the source, pending hosting costs, procurement requirements, support obligations, and educational outcomes. It is recorded here as undecided. No price, price range, or pricing assumption is stated in this part, and none should be inferred from the plan structure or the ordering of the table. Educational outcomes belong on that list for the reason given in Chapter 67: the pillar does not assume its own effectiveness, and the value it may charge for has to be established by the pilot below before it can be priced.

Museums, libraries, and universities are identified as valuable early partners, because they often hold subject expertise, curated collections, and a reason of their own to offer interactive educational experiences. They are also sources and reviewers, not only channels, and Scholar Studio in Chapter 69 is designed for exactly such contributors.

### 70.2 The Ancient Greece pilot

The recommended first educational pilot is Ancient Greece: history, mythology, and philosophy. It provides a concentrated test of nearly every educational capability the pillar proposes, which is why it is selected over a narrower subject that would exercise only part of the design.

| Component | Selection |
|---|---|
| Historical environment | Classical Athens |
| Historical figure | Socrates |
| Mythological network | Olympian pantheon |
| Primary texts | Selected Plato, Homer, Hesiod passages |
| Core investigation | Democracy, citizenship, and evidence |
| Learning modes | Explore, investigate, compare, argue |

The pilot is reviewed by qualified history and classics educators, and is tested with teachers and students under appropriate institutional permissions. It measures learning outcomes, usability, accessibility, and teacher preparation time. Teacher preparation time is a first-class measure and not an afterthought: a simulation that takes a teacher three hours to configure for a forty-minute lesson is not a successful classroom product, however well its students perform. Learning outcomes are measured in the comparative frame established in Chapter 67, against conventional instruction, rather than reported as absolute gains attributable to immersion by assumption.

### 70.3 The acceptance suite and its release gates

The educational acceptance suite comprises 238 cases across nine categories, covering historical evidence integrity, temporal reconstruction, historical figure simulation, mythology source variation, teacher lesson workflows, assessment and feedback, school integrations, student privacy and security, and accessibility and age suitability. The full suite table is carried in Appendix E. The suite is planned only: no case has been executed, and no result is recorded for any category.

Four release gates are attached to the suite. There must be zero known critical student-data disclosures. There must be no unlabeled fabricated historical quotations. Core navigation must be accessible. And the pilot's historical claims must have expert approval. A gate is a condition on release, not a description of a state already achieved; all four stand open.

The source names a next milestone for this pillar: a Living Atlas Education Engine v1.0 specification, defining the Temporal Knowledge Graph, the Evidence Lens, the Historical Figure Simulation Contract, the Pantheon Engine, the Teacher Studio, the Classroom Expedition format, and the school integration boundaries, followed by a single integrated demonstration — Ancient Athens, with one historical investigation, one mythology network, one source-grounded Socratic encounter, and one teacher-assigned lesson. That milestone is not commissioned. It is recorded here as the source's recommendation, and no work described in this part is authorised, scheduled, or begun by its being recorded.

# Part XII — The Immersive World

Part XII specifies the Immersive World Runtime as the shared experiential foundation for all pillars of SEE MY WORLD. The Runtime is a runtime layer, not a pillar, and not a new authority regime: it consumes authorized manifests and invents no governance of its own. Authority remains where the earlier parts of this Bible place it — with the owner in a Personal World, with editorial approval in a Creator World, with author-approved canon in a Literary World, and with evidence and scholarly review in an Educational World. The Runtime changes how an authorized World is presented, inhabited, and returned to; it does not change who may decide what belongs in that World, what may be claimed within it, or what may be disclosed from it. Where this part and an earlier part appear to differ on authority, the earlier part governs the authority question and this part governs only the experiential question.

The change described here is in the visitor's relation to a World. In the preceding parts, a World is principally something a person views, navigates, and reads. Under this part, a World becomes something a person can inhabit, influence within authorized limits, remember, and return to. The goal is maximum meaningful presence, not maximum sensory stimulation. A spectacular environment that teaches nothing, remembers nothing, and offers no meaningful choices is still only a decorated surface, however convincing its rendering.

Immersion under this part is device-agnostic: the dimensions, engines, and contracts here can exist on a phone, computer, tablet, classroom display, or VR headset, and SEE MY WORLD should never require expensive hardware to deliver its defining experience. The strategy is progressive immersion — one approved content base, presented at increasing levels of spatial embodiment, with progress portable across devices.

Scope and status require plain statement. All levels and capabilities in this part are conceptual — proposed, not implemented, and not currently available modes. Nothing in this part is implemented or tested. The Immersion Acceptance Framework summarised in Chapter 77 is a framework only; no result under it is described as achieved. No founder decision is settled here. Where this part touches the testimony model, it cites Chapter 7 and does not restate that arithmetic.

## Chapter 71 — The Immersive World: seven dimensions and the Immersion Ladder

This chapter defines immersion as a measurable capability framework of seven dimensions rather than a visual design style, records what the cited research changes about the strategy, and closes with the Immersion Ladder — the four proposed levels at which the same approved content may be presented.

### 71.1 The seven dimensions of immersion

Immersion is a measurable product capability: a design may be strong in one dimension and absent in another, and the framework makes that unevenness visible.

**Spatial** — the visitor feels located within a World, with places in intelligible relation to one another.

**Sensory** — sound, atmosphere, and responsive environments contribute coherently to place, time, and action.

**Intellectual** — the visitor can investigate and understand; the material rewards inquiry rather than only observation.

**Emotional** — the visitor develops meaningful narrative connections that accumulate across visits.

**Agency** — the visitor makes consequential choices, whose effects are understandable and recorded within the limits Chapter 75 specifies.

**Continuity** — the visitor returns to a World that remembers approved progress, examined artifacts, and opened paths.

**Social** — the visitor can share experiences with consent, under the consent and transparency rules of Chapter 75.

The framework is independent of rendering technique. A text-led experience with strong intellectual, agency, and continuity dimensions may be more immersive, under this definition, than a fully three-dimensional environment offering none of them.

### 71.2 What the research changes

Immersive technology is increasingly practical, but the evidence does not support the assumption that more realism always produces better outcomes. A 2026 umbrella review covering 93 research articles found promising results for knowledge acquisition and higher-order cognitive skills, but mixed results for some emotional and skills-based outcomes. A 2025 review of educational VR highlighted the value of pre-training and active learning tasks. WebXR provides a standards-based route to optional browser-based VR and AR, although device capabilities, accessibility, performance, and user consent require careful handling.

Three design decisions follow, and they govern every engine in this part. First, presence must serve a purpose: students should investigate evidence; readers should experience a story; creators should connect with an audience. Second, every immersive experience needs a meaningful action — looking around is not enough. Third, reflection is part of immersion, not the opposite of it: the ability to pause, examine a source, compare interpretations, and resume is a competitive advantage of this design.

The recommended technology strategy is therefore progressive immersion.

### 71.3 The Immersion Ladder

The Immersion Ladder names four proposed levels of presence. The same approved World content should power all four levels. A user who switches devices should not lose their progress or enter a different version of the story, and a creator who authorizes content for one level has not thereby authorized a separate, divergent work at another.

**L1 — Living Atlas.** The World as a navigable atlas: places, connections, and content arranged spatially, with the visitor moving between locations and encountering material in place.

**L2 — Spatial 2.5D.** Navigable 2.5D scenes, environmental audio, animated objects, depth, contextual interactions, and persistent locations. This level is the recommended first flagship: it increases spatial and sensory presence while remaining available on ordinary devices, and it exercises the persistent state, artifact, and lens systems every higher level depends on.

**L3 — Embodied.** A fuller embodied presentation, in which the visitor occupies a position within the scene and interacts from that position, at correspondingly higher production and performance cost.

**L4 — VR/AR.** Virtual and augmented reality presentation, via WebXR as the standards-based optional route. It is last in the strategy because its audience is device-dependent, its accessibility and comfort requirements are the most demanding, and the research does not establish that its additional realism produces proportionally better outcomes.

All four levels are explicitly conceptual, not implemented, and not currently available modes. Progress is portable across devices and across levels, because the underlying approved content, memory, and state are shared rather than duplicated per level.

## Chapter 72 — The Living Environment Engine

This chapter specifies the Living Environment Engine, which makes environments responsive without making them unpredictable: a visitor should be able to learn how a World responds, form expectations about it, and be right. An environment that changes in ways no one authorized does not feel alive; it feels unreliable, and in a historical or literary World it also becomes a source of false claims.

### 72.1 Responsive, but never unpredictable

A World could change according to time, narrative state, weather appropriate to the scene, approved events, and visitor choices. Each driver is bounded: weather, for example, is appropriate to the scene — a constraint on selection, not a licence to generate any weather that would be dramatic.

Three forms illustrate the range. In a Dracula experience, a corridor could gradually be revealed as the reader discovers relevant journal entries. In an ancient Athens experience, different civic activities could be shown during an approved historical scenario. In a Creator World, lighting, stage, and interactive exhibits could change during a live event. In each form the change is legible in retrospect: a visitor, creator, or reviewer can ask why the environment is as it is and receive an answer naming the driver and the authorization behind it.

### 72.2 The World State Manifest and the controls on invention

All change under this engine is driven by an approved World State Manifest, recording what states a World may occupy and what transitions are permitted. The engine executes transitions the manifest allows; it does not originate transitions of its own. Where a desired effect has no entry, the effect does not occur; the route to it is amendment of the manifest through the World's own authority regime.

The controls are stated here as rules, and they bind every environment in every pillar. The environment cannot invent historical facts: a responsive Athens may rearrange approved civic activities; it may not introduce an institution, practice, or event for which the World's evidence record offers no support, however well such an invention would fill an empty street. The environment cannot reveal future plot information: environmental storytelling is still storytelling, and lighting, arrangement, population, or emphasis may not disclose what the visitor has not yet been authorized to encounter. The environment cannot generate new canon simply to make a scene more dramatic: dramatic need is not an authority, and if a scene would be improved by a fact, figure, or event the World's authority has not approved, the improvement is unavailable until that authority approves it.

Responsiveness is a presentation capability. The moment an environment can add facts, disclose plot, or extend canon in pursuit of effect, it has become authorship exercised by a component no regime has authorized to author anything.

## Chapter 73 — Memory, Consequence, and Presence

This chapter specifies two engines that make a World feel inhabited over time. The Memory and Consequence Engine determines what a World remembers, whose memory it is, and what a visitor's actions may and may not alter. The Presence Engine determines who else appears to be in the World, and under what description. Both rest on one principle: the visitor's experience is genuinely theirs, and consequential within its own scope, without becoming an unauthorised revision of the World itself.

### 73.1 The Memory and Consequence Engine

A World becomes more convincing when it remembers what the visitor has deliberately done — case notes left where they were, artifacts already examined. What is remembered is what the visitor did as an act within the experience: a location visited, a document examined, a puzzle completed, a branch selected.

Three kinds of memory are distinguished, and the distinction is normative: conflating them would let a visitor's private progress silently become a change to a canonical record.

| Memory | Example | Ownership |
|---|---|---|
| Personal journey | Visited locations, saved notes, completed investigations | Visitor |
| Experience state | Doors opened, puzzles solved, story branch selected | Session or visitor, as authorized |
| World canon | Established story events, historical evidence, creator-approved additions | Author or educational publisher |

Personal journey memory belongs to the visitor and follows the portability obligation of Chapter 71. Experience state belongs to a session or to the visitor, as authorized; its persistence beyond that session is a matter of authorization rather than assumption. World canon belongs to the author or educational publisher, and changes only through that authority's own processes.

A visitor can change their experience without automatically changing the canonical World. That separation enables meaningful agency without corrupting the original literature or the historical record: a reader may reach an alternate outcome recorded in their own experience state while the canonical sequence stands as its author approved it, and a student may test a course of action while the World's historical record remains the record the evidence supports.

The distinction is stated in the source in a single sentence, adopted here in substance as the rule of the chapter: "The World has an authoritative history. The visitor has a personal history within it." Both halves bind. The first denies the visitor's history any automatic canonical effect. The second denies the World's authority any claim over the visitor's history: a personal journey is not raw material for canon, and is not rewritten to match a later canonical revision without the visitor's knowledge.

### 73.2 The Presence Engine

Presence does not require hundreds of simulated characters wandering aimlessly. A World feels inhabited when the figures in it have a reason to be there, a defined relation to the visitor, and a description the visitor can rely on. The Presence Engine defines four classes of inhabitants, and every figure a visitor encounters belongs to exactly one of them.

**Narrative characters** are approved figures from the literary universe, bound by canon and spoiler rules. What they may say, know, and reveal is limited by the canon contract in Chapter 74 and by the visitor's authorized point in the work.

**Historical simulations** are educational reconstructions with visible evidence boundaries. The boundary is visible, not merely recorded: the visitor can see where the reconstruction rests on evidence and where it becomes interpretation, in the manner the Reality Lens in Chapter 76 generalises.

**World guides** help visitors navigate, investigate, and understand the environment, including, under the contract in Chapter 74, an honest account of scholarly uncertainty where uncertainty exists.

**Live participants** are actual visitors who have opted into an authorized shared session. Their presence is real presence, present only because they opted in and only within the session they authorized.

The following is stated as a rule of this part: a World never blurs the distinction between a real person, an AI simulation, and a scripted character. The rule is not satisfied by a disclosure held in a profile or settings screen. The class of an inhabitant must be apparent in the encounter itself, so a visitor who joins mid-session is in the same position as one present from the start.

For younger students, the system defaults to supervised or non-social experiences. The default is the starting condition, not a recommendation an individual teacher or guardian must remember to apply, and any movement away from it occurs through the educational permissions governing the classroom World in question.

## Chapter 74 — The Conversation Engine and the Sensory Director

This chapter specifies how a visitor talks with a World's inhabitants, and how sound, lighting, animation, and environmental behaviour are orchestrated around what the visitor is doing. Both are channels through which an experience can quietly exceed its authority, so both are specified as orchestration of approved material under explicit contracts, with no discretion of their own.

### 74.1 The Conversation Engine and its authority contracts

The conversational experience should be grounded in the World, not a general-purpose chatbot wearing a costume. Consider asking a simulated Socrates about justice: the system should identify the relevant primary sources, determine what the historical record supports, respond in an age-appropriate manner, and allow the student to inspect the evidence.

One conversation infrastructure supports all classes of inhabitant, but each class operates under a different authority contract, and the contract — not the interface — determines what may be said. A literary character operates under a canon contract with a time-specific knowledge boundary: the character may know only what the canon gives them at the point in the work the visitor has reached, and cannot supply information from beyond the work's authorized material to fill a gap in the visitor's understanding. A historical simulation operates under an evidence contract: its statements are bounded by what the evidence supports, its reconstructions are identified as reconstructions, it must not invent undocumented personal experiences as historical fact, and where the record is silent its correct move is to say so and show what the record does contain. A world guide operates under a guide contract, under which the guide may discuss scholarly uncertainty — a positive capability rather than a relaxation, since a guide who can explain that scholars disagree, and on what evidence each position rests, teaches more than one required to present a single settled account where none exists.

A useful encounter should leave the visitor with a question worth exploring, not merely a convincing imitation of a famous person. This is the chapter's test for encounter design, and it applies to literary and creator encounters as much as to educational ones.

### 74.2 The Sensory Director

The Sensory Director orchestrates approved environmental effects only: rain against castle windows, footsteps, pages turning, and music responding to narrative events in a literary World; period-informed architecture, ambient markets, and optional narrated context in a historical World; stage lighting, audience participation, and synchronised effects in a Creator World. Each effect is selected from material the World's authority has approved, for a purpose the scene specifies. The Director has no repertoire of its own.

The Director never controls the visitor's experience without permission. The permission rules are stated here as rules. Audio begins off: sound is introduced by the visitor's choice, and an experience must be complete and intelligible in silence. Flashing effects are limited, as a property of the design and not a setting the visitor is expected to discover after exposure. Motion can be reduced, and a reduced-motion presentation preserves the experience's content and available actions; it is not a diminished version. Users can independently adjust sound, narration, visual effects, and interaction intensity, because the needs those controls answer are independent: a visitor may want narration without music, effects without motion, or full interaction at low sensory intensity.

Sensory intensity is always subordinate to the visitor's accessibility settings. Where a creator's specified intensity and a visitor's accessibility settings conflict, the visitor's settings prevail, without negotiation at runtime and without the experience signalling that something has been withheld.

In historical environments, the interface must distinguish documented details from plausible artistic reconstruction. We cannot know the precise ambient sounds of an ancient street simply because convincing audio can be generated, and the Director must not allow generability to masquerade as knowledge.


## Chapter 75 — Agency, Artifacts, and Social Presence

This chapter specifies three systems that determine what a visitor can do in a World, what they can examine there, and who else may be present while they do it. The Agency Engine gives choices understandable consequences at three levels of persistence. The Living Artifact System makes objects inspectable and source-linked, and is identified as one of the most reusable investments across the platform. The Social Presence Engine offers shared experience in four modes under mutual consent, with transparency about observability as a standing condition rather than a setting.

### 75.1 The Agency Engine

Immersion becomes meaningful when choices have understandable consequences. Understandable is the operative word: a consequence the visitor cannot connect to the choice that produced it teaches nothing and feels arbitrary, however elaborate the state machinery behind it. The Agency Engine defines three levels of agency, distinguished by what the choice affects and where its result persists.

| Agency | Example | Persistence |
|---|---|---|
| Exploratory | Choosing which location or document to investigate | Reader Passport |
| Narrative | Selecting a branch in an approved fictional adventure | Personal experience state |
| Collaborative | Solving a shared mystery or influencing a live event | Authorized group session |

Exploratory agency is the choice of what to investigate; its results persist to the Reader Passport, as part of the visitor's personal journey under Chapter 73. Narrative agency is the choice of a branch within an approved fictional adventure, recorded as personal experience state; the branch is approved before it is offered. Collaborative agency is exercised with others, and its results persist within an authorized group session, because the consequences belong to the group that produced them.

Two limits bind all three levels. Alternate outcomes never rewrite canon: a reader should be able to explore alternate outcomes without rewriting established canon, and the exploration is recorded in experience state and personal journey, and nowhere else. Counterfactuals are never presented as fact: a student should be able to test a counterfactual historical decision without the system presenting that alternate history as fact, and the counterfactual's status must remain visible for as long as its results are shown. A creator, correspondingly, should be able to make audience participation consequential without surrendering editorial authority: participation changes the event within the terms the creator set for it, and does not transfer authority over the World to the audience that took part.

### 75.2 The Living Artifact System

Objects may be a better immersion mechanism than unrestricted character conversations. An object can be examined closely, at the visitor's pace, without the social pressure of a conversational partner and without the risk that fluency will be mistaken for authority. The Living Artifact System specifies inspectable, source-linked objects as a primary unit of immersive design.

Consider finding a letter in a castle in a literary World. The visitor can inspect its handwriting, turn it over, examine its date, open a transcript, identify its source chapter, and place it on an investigation board. Or, in a historical World, the visitor can hold a virtual ancient coin and rotate it to examine its imagery, material, and historical context. The same interaction model serves both.

The investigation board is where artifacts become an argument: a visitor who places findings on a board and arranges their connections is constructing an account of what they have found. The board persists as part of the visitor's personal journey, so the account can be resumed and revised.

The same artifact interaction model could support historical objects, fictional documents, scientific instruments, archaeological findings, mythological symbols, and creator memorabilia. That breadth is why the system is one of the most reusable investments across the entire platform: the underlying actions — inspect, rotate, transcribe, source, connect, retain — are the same in each setting, while the authority regime governing what the object may claim changes around them.

### 75.3 The Social Presence Engine

SEE MY WORLD should offer shared experiences without turning every World into a noisy multiplayer lobby. The Social Presence Engine defines four distinct social modes, and a World at any given time is in one of them, visibly.

**Solo** is private exploration with no other visitors visible. It is a complete mode, not a waiting state before company arrives, and everything a World offers a visitor alone must be available in it.

**Companion** is two or more invited people exploring together, with mutual consent. Invitation and acceptance are both required; presence in another visitor's experience is never a side effect of following, subscribing, or holding a shared interest.

**Guided Group** is a controlled Expedition led by a teacher, museum guide, author, or host. The leader's control over the session is part of the mode's definition, and it is the mode through which the supervised default for younger students in Chapter 73 is ordinarily realised.

**Public Event** is an authorized live venue supporting larger audiences, moderation, and participation. Authorization and moderation are conditions of the mode, not enhancements to it: a venue that cannot be moderated is not operated as a public event.

Observability transparency is a standing rule across all four modes: a visitor always knows who can see them, hear them, message them, or observe their actions. The four are listed separately because they are separately grantable and revocable; a visitor who knows they can be seen but not that they can be heard has been misinformed by omission.

Social presence is optional, never the price of admission. No World, artifact, level, or outcome may be made available only on condition that the visitor accept company. Shared experience is offered because shared investigation has its own value — two friends examining the same artifact and comparing interpretations, a class collectively reconstructing a historical timeline, an author revealing a new room during a live event so subscribers can investigate together. These are social experiences built around meaningful activity rather than an endless feed.

## Chapter 76 — The Reality Lens and the Immersive World Runtime

This chapter specifies the two structures that keep the preceding chapters honest at scale, and the creator tool that feeds them. The Reality Lens generalises the Evidence Lens of the educational pillar into a platform-wide provenance discipline, available in every modality. The Immersive World Runtime then defines how an experience is authorised to render at all: it receives an authorized manifest rather than querying unrestricted source material, under a security rule stated here without qualification. The chapter closes with the Immersion Director, which produces declarative scene specifications for the Runtime to execute.

### 76.1 The Reality Lens

The platform now contains personal interests, fictional canon, mythology, historical evidence, educational reconstructions, and generated scenarios. Without a rigorous boundary between these categories, total immersion could become total confusion, because immersion's strength — that everything in an environment feels equally present — is precisely what erases the differences in standing between its elements. The Reality Lens is the persistent answer: the Evidence Lens generalised platform-wide, exposing the provenance of anything, in any pillar, in any modality.

Six provenance categories are defined, and they are exhaustive for the purposes of this part.

**Literary canon** — supported by an authorized fictional source.

**Historical evidence** — supported by historical sources or scholarship.

**Traditional account** — attributed to a specific mythological or cultural tradition.

**Reconstruction** — editorially created interpretation or visualisation.

**Simulation** — hypothetical or generated interaction.

**Personal testimony** — explicitly affirmed by the World owner.

The categories are distinguished by the kind of support behind the element, not by how it looks or is delivered. A spoken line, a rendered building, a sound, and a line of accessible text can each carry any of the six, and each must carry the one describing its actual basis.

The Lens is available in every modality, including visual presentation, audio-only presentation, accessible text, and VR. This is a requirement, not an aspiration: provenance that exists only in a visual overlay does not exist for a visitor using the audio route.

An immersive experience must never conceal uncertainty merely to feel more believable. This governing rule is directed at a specific temptation: the points where an experience would run more smoothly if a disputed dating, an inferred detail, or a generated interaction were presented without its qualification. Those are the points where the qualification matters most, because they are where the visitor's belief is being formed.

### 76.2 The Immersive World Runtime and the experience manifest

The Immersive World Runtime sits above the existing Storyworld, Creator, and Education engines. It controls environmental state, interactions, synchronisation, and presentation while respecting the existing server-side permission boundary. It does not replace those engines, and it does not become a route around them: its position above them is a position in the presentation stack, not in the authority stack.

The Runtime receives an authorized manifest rather than querying unrestricted source material. A component that can only render what a manifest enumerates can render nothing else, and whether a given rendering was permitted can be answered by inspecting that manifest.

The proposed experience contract is reproduced verbatim.

```ts
interface ImmersiveExperienceManifest {
  version: "immersive-v1";
  worldId: string;
  publicationRevision: number;
  authorityRevision: number;
  experienceId: string;
  mode: "ATLAS" | "SPATIAL" | "THREE_D" | "XR";
  authorizedSceneRefs: string[];
  authorizedInteractionRefs: string[];
  authorizedArtifactRefs: string[];
  spoilerPolicyRef?: string;
  accessibilityProfile: string;
  socialMode:
    | "SOLO"
    | "COMPANION"
    | "GUIDED"
    | "PUBLIC_EVENT";
  expiresAt: string;
}
```

The fields each carry a constraint. `worldId`, `publicationRevision`, and `authorityRevision` bind the experience to a specific World at a specific published and authorized state. `mode` records which level of the Ladder it renders at. The three authorized reference lists enumerate the scenes, interactions, and artifacts the Runtime may present; anything not enumerated is not presented. `spoilerPolicyRef` binds it to the spoiler policy under which its contents were cleared. `accessibilityProfile` carries the profile the rendering must satisfy. `socialMode` fixes the mode under Chapter 75 for the life of the manifest, and `expiresAt` bounds it in time, so authorization to render lapses rather than persisting by default.

The manifest is a proposed rendering contract, not an access credential. Protected assets and interaction requests still require independent authorization checks. Possession of a manifest establishes what a client may render; it does not establish that the bearer is entitled to the underlying assets, and a system treating it as a credential would convert a presentation document into a key.

The security rule is stated here verbatim in substance, and it binds every implementation of this part: never send hidden canon, protected media, private testimony, or future spoilers to the client and rely on the interface to conceal them. The rule can be summarised as compile, don't hide. Material a visitor is not authorized to receive must be absent from what reaches their device, excluded at compilation and delivery, because an interface concealing delivered material is a presentation choice that any modification, defect, or inspection of the client can reverse. Concealment is not a security boundary, and this part does not permit it to be treated as one.

### 76.3 The Immersion Director

The Immersion Director is the creator tool through which immersive scenes are authored. Instead of requiring authors, historians, teachers, and creators to program every scene, it lets them design using narrative intent: for example, the visitor enters a library during a storm, discovers three documents, reading the second reveals a hidden room, and the room remains accessible on future visits.

From such a specification, the system proposes the environment, interactions, state transitions, audio cues, and accessibility alternatives. The creator reviews and approves the result. The separation is the tool's central safeguard: fluency confers no authority, and nothing proposed enters a World until its authority approves it under that World's regime.

The Immersion Director outputs a declarative scene specification, not uncontrolled executable code. That choice makes experiences easier to audit, translate, adapt, and maintain over time, because a change is visible as a change to a document rather than buried in code.

## Chapter 77 — Immersion prototypes, priorities, and the shared foundation

This chapter describes three prototypes, sets out the priority matrix as proposed priorities, states the architectural decision adopting the Runtime in this Bible as the shared experiential foundation for all pillars, and summarises the business note and the Immersion Acceptance Framework, whose full text is carried in Appendix E.

### 77.1 The three prototypes

Three prototypes are proposed, together exercising nearly every major system in this part. Each is a proposal for investigation; none is described here as built, scheduled, or resourced.

**Prototype A — Dracula: The Living Investigation.** A reader enters an atmospheric castle, investigates source-linked documents, unlocks new rooms through discoveries, and maintains a persistent evidence board. It tests narrative immersion, source fidelity, memory, and interaction design.

**Prototype B — Athens: The Living Classroom.** A student explores an ancient city, examines artifacts, participates in a grounded Socratic investigation, and constructs an evidence-based argument. It tests educational outcomes, historical accuracy, and teacher workflows.

**Prototype C — Vesper: The Living University.** A reader enters an authorized fictional campus, explores locations, encounters spoiler-aware characters, and participates in approved narrative events. It tests complex canon, creator control, subscription experiences, and persistent reader journeys.

The source identifies Dracula: The Living Investigation as the strongest first vertical slice: one explorable castle environment, five source-linked artifacts, three connected locations, a simple investigation board, persistent progress, a source and evidence view, and an accessible nonvisual route, followed by measurement of whether people understand the story better, find the experience compelling, and want to return. That identification is recorded as the source's recommendation. It is not a sequencing decision taken by this Bible, and it commissions nothing.

### 77.2 Proposed priorities

The priority matrix from the source is reproduced below. The priorities are proposed priorities, based on expected user value, reuse across product pillars, and implementation risk. They are not validated by production usage, and should not be read as a roadmap, a commitment, or an ordering any later part of this Bible has adopted.

| Capability | Impact | Priority |
|---|---|---|
| Persistent World State | Very high | P0 |
| Living Artifacts | Very high | P0 |
| Spatial 2.5D scenes | High | P0 |
| Reality / Evidence Lens | Very high | P0 |
| Immersion Director Studio | Very high | P1 |
| Grounded character encounters | High | P1 |
| Shared Expeditions | High | P1 |
| Full 3D environments | Potentially high | P2 |
| VR / AR support | Audience-dependent | P3 |

The P0 group is what meaningful presence depends on at every Ladder level, and none of it requires a headset. The P1 group deepens authorship and encounter once that base exists. Full 3D sits at P2, its value potential rather than established, and VR/AR at P3, last, for the reasons Chapter 71 gives.

### 77.3 The shared foundation

The major architectural decision of the source is recorded here in the form this Bible adopts it. The Immersive World Runtime is formally adopted, as an architectural proposal in this Bible, as the shared experiential foundation for all pillars. The Runtime would combine:

Authorized World Content + Spatial Presentation + Living Artifacts + Visitor Agency + Persistent Memory + Optional Social Presence.

Each term corresponds to a constraint established earlier in this part: Authorized World Content is content admitted under the governing pillar's regime and enumerated in a manifest; Living Artifacts are Chapter 75's inspectable, source-linked objects; Visitor Agency is its three-level agency, bounded so alternate outcomes never rewrite canon; Persistent Memory is Chapter 73's three-kind memory; Optional Social Presence is Chapter 75's four-mode presence, under mutual consent and observability transparency.

Everything else — advanced character conversation, multiplayer environments, VR, AR, and more sophisticated sensory experiences — can build upon that foundation. The purpose, adopted from the source, is that the pillars do not become disconnected products sharing a name. A shared runtime, consuming authorized manifests from regimes it does not govern, keeps the experiences continuous while keeping their authorities distinct.

Adoption here is adoption of an architectural proposal: it does not record that the Runtime exists, has been built to this specification, or that any founder decision about building it has been taken.

### 77.4 The business note

The architecture creates several complementary revenue models, differing by market: licensed literary environments for readers (Universe Pass); interactive storyworld publishing for authors (creator subscription or platform fees); historical and educational Worlds for schools (institutional licensing); interactive exhibits and guided tours for museums (exhibit licensing); branded franchise experiences for publishers (enterprise licensing and revenue sharing); and persistent venues and events for live creators (tickets, memberships, and creator tools).

Two cautions from the source govern the note. The most immersive features should not automatically be the most expensive: a well-designed 2.5D World may offer better value than an elaborate VR environment requiring costly hardware and producing little meaningful interaction. The business model should reward quality of experience, not graphical complexity. No price, tier, or term is set anywhere in this part.

### 77.5 The Immersion Acceptance Framework

The Immersion Acceptance Framework is summarised here; its full text is carried in Appendix E. It is a framework: it specifies what would be evaluated and how success would be recognised, and it records no results. No case count exists for it, and none is claimed.

The framework has ten categories: Presence (visitors understand where they are and what they can do); Agency (choices have clear, appropriate consequences); Continuity (approved progress survives return visits); Authority (no unauthorized canon or historical claims); Privacy (no leakage of personal or protected information); Accessibility (equivalent core tasks work without sensory effects or XR); Learning (educational users demonstrate measurable understanding); Performance (experiences remain responsive on target devices); Comfort (motion, sound, and interaction can be adjusted); and Creator control (editors can revise and republish without corrupting existing sessions).

Two measurement principles govern all ten categories. First, measure performance in structured tasks, not self-reported immersion. Second, for education, use pre/post assessments and delayed retention checks where feasible; for literature, measure narrative comprehension, voluntary return visits, and successful navigation; for creators, measure production time and editorial corrections.

The research in Chapter 71 suggests immersive learning can be beneficial, but results depend on design and context. Whether SEE MY WORLD delivers those benefits is a question only its own pilots could establish. Nothing in this framework, and nothing in this part, answers that question in advance.

# Part XIII — Era Worlds

Part XIII introduces Era Worlds, "The Living History of Everyday Life": the part of SEE MY WORLD in which time itself becomes a navigable environment. A visitor can select a period, a place, and a social perspective, and enter a situated reconstruction of what daily life in that setting involved. Era Worlds is powered by four systems bound together here: the Temporal Knowledge Graph, which gives historical time the precision a decade label cannot; the Immersive World Runtime of Part XII, which renders authorised Worlds as explorable environments; the Living Artifact System, which makes period objects usable rather than decorative; and the Reality Lens, which keeps provenance visible in every modality. The central promise of the pillar, stated in the source and carried into this Bible in substance verbatim, is: "Don't just learn what happened. Explore what it might have felt like to live there, while always knowing what is documented and what is reconstructed."

**Pillar-recording note.** The source document for this part, Continuation 21, is not internally consistent about the pillar's ordinal. Its §233 introduces Era Worlds as "a fifth major product pillar," while its §248 calls it "the sixth major experiential pillar." This Bible records Era Worlds as the **fifth** experiential pillar — Personal, Creator, Literary, Educational, Era — on the ground that the Immersive World Runtime of Part XII is a foundation layer consumed by the pillars, not a pillar in its own right. The §248 wording is not silently harmonised away: it is logged in Appendix D as a source discrepancy held for founder confirmation, and no founder decision on the point is treated as settled anywhere in this part. Nothing in Chapters 78–83 depends on the ordinal.

**Scope and status.** Everything in this part is **Concept** unless a contract is stated as **Specified**. The interfaces in Chapter 82 are Specified in the limited sense that their field names, types, and value sets are stated normatively; the engines in Chapters 78–81 and 83 are proposals with named behaviours, not systems with acceptance evidence. Nothing in this part is Implemented, Tested, Pilot validated, or Production ready. Collections named here — the Smithsonian's, the Library of Congress's — are research bases and Evidence Register candidates, not cleared asset sources; Chapter 82 states the rights position in full. Where an earlier chapter governs a matter this part touches — testimony arithmetic in Chapter 7, consent and disclosure through the Lens — the earlier chapter governs.

## Chapter 78 — Era Worlds: time as a World coordinate

This chapter states the pillar's foundational move: time as a coordinate of a World. An Era World is identified not by a decade label but by the intersection of a period, a location, and a social position within it. From that move follow the Era Selector, the instrument for choosing those coordinates, and the three flagship Era Worlds, which test the model within living memory, at its edge, and far beyond it.

### 78.1 The three coordinates: WHEN × WHERE × WHO

Until now, SEE MY WORLD has organised experiences primarily around people, creators, literature, places, and knowledge. Era Worlds adds three interconnected coordinates. **WHEN** is the year or period. **WHERE** is the region or city. **WHO** is the social perspective — the position from which the period is experienced. The three jointly define the scene; they are not refinements of a single underlying scene that exists before them. There was no single universal experience of the 1960s, the 1990s, or the 1400s.

The source's examples carry the argument. A teenager in New York in 1995 inhabited a very different world from a teenager in Tokyo, Lagos, or rural India: different objects, different communications infrastructure, different costs, different access to the technologies the decade is popularly remembered by. A merchant in Renaissance Florence experienced the 1400s differently from a farmer in West Africa or a scholar in Ming China. These are not edge cases to be handled after a default scene is built; they are the normal case, and the coordinate model keeps them normal in the data.

> **The NO-GENERIC-ERA RULE.** Never build one generic version of an era and pretend it represents the entire world. An Era World that is not situated — geographically and socially — is not an Era World under this Bible, whatever its period styling.

In place of the generic era, Era Worlds is a collection of geographically and socially situated experiences, connected through a shared historical timeline. The shared timeline makes the collection one pillar rather than a set of unrelated period dioramas, and Chapters 80 and 83 build the comparison and time-shift engines on it. Connection does not imply uniformity: two scenes may share a year and share almost nothing else, and the model must be able to say so.

### 78.2 The Era Selector

The first interaction should feel like operating a time machine, and its structure follows the coordinate model directly. The visitor selects a broad decade, narrows it to a specific year, chooses a location, and then enters a scene. Each step removes a pretence: decade to year, that a ten-year span was uniform; year to location, that a year was experienced in one place; location to scene places the visitor in a particular situated environment — a home, a street, a workshop, a mall — rather than in a survey of the period.

That sequence creates an experience much more precise than a generic nostalgia simulator, and the precision is an evidence property as much as a presentational one: a scene entered through decade, year, and location can carry Chapter 82's source references, rights records, and reconstruction status for that specific setting, where a scene entered as "the 1990s" in general could carry none of them honestly. The source's conceptual preview of the Selector was marked in the source itself as a conceptual preview, not a running historical simulation, and is recorded here at that status.

### 78.3 The three flagship Era Worlds

Three flagships anchor the pillar, one for each span the Selector first offers. Each is stated with its setting range and its immersive hook — the specific experiential claim the flagship exists to test.

**The 1990s — The Analog-to-Digital Revolution.** The visitor enters a mall, an arcade, a record shop, a bedroom, a school, or an early internet café, and interacts with VHS tapes, pagers, cassette players, game consoles, and dial-up computers. *Immersive hook: experience everyday life before always-connected smartphones became normal.* This is the pillar's nearest test case: many visitors remember the decade personally, and its defining experiential fact is a transition — technologies of connection arriving unevenly, by location, income, and access, which is precisely the variation the coordinate model represents.

**The 1960s — A World in Transformation.** The visitor explores music, television, civil rights, social movements, space exploration, family life, and international events. *Immersive hook: follow several lives through a decade of extraordinary cultural and political change.* The plural in the hook is load-bearing: the decade's events were experienced from sharply divergent social positions, and a single-perspective rendering would misrepresent it. This flagship is the natural home of the Parallel History Engine of Chapter 80 and the sensitive-subject discipline of Chapter 81.

**The 1400s — The Age of Connected Civilizations.** The flagship begins in Renaissance Florence, then extends to distinct Worlds in Ming China, West African trading centres, and other historically situated regions. *Immersive hook: experience how commerce, knowledge, religion, politics, and technology shaped different societies.* This flagship tests the opposite end of the evidence range: no living memory, no recordings, no photographs. Its structure enacts the no-generic-era rule — Florence is a beginning, not a stand-in for the century, and the Ming Chinese and West African Worlds are distinct situated experiences, not variations on a Florentine template.


## Chapter 79 — The Everyday Life Engine and the Decade Simulator

This chapter covers the pillar's differentiating engine and its most concrete proposed experience. The Everyday Life Engine reconstructs the ordinary — household routines, errands, communications, and working conditions that conventional history software leaves out — and the Decade Simulator turns that reconstruction into a structured day, in which the visitor learns the period by acting within its constraints. The felt difference between eras lives less in their famous events than in what an ordinary Tuesday required.

### 79.1 Ordinary life as the differentiator

Most history experiences focus on famous battles, leaders, inventions, and major events. Era Worlds does not exclude those — Chapter 81 provides the Event Portal for them — but its claim to distinction is the layer underneath: the ordinary details of being alive at a particular time. A visitor could explore a household, shop for groceries, navigate transportation, communicate with friends, encounter period technology, and compare typical costs or working conditions using appropriately sourced data. Costs, wages, and working conditions are factual claims, and they carry the same sourcing discipline as any other claim the platform makes, with region and date identified as Chapter 80 requires.

The research foundation the source names is the Smithsonian's National Museum of American History, which maintains collections documenting American domestic life, clothing, childhood, schooling, foodways, and everyday material culture from the seventeenth century onward. It is named here as a research base and an Evidence Register candidate — not as a licence to reproduce collection imagery or designs; the rights position is Chapter 82's subject.

The Engine's representational rule follows from Chapter 78: the World should represent different income levels, occupations, neighbourhoods, and social experiences rather than treating one household as universal. A single reconstructed household, however well evidenced, is one situated experience; presented without its coordinates, it silently becomes the generic era the no-generic-era rule prohibits. Multiplicity of strata is a correctness condition on the Engine's output, not an enrichment.

### 79.2 The six everyday-life modules

The Engine is organised as six modules, each covering one domain of ordinary life across eras. The source's table gives a 1990s and a 1400s example for each; the pairing is itself instructive, because the domains persist while their material content changes almost completely.

| Module | 1990s example | 1400s example |
|---|---|---|
| Home | Bedroom, television, telephone | Household, hearth, furnishings |
| Communication | Pager, landline, dial-up internet | Messenger, manuscript, public announcements |
| Commerce | Mall, catalog shopping, cash register | Market stalls, guild workshops |
| Entertainment | Arcade, VHS rental, music store | Storytelling, performances, festivals |
| Work | Office computer, retail job | Workshop, trade, agriculture |
| Travel | Car, bus, airline ticketing | Walking, carts, boats, horses |


### 79.3 Usable objects, not decorative objects

The Engine's key design commitment is that objects must be usable, not merely decorative. A period room in which the telephone cannot be lifted and the computer cannot be operated is a stage set: it shows what the period looked like and teaches nothing about what it required. The source's examples set the bar — operate a simulated rotary telephone, navigate a period-appropriate computer interface, examine how a merchant recorded transactions. Each interaction exposes a constraint, and the constraint is the lesson.

Where the evidence supports an object's appearance but not its behaviour, the honest output is a more limited interaction, labelled through the Reality Lens, rather than a fluent invention. The interaction types and reconstruction statuses an artifact can carry are specified in Chapter 82.

### 79.4 The Decade Simulator: One Day in 1995

The Decade Simulator generalises the usable-object commitment into a structured experience: experiential learning through period constraints. Its exemplary form is **One Day in 1995**. The visitor begins in a reconstructed household, receives an objective, and must complete it using the technology and resources available in that setting: objectives such as arranging to meet friends at the mall, finding and purchasing a new album, or researching a school assignment; and a mission whose difficulty is entirely a product of the period — meet your friends, with a landline, a printed telephone directory, and a planned meeting location, where your friends are not continuously reachable. The available actions are the period's actions: make a call, leave a message, agree on a time, navigate to the mall. Chapter 83 makes the Simulator's 1995 form the pillar's first vertical slice.

The Simulator carries a mandatory qualification, stated in the source and normative here: the simulation must also explain that these experiences varied by location, household resources, and access to technology. One Day in 1995 is one day, in one situated setting, from one social perspective; a household without a car, or without the income the mission quietly assumes, would have had a different day with different constraints. The variability disclaimer is the no-generic-era rule applied to the pillar's own flagship experience.

## Chapter 80 — Atmosphere, Parallel History, and Time Shift

This chapter covers the three engines that give an Era World its felt character and its comparative power. The Cultural Atmosphere Engine coordinates the systems from which a period's atmosphere emerges, and carries the soundtrack rule. The Parallel History Engine holds the moment constant and varies the place; the Time Shift Engine holds the place constant and varies the period. Together they turn Chapter 78's coordinate model into the two comparisons a visitor most naturally wants: *what else was happening then*, and *what was this place like before*.

### 80.1 The Cultural Atmosphere Engine: six systems


- **Architecture and objects:** buildings, interiors, furniture, vehicles, packaging, and technology, sourced through the registry discipline of Chapter 82.
- **Fashion and appearance:** period-informed clothing and hairstyles, without assuming one universal style; within a single scene, appearance varies by age, occupation, and income.
- **Sound:** environmental audio, machinery, transportation, public spaces, and licensed or original music — the system visitors register first and examine least, which makes its sourcing discipline, stated as a rule below, correspondingly important.
- **Communication:** period-appropriate language, media formats, and social customs.
- **Economics:** prices, wages, availability, and purchasing power, with region and date identified; an unlabelled price is a false claim in waiting, since the same object costs differently in different places in the same year.
- **Social context:** laws, institutions, cultural norms, and inequalities relevant to the selected setting; a scene that omits the inequalities that structured it has reconstructed a period's décor and misrepresented the period.


### 80.2 The soundtrack rule

Music is especially powerful for immersion, and it is the point at which immersion most directly collides with rights. The collision is resolved here as a rule, not left as a production judgement to be made scene by scene.

> **The SOUNDTRACK RULE.** Period music is copyrighted. A 1990s World cannot stream commercial songs merely because the visitor is exploring the 1990s. An Era World may carry music only as licensed recordings, as original period-informed compositions, or through permitted external integrations. Historical authenticity does not eliminate copyright obligations.

The three permitted routes correspond to Chapter 82's asset categories: a licensed recording is a Licensed source, used within its scope, territory, and expiry; an original period-informed composition is an Original reconstruction, evoking a style without reproducing a protected work; a permitted external integration plays through a service the visitor is entitled to use, under that service's own terms. What the rule prohibits is the fourth route — treating period placement as an implied licence. A scene's date is not a rights instrument, and Chapter 82's Rights Compiler check applies to a soundtrack exactly as to imagery.

### 80.3 The Parallel History Engine

The Parallel History Engine compares what was happening in different parts of the world at the same moment, explored from multiple situated positions, side by side. The source's worked example is 1969, in three strands: in the United States, space exploration — the Apollo 11 mission and the context of the space race; in the United States again, youth culture — Woodstock, popular music, counterculture, and the diversity of experiences within American society; and in Germany, a divided nation — everyday life and political conditions in East and West Germany during the Cold War. Two strands share a country and almost nothing else: parallelism operates on the WHO coordinate as well as the WHERE coordinate.

The engine's purpose is corrective as much as exploratory: one country's popular culture is not the definition of an entire decade, and side-by-side comparison prevents "1969" from silently meaning one nation's remembered 1969. The engine consumes situated scenes built under Chapters 78 and 79 and builds none of its own.

### 80.4 The Time Shift Engine

The Time Shift Engine performs the complementary operation. Instead of teleporting between unrelated environments, the visitor remains in one location and watches it transform across historical periods: a specific street in 1965, 1985, 2005, and 2025. Buildings appear, disappear, or change function. Transportation systems evolve. Businesses open and close. Where Parallel History teaches that a moment was many places at once, Time Shift teaches that a place is many moments in succession — and that the present form of a familiar street is one state among others, not a default.

Time Shift places the heaviest demand on the Temporal Knowledge Graph of Chapter 82, because its claims are about change at a specific location, and change claims require dated evidence at both ends. Where exact historical reconstruction is unavailable, the system displays an **interpretive model** rather than inventing a definitive view — presented as a distinction, through the Reality Lens and Chapter 82's reconstruction statuses, not smoothed over by rendering an interpretive street with a documented one's visual certainty. The source's concept material carried the same discipline, noting that its transformation categories were illustrative and that actual scenes require a specific location and dated historical sources.

## Chapter 81 — Historical Personas and Event Portals

This chapter covers the two ways a visitor moves from observing an Era World to acting within its terms. The Historical Persona Engine gives the visitor a plausible role whose options are shaped by the society around it; the Living Timeline and Event Portal give access to the period's significant events, under a four-way distinction that keeps evidence, representation, activity, and speculation distinct. Both carry the pillar's most serious content obligations, stated here as rules.

### 81.1 The Historical Persona Engine

Visitors may choose a historically plausible role and experience how their options were shaped by the society around them. The source's examples span the three flagships: a student in an American town in 1995; a journalist covering social movements in the 1960s; an apprentice in a Florentine workshop in 1478; a merchant traveling along a documented fifteenth-century trade route. Each persona is a WHO coordinate made playable — a defined social position, with the access, obligations, and blind spots it carried in that setting. Its pedagogical content is precisely its constraints: what this person could do, could not do, and could not know.

Two limits govern the engine. The first is evidential. The experience must avoid pretending to reproduce the exact lived experience of a real historical person without sufficient evidence. A persona is a plausible role constructed from documented patterns of a setting; it is not a recovered interior life, and the engine must not present its constructions with the authority of biography. Where a persona is modelled on patterns rather than on a documented individual, the Reality Lens disclosure says so. The second limit is the rule that follows.

> **The NEVER-ENTERTAINMENT RULE.** Oppression, war, enslavement, or persecution are never reduced to entertainment mechanics. For sensitive historical subjects, the goal is informed understanding, with thoughtful framing and age-appropriate alternatives.

The rule prohibits a specific design move: converting subjection or violence into a scoring system, a challenge to be beaten, or a thrill to be sampled. It does not prohibit representing sensitive subjects — a 1960s Era World that omitted civil rights, or a fifteenth-century trading world that omitted enslavement where the evidence places it, would misrepresent its period — but it governs the visitor's relationship to what is represented: the visitor may investigate, witness, and understand, and the design may not invite mastery over a simulation of persecution. Thoughtful framing and age-appropriate alternatives are design requirements on any scene touching a sensitive subject, not optional sensitivities applied at review.

### 81.2 The Living Timeline and the Event Portal

Era Worlds contain both everyday life and historically significant events, and the Event Portal connects a situated scene to the events of its moment. A visitor exploring 1969 could open an event portal to examine the Apollo 11 mission; a visitor exploring 1990 could investigate the emergence of the World Wide Web and its subsequent public adoption; a visitor exploring the 1400s could investigate printing technologies, trade networks, or regional political changes. The portal is entered from within the situated experience — the event arrives in the context of the ordinary day it interrupted or crowned — so events are understood against everyday life, not instead of it.

Every portal presentation carries a four-way distinction, stated in the source and normative here:

- **Documented event:** what the historical evidence establishes.
- **Reconstruction:** an editorially created representation of the setting.
- **Interactive investigation:** activities that let the visitor explore the evidence.
- **Counterfactual scenario:** an explicitly hypothetical alternative.

The portal must not let an item drift between categories without its label changing: a reconstruction presented with the finish of documentation borrows authority it has not earned, and a counterfactual without its hypothetical label is a false claim about the past. The distinction preserves historical integrity while enabling the experiences the portal exists to provide.

## Chapter 82 — Era artifacts, rights, and contracts

This chapter states the pillar's specified layer: the registry that declares what an era artifact is and where it belongs, the rights profile that governs what an Era World may lawfully contain, and the two contracts of the Era World Knowledge Graph. Earlier chapters describe behaviour; this chapter describes the records that behaviour must answer to. An artifact not in the registry, an asset that has not passed the rights check, and a scene that cannot state its evidence references are not unfinished content — they are content the pillar's own rules do not permit to be published.

### 82.1 The Era Artifact Registry

The Living Artifact System expands, for this pillar, to support historically dated everyday objects, and the Era Artifact Registry is where those objects are declared. The registry entry states an object's identity, its span of use, the places and social settings in which it is appropriate, the sources that evidence it, the rights records that govern its representation, and the ways a visitor may interact with it. The EraArtifact interface is reproduced verbatim from the source contract:

```ts
interface EraArtifact {
  artifactId: string;
  eraWorldId: string;
  title: string;
  category: string;
  earliestUse?: string;
  latestUse?: string;
  geographicScope: string[];
  socialContext: string[];
  sourceRefs: string[];
  rightsRecordIds: string[];
  interactionType:
    | "INSPECT"
    | "OPERATE"
    | "COMPARE"
    | "INVESTIGATE";
  reconstructionStatus:
    | "DOCUMENTED"
    | "INTERPRETIVE"
    | "SIMULATED";
}
```

Three properties of the contract encode rules stated elsewhere in this part. First, the use span is a range — `earliestUse` and `latestUse`, both optional — not a single date of belonging, so an object may exist across multiple decades rather than being assigned exclusively to the decade in which it became popular; a rotary telephone, in the source's example, may be appropriate in more than one era. Second, appropriateness is scoped twice over, by `geographicScope` and by `socialContext`. Third, availability follows from those scopes, not chronology alone: the presence of a technology in a scene depends on location, income, and access — not merely the invention date.


### 82.2 The era rights profile

Era Worlds have a different rights profile from the Public-Domain Literary Library of Part X, and the difference is structural. A literary World built on public-domain texts begins from material whose status is settled; an Era World begins from the material culture of periods much of whose media remains protected. Much of the media associated with the 1960s and 1990s remains copyrighted — commercial music, television footage, advertisements, photographs, film clips, and many branded designs. The soundtrack rule of Chapter 80 is one consequence of this profile; this section states the profile itself.

One clarification is normative. The Library of Congress offers extensive collections of historical images and a curated Free to Use and Reuse collection, but its general collections are not automatically free of copyright or other restrictions. The Free to Use and Reuse collection is a cleared subset, **not** a blanket clearance: an item's presence in a Library of Congress collection establishes nothing about its status until the item is individually determined to fall within the cleared subset or is otherwise verified. The same discipline applies to every source collection named in this part.

The production pipeline therefore works with three asset categories, each with its own production rule:

| Asset category | Example | Production rule |
|---|---|---|
| Verified reusable source | Cleared archival photograph | Preserve provenance and conditions |
| Licensed source | Commercial song or film clip | Enforce scope, territory, and expiry |
| Original reconstruction | Illustrated 1995 shopping mall | Review historical plausibility and avoid copying protected designs |

The categories are exhaustive for publication purposes: an asset that fits none of them — unverified, unlicensed, and copied — is not an asset the pipeline may use. The third category carries a double obligation: an original reconstruction must be reviewed for historical plausibility, and it must also avoid copying protected designs, because faithfully recreating a branded 1995 mall interior may reproduce protected trade dress in the act of being accurate. Enforcement is assigned, not aspirational: the **Rights Compiler must check every protected asset before publication**. A scene whose assets have not passed that check does not publish, whatever its other merits.

### 82.3 The Era World Knowledge Graph: EraWorld and TemporalScene

A temporal environment needs more precision than a decade label, and the Era World Knowledge Graph — the pillar's use of the Temporal Knowledge Graph named in this part's introduction — supplies it through two contracts. The EraWorld states a World's period as an explicit span, its scope and perspectives as lists, its historical sources and asset rights as references, and its editorial state as a governed lifecycle including expert review. The TemporalScene states a scene's location, validity interval, available artifacts and events, and evidence references. Both interfaces are reproduced verbatim from the source contract:

```ts
interface EraWorld {
  eraWorldId: string;
  title: string;
  periodStart: string;
  periodEnd: string;
  geographicScope: string[];
  perspectives: string[];
  historicalSourceIds: string[];
  assetRightsIds: string[];
  reconstructionRevision: number;
  editorialStatus:
    | "DRAFT"
    | "EXPERT_REVIEW"
    | "APPROVED"
    | "RETIRED";
}
interface TemporalScene {
  sceneId: string;
  eraWorldId: string;
  locationRef: string;
  validFrom: string;
  validUntil: string;
  availableArtifactIds: string[];
  availableEventIds: string[];
  evidenceRefs: string[];
  reconstructionConfidence:
    | "DOCUMENTED"
    | "PARTIAL"
    | "INTERPRETIVE";
}
```

**Terminology note.** The TemporalScene contract's field named reconstructionConfidence carries a three-value classification of a *scene's* evidence status — DOCUMENTED, PARTIAL, or INTERPRETIVE. It is a category label for a reconstruction, not a numerical probability, not a field about a person, and not the node field this Bible prohibits. The name is the source contract's, and it is reproduced verbatim for fidelity; readers should take the field's meaning from its value set, which is a classification, and not from any association its name might suggest with scored estimates elsewhere in the industry.

Two rules govern the graph's handling of time and correction. The engine supports uncertainty ranges for dates, locations, and historical relationships: a date known only within a span is recorded as a span, a location known only approximately is recorded approximately, and a relationship whose dating is contested is recorded with its uncertainty rather than resolved by fiat. From that support follows the rule:

> **A precise date is never invented merely to satisfy a database field.** Where the evidence gives a range, the record holds a range, even when a single value would be more convenient for storage, sorting, or display. Convenience is not evidence, and a schema that demands false precision manufactures false claims at scale.

And the graph preserves revision history. The EraWorld contract's `reconstructionRevision` is the visible trace: historians and editors may correct earlier reconstructions, and corrections are recorded as revisions, but a correction never silently changes published evidence. What a scene claimed, and on what references, when a visitor saw it remains recoverable; what it claims now is a new revision, not a rewritten past.

## Chapter 83 — Era Worlds across the pillars: integration and roadmap

This chapter closes the part by placing Era Worlds in the whole product and in the development sequence. Era Worlds is a connective layer across the existing pillars, not a self-contained annexe. Its commercial rules extend the access ethic adopted elsewhere in this Bible. Its roadmap is short and test-oriented, and it ends — deliberately — before the milestones the source names next, because those milestones have not been commissioned.

### 83.1 Integration across the pillars


| Product | Era World integration |
|---|---|
| Personal Worlds | Voluntary nostalgia and historical-interest discovery |
| Creator Worlds | Period-themed creator venues and events |
| Literary Worlds | Explore the historical settings of novels |
| Educational Worlds | Historical lessons and comparative investigations |
| Museum Worlds | Digitally reconstruct collections and historical sites |
| Universe Pass | Optional licensed period-themed experiences |

The Literary row requires the pillar's separation rule, because it is the integration most likely to blur two things this Bible keeps apart. Consider a reader exploring *Dracula*: they could open a late-Victorian London Era World to investigate the actual historical setting of the novel, or examine the real-world cultural context of the period in which a story is set. The value of the connection depends on its honesty: **literary canon and historical reconstruction remain separate, but connected through clearly labelled relationships.** The novel's London is a work's construction, answerable to the work; the Era World's London is a reconstruction, answerable to evidence — and what the novelist altered or invented is discoverable only if the two are not merged.


### 83.2 Commercial rules: nostalgia, memory, and what is not charged for

The 1980s and 1990s could have particular consumer appeal because many potential visitors remember those decades personally. However, nostalgia should not become the sole purpose of the product. A visitor who grew up in the 1990s may want to revisit familiar environments; a younger visitor may want to understand how people lived before modern technology. Those are different experiences — one is recognition, the other is discovery — and both are supported: designing only for the rememberer would abandon the learner, for whom the Everyday Life Engine's constraints are the entire point, and designing only for the learner would ignore the visitor whose own past is in the scene.

The source proposes four offerings. Their prices are unstated in the source, and none are invented here.

- **Free Era Preview:** a small, polished period environment with historical context.
- **Era Explorer Pass:** a larger collection of scenes, artifacts, and guided Expeditions.
- **Museum or School License:** curated educational experiences and teaching tools.
- **Licensed Cultural Events:** period-themed performances, exhibits, and media experiences under appropriate rights agreements.

One rule bounds the whole commercial structure:

> **Never charge for basic historical facts.** The paid value is production quality, expanded environments, licensed content, and professional curation.

The rule extends the free-access ethic adopted elsewhere in this Bible: what happened, when, and on what evidence is not a product tier, and a visitor who pays nothing is entitled to the facts and to the labels that distinguish fact from reconstruction.

### 83.3 Roadmap and the first vertical slice


| Prototype | Core test | Priority |
|---|---|---|
| 1995 Everyday Life | Interactive objects and nostalgia | P0 |
| 1969 Parallel History | Multiple perspectives and events | P1 |
| 1478 Florence | Historical reconstruction and social roles | P1 |
| Time Shift Street | One location across decades | P2 |
| Global Era Network | Cross-region comparison | P2 |

The first vertical slice is **One Day in 1995**, the Decade Simulator experience of Chapter 79 built at prototype scale: a small, historically situated American town environment with five connected locations — a home, a school or library, a shopping mall, an arcade, and a video rental shop. The slice includes ten usable artifacts, three everyday-life missions, persistent progress, an Evidence Lens, and accessible text navigation. Each element tests a named commitment of this part, from Chapter 79's usability rule to the Evidence Lens's provenance disclosure. The prototype is to be evaluated for accuracy, interaction quality, usability, and return intent.

The part closes where the source closes, with the three kinds of time the platform can now connect. **Historical time:** what happened in the world. **Narrative time:** what happened within a story. **Personal time:** what a visitor remembers, discovers, and chooses to preserve. Keeping those three timelines distinct — but allowing meaningful connections between them — is the foundation on which this pillar stands. The source names the next development milestone as the Era Worlds Engine v1.0 specification, followed by the One Day in 1995 production blueprint. That milestone is **not commissioned**: it is recorded here as the source's recommendation, and no work under it is authorised, scheduled, or treated as begun by anything in this part.

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
21. Payment entitlements are not privacy, rights, or spoiler grants. A paid membership or subscription can authorize access to a designated published venue or experience; it never grants access to a creator's private World or unpublished material, never overrides intellectual-property restrictions, never overrides spoiler settings, and never overrides privacy permissions. *(Continuations 13 §122, 16 §162.)*
22. Presentation compilation cannot increase the information in the authorized World projection. Aesthetic choices may change how permitted information appears; they must never act as a secondary channel for revealing excluded information. *(Continuations 11 §91, 12 §101.)*
23. Recommendations to paid Worlds never mine the private Worldprint. Discovery recommendations use the reader's current, explicitly chosen exploration context and editorially documented relationships, are transparent and optional. *(Continuation 17 §174.)*
24. School activity never transfers automatically into a student's private Worldprint. What a student does inside a school-managed educational World is educational data under institutional control; it enters the student's personal World, if at all, only through the student's own deliberate act outside the school context. *(Continuation 19, §207.)*
25. No advertising or commercial profiling is based on student activity. Student activity generates no advertising profile, no commercial targeting signal, and no inference offered to any third party. *(Continuation 19, §207.)*
26. A school account never funnels minors to commercial subscriptions. The school environment is insulated from consumer monetization: no subscription offer, upsell, or commercial conversion path is presented through a school-managed identity. *(Continuation 19, §207.)*
27. School-managed identities remain separate from personal, creator, and subscription identities. An educational identity is institution-scoped; it is not merged with, linked for targeting to, or convertible into a consumer identity by default. *(Continuation 19, §207.)*
28. Compile, don't hide. Protected content — hidden canon, protected media, private testimony, future spoilers, unlicensed assets — is never sent to a client to be concealed by the interface. What a visitor may not receive is excluded at compilation, server-side; the interface is never the permission boundary. *(Continuation 20, §227.)*
29. A World never blurs a real person, an AI simulation, and a scripted character. Every inhabitant of an immersive experience belongs to a declared class, and the class is legible to the visitor in every modality. *(Continuation 20, §220.)*
30. Oppression, war, enslavement, or persecution are never reduced to entertainment mechanics. Sensitive historical subjects are framed for informed understanding, with thoughtful framing and age-appropriate alternatives. *(Continuation 21, §241.)*

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

### C.11 Edition 1.3 amendment decisions

This subsection records the disposition of every amendment in the Edition 1.3 Amendment Register (A-01 to A-19). It supplements C.1 to C.10 and C.12; it does not replace them. Where a decision is recorded as open, no part of Edition 1.3 settles it.

| Amendment | Source | Status |
|---|---|---|
| A-01 — Competitive positioning: define the category as a user-governed Perspective Network, not an interest-map app | Originality Lab §12 | Adopted in Edition 1.3 — woven into Chapters 1 and 38 |
| A-02 — Testimony: separate owner assertion, proposal provenance, current prominence, and exploration status | Originality Lab §12 | Already in Edition 1.2 — R24; Chapter 6 clarifying model. Closed before Edition 1.3 |
| A-03 — Discovery: settle the definition of Q in U(c) = 0.30R + 0.25N + 0.20E + 0.15D + 0.10Q | Originality Lab §6 vs Expansion 01 §3, Continuation 04 §27 | Open — founder decision. Position A: Q is correction-information value — whether asking about a candidate would clarify the World (Expansion 01; Continuation 04, fenced at Appendix D, entry D-15). Position B: Q is source and classification quality — how well sourced and how reliably classified the candidate is (Originality Lab §6). Eligibility-before-scoring and the constrained multi-objective form are already normative in Edition 1.2; only the meaning of Q is unsettled |
| A-04 — Perspective Passport as the primary human-facing permission experience | Originality Lab §§3, 12 | Adopted in Edition 1.3 — woven into Chapters 17–18, as the experience layer over the Lens and Perspective specification |
| A-05 — Reciprocity: finite, mutually authorized discovery as the goal — never compatibility scoring | Originality Lab §12 | Already in Edition 1.2 — no compatibility score exists anywhere in the compiled system. Closed before Edition 1.3 |
| A-06 — Validation: controlled comparisons against simpler alternatives before adding complex features; §8 scorecard targets recorded as hypotheses, not gates, until ratified | Originality Lab §§8, 12, 13 | Adopted in Edition 1.3 — woven into Chapter 37 |
| A-07 — Competitive Evidence Register as a Bible appendix | Originality Lab §12 | Satisfied by this edition — new Appendix F |
| A-08 — Signature-experience naming layer: Testimony Compass, Perspective Passport, Reciprocity Bridge, The Unfinished World, Seed-Born Worlds | Originality Lab §3 | Adopted in Edition 1.3 — woven into Chapters 1–42: Testimony Compass names the provenance and Receipts surface (Chapter 6 and the Receipts material); Perspective Passport names the Lens and Perspective experience (Chapters 17–18); Reciprocity Bridge names the Encounter (Chapter 21); The Unfinished World names the visual and philosophical foundation (Chapter 12); Seed-Born Worlds names the growth mechanism (Chapter 19). Each name names an existing Edition 1.2 mechanism; no mechanism is created by its name |
| A-09 — Unfinished World owner controls: freeze, reset, or simplify a World | Originality Lab §3 | Adopted in Edition 1.3 — woven into Chapters 12 and 16, as a new functional proposal at Concept status (see Appendix D.4) |
| A-10 — Implementation architecture recommendations: responsive web first, modular monolith, revision-keyed private caches, relational and text search first | Originality Lab §5 | Recorded as Pass 3 reconciliation input — not canon |
| A-11 — No paid promotion or sponsored topic placement in the core World model | Originality Lab §10 | Adopted in Edition 1.3 — woven into Chapter 38, clarifying the adopted monetization decision that private interest histories are never sold |
| A-12 — The Presentation Layer as a third independent system, with the Presentation Compiler named as its companion specification milestone | Continuation 11 §§91–100 | Adopted in Edition 1.3 — compiled as Part VIII, with Continuation 12 |
| A-13 — Record gap: Continuation 11 builds on an antecedent presentation proposal and three visual references that are not in the project folder | Continuation 11 §§91–94; filing record | Open — founder decision, as a records matter: no disposition is recorded beyond the gap itself. Until the antecedent proposal and references are supplied and filed, Continuation 11 stands as the authoritative statement of the Presentation Layer |
| A-14 — Presentation Compiler v1.0 specification, including the Render Manifest contract and the 130-case acceptance suite, planned only | Continuation 12 §§101–112 | Adopted in Edition 1.3 — compiled as Part VIII, with Continuation 11 |
| A-15 — Creator Universes and Live Worlds, including the Creator Content Graph, live events, World Portals, and the payment-entitlement rule | Continuation 13 §§113–129 | Adopted in Edition 1.3 — compiled as Part IX |
| A-15, decision 1 — Initial streaming strategy (§129) | Continuation 13 §§119, 129 | Open — founder decision. The document recommends a hybrid strategy — permitted external embeds first, native interactions in-product, native streaming only on demonstrated demand, and no custom transcoding for the pilot — and also records native streaming from the beginning and external embeds only for the pilot as alternatives. Edition 1.3 records the recommendation as the document's leaning and adopts none of the options |
| A-15, decision 2 — First creator category to validate (§129) | Continuation 13 §129 | Open — founder decision. The document presents authors and storytellers, educators, performers, and a mixed creator pilot as the options, without Edition 1.3 adopting any of them |
| A-15, decision 3 — Monetization rollout (§129) | Continuation 13 §129 | Open — founder decision. The document presents validate-first, a ticketed pilot, and a membership pilot as the options, without Edition 1.3 adopting any of them |
| A-16 — The Storyworld Engine as a third product pillar, with the Canon Graph, the Canon Verification Engine, the Character Canon Contract, the Reader Passport, and the Rights and Licensing Engine | Continuation 15 §§146–157 | Adopted in Edition 1.3 — compiled as Part X, with Continuations 16 and 17 |
| A-17 — Record gap extended: Continuation 14 has not been received, and Continuations 08–10 were never received | Filing record | Open — founder decision, as a records matter: no content is inferred for the missing installments. If supplied, they are to be filed in sequence |
| A-18 — The Universe Pass business layer, with the Entitlement Engine, the Rights Compiler, staged licensing, and B2B licensing of the Storyworld Engine | Continuation 16 §§158–170 | Adopted in Edition 1.3 — compiled as Part X, with Continuations 15 and 17 |
| A-19 — The Free Worlds Initiative, with the Public-Domain Rights Registry, the SourceEdition entity, the Discovery Bridge rule, and the Literary Genealogy Engine | Continuation 17 §§171–180 | Adopted in Edition 1.3 — compiled as Part X, with Continuations 15 and 16 |
| D-34 — Explicit CONFIRM event vs BOOST → DECLARED | Complete Project Audit §3; Continuation 06 §47; Appendix D, entry D-34 | Open — founder decision. Entry D-34 remains open, with both positions unchanged: Position A, an explicit CONFIRM event keeps declaration and confirmation as separate owner acts with separate testimony semantics; Position B, the pure reducer's rule that BOOST sets provenance to DECLARED is a single, simple, replayable rule continuous with the original operator table. Testimony-v1 as specified governs until a founder ruling resolves the conflict |
| Carried register — the 42-gap tables of C.2 to C.10 | Complete Project Audit, transcribed at Appendix C | No status in the 42-gap tables C.2–C.10 was changed by Edition 1.3. The register's open items carry forward unchanged |

## Appendix D — System review and optimization log

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
| Presentation Layer | Specified | Part VIII; Continuation 11 §§91–100 |
| Presentation Compiler | Specified | Part VIII; Continuation 12 §§101–112 |
| Render Manifest | Specified | Part VIII; Continuation 12 §102 |
| Perspective Passport | Specified | Chapters 17–18; Originality Lab §§3, 12 |
| Testimony Compass (naming of the provenance / Receipts surface) | Specified | Chapter 6 and the Receipts material; Originality Lab §3 |
| Reciprocity Bridge (naming of the Encounter) | Specified | Chapter 21; Originality Lab §3 |
| Unfinished World owner controls (freeze / reset / simplify) | Concept | Chapters 12, 16; Originality Lab §3 |
| Creator Content Graph | Concept | Part IX; Continuation 13 §118 |
| Live Worlds and events | Concept | Part IX; Continuation 13 §§113, 116, 120 |
| World Portals | Concept | Part IX; Continuation 13 §123 |
| Storyworld Engine | Concept | Part X; Continuation 15 §146 |
| Canon Verification Engine | Concept | Part X; Continuation 15 §148 |
| Character Canon Contract | Concept | Part X; Continuation 15 §150 |
| Reader Passport | Specified | Part X; Continuation 15 §151 |
| Universe Pass and Entitlement Engine | Concept | Part X; Continuation 16 §§159, 162 |
| Rights Compiler | Concept | Part X; Continuation 16 §169 |
| SourceEdition | Specified | Part X; Continuation 17 §178 |
| Literary Genealogy Engine | Concept | Part X; Continuation 17 §176 |
| Free Worlds Initiative | Concept | Part X; Continuation 17 §§171–180 |
| Q-definition (Discovery) | Concept | Appendix C.11, entry A-03; unsettled |
| Educational Worlds (five types) | Concept | Part XI proposal; five types defined, no implementation. |
| Temporal Knowledge Graph | Specified | Assertion contract (temporal validity + dating evidence) stated in Chapter 64. |
| Historical Evidence Engine / EducationalClaim | Specified | Claim contract and evidenceStatus taxonomy stated in Chapter 64; no numerical certainty scores by rule. |
| Evidence Lens | Concept | Three views proposed in Chapter 64. |
| Historical Figure Encounters | Concept | Three labelled modes proposed in Chapter 65. |
| Pantheon Engine | Concept | Chapter 66 proposal; multi-tradition rule stated. |
| Civilization Engine | Concept | Chapter 66 proposal. |
| Teacher Studio | Concept | Chapter 67 proposal; session-scoping rule stated. |
| Classroom Expeditions | Concept | Chapter 67 proposal; format and example stated. |
| School Integration Layer | Concept | Chapter 68 proposal; phased; no certification claimed or held. |
| Scholar Studio | Concept | Chapter 69 proposal; workflow stated. |
| Educational Knowledge Graph | Specified | KnowledgeDomain / KnowledgeRelation / EducationalWorld contracts stated in Chapter 69. |
| Immersive World Runtime | Specified | ImmersiveExperienceManifest contract stated in Chapter 76; adopted as the shared experiential foundation (architectural proposal). |
| Immersion Ladder | Concept | Four conceptual levels, Chapter 71; none implemented; L2 recommended as first flagship. |
| Living Environment Engine | Concept | Chapter 72 proposal; World State Manifest rule stated. |
| Memory & Consequence Engine | Concept | Chapter 73 proposal; three memory kinds defined. |
| Presence Engine | Concept | Chapter 73 proposal; four inhabitant classes defined. |
| Conversation Engine | Concept | Chapter 74 proposal; per-class authority contracts described. |
| Sensory Director | Concept | Chapter 74 proposal; permission-first rules stated. |
| Agency Engine | Concept | Chapter 75 proposal; three levels with persistence targets. |
| Living Artifact System | Specified | Artifact interaction model and EraArtifact contract stated in Chapters 75 and 82. |
| Social Presence Engine | Concept | Chapter 75 proposal; four modes with consent and observability rules. |
| Reality Lens | Specified | Six provenance categories stated as a platform-wide rule in Chapter 76. |
| Immersion Director | Concept | Chapter 76 proposal; declarative scene specifications. |
| Era Worlds | Concept | Part XIII proposal; fifth experiential pillar (see Appendix D on the source's §233/§248 discrepancy). |
| Everyday Life Engine | Concept | Chapter 79 proposal; six modules defined. |
| Decade Simulator | Concept | Chapter 79 proposal; One Day in 1995 is the prototype format. |
| Cultural Atmosphere Engine | Concept | Chapter 80 proposal; six systems defined. |
| Parallel History Engine | Concept | Chapter 80 proposal. |
| Time Shift Engine | Concept | Chapter 80 proposal; interpretive-model rule stated. |
| Historical Persona Engine | Concept | Chapter 81 proposal; never-entertainment rule stated. |
| Era Artifact Registry | Specified | EraArtifact contract stated in Chapter 82. |
| Era World Knowledge Graph | Specified | EraWorld and TemporalScene contracts stated in Chapter 82. |

No feature is labelled Pilot validated or Production ready. The Replayable World gate (Chapter 36) stands at 0 of 10 reviewed, and the pilot programme of Chapter 37 has not run.

### D.5 Carried forward, unresolved by design

The known defect D-03 stands until testimony-v2 is adopted or v1 is amended through change control. The unresolved conflict D-34 (explicit CONFIRM event vs BOOST → DECLARED) stands as a founder decision; testimony-v1 as specified in Chapters 7 and 25 governs until it is resolved. The open decisions of Appendix C stand. The Replayable World gate (Chapter 36) stands at 0 of 10 reviewed. The Lens Compiler's formal information-flow model, named in Continuation 07 as the next specification phase, is specified functionally in Chapter 18; its formal adversarial treatment remains future work.

### D.6 Edition 1.3 integration log

Edition 1.3 compiles the post-1.2 material — the Competitive Intelligence / Originality Lab and Continuations 11, 12, 13, 15, 16, and 17 — per the Edition 1.3 Amendment Register, which is the integration authority for this edition. Edition 1.2 is frozen as the previous baseline of record. No Edition 1.2 normative text was altered except the front matter and the woven insertions listed below, each of which is recorded against its amendment. New divisions compiled from the continuations stand as new parts; open founder decisions recorded in the register remain open in this edition and are carried in Appendix C.11.

**D-36 — A-01, competitive positioning (Originality Lab §12).** The category definition — a user-governed Perspective Network, not an interest-map app — is woven into Chapters 1 and 38. 
**D-37 — A-02, testimony separation (Originality Lab §12).** No integration was required. The four-way separation of owner assertion, proposal provenance, current prominence, and exploration status was already in Edition 1.2 under R24 and the Chapter 6 clarifying model, and the register had closed the entry before this edition.

**D-38 — A-03, the definition of Q (Originality Lab §6 vs Expansion 01 §3, Continuation 04 §27).** The conflict is recorded, not resolved. Edition 1.3 carries both positions at Appendix C.11 and labels the Q-definition at Concept status, unsettled, in the Feature Status Register; the scoring form, its eligibility-before-scoring rule, and the D-15 fence are unchanged.

**D-39 — A-04, Perspective Passport (Originality Lab §§3, 12).** The Passport is woven into Chapters 17–18 as the primary human-facing permission experience: object-based selection first, resolution second, and a literal visitor preview before publication. 
**D-40 — A-05, reciprocity without scoring (Originality Lab §12).** No integration was required. Finite, mutually authorized discovery was already the compiled position in Edition 1.2; the entry was closed in the register.

**D-41 — A-06, competitive validation programme (Originality Lab §§8, 12, 13).** Controlled comparisons against simpler alternatives are woven into Chapter 37. The §8 scorecard numbers are recorded there as hypotheses, not gates, until ratified.

**D-42 — A-07, Competitive Evidence Register (Originality Lab §12).** Satisfied by the new Appendix F, seeded from the Lab's capability matrix and the competitive sections of Continuations 13, 15, and 16. 

**D-43 — A-08, signature-experience naming (Originality Lab §3).** The five names — Testimony Compass, Perspective Passport, Reciprocity Bridge, The Unfinished World, and Seed-Born Worlds — are woven into Chapters 1–42 at the mechanisms they name, as recorded at Appendix C.11. 

**D-44 — A-09, Unfinished World owner controls (Originality Lab §3).** Freeze, reset, and simplify are woven into Chapters 12 and 16 as a new functional proposal. It was not specified in any prior document, so Edition 1.3 records it at Concept status.

**D-45 — A-10, implementation architecture recommendations (Originality Lab §5).** Not integrated as canon. The recommendations are recorded as Pass 3 reconciliation input, for engineering reconciliation outside this Bible.

**D-46 — A-11, no sponsored placement (Originality Lab §10).** The rule that there is no paid promotion or sponsored topic placement in the core World model is woven into Chapter 38. 

**D-47 — A-12, the Presentation Layer (Continuation 11 §§91–100).** Compiled, with A-14, as Part VIII. The compilation carries the Layer as a third independent system — Worldprint is meaning, Presentation is expression, Lens is permission, Perspective is the authorized experience — including authorization of the presentation itself, module fallbacks, independent Presentation revisioning, visual bindings, and Soundscape rules. The register's pilot-scope caution stands.

**D-48 — A-13, presentation record gap (Continuation 11 §§91–94).** Recorded as an open records item at Appendix C.11 and in entry D-57 below. No antecedent proposal or visual reference was supplied for this compilation, and none is inferred; Continuation 11 stands as the authoritative statement of the Presentation Layer.

**D-49 — A-14, the Presentation Compiler (Continuation 12 §§101–112).** Compiled, with A-12, as Part VIII. The compilation carries the nine-step sequence and its governing invariant (invariant 22), the Render Manifest, the threat model and single-projection principle, and the 130-case suite as planned only (Appendix E). See entry D-55.

**D-50 — A-15, Creator Universes and Live Worlds (Continuation 13 §§113–129).** Compiled as Part IX. The foundational separation is preserved: the Content Graph carries editorial semantics apart from the Worldprint's testimony semantics, live events reference an approved publication revision, audience participation never alters the Worldprint, and the §125 moderation set remains a precondition for public live discovery. The three §129 decisions remain open at Appendix C.11.

**D-51 — A-16, the Storyworld Engine (Continuation 15 §§146–157).** Compiled, with A-18 and A-19, as Part X. The compilation carries the Canon Graph as a third graph semantics, the Book-to-World pipeline, the Canon Verification Engine and its canon classes, the Character Canon Contract, the Reader Passport, the three narrative modes, and the Rights and Licensing Engine. See entry D-56.

**D-52 — A-17, continuation record gaps (filing record).** Recorded as an open records item at Appendix C.11 and in entry D-57 below. Continuations 08–10 were never received and Continuation 14 has not been received; this edition compiles the line as received and infers no content for the missing installments.

**D-53 — A-18, the Universe Pass business layer (Continuation 16 §§158–170).** Compiled, with A-16 and A-19, as Part X. The compilation carries the three subscription products — Creator Pass, Universe Pass, and Library Pass last — the Entitlement Engine, the Rights Compiler, the expiry rule, staged licensing with per-use permissions and no blanket permission, and the B2B licensing line. No price or economics figure is restated in these appendices.

**D-54 — A-19, the Free Worlds Initiative (Continuation 17 §§171–180).** Compiled, with A-16 and A-18, as Part X. The compilation carries the eligibility discipline and its four limitations under a human-reviewed Rights Registry, SourceEdition, the Discovery Bridge rule (invariant 23), the full-experience free tier, the Genealogy Engine, Public Domain Day, and the phased launch beginning with Wonderland, Dracula, and Holmes as three mechanic tests.

**D-55 — Two-layer visual-binding reconciliation (Continuation 11 §95; Continuation 12 §106).** Read in layers, the two binding surfaces do not conflict. Continuation 11 §95 defines the authoring surface, on the owner's side, whose sources are valid inside the private World; Continuation 12 §106 defines the compiled surface, whose sources are only the public projection fields. Authoring bindings compile down to projection fields, and no theme can force proposed or refuted material into a public projection.

**D-56 — Terminology guard: the extraction sense only (Continuation 15 §148; Chapter 56).** In the Canon Verification material compiled in Part X, the word "confidence" appears only in its extraction sense: an item of metadata about a text assertion's classification, shown to the author or editor during verification. It is not, and must never be read as, a field about a person; the person-field of that name remains prohibited throughout the node model, as settled at entry D-01. Wherever the two systems share a document, this distinction must be stated.

**D-57 — Appendix-letter mapping, and the record gaps.** The compilation brief for this edition assumed a different appendix mapping than Edition 1.2's actual appendices. Edition 1.3 preserves Edition 1.2's letters — A, Event dictionary; B, Invariants; C, Decision register; D, Review log; E, Revision and evidence log — and adds F, Competitive Evidence Register, and G, Glossary. Accordingly, the brief's "A — Invariants" material is in Appendix B, its "B — Glossary" is Appendix G, and its "E — Acceptance suites" material is in Appendix E and Chapter 36; Appendix D's heading is retitled to cover both editions' logs. The record gaps stand as recorded at A-13 and A-17: Continuations 08–10 and 14 were not received, the antecedent presentation proposal and its visual references are not in the project folder, and the Studio reference designs noted at §103 are likewise not in the folder.

**D.6 supplement — Continuation 19 integrated during compilation (A-20).** Continuation 19 (The Living Classroom / SEE MY WORLD: Education, §§197–214) arrived while this edition was being compiled. Under the founder's instruction to compile all working information — and following the precedent set when the Complete Project Audit arrived during the Edition 1.2 build and was integrated as rulings R19–R28 — it is integrated into Edition 1.3 as a fourth new part (Part XI, Chapters 63–70), with its §207 student-privacy firewall promoted to Appendix B invariants 24–27, its terms added to Appendix G, its 238-case acceptance suite recorded in Appendix E as planned and unexecuted, and its features added to the Feature Status Register at Concept or Specified. Two record notes: Continuation 18 has not been received (the record gaps are now Continuations 08–10, 14, and 18; no content is inferred for them), and institutional pricing in §208 is deliberately unset in the source document itself — it is recorded as undecided, not carried as an outstanding founder decision. The document's named next milestone (the Living Atlas Education Engine v1.0 specification and the integrated Athens demonstration) is not commissioned by this edition.

**D.6 supplement — Continuation 20 integrated during compilation (A-21).** Continuation 20 (The Total Immersion Initiative, §§215–232) arrived while this edition was being compiled and is integrated under the founder's compile-all instruction as Part XII (Chapters 71–77). Its central architectural act is adopted as a formal architectural proposal: the Immersive World Runtime as the shared experiential foundation for all pillars — a runtime layer that consumes authorized manifests, not a new authority regime and not a pillar. Its three invariant-grade rules are promoted to Appendix B (invariants 28–30, shared with A-22). The Immersion Acceptance Framework (§231) is recorded in Appendix E as a framework; the source specifies no case count and none was invented. The §216 research (a 2026 umbrella review of 93 articles; a 2025 educational VR review; WebXR/W3C) is recorded in Appendix F, Table 4, with Unvalidated status.

**D.6 supplement — Continuation 21 integrated during compilation (A-22).** Continuation 21 (Era Worlds / The Time Machine, §§233–248) arrived with Continuation 20 and is integrated as Part XIII (Chapters 78–83), the final pillar part. Era Worlds is powered by the Temporal Knowledge Graph (Part XI), the Immersive World Runtime (Part XII), the Living Artifact System, and the Reality Lens, and is specified as a connective layer across all pillars with canon and reconstruction kept separate but labeled-linked (Chapter 83). The Smithsonian collections and the Library of Congress Free to Use and Reuse collection named as its research foundations are recorded in Appendix F, Table 4. One terminology note: the TemporalScene contract's field name *reconstructionConfidence* (Chapter 82) is reproduced verbatim from the source contract; it carries a three-value classification of a scene's evidence status (DOCUMENTED / PARTIAL / INTERPRETIVE) — a category label for a reconstruction, not a numerical probability and not a field about a person; the prohibited person-field remains prohibited (entry D-56).

**D.6 supplement — The pillar-count discrepancy (Continuation 21, §233 vs §248).** The source document introduces Era Worlds in §233 as "a fifth major product pillar" and concludes in §248 that "ERA WORLDS becomes the sixth major experiential pillar". The two wordings cannot both be compiled literally. This edition records Era Worlds as the **fifth experiential pillar** — Personal, Creator, Literary, Educational, Era — on the ground that the Immersive World Runtime, the only candidate sixth, is by its own document's account a foundation layer rather than a pillar (Continuation 20, §232; Chapter 77). The §248 wording is recorded here, unresolved, as a source discrepancy held for founder confirmation; it is not silently harmonized anywhere in this Bible, and no other chapter adopts a pillar count that depends on it.

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

**Presentation acceptance suite — planned only (Continuation 12 §111).** A dedicated acceptance suite for the Presentation Layer and Presentation Compiler, of 130 cases in nine categories: theme validation, 12 cases; layout responsiveness, 14 cases; module permissions, 18 cases; visual binding safety, 16 cases; asset authorization, 12 cases; soundscape behavior, 10 cases; revision and recovery, 10 cases; accessibility, 16 cases; adversarial disclosure, 22 cases — 130 cases in total. The suite is planned only; no case in it has been executed, and no result is claimed for it. Its top regression is recorded with it: a theme change must never modify testimony.

**Storyworld acceptance bar — planned criterion (Continuation 15 §156).** The acceptance bar for a Literary World is zero known unauthorized canon or spoiler disclosures. This is recorded as a planned acceptance criterion for the Storyworld material compiled in Part X, not as measured evidence: no Literary World acceptance run has taken place, and the bar has not been measured against any build.

**Edition 1.3 (21 November 2026) — revision-log entry.** Edition 1.3 compiles the Competitive Intelligence / Originality Lab and Continuations 11, 12, 13, 15, 16, and 17 on the Edition 1.2 base, per the Edition 1.3 Amendment Register: woven insertions in Chapters 1–42, new Parts VIII, IX, and X, new invariants at Appendix B, new decisions at Appendix C.11, the integration log at Appendix D.6, and new Appendices F and G. Edition 1.2 is frozen as the previous baseline of record. The 104-case harness of Chapter 36 remains planned, with no case executed — its status is unchanged from Edition 1.2.

**The educational acceptance suite (Continuation 19, §213) — PLANNED ONLY.** A third planned suite joins the harness of Chapter 36 and the Presentation suite: 238 proposed cases across nine categories — historical evidence integrity (30), temporal reconstruction (24), historical figure simulation (28), mythology source variation (24), teacher lesson workflows (24), assessment and feedback (24), school integrations (22), student privacy and security (34), accessibility and age suitability (28). These are planned acceptance cases, not tests that have been implemented or executed; no case in this suite has been run. Its release gates are: zero known critical student-data disclosures; no unlabeled fabricated historical quotations; accessible core navigation; and expert approval of the pilot's historical claims. The gates are criteria for a future release decision, not results.

**The Immersion Acceptance Framework (Continuation 20, §231) — A FRAMEWORK, NOT A SUITE.** The immersion line proposes an acceptance *framework* of ten categories — Presence, Agency, Continuity, Authority, Privacy, Accessibility, Learning, Performance, Comfort, and Creator control — each defined by what success means (for example, Authority: no unauthorized canon or historical claims; Accessibility: equivalent core tasks work without sensory effects or XR). The source document specifies no case count for this framework, and none is invented here. It is recorded as an evaluation framework for future suites, not as a planned case suite and not as executed evidence. Its measurement discipline is part of the framework: user performance in structured tasks rather than self-reported immersion; pre/post assessments and delayed retention checks for education where feasible; narrative comprehension, voluntary return, and navigation success for literature; production time and editorial corrections for creators.

## Appendix F — Competitive Evidence Register

This appendix exists to prevent reliance on outdated assumptions about competitors. Each entry carries its source, its date, the capability the source actually verifies, the differentiation hypothesis the project states against that capability, and a validation status. The Originality Lab's verdict is recorded here without amendment: individual feature novelty is limited, with substantial precedents; integrated differentiation is promising but unvalidated; patentable novelty is undetermined pending a formal prior-art search covering patents, published applications, and non-patent literature. No claim of legal novelty is made anywhere in this Bible. Every entry's validation status is "Unvalidated" unless a source in the project folder establishes otherwise; no entry in this appendix is established otherwise.

### F.1 Personal and social products

Source for this table, unless otherwise noted: Competitive Intelligence / Originality Lab, capability matrix and §§1, 4, November 2026.

| Competitor | Source | Date | Verified capability | Differentiation hypothesis | Validation status |
|---|---|---|---|---|---|
| Are.na | Originality Lab §1 | November 2026 | Human-curated collections and connected discovery; private, closed, and public channels, collaboration, export, and member subscriptions | A correctable, evolving personal representation, rather than primarily collections | Unvalidated |
| Cosmos | Originality Lab §1 | November 2026 | Visual taste sharing: saving, visual search, curated profiles, collaborative collections, and discovery through other people | Explainable interest relationships and consent-based sharing, beyond a beautiful interface for sharing taste | Unvalidated |
| Pinterest | Originality Lab §1 | November 2026 | Large-scale interest recommendations using saved Pins, searches, boards, and activity, with user controls to refine recommendations and hide individual Pins | Owner-authored assertions that override inferred preferences | Unvalidated |
| mymind | Originality Lab §1 | November 2026 | Private, AI-organized memory: automatic categorization of saved material, with privacy as its proposition | Deliberate, recipient-specific sharing of what a person can correct and authorize | Unvalidated |
| Obsidian | Originality Lab §1 | November 2026 | Linked knowledge graphs and publishing: nodes, links, filters, and groups, with connected notes navigable online | Consumer-friendly World creation without manually building a knowledge base | Unvalidated |
| The StoryGraph | Originality Lab §1 | November 2026 | Preference-based recommendations and social reading | Cross-domain curiosity and selective perspective exchange, beyond a single media category | Unvalidated |
| Letterboxd | Originality Lab §1 | November 2026 | Expressive taste profiles and social discovery, within one media category | Connections across all interests, not one media category | Unvalidated |
| Spotify Blend | Originality Lab §1 | November 2026 | Shared taste: two users' tastes merged into a shared experience, with taste-match scores | Explicitly governed sharing without a compatibility score | Unvalidated |
| Discord | Originality Lab §1 | November 2026 | Interest communities and permissioned spaces | Understanding a person's curiosity before joining a community | Unvalidated |
| Solid / Open Humans (data-ownership category) | Originality Lab §1 | November 2026 | User-controlled data storage through Pods and WebIDs (Solid); user-directed data sharing (Open Humans) | To make user-owned data and revocable access useful inside an everyday social experience | Unvalidated |

### F.2 Creator platforms

Source for this table: Continuation 13 §114, November 2026, except where a dated item is noted in the entry itself.

| Competitor | Source | Date | Verified capability | Differentiation hypothesis | Validation status |
|---|---|---|---|---|---|
| Twitch | Continuation 13 §114 | November 2026 | Livestreaming, interactive extensions, viewer-triggered effects, and community rewards | Make the entire venue explorable, not just the video overlay | Unvalidated |
| YouTube Live | Continuation 13 §114 | November 2026 | Live video, chat, memberships, monetization, and archives; its native live chat is available on YouTube watch pages, not in embedded players | Connect each event to persistent, explorable creator knowledge | Unvalidated |
| Patreon | Continuation 13 §114 | 2025 (native livestreaming introduced) | Membership-gated livestreams, chat, and creator–community relationships, including scheduled and membership-restricted events | Integrate membership into a designed World rather than a post feed | Unvalidated |
| Discord | Continuation 13 §114 | November 2026 | Stage events, video, screen sharing, and community roles | Give the community a coherent spatial and narrative identity | Unvalidated |

### F.3 Literary and interactive products and precedents

Sources for this table: Continuation 15 §147 and Continuation 16 §§158, 167, November 2026, except where a dated item is noted in the entry itself.

| Competitor | Source | Date | Verified capability | Differentiation hypothesis | Validation status |
|---|---|---|---|---|---|
| Hogwarts Legacy | Continuation 15 §147 | November 2026 | An immersive, explorable Wizarding World game with original adventures, characters, and locations; single-player, under the Portkey Games label | Persistent author-managed content, live events, and reader communities, rather than outbuilding a major 3D game | Unvalidated |
| Interactive Middle-earth map | Continuation 15 §147 | November 2026 | An interactive literary map offering place pages, character journeys, a timeline, and story-following | Beyond static geography: creator-approved interactions, events, and connected reader Worlds | Unvalidated |
| Inworld AI | Continuation 15 §147 | November 2026 | Technology for responsive characters, speech, world state, and licensed-IP experiences | An integrated literary publishing platform where character interaction is one component of a canon-governed World | Unvalidated |
| AMC / Dorian — licensed interactive fan adaptations of Anne Rice properties | Continuation 16 §158 | 2022 (partnership); 2020 (AMC rights acquisition) | A rights holder's precedent, not a product feature: AMC acquired broad rights in 2020 to works across The Vampire Chronicles, The Lives of the Mayfair Witches, and crossover novels, and in 2022 partnered with Dorian on interactive fan-created adaptations involving Anne Rice properties | The offer must exceed interactive fan fiction: persistent environments, canonical navigation, live experiences, and cross-work continuity | Unvalidated |

*Table 4 — Source, resource, and research entries (not competitors; recorded so the build's research foundations carry the same evidence discipline). Columns as Tables 1–3.*

| Entry | Source | Date | Verified capability / content | Relevance to SEE MY WORLD | Validation status |
|---|---|---|---|---|---|
| Smithsonian — National Museum of American History collections | Continuation 21 §236 | November 2026 | Collections documenting American domestic life, clothing, childhood, schooling, foodways, and everyday material culture from the seventeenth century onward | Named research foundation for the Everyday Life Engine's situated households and material culture | Unvalidated |
| Smithsonian — 1990s collections | Continuation 21 §238 | November 2026 | A curated collection focused on objects from the 1990s — technology, entertainment, and everyday material culture | Named starting point for source-grounded visual and object research for the 1990s flagship | Unvalidated |
| Library of Congress — Free to Use and Reuse | Continuation 21 §244 | November 2026 | Extensive historical image collections with a curated subset identified as free to use and reuse; the general collections are NOT automatically free of copyright or other restrictions | A cleared subset for Era World assets — explicitly not a blanket clearance; the Rights Compiler checks every protected asset before publication | Unvalidated |
| Immersive-learning umbrella review (93 articles) | Continuation 20 §216, citing Sage Journals | 2026 | Found promising results for knowledge acquisition and higher-order cognitive skills, with mixed results for some emotional and skills-based outcomes | Grounds the progressive-immersion strategy: presence must serve a purpose; every experience needs a meaningful action; reflection is part of immersion | Unvalidated |
| Educational VR review | Continuation 20 §216 | 2025 | Highlighted the value of pre-training and active learning tasks in educational VR | Supports active-learning task design over passive realism in educational immersion | Unvalidated |
| WebXR / W3C | Continuation 20 §216, citing W3C | November 2026 | A standards-based route to optional browser-based VR and AR, with device capability, accessibility, performance, and consent caveats | The L4 rung of the Immersion Ladder is specified against this standard route, not a proprietary runtime | Unvalidated |

## Appendix G — Glossary of Edition 1.3 terms

Terms introduced or named in Edition 1.3. Where a term names an existing Edition 1.2 mechanism, the entry says so; a name creates no new mechanism. Definitions are those of the source documents as compiled in this edition.

**Agency Engine.** The immersion subsystem governing visitor choice at three levels — Exploratory (persisting to the Reader Passport), Narrative (personal experience state), and Collaborative (an authorized group session). Alternate outcomes never rewrite canon; counterfactuals are never presented as fact. (Chapter 75.)

**Canon Graph.** The structured representation of an authorized literary universe — characters, places, events, objects, and lore — in which every assertion is source-linked and carries an editorial status. A third graph semantics, beside the Worldprint (testimony) and the Content Graph (editorial publication).

**Character Canon Contract.** The governing record for an interactive character: approved identity, time-specific knowledge boundary, temporal relationship validity, prohibited spoilers, canonical-vs-improvisation distinction, and source-backed retrieval. A character never reveals a twist because the model knows it, and conversation never rewrites canon.

**Civilization Engine.** The educational subsystem that reconstructs entire civilizations with multiple perspectives on the same society; no single simulated experience represents a whole group. (Chapter 66.)

**Classroom Expedition.** A structured learning journey inside an educational World — beginning, investigative tasks, ending — in which the student answers a question with a claim, supporting evidence, and an acknowledgement of limitations. (Chapter 67.)

**Content Graph.** The graph of creator-authored material, governed by editorial approval, publication state, and content versions, strictly separated from the Personal Worldprint. The two graphs reference each other only through explicit authorized links and never silently merge.

**Creator Pass.** A subscription product giving access to a particular creator's approved events, content, and community. It is the first of the three subscription products recorded in Part X.

**Creator Universe.** A collection of governed Worlds and venues under one creator — identity, branding, and creator-wide settings — with independently governed personal, fictional, educational, or collaborative Worlds beneath it.

**Cultural Atmosphere Engine.** The Era Worlds subsystem coordinating six atmosphere systems — architecture and objects, fashion and appearance, sound, communication, economics, and social context — each grounded in region- and date-identified sources. (Chapter 80.)

**Decade Simulator.** The Era Worlds experience format that places a visitor inside one situated day (the prototype: One Day in 1995) to teach an era through its period constraints, with explicit variability disclaimers. (Chapter 79.)

**Discovery Bridge.** The rule by which a reader in a free World is recommended a related paid World, using only their current, explicitly chosen exploration context and editorially documented relationships. Recommendations are transparent and optional, and never mine the private Worldprint (invariant 23).

**Educational Knowledge Graph.** The educational extension of the Storyworld Graph: typed knowledge domains and relations (KnowledgeDomain, KnowledgeRelation) connecting history, mythology, religion, literature, science, and philosophy without treating them as interchangeable. (Chapter 69.)

**EducationalClaim.** The Historical Evidence Engine's unit of educational assertion: a statement carrying evidence references, an evidenceStatus, temporal validity, an editorial revision, and its reviewers. EducationalClaims never carry numerical certainty scores. (Chapter 64.)

**EducationalWorld.** The contract object for an educational World: its knowledge domain, source collections, curriculum alignments, review status (DRAFT / EXPERT_REVIEW / APPROVED / RETIRED), age band, and publication revision. (Chapter 69.)

**Entitlement Engine.** The component that answers only whether access was purchased or granted. An entitlement never overrides intellectual-property restrictions, spoiler settings, or privacy permissions.

**Era Artifact Registry.** The registry of historically dated everyday objects under the EraArtifact contract: use ranges, geographic and social scope, source and rights records, interaction type, and reconstruction status. Availability depends on location, income, and access — not invention date alone. (Chapter 82.)

**Era Selector.** The time-machine entry interaction of Era Worlds: decade → year → location → scene. (Chapter 78.)

**Era World.** A geographically and socially situated historical environment addressed by WHEN × WHERE × WHO coordinates on the shared historical timeline; there is no generic version of an era. Also the EraWorld contract object (period, geographic scope, perspectives, sources, rights, reconstruction revision, editorial status). (Chapters 78, 82.)

**Event Portal.** The Era Worlds gateway from everyday exploration to a significant event, keeping four kinds distinct: Documented event, Reconstruction, Interactive investigation, and Counterfactual scenario. (Chapter 81.)

**Everyday Life Engine.** The Era Worlds subsystem reconstructing ordinary life — home, communication, commerce, entertainment, work, travel — with usable objects and multiple social strata rather than one universal household. (Chapter 79.)

**Evidence Lens.** The three-view lens over an educational World: Experience View (explore the reconstruction), Evidence View (inspect the supporting documents, artifacts, and scholarship), and Uncertainty View (see what is disputed or speculative). (Chapter 64.)

**Free Worlds Initiative.** The permanent pillar under which public-domain Literary Worlds are offered as a full free experience and as the acquisition gateway to the Storyworld line (Part X).

**Genealogy Engine (Literary Genealogy Engine).** The component that applies the canon classes to literary history, distinguishing source-supported influence from thematic resemblance. A genealogy link may be shown as scholarship while its destination is served only under license.

**Historical Evidence Engine.** The subsystem that binds every educational claim to evidence — evidence type, evidence status, temporal validity, and scholarly review — and refuses false numerical certainty. (Chapter 64.)

**Historical Figure Encounter.** A labelled interaction with a simulated historical figure, in one of three modes: **Documented Voice** (verified quotations or paraphrases with citations), **Historical Simulation** (an AI-assisted reconstruction, labelled as such, that must not invent undocumented experience as fact), and **Counterfactual Laboratory** (hypothetical decisions tested against the record, clearly separated from actual events). (Chapter 65.)

**Historical Persona Engine.** The Era Worlds subsystem offering historically plausible roles shaped by their society; it never claims to reproduce a real person's exact lived experience without evidence. (Chapter 81.)

**Immersion Director.** The creator tool for designing immersive experiences by narrative intent; it outputs a declarative scene specification, not uncontrolled executable code, and the creator reviews and approves the result. (Chapter 76.)

**Immersion Ladder.** The four conceptual levels of presence — L1 Living Atlas, L2 Spatial 2.5D (the recommended first flagship), L3 Embodied, L4 VR/AR — powered by one approved content base, with progress portable across devices. All levels are conceptual, not implemented. (Chapter 71.)

**Immersive World Runtime.** The runtime layer above the pillar engines that receives an authorized manifest and controls environmental state, interactions, synchronization, and presentation within the server-side permission boundary. The shared experiential foundation for all pillars; a foundation layer, not a pillar and not an authority regime. (Chapters 76–77.)

**ImmersiveExperienceManifest.** The runtime's rendering contract: world, publication and authority revisions, mode, authorized scene/interaction/artifact references, spoiler policy, accessibility profile, social mode, expiry. A rendering contract, not an access credential. (Chapter 76.)

**Library Pass.** A subscription product giving access to a defined bundle of participating Universes, without implying that every franchise is included. It is the last of the three subscription products to be introduced, only after single-universe validation.

**Living Artifact System.** The platform-wide system of inspectable, source-linked objects — historical objects, fictional documents, instruments, findings, symbols, memorabilia — with investigation boards; one of the most reusable investments across pillars. (Chapter 75.)

**Living Classroom.** The education pillar's product name: SEE MY WORLD: Education — the Living Atlas of Human Knowledge, governed by evidence and scholarly review. (Part XI.)

**Living Environment Engine.** The immersion subsystem making environments responsive (time, narrative state, weather, approved events, visitor choices) strictly through an approved World State Manifest; it cannot invent facts, reveal future plot, or generate canon. (Chapter 72.)

**Living Episode.** The permanent, navigable publication of a live event after it ends, with approved clips, resources, annotations, and Seeds attached to the territories discussed.

**Memory & Consequence Engine.** The immersion subsystem distinguishing three memory kinds: the visitor's personal journey, session experience state, and World canon — "The World has an authoritative history. The visitor has a personal history within it." (Chapter 73.)

**Pantheon Engine.** The educational subsystem for mythology: multiple source-specific traditions preserved and compared, never forced into one definitive family tree; living religious traditions are handled only with expert and community partnership. (Chapter 66.)

**Parallel History Engine.** The Era Worlds subsystem comparing the same moment across multiple places side by side, so no one country's culture defines a decade. (Chapter 80.)

**Perspective Passport.** The human-facing permission experience for sharing a Perspective: a summary of what a visitor may explore — subjects, detail level, recipient, expiration, and whether comparison is permitted. It names the existing Edition 1.2 Lens and Perspective mechanism (Chapters 17–18).

**Portal (World Portal).** A temporary, reciprocal connection between approved territories in two creators' Worlds, for a joint event or expedition. Each Portal requires two independent approvals, either side's revocation closes it, and no data is copied between Worlds.

**Presence Engine.** The immersion subsystem governing a World's inhabitants in four declared classes: narrative characters, historical simulations, world guides, and opted-in live participants. (Chapter 73.)

**Presentation.** The expression layer of a World: its themes, layout, module arrangement, visual bindings, and soundscape, as authored in the World Studio. Presentation is independent of meaning (Worldprint) and of permission (Lens).

**Presentation Compiler.** The compiler that takes an approved Presentation revision, a Lens-authorized projection, and the visitor's accessibility preferences, and produces a deterministic rendering specification. Compilation cannot increase the information in the authorized projection (invariant 22).

**Public Domain Day.** The annual January release event at which newly entered public-domain works are added to the Free Worlds library, each under its own per-edition rights verification.

**Reader Passport.** The reader-owned record of a journey through Literary Worlds. It is private by default, never auto-discloses reading history, purchases, or preferences to creators, and saving to it is not testimony.

**Reality Lens.** The Evidence Lens generalized platform-wide: six persistent provenance categories (Literary canon / Historical evidence / Traditional account / Reconstruction / Simulation / Personal testimony) available in every modality. Immersion never conceals uncertainty for believability. (Chapter 76.)

**Reciprocity Bridge.** Finite, mutually authorized discovery between two people: each independently approves what to share, and the system offers a small set of discoveries to explore together, without any compatibility score. It names the existing Edition 1.2 Encounter mechanism (Chapter 21).

**Render Manifest.** The Presentation Compiler's declarative, digest-bound output, carrying the world, presentation, and Atlas versions of the projection it renders. Its digest is not an authorization token; access is revalidated per request.

**Rights Compiler.** The component that compiles a Pass against the rights currently available, so that a subscriber is never promised content the platform is not licensed to serve. The Pass object carries the rights policy revision it was compiled against.

**Rights Manifest.** The policy record identifying which source materials an uploader may use, and for what purposes, in a Literary World. It is not legal proof; the compiler denies any public feature outside its verified scope.

**Scholar Studio.** The professional authoring environment for historians and educators: Sources → Claims → Historical Graph → Reconstruction → Expert Review → Classroom Publication. (Chapter 69.)

**School Integration Layer.** The phased integration surface for school systems — LTI 1.3 / LTI Advantage, OneRoster, QTI, CASE — beginning with secure launch and assignment links; no standards certification is claimed until an implementation has actually passed certification. (Chapter 68.)

**Seed-Born Worlds.** Worlds begun from a Seed a visitor deliberately saved from an authorized Perspective, which later becomes a provisional starting point in the visitor's own World. It names the existing Edition 1.2 mechanism (Chapter 19).

**Sensory Director.** The immersion subsystem orchestrating approved environmental effects under visitor permission — audio off by default, flashing limited, motion reducible, independent intensity controls — always subordinate to accessibility settings. (Chapter 74.)

**Social Presence Engine.** The immersion subsystem offering four consented social modes — Solo, Companion, Guided Group, Public Event — with observability transparency: a visitor always knows who can see, hear, message, or observe them. (Chapter 75.)

**Soundscape.** A Presentation's audio dimension, under the rules that autoplay is off by default, a visitor mute is permanent for the session, and music selection is never an undeclared behavioural signal.

**SourceEdition.** The entity to which rights attach in the Free Worlds Initiative: rights attach to editions, not works, and the Engine generates only from verified source editions. A later adaptation or translation is a separate source with its own record.

**Storyworld Engine.** The system that converts authorized literary material into a structured, navigable, canon-governed World: import, extraction, canon verification, author approval, and generation. The third product pillar, alongside the Personal World and Creator Universe Engines.

**Teacher Studio.** The educator's environment for selecting a World, choosing a learning objective, assigning a guided route, setting reading level, and reviewing student work. Its controls are scoped to the classroom session and never alter a student's personal World. (Chapter 67.)

**Temporal Knowledge Graph.** The knowledge graph in which assertions carry temporal validity — when an assertion is believed to have been true — together with the evidence supporting that dating. (Chapter 64.)

**TemporalScene.** The Era Worlds scene contract: location, validity range, available artifacts and events, evidence references, and a reconstruction-status classification (DOCUMENTED / PARTIAL / INTERPRETIVE). Dates carry uncertainty ranges; a precise date is never invented to satisfy a field. (Chapter 82.)

**Testimony Compass.** The provenance surface of a World, under which every meaningful element can answer why it is here, who decided it belongs, and what can be changed. It names the existing Edition 1.2 provenance and Receipts surface; it creates no new mechanism.

**Time Portal.** The time-navigation experience over the Temporal Knowledge Graph: a location changes across periods rather than appearing identical in every era. (Chapter 64.)

**Time Shift Engine.** The Era Worlds subsystem holding one location constant while it transforms across historical periods; where exact reconstruction is unavailable it displays an interpretive model, never an invented definitive view. (Chapter 80.)

**Unfinished World.** The foundation under which a World visibly distinguishes what the owner has affirmed, what the system has proposed, what the owner is exploring, and what has become less prominent. Its owner controls — freeze, reset, simplify — are in Chapters 12 and 16.

**Universe Pass.** A subscription product giving access to one licensed literary or fictional universe: a defined collection of authorized experiences. It is not ownership of the underlying intellectual property and grants no access to unpublished material.

**Venue.** A reusable event location inside a Creator Universe — a stage, classroom, theater, gallery, or workshop — in which Sessions are hosted. Access to a venue may be authorized by a payment entitlement, which is not a privacy grant (Appendix B, invariant 21).

**Visual Binding.** A controlled, inspectable rule connecting a permitted data field to a visual property, with no arbitrary script. It has two surfaces, read in layers: the authoring surface, valid inside the private World, and the compiled surface, whose sources are only public projection fields (entry D-55).

**World State Manifest.** The approved manifest driving all change in a Living Environment; no environmental change occurs outside it. (Chapter 72.)

**World Studio.** The authoring environment in which an owner composes a Presentation — themes, modules, bindings, and soundscape — with a quick default path and advanced controls deferred beyond the pilot scope in Part VIII.
