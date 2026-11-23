# Master Index — SEE MY WORLD Repository

**Constructed:** 23 November 2026, development pass 5 (register A-75/A-78), from the canonical tree at `fd37283…` (50 commits, 203 tracked files). For the byte-level inventory at a named commit, see `docs/verification/REPOSITORY-INVENTORY.md`.
**Baseline of record:** Product Bible **Edition 1.4** (A-31 baseline ruling, reaffirmed A-69). The governing register is `docs/decisions/EDITION-1.5-AMENDMENT-REGISTER.md`.

## Where things live

| Area | Contents | Status |
| --- | --- | --- |
| `docs/product-bible/` | Edition 1.4 (MD + PDF) — the baseline | **Baseline of record** |
| `docs/product-bible/sources/` | The evidence the Bible was compiled from: concept expansion + continuations corpus, prior editions (1.2, 1.3), audits, the First Draft Engine concept, the PARAVEX corpus (v35, Editions 58/59/60, Persona v3.0/v3.1) **as source material only**, both PARAVEX analyses, and two standalone drafts (not canon) | Source / evidence |
| `docs/architecture/` | Stage 02 scope package: CORE-MVP-PRD (57 requirements), Meridian prototype requirements, scope-exclusion list; the AI Development Organization document | Specified |
| `docs/decisions/` | Amendment registers (1.3, 1.4, and the live 1.5 register), the Founder Decision Register (44 open items), the Stage 03 Charter (A-51) | **Governing record** |
| `docs/stage-03/` | The accepted G1 package (D03-01…D03-04 v1.1 + reports), the G3 design package (E1, gate pending), the seven source design boards, and `GATE-STATUS.md` — the Stage 03 gate board | Mixed: G1 accepted (bounded); G3 filed E1 |
| `docs/verification/` | Baseline manifest (certified 541e608 baseline + dated addenda), development status, repository inventory, Phase Zero deliverables, tails verification, slice build report | Evidence |
| `world-forge/` | WORLD FORGE v3.6 — the accepted factory baseline: 26 source files, 31 test files, suite 200/200, CI green | Accepted baseline (A-38) |
| `apps/see-my-world/` | The Stage 02 vertical slice — implemented, accepted (A-48), frozen (A-49); acceptance suite 21/21 | Frozen baseline |
| `verification/g2/` | Pass 153 backend-evidence package (workflow, supplementary tests, validators, runner) — merged via PR #3; one authorized run, 31/31, artifact preserved in the project archive | Evidence (A-63…A-67) |
| `.github/workflows/` | `world-forge-tests.yml` (push/PR) and the manual-dispatch backend-evidence workflow | Active |

## How to read this repository

1. **Authority order:** the Founder's register entries govern; the Edition 1.4 Bible is the product baseline; Stage 02's frozen code is the only accepted implementation; everything PARAVEX is source material until a Founder decision says otherwise.
2. **Status honesty:** documents carry their own status lines (baseline / accepted / filed E1 / draft / source-only). If a document's status is unclear, the register entry that filed it governs.
3. **The three tiers** (implemented / passed automated tests / verified against a live runtime) are stated in `docs/verification/DEVELOPMENT-STATUS.md` and nowhere contradicted deliberately; live-Docker verification remains outstanding and production is not authorized.
