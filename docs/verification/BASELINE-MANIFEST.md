# SEE MY WORLD — Repository Baseline Manifest

**Repository:** https://github.com/rbly83-a11y/see-my-world (private)
**Accepted baseline revision (HEAD at acceptance):**
`541e608d500c8e21af74a186071486ae23f08e69`
**Manifest date:** 21 November 2026
**Status at writing:** all acceptance evidence below was verified against
the accepted baseline revision. This manifest is committed on top of that
revision; the baseline it certifies does not include this file.
**Purpose:** the starting reference for ATLAS and every specialist task.
Any future work identifies the baseline it was developed against by the
SHA recorded here.

## What the baseline contains

| Component | Version / identity | Evidence |
|---|---|---|
| Product Bible | **Edition 1.4** — baseline of record (120 chapters, 370 pp) | MD md5 `ff27ae99f0873b0969cd484a22f79859`; PDF md5 `6afadb6200259557f33dd0d5eb94defa` — both re-verified from the repository's own copy at the accepted HEAD |
| WORLD FORGE | **3.6.0** (`world-forge/package.json`) | Scripts present: `test`, `demo`, `serve`, `github:evidence`, `runner:check`, `test:docker-live`, `test:docker-live-cancellation` |
| Product application | **Greenfield** — `apps/see-my-world/` is a placeholder | Repository synchronisation is not product implementation; factory readiness and product progress are reported separately |

## Verified inventory (from the repository at the accepted HEAD)

| Inventory | Count |
|---|---|
| WORLD FORGE source files (`world-forge/src/`) | **26** |
| WORLD FORGE test files (`world-forge/tests/`) | **31** |
| All WORLD FORGE files (incl. the 27-file v1.1 reference tree) | **92** |
| All repository files | **148** |

**Inventory corrections of record:** the migration's original batch labels
said 25 source files and 32 test files. Both were label errors by the
migration author; the actual inventory is 26 and 31, confirmed from the
canonical tree and from the repository archive at the accepted HEAD.
The bundled `world-forge/world-forge-v1.1/` tree is historical reference
material, not the active implementation.

## Test evidence (three independent executions of the same content)

| Execution | Result |
|---|---|
| Local, on the received v3.6 archive (21 Nov 2026, Node v24.22.1) | **200 passed, 0 failed** |
| Clean-room, on the repository archive downloaded from GitHub at the accepted HEAD (21 Nov 2026) | **200 passed, 0 failed**; demo ran clean |
| GitHub Actions, run **#23** at the accepted HEAD | **Success** — https://github.com/rbly83-a11y/see-my-world/actions/runs/44978454445 (job `test`; step "Run the WORLD FORGE suite" succeeded) |

The clean-room tree was also diffed against the original v3.6 delivery
archive: **byte-identical for every content file.** The only archive items
absent from the repository are the two generated `local/store.db`
databases (excluded by the project's own `.gitignore` and by the
migration's exclusion rule) and two empty `docs/` placeholder directories,
which Git does not track. No content is missing.

## Live-runtime status (reported separately, by design)

**Live Docker behaviour is NOT verified.** The acceptance harnesses
(`world-forge/integration/`, `npm run test:docker-live` and
`test:docker-live-cancellation`) are present in the baseline but have
never been run — no Docker daemon was available in the build or
verification environments, and the project's own documentation says the
same of its build environment. Passing mocked tests does not establish
real container safety. Outstanding runtime proofs: live Docker acceptance
on a disposable host, authenticated operator identities, AI
coding-provider integration, independent acceptance testing.

## Commit chain of the migration (oldest → newest)

| # | SHA | Commit |
|---|---|---|
| 1 | `71a9395c25607a7312001a0f4bbfc728c5f82476` | Initial commit |
| 2 | `d1c0bacafcc8412bc9e75f4faadd89bae029c123` | Add project README and gitignore |
| 3 | `4f9c7ec28b3405cbc61defd94a776077b7fff2c4` | Add WORLD FORGE CI workflow |
| 4 | `a033f113eb829124f9580210195dccbd8eed4e91` | Add product application placeholder |
| 5 | `c5b36f8c54258e0b24779c25db5d677378d0195c` | Add Phase Zero verification record and development status |
| 6 | `9bc103319d3a68b6205aa25883c8d146357325f8` | Add amendment registers and founder decision register |
| 7 | `8b3cf0c3eb64bc886631f49cc5f6578a0b5ff677` | Add development organization plan and Stage 02 requirements |
| 8 | `a02ccbb54f57f7c3989d39ddc974193f7110282e` | Add Product Bible Edition 1.4 — baseline of record |
| 9 | `b67de85e261cfb0fedaa09041729922f86a2c119` | Add Product Bible source corpus and prior editions |
| 10 | `4e1bbef3ea94c6a329ca328b3f243b59d8a4b9c6` | Add WORLD FORGE v3.6 — package and documentation |
| 11 | `e7f849366b9890e6a547a9195aa0fe6d45a4a044` | Add WORLD FORGE specialist manifest |
| 12 | `56924573f7f03d97694343f1b32bbd80313ebee7` | Add WORLD FORGE example tasks |
| 13 | `7b5566f62420c40675f5538fbc4b4c4961d834db` | Add WORLD FORGE Founder Dashboard |
| 14 | `524ac7d86349048f716ceafcbf5fb65ffdfc7f69` | Add live Docker acceptance harnesses (opt-in, not yet run) |
| 15 | `3875d2a5f7f8772a8e1335573bd97671deea9e93` | Add WORLD FORGE v3.6 source |
| 16 | `76c53d45a06f27b1d9a2944f01b4eb6bf97f6024` | Add WORLD FORGE v3.6 test suite (200 tests) |
| 17 | `1a9aae643417c95761da30ec570f648b602a0227` | Add WORLD FORGE v1.1 reference tree — package and documentation |
| 18 | `24431d5779e246a5e0e85d02439c0d9b8ff3c48b` | Add WORLD FORGE v1.1 reference tree — specialist manifest |
| 19 | `dfa1082eb362833e760ddf2ec02dddc62f5d20fd` | Add WORLD FORGE v1.1 reference tree — example tasks |
| 20 | `fc5e7e11802bfa79b5cbcddedac951e8fc486a5b` | Add WORLD FORGE v1.1 reference tree — dashboard |
| 21 | `2b7316a82f2b451ef3acdf1657c053aa6bdafa6c` | Add WORLD FORGE v1.1 reference tree — source |
| 22 | `850f595cdbee9c0cb6f2fb639380feeb52014401` | Add WORLD FORGE v1.1 reference tree — tests |
| 23 | `3a2cdc39652afc014c80a57c163cc32d948a2e82` | Update README — WORLD FORGE v3.6 is the verified baseline (A-36) |
| 24 | `2ed441da0948f90b0053ca4ec61034d9be52bd3c` | Update development status — v3.6 verified baseline (A-36) |
| 25 | `541e608d500c8e21af74a186071486ae23f08e69` | Register A-36 — WORLD FORGE v3.6 verified; repository established |

Migration method, for the record: the GitHub App installation available
to the migration held Contents read but not write (two snapshot pushes
were refused, 403), so the tree was seeded by verified web upload through
the Founder's signed-in session, in per-directory batches, and read back
through the connector. The founder-decision register entry for this
baseline is **A-36**; the acceptance evidence is registered as **A-37**
in `docs/decisions/EDITION-1.5-AMENDMENT-REGISTER.md`.

## The gate this manifest does not open

This manifest certifies the **repository baseline**. Stage 02 — the first
controlled implementation assignment — is authorized only by the
Founder's acceptance decision on this evidence. Until then, no product
behaviour is implemented and the application remains greenfield.

---

## Post-baseline addendum — 23 November 2026

The certification above is unchanged and stands as written for revision
`541e608…`. What has happened since, recorded here so this manifest is
not mistaken for the current state:

- **Repository visibility:** the repository was made **public** by the
  Founder's explicit decision (register A-62, 22 November 2026). The
  "(private)" designation in the header above is historical.
- **Stage 02 implemented and accepted:** the vertical slice was built
  under A-43, accepted at A-48, frozen at A-49 (accepted application
  commit `ba2a1fca94f0defa6afa4076c0b003a1675f5996`), and published to
  this repository. The "Product application: Greenfield" row in the
  table above describes the baseline revision only.
- **Register:** the Edition 1.5 amendment register now runs through
  **A-72** (`docs/decisions/EDITION-1.5-AMENDMENT-REGISTER.md`).
- **Stage 03:** charter approved (A-51); G1 package accepted bounded
  and filed at `83a300f…` (A-57); G3 design package and boards filed
  23 November 2026 (E1, gate acceptance pending).
- **Backend evidence:** one Founder-authorized Actions run of the
  Stage 02 evidence workflow passed 31/31 (run 45099666648); the
  artifact is preserved in the project archive (A-66/A-67).
- **Repository HEAD at the opening of the 23 November 2026 publication
  round:** `e824e90fa4b223321567fba44314adf5c4e6b84e` (36 commits). The
  round's resulting HEAD is recorded in register A-73.
- **Live Docker behaviour remains NOT verified**, exactly as the
  certification above states.
