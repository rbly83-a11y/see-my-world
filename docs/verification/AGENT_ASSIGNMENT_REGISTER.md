# SEE MY WORLD — Agent Assignment Register (Phase Zero)

**Source:** the 24-persona roster in `AI-DEVELOPMENT-ORGANIZATION.md` §3, with departments from §5 and stage assignments from §7. This register maps the roster to activation order and roadmap stage; it does not amend the plan.

## The operating reality — stated plainly

1. **The personas are prompt contracts, not persistent workers.** The plan says so itself (§11): "these prompts define the agents; they do not automatically create persistent workers or connect them to your repository." No persona named below is running, has run, or holds state between assignments.
2. **How they execute in this environment:** as *scoped agent assignments* — a bounded task, a named persona contract (the plan §5 prompt plus the Universal AI Agent Contract, plan §4), a handoff in the plan §6 format, and **independent verification** by a different assignment acting as VERITY (or by the coordinator's own checks) before the work is accepted. This is the model that built Editions 1.2, 1.3, and 1.4: a coordinator briefed child drafters per part, the parts were assembled by script, and the coordinator's claims were then re-verified independently (checksums, machine diffs, rendered-page inspection) before delivery. The plan's pipeline (§6: ATLAS assigns → LEDGER+SAGE verify → FORGE approves → builder implements → VERITY tests → CIPHER/ACCESS review → BEACON integrates → ATLAS records) maps onto that model without remainder.
3. **Activation means "first assignment commissioned," nothing more.** A persona with no commissioned assignment is a document, not a team member. Several first assignments in the plan presuppose a codebase ("inventory existing endpoints," "run its baseline") and return the greenfield truth instead (`PROJECT_STATE_AUDIT.md` §3); those adaptations are recorded in the roadmap (Stage 01).
4. **Two names are flagged, not fixed** — see the end of this register.

## Roster mapped to activation and stage

Stage numbers are the roadmap's (`MASTER_DEVELOPMENT_ROADMAP.md`). "Activation" is the plan's own column (§3).

| ID | Persona | Department | Plan activation | First roadmap stage | First assignment (plan §5, adapted where marked) |
|---|---|---|---|---|---|
| 01 | ATLAS — Chief Operating Officer | Product & Strategy | Immediate | 00 | Audit + source-of-truth register + backlog — **delivered in substance by this Phase Zero audit** |
| 02 | SAGE — Product Architect | Product & Strategy | Immediate | 00/02 | Core MVP PRD, Meridian prototype requirements, exclusion list |
| 03 | LEDGER — Canon & Decision Registrar | Product & Strategy | Immediate | 00 | Canonical requirements register + open-decision matrix — **delivered by `CANONICAL_REQUIREMENTS.md` and `FOUNDER_DECISION_REGISTER.md`**; traceability matrix deferred to Stage 03 (no code yet) |
| 04 | FORGE — Principal Software Architect | Engineering | Immediate | 01/03 | ADR comparing architecture options for the Core MVP — *adapted: no existing codebase to compare against; the comparison is specification-vs-options* |
| 05 | CIPHER — Privacy & Security Architect | Trust & Security | Immediate | 03/05 | Threat model — *adapted: a design-stage threat model (roadmap Task 5), not a "delta for the current repository"* |
| 06 | VERITY — QA & Verification Director | Quality | Immediate | 03/04 | Test inventory + baseline — **delivered by `TEST_BASELINE.md`** (inventory: zero executable suites; baseline: none); verification plan activates at Stage 03 |
| 07 | VAULT — Data & Database Engineer | Engineering | Foundation | 03 | Schema/migration plan — *adapted: greenfield schema design (Tasks 6, 7, 10, 11), not an inventory of existing schemas* |
| 08 | CIRCUIT — Backend/API Engineer | Engineering | Foundation | 04/06 | First approved vertical slice with contract tests — *adapted: no existing endpoints to inventory* |
| 09 | HARBOR — Identity & Permissions Engineer | Trust & Security | Foundation | 03/05 | Authorization matrix for Core and Meridian resources (Task 12) |
| 10 | TIDAL — World Intelligence Engineer | Engineering | Core build | 04 | Reducer regression suite incl. BOOST-from-zero and REFUTED cases (Tasks 8, 9) |
| 11 | PRISM — Lens & Perspective Engineer | Engineering | Core build | 05 | Lens Compiler specification/tests (Tasks 13, 15) — partially gated by Q-09 |
| 12 | MUSE — UX/UI Director ⚠ | Experience | Foundation | 02/06 | Core MVP interaction map + component library. **⚠ Name collision — see below** |
| 13 | CANVAS — Frontend Engineer | Experience | Core build | 04/06 | First Light-to-Perspective vertical slice UI (Tasks 16–18) |
| 14 | ACCESS — Accessibility Engineer | Quality | Foundation | 06 | Accessibility acceptance matrix for Core + Meridian's 14 screens (Task 19) |
| 15 | PULSE — Research & Usability Lead | Quality | Prototype | 07 | 10-participant moderated Core study design (needs Q-02, Q-29) |
| 16 | CHRONOS — Temporal Runtime Engineer | Experience | Meridian | 08 | Five-era fixture registry + tested Time-State Resolver for Mercer Avenue |
| 17 | ARCHIVE — Historical Research Director | Content | Meridian | 08 | Evidence registry for the 1995 Meridian challenge |
| 18 | ECHO — Memory Network Engineer | Engineering | Meridian | 08 | Memory Network implementation against Part XV contracts |
| 19 | STAGE — Immersive Scene Director | Experience | Meridian | 08 | Meridian asset production specification + one-venue/two-era proof of concept |
| 20 | SCHOLAR — Educational Experience Designer | Content | Expansion | 12 | Classroom version of *The Street That Remembered* (specification only until Track C gates open) |
| 21 | LORE — Storyworld & Licensing Architect | Content | Expansion | 12 | One public-domain literary World prototype design with verified source edition |
| 22 | SENTINEL — Moderation & Safety Lead | Trust & Security | Before social pilot | 09 | Memory Wall moderation policy + workflows — gated by Q-17 (flows unspecified) |
| 23 | BEACON — DevOps & Release Engineer | Infrastructure | Foundation | 01 | Repository creation support + minimal CI (Task 2) — *the plan's "inspect the deployment environment" returns: none exists* |
| 24 | MERIDIAN — Commercial & Partnerships Lead ⚠ | Business | Before pilot | 09 | Staged commercialization model (needs Q-24/Q-25 inputs). **⚠ Name collision — see below** |

**Permanent command group (plan §11):** ATLAS · LEDGER · FORGE · CIPHER · VERITY — with SAGE activated immediately per §3/§10. All other personas are rotating: commissioned for scoped work, reviewed, stood down at handoff.

## The two name collisions — open founder call (carried from A-32)

| Persona | Collision | Consequence if unchanged | Status |
|---|---|---|---|
| 12 · **MUSE** (UX/UI Director) | **Muse** is the name of the platform this organization runs on — and the name of the parent agent system coordinating this work | Handoffs, logs, and assignments will ambiguous-reference "MUSE" for both a design persona and the platform itself | **Open — founder call** (queue Q-44a). Not renamed by this audit |
| 24 · **MERIDIAN** (Commercial & Partnerships Lead) | **Meridian** is the flagship fictional district and reference implementation (Continuations 29–30) | Commercial documents and product documents will ambiguous-reference "MERIDIAN" (e.g. "MERIDIAN approved the Meridian budget") | **Open — founder call** (queue Q-44b). Not renamed by this audit |

Both names are internal identifiers per the plan §3 ("not product features or established canon"), so a rename costs nothing in canon — but the decision is the Founder's, and this register records it without making it.

## Assignment discipline (binding on every future assignment)

- Every assignment cites its persona contract + the Universal AI Agent Contract (plan §4), including rule 7 (never resolve founder decisions) and rule 4 (never claim implementation/test/readiness without verifiable evidence).
- Every handoff uses the plan §6 format and ends with a status from the six labels; "Tested" requires actual execution evidence attached.
- Security-critical work is reviewed by an assignment with independent context from its builder (plan §6).
- No assignment may mark another assignment's work as verified; VERITY-function verification is structurally separate from building — the discipline under which Editions 1.2–1.4 were delivered and re-checked.

*End of Agent Assignment Register.*
