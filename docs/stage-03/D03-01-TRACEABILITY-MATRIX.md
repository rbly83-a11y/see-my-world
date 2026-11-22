# SEE MY WORLD — Stage 03 — D03-01: Experience Requirements and Traceability Matrix

> **Deliverable ID:** D03-01 · **Version:** 1.1 · **Owner:** Product Architect · **Status:** Revised per G1-AUD remediation — Draft for re-audit · **Associated requirements:** SEE MY WORLD Product Bible Edition 1.4; CORE-MVP-PRD (57 requirements); Stage 02 architecture proposal Rev.1 + approval addendum; SLICE-BUILD-REPORT incl. A-47 remediation; Phase Zero CANONICAL_REQUIREMENTS (42 invariants) · **Verification method:** author self-check against cited sources (E1) · **Review decision:** Pending
>
> **Change note (v1.1):** Revised under register A-54 against findings G1-AUD-01…07 (classification corrections AUD-02/03/06; boundary corrections AUD-01/05/07; journey-completeness dependencies AUD-04). See G1-REMEDIATION-REPORT.md for before/after per finding.

**Evidence discipline.** This is author-produced, self-checked work — evidence level **E1** under the Stage 03 charter (§10). It is **not** independently verified (E3) and **not** Founder-approved / Founder-accepted (E4). No row in this matrix resolves, prejudges, or works around the open founder questions **Q-09**, **Q-01/D-34**, or **Q-21**. Where a requirement is blocked by one of those questions, the matrix records the block and stops.

**How to read the columns.** *Governing source* = PRD ID plus the Bible chapter/section as traced in the PRD itself. *Scope classification* uses the charter §4 definitions: **Existing** — supported by an approved requirement or accepted implementation; **Prototype-only** — simulated for evaluation, without claiming backend functionality; **Deferred** — requires future authorization or an unresolved governance decision. *Evidence status* is kept separate from classification (following the architecture proposal §5.2 three-field discipline): a requirement can be Specified in the PRD, excluded from Stage 02, and Prototype-only in Stage 03 all at once. "Implemented+accepted in Stage 02" means only what SLICE-BUILD-REPORT §3 records as exercised by the accepted implementation (initial build 16/16, A-47 remediation 21/21, Stage 02 acceptance A-48 — limited to that commit and the synthetic-fixture scope; not production certification). The accepted implementation is a service/API surface with no shipped user interface: an **Existing** classification in this matrix must never be read as implying that a user-facing screen exists. Screen-level presentation classifications live in D03-02 v1.1, where no screen is classified Existing as a user-facing screen; an Existing requirement here means the underlying operation/behaviour is implemented and accepted.

**Workstreams (charter §4):** WS-01 Experience architecture · WS-02 Design system · WS-03 World and Studio experience · WS-04 Atlas experience · WS-05 Privacy and sharing · WS-06 Immersive experience · WS-07 Research and accessibility · WS-08 Governance and handoff.

---

## 1. The 57 PRD requirements (CORE-MVP-PRD)

### 1.1 Step A1 — First Light (CORE-FL)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-FL-01 | Minimal seed | PRD CORE-FL-01; Bible Ch. 9; Ch. 37 | WS-01, WS-03 | Prototype-only | Specified only | — |
| CORE-FL-02 | Deliberate seed only | PRD CORE-FL-02; Bible Ch. 9; Ch. 10 | WS-01, WS-03 | Prototype-only | Specified only | — |
| CORE-FL-03 | Disclosed, deliberately arguable draft | PRD CORE-FL-03; Bible Ch. 9; Ch. 10 | WS-01, WS-03 | Prototype-only | Specified only | — |
| CORE-FL-04 | Draft Selector fences | PRD CORE-FL-04; Bible Ch. 9 ("Bootstrap fences"); Ch. 10; Inv. 19 | WS-01, WS-03, WS-05 | Prototype-only | Specified only | — |
| CORE-FL-05 | Rapid correction pass | PRD CORE-FL-05; Bible Ch. 9; Ch. 7 | WS-01, WS-03 | Prototype-only | Specified only | — |
| CORE-FL-06 | Whole-draft-wrong recovery | PRD CORE-FL-06; Bible Ch. 9 (recovery U03, adopted) | WS-01, WS-03 | Prototype-only | Specified only | — |
| CORE-FL-07 | Draft Survival as diagnostic only | PRD CORE-FL-07; Bible Ch. 9; Ch. 37 | WS-01, WS-07, WS-08 | Deferred | Specified only (metric) | Q-33 (as a quality gate) |
| CORE-FL-08 | Draft Selector scoring term Q | PRD CORE-FL-08; Bible App. C (A-03), App. D (D-38) | WS-01, WS-08 | Deferred | Concept | Q-37 |

*Note on FL-01…06:* SLICE-BUILD-REPORT §3 records CORE-FL-* as "not exercised: the World starts empty, OQ-4", and §5 lists "First Light draft generation" as unbuilt by design. The accepted Stage 02 path is an empty World plus Studio declaration. Any First Light draft shown in Stage 03 is therefore **end-to-end simulated** — Prototype-only, with no backend claim.

### 1.2 Step A2 — Owner correction (CORE-COR)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-COR-01 | The four v1 operators, with frozen arithmetic | PRD CORE-COR-01; Bible Ch. 7 §7.1–7.2; Ch. 6 §6.2 | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-02 | BOOST-to-DECLARED under v1 as specified | PRD CORE-COR-02; Bible Chs. 7, 25; App. D D-34 | WS-03, WS-08 | Existing — **partial:** v1 portion implemented; final semantics Deferred | Implemented+accepted in Stage 02 (v1 portion only) | Q-01/D-34 (final semantics) |
| CORE-COR-03 | REFUTED guard and explicit restoration | PRD CORE-COR-03; Bible Ch. 7 §7.3; Chs. 22 §22.4, 27 §27.3 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-04 | Known defect carried, not patched (BOOST from 0 yields 0) | PRD CORE-COR-04; Bible Ch. 7 §7.3 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 | — (Q-32 touches v2 only) |
| CORE-COR-05 | Deterministic reducer invocation | PRD CORE-COR-05; Bible Chs. 22 §22.1/§22.3, 25 §25.2–25.5; Inv. 5 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-06 | Receipts | PRD CORE-COR-06; Bible Ch. 3 ("Receipt"); Ch. 25 §25.3; Ch. 7 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-07 | Canonical evaluation order and tidal decay | PRD CORE-COR-07; Bible Chs. 8 §8.1, 25 §25.8; Inv. 12 | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-08 | Three distinct owner choices kept distinct | PRD CORE-COR-08; Bible Chs. 22 §22.4, 27 §27.4–27.5 | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-COR-09 | Complete provenance transition table | PRD CORE-COR-09; Bible Chs. 7, 25, 27 (principal transitions only) | WS-03, WS-08 | Deferred | Specified only (incomplete — gap A02) | Q-06 |
| CORE-COR-10 | Edge corrections | PRD CORE-COR-10; Bible Chs. 19 (as cited in Ch. 25 §25.7), 22 §22.4, 25 §25.7 | WS-03, WS-04 | Deferred | Specified only (command contract); excluded from Stage 02 with edges, OQ-7 | Q-07 (weighting/decay portion) |

*Note on COR-10:* the architecture proposal §5.2 recorded this stage as "Partial — commands only, per OQ-7"; the built slice in fact excluded edges in any form (SLICE-BUILD-REPORT §3: "CORE-COR-10 (excluded with edges, OQ-7)"; §5: "edges in any form (OQ-7)" unbuilt). The matrix follows the build report — the later, evidence-bearing record — and classifies COR-10 Deferred. See §5, Disagreement D-3.

### 1.3 Step A3 — Private World (CORE-PW)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-PW-01 | Private by default, single owner | PRD CORE-PW-01; Inv. 1; Bible Ch. 17 §17.1; Ch. 3 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-02 | Node model: five dimensions, no confidence field | PRD CORE-PW-02; Bible Ch. 6, §6.1; Inv. 20 (in part) | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-03 | World State Contract: three states kept independent | PRD CORE-PW-03; Bible Ch. 24 §24.1 (World State Contract) | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-04 | Five information categories kept separate | PRD CORE-PW-04; Bible Ch. 24 §24.1, §24.3 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-05 | The Worldprint is never shared | PRD CORE-PW-05; Bible Ch. 3 ("Worldprint"); Inv. 15; Ch. 14 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-06 | Event replay and the Five Laws of Event Integrity | PRD CORE-PW-06; Bible Ch. 26 §26.1–26.5; Inv. 17 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-PW-07 | Map rendering semantics | PRD CORE-PW-07; Bible Ch. 12 §12.1–12.4; Ch. 3 ("World Map") | WS-02, WS-04, WS-06, WS-07 | Prototype-only | Concept (Cartographic Engine: Concept, Bible Ch. 12) | — |
| CORE-PW-08 | Deletion and erasure | PRD CORE-PW-08; Bible Ch. 26 §26.6–26.7; Inv. 16 | WS-03, WS-05, WS-08 | Existing — **partial:** logical-deletion mechanics implemented; retention periods Deferred | Implemented+accepted in Stage 02 (mechanics / logical deletion only; see also C-02, §2.2) | Q-13 (periods portion) |
| CORE-PW-09 | Persistence is a candidacy, not a confirmation | PRD CORE-PW-09; Bible Ch. 24 §24.2 | WS-03, WS-08 | Deferred | Specified only as candidacy; interim-stack portion exercised in Stage 02 does not change this classification | Q-21 (gated by Q-43 in the PRD) |

*Note on PW-09:* SLICE-BUILD-REPORT §3 lists PW-09 among IDs exercised, qualified in the same report (§5) as the provisional SQLite adapter behind the storage port, with "production persistence (Q-21)" unbuilt. Exercising an interim stack is not confirmation of production persistence; the requirement as written — confirmation of the final persistence model — remains Deferred on Q-21. This matrix does not prejudge Q-21.

### 1.4 Step A4 — Bounded Lens (CORE-LENS)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-LENS-01 | Lens as explicit selection; nothing disclosed except through a Lens | PRD CORE-LENS-01; Bible Ch. 17 §17.1–17.2 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-LENS-02 | Literal preview and the Perspective Passport | PRD CORE-LENS-02; Bible Ch. 17 §17.2, §17.7 | WS-05, WS-01 | Existing — **partial:** preview portion implemented (preview = the served payload itself); Perspective Passport specified only | Implemented+accepted in Stage 02 (preview portion); Specified only (Passport) | — |
| CORE-LENS-03 | Three resolutions as a pure function over the Atlas | PRD CORE-LENS-03; Bible Ch. 17 §17.3; Ch. 18 §18.2 step 5 | WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 (over fixed synthetic fixtures — see LENS-04 note) | — |
| CORE-LENS-04 | The eight-step compilation sequence, server-side | PRD CORE-LENS-04; Bible Ch. 18 §18.1–18.2; Inv. 28 | WS-05, WS-08 | Prototype-only | Specified only — compiler contract specified, never executed over owner data; fixtures instead (R-01) | Real compilation gated on Q-09 via CORE-LENS-08 |
| CORE-LENS-05 | Pilot rule: testified material only | PRD CORE-LENS-05; Inv. 20; Inv. 13; Bible Ch. 17 §17.2; Ch. 18 §18.2 step 3 | WS-05 | Existing | Implemented+accepted in Stage 02 (fixtures exclude PROPOSED/REFUTED) | — (Q-36 noted in PRD for coastline disclosure) |
| CORE-LENS-06 | Disclosure eligibility | PRD CORE-LENS-06; Bible Ch. 18 §18.4 | WS-05 | Prototype-only | Specified only — compiler contract specified, never executed over owner data | Real compilation gated on Q-09 via CORE-LENS-08 |
| CORE-LENS-07 | Revocation and expiry fail closed, server-side | PRD CORE-LENS-07; Bible Ch. 17 §17.4; Inv. 4, 37 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-LENS-08 | Field-level disclosure schema per resolution | PRD CORE-LENS-08; Bible Chs. 18, 33 (semantics/eligibility only; schema owed, gap S01) | WS-05, WS-08 | Deferred | Specified only (schema absent — see Gap G-02) | **Q-09** |
| CORE-LENS-09 | Audience, expiry, and resharing control | PRD CORE-LENS-09; Bible Chs. 17, 22 §22.2; Ch. 3 | WS-05 | Existing — **partial:** grants/expiry implemented; forwarding Deferred | Implemented+accepted in Stage 02 (grants/expiry portion only) | Q-10 (forwarding portion) |

*Note on LENS-03/04/06:* Stage 02 served pre-approved synthetic fixture payloads (P-SYN-CONTINENT / COAST / HARBOUR) prepared against the compiler contract; it did not run general compilation over owner data (SLICE-BUILD-REPORT §3, §5; proposal §3/§5.2, R-01). LENS-03 is therefore Existing only in its fixture form. LENS-04 and LENS-06 remain Prototype-only in Stage 03: the contract may be designed and simulated, but no Stage 03 deliverable may claim live compilation, and general compilation remains gated on Q-09. See §5, Disagreement D-2.

### 1.5 Step A5 — Visitor Perspective (CORE-VIS)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-VIS-01 | Compiled projection only | PRD CORE-VIS-01; Bible Ch. 18 §18.1; Ch. 19 §19.1 | WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 (fixture projection, named-recipient grants) | — |
| CORE-VIS-02 | Anonymous opening where the grant permits | PRD CORE-VIS-02; Bible Ch. 19 §19.1 | WS-04, WS-05 | Deferred — pending separate Founder reconciliation and authorization (G-17) | Specified only — **NOT exercised in Stage 02** (see tension note below) | G-17 / Founder reconciliation (anonymous opening vs named-recipient binding) |
| CORE-VIS-03 | Finite visit | PRD CORE-VIS-03; Bible Ch. 19 §19.1 | WS-04, WS-01 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-VIS-04 | "Why is this here?" at resolution | PRD CORE-VIS-04; Bible Chs. 18 §18.5, 19 §19.2 | WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 — partial in scope: explanation (whyHere) content is present in the HARBOUR fixture payload only; CONTINENT/COAST payloads carry no whyHere field | — |
| CORE-VIS-05 | Views are not endorsements; visitor behaviour never testifies | PRD CORE-VIS-05; Inv. 8; Bible Ch. 19 §19.3; Ch. 17 §17.5 | WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-VIS-06 | Presentation cannot add information | PRD CORE-VIS-06; Inv. 22; Inv. 42; Bible Part VIII | WS-02, WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| CORE-VIS-07 | Exact visitor flows (anonymous vs registered) | PRD CORE-VIS-07; gap U05 (flows not specified for Core) | WS-01, WS-04, WS-07 | Prototype-only | Specified only (behavioural requirements CORE-VIS-01…06; flows absent) — the anonymous-opening component is Deferred per G-17/AUD-01, while the flow-specification gap under Q-05 remains | Q-05 (ratification of flows) |
| CORE-VIS-08 | Abuse flows for a shared Perspective | PRD CORE-VIS-08; Bible Ch. 32 (trigger); gap D05 | WS-05, WS-08 | Deferred | Specified only (recorded as blocking a wider social pilot, not the closed pilot) | Q-17 |

*Tension — CORE-VIS-02 (flagged, not smoothed):* the PRD specifies anonymous opening where the grant permits, and the architecture proposal §5.2 recorded VIS-02 as "In slice, where the grant permits". The accepted Stage 02 implementation does the opposite for its actual grants: invitations are **named-recipient only** (OQ-8), and A-47 finding F-01 remediation *added* enforced recipient-identity binding on every visitor request. SLICE-BUILD-REPORT §3 accordingly does **not** list VIS-02 among exercised IDs. Anonymous opening is therefore classified **Deferred**: named-recipient binding (OQ-8, enforced per A-47 F-01) is the **only** accepted access model, and anonymous opening must not be prototyped as if live or described as available; it may be illustrated only as clearly labelled conceptual material per charter §4 / D03-04 v1.1 B-07. This classification records the current accepted state and does **not** decide the future of anonymous access — G-17 remains open and its resolution is a Founder matter. See §5, Disagreement D-1, and Gap G-17.

*Note on VIS-07:* Stage 03 designs prototype flows (that is WS-01/WS-04 work under this charter); **ratification** of the exact flows is Q-05, which remains open. A designed flow is not a ratified flow.

### 1.6 Step A6 — Seed (CORE-SEED)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-SEED-01 | Deliberate save only; never silently imported | PRD CORE-SEED-01; Bible Ch. 19 §19.4; Ch. 3 | WS-04, WS-05 | Prototype-only | Specified only; excluded from Stage 02 slice | — |
| CORE-SEED-02 | Seed content and its ceiling | PRD CORE-SEED-02; Bible Chs. 3, 19 §19.4 | WS-04, WS-05 | Prototype-only | Specified only; excluded from Stage 02 slice | — |
| CORE-SEED-03 | A saved reference is not a copy and not a licence | PRD CORE-SEED-03; Inv. 40 | WS-04, WS-05 | Prototype-only | Specified only; excluded from Stage 02 slice | — |
| CORE-SEED-04 | Effect of revocation on a held Seed | PRD CORE-SEED-04; Bible Chs. 3, 19 §19.4, §17.4 | WS-04, WS-05 | Prototype-only | Specified only; excluded from Stage 02 slice (its revocation facts were tested at grant level, S02-05 — proposal §5.2 note) | — |
| CORE-SEED-05 | Seed as immutable reference with attribution | PRD CORE-SEED-05; Bible Ch. 3 ("Seed"); priority decision 7 (adopted) | WS-04 | Prototype-only | Specified only; excluded from Stage 02 slice | — |
| CORE-SEED-06 | Seeds on the owner's map surface | PRD CORE-SEED-06; Bible Ch. 12 §12.2, §12.4 (rendering Concept under CORE-PW-07) | WS-04, WS-02 | Prototype-only | Specified only (definition); rendering Concept | — |
| CORE-SEED-07 | Handoff to SEE YOURS without importing owner state | PRD CORE-SEED-07; Bible Ch. 19 §19.5 | WS-01, WS-04 | Prototype-only | Specified only; excluded from Stage 02 slice (conversion contract beyond Ch. 19 is Gap G-05) | — |

*Note on SEED-01…07:* all seven are Specified and unblocked in the PRD, and all seven were **excluded** from the Stage 02 slice (proposal §5.2; SLICE-BUILD-REPORT §3, §5). They sit outside the five primary Stage 03 journeys as backend behaviour; Stage 03 may simulate the save/handoff experience end-to-end with no backend claim.

### 1.7 Step A7 — SEE YOURS (CORE-SY)

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CORE-SY-01 | Born from chosen Seeds only | PRD CORE-SY-01; Bible Ch. 19 §19.5 | WS-01, WS-03 | Deferred | Specified only (step status Concept-to-Specified); excluded from Stage 02 | Future authorization (no second World in accepted scope) |
| CORE-SY-02 | Correction through the visitor's own First Light | PRD CORE-SY-02; Bible Ch. 19 §19.5; Steps A1–A2 | WS-01, WS-03 | Deferred | Specified only; excluded from Stage 02 | Future authorization |
| CORE-SY-03 | Never a copy of the owner's private model | PRD CORE-SY-03; Bible Ch. 19 §19.5; Inv. 40, 15 (in part) | WS-03, WS-05 | Deferred | Specified only; excluded from Stage 02 | Future authorization |
| CORE-SY-04 | Session claiming | PRD CORE-SY-04; Bible Ch. 19 §19.6 | WS-03, WS-05 | Deferred | Specified only; excluded from Stage 02 | Future authorization |
| CORE-SY-05 | Success measurement for this step | PRD CORE-SY-05; Bible Ch. 1 (hypothesis); Ch. 37 | WS-07, WS-08 | Deferred | Specified only (hypotheses; no thresholds set) | Q-29, Q-35 |
| CORE-SY-06 | Pilot population for this step | PRD CORE-SY-06; gap P01 | WS-07, WS-08 | Deferred | Specified only (population undefined) | Q-02 |

---

## 2. Additional row groups

### 2.1 (a) Experience/privacy-relevant canonical invariants (CANONICAL_REQUIREMENTS.md — 42 invariants, verbatim from Bible Edition 1.4, Appendix B)

Included individually below are the invariants most directly load-bearing for the Stage 03 Core experience. Wording in the Requirement column is the invariant's own opening clause, not a paraphrase for navigation.

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| INV-1 | Private by default | CANONICAL_REQUIREMENTS Inv. 1; carried at CORE-PW-01 | WS-03, WS-05 | Existing | Implemented+accepted in Stage 02 (via CORE-PW-01) | — |
| INV-3 | Visitor access is only as broad as the Lens | Inv. 3; carried at CORE-LENS-01, CORE-VIS-01 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-4 | Revocation invalidates promised capabilities | Inv. 4; carried at CORE-LENS-07 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-5 | Idempotent writes do not duplicate under concurrency | Inv. 5; carried at CORE-COR-05 | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| INV-8 | Observation is not endorsement; inference is not identity; sharing is not consent to further processing | Inv. 8 (Ch. 23); carried at CORE-VIS-05 | WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-9 | Detail(Output) ≤ Resolution(Grant) | Inv. 9 (Ch. 18); carried at CORE-LENS-03/04, CORE-VIS-01 | WS-05 | Existing | Implemented+accepted in Stage 02 (fixture payloads; general compilation gated on Q-09) | Q-09 (general case) |
| INV-10 | Absence is not disagreement; unvisited territory never renders as difference | Inv. 10 (Ch. 20) | WS-04 | Prototype-only | Specified only — no Stage 02 requirement exercised it (Comparison is outside the adopted minimum journey, PRD §11) | — |
| INV-12 | Testimony is a weight of human action; it never decays; strength decays | Inv. 12 (Chs. 6–8); carried at CORE-COR-07 | WS-03 | Existing | Implemented+accepted in Stage 02 | — |
| INV-13 | A refuted topic's internal record is never disclosed through a Perspective | Inv. 13 (Ch. 6); carried at CORE-LENS-05 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-16 | Deleted Worlds do not return | Inv. 16 (Ch. 26); carried at CORE-PW-08 | WS-03, WS-05, WS-08 | Existing — partial: logical-deletion mechanics only; fulfilment periods Deferred | Implemented+accepted in Stage 02 (logical deletion only, C-02) | Q-13 (periods) |
| INV-17 | A replay mismatch never authorises overwriting owner-authoritative state; projections are quarantined | Inv. 17 (Ch. 26); carried at CORE-PW-06 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 (strengthened by F-03, §2.2) | — |
| INV-20 | In the pilot, no Perspective contains a PROPOSED or WITNESSED node | Inv. 20 (Chs. 17–19); carried at CORE-LENS-05, CORE-PW-02 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-22 | Presentation compilation cannot increase the information in the authorised projection | Inv. 22; carried at CORE-VIS-06 | WS-02, WS-04, WS-05 | Existing | Implemented+accepted in Stage 02 | — |
| INV-28 | Compile, don't hide — exclusion at compilation, server-side | Inv. 28; carried at CORE-LENS-04 | WS-05, WS-08 | Prototype-only | Specified only as a general compiler property — Stage 02 served fixtures prepared against it; general compilation never executed over owner data | Q-09 (general case) |
| INV-34 | The existence of a private memory is itself undisclosable | Inv. 34 | WS-05 | Prototype-only | Specified only — stated for the Core privacy boundary; its home material (private memory contributions) is a later pillar (see §3) | — |
| INV-36 | Runtime events are not permission grants; access is subject to current authorisation at request time | Inv. 36; related to CORE-VIS-02/VIS-05 return-visit rule | WS-05 | Existing | Implemented+accepted in Stage 02 in its request-time-check form (grant checked at request time; strengthened by F-01) | — |
| INV-37 | Indexes and caches are not side paths; revocation invalidates them with the public projection | Inv. 37; carried at CORE-LENS-07 | WS-05 | Existing | Implemented+accepted in Stage 02 (`no-store` asserted, S02-05) | — |
| INV-40 | A saved reference is not a copy and not a licence | Inv. 40; carried at CORE-SEED-03, CORE-SY-03 | WS-04, WS-05 | Prototype-only | Specified only — Seed behaviour was excluded from Stage 02 | — |
| INV-42 | A manifest is not an authorisation token; access checks occur at request time | Inv. 42; carried at CORE-VIS-06 | WS-05 | Existing | Implemented+accepted in Stage 02 | — |

**Scope note — remaining invariants.** The other 23 invariants (2, 6, 7, 11, 14, 15, 18, 19, 21, 23–27, 29–33, 35, 38, 39, 41) still bind the system wherever they apply, but they are not given individual rows here because their primary load falls on other pillars or cross-cutting concerns outside Stage 03's Core-experience scope — schools/education (24–27), immersion and inhabitants (29–30), memory/Living Memory (31–35, 38, 39 in their home context), literary/paid Worlds (21, 23), and provider/Atlas mechanics (7, 18, 19). Several are already carried inside §1 rows (e.g. Inv. 11, 14, 15, 19 are cited in the governing sources of CORE-COR, CORE-PW-05, and CORE-FL-04). Exclusion from an individual row here is a scoping decision for this matrix, **not** a waiver of any invariant.

### 2.2 (b) Stage 02 acceptance outcomes not fully captured by a PRD ID

Source: SLICE-BUILD-REPORT §7 (A-47 remediation) and §2/§3 (addendum conditions C-01, C-02); architecture proposal approval addendum; DR-1 / OQ decisions as recorded in the proposal and build report.

| ID | Requirement / outcome | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| A47-F-01 | Named-recipient binding enforced on every visitor request — token possession alone is not recipient identity; wrong recipient, spoofed recipient claim, missing or forged visitor credential are all ordinary authorization failures, denied with the identical generic 403. Quarantine is a distinct response class, not part of this generic denial: a quarantined projection is checked first and returns 503 PERSPECTIVE_UNAVAILABLE (see A47-F-03) | SLICE-BUILD-REPORT §7 F-01; strengthens CORE-LENS-09 / CORE-VIS-01 | WS-05, WS-08 | Existing | Implemented+accepted in Stage 02 (21/21 after remediation; A-48 closed F-01) | — |
| A47-F-02 | Grant creation is atomic with projection creation (`createGrantWithProjection`, single transaction; failed projection write leaves neither) | SLICE-BUILD-REPORT §7 F-02; supports CORE-LENS-09 / CORE-PW-06 Atomicity | WS-05, WS-08 | Existing | Implemented+accepted in Stage 02 (A-48 closed F-02) | — |
| A47-F-03 | Replay quarantine persists across restart — in a fresh process after a MISMATCH quarantine the visitor perspective still returns the distinct quarantine response, 503 PERSPECTIVE_UNAVAILABLE (checked first, before ordinary authorization checks; not the generic 403 used for ordinary authorization failures) | SLICE-BUILD-REPORT §7 F-03; supports CORE-PW-06 / Inv. 17 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 (A-48 closed F-03) | — |
| A47-F-04 | Transition fault coverage — deterministic fault injection at each internal write step of `appendTransition()` recovers to exactly the last committed revision | SLICE-BUILD-REPORT §7 F-04; supports CORE-PW-06 / CORE-COR-05 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 (A-48 closed F-04; no mid-service SIGKILL probe — recorded limitation in the report) | — |
| ADD-C-01 | S02-12, the future Lens Compiler test, was **not implemented** and is not counted in any Stage 02 suite | SLICE-BUILD-REPORT §2, §7; addendum C-01; supports CORE-LENS-04/08 | WS-05, WS-08 | Deferred | Not implemented | Q-09 |
| ADD-C-02 | Deletion reporting is **logical deletion only**; physical erasure is not claimed and was not tested | SLICE-BUILD-REPORT §2, §7; addendum C-02; supports CORE-PW-08 / Inv. 16 | WS-05, WS-08 | Existing (as a reporting boundary) | Implemented+accepted in Stage 02 as the stated boundary | Q-13 (periods/erasure fulfilment) |
| OQ-1 (DR-1) | "Territory" is a provisional visual term only | Proposal / build report register (DR-1, OQ-1) | WS-01, WS-04, WS-08 | Existing (as a terminology boundary) | Accepted decision within DR-1 bounds (A-42/A-43) | — |
| OQ-2 (DR-1) | "Studio" = correction/authoring only | Proposal / build report register (DR-1, OQ-2) | WS-01, WS-03, WS-08 | Existing (as a terminology boundary) | Accepted decision within DR-1 bounds | — |
| OQ-4 (DR-1) | First-slice World starts empty and owner-controlled | Proposal / build report register (DR-1, OQ-4); SLICE-BUILD-REPORT §3 | WS-03, WS-08 | Existing | Implemented+accepted in Stage 02 | — |
| OQ-5 (DR-1) | Explorer serves owner + authorized visitor operations under separate access rules (service-level access rules in the accepted implementation; no shipped user interface — see "How to read the columns") | Proposal / build report register (DR-1, OQ-5) | WS-04, WS-05, WS-08 | Existing | Implemented+accepted in Stage 02 | — |
| OQ-7 (DR-1) | Edges excluded from slice 1 | Proposal / build report register (DR-1, OQ-7); SLICE-BUILD-REPORT §5 | WS-04, WS-08 | Deferred (edges, as a capability) | Excluded by accepted decision | Q-07 |
| OQ-8 (DR-1) | Audience = named-recipient Invitation only, never a public link | Proposal / build report register (DR-1, OQ-8); SLICE-BUILD-REPORT §4 (grant credentials) | WS-05, WS-08 | Existing | Implemented+accepted in Stage 02 (strengthened by F-01) | — |

*Denial discipline (AUD-07) — two response classes, never conflated:* the accepted visitor-perspective operation distinguishes (1) **ordinary authorization failures** — bad token, wrong recipient, missing or forged credential, revoked, expired, or cross-World access — all of which return the **identical generic 403**, and (2) **quarantine**, which is checked **first** and returns the **distinct 503 PERSPECTIVE_UNAVAILABLE**. Any summary in this matrix of visitor denial follows that distinction.

### 2.3 (c) Charter-level Stage 03 requirements

Source: STAGE-03-CHARTER-A51.md.

| ID | Requirement | Governing source | Workstream(s) | Scope classification | Evidence status | Blocking question |
|---|---|---|---|---|---|---|
| CH-§4 | Every proposed capability shall be classified before design implementation as Existing / Prototype-only / Deferred; a deferred capability may be illustrated only when clearly labelled conceptual | Charter §4 (Scope classification) | WS-08 (all workstreams bound) | Existing (as a Stage 03 process requirement) | Specified in charter; this matrix is its G1 instrument (E1) | — |
| CH-§9-T | Traceability: 100% of prototype behaviours classified as existing, simulated, or deferred | Charter §9 (Acceptance criteria — Traceability) | WS-08 | Existing (as an acceptance requirement) | Proposed threshold in charter; not yet verified — verification is WS-07/WS-08 work at G4/G5 | — |
| CH-§9-S | State coverage: required empty, loading, failure, denial, expiry, revocation, and quarantine states represented; all five primary journeys demonstrable end to end | Charter §9 (Journey completeness; State coverage) | WS-01, WS-02, WS-07, WS-08 | Existing (as an acceptance requirement) | Proposed threshold in charter; state designs are deliverable D03-06 (G2) | — |
| CH-§10-A1 | Adversarial: interface/prototype must not treat possession of an invitation token as proof of recipient identity | Charter §10 (Mandatory adversarial scenarios) | WS-05, WS-07, WS-08 | Existing (verification requirement; backend behaviour accepted via F-01) | Verification requirement — to be exercised in Stage 03 review | — |
| CH-§10-A2 | Adversarial: must not show a Perspective to an unauthorized visitor | Charter §10 | WS-05, WS-07, WS-08 | Existing (verification requirement) | Verification requirement | — |
| CH-§10-A3 | Adversarial: must not display content after revocation or expiry | Charter §10 | WS-05, WS-07, WS-08 | Existing (verification requirement) | Verification requirement | — |
| CH-§10-A4 | Adversarial: must not expose sensitive details through denial messages or error states | Charter §10 | WS-05, WS-02, WS-07 | Existing (verification requirement) | Verification requirement | — |
| CH-§10-A5 | Adversarial: must not present a quarantined projection as available | Charter §10 | WS-05, WS-03, WS-07 | Existing (verification requirement) | Verification requirement | — |
| CH-§10-A6 | Adversarial: must not imply that logical deletion constitutes physical erasure | Charter §10; cf. ADD-C-02 | WS-05, WS-01, WS-07 | Existing (verification requirement) | Verification requirement | Q-13 (underlying periods) |
| CH-§10-A7 | Adversarial: must not misrepresent prototype-only capabilities as live functionality | Charter §10; charter §2 | WS-08, WS-07 (all workstreams bound) | Existing (verification requirement) | Verification requirement | — |
| CH-§10-E | Tests must identify whether they exercise simulated behaviour or an approved backend boundary; passing a mock-based test cannot establish backend security | Charter §10 (Verification and evidence requirements) | WS-07, WS-08 | Existing (as an evidence rule) | Charter rule; applies to every Stage 03 test claim | — |

---

## 3. Scope boundary note (required)

The following are **outside this matrix's Stage 03 Core-experience scope**. Their absence from the rows above is a scope boundary, recorded here with pointers — it is **not** a corpus gap and must not be read as one:

- **Meridian prototype requirements (MER-P-01…36)** — a separate document in the Stage 02 scope package (`MERIDIAN-PROTOTYPE-REQUIREMENTS.md`; 36 requirements, 10 blocked per the Stage 02 package record). Meridian is Release Track B, a controlled reference implementation with its own gates, and is not a Track A dependency (PRD §11). Its flows being separately specified does not fill Core's flow gap (see CORE-VIS-07 / Gap G-01).
- **The Bible's later-pillar material** — Literary Universes / Storyworld Engine, Classroom / Education, Era Worlds, Living Memory, and Living City (Release Track C, Platform Expansion; PRD §11). None may become a dependency of Track A launch. Invariants whose home material sits in these pillars are handled per the scope note in §2.1.
- **Layer 3 social forms** (World Swap, Shared Worlds) and **Algorithm Recipes** — Concept status, excluded from the pilot (PRD §11; Bible App. D, D-33; Ch. 3).
- **Comparison and the Encounter Engine as pilot features** — outside the adopted minimum journey, which ends at SEE YOURS (PRD §11).

---

## 4. Gaps — recorded, named, not smoothed

Each gap below is recorded in a cited source. No gap has been filled in by this matrix, and no gap is presented as resolved.

- **G-01 — Exact screen flows, wireflows, and error-state presentation for Core.** Behaviour and API error semantics are specified (Bible Ch. 22 §22.3); the flows for owner, anonymous visitor, registered visitor, and returning owner are not (Q-05) — and the anonymous-opening component is additionally Deferred per G-17/AUD-01, not merely unspecified. Covers pre-seed First Light screen content, Lens creation over an empty territory set, the visitor-facing revocation-mid-session interruption, and the SEE YOURS empty state. *Recorded at: PRD §12 G-01; CORE-VIS-07.*
- **G-02 — Field-level disclosure schema for Continent / Coast / Harbour (the Q-09 schema gap, S01).** Recorded in the PRD as "the single largest specification gap in Track A": without the schema the Compiler cannot be built or privacy-tested to acceptance. *Recorded at: PRD §12 G-02; CORE-LENS-08; `MVP_SCOPE.md` Step A4 (as cited in the PRD).* This matrix does not invent the schema and does not prejudge Q-09.
- **G-03 — Forwarding and resharing behaviour.** Grants and expiry are specified; forwarding is not. *Recorded at: PRD §12 G-03; CORE-LENS-09 (Q-10).*
- **G-04 — Complete provenance transition table.** Principal transitions specified; the complete event × provenance table is owed and interacts with Q-01. *Recorded at: PRD §12 G-04; CORE-COR-09 (Q-06).*
- **G-05 — Seed→World conversion contract beyond Bible Ch. 19.** No separate contract exists in the corpus beyond Ch. 19's journey definition. *Recorded at: PRD §12 G-05; CORE-SEED-07.*
- **G-06 — Retention, deletion, export, and backup periods.** Mechanics specified; periods undecided (Q-13). Without them no privacy policy and no deletion-lineage acceptance test can be written. *Recorded at: PRD §12 G-06; CORE-PW-08.*
- **G-07 — Visitor abuse flows (report / block / mute / access restriction).** Unspecified (Q-17); required before wider social discovery (Bible Ch. 32). *Recorded at: PRD §12 G-07; CORE-VIS-08.*
- **G-08 — Home / first-screen priorities and the primary reason to open the app.** Open as Q-03. *Recorded at: PRD §12 G-08.*
- **G-09 — Platform-wide accessibility and device-support standard.** No adopted standard exists for Track A (Q-28). The Bible Ch. 3 non-visual-equivalent requirement is specified and carried at CORE-PW-07; a measurable standard to test it against is not. (The charter §9 WCAG 2.2 AA threshold is a Stage 03 project threshold; the PRD expressly does not import Meridian's WCAG target into Track A.) *Recorded at: PRD §12 G-09; PRD §10 note on Q-28.*
- **G-10 — Complete API contracts.** Endpoints cited are only those the Bible specifies; OpenAPI schemas, auth rules beyond the session-context principle, and versioning are at contract-sketch level (Q-22). *Recorded at: PRD §12 G-10.*
- **G-11 — Operating limits and recovery objectives.** Latency, capacity, uptime, backup recovery, monitoring, and incident-response targets are undefined (Q-23); the replay/recovery *behaviours* of Bible Ch. 26 §26.5 are specified and carried at CORE-PW-06. *Recorded at: PRD §12 G-11.*
- **G-12 — External AI provider data terms.** Gateway safety rules specified (Bible Ch. 31); provider-specific consent, minimisation, vendor restrictions, logs, and retention are not (Q-14). *Recorded at: PRD §12 G-12.*
- **G-13 — Differential-probing test programme.** Disclosure eligibility (CORE-LENS-06) is the recorded primary mitigation; the probing programme is owed and cannot run pre-code (Q-11). *Recorded at: PRD §12 G-13.*
- **G-14 — Draft composition beyond the recorded hypothesis.** The 8-proposal composition in Bible Ch. 9 is a hypothesis, "not a mandatory production setting", and is therefore not a requirement. *Recorded at: PRD §12 G-14.*
- **G-15 — Interrupted-session recovery for SEE YOURS beyond grant expiry.** Bible Ch. 19 §19.6 specifies claiming and expiry; richer resumption is not specified. *Recorded at: PRD §12 G-15; CORE-SY-04.*
- **G-16 — Pilot thresholds and definitions generally.** Draft Survival thresholds (Q-33), the exact meaningful-visit definition (Q-35), and pilot success/stop conditions (Q-29, roles at Q-27) are all open; the PRD sets no numeric pilot target anywhere. *Recorded at: PRD §12 G-16.*
- **G-17 — CORE-VIS-02 anonymous opening vs Stage 02 named-recipient binding (conflict, not mere absence).** The PRD specifies anonymous opening where the grant permits; the accepted implementation binds every grant to a named recipient and, after A-47 F-01, enforces recipient identity on every request. No source reconciles anonymous opening with named-recipient-only Invitations (OQ-8). CORE-VIS-02 is now classified **Deferred** — pending separate Founder reconciliation and authorization (G-17) — and named-recipient binding is the only accepted access model; anonymous opening may be illustrated only as clearly labelled conceptual material per charter §4 / D03-04 v1.1 B-07. *Recorded at: PRD CORE-VIS-02; proposal §5.2 (VIS-02 "in slice"); SLICE-BUILD-REPORT §3 (VIS-02 absent from exercised IDs), §4/§7 (OQ-8, F-01).* Flagged in §1.5 and §5 (D-1). The conflict remains **open**: recording the Deferred classification records the current accepted state and does **not** resolve G-17 or decide the future of anonymous access. Resolution is a Founder matter; this matrix takes no position.
- **G-18 — No save/reload requirement exists in the PRD.** The PRD contains no numbered requirement for saving a World and reloading it as a user-facing behaviour. The behaviour was **operationalised by the architecture proposal and the build** — ledger persistence, save via the ledger, and fresh-process reopen with revision, digest, and grant state intact (SLICE-BUILD-REPORT §1, step sequence; test S02-08) — resting on CORE-PW-06 (event replay) rather than on any dedicated save/reload requirement. Stage 03 journeys that show save/reload therefore trace to PW-06 plus the accepted build, and the absence of a PRD-level requirement is recorded here rather than back-filled. *Recorded at: absence in CORE-MVP-PRD §§3–9 (checked against the full requirement list, PRD §13); operationalisation in SLICE-BUILD-REPORT §1–§3.*
- **G-19 — Experience dependencies with no specified mechanism (AUD-04).** Four named sub-items, each recorded as an unresolved dependency requiring a G2 decision; **no mechanism is specified or invented** for any of them. Cross-references: D03-03 v1.1 §8 C-1/C-4/C-5/C-6 and the dependency/handoff states added to the journeys in D03-03 v1.1.
  - (i) **Returning-owner re-entry / owner credential provisioning** — the owner principal is resolved from a server-side token mapping; credential provisioning and session re-entry are out-of-band and unspecified.
  - (ii) **Visitor-credential delivery to the named recipient and first-credential setup** — OWN-14 provisions owner-side; delivery is an out-of-band assumption; the A-48 qualification stands — the prototype registry does not establish secure credential delivery.
  - (iii) **Invitation delivery** — the token is shown once at creation; conveyance to the recipient is out-of-band and unspecified.
  - (iv) **Quarantine resolution workflow** — quarantine status is implemented at service level; who is told, what they can do, and how quarantine is lifted are unspecified — CORE-PW-06's "and investigate" has no workflow in the corpus. In its workflow aspect this sub-item is also flagged as a Founder matter per D03-03 v1.1 §8.1 C-4.

---

## 5. Disagreements found between the classification framework / sources

Flagged rather than silently followed, per the assignment:

- **D-1 — CORE-VIS-02.** Architecture proposal §5.2 records VIS-02 as "In slice, where the grant permits". SLICE-BUILD-REPORT §3 does not list VIS-02 as exercised, and the accepted grants are named-recipient only (OQ-8, F-01). **This matrix follows the build report** and classifies VIS-02 **Deferred** — pending separate Founder reconciliation and authorization (G-17). Named-recipient binding is the only accepted access model; anonymous opening is not prototypeable as if live and may be illustrated only as clearly labelled conceptual material per charter §4 / D03-04 v1.1 B-07. This classification records the current accepted state and does not decide the future of anonymous access — G-17 remains open. The proposal row is superseded by the build evidence.
- **D-2 — CORE-LENS-04 and CORE-LENS-06.** Architecture proposal §5.2 groups "CORE-LENS-01…07 — In slice". SLICE-BUILD-REPORT §3 expressly separates LENS-04/LENS-06 out: "the compiler contract is specified but not executed over owner data — fixtures instead, R-01". **This matrix follows the build report** and classifies both Prototype-only (with LENS-03 Existing only in fixture form, as noted in §1.4).
- **D-3 — CORE-COR-10.** Architecture proposal §5.2 records "Partial — commands only, per OQ-7". SLICE-BUILD-REPORT §3/§5 records edges excluded in any form. **This matrix follows the build report** and classifies COR-10 Deferred.
- **D-4 — CORE-PW-09 (minor, presentational).** SLICE-BUILD-REPORT §3 lists PW-09 among exercised IDs; the same report (§5) and the PRD classify production persistence as unconfirmed and blocked on Q-21. There is no substantive disagreement once the report's own qualifier ("interim-stack portion") is carried — which §1.3 does — but a reader of §3 alone would overstate the position. Recorded here so the qualifier is never dropped.
- No other disagreement was found between the assignment's classification framework and the sources: every other framework classification was verified against PRD status/blocking markers (§§3–10), proposal §5.2, and SLICE-BUILD-REPORT §3/§5/§7 and is carried as assigned.

---

## 6. Classification counts

**The 57 PRD requirements only** (additional row groups in §2 are counted separately and are not included here):

| Classification | Count | IDs |
|---|---|---|
| Existing | **26** | CORE-PW-01, 02, 03, 04, 05, 06, 08*; CORE-COR-01, 02*, 03, 04, 05, 06, 07, 08; CORE-LENS-01, 02*, 03, 05, 07, 09*; CORE-VIS-01, 03, 04, 05, 06 |
| Prototype-only | **17** | CORE-FL-01, 02, 03, 04, 05, 06; CORE-PW-07; CORE-LENS-04, 06; CORE-VIS-07; CORE-SEED-01, 02, 03, 04, 05, 06, 07 |
| Deferred | **14** | CORE-FL-07, 08; CORE-COR-09, 10; CORE-PW-09; CORE-LENS-08; CORE-VIS-02, 08; CORE-SY-01, 02, 03, 04, 05, 06 |
| **Total** | **57** | 8 FL + 10 COR + 9 PW + 9 LENS + 8 VIS + 7 SEED + 6 SY = 57 (matches PRD §13 count) |

\* Existing with a named partial/deferred component: CORE-COR-02 (final semantics Deferred — Q-01/D-34), CORE-LENS-02 (Perspective Passport specified only), CORE-LENS-09 (forwarding Deferred — Q-10), CORE-PW-08 (retention periods Deferred — Q-13). These four are counted once, under Existing, because their implemented portion is implemented+accepted; their deferred components are named in their rows and in the Deferred-relevant gap entries, and are **not** double-counted in the Deferred total.

**Additional row groups (not in the 57):** §2.1 — 19 invariant rows; §2.2 — 12 rows (4 A-47 findings, 2 addendum conditions, 6 OQ decisions); §2.3 — 11 charter rows (3 charter requirements + 7 adversarial scenarios + 1 evidence rule). Total additional rows: 42.

---

## 7. Judgment calls

Every classification below rests on interpretation rather than a direct source statement. All other classifications in §1 trace to a direct statement in the PRD, proposal §5.2, or SLICE-BUILD-REPORT §3/§5/§7.

1. **Workstream assignments (all rows).** No source maps PRD requirements to Stage 03 workstreams WS-01…WS-08. Assignments were inferred from the charter §4 workstream definitions (e.g. Lens/grant requirements → WS-05; correction/Studio requirements → WS-03). They are routing judgments for Stage 03 planning, not source facts.
2. **CORE-SY-01…04 as Deferred (rather than Prototype-only).** The PRD marks them Specified and unblocked, and the proposal §5.2 records them "Excluded — no second World". Deferred was chosen over Prototype-only because exercising them requires a second World — a capability outside accepted scope requiring future authorization — whereas SEED-01…07 can be simulated inside a single visitor journey. A Founder or Stage Director could reasonably reclassify SY-01…04 as Prototype-only for a purely simulated SEE YOURS walkthrough; the distinction is recorded here so that choice is visible.
3. **INV-10, INV-34, INV-36, INV-40, INV-28 classifications (§2.1).** The canonical list states the invariants but assigns no Stage 02 evidence or Stage 03 classification. INV-36 "Existing" rests on reading its request-time-check clause as the form exercised in Stage 02; INV-28 "Prototype-only" rests on the fixture-vs-general-compiler distinction in the build report. INV-10 and INV-34 "Prototype-only" rest on the absence of any exercising requirement in the PRD's adopted journey.
4. **CORE-VIS-07 as Prototype-only.** The PRD records the flows as blocked on Q-05 with no status label. Prototype-only was chosen because the charter authorizes Stage 03 to *design* prototype flows while ratification remains Q-05; classifying it Deferred would understate the authorized design work, and classifying the *ratification* as anything but open would prejudge Q-05.
5. **CORE-FL-07 as Deferred.** The PRD splits it: Specified as a metric, blocked as a quality gate (Q-33). Deferred was chosen because the only Stage 03-relevant use (a gate/threshold) is the blocked one; the diagnostic computation itself may be shown in a prototype without contradicting this classification.
6. **Charter rows CH-§9-T / CH-§9-S as "Existing (as an acceptance requirement)".** The charter states these thresholds as *proposed* acceptance criteria (§9 heading). They are classified Existing only in the sense that the charter — an approved document (A-51) — imposes them on Stage 03 work; no evidence yet shows them met, and their evidence status says so.

---

*End of D03-01 v1.1. Status: Revised per G1-AUD remediation — Draft for re-audit. Review decision: Pending. This document is E1 author-produced evidence; it claims no independent verification and no Founder approval, and it resolves no open founder question.*
