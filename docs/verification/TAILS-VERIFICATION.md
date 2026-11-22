# SEE MY WORLD — Phase Zero: Tails Verification

*Verification of the two files in `recovered-tails/` against the Edition 1.4 baseline's register-derived chapters and the summaries they were compiled from. Prepared under the Phase Zero documentation audit, 21 November 2026. This document reports evidence only. It delivers **no provenance verdict**: where the tails came from is the founder's to establish (Phase Zero founder queue item Q-44).*

## Materials compared

| Material | File |
|---|---|
| Tail 24 (purports to be Continuation 24 §§291–300) | `recovered-tails/CONTINUATION-24-TAIL-SECTIONS-291-300.md` (9,131 bytes) |
| Tail 28 (purports to be Continuation 28 §§375–380) | `recovered-tails/CONTINUATION-28-TAIL-SECTIONS-375-380.md` (5,418 bytes) |
| Register-derived chapter for §§291–300 | Edition 1.4, **Chapter 96** — whose entire §§291–300 substance is its compilation note (entry D-62) |
| Register-derived chapter for §§375–380 | Edition 1.4, **Chapter 112** — whose entire §§375–380 substance is its compilation note (entry D-67) |
| The summaries the chapters were compiled from | `EDITION-1.4-AMENDMENT-REGISTER.md`, entries **A-25** (Continuation 24) and **A-29** (Continuation 28) |
| Filed heads, for voice/format continuity | `CONCEPT-CONTINUATION-24-LIVING-MEMORY-NETWORK-V1.md` (§§281–290); `CONCEPT-CONTINUATION-28-LIVING-CITY-ENGINE.md` (§§361–374) |

**Categories.** For each section: **Agrees** — tail and register-derived chapter agree in substance on every point the summary records. **Diverges** — a point where they differ in substance, quoted from both. **Beyond the summary** — material in the tail that could not have been derived from the register summary, because the register-derived chapters contain nothing the summaries did not. (Chapter 96's and 112's compilation notes are faithful compressions of A-25 and A-29; nothing in either chapter exceeds its summary.)

**One baseline-internal note before the findings.** Edition 1.4's Appendix E source→chapter mapping assigns §375 to Chapter 111 (§§371–375) and §§376–380 to Chapter 112, while Chapter 112's compilation note states that "Sections 375–380 are compiled here." The register-derived §375 substance (progressive loading) in fact appears in Chapter 112's note. This is an inconsistency inside the baseline's own bookkeeping, recorded here because the comparison depends on where §375's compiled substance sits; it is not a divergence between tail and chapter, and it is not harmonized here.

## Format and voice continuity (both tails)

- **Presentation format.** The tails are in the source line's *pre-filing* format: plain numbered headings ("291. The Living Archive Preservation Contract"), contracts as unfenced plain text, tables as tab-separated rows, no filing header, no markdown conversion. The filed heads, by contrast, carry the filing step's conversions — `## 281.`-style headings, ```ts code fences, markdown tables, a filing header, and bracketed `[Source note: …]` markers where the originals contained prototype widgets. The tails' format matches the format of the founder's pasted continuation messages as they appear in the conversation record (see the Continuation 28 paste, 21 November 2026, 18:11 EST), not the filed format.
- **Widget residue.** The tails contain display-heading residue of the kind the filing step elsewhere transcribed as bracketed source notes: §291's "Proposed guarantees", §293's "Initial social actions", §300's stacked display block "The Three Layers of the Living World / History / Memory / Immersion", §375's "Progressive World Loading", §377's "One City, One Hundred Years · MVP", §378's "Nonnegotiable release gates". In the tails these appear raw, without the bracketed-note treatment — consistent with text that has not passed through the filing step.
- **Voice.** Both tails preserve the source line's first-person recommendation voice ("I recommend a modular implementation…", §297; "I recommend a proposed suite of 300 acceptance cases", §299; "My recommendation is a two-track pilot", §376) — the same voice the filed heads preserve (§289 "I recommend ranking public memories…"; §373 "I recommend the following evidence hierarchy…").
- **Contract style.** Tail §292's `MemoryConsentGrant` follows the filed heads' contract conventions exactly: one field per line, union types, optional fields marked `?`, audience and use enumerations in the same style as §282's `MemoryRecord` and §285's `MemoryThread` (Continuation 24 head) and §363's `SiteTimeState` (Continuation 28 head).
- **Terminology.** Consistent throughout with the baseline: MemoryConsentGrant and its four allowedUses; "1995 Memory Wall"; "One Day in 1995"; the five-era list (1925, 1955, 1985, 1995, 2025); disclosure, withdrawal, and projection vocabulary used exactly as in Parts XV and XVIII. No term in either tail conflicts with Edition 1.4's glossary or invariants; neither tail uses "confidence" in any prohibited sense (the word does not appear in either tail).

## Continuation 24 tail — §§291–300 vs Chapter 96 / entry A-25

### §291 — The Living Archive Preservation Contract
- **Agrees** on every point A-25 (i) records: exportability in documented formats; revision history without exposing private prior versions; withdrawal subject to clearly disclosed legal/operational limits; portability without uncontrolled copies; backups, integrity, disaster recovery; the archive must not depend on trusting one company forever (institutional partnerships, standard formats).
- **Diverges:** none.
- **Beyond the summary:** the guarantees carry names the summary does not record — the backups/integrity/recovery item is a named guarantee, **"Continuity"** — and exportability is scoped to "their own text, media, metadata, **and permitted collection structure**", a qualifier absent from A-25.

### §292 — The Memory Rights and Consent Ledger
- **Agrees** on every point A-25 (j) records: MemoryConsentGrant; the four allowedUses (DISPLAY / DISCOVERY / THREAD_LINKING / CURATED_EXHIBIT); append-only for audit while access reflects the *current* effective consent state; revocation invalidates public projections, search results, and cached derivatives; the honest limit — "The system must not promise that it can erase copies already lawfully downloaded or independently retained by others."
- **Diverges:** none.
- **Beyond the summary:** the complete contract, of which A-25 names only the allowedUses. The tail gives the full field set — `grantId`, `memoryId`, `ownerId`, `audience: "PRIVATE" | "INVITED" | "PUBLIC"`, `grantedAt`, `revokedAt?`, `policyRevision` — none of which appears in A-25, Chapter 96, or anywhere else in the corpus.

### §293 — The Social Interaction Contract
- **Agrees** on every point A-25 (k) records: the five actions (Appreciate / Save Reference / Add Perspective / Invite Contribution / Report); no direct messaging in the first public launch; later DM opt-in, rate-limited, blockable, unavailable in unsupervised school environments.
- **Diverges:** none.
- **Beyond the summary:** a one-line gloss for each action, none recorded in A-25 — e.g. Appreciate: "A private or low-pressure acknowledgment"; Invite Contribution: "Ask someone to share a recollection, subject to invitation controls"; Report: "Flag privacy, rights, safety, or authenticity concerns". The phrase "low-pressure acknowledgment" occurs nowhere else in the corpus (see the uniqueness check in the evidence summary).

### §294 — The Community Growth Loop
- **Agrees** on both points A-25 (l) records: no pressure to publish; private preservation is full value ("A person who chooses to preserve memories privately is still receiving value from the product").
- **Diverges:** none.
- **Beyond the summary:** the loop itself. A-25 records no steps at all; the tail specifies a named seven-step loop — **Explore → Discover → Relate → Contribute → Authorize → Connect → Return** — with a sentence per step ("Relate: The memory reminds them of their own experience", etc.). The entire mechanism is beyond-summary material.

### §295 — Institutional Memory Collections
- **Agrees** on every point A-25 (m) records: collections distinct from Threads; publisher, editorial standards, and source policies identified; institutional publication never overrides contributor rights or withdrawal; school collections supervised, student work private unless permissions are obtained.
- **Diverges:** none.
- **Beyond the summary:** a worked example absent from A-25 — "a local historical society could create an exhibit about shopping malls in the 1990s, combining archival photographs with permissioned oral histories" — and a fourth identified element, the collection's "review process".

### §296 — The Memory-to-World Expansion Engine
- **Agrees** on every point A-25 (n) records: the seven-stage pipeline (Memory Cluster → Candidate Proposal → Source Investigation → Rights Review → Editorial Approval → Scene Production → Publication); AI proposes, editors decide ("AI can identify possible opportunities, but it should not automatically transform personal recollections into historical environments. That decision requires editorial judgment.").
- **Diverges:** none.
- **Beyond the summary:** the worked example — "Imagine dozens of approved memories connected to a particular arcade" — including the system's quoted candidate proposal, "This location may be a candidate for an immersive historical reconstruction", which occurs nowhere else in the corpus.

### §297 — The Engineering Implementation Plan
- **Agrees** on every point A-25 (o) records: modular services; PostgreSQL with object storage and a search index over approved public projections; Worlds reference publication records with access checked at request time; no per-World copies.
- **Diverges:** none.
- **Beyond the summary:** the complete eight-service responsibility table, which A-25 does not enumerate — Memory Service ("Private records, revisions, ownership"), Media Service ("Upload, storage, processing, derivatives"), Consent Service ("Publication grants and revocation"), Moderation Service ("Review, appeals, enforcement"), Thread Service ("Contextual relationships between memories"), Discovery Service ("Search, filtering, ranking"), Archive Service ("Export, retention, integrity"), Era Runtime Adapter ("Authorized spatial presentation").

### §298 — The proposed API surface
- **Agrees** on every point A-25 (o) records: proposed contracts, explicitly not verified existing routes; publication not bypassable by directly setting a status field ("a request to publish a memory should not be able to bypass rights review by directly changing its status field").
- **Diverges:** none.
- **Beyond the summary:** the full endpoint list — **fourteen routes** (POST/GET/PATCH `/api/memories`, POST `/api/memories/:id/media`, `/preview`, `/submit`, `/visibility`, `/withdraw`, GET `/api/eras/:eraId/memories`, GET `/api/eras/:eraId/threads`, POST `/api/threads/:threadId/contributions`, GET `/api/memory-passport`, POST `/api/memories/:id/export`, POST `/api/memories/:id/report`) — plus the pre-launch definition requirements (authorization scopes, rate limits, idempotency, moderation states, cache invalidation). No endpoint appears in A-25 or Chapter 96.

### §299 — The Living Memory Network acceptance suite
- **Agrees** on every point A-25 (p) records: **300 proposed cases**, none executed; the gate is contributor comprehension and control ("The most important release gate is not whether the network can accept thousands of uploads. It is whether contributors understand and retain control over what becomes public."); the same four adversarial tests (unauthorized publication, private metadata leakage, stale search results after withdrawal, accidental exposure through Threads).
- **Diverges:** none.
- **Beyond the summary:** the complete ten-category breakdown, absent from A-25 — Private memory creation and editing 30; Media ingestion and processing 32; Consent and publication 38; Memory Threads 28; Discovery and filtering 30; Rights and attribution 32; Moderation and appeals 30; Withdrawal and deletion 36; Accessibility 20; Security and privacy 24 — **summing to exactly 300**.

### §300 — The Living Memory Network: A new social foundation
- **Agrees** on every point A-25 records: three layers (History / Memory / Immersion); first release the 1995 Memory Wall; the guiding principle verbatim — "The system organizes. The person remembers. The community connects. The World grows."
- **Diverges:** none.
- **Beyond the summary:** the layer glosses (History — "Evidence of what happened"; Memory — "What people remember"; Immersion — "What visitors can explore"); the first-release feature list (the 1995 Memory Wall "integrated into the One Day in 1995 experience", supporting private drafts, photographs, written recollections, song associations, explicit publication, a moderated public gallery, and basic contextual discovery, with Threads, oral histories, institutional collections, and community-driven scene reconstruction deferred until "the core contribution and consent systems are proven"); and a complete **next-milestone passage** naming the following continuation — "The Living Memory Network — Social Experience and Community World Design" — with seven concentration bullets (the complete user journey, memory-rich environments, community interactions, generational discovery and family collaboration, social identity without invasive profiling, how public contributions reshape Era Worlds, a detailed 1995 Memory Wall prototype). A-25 records none of this. The passage's subject is what in fact arrived as Continuation 25 (the Social Time Machine experience design, Edition 1.4 Chapters 97–100).

## Continuation 28 tail — §§375–380 vs Chapter 112 / entry A-29

### §375 — The City Performance Architecture
- **Agrees** on every point A-29 (m) records: progressive loading in the order city overview → district shell → era environment → contextual memories → detailed interiors → optional immersion; mobile-compatible 2.5D with an accessible text equivalent as the initial target; full 3D deferred until demand and measured performance justify it.
- **Diverges:** none. (On where §375's compiled substance sits in the baseline, see the baseline-internal note at the head of this document.)
- **Beyond the summary:** a description for each loading layer, which A-29 does not record — City overview: "Lightweight map, timeline, and district selection"; District shell: "Streets and documented site boundaries"; Contextual memories: "A bounded selection of authorized public contributions"; Detailed interiors: "Loaded only when the visitor enters a supported venue"; Optional immersion: "Higher-resolution assets, audio, and advanced effects loaded on demand".

### §376 — The first Living City pilot
- **Agrees** on every point A-29 (n) records: the two-track pilot; the fictional composite district built first to validate the technology; one real historical district investigated in parallel; Buffalo named as a candidate; selection governed by evidence, community interest, and institutional partners, "not nostalgia alone".
- **Diverges:** none.
- **Beyond the summary:** the full Option A / Option B framing the summary compresses away — Option A (Fictional Composite City): "Fastest route to testing immersion, time travel, and community mechanics. Historical details can be researched, but the town itself is openly fictional"; Option B (Real Historical District): "Stronger potential for local-history partnerships and genuine community contributions. Requires more source verification, rights review, and geographic accuracy"; and the recommendation in the source's own words: "My recommendation is a two-track pilot."

### §377 — The Living City MVP scope
- **Agrees** on every point A-29 (o) records: one fictionalized district; one primary street in five era states; three detailed venues; twenty clearly identified fictional demonstration memories; Memory Wall, Threads, private drafts; no simulated contributor represented as a real witness; real consenting adults invited only after the workflows pass review.
- **Diverges:** none.
- **Beyond the summary:** the complete eight-row MVP table, including two rows A-29 does not record — Historical evidence: "Source-backed artifact and context records"; Experience: "2.5D, timeline switching, accessible text" — and the table's explicit era row (1925, 1955, 1985, 1995, 2025).

### §378 — The Living City acceptance suite
- **Agrees** on every point A-29 (p) records: **280 proposed cases**, none executed ("These are proposed test cases, not executed results"); all four nonnegotiable gates, in substance verbatim — no business outside its supported operating period without an uncertainty label; no private memory locations or contributor identities revealed; no fictional people represented as actual historical residents; no silent replacement of historical evidence with a more visually appealing reconstruction.
- **Diverges:** none.
- **Beyond the summary:** the complete ten-category breakdown, absent from A-29 — Site and structure chronology 34; Temporal state resolution 34; Street transformation 28; Memory Hotspots 26; Lost Places Registry 26; Community reconstruction 28; City navigation and performance 30; Rights and consent 30; Accessibility 20; Privacy and security 24 — **summing to exactly 280**.

### §379 — The Living City business model
- **Agrees** on every point A-29 (q) records: basic historical exploration and public community memory discovery accessible without a mandatory paid subscription; no sale of personal memory data; no advertising targeting from sensitive historical associations; no broad commercial rights required merely to participate.
- **Diverges:** none.
- **Beyond the summary:** the four named revenue sources, which neither A-29 nor Chapter 112 records — "optional premium immersive experiences, private family collections, institutional publishing tools, and commissioned cultural exhibitions" — the institutional value-proposition paragraph (a library or historical society could "build a continuously evolving community exhibit without needing to develop an entire immersive platform independently"), and the closing rule: "A sustainable business model must reinforce trust rather than undermine it."

### §380 — Product Bible decision: The Living City becomes the flagship
- **Agrees** on the decision A-29 and Chapter 112 record: the Living City Engine as the flagship demonstration combining the same six components — the Era Engine, the Memory Network, the Memory Portal Engine, the World Memory Graph, the Social Time Machine, and the Reality Lens.
- **Diverges — one item, an omission at the tail's end.** Chapter 112's compilation note records of §380: "**Continuation 29, named at §380 as the next milestone**, arrived and is compiled at Chapters 113–116." The tail as filed does not contain that naming: after the six-component list, the file's final line is the bare heading "Recommended next milestone", and the file ends there. The tail is therefore **incomplete at its final line** relative to the summary's record of §380 — it terminates mid-passage, before the milestone it introduces. No other point in §380 differs.
- **Beyond the summary:** one-line glosses for each flagship component, which A-29 does not record (e.g. the World Memory Graph — "Relationships between people, places, objects, events, and periods"; the Reality Lens — "Visible distinctions between evidence, testimony, and reconstruction").

## Tallies

| | Sections | Agrees (every recorded point) | Diverges | Sections containing beyond-summary material |
|---|---|---|---|---|
| Continuation 24 tail (§§291–300) | 10 | 10 | 0 | 10 |
| Continuation 28 tail (§§375–380) | 6 | 6 | 1 (the §380 end-of-file omission only) | 6 |
| **Total** | **16** | **16** | **1** | **16** |

## Evidence summary — what the evidence does and does not show

**What the evidence shows.**

1. **Substantive agreement is total.** On every point that entries A-25 and A-29 record — and therefore on everything Chapters 96 and 112 contain — both tails agree without exception: every rule, pipeline, prohibition, figure, and decision matches. There is no point on which a tail contradicts the register-derived baseline text.
2. **Both tails contain extensive material that exists nowhere in the summaries they were supposedly compiled from — and nowhere else in the corpus.** A uniqueness check confirms this mechanically: distinctive tail strings — "low-pressure acknowledgment" (§293), "candidate for an immersive historical reconstruction" (§296), "Media ingestion and processing" (§299), "shopping malls in the 1990s" (§295), "Progressive World Loading" (§375), "reinforce trust rather than undermine it" (§379), the route `/api/memory-passport` (§298) — each occur in exactly one file in the entire project folder: the tail that contains them. The beyond-summary material is not decorative: it includes a complete contract (§292), a complete fourteen-route API surface (§298), two complete acceptance-suite breakdowns whose figures sum exactly to the totals the summaries record (§299: 300; §378: 280), an eight-service responsibility table (§297), a seven-step growth loop (§294), and a next-milestone passage (§300) whose stated subject matches the continuation that actually followed.
3. **The Continuation 28 tail's text is independently present in the conversation record.** The founder's pasted Continuation 28 message (21 November 2026, 18:11 EST) contains §§375–380 in full, and the tail matches that text — including the Buffalo paragraph, the MVP table, and the acceptance figures — up to the tail's final line, where the tail stops and the pasted text continues into the Continuation 29 milestone passage.
4. **Format and voice are continuous with the source line** and specifically with its pre-filing form: plain numbered headings, unfenced contracts, tab-separated tables, widget display-heading residue without filing brackets, first-person recommendation voice, and contract conventions identical to the filed heads.

**What the evidence does not show.**

- It does not establish **who placed the files in `recovered-tails/`, or when, beyond the folder's timestamps** (21 November 2026, 18:30 EST — after Edition 1.4's delivery). Nothing in either file carries a filing header, attribution, or provenance marker.
- It does not establish that the Continuation 24 tail is the founder's original text by direct comparison, because the founder's Continuation 24 paste sits in the compacted portion of the conversation record and cannot be re-compared line by line from the materials available to this verification. For Continuation 24, the evidence is agreement-plus-beyond-summary content (points 1, 2, 4); for Continuation 28, the direct textual match (point 3) also applies.
- It does not make either tail baseline text. Edition 1.4 as approved compiles §§291–300 and §§375–380 from the register summaries and marks them register-derived (D-62, D-67); that remains the record until the founder rules otherwise.

**Disposition options the evidence supports** (for the founder's decision; none is enacted by this document):

- **Accept the tails as recovered source**: file them as the Continuation 24/28 source tails with a filing note recording this verification, and recompile Chapters 96 and 112 from source at the next edition — noting that the §380 tail would still end at "Recommended next milestone", so Chapter 112's milestone sentence would rest on the conversation record rather than on the tail file.
- **Hold**: leave the tails unfiled and Chapters 96/112 register-derived, with this verification attached to queue item Q-44.
- Either way, the substantive content of the baseline does not change: because agreement is total, recompilation would change Chapters 96 and 112 in *form and completeness* (full source text replacing summary compression), not in any rule, figure, or decision they state.
