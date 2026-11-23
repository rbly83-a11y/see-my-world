# SEE MY WORLD — Stage 03, Gate G2

## G2 Work Orders — Experience Wireframes

**Status: PROPOSED — PENDING FORMAL TASK ASSIGNMENT**
**Parent authorization:** A-51 (Stage 03 charter v1.0)
**Controlling design baseline:** Gate G1 documentation package at v1.1, ACCEPTED for its bounded discovery-and-architecture scope (A-57) — D03-01 traceability matrix, D03-02 screen inventory, D03-03 five journey maps, D03-04 terminology & permission-boundary specification, plus the G1 Work Package 1 Report and the G1 Remediation Report.
**Baseline evidence on record:** governance register through A-57 at commit `10be817a9d19ce0ea712b20871d00a54a5b0edbb`; six G1 documents published in `docs/stage-03/` at HEAD `83a300f1c658c1730fc01e6dc0efdc1dce978bf4` (publication integrity attributed to Gizmo's connector verification; not independently repeated by the Founder).
**Prepared:** 22 November 2026, in advance of any assignment, per the Founder's stated next milestone (22 Nov 2026): *"prepare G2 work orders before assigning any agents"* and *"preserve the accepted G1 evidence as the controlling design baseline."*

> **This document assigns nothing.** No G2 work, agent assignment, wireframing, or implementation is initiated by it. G2 begins only on the Founder's separate, explicit assignment, under the same gate discipline as G1 (A-52 pattern). Production remains unauthorized.

---

## 1. Work orders prepared

### G2-01 / D03-05 — Responsive low-fidelity wireframes

Low-fidelity, responsive wireframes for the five accepted journeys, drawn screen-by-screen from D03-02 v1.1 and sequenced by D03-03 v1.1:

| Journey | Name (per D03-03 v1.1) |
|---|---|
| J-01 | Owner creates a World and authors first content |
| J-02 | Owner corrects in Studio |
| J-03 | Owner shares (Lens, literal preview, named-recipient Invitation) |
| J-04 | The named visitor views the Perspective |
| J-05 | Revocation, expiry, quarantine, and deletion |

**Scope boundaries, inherited from the accepted baseline:**

- D03-02 v1.1 inventories **35 screens: 0 Existing, 29 Prototype-only, 6 Deferred** (user-facing test, AUD-06 remediation). Wireframes cover the 29 Prototype-only screens. The 6 Deferred screens are **not** wireframed; each is listed in the deliverable with its deferral reason so the omission is auditable, not silent.
- Every wireframe is labelled with its D03-02 screen ID, its classification, and the backend backing it actually has. No screen may be drawn with controls the accepted Stage 02 build does not support.
- Known honesty constraints that the wireframes must show, not smooth over:
  - The Lens **territory-set selection control has no backend effect** in the accepted implementation (`createGrant()` takes no territory-set parameter) — it must not be portrayed as operational (D03-03, J-03 classification note).
  - **There is no CONFIRM operation** in testimony-v1. The correction surface presents exactly BOOST, REDUCE, REJECT, KEEP_WATCHING; RESTORE and REMOVE_BUOY are separate operations with their own screens (OWN-08, OWN-09). Q-01/D-34 stays open and unresolved.
  - BOOST-from-zero is a known v1 defect (`0 × 1.5 = 0`) and must not be disguised as success-with-effect (J-02-F5).
  - In the slice, visitor Perspectives are served from fixed synthetic fixtures; **preview = the served payload itself**. No general Lens compilation over owner data may be implied (Q-09 open; S02-12 is a future compiler test per C-01).
  - Audience is a **named-recipient Invitation only, never a public link** (OQ-8). Anonymous visiting is Deferred pending Founder reconciliation (G-17; VST-07 classified Deferred in AUD-01) — no anonymous path is wireframed.
  - The product is named **SEE MY WORLD** throughout. PARAVEX remains a conceptual identity only (A-51); no PARAVEX naming, branding, or navigation model enters a wireframe unless the Founder rules otherwise first (see §3, Decision 1).

**Open G2-level design question carried from G1 (not pre-decided here):** whether OWN-08 (RESTORE) and OWN-09 (REMOVE_BUOY) render as their own screens or as focused flows launched from OWN-07 — D03-02 note J-09 explicitly leaves this to G2.

### G2-02 / D03-06 — Error, denial, expiry, revocation, and quarantine state designs

State designs for every state the charter §9 requires to be represented (empty, loading, failure, denial, expiry, revocation, quarantine), keyed to the system states already named in the accepted journeys:

- **SYS-01 — Generic denial.** All ordinary authorization failures (J-04 branches D1–D7: wrong recipient, forged credential, missing credential, spoofed recipient claim, cross-World token, resolution escalation, visitor-token-as-owner) produce the **identical** generic denial — same status, same body, no existence or reason leakage. The state designs must preserve that indistinguishability; per-cause explanatory variants are **not** designed unless the Founder first decides C-3 (see §3, Decision 2).
- **SYS-04 — Quarantine / Perspective unavailable.** A **distinct** response class (503 `PERSPECTIVE_UNAVAILABLE`), checked before all authorization checks. It must never be conflated with SYS-01, in copy or in layout.
- **SYS-05 — Revision conflict (409).** Nothing applied, no ledger event, owner directed to retry deliberately against the updated World — never a silent overwrite (J-02-F1). Includes the idempotency-collision 409 (same key, different body) and the idempotent-retry success state (original result returned, nothing applied twice).
- **Expiry and revocation states (J-05).** Expiry fails closed; revocation defeats a previously served view (responses carry `Cache-Control: no-store`). Both are designed as states of the grant, not as new capabilities.
- **Logical-deletion states.** Deletion is logical only (S02-15…17 distinction preserved); no state may claim physical erasure.
- **Dependency / handoff states (G-19).** The four unresolved dependencies are designed **around**, as explicit assumption states — no mechanism is invented for any of them:
  1. **C-1** — Returning-owner re-entry / credential keeping (J-01 step 7-D).
  2. **C-4** — Quarantine resolution workflow — who is told, what they can do, how quarantine is lifted (J-05 Path C, step C3-D). *In its workflow aspect this is also a Founder decision.*
  3. **C-5** — Visitor credential delivery to the named recipient and first-credential setup (J-03 step 1-H; J-04 step 1-D). The A-48 qualification applies: the prototype registry does not establish secure credential delivery, and no state design may claim it does.
  4. **C-6** — Invitation / token conveyance to the recipient (J-03 step 4-H).

**Acceptance shape (for the eventual assignment to confirm):** both deliverables demonstrable end-to-end against the five journeys; every state above traceable to a D03-01 requirement ID and a D03-03 branch; a self-check report in the G1 pattern, followed by independent audit before any acceptance is claimed. Evidence level is design documentation only — no code, no prototype build, no production claim.

---

## 2. What G2 is not

- Not implementation, not a clickable prototype build, not production.
- Not a resolution of any open Founder decision: **G-17, G-19, Q-09, C-3, Q-01/D-34, Q-21** all remain open exactly as A-57 preserved them.
- Not a brand package (that is G3's territory) and not a PARAVEX adoption.

## 3. Decisions for the Founder, before or at assignment

These are the only inputs the work orders cannot supply themselves. Each can be answered in one line at assignment time; none blocks preparation of the orders themselves.

1. **PARAVEX Bible v35 — disposition.** The *PARAVEX Master Interface, Feature & Navigation Bible v35* (received 22 Nov 2026; 228 pages, ~78,400 words, MD5 `00c0f4612f16e8d8fb593389de5bc440`) sits on disk unread, with no registration, integration, or reconciliation scope authorized. It is the first candidate artifact for the still-open OQ-3 "interface prototype" referent. Options: **(a)** full read and reconciliation against the accepted G1 baseline before G2 assignment (where it disagrees, G1 controls until ruled otherwise); **(b)** structural skim only, as a G2 input; **(c)** file it as a received source and proceed with G2 on G1 alone. *Until one is chosen, G2-01/G2-02 are drafted against G1 only, as written above.*
2. **C-3 — Differentiated denial messaging.** A-57 preserves C-3 as an open Founder decision. As drafted, D03-06 designs the single identical generic denial (SYS-01) only. If differentiated expired/revoked messaging for a bound recipient is wanted in G2, it must be decided at assignment, not discovered mid-design.
3. **G-19 — Design around, or decide first?** As drafted, the four dependencies are carried as explicit assumption states (the G1 remediation pattern). The alternative — Founder direction on any of the four (quarantine resolution above all) before G2 starts — is equally available at assignment.
4. **OWN-08 / OWN-09 grain.** Separate screens, or focused flows from OWN-07 (D03-02 note J-09)? Can be left to the G2 designer with audit review, or fixed at assignment.

---

*End of proposed work orders. Awaiting the Founder's assignment decision; nothing above is in force until then.*
