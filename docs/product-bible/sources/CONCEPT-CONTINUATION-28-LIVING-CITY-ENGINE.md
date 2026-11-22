# SEE MY WORLD — Product Bible 2.0 · Continuation 28 · Chapters 361–380

## THE LIVING CITY ENGINE — One City. One Hundred Years. Millions of Perspectives.

*Pasted by Bobby, 21 November 2026. Filed verbatim (source citation debris and prototype-widget content retained and marked). Logged as entry A-29 in `EDITION-1.4-AMENDMENT-REGISTER.md` — a post-baseline amendment compiling against Edition 1.3, for the next edition when commissioned.*

---

We have designed the Memory Network, the Memory Portal Engine, and the World Memory Graph. Now we connect them to something people can actually walk through: a city that changes as you travel through time.

Imagine standing on the same street in 1925, 1955, 1985, 1995, and 2025.

Buildings appear and disappear. Storefronts change. Transportation evolves. Music, clothing, advertisements, and technology reflect their periods.

You enter a former movie theater and discover photographs from people who remember attending it. You explore a closed neighborhood restaurant and find recollections from former employees. You move forward thirty years and see what replaced it.

And when someone contributes another photograph or memory, the city's community history grows.

The objective is not to manufacture a perfect digital copy of the past. It is to create an evidence-aware, continuously evolving social and historical experience.

## 361. One City, One Hundred Years

The flagship experience will be called ONE CITY, ONE HUNDRED YEARS.

It should begin with a tightly scoped district rather than an entire metropolitan area.

Five eras will form the initial timeline.

*[Source note: the original's "The Time Navigator" widget (1925 / 1955 / 1985 / 1995 / 2025) shows the 1995 entry — "1995 · Historical exploration: Explore video rentals, arcades, physical media, and community gathering places" — marked "Illustrative era imagery, not verified photographs of the same real street."]*

The time navigator should retain the visitor's geographic position whenever the corresponding location exists in the selected era.

If a building did not exist at that date, the system should show the historically supported previous use of the site—or indicate that the evidence is insufficient.

## 362. The Living City spatial model

The city must be organized around stable geographic locations rather than individual buildings.

A building can be demolished. A business can relocate. A street can be renamed.

But the historical record should still connect those changes to the appropriate place.

I recommend five spatial entities:

| Entity | Purpose |
|---|---|
| City | Overall geographic and historical scope |
| District | A navigable neighborhood or area |
| Site | A geographic footprint across time |
| Structure | A building or physical installation |
| Occupancy | The business, institution, or use associated with a structure during a period |

This separation is essential.

A site might contain a theater in 1925, a retail store in 1985, and a restaurant in 2025.

The engine should represent those as different historical states, not as one building magically changing identity.

## 363. The City Time-State Resolver

The Time-State Resolver determines what the visitor should encounter at a selected date.

```ts
interface HistoricalSite {
  siteId: string;
  cityId: string;
  geometryRef: string;
  locationDisclosurePolicyRef: string;
}
interface SiteTimeState {
  stateId: string;
  siteId: string;
  validFrom?: string;
  validUntil?: string;
  structureRefs: string[];
  occupancyRefs: string[];
  evidenceRefs: string[];
  confidence:
    | "DOCUMENTED"
    | "PARTIAL"
    | "INTERPRETIVE"
    | "UNKNOWN";
  editorialRevision: number;
}
```

A production implementation must support uncertain dates, overlapping source claims, and historically changing boundaries.

The resolver must never treat a missing record as proof that a building did not exist.

Unknown is not the same as absent.

## 364. The Street Transformation Engine

This is the feature that makes the Living City visually distinctive.

The visitor selects a year, and the environment changes around them.

*[Source note: the original's "Street Transformation · Interaction Model" widget (Historical time: 1995) reads: "Late twentieth-century street state. Reveal period-specific businesses, media, and community memories", marked "Timeline behavior prototype. The illustration itself does not dynamically change."]*

For production, the engine should load date-specific scene layers, not attempt to morph every building continuously.

Historical change is often discontinuous. A building might disappear during demolition and be replaced years later.

A smooth visual transition can be used as an effect, but it must not imply that the underlying history changed continuously.

## 365. The Living City Memory Layer

Every city should support an optional community memory overlay.

Visitors can explore the historical environment without social content, or enable approved photographs, stories, music associations, and oral histories.

*[Source note: the original's "City Layers" widget lists: Historical evidence and landmarks / Community memories / Music associations / Interpretive reconstructions; visible content shown as "Historical evidence · Approved memories · Reconstructed environments".]*

The visitor controls what kinds of information appear.

The system should not infer that someone wants to see emotionally sensitive personal memories simply because they are exploring a historical location.

## 366. The Lost Places Registry

A Living City should maintain a registry of former venues and institutions.

This would support closed theaters, demolished buildings, former schools, music venues, shops, restaurants, and neighborhood gathering places.

Each Lost Place needs a documented identity, temporal range, geographic association, and reconstruction status.

```ts
interface LostPlace {
  placeId: string;
  historicalNames: string[];
  siteRef: string;
  earliestKnownDate?: string;
  latestKnownDate?: string;
  sourceRefs: string[];
  approvedMemoryRefs: string[];
  reconstructionStatus:
    | "NOT_STARTED"
    | "RESEARCH"
    | "PARTIAL"
    | "PUBLISHED";
  uncertaintyNotes: string[];
}
```

The public interface should allow visitors to contribute memories or suggest corrections.

However, a contributor's recollection alone should not automatically establish a precise closing date, former address, or building layout.

## 367. The Lost Place Reconstruction Workshop

A Lost Place could gradually move through several stages.

**Stage One — Memory Collection:** Contributors share approved recollections and photographs.

**Stage Two — Historical Investigation:** Curators gather maps, directories, advertisements, architectural records, and other evidence.

**Stage Three — Reconstruction Proposal:** The system creates a draft scene specification identifying documented and uncertain elements.

**Stage Four — Community Review:** Contributors and researchers examine proposed details and submit corrections.

**Stage Five — Immersive Publication:** The approved environment becomes explorable with visible provenance.

The original testimony remains separate from the reconstructed scene.

## 368. The City Soundscape Engine

The Living City should sound different across eras.

But historical sound design needs the same evidence boundaries as visual reconstruction.

A 1925 street might include period-appropriate transportation and commercial activity. A 1995 street might include traffic, storefront sounds, and public conversations.

These should be designed as atmospheric interpretations unless authentic recordings are available and appropriately licensed.

The visitor should be able to disable all ambient audio.

Specific songs and commercial recordings require appropriate playback rights.

## 369. The Living City Population Engine

A city needs inhabitants to feel alive.

However, simulated people must not be confused with actual historical residents.

I recommend three population categories.

| Category | Description |
|---|---|
| Fictional background inhabitants | Period-appropriate characters used to establish atmosphere |
| Historical simulations | Clearly labeled interpretations of documented historical people |
| Actual participants | Real users who explicitly join a shared session |

The system must never automatically turn a contributor's photograph into a moving character or interactive likeness.

A historical person's simulated dialogue should be source-grounded where possible and labeled as interpretation when invented.

## 370. The City Interaction Director

The city should provide activities beyond walking around.

A visitor could enter a historical shop, examine an artifact, investigate a local event, or follow a Memory Walk.

I recommend four primary activity types.

**Explore:** Navigate streets, buildings, and public spaces.

**Investigate:** Examine sources, compare claims, and solve historical questions.

**Remember:** Discover approved personal recollections associated with the location.

**Contribute:** Add a private memory or propose a correction, with optional publication after review.

These activities should be available through the same interface across all eras.

## 371. The Living City Social Layer

The social experience should be attached to places, not forced into a conventional feed.

Imagine entering a 1995 movie theater. The interface could offer three options: explore the theater, discover memories associated with it, or contribute your own recollection.

Each option opens a different experience without disrupting the others.

*[Source note: the original's "A Place With a Thousand Stories" widget lists "Explore the historical venue / Discover community memories / Contribute a memory / Investigate the historical evidence", with the Explore entry reading: "Walk through a historically inspired environment, inspect period artifacts, and open reconstruction disclosures", marked "Illustrative venue and interactions, not a representation of a real historical theater."]*

The same social interaction model should work across all Living Cities, even when the cultural environments differ substantially.

## 372. The Memory Walk Engine

A Memory Walk is a guided journey through a place and its history.

Unlike a conventional historical walking tour, it can combine documented evidence, approved firsthand memories, and clearly labeled reconstructions.

For example, a 1995 downtown Memory Walk might begin at a former theater, continue to a shopping district, visit an arcade, and end at a public park.

At each stop, visitors discover how the location changed and what people remember about it.

### Experience modes

**Solo Walk:** Explore at your own pace.

**Guided Walk:** Follow a curated route with contextual narration.

**Shared Walk:** Explore with invited participants.

**Classroom Walk:** Follow a teacher-controlled educational itinerary.

**Community Walk:** Join a moderated public historical event.

The engine should support virtual exploration first. Physical walking tours can be added later, with accessibility, location safety, and routing requirements.

## 373. The Living City Historical Research Pipeline

For a real city, reconstruction quality depends heavily on source coverage.

The Library of Congress maintains extensive Sanborn fire-insurance map collections that document building footprints, street layouts, construction materials, and historical uses. Comparing editions can help researchers investigate changes to individual sites over time. [Source debris: "Research Guides +1"]

These sources are particularly valuable for our Time-State Resolver.

However, a historical map does not automatically tell us what an interior looked like, who visited a business, or what someone experienced there.

I recommend the following evidence hierarchy for the city pilot:

| Evidence | Primary use |
|---|---|
| Historical maps | Streets, building footprints, site relationships |
| Dated photographs | Visible architectural and environmental details |
| Property and business records | Occupancy, operation, and documented changes |
| Newspapers and advertisements | Events, businesses, and cultural context |
| Oral histories | Personal experience and community perspective |
| Editorial reconstruction | Explicitly interpreted gaps between evidence |

The National Park Service's reconstruction guidance emphasizes adequate documentation, minimal conjecture, and clear identification of reconstructed features. Those are valuable principles to adapt to our digital experiences, even though the standards themselves concern physical historic-property treatment. [Source debris: "National Park Service +1"]

### Rights requirement

A source being publicly searchable does not automatically authorize unrestricted reproduction or commercial reuse.

The Library of Congress distinguishes digitized public-domain Sanborn material from restricted sheets. Every asset used in SEE MY WORLD still requires its own rights assessment. [Source debris: "Research Guides +1"]

## 374. The City Publication Compiler

A Living City should be published as a collection of independently versioned districts and scenes.

This avoids recompiling an entire city when one storefront or memory is corrected.

```ts
interface LivingCityManifest {
  schemaVersion: "living-city-v1";
  cityId: string;
  publicationRevision: number;
  supportedEraIds: string[];
  districtManifestRefs: string[];
  temporalGraphRevision: number;
  publicMemoryIndexRevision: number;
  rightsPolicyRevision: number;
  accessibilityProfileRef: string;
  status:
    | "DRAFT"
    | "IN_REVIEW"
    | "PUBLISHED"
    | "RETIRED";
}
interface CitySceneManifest {
  sceneId: string;
  districtId: string;
  timeStateRef: string;
  authorizedAssetRefs: string[];
  approvedMemoryProjectionRefs: string[];
  evidenceRefs: string[];
  reconstructionRevision: number;
  publicationRevision: number;
}
```

Each protected memory or asset must be reauthorized when requested. The manifest itself is not a substitute for current consent or access checks.

When a contributor withdraws material, the affected public projections and scene references should be invalidated without taking down unrelated city content.
