# SEE MY WORLD — The First Draft Engine

## A testimony-based tidal cartography: an original algorithmic concept

*Prepared 21 November 2026 as a starting point for the SEE MY WORLD project. This document supplies the algorithmic core that Edition 1.1 of the Product Bible specifies only as requirements (§08), and folds in the revisions arising from Gizmo's critique of Edition 1.1. It is a concept document, not an implementation. Where it conflicts with the Bible's invariants (Appendix B), the invariants win.*

---

## 1. The inversion

Every conventional interest model — recommenders, ad profiles, taste graphs — is built on three assumptions:

1. **The system's job is to be right.** Behaviour is harvested, interests are inferred, and accuracy is the metric.
2. **Confidence is a probability the system computes about you**, from evidence you didn't choose to give.
3. **The profile is a dossier**: it accumulates, it does not forget, and its subject is the last to see it.

The First Draft Engine inverts all three:

1. **The system's job is to be *correctable*.** Its first model of you is a draft — built to be argued with, not believed. The product's core metric is not prediction accuracy; it is *recognition*: how fast a person looks at the draft and says "that's me, that's not, that's almost."
2. **Confidence is testimony.** A topic is "confident" in exact proportion to how many times a human being has personally confirmed it. Inference can propose; only testimony can establish. Confidence is a count of human acts, never a probability about a person.
3. **The map is alive or it is a dossier.** Everything unconfirmed decays. Interests have tides. A World that cannot forget is a file kept on someone; a World that ebbs is a garden someone tends.

**The system drafts. The person testifies. The map breathes.**

---

## 2. The three laws

**The Law of Testimony.** Nothing is established until the owner confirms it. System proposals enter the World as *dotted coastline* — visibly provisional — and can never, on their own, be shared, compared, or treated as fact about the person. Behavioural signals (a click, a dwell, a save by someone else) may propose but may never testify.

**The Law of Tides.** Every element of a World decays unless re-witnessed, at a rate set by how it got there. Owner-declared interests ebb slowest; system proposals ebb fastest. Forgetting is the default state of the machine; remembering is an act of the person. (The owner's explicit corrections are never decayed — testimony is permanent until revoked. What decays is *strength*, not the record.)

**The Law of Resolution.** Sharing never grants *access*; it grants *resolution*. A Lens does not open a door to private contents — it sets the zoom at which a visitor is permitted to see: **Continent** (broad regions only), **Coast** (territories), or **Harbour** (specific topics). Zoom is consent, granted by the owner, revocable, and rendered exactly in preview. A visitor can never see finer detail than the Lens's resolution, because finer detail is never sent — generalisation happens in the model, not in the presentation layer.

---

## 3. The model

### 3.1 Node state

Every topic node in a World carries:

| Field | Meaning |
|---|---|
| `strength s ∈ [0, 1]` | How present this interest currently is. Decays with time (§3.3). |
| `testimony t ≥ 0` | The accumulated weight of human confirmation. Never computed from behaviour alone. |
| `provenance` | One of DECLARED, CONFIRMED, PROPOSED, WITNESSED, REFUTED. |
| `last_witnessed` | Timestamp of the last human act touching this node. |
| `buoy` | Boolean. Set by KEEP_WATCHING: the node is held at a floor strength — watched, not endorsed. |

Provenance classes, in descending authority:

- **DECLARED** — the owner stated it directly ("I am interested in X"). Testimony weight 1.0.
- **CONFIRMED** — the system proposed it; the owner affirmed it. Weight 0.6.
- **PROPOSED** — the system suggests it; no human has ruled. Weight 0. Rendered as dotted coastline. *Ineligible for Lens, Perspective, and Comparison.*
- **WITNESSED** — derived from an authorised behavioural signal. Weight capped at 0.3, may propose a node but can never raise it above PROPOSED status. Decays fastest. Never shareable.
- **REFUTED** — the owner rejected it. The node leaves the map's landmass and becomes **coastline**: negative space that shapes the World. Refutations are first-class geography — a person's refusals are as distinctive as their loves, and unlike inferred "dislikes," these are *authored*. Private by default; an owner may choose to publish a coastline ("here is where my world ends") without publishing what lies beyond it.

### 3.2 Corrections as operators

The Bible's four corrections become deterministic operators on the state above. Each is an entry in a signed, append-only **Testimony Ledger**; the World's current state is a pure fold over its ledger, so every state is reconstructable and every Receipt is a query against the ledger, not a generated explanation.

| Operator | Effect |
|---|---|
| BOOST | `s ← min(1, s × 1.5)`; `t += 1.0`; provenance upgrades to DECLARED-equivalent; `last_witnessed ← now` |
| REDUCE | `s ← s × 0.6`; `t += 0.5`; `last_witnessed ← now` |
| REJECT | provenance → REFUTED; node becomes coastline; `t += 1.0` (a refusal is testimony at full weight) |
| KEEP_WATCHING | `buoy ← true`; strength floor 0.15 while buoyed; `t += 0.3` |

Note what this buys: **a refusal counts as much as an embrace.** In every existing system, "no" is the absence of data. Here it is the strongest signal a user can give, which is exactly the Bible's invariant — *owner correction is authoritative over inferred interest* — expressed as arithmetic.

### 3.3 Tidal decay

Strength ebbs by half-life, per provenance:

- DECLARED: half-life 180 days
- CONFIRMED: half-life 90 days
- PROPOSED: half-life 21 days (an unanswered suggestion should embarrass itself off the map)
- WITNESSED: half-life 14 days

`s(now) = s₀ · 2^(−Δt / half-life)`, floored at 0.15 for buoyed nodes, floored at 0 for all others (a node at s < 0.03 is *submerged*: hidden from the Map, retained in the ledger, resurfaces if re-witnessed). Testimony `t` never decays. The Map a visitor sees is therefore a picture of a *living present*, while the Ledger preserves the whole history for the owner alone.

### 3.4 Edges: surveyed roads and dotted lines

Relationships between topics also carry provenance:

- **Surveyed edges** — the owner has confirmed two topics belong together (during correction, the system asks at most one adjacency question per session: *"Does X live near Y in your world?"*). Weight = number of co-confirmations.
- **Dotted edges** — system-proposed adjacencies. Rendered dotted; excluded from Comparison's Frontier computation until surveyed.

The visible consequence is the product's signature image: a map whose solid coastlines are *testified* and whose dotted regions are *the machine's guesses, labelled as guesses*. Uncertainty is not a footnote or a percentage. It is the cartography itself.

---

## 4. First Light: the Refutation Bootstrap

Edition 1.1's cold start — pick five interests, see a provisional map, answer "Does this look like you?" — asks the user to do the hardest work (self-description from a blank page) and gives the algorithm the least to work with. The Bootstrap inverts the labour:

1. **Seed minimally.** The owner offers as little as *three* starting interests, or even one link. Less is fine; the draft does the work.
2. **Draft deliberately.** The engine expands the seeds through the Atlas (§5), choosing proposals **not for likelihood but for reaction value**: topics near the seeds about which this owner is likely to have a *definite* feeling, one way or the other. The objective function is expected testimony per proposal — confirmations plus refutations — not expected agreement. A draft that is 100% agreeable teaches the system nothing and bores the human.
3. **Disclose the draft's nature.** The owner is told, in plain language: *"This is a first draft of your world. It is supposed to be argued with. Wrong is useful."* This disclosure is not a courtesy; it is a load-bearing ethical requirement (§9, Risk 1).
4. **Harvest the argument.** The First Light session is a rapid correction pass — BOOST, REDUCE, REJECT, KEEP_WATCHING, one adjacency question — designed to take under four minutes. Every tap is testimony. By the end, the World is mostly *authored*, and the dotted remainder is honestly dotted.

**The metric this creates is the one Edition 1.1 lacked: Draft Survival.** The fraction of the draft that survives First Light is expected to be *low* — 30–50% is healthy. A survival rate near 100% means the draft was too timid to be useful; near 0% means the Atlas expansion failed. For the first time, the pilot has a model-quality gate that measures the thing the product actually is.

---

## 5. The Atlas: content is an editorial act

Edition 1.1 never says where topics come from. If topics are machine-inferred from content, the taxonomy inherits the provider's biases and cannot be governed; if users type free text, no two Worlds share a geography and Comparison is impossible.

The First Draft Engine runs on a **curated, versioned Atlas**: a public tree of territories (Continent → Territory → Topic) maintained editorially, like a map's legend. Properties:

- The Atlas is *the same geography for everyone*, which is what makes two Worlds comparable at all.
- Atlas changes are versioned and announced; a World pinned to Atlas v3 renders identically forever (Perspective immutability, per the Bible).
- Owners may attach **private names** to Atlas nodes ("what I call this") — the private name is evidence, governed separately, and never required for the map to work.
- The Atlas has **hard exclusions by construction**: there are no branches for political affiliation, religious identity, health status, or any category the Bible lists as a pilot non-goal. The system cannot infer what its geography cannot represent. This converts a policy promise ("we don't infer politics") into an architectural fact ("there is no node for that") — the strongest form the promise can take.
- External AI providers (the Bible's §09 gateway) may only propose *mappings into the Atlas* and *dotted edges within it*. They cannot create geography. Provider failure therefore degrades suggestion quality, never world structure — and the Receipt can always say which provider proposed what, because proposals are ledger entries too.

---

## 6. The Resolution Lens

A Lens in Edition 1.1 selects territories, permissions, audience, expiry. The Engine adds the missing dimension: **resolution**.

`Lens = (territory set, resolution r ∈ {Continent, Coast, Harbour}, audience, expiry)`

Rendering a Perspective is a pure function: for each selected territory, if `r = Continent`, the visitor sees only the Atlas parent label ("Making & Repair"); if `r = Coast`, territory labels ("Restoring mechanical watches"); if `r = Harbour`, the specific topics and the owner's chosen evidence labels. Because generalisation happens by walking the Atlas tree, the preview the owner approves is *provably* the most the visitor can receive — there is no finer data in the payload to leak through a tooltip, an explanation, or a cache. The Bible's invariant *"no private evidence leaks through explanations, telemetry, comparison or cache"* becomes enforceable by construction: a Receipt at Continent resolution can only cite Continent-level factors, because nothing finer was ever transmitted.

Resolution also gives the product its social grammar. A first introduction is a Continent Lens. A friendship deepens to Coast. Harbour is for collaborators and intimates. **People already understand zoom. Nobody understands permission matrices.** The Engine replaces the hardest UX problem in sharing — scopes and ACLs — with the most familiar gesture in digital life: pinching a map.

---

## 7. The visitor: the Frontier Walk and Seed-Born Worlds

Edition 1.1 asserts the visitor explores and optionally discovers their own World, but never says what the visitor *gets*. The Engine's answer: **a visit is a walk along someone else's coastline, and what you carry home is the beginning of your own map.**

1. The visitor opens a Perspective and sees the owner's World *at the Lens's resolution* — solid where testified, and (if the owner permits) dotted where the owner's own map is still guessing. Even the uncertainty is a form of honesty a visitor can feel: this person shows you where they are unsure.
2. The walk is finite by design: the Perspective presents a bounded path of discovery objects (the Bible's "finite set"), each with *"Why is this here?"* answered from the owner's Receipts at the granted resolution.
3. Anything the visitor deliberately saves becomes a **Seed** — and here is the turn: **the visitor's own provisional World is born from their Seeds.** SEE YOURS does not start from a blank form; it starts from *what you found in someone else*. Your first draft is literally a response to another person's world: "Here is what visiting Maya made of you. Argue with it."
4. The visitor then runs their own Refutation Bootstrap on that seed-born draft. Their World is theirs from the first correction onward — nothing of the owner's private model is copied (per the Bible), because what crossed over was only what the visitor *chose*, at the resolution the owner *granted*.

This gives the product its growth loop without a feed, a graph import, or a single dark pattern: **worlds beget worlds, one deliberate save at a time.** It also gives the north-star metric its teeth — a meaningful visit is precisely one that ends in Seeds, because Seeds are the only bridge between two people's geographies.

---

## 8. Comparison, redefined

Edition 1.1's Comparison (Where We Meet / Where You Differ / New Frontier) is computed, potentially, between an owner's curated World and a visitor's raw provisional one — an asymmetry that can misrepresent the visitor. The Engine imposes three rules:

1. **Correction before comparison.** Comparison unlocks only after *both* parties have completed at least one correction pass on their own Worlds. Nobody is compared on the strength of a draft they haven't argued with.
2. **Shared resolution only.** Comparison is computed at the *lower* of the two parties' granted resolutions. If you showed me Continent, you are compared at Continent.
3. **The Frontier is a computation, not a vibe.** *New Frontier* = territories connected by a **surveyed edge** to a node both parties have confirmed, which neither party has yet entered. In plain terms: *one step beyond what you both already love, along a road the owner personally vouched for.* That is a recommendation with a Receipt built in — "you both confirmed X; the owner says Y lives next to X; neither of you has been" — and it is the most trustworthy discovery mechanic available to this product, because every element of it is testimony.

*Where You Differ* renders only territories both parties have *testified* about with opposite outcomes (one confirmed, one refuted). Unvisited territory is never presented as difference — absence is not disagreement. This single rule removes most of Comparison's social danger: the product can never tell your friend "you two differ on faith" when the truth is merely that one of you never raised it.

---

## 9. The metrics that gate the pilot

Edition 1.1's release gates test security, reliability, and experience — everything except whether the model deserves to exist. The Engine adds a model-quality gate set, all computable from the Testimony Ledger:

| Metric | Definition | Healthy pilot signal |
|---|---|---|
| **Draft Survival** | Share of First Light draft nodes confirmed (vs refuted/submerged) | 30–50% |
| **Time to First Recognition** | Seconds from draft reveal to first correction | < 60s |
| **Testimony Depth** | Median ledger entries per World at day 7 | Rising week over week |
| **Frontier Yield** | Seeds saved per meaningful visit | ≥ 1 |
| **Reciprocal Completion** | Clusters (not individuals) completing a full reciprocal share | The pilot's headline number |
| **Coastline Ratio** | Refuted : confirmed nodes per World | > 0 for most Worlds — a world with no refusals is a world nobody authored |

Pilot recruitment follows from the last-but-one row: **recruit clusters** — pairs, households, teams, classes — because the product's unit of value is a completed loop between people who already matter to each other, not an activated individual.

---

## 10. Worked example: Maya's world, end to end

*Maya is a night-shift nurse. She gives the Bootstrap three seeds: "mechanical watches," "night photography," "my grandmother's recipes."*

The draft expands through the Atlas and — choosing reaction value over safety — proposes: watch *repair* (near-certain yes), watch *collecting/flipping* (a near neighbour she may well refuse), astronomy (night-adjacent guess), urban exploration (night-adjacent, riskier guess), film photography, oral-history recording, regional Italian cooking, shift-work sleep science (excluded? No — *sleep science* is a topic, not a health status; the Atlas carries the topic, the system simply may not infer anything about *her* health from it).

Four minutes of argument: she BOOSTs repair, REJECTs flipping outright — *"I fix them so they keep living, I don't sell them"* — CONFIRMs film photography, REJECTs urban exploration, buoys sleep science with KEEP_WATCHING, and answers the one adjacency question: yes, grandmother's recipes live near oral history. **Her World after First Light: seven solid nodes, two stretches of authored coastline, one buoy, one surveyed road.** Draft Survival: ~45%. The map already sounds like a person, because a person argued it into shape.

She publishes a Lens for a new colleague: Coast resolution, watches and photography territories only, seven-day expiry. The colleague walks it, saves two Seeds — watch repair and film photography — and her own seed-born draft opens with: *"Visiting Maya made this of you. Argue with it."* She corrects it. Comparison unlocks at Coast: **Where We Meet** — film photography. **Where You Differ** — nothing yet; neither has refuted anything the other confirmed. **New Frontier** — darkroom printing: one surveyed step from Maya's film photography, entered by neither. The Receipt for that suggestion is three lines long and every word of it is testimony.

Total data the system inferred about either woman's personality, politics, faith, or health: none — its geography contains no such places.

---

## 11. What this changes in the Bible (Edition 1.2 deltas)

1. **§08 is replaced** by §§3–4 of this document: a specified model (state, operators, half-lives) with the Bible's requirements (normative versions, unit tests, human-readable explanation) now testable against actual formulas.
2. **§04 First Light** adopts the Refutation Bootstrap: minimal seed, disclosed draft, correction session as the core ritual.
3. **§10 Lens** gains the resolution dimension; Perspective rendering is defined as a pure function over the Atlas tree.
4. **§05 visitor journey** adopts Seed-Born Worlds and correction-before-comparison.
5. **§14 funnel** gains Draft Survival, Frontier Yield, and Reciprocal Completion (per cluster) as first-class events/metrics.
6. **§16 gates** gain the model-quality gate set (§9 above); pilot recruitment is by cluster.
7. **New canonical object: the Atlas** (versioned, editorial, with hard-exclusion branches-by-absence), and **the Testimony Ledger** as the World's storage truth.
8. **Edition 1.1 is frozen as the baseline of record** (per the critique's provenance finding); 1.2 diffs against it explicitly.

---

## 12. Honest risks of this design

1. **A deliberately imperfect draft can feel like a trick** if the disclosure (§4.3) is weak or skipped. The mitigation is the disclosure itself, plus a hard rule: the draft may be *provocative* but never *fabricated about sensitive ground* — Atlas exclusions bind the Bootstrap too. The system may guess wrong about your hobbies. It may never guess at all about your faith.
2. **Tides can annoy.** A beloved interest submerging because life got busy could feel like the product punishing absence. Mitigations: testimony never decays (only strength does), resurfacing is one tap, and the owner sets their own tide table in Phase C's control dashboard.
3. **The Atlas is editorial power.** Whoever curates the geography shapes what can be said. Mitigations: the Atlas is public, versioned, and change-logged; private node names let owners speak off-Atlas; Atlas governance belongs in the Bible's §22 decision rights before Phase B.
4. **Reaction-value drafting optimises for strong feelings**, which are not always welcome feelings. Proposal selection must exclude anything adjacent to a node's REFUTED coastline — once Maya says *not flipping*, the draft never probes that border again. Refusals fence the Bootstrap permanently.
5. **Coastlines are information too.** A published coastline reveals that *something* was refused there. Owner's choice, Continent resolution by default, and the coastline renders as boundary shape, never as a labelled list of rejections.

---

## 13. The one-sentence version

**SEE MY WORLD is a map a person draws by arguing with a machine's first draft of them — where confidence counts human testimony instead of machine inference, everything unconfirmed ebbs like a tide, sharing grants zoom instead of access, and the only way your world grows is by walking someone else's coastline and choosing what to carry home.**
