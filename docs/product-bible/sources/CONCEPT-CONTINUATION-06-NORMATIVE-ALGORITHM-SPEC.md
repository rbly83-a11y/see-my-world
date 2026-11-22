# SEE MY WORLD — Product Development · Continuation 06 · Normative Algorithm Specification

## The Mathematics of a Living World

*Pasted by Bobby, 21 November 2026, following Continuation 05. Filed verbatim; widget fragments retained and marked as debris. Two paste losses restored in [brackets] from Gizmo's First Draft Engine concept document, which is the source the continuation quotes: the §45 original-rule formulas. One loss could not be restored and is marked: the §44 v2 coefficient's initial value.*

---

We have established the database architecture, testimony ledger, concurrency model, and proposed migration strategy.

Now we can tackle one of the most important components of SEE MY WORLD: the rules governing how a World learns, changes, remembers, and respects its owner.

This phase develops the proposed First Draft Engine v2.0 into an algorithm specification that can be implemented consistently, audited, and tested.

The central design principle remains unchanged:

An algorithm may propose an understanding of someone. It must never become the final authority over who that person is.

## 43. Separate the five dimensions of an interest

Earlier versions of the concept used strength, testimony, provenance, time, and buoy state. We should preserve those concepts while introducing additional dimensions only where they solve a specific problem.

### Proposed World Node Model

| Dimension | Meaning |
|---|---|
| Strength | How prominent the topic is in the current World |
| Testimony | Accumulated weight of qualifying human actions |
| Provenance | Whether the topic was declared, confirmed, proposed, witnessed, or refuted |
| Enduring affinity | Optional owner-controlled declaration of lasting importance |
| Exploration appetite | Owner's interest in discovering more about the subject |

These are separate values because they answer different questions.

A topic may have high testimony but low current strength. That means the owner has repeatedly affirmed it, but it is not currently prominent.

A topic may have low testimony but high exploration appetite. That means the owner wants to explore it without yet claiming it as an established interest.

A refuted topic may retain an internal correction record to prevent repeated suggestions, but that record must not be disclosed through a Perspective.

## 44. Define correction arithmetic precisely

For the v2.0 experimental reducer, I propose these normalized operations.

Let [s] be current strength and [a] be the configured adjustment coefficient.

**BOOST**

s′ = s + a(1 − s)

With [a = value lost in pasting] initially.

This produces a meaningful increase even when strength is zero.

**REDUCE**

s′ = s(1 − a)

With the same provisional coefficient.

This reduces prominence without declaring permanent rejection.

**REJECT**

status′ = REFUTED

The topic becomes ineligible for automatic proposals, publication, and related discovery paths unless the owner explicitly restores it.

**KEEP_WATCHING**

s′ = s

The topic is placed on a private watchlist of curiosities. It is not confirmed and its affinity is not increased.

### Important distinction

The formulas above govern strength only.

Testimony updates must be separately defined and versioned. Otherwise, a BOOST could accidentally change several dimensions in ways that cannot be explained or replayed.

For the experimental v2.0 model, I recommend recording each human action in the ledger and deriving testimony from qualifying events, rather than allowing arbitrary application code to increment the stored value.

## 45. Preserve the Original Engine as a Versioned Baseline

A closer examination of the supplied First Draft Engine reveals an important distinction: its original correction mathematics are already specified.

The source defines:

| Action | Original rule | Proposed v2 experiment |
|---|---|---|
| BOOST | [s ← min(1, s × 1.5); testimony +1.0; provenance upgrades to DECLARED] | [s′ = s + a(1 − s), §44] |
| REDUCE | [s ← s × 0.6; testimony +0.5] | [s′ = s(1 − a), §44] |
| REJECT | Refute; add 1.0 testimony | Preserve refutation authority |
| KEEP_WATCHING | Buoy floor 0.15; add 0.3 testimony | Preserve watching without endorsement |

Decision: The original rules become testimony-v1. The alternative formulas remain testimony-v2-experimental until user research and regression testing justify adopting them.

This prevents a future update from silently changing existing Worlds.

The original testimony weights also remain intact:

| Human action | Testimony increment |
|---|---|
| Direct declaration | 1.0 |
| Confirmation | 0.6 |
| BOOST | 1.0 |
| REDUCE | 0.5 |
| REJECT | 1.0 |
| KEEP_WATCHING | 0.3 |

WITNESSED evidence may contribute to proposals but must never independently establish an interest. Its evidence weight is capped at 0.3 and must not be confused with owner testimony.

## 46. Tidal Mathematics — Exact Behavior

The source specifies four half-lives.

Half-lives: DECLARED 180 days, CONFIRMED 90 days, PROPOSED 21 days, WITNESSED 14 days.

The normative equation is:

s(t) = s₀ · 2^(−Δt/H)

For buoyed topics:

s_visible(t) = max(0.15, s(t))

For other topics, strength below 0.03 means submerged.

### An unresolved edge case

The original specification does not define a separate half-life for REFUTED nodes.

I recommend treating refutation as an exclusion state rather than a decaying interest. It should not automatically expire or become a proposal again.

The system must also retain enough event history to distinguish a human-confirmed node that has become quiet from an unconfirmed proposal that has simply submerged.

## 47. The Pure Reducer

The core state transition should be a deterministic function of its previous state, action, and authoritative event time.

```ts
type Action =
  | "BOOST"
  | "REDUCE"
  | "REJECT"
  | "KEEP_WATCHING";
interface NodeState {
  strength: number;
  testimony: number;
  provenance:
    | "DECLARED"
    | "CONFIRMED"
    | "PROPOSED"
    | "WITNESSED"
    | "REFUTED";
  buoy: boolean;
  lastWitnessed: string | null;
}
function reduceTestimonyV1(
  node: NodeState,
  action: Action,
  eventTime: string
): NodeState {
  const next = { ...node };
  if (node.provenance === "REFUTED") {
    throw new Error("Explicit restoration required");
  }
  switch (action) {
    case "BOOST":
      next.strength = Math.min(
        1, node.strength * 1.5
      );
      next.testimony += 1;
      next.provenance = "DECLARED";
      break;
    case "REDUCE":
      next.strength = node.strength * 0.6;
      next.testimony += 0.5;
      break;
    case "REJECT":
      next.provenance = "REFUTED";
      next.testimony += 1;
      break;
    case "KEEP_WATCHING":
      next.buoy = true;
      next.strength = Math.max(
        node.strength, 0.15
      );
      next.testimony += 0.3;
      break;
  }
  next.lastWitnessed = eventTime;
  return next;
}
```

This reducer implements the original correction formulas with one explicit additional safeguard: a refuted topic cannot be restored through an ordinary BOOST. A separate owner-authorized restoration operation will be required.

The reducer assumes that strength has already been materialized to the correction timestamp. It does not independently calculate elapsed-time decay.

For a fully deterministic implementation, timestamps must be validated, events must be ordered, and the stored arithmetic precision must be specified. The exact rules for changing buoy status, resetting a refutation, and handling a BOOST from zero remain open design decisions.

## 48. The Lens Projection Function

The original concept's Law of Resolution is especially important.

The three resolutions are: Continent, Coast, Harbour.

*[Source debris retained: a resolution-view widget fragment — "Authorized visitor view / Science & Discovery / Astronomy / Physics / Illustrative view using hypothetical approved topics. Actual Lens compilation must occur on the server."]*

The projection function should take a World revision, Atlas version, Lens scope, resolution, and valid grant, then produce a disclosure-safe Perspective.

Its most important invariant is:

Detail(Output) ≤ Resolution(Grant)

This is not merely a visual constraint. The server response must never contain finer-grained information than the authorized Lens permits.

## 49. Make Comparison Mathematically Honest

The original First Draft Engine defines three comparison categories:

Where We Meet: interests both parties have confirmed.

Where You Differ: topics one person has confirmed and the other has explicitly refuted.

New Frontier: previously unexplored territories connected through owner-surveyed relationships.

A major strength of the original design is that absence does not count as disagreement.

For two authorized sets of confirmed topics [C_A and C_B]:

Meet = C_A ∩ C_B

For explicitly refuted topics [R_A and R_B]:

Differ = (C_A ∩ R_B) ∪ (C_B ∩ R_A)

These computations must occur only after both participants have completed a correction pass and after both Worlds have been projected to their mutually permitted resolution.

The New Frontier calculation additionally requires a surveyed relationship and an explicit definition of what counts as unexplored. That last condition needs a normative data contract before implementation.

## 50. The Next Engineering Deliverable

The expanded algorithm now has a clear specification boundary.

**First Draft Engine v2.0 — Implementation package**

* Freeze testimony-v1 as the backward-compatible algorithm.
* Define exact event ordering and time-decay materialization.
* Specify refutation restoration and buoy removal.
* Build a pure, replayable Testimony Reducer.
* Implement Atlas-versioned Lens projections.
* Formalize comparison and surveyed-edge rules.
* Execute deterministic, concurrency, and privacy regression tests.

### Development conclusion

The most valuable insight in the original algorithm is not its decay formula or its cartography.

It is the reversal of authority.

Most personalization systems build increasingly confident conclusions about people. SEE MY WORLD proposes a different relationship: the system becomes increasingly useful by making its conclusions easier to question, correct, and control.

The next continuation should complete the missing edge-case specifications and define a deterministic event-replay engine. That would give us the mathematical and transactional foundation needed to implement the Living Perspective Engine without sacrificing the original First Draft Engine's philosophy.
