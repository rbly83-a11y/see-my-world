# SEE MY WORLD — Competitive Intelligence · Reverse Engineering · Originality Lab

## Building a Category of One

*Pasted by Bobby, 21 November 2026, after Product Bible Edition 1.2 was delivered. Filed verbatim (source citation debris — "+1" markers and bare source names — retained and marked where they appear). Gizmo's disposition: Edition 1.2 is a delivered, frozen edition, so this document's §12 revisions are NOT silently applied to it; they are logged in `EDITION-1.3-AMENDMENT-REGISTER.md` with dispositions. Two of the six revisions were already satisfied by Edition 1.2 as delivered; one (the Q redefinition) is a definition drift requiring a founder decision.*

---

The objective is not to make SEE MY WORLD another social network with prettier profiles. It is to identify what existing products already do exceptionally well, discover where their approaches stop, and design an experience that gives people a compelling reason to choose ours.

I've grounded this review in the project's original Product Bible and First Draft Engine, alongside publicly available competitor documentation. The distinction matters: our source documents establish the intended product; competitor sources establish observable features; the opportunities and inventions below are my analysis and proposals.

## The first competitive discovery

The closest competition is not necessarily Facebook, Instagram, or TikTok.

Those platforms compete for attention. SEE MY WORLD is trying to help people represent and share their curiosity.

Several smaller products already compete much more directly for that purpose.

**Are.na — Connected knowledge collections.** People save material into channels, connect ideas, and discover others through content. Its business explicitly rejects ads and personalized recommendations. *Competitive implication: Human-curated discovery and a member-funded social knowledge network are already real, not unique to our proposal.* [Source debris: "Are.na +1"]

**Cosmos Search & Discover — Visual taste sharing.** Cosmos offers saving, visual search, curated profiles, collaborative collections, and discovery through other people. *Competitive implication: A beautiful interface for sharing taste is not enough differentiation by itself.* [Source debris: "App Store +1"]

**mymind — Private AI-organized memory.** mymind automatically categorizes saved material, emphasizes privacy, and avoids advertising. *Competitive implication: Privacy plus AI organization is an established proposition. Our distinction must be what the person can correct, authorize, and communicate, not simply what the AI organizes.* [Source debris: "mymind +1"]

**Pinterest — Interest-driven discovery.** Pinterest recommends content using saved Pins, searches, boards, and activity. Users can also refine recommendations and hide individual Pins. *Competitive implication: Giving people controls over recommendations is not new. SEE MY WORLD must go further by making corrections authoritative over an explicit, user-governed World representation.* [Source debris: "Pinterest help +1"]

The opening finding is encouraging but demanding: many ingredients of SEE MY WORLD already exist independently. The opportunity is to combine them into a genuinely different relationship between a person, their interests, and other people.

## 1. Competitive landscape: reverse-engineering the alternatives

I expanded the comparison to include nine distinct product models, from mainstream recommendation systems to personal knowledge graphs and privacy-first data infrastructure.

### Competitive capability matrix

Assessment of publicly documented capabilities, November 2026. "Not established" means I did not verify an equivalent feature in the reviewed sources—not that the product definitely lacks it.

| Product | Its strongest relevant capability | Where SEE MY WORLD could differentiate |
|---|---|---|
| Are.na | Human-curated collections and connected discovery | A correctable, evolving personal representation rather than primarily collections |
| Cosmos | Visual taste, aesthetic discovery, collaborative collections | Explainable interest relationships and consent-based sharing |
| Pinterest | Large-scale interest recommendations | Owner-authored assertions that override inferred preferences |
| mymind | Private AI organization of saved information | Deliberate, recipient-specific social sharing |
| Obsidian | Linked knowledge graphs and publishing | Consumer-friendly World creation without manually building a knowledge base |
| The StoryGraph | Preference-based recommendations and social reading | Cross-domain curiosity and selective perspective exchange |
| Letterboxd | Expressive taste profiles and social discovery | Connections across all interests, not one media category |
| Spotify Blend | Shared taste and interpersonal discovery | Explicitly governed sharing without a compatibility score |
| Discord | Interest communities and permissioned spaces | Understanding a person's curiosity before joining a community |

[Source debris: "The descriptions of these products are supported by their official documentation. Are.na +8"]

### The three most instructive competitors

**Are.na — Our closest philosophical competitor.** Its central insight is that people form meaningful networks through ideas, not just profiles. It already supports private, closed, and public channels, collaboration, export, and member subscriptions. *What to learn: Respectful social discovery can be a viable paid product. What to surpass: Make the relationships between a person's interests understandable without requiring them to manually curate an entire collection.* [Source debris: "Are.na +1"]

**Obsidian — Our closest structural competitor.** Obsidian demonstrates that graph-based navigation can make connected information visible. Its graph supports nodes, links, filters, groups, and time-lapse exploration; Obsidian Publish makes connected notes navigable online. *What to learn: Graphs become useful when they support actual navigation. What to surpass: Replace the requirement to manually construct links with an explainable suggestion-and-testimony process.* [Source debris: "Obsidian Help +1"]

**Spotify Blend — Our closest interpersonal mechanic.** Blend merges two users' musical tastes into a shared experience and has offered taste-match scores and shareable stories. *What to learn: Shared discovery is powerful when it creates something both people can enjoy immediately. What to surpass: Replace scoring how compatible two people are with a useful, permission-safe path to exploring something together.* [Source debris: "Spotify"]

### A fourth competitor category: data ownership

The Solid Project already explores user-controlled data storage and app access through Pods and WebIDs. Open Humans also demonstrates user-directed data sharing with explicit acknowledgment of privacy risks. [Source debris: "Solid Project +1"]

This matters because user-owned data and revocable access are not inventions unique to SEE MY WORLD. Our opportunity is to make those principles understandable and useful inside an everyday social experience.

## 2. What the competition reveals about our weaknesses

The research exposes six strategic vulnerabilities.

**Vulnerability A: A beautiful map is not a complete product.** Obsidian already visualizes connections. Kinnu uses map-based exploration for learning. Cosmos excels at visual discovery. [Source debris: "Obsidian Help +2"] A map may attract someone initially, but its beauty alone does not guarantee repeat use. *Engineering response: Every map interaction must answer a useful question, enable a correction, reveal an explainable connection, or lead to a deliberate discovery. The map must function as an interface, not wallpaper.*

**Vulnerability B: Correctable recommendations already have prior art.** Interactive preference elicitation and user-controlled recommenders are established research areas. Published work includes methods for changing recommendations and reducing the influence of outdated representations. [Source debris: "ivySCI +1"] Therefore, we should not claim that SEE MY WORLD invented the idea of correcting an algorithm. Our proposed differentiation is more specific: owner corrections become authoritative, versioned assertions in a private World, and only deliberately authorized assertions can cross into a shared Perspective. That is a stronger product proposition than a dislike button.

**Vulnerability C: Users may not want to maintain another profile.** Every correction adds work. Every Lens adds a decision. Every invitation adds another step. If maintaining a World feels like managing a spreadsheet disguised as an island, the product will lose people. *Engineering response: Design for progressive depth. A beginner should be able to create something meaningful with minimal effort, while advanced controls remain available without becoming mandatory.*

**Vulnerability D: Sharing could become too complicated.** Continent, Coast, and Harbour are evocative, but users may not intuitively understand what information each reveals. *Engineering response: Make sharing object-based first and resolution-based second. Instead of only asking someone to select Coast, ask them to choose what they want to show, then preview the exact result.*

**Vulnerability E: A static World could become stale.** If an owner never returns, the World may become an abandoned profile. If everything decays too aggressively, the user may feel the system has forgotten them. *Engineering response: Separate enduring owner assertions from current attention, as our earlier design proposed. Offer optional updates rather than requiring constant maintenance.*

**Vulnerability F: Privacy can reduce network growth.** Private-by-default systems have less publicly discoverable content. That is an intentional trade-off, but it means SEE MY WORLD cannot assume it will grow like a conventional social feed. *Engineering response: Optimize for meaningful invitation clusters, not public follower counts.*

## 3. The originality pass

I would not attempt to differentiate SEE MY WORLD by inventing ten unrelated features.

Instead, I recommend building five tightly connected signature capabilities, each reinforcing the same product identity.

These are proposed product inventions, not verified patentable inventions or implemented capabilities. Their names are working labels.

### Originality 01 — The Testimony Compass

*The World that explains itself*

Concept: Every meaningful element in a World can answer three questions: Why is this here? Who decided it belongs? What can I change?

A topic's explanation distinguishes an owner declaration, an owner confirmation, a system proposal, and an authorized signal.

Originality opportunity: Make provenance and correction part of the primary experience rather than burying them in settings.

Example: A person opens Astronomy. The interface explains that Astronomy was suggested because they selected Science, that they have not confirmed it, and that it is therefore not eligible for sharing. The person can confirm, reject, or keep watching. The system responds by changing its World state—not merely the next recommendation.

Why this could win: It makes trust visible.

Risk: Explanations can become cluttered or misleading if generated without faithful provenance.

Pilot experiment: Compare a simple explanation against a richer testimony explanation. Measure comprehension and correction accuracy, not just engagement.

### Originality 02 — Perspective Passport

*Sharing as a permissioned journey*

Concept: A Perspective Passport is a human-readable summary of what a visitor is authorized to explore. It records the approved subjects, detail level, recipient, expiration, and whether comparison is permitted. The visitor receives the Passport's authorized projection—not access to the underlying World.

What makes it different: Conventional profile sharing tends to involve a page, an account, or a collection. The Passport frames sharing as a specific agreement about a specific experience. A friend might receive a seven-day Perspective showing someone's writing and mythology interests, without receiving access to unrelated topics or future World changes.

Why this could win: Sharing becomes intentional and understandable.

Risk: Too many permission controls could reduce completion.

Pilot experiment: Compare the Passport interface against a simpler conventional share-preview flow. Measure successful sharing, understanding of what is disclosed, and unwanted disclosure incidents.

### Originality 03 — The Reciprocity Bridge

*Discover together without being scored*

Concept: Two people independently approve what they wish to share, and the system creates a finite path between their authorized interests. Rather than reporting compatibility, it offers a small set of discoveries they can explore together.

Example: One person confirms an interest in mythology. Another confirms an interest in astronomy. With appropriate authorization and a vetted Atlas relationship, the system might propose exploring how historical cultures interpreted constellations. It must not claim the two people are psychologically compatible or that either person secretly believes something about the other.

Why this could win: It creates an immediate shared experience instead of an abstract match score.

Risk: The relationship between topics may be shallow, fabricated, or based on hidden data.

Pilot experiment: Compare a static overlap list with one curated reciprocal discovery. Ask both participants whether the result prompted a meaningful conversation.

### Originality 04 — The Unfinished World

*A profile that is allowed to change*

Concept: The World visually distinguishes what the owner has affirmed, what the system has proposed, what the owner is exploring, and what has become less prominent. Uncertainty is a legitimate state, not a problem the algorithm must conceal. This preserves the First Draft Engine's most recognizable metaphor.

However, I would refine the implementation:

* An enduring interest should not vanish merely because the person was inactive.
* A refutation should not become a permanent public label.
* A buoy should preserve curiosity without becoming an endorsement.
* The owner should be able to freeze, reset, or simplify their World.

Why this could win: It avoids the rigid identity implied by conventional profile categories.

Risk: Some users may dislike an interface that visibly changes without their action.

Pilot experiment: Test static versus tidal World presentation and measure perceived accuracy, trust, and confusion.

### Originality 05 — Seed-Born Worlds

*Discovery becomes the beginning of another World*

Concept: A visitor deliberately saves a discovery from an authorized Perspective. That Seed can later become a provisional starting point in the visitor's own World. Nothing about the original owner's private World is transferred. This is the clearest expression of the original First Draft Engine's growth loop. It combines social discovery with personal authorship.

Why this could win: The product grows through meaningful curiosity rather than endless content consumption.

Risk: A saved item does not necessarily indicate an enduring interest.

Pilot experiment: Compare ordinary interest selection with a Seed-born bootstrap. Measure recognition, correction effort, and willingness to continue.

## 4. Originality assessment: what is actually defensible?

A combination of existing features can produce a differentiated product. That does not establish legal novelty, patentability, or an exclusive market position.

| Concept | Existing precedent | Potential differentiation |
|---|---|---|
| Personal interest map | Knowledge graphs, visual collections | Owner-governed evolving representation |
| Correctable recommendations | Interactive recommenders | Corrections treated as authoritative testimony |
| Privacy-first storage | mymind, Solid, others | Recipient-specific social disclosure |
| Interest comparison | Spotify Blend, social recommendation systems | Mutual consent without compatibility ranking |
| Topic-based discovery | Pinterest, Are.na, Kinnu | Receipt-backed, finite reciprocal journeys |
| Seed-Born Worlds | Saving and reusing discoveries | Visitor-authored World bootstrap from permitted discoveries |
| Tidal World | Time-sensitive recommendation models | Visible, owner-controlled distinction between enduring and current interests |

The strongest opportunity is not any single row. It is the closed-loop system:

*[Source note: the differentiation-loop diagram in the original was a visual widget; its steps survive in the text of §13's recommendation and are:]* Machine proposes a draft. Person corrects and authorizes its meaning. System preserves that distinction in a living World. Person publishes only an approved Perspective. Visitor explores and deliberately saves a discovery. Visitor creates a new, independently governed World. Both may authorize a reciprocal exploration.

My originality verdict: The individual ingredients have substantial prior art. The integrated experience is a plausible differentiation opportunity, but its uniqueness has not been established across all existing products, research, patents, and unpublished work.

A formal patentability assessment would require a dedicated prior-art search covering patents, published applications, and non-patent literature. The USPTO explicitly treats all three as relevant search areas. [Source debris: "U.S. Code +1"]

## 5. Reverse-engineering the ideal product

The next question is how to turn these differentiators into a system that can outperform competitors on specific, measurable dimensions.

### Recommended engineering decisions

| System | Recommended approach | Reason |
|---|---|---|
| Application | Responsive web application first | Fast pilot iteration and broad accessibility |
| Backend | Modular monolith with clear domain boundaries | Less operational complexity than premature microservices |
| Persistence | PostgreSQL with transactional events and projections | Consistent correction and authorization semantics |
| Atlas | Versioned hierarchical topic graph | Stable identity and explainable relationships |
| Recommendations | Curated graph retrieval plus optional AI reranking | Reduces fabricated relationships |
| AI gateway | Structured proposals, schema validation, fallback | Keeps AI outside the authority boundary |
| Permissions | Server-side projection and grant validation | Prevents client-side filtering leaks |
| Caching | Revision-keyed private caches, strict invalidation | Supports revocation and reproducibility |
| Search | Start with relational and text search | Avoids unnecessary infrastructure |
| Observability | Privacy-minimized structured telemetry | Allows diagnosis without building a surveillance dossier |

These are proposed choices, not an assessment of the actual v36 implementation. The Product Bible reports an earlier Node.js prototype and separately reported v36 test results, but the current v36 source has not been directly audited here.

### A critical design improvement: split intelligence from authority

I recommend separating three components that might otherwise become dangerously entangled.

The Draft Engine can use AI to propose possible interests and relationships.

The Testimony Engine accepts only authorized owner actions to establish or refute them.

The Lens Compiler determines what information may leave the private World.

AI should not be allowed to bypass either of the latter two components.

This separation is more important than choosing a sophisticated language model.

## 6. Build a better discovery algorithm

The First Draft Engine's original proposal selection emphasizes reaction value. That can produce interesting corrections, but it creates an incentive to deliberately suggest controversial or inaccurate topics.

Research on recommender systems warns that recommendation feedback can distort the preference data later used as ground truth. [Source debris: "Wiley Online Library +1"]

I would replace reaction maximization with a constrained, multi-objective selection system.

### Proposed Draft Candidate Score

For a candidate topic [c]:

U(c) = 0.30R + 0.25N + 0.20E + 0.15D + 0.10Q

Where:

| Variable | Meaning |
|---|---|
| R | Relevance to owner-provided interests |
| N | Useful novelty |
| E | Explainability of the connection |
| D | Diversity across permitted topic areas |
| Q | Source and classification quality |

These weights are illustrative starting values, not optimized coefficients.

More importantly, eligibility must be evaluated before scoring. A candidate is excluded if it violates a refutation boundary, sensitive-inference restriction, consent rule, or Atlas governance policy.

### Make the model quality measurable

The project should test whether the draft is recognizable, not whether it provokes reactions.

I recommend three separate quality measures:

* Recognition: Does the owner feel accurately represented?
* Correction efficiency: How much effort is required to make the draft acceptable?
* Discovery usefulness: Did the system surface something worth exploring?

These should be measured through user research alongside behavioral signals.

## 7. Make the product emotionally compelling

A technically correct interest graph can still be emotionally forgettable.

The interface needs to communicate that a World is something the owner authors—not a personality diagnosis the system has issued.

I recommend three experience principles.

**Principle 1: Show the person, not the algorithm.** Instead of displaying numerical confidence scores everywhere, use meaningful language: You added this. You confirmed this suggestion. You're still exploring this. You decided this doesn't belong. Numerical details can remain available through advanced Receipts.

**Principle 2: Make discovery finite.** Infinite feeds optimize for continuous consumption. SEE MY WORLD should optimize for worthwhile exploration. A Perspective visit could present three carefully selected discoveries, each with a clear explanation. At the end, the visitor can save a Seed, explore another approved area, or leave. No guilt. No streak punishment. No algorithmic hostage situation.

**Principle 3: Make sharing feel safe.** Before publication, show a literal visitor preview. After publication, show who can access it, when it expires, and how to revoke it. The owner should never need to understand database authorization to understand what they've shared.

## 8. A measurable competitive advantage

The goal should not be to claim SEE MY WORLD is superior in every dimension.

Pinterest has established recommendation and content-discovery capabilities. Obsidian has mature graph navigation. Are.na has a longstanding community and a functioning subscription model. Those are real strengths.

Instead, define dimensions where SEE MY WORLD can credibly aim to win.

### Proposed competitive success scorecard

Targets below are research hypotheses, not observed performance.

| Dimension | Target |
|---|---|
| First World creation | Median under 5 minutes |
| Owner recognition | At least 80% report their corrected World feels representative |
| Sharing comprehension | At least 95% correctly identify what a visitor can see in scenario tests |
| Privacy failures | Zero known critical unauthorized disclosures |
| Meaningful visits | At least 50% report learning something worthwhile |
| Reciprocal value | At least 30% of invited pairs complete a mutual exploration |
| Return intention | At least 50% of pilot participants express a concrete reason to return |

The pilot should compare these outcomes with baseline alternatives, such as a static interest profile, a shared collection, or a simple list of overlapping interests.

That is how we establish whether the extra complexity of the World model creates real value.

## 9. Security, ethics, and defensibility

A system representing personal interests has a serious risk: people may infer sensitive characteristics even when the application does not explicitly label them.

The research reinforces the importance of treating privacy as an information-flow problem rather than a settings-screen problem.

I recommend aligning the implementation review with the NIST AI Risk Management Framework, the OWASP API Security Top 10, and W3C WCAG 2.2 accessibility requirements. [Source debris: "NIST +2"]

### Five mandatory safeguards

* No inferred sensitive identities: Interests in a subject must not be converted into claims about personal attributes.
* No hidden cross-World profiling: One person's private information cannot enrich another person's World without an explicit, permitted mechanism.
* No consent expansion through Atlas updates: A topic migration must not reveal new detail automatically.
* No permanent behavioral dossier by default: Retention, export, deletion, and provider handling need approved contracts.
* No public social discovery before moderation readiness: Reporting, blocking, impersonation handling, and abuse response must exist first.

For international expansion, data rights also need jurisdiction-specific review. The European Data Protection Board identifies rights including access, rectification, erasure, objection, and portability. [Source debris: "European Data Protection Board +1"]

## 10. Commercial differentiation

The most promising business model is one in which the customer pays for useful capabilities, rather than advertisers paying to exploit inferred interests.

Are.na and mymind provide real-world examples of subscription-supported products centered on curation, privacy, or knowledge management. [Source debris: "Are.na +1"]

I would test three potential value propositions.

| Market | Value proposition | Monetization hypothesis |
|---|---|---|
| Individuals | A private, correctable World of curiosity | Free core, optional premium tools |
| Existing relationships | Deliberate Perspective sharing and reciprocal discovery | Premium shared experiences or group features |
| Creators and researchers | Present a connected body of interests and ideas | Professional publishing and collaboration tools |

I would not introduce paid promotion or sponsored topic placement into the core World model. That would create a direct conflict between owner authority and commercial influence.

Before setting prices, test whether people will return and whether the cost of inference, storage, and support is sustainable.

## 11. Prioritized originality roadmap

Not every proposed innovation deserves immediate implementation.

**P0 — Prove the central promise.** Build a recognizable First Draft, authoritative corrections, clear testimony explanations, and an owner-controlled World. Success condition: People understand the model, recognize themselves after correction, and want to keep it.

**P1 — Prove safe sharing.** Build the Perspective Passport, server-side Lens Compiler, recipient-bound visits, and revocation. Success condition: Owners understand exactly what they are sharing, and visitors find the result meaningful.

**P2 — Prove organic reciprocity.** Build Seed-Born Worlds and a limited Reciprocity Bridge. Success condition: Discovery between existing connections creates new Worlds and worthwhile reciprocal visits.

**P3 — Expand the defensible ecosystem.** Develop richer Expeditions, World Timeline, Constellations, collaborative Worlds, and portability only after the first three stages demonstrate value. Success condition: Each expansion improves a proven use case rather than adding complexity for its own sake.

## 12. What I would change in Product Bible 1.2

The research suggests six concrete revisions to the working specification.

| Revision | Proposed change |
|---|---|
| Competitive positioning | Define the category as a user-governed Perspective Network, not simply an interest-map app |
| Testimony | Separate owner assertion, proposal provenance, current prominence, and exploration status |
| Discovery | Replace reaction-maximizing suggestions with constrained, explainable candidate selection |
| Sharing | Introduce the Perspective Passport as the primary human-facing permission experience |
| Reciprocity | Make finite, mutually authorized discovery the goal—not compatibility scoring |
| Validation | Require controlled comparisons against simpler alternatives before adding complex features |

I would also add a Competitive Evidence Register to the Bible, with a source, date, verified capability, differentiation hypothesis, and validation status for every relevant competitor.

This prevents the project from relying on outdated assumptions about what competing products can do.

## 13. Final originality verdict

| Dimension | Assessment |
|---|---|
| Individual feature novelty | Limited; substantial precedents exist |
| Integrated product differentiation | Promising, not yet validated |
| Emotional and visual identity | Strong conceptual potential |
| Engineering feasibility | Plausible with disciplined scope |
| Defensible competitive advantage | Not yet demonstrated |
| Patentable novelty | Undetermined; formal prior-art review required |

The strongest proposed differentiator is not the map, the AI, or the social features independently.

It is the combination of personal authorship, explainable uncertainty, revocable sharing, and reciprocal discovery.

Competitors already offer parts of that experience. The opportunity is to make the complete journey feel natural, useful, and trustworthy enough that people prefer it to a conventional profile or collection.

My recommendation is to make The Testimony Compass, Perspective Passport, and Seed-Born Worlds the three signature product experiences. They are closely aligned with the original First Draft Engine, reinforce one another, and provide clear opportunities for user testing.

The Reciprocity Bridge should follow once the sharing model is proven. The Unfinished World should remain the visual and philosophical foundation throughout.

The next decisive step is not more invention. It is a competitive prototype challenge: have participants complete the same tasks using SEE MY WORLD and simpler existing approaches, then measure recognition, trust, disclosure comprehension, and meaningful discovery.

If SEE MY WORLD consistently wins those tests, we will have something more valuable than a claim of originality: evidence that our particular combination solves a problem better.

That is how this project moves from an ambitious concept toward a product with a credible competitive advantage.
