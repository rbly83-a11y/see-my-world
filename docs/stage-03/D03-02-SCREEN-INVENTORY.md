# SEE MY WORLD — Stage 03 — Complete Screen and Interaction Inventory

> **Deliverable ID:** D03-02 · **Version:** 1.1 · **Owner:** UX Architect · **Status:** Revised per G1-AUD remediation — Draft for re-audit · **Associated requirements:** D03-01 traceability matrix; CORE-MVP-PRD; Stage 02 accepted implementation (`apps/see-my-world` at commit `3a7a4b1`) · **Verification method:** author self-check against cited sources (E1) · **Review decision:** Pending

**Evidence discipline.** This is author-produced, self-checked design documentation (evidence level **E1** under the Stage 03 charter, A-51). It is **not** independently verified and **not** Founder-approved. It contains no wireframes, no code, and no visual design. It does not resolve Q-09 (field-level disclosure schema), Q-01/D-34 (explicit CONFIRM), or Q-21 (production persistence), and no screen below should be read as resolving them.

**Change note (v1.1):** Revised under register A-54 against findings G1-AUD-01…07 — screen classifications corrected under the user-facing test (AUD-06), OWN-11 split (AUD-02), OWN-15 reclassified (AUD-03), VST-07 deferred (AUD-01), denial classes distinguished (AUD-07), dependency/handoff notes added (AUD-04). See G1-REMEDIATION-REPORT.md.

**Governing inputs.** This inventory is written against D03-01 (traceability matrix) and D03-04 (terminology and permission-boundary specification, v1.1), and the CORE-MVP-PRD, grounded in the Stage 02 accepted implementation. Terminology follows D03-04's crosswalk statuses (Canonical / Provisional / Conceptual-only) and permission-boundary statements are aligned to D03-04's B-01 … B-20 — see the alignment record in §7.

---

## 1. How to read this inventory

### 1.1 Screen ID scheme (stable; other G1 deliverables cite these IDs)

- **OWN-nn** — owner screens.
- **VST-nn** — visitor screens.
- **SYS-nn** — shared / system states. A SYS entry is a state presentation that can be reached from several screens; it is inventoried once and cited by the screens that can surface it.

IDs are sequential within each prefix and must not be renumbered. A retired ID stays retired.

### 1.2 Scope classification (charter §4)

A screen is classified by its **user-facing functionality**. The accepted Stage 02 implementation is an HTTP JSON service that ships **no user interface**, so **no screen is classified Existing as a user-facing screen in v1.1**. The v1.0 definition — a screen "is classified by that behaviour's status" — conflated backend behaviour with a user-facing screen and is withdrawn (AUD-06). The labels are:

- **Prototype-only — Existing operation** — the underlying operation is implemented in the accepted slice, reachable via its HTTP surface, and acceptance-tested; the screen is a Stage 03 design surface that does not exist in the accepted implementation. The grounding route is named in the entry.
- **Prototype-only — Existing response behavior** — for SYS entries: the response contract (status + body) is implemented and test-asserted on the accepted HTTP surface; the presentation is a design surface.
- **Prototype-only — service-level backing** — backing exists only as a service method; no HTTP route, no UI.
- **Prototype-only** — specified in the PRD or simulated for Stage 03 evaluation, with **no backend claim**. Any prototype rendering of these screens must be labelled as simulated wherever it appears.
- **Deferred** — requires an unresolved founder decision or future authorization. Deferred screens are listed so they are not silently treated as working screens. They must not be built, prototyped as if live, or described as available.

### 1.3 Required states

Per charter §9, every screen records each of: **empty, loading, error, denial, expiry, revocation, quarantine**. Each is marked with what it shows, or **n/a** where the state cannot occur on that screen. "Loading" is a design-surface state throughout: the accepted implementation is a synchronous JSON service with no loading semantics, so no loading entry below claims backend behaviour.

### 1.4 Terminology and boundary rules applied throughout

- **Territory** is a *provisional visual grouping only* inside a World. It is not an Atlas entity and creates no Atlas geography (OQ-1; README; CORE-PW-07 is Concept for the Cartographic Engine).
- **Studio** is the correction/authoring surface only (OQ-2).
- **Explorer** serves the owner's own view and, separately, authorized visitor views under different access rules (OQ-5).
- Audience is a **named-recipient Invitation only, never a public link** (OQ-8).
- The product name in this inventory is **SEE MY WORLD**. PARAVEX is a conceptual identity only under A-51 and is never used here as a product name.
- Visitor disclosure in the accepted implementation is limited to the fixed synthetic fixtures **P-SYN-CONTINENT / P-SYN-COAST / P-SYN-HARBOUR** over synthetic World W-SYN-1, served verbatim after a request-time grant check. No general Lens compilation over owner data takes place (gated on Q-09).
- Denial wording for **ordinary authorization failures** never distinguishes a denial's cause and never reveals private topic state, counts, or existence (CORE-VIS-06; Ch. 22 §22.3 semantics as implemented; D03-04 B-04). Quarantine unavailability is the distinct exception, not a denial of this class: SYS-04's 503 `PERSPECTIVE_UNAVAILABLE`, checked before all authorization checks (D03-04 B-05; G1-AUD-07; qualifier added per re-audit refinement R-01, register A-55).
- Deletion wording is honest **logical-deletion** wording only; no screen may imply physical erasure (addendum C-02; CORE-PW-08 mechanics portion; D03-04 B-06).
- The visitor credential is a **prototype identity mechanism only** (D03-04 §1 row 14, Provisional): it binds a request to the grant's named recipient within the prototype and must never be described as identity verification, proof of legal identity, or production authentication, nor conflated with the Invitation token — the two are separate secrets with separate purposes (D03-04 B-01).
- Absence is not disagreement (D03-04 B-11): a topic, label, or Territory absent from a Perspective must never be presented — to visitor or owner — as disagreement, rejection, refutation, or dislike of the absent subject.
- A manifest, digest, Passport, preview, or saved reference is not an authorisation token (D03-04 B-13): access checks occur at request time on every screen that serves granted content.

### 1.5 Index

| ID | Name | Classification |
|---|---|---|
| OWN-01 | Owner sign-in / session entry | Prototype-only — Existing operation |
| OWN-02 | World creation (empty World) | Prototype-only — Existing operation |
| OWN-03 | World home / Explorer owner view of the Worldprint | Prototype-only — Existing operation |
| OWN-04 | Studio home / working view | Prototype-only — Existing operation |
| OWN-05 | Territory grouping management | Prototype-only — Existing operation |
| OWN-06 | Studio topic declaration / authoring | Prototype-only — Existing operation |
| OWN-07 | Studio correction surface | Prototype-only — Existing operation |
| OWN-08 | Studio restore operation (RESTORE) | Prototype-only — Existing operation |
| OWN-09 | Studio remove-buoy operation (REMOVE_BUOY) | Prototype-only — Existing operation |
| OWN-10 | Correction Receipt view | Prototype-only — Existing operation |
| OWN-11 | Lens creation | Prototype-only — Existing operation (grant creation; territory-set control Prototype-only, no backend effect) |
| OWN-12 | Lens preview + Perspective Passport | Prototype-only — Existing operation |
| OWN-13 | Invitation / grant management, incl. revocation | Prototype-only — Existing operation |
| OWN-14 | Visitor-principal provisioning | Prototype-only — Existing operation |
| OWN-15 | Replay-integrity / quarantine status (owner) | Prototype-only — service-level backing |
| OWN-16 | World deletion | Prototype-only — Existing operation |
| OWN-17 | First Light draft review and rapid correction pass | Prototype-only |
| OWN-18 | General Lens compilation over live owner data | Deferred |
| VST-01 | Invitation entry | Prototype-only — Existing operation |
| VST-02 | Perspective viewing — Continent | Prototype-only — Existing operation |
| VST-03 | Perspective viewing — Coast | Prototype-only — Existing operation |
| VST-04 | Perspective viewing — Harbour | Prototype-only — Existing operation |
| VST-05 | "Why is this here?" explanation | Prototype-only — Existing operation |
| VST-06 | Seed saving from a Perspective | Prototype-only |
| VST-07 | Anonymous Perspective opening | Deferred |
| VST-08 | SEE YOURS / Seed-Born World start | Deferred |
| VST-09 | Abuse report / block flows | Deferred |
| SYS-01 | Generic denial | Prototype-only — Existing response behavior |
| SYS-02 | Expired grant | Prototype-only — Existing response behavior |
| SYS-03 | Revoked grant | Prototype-only — Existing response behavior |
| SYS-04 | Quarantined projection unavailable | Prototype-only — Existing response behavior |
| SYS-05 | Revision-conflict (409) presentation | Prototype-only — Existing response behavior |
| SYS-06 | Service / validation error | Prototype-only — Existing response behavior |
| SYS-07 | Public link / share page | Deferred |
| SYS-08 | Comparison view | Deferred |

**Totals: 35 entries — 0 Existing, 29 Prototype-only, 6 Deferred.** Prototype-only comprises: Existing operation 20, Existing response behavior 6, service-level backing 1, no backend claim 2. Detail and judgment calls in §§2–6.

---

## 2. Owner screens

### OWN-01 — Owner sign-in / session entry

- **Purpose:** Establish the owner principal for all Studio and Explorer-owner surfaces.
- **Entry points:** Entry to any owner surface (OWN-02 … OWN-16).
- **Primary interactions:** Present the owner credential; enter the owner session; exit the session.
- **Data it may display / authorization boundary:** No World data is displayed before authentication. The principal is resolved server-side from the session credential — in the implementation, `service.authenticateOwner()` maps the `x-owner-token` header to an owner ID (`src/server.js`: the `owner()` helper on every Studio/Explorer route); the principal is **never** taken from a request body (CORE-COR-05). *Must never appear:* any other owner's World, revision, digest, or grant data; any hint whether a World ID exists for another owner.
- **Required states:** empty — n/a (no content precedes sign-in); loading — session-establishing indicator, no World data; error — SYS-06; denial — SYS-01 (an invalid owner credential and a visitor credential presented as an owner credential both fail closed with the identical generic denial; test S02-04); expiry — session credential no longer accepted → SYS-01, re-entry required; revocation — n/a as a distinct presentation (a withdrawn owner credential presents as SYS-01); quarantine — n/a on this screen (quarantine is World-scoped; see OWN-15 / SYS-04).
- **Scope classification:** Prototype-only — Existing operation — basis: owner authentication is enforced on every owner route via the server-side token mapping (`authenticateOwner()`); there is no sign-in endpoint, no session issuance, and no UI in the accepted implementation. The grounding surface is every owner route in `src/server.js`.
- **Dependency / handoff (AUD-04):** Owner credential provisioning is out-of-band (server-side token mapping configuration); session re-entry for a returning owner is unspecified; unresolved dependency requiring a G2 decision.
- **Requirement IDs engaged:** CORE-PW-01, CORE-COR-05.

### OWN-02 — World creation (empty World)

- **Purpose:** Create a new World that starts **empty and owner-controlled** — no draft generation.
- **Entry points:** OWN-01 (authenticated owner with no World, or choosing to create an additional World); OWN-03 (create another World).
- **Primary interactions:** Confirm creation; optionally supply a World ID (the implementation accepts a caller-supplied `worldId`, otherwise generates one); proceed to OWN-04 / OWN-05.
- **Data it may display / authorization boundary:** Owner-only. Displays only the newly created World's own identifiers and initial revision (revision 0). *Must never appear:* any First Light draft, seeded topics, or imported material — none exists in the accepted path (the World starts empty, OQ-4; CORE-FL-* not exercised); any other owner's data.
- **Grounding:** `POST /api/studio/worlds` → `service.createWorld()` (event `WORLD_CREATED`; `emptyProjection`).
- **Required states:** empty — this screen *is* the response to the no-World empty state; its copy must present an empty World as a valid state, not an error (CORE-FL-06 principle); loading — creation in progress, no partial World shown; error — a duplicate World ID returns 409 `WORLD_EXISTS` → presented via SYS-05 mechanics with World-exists wording; SYS-06 otherwise; denial — unauthenticated or non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a (a new World has no derived projections to quarantine).
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds`.
- **Requirement IDs engaged:** CORE-PW-01, CORE-PW-03, CORE-PW-06.

### OWN-03 — World home / Explorer owner view of the Worldprint

- **Purpose:** The owner's own reading view of their World — the Worldprint as rendered for its owner: territories, nodes (topics) with their five testimony dimensions materialised at view time, revision, and digest.
- **Entry points:** OWN-01; OWN-04 (switch from Studio to Explorer reading); after OWN-02 creation.
- **Primary interactions:** Inspect territories and topics; navigate to Studio (OWN-04) to act on what is seen; navigate to Lens and grant surfaces (OWN-11 … OWN-13); check integrity status (OWN-15).
- **Data it may display / authorization boundary:** Owner-only, for a World the authenticated principal owns (`#requireOwnership`). May display the owner's full private Worldprint — strength, testimony, provenance, `last_witnessed`, buoy — because this is the owner surface. *Must never appear:* another owner's World; any suggestion that this private graph itself is shareable — what may be shared is a Lens-derived projection, never the Worldprint (CORE-PW-05). Free-text "why" material, if ever present, never leaves this surface (invariant 15).
- **Grounding:** `GET /api/explorer/worlds/:worldId` → `service.getExplorerView()`. Explorer and Studio report the same revision and digest (test S02-10).
- **Required states:** empty — a World with no territories/topics shows the honest empty World (valid state; fog/unexplored framing per CORE-PW-07 is Concept and must not be presented as implemented rendering); loading — view loading, no stale revision presented as current; error — SYS-06; unknown World → 404 presented without revealing other Worlds; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a (owner access is not grant-based); quarantine — if the World's derived projections are quarantined, the owner view remains available (quarantine gates visitor disclosure, not owner reading) and must show the quarantine status banner linking to OWN-15; it must not present any Perspective as currently servable.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/explorer/worlds/:worldId` (`getExplorerView()`). Map rendering semantics (CORE-PW-07) remain Concept and are not claimed by this screen.
- **Requirement IDs engaged:** CORE-PW-01, CORE-PW-02, CORE-PW-03, CORE-PW-05, CORE-PW-07 (Concept portion only, labelled as such).

### OWN-04 — Studio home / working view

- **Purpose:** The owner's correction/authoring working surface: the World view plus the available correction types, the grant list, and the Receipt history (see OWN-10).
- **Entry points:** OWN-01; OWN-03.
- **Primary interactions:** Select a topic to declare (OWN-06) or correct (OWN-07 … OWN-09); review Receipts (OWN-10); review grants (OWN-13).
- **Data it may display / authorization boundary:** Owner-only, own World only. May display everything OWN-03 may, plus `availableCorrectionTypes` and the event/Receipt list. *Must never appear:* a CONFIRM action (see OWN-07); any other owner's data; visitor credentials or invitation tokens in raw form (tokens/credentials are shown once at issuance — OWN-13 / OWN-14 — and stored only as SHA-256 hashes).
- **Grounding:** `GET /api/studio/worlds/:worldId` → `service.getStudioView()` (returns the world view, `availableCorrectionTypes: [...CORRECTION_TYPES]`, grants via `publicGrant()`, and Receipts derived from the ledger events).
- **Required states:** empty — empty World working view (valid state; directs to OWN-05 / OWN-06); loading — as OWN-03; error — SYS-06; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a for owner access; if a listed grant has been revoked, its row shows revoked status (OWN-13); quarantine — quarantine banner as OWN-03, linking to OWN-15.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/studio/worlds/:worldId` (Studio view).
- **Requirement IDs engaged:** CORE-PW-01, CORE-COR-01, CORE-COR-06.

### OWN-05 — Territory grouping management

- **Purpose:** Create and inspect Territories — **provisional visual groupings only** — inside the owner's World.
- **Entry points:** OWN-04; OWN-02 (first grouping in a new World).
- **Primary interactions:** Add a Territory (ID + name, name 1–120 chars in the implementation); view the World's territory list. No rename, merge, delete, or Atlas operation is implemented, and none is inventoried here.
- **Data it may display / authorization boundary:** Owner-only, own World only. May display territory IDs and names and the topics grouped under them. *Must never appear:* any representation of a Territory as Atlas geography, a continent, or a shared/public place (OQ-1); any other owner's territories.
- **Grounding:** `POST /api/studio/worlds/:worldId/territories` → `service.addTerritory()` (event `TERRITORY_ADDED`; revision-CAS + idempotency via `#transact`).
- **Required states:** empty — no territories yet: explicit empty state stating the World has no groupings and offering creation; loading — submission in progress, duplicate submission prevented by idempotency key; error — invalid name → 400 via SYS-06; duplicate territory ID → 409 `TERRITORY_EXISTS` via SYS-05 mechanics; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for the management action itself (owner mutations are not gated by projection quarantine); a quarantine banner may be shown as context (OWN-15).
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds/:worldId/territories`.
- **Requirement IDs engaged:** CORE-PW-03, CORE-PW-07 (grouping only; rendering Concept).

### OWN-06 — Studio topic declaration / authoring

- **Purpose:** Declare a topic into a Territory with provenance and initial strength — the owner authoring act by which material enters the World.
- **Entry points:** OWN-04; OWN-05 (declare into a selected Territory).
- **Primary interactions:** Supply topic ID, Territory, name, provenance (DECLARED / CONFIRMED / PROPOSED — the entry weights in `DECLARATION_WEIGHTS`: 1.0 / 0.6 / 0), and strength in [0, 1]; submit under expected revision + idempotency key.
- **Data it may display / authorization boundary:** Owner-only, own World only. *Must never appear:* a confidence field or any system-computed probability that the owner holds an interest (CORE-PW-02 — no such field exists anywhere in the implementation); WITNESSED/REFUTED as declaration provenances (not accepted by this operation); any other owner's topics.
- **Grounding:** `POST /api/studio/worlds/:worldId/topics` → `service.declareTopic()` (event `TOPIC_DECLARED`). Recorded mechanism choice (SLICE-BUILD-REPORT §4.1): this authoring operation is not a correction type and does not touch the Q-01 question.
- **Required states:** empty — no Territory exists yet: declaration is blocked with direction to OWN-05 (the service rejects an unknown Territory with 400); loading — submission in progress; error — unknown Territory, invalid strength, or invalid name → 400 via SYS-06; duplicate topic ID → 409 `TOPIC_EXISTS` via SYS-05 mechanics; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for the action; contextual banner as OWN-05.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds/:worldId/topics`.
- **Requirement IDs engaged:** CORE-PW-02, CORE-COR-01 (entry weights), CORE-COR-05 (processing order).

### OWN-07 — Studio correction surface

- **Purpose:** Apply testimony-v1 corrections to a topic: **BOOST, REDUCE, REJECT, KEEP_WATCHING** — exactly the four v1 operators, with frozen v1 arithmetic.
- **Entry points:** OWN-04 (topic selected); OWN-06 (after declaration).
- **Primary interactions:** Choose one of the four operators for a topic; submit with expected revision + idempotency key; receive the updated topic and its Receipt (OWN-10). **The disputed CONFIRM operation appears on this surface as an explicitly UNAVAILABLE action** — visibly present as a disabled/unavailable item labelled to the effect that confirmation semantics are undecided (Q-01/D-34) — **not** as a working control, and submitting CONFIRM (or RESTORE) as a correction type is rejected by the service with 400 `UNSUPPORTED_CORRECTION_TYPE` (test S02-09). RESTORE and REMOVE_BUOY are **not** correction types here; they are their own operations (OWN-08, OWN-09).
- **Data it may display / authorization boundary:** Owner-only, own World only; principal from server session context, never the request body (CORE-COR-05). May display the topic's own five dimensions and the effect of each operator. *Must never appear:* a working CONFIRM control; the v2-experimental BOOST formula or any local repair of the known BOOST-from-zero defect (CORE-COR-04 — BOOST from strength 0 yields 0, carried deliberately); any write to `enduring_affinity` / `exploration_appetite`; another owner's topics.
- **Grounding:** `POST /api/first-light/worlds/:worldId/corrections` → `service.correct()`; `CORRECTION_TYPES = ['BOOST', 'REDUCE', 'REJECT', 'KEEP_WATCHING']` in `src/domain.js`; processing order, idempotency, and revision-CAS in `#transact` (CORE-COR-05).
- **Required states:** empty — no topics yet: correction surface shows the empty World state and directs to OWN-06; loading — submission in progress; the same idempotency key retried returns the original committed result without double-applying; error — unknown topic → 400 via SYS-06; an ordinary correction against a REFUTED topic fails with "Explicit restoration required" and directs to OWN-08 (CORE-COR-03); unsupported type (incl. CONFIRM) → 400 via SYS-06 with the unavailable-action explanation; denial — non-owner → SYS-01 (403 must not reveal private topic state); expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for the correction itself; contextual banner as OWN-05; **revision-conflict — SYS-05 (409)** is this surface's primary conflict state, including the same-key/different-body idempotency conflict (409).
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/first-light/worlds/:worldId/corrections`. The CONFIRM item is inventoried as an unavailable action only; its final semantics are Deferred under Q-01/D-34 and are not resolved here.
- **Requirement IDs engaged:** CORE-COR-01, CORE-COR-02, CORE-COR-03, CORE-COR-04, CORE-COR-05, CORE-COR-07, CORE-COR-08.

### OWN-08 — Studio restore operation (RESTORE)

- **Purpose:** Explicitly restore a REFUTED topic to an owner-selected provenance (PROPOSED / CONFIRMED / DECLARED) and strength — the only path back from refutation.
- **Entry points:** OWN-07 (from the "Explicit restoration required" refusal); OWN-04 (topic shown as REFUTED).
- **Primary interactions:** Select the REFUTED topic; choose the restoration provenance and strength; give **explicit confirmation** (the service rejects restore without `confirmed: true`); submit under expected revision + idempotency key.
- **Data it may display / authorization boundary:** Owner-only, own World only. May display the topic's refuted status and its testimony history (testimony persists as history; status/strength reset to the owner-selected state, never automatically to the pre-refutation strength — CORE-COR-03). *Must never appear:* any automatic restoration, or RESTORE offered as a correction type in OWN-07.
- **Grounding:** `POST /api/studio/worlds/:worldId/topics/:topicId/restore` → `service.restoreTopic()` (event `TOPIC_RESTORED`).
- **Required states:** empty — no REFUTED topics: the operation is unavailable with an explanatory empty state; loading — submission in progress; error — topic not REFUTED, missing explicit confirmation, or unsupported provenance/strength → 400 via SYS-06; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for the action; contextual banner as OWN-05; revision-conflict → SYS-05.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds/:worldId/topics/:topicId/restore` (its own distinct operation, per Ch. 22 §22.4 and CORE-COR-03; SLICE-BUILD-REPORT §4.2).
- **Requirement IDs engaged:** CORE-COR-03, CORE-COR-08.

### OWN-09 — Studio remove-buoy operation (REMOVE_BUOY)

- **Purpose:** Stop keeping a topic visible: remove the buoy (the 0.15 visibility floor) **without** rejecting the topic and without erasing its history.
- **Entry points:** OWN-04 / OWN-07 context for a buoyed topic.
- **Primary interactions:** Invoke REMOVE_BUOY for a topic under expected revision + idempotency key; receive confirmation that `buoy: false`. The surface must keep this choice visibly distinct from KEEP_WATCHING (keep exploring) and from REJECT (CORE-COR-08 — collapsing any two is non-conforming).
- **Data it may display / authorization boundary:** Owner-only, own World only. May display the topic's buoy status and the consequence of removal (the topic may submerge under tidal decay; submersion is neither deletion nor refutation). *Must never appear:* wording presenting REMOVE_BUOY as rejection, deletion, or erasure.
- **Grounding:** `POST /api/studio/worlds/:worldId/topics/:topicId/remove-buoy` → `service.removeBuoy()` (event `BUOY_REMOVED`).
- **Required states:** empty — no buoyed topics: operation unavailable with explanatory empty state; loading — submission in progress; error — unknown topic → 400 via SYS-06; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for the action; contextual banner as OWN-05; revision-conflict → SYS-05.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds/:worldId/topics/:topicId/remove-buoy` (its own distinct operation; submitted as a correction type it is rejected — test S02-09).
- **Requirement IDs engaged:** CORE-COR-08, CORE-COR-07.

### OWN-10 — Correction Receipt view

- **Purpose:** Show, for any material action, its Receipt: the rule applied, the reducer version (`testimony-v1`), the revision, and the event time — Receipts are queries against the Testimony Ledger, not generated explanations (CORE-COR-06).
- **Entry points:** OWN-04 (Receipt history); OWN-07 / OWN-08 / OWN-09 (Receipt returned with each committed action).
- **Primary interactions:** Browse the World's event/Receipt list; inspect a single Receipt (revision, type, rule, reducer version, timestamp).
- **Data it may display / authorization boundary:** Owner-only, own World only. This is the owner's Receipt surface and may show owner-permitted detail. *Must never appear:* another World's Receipts; any Receipt content reformulated as a generated narrative explanation; visitor-facing Receipt content (the visitor's resolution-safe explanation is VST-05, a different surface with a stricter boundary).
- **Grounding:** `service.correct()` returns `receipt: { reducerVersion, rule, revision }` per correction; `service.getStudioView()` returns `receipts` derived from the ledger events. Idempotent retry returns the original committed result including its Receipt (test S02-07).
- **Required states:** empty — no events beyond `WORLD_CREATED`: Receipt list shows creation only / an explicit no-corrections-yet state; loading — list loading; error — SYS-06; denial — non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — n/a for viewing Receipts (the Ledger is owner-authoritative state and is never quarantined; quarantine affects derived projections only).
- **Scope classification:** Prototype-only — Existing operation — basis: receipts are returned by the corrections operation (`POST /api/first-light/worlds/:worldId/corrections` returns a receipt object) and listed in the Studio view (`GET /api/studio/worlds/:worldId`).
- **Requirement IDs engaged:** CORE-COR-06, CORE-PW-06.

### OWN-11 — Lens creation

- **Purpose:** Create a Lens grant: the owner's disclosure decision in object form — resolution, audience (a named recipient), and expiry, over a territory set.
- **Entry points:** OWN-03 / OWN-04 (share a view of this World).
- **Primary interactions:** Select the territory set — **this control is labelled on the screen itself as a design surface whose selection has no backend effect in the accepted implementation** (see the split classification below); choose resolution (CONTINENT / COAST / HARBOUR — `RESOLUTIONS` in `src/domain.js`); name the recipient (`recipientId`); set expiry (`expiresAt`); create the grant and receive the one-time invitation token (shown once, stored only as a SHA-256 hash). Provision the recipient's visitor credential via OWN-14 — a grant whose recipient has no provisioned credential cannot be used (see VST-01).
- **Data it may display / authorization boundary:** Owner-only, own World only. May display the grant's public fields (`publicGrant()`: grant ID, World, recipient, resolution, expiry, bound revision, revocation status — never the token hash). *Must never appear:* a public-link or anyone-with-the-link audience option (OQ-8 — prohibited form, SYS-07); an anonymous-audience option presented as working (VST-07 is Deferred); the invitation token after its one-time display.
- **Grounding and limitation (read carefully):** `POST /api/studio/worlds/:worldId/grants` → `service.createGrant()` implements recipient, resolution, and expiry, binds the grant to the current World revision, and atomically persists grant + derived projection in one storage operation (F-02: `createGrantWithProjection`). **The accepted `createGrant()` accepts no territory-set parameter:** the derived projection it binds is the preapproved synthetic fixture for the chosen resolution, not a compilation over the owner's territories. The territory-set control on this screen is therefore a Stage 03 design surface whose selection has **no backend effect in the accepted implementation**, and the screen must say so wherever the control is presented in a prototype. General compilation over owner data is OWN-18 (Deferred, Q-09).
- **Required states:** empty — no testified/compilable material, or an empty territory set: the screen must state that a Lens over an empty set discloses nothing (CORE-LENS-01) — the PRD records Lens-creation screen content for this case as unspecified (Gap G-01), so the wording is a G1 design proposal, not a specified behaviour; loading — creation in progress; error — unsupported resolution or invalid expiry → 400 via SYS-06; denial — non-owner → SYS-01; expiry — the *grant's* expiry is set here; an expired owner session → SYS-01; revocation — a grant created here can later be revoked from OWN-13; this screen shows that path; quarantine — if the World is quarantined, grant creation is not blocked by the service, but the screen must warn that no Perspective will be served while quarantine stands (SYS-04).
- **Scope classification:** Split classification (AUD-02). Grant creation element → Prototype-only — Existing operation — grounding route: `POST /api/studio/worlds/:worldId/grants` (recipient, resolution, expiry, bound revision, atomic fixture binding). Territory-set selection control element → Prototype-only, with **no backend effect** — the accepted `createGrant()` accepts no territory-set parameter.
- **Dependency / handoff (AUD-04):** Conveyance of the one-time Invitation/token to the recipient is out-of-band and unspecified; unresolved dependency requiring a G2 decision.
- **Requirement IDs engaged:** CORE-LENS-01, CORE-LENS-03, CORE-LENS-07, CORE-LENS-09 (grants/expiry portion; forwarding portion blocked on Q-10 and not inventoried as a control).

### OWN-12 — Lens preview + Perspective Passport

- **Purpose:** Show the owner, before and after publication, the **exact visible result a visitor will receive**, rendered from the payload itself, plus the Perspective Passport: a human-readable summary of authorised subjects, detail level, recipient, expiration, and whether comparison is permitted.
- **Entry points:** OWN-11 (before creating/issuing the grant); OWN-13 (for an existing grant).
- **Primary interactions:** Inspect the preview payload at the granted resolution; read the Passport summary; proceed to issue (OWN-11) or manage (OWN-13) the grant.
- **Data it may display / authorization boundary:** Owner-only. The preview may display exactly the compiled payload — in the accepted implementation, the fixture payload for the grant's resolution (P-SYN-CONTINENT / P-SYN-COAST / P-SYN-HARBOUR), whose topics carry only the compiled public fields (`PUBLIC_PROMINENCE_BAND`, `PUBLIC_ASSERTION_STATE`, `PUBLIC_EXPLORATION_STATE`, and at HARBOUR a `whyHere` string). *Must never appear:* raw `strength` or `testimony` values in the preview (they are absent from the wire payload — test S02-03 asserts no `strength`/`testimony` keys); PROPOSED or REFUTED material in any form, including generalised traces (CORE-LENS-05 — SYN-T5/SYN-T6 are absent from every fixture); anything in the Passport that adds disclosure beyond the preview or hides disclosure within it (CORE-LENS-02). The Passport's comparison field must read as **not permitted** — comparison is Deferred (SYS-08).
- **Grounding:** In the slice, preview = the served payload itself (SLICE-BUILD-REPORT §3, CORE-LENS-02): the fixture bound at grant creation and served verbatim by `service.getVisitorPerspective()`. The Passport is a Stage 03 design surface summarising `publicGrant()` fields + the bound payload; it introduces no new backend behaviour.
- **Required states:** empty — no grant/payload yet: preview shows nothing-to-preview and directs to OWN-11; loading — payload loading; error — SYS-06; denial — non-owner → SYS-01; expiry — preview of an expired grant must be labelled expired and must not present the Perspective as openable (SYS-02 wording applies to the visitor side); revocation — preview of a revoked grant must be labelled revoked (SYS-03); quarantine — preview of a grant on a quarantined World must be labelled unavailable (SYS-04), never presented as servable.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective` (the payload the preview renders) with the grant record from the Studio view (`GET /api/studio/worlds/:worldId`). Basis: the fixture payload bound to the grant is fixed per resolution and inspectable; no dedicated preview operation exists — the preview/Passport presentation is a design surface.
- **Requirement IDs engaged:** CORE-LENS-02, CORE-LENS-03, CORE-LENS-05, CORE-LENS-06 (eligibility as embodied in the fixtures; the general rule awaits Q-09).

### OWN-13 — Invitation / grant management, incl. revocation

- **Purpose:** List a World's grants, inspect each grant's recipient, resolution, bound revision, expiry, and revocation status, and **revoke** a grant at any time.
- **Entry points:** OWN-04; OWN-12.
- **Primary interactions:** List grants; revoke a grant (takes effect as a server-side fact enforced at the moment of each subsequent visitor attempt); read the plain statement of revocation's limits — revocation cannot erase what a visitor already saw, copied, or saved outside the system while the grant was valid (CORE-LENS-07).
- **Data it may display / authorization boundary:** Owner-only, own World only; grants of other Worlds and other owners are not listed (a grant belonging to another World returns 404 on revoke). *Must never appear:* token hashes or any token material (`publicGrant()` strips `tokenHash`); visitor credentials; a "restore/reinstate grant" action (none is implemented — a revoked grant is not un-revoked; a new grant is a new owner action).
- **Grounding:** `service.listGrants()` (via `getStudioView()`); `POST /api/studio/worlds/:worldId/grants/:grantId/revoke` → `service.revokeGrant()`. Revocation defeats a previously served view (test S02-05).
- **Required states:** empty — no grants: explicit no-grants state directing to OWN-11; loading — list loading; error — unknown grant → 404 via SYS-06; denial — non-owner → SYS-01; expiry — expired grants are listed with expired status (their visitor-side presentation is SYS-02); revocation — this screen is the revocation control; after revocation the row shows revoked status with the revocation timestamp; quarantine — grants on a quarantined World are listed with the World's quarantine status; revocation remains available during quarantine.
- **Scope classification:** Prototype-only — Existing operation — grounding routes: `GET /api/studio/worlds/:worldId` (Studio view, grants list) and `POST /api/studio/worlds/:worldId/grants/:grantId/revoke`.
- **Dependency / handoff (AUD-04):** Conveyance of the one-time Invitation/token to the recipient is out-of-band and unspecified; unresolved dependency requiring a G2 decision.
- **Requirement IDs engaged:** CORE-LENS-07, CORE-LENS-09 (grants/expiry portion), CORE-LENS-01.

### OWN-14 — Visitor-principal provisioning

- **Purpose:** Register a named recipient's **own visitor credential** — the F-01 mechanism that binds a visitor to the grant's named recipient — so the recipient can use an Invitation.
- **Entry points:** OWN-11 (provision the recipient named in a new grant); OWN-13 (provision or re-provision a recipient).
- **Primary interactions:** Supply the recipient ID; receive the generated visitor credential **shown once** (stored only as a SHA-256 hash); convey it to the named recipient through a channel outside this system (the implementation provides no delivery mechanism, and none is invented here). Screen copy must describe this credential as a **prototype mechanism** that binds a request to the named recipient within the prototype — never as identity verification or proof of who the recipient is in the real world (D03-04 §1 row 14; B-01; B-20).
- **Data it may display / authorization boundary:** Owner-authenticated only (the route calls `owner()` before provisioning). May display the recipient ID and, once, the newly issued credential. *Must never appear:* the credential after its one-time display; any stored plaintext credential (none exists); a list of existing credentials (no enumeration operation exists); any other recipient's credential.
- **Grounding:** `POST /api/studio/visitor-principals` → `service.registerVisitorPrincipal()` (SLICE-BUILD-REPORT §7, F-01): credential is `randomBytes(24)`, distinct from any invitation token; resolution of a presented credential to a recipient ID happens server-side (`#resolveVisitorPrincipal`), and a submitted `recipientId` from a visitor is never trusted.
- **Required states:** empty — no recipients provisioned: explicit state directing to provision before issuing usable Invitations; loading — issuance in progress; error — invalid recipient ID → 400 via SYS-06; a duplicate registration for the same credential hash fails at the storage layer (presented via SYS-06; see Judgment Call J-05); denial — unauthenticated/non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — no credential-revocation operation is implemented; the effective owner control over a provisioned recipient is grant revocation (OWN-13), and the screen must not present a credential-revocation control as working; quarantine — n/a.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `POST /api/studio/visitor-principals`.
- **Dependency / handoff (AUD-04):** The visitor credential is shown once at provisioning; its delivery to the named recipient and the recipient's first-credential setup are out-of-band assumptions with no mechanism in the accepted implementation (A-48 qualification: the prototype registry does not establish secure credential delivery); unresolved dependency requiring a G2 decision.
- **Requirement IDs engaged:** CORE-LENS-09 (audience portion), CORE-VIS-01, CORE-LENS-07.

### OWN-15 — Replay-integrity / quarantine status (owner)

- **Purpose:** Show the owner the World's replay-integrity result — stored digest vs replay digest, MATCH / MISMATCH — and the resulting quarantine status of its derived projections.
- **Entry points:** OWN-03 / OWN-04 (integrity banner); OWN-13 (quarantine context for grants).
- **Primary interactions:** Trigger/refresh a replay verification; read MATCH/MISMATCH and the two digests; understand the consequence: on MISMATCH, derived projections are quarantined and the visitor path serves nothing while quarantined; a mismatch never authorises overwriting owner-authoritative state (invariant 17; CORE-PW-06).
- **Data it may display / authorization boundary:** The underlying service operation (`service.verifyReplay()`) is not owner-authenticated in the implementation — it takes only a World ID — and **no HTTP route exposes it in `src/server.js`**. This screen is therefore inventoried as an owner surface by product intent, and its authorization boundary is stated as a requirement on any future exposure: owner-only, own World only, and it must never be reachable by a visitor. *Must never appear:* any control that "repairs" a mismatch by overwriting owner state; any presentation of a quarantined projection as available (charter §10 adversarial scenario).
- **Grounding:** `service.verifyReplay()` — folds the ledger (`foldEvents`), compares `canonicalDigest` of stored vs replayed projection, calls `storage.setQuarantined(worldId, !match)`. Test S02-11: tampered projection → MISMATCH, quarantine, visitor path serves nothing. F-03 test: quarantine persists across a fresh restart.
- **Required states:** empty — never verified: status shows "not verified" rather than implying MATCH; loading — verification in progress; error — unknown World → 404 via SYS-06; SYS-06 otherwise; denial — (future exposure) non-owner → SYS-01; expiry — session expiry → SYS-01; revocation — n/a; quarantine — this screen is the quarantine status presentation for the owner: MISMATCH/quarantined state shows what is withheld (all visitor Perspectives for this World), why, and that owner surfaces remain available; it must not offer visitor access.
- **Scope classification:** Prototype-only — service-level backing — Prototype-only presentation backed by Existing service-level behavior. Basis, stated explicitly: `verifyReplay()` is implemented and tested at service level only (tests S02-11, F-03); there is no HTTP route and no UI in the accepted implementation (see Judgment Call J-03).
- **Dependency / handoff (AUD-04):** Quarantine **resolution** (who is told, what they can do, how quarantine is lifted) is unspecified and unscreened — this screen covers status only; unresolved dependency requiring a G2 decision and, in its workflow aspect, a Founder decision.
- **Requirement IDs engaged:** CORE-PW-06, CORE-VIS-06 (request-time checks), CORE-LENS-07.

### OWN-16 — World deletion

- **Purpose:** Delete a World the owner owns, with honest wording about what deletion means in this system.
- **Entry points:** OWN-03 / OWN-04 (World settings/danger zone; no such grouping is implemented — placement is a G1 design proposal).
- **Primary interactions:** Select the World; confirm deletion as a deliberate, separately authorised owner action; receive the counts-only logical-deletion result (the storage layer returns a manifest of counts, per the retention boundary R-03).
- **Data it may display / authorization boundary:** Owner-only, own World only (`deleteWorld()` checks ownership). May display the deletion manifest counts. **Wording boundary (mandatory):** deletion here is **logical deletion only**. The screen must not use "erased", "securely deleted", "wiped", "permanently destroyed", "all copies removed", or any erasure-compliance claim — physical erasure was not implemented or tested (addendum C-02; D03-04 §1 row 24, B-06), remnants outside the prototype's own storage boundary are outside the tested scope, and retention periods are undecided (Q-13). Approved sense of the copy: the World is logically deleted, does not return, and its derived projections are removed/invalidated with it; no claim is made about physical media erasure. *Must never appear:* another owner's Worlds in any deletion confirmation.
- **Grounding:** `DELETE /api/studio/worlds/:worldId` → `service.deleteWorld()` → `storage.deleteWorld()` (counts-only logical-deletion manifest). Tests S02-15 … S02-17 concern logical deletion and crash recovery only.
- **Required states:** empty — n/a (deletion acts on an existing World; a World with no content is still deletable and the confirmation must not imply there is "nothing to delete" in the erasure sense); loading — deletion in progress; no partial-deletion state is presented as complete — until deletion obligations are fulfilled, deletion is pending, not complete (CORE-PW-08); error — unknown World → 404 via SYS-06; denial — non-owner → SYS-01; expiry — session expiry → SYS-01 (deletion must not proceed on an expired session); revocation — all grants for the World cease with the World; the confirmation copy must state that Invitations for this World will no longer serve; quarantine — deletion remains available for a quarantined World and ends the quarantine by ending the World.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `DELETE /api/studio/worlds/:worldId`; mechanics portion of CORE-PW-08 only; periods portion blocked on Q-13.
- **Requirement IDs engaged:** CORE-PW-08, CORE-PW-01.

### OWN-17 — First Light draft review and rapid correction pass

- **Purpose:** The cold-start experience the PRD specifies: minimal seed (three interests, or one link labelled low-coverage; five as the richer start), a disclosed, deliberately arguable draft ("This is a first draft of your world. It is supposed to be argued with. Wrong is useful."), a rapid correction pass using the four v1 operators plus at most one adjacency question (target under four minutes), and whole-draft-wrong recovery (manual topic entry, reset without penalty, re-draft from corrected seeds).
- **Entry points:** New-owner onboarding (specified journey Step A1); re-draft path from a wholesale rejection.
- **Primary interactions (specified, not implemented):** Give seeds; review the draft; correct rapidly; reject wholesale and choose a recovery path.
- **Data it may display / authorization boundary:** Owner-only by specification. Draft material is provisional state, kept independent from owner-authoritative and disclosure state (CORE-PW-03), and is the owner's private working surface only. *Must never appear:* any claim that draft generation is a live backend capability — **the accepted implementation has no First Light draft generation; its accepted path is an empty World (OWN-02)**. Any Stage 03 prototype of this screen must be labelled simulated.
- **Required states (as specified/proposed for prototyping):** empty — before any seed, the World does not exist; after wholesale rejection, an empty World is a valid state, not an error; loading — draft generation (simulated); error — recovery is CORE-FL-06 (manual entry / reset / re-draft), never a failure framing; refusal is never penalised and total rejection is never framed as the person being hard to understand; denial — n/a beyond owner authentication (OWN-01); expiry — n/a specified; revocation — n/a; quarantine — n/a.
- **Scope classification:** **Prototype-only** (CORE-FL-01 … CORE-FL-06 specified; no backend claim). Draft Survival (CORE-FL-07) is a diagnostic only, never a gate (Q-33); the Draft Selector term Q (CORE-FL-08) is unsettled (Q-37) and no part of this screen may depend on one meaning of it.
- **Requirement IDs engaged:** CORE-FL-01, CORE-FL-02, CORE-FL-03, CORE-FL-04, CORE-FL-05, CORE-FL-06, CORE-FL-07 (diagnostic only), CORE-COR-01 (operators reused).

### OWN-18 — General Lens compilation over live owner data

- **Purpose (deferred capability):** Compiling a Perspective from the owner's actual World data through the eight-step Lens Compiler (CORE-LENS-04), under a field-level disclosure schema per resolution.
- **Why deferred:** The field-level disclosure schema is the single largest specification gap in Track A and is owed under **Q-09** (CORE-LENS-08). The accepted implementation deliberately substitutes preapproved synthetic fixtures and does **not** validate a complete Lens Compiler; its compiler test (S02-12) is a future test, not part of the accepted suite. Stage 03 explicitly does not authorize live owner-data compilation.
- **Entry points / interactions / data:** None inventoried. No screen, control, or prototype behaviour is specified here; any interface illustrating this capability must be clearly labelled conceptual (charter §4) and must not silently introduce a production requirement.
- **Required states:** All n/a — no working screen exists.
- **Scope classification:** **Deferred** (Q-09 via CORE-LENS-08).
- **Requirement IDs engaged:** CORE-LENS-04, CORE-LENS-06, CORE-LENS-08.

---

## 3. Visitor screens

All visitor screens share one grounding route: `GET /api/visitor/worlds/:worldId/perspective` → `service.getVisitorPerspective()`, which checks, at the moment of the attempt and in this order: quarantine → invitation token present → grant exists and belongs to this World → **recipient binding (F-01)** → revocation → expiry → World exists → derived projection exists — and serves the stored fixture payload verbatim. Every failure except quarantine is the identical generic 403 (SYS-01); quarantine is 503 (SYS-04). All responses carry `Cache-Control: no-store`.

### VST-01 — Invitation entry

- **Purpose:** Admit a named recipient to the Perspective their Invitation grants — on **two** credentials, not one.
- **Entry points:** Arrival with an Invitation (the invitation token conveyed to the named recipient; the entry mechanism/link form is not implemented and is not invented here — see SYS-07 for the prohibited public-link form).
- **Primary interactions:** Present (a) the invitation token (`x-invitation-token`) **and** (b) the visitor's own credential (`x-visitor-credential`, provisioned via OWN-14). Token possession alone is **insufficient** (F-01; D03-04 B-01): the service resolves the credential server-side to a recipient ID and requires it to equal the grant's named recipient on every request. The credential is a prototype binding mechanism, not identity verification (D03-04 §1 row 14), and entry copy must not describe it as proving the visitor's real-world identity.
- **Data it may display / authorization boundary:** Before successful admission, this screen displays **no** Perspective content, no partial view, no World data, and no indication of what the Perspective contains, who else was invited, or whether a World/grant exists. A submitted `recipientId` value (e.g. a spoofed query claim) is never read or trusted. *Must never appear:* any distinction between "token valid, credential wrong", "wrong recipient", "no such grant", and "forged token" — all are SYS-01, byte-identical (F-01 tests assert denial bodies byte-identical to the forged-token denial).
- **Required states:** empty — n/a (no content exists before admission); loading — checks in progress, no content shown early; error — SYS-06 for malformed requests only, with no admission-relevant detail; denial — SYS-01 (missing token, forged token, cross-World token, missing/forged/wrong-recipient credential, spoofed recipient claim); expiry — expired grant → SYS-02 (presented identically to SYS-01); revocation — revoked grant → SYS-03 (presented identically to SYS-01); quarantine — SYS-04 (503, "Perspective unavailable").
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective`.
- **Requirement IDs engaged:** CORE-VIS-01, CORE-VIS-02 (registered/named-recipient form only; the anonymous form is VST-07, Deferred), CORE-LENS-07, CORE-LENS-09.

### VST-02 — Perspective viewing — Continent

- **Purpose:** The finite visitor walk at Continent resolution: the broadest, coarsest granted view.
- **Entry points:** VST-01 (grant resolution = CONTINENT).
- **Primary interactions:** Walk the finite set of discovery objects (fixture topics SYN-T1 … SYN-T4 with `PUBLIC_PROMINENCE_BAND` / `PUBLIC_ASSERTION_STATE` / `PUBLIC_EXPLORATION_STATE` only); ask "Why is this here?" (VST-05); leave at any point without penalty.
- **Data it may display / authorization boundary:** Only the P-SYN-CONTINENT payload, verbatim. Detail(Output) ≤ Resolution(Grant) holds structurally — finer data is absent from the payload, not hidden in display (invariant 9; CORE-VIS-06: presentation cannot add information). *Must never appear:* Coast/Harbour detail for the same material (resolution escalation fails closed — test S02-04); raw strength/testimony; PROPOSED or REFUTED material in any form (CORE-LENS-05); the owner's private names, evidence, or unselected territories (CORE-VIS-01); any feed, recommendation, or continuation beyond the finite set (CORE-VIS-03).
- **Required states:** empty — the payload is the whole visit; there is no "more content" state; a payload with no objects would present as a complete, empty visit, not an error (the accepted fixtures always contain four topics — this state is a design provision, see Judgment Call J-06); loading — payload loading; nothing rendered from cache after grant state changes (no-store; checks at request time); error — SYS-06; denial — any failed re-check during the visit → SYS-01, with no partial view retained; expiry — grant expires mid-visit → SYS-02 presentation and the visit ends; revocation — grant revoked mid-visit → SYS-03 presentation, in-progress actions under the grant are blocked (CORE-LENS-07); quarantine — SYS-04.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective` (synthetic fixture P-SYN-CONTINENT only — not a compilation of any real World).
- **Requirement IDs engaged:** CORE-VIS-01, CORE-VIS-03, CORE-VIS-05, CORE-VIS-06, CORE-LENS-03, CORE-LENS-05.

### VST-03 — Perspective viewing — Coast

- **Purpose:** The finite visitor walk at Coast resolution: territory-level detail within the granted view, finer than Continent, coarser than Harbour.
- **Entry points:** VST-01 (grant resolution = COAST).
- **Primary interactions:** As VST-02, over the P-SYN-COAST payload.
- **Data it may display / authorization boundary:** Only the P-SYN-COAST payload, verbatim (note the fixture's bands differ from Continent's for the same synthetic topics — the payload served is the one bound to the grant's resolution, and no screen may blend payloads across resolutions). *Must never appear:* everything listed under VST-02, and additionally any Harbour-level topic specifics or `whyHere` text — the COAST fixture carries no `whyHere` field (see VST-05).
- **Required states:** As VST-02, state for state (empty / loading / error → SYS-06 / denial → SYS-01 / expiry → SYS-02 / revocation → SYS-03 / quarantine → SYS-04).
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective` (synthetic fixture P-SYN-COAST only).
- **Requirement IDs engaged:** CORE-VIS-01, CORE-VIS-03, CORE-VIS-05, CORE-VIS-06, CORE-LENS-03, CORE-LENS-05.

### VST-04 — Perspective viewing — Harbour

- **Purpose:** The finite visitor walk at Harbour resolution: the finest granted detail — specific topics with the evidence labels the owner chose to include.
- **Entry points:** VST-01 (grant resolution = HARBOUR).
- **Primary interactions:** As VST-02, over the P-SYN-HARBOUR payload; "Why is this here?" is fully answerable here (VST-05).
- **Data it may display / authorization boundary:** Only the P-SYN-HARBOUR payload, verbatim, including its per-topic `whyHere` strings. Even at Harbour: *must never appear:* raw strength/testimony, private evidence, aliases, or hidden relationship details (CORE-LENS-04 step 6 as embodied in the fixture); PROPOSED/REFUTED material; anything about territories the Lens did not select.
- **Required states:** As VST-02, state for state (empty / loading / error → SYS-06 / denial → SYS-01 / expiry → SYS-02 / revocation → SYS-03 / quarantine → SYS-04).
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective` (synthetic fixture P-SYN-HARBOUR only).
- **Requirement IDs engaged:** CORE-VIS-01, CORE-VIS-03, CORE-VIS-04, CORE-VIS-05, CORE-VIS-06, CORE-LENS-03, CORE-LENS-05.

### VST-05 — "Why is this here?" explanation

- **Purpose:** Answer, for any discovery object the visitor is shown, why it is here — honestly, at or below the granted resolution.
- **Entry points:** VST-02 / VST-03 / VST-04 (per discovery object).
- **Primary interactions:** Ask the question for an object; read the resolution-safe answer. Where no resolution-safe answer exists, the answer is given honestly at the level that does exist — e.g. that the owner chose to include this territory — rather than by reaching into private evidence (CORE-VIS-04).
- **Data it may display / authorization boundary:** At HARBOUR, the fixture's `whyHere` string ("The owner chose to include this synthetic territory.") is served as part of the payload. At CONTINENT/COAST the accepted fixtures carry **no** `whyHere` field, so the only conforming answer is the honest at-level statement derivable from the grant itself (the owner included this at the granted resolution) — a design-surface answer, not served data. *Must never appear:* any answer that names, paraphrases, counts, or otherwise encodes what was generalised away beneath a label (CORE-VIS-04); the owner's free-text "why" answers (invariant 15 — these never leave the owner's World); any indication of where the owner's map is still provisional (visitor-visible dotted coastlines are a deferred decision, not pilot behaviour).
- **Grounding:** `whyHere` in `FIXTURE_PAYLOADS.HARBOUR` (`src/fixtures.js`); explanations are part of the verbatim served payload, generated after generalisation in the specified compiler (CORE-LENS-04 step 7) and embodied here by the fixture.
- **Required states:** empty — an object with no available explanation presents the honest at-level statement, never a fabricated reason; loading — as VST-02; error — SYS-06; denial — asking about an object outside the granted payload is impossible by construction (no such object is rendered); any request-level failure → SYS-01; expiry / revocation — if the grant ends, the explanation surface ends with the visit (SYS-02 / SYS-03); quarantine — SYS-04.
- **Scope classification:** Prototype-only — Existing operation — grounding route: `GET /api/visitor/worlds/:worldId/perspective`. Basis note: `whyHere` content is served **only** in the HARBOUR fixture payload; at CONTINENT/COAST no explanation content exists in the accepted payloads, and the honest at-level answer there is a design-surface answer, not served data (see Judgment Call J-04).
- **Requirement IDs engaged:** CORE-VIS-04, CORE-VIS-05, CORE-VIS-06.

### VST-06 — Seed saving from a Perspective

- **Purpose (specified, not implemented):** Let a visitor deliberately save a Seed — a visitor-owned reference to a permitted discovery object, at the resolution at which it was seen, plus optional personal notes — as the only bridge between two people's geographies.
- **Entry points:** VST-02 / VST-03 / VST-04 (explicit save act on a discovery object).
- **Primary interactions (specified):** Deliberate save only — never silent import from viewing, dwelling, or adjacency (CORE-SEED-01). After revocation of the source Perspective, the holder keeps their own notes and any lawful public-resource bookmark, never a copy of the revoked Perspective (CORE-SEED-04).
- **Data it may display / authorization boundary:** A Seed never contains copied private World state and carries no finer detail than the grant allowed (CORE-SEED-02); saving confers no ownership and no licence (CORE-SEED-03, invariant 40); saving mutates no World (CORE-SEED-05). *Must never appear:* any claim that Seed saving is a live capability — **no Seed operation exists in the accepted implementation**, and Seeds sit outside the slice's primary journeys. Any Stage 03 prototype must label this simulated.
- **Required states (proposed for prototyping):** empty — a visitor who saves nothing leaves with nothing saved; that is a complete, valid outcome, never a failure state; loading — simulated; error — simulated save failure must not imply a save occurred; denial — saving under an invalid/expired/revoked grant is blocked (CORE-LENS-07 blocks in-progress visitor actions, incl. saving further Seeds, on revocation); expiry — SYS-02; revocation — SYS-03 for access, with CORE-SEED-04 governing what the holder retains; quarantine — SYS-04.
- **Scope classification:** **Prototype-only** (CORE-SEED-01 … CORE-SEED-07 specified; no backend claim).
- **Requirement IDs engaged:** CORE-SEED-01, CORE-SEED-02, CORE-SEED-03, CORE-SEED-04, CORE-SEED-05, CORE-SEED-06, CORE-SEED-07.

### VST-07 — Anonymous Perspective opening

- **Purpose (specified, with a flagged tension):** CORE-VIS-02 specifies that a visitor may open a valid Perspective anonymously, without registering or surrendering personal data, where the grant's audience permits it.
- **The tension (flagged, not resolved):** The accepted implementation's audience model is named-recipient Invitation with **recipient binding** (F-01): token possession alone is insufficient and an own credential is required. An anonymous opening — no credential, no recipient identity — cannot be reconciled with that binding for named-recipient grants, and the accepted implementation provides **no** anonymous path. Whether any grant form may permit anonymous opening, and how it would coexist with F-01 binding, is a founder-level question this inventory does not resolve (related: CORE-VIS-07 exact visitor flows are blocked on Q-05).
- **Entry points / interactions / data:** None inventoried as working. This entry must not be prototyped as if live or described as available, and no prototype of it may weaken or appear to weaken the VST-01 binding.
- **Required states:** All n/a for any working screen; an invalid, expired, or revoked grant yields no Perspective and no partial view under any form (CORE-VIS-02).
- **Scope classification:** **Deferred** (AUD-01) — anonymous opening is Deferred pending separate Founder reconciliation and authorization (G-17); named-recipient binding is the only accepted access model. This classification records the current accepted state without deciding the future of anonymous access.
- **Requirement IDs engaged:** CORE-VIS-02, CORE-VIS-07 (blocked on Q-05).

### VST-08 — SEE YOURS / Seed-Born World start

- **Purpose (deferred journey step):** A visitor begins their own World from Seeds deliberately saved in another's Perspective — "here is what visiting this owner made of you; argue with it" — correcting the draft through their own First Light, with nothing of the owner's private model carried over (CORE-SY-01 … CORE-SY-04).
- **Why deferred:** The step's pilot population is undefined (CORE-SY-06, blocked on Q-02), its success definition is unratified (CORE-SY-05, Q-29/Q-35), the Seed→World conversion contract beyond Bible Ch. 19 does not exist (Gap G-05), and its prerequisite — Seed saving (VST-06) — is itself Prototype-only with no backend. Seeds and SEE YOURS were excluded from the Stage 02 slice by design.
- **Entry points / interactions / data:** None inventoried. No screen is specified here; session claiming (CORE-SY-04) and the no-Seeds empty state (which follows the ordinary First Light path) are recorded in the PRD and await a future authorization.
- **Required states:** All n/a — no working screen exists. (Recorded boundary: an unclaimed visitor session confers no rights and expires with its grant, CORE-SY-04.)
- **Scope classification:** **Deferred**.
- **Requirement IDs engaged:** CORE-SY-01, CORE-SY-02, CORE-SY-03, CORE-SY-04, CORE-SY-05 (blocked), CORE-SY-06 (blocked).

### VST-09 — Abuse report / block flows

- **Purpose (deferred capability):** Report, block, mute, and access-restriction flows for a shared Perspective (CORE-VIS-08).
- **Why deferred:** These flows are **unspecified** in the corpus (Gap G-07) and blocked on **Q-17**. They are not a requirement of the closed pilot journey, but they block any wider social pilot or social discovery beyond it (Bible Ch. 32 trigger).
- **Entry points / interactions / data:** None inventoried. No report/block control may be presented as working in any prototype of the closed journey.
- **Required states:** All n/a — no working screen exists.
- **Scope classification:** **Deferred** (CORE-VIS-08 / Q-17).
- **Requirement IDs engaged:** CORE-VIS-08.

---

## 4. Shared / system states

### SYS-01 — Generic denial

- **Purpose:** The single presentation for every authorization failure, so that denial itself discloses nothing.
- **Reached from:** OWN-01 … OWN-16 (owner-side failures), VST-01 … VST-05 (visitor-side failures).
- **Presentation:** HTTP 403, body `{ error: 'FORBIDDEN', message: 'Forbidden' }` (`forbidden()` in `src/domain.js`). The body is **identical regardless of cause** — forged token, missing token, wrong recipient, missing/forged visitor credential, spoofed recipient claim, cross-World token, visitor credential presented as owner credential, resolution escalation, non-owner access to a World, or a missing derived projection. It contains no private data, no counts, no existence hints, and no reason codes.
- **Data boundary:** *Must never appear:* which check failed; whether the World, grant, topic, or recipient exists; any distinguishing timing/text variation introduced by the interface layer. Interface copy around this state must be equally generic ("You don't have access to this.") and must not offer cause-specific recovery paths that would let a caller probe the difference.
- **Required states:** This entry *is* the denial state. Empty/loading — n/a; error — distinct from SYS-06 (denial is not an error and must not be styled as a system failure); expiry/revocation — presented through this state on the visitor side (see SYS-02 / SYS-03).
- **Scope classification:** Prototype-only — Existing response behavior — basis: the 403 response contract (status + body) is implemented and test-asserted on the accepted HTTP surface (asserted byte-identical across ordinary authorization-failure causes in tests S02-04 and the F-01 tests); the presentation is a design surface. Quarantine is not a cause of this state — see SYS-04.
- **Requirement IDs engaged:** CORE-VIS-06, CORE-LENS-07, CORE-COR-05 (403 semantics), CORE-VIS-01.

### SYS-02 — Expired grant

- **Purpose:** The visitor-side presentation when a grant's expiry has passed: the grant fails closed, at request time, the same way as revocation (CORE-LENS-07).
- **Reached from:** VST-01 (admission after expiry); VST-02 … VST-05 (expiry mid-visit ends the visit); OWN-12 / OWN-13 (owner-side *status label* — see below).
- **Presentation:** On the visitor side, the implementation returns the identical generic 403 as SYS-01 (`Date.parse(grant.expiresAt) <= Date.parse(at)` → `forbidden()`; test S02-14). **The visitor presentation therefore does not say "expired"** — distinguishing expiry from other denials would leak grant state to a caller who may not be the recipient. Owner-side surfaces (OWN-12, OWN-13) *do* label the grant expired, because the owner is authorized to know their own grant's state. Any Stage 03 design that wants a visitor-facing "this Invitation has expired" message is a deviation from the implemented behaviour and must be raised as a change request under charter §8, not assumed.
- **Data boundary:** No Perspective content, no partial view, no grant metadata on the visitor side.
- **Required states:** This entry *is* the expiry state. Denial — it presents as SYS-01 (visitor side); revocation — distinct cause, identical visitor presentation (SYS-03); quarantine — distinct, and checked before expiry (SYS-04).
- **Scope classification:** Prototype-only — Existing response behavior — basis: the response contract is implemented and test-asserted on the accepted HTTP surface; the presentation is a design surface. No distinct visitor response exists for expiry: the visitor presentation **is** SYS-01; the differentiated "expired" label is owner-side only.
- **Requirement IDs engaged:** CORE-LENS-07, CORE-LENS-09, CORE-VIS-02.

### SYS-03 — Revoked grant

- **Purpose:** The visitor-side presentation after the owner has revoked a grant: revocation invalidates the Perspective, its projections, and cached derivatives, and blocks in-progress visitor actions under the grant (CORE-LENS-07; invariants 4, 37).
- **Reached from:** VST-01 (admission after revocation); VST-02 … VST-06 (revocation mid-visit / mid-action); OWN-13 (the owner's revocation control and the revoked status label).
- **Presentation:** Visitor side: the identical generic 403 as SYS-01 (`grant.revokedAt` → `forbidden()`; revocation defeats a previously served view — test S02-05, with `no-store` asserted). No stale cache, retained session, or previously loaded page may extend the grant. Owner side: the grant row shows revoked status and timestamp (OWN-13), with the plain statement that revocation cannot erase what was already seen/copied/saved outside the system while the grant was valid.
- **Data boundary:** Visitor side: nothing — no content, no "revoked" reason, no metadata.
- **Required states:** This entry *is* the revocation state. Expiry — distinct cause, identical visitor presentation (SYS-02); denial — presents as SYS-01 (visitor side); quarantine — distinct (SYS-04).
- **Scope classification:** Prototype-only — Existing response behavior — basis: the response contract is implemented and test-asserted on the accepted HTTP surface; the presentation is a design surface. No distinct visitor response exists for revocation: the visitor presentation **is** SYS-01; the differentiated "revoked" label is owner-side only.
- **Requirement IDs engaged:** CORE-LENS-07, CORE-VIS-02, CORE-SEED-04 (effect on held Seeds — Prototype-only surface, VST-06).

### SYS-04 — Quarantined projection unavailable

- **Purpose:** The presentation when a World's derived projections are quarantined after a replay mismatch: the visitor path serves nothing while quarantined (CORE-PW-06; invariant 17).
- **Reached from:** VST-01 … VST-05 (any visitor attempt on a quarantined World — quarantine is the **first** check in `getVisitorPerspective()`, before token checks); OWN-03 / OWN-04 / OWN-15 (owner status).
- **Presentation:** HTTP 503, `{ error: 'PERSPECTIVE_UNAVAILABLE', message: 'Perspective unavailable' }`. This is the one visitor-side failure whose body differs from SYS-01: it says the Perspective is unavailable, and nothing more — no mismatch detail, no digest, no World data. A quarantined projection must never be presented as available (charter §10 adversarial scenario). Quarantine persists across restart (F-03 test: visitor still denied in a fresh process, status 503).
- **Data boundary:** *Must never appear (visitor side):* replay digests, mismatch reasons, or any fixture content. Owner side (OWN-15) may show digests and MATCH/MISMATCH to the owner only.
- **Required states:** This entry *is* the quarantine state. Denial/expiry/revocation — distinct causes, checked after quarantine; error — distinct from SYS-06 (503 unavailability, not a 500 failure).
- **Scope classification:** Prototype-only — Existing response behavior — basis: the 503 response contract (status + body) is implemented and test-asserted on the accepted HTTP surface; the presentation is a design surface.
- **Requirement IDs engaged:** CORE-PW-06, CORE-LENS-07, CORE-VIS-06.

### SYS-05 — Revision-conflict (409) presentation

- **Purpose:** The presentation when an owner mutation's expected revision no longer matches the World's current revision — the World has moved — or when an idempotency key is reused with a different request.
- **Reached from:** OWN-05, OWN-06, OWN-07, OWN-08, OWN-09 (all `#transact` mutations); OWN-02 (`WORLD_EXISTS` variant).
- **Presentation:** HTTP 409 (`conflict()` in `src/domain.js`). Codes seen in the implementation: `REVISION_CONFLICT` ("Revision conflict: the World has moved since the expected revision"), `IDEMPOTENCY_CONFLICT` (same key, different body), and the entity-exists codes `WORLD_EXISTS` / `TERRITORY_EXISTS` / `TOPIC_EXISTS`. The conforming recovery is a **deliberate retry against the updated World** — reload the current revision (OWN-03 / OWN-04) and re-apply — **never a silent overwrite** (CORE-COR-05; PRD Step A2 recovery). A same-key retry with an *identical* body is not a conflict: it returns the original committed result (test S02-07).
- **Data boundary:** The conflict presentation may show the owner their own World's current revision. *Must never appear:* another owner's revision/data; any "force save / overwrite anyway" control.
- **Required states:** This entry *is* the conflict presentation. Empty/loading — n/a; error — distinct from SYS-06 (a conflict is an expected, recoverable outcome, not a failure); denial — distinct (409 is only reachable by an authenticated owner of the World; non-owners get SYS-01); expiry/revocation/quarantine — n/a as causes of this state.
- **Scope classification:** Prototype-only — Existing response behavior — basis: the 409 response contract is implemented and test-asserted on the accepted HTTP surface (test S02-06: second conflicting revision → 409); the presentation is a design surface.
- **Requirement IDs engaged:** CORE-COR-05, CORE-PW-06 (Atomicity/Idempotency laws).

### SYS-06 — Service / validation error

- **Purpose:** The presentation for malformed requests, validation failures, not-found, and unexpected service failure — kept generic wherever private state could leak.
- **Reached from:** Any screen.
- **Presentation:** Per the implementation's error mapping (`src/server.js`): `ApiError` → its status with `{ error: code, message }`; anything else → 500 `{ error: 'INTERNAL', message: 'Internal error' }`. Validation failures are 400 `BAD_REQUEST` (invalid IDs, names, strengths, provenances, resolutions, expiry values, unsupported correction types — `UNSUPPORTED_CORRECTION_TYPE` — and the REFUTED-guard "Explicit restoration required"); unknown owner-scoped resources are 404 `NOT_FOUND` with a generic "Not found" message. All responses carry `Cache-Control: no-store`.
- **Data boundary:** Error bodies are generic and reveal no private topic state (Ch. 22 §22.3 as implemented). *Must never appear:* stack traces, storage details (the provisional persistence adapter's identity is not a product fact — Q-21 remains open), other owners' data, or token/credential material.
- **Required states:** This entry *is* the error state. Denial — distinct (SYS-01); expiry/revocation/quarantine — distinct entries (SYS-02 … SYS-04).
- **Scope classification:** Prototype-only — Existing response behavior — basis: the error response contracts are implemented and test-asserted on the accepted HTTP surface; the presentation is a design surface.
- **Requirement IDs engaged:** CORE-COR-05 (error semantics), CORE-VIS-06, CORE-PW-04.

### SYS-07 — Public link / share page

- **Purpose (prohibited form — inventoried so it cannot be silently introduced):** A public or anyone-with-the-link page for a Perspective.
- **Status:** **Deferred — and, in its public form, prohibited under the current decisions.** Audience is a named-recipient Invitation only, never a public link (OQ-8; A-42 adopted position). No grant enumeration or public-link form exists in the accepted implementation. Forwarding/resharing behaviour is additionally unspecified (CORE-LENS-09 forwarding portion, blocked on Q-10).
- **Entry points / interactions / data:** None. No such page may be designed as a working screen, and no Lens surface (OWN-11) may offer it as an audience option.
- **Required states:** All n/a — no working screen exists, and none may be implied.
- **Scope classification:** **Deferred** (prohibited form under OQ-8; forwarding blocked on Q-10).
- **Requirement IDs engaged:** CORE-LENS-09, CORE-LENS-01.

### SYS-08 — Comparison view

- **Purpose (deferred capability):** Any view comparing two Worlds/Perspectives or presenting one person relative to another.
- **Status:** **Deferred.** Comparison appears in the corpus at Bible Ch. 20 / the Encounter material, bound by invariants 6 and 10, but there is **no Core PRD requirement** for a comparison view in Track A — the adopted minimum journey ends at SEE YOURS, and the PRD lists Comparison among its non-goals for the pilot (§11). The Perspective Passport's comparison field therefore reads "not permitted" (OWN-12). Comparison's "unexplored" definition is itself unratified (Q-34, noted in the PRD as blocking no Core requirement).
- **Entry points / interactions / data:** None inventoried. *Must never appear:* any compatibility, similarity, or relationship scoring — also an explicit Stage 03 exclusion (charter §4).
- **Required states:** All n/a — no working screen exists.
- **Scope classification:** **Deferred**.
- **Requirement IDs engaged:** None in the CORE-MVP-PRD (recorded deliberately — see Judgment Call J-07).

---

## 5. Cross-cutting state coverage check (charter §9)

| State | Where it is covered |
|---|---|
| Empty | OWN-02 (empty World as valid state), OWN-03/04/05/10/13/14 (explicit empty states), OWN-17 (pre-seed / wholesale-rejection), VST-02 (no-more-content), VST-06 (nothing saved = valid outcome) |
| Loading | Every screen classified Prototype-only — Existing operation / Existing response behavior (design-surface state; no backend loading semantics claimed) |
| Error | SYS-06 (all screens); 400/404 presentations per screen |
| Denial | Two distinct response classes: ordinary authorization failures → SYS-01, identical generic 403, indistinguishable from one another; quarantine → SYS-04, distinct 503 `PERSPECTIVE_UNAVAILABLE`, checked before all authorization checks — never a generic denial; per-screen denial rows |
| Expiry | SYS-02; VST-01 … VST-05; OWN-12/13 owner-side labels; session expiry → SYS-01 on owner screens |
| Revocation | SYS-03; OWN-13 (control); VST-06 (Seed effect, CORE-SEED-04) |
| Quarantine | SYS-04; OWN-15 (owner status); banners/context on OWN-03/04/11/13 |

Deferred entries (OWN-18, VST-07, VST-08, VST-09, SYS-07, SYS-08) record all states n/a by design: inventing state behaviour for them would silently specify unapproved features.

## 6. Counts and judgment calls

### 6.1 Counts by classification

| Classification | Owner | Visitor | System | Total |
|---|---|---|---|---|
| Existing | 0 | 0 | 0 | **0** |
| Prototype-only — Existing operation | 15 (OWN-01 … OWN-14, OWN-16; OWN-11 counted once here, with its Prototype-only control element noted) | 5 (VST-01 … VST-05) | 0 | **20** |
| Prototype-only — Existing response behavior | 0 | 0 | 6 (SYS-01 … SYS-06) | **6** |
| Prototype-only — service-level backing | 1 (OWN-15) | 0 | 0 | **1** |
| Prototype-only (no backend claim) | 1 (OWN-17) | 1 (VST-06) | 0 | **2** |
| **Prototype-only (subtotal)** | **17** | **6** | **6** | **29** |
| Deferred | 1 (OWN-18) | 3 (VST-07, VST-08, VST-09) | 2 (SYS-07, SYS-08) | **6** |
| **Total** | **18** | **9** | **8** | **35** |

**Why Existing is 0:** under AUD-06 a screen is classified by its user-facing functionality, and the accepted implementation ships no user-facing interface — so no screen is Existing as a user-facing screen in v1.1, however well-grounded its underlying operation or response contract is.

### 6.2 Inventory judgment calls

- **J-01 — Screens vs. backend behaviours.** The accepted implementation is a JSON service with no UI. A screen is classified by its user-facing functionality (AUD-06): no screen is Existing as a user-facing screen in v1.1, and every grounded screen is Prototype-only with its grounding level named (Existing operation / Existing response behavior / service-level backing). No entry claims a shipped interface exists.
- **J-02 — OWN-11 territory set (AUD-02 disposition).** `createGrant()` accepts recipient, resolution, and expiry only — no territory-set parameter exists, and the bound projection is the resolution's synthetic fixture. OWN-11 now carries a **split classification within the one entry**: the grant-creation element is Prototype-only — Existing operation, and the territory-set selection control element is Prototype-only with no backend effect, labelled as such on the screen itself. Splitting OWN-11 into two entries was rejected to keep the Lens-creation surface citable as one screen; the entry is counted once, under Existing operation.
- **J-03 — OWN-15 grounding level (AUD-03 disposition).** `verifyReplay()` is implemented and tested at the service level but has no HTTP route in `src/server.js` and is not owner-authenticated in the service signature. OWN-15 is reclassified **Prototype-only — service-level backing** ("Prototype-only presentation backed by Existing service-level behavior"), with that basis stated explicitly on the screen and its authorization boundary stated as a requirement on any future exposure — the tested service-level behaviour is recorded without classifying the screen Existing.
- **J-04 — VST-05 at CONTINENT/COAST.** Only the HARBOUR fixture carries `whyHere`. VST-05 is one screen across resolutions, classified Prototype-only — Existing operation on the visitor perspective route: at HARBOUR the `whyHere` content is served data; at CONTINENT/COAST no explanation content exists in the accepted payloads and the honest-answer behaviour is a design surface (the answer is derivable from the grant, not served). Splitting it per resolution would triple-cite one interaction.
- **J-05 — OWN-14 duplicate registration.** The storage port key for visitor principals is the credential hash; re-registering the same recipient issues a *new* random credential (a new hash), so recipient-level duplication is not prevented by the service as written. The inventory records the observable behaviour (a duplicate-credential-hash failure surfaces via SYS-06) and does not invent a "recipient already provisioned" rule.
- **J-06 — VST-02 … VST-04 as three screens, and their empty state.** The three resolutions are separate IDs because other deliverables (preview, Passport, test design) cite resolution-specific behaviour. Their empty state is a design provision: the accepted fixtures always contain four topics, so an empty payload cannot occur in the slice; the state is recorded so a future payload shape does not invent one ad hoc.
- **J-07 — SYS-08 requirement IDs: none.** Comparison has no CORE-* requirement in the PRD. Rather than attaching the nearest IDs and implying traceability that does not exist, SYS-08 records "none" and cites its corpus basis (Bible Ch. 20; invariants 6 and 10; PRD §11 non-goal). D03-01 should mirror this as an explicit no-requirement row, not an omission.
- **J-08 — SYS-02 / SYS-03 as separate entries despite identical visitor presentation.** Expiry and revocation are distinct system facts with distinct owner-side presentations and distinct PRD acceptance criteria, so they keep distinct IDs; the entries state plainly that the visitor-side presentation collapses to SYS-01 in the accepted implementation, and that a distinguishing visitor message would be a change request, not a design choice this inventory may make.
- **J-09 — RESTORE and REMOVE_BUOY as separate screens (OWN-08, OWN-09).** They are distinct operations with distinct routes, events, and guards (CORE-COR-03 / CORE-COR-08), and the PRD requires the three owner choices to be kept distinct. They are inventoried as their own screens rather than sub-states of OWN-07 so D03-03/D03-06 can cite them independently; in a wireframe they may well render as focused flows launched from OWN-07 — that is a G2 decision, not an inventory one.
- **J-10 — OWN-04 (Studio home) split from OWN-03 (Explorer).** `getStudioView()` and `getExplorerView()` are distinct service operations returning distinct payloads (Studio adds correction types, grants, and Receipts). They are inventoried separately to keep that payload boundary — and its authorization implications — visible.
- **J-11 — No home/first-screen-priority screen.** The PRD records home/first-screen priorities as unspecified (Gap G-08; Q-03). No "app home" screen beyond OWN-03 (World home for an authenticated owner) is invented.
- **J-12 — No screens for excluded capabilities.** No screens are inventoried for edges (excluded, OQ-7; CORE-COR-10's command contract is not a screen), forwarding/resharing (Q-10), retention-period behaviour (Q-13), lifecycle freeze/reset/simplify controls (Concept, Bible Ch. 16 §16.6 — not PRD requirements), or any Stage 03 exclusion (public feed, personality inference, relationship scoring, dating, marketplaces). Their absence is deliberate and should be read against §1.5, not as an oversight.

## 7. Closing notes

- **Open decisions untouched:** Q-09 (OWN-18), Q-01/D-34 (CONFIRM unavailable action, OWN-07), Q-21 (no persistence claim anywhere in this inventory; SYS-06), G-17 (VST-07 anonymous opening remains Deferred pending separate Founder reconciliation and authorization), C-3. Also flagged in place: Q-05 (VST-07), Q-10 (SYS-07), Q-13 (OWN-16), Q-17 (VST-09), Q-02/Q-29/Q-35 (VST-08), Q-33/Q-37 (OWN-17), Q-03/Gap G-08 (J-11).
- **Alignment against D03-04 (performed for this version):** D03-04 v1.1 (terminology and permission-boundary specification) was read in full before this inventory was finalized, and the inventory was aligned to it in v1.1: Territory as provisional visual grouping only (D03-04 §1 row 8); Studio in the correction/authoring sense only (row 7); Explorer's two surfaces kept distinct (row 6); SEE MY WORLD as the product name, PARAVEX never as a product name (rows 26–27); the visitor credential described as a prototype identity mechanism, not identity verification (row 14; OWN-14, VST-01); cause-blind generic denial for ordinary authorization failures, with quarantine distinguished as the distinct 503 response checked first (B-04; SYS-01 … SYS-04; AUD-07); honest logical-deletion wording with no erasure claim (B-06; OWN-16); quarantined projections never presented as available (B-05; SYS-04, OWN-15); prototype-only capabilities labelled simulated (B-07; OWN-17, VST-06) and Deferred capabilities not prototyped as if live or described as available (VST-07, per AUD-01); absence never presented as disagreement (B-11; §1.4); manifests/Passports never treated as authorisation (B-13; §1.4); and no claim that the slice validates a complete Lens Compiler (B-14; OWN-18). The v1.1 classification corrections in this inventory arise from the G1-AUD remediation (register A-54), applied against D03-04 v1.1 and the accepted implementation; no unresolved conflict between D03-04 v1.1 and this inventory remains on terminology or behaviour; the Stage Director will verify this alignment in the integration pass, and any later conflict should be resolved in D03-04's favour on terminology and in the accepted implementation's favour on behaviour, and recorded in the G1 evidence package.
- **Status reminder:** Revised per G1-AUD remediation — Draft for re-audit. E1 (author self-check) only — not independently verified, not Founder-approved.

*End of D03-02 v1.1.*
