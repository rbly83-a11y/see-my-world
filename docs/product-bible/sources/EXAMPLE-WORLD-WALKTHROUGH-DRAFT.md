# SEE MY WORLD — Example World Walkthrough (DRAFT)

_Status: standalone draft prepared Nov 21, 2026, in response to the Edition 1.1 critique. NOT part of the Product Bible. Nothing here is canon, normative, or a scoring specification — it is the worked example the critique said was missing (§06's experience, made concrete), so the feel of the product can be judged before any formula is frozen. The owner below is fictional and deliberately ordinary._

## 1. The owner and her five interests

**Mara, 34, school librarian.** At signup she is asked for five interests — not a bio, not a feed import. She types:

1. Saltwater fly tying
2. Brutalist architecture
3. Old-time radio drama
4. Sourdough (she bakes; she does not sell)
5. Minor-league baseball scorekeeping

Activation, per the Bible, is not this signup. It is her FIRST_CORRECTION, below.

## 2. The provisional map — what she is actually shown

The system returns a Worldprint she can argue with. Plain-language rendering (strength/confidence shown as words, not numbers, on the owner-facing surface):

- **Making things by hand** — strong, confident. Anchored by fly tying + sourdough.
- **Mid-century design** — moderate, *low confidence*. Inferred from brutalism alone.
- **Audio storytelling** — moderate, confident. From radio drama.
- **Statistics / record-keeping** — weak, *low confidence*. Inferred from scorekeeping; could equally be ritual, nostalgia, or the ballpark itself.
- **Water / the coast** — weak, speculative. One signal (saltwater) stretched thin.

Underneath, a Receipt already exists for every node: *"Statistics / record-keeping was suggested because you listed minor-league baseball scorekeeping. This is a guess. Correct it and the map learns which part mattered."*

This is the moment the critique flagged as life-or-death: five interests is a whisper. The map survives it here only because two of its five nodes openly label themselves guesses — the product's honesty is doing the work its signal can't.

## 3. Three corrections — activation

1. Mara deletes **Statistics / record-keeping** and replaces it with **"the ritual of it — same seat, same pencil, since I was nine."** The system re-files scorekeeping under *Ritual & continuity*, strength strong. **This correction is FIRST_CORRECTION — activation fires here, not at signup.**
2. She downgrades **Mid-century design** to a pin: *"Only brutalism. Only concrete. The rest of mid-century leaves me cold."* The node narrows rather than grows — a correction the model must reward, not resist.
3. She adds a Seed the system could not have inferred: **fermentation beyond bread — pickles, kraut, a crock her grandmother used.** The map gains a node with no algorithmic parent; its Receipt reads *"Added by Mara. No inference involved."*

After three corrections the map is recognisably *hers* in a way the provisional one wasn't — which is the product's whole thesis, demonstrated instead of asserted.

## 4. The Lens and the Perspective

Mara builds a Lens for one bounded purpose: **a gift-giving Lens for her brother**, published as a Perspective (versioned, revocable).

- **In the Lens:** fly tying, sourdough/fermentation, radio drama.
- **Deliberately out:** brutalism (he knows), scorekeeping ritual (hers alone, not a gift surface).
- The Perspective carries an expiry she sets herself and a Receipt the *visitor* can open: *"Mara chose what this view includes. Absence here is not absence in her World."*

That last line is the Bible's "never treat a view as endorsement" invariant, translated into a sentence a lay visitor actually understands — the critique noted Lens/Perspective collapse in lay heads; the fix is in the visitor-facing copy, not the data model.

## 5. What the visitor actually sees

Her brother opens the shared link. He sees three territories, a short "start here" path (the fly-tying bench, because it's strongest and most concrete), and — critically — **no scores, no ranking against his own World, and no comparison at all**, because he has not yet built and *corrected* a World of his own. Per the critique's asymmetry flag: comparison unlocks only after the visitor's own FIRST_CORRECTION, so a curated World is never set against a provisional one.

He leaves a Seed on the radio-drama node — a archive of 1940s broadcasts he found. Mara can accept it, pin it, or decline it; declining leaves no mark on him. That completed loop — share → visit → Seed → owner decision — is one RECIPROCAL_SHARE, the unit the critique recommended the pilot be re-scoped around (clusters, not 50 unconnected individuals).

## 6. What this example proves — and what it still doesn't

**Proves (experientially):** the correction loop is satisfying on paper; Receipts read naturally in plain language; a Lens can be explained in one visitor-facing sentence; the no-comparison-before-correction rule is implementable in the journey, not just the invariants.

**Does not prove:** any scoring formula (strength/confidence above are editorial, not §08 models); that a real first map from five real interests feels this good (this one was authored backwards from a good outcome); that visitors without an existing relationship to the owner care at all — this example *assumes* the brother, which supports the critique's "existing relationships first" pilot argument rather than refuting it.

## Appendix — the other three score-raisers, scoped but not built

1. **One specified scoring model** — pick ONE node property (confidence is the safest first) and write its normative formula + unit tests + the exact human-readable explanation a Receipt would show. One property, fully specified, beats four named and none modelled.
2. **Cluster pilot re-scope** — recruit 8–10 existing clusters (pairs, small teams, a class) instead of 50 individuals; success = ≥1 completed RECIPROCAL_SHARE per cluster.
3. **Named first buyer** — the walkthrough points at one: people who must repeatedly brief others on what they care about (gift-givers are the consumer face; onboarding buddies / collaborators are the plausible paying face). Naming one is a decision, not a draft — left to Bobby.

**Baseline note:** the critique also recommended freezing Edition 1.1 explicitly as the baseline of record (the 1.0 binary was unavailable and 1.1 is a reconstruction). One sentence in §22's change control does that; it should be Bobby's sentence, not this draft's.
