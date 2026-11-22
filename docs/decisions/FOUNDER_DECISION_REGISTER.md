# SEE MY WORLD — Founder Decision Register (Phase Zero)

**Purpose:** the complete open-decision queue, extracted from the corpus as it stands on 21 November 2026, so that no implementation work proceeds on an unsettled question by accident.
**Governing sources:** Edition 1.4 Appendix C (decision register) and Appendix D (entries D-34, D-38); the Edition 1.5 Amendment Register (entry A-32); the organization plan (`AI-DEVELOPMENT-ORGANIZATION.md`).
**Rule:** this register presents **positions as recorded and nothing else**. It makes no recommendation on any founder decision. Where a source document records a recommendation (the Complete Project Audit does, for every gap), that recommendation is transcribed and labelled as the audit's — recording a position is not adopting it.

## How to read the count

- **27** open decisions sit in the 42-gap tables of Appendix C (§§C.2–C.11) — enumerated in §3 of this register. Edition 1.4's front matter and Appendix C.12 say "25"; the row count in the file is 27 (see `PROJECT_STATE_AUDIT.md`, discrepancy D-PZ-01).
- Around them: 6 carried compilation items (§4), the Q definition (§5.1), the three §129 decisions (§5.2), two record-gap matters (§5.3), the pillar-count wording (§6), three A-32 operational items (§7), and the recovered-tails disposition (§8).
- Overlaps are counted once: **D-34 is the same decision as gap U02 and priority decision 4**; it appears once (Q-01) with all its cross-references.
- **Total distinct queue items: 44** (Q-01–Q-44).

---

## 1. Q-01 — The CONFIRM conflict (D-34) — the single named unresolved conflict

| | |
|---|---|
| **Decision** | Whether confirmation of a proposed topic is an explicit CONFIRM event, or whether BOOST upgrading provenance to DECLARED is the confirmation act. |
| **Position A** (Complete Project Audit, §3, contradiction 3; gap U02) | BOOST upgrading provenance to DECLARED conflates two distinct owner acts — affirming a topic's prominence and declaring it as one's own. The audit recommends an explicit CONFIRM event and a separate confirmation action, so declaration and confirmation keep separate meanings and separate testimony semantics. |
| **Position B** (Continuation 06, §47 — the latest normative source) | The pure reducer specifies BOOST → DECLARED with testimony +1.0: a single, simple, replayable rule, continuous with the original First Draft Engine's operator table, under which BOOST is precisely the act by which a proposed or confirmed topic becomes declared-equivalent. |
| **Current state** | Testimony-v1 as specified (Position B's rule) governs the normative text (Edition 1.4, Chs. 7, 25). No reducer behaviour has been changed by any edition. If Position A prevails, it requires a separately versioned reducer — never a silent edit to v1. |
| **Blocks** | The testimony reducer's final semantics; the correction UI's action set; priority decision 4 (Appendix C §C.1); TIDAL's regression suite cannot be finalised against both positions. |
| **Recorded at** | Edition 1.4, App. D entry D-34; App. C §C.1 #4, gap U02, and the second C.11 table (row "D-34"); Edition 1.4 Register, standing notes. |

## 2. The 12 priority decisions (Appendix C §C.1, audit order) — status

Eight are open; four were adopted in Edition 1.2 and are **not** in the queue. They are listed here so the queue's relationship to the priority list is explicit.

| # | Decision | Status |
|---|---|---|
| 1 | Choose the first target audience (P01) | **Open** → Q-02 |
| 2 | Define the minimum complete journey (P04) | Adopted in Edition 1.2 (R28) — First Light → correction → Lens → visit → Seed → SEE YOURS |
| 3 | Lock the First Light bootstrap (U01) | Adopted in Edition 1.2 (R21) |
| 4 | Resolve correction and testimony semantics (A01, A02, U02) | **Open** → Q-01 (D-34) and Q-06 (A02) |
| 5 | Freeze the World state contract (A05) | Adopted in Edition 1.2 — testimony-v1 frozen |
| 6 | Define Lens disclosure precisely (S01) | **Open** → Q-09 |
| 7 | Define Seed ownership and revocation (D03, S04) | Adopted in Edition 1.2 (R20) |
| 8 | Specify Comparison and New Frontier (Ch. 20) | **Open** → Q-38 (ratification, §4 item 4) |
| 9 | Establish Atlas governance (G01, G03) | **Open** → Q-17, Q-18 |
| 10 | Choose retention and deletion rules (S05) | **Open** → Q-13 |
| 11 | Inspect and reconcile the real codebase (E01) | **Open** → Q-19 (and see Q-43: in this workspace there is no codebase to inspect — `PROJECT_STATE_AUDIT.md` §3) |
| 12 | Define pilot success and stop conditions (V01) | **Open** → Q-27 |

---

## 3. The 27 open decisions in the 42-gap tables (Appendix C §§C.2–C.11)

Each entry: the question as the audit posed it, the audit's recorded recommendation (a position, not a ruling), the status note as Edition 1.4 records it, and what it blocks. IDs are the audit's gap IDs — note they collide with register and Appendix D numbering (`PROJECT_STATE_AUDIT.md`, discrepancy D-PZ-04).

### Product identity and market (§C.2)

**Q-02 · P01 — Who is the first ideal customer?** Audit recommendation: start with existing pairs and small groups who already want to understand each other's interests. *Blocks:* pilot recruitment design (Ch. 37 cluster model assumes an answer); Track A launch audience. *Recorded:* App. C §C.2.

**Q-03 · P02 — What is the primary reason to open the app?** Audit recommendation: creating and correcting a World, followed by exploring someone else's Perspective. *Blocks:* home/first-screen priorities; the Core journey's emphasis. *Recorded:* App. C §C.2.

### Onboarding and user experience (§C.3)

**Q-04 · U02** — *see Q-01 (D-34). Counted once.*

**Q-05 · U05 — What are the exact screen flows and error states?** Audit recommendation: produce complete wireflows for owner, anonymous visitor, registered visitor, and returning owner. *Blocks:* frontend build for Track A cannot be specified to acceptance without flows; Meridian's flows are separately specified (Continuation 30) but Core's are not. *Recorded:* App. C §C.3.

### World model and algorithms (§C.4)

**Q-06 · A02 — What are the exact semantics of DECLARED, CONFIRMED, WITNESSED, and REFUTED?** Audit recommendation: define a transition table for every event and provenance state. Status note: the reducer and protocols specify the principal transitions (Chs. 7, 25, 27); a complete transition table is still owed. *Blocks:* reducer implementation completeness; interacts with Q-01 (any CONFIRM ruling changes this table). *Recorded:* App. C §C.4.

**Q-07 · A06 — How are edges created, rejected, weighted, and decayed?** Audit recommendation: specify a separate relationship state machine and provenance ledger. Status note: the edge-correction command contract is adopted (R9); edge weighting and decay are unspecified. *Blocks:* relationship-graph implementation (Atlas v2.0 / World Memory Graph edges). *Recorded:* App. C §C.4.

### Privacy, consent, and security (§C.5)

**Q-08 · S01** — *see Q-09. (S01 is priority decision 6.)*

**Q-09 · S01 — What exactly can each Lens resolution disclose?** Audit recommendation: define a field-level disclosure schema for Continent, Coast, and Harbour. Status note: resolution semantics and disclosure eligibility are adopted (Chs. 18, 33); the field-level schema is still owed. *Blocks:* Lens Compiler implementation cannot be completed or privacy-tested to acceptance without it; PRISM's first assignment presupposes it. *Recorded:* App. C §§C.1 #6, C.5.

**Q-10 · S02 — How does the owner control audience, expiry, and resharing?** Audit recommendation: specify recipient grants, link capabilities, expiration, and forwarding behaviour. Status note: grants and expiry are specified (Chs. 17, 22); forwarding behaviour is not. *Blocks:* sharing implementation; revocation semantics for forwarded material. *Recorded:* App. C §C.5.

**Q-11 · S03 — Can a visitor infer hidden topics from comparison or map geometry?** Audit recommendation: test differential queries, aggregates, explanations, and visual side channels. Status note: disclosure eligibility is adopted as the primary mitigation (R7, Ch. 33); the differential testing programme is owed. *Blocks:* any public sharing release — the Bible's own gates require this programme; it also cannot run until code exists. *Recorded:* App. C §C.5.

**Q-12 · S05** — *see Q-13. (S05 is priority decision 10.)*

**Q-13 · S05 — How are deletion, exports, backups, and event history handled?** Audit recommendation: define retention schedules, erasure coverage, and backup expiration. Status note: erasure mechanics are specified (Chs. 24, 26); **periods are undecided**. *Blocks:* the erasure-vs-replay design (App. D, D-12) cannot be closed; privacy policy cannot be written; VAULT's deletion-lineage work has no periods to implement. *Recorded:* App. C §§C.1 #10, C.5.

**Q-14 · S06 — What data can external AI providers receive?** Audit recommendation: specify consent, minimization, vendor restrictions, logs, and retention. Status note: gateway safety rules are specified (Ch. 31); vendor terms are not. *Blocks:* any provider integration; the organization plan's stop conditions independently bar exposing private data to external AI providers without Founder approval. *Recorded:* App. C §C.5.

### Discovery and social interaction (§C.6)

**Q-15 · D01 — Where do Expedition resources come from?** Audit recommendation: establish approved source types, verification rules, and licensing requirements. Status note: the validation record and cost-per-validated-discovery metric are adopted (R14); source types and licensing are not. *Blocks:* Expedition Engine content operations (its planner contract is Specified; its content pipeline is Concept for this reason). *Recorded:* App. C §C.6. *(Gap ID D01 — not Appendix D entry D-01.)*

**Q-16 · D02 — How are discovery paths evaluated?** Audit recommendation: measure coherence, novelty, usefulness, and user control — not clicks alone. *Blocks:* discovery ranking acceptance; PULSE study measures. *Recorded:* App. C §C.6.

**Q-17 · D05 — What happens when someone abuses a shared Perspective?** Audit recommendation: introduce report, block, mute, and access-restriction flows before wider social discovery. Status note: report/block is required before wider discovery (Ch. 32); the flows are unspecified. *Blocks:* any social pilot beyond the closed Core journey; SENTINEL's playbook has no specified flows to implement against. *Recorded:* App. C §C.6.

### Atlas and content governance (§C.7)

**Q-18 · G01 — Who can create, rename, merge, or retire topics?** Audit recommendation: establish an editorial approval process and versioned change log. Status note: Atlas governance sits in decision rights (Ch. 41); the editorial process is unspecified. *Blocks:* Atlas operations; priority decision 9 (with Q-19). *Recorded:* App. C §§C.1 #9, C.7.

**Q-19 · G03 — How are sensitive topics, ambiguous terms, and cultural bias handled?** Audit recommendation: define exclusions, appeals, review criteria, and multilingual expansion rules. Status note: the attribute/topic distinction and exclusion rule are adopted (R23); appeals and multilingual rules are not. *Blocks:* Atlas governance completion; content policy. *Recorded:* App. C §§C.1 #9, C.7.

### Engineering and reliability (§C.8)

**Q-20 · E01 — What is the authoritative current codebase and release lineage?** Audit recommendation: inspect the actual v36 source, deployment, and database before changing architecture. *Blocks:* everything downstream in the plan's Stage 01. *Audit note:* in this workspace the question has an evidence-based partial answer — no codebase is present (`PROJECT_STATE_AUDIT.md` §3) — but the v36 archive's location and authority remain a founder/record matter, and this register does not close the gap. *Recorded:* App. C §C.8; Ch. 35.

**Q-21 · E02 — What is the final persistence and event-replay strategy?** Audit recommendation: select a transactional database and specify ledger, snapshots, deletion, and recovery. Status note: the strategy is specified (Chs. 24, 26, 28); production database confirmation is pending the repository inventory. *Blocks:* VAULT's schema work; interacts with Q-13 (retention periods). *Recorded:* App. C §C.8.

**Q-22 · E03 — What are the complete API contracts?** Audit recommendation: publish OpenAPI schemas, authentication rules, error codes, versioning, and compatibility requirements. Status note: API surfaces are specified at contract-sketch level in several continuations (e.g. Continuations 24 §298, 29 §396) as *proposed* contracts, explicitly not verified existing routes. *Blocks:* CIRCUIT's implementation work. *Recorded:* App. C §C.8.

**Q-23 · E04 — What are the operating limits and recovery objectives?** Audit recommendation: define latency, capacity, uptime goals, backup recovery, monitoring, and incident response. *Blocks:* BEACON's release operations; Stage 09 of the roadmap. *Recorded:* App. C §C.8.

### Commercial model and growth (§C.9)

**Q-24 · B01 — Who pays, for what, and when?** Audit recommendation: test individual premium tools versus paid collaboration spaces after validating the free core. *Blocks:* commercial model; note invariant 21 (payments are never privacy/rights/spoiler grants) bounds any answer. *Recorded:* App. C §C.9.

**Q-25 · B02 — What does one active World cost to operate?** Audit recommendation: model storage, inference, resources, support, moderation, and visitor traffic. Status note: tracked cost metrics are adopted (R14, Ch. 38); no cost model exists yet. *Blocks:* pricing work (Q-24) and MERIDIAN-persona's first assignment. *Recorded:* App. C §C.9.

**Q-26 · B03 — How does the product grow without an engagement feed?** Audit recommendation: test invitation clusters, Seed-Born Worlds, and organic reciprocal sharing. Status note: cluster recruitment is adopted for the pilot (Ch. 37). *Blocks:* growth design; bounded by invariant 41 (exploration is not labelling) and the no-feed rule. *Recorded:* App. C §C.9.

### Operations, legal, and accessibility (§C.10)

**Q-27 · O01 — Who owns legal, support, moderation, and incident responsibilities?** Audit recommendation: define accountable roles, policies, response procedures, and vendor agreements. *Blocks:* any public release; the organization plan §8 names the human roles (counsel, incident owner, etc.) but does not fill them. *Recorded:* App. C §C.10.

**Q-28 · O02 — What is the accessibility and device-support standard?** Audit recommendation: set a measurable target such as WCAG 2.2 AA and specify supported platforms. Status note: the target named is the audit's example, **not an adopted standard** — although Continuation 30 §417 independently specifies a WCAG 2.2 AA target for Meridian's web interfaces, no platform-wide ruling exists. *Blocks:* ACCESS's acceptance matrix needs a ratified standard to test against. *Recorded:* App. C §C.10.

### Validation and decision governance (§C.11, first)

**Q-29 · V01 — What evidence proves the concept is valuable?** Audit recommendation: define recognition, correction quality, meaningful visits, repeat use, and reciprocal discovery. Status note: the metric set is adopted as hypotheses (Ch. 37); **evidence thresholds are undecided**; also priority decision 12. *Blocks:* pilot go/no-go; PULSE's studies have measures but no thresholds. *Recorded:* App. C §§C.1 #12, C.11.

**Q-30 · V02 — Who decides when a feature or experiment becomes canonical?** Audit recommendation: maintain a decision register, approval process, and explicit evidence threshold. Status note: this register and Ch. 41's ADR discipline are adopted; the evidence threshold is not. *Blocks:* change control for everything, including any future testimony-v2 adoption. *Recorded:* App. C §C.11 (first).

*(Queue numbering note: Q-04, Q-08, and Q-12 are cross-references to Q-01, Q-09, and Q-13 and are not separate items; the 27 enumerated gap decisions occupy Q-01–Q-03, Q-05–Q-07, Q-09–Q-11, Q-13–Q-30 — 27 items.)*

---

## 4. Carried compilation items (Appendix C, first C.12 — "Carried open items from the Edition 1.2 compilation")

**Q-31 · Final product naming and trademark clearance.** No position recorded beyond the item itself. *Blocks:* any public branding, domain, or store presence. *Recorded:* App. C, first C.12, item 1.

**Q-32 · The testimony-v2-experimental coefficient (a).** The value was lost in source transit (twice — Continuations 02 and 06) and must be set by experiment design, not editorial choice. *Blocks:* testimony-v2 can be neither implemented nor tested until set; v1 is unaffected. *Recorded:* App. C, first C.12, item 2.

**Q-33 · Draft Survival thresholds.** The 30–50% band is a diagnostic hypothesis (Ch. 37), never a target; no threshold is ratified. *Blocks:* First Light quality gating. *Recorded:* App. C, first C.12, item 3.

**Q-34 · Ratification of the "unexplored" definition (Ch. 20).** Proposed in Edition 1.2 (R12, R19), pending ratification; this is priority decision 8's substance. *Blocks:* Comparison/New Frontier final semantics. *Recorded:* App. C, first C.12, item 4; App. D entry D-13.

**Q-35 · Exact meaningful-visit definition.** The north-star metric's precise operational form; a meaningful visit does not require a Seed save (Ch. 37). *Blocks:* pilot measurement (with Q-29). *Recorded:* App. C, first C.12, item 5.

**Q-36 · Coastline disclosure.** Whether and how an owner may explicitly disclose refutations (as comparison input under Ch. 20, or as published coastline shape). Governed meanwhile by Chs. 18/20 disclosure rules; a standalone coastline-sharing feature is a deferred decision, not pilot behaviour. Related: App. D entry D-35 records the coastline/growth divergences as deliberate, revisitable positions. *Recorded:* App. C, first C.12, item 6.

## 5. Amendment-register decisions (Appendix C, second C.11 table)

### 5.1 The Q definition

**Q-37 · A-03 — What does Q mean in U(c) = 0.30R + 0.25N + 0.20E + 0.15D + 0.10Q?**
- **Position A:** Q is *correction-information value* — whether asking about a candidate would clarify the World (Concept Expansion §3; Continuation 04 §27, fenced at App. D entry D-15: estimate clarification value, never emotional provocation).
- **Position B:** Q is *source and classification quality* — how well sourced and how reliably classified the candidate is (Originality Lab §6).
- Eligibility-before-scoring and the constrained multi-objective form are already normative; only Q's meaning is unsettled. The Feature Status Register labels the Q-definition **Concept, unsettled**.
- *Blocks:* Draft Selector / discovery ranking implementation (TIDAL/PRISM scope). *Recorded:* App. C, second C.11, row A-03; App. D entry D-38. (One cross-reference in App. C.12 cites this as "entry D-38" — see `PROJECT_STATE_AUDIT.md`, D-PZ-05.)

### 5.2 Continuation 13, §129 — three decisions

**Q-38 · §129.1 — Initial streaming strategy.** Options as recorded: the document *recommends* a hybrid strategy (permitted external embeds first, native interactions in-product, native streaming only on demonstrated demand, no custom transcoding for the pilot); alternatives recorded are native streaming from the beginning, and external embeds only for the pilot. Edition 1.3 records the recommendation as the document's leaning and adopts none of the options. *Blocks:* Creator/Live Worlds build (Track C). *Recorded:* App. C, second C.11, row "A-15, decision 1".

**Q-39 · §129.2 — First creator category to validate.** Options as recorded: authors and storytellers; educators; performers; a mixed creator pilot. No option adopted. *Blocks:* creator pilot design (Track C). *Recorded:* App. C, second C.11, row "A-15, decision 2".

**Q-40 · §129.3 — Monetization rollout.** Options as recorded: validate-first; a ticketed pilot; a membership pilot. No option adopted. *Blocks:* creator economy sequencing; bounded by invariant 21. *Recorded:* App. C, second C.11, row "A-15, decision 3".

### 5.3 Record-gap matters (records decisions, not product decisions)

**Q-41 · A-13 — Continuation 11's antecedent material.** Continuation 11 builds on an antecedent presentation proposal and three visual references not in the project folder. Recorded position: until they are supplied and filed, Continuation 11 stands as the authoritative statement of the Presentation Layer. *Recorded:* App. C, second C.11, row A-13.

**Q-42 · A-17 — Missing installments.** Continuations 08–10 and 14 (and, per the 1.5 Register, 18) were never received; no content is inferred; if supplied, they are to be filed in sequence. *Recorded:* App. C, second C.11, row A-17; Edition 1.5 Register standing notes.

## 6. Pillar-count wording

**Q-43a · Era Worlds — fifth or sixth pillar?** *(numbered Q-43a to keep the A-32 items together below; it is a distinct queue item)*
- **§233 wording** (Continuation 21): Era Worlds is "a fifth major product pillar."
- **§248 wording** (same document): "ERA WORLDS becomes the sixth major experiential pillar."
- Edition 1.4 records Era Worlds as the **fifth** experiential pillar (Personal, Creator, Literary, Educational, Era), on the ground that the Immersive World Runtime — the only candidate sixth — is by its own document's account a foundation layer, not a pillar (Continuation 20 §232; Ch. 77). The §248 wording is recorded **unresolved, held for founder confirmation**, and is not silently harmonized anywhere in the Bible.
- *Blocks:* nothing technical; it is a canon-wording ruling owed for the next edition. *Recorded:* Edition 1.4, App. D §D.6 supplement; Continuation 21 filing header.

## 7. A-32 operational items (Edition 1.5 Register, entry A-32)

**Q-43 · Repository and environment creation.** The organization plan's Phase Zero and several persona first assignments presuppose an existing repository; the audit establishes none exists (`PROJECT_STATE_AUDIT.md` §3). Creating one — where it lives, under what account/ownership, with what tooling — is a founder decision that gates all code work. No position is recorded in the corpus beyond the plan's proposed repository layout (plan §6), which is a target layout, not an instruction. *Blocks:* plan Stages 01–06 and every engineering persona's first assignment.

**Q-44a · Persona name collision — MUSE.** Persona 12 (UX/UI Director) is named MUSE, which is also the name of the platform this organization runs on. Recorded in A-32 as a founder call; not renamed. *Blocks:* nothing technical; ambiguity in handoffs and logs until settled.

**Q-44b · Persona name collision — MERIDIAN.** Persona 24 (Commercial & Partnerships Lead) is named MERIDIAN, which is also the flagship fictional district and reference implementation. Recorded in A-32 as a founder call; not renamed. *Blocks:* nothing technical; document ambiguity until settled.

## 8. Recovered-tails disposition

**Q-44 · Disposition of `recovered-tails/`.** *(Shares the Q-44 stem with §7's naming items in the working notes; treated here as its own item — the queue total counts it separately.)*
- **Facts:** files containing Continuation 24 §§291–300 and Continuation 28 §§375–380 exist in `recovered-tails/` (timestamped after Edition 1.4's delivery), matching the sections Chapters 96/112 compiled as register-derived. They have no filing header and no register entry; the Edition 1.5 Register still records the tails as missing.
- **Decision owed:** whether these texts are accepted as the filed sources (in which case Chapters 96 and 112 should be recompiled from source at the next edition, per App. D D-62/D-67), or not accepted (in which case the register-derived status stands and the files' status should be recorded).
- **Blocks:** the next edition's Chapters 96/112; nothing in the current baseline, which stands as delivered.
- *Recorded:* `PROJECT_STATE_AUDIT.md` §§2.5, 4.2, D-PZ-02; Edition 1.4 App. D D-62/D-67.

---

## Queue summary

| Block | Items | Count |
|---|---|---|
| Q-01 (D-34, counted once) | CONFIRM conflict | 1 |
| 42-gap opens (§3, excl. U02/S01/S05 cross-refs already in Q-01/Q-09/Q-13) | P01, P02, U05, A02, A06, S01, S02, S03, S05, S06, D01, D02, D05, G01, G03, E01, E02, E03, E04, B01, B02, B03, O01, O02, V01, V02, U02→Q-01 | 27 total incl. Q-01 |
| Carried compilation items (§4) | Q-31–Q-36 | 6 |
| Amendment decisions (§5) | Q-37 (Q definition), Q-38–Q-40 (§129), Q-41–Q-42 (records) | 6 |
| Pillar wording (§6) | Q-43a | 1 |
| A-32 operational (§7) | Q-43 (repository), Q-44a/Q-44b (names) | 3 |
| Recovered tails (§8) | Q-44 (tails) | 1 |
| **Total distinct queue items** | | **44** |

*No item in this register carries a recommendation from this audit. Positions are the corpus's own, transcribed.*
