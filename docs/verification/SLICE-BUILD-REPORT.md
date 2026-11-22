# SEE MY WORLD — Stage 02 Vertical Slice: Build Report

**Built under:** Stage 02 architecture proposal Revision 1 (approved) + approval addendum (C-01, C-02); implementation authorization A-43 under DR-1's bounds; provenance A-44/A-46.
**Location:** `apps/see-my-world/` in the local repository tree.
**Commit:** `5aec885` — "Stage 02 vertical slice: trust-model World/Lens/Perspective with testimony-v1 corrections and the 16-test S02 acceptance suite (A-43)". Local commit only; nothing pushed or uploaded.
**Status:** Implemented; automated tests passing locally (three consecutive full runs). Not deployed; not production; not a release claim of any kind.

---

## 1. What was built

One application tree, internally modular along the trust spine (proposal §6):

| File | Role |
|---|---|
| `src/domain.js` | Vocabulary and frozen testimony-v1 constants (operators, weights, tidal-v1 half-lives, buoy floor 0.15, submersion 0.03), canonical JSON + SHA-256 digest, error types. No `confidence` field exists anywhere. |
| `src/reducer.js` | Pure testimony-v1 reducer (frozen arithmetic; BOOST-from-zero defect carried, CORE-COR-04), tidal materialise-decay-then-reduce, and the ledger fold — replay recomputes corrections from their recorded inputs, never from stored snapshots. |
| `src/fixtures.js` | The fixed synthetic fixtures: World W-SYN-1 and payloads P-SYN-CONTINENT / P-SYN-COAST / P-SYN-HARBOUR, using only the compiled public fields (`PUBLIC_PROMINENCE_BAND` / `PUBLIC_ASSERTION_STATE` / `PUBLIC_EXPLORATION_STATE`). SYN-T5 (PROPOSED) and SYN-T6 (REFUTED) are absent from every payload. |
| `src/storage.js` | The storage **port** (contract documented at the top of the file) and its provisional SQLite adapter: WAL mode, one data directory, startup sweep of stray temp files, counts-only logical-deletion manifest. |
| `src/service.js` | The shared world-data core: Studio authoring (create World, add Territory, declare topic, corrections, RESTORE, REMOVE_BUOY), Lens grants (named-recipient Invitations with token, expiry, revocation), Explorer owner view, the grant-checked visitor path, replay verification with quarantine, and World deletion. Every owner mutation follows the Ch. 25 order — ownership → validation → idempotency → expected-revision CAS → versioned rule → one atomic persist of state + event + receipt + idempotency result. |
| `src/server.js` | Thin `node:http` surface. Principal from the `x-owner-token` session header, never a body; visitor grant from `x-invitation-token`, checked at request time; `Cache-Control: no-store` on all responses; generic error bodies (Ch. 22 §22.3). Corrections use the canonical endpoint `POST /api/first-light/worlds/:worldId/corrections` (CORE-COR-05). |
| `test/acceptance.test.js` | The 16 executable S02 acceptance tests, asserting on raw response bodies. |
| `test/helpers/` | Fresh-process probes: `dump-state.mjs` (S02-08), `wal-writer.mjs` (S02-16), `crash-writer.mjs` (S02-17). |

The six slice steps run end to end: create an empty owner-controlled World → add a Territory (provisional visual grouping) → declare topics → correct them in Studio → save via the ledger → reopen in a fresh process with revision, digest, and grant state intact → serve a visitor the fixture Perspective bound to their Invitation.

## 2. Test results (coordinator's own runs)

`npm test` in `apps/see-my-world/` (Node v24.22.1), run three times — during development, before commit, and on the committed tree. Final result on the committed tree:

**16 tests · 16 passed · 0 failed** (duration ≈ 5.1 s)

S02-01 ✔ · S02-02 ✔ · S02-03 ✔ (payload deep-equal to the fixture, field by field; no `strength`/`testimony` keys on the wire) · S02-04 ✔ (resolution escalation, cross-World token, visitor-token-as-owner, and forged token all fail closed with identical generic denials) · S02-05 ✔ (revocation defeats a previously served view; `no-store` asserted) · S02-06 ✔ (second conflicting revision → 409) · S02-07 ✔ (idempotent retry returns the original committed result; same key + different body → 409; Receipt names `testimony-v1` and the rule) · S02-08 ✔ (fresh-process reopen: revision, digest, and grant state identical) · S02-09 ✔ (`CONFIRM` and `RESTORE` as correction types → 400; the exposed action set is exactly the four v1 operators) · S02-10 ✔ (Explorer and Studio report the same revision and digest) · S02-11 ✔ (replay digest MATCH; a tampered projection → MISMATCH, quarantine, visitor path serves nothing) · S02-13 ✔ (REFUTED guard: "Explicit restoration required"; RESTORE as its own operation re-enables correction) · S02-14 ✔ (expired grant fails closed) · S02-15 ✔ · S02-16 ✔ · S02-17 ✔ (SIGKILL mid-transaction: recovery to the last committed revision exactly, bogus event absent, stray staging file swept, digest gate passes before serving).

**S02-12 was not implemented** — it is a future Lens Compiler test (addendum C-01) and is not counted anywhere in this suite.

Deletion tests S02-15…S02-17 concern **logical deletion** only. Physical erasure is not claimed and was not tested (addendum C-02).

## 3. Requirement IDs exercised

CORE-PW-01, PW-02, PW-03, PW-04, PW-05, PW-06 · CORE-COR-01, COR-02 (v1 portion only), COR-03, COR-04, COR-05, COR-06, COR-07, COR-08 · CORE-LENS-01, LENS-02 (preview = the served payload itself), LENS-03, LENS-05, LENS-07, LENS-09 (grants/expiry portion only) · CORE-VIS-01, VIS-03, VIS-04, VIS-05, VIS-06 · CORE-PW-08 (mechanics portion; logical deletion), CORE-PW-09 (interim-stack portion).

Partial or deferred by design, per the register: CORE-COR-09 (principal transitions only), CORE-COR-10 (excluded with edges, OQ-7), CORE-LENS-04/LENS-06 (the compiler contract is specified but not executed over owner data — fixtures instead, R-01), CORE-LENS-08 (excluded, Q-09), CORE-FL-* (not exercised: the World starts empty, OQ-4), CORE-SEED-*/SY-* (excluded).

## 4. Deviations from the proposal

None in scope, architecture, or semantics. Four mechanism choices the corpus leaves open, recorded here rather than hidden:

1. **Topic entry.** The proposal traces Step 2 to owner declaration/confirmation (CORE-COR-01) without naming an endpoint. The build exposes a Studio authoring operation (`POST /api/studio/worlds/:id/topics`) producing `TOPIC_DECLARED` events with the normative entry weights (DECLARED 1.0, CONFIRMED 0.6, PROPOSED 0) and an owner-supplied initial strength in [0, 1]. It is not a correction type and does not touch the Q-01 question.
2. **RESTORE / REMOVE_BUOY placement.** Implemented as their own Studio operations (per Ch. 22 §22.4 and CORE-COR-03/08), not as correction types; submitted as correction types they are rejected (asserted in S02-09).
3. **Grant credentials.** An Invitation carries a random token shown once at creation and stored only as a SHA-256 hash; the visitor route resolves the grant from that token at request time. No grant enumeration or public-link form exists (OQ-8).
4. **Test probes.** The S02-16/S02-17 helpers use `node:sqlite` directly against the database file — deliberately, as storage-boundary probes (leaving an uncheckpointed WAL; dying mid-transaction). Application code keeps SQLite inside the adapter: verified by grep — no `node:sqlite` import anywhere in `src/` outside `src/storage.js`, and no `CONFIRM` operation string in `src/`.

## 5. What remains unbuilt (by design)

General Lens compilation over owner data and its test S02-12 (gated on Q-09) · the explicit-CONFIRM question (Q-01/D-34) · production persistence (Q-21 — the SQLite adapter is provisional behind the port) · edges in any form (OQ-7) · Seeds and SEE YOURS · First Light draft generation · forwarding/resharing (Q-10) · retention-period behaviour (Q-13) · abuse flows (Q-17) · the Ch. 16 §16.6 lifecycle controls · deployment, public endpoints, and production anything.

## 6. Verification performed by the coordinator

- Full suite run three times: 16/16 each time, including once on the committed tree.
- `git status` clean after commit; the change set is confined to `apps/see-my-world/` (13 files, +1,630/−14).
- Test data lived only under the app's `data/test-runs/` (git-ignored) and was removed after every run; no residue remains.
- WORLD FORGE was not touched; its baseline is unaffected by this build.

---

## 7. REMEDIATION — Founder source audit A-47 (Revision Required → remediated)

The Founder's independent source audit of commit `5aec885` reproduced 16/16 (Node v22.16.0) but returned **REVISION REQUIRED** with four findings (register A-47). This pass fixes exactly those findings and nothing else. The 16 S02 tests are preserved with every assertion intact; legitimate-recipient visitor requests in them now also present the recipient's visitor credential (F-01 mechanism), which is the only change to their setup. Five new tests, titled by finding ID, were added. **Full suite after remediation: 21 tests · 21 passed · 0 failed** (coordinator's runs: during development and on the final committed tree).

### F-01 — Named-recipient authorization was not enforced (acceptance blocker) — FIXED

*Was:* grants recorded a `recipientId`, but `getVisitorPerspective()` authenticated only possession of the invitation token; the visitor route forwarded only `worldId` + `x-invitation-token`. Anyone holding a valid token received the Perspective.

*Fix:* an authenticated visitor principal, independent of the invitation token, mirroring the owner side's server-side token mapping.
- `src/storage.js`: new `visitor_principals` table (`credential_hash` PK, `recipient_id`); port methods `createVisitorPrincipal()` / `getVisitorPrincipalByCredentialHash()`. Only the SHA-256 hash of a credential is ever stored.
- `src/service.js`: `registerVisitorPrincipal(recipientId)` issues a per-recipient credential (`randomBytes(24)`, shown once, stored hashed, distinct from any invitation token). `getVisitorPerspective()` now resolves the presented credential to a `recipientId` server-side (`#resolveVisitorPrincipal`) and requires it to equal the grant's `recipientId` on **every** request. A submitted `recipientId` value is never read, let alone trusted. All pre-existing checks still run (quarantine → token → grant/world → **recipient binding** → revocation → expiry → derived projection), and every denial remains the same generic 403 body — no existence or reason leakage.
- `src/server.js`: owner-authenticated provisioning route `POST /api/studio/visitor-principals`; the visitor route now also forwards the `x-visitor-credential` header.
- *Tests:* **"F-01 wrong recipient with a valid token is denied"** — the named recipient is served; a valid token with the wrong recipient's credential, with a spoofed `?recipientId=` claim, with no credential, and with a forged credential are all denied with bodies byte-identical to the forged-token denial. **"F-01 wrong recipient denied after fresh restart"** — the binding persists in the store and is enforced (and the legitimate recipient still served) after the app is closed and reopened on the same data directory.

### F-02 — Grant creation was not atomic with projection creation — FIXED

*Was:* `createGrant()` performed `createGrant()` then `saveDerivedProjection()` as two storage writes outside any transaction; a crash between them could leave a grant without its derived projection.

*Fix:* `src/storage.js` gains `createGrantWithProjection(grant, projectionRecord)`, which performs both inserts inside the existing `#transaction` helper (BEGIN IMMEDIATE / COMMIT / ROLLBACK); `src/service.js` `createGrant()` now calls only that one atomic operation. The standalone port methods remain for compatibility but are no longer used together by the service.
- *Test:* **"F-02 grant creation is atomic: a failed projection write leaves neither grant nor projection"** — a deterministic fault injected at the `grant-projection` step (between the two writes, inside the transaction) makes `createGrant()` throw; afterwards neither the grant nor the projection exists. With the fault cleared, the same call persists both.

### F-03 — Replay quarantine persistence lacked a restart test — FIXED

*Was:* S02-11 proved visitor denial in-process after a replay mismatch quarantined the World's projections; persistence of that denial across a restart was asserted by design (flag stored in SQLite, checked before serving) but not independently demonstrated.

*Fix:* test-only addition; no production code changed for this finding.
- *Test:* **"F-03 replay quarantine persists across restart: visitor still denied in a fresh process"** — quarantines via tamper + `verifyReplay` MISMATCH, closes the app, then runs the new fresh-process probe `test/helpers/visitor-probe.mjs` (same pattern as `dump-state.mjs`), which re-opens the store cold and attempts the visitor request. Result asserted: `quarantined: true`, outcome denied, status 503.

### F-04 — Crash coverage was storage-level only — FIXED (coverage extended to the service operation)

*Was:* S02-17 kills a process holding an uncommitted raw SQLite insertion; it did not interrupt the full `appendTransition()` service operation at its internal write boundaries.

*Fix:* `src/storage.js` gains a deterministic fault-injection hook (`storage.faultAt`, always `null` in normal operation) with named steps inside `appendTransition()`'s transaction — `transition-event` (after the ledger insert), `transition-projection` (after the world-row update), `transition-idempotency` (after the idempotency insert). A throw at any step rolls the whole transaction back. No timing-dependent or racy kill was added: the brief's preferred deterministic injection is used instead of a mid-service SIGKILL probe, which could not be made deterministic.
- *Test:* **"F-04 appendTransition fault injection at each internal write step recovers to the last committed revision"** — drives the full service operation (`service.correct` → `#transact` → `appendTransition`) with a fault injected at each of the three steps in turn; after each, the World is at exactly the last committed revision with identical digest, unchanged ledger length, and replay status MATCH. With faults cleared, the same correction then commits cleanly at the next revision.

### Unaddressed / unchanged, deliberately

- No mid-service SIGKILL probe (F-04 note above): deterministic fault injection covers every internal write boundary of `appendTransition()`; a signal-based kill at a precise internal step cannot be made non-flaky.
- S02-12 remains unimplemented (future Lens Compiler test, C-01). Deletion reporting remains **logical deletion** only (C-02). No CONFIRM operation exists (Q-01/D-34). Visitor disclosure remains the synthetic fixtures only; Q-09, Q-01/D-34, and Q-21 remain open and unprejudiced. SQLite remains confined to `src/storage.js` (grep-verified; the new `visitor-probe.mjs` helper imports the service/storage modules like the existing probes and contains no `node:sqlite` import of its own).
- WORLD FORGE was not touched.
