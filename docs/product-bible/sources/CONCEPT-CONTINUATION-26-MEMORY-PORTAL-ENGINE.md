# SEE MY WORLD — Product Bible 1.9 · Continuation 26 · Chapters 321–340

## THE MEMORY PORTAL ENGINE

*Pasted by Bobby, 21 November 2026. Filed verbatim (source citation debris and prototype-widget content retained and marked). Logged as entry A-27 in `EDITION-1.4-AMENDMENT-REGISTER.md` — a post-baseline amendment compiling against Edition 1.3, for the next edition when commissioned.*

---

From a photograph to a place. From a song to a generation. From a personal recollection to an explorable World.

The Living Memory Network already gives people a way to contribute photographs, stories, songs, and perspectives to different eras.

Now we introduce the feature that could make SEE MY WORLD fundamentally different from both social media and virtual museums:

Memory Portals — immersive experiences built around memories that people voluntarily share.

Imagine opening a photograph from a family Christmas in 1995.

Rather than simply enlarging it, SEE MY WORLD offers to create an interactive experience around the memory. You can examine the original photograph, hear the contributor's recollection, explore historically appropriate objects, discover related memories, and learn about the time and place.

If the contributor authorizes it, the system can propose an atmospheric reconstruction of the setting.

But there is a rule we must never compromise:

We can reconstruct the context of a memory. We cannot claim to recreate exactly what someone experienced.

That distinction becomes the foundation of the Memory Portal Engine.

## 321. The three levels of a Memory Portal

*[Source note: the original's "Choose how to experience a memory" widget lists three modes — Documentary · Original material; Atmospheric · Interpretive environment; Immersive · Interactive reconstruction — and describes the Immersive Portal: "Navigate a contributor-approved scene, examine objects, follow memory annotations, and discover relevant historical context. Invented dialogue or actions are not attributed to real people." It is marked "Conceptual modes. The images are illustrations, not reconstructions of an actual contributed memory."]*

The documentary mode should always remain available, even if a contributor enables more elaborate immersive features.

## 322. The Memory Portal lifecycle

A Memory Portal should not appear automatically whenever someone uploads a photograph.

The contributor must control whether their memory can be transformed into an immersive experience.

* **Memory creation:** The contributor uploads or writes a private memory.
* **Context confirmation:** The contributor reviews suggested dates, locations, objects, and descriptions.
* **Portal invitation:** The system offers optional documentary, atmospheric, or immersive presentation.
* **Scene proposal:** An authorized process drafts a reconstruction specification.
* **Contributor review:** The owner sees exactly what the experience would contain.
* **Rights and privacy review:** Protected media, identifiable people, and sensitive locations are checked.
* **Publication approval:** The contributor authorizes the intended audience and presentation mode.
* **Experience publication:** An approved Portal becomes available through authorized World views.

The system must distinguish between permission to display a photograph and permission to generate an environment based on that photograph.

Those are different uses and should require separate consent.

## 323. The Memory-to-Scene Compiler

The core technical component is a Memory-to-Scene Compiler.

Its purpose is to translate approved memory content into a structured environment specification.

The compiler should produce suggestions, not independently publish experiences.

### Proposed contract

```ts
interface MemoryPortalProposal {
  proposalId: string;
  sourceMemoryId: string;
  sourceMemoryRevision: number;
  mode:
    | "DOCUMENTARY"
    | "ATMOSPHERIC"
    | "IMMERSIVE";
  temporalContextRef?: string;
  geographicContextRef?: string;
  proposedSceneRef?: string;
  proposedArtifactRefs: string[];
  evidenceRefs: string[];
  rightsReviewRef: string;
  contributorApproval:
    | "NOT_REQUESTED"
    | "PENDING"
    | "APPROVED"
    | "REJECTED";
  publicationStatus:
    | "DRAFT"
    | "IN_REVIEW"
    | "PUBLISHED"
    | "WITHDRAWN";
}
```

A proposal should become invalid if the source memory changes materially, consent is revoked, or a required rights authorization expires.

## 324. The Reconstruction Truth Boundary

This is the most important safeguard in the system.

Suppose someone uploads a photograph of a birthday party in 1995.

The photograph might show a cake, balloons, and part of a living room.

The system must not invent unseen family members, private conversations, or specific events and present them as authentic.

I recommend four reconstruction labels.

| Label | Meaning |
|---|---|
| Original Evidence | Actual authorized photograph, recording, or document |
| Contributor Recollection | What the person explicitly remembers |
| Historical Context | Source-grounded information about the period |
| Artistic Reconstruction | Generated or editorially created representation |

These labels should be available at every level of immersion.

A visitor in VR should be able to open the same provenance information as someone viewing the Portal on a phone.

## 325. The Spatial Memory Canvas

A Portal needs an interface that feels like entering a memory without pretending that the reconstruction is the memory itself.

I recommend a Spatial Memory Canvas.

The original photograph remains an accessible anchor. Contextual objects and annotations appear around it.

*[Source note: the original's "Spatial Memory Canvas · Concept" widget (tabs: Memory / Artifacts / Context) shows a "Contributor's recollection" panel — "The approved personal story appears here, clearly attributed to its contributor and separated from generated content" — marked "Illustrative interface, not a representation of an actual user's memory."]*

The original media should remain visually distinguishable from generated extensions.

For example, an immersive reconstruction could use a visible boundary or a labeled transition when the visitor moves beyond what the photograph actually shows.

## 326. The Memory Artifact Interaction System

Every Portal should support meaningful interactions with objects.

For a 1995 household Portal, those might include a television, telephone, cassette player, or printed photograph.

The objects should connect to two different types of information.

**Personal context:** What the contributor said about the object.

**Historical context:** What verified sources establish about the object's use during the period.

For example, the contributor might remember recording songs from the radio onto cassette tapes.

The historical layer could explain the technology and common recording practices.

Neither layer should overwrite the other.

## 327. The Memory Soundscape Engine

Sound can make a Portal emotionally compelling, but it also introduces risks.

A contributor might associate a specific song with a memory.

The platform can preserve that association without automatically embedding the copyrighted recording.

A soundscape might use original environmental audio, such as rain, footsteps, household ambience, or a simulated cassette mechanism.

These sounds should be labeled as reconstruction where appropriate.

### Three soundscape levels

**Silent:** No automatic audio; all information remains available visually or through text.

**Ambient:** Optional environmental sound.

**Narrated:** Contributor-approved voice or clearly labeled synthetic narration.

The platform should not generate a convincing imitation of a real person's voice without explicit authorization and appropriate safeguards.

## 328. The Emotional Experience Director

A Memory Portal can be deeply personal.

Some memories will be joyful. Others may involve loss, trauma, conflict, or grief.

The system should never assume that nostalgia is universally positive.

I recommend an Emotional Experience Director that gives contributors and visitors control over presentation intensity.

*[Source note: the original's "Memory Portal · Experience Controls" widget shows atmospheric intensity at 30%, optional narration and environmental motion effects toggles, and a current-experience summary ("Atmosphere: Subtle / Narration: Disabled / Motion effects: Disabled"), marked "These are illustrative visitor preferences, not controls connected to a running Portal."]*

The system should not use emotional manipulation to maximize engagement.

Visitors should be able to pause, exit, or return to the documentary view at any time.

## 329. The Shared Memory Portal

The next breakthrough is allowing people to explore a memory together.

Imagine two siblings opening a photograph of their childhood home in 1995. One remembers the furniture. The other remembers a family gathering. Their recollections overlap in some places and differ in others.

SEE MY WORLD could let them explore the photograph together, add separate annotations, and build a shared collection.

The system should connect perspectives, not force them into one version of the past.

### Three collaboration modes

| Mode | Experience | Access |
|---|---|---|
| Private reflection | One visitor explores and annotates | Owner only |
| Invited exploration | Family or friends visit together | Explicit invitations |
| Community exhibition | Visitors explore an approved Portal | Moderated public access |

Shared sessions should support synchronized navigation, optional voice communication for eligible users, and independent accessibility settings.

Each participant should be able to leave without affecting the others' saved memories.

## 330. The Perspective Overlay Engine

This is one of the strongest opportunities to differentiate the platform.

A visitor could explore the same place through multiple people's memories.

For example, a reconstructed 1995 mall could contain recollections from:

* Someone who visited as a teenager.
* Someone who worked in a store.
* Someone who managed the property.
* Someone whose family depended on the jobs it provided.
* Someone who remembers when the mall eventually closed.

Rather than placing all these memories into a single narration, the system would allow visitors to switch between approved perspectives.

*[Source note: the original's "One Place · Different Perspectives" widget lists "The visitor / The retail worker / The historical researcher" with a sample category ("A social gathering place — Explore illustrative memories of meeting friends, browsing stores, and spending time together"), marked "These are example perspective categories, not actual contributor testimony."]*

The visitor could eventually compare two or more perspectives side by side.

The system must preserve the contributor's original wording and clearly distinguish summaries from direct testimony.

## 331. The Memory Portal Social Graph

A traditional social graph connects people through follows, friendships, and interactions.

Our network should also connect experiences.

A memory can link to a place, period, song, artifact, event, or another approved memory.

*[Source note: "The Experience Graph — Conceptual relationships between an authorized Portal and its associated context."]*

The graph should use explicit relationship types:

REMEMBERED_AT, ASSOCIATED_WITH, DEPICTS, CONTRIBUTED_BY, CONTEXTUALIZED_BY, RESPONDS_TO, and RECONSTRUCTED_FROM.

The DEPICTS relationship should require stronger verification than a general thematic association.

A visual similarity match alone must never establish that two photographs show the same location or person.

## 332. The Contributor Approval Studio

Before publication, the contributor needs a clear review interface.

This is especially important because the platform may have generated scenery, suggested historical objects, or created narrative transitions that were never part of the original memory.

*[Source note: the original's "Review Your Memory Portal" widget shows granular toggles — "Include my approved original memory content / Include verified historical context / Allow an artistic scene reconstruction" — an audience choice (Private / Invited people / Public after review), and a draft publication scope ("Original memory: Included / Historical context: Included / Artistic reconstruction: Not authorized / Audience: Public, after moderation"), marked "Design mockup only. No actual permissions or publication records are changed."]*

A public Portal must also pass moderation, rights, and privacy review. Contributor approval alone does not establish that all depicted individuals consented.

## 333. The Living Reconstruction Engine

A particularly exciting possibility is allowing an approved Portal to become richer over time.

Imagine a 1995 arcade Portal initially containing one photograph and one recollection.

Later, other contributors provide approved photographs of the same venue, descriptions of its layout, and records documenting the arcade's operation.

The platform could propose an improved reconstruction.

But the original Portal should not change silently.

### Reconstruction versions

| Version | Content | Authority |
|---|---|---|
| V1 | Original photo and contributor's recollection | Contributor |
| V2 | Added source-grounded historical context | Editorial review |
| V3 | Proposed atmospheric reconstruction | Contributor and editorial approval |
| V4 | Expanded environment using additional authorized evidence | Multi-source review |

A visitor should be able to inspect the reconstruction version and understand which elements changed.

If a contributor withdraws permission, affected assets and derivative scenes must be reevaluated before remaining available.

## 334. The Portal Integrity Contract

The engine needs a formal specification for what it may generate.

```ts
interface MemoryPortalManifest {
  schemaVersion: "memory-portal-v1";
  portalId: string;
  sourceMemoryId: string;
  sourceMemoryRevision: number;
  experienceMode:
    | "DOCUMENTARY"
    | "ATMOSPHERIC"
    | "IMMERSIVE";
  approvedMediaRefs: string[];
  approvedTestimonyRefs: string[];
  historicalEvidenceRefs: string[];
  reconstructedSceneRefs: string[];
  consentGrantRefs: string[];
  rightsGrantRefs: string[];
  provenanceRevision: number;
  publicationRevision: number;
  audience:
    | "PRIVATE"
    | "INVITED"
    | "PUBLIC";
  status:
    | "DRAFT"
    | "IN_REVIEW"
    | "PUBLISHED"
    | "SUSPENDED"
    | "WITHDRAWN";
}
```

The manifest must be compiled server-side from current permissions.

A published Portal should never receive unrestricted access to the source memory vault.

Each media asset and interaction must be independently authorized, even if its reference appears in a previously approved manifest.

## 335. The Portal Safety and Withdrawal Engine

The ability to create immersive environments from personal photographs introduces risks beyond ordinary photo sharing.

A generated reconstruction might reveal sensitive details about a home. It might invent a likeness of someone who did not consent. It might portray an emotionally sensitive event in an inappropriate way.

I recommend the following hard rules:

* Never generate an identifiable real person's likeness as part of a personal Memory Portal without the necessary authorization.
* Never invent dialogue and attribute it to a real contributor or depicted individual.
* Never turn a private memory into a public Portal without explicit permission.
* Never expose hidden metadata, precise private locations, or private source material through generated assets.
* Never allow cached or indexed derivatives to remain publicly accessible after effective withdrawal, subject to clearly disclosed limitations.

A withdrawal event should trigger access revocation, public-index removal, derivative invalidation, and a review of dependent experiences.

Where immediate deletion is not technically possible, access should be blocked while deletion or retention obligations are processed.

## 336. The Memory Portal Production Pipeline

I recommend dividing production into two tracks: an inexpensive documentary experience and a more demanding immersive reconstruction.

### Two production tracks

**Track A — Documentary.** Original media, testimony, dates, source references, accessible captions, and contextual Memory Threads. *Lower cost · First release.*

**Track B — Immersive.** Approved spatial reconstruction, usable artifacts, ambient audio, interactive annotations, and persistent exploration. *Higher cost · Controlled pilot.*

Track A should be available for substantially more memories than Track B.

Otherwise, the cost of generating elaborate environments could make the entire social network economically unsustainable.

### Proposed cost controls

A production system should reuse historically verified scene templates, artifact models, and environmental assets wherever appropriate.

For example, a general 1995 household template could support many Portal proposals without generating an entirely new room each time.

However, reusing a template must not imply that it reproduces a contributor's actual home.

The platform should also impose generation budgets, require approval for expensive reconstructions, and avoid regenerating unchanged assets.

## 337. The 1995 Memory Portal Vertical Slice

Our first full demonstration should be a single fictionalized memory scenario.

**Prototype: The Last Friday of Summer**

**Setting:** A historically inspired American suburban household in August 1995.

**Source:** A fictional example memory created for testing, not an actual user's recollection.

**Experience:** The visitor explores a bedroom, examines objects, follows an approved story about preparing to meet friends, and discovers contextual information about everyday life in the mid-1990s.

### Scene sequence

* **The Photograph** — The visitor begins with an illustrative photograph and a clearly labeled fictional recollection.
* **The Room** — An atmospheric reconstruction opens. The visitor can inspect a landline, cassette player, printed calendar, and television.
* **The Story** — Approved annotations explain why particular objects matter to the fictional narrative.
* **The Era** — Historical context explains period communication, entertainment, and social coordination.
* **The Connections** — The visitor explores related public Memory Threads and cultural artifacts, if available.
* **The Reflection** — The visitor can privately record what they learned or what the experience reminded them of.

### Required deliverables

| Deliverable | Scope |
|---|---|
| Documentary Portal | One fictional source memory with provenance labels |
| Spatial environment | One navigable 2.5D room |
| Living artifacts | Four usable objects |
| Narration | Original scripted text, optional audio |
| Evidence Lens | Historical context and reconstruction disclosures |
| Persistence | Saved exploration progress |
| Social layer | Approved contextual memory references |
| Accessibility | Complete text-only equivalent |

This vertical slice would test the complete path from a memory record to an authorized immersive experience.

## 338. The Memory Portal Acceptance Suite

I recommend a proposed suite of 240 acceptance cases.

| Category | Planned cases |
|---|---|
| Memory-to-scene extraction | 26 |
| Contributor approval | 30 |
| Historical context and provenance | 28 |
| Rights and likeness protections | 30 |
| Spatial interactions | 24 |
| Shared exploration | 20 |
| Persistence and revisions | 22 |
| Withdrawal and derivative invalidation | 30 |
| Accessibility and sensory controls | 30 |
| **Total** | **240** |

These are design targets, not tests already implemented or executed.

### Critical failure scenarios

The release should be blocked if a Portal can expose an unapproved photograph, invent an attributed personal statement, bypass a contributor's audience restriction, or continue serving withdrawn protected material.

It should also be blocked if an immersive experience cannot be understood through an accessible alternative.

## 339. Measuring whether Memory Portals are worthwhile

The feature must demonstrate value beyond looking impressive.

I recommend evaluating five dimensions.

| Dimension | Success question |
|---|---|
| Understanding | Can visitors distinguish authentic memory from reconstruction? |
| Meaning | Does the experience add value beyond viewing the original media? |
| Control | Do contributors understand and trust their publication choices? |
| Accessibility | Can visitors complete equivalent tasks without spatial or audio effects? |
| Sustainability | Is production and moderation cost justified by demonstrated use? |

A useful experiment would compare a documentary Portal against an immersive Portal using the same underlying material.

Measure comprehension, enjoyment, willingness to revisit, and ability to identify reconstructed elements.

If the immersive version performs no better—or makes visitors less accurate about what really happened—we should improve it rather than assuming more immersion is automatically better.

## 340. Product Bible decision: Memories become destinations

The Memory Portal Engine should become a shared capability across SEE MY WORLD.

**ERA WORLDS** — Transform approved personal memories into historically contextualized experiences.

**PERSONAL WORLDS** — Create private, explorable memory collections and family histories.

**EDUCATION & MUSEUM WORLDS** — Connect authorized oral histories and archival evidence to interactive exhibits.

**CREATOR WORLDS** — Apply the same scene technology to fictional memories and canonical story artifacts, with separate author-controlled rules.

### Recommended implementation sequence

**Phase 1 — Documentary Portal:** Ship the original media, contributor story, provenance, privacy controls, and contextual discovery.

**Phase 2 — Spatial Portal:** Introduce reusable period environments, living artifacts, and contributor-approved atmospheric reconstruction.

**Phase 3 — Collaborative Portal:** Add invited shared exploration, multiple perspectives, and community Memory Threads.

**Phase 4 — Living Reconstruction:** Allow curators and contributors to propose evidence-backed expansions as additional authorized material becomes available.

### The next major development opportunity

I recommend that Continuation 27 focus on something we have not yet fully explored:

THE WORLD MEMORY ENGINE — How an entire Era World evolves as millions of individual memories, photographs, songs, locations, and perspectives become interconnected.

That development should address the challenges of scale, community-created neighborhoods, automatic but reviewable historical connections, discovery across generations, conflicts between memories, and the possibility of reconstructing lost places from multiple independent contributions.

The long-term vision is powerful:

A person visits 1995 and contributes a photograph.

Another person connects a memory to it.

A third contributes a song.

A historian adds context.

A curator develops an immersive reconstruction.

Years later, a visitor who never experienced the 1990s can explore a richly documented World shaped by people who did.

A memory starts as one person's perspective. With consent, context, and connection, it can become part of a World that future generations are able to explore.
