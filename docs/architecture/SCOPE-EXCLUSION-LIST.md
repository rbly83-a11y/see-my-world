# SEE MY WORLD — Stage 02 Scope Exclusion List

## Status of this document

**PROPOSAL for founder approval.**

This document is a proposal only. The Stage 02 scope freeze is a founder
decision (Stage 02 in the order of operations is "Freeze Core MVP scope" —
`AI-DEVELOPMENT-ORGANIZATION.md` §7). Nothing in this list enacts a freeze,
changes the baseline of record, resolves a founder decision, or amends any
source document. It takes effect, if at all, only when the Founder approves
it, in whole or in part.

**Baseline of record:** `SEE-MY-WORLD-Product-Bible-Edition-1.4.md`
(Edition 1.4). Other sources are cited by file and chapter/section in every
entry.

**What this list is:** everything the corpus itself explicitly defers,
gates, or holds out of the Stage 02 (Core MVP) scope, with the source's own
reason and the gate the source names for later admission.

**What this list is not:**

- It contains no invented exclusions. If no corpus source defers or gates
  an item, the item does not appear as an exclusion here.
- It makes no recommendation on, and does not resolve, any founder
  decision. Where an exclusion exists *because* a founder decision is open,
  the entry names the queue item in
  `phase-zero/FOUNDER_DECISION_REGISTER.md` (cited as Q-nn).
- Permanent product non-goals are not deferrals and are not listed as
  exclusions. Edition 1.4, Chapter 2 states this distinction in its own
  terms: the pilot non-goals (predicting personality, inferring political
  or religious identity, scoring relationships, replacing professional
  profiling; and the product being a dating app, a generalised social feed,
  a personality diagnostic, a creator marketplace, or a host for arbitrary
  code execution) "are not capabilities deferred to a later phase; they are
  outside what the product is for." They therefore have no admitting gate
  and do not belong on a deferral list.
- Feature statuses use the six labels honestly — **Concept / Specified /
  Implemented / Tested / Pilot Validated / Production Ready** — as applied
  in `phase-zero/FEATURE_STATUS_INVENTORY.md`. No feature in the corpus is
  Implemented, verified Tested, Pilot Validated, or Production Ready; the
  five "Tested (reported)" features rest solely on unverifiable reported
  v36 simulation results. Every acceptance/test suite cited below is
  **proposed only**; no case in any of them has been executed.

## How to read each entry

Each numbered entry (EX-01–EX-32) gives:

1. **Excluded** — what is out of the Stage 02 scope.
2. **Source** — file plus chapter/section that defers or gates it.
3. **Reason** — the reason in the source's own terms.
4. **Admitting gate** — the named milestone, gate, decision, or evidence
   condition that could admit it later. Where the corpus names no gate,
   the entry says so plainly rather than inventing one.

Entries overlap deliberately where the corpus defers the same material on
different grounds (for example, a feature can be excluded both as part of
Release Track C and because its Phase Zero status is Concept). Cross-
references mark those overlaps; no feature is silently counted twice as
two different deferrals.

---

## A. Release Track C — Platform Expansion (in full)

`AI-DEVELOPMENT-ORGANIZATION.md` §2 defines three release tracks. Track A
(Core) is the recommended first public release candidate; Track B
(Meridian) is a controlled reference implementation released only after
its separate privacy and content gates pass; and of Track C the plan says,
in its own terms:

> "These should enter development behind explicit gates rather than
> becoming dependencies of the first launch."

`phase-zero/MVP_SCOPE.md`, "Track C — Platform Expansion (gated; not
launch dependencies)", restates the same position: "All are Concept or
Specified on paper; none may become a dependency of Track A or B launch."
The order of operations places Expansion last, at Stage 12
(`AI-DEVELOPMENT-ORGANIZATION.md` §7).

### EX-01 — Living Memory Network as a public social launch beyond its gated pilot scope

- **Excluded:** The Living Memory Network at scale as a public social
  product — beyond the gated pilot scope the sources define (the 1995
  Memory Wall first prototype / first public-facing prototype, private
  drafts, explicit publication, a moderated public gallery, and basic
  contextual discovery).
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C);
  `phase-zero/MVP_SCOPE.md`, Track C; Edition 1.4, Chapters 90–100
  (Part XV), and register entry A-24 in
  `EDITION-1.4-AMENDMENT-REGISTER.md` (first prototype: the 1995 Memory
  Wall; P0 priorities limited to Private Memory Studio, explicit
  publication/consent, photo+story contributions, era/place discovery).
- **Reason:** In the plan's terms, Track C items enter development behind
  explicit gates rather than becoming launch dependencies; in
  Continuation 24 §300's terms (compiled at Edition 1.4, Chapter 96),
  Threads, oral histories, institutional collections, and
  community-driven scene reconstruction "should follow once the core
  contribution and consent systems are proven."
- **Admitting gate:** Stage 12 (Expansion) in
  `AI-DEVELOPMENT-ORGANIZATION.md` §7, behind the explicit Track C gates;
  and, in the source's own sequence, proof of the core contribution and
  consent systems. The Living Memory Network acceptance suite that would
  evidence this (300 cases, Continuation 24 §299) is **proposed only**.

### EX-02 — Creator universes

- **Excluded:** Creator Universes and the creator platform line as a
  Stage 02 / launch dependency.
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C);
  `phase-zero/MVP_SCOPE.md`, Track C; Edition 1.4, Part IX (Chapters
  49–54).
- **Reason:** Track C gating, as in EX-01. Additionally, the creator line
  carries three founder decisions that no edition has adopted (see
  EX-26 for the streaming decision in particular).
- **Admitting gate:** Stage 12 (Expansion); plus founder decisions
  **Q-38, Q-39, and Q-40** — the three Continuation 13 §129 decisions
  (initial streaming strategy; first creator category to validate;
  monetization rollout), recorded open at Edition 1.4, Appendix C §C.11
  and in `phase-zero/FOUNDER_DECISION_REGISTER.md` §5.2. Edition 1.4,
  Appendix D, entry D-50 also records that the §125 moderation set
  "remains a precondition for public live discovery."

### EX-03 — Licensed literary worlds

- **Excluded:** Licensed literary worlds — immersive Worlds built on
  copyrighted/licensed works — as a Stage 02 / launch dependency.
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C);
  `phase-zero/MVP_SCOPE.md`, Track C ("the Author's Sandbox is the
  recorded wedge; rights verification is a hard gate (Rights & Licensing
  Engine; invariant 21)"); Edition 1.4, Part X (Chapters 55–62) and
  Appendix B, invariant 21 (payments are never privacy, rights, or
  spoiler grants).
- **Reason:** In the MVP scope's terms, rights verification is a hard
  gate, not a formality; in the organization plan's terms (§8), licensing
  requires "authorized rights holders and accountable signatories" — a
  human responsibility AI cannot eliminate.
- **Admitting gate:** Stage 12 (Expansion), with per-work rights
  verification and an authorized rights-holder signatory. The corpus
  names no earlier gate for licensed (as distinct from public-domain)
  worlds.

### EX-04 — Educational experiences at scale

- **Excluded:** Educational experiences / the Living Classroom at scale
  as a Stage 02 / launch dependency.
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C —
  "educational experiences"); §3 (SCHOLAR, persona 20, activation:
  Expansion); `phase-zero/MVP_SCOPE.md`, Track C ("gated by the school
  firewall (invariants 24–27) and institutional decisions"); Edition 1.4,
  Part XI (Chapters 63–70) and Appendix B, invariants 24–27.
- **Reason:** The school firewall binds this line: school-managed activity
  does not transfer into consumer profiles, and the Universal AI Agent
  Contract (`AI-DEVELOPMENT-ORGANIZATION.md` §4, rule 9) repeats the
  prohibition. Institutional decisions governing schools are not taken
  in the corpus.
- **Admitting gate:** Stage 12 (Expansion), behind the school firewall
  (invariants 24–27) and the institutional decisions named in
  `phase-zero/MVP_SCOPE.md`, Track C. No more specific gate is named.

### EX-05 — Family collections

- **Excluded:** Family collections as a general launch feature — the
  Memory Bridge / family-collection line beyond private, invited use
  inside a gated pilot.
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C — "family
  collections"); register entry A-24(g) in
  `EDITION-1.4-AMENDMENT-REGISTER.md` (Memory Bridge: invite, explore
  together, add perspectives without overwriting, preserve or withdraw;
  "no promise of permanent preservation without a real archival service,
  export, backups, and a sustainable retention policy"); Edition 1.4,
  Chapter 100, §320 (collaborative family Worlds follow once core privacy
  and moderation systems are proven — see EX-29).
- **Reason:** Track C gating; and, in A-24's terms, a preservation promise
  cannot be made without the archival service, export, backups, and
  retention policy that would back it. Retention periods themselves are
  undecided — founder queue **Q-13** (gap S05).
- **Admitting gate:** Stage 12 (Expansion); for collaborative family
  Worlds specifically, the Chapter 100 §320 condition (core privacy and
  moderation systems proven). No gate is named for a permanent-
  preservation promise beyond the A-24 conditions above.

### EX-06 — Broader Living Cities

- **Excluded:** Living Cities broader than the single fictional Meridian
  reference implementation — additional cities, districts, and real
  historical districts as built product.
- **Source:** `AI-DEVELOPMENT-ORGANIZATION.md` §2 (Track C — "broader
  Living Cities"); `phase-zero/MVP_SCOPE.md`, Track C ("gated by Track
  B's proof") and Track B; Edition 1.4, Part XVIII (Chapters 109–120)
  and Chapter 112, §376 (two-track pilot: the fictional composite
  district first; one real historical district investigated in parallel
  — investigation, not build).
- **Reason:** In the MVP scope's terms, broader cities are gated by
  Track B's proof. Register entry A-30(p) in
  `EDITION-1.4-AMENDMENT-REGISTER.md` makes Meridian "the reference
  implementation for all future Living Cities" — a future city reuses
  the same Resolver, Runtime, Memory Network, Rights Ledger, and Reality
  Lens; the architecture is not reinvented per city.
- **Admitting gate:** Track B (Meridian) proof — its separate privacy and
  content gates (`AI-DEVELOPMENT-ORGANIZATION.md` §2) and its readiness
  gate, which stands at 0/10 in the sources (Edition 1.4, Chapter 120,
  §419 as recorded in `phase-zero/MVP_SCOPE.md`, Track B). The 180-case
  Meridian integration suite is **proposed only**.

### EX-07 — Public-Domain World Library

- **Excluded:** The Public-Domain World Library / Free Worlds Initiative
  as a Stage 02 / launch dependency.
- **Source:** `phase-zero/MVP_SCOPE.md`, Track C ("per-edition rights
  verification required"); Edition 1.4, Continuation 17 material compiled
  at Part X, Chapter 61; status Concept in
  `phase-zero/FEATURE_STATUS_INVENTORY.md` (Free Worlds Initiative,
  Continuation 17 §§171–180).
- **Reason:** Track C gating, and the per-edition rights-verification
  requirement: public-domain status is a per-edition determination, not
  a blanket clearance.
- **Admitting gate:** Stage 12 (Expansion), with rights verification for
  each source edition. LORE's first assignment
  (`AI-DEVELOPMENT-ORGANIZATION.md` §5, persona 21) is one public-domain
  prototype "with a verified source edition, canon registry, rights
  assessment, and spoiler-safe visitor journey" — a prototype assignment,
  not a launch gate.

---

## B. Frozen behaviour and social scope

### EX-08 — Testimony-v2 adoption

- **Excluded:** Adoption of the testimony-v2 formulas — the smoother
  v2-experimental strength formulas (BOOST s′ = s + a(1 − s); REDUCE
  s′ = s(1 − a)), the ledger-fold testimony derivation, and the
  attention-baseline decay model — as normative behaviour for any World
  in Stage 02. Testimony-v1 is the only normative arithmetic.
- **Source:** `CONCEPT-CONTINUATION-06-NORMATIVE-ALGORITHM-SPEC.md` §45
  ("The original rules become testimony-v1. The alternative formulas
  remain testimony-v2-experimental until user research and regression
  testing justify adopting them"); Edition 1.4, Chapter 7, Annex 7.A
  ("not normative"), Chapter 13, Chapter 28, and Chapter 41; Appendix B
  (testimony-v1 frozen); Appendix D, entries D-03 and D-34.
- **Reason:** In the sources' terms, testimony-v1 is frozen for backward
  compatibility: silently changing its arithmetic would rewrite existing
  Worlds (Appendix D, D-03). The known BOOST-from-zero defect is
  "logged, not patched"; the v2 formula is "the designated remedy,
  pending adoption." The v2 coefficient `a` is an open parameter whose
  initial value was lost in source transit and "must not be invented"
  (Chapter 7, Annex 7.A) — founder queue **Q-32**.
- **Admitting gate:** All of: user research and regression testing
  justifying adoption (Continuation 06 §45; Edition 1.4, Chapter 7,
  Annex 7.A); the coefficient `a` set by experiment design, not editorial
  choice (**Q-32**); and an ADR proposing adoption, approved before any
  World is computed under v2, recorded as a recorded, replayable,
  reversible version event (Edition 1.4, Chapters 28 and 41). The
  canonical-behaviour change-control threshold itself is founder queue
  **Q-30** (gap V02). No part of this gate is met in the corpus.

### EX-09 — Direct messaging in the first public launch

- **Excluded:** Direct messaging in the first public launch of the Living
  Memory Network.
- **Source:** The Social Interaction Contract — Continuation 24 §293,
  compiled at Edition 1.4, Chapter 96 and summarised in register entry
  A-25(k) in `EDITION-1.4-AMENDMENT-REGISTER.md`: "no direct messaging in
  the first public launch (later: opt-in, rate-limited, blockable, never
  in unsupervised school environments)." The §293 text itself is in the
  recovered tail file
  `recovered-tails/CONTINUATION-24-TAIL-SECTIONS-291-300.md`; its
  disposition is founder queue **Q-44** (the filed Continuation 24 ends
  at §290, so Edition 1.4, Chapters 96 rests on the register summary,
  marked register-derived at Appendix D, entry D-62). The exclusion does
  not depend on that disposition: A-25(k) records it independently.
  See also Edition 1.4, Chapter 98, §306 (no unsolicited direct messaging
  in the first release) and `AI-DEVELOPMENT-ORGANIZATION.md` §5,
  persona 22 (SENTINEL: "Prevent unsolicited messaging and unrestricted
  comments in the first social release").
- **Reason:** In the contract's terms, the first launch's social actions
  are Appreciate / Save Reference / Add Perspective / Invite Contribution
  / Report — interaction "without encouraging intrusive behavior"
  (§293).
- **Admitting gate:** No named milestone. The source names only the
  conditions any later introduction must meet — opt-in, rate-limited,
  blockable, and never in unsupervised school environments. Plainly: the
  corpus names no gate beyond those conditions.

### EX-10 — Unrestricted public comments

- **Excluded:** Unrestricted public comments, and unsolicited direct
  messaging, in the first (Social Time Machine / Living Memory Network)
  release.
- **Source:** Edition 1.4, Chapter 98, §306 ("For the first release, I
  recommend no unrestricted public comments and no unsolicited direct
  messaging. Instead, use moderated response requests and Memory
  Threads"), summarised in register entry A-26(f) in
  `EDITION-1.4-AMENDMENT-REGISTER.md` (Memory Conversation System:
  structured, contributor-controlled; contributor can receive, approve,
  or disable).
- **Reason:** In the source's terms, structured conversation "reduces
  harassment risk and protects people who want to share a memory without
  becoming publicly accessible to strangers."
- **Admitting gate:** The corpus names no gate. It specifies the
  replacement (structured, contributor-controlled questions; moderated
  response requests; Memory Threads) but no milestone or condition under
  which unrestricted comments would be admitted. Said plainly: no
  admitting gate is named.

### EX-11 — Open community features and wider social discovery before moderation, abuse, and privacy workflows are proven

- **Excluded:** Open community features and any social pilot or wider
  social discovery beyond the closed Core journey, before report/block/
  mute/access-restriction flows, moderation workflows, and privacy
  workflows exist and are proven.
- **Source:** `phase-zero/FOUNDER_DECISION_REGISTER.md`, **Q-17**
  (gap D05: the audit recommendation is to "introduce report, block,
  mute, and access-restriction flows before wider social discovery";
  status note: "report/block is required before wider discovery
  (Ch. 32); the flows are unspecified"); Edition 1.4, Chapter 32;
  `phase-zero/MVP_SCOPE.md`, Step A5 ("Abuse flows (report/block/mute)
  unspecified (Q-17) — required before any *wider* social discovery");
  `AI-DEVELOPMENT-ORGANIZATION.md` §3 (SENTINEL, persona 22, activation:
  "Before social pilot") and §7 (Stage 09, Prepare release operations,
  precedes Stage 10, Controlled beta).
- **Reason:** In the sources' terms, the requirement's trigger is wider
  social discovery itself; the closed pilot journey is specified without
  these flows, and nothing beyond it is. Accountable legal, support,
  moderation, and incident roles are also unfilled — founder queue
  **Q-27** (gap O01), which "blocks: any public release."
- **Admitting gate:** Founder decision **Q-17** taken and the resulting
  flows specified (and, for a public release, **Q-27** roles filled);
  SENTINEL activated before the social pilot. No evidence condition
  beyond specification is named in the corpus for the flows themselves.

### EX-12 — Layer 3 (Explore Together) in the pilot

- **Excluded:** All Layer 3 capability from the pilot / Stage 02 scope.
  Pilot scope is Layers 1–2 only.
- **Source:** Edition 1.4, Chapter 4 and Chapter 39 (pilot scope is
  Layers 1–2; Layer 3 modules are proposals, status-labelled in Appendix
  D.4, and "no Layer 3 capability may be presented as part of the first
  product"); Appendix D, entry D-33; `phase-zero/MVP_SCOPE.md`, Track A
  ("Layer 3 is excluded from the pilot (App. D, D-33)").
- **Reason:** In Chapter 39's sequencing terms, Priorities 1–2 build
  Layers 1–2, which are the pilot scope; Priorities 3–4 build Layer 3.
- **Admitting gate:** Completion of the Priority 1–2 pilot sequence in
  Chapter 39 — Priority 1 is explicit that if it "is incomplete, later
  priorities are not partially shippable." No calendar or date gate is
  named.

### EX-13 — Provisional sharing: PROPOSED/WITNESSED material in Perspectives, visitor-visible dotted coastlines, and standalone coastline disclosure

- **Excluded:** (a) Any Perspective containing a PROPOSED or WITNESSED
  node, at any resolution, under any Lens, in the pilot; (b)
  visitor-visible dotted (provisional) coastlines; (c) a standalone
  coastline-sharing feature disclosing refutations.
- **Source:** Edition 1.4, Appendix B, invariant 20; Chapters 17–19;
  Appendix D, entries D-27 ("Provisional sharing deferred") and D-35;
  Appendix C §C.12, carried item 6 (coastline disclosure);
  `phase-zero/FOUNDER_DECISION_REGISTER.md`, **Q-36**.
- **Reason:** In D-27's terms, the Law of Testimony prohibits
  representing unconfirmed material as part of a person's World to
  others, and for the pilot the Testimony Law governs. Coastline
  disclosure is recorded as "a deferred decision, not pilot behaviour"
  (Appendix C §C.12).
- **Admitting gate:** Founder decision **Q-36** (whether and how an owner
  may explicitly disclose refutations, as comparison input under
  Chapter 20 or as published coastline shape). Until that decision, the
  Chapters 18/20 disclosure rules govern. No other gate is named.

---

## C. Every Concept-only feature (Phase Zero status: Concept)

`phase-zero/FEATURE_STATUS_INVENTORY.md` records **49 Concept** feature
areas of 84 total, and defines the label: "'Concept' means a defined
proposal whose contracts or acceptance criteria are not yet specified to
buildable depth." None of the 49 is in the Stage 02 scope. They are
grouped below by the inventory's own part/chapter structure; **every one
of the 49 is named in EX-14–EX-20, and none is omitted.** Grouping does
not change any feature's status.

For the admitting gate, the general position is stated once and applies
to every group unless a group entry names a more specific gate: **the
corpus names no per-feature admitting gate for Concept features as such.**
Advancement out of Concept is a specification event (contracts or
acceptance criteria specified to buildable depth, per the inventory's
definition), and any decision that a feature or experiment becomes
canonical is governed by the change-control discipline whose evidence
threshold is itself undecided — founder queue **Q-30** (gap V02). Where
a specific founder decision or hard gate does bind a group, it is named
in that group.

### EX-14 — Concept: personal-World extensions and the Q-definition

- **Excluded:** Cartographic Engine (map rendering semantics);
  World Seasons (affinity / attention / appetite extensions);
  Constellations and the meaning layer; Continuity: Timeline and
  Returning Tides; Unfinished World owner controls (freeze / reset /
  simplify); Q-definition (Discovery).
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Cartographic
  Engine (Chapter 12); World Seasons (Chapter 13; "experimental");
  Constellations (Chapter 14); Continuity (Chapter 16); Unfinished World
  owner controls (Chapters 12, 16); Q-definition (Appendix C.11, entry
  A-03; "unsettled").
- **Reason:** Concept status, per the inventory definition above. World
  Seasons is additionally fenced as part of the testimony-v2-experimental
  line (see EX-08). The Q-definition is Concept *because* its meaning is
  unsettled between two recorded positions.
- **Admitting gate:** No per-feature gate is named, except: the
  Q-definition requires founder decision **Q-37** (entry A-03 — Q as
  correction-information value vs Q as source and classification
  quality); World Seasons' experimental material is bound by the EX-08
  gate. For the rest, no gate is named — said plainly.

### EX-15 — Concept: Layer 3 social forms, Algorithm Recipes, and the World Protocol

- **Excluded:** World Swap, Shared Worlds (Layer 3 social forms);
  Algorithm Recipes; The World Protocol.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — World Swap,
  Shared Worlds (Chapters 21, 39); Algorithm Recipes (Chapter 3;
  "excluded from the pilot"); The World Protocol (Chapter 42;
  "long-term research direction").
- **Reason:** Concept status; Layer 3 exclusion (EX-12) for the social
  forms; explicit pilot exclusion for Algorithm Recipes; and, for the
  World Protocol, the inventory's own characterisation as a long-term
  research direction. Edition 1.4, Chapter 40 also records the scope-
  creep mitigation: "keep protocol, dating, arbitrary algorithms, and
  marketplace forms out of the pilot, per Chapter 38."
- **Admitting gate:** No gate is named for Algorithm Recipes or the
  World Protocol. For the Layer 3 social forms, the EX-12 sequencing
  gate applies. Beyond that, no gate is named — said plainly.

### EX-16 — Concept: creator line

- **Excluded:** Creator Content Graph; Live Worlds and events;
  World Portals.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Creator Content
  Graph (Part IX; Continuation 13 §118); Live Worlds and events
  (Part IX; Continuation 13 §§113, 116, 120); World Portals (Part IX;
  Continuation 13 §123).
- **Reason:** Concept status, and Track C gating (EX-02).
- **Admitting gate:** The EX-02 gates — Stage 12 (Expansion) and founder
  decisions **Q-38–Q-40** (§129) for the Live Worlds build in particular.
  No separate per-feature gate is named.

### EX-17 — Concept: literary line

- **Excluded:** Storyworld Engine; Canon Verification Engine; Character
  Canon Contract; Universe Pass and Entitlement Engine; Rights Compiler;
  Literary Genealogy Engine; Free Worlds Initiative.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Storyworld
  Engine (Part X; Continuation 15 §146); Canon Verification Engine
  (§148); Character Canon Contract (§150); Universe Pass and Entitlement
  Engine (Continuation 16 §§159, 162); Rights Compiler (§169); Literary
  Genealogy Engine (Continuation 17 §176); Free Worlds Initiative
  (§§171–180). (Reader Passport and SourceEdition in the same part are
  Specified, not Concept, and are not in this entry.)
- **Reason:** Concept status, and Track C gating (EX-03, EX-07).
- **Admitting gate:** The EX-03/EX-07 gates (Stage 12; rights
  verification). No per-feature gate is named beyond those.

### EX-18 — Concept: education line

- **Excluded:** Educational Worlds (five types); Evidence Lens;
  Historical Figure Encounters; Pantheon Engine; Civilization Engine;
  Teacher Studio; Classroom Expeditions; School Integration Layer;
  Scholar Studio.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Educational
  Worlds (Part XI proposal; "five types defined, no implementation");
  Evidence Lens (Chapter 64); Historical Figure Encounters (Chapter 65);
  Pantheon Engine and Civilization Engine (Chapter 66); Teacher Studio
  and Classroom Expeditions (Chapter 67); School Integration Layer
  (Chapter 68; "phased; no certification claimed or held"); Scholar
  Studio (Chapter 69). (The Temporal Knowledge Graph, Historical Evidence
  Engine / EducationalClaim, and Educational Knowledge Graph in the same
  part are Specified, not Concept, and are not in this entry.)
- **Reason:** Concept status, and Track C gating (EX-04).
- **Admitting gate:** The EX-04 gates (Stage 12; school firewall,
  invariants 24–27; institutional decisions). No per-feature gate is
  named beyond those.

### EX-19 — Concept: immersion line

- **Excluded:** Immersion Ladder; Living Environment Engine; Memory &
  Consequence Engine; Presence Engine; Conversation Engine; Sensory
  Director; Agency Engine; Social Presence Engine; Immersion Director.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Immersion Ladder
  (Chapter 71; "none implemented; L2 recommended as first flagship");
  Living Environment Engine (Chapter 72); Memory & Consequence Engine
  and Presence Engine (Chapter 73); Conversation Engine and Sensory
  Director (Chapter 74); Agency Engine and Social Presence Engine
  (Chapter 75); Immersion Director (Chapter 76). (The Immersive World
  Runtime, Living Artifact System, Reality Lens, and Era Artifact /
  Era World contracts in the same part are Specified, not Concept, and
  are not in this entry.)
- **Reason:** Concept status, per the inventory definition.
- **Admitting gate:** No per-feature gate is named. The inventory records
  one sequencing note — the Immersion Ladder's "L2 recommended as first
  flagship" — which is a recommendation about order inside this line,
  not an admitting gate for Stage 02. Said plainly: no gate is named.

### EX-20 — Concept: Era Worlds line

- **Excluded:** Era Worlds; Everyday Life Engine; Decade Simulator;
  Cultural Atmosphere Engine; Parallel History Engine; Time Shift
  Engine; Historical Persona Engine.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` — Era Worlds
  (Part XIII proposal); Everyday Life Engine and Decade Simulator
  (Chapter 79; "One Day in 1995 is the prototype format"); Cultural
  Atmosphere Engine, Parallel History Engine, and Time Shift Engine
  (Chapter 80); Historical Persona Engine (Chapter 81).
- **Reason:** Concept status, per the inventory definition.
- **Admitting gate:** No per-feature gate is named. The Era Worlds
  Engine contracts that deepen this line (Edition 1.4, Part XIV) are
  Specified, not Concept, and are governed by Track B / EX-06 sequencing
  rather than by this entry. Said plainly: no gate is named for these
  seven as such.

### EX-21 — Concept: Edition 1.4 memory-and-city additions

- **Excluded:** One Day in 1995 environment; Continuation 24 §§291–300
  material; Social Time Machine experience; Memory Portal Engine;
  World Memory Engine.
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md`, "Edition 1.4
  additions (Appendix D.7)" — One Day in 1995 environment (Chapter 85);
  Continuation 24 §§291–300 material (Chapter 96 — "register-derived
  (entry D-62)"); Social Time Machine experience (Chapters 97–100);
  Memory Portal Engine (Chapters 101–104); World Memory Engine
  (Chapters 105–108). The inventory notes: "Nothing in Parts XIV–XVIII
  exceeds Specified, and the Living Memory Network's §§291–300 material
  is Concept *and* register-derived — the weakest-evidenced material in
  the baseline." (The production data contracts in the same chapters are
  Specified, not Concept, and are not in this entry.)
- **Reason:** Concept status; for the §§291–300 material, additionally
  its register-derived provenance (Appendix D, entry D-62; disposition
  of the recovered tail text is founder queue **Q-44**).
- **Admitting gate:** No per-feature gate is named in the inventory. The
  sequencing conditions that do exist in the corpus for this material
  are recorded at EX-01, EX-28, and EX-29. Said plainly: no other gate
  is named.

**Concept coverage check:** EX-14 (6) + EX-15 (3) + EX-16 (3) + EX-17 (7)
+ EX-18 (9) + EX-19 (9) + EX-20 (7) + EX-21 (5) = **49**, the full Concept
count in `phase-zero/FEATURE_STATUS_INVENTORY.md`.

---

## D. Deferrals stated inside the sources themselves

### EX-22 — Full 3D city streaming

- **Excluded:** Full 3D city streaming / full 3D as the Living City
  delivery mode. The initial target is mobile-compatible 2.5D with an
  accessible text equivalent, progressively loaded.
- **Source:** Edition 1.4, Chapter 112, §375 (compiled from register
  entry A-29; marked register-derived at Appendix D, entry D-67 — the
  filed Continuation 28 ends at §374; the §375 text is also present in
  `recovered-tails/CONTINUATION-28-TAIL-SECTIONS-375-380.md`, whose
  disposition is founder queue **Q-44**); register entry A-29(m) in
  `EDITION-1.4-AMENDMENT-REGISTER.md`.
- **Reason:** In the source's own terms: "full 3D deferred until demand
  and measured performance justify it" (A-29(m)); "justified by actual
  visitor demand and measured performance" (§375).
- **Admitting gate:** The evidence condition the source itself names —
  actual visitor demand **and** measured performance justifying it. No
  milestone or date is named beyond that condition.

### EX-23 — Physical Memory Walks

- **Excluded:** Physical (in-person, routed) Memory Walks. The Memory
  Walk Engine supports virtual exploration first.
- **Source:** Edition 1.4, Chapter 111, §372 ("The engine should support
  virtual exploration first. Physical walking tours can be added later,
  with accessibility, location safety, and routing requirements");
  register entry A-29(j) in `EDITION-1.4-AMENDMENT-REGISTER.md` ("virtual
  first, physical later under safety and accessibility requirements").
- **Reason:** In the source's terms, physical tours carry accessibility,
  location-safety, and routing requirements that virtual walks do not.
- **Admitting gate:** No named milestone. The source names only the
  requirements a later physical mode must meet — accessibility, location
  safety, and routing. Said plainly: no gate beyond those requirements
  is named.

### EX-24 — Licensed music playback

- **Excluded:** Licensed playback of recordings inside the product —
  uploading or streaming copyrighted recordings, and in-product licensed
  playback generally. At launch, song associations are metadata-only,
  with authorized external listening links where available.
- **Source:** Edition 1.4, Chapter 94, §287 ("For initial launch, I
  recommend metadata-only song associations with authorized external
  listening links where available. Licensed playback can be evaluated
  later") and Chapter 98, §310 ("The system should never upload or stream
  copyrighted recordings without appropriate rights"); register entries
  A-24(d) ("licensed playback or permitted links only") and A-25(f)
  ("Soundtrack Engine (metadata-only at launch…)") in
  `EDITION-1.4-AMENDMENT-REGISTER.md`.
- **Reason:** In the sources' terms, music associations are "memory
  relationships, not automatically as licensed audio content" (§287);
  composition, recording, and personal memory are distinguished, and only
  the association is the product's to publish.
- **Admitting gate:** No named milestone. §287 names only a later
  evaluation ("can be evaluated later"), and §310 names the condition —
  appropriate rights. Said plainly: no gate beyond rights clearance and
  that later evaluation is named.

### EX-25 — Photo/audio contribution uploads before secure ingestion, rights confirmation, and withdrawal workflows exist

- **Excluded:** Photo and audio contribution uploads in Meridian (and, by
  the same sequencing, in the memory line generally) until secure
  ingestion, rights confirmation, and withdrawal workflows exist. The
  contribution sequence is text memories first.
- **Source:** Register entry A-30(i) in
  `EDITION-1.4-AMENDMENT-REGISTER.md` ("contribution experience sequenced
  honestly — text memories first; photo/audio only after secure
  ingestion, rights confirmation, and withdrawal workflows exist");
  Edition 1.4, Chapters 115–116 (Meridian blueprint); Chapter 94, §288
  (the photograph pipeline: Upload → Private Storage → Metadata Review →
  Safety Checks → Contributor Preview → Audience Authorization →
  Publication).
- **Reason:** In the source's terms, the sequencing is the honesty
  requirement: contributions are accepted only in the order the
  protective workflows can support. A-30(m) / Chapter 116 adds the
  dependency: "the authorization and publication system is designed in
  Sprint 1, before the contribution interface exists."
- **Admitting gate:** The three named conditions — secure ingestion,
  rights confirmation, and withdrawal workflows — existing. No milestone
  number or date is named beyond those conditions and the Sprint 1
  authorization/publication dependency in the Meridian build sequence.

### EX-26 — Native streaming and custom transcoding for the creator pilot

- **Excluded:** Native streaming from the beginning, and any custom
  video-transcoding infrastructure for the first creator pilot.
- **Source:** Edition 1.4, Chapter 53, §53.3 and Chapter 54; Continuation
  13 §129, decision 1; `phase-zero/FOUNDER_DECISION_REGISTER.md`,
  **Q-38**.
- **Reason:** In the source's terms (§119, as compiled at Chapter 53),
  the document *recommends* a hybrid strategy — permitted external embeds
  first, native interactions in-product, native streaming only on
  demonstrated demand — because custom transcoding "would consume
  engineering effort better spent validating the World experience."
  Chapter 53 is explicit that this is "the document's recommendation,
  and no more: the streaming strategy is still **open**."
- **Admitting gate:** Founder decision **Q-38** (§129.1). This entry
  records the deferral as it stands while that decision is open; it does
  not adopt the hybrid recommendation or any other option. Under the
  recorded recommendation (not adopted), the further condition for
  native streaming is demonstrated demand. No other gate is named.

### EX-27 — Presentation advanced facilities

- **Excluded:** From the pilot: Advanced CSS/HTML; generative (reactive)
  audio; a community theme marketplace; third-party presentation
  modules; and custom HTML/CSS admission generally. The pilot posture is
  a fixed registry of built-in modules with validated configuration
  schemas, and a declarative component schema with validated style
  tokens.
- **Source:** Edition 1.4, Chapter 48 pilot table (Advanced CSS/HTML —
  Defer; Generative audio — Defer; Community theme marketplace — Defer;
  "The deferred capabilities may not enter the pilot bundled inside an
  included capability"); Chapter 43 (custom HTML and CSS "deferred for
  the pilot"); Chapter 47 (generative audio deferred); Chapter 48, §48.3
  material (third-party modules deferred "until a separate sandbox and
  permission model exists"; advanced creator facilities deferred until a
  sandbox exists, Chapter 48 / §109 material).
- **Reason:** In the sources' terms, any later sandbox must be unable to
  read private data outside its projection, exfiltrate visitor
  information, hide required consent or accessibility controls,
  impersonate authorization dialogs, execute untrusted scripts in the
  main origin, or create uncontrolled motion, flashing, or audio.
- **Admitting gate:** For third-party modules and advanced facilities,
  the named condition is the existence of a separate sandbox and
  permission model meeting the constraints above. For Advanced CSS/HTML,
  generative audio, and the theme marketplace, the pilot table names no
  gate beyond "Defer" — said plainly.

### EX-28 — Real contributor memories before publication/withdrawal workflows are proven

- **Excluded:** Real contributors' memories in the Meridian, Living
  Neighborhood, and Living City pilots, and any attachment of
  real-place contributions to fictional sites. The pilots run on clearly
  identified fictional demonstration memories (20 in Meridian / the
  Living City MVP).
- **Source:** Edition 1.4, Chapter 115 and register entry A-30(g)
  ("contributions about real places are never attached to fictional
  Meridian sites as though identical"); Chapter 112, §377 (real
  consenting adults invited "only after the workflows pass review");
  Chapter 108, §359 (real contributors invited "once the privacy and
  publication workflow is proven"); `phase-zero/MVP_SCOPE.md`, Track B
  ("real contributions only after publication/withdrawal workflows are
  proven (Continuation 29 §§391–393)").
- **Reason:** In the sources' terms, no simulated contributor may be
  represented as a real witness, and real contribution is safe only on
  top of a proven publication and withdrawal workflow. A-30(o) records
  the governing warning: "the most dangerous mistake would be building
  an impressive time machine before proving users trust the memory
  network."
- **Admitting gate:** The named evidence condition — publication and
  withdrawal workflows proven / passing review. No date or milestone
  number is named beyond that condition.

### EX-29 — Elaborate Social Time Machine follow-ons

- **Excluded:** From the Social Time Machine's first release: Memory
  Portals, immersive reconstructions of contributed locations,
  collaborative family Worlds, and live generational events. The first
  release is limited to the 1995 Memory Wall, contextual Memory
  Hotspots, private contributions, approved public discovery, and basic
  Memory Threads.
- **Source:** Edition 1.4, Chapter 100, §320 ("More elaborate
  features — Memory Portals, immersive reconstructions of contributed
  locations, collaborative family Worlds, and live generational
  events — should follow once the core privacy and moderation systems
  are proven"); register entry A-26 in
  `EDITION-1.4-AMENDMENT-REGISTER.md` ("Portals, family Worlds, and live
  events follow once privacy and moderation are proven").
- **Reason:** The source's own sequencing condition: those features
  depend on core privacy and moderation systems that the first release
  itself is meant to prove.
- **Admitting gate:** The named condition — core privacy and moderation
  systems proven. The Social Time Machine acceptance suite that would
  evidence the first release (220 cases) is **proposed only**. No other
  gate is named.

### EX-30 — Expedition content operations

- **Excluded:** The Expedition Engine's content operations — where
  Expedition resources come from, their verification, and their
  licensing. (The Expedition planner contract is Specified and is not
  excluded by this entry; only its content pipeline is.)
- **Source:** `phase-zero/FEATURE_STATUS_INVENTORY.md` (Expedition Engine:
  "Specified — Chapter 15; content operations remain Concept");
  `phase-zero/FOUNDER_DECISION_REGISTER.md`, **Q-15** (gap D01: source
  types and licensing are not established; "Blocks: Expedition Engine
  content operations (its planner contract is Specified; its content
  pipeline is Concept for this reason)").
- **Reason:** In Q-15's terms, the validation record and
  cost-per-validated-discovery metric are adopted, but approved source
  types, verification rules, and licensing requirements are not.
- **Admitting gate:** Founder decision **Q-15** (approved source types,
  verification rules, and licensing requirements established). No other
  gate is named.

### EX-31 — The Lens Compiler's formal adversarial information-flow treatment

- **Excluded:** Any claim, in Stage 02, to a formal adversarial
  information-flow treatment of the Lens Compiler. The compiler is
  specified functionally; its formal treatment is future work.
- **Source:** Edition 1.4, Appendix D, §D.5 material ("The Lens
  Compiler's formal information-flow model, named in Continuation 07 as
  the next specification phase, is specified functionally in Chapter 18;
  its formal adversarial treatment remains future work");
  `phase-zero/MVP_SCOPE.md`, Step A4 (same point).
- **Reason:** Recorded here so the exclusion is explicit: a functional
  specification must not be presented as a formal adversarial proof.
  Separately, the differential-probing test programme that would test
  inference leakage is owed — founder queue **Q-11** (gap S03) — and
  "cannot run until code exists" (`phase-zero/MVP_SCOPE.md`, Step A4).
- **Admitting gate:** The corpus names no milestone for the formal
  treatment. Said plainly: no admitting gate is named. (Q-11 governs the
  related test programme, not the formal treatment itself.)

### EX-32 — Theme Studio as a pilot-build inclusion

- **Excluded:** Treating the Theme Studio as settled pilot scope. Its
  inclusion in the pilot build is proposed, not adopted.
- **Source:** Edition 1.4, Chapter 44, §44.5 ("Pilot scope caution: The
  Studio's place in the pilot is not settled here… adding a Studio to
  the pilot build is an expansion Bobby must ratify… The pilot table is
  therefore recorded as proposed, not adopted"); Chapter 48 pilot table.
- **Reason:** In the source's terms, the Chapter 48 pilot table expands
  the pilot build beyond Edition 1.2's scope, and the source's own
  mitigation (Quick Style as the default route, advanced facilities
  deferred — see EX-27) "is not ratification."
- **Admitting gate:** Founder ratification of the Studio's inclusion in
  the pilot build. No queue number is assigned to this item in
  `phase-zero/FOUNDER_DECISION_REGISTER.md`, and no other gate is named.

---

## Closing notes for the Founder's decision

1. **Nothing here is decided.** Approval, amendment, or rejection of any
   entry is the Founder's. Entries tied to an open queue item (Q-11,
   Q-13, Q-15, Q-17, Q-27, Q-30, Q-32, Q-36, Q-37, Q-38–Q-40, Q-44) stay
   excluded only for so long as, and only because, the corpus records
   them that way; this list does not argue for any outcome on those
   items.
2. **Track B is not excluded by this list.** Meridian is a separate,
   controlled track (`AI-DEVELOPMENT-ORGANIZATION.md` §2; Stage 08 in
   §7), not part of the Stage 02 Core freeze and not a Track C
   deferral. Only the specific Meridian-adjacent deferrals the sources
   state — full 3D (EX-22), physical walks (EX-23), photo/audio uploads
   (EX-25), and real contributors (EX-28) — appear above.
3. **Statuses have not been upgraded.** Every suite cited (284 / 300 /
   220 / 240 / 320 / 280 / 180 cases in the Edition 1.4 additions, and
   the earlier suites) is **proposed only**. No exclusion in this list
   rests on a claim that anything is Implemented, Tested (verified),
   Pilot Validated, or Production Ready, because the corpus records no
   such status for any feature.

*End of Scope Exclusion List (proposal).*
