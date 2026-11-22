# SEE MY WORLD — Product Development · Continuation 02

## The Living Perspective Engine — Technical and Experiential Expansion

*Pasted by Bobby, 21 November 2026, following the Concept Expansion (Living Perspective Engine). Filed verbatim; interactive-widget fragments from the source are retained and marked as debris, and three symbol/value losses from pasting are restored in [brackets] where the surrounding text makes them unambiguous.*

---

We have established the philosophical foundation: the algorithm proposes, the individual decides, and the World evolves.

Now we need to turn that philosophy into a system that can be built, tested, scaled, and eventually released.

I'm going to advance the concept along two parallel tracks: the intelligence operating beneath the World and the experience people have when interacting with it.

For the product direction, I recommend personal discovery first, social discovery second. A World should be useful even when its owner never shares it. Sharing then becomes an invitation, not an obligation.

## 10. The World Intelligence Model

The original First Draft Engine already establishes the relationship between evidence, inference, testimony, and change over time.

I propose formalizing that relationship into five independently governed layers.

**World Intelligence Architecture**

1. **Evidence Layer** — What the user deliberately supplies or authorizes
2. **Inference Layer** — What the Engine proposes, with uncertainty
3. **Testimony Layer** — What the owner confirms, reduces, rejects, or watches
4. **World State** — The versioned graph of approved and provisional interests
5. **Perspective Layer** — Only what the owner explicitly permits another person to see

The critical rule is that these layers must never become interchangeable.

For example, a person reading an article about depression is not evidence that they have depression. A person researching politics is not necessarily endorsing a political position. And someone visiting a World does not automatically approve its contents.

**Observation is not endorsement. Inference is not identity. Sharing is not consent to further processing.**

This principle should become a mandatory engineering invariant.

## 11. The Testimony Engine v2.0

The four existing correction actions remain the canonical API:

BOOST, REDUCE, REJECT, KEEP_WATCHING.

But their internal effects should become more precise.

| Action | Proposed behavior |
|---|---|
| BOOST | Increase confirmed affinity and record an affirmative correction |
| REDUCE | Decrease current relevance without assuming permanent rejection |
| REJECT | Suppress the proposal and its equivalent representations, subject to owner-controlled reset |
| KEEP_WATCHING | Save curiosity without confirming affinity |

### A more robust mathematical model

Each interest node has three independent normalized variables:

A_i ∈ [0,1], T_i ∈ [0,1], X_i ∈ [0,1]

Where:

* [A_i] = enduring affinity
* [T_i] = current attention
* [X_i] = exploration appetite

For an owner-confirmed interest, current attention can decay toward a baseline:

T_i(t+Δt) = b_i + (T_i(t) − b_i) · e^(−λ_i·Δt)

Here, [b_i] is the baseline attention level, and [λ_i] is the decay rate.

This formulation avoids the earlier problem of permanently erasing a lifelong interest simply because the owner has been inactive.

Affinity remains owner-controlled. It does not silently decay because of inactivity.

### Proposed correction rules

For an initial experimental implementation:

BOOST(A) = A + α(1 − A)
REDUCE(A) = A(1 − β)

With provisional [α and β values lost in pasting] .

These are illustrative coefficients requiring empirical validation, not approved production constants.

*[Source debris retained: a "Testimony Engine Simulator" widget fragment appeared here — Hypothetical interest: Astronomy / Active 40% / Affinity state / BOOST REDUCE REJECT WATCH / Actions tested: 0 / Reset — with its own note: "REJECT changes eligibility, not the numeric affinity. WATCH leaves affinity unchanged. This demo is not connected to a real World."]*

A production implementation also needs version checks, atomic writes, idempotency keys, and deterministic replay of corrections.

## 12. The Atlas v2.0 — A shared geography of curiosity

The original concept establishes a curated hierarchy:

Continent → Territory → Topic

I would preserve that structure but add a separate relationship graph. The hierarchy answers *where does this interest belong?* The graph answers *how might these interests connect?*

These must remain distinct.

A topic can belong to one stable location in the Atlas while having several cross-topic relationships. Otherwise, the map becomes difficult to version and comparisons become inconsistent.

### Proposed initial Atlas

| Continent | Example territories |
|---|---|
| Making & Repair | Restoration, woodworking, fabrication, mechanical repair |
| Science & Discovery | Astronomy, physics, ecology, mathematics |
| Stories & Expression | Literature, comedy, theatre, visual storytelling |
| History & Heritage | Archaeology, preservation, cultural history |
| Nature & Exploration | Wildlife, hiking, geology, gardening |
| Technology & Systems | Programming, robotics, engineering, game design |
| Everyday Arts | Cooking, music, photography, collecting |
| Games & Strategy | Chess, tabletop games, puzzles, competitive strategy |

This is a proposed starting taxonomy, not a finalized classification.

Each Atlas node needs a stable identifier, version, parent, permitted aliases, description, exclusions, and migration policy.

The system should also explicitly distinguish a topic from a claim about its owner. An interest in psychology, for instance, must never become an inferred mental-health condition.

## 13. The Resolution Lens Compiler

The most important new engineering component is a deterministic privacy compiler.

Its job is to convert a private World into a bounded Perspective.

*[Source debris retained: a "Lens preview demonstration" widget fragment appeared here — Illustrative / Continent Coast Harbour / Visitor-visible Perspective / "Only the selected level of detail appears" / Making & Repair / Natural stone restoration / Mechanical repair — with its note: "The actual server must generate a new authorized payload for each resolution. This demonstration only illustrates the visible differences."]*

The compiler should enforce the following sequence:

* Authenticate the owner and validate Lens ownership.
* Resolve the selected Atlas version.
* Exclude all unconfirmed and unauthorized nodes.
* Apply territory selections and sensitivity restrictions.
* Generalize nodes to the granted resolution.
* Remove private evidence, aliases, and hidden relationship details.
* Generate resolution-safe explanations.
* Publish a versioned Perspective with a revocable access grant.

A subtle but important requirement: broad labels must not reveal hidden interests indirectly. If a continent appears solely because of one private topic, even the generalized label could leak information. The compiler needs explicit disclosure eligibility, not just aggregation.

## 14. Define the first implementation contracts

The next engineering milestone should produce four independently testable modules.

| Module | Responsibility | Required test |
|---|---|---|
| Atlas Service | Stable taxonomy and version migration | Old Perspectives retain their approved meaning |
| Testimony Reducer | Deterministic owner corrections | Replay yields identical state |
| Draft Selector | Eligible, explainable proposals | No excluded topic can enter a draft |
| Lens Compiler | Authorized disclosure | No output contains finer detail than permitted |

The Testimony Reducer should be implemented first because it is the foundation of the World.

Its input is an authenticated correction event; its output is a new versioned World state and an auditable receipt.

An example internal event:

```json
{
  "worldId": "world_123",
  "topicId": "astronomy",
  "action": "BOOST",
  "expectedRevision": 7,
  "idempotencyKey": "example-unique-key",
  "algorithmVersion": "testimony-v2"
}
```

The server—not the client—must establish ownership, assign the authoritative timestamp, and persist the correction atomically.

A repeated request with the same idempotency key and identical payload returns the original result. A conflicting payload using that key is rejected.

## 15. The next formal development milestone

SEE MY WORLD — Milestone 2

Proposed scope for the next engineering specification

*[Source debris retained: a planning checklist widget — "0 of 8 planning items completed, 0%."]*

1. Freeze Atlas v2.0 data contracts
2. Specify deterministic testimony reducer
3. Define World Seasons and attention decay
4. Implement Lens Compiler privacy rules
5. Design resolution-aware Receipts
6. Write correction and revocation race tests
7. Build First Light usability prototype
8. Validate draft quality with real pilot participants

### The most important remaining research question

We should test whether people actually enjoy correcting a deliberately imperfect World.

The First Draft Engine assumes that a draft with meaningful disagreements will be more engaging and informative than a highly agreeable one. That is a promising hypothesis, but it is not yet a proven user preference.

A pilot should compare two onboarding approaches: one emphasizing likely matches and another emphasizing informative, respectful contrasts. Measure recognition, perceived accuracy, correction effort, trust, and willingness to return—not simply the number of rejections.

The product succeeds when people feel that their World belongs to them, not when the algorithm wins an argument about who they are.

That is the standard I would use to guide the next implementation and the expanded Product Bible.
