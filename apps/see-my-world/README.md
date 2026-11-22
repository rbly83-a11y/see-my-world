# SEE MY WORLD — Product Application

**Status: Stage 02 vertical slice implemented; automated tests passing
locally. Not deployed. Not production.**

This tree contains the first SEE MY WORLD implementation: the Stage 02
vertical slice built under the approved architecture
(`STAGE-02-ARCHITECTURE-PROPOSAL.md` Revision 1 + approval addendum;
registers A-42/A-43, DR-1 bounds). It demonstrates the trust model —
a private World, a bounded authorized Lens grant, and a visitor
Perspective — not a map editor.

## What the slice does

1. **Create a World** — empty and owner-controlled; no First Light
   draft generation.
2. **Add a Territory** — a provisional visual grouping inside the
   World. Territory is not an Atlas entity and creates no Atlas
   geography (OQ-1).
3. **Explore** — Explorer serves the owner's own view and, separately,
   authorized visitor views under different access rules (OQ-5).
4. **Edit in Studio** — Studio is the correction/authoring surface
   only (OQ-2). Corrections run under testimony-v1 exactly as
   specified: BOOST, REDUCE, REJECT, KEEP_WATCHING, with revision-CAS
   concurrency, idempotency keys, and a Receipt per correction. There
   is **no CONFIRM operation**: the Q-01/D-34 conflict is preserved,
   not resolved (test S02-09).
5. **Save** — every mutation is an event in an append-only testimony
   ledger; current state is a deterministic projection (fold) of the
   ledger, persisted behind a storage port.
6. **Reopen** — after a fresh process start, the World, its revision,
   and its Lens grants (audience, resolution, expiry, revocation)
   are intact; replaying the ledger reproduces the same digest.

## The visitor path (the trust model)

Visitor disclosure is limited to **fixed, synthetic, preapproved
projection fixtures** — P-SYN-CONTINENT / P-SYN-COAST / P-SYN-HARBOUR
over the synthetic World W-SYN-1 — served verbatim after a
request-time grant check (audience, expiry, revocation). The
audience check is recipient binding (F-01): the visitor must also
authenticate with their own visitor credential — a separate secret,
stored hashed — which the service resolves server-side to the
grant's named recipient; token possession alone is not enough. No general
Lens compilation over owner data takes place, and this slice does
**not** validate a complete Lens Compiler (gated on Q-09; the
compiler test S02-12 is a future test, not part of this suite).
Audience is a named-recipient Invitation only, never a public link
(OQ-8). Edges are excluded from this slice (OQ-7).

## Technology (provisional)

Zero external dependencies; Node ≥ 22.13 built-ins only
(`node:http`, `node:sqlite`, `node:test`). Persistence sits behind a
storage **port** (`src/storage.js`); the SQLite adapter is the
provisional implementation and decides nothing about production
persistence (**Q-21 remains open** — no SQLite concept reaches the
domain or service layers).

Retention boundary (R-03): all prototype data lives in one data
directory (`data/`, git-ignored) — the database and its WAL auxiliary
files, nothing else; no backups, no exports. Deletion is **logical
deletion** only; the prototype makes **no erasure-compliance claim**,
and physical erasure was not tested (addendum C-02).

## Run

```sh
npm test        # the S02 acceptance suite (16 tests)
npm start       # serves on $PORT with data in $SMW_DATA_DIR
                # (default ./data; owner token $SMW_OWNER_TOKEN)
```

## Layout

- `src/domain.js` — vocabulary, frozen v1 constants, canonical digest
- `src/reducer.js` — testimony-v1 reducer, tidal decay, ledger fold
- `src/fixtures.js` — the synthetic W-SYN-1 projection fixtures
- `src/storage.js` — the storage port and its provisional SQLite adapter
- `src/service.js` — the shared world-data core behind both surfaces
- `src/server.js` — the thin HTTP surface
- `test/acceptance.test.js` — S02-01…S02-11, S02-13…S02-17
