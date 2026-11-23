# SEE MY WORLD — Confidence Model, One Property Fully Specified (DRAFT)

_Status: standalone draft prepared Nov 21, 2026, following the Edition 1.1 critique and the Example World walkthrough. NOT part of the Product Bible, NOT normative until Bobby adopts it into a future edition. It specifies exactly ONE node property — **confidence** — completely: formula, inputs, unit tests, and the exact human-readable explanation a Receipt shows. Strength, persistence, and volatility remain named-but-unmodelled, deliberately: one property fully specified beats four sketched._

## 1. What confidence means here (and what it does not)

Confidence is the system's stated belief that a node belongs in this owner's World **as currently worded** — nothing more.

- It is NOT strength (how central the interest is to the owner).
- It is NOT a score of the person, and it is never shown to a visitor as a number.
- It answers one question only: *"How sure are we that this node, worded this way, is really theirs?"*

A node can be strong and low-confidence (one vivid but ambiguous interest — e.g. "minor-league baseball scorekeeping" read as *statistics*) or weak and high-confidence (a small interest the owner stated plainly and confirmed).

## 2. Inputs (all already exist in the Bible's data model)

For each node, at computation time:

| Input | Symbol | Source | Range |
|---|---|---|---|
| Direct evidence count | D | Interests the owner typed that map directly to this node | integer ≥ 0 |
| Inferred evidence count | I | Interests mapped to this node only by inference | integer ≥ 0 |
| Owner confirmations | C | Corrections that kept the node (reword, narrow, pin, re-file) | integer ≥ 0 |
| Owner contradictions | X | Corrections that deleted, split, or replaced the node or part of it | integer ≥ 0 |
| Owner-authored flag | A | 1 if the owner created the node with no algorithmic parent (a Seed they added themselves); else 0 | 0 or 1 |
| Days since last owner touch | T | Last confirmation, correction, or manual edit of this node | integer ≥ 0 |

No behavioural tracking, no imported feeds, no third-party data. Every input is an owner action already recorded as a Receipt — which is what makes the explanation in §5 possible without inventing reasons.

## 3. The formula (normative candidate)

```
evidence   = (1.0 × D) + (0.4 × I) + (0.8 × C) − (1.2 × X)
freshness  = 1 / (1 + T / 180)            # halves roughly every 6 months untouched
raw        = A == 1 ? 0.95 : evidence / (evidence + 2.0)
confidence = clamp(raw × (0.7 + 0.3 × freshness), 0.02, 0.99)
```

Design choices, stated so they can be argued with:

- **Direct beats inferred, ~2.5:1.** An inference is a guess the owner hasn't ratified; the walkthrough's provisional map survives only because its inferred nodes *say* they're guesses.
- **A contradiction costs more than a confirmation gains** (−1.2 vs +0.8). Being wrong about a person is worse than being slowly right — the product's consent posture, expressed as arithmetic.
- **Owner-authored nodes start at 0.95, not 1.0.** "Added by Mara. No inference involved." is as sure as the system gets — but wording can still drift, so never certainty.
- **Confidence decays without touch, but slowly and never to zero** (floor 0.02, ceiling 0.99). An untouched old node becomes *stale*, not *false*.
- **The saturating curve** (`evidence / (evidence + 2)`) means the first two pieces of direct evidence do most of the work — matching the product's reality that it starts from five interests, not five hundred.

## 4. Owner-facing bands (numbers never shown)

| Confidence | Band shown | Plain meaning |
|---|---|---|
| ≥ 0.75 | **Confident** | Stated directly and/or confirmed by correction |
| 0.45 – 0.74 | **Fairly sure** | Some direct evidence, not yet confirmed |
| 0.20 – 0.44 | **A guess** | Mostly inferred — the node must label itself as one |
| < 0.20 | **Speculative** | One thin signal, stretched — shown only with its Receipt attached |

Rule: any node in *A guess* or *Speculative* must render its Receipt inline, not behind a tap. Low confidence that hides is the failure mode the critique warned about.

## 5. The Receipt explanation (exact text templates)

The explanation is generated from the actual inputs — no template fires without its inputs being true:

- Direct: *"We suggested **{node}** because you listed {interest list}. You said this directly, so we're {band}."*
- Inferred: *"We suggested **{node}** because you listed {interest list}. That's an inference — a guess about which part mattered. Correct it and the map learns."*
- Confirmed: *"You kept **{node}** when you corrected your map on {date}. That raised our confidence."*
- Contradicted: *"You changed or removed part of **{node}** on {date}. That lowered our confidence — the wording above is the current version."*
- Owner-authored: *"You added **{node}** yourself. No inference involved."*
- Stale suffix (T > 90): *"You haven't touched this in {T} days, so we're a little less sure it still fits."*

## 6. Unit tests (the §08 promise, kept for this one property)

| # | Inputs | Expected | What it proves |
|---|---|---|---|
| 1 | D=1, all else 0, T=0 | 0.33 × 1.0 = **0.33 — A guess** | A single direct interest alone does NOT make the system "confident" — honesty at the cold start |
| 2 | D=2, T=0 | 0.50 — **Fairly sure** | Two direct interests (walkthrough: fly tying + sourdough → *Making things by hand*) |
| 3 | D=2, C=1, T=0 | 0.58 — **Fairly sure**, rising | A confirmation moves it, doesn't max it |
| 4 | D=1, I=1, X=1, T=0 | evidence = 0.2 → **0.09 — Speculative** | One contradiction nearly erases a mixed-evidence node (walkthrough: scorekeeping → *Statistics*, deleted) |
| 5 | A=1, T=0 | **0.95 — Confident** | Owner-authored Seed (walkthrough: fermentation) |
| 6 | D=2, C=1, T=365 | raw 0.58 × (0.7 + 0.3×0.33) ≈ **0.46** | A year untouched drops a confirmed node a full band — stale, not false |
| 7 | D=0, I=1, T=0 | evidence = 0.4 → **0.17 — Speculative** | Pure inference from one signal (walkthrough: *Water / the coast* from "saltwater") can never open above Speculative |
| 8 | Any inputs | result ∈ [0.02, 0.99] | The system never claims 0% or 100% about a person — invariant, not a preference |

Test 1 is the one that matters commercially: if a real implementation makes a five-interest cold start *feel* confident, it is lying, and this test catches it.

## 7. What this draft does not do

- It does not model strength, persistence, or volatility — each needs its own pass of exactly this size, in that order (strength next; it is the other half of every node label).
- It does not prove the weights are *right* — 1.0 / 0.4 / 0.8 / −1.2 are argued defaults, tunable only against a real pilot metric: **the model-quality gate the critique found missing** — e.g. "% of provisional nodes corrected at FIRST_CORRECTION" and "% of owners who reach a second correction session." If owners correct almost nothing, either the model is eerily good or they didn't care enough to argue — the pilot must distinguish those, and this draft can't.
- It does not enter the Bible. Adoption path, if Bobby wants it: this file becomes the §08 confidence subsection in Edition 1.2, with Edition 1.1 frozen as baseline of record first (per the critique's provenance fix).

## Appendix — remaining score-raiser status

1. ✅ Example World walkthrough — drafted Nov 21 (`EXAMPLE-WORLD-WALKTHROUGH-DRAFT.md`, pending Bobby's read).
2. ✅ One specified scoring model — this file (confidence only).
3. ⏳ Cluster pilot re-scope — scoped in the walkthrough appendix (8–10 existing clusters; success = ≥1 RECIPROCAL_SHARE per cluster); not yet drafted as a pilot plan.
4. ⏳ Named first buyer — a decision, not a draft; left to Bobby.
