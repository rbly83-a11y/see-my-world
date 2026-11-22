# SEE MY WORLD — Stage 02 Scope Package
# MERIDIAN PROTOTYPE REQUIREMENTS — Release Track B (the Meridian Experience)

> **Status: PROPOSAL for founder approval.**
>
> This document restates Release Track B as buildable prototype requirements drawn from the baseline of record. It does **not** enact anything. In particular, the specification freeze recorded at the close of the source specification is a **founder decision**: this document does not enact that freeze, does not declare Meridian production-ready, does not authorize a repository, a build, a pilot, or a public release, and does not resolve any founder decision. Where a requirement depends on an open founder decision, the requirement is flagged **BLOCKED** with its Q-item(s) from `phase-zero/FOUNDER_DECISION_REGISTER.md` and left unresolved.
>
> **Baseline position, stated once and governing throughout:** Meridian stands at **specification freeze** in the source — explicitly *not* a claim of production readiness (`SEE-MY-WORLD-Product-Bible-Edition-1.4.md`, Part XVIII, Ch. 120 §420; `CONCEPT-CONTINUATION-30-MERIDIAN-EXPERIENCE-SPEC.md` §420). No implementation, asset production, test execution, or pilot performance is claimed anywhere in this document. There is no codebase for this project (`phase-zero/MVP_SCOPE.md`, standing fact; `phase-zero/FOUNDER_DECISION_REGISTER.md`, Q-43).

**Sources used, and citation convention.** Every substantive requirement below carries a citation in the form *file, chapter/section*.

- `SEE-MY-WORLD-Product-Bible-Edition-1.4.md` — the baseline of record, Part XVIII (Chapters 109–120), compiling Continuations 28–30. Cited as *Edition 1.4, Ch. n §nnn*.
- `CONCEPT-CONTINUATION-29-MERIDIAN-BLUEPRINT.md` — filed source, §§381–400. Cited as *Continuation 29 §nnn*.
- `CONCEPT-CONTINUATION-30-MERIDIAN-EXPERIENCE-SPEC.md` — filed source, §§401–420. Cited as *Continuation 30 §nnn*.
- `phase-zero/MVP_SCOPE.md` — Track B mapping. Cited as *MVP_SCOPE.md, Track B*.
- `phase-zero/FOUNDER_DECISION_REGISTER.md` — founder-decision queue, Q-numbering used for all blocked dependencies. Cited as *Founder Decision Register, Q-nn*.
- `phase-zero/FEATURE_STATUS_INVENTORY.md` and `phase-zero/TEST_BASELINE.md` — status labels and proposed-suite status.
- `AI-DEVELOPMENT-ORGANIZATION.md` §2 — the Track B definition. Cited as *Organization Plan §2*.

**Status labels.** Only two of the project's six status labels are used in this document, and they are used in their Phase Zero sense: **Specified** means a contract, schema, or normative rule exists in the baseline text — it asserts nothing about code, because there is none; **Concept** means a defined proposal whose contracts or acceptance criteria are not yet specified to buildable depth (`phase-zero/FEATURE_STATUS_INVENTORY.md`, Notes on the labels). No requirement in this document is labelled Implemented, Tested, Pilot Validated, or Production Ready, because none is.

---

## 1. Separateness — read this first

**1.1 Track B is not Track A, and it is not the Core MVP.** Release Track B is the Meridian Experience: "One fictional district, five eras, artifacts, Reality Lens, guided mission, synthetic memories, and withdrawal testing. Develop as a controlled reference implementation; release publicly only after its separate privacy and content gates pass" (`AI-DEVELOPMENT-ORGANIZATION.md` §2). The Core MVP is Track A — First Light → correction → private World → bounded Lens → visitor Perspective → Seed → SEE YOURS — and Meridian is not part of it (`phase-zero/MVP_SCOPE.md`, Tracks A and B).

**1.2 Track B is gated twice.** First, it is gated behind Track A progress: Meridian reuses Track A's authorization, publication, Memory Network, Rights Ledger, and Reality Lens machinery, and its build sequence requires the authorization and publication system to be *designed in Sprint 1* even though the public contribution interface arrives later (Edition 1.4, Ch. 116 §397 and §400; Continuation 29 §§397, 400; `phase-zero/MVP_SCOPE.md`, Track B). Second, it is gated by its own separate privacy and content gates, which must pass before any public release (Organization Plan §2; `phase-zero/MVP_SCOPE.md`, Track B). Neither gate is passed, waived, or evidenced by this document.

**1.3 Track B is not a launch dependency.** Nothing in Track A launch depends on Meridian, and nothing in this document may be read as making Meridian a dependency of the Core launch — the three-track structure exists precisely to keep expansion work "behind explicit gates rather than becoming dependencies of the first launch" (Organization Plan §2). The converse dependency is the real one, and the source names its failure mode plainly: "the most dangerous mistake would be building an impressive time machine before proving that users trust the memory network" (Edition 1.4, Ch. 116 §399; Continuation 29 §399).

**1.4 Meridian's memory content is synthetic demonstration content only.** The prototype's memory layer consists of **twenty clearly identified fictional demonstration memories** (Edition 1.4, Ch. 112 §377 as register-derived from Continuation 28, and Ch. 115 §394; Continuation 29 §394). That means, without exception for the prototype:

- **No real contributor content.** No actual person's photograph, story, recording, or recollection is loaded into, attached to, or displayed in the Meridian prototype.
- **No simulated contributor represented as a real witness.** No fictional person is presented as an actual historical resident, and no demonstration record is presented as genuine testimony (Edition 1.4, Ch. 112 §378 nonnegotiable gates; Ch. 110 §369 population categories).
- **Real contributions are a later, separately gated step.** Real consenting adults are invited only after the publication and withdrawal workflows pass review (Edition 1.4, Ch. 112 §377; `phase-zero/MVP_SCOPE.md`, Track B, Memory layer).
- **Real-place contributions never attach to fictional Meridian sites as though the places were identical.** If they ever appear, they appear in a separate comparative collection, clearly labelled with their actual context and contributor permissions (Edition 1.4, Ch. 115 §391; Continuation 29 §391).

**1.5 Meridian itself is fictional.** Meridian is a fictional, historically inspired American downtown district on Mercer Avenue, invented so interactions can be tested without fabricating the history of an actual town; its venue continuity matrix is fictional production canon, not historical evidence (Edition 1.4, Ch. 113 §§381, 384; Continuation 29 §§381, 384).

---

## 2. Requirements

Requirements are numbered with stable IDs, **MER-P-01 through MER-P-36**. A requirement marked **BLOCKED: Q-nn** may not be built to acceptance until the founder decides that Q-item; the flag is recorded here, never resolved here. Section 4 collects all blocked dependencies.

### 2.1 District, eras, and venues

**MER-P-01 — Fictional district scope. Status: Specified.**
The prototype shall implement exactly one fictional district — Meridian, primary street Mercer Avenue, timeline 1925–2025, first platforms Mobile + Web — containing one main street, three detailed venues, a public square, and several exterior-only buildings. Scope shall not expand to a second street or district in the prototype; the source names scope explosion as a principal production risk and requires Meridian to "remain intentionally small."
*Citation:* `SEE-MY-WORLD-Product-Bible-Edition-1.4.md`, Ch. 113 §381 and Ch. 116 §399; `CONCEPT-CONTINUATION-29-MERIDIAN-BLUEPRINT.md` §§381, 399.

**MER-P-02 — Five separately authored era states. Status: Specified.**
The district shall provide five historical states — 1925 (commercial main street), 1955 (mid-century downtown), 1985 (changing commercial center), 1995 (analog-to-digital transition), and 2025 (contemporary district) — each separately authored and versioned as a scene state. A future continuous time slider may interpolate navigation and presentation but **must not invent intermediate historical conditions**.
*Citation:* Edition 1.4, Ch. 113 §§381, 383; Continuation 29 §§381, 383.

**MER-P-03 — Stable Site identity and the venue continuity matrix. Status: Specified.**
Each site shall keep a stable Site ID across all eras, even when its building or business changes. The prototype shall implement the fictional continuity matrix as its resolver fixture: Site A — silent cinema (1925) / movie theater (1955) / cinema (1985) / discount cinema (1995) / arts venue (2025); Site B — hardware store / appliance store / arcade / arcade / community studio; Site C — general retail / department store / music shop / video rental / mixed retail; Site D — lunch counter / diner / diner / diner / restaurant; Site E — public square in all five eras; Site F — reading room / public library / library / library / library. The matrix shall be labelled, wherever it surfaces, as fictional production canon, not historical evidence.
*Citation:* Edition 1.4, Ch. 109 §362 and Ch. 113 §§382, 384; Continuation 29 §§382, 384.

**MER-P-04 — Time-State Resolver: unknown is not absent. Status: Specified.**
The prototype shall resolve what a visitor encounters at a Site at a selected date through the Time-State Resolver over the Site / Structure / Occupancy model, using the `SiteTimeState` contract whose evidence classification is the four-value categorical set DOCUMENTED / PARTIAL / INTERPRETIVE / UNKNOWN. The resolver **must never treat a missing record as proof that a building did not exist**; unknown is not absent (invariant 31 in the baseline's terms). A smooth visual transition may be used as an effect but must not imply that the underlying history changed continuously; production loading is of date-specific scene layers, not continuous morphing.
*Citation:* Edition 1.4, Ch. 109 §§362–364 (including the D-61 terminology guard on the categorical `confidence` field); `phase-zero/MVP_SCOPE.md`, Track B (Time-State Resolver row).

**MER-P-05 — Detailed interiors versus exterior-only venues. Status: Specified.**
The prototype shall provide three detailed interior venues — the theater, the arcade/commercial space, and the diner. The public square, the library, and the other shops shall initially support exterior interactions and historical annotations only. Venue function may change or a venue may disappear in a given period, per MER-P-03.
*Citation:* Edition 1.4, Ch. 113 §382 and Ch. 115 §394; Continuation 29 §§382, 394.

**MER-P-06 — Venue signature missions and labelling duties. Status: Concept.**
Each of the four named venues shall carry its signature investigation as specified: the Century Theater — *The Building That Wouldn't Disappear*; the Electric Arcade — *Insert Coin to Continue*, using original period-inspired mini-games and fictional branding only, with actual commercial arcade games included only with appropriate rights; the Changing Storefront — *The Price of Progress*, which must not treat technological change as universally beneficial and must raise access, affordability, employment, community life, and consumer choice; the Meridian Diner — *A Table Across Time*. Fictional scripted diner conversations shall be labelled as fictional reconstructions, never as authentic historical testimony.
*Citation:* Edition 1.4, Ch. 114 §§385–388; Continuation 29 §§385–388. Status is Concept because the venue experiences are defined as proposals; only the flagship mission in §2.5 is specified to mission-logic depth.

### 2.2 Shell, screens, and visitor state

**MER-P-07 — The Experience Shell. Status: Specified.**
A persistent Experience Shell shall surround every scene, containing the six primary controls recorded in the source, with top navigation of the recorded form (Explore / Time / Memories / Passport) and a Reality Lens availability indicator. The interface shall remain consistent as the visitor changes eras: "The environment changes. The navigation does not."
*Citation:* Edition 1.4, Ch. 117 §401; Continuation 30 §401.

**MER-P-08 — The fourteen screens as logical states. Status: Specified.**
The prototype shall implement the following fourteen screens as **logical product states, not necessarily fourteen separate frontend routes**; they may appear as overlays, panels, or full-page views depending on device size:

| ID | Screen | Purpose |
|---|---|---|
| S01 | Welcome to Meridian | Introduce the World |
| S02 | Experience Selection | Guided or free exploration |
| S03 | District Overview | Select sites and venues |
| S04 | Street Explorer | Navigate the environment |
| S05 | Time Navigator | Change historical period |
| S06 | Venue Interior | Explore a specific location |
| S07 | Artifact Inspector | Interact with historical objects |
| S08 | Reality Lens | Examine provenance and reconstruction |
| S09 | Mission Journal | Track investigation objectives |
| S10 | Memory Wall | Discover authorized contributions |
| S11 | Memory Detail | Read a contribution and its context |
| S12 | Memory Studio | Create a private memory draft |
| S13 | Visitor Passport | Save discoveries and reflections |
| S14 | Experience Summary | Review the completed journey |

*Citation:* Edition 1.4, Ch. 117 §402; Continuation 30 §402.

**MER-P-09 — Visitor state machine with validated transitions. Status: Specified.**
The runtime shall model the visit as the explicit `MeridianVisit` state recorded in the source: a `screen` drawn from the fourteen-state `MeridianScreen` set (WELCOME, MODE_SELECTION, DISTRICT_MAP, STREET, TIME_NAVIGATOR, VENUE, ARTIFACT, REALITY_LENS, MISSION_JOURNAL, MEMORY_WALL, MEMORY_DETAIL, MEMORY_STUDIO, PASSPORT, SUMMARY), an `experienceMode` of GUIDED, FREE, MEMORY, or TEXT_FIRST, plus `eraId`, optional `siteId`/`sceneId`, `completedObjectives`, `savedReferenceIds`, and a monotonically meaningful `stateRevision`. Transitions shall be validated by the runtime: a visitor cannot enter a venue interior that does not exist in the selected era, and in that case the runtime shall provide an explanation and offer an available historical state instead.
*Citation:* Edition 1.4, Ch. 117 §404; Continuation 30 §404.

**MER-P-10 — Short onboarding; no forced mode. Status: Specified.**
Onboarding shall be deliberately short, and the visitor shall understand the experience before being asked to create an account. The entry choices are the guided historical journey, free exploration, community-memory discovery, and the text-first experience. A visitor who chooses free exploration shall never be forced into the guided mission; a visitor who chooses text-first mode shall receive equivalent historical content and mission functionality (see also MER-P-31).
*Citation:* Edition 1.4, Ch. 117 §403; Continuation 30 §403.

### 2.3 Time Navigator and era transitions

**MER-P-11 — Time Navigator interaction contract. Status: Specified.**
When the visitor changes eras, the system shall preserve the site anchor where possible, resolve the target time state, and load only authorized assets. If the target state is unavailable, the runtime shall keep the current scene active and explain the limitation. The runtime **must not silently substitute a fictional scene for missing historical evidence**.
*Citation:* Edition 1.4, Ch. 117 §405; Continuation 30 §405. See also Edition 1.4, Ch. 109 §361 (geographic position retained across time travel where the corresponding location exists).

**MER-P-12 — Server-confirmed, idempotent era-transition contract. Status: Specified. BLOCKED: Q-22.**
Era transition shall be treated as a transaction, not a visual effect alone, following the recorded protocol: transition states IDLE → RESOLVING → AUTHORIZING → LOADING → READY, with FAILED as the failure state; an `EraTransitionRequest` carrying `visitId`, `targetEraId`, optional `currentSiteId`, `expectedStateRevision`, and `requestId`; and an `EraTransitionResult` carrying `requestId`, a status of READY, UNAVAILABLE, or FAILED, and optional `targetSceneId`, `authorizedManifestRef`, `fallbackSceneId`, and `reasonCode`. Three rules are normative: (a) the client shall not update its authoritative visit state until the server confirms a valid transition; (b) repeated requests with the same idempotency key shall not create conflicting visit states; (c) on rapid switching (the source's example: 1925 → 1955 → 1995), only the latest authorized selection shall become active.
*Citation:* Edition 1.4, Ch. 118 §406; Continuation 30 §406.
*Blocked note:* the protocol is specified, but the complete API contracts it rides on — OpenAPI schemas, authentication rules, error codes, versioning, compatibility — are an open founder-decision item (Founder Decision Register, Q-22). The transition behaviour may be prototyped against the §406 contract; it cannot be accepted as a complete API contract until Q-22 is decided.

### 2.4 Venue entry, artifacts, and the Reality Lens

**MER-P-13 — Venue entry contract. Status: Specified.**
Each venue shall publish its available states per era, in the recorded form: `siteId`, `eraId`, an `occupancy` (name, kind, and a `fictional` flag), `availableModes`, an `interiorAvailable` flag, and a `reconstructionClass`. Entry shall resolve to the occupancy that actually holds in the selected era: the source's worked example is binding — a visitor selecting the arcade in 1925 enters the **hardware-store** state of Site B (`meridian-site-b`, "Mercer Hardware," availableModes EXTERIOR and ARTIFACT_INSPECTION, `interiorAvailable: false`, `reconstructionClass: FICTIONAL`), not a historically impossible arcade. Conversely, the Century Theater site exists across all five eras while its role changes.
*Citation:* Edition 1.4, Ch. 118 §407; Continuation 30 §407; matrix at Ch. 113 §384.

**MER-P-14 — Exterior-only venues are complete experiences. Status: Specified.**
The runtime shall support exterior-only venues **without treating them as broken or incomplete experiences**. An exterior-only state is a valid, finished presentation of that site in that era, with its exterior interactions and historical annotations available (see MER-P-05), not an error state, a placeholder, or a degraded interior.
*Citation:* Edition 1.4, Ch. 118 §407; Continuation 30 §407.

**MER-P-15 — The Reality Lens. Status: Specified.**
The Reality Lens shall be available for any significant historical or reconstructed element — including an always-accessible Reality Lens in the public square — and shall classify material under exactly the four recorded authority categories: **Historical evidence** (supported by cited historical sources), **Personal testimony** (a contributor's approved recollection, not necessarily independently verified), **Artistic reconstruction** (an interpretation created to support exploration), and **Fictional demonstration** (invented Meridian people, places, businesses, or events). The system **must never use one generic "verified" label for an entire scene containing multiple evidence types**. The Reality Lens is a foundational trust feature, not an optional educational extra.
*Citation:* Edition 1.4, Ch. 114 §389 and Ch. 118 §409; Continuation 29 §389; Continuation 30 §409.

**MER-P-16 — The LivingCityArtifact contract. Status: Specified.**
Every interactive artifact shall conform to the recorded `LivingCityArtifact` contract, with no fields dropped: `artifactId`, `sceneId`, `title`, `artifactType`, optional `availableFrom` / `availableUntil`, `interactionModes` drawn from INSPECT, OPERATE, COMPARE, INVESTIGATE, `historicalEvidenceRefs`, `rightsRecordRefs`, a `reconstructionClass` of DOCUMENTED, INTERPRETIVE, or FICTIONAL, and an `accessibleAlternativeRef`. The same contract shall be reused across venues and eras.
*Citation:* Edition 1.4, Ch. 115 §392; Continuation 29 §392.

**MER-P-17 — The first ten artifacts. Status: Specified.**
The prototype shall implement exactly the first ten interactive artifacts, each in its recorded venue with its recorded interaction: (1) Movie ticket — Theater — inspect period ticketing; (2) Film projector — Theater — investigate exhibition technology; (3) Theater program — Theater — compare entertainment across eras; (4) Arcade cabinet — Arcade — play original mini-game; (5) Token dispenser — Arcade — understand token-based payment; (6) Cassette player — Storefront — operate a simulated mechanism; (7) VHS case — Storefront — examine physical rental media; (8) Rotary telephone — Diner — practice period dialing; (9) Jukebox — Diner — explore song references; (10) Historical directory — Square — investigate businesses and addresses. All ten shall be accessible through text-based interactions.
*Citation:* Edition 1.4, Ch. 115 §392; Continuation 29 §392.

**MER-P-18 — Artifact Inspector. Status: Specified.**
The Artifact Inspector (screen S07) shall be the reusable interface for historical objects, supporting the recorded Inspect / Operate / Compare modes. Every artifact shall provide an accessible alternative to drag-and-drop, spatial manipulation, or gesture-based controls (see MER-P-31).
*Citation:* Edition 1.4, Ch. 118 §408; Continuation 30 §408.

### 2.5 The flagship mission and the Mission Journal

**MER-P-19 — Mission logic engine: completion from validated events only. Status: Specified.**
The guided journey shall be defined as data, not hard-coded into individual screens, using the recorded `MissionDefinition` (missionId, title, objectiveIds, prerequisiteMissionIds, a completionRule of ALL_OBJECTIVES, ANY_OBJECTIVE, or CUSTOM, and accessibleAlternativeRef) and `MissionObjective` (objectiveId, missionId, eventType, targetRef, optional requiredEraId, prerequisiteObjectiveIds) contracts. The engine shall evaluate objective completion **from validated events only**: a client shall not be able to mark an arbitrary mission complete simply by sending an unverified objective ID, and the system shall prevent duplicated rewards or progress events when a request is retried.
*Citation:* Edition 1.4, Ch. 118 §410; Continuation 30 §410.

**MER-P-20 — Flagship mission: The Street That Remembered — six stages. Status: Specified.**
The prototype shall implement the flagship mission as a guided experience of a proposed 25–40 minutes, with unrestricted exploration available afterward. The mission begins in 2025 with the recorded investigation prompt — Mercer Avenue has changed for a hundred years; explore five eras, investigate the places that survived, and discover what the street reveals about everyday life — and shall contain exactly six stages:

| Stage | Era | Objective |
|---|---|---|
| 1. Arrival | 2025 | Examine the contemporary district |
| 2. Early commerce | 1925 | Investigate the theater and street |
| 3. Mid-century | 1955 | Compare the diner and theater |
| 4. Changing culture | 1985 | Explore the arcade and music retail |
| 5. Analog transition | 1995 | Investigate the video store and communication |
| 6. Reflection | 2025 | Assemble a comparative historical account |

Completion shall require meaningful interaction, not merely visiting six screens: the visitor shall examine at least one artifact or evidence item in each historical period. The visitor's decisions affect their investigation, discoveries, and personal Passport — **not** the established historical state of the World.
*Citation:* Edition 1.4, Ch. 115 §390 and Ch. 119 §411; Continuation 29 §390; Continuation 30 §411.

**MER-P-21 — The 1995 analog communication challenge. Status: Specified.**
The 1995 stage shall include the recorded interactive historical challenge: the visitor must arrange a meeting at the arcade without using a smartphone, and may examine a landline telephone, a printed directory, a paper note, and a venue schedule; the printed business directory is the plausible starting point for finding a listed business telephone number. The challenge shall reward understanding rather than punish unfamiliarity with older technology.
*Citation:* Edition 1.4, Ch. 119 §412; Continuation 30 §412.

**MER-P-22 — Mission Journal. Status: Specified.**
The Mission Journal (screen S09) shall record completed objectives, inspected artifacts, source references, and private notes. It shall not expose private activity to other users. A visitor may revisit previous eras or continue exploring after completing the guided mission. If a visitor saves a public memory reference, the system shall respect that memory's current visibility and withdrawal status (see MER-P-28).
*Citation:* Edition 1.4, Ch. 119 §413; Continuation 30 §413.

### 2.6 Memory Wall and Memory Studio — synthetic content only in the prototype

**MER-P-23 — Memory Wall placement and prototype content. Status: Specified.**
Every major venue shall contain a contextual Memory Wall (screen S10). In the Meridian prototype the wall shall use **only clearly identified fictional demonstration memories** — the twenty of MER-P-31 — presented as demonstration records, with the source's own marking carried through: demonstration records only, no actual community content connected. The wall's recorded demonstration categories are photos, stories, and music associations.
*Citation:* Edition 1.4, Ch. 115 §§391, 394; Continuation 29 §§391, 394. Separateness rule: §1.4 of this document.

**MER-P-24 — Memory Wall interaction contract: current-consent filtering before cards are returned. Status: Specified. BLOCKED: Q-10, Q-11.**
The Memory Wall shall load **only currently authorized public projections**. The backend shall filter by audience and **current consent before returning cards**; filtering after delivery, or relying on the client to hide unauthorized cards, does not satisfy this requirement. Responses shall conform to the recorded contracts: a `PublicMemoryCard` (publicationId, title, a kind of PHOTO, STORY, or SONG_MEMORY, periodLabel, optional placeLabel, optional approvedPreviewRef, optional contributorDisplayName, publicationRevision, provenanceLabel) and a `MemoryWallResponse` (items, optional nextCursor, indexRevision). Search indexes and caches **must not become alternative paths for accessing withdrawn material**.
*Citation:* Edition 1.4, Ch. 119 §414; Continuation 30 §414.
*Blocked note:* audience, expiry, and especially forwarding/resharing behaviour are incompletely specified in the corpus (Founder Decision Register, Q-10), and the differential-probing / inference test programme that the baseline's own gates require before any public sharing release is still owed and cannot run until code exists (Q-11). The filtering contract above is specified; a public (non-demonstration) wall cannot be accepted until Q-10 and Q-11 are decided and discharged.

**MER-P-25 — No real-place contributions on fictional sites. Status: Specified.**
Community contributions about real places shall not be attached to fictional Meridian sites as though those places were identical. Any future appearance of real contributions alongside Meridian shall be in a separate comparative collection, clearly labelled with their actual context and contributor permissions. This requirement is not satisfied by a disclaimer on a merged wall.
*Citation:* Edition 1.4, Ch. 115 §391; Continuation 29 §391.

**MER-P-26 — Memory Studio state machine. Status: Specified (states and transitions); the contribution experience as a whole is Concept per `phase-zero/MVP_SCOPE.md`, Track B. BLOCKED: Q-13, Q-27.**
The Memory Studio (screen S12) shall let a visitor create a private memory without publishing it, supporting drafts, corrections, approximate dates, and explicit audience selection. **Public submission shall be a separate action from draft creation**, and submitting a memory must not automatically publish it. The state machine shall implement, at minimum, the production path

> PRIVATE_DRAFT → PENDING_REVIEW → PUBLISHED

and shall additionally support transitions for **rejection, restriction, withdrawal, and resubmission**. A contributor shall be able to inspect the exact public representation before authorizing publication. In the prototype this state machine is exercised against synthetic demonstration content only (§1.4); no real contribution is ingested.
*Citation:* Edition 1.4, Ch. 115 §393, Ch. 116 §396, and Ch. 119 §415; Continuation 29 §§393, 396; Continuation 30 §415.
*Blocked note:* retention, deletion, export, and backup-expiration periods are undecided, so draft and withdrawn-state retention cannot be implemented to acceptance (Founder Decision Register, Q-13); and the accountable human roles for review and moderation — who reviews, who owns incidents — are unfilled, which blocks any public release of the workflow (Q-27).

**MER-P-27 — Media uploads gated behind ingestion, rights, and withdrawal. Status: Specified.**
Photo and audio uploads shall be added **only after** secure media ingestion, rights confirmation, and withdrawal workflows are implemented. Until all three exist, the Studio prototype is text-only. This is a sequencing requirement, not a deferrable enhancement.
*Citation:* Edition 1.4, Ch. 115 §393; Continuation 29 §393.

### 2.7 Passport continuity

**MER-P-28 — Visitor Passport and continuity model. Status: Specified. BLOCKED: Q-10, Q-13, Q-21.**
The Passport (screen S13) shall allow visitors to return to their exploration and may preserve the selected era, current site, completed objectives, saved references, and private reflections, under these persistence rules, all of which are normative:

- **Guest visitors:** local session continuity where supported, with clear limitations stated to the visitor.
- **Signed-in visitors:** server-backed continuity with appropriate privacy controls.
- **Public memories:** saved as authorized references, **not** unrestricted copies.
- **Private reflections:** never published through ordinary mission progress.
- **Withdrawal:** previously saved references must respond to changes in contributor permissions.

The Passport shall support export and deletion of user-owned data.
*Citation:* Edition 1.4, Ch. 120 §416; Continuation 30 §416.
*Blocked note:* export/deletion cannot be completed to acceptance while retention and deletion periods are undecided (Q-13); server-backed continuity depends on the final persistence and event-replay strategy, whose production confirmation is pending (Q-21); and saved-reference behaviour on forwarding/resharing is unspecified (Q-10).

### 2.8 Runtime events, API surface, and asset registry

**MER-P-29 — Runtime event architecture: events are not permission grants. Status: Specified. BLOCKED: Q-13.**
Visitor progress shall be carried in the recorded `CityVisitState` (sessionId, cityId, selectedEraId, currentSceneId, completedMissionIds, inspectedArtifactIds, privateNoteRefs, experienceRevision), and the runtime shall emit only the recorded `CityRuntimeEvent` types: ERA_CHANGED, SCENE_ENTERED, ARTIFACT_INSPECTED, MISSION_COMPLETED, and MEMORY_REFERENCE_SAVED. The sequence on an era change is recorded and shall be preserved: the Time-State Resolver selects the scene, the authorization layer checks access, the runtime loads the appropriate assets, the Memory Service supplies eligible public projections, and the Passport records the visitor's authorized progress. **These events shall not be treated as permission grants**; every protected asset and contribution remains subject to current authorization at request time. Visitor progress and private notes shall have independent retention and deletion controls.
*Citation:* Edition 1.4, Ch. 116 §395; Continuation 29 §395.
*Blocked note:* "independent retention and deletion controls" cannot be given periods or backup-expiration behaviour until Q-13 is decided (Founder Decision Register, Q-13).

**MER-P-30 — First API contract: a proposed interface, not an inventory. Status: Specified (as a proposed contract sketch). BLOCKED: Q-22.**
The prototype's API surface is the recorded twelve-route sketch — `GET /api/cities/:cityId`, `GET /api/cities/:cityId/eras`, `GET /api/cities/:cityId/districts`, `GET /api/scenes/:sceneId/manifest`, `GET /api/scenes/:sceneId/artifacts`, `GET /api/sites/:siteId/timeline`, `GET /api/eras/:eraId/public-memories`, `GET /api/memory-threads/:threadId`, `POST /api/visits`, `PATCH /api/visits/:sessionId`, `POST /api/visits/:sessionId/events`, `POST /api/memories`, `POST /api/memories/:memoryId/submit`, `POST /api/memories/:memoryId/withdraw`. This is a **proposed interface, not an inventory of implemented endpoints** — none of these routes exists. Before development, each endpoint needs a defined request and response schema, authentication rules, pagination, error behaviour, idempotency requirements, and authorization tests. Submitting a memory must not automatically publish it (see MER-P-26).
*Citation:* Edition 1.4, Ch. 116 §396; Continuation 29 §396.
*Blocked note:* the complete-API-contracts decision is open (Founder Decision Register, Q-22, which records these surfaces as proposed contracts, explicitly not verified existing routes).

**MER-P-31 — Production asset registry targets. Status: Specified (as targets).**
The first Meridian release shall be planned against the recorded asset targets, and no asset production shall be claimed against them until an asset exists and is verified: 5 street environment states; 3 detailed venue interiors; 9 venue-era presentation variants; 10 interactive artifacts (MER-P-17); **20 fictional demonstration memories**; 6 guided mission sequences; 5 ambient soundscape sets; accessible scene transcripts for **all** published scenes; Reality Lens source records for **every** historical claim; rights and reconstruction disclosures for **every** relevant asset. The three detailed interiors shall use reusable environment templates, and the nine presentation variants are authoring targets, not nine completely separate buildings. The source states, and this document repeats: no actual asset production or implementation is being claimed here.
*Citation:* Edition 1.4, Ch. 115 §394; Continuation 29 §394.

### 2.9 Accessibility

**MER-P-32 — Accessibility contract: WCAG 2.2 AA target and equivalent interaction paths. Status: Specified (for Meridian). BLOCKED: Q-28.**
Accessibility shall be designed into the experience rather than added after the immersive version is complete. The same mission shall be completable through visual, keyboard, touch, and text-first interaction, and the implementation shall **target WCAG 2.2 AA for applicable web interfaces**, with specific testing for keyboard navigation, screen readers, reduced motion, captions, and focus management. The platform shall not require VR hardware to access core historical or memory content. The recorded equivalent interaction paths are normative:

| Immersive action | Accessible alternative |
|---|---|
| Walk to theater | Select Theater from location list |
| Rotate an artifact | Read structured object descriptions |
| Hear narration | Read synchronized transcript |
| Follow visual clues | Access equivalent textual evidence |
| Change eras visually | Select an era from an accessible control |

*Citation:* Edition 1.4, Ch. 120 §417; Continuation 30 §417.
*Blocked note:* Continuation 30 §417 specifies the WCAG 2.2 AA target for Meridian's web interfaces, but no platform-wide accessibility and device-support standard has been ratified, so the acceptance matrix for accessibility has no ratified standard to test against beyond Meridian's own stated target (Founder Decision Register, Q-28). Flagged, not resolved: this document adopts the Meridian-local target exactly as specified and does not extend it into a platform ruling.

### 2.10 Build sequence, reusability, and readiness

**MER-P-33 — Six-sprint build sequence, authorization designed first. Status: Specified (as a sequence). BLOCKED: Q-43.**
If and when a build is authorized, it shall follow the recorded six-sprint sequence, with durations determined only after engineering estimates: Sprint 1 — City Foundation (site registry, temporal states, district navigation, five era selections); Sprint 2 — Scene Runtime (2.5D environments, transitions, asset loading, accessible navigation); Sprint 3 — Living Artifacts (interactive objects, evidence records, historical context); Sprint 4 — Visitor Continuity (missions, Passport progress, private notes, session recovery); Sprint 5 — Memory Network (private contributions, publication review, public projections, contextual discovery); Sprint 6 — Integration and Validation (end-to-end testing, privacy review, accessibility testing, pilot preparation). The critical dependency is normative: **the authorization and publication system shall be designed during Sprint 1**, even though the public contribution interface is introduced later — otherwise the team risks building an immersive experience that cannot safely accommodate real user memories.
*Citation:* Edition 1.4, Ch. 116 §397; Continuation 29 §397.
*Blocked note:* all code work is gated by the repository and environment creation decision — no repository exists, and where one would live, under what ownership, and with what tooling is a founder decision (Founder Decision Register, Q-43).

**MER-P-34 — Reusability: Meridian as reference implementation. Status: Specified.**
Meridian's components shall be built reusable: a future district (the source's examples are a Buffalo district, a Florence reconstruction, or a community-built neighborhood) shall use the same Time-State Resolver, Scene Runtime, Memory Network, Rights Ledger, and Reality Lens. The historical content will differ; the underlying architecture shall not need to be reinvented.
*Citation:* Edition 1.4, Ch. 116 §400; Continuation 29 §400.

**MER-P-35 — Production readiness gate: ten items, authorization architecture first. Status: Specified (as a gate). BLOCKED: Q-22, Q-23, Q-27, Q-43.**
Before implementation begins, the team shall approve a complete engineering baseline against the recorded ten-item readiness gate. The gate currently stands at **0 of 10**; the source's own note governs its use — it is an interactive planning aid, and checking a box does not verify that a deliverable exists or has passed review. The ten items are:

1. Canonical Meridian site and era registry
2. Complete screen-state transition specification
3. Mission and artifact event contracts
4. **Authentication and authorization model**
5. Memory publication and withdrawal workflows
6. Historical evidence and reconstruction labeling
7. Accessible text-first experience specification
8. API schemas and error contracts
9. Test fixtures and acceptance criteria
10. Performance and operational budgets

**The most important gate is the authorization architecture.** The source's readiness test is stated as a requirement here: if the product can render a historical city but cannot reliably protect private memories, it is not ready for public contribution.
*Citation:* Edition 1.4, Ch. 120 §419; Continuation 30 §419; gate state 0/10 per `phase-zero/TEST_BASELINE.md` §3.
*Blocked note:* item 8 depends on Q-22 (complete API contracts); item 10 depends on Q-23 (operating limits and recovery objectives, including latency, capacity, uptime, backup recovery, monitoring, and incident response — none defined); any public release under this gate depends on Q-27 (accountable legal, support, moderation, and incident roles — unfilled); and the build the gate guards depends on Q-43 (repository creation).

**MER-P-36 — Pilot conduct, if a pilot is ever authorized. Status: Concept. BLOCKED: Q-02, Q-29.**
Any Meridian pilot shall use controlled enrollment and limited contribution volume, because real photographs, memories, and community disputes require ongoing review. Engagement metrics such as session length and return visits shall be secondary to comprehension, user trust, and meaningful exploration. Pilot evaluation is against the proposed targets in §3.2 of this document, which are targets only.
*Citation:* Edition 1.4, Ch. 116 §§398–399; Continuation 29 §§398–399.
*Blocked note:* the first target audience is undecided, so the pilot population is undefined (Founder Decision Register, Q-02); and pilot success and stop-condition evidence thresholds are undecided (Q-29).

---

## 3. Acceptance gates — proposed only, none executed

This section states the acceptance position **exactly** as the corpus records it. Nothing here is a result.

### 3.1 The two proposed suites

| Suite | Cases | Status | Source |
|---|---|---|---|
| Living City acceptance suite | **280** | **Proposed only — no case written, no case executed** | Edition 1.4, Ch. 112 §378 (register-derived via entry A-29; the filed Continuation 28 source ends at §374); `phase-zero/TEST_BASELINE.md` §2, row 9 |
| Meridian integration suite | **180** | **Proposed only — no case written, no case executed** | Edition 1.4, Ch. 120 §418; Continuation 30 §418; `phase-zero/TEST_BASELINE.md` §2, row 10 |

Across all ten proposed suites in the corpus the totals are 2,296 cases proposed, **0 written, 0 executed** (`phase-zero/TEST_BASELINE.md` §2). No proposed case count in this document is a pass, a fail, or any other kind of result.

**The 180-case Meridian integration suite, as planned** (Edition 1.4, Ch. 120 §418; Continuation 30 §418): navigation and screen states 24; era transitions 24; venue availability 18; artifact interactions 20; mission progression 22; memory authorization 22; Passport persistence 18; accessibility 18; failure recovery 14 — total planned 180. The suite shall include rapid era switching, stale scene manifests, revoked memory permissions, interrupted sessions, duplicate mission events, and inaccessible venue states. These are proposed tests, not executed results.

**The 280-case Living City suite's nonnegotiable gates, as recorded** (Edition 1.4, Ch. 112 §378, register-derived): no business displayed outside its supported operating period without an uncertainty label; no private memory locations or contributor identities revealed; no fictional people represented as actual historical residents; no silent replacement of historical evidence with a more visually appealing reconstruction. The corpus gives no category-by-category case breakdown for the 280 — see §5, Gap G-08.

### 3.2 Pilot success targets — proposed targets, not observed performance

The following are **proposed targets for an initial usability study, not observed performance**. No study has run; no participants exist (`phase-zero/MVP_SCOPE.md`, Track B, Pilot criteria; `phase-zero/TEST_BASELINE.md` §3).

| Measure | Proposed pilot target |
|---|---|
| Complete first historical mission | At least 80% of participants |
| Successfully change eras | At least 95% |
| Distinguish evidence from reconstruction | At least 90% |
| Correctly identify memory publication scope | At least 95% |
| Complete essential tasks using accessible text | 100% of defined tasks |
| Unauthorized private-memory exposure | Zero tolerated |
| Critical consent or withdrawal defects | Zero tolerated |

*Citation:* Edition 1.4, Ch. 116 §398; Continuation 29 §398.

### 3.3 Other gates standing open

- **Meridian production readiness gate: 0 of 10** (MER-P-35; `phase-zero/TEST_BASELINE.md` §3).
- **Specification freeze is not readiness.** The closing decision of the source specification is a specification freeze, "not a claim that the application is already production-ready" (Edition 1.4, Ch. 120 §420; Continuation 30 §420) — and, per the header of this document, enacting even that freeze is a founder decision this proposal does not take.

---

## 4. Dependencies — founder decisions that block specific requirements

Every item below is **flagged, never resolved**. Positions, where the register records them, are the corpus's own; this document takes none of them. Q-numbering is `phase-zero/FOUNDER_DECISION_REGISTER.md` throughout.

| Q-item | Decision, in the register's terms | Requirements blocked | Nature of the block |
|---|---|---|---|
| Q-43 | Repository and environment creation — none exists; where it lives, under what account/ownership, with what tooling is a founder decision that gates all code work | MER-P-33, MER-P-35 | No build, in any sprint order, can start |
| Q-22 | Complete API contracts (E03) — OpenAPI schemas, authentication rules, error codes, versioning, compatibility; Meridian's surfaces are recorded as proposed contract sketches, not verified routes | MER-P-12, MER-P-30, MER-P-35 (gate item 8) | Era-transition and API work cannot be accepted as complete contracts |
| Q-13 | Retention and deletion rules (S05) — periods undecided; erasure mechanics specified, periods not | MER-P-26, MER-P-28, MER-P-29 | Draft/withdrawn retention, Passport export/deletion, and private-note controls have no periods to implement |
| Q-10 | Audience, expiry, and resharing control (S02) — grants and expiry specified; forwarding behaviour not | MER-P-24, MER-P-28 | Memory Wall audience filtering and Passport saved references cannot be completed for shared material |
| Q-11 | Inference from comparison or map geometry (S03) — differential testing programme owed; cannot run until code exists | MER-P-24 | The baseline's own gates bar a public sharing release without this programme |
| Q-21 | Final persistence and event-replay strategy (E02) — strategy specified; production database confirmation pending repository inventory | MER-P-28 | Server-backed Passport continuity has no confirmed persistence basis |
| Q-28 | Accessibility and device-support standard (O02) — WCAG 2.2 AA is specified for Meridian by Continuation 30 §417; no platform-wide ruling exists | MER-P-32 | Accessibility acceptance has no ratified platform standard to test against |
| Q-27 | Accountable roles (O01) — legal, support, moderation, incident ownership named as human roles in the organization plan but not filled | MER-P-26, MER-P-35 | Review/moderation workflow and any public release lack accountable owners |
| Q-23 | Operating limits and recovery objectives (E04) — latency, capacity, uptime, backup recovery, monitoring, incident response all undefined | MER-P-35 (gate item 10) | Readiness gate item 10 cannot be evidenced |
| Q-02 | First target audience (P01) — open | MER-P-36 | Pilot population undefined |
| Q-29 | Pilot success evidence (V01) — metric set adopted as hypotheses; evidence thresholds undecided | MER-P-36 | Pilot go/no-go has no thresholds |

**Count:** 10 of the 36 numbered requirements carry at least one BLOCKED flag — MER-P-12, MER-P-24, MER-P-26, MER-P-28, MER-P-29, MER-P-30, MER-P-32, MER-P-33, MER-P-35, MER-P-36 — across 11 distinct Q-items (Q-02, Q-10, Q-11, Q-13, Q-21, Q-22, Q-23, Q-27, Q-28, Q-29, Q-43).

**Track-level dependency, restated as a dependency and not a Q-item:** Track B depends on Track A's authorization and publication system existing in design before Meridian's Sprint 5, and in fact before Meridian's Sprint 1 closes (MER-P-33; Edition 1.4, Ch. 116 §397). Track A itself is gated by its own queue items (notably Q-01, Q-06, Q-09, Q-13 — `phase-zero/MVP_SCOPE.md`, Track A cross-cutting gates); those items are recorded here only as the reason Track B's dependency cannot currently be discharged, and are not counted in this document's blocked-requirement count.

**Naming note, flagged only:** the organization plan's persona 24 is named MERIDIAN, which is also this district's name; the collision is a recorded founder call (Founder Decision Register, Q-44b) and creates document ambiguity until settled. It blocks nothing technical and no requirement above, and it is not renamed here.

---

## 5. Gaps — not specified in the corpus

The following could not be written as requirements without inventing material the corpus does not contain. They are recorded as gaps instead. No gap below is filled, estimated, or given a placeholder value anywhere in this document.

- **G-01 — Implementation-level contracts do not exist yet.** Database schema and migrations, canonical scene/site/era/artifact registries as built artifacts, runtime API request/response schemas, authentication/consent/authorization boundaries as an implemented model, World publication and versioning machinery, automated test fixtures and CI release gates, performance budgets, and deployment architecture are all named by the source as the work of the *next* phase (Continuation 30 §420, "Next continuation — 421–440"), which is not in the corpus. MER-P-30 and MER-P-35 therefore specify sketches and gate items, not schemas.
- **G-02 — No performance or operational numbers.** The readiness gate requires "performance and operational budgets" (Continuation 30 §419) but the corpus states no latency, capacity, uptime, recovery, or loading-time figures for Meridian (see also Q-23).
- **G-03 — Per-era material-culture research is not done.** Each period's material culture "will still require historical research" (Continuation 29 §381), and the two sources named for the Living City research pipeline — Sanborn map collections and National Park Service reconstruction guidance — stand as **Unvalidated** entries in Edition 1.4, Appendix F, Table 4. No requirement above specifies period detail beyond what the continuations themselves state.
- **G-04 — Rights status of specific content is unspecified.** The corpus sets the rules (original mini-games and fictional branding first; commercial arcade games, specific songs, and commercial recordings only with appropriate rights — Continuations 29 §§386, 392 and Edition 1.4, Ch. 110 §368) but records no licence, clearance, or rights holder for any specific game, song, or recording, including the jukebox's "song references" (MER-P-17, artifact 9).
- **G-05 — Moderation and review operations are unspecified.** The corpus requires publication review, controlled enrollment, and limited contribution volume, but specifies no reviewer staffing, review turnaround, appeals process, or dispute procedure for the Memory Studio / Memory Wall workflow (see also Q-27).
- **G-06 — The nine venue-era presentation variants are not enumerated.** MER-P-31 records the target count of nine from Continuation 29 §394; the corpus does not say which nine venue-era combinations they are.
- **G-07 — The twenty demonstration memories are not individually specified.** The corpus fixes the count (20) and shows three illustrative 1995 arcade-wall demonstration records (Continuation 29 §391), but does not enumerate the twenty, their venues, eras, kinds, or texts. No requirement above invents them.
- **G-08 — No case breakdown for the 280-case Living City suite.** Unlike the 180-case suite (§418, broken down by area), the 280 figure reaches the baseline register-derived from Continuation 28 §378, whose filed source ends at §374 (Edition 1.4, Appendix D, entry D-67). Only the total and its four nonnegotiable gates are recorded; any per-area allocation would be invention.
- **G-09 — CUSTOM mission completion semantics are undefined.** The `MissionDefinition` contract admits a CUSTOM completion rule (Continuation 30 §410) but the corpus nowhere defines what a custom rule may compute. MER-P-19 records the enum and nothing more.
- **G-10 — Analog-challenge scoring is unspecified.** The corpus establishes the 1995 challenge's scenario, objects, plausible starting point, and its reward-understanding principle (Continuation 30 §412), but no pass/fail criteria, attempt limits, or hint system.
- **G-11 — Guest continuity mechanics and device matrix are unspecified.** The Passport rules state *that* guests get local session continuity "where supported, with clear limitations" (Continuation 30 §416), but the corpus does not specify the storage mechanism, the limitations' content, or a supported browser/device matrix beyond "Mobile + Web" (Continuation 29 §381).
- **G-12 — Soundscape content is unspecified.** Five ambient soundscape sets are an asset target (Continuation 29 §394) and era sound is bounded as atmospheric interpretation unless authentic recordings are available and licensed (Edition 1.4, Ch. 110 §368), but no set's contents, sources, or licences are recorded.
- **G-13 — Continuation 28 §§375–380 are register-derived in the baseline.** Chapter 112's MVP scope, 280-case suite, and business-model material rests on register entry A-29's summary, not on filed source text (Edition 1.4, Appendix D, entry D-67). Requirements resting on §377–§378 (notably §1.4's synthetic-content rule and §3.1's 280-case gates) inherit that weaker evidence status, which is disclosed here rather than smoothed over. (The disposition of the `recovered-tails/` texts for §§375–380 is itself an open founder item, Q-44; this document takes no position on it.)
- **G-14 — Meridian-specific screen flows beyond the inventory.** The fourteen screens, the state machine, and the transition contracts are specified (Continuation 30 §§402–406), but per-screen layout, copy, and error-state detail for Meridian are not in the corpus; the general exact-flows question is separately open for the Core product (Q-05), and this document does not borrow Core flows that do not exist.

---

*End of proposal. Prepared for founder approval; nothing in this document is enacted, built, tested, or released by its existence.*
