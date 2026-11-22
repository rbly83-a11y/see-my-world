# SEE MY WORLD — Master Development Roadmap (Phase Zero)

**Basis:** the organization plan's stages 00–12 (`AI-DEVELOPMENT-ORGANIZATION.md` §7), adapted to the audited ground truth (`PROJECT_STATE_AUDIT.md`): **there is no codebase**. Every stage below is a dependency gate, not a calendar promise — the plan's own rule. Sequencing recommendations in this document are the audit's; **founder decisions are not** — they are marked GATE wherever they block a stage, with queue references to `FOUNDER_DECISION_REGISTER.md` (Q-nn).

**The one structural change from the plan:** the plan's Stage 01 ("Audit the actual codebase") is replaced. There is nothing to audit; in its place stands a **creation** stage (repository, environment, tooling) that the plan assumed already existed. That stage is founder-gated and is the project's true first engineering act.

---

## Pre-code gates (nothing below starts until these are addressed)

| Gate | What it is | Blocks |
|---|---|---|
| **G-1 · Q-43** | Repository & environment creation: where the code lives, under whose ownership/account, what hosting, what the initial stack decision process is (FORGE's ADR remit *after* the repo exists) | Stages 01–06, 08 |
| **G-2 · Q-01 (D-34)** | CONFIRM vs BOOST→DECLARED. *Mitigation recorded in the Bible:* testimony-v1 as specified governs meanwhile — so G-2 blocks the reducer's **final** semantics and its regression suite's sign-off, not the start of reducer implementation against v1 | Stage 04 sign-off |
| **G-3 · Q-09 (S01)** | Field-level Lens disclosure schema. No mitigation exists; the compiler cannot be completed without it | Stage 05 |
| **G-4 · Q-13 (S05)** | Retention & deletion periods. Erasure mechanics are specified; periods are not | Stage 03 (deletion lineage), Stage 09 |
| **G-5 · Human dependencies** (plan §8) | Qualified counsel (privacy/IP); independent human security review before sensitive public data; real research participants; authorized rights signatories; a named human incident owner | Stages 07, 09, 10, 11 |

---

## Stages

**Stage 00 — Establish command.** *ATLAS · LEDGER · SAGE.*
Deliverables: source-of-truth register, project inventory, founder-decision queue. **Status: substantially delivered by this Phase Zero audit** — `PROJECT_STATE_AUDIT.md` (inventory + ground truth), `CANONICAL_REQUIREMENTS.md` (the 42 invariants), `FOUNDER_DECISION_REGISTER.md` (the queue), `FEATURE_STATUS_INVENTORY.md`, `TEST_BASELINE.md`. Remaining: LEDGER's traceability matrix (requirements → code → tests) cannot exist until code does; it is deferred to Stage 03, not forgotten. *Exit gate (the plan's): know what exists and what is unresolved — met for the documentation corpus.*

**Stage 01 — Create the engineering foundation's home (replaces "audit the codebase").** *Founder · FORGE · BEACON.*
**GATE G-1.** Create the repository (the plan §6 layout is a *target*, to be adopted or amended by FORGE's first ADR — not imposed), the environment separation (dev/staging), and the CI skeleton. FORGE's architecture decision record is written against the *specification* (there is no existing codebase to compare — the persona's first assignment is adapted accordingly and the adaptation recorded). VAULT/CIRCUIT/VERITY/CIPHER's "inventory" assignments return a one-line truth each: nothing to inventory; their work begins at Stage 03. *Exit gate: an empty, version-controlled, CI-checked repository whose README states the ground truth (greenfield, testimony-v1 frozen, six status labels).*

**Stage 02 — Freeze Core MVP scope.** *SAGE · MUSE(persona 12) · PULSE · LEDGER.*
Scope is already substantially frozen by the baseline: the adopted minimum journey (`MVP_SCOPE.md`, Track A) and the pilot exclusions (no public feed, dating, creator marketplace, arbitrary Recipes, third-party protocol — App. C, P05, adopted). This stage produces the Core MVP PRD and exclusion list (SAGE's first assignment) *from* the baseline, and closes the specification gaps that are drafting work rather than founder decisions (wireflows are Q-05 — a founder decision in the register's terms, because the audit assigned them there; SAGE drafts, Founder approves). **GATE: Q-02 (audience) should be answered before PULSE designs studies in Stage 07; it does not block Stages 03–06.**

**Stage 03 — Establish engineering foundation.** *FORGE · VAULT · HARBOR · BEACON · VERITY.*
Owner-scoped storage, event ledger with idempotency and revision checking, evidence/testimony stream separation (VAULT, against Chs. 24–26); identity and authorization boundaries (HARBOR, against Chs. 17/22 and the protected-request chain pattern); CI with the evidence discipline wired in (no status promotion without a run). **GATES: G-4 (retention periods) for deletion lineage; Q-21 (persistence confirmation) is answered *by* this stage's ADR, using the inventory this audit provides in place of the missing repository inventory.** *Exit gate: foundation services pass contract tests written from the Bible's invariants — the first executable tests in the project's history.*

**Stage 04 — Build personal World (Track A steps A1–A3).** *TIDAL · CIRCUIT · CANVAS · VAULT.*
First Light bootstrap, the testimony-v1 reducer **exactly as frozen** (TIDAL's regression suite must include the BOOST-from-zero known-defect case D-03 and the REFUTED/restoration cases, per the persona contract), World schema, replay. **GATE G-2 for final sign-off only.** The 104-case harness (Ch. 36) is written here — converting the project's largest proposed suite into its first real baseline — and the Replayable World gate (Ch. 36, currently 0/10) is worked criterion by criterion. *Exit gate: harness green; gate criteria reviewed with evidence.*

**Stage 05 — Build bounded sharing (Track A steps A4–A5).** *PRISM · HARBOR · CANVAS · CIPHER.*
Lens Compiler, disclosure eligibility, Passport preview equivalence, revocation invalidation across projections/indexes/caches. **GATE G-3 — hard.** CIPHER's differential-probing programme (Q-11) is designed here and executed against the built compiler; security-critical review is independent of the builders (plan §6). *Exit gate: preview-equivalence and revocation tests pass; CIPHER's probing report filed; no critical findings open.*

**Stage 06 — Complete Core journey (Track A steps A6–A7).** *SAGE · CANVAS · CIRCUIT · MUSE(persona 12) · ACCESS.*
Seeds, SEE YOURS, empty-state/refusal/recovery experiences, text-first equivalence. **GATE: Q-28 (accessibility standard) should be ratified before ACCESS signs off this stage** — Meridian's WCAG 2.2 AA target (§417) is the only candidate standard in the corpus, recorded here as a fact, not a recommendation. *Exit gate: the full journey runs end-to-end in staging against the Ch. 37 task set.*

**Stage 07 — Validate with real users.** *PULSE · VERITY · CIPHER · ACCESS.*
The Ch. 37 programme: staged 10 → 25 → 50 participant studies, cluster/pair recruitment, controlled comparisons against simpler alternatives. **GATES: G-5 (real participants, consent materials, counsel-reviewed privacy posture); Q-29/Q-33/Q-35 (thresholds and metric definitions) must be answered before results can be judged — a study run without thresholds produces anecdotes, not evidence.** *Exit gate: results reported with sample limitations and failed hypotheses intact (PULSE's contract).*

**Stage 08 — Build Meridian prototype (Track B).** *CHRONOS · ARCHIVE · STAGE · ECHO · CANVAS.*
Only after Stage 05's authorization system exists (Continuation 29 §397/§399 dependency). Five era states, Time-State Resolver, three venues, demonstration memories, Reality Lens. The §419 readiness gate is worked from 0/10; the 180-case integration suite is written against the build. *Exit gate: Meridian pilot targets (§398) measured in a controlled study; zero tolerated-defect classes at zero.*

**Stage 09 — Prepare release operations.** *BEACON · SENTINEL · MERIDIAN(persona 24) · CIPHER.*
Moderation playbook and flows (**Q-17 must be answered first** — the flows are currently unspecified), incident ownership (**Q-27**), commercial model groundwork (Q-24/Q-25 — bounded by invariant 21), legal review (G-5). *Exit gate: named human owners for every §8 responsibility.*

**Stage 10 — Controlled beta.** *ATLAS · PULSE · VERITY · BEACON.* Limited enrollment, limited contribution volume (the corpus's own moderation-cost discipline). *Exit gate: VERITY's evidence-backed status report shows no feature labelled above its evidence.*

**Stage 11 — Public release.** *Founder · ATLAS · BEACON · VERITY.* **Founder authority only** (plan §11): no agent declares release readiness. Preconditions: Stages 07–10 exit gates, G-5 humans in place, Q-31 (naming/trademark) answered.

**Stage 12 — Expansion (Track C).** *LORE · SCHOLAR · MERIDIAN(persona 24) · remaining specialists.* Behind their own gates: §129 decisions (Q-38–Q-40) for creator work; rights verification for literary worlds; the school firewall for education. Nothing here may reach back and become a launch dependency.

---

## FIRST_20_ENGINEERING_TASKS

Dependency-ordered. "Owner" is the plan's persona; every task's acceptance evidence follows the plan's handoff format (work completed, specification compliance, verification with actual execution evidence, security/privacy, open issues, rollback, next owner). Tasks 1–3 are pre-code and founder-gated where marked.

| # | Task | Owner | Inputs | Acceptance evidence |
|---|---|---|---|---|
| 1 | Ratify this audit's ground truth into the repo README and source-of-truth register (greenfield statement; baseline = Edition 1.4; registers' locations) | LEDGER | Phase Zero deliverables; Edition 1.4 | Register file committed; README states greenfield + frozen testimony-v1 + status labels |
| 2 | **(FOUNDER GATE G-1/Q-43)** Create the repository and environment: hosting, ownership, dev/staging separation, branch protection | BEACON (Founder approves) | Plan §6 target layout; Task 1 | Repo URL/record; CI skeleton runs a trivial check; access list recorded |
| 3 | Architecture decision record #1: minimum viable architecture for Track A (modular monolith vs alternatives; PostgreSQL candidacy from Ch. 24 assessed, not assumed) | FORGE | Edition 1.4 Chs. 24–28; `MVP_SCOPE.md` | ADR committed with rejected alternatives and reasons; Q-21 answered or explicitly deferred with consequences stated |
| 4 | Canonical requirements traceability skeleton: 42 invariants → requirement IDs → (empty) test slots | LEDGER | `CANONICAL_REQUIREMENTS.md` | Traceability file committed; all 42 invariants present with chapter references |
| 5 | Threat model v1 for Track A (data flows, trust boundaries, existence-disclosure surface) | CIPHER | Invariants 9, 20, 28, 34; Ch. 33 | Threat model committed; Q-11 test programme outlined (execution deferred to Task 14) |
| 6 | Data schema v1: World nodes, testimony ledger (append-only), evidence-event stream — separate tables/streams, owner-scoped | VAULT | Chs. 6–8, 24–26; testimony-v1 operator table | Migrations run on a clean database; schema diff reviewed by VERITY |
| 7 | Idempotency + revision-CAS write path with duplicate-write tests | VAULT | Invariant 5; Ch. 26 Five Laws | Test run output: replayed writes produce no duplicates |
| 8 | Testimony-v1 reducer implementation, exactly as frozen (incl. materialize-decay-then-reduce ordering) | TIDAL | Chs. 7, 25; invariant 12 | Reducer code + unit tests against the operator table; **no** v2 behaviour present |
| 9 | Reducer regression suite: BOOST-from-zero known-defect case (D-03, asserted as *known defect*, not fixed), REFUTED exclusion, RESTORE, REMOVE_BUOY, buoy floor 0.15, submersion 0.03 | TIDAL + VERITY (independent) | Task 8; App. D D-03; Chs. 22, 27 | Suite green with the defect case explicitly labelled; VERITY's independent run recorded |
| 10 | Event-replay engine: projection rebuild from ledger; digest verification; mismatch → quarantine, never overwrite | VAULT + TIDAL | Ch. 26; invariants 16, 17 | Replay test: rebuilt state digest matches; injected mismatch quarantines |
| 11 | Deletion/erasure pipeline v1: derived-data lineage and purge, within the periods question (period values configurable; **Q-13/G-4** values themselves are a founder input, flagged not invented) | VAULT + CIPHER | Chs. 24, 26; invariant 16 | Purge test: deleted World unreconstructible from snapshots/backups in the test environment |
| 12 | Identity & authorization core: owner/visitor boundaries, grant issuance, expiry, revocation serialization | HARBOR | Chs. 17, 22; invariants 3, 4, 42 | Negative authorization tests pass (cross-user denial; stale-grant denial) |
| 13 | Lens Compiler v1: resolution as pure function; PROPOSED/WITNESSED excluded from pilot Perspectives; disclosure eligibility enforced | PRISM | Chs. 18, 33; invariants 9, 20; **GATE G-3/Q-09 — schema-dependent parts stubbed and flagged until the founder decision lands** | Compiler contract tests pass for the specified parts; a written list of exactly which behaviours await Q-09 |
| 14 | Differential-probing test programme, executed against the built compiler (queries, aggregates, explanations, geometry side channels) | CIPHER + VERITY | Task 13; Q-11 | Probing report with attack scenarios and results; critical findings block Stage 05 exit |
| 15 | Passport preview-equivalence: the approved preview is byte-equivalent to the compiled payload a visitor can receive | PRISM + HARBOR | Chs. 17–18; invariant 22 pattern | Equivalence test passes; revocation-invalidates-cache test passes (invariant 37) |
| 16 | First Light flow: minimal seed → disclosed draft → correction session, with low-coverage labelling and whole-draft-wrong recovery | CANVAS + CIRCUIT | Ch. 9 (R21 arms); Q-05 draft flows (SAGE) | End-to-end staging run of both bootstrap arms; Draft Survival instrumentation present (thresholds Q-33 flagged, not set) |
| 17 | Visitor journey: Perspective rendering from compiled projections only (compile-don't-hide, invariant 28); Seed saving as reference-not-copy | CANVAS + CIRCUIT | Tasks 13, 15; Chs. 17–19; invariant 40 | Client payload inspection test: no excluded material present in any client-bound payload |
| 18 | SEE YOURS conversion: Seed-derived start of a visitor's own World; journey completion instrumentation (meaningful-visit events defined per Ch. 37 hypotheses; Q-35 flagged) | CIRCUIT + CANVAS | Task 17; Ch. 19 | Full journey (A1→A7) completes in staging; event log reviewed against the journey definition |
| 19 | Accessibility pass 1: list-based alternative to the map (U04, adopted), keyboard/screen-reader/reduced-motion checks on the Core journey; text-first equivalence | ACCESS | Ch. 11; Continuation 30 §417 paths as reference | Accessibility issue report; essential tasks completable without the map; **Q-28 standard flagged for ratification** |
| 20 | First executable baseline assembly: the Ch. 36 104-case harness written against Tasks 6–18; Replayable World gate criteria 1–10 assessed with evidence | VERITY | Tasks 6–18; Ch. 36 | Harness run recorded (pass/fail counts as *results*, replacing "proposed" for the first time); gate assessment filed criterion by criterion |

**After Task 20:** the project has its first honest `TEST_BASELINE` update, Stage 04's exit gate can be assessed, and PULSE's Stage 07 study design (which needs Q-02, Q-29, Q-33, Q-35) becomes the critical path. Meridian tasks do not appear in the first twenty — deliberately: Track B depends on Stage 05's authorization system (Tasks 12–15), and the corpus's own warning against building the time machine before the trust machinery is adopted as sequencing.

*End of Master Development Roadmap.*
