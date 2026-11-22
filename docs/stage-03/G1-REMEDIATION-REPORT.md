# SEE MY WORLD — Stage 03 — G1 Remediation Report

> **Report:** G1 Remediation Report · **Register:** A-54 · **Scope:** Scoped documentation remediation of the Stage 03 G1 package against Founder independent-audit findings **G1-AUD-01 … G1-AUD-07** · **Documents revised:** D03-01, D03-02, D03-03, D03-04 — each v1.0 → **v1.1**, status "Revised per G1-AUD remediation — Draft for re-audit" · **Evidence level:** E1 (author-produced remediation, coordinator-verified by structural recheck; **not** independently verified, **not** Founder-accepted) · **Review decision:** Pending — submitted for Founder re-audit.

**What this report is.** The per-finding record of the remediation: for each finding, the documents and sections changed, the substance of the text/classification **before**, the substance **after**, and the focused recheck performed. Documentation only — no code was written or changed, the frozen Stage 02 tree is untouched (verified: local repo clean at commit `3a7a4b1`), and no capability was added beyond the dependency/handoff states AUD-04 specifies.

**Relation to the original package report.** `G1-WORK-PACKAGE-1-REPORT.md` is a historical record of the v1.0 package and has **not** been rewritten. Where this remediation changed classification counts, **this report supersedes the original report's counts**: D03-01 totals (26/18/13 → 26/17/14) and D03-02 totals (27/3/5 → 0/29/6). All other v1.0 report content stands as the record of the package as originally delivered.

**Ground truth used.** Every classification determination was checked against the accepted implementation source (`apps/see-my-world` at `3a7a4b1`): the route table in `src/server.js`; `createGrant()` (accepts `recipientId, resolution, expiresAt` only — no territory-set parameter; binds the fixed fixture projection); `getVisitorPerspective()` (quarantine checked first → 503 `PERSPECTIVE_UNAVAILABLE`; all ordinary authorization failures → the identical generic 403); `verifyReplay()` (service method only — no HTTP route, not owner-authenticated); `src/fixtures.js` (`whyHere` present only in the HARBOUR payload).

---

## AUD-01 — Anonymous access vs named-recipient binding (G-17) · Group 2

**D03-01 (§1.5 CORE-VIS-02 row + tension note; §4 G-17; §5 D-1; §1.5 CORE-VIS-07; §4 G-01)**
- BEFORE: CORE-VIS-02 classified **Prototype-only**, no blocking question recorded; the tension note said anonymous opening "may only be prototyped" in Stage 03.
- AFTER: CORE-VIS-02 classified **Deferred — pending separate Founder reconciliation and authorization (G-17)**, blocking question recorded as "G-17 / Founder reconciliation (anonymous opening vs named-recipient binding)". The tension note, G-17, and D-1 now state: named-recipient binding (OQ-8, enforced per A-47 F-01) is the **only** accepted access model; anonymous opening must not be prototyped as if live or described as available (illustration only as clearly labelled conceptual material, charter §4 / D03-04 B-07); and the classification **records the current accepted state without deciding the future of anonymous access** — G-17 remains open. CORE-VIS-07 keeps its Prototype-only classification (flow-specification gap, Q-05) with an added clause that its anonymous-opening component is Deferred per G-17/AUD-01; G-01 notes the same for its anonymous-visitor flow component.

**D03-02 (VST-07 entry, §1.5 index, §5, §7; downstream references in OWN-11, VST-01)**
- BEFORE: VST-07 "Anonymous Perspective opening" classified **Prototype-only** — a prototype could illustrate it labelled simulated.
- AFTER: VST-07 classified **Deferred** with the same terms as D03-01 (pending Founder reconciliation; not to be prototyped as if live or described as available; records the accepted state, decides nothing about the future). References elsewhere ("VST-07 is Prototype-only" in OWN-11) corrected to Deferred.

**D03-03 (§1.2, J-04 classification notes, §8 closing line)**
- BEFORE: anonymous visiting described as "Specified only / divergent-by-design", mapped as a denial branch.
- AFTER: anonymous visiting recorded as **Deferred (AUD-01)** pending Founder reconciliation and authorization (G-17); named-recipient binding stated as the only accepted access model; the no-future-decision statement included.

**D03-04 (B-02 note; §3 "also open" line)**
- BEFORE: "anonymous" appeared nowhere; CORE-VIS-02 appeared only in B-02's source line, leaving B-02's framing silent on whether anonymous opening is an accepted path.
- AFTER: a note following B-02 (substance of B-02 unchanged) and a §3 line record anonymous opening (CORE-VIS-02) as **Deferred — pending separate Founder reconciliation and authorization (G-17)**, with the only-accepted-model and no-future-decision statements.

**Focused recheck:** package-wide grep for "anonymous" / "VIS-02" — every mention now carries the Deferred classification or the named-recipient-only rule; no passage presents anonymous opening as available or prototypeable-as-live. G-17 remains open in all four documents.

## AUD-02 — OWN-11 territory-set control has no backend effect · Group 1

**D03-02 (OWN-11 entry, §1.5, §6 Judgment Call J-02)**
- BEFORE: classification line read "Existing — for grant creation…", with the territory-set control's lack of backend effect confined to a grounding paragraph and J-02.
- AFTER: OWN-11 carries a **split classification within the one entry**: grant-creation element = *Prototype-only — Existing operation* (`POST /api/studio/worlds/:id/grants`; recipient, resolution, expiry, bound revision, atomic fixture binding); territory-set selection control element = *Prototype-only with NO backend effect*, and the control is labelled as such **on the screen itself** (primary-interactions text: a design surface whose selection has no backend effect in the accepted implementation; the accepted `createGrant()` accepts no territory-set parameter). J-02 rewritten as the AUD-02 disposition; OWN-11 counted once, under Existing operation.

**D03-03 (front matter, J-03 step 2, J-03 classification notes)**
- BEFORE: J-03 step 2 presented "selects the territory set" as part of the recorded Lens tuple with no caveat.
- AFTER: the split is stated in all three places — grant creation is an Existing operation; territory-set selection is a Prototype-only control with no backend effect (`createGrant()` takes no territory-set parameter) and must not be portrayed as operational.

**D03-04 (crosswalk row 3, Lens)**
- BEFORE: the canonical Lens tuple (territory set, resolution, audience, expiry) stood with no implementation note.
- AFTER: tuple definition unchanged (it is the Bible concept); an implementation note added: the accepted grant operation accepts recipient, resolution, and expiry only, binds the fixed fixture projection, and territory-set selection is a Prototype-only control with no backend effect (D03-02 OWN-11 split classification).

**D03-01:** no row portrayed territory selection as operational; no change (verified by the AUD-06 sweep below).

**Focused recheck:** grep for "territory" across the package — every presentation of territory-set *selection* now carries the no-backend-effect label; Territory *addition* in the owner World (a real operation, `POST …/territories`) and the provisional-visual-grouping terminology are untouched and remain accurate.

## AUD-03 — OWN-15 classified Existing with no route or UI · Group 1

**D03-02 (OWN-15 entry, §1.5, §6 Judgment Call J-03)**
- BEFORE: "Existing — at the service level (`verifyReplay()` is implemented and tested); no HTTP route or UI exists…"
- AFTER: "**Prototype-only — service-level backing** — Prototype-only presentation backed by Existing service-level behavior", with the basis stated explicitly on the screen: `verifyReplay()` is implemented and tested at service level only (S02-11, F-03); there is no HTTP route and no UI in the accepted implementation; the entry's authorization boundary remains stated as a requirement on any future exposure. J-03 rewritten as the AUD-03 disposition.

**D03-03 (front matter; J-05 steps C1/C3; J-05 classification notes; §8 C-4; §8.1 C-1)**
- BEFORE: OWN-15 cited without its grounding level.
- AFTER: every citation states Prototype-only presentation, service-level backing, no HTTP route — `verifyReplay()` is a service method only.

**Focused recheck:** grep "OWN-15" across the package (8 hits in D03-03, all conformed; D03-02 entry/index/J-03 conformed); source re-verified — `verifyReplay` appears in `src/service.js` and tests only, no route in `src/server.js`.

## AUD-04 — Incomplete journey coverage: re-entry, credential delivery, invitation delivery, quarantine resolution · Group 3

No mechanism was invented for any of the four areas. Each is now marked **in the journeys themselves** as an out-of-band assumption or unresolved dependency requiring a G2 decision, with the assumption stated in words; the underlying coverage gaps (D03-03 §8 C-1/C-4/C-5/C-6) remain **OPEN** — adding the states does not close them.

**D03-03 — five dependency/handoff states inserted:**
- **DEPENDENCY 7-D** (J-01, after step 7) — returning-owner re-entry: the owner principal is resolved from a server-side token mapping (configuration); how the owner obtains/keeps the credential and how a returning session is established are out-of-band and unspecified.
- **HANDOFF 1-H** (J-03, after step 1) — visitor-credential delivery: out-of-band assumption; no delivery mechanism exists in the accepted implementation; the A-48 qualification applies (the prototype registry does not establish secure credential delivery).
- **HANDOFF 4-H** (J-03, after step 4) — Invitation/token conveyance: out-of-band, unspecified; the token is shown once at creation.
- **DEPENDENCY 1-D** (J-04, after step 1) — recipient's first-credential setup unspecified; the journey begins with the recipient already holding token + credential via the J-03 handoffs.
- **DEPENDENCY C3-D** (J-05 Path C, after step C3) — quarantine resolution unspecified and unscreened (who is told, what they can do, how quarantine is lifted; CORE-PW-06's "and investigate" has no workflow in the corpus); the journey ends at status + continued denial; requires a G2 decision and, in its workflow aspect, a Founder decision.
- §8 items C-1/C-4/C-5/C-6 and their §8.1 dispositions updated to record the added states and that the gaps remain OPEN for G2.

**D03-02 — dependency/handoff notes added to:** OWN-01 (owner credential provisioning out-of-band; returning-owner re-entry unspecified), OWN-14 (credential delivery + first-credential setup out-of-band assumptions, A-48 qualification), OWN-11 and OWN-13 (both present the one-time invitation token; its conveyance to the recipient out-of-band and unspecified), OWN-15 (quarantine resolution unspecified and unscreened — the screen covers status only; G2 decision and, in workflow aspect, Founder decision).

**D03-01 — new Gap G-19** ("Experience dependencies with no specified mechanism (AUD-04)"): the four dependencies recorded as one gap entry with four named sub-items, each an unresolved dependency requiring a G2 decision (quarantine-resolution workflow also flagged as a Founder matter in its workflow aspect), cross-referencing D03-03 v1.1 §8 C-1/C-4/C-5/C-6 and the journey states.

**Focused recheck:** grep "DEPENDENCY"/"HANDOFF" in D03-03 returns exactly the five inserted states plus their §8/§8.1 records; no delivery, authentication, re-entry, or recovery mechanism is specified anywhere in the revised package (sweep for mechanism language in the new passages — each states the absence instead).

## AUD-05 — C-3 denial-state differentiation · Group 2

**Disposition: generic denial retained for G1; C-3 restated as an open Founder decision — not a defect, not settled.**

**D03-03 (§8 item C-3; §8.1 disposition)**
- BEFORE: §8.1 read "DISPOSITION RECORDED; residual question OPEN… One residual remains for independent review: whether a visitor who has passed recipient binding may be shown a differentiated expired/revoked state."
- AFTER: §8 C-3's residual is restated as **an open Founder decision — not a defect and not settled by this package**: whether a visitor who has passed recipient binding may be shown a differentiated expired/revoked state, to be evaluated against the precise authorization and information-disclosure contract (D03-04 B-04 as amended). §8.1 heading: "DISPOSITION FOR G1 RECORDED; Founder decision carried forward OPEN" — the generic body governs **all** visitor presentations in G1.

**D03-04 (unnumbered note following B-04)**
- AFTER (new): the same open-Founder-decision statement — the specification takes no position; the generic 403 governs meanwhile; any distinguishing visitor-facing message would require a Founder decision and a charter change request, not a design choice. The note is expressly unnumbered (the B-01…B-20 set is unchanged; verified — no "B-21" exists) and expressly distinguishes D03-03's C-3 from D03-04's own §4 conflict C-3 (Explorer dual-surface), which is untouched and unrenumbered.

**D03-02:** SYS-02/SYS-03 entries already recorded that any distinguishing visitor-facing message is a charter change request, not a design choice; unchanged in substance, classifications conformed under AUD-06.

**Focused recheck:** C-3 appears in the revised package only as an open Founder decision with its evaluation framing; no document settles it, recommends an outcome, or presents differentiated visitor messaging as available.

## AUD-06 — Screen-level classification conflates implemented services with proposed interfaces · Group 1

**D03-02 (§1.2 rewritten; §1.5 index; every entry's classification line; §5; §6 counts + J-01/J-04 conformed)**
- BEFORE: §1.2 defined Existing as "backed by the accepted Stage 02 implementation… classified by that behaviour's status", and 27 screens were classified Existing on that basis.
- AFTER: §1.2 classifies a screen by its **user-facing functionality** and states the consequence plainly: the accepted implementation is an HTTP JSON service that ships **no user interface**, so **no screen is classified Existing as a user-facing screen in v1.1**; the v1.0 definition is expressly withdrawn in the text as the conflation AUD-06 names. New labels: *Prototype-only — Existing operation* (operation implemented, on the accepted HTTP surface, acceptance-tested; route named per screen), *Prototype-only — Existing response behavior* (SYS states; the response contract is implemented and test-asserted), *Prototype-only — service-level backing* (OWN-15), *Prototype-only* (no backend claim), *Deferred*. Every screen was audited against the route table; determinations: OWN-01…14, 16 and VST-01…05 → Existing operation (OWN-01's basis restated: authentication enforced on every owner route via the server-side token mapping; no sign-in endpoint or session issuance; OWN-10's basis: receipts returned by the corrections operation and listed in the Studio view; OWN-12's basis: fixture payload fixed per resolution and inspectable, no dedicated preview operation; VST-05's basis: `whyHere` served **only** in the HARBOUR payload — CONTINENT/COAST carry none); SYS-01…06 → Existing response behavior; OWN-15 → service-level backing (AUD-03); OWN-17, VST-06 → Prototype-only unchanged; Deferred per AUD-01/counts below.

**D03-01 (framing; CORE-VIS-04)**
- The matrix's requirement classifications stand (its Existing = approved requirement or accepted implementation, per charter §4), but the "How to read the columns" framing now states that Existing must never be read as implying a user-facing screen exists, and points to D03-02 v1.1 for screen-level classification. CORE-VIS-04's evidence status is annotated **partial in scope** (`whyHere` content present in the HARBOUR fixture payload only; CONTINENT/COAST payloads carry no `whyHere` field); its classification is unchanged. One further row corrected: the OQ-5 (DR-1) row's "Explorer serves owner + authorized visitor **surfaces**" → "…authorized visitor **operations** under separate access rules (service-level access rules in the accepted implementation; no shipped user interface)".

**D03-03 (classification vocabulary; per-journey classification notes)**
- BEFORE: "Existing / implemented — behaviour present in the accepted Stage 02 slice…"
- AFTER: implemented = the underlying **operation** exists at service/API level and is acceptance-tested; the accepted implementation has no user interface; D03-02 v1.1 classifies no screen as Existing; no journey step claims a shipped user interface. Per-journey notes relabelled accordingly.

**New classification counts (supersede the v1.0 report's counts):**
- **D03-01 (57 PRD requirements): Existing 26 · Prototype-only 17 · Deferred 14.** (Change vs v1.0: CORE-VIS-02 Prototype-only → Deferred, AUD-01. The four partial-Existing rows — COR-02, LENS-02, LENS-09, PW-08 — are unchanged.)
- **D03-02 (35 screens): Existing 0 · Prototype-only 29 · Deferred 6.** Prototype-only comprises: Existing operation **20** (OWN-01…14, 16 = 15; VST-01…05 = 5; OWN-11 counted once here, its Prototype-only control element noted), Existing response behavior **6** (SYS-01…06), service-level backing **1** (OWN-15), no backend claim **2** (OWN-17, VST-06). Deferred: OWN-18, VST-07 (moved from Prototype-only, AUD-01), VST-08, VST-09, SYS-07, SYS-08.

**Focused recheck:** the coordinator re-derived every screen's determination from `src/server.js` routes before the edits and re-grepped the revised inventory: all 35 index rows and all 35 classification lines carry the v1.1 labels; no "Existing" screen classification remains anywhere in the revised package except inside the withdrawal sentence in D03-02 §1.2 and the historical G1 report (untouched).

## AUD-07 — Generic denial vs quarantine unavailability · Group 2

The accepted response contract is preserved **exactly** — identical generic 403 for ordinary authorization failures; distinct 503 `PERSPECTIVE_UNAVAILABLE` for quarantine, checked first. This finding was documentation precision only; neither response was altered or proposed for alteration.

**D03-04 (B-04 amended; B-05 cross-reference; crosswalk row 25)**
- BEFORE: B-04 claimed denials are "generic and identical across failure reasons", listing only 403-class causes, with no scoping and no mention of quarantine.
- AFTER: B-04 is titled "…(ordinary authorization failures only)"; its MAY claim is scoped to the 403 class (missing/unknown/forged token, cross-World token, unresolvable/missing/forged credential, recipient mismatch, revoked, expired, missing World record, missing derived projection, resolution escalation — identical generic body, byte-identical across causes); a new NEVER line states that quarantine unavailability is a **distinct response class** (503 `PERSPECTIVE_UNAVAILABLE`, governed by B-05, checked before all authorization checks), must never be described as a generic denial, a 403 must never be described as unavailability, the 503 discloses nothing beyond unavailability, and neither response may be altered merely to make the documentation uniform. B-05 gains the cross-reference sentence; crosswalk row 25 (quarantine) now presents via the distinct 503 class under B-05, not a generic denial under B-04.

**D03-02 (§5 coverage table; §7 alignment line; SYS-01 classification line)**
- BEFORE: §5 read "Denial | SYS-01 (identical body, all causes)".
- AFTER: §5 distinguishes the two classes in terms (ordinary authorization failures → SYS-01 identical generic 403, indistinguishable from one another; quarantine → SYS-04 distinct 503, checked before all authorization checks, never a generic denial). SYS-01's byte-identical claim is now scoped to ordinary authorization-failure causes, with "Quarantine is not a cause of this state — see SYS-04." The SYS-01…SYS-04 entries' contract language was verified already-correct and left intact.

**D03-03 (J-04 denial section + classification notes; J-05 Path C; §8 C-3; §9)**
- BEFORE: "Denial branches — all producing the identical generic denial"; "identical generic denials across all tested failure modes"; §9 lumped SYS-02/03/04 against B-04; §8 C-3 listed SYS-04 among the states in tension with generic denial.
- AFTER: J-04's denial section is scoped to **ordinary authorization failures** with an explicit carve-out (quarantine is not one of these branches and is not a generic denial — distinct 503, SYS-04, checked first, handled at J-05 Path C; the two classes must never be conflated); classification notes read "across all tested **authorization** failure modes"; §9 scopes B-04 as amended and names SYS-04's 503 the contractual exception — not part of the generic-denial class and not part of the C-3 question; §8 C-3 amended so SYS-04's differentiation is contractual and the C-3 question concerns SYS-02/SYS-03 only.

**D03-01 (§2.2 rows A47-F-01, A47-F-03; new "Denial discipline (AUD-07)" note)**
- BEFORE: A47-F-01 lumped all failures as "denied with the generic denial"; A47-F-03 described the quarantined visitor as "still denied"; no "503" appeared anywhere in the matrix.
- AFTER: F-01 records the identical generic **403** for ordinary failures with quarantine named as the distinct first-checked class returning **503 PERSPECTIVE_UNAVAILABLE**; F-03 records the fresh-process quarantine denial as the distinct 503, "not the generic 403"; a "Denial discipline (AUD-07)" note after the §2.2 table states the two classes for the whole matrix.

**Focused recheck:** package-wide sweep for "generic", "identical", "all causes", "all failure" — every surviving instance is scoped to ordinary authorization failures or is a non-denial use (revision/digest identity, idempotent bodies, fixture payloads); the 403/503 contract statements match `src/service.js` exactly.

---

## Structural recheck of the revised package (coordinator-run)

Re-run on the v1.1 files after all edits:

| Check | Result |
|---|---|
| CORE requirement IDs defined (D03-01 §1) | 57 |
| CORE IDs cited per document — undefined | D03-01: 57 cited, **0 undefined** · D03-02: 55 cited, **0 undefined** · D03-03: 38 cited, **0 undefined** · D03-04: 36 cited, **0 undefined** |
| Screen IDs defined in D03-02 | 35 (OWN-01…18, VST-01…09, SYS-01…08) — none renumbered, none added |
| Screen IDs cited per document — undefined | D03-01: 1, **0 undefined** · D03-02: 35, **0 undefined** · D03-03: 27, **0 undefined** · D03-04: 1, **0 undefined** |
| Boundary statements defined in D03-04 | 20 (B-01…B-20) — set unchanged, no B-21 |
| B IDs cited per document — undefined | D03-01: 1, **0 undefined** · D03-02: 9, **0 undefined** · D03-03: 10, **0 undefined** · D03-04: 20, **0 undefined** |
| D03-01 counts as written (§6) | 26 / 17 / 14; ID lists sum to 57; CORE-VIS-02 in the Deferred list, absent from Prototype-only |
| D03-02 counts as written (§1.5, §6) | 0 / 29 / 6 = 35; sub-breakdown 20 + 6 + 1 + 2 = 29; per-family columns sum correctly (OWN 17 + VST 6 + SYS 6 = 29) |
| Stale v1.0 counts ("27 Existing", "18 Prototype-only", "13 Deferred") | Appear **only** in the untouched historical `G1-WORK-PACKAGE-1-REPORT.md` |
| Version headers | All four documents at v1.1, status "Revised per G1-AUD remediation — Draft for re-audit", change-note lines present; cross-references to sibling deliverables updated to v1.1 (the single remaining "v1.0" string in D03-02 is §1.2's sentence withdrawing the v1.0 definition — a deliberate historical reference) |
| Frozen Stage 02 tree | Untouched — local repo clean at `3a7a4b1`; original G1 report file unmodified (size/mtime unchanged) |

## Open items — preserved, not settled

G-17 (anonymous opening vs named-recipient binding) remains **open** — AUD-01 records the accepted state and defers the question; it does not decide the future of anonymous access. C-3 (differentiated expired/revoked messaging for a bound recipient) remains an **open Founder decision** (AUD-05). Q-09, Q-01/D-34, and Q-21 are untouched. AUD-04's four dependencies (D03-01 G-19; D03-03 C-1/C-4/C-5/C-6) remain **open for G2**. G1 acceptance and G2 authorization remain the Founder's — nothing in this remediation claims them.

## Judgment calls recorded (coordinator/specialist, for the re-audit's attention)

1. **D03-04 crosswalk row 8 (Territory) left unchanged.** The AUD-02 precision landed in row 3's implementation note; row 8 already confines Territory to a provisional visual/grouping label, denies Atlas-entity status, and makes no operational-selection claim. Recorded here so the re-audit can challenge the judgment.
2. **CORE-VIS-04 (D03-01): evidence status annotated, classification unchanged.** The `whyHere` mechanism is implemented and exercised (HARBOUR payload, S02-03 deep-equal), so Existing stands; the annotation records that its scope is one of three resolutions.
3. **D03-01 INV-36's governing-source citation of CORE-VIS-02 left unchanged** — it cites VIS-02 as a source for the return-visit rule; it does not classify VIS-02.
4. **OWN-11 counted once** under "Existing operation" with its split element noted, rather than split into two screen entries — keeps the Lens-creation surface citable as one screen (D03-02 J-02 records the reasoning).

## Files

| File | v1.0 size | v1.1 size |
|---|---|---|
| D03-01-TRACEABILITY-MATRIX.md | 44,470 B | 49,288 B |
| D03-02-SCREEN-INVENTORY.md | 79,649 B | 89,625 B |
| D03-03-JOURNEY-MAPS.md | 54,387 B | 64,777 B |
| D03-04-TERMINOLOGY-BOUNDARY-SPEC.md | 49,827 B | 53,581 B |
| G1-WORK-PACKAGE-1-REPORT.md | 15,778 B | **unchanged (historical)** |
| G1-REMEDIATION-REPORT.md | — | this report |
