# SEE MY WORLD — Test Baseline (Phase Zero)

## Headline

**Executable test suites found: zero.**

No SEE MY WORLD test file, test runner, fixture, or CI configuration exists in this workspace. Search method: workspace-wide `find` for test-pattern files (`*test*.py`, `*_test.go`, `*.test.ts`, `*.spec.ts`, any `tests/` path) and for deployment/CI artifacts — every match was inside third-party virtual environments (pip/fontTools/lxml vendor code in `~/workspace/.venv-pdf/` and an unrelated project's venv). No match belongs to SEE MY WORLD. Full method: `PROJECT_STATE_AUDIT.md` §3.

**Tests executed in this audit: none — there is nothing to execute.** The baseline is therefore not "tests passing" or "tests failing"; it is *no executable tests exist*. Everything below is an inventory of **proposed** suites: case counts recorded in the corpus as plans. The corpus itself is disciplined about this — every suite is recorded as proposed/planned only — and this baseline preserves that status exactly. **No proposed case count in this document is a result.**

---

## 1. Reported historical results (not a baseline — reported evidence only)

These results exist in the corpus as *reports*. None can be re-run, because neither source archive is in this workspace.

| Result | As reported | Source | Verification status |
|---|---|---|---|
| v36.2 RC1 simulations | Five-user HTTP simulation 47/47; runtime 1,552/1,552; protocol 19/19 | Edition 1.4, Ch. 35 §35.1 | **Reported only** — v36 source archive not present |
| v36.3 RC1 simulations | 20-user adversarial simulation 56/56; runtime 1,555/1,555; protocol 19/19 | Edition 1.4, Ch. 35 §35.1 | **Reported only** — same |
| v9.8 archive validation | 736/736 tests, 0 failures; package version 9.8.0; Node.js 22+ prototype, local JSON store | Edition 1.4, Ch. 35 §35.1 | Reported as *inspected directly by the Edition 1.1 line*; the archive itself is **not in this workspace**. Separate, earlier lineage — totals must not be merged with v36 (Ch. 28 §28.3) |
| v36.1 hardening properties | HTTPS-by-default; optional host allowlist; 8-second timeout; 128 KiB input / 512 KiB response limits | Edition 1.4, Ch. 31 §31.4 | **Reported**, "must not be cited as measured properties of any current deployment" (the Bible's own words) |

## 2. Proposed suites — complete inventory

All counts are the corpus's own. Status for every row: **proposed only — no case written, no case executed.**

| # | Suite | Cases | Source | Notes / gates as recorded |
|---|---|---|---|---|
| 1 | Deterministic acceptance harness (core World engine) | **104** | Continuation 05 §42; Edition 1.4, Ch. 36 | "A specification, not a result" (App. E). Covers the testimony reducer, replay, and World-state contracts |
| 2 | Presentation Layer / Presentation Compiler acceptance suite | **130** | Continuation 12 §111; Edition 1.4, App. E | Nine categories (theme validation 12; layout responsiveness 14; module permissions 18; visual binding safety 16; adversarial disclosure 22; soundscape 12; revision/recovery 10; remainder as filed) |
| 3 | Educational acceptance suite (Living Classroom) | **238** | Continuation 19 §213; Edition 1.4, Ch. 70 / App. E | Gates: zero critical student-data disclosures; no unlabeled fabricated historical quotations |
| 4 | Era Worlds Engine acceptance plan | **284** | Continuation 22 §265; Edition 1.4, App. E | Gates: no future-knowledge leakage through characters; no restricted assets via hidden API fields; progress survives session interruption; corrections traceable to editorial revisions; every essential mission completable without sound/motion/specialized hardware |
| 5 | Living Memory Network acceptance plan | **300** | Continuation 24 §299 — **as recorded in register entry A-25** | The filed Continuation 24 source ends at §290; the 300 figure rests on the register's record (App. D, D-62). Gate: contributor comprehension and control, not upload volume; adversarial tests for unauthorized publication, metadata leakage, stale search after withdrawal, Thread exposure |
| 6 | Social Time Machine acceptance plan | **220** | Continuation 25 §319; Edition 1.4, App. E | Core criterion: a visitor can enjoy the social experience without being forced to publish, reveal identity, or connect with strangers |
| 7 | Memory Portal acceptance suite | **240** | Continuation 26 §338; Edition 1.4, App. E | Blocking failures: unapproved photograph exposed; invented attributed statement; audience restriction bypassed; withdrawn material served; no accessible alternative |
| 8 | World Memory Engine acceptance plan | **320** | Continuation 27 §358; Edition 1.4, App. E | Gates: no private relationships published; no invented historical certainty; no silent modification of contributor testimony; no retained public access to withdrawn assets; disagreement is not a moderation violation |
| 9 | Living City acceptance suite | **280** | Continuation 28 §378 — **as recorded in register entry A-29** | The filed Continuation 28 source ends at §374; the 280 figure rests on the register's record (App. D, D-67). Nonnegotiable gates: no business displayed outside its operating period without an uncertainty label; no private locations/identities revealed; no fictional people represented as actual residents; no silent replacement of evidence with a prettier reconstruction |
| 10 | Meridian integration test matrix | **180** | Continuation 30 §418; Edition 1.4, App. E | Includes rapid era switching, stale scene manifests, revoked memory permissions, interrupted sessions, duplicate mission events, inaccessible venue states |

**Total proposed cases across the ten suites: 2,296. Cases written: 0. Cases executed: 0.**

## 3. Gates and frameworks (not case-counted suites)

| Gate / framework | State | Source |
|---|---|---|
| **Replayable World gate** — 10 criteria for a replayable World | **0 of 10 reviewed.** "The gate is therefore closed, and the capabilities behind it remain blocked on the foundation." | Continuation 07 §58; Edition 1.4, Ch. 36 §36.3; App. D.5 |
| **Meridian production readiness gate** — 10-item engineering readiness checklist (canonical registries; screen-state spec; event contracts; auth model; publication/withdrawal workflows; evidence labelling; text-first spec; API schemas; fixtures; budgets) | **0 of 10** — presented in the source as a planning aid; checking a box verifies nothing (the source's own note) | Continuation 30 §419 |
| **Immersion Acceptance Framework** — ten categories (Presence, Agency, Continuity, Authority, Privacy, Accessibility, …) | A framework, **not** a suite — no case count is given in the source and none may be invented | Continuation 20 §231; Edition 1.4, App. E |
| **Storyworld acceptance bar** | Planned criterion: zero known unauthorized canon or spoiler disclosures | Continuation 15 §156; Edition 1.4, App. E |
| **Meridian pilot success targets** | Proposed targets for an initial usability study, not observed performance (≥80% first-mission completion; ≥95% era changes; ≥90% evidence/reconstruction discrimination; ≥95% publication-scope identification; 100% of defined tasks via accessible text; zero tolerated unauthorized exposure; zero tolerated critical consent/withdrawal defects) | Continuation 29 §398 |
| **Pilot programme (Ch. 37)** — staged 10 / 25 / 50 participant studies, cluster recruitment, controlled comparisons against simpler alternatives | **Has not run.** Metrics framed as hypotheses; thresholds undecided (queue Q-29/Q-33/Q-35) | Edition 1.4, Ch. 37; App. D.4 closing note |

## 4. What a real baseline requires (statement of absence, not a plan)

An executable baseline cannot exist until, in order: (1) a repository and environment are created (founder decision, queue Q-43); (2) the testimony-v1 reducer and World-state contracts are implemented from Chs. 7/24/25; (3) the 104-case harness of Ch. 36 is written against that implementation. Until step (3) produces a run, every test statement about SEE MY WORLD — including any in future agent handoffs — must carry the label **proposed** or **reported**, never **passed**. This is the organization plan's own rule (Universal Contract, rule 4: never claim test success without verifiable evidence) applied to the project's actual state.

*End of Test Baseline.*
