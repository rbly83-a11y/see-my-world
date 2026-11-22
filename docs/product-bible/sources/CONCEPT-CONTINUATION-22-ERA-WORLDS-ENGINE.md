# SEE MY WORLD — Product Bible 1.7 · Continuation 22 · Chapters 249–266

## ERA WORLDS ENGINE v1.0 — Building the Time Machine

*Pasted by Bobby, 21 November 2026, after Edition 1.3 was approved as the baseline of record. Filed verbatim (source citation debris and prototype-widget content retained and marked). Logged as entry A-23 in `EDITION-1.4-AMENDMENT-REGISTER.md` — a post-baseline amendment compiling against Edition 1.3, for the next edition when commissioned.*

---

We have established what ERA WORLDS should feel like. Now we need to establish how the machine actually works.

The objective is to create a reusable system capable of reconstructing a particular time and place, populating it with historically appropriate environments, objects, events, and simulated inhabitants, and allowing visitors to explore it through meaningful interactions.

Our first production target will be One Day in 1995, but the architecture must also support Florence in 1478, the United States in 1969, ancient Athens, and eventually thousands of other historical environments.

The central architectural decision:

An Era World is not a static recreation of the past. It is a historically bounded, evidence-aware simulation with persistent visitor experiences.

## 249. The six systems that make the Time Machine work

*[Source note: the original presents an "ERA WORLDS · System Architecture" diagram at this point; the six system names appear only in the diagram. The sections that follow specify the components in prose and contracts.]*

These systems should not operate independently. Every scene, artifact, interaction, and historical claim must pass through the same authority and publication pipeline.

The engine should know not only that an object existed, but when, where, for whom, and under what circumstances it would plausibly have been available.

## 250. The Temporal Context Contract

A decade is too broad to define an accurate environment.

The runtime needs a more precise context.

```ts
interface TemporalContext {
  contextId: string;
  date: {
    earliest: string;
    latest: string;
    precision: "DAY" | "MONTH" | "YEAR" | "PERIOD";
  };
  geography: {
    regionId: string;
    localityId?: string;
    historicalBoundaryRevision?: string;
  };
  perspective: {
    roleId: string;
    ageBand?: string;
    economicContext?: string;
  };
  sourceCollectionIds: string[];
  editorialRevision: number;
}
```

For example, a 1995 American mall experience should identify its specific region and representative setting.

A reconstructed mall in suburban Florida is not automatically representative of a mall in Manhattan or rural Alaska.

Similarly, a Florence experience in 1478 should not include buildings, inventions, or political circumstances that belong to a later century.

## 251. The Historical Availability Resolver

This is a particularly important technical innovation.

When the system creates a scene, it must determine whether an object, practice, building, technology, or event is historically appropriate.

I recommend an Availability Resolver that checks five conditions:

* Did it exist during the selected period?
* Was it present or plausibly available in the selected geography?
* Was it accessible to the selected social perspective?
* Is its presence supported by evidence or clearly labeled reconstruction?
* Do we have permission to display the specific asset or representation?

A pager might be appropriate in a 1995 environment, but that does not mean every household owned one.

A fifteenth-century printed book might be appropriate in certain European settings late in the century, but its availability would depend on date, place, and social circumstances.

The resolver should return an eligibility decision with evidence and uncertainty, not merely a Boolean.

## 252. The first flagship environment: One Day in 1995

### Proposed setting

A fictionalized, historically researched suburban American community in 1995.

The location will be deliberately fictional to avoid falsely presenting invented businesses, residents, and street layouts as an exact historical town.

Its material culture, technology, economic conditions, and social context should be grounded in appropriate sources.

### The visitor's day

* **Morning — Home:** Wake up, check messages, use household technology, plan the day.
* **Late morning — Library:** Research information using printed materials and period-appropriate computer systems.
* **Afternoon — Shopping mall:** Explore retail stores, prices, fashion, and social spaces.
* **Late afternoon — Arcade:** Interact with historically inspired game machines and understand the culture of public gaming.
* **Evening — Video rental shop:** Select a film from a rights-cleared fictional catalog, navigate rental rules, and return home.

The environment should support a free-exploration mode and a guided mission mode.

Neither should require visitors to complete the day in a predetermined order unless a particular activity has a clear narrative dependency.

## 253. Location 1 — The 1995 Household

The household is the ideal starting point because it introduces the technological limitations and social context of the period.

### Interactive objects

| Artifact | Interaction | Learning opportunity |
|---|---|---|
| Landline telephone | Dial a number, hear a busy signal, leave a message | Communication before constant mobile access |
| Answering machine | Listen to fictional recorded messages | Asynchronous communication |
| CRT television | Switch between recreated educational channels | Broadcast scheduling |
| Cassette player | Play original, rights-cleared audio | Physical media |
| Printed directory | Search for a number or address | Information retrieval |
| Paper calendar | Plan appointments | Coordination without cloud synchronization |

The visitor should be able to inspect each object and open its evidence record.

Some visitors will recognize these objects immediately. Others will encounter them for the first time.

The system should accommodate both without treating unfamiliarity as ignorance.

## 254. Location 2 — The Public Library

The library becomes the primary research environment.

A visitor receives a question and must locate information using a combination of physical catalogs, encyclopedias, periodical indexes, and available computer terminals.

### The investigation

The student is asked to research a historical event.

They can consult different source types, take notes, and compare the quality of information.

This creates a natural bridge between ERA WORLDS and the educational Evidence Engine.

The library should also demonstrate that computer access varied widely across institutions in 1995.

Not every library had identical equipment or internet connectivity.

## 255. Location 3 — The Shopping Mall

The mall should feel like a social environment, not just a collection of shops.

Visitors can explore fashion, consumer technology, music, food courts, advertising, and retail culture.

### Three interaction layers

**Observation:** Examine architecture, store layouts, products, and social spaces.

**Participation:** Compare prices, make fictional purchases, navigate the mall, and arrange meetings.

**Historical analysis:** Investigate how retail, transportation, advertising, and social behavior differed from later decades.

The experience should use fictional brands or properly licensed historical assets where necessary.

## 256. Location 4 — The Arcade

The arcade is the strongest candidate for a playful interaction showcase.

Visitors could insert virtual tokens into original mini-games designed specifically for SEE MY WORLD.

Those games should evoke period mechanics without copying protected software, characters, soundtracks, or distinctive game assets.

The educational layer could explore game hardware, graphics, social gaming, and the transition toward home consoles.

### An important distinction

We are recreating the experience of a 1990s arcade.

We are not automatically obtaining the rights to distribute every arcade game that existed during that decade.

## 257. Location 5 — The Video Rental Shop

This location offers an excellent way to demonstrate how entertainment distribution worked before streaming.

Visitors browse fictionalized VHS packaging, examine rental terms, compare formats, and choose something to watch.

The system can demonstrate physical inventory, late fees, limited availability, and the importance of returning rented media.

A simulated checkout can become a mission without requiring real purchases.

The shop could also provide a historical comparison with modern digital entertainment.

## 258. The Mission Director

A compelling Era World needs activities that make historical constraints meaningful.

I recommend three launch missions.

**Mission A — Meet Me at the Mall** *(Social).* Arrange a meeting using landline calls and messages, navigate to the correct location, and handle an unexpected change of plans.

**Mission B — The Research Assignment** *(Education).* Locate reliable information through a library and compare the effort with contemporary search tools.

**Mission C — Friday Night** *(Culture).* Plan an evening within a fictional budget, explore entertainment choices, and experience the limitations of physical media.

Each mission should have multiple valid paths.

The system should reward understanding, planning, and curiosity rather than merely speed.

## 259. The Era Simulation Clock

A defining feature of the Time Machine should be that time actually matters inside the experience.

The simulation clock controls store hours, appointments, scheduled broadcasts, transportation, and narrative events.

But we should avoid forcing every visitor to wait in real time.

*[Source note: the original's "1995 · Simulation Clock" widget shows "Saturday · Fictional town · 1995 — 3:00 PM" with a status line ("Your World right now: The arcade is busy, the mall is active, and your scheduled meeting may be approaching") and the note "Interactive scheduling concept, not verified historical business hours."]*

### Clock architecture

The simulation must support pause, rewind, fast-forward, and resume.

Rewinding should restore a previously saved experience state without deleting the visitor's private notes.

For educational scenarios, teachers can lock a session to a particular period or advance the clock for an entire class.

## 260. The Period Persona System

Visitors should be able to experience an era through different circumstances.

For the 1995 pilot, I recommend three perspectives:

| Perspective | Experience | Distinct challenges |
|---|---|---|
| Teenager | School, friends, entertainment | Limited money, transportation, household rules |
| Working adult | Employment, errands, communication | Scheduling, budgeting, time constraints |
| Visitor from the present | Historical investigation | Discovering unfamiliar tools and practices |

These are fictional scenarios, not attempts to reproduce the lived experiences of specific real people.

### Identity and agency

The visitor should not be forced into a particular identity or social role to explore the World.

They can select a guided perspective or remain an observer.

For the 1400s, social status, occupation, gender, and regional conditions may significantly affect available opportunities. These constraints should be represented thoughtfully and supported by evidence.

The platform must distinguish historical restrictions from its own modern rules and values.

## 261. The Period Character Engine

An immersive environment needs inhabitants who behave appropriately for the setting.

But the characters should have bounded knowledge.

A fictional shop employee in 1995 should not casually reference smartphones, streaming subscriptions, or future events.

A fifteenth-century artisan should not know the outcome of historical events that have not yet occurred.

### Character knowledge contract

```ts
interface EraCharacterContract {
  characterId: string;
  sceneId: string;
  characterType:
    | "FICTIONAL_RECONSTRUCTION"
    | "HISTORICAL_SIMULATION"
    | "SCRIPTED_GUIDE";
  knowledgeCutoff: string;
  geographicContextId: string;
  socialPerspectiveId: string;
  allowedKnowledgeRefs: string[];
  prohibitedClaims: string[];
  dialogueMode:
    | "SCRIPTED"
    | "SOURCE_GROUNDED"
    | "LABELED_HYPOTHETICAL";
  requiresDisclosure: true;
}
```

The visitor should always be able to distinguish a simulated character from a real historical person.

### A revolutionary interaction

A visitor could ask a fictional 1995 electronics-store employee about buying a computer.

The employee could explain the period's available products and typical tradeoffs, using a curated, historically grounded catalog.

The visitor could then open the Reality Lens to inspect which claims are documented and which dialogue elements are invented.

This combines conversational immersion with source transparency.

## 262. The Time Comparison Engine

The most valuable educational feature may be the ability to compare two periods directly.

*[Source note: the original's "Then & Now · Communication" widget contrasts 1995 ("Landline calls, answering machines, pagers, letters, and early email") with the present day ("Smartphones, messaging apps, video calls, and widespread internet connectivity"), poses the investigation question "How did changes in communication technology affect people's expectations about availability, privacy, and coordination?", and notes: "These are broad comparisons. Actual access to each technology varied by geography, income, age, and institution."]*

This engine could compare transportation, entertainment, education, employment, household technology, and access to information.

It should also distinguish improvements from tradeoffs.

For example, modern communication may be faster, but historical comparison can raise questions about privacy, attention, social expectations, and dependence on connected services.

## 263. The Personal Memory Portal

ERA WORLDS has a particularly interesting connection to the original SEE MY WORLD concept.

Adults who lived through the 1960s, 1980s, or 1990s could voluntarily contribute memories to a separate oral-history layer.

Imagine a visitor entering a 1995 arcade and opening a panel containing recollections from people who actually visited arcades during that period.

This could create a remarkable connection between generations.

### Three layers of historical memory

**Documented history:** Archival evidence and scholarly research.

**Personal recollection:** A person's account of their own experience, attributed and consented to.

**Reconstructed experience:** A simulation informed by the first two, but not presented as either.

Personal memories should not automatically become historical facts.

The platform must preserve attribution, consent, revision, withdrawal options, and the distinction between individual recollection and general historical conditions.

For schools, oral-history contributions require additional privacy protections and teacher-controlled access.

### The Memory Bridge

A family could explore a decade together.

A grandparent might explain what life was like during their childhood while a younger family member examines the environment.

The platform could allow them to save a private shared memory or reflection, with everyone consenting to the material being preserved.

That could be emotionally meaningful without turning family memories into public content.

## 264. The Era World Production Compiler

We now need a formal pipeline that turns historical research into a playable environment.

### From Historical Sources to Immersive World

* **Define the era** — Select date range, geographic setting, and social perspectives.
* **Acquire sources** — Gather rights-cleared photographs, documents, catalogs, maps, scholarship, and oral histories.
* **Build temporal graph** — Establish which objects, locations, practices, and events belong in the setting.
* **Create scenes** — Generate or commission architecture, interiors, objects, ambient audio, and character designs.
* **Design interactions** — Specify usable artifacts, missions, conversations, and consequences.
* **Verify authenticity** — Review historical claims, visual reconstructions, rights, and accessibility.
* **Compile publication** — Produce authorized manifests for supported devices.
* **Test and release** — Validate historical accuracy, immersion, performance, privacy, and user comprehension.

### Production manifest

```ts
interface EraExperienceManifest {
  schemaVersion: "era-v1";
  eraWorldId: string;
  sceneIds: string[];
  temporalContextId: string;
  evidenceRevision: number;
  publicationRevision: number;
  artifactRefs: string[];
  characterContractRefs: string[];
  missionRefs: string[];
  rightsPolicyRevision: number;
  supportedModes: Array<
    "ATLAS" |
    "SPATIAL" |
    "THREE_D" |
    "XR" |
    "ACCESSIBLE_TEXT"
  >;
  status:
    | "DRAFT"
    | "IN_REVIEW"
    | "PUBLISHED"
    | "RETIRED";
}
```

The compiler should reject a publication when a required rights record is missing, a historical claim has not passed its required review, or a critical interaction lacks an accessible alternative.

The same source data should support mobile, desktop, classroom, and future XR experiences.

## 265. The first production acceptance plan

The initial test suite should concentrate on historically bounded interactions, persistent state, and rights enforcement.

| Test category | Proposed cases |
|---|---|
| Temporal context and dating | 28 |
| Historical availability | 32 |
| Artifact operation | 30 |
| Character knowledge boundaries | 26 |
| Mission progression | 28 |
| Simulation clock and rewind | 24 |
| Persistence and memory | 26 |
| Rights and source provenance | 30 |
| Accessibility | 28 |
| Privacy and security | 32 |
| **Total planned** | **284** |

These are proposed acceptance cases, not tests that have been written or executed.

### Critical release gates

The prototype must demonstrate that a visitor cannot access future events through a character who should not know them, cannot obtain restricted assets through hidden API fields, and cannot lose their saved progress because of an ordinary session interruption.

Historical corrections must be traceable to editorial revisions.

The visitor should also be able to complete every essential mission without sound, motion effects, or specialized hardware.

## 266. The next strategic leap: The Universal Time Atlas

The most exciting possibility is not simply creating separate Worlds for 1965, 1995, and 1478.

It is creating one interconnected temporal atlas in which visitors can move between places, periods, historical events, literary settings, scientific discoveries, and personal memories.

### The Universal Time Atlas

**Everyday Life** — Experience how people lived. **Historical Events** — Investigate what happened. **Civilizations** — Explore societies and cultures. **Literary Settings** — Connect fiction to its historical context.

### Four transformational capabilities

1. **Temporal Portals** — Move from a literary setting into its historical context, or from a historical event into the everyday lives of people living during that period.
2. **Generational Comparison** — Explore how communication, education, technology, entertainment, work, and social expectations changed across generations.
3. **Historical Perspective Switching** — Examine the same period through multiple geographic and social perspectives, while preserving evidence boundaries.
4. **Living Memory Collections** — Allow consenting individuals and institutions to contribute recollections, artifacts, and oral histories without confusing personal testimony with verified historical facts.

### Product Bible decision

I recommend formally adopting the Universal Time Atlas as the organizing layer for ERA WORLDS and the historical components of the Living Classroom.

Its first production milestone remains One Day in 1995, because it offers a manageable environment for validating usable artifacts, persistent memory, period-aware characters, and the simulation clock.

But I would make one architectural change immediately: every Era World should be built with future cross-era connections in mind.

A telephone in 1995 should eventually connect to the history of communication. A Renaissance workshop should connect to the history of printing, trade, and science. A Victorian street should connect to the historical setting of relevant literary Worlds.

That way, each new experience expands the entire network instead of becoming an isolated attraction.

SEE MY WORLD is evolving into something extraordinary: a navigable history of human civilization, culture, imagination, and everyday life—where the past is not simply displayed, but investigated and experienced.

The next major development pass should produce the One Day in 1995 Master Production Bible, with scene-by-scene layouts, artifact interaction specifications, mission scripts, character dialogue boundaries, visual direction, and engineering implementation contracts.
