# SEE MY WORLD — Product Bible 1.4 · Continuation 16 · Literary Subscriptions & Franchise Universes

## The Universe Pass — Subscribe to a Story, Not Just a Streaming Service

*Pasted by Bobby, 21 November 2026, after Product Bible Edition 1.2 was delivered. Filed verbatim (source citation debris and illustrative pricing/economics retained and marked as the document itself marks them: hypothetical, not validated). Disposition: logged in `EDITION-1.3-AMENDMENT-REGISTER.md` as entry A-18 (business layer of the Storyworld pillar, A-16).*

---

This expansion could fundamentally change the business model of SEE MY WORLD.

Instead of subscribing merely to an author's posts, videos, or fan club, a reader could subscribe to an entire living literary universe—a persistent environment containing its locations, characters, mythology, interconnected stories, events, and interactive experiences.

Your examples expose two especially important models:

* **Anne Rice:** A subscription centered on an interconnected supernatural mythology, beginning with Interview with the Vampire and potentially expanding across The Vampire Chronicles and related works where licensed.
* **Stephen King:** An overarching literary universe that connects individual novels, recurring characters, fictional towns, and the cosmology of The Dark Tower, while distinguishing established connections from interpretations.

The big idea is that a subscriber wouldn't just receive more content.

They would gain access to a place that continues growing as the literary universe evolves.

And, crucially, the subscriber could maintain their own private journey through it.

## 158. Two franchise models worth building

The Anne Rice and Stephen King examples reveal that not every literary subscription should have the same structure.

### Interview with the Vampire — The Immortal Universe

*Model: An interconnected collection of storyworlds.*

Readers begin in one recognizable setting, then explore related characters, histories, supernatural families, and crossover stories.

The subscription emphasizes atmosphere, continuity, and an expanding narrative experience.

### The Dark Tower — The Connected Multiverse

*Model: A network of distinct fictional worlds.*

Readers explore individual novels, fictional towns, parallel realities, and documented crossovers through an overarching map.

The subscription emphasizes discovery, relationships between works, and guided journeys through a large catalog.

### The Anne Rice opportunity

AMC Networks announced in 2020 that it acquired broad television and streaming development rights to 18 works across The Vampire Chronicles, The Lives of the Mayfair Witches, and crossover novels. Its television franchise subsequently expanded to include the Talamasca. [Source debris: "AMC Global Media +1"]

There is also a particularly relevant precedent: AMC partnered with Dorian in 2022 to enable interactive fan-created adaptations and monetization involving Anne Rice properties. [Source debris: "AMC Global Media"]

That is important competitive evidence. Rights holders have already demonstrated interest in licensed interactive storytelling. SEE MY WORLD would need to offer something beyond interactive fan fiction: persistent environments, canonical navigation, live experiences, subscription management, and cross-work continuity.

An official Rice universe might contain a vampire history archive, a Mayfair family territory, a Talamasca research venue, and separate pathways for novel canon versus television adaptation canon.

Those two continuities should never be silently combined.

### The Stephen King opportunity

King's official website explicitly presents The Dark Tower as the central connective structure of his creative multiverse. It documents relationships involving The Stand, 'Salem's Lot, Insomnia, The Eyes of the Dragon, and other works. [Source debris: "Connections +1"]

This makes King an excellent conceptual stress test for a Storyworld Graph.

However, an all-encompassing commercial Stephen King World would require careful rights clearance. Publishing, film, television, gaming, interactive, and merchandising rights may be controlled by different parties for different works. Permission for one novel would not establish permission for the entire catalog.

## 159. The Universe Pass subscription system

I recommend making Universe Pass a first-class product object.

A Universe Pass is a subscription entitlement that gives a reader access to a defined collection of authorized experiences.

It is not ownership of the underlying intellectual property, and it does not grant access to unpublished creator material.

### Proposed subscription levels

*[Source note: the original presented these as an "Illustrative Universe Pass offerings" widget.]* These are hypothetical prices for product testing, not current offers or validated willingness-to-pay estimates.

| Tier | Price | Scope |
|---|---|---|
| Visitor | $0 — Free entry | Public World map, introductory lore, event previews, and approved free expeditions |
| Explorer | $4.99/mo — One literary universe | Expanded locations, guided journeys, interactive archives, and subscriber events |
| Immersive | $9.99/mo — Enhanced participation | Eligible interactive characters, side stories, special live experiences, and advanced Expeditions |
| Multiverse | $19.99/mo — Selected participating universes | Access to a licensed bundle of Worlds, cross-universe discovery, and selected events |

I would not launch all four levels immediately. A free entry point and one paid Universe Pass would provide a cleaner test of demand.

## 160. A subscriber's journey through the Immortal Universe

Consider a hypothetical, officially licensed Anne Rice experience.

*[Source note: the original's "The Immortal Universe · Reader Journey" widget lists:]*

* **Enter New Orleans** — The subscriber explores an atmospheric illustrated environment with source-linked locations and historical context.
* **Choose a narrative pathway** — Follow Louis, Lestat, or another approved character through events permitted by the reader's spoiler settings.
* **Visit the archives** — Explore character histories, supernatural lore, and approved connections between books.
* **Attend a live experience** — Participate in a moderated reading, creator discussion, or licensed dramatic event.
* **Continue the journey** — Save places to a private Reader Passport and discover other authorized parts of the universe.

The World should feel alive between major releases. That could come from curated events, changing exhibitions, new commentary, and approved side experiences.

However, we should not promise a constant stream of AI-generated canonical content. Editorial quality matters more than sheer volume.

## 161. Stephen King's Universe: A subscription designed around connections

This is arguably the more technically demanding example.

Rather than presenting a single map with every book piled into it, the platform should support a Universe of Worlds.

*[Source note: the original's "The King Multiverse · Conceptual navigation" widget is marked: "Conceptual relationship map, not an exhaustive or geographically canonical depiction. An official experience would require rights clearance."]*

The subscriber could select a book, fictional location, character, or thematic connection.

The platform would then show only relationships supported by authorized source material and approved editorial interpretation.

For example, a reader might begin with 'Salem's Lot, discover its documented connection to The Dark Tower, and follow a curated journey into Mid-World. That particular connection is documented by King's official site. [Source debris: "Connections"]

### Three important navigation modes

**Publication Journey:** Explore works in publication order, with spoiler-safe progression.

**Narrative Journey:** Follow a character, setting, or sequence across connected works.

**Connection Journey:** Explore source-supported links between otherwise distinct stories.

A reader should always be able to distinguish a direct canonical connection from a recurring motif, editorial interpretation, or fan theory.

## 162. Subscription architecture: The Entitlement Engine

The underlying system should support individual subscriptions, bundles, promotional access, and separately purchased events.

```ts
interface UniversePass {
  passId: string;
  universeId: string;
  name: string;
  billingProductRef: string;
  includedExperiences: string[];
  allowedCapabilities: Array<
    | "EXPLORE"
    | "LIVING_EPISODES"
    | "CHARACTER_INTERACTION"
    | "LIVE_EVENTS"
    | "PREMIUM_EXPEDITIONS"
  >;
  territoryRestrictions: string[];
  rightsPolicyRevision: number;
}
interface SubscriberEntitlement {
  entitlementId: string;
  subscriberId: string;
  passId: string;
  status:
    | "ACTIVE"
    | "GRACE_PERIOD"
    | "EXPIRED"
    | "REVOKED";
  validFrom: string;
  validUntil?: string;
}
```

The Entitlement Engine answers whether a subscriber has purchased or otherwise received access.

The Lens and publication authorization systems still determine exactly which approved content may be served.

A subscription must never override intellectual-property restrictions, spoiler settings, or privacy permissions.

### Rights-aware access

A franchise may have separate rights for books, artwork, film likenesses, music, and interactive character performances.

Therefore, a Universe Pass must be compiled against the rights currently available for each experience.

A paid subscriber should never be promised access to content the platform is not licensed to provide.

## 163. A revolutionary expansion: The Living Literary Library

The largest opportunity may be a subscription network rather than isolated franchise subscriptions.

Imagine a reader's personal library containing Worlds from several participating authors.

*[Source note: the original's "My Living Library" widget lists illustrative categories — Gothic Universe (vampires, history, supernatural mythology), Connected Horror (parallel worlds, recurring locations, cosmic mystery), Magical Academia (institutions, mythological identities, character journeys), Mythological Worlds (gods, legends, historical traditions) — marked "Illustrative categories, not a catalog of available licensed subscriptions."]*

The user would have one private Reader Passport across the library.

Each literary World would maintain its own rights, canon, and access policies.

This allows SEE MY WORLD to become a discovery network without requiring fictional universes to merge.

### The cross-universe discovery problem

A reader interested in vampires might discover an approved vampire mythology Expedition from another author.

A reader exploring The Dark Tower might discover a literary analysis of multiverse storytelling.

These connections should be editorially grounded and explicitly labeled. They must not imply that two separate franchises share canon.

## 164. Subscription economics — An interactive model

Before deciding whether to charge $4.99, $9.99, or another amount, we need to model platform costs, creator payouts, licensing obligations, and churn.

The following calculator illustrates one possible single-universe subscription business.

*[Source note: the original's "Universe Pass · Monthly economics" calculator, transcribed:]*

| Line | Value |
|---|---|
| Monthly subscription price | $7.99 |
| Paying subscribers | 5,000 |
| Rights holder / creator revenue share | 35% |
| Variable delivery cost per subscriber | $1.20 |
| Monthly gross revenue | $39,950 |
| Rights holder / creator | $13,983 |
| Illustrative payment processing | $2,659 |
| Variable delivery | $6,000 |
| Contribution before fixed costs ("Remaining contribution") | $17,309 |

Assumes all subscriptions bill successfully, a hypothetical 2.9% + $0.30 payment fee, and no refunds. Excludes fixed engineering, moderation, marketing, taxes, minimum guarantees, customer support, and other costs. Actual platform and app-store fees may differ substantially.

A key finding from the model: the subscription price alone is not the most important variable.

Licensing economics and the cost of interactive experiences—especially real-time AI characters, streaming, and high-quality generated environments—could determine whether the business is viable.

We should model these separately rather than assume every subscriber costs the same amount to serve.

## 165. Subscription features that could differentiate SEE MY WORLD

I recommend five features specifically designed for Literary Universe subscriptions.

**The Universe Key.** One entitlement unlocks a defined set of locations, archives, events, and experiences. The reader can always inspect what is included before subscribing.

**Living Seasons.** A universe can run curated thematic seasons—character histories, mysteries, location spotlights, or live events—without rewriting its established canon.

**The Canon Vault.** An approved encyclopedia with source-linked facts, chronology, adaptation differences, and spoiler-aware navigation.

**Subscriber Gatherings.** Ticketed or included events, guided Expeditions, discussions, and interactive author experiences inside the World.

**Persistent Reader Journey.** A private Passport remembers deliberately saved locations, completed Expeditions, and story discoveries, subject to the reader's controls.

## 166. What happens when a subscription ends?

This needs a clear product rule before launch.

A subscriber should not lose their entire personal reading history because they stop paying.

I recommend separating access to licensed experiences from ownership of personal records.

When a subscription expires, premium locations, licensed character interactions, and paid events become inaccessible according to the agreement.

However, the reader should retain their private Passport entries, personal notes, and noninfringing bookmarks.

Licensed text, artwork, audio, or protected lore must not remain available through those records unless the rights agreement permits it.

This also means that a purchased digital product, an active subscription, and a free saved Seed must have separate entitlements and retention rules.

## 167. Franchise licensing strategy

We should approach licensing in stages.

| Stage | Partner | Objective |
|---|---|---|
| 1 | Independent authors | Prove Book-to-World conversion and paid demand |
| 2 | Small publishers and author estates | Validate multi-title subscriptions |
| 3 | Mid-sized genre franchises | Demonstrate cross-book canon and live events |
| 4 | Major rights holders | Negotiate flagship licensed universes |

A major franchise partner would reasonably expect editorial approval, brand controls, security assurances, revenue reporting, defined AI usage, content moderation, and clear termination rights.

For AI character interactions, the agreement would also need to specify whether the platform may generate new dialogue, use character likenesses or voices, and create side stories.

No single blanket permission should be assumed to cover all of these uses.

## 168. An additional business model: Franchise licensing as infrastructure

There is a second revenue opportunity beyond selling subscriptions directly to readers.

SEE MY WORLD could license the Storyworld Engine to publishers and entertainment companies.

A publisher might want its own branded literary universe, hosted under its existing website or app.

SEE MY WORLD could provide the infrastructure: canon extraction, World generation, interactive maps, subscriptions, live events, analytics, and rights enforcement.

Possible models include a setup fee, recurring platform fee, usage-based fees, and negotiated revenue sharing.

This approach could make the platform valuable even when a major rights holder prefers to retain its own customer relationship and billing system.

It also avoids assuming that every franchise would agree to appear in a shared subscription marketplace.

## 169. The architecture we now need

The Literary Subscription Engine should introduce five new components.

* **Universe Registry** — Tracks each literary universe, its works, authorized publisher, and participating rights holders.
* **Rights Compiler** — Determines which interactive uses are licensed for each work, territory, asset, and experience.
* **Subscription & Entitlement Engine** — Manages plans, billing references, access periods, cancellations, and purchases.
* **Canon-Aware Experience Compiler** — Produces approved storyworld experiences under the reader's spoiler settings and authorized access.
* **Reader Passport** — Stores the reader's private, portable journey without copying protected franchise content.

A protected request would need to pass all relevant checks:

Identity → Subscription entitlement → Rights authorization → Spoiler policy → Publication authorization → Render

If any required check fails, the system must not serve the protected content.

## 170. Recommended product direction

I would formally establish three subscription products within SEE MY WORLD:

**Creator Pass:** Access to a particular creator's approved events, content, and community.

**Universe Pass:** Access to one licensed literary or fictional universe.

**Library Pass:** Access to a defined bundle of participating Universes, without implying that every franchise is included.

The Library Pass is the most ambitious long-term opportunity, but it should come after single-universe subscriptions are validated.

### The first subscription experiment

I recommend launching a paid Literary World pilot with an independent author or original universe, rather than attempting to negotiate a major franchise license immediately.

The experiment should answer four questions: Will readers pay for access? Which experiences cause them to return? Can authors maintain the World without excessive editorial labor? And can the platform deliver those experiences profitably?

Once those answers are supported by real usage data, SEE MY WORLD will have a much stronger proposition for publishers, estates, and major entertainment companies.

### Strategic conclusion

The Anne Rice and Stephen King examples demonstrate two complementary possibilities.

The first is a deep, atmospheric franchise subscription, where readers inhabit a coherent fictional mythology.

The second is an interconnected literary multiverse, where the principal value comes from discovering how numerous works relate.

SEE MY WORLD should support both through the same underlying infrastructure.

The most important addition to the Product Bible is therefore:

The Universe Pass transforms a literary work from a product consumed once into an authorized, persistent experience readers can revisit, explore, and participate in over time.

The next development milestone should be a complete Literary Subscription and Franchise Licensing Specification, including the Rights Compiler, multi-universe entitlements, revenue distribution, subscriber lifecycle, and the editorial workflow for franchise-scale canon management.
