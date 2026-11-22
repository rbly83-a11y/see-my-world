# SEE MY WORLD — MVP Scope (Phase Zero)

**Scope authority:** the minimum complete journey adopted in Edition 1.2 (R28) and recorded at Edition 1.4, Appendix C, priority decision 2 — **First Light → correction → private World → bounded Lens → visitor Perspective → Seed → SEE YOURS** — and the organization plan's three release tracks (`AI-DEVELOPMENT-ORGANIZATION.md` §2).
**Method:** each step is mapped against the baseline corpus: what is specified, at what depth, and what is missing or blocked. Queue references (Q-nn) are to `FOUNDER_DECISION_REGISTER.md`. Status labels are from `FEATURE_STATUS_INVENTORY.md`.
**Standing fact for every row:** no step is implemented. There is no codebase (`PROJECT_STATE_AUDIT.md` §3). "Specified" below always means *specified in the baseline text*.

---

## Track A — SEE MY WORLD Core (first public release candidate)

Pilot scope is product Layers 1–2 (My World; Share a View). Layer 3 is excluded from the pilot (App. D, D-33).

### Step A1 — First Light (bootstrap)

| | |
|---|---|
| **Specified** | The bootstrap is locked (priority decision 3, adopted): three interests minimum, five as the optional richer start, one link labelled low-coverage; both are pilot test arms (R21, Ch. 9). The Refutation Bootstrap / First Light flow — minimal seed → disclosed, deliberately arguable draft → correction session — is specified in the First Draft Engine material (Chs. 6–9). The five-interests → "Does this look like you?" recognition moment is the design centre (Ch. 9). |
| **Status** | First Light owner journey: **Tested (reported)** at Edition 1.1 scope only — reported v36 simulations, unverifiable here. The Edition 1.4 specification itself: Specified. |
| **Missing / blocked** | Draft Survival thresholds unratified (Q-33) — the quality gate for this step has a diagnostic band (30–50%) but no ratified threshold. Exact screen flows and error states unspecified (Q-05). The whole-draft-is-wrong recovery is specified (U03, adopted). |

### Step A2 — Correction (owner testimony)

| | |
|---|---|
| **Specified** | The deepest-specified step in the product. Testimony-v1 is frozen: node model (strength, testimony, provenance DECLARED/CONFIRMED/PROPOSED/WITNESSED/REFUTED, last_witnessed, buoy); operators (declaration +1.0; confirmation +0.6; BOOST s←min(1, s×1.5), testimony +1.0; REDUCE s←s×0.6, testimony +1.0 per the frozen table as compiled — see Chs. 6–8, 25); half-lives (DECLARED 180d, CONFIRMED 90d, PROPOSED 21d, WITNESSED 14d); buoy floor 0.15; submersion 0.03; REFUTED as an exclusion state requiring explicit restoration (RESTORE, REMOVE_BUOY specified, Chs. 22, 27). Known defect carried deliberately: BOOST-from-zero can never recover a zero-strength node (D-03); the v2 formula is the designated remedy, not adopted. |
| **Status** | Testimony model and Deterministic Reducer: **Specified**. |
| **Missing / blocked** | **Q-01 (D-34) gates this step's final semantics** — CONFIRM as an explicit event vs BOOST→DECLARED is unresolved; v1 as specified governs meanwhile. The complete provenance transition table is still owed (Q-06). Edge semantics (creation/weighting/decay) unspecified beyond the correction command (Q-07). The v2 coefficient *a* is unset (Q-32). |

### Step A3 — Private World (the Worldprint)

| | |
|---|---|
| **Specified** | World State Contract (owner-authoritative / provisional / disclosure state kept independent — Continuation 04; Ch. 24); World Schema v2.0 on PostgreSQL as the *candidate* persistence model (Ch. 24 — a candidacy, not a confirmation); Event-Replay Engine with the Five Laws of Event Integrity (Ch. 26); Atlas v2.0 (hierarchy + relationship graph; attribute branches excluded by invariant 19); Cartographic rendering semantics (Ch. 12, Concept). Invariants 1, 2, 12–20 bind this step. |
| **Status** | World Schema v2.0: Specified. Event-Replay Engine: Specified. Atlas v2.0: Specified. Cartographic Engine: Concept. |
| **Missing / blocked** | Production database confirmation pending repository inventory (Q-21) — and there is no repository (Q-43). Retention/deletion periods undecided (Q-13), which leaves the erasure-vs-replay collision (D-12) open by design. Replayable World gate: **0 of 10 reviewed** — the foundation gate for this step is closed (Ch. 36). |

### Step A4 — Bounded Lens

| | |
|---|---|
| **Specified** | The Law of Resolution: Detail(Output) ≤ Resolution(Grant) (invariant 9); three resolutions (Continent/Coast/Harbour) as a pure function over the Atlas; the Lens Compiler's eight-step sequence (Continuation 04; Ch. 18); disclosure eligibility (a continent label visible only because of one private topic leaks it — Ch. 33); the Perspective Passport as the human-facing permission experience, with literal preview (Chs. 17–18, adopted A-04). Pilot rule: no Perspective contains a PROPOSED or WITNESSED node (invariant 20). |
| **Status** | Resolution Lens Compiler: Specified. Perspective Passport: Specified. |
| **Missing / blocked** | **The field-level disclosure schema is still owed (Q-09)** — the single largest specification gap in Track A; the compiler cannot be built or privacy-tested to acceptance without it. Audience/expiry specified; **forwarding/resharing behaviour unspecified** (Q-10). The differential-probing test programme is owed (Q-11) and cannot run pre-code. The Lens Compiler's formal adversarial information-flow treatment remains future work (App. D.5). |

### Step A5 — Visitor Perspective

| | |
|---|---|
| **Specified** | The visitor receives the compiled, authorized projection — never the World (Chs. 17–19); Presentation Layer and Presentation Compiler specified (Part VIII), including the Render Manifest and the rule that compilation cannot increase the information in the authorized projection (invariant 22); visitor bootstrap via Seeds (A6). Revocation invalidates projections, search results, and cached derivatives (invariants 4, 37). |
| **Status** | Presentation Layer / Compiler / Render Manifest: Specified. Visitor journey and Seeds: **Tested (reported)** at Edition 1.1 scope only. |
| **Missing / blocked** | Exact visitor flows (anonymous vs registered) are part of Q-05. Abuse flows (report/block/mute) unspecified (Q-17) — required before any *wider* social discovery, though the closed pilot journey is specified without them (Ch. 32 states the requirement's trigger). |

### Step A6 — Seed

| | |
|---|---|
| **Specified** | Seed ownership and revocation defined and adopted (priority decision 7; R20): a Seed is an immutable reference with attribution and permitted metadata; a visitor's independent saves are distinguished from access to the owner's revoked content (Chs. 3, 19). A saved reference is not a copy and not a licence (invariant 40). |
| **Status** | Specified (as part of the visitor journey, Tested (reported) at 1.1 scope). |
| **Missing / blocked** | Nothing specification-level is recorded as missing for the pilot scope. Seed-Born Worlds as a *growth* mechanism depend on Q-26 (growth without a feed). |

### Step A7 — SEE YOURS (visitor's own World begun from Seeds)

| | |
|---|---|
| **Specified** | The journey's closing step is defined by the adopted minimum journey (R28): the visitor begins their own World from Seeds deliberately saved in another's Perspective. The step re-enters A1's bootstrap with Seed-derived starting material. |
| **Status** | Concept-to-Specified: the journey definition is adopted; no separate contract for the Seed→World conversion beyond Ch. 19 exists in the corpus. |
| **Missing / blocked** | The meaningful-visit definition that would measure this step's success is unratified (Q-35), and pilot success thresholds generally are undecided (Q-29). First target audience undecided (Q-02) — the step's pilot population is therefore undefined. |

### Track A — cross-cutting gates

| Gate | State |
|---|---|
| Repository / environment | **Does not exist** — creation is founder-gated (Q-43) |
| Founder decisions gating Track A code | Q-01 (reducer semantics), Q-09 (disclosure schema), Q-13 (retention periods), Q-06 (transition table) |
| Founder decisions gating Track A *pilot* | Q-02 (audience), Q-05 (flows), Q-29/Q-33/Q-35 (thresholds & metric definitions), Q-27 (accountable roles), Q-28 (accessibility standard) |
| Test evidence | 104-case harness proposed only; Replayable World gate 0/10; pilot programme (Ch. 37) has not run |
| Human dependencies | Real research participants; independent security review before sensitive public data; counsel (privacy) — plan §8 |

---

## Track B — Meridian Experience (controlled reference implementation)

Release only after its separate privacy and content gates pass (plan §2). Meridian is a **fictional** district; nothing in this track is historical evidence.

| Element | Specified | Status | Missing / blocked |
|---|---|---|---|
| District & eras | Meridian District, Mercer Avenue, five authored era states (1925/1955/1985/1995/2025); venue continuity matrix labelled fictional production canon (Continuation 29 §§381–384) | Specified | Material-culture research per era still required (the source says so itself) |
| Time-State Resolver | Site/Structure/Occupancy model; unknown ≠ absent (invariant 31); SiteTimeState contract with categorical evidence classification (Continuation 28 §363) | Specified | Implementation does not exist; era-transition transaction protocol specified (Continuation 30 §406) |
| Experience | 14 logical screens; Experience Shell; mission *The Street That Remembered* (six stages); analog-communication challenge; Reality Lens with four authority categories (Continuations 29–30) | Specified — **at specification freeze** (§420), explicitly not production-ready | The §419 readiness gate stands at 0/10; the 180-case integration suite is proposed only |
| Memory layer | Contextual Memory Wall over authorized public projections; 20 fictional demonstration memories; real contributions only after publication/withdrawal workflows are proven (Continuation 29 §§391–393) | Specified (contracts); experience Concept | Depends on Track A's authorization/publication system (the plan and Continuation 29 §397 both put authorization design in Sprint 1); real-place contributions never attach to fictional sites (§391) |
| Accessibility | WCAG 2.2 AA target for Meridian web interfaces; equivalent interaction paths; text-first equivalence (Continuation 30 §417) | Specified (for Meridian) | Platform-wide standard unratified (Q-28) |
| Pilot criteria | Proposed targets (Continuation 29 §398): comprehension/trust first; zero tolerated unauthorized exposure or critical consent defects | Proposed only | No study has run; no participants exist |

**Track B's dependency is explicit in the sources:** it reuses Track A's Resolver-independent machinery — authorization, publication, Memory Network, Rights Ledger, Reality Lens (Continuation 29 §400). Building Meridian before Core's authorization system exists is the failure mode Continuation 29 §399 names: "the most dangerous mistake would be building an impressive time machine before proving that users trust the memory network."

## Track C — Platform Expansion (gated; not launch dependencies)

Listed briefly, per the plan §2 and the baseline's part structure. All are Concept or Specified on paper; none may become a dependency of Track A or B launch.

- **Living Memory Network at scale / World Memory Engine** (Parts XV, XVII) — Concept, production contracts Specified.
- **Creator Universes & Live Worlds** (Part IX) — Concept; gated additionally by the three §129 decisions (Q-38–Q-40).
- **Licensed literary worlds / Storyworld Engine** (Part X) — Concept; the Author's Sandbox is the recorded wedge; rights verification is a hard gate (Rights & Licensing Engine; invariant 21).
- **Education / Living Classroom** (Part XI) — Concept with Specified contracts; gated by the school firewall (invariants 24–27) and institutional decisions.
- **Broader Living Cities** (Part XVIII machinery beyond Meridian) — gated by Track B's proof.
- **Public-Domain World Library** (Continuation 17) — Concept; per-edition rights verification required.

*End of MVP Scope.*
