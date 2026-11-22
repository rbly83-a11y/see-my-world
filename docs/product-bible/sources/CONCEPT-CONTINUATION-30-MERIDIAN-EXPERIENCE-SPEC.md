# SEE MY WORLD — Product Bible 2.2 · Continuation 30 · Chapters 401–420

## THE MERIDIAN INTERACTIVE EXPERIENCE SPECIFICATION — Screen Architecture · Mission Logic · Time Travel · Interaction Contracts · Engineering Readiness

*Pasted by Bobby, 21 November 2026. Filed verbatim (source citation debris and prototype-widget content retained and marked). Logged as entry A-31 in `EDITION-1.4-AMENDMENT-REGISTER.md` — a post-baseline amendment compiling against Edition 1.3, for the next edition when commissioned.*

---

We now have a defined reference World: Meridian, a fictional downtown district that visitors can explore in 1925, 1955, 1985, 1995, and 2025.

The next step is to turn that World into an experience developers can actually build.

This continuation establishes the visitor interface, the interaction rules, the first complete mission, the supporting technical contracts, and the conditions that must be satisfied before implementation.

Our design objective is straightforward:

A first-time visitor should be able to enter Meridian, travel through five eras, investigate a changing location, and understand the difference between historical evidence, personal memory, and artistic reconstruction—without needing instructions from a developer.

## 401. The Meridian Experience Shell

The Experience Shell is the persistent interface surrounding every scene.

It contains six primary controls.

*[Source note: the original's shell mockup reads "SEE MY WORLD / MERIDIAN — Mercer Avenue — Prototype", with navigation "Explore / Time / Memories / Passport", a panel "Explore Meridian — Enter the theater, arcade, or diner. Inspect objects and discover how the district changed", and the indicator "Reality Lens available".]*

The interface must remain consistent as the visitor changes eras.

The environment changes. The navigation does not.

## 402. The complete screen inventory

The initial release should contain fourteen principal screens.

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

These screens may appear as overlays, panels, or full-page views depending on device size.

They are logical product states, not necessarily fourteen separate frontend routes.

## 403. First-time onboarding

The onboarding process should be deliberately short.

The visitor should understand the experience before being asked to create an account.

*[Source note: the original's opening-sequence widget offers "Take the guided historical journey / Explore the city freely / Discover community memories / Use the text-first experience", with the guided entry described as "Follow a complete investigation through five eras."]*

A visitor who chooses free exploration should never be forced into the guided mission.

A visitor who chooses text-first mode should receive equivalent historical content and mission functionality.

## 404. The visitor state machine

The runtime should model the experience as explicit states.

```ts
type MeridianScreen =
  | "WELCOME"
  | "MODE_SELECTION"
  | "DISTRICT_MAP"
  | "STREET"
  | "TIME_NAVIGATOR"
  | "VENUE"
  | "ARTIFACT"
  | "REALITY_LENS"
  | "MISSION_JOURNAL"
  | "MEMORY_WALL"
  | "MEMORY_DETAIL"
  | "MEMORY_STUDIO"
  | "PASSPORT"
  | "SUMMARY";
interface MeridianVisit {
  visitId: string;
  visitorId?: string;
  screen: MeridianScreen;
  experienceMode:
    | "GUIDED"
    | "FREE"
    | "MEMORY"
    | "TEXT_FIRST";
  eraId: string;
  siteId?: string;
  sceneId?: string;
  completedObjectives: string[];
  savedReferenceIds: string[];
  stateRevision: number;
}
```

Transitions must be validated by the runtime.

For example, a visitor cannot enter a venue interior that does not exist in the selected era.

The runtime should provide an explanation and offer an available historical state instead.

## 405. The Time Navigator interaction contract

Time travel is the flagship interaction.

It must feel immediate while remaining historically consistent.

*[Source note: the original's "Time Navigator" widget (1925 / 1955 / 1985 / 1995 / 2025; selected era 1995) reads: "The runtime would resolve the correct scene, available venues, period artifacts, and authorized memory references for this year", marked "Visual prototype. Images are illustrative and do not represent the same documented location."]*

### Required behavior

When the visitor changes eras, the system should preserve the site anchor where possible, resolve the target time state, and load only authorized assets.

If the target state is unavailable, the runtime should keep the current scene active and explain the limitation.

It must not silently substitute a fictional scene for missing historical evidence.

## 406. The scene transition protocol

The transition must be treated as a transaction rather than a visual effect alone.

```ts
type EraTransitionState =
  | "IDLE"
  | "RESOLVING"
  | "AUTHORIZING"
  | "LOADING"
  | "READY"
  | "FAILED";
interface EraTransitionRequest {
  visitId: string;
  targetEraId: string;
  currentSiteId?: string;
  expectedStateRevision: number;
  requestId: string;
}
interface EraTransitionResult {
  requestId: string;
  status: "READY" | "UNAVAILABLE" | "FAILED";
  targetSceneId?: string;
  authorizedManifestRef?: string;
  fallbackSceneId?: string;
  reasonCode?: string;
}
```

The client should not update its authoritative visit state until the server confirms a valid transition.

Repeated requests with the same idempotency key should not create conflicting visit states.

If a user rapidly switches from 1925 to 1955 to 1995, only the latest authorized selection should become active.

## 407. The venue entry contract

Each venue must publish its available states.

For example, the fictional Century Theater site exists across all five eras, but its role changes.

The arcade site begins as a hardware store and later becomes an arcade.

A visitor selecting the arcade in 1925 should enter the hardware-store state rather than a historically impossible arcade.

```json
{
  "siteId": "meridian-site-b",
  "eraId": "1925",
  "occupancy": {
    "name": "Mercer Hardware",
    "kind": "HARDWARE_STORE",
    "fictional": true
  },
  "availableModes": [
    "EXTERIOR",
    "ARTIFACT_INSPECTION"
  ],
  "interiorAvailable": false,
  "reconstructionClass": "FICTIONAL"
}
```

The runtime must support exterior-only venues without treating them as broken or incomplete experiences.

## 408. The Artifact Inspector

The Artifact Inspector is the reusable interface for historical objects.

*[Source note: the original's "Artifact Inspector · 1995" widget (tabs: Inspect / Operate / Compare) shows "Inspect the VHS cassette — Examine the cassette's physical design, labeling, and role in home-video distribution", marked "Illustrative artifact · Historical context requires source review".]*

Every artifact must provide an accessible alternative to drag-and-drop, spatial manipulation, or gesture-based controls.

## 409. The Reality Lens

The Reality Lens is not an optional educational extra.

It is a foundational trust feature.

Visitors should be able to inspect the authority of any significant historical or reconstructed element.

*[Source note: the original's "Reality Lens · Source Inspector" widget lists:]*

**Historical evidence** — Information supported by cited historical sources.

**Personal testimony** — A contributor's approved recollection, not necessarily independently verified.

**Artistic reconstruction** — An interpretation created to support exploration.

**Fictional demonstration** — Invented Meridian people, places, businesses, or events.

The system must never use one generic "verified" label for an entire scene containing multiple evidence types.

## 410. The mission logic engine

The guided journey should be defined as data rather than hard-coded into individual screens.

```ts
interface MissionDefinition {
  missionId: string;
  title: string;
  objectiveIds: string[];
  prerequisiteMissionIds: string[];
  completionRule:
    | "ALL_OBJECTIVES"
    | "ANY_OBJECTIVE"
    | "CUSTOM";
  accessibleAlternativeRef: string;
}
interface MissionObjective {
  objectiveId: string;
  missionId: string;
  eventType: string;
  targetRef: string;
  requiredEraId?: string;
  prerequisiteObjectiveIds: string[];
}
```

The engine should evaluate objective completion from validated events.

A client should not be able to mark an arbitrary mission complete simply by sending an unverified objective ID.

The system should also prevent duplicated rewards or progress events when a request is retried.

## 411. The flagship mission: The Street That Remembered

The guided experience begins in 2025.

The visitor receives an investigation prompt:

Mercer Avenue has changed for a hundred years. Explore five eras, investigate the places that survived, and discover what the street reveals about everyday life.

The mission contains six stages.

| Stage | Era | Objective |
|---|---|---|
| Arrival | 2025 | Examine the contemporary district |
| Early commerce | 1925 | Investigate the theater and street |
| Mid-century | 1955 | Compare the diner and theater |
| Changing culture | 1985 | Explore the arcade and music retail |
| Analog transition | 1995 | Investigate the video store and communication |
| Reflection | 2025 | Assemble a comparative historical account |

Completion should require meaningful interaction, not merely visiting six screens.

The visitor should examine at least one artifact or evidence item in each historical period.

## 412. The first interactive historical challenge

The 1995 segment should include an analog communication challenge.

The fictional scenario:

A visitor needs to arrange a meeting at the arcade without using a smartphone.

They can examine a landline telephone, a printed directory, a paper note, and a venue schedule.

The challenge teaches the mechanics of coordinating plans before ubiquitous mobile messaging.

*[Source note: the original's "1995 Challenge · Meet at the Arcade" widget asks "You need to find the arcade's contact information. Which object should you investigate first?" (options: Printed business directory / Cassette tape / Movie ticket), noting "The directory is a plausible starting point for finding a listed business telephone number."]*

The final experience should reward understanding rather than punishing unfamiliarity with older technology.

## 413. The Mission Journal

The Mission Journal records the visitor's discoveries and supports reflection.

It should contain completed objectives, inspected artifacts, source references, and private notes.

A visitor can revisit previous eras or continue exploring after completing the guided mission.

The journal should not expose private activity to other users.

If a visitor saves a public memory reference, the system must respect that memory's current visibility and withdrawal status.

## 414. The Memory Wall interaction contract

The Memory Wall should load only currently authorized public projections.

```ts
interface PublicMemoryCard {
  publicationId: string;
  title: string;
  kind: "PHOTO" | "STORY" | "SONG_MEMORY";
  periodLabel: string;
  placeLabel?: string;
  approvedPreviewRef?: string;
  contributorDisplayName?: string;
  publicationRevision: number;
  provenanceLabel: string;
}
interface MemoryWallResponse {
  items: PublicMemoryCard[];
  nextCursor?: string;
  indexRevision: number;
}
```

The backend must filter by audience and current consent before returning cards.

Search indexes and caches must not become alternative paths for accessing withdrawn material.

## 415. The private Memory Studio

A visitor may create a private memory without publishing it.

The Memory Studio should support drafts, corrections, approximate dates, and explicit audience selection.

Public submission should be a separate action from draft creation.

The minimum production states are:

PRIVATE_DRAFT → PENDING_REVIEW → PUBLISHED

Additional transitions must support rejection, restriction, withdrawal, and resubmission.

A contributor must be able to inspect the exact public representation before authorizing publication.

## 416. The visitor Passport and continuity model

The Passport should allow visitors to return to their exploration.

It may preserve the selected era, current site, completed objectives, saved references, and private reflections.

### Persistence rules

**Guest visitors:** Local session continuity where supported, with clear limitations.

**Signed-in visitors:** Server-backed continuity with appropriate privacy controls.

**Public memories:** Saved as authorized references, not unrestricted copies.

**Private reflections:** Never published through ordinary mission progress.

**Withdrawal:** Previously saved references must respond to changes in contributor permissions.

The Passport should support export and deletion of user-owned data.

## 417. The accessibility contract

Accessibility must be designed into the experience rather than added after the immersive version is complete.

The same mission should be completable through visual, keyboard, touch, and text-first interaction.

### Equivalent Interaction Paths

| Immersive action | Accessible alternative |
|---|---|
| Walk to theater | Select Theater from location list |
| Rotate an artifact | Read structured object descriptions |
| Hear narration | Read synchronized transcript |
| Follow visual clues | Access equivalent textual evidence |
| Change eras visually | Select an era from an accessible control |

The implementation should target WCAG 2.2 AA for applicable web interfaces, with specific testing for keyboard navigation, screen readers, reduced motion, captions, and focus management.

The platform should not require VR hardware to access core historical or memory content.

## 418. The Meridian integration test matrix

The experience requires testing across systems, not just within individual screens.

I recommend a proposed 180-case integration suite.

| Area | Planned cases |
|---|---|
| Navigation and screen states | 24 |
| Era transitions | 24 |
| Venue availability | 18 |
| Artifact interactions | 20 |
| Mission progression | 22 |
| Memory authorization | 22 |
| Passport persistence | 18 |
| Accessibility | 18 |
| Failure recovery | 14 |
| **Total planned** | **180** |

These are proposed tests, not executed results.

The suite should include rapid era switching, stale scene manifests, revoked memory permissions, interrupted sessions, duplicate mission events, and inaccessible venue states.

## 419. The production readiness gate

Before implementation begins, the team should approve a complete engineering baseline.

*[Source note: the original's "Engineering Readiness Checklist" lists: Canonical Meridian site and era registry / Complete screen-state transition specification / Mission and artifact event contracts / Authentication and authorization model / Memory publication and withdrawal workflows / Historical evidence and reconstruction labeling / Accessible text-first experience specification / API schemas and error contracts / Test fixtures and acceptance criteria / Performance and operational budgets — shown at "0 / 10" with the note "Interactive planning aid only. Checking a box does not verify that the deliverable exists or has passed review."]*

The most important gate is the authorization architecture.

If the product can render a historical city but cannot reliably protect private memories, it is not ready for public contribution.

## 420. Product Bible decision: Meridian is ready for specification freeze

The next step should be a specification freeze, not a claim that the application is already production-ready.

The core product definition is now coherent:

*[Source note: the original's "Meridian Reference Implementation" summary reads: Historical eras — 5; Principal screens — 14; Detailed interiors — 3; Initial artifacts — 10; Primary experience: The Street That Remembered; Primary social feature: Contextual Memory Wall; Primary trust mechanism: Reality Lens; Primary technical principle: Server-authorized, versioned World states.]*

### Next continuation — 421–440

THE MERIDIAN ENGINEERING FOUNDATION

The next development phase should produce the implementation-level contracts that developers need to start building:

* Database schema and migrations.
* Canonical scene, site, era, and artifact registries.
* Runtime API request and response schemas.
* Authentication, consent, and authorization boundaries.
* Mission event validation and idempotency.
* World publication and versioning.
* Automated test fixtures and CI release gates.
* Performance budgets and deployment architecture.

The next milestone should also identify which components of the larger SEE MY WORLD platform can be reused immediately and which still require new engineering work.

The Product Bible has now defined the experience. The next phase defines the machinery that makes it real.
