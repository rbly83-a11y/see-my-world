# SEE MY WORLD — Stage 03 — G3 Conformance Annex

> **Document ID:** G3-CONFORMANCE-ANNEX · **Version:** 1.0 · **Owner:** Privacy/Security Reviewer (package assembly) · **Status:** Draft for Founder review — E1 — G3 gate acceptance pending · **Associated requirements:** Stage 03 Charter A-51 (§§4, 5, 10, 11); D03-04 v1.1 (crosswalk rows 1–27; boundary statements B-01…B-20; conflicts C-1…C-7); Amendment Register A-51, A-57, A-70, A-71 · **Verification method:** author comparison of the seven filed boards against the accepted record, self-checked (E1) · **Review decision:** Pending (Founder, G3 gate).

**Evidence discipline.** Author-produced, self-checked work — **E1** (Charter A-51 §10). This annex **flags** conformance and conflict. It resolves nothing, adopts nothing, and smooths nothing over. Every item in §2 and §3 is reserved to the Founder's G3 gate decision (or, where noted, to a separate Founder decision outside the gate). Nothing here declares Q-09, Q-01/D-34, or Q-21 resolved — and, to the boards' credit, neither do the boards (§1.4).

**Method.** Each board was read in full. Statements below cite the board and panel. Governing sources are cited by document and section/row/statement number. Severity is the annex author's assessment for the Founder's use: **Blocking** = the depicted item contradicts an accepted decision or a charter exclusion and cannot be accepted as product scope without a separate Founder decision; **Material** = the depicted item materially misaligns with the governing record and requires a Founder disposition; **Note** = recorded for accuracy, no disposition strictly required at this gate.

---

## 1. What conforms — credited

### 1.1 The Lens → Perspective model is stated in the governing record's own terms (Pass 05)

Pass 05's "Key Design Specifications" panel prints, as design rules:

- "World → Lens → Perspective enforced"
- "Server-side disclosure (no hidden-only fields)" — conforms to B-08 (compile, don't hide; the interface is never the permission boundary) and invariant 28.
- "Explicit permission controls with clear language"
- "Perspective preview before sharing" — conforms to B-18 (preview equals payload).
- "Revocation with immediate access removal" — conforms to B-03's enforcement claim (server-side, at the moment of each attempted action). The board does not overclaim revocation's honest limit (B-03: revocation cannot erase what a visitor already saw outside the system); the annex notes the limit is also not *stated* on the board — a copy gap for a later design pass, not a conflict.
- "Audit log (who, what, when)" — consistent with the Receipt model (D03-04 row 18).
- "Accessible (WCAG 2.2 AA, keyboard, screen reader)" and "Responsive (desktop, tablet, mobile)" — consistent with Charter §9.

Pass 05's closing voice line — "A World is what you create. A Lens is what you allow. A Perspective is the story someone is invited to see." — is an accurate plain-language statement of the canonical model (D03-04 rows 1, 3, 4).

### 1.2 Named lenses, explicit toggles, preview, and states (Passes 04, 05)

- Lenses are named, audience-described objects (Creative Circle; Family & Close Friends; Private (Only Me); Read-Only Archive) with per-content-type permission toggles and a permission matrix — the Lens as "the owner's disclosure decision in object form" (D03-04 row 3), presented as explicit owner action (B-16).
- The Share Perspective flow requires **Preview** before **Invite** (Pass 04 flow; Pass 05 Create–Configure–Share flow and 4-step wizard) — B-18 conformant in structure.
- The three Perspective States (Owner View (Full Access) / Authorized View (Lens Perspective) / Restricted (Not Authorized)) correctly model that an unauthorized party receives no view (B-02's interface face).
- The Revoke Access flow is depicted end-to-end (Pass 04: Lenses → Select Lens → Revoke → Confirm → Update).
- Invite People is by name or email with named recipient chips (Pass 05) — the *form* of a named-recipient Invitation (D03-04 row 11), though see §2.1 on the Public lens that sits beside it.

### 1.3 Provenance and visibility labeling (Pass 07)

Pass 07's "Visibility & Provenance" panel prints Owner (Full Access) / Authorized Lens (Limited) / Perspective (Bounded View) and provenance labels "Personal Memory", "Family Account", "Historical Source", "Fictional/Creative" — consistent with the corpus's three-layer discipline (Historical Record / Human Memory / Immersive Reconstruction — connected, never confused) and with labeling rather than hiding (compare B-17's rule for the pilot: PROPOSED/WITNESSED material must be *absent* from a Perspective, not labeled-and-hidden; Pass 07's labels are owner-side journal labels, not visitor-side provenance disclosures, and are conformant in that position).

### 1.4 The boards flag their own open questions — credited explicitly

- **Pass 05** lists as **Pending**: "Q-09 field-level disclosure schema" and "Q-01/D-34 confirm vs. boost policy".
- **Pass 06** "Status & Gates" lists: "Contribution & provenance — Pending (Q-09)" and "Implention [sic] persistence — Pending (Q-21)".
- **Pass 09** states: "All publication and licensing are proposal concepts pending legal and Founder authorization."

These flags are exactly the discipline the Charter (§4) requires: deferred capabilities labeled, open questions named rather than silently settled. They are a material reason this package can mirror the boards without the package itself misrepresenting scope.

### 1.5 Community self-limitations (Pass 08)

Pass 08's printed notes state: "Community participation is optional, never required."; "Contributions are labeled by type and provenance."; "Each World retains an owner and permission model (World → Lens → Perspective)."; "Social discovery is recommendation-driven and user-controllable." The owner-and-permission-model note conforms to D03-04 rows 1 and 3. (The feed/follow mechanics depicted on the same board are assessed separately in §2.3 — the note and the mechanics coexist on the board; the annex credits the note and flags the mechanics.)

### 1.6 Canonical naming

Every board presents the product as **SEE MY WORLD** with the tagline "Your World · Your Lens · Your Perspective" — conformant with the canonical-name rule (D03-04 row 26; Charter §5). No board uses PARAVEX at all (see D03-08 §5 for the resulting deliverable gap, which is a charter-definition gap, not a board defect).

---

## 2. What exceeds Stage 03 authorization — flagged, not adopted

### GX-01 — Public Perspective as a standard lens — **Blocking**

**Depicted:** Board 00 Lenses panel lists "**Public** — Open to everyone" as a standard lens row. Pass 04 Lens Manager lists "Public Perspective — Curated view • Read-only". Pass 05 Lens Manager lists "Public Perspective — A curated view for everyone" with **412** members, status **Active**, and the mobile Create Lens flow offers "Public (Everyone)" as an audience choice.

**Governing record:** OQ-8 (adopted, A-42 line of record; D03-04 row 11): the audience for the slice is a **named-recipient Invitation only, never a public link**. B-02 records anonymous opening (CORE-VIS-02) as **Deferred — pending separate Founder reconciliation and authorization (G-17)**: "named-recipient binding is the only accepted access model." D03-04 conflict C-7 records that the corpus's public-link policy exists in the Bible but must not be presented as available in slice scope.

**Assessment:** A public, everyone-addressable Perspective is not a design variant of the accepted model; it is the deferred capability itself, depicted as a standard, active object with a member count. Under Charter §4 a deferred capability may be illustrated only when clearly labeled conceptual; the boards do not label it so. **Disposition: Founder decision required.** The G3 gate cannot accept this element as product scope; accepting the *boards as design material* does not adopt it.

### GX-02 — Follow mechanics on the visitor view — **Material**

**Depicted:** Pass 04 Perspective (visitor view) carries a "**Follow**" button; Pass 08's journey includes "Connect (Follow, Invite, Join)" and a "People to Follow" discovery tab.

**Governing record:** The accepted model knows Invitations and grants (D03-04 rows 11–13), not subscriptions to a person or World. B-12: views are not endorsements; visitor behavior never testifies. A persistent Follow creates an ongoing, audience-side relationship object the accepted record does not define, and a standing channel by which future Perspectives would reach an audience without a per-Publication explicit owner action (B-16: each Perspective stands on its own grant; silence is not consent).

**Assessment:** Flagged for Founder disposition with GX-01/GX-06; the three together describe a public-audience product the accepted record has not authorized.

### GX-03 — Creator Marketplace — **Blocking**

**Depicted:** Pass 09 in full: "Marketplace — Discover & Experience" with Featured / New Releases / Top Rated / By Genre tabs and priced-attention cards; a Publishing Workflow ending in "Publish (Go Live)"; "Submission Queue (3)".

**Governing record:** Charter §4 explicit exclusions: Stage 03 does **not** authorize "creator marketplaces". A-71 records the same conflict at intake, noting the open §129 founder decisions (Continuation 13: streaming strategy, first creator category, monetization rollout) remain undecided.

**Assessment:** The board itself carries the correct status line — "All publication and licensing are proposal concepts pending legal and Founder authorization" (§1.4) — so the board is honest design material; but the capability is squarely outside Stage 03 authorization. **Disposition: Founder decision required (outside the G3 gate's power to grant).** This package documents the design; it does not adopt a marketplace in any degree.

### GX-04 — Subscription tiers and monetization — **Blocking**

**Depicted:** Pass 09 "Subscriptions & Access": Explorer (Free), Voyager (**$4.99/mo**), Architect (**$9.99/mo**) with feature gates including "Publish & Monetize"; "Monetize Your Work — Subscriptions, access passes, and more."; Creator Analytics with revenue figures.

**Governing record:** Monetization rollout is one of the three open §129 founder decisions; the Charter authorizes no monetization in Stage 03, and no pricing decision exists in the register.

**Assessment:** Prices, tier names, and feature gates are depicted example content with no more standing than the boards' other numbers (§4) — but presenting a priced tier ladder as designed product scope pre-empts an open founder decision. **Disposition: Founder decision required (§129 track), not a G3 gate item.**

### GX-05 — Third-party IP licensing depicted as product content — **Material**

**Depicted:** Pass 09 Publishable Worlds includes "Interview with the Vampire Universe — Licensed IP — In Review" and "Stephen King — The Expanded Universe — Curated Universe — Development"; Pass 06's example journey is "Interview with the Vampire — The Ann Rice [sic] Universe"; Pass 08 discovery includes "Dracula's World".

**Governing record:** No licensing, rights-clearance, or third-party-IP decision exists in the accepted record; the Charter (§5) restricts even the project's *own* candidate brand from registration/launch steps. Pass 09's own note (§1.4) marks licensing as a proposal concept pending legal and Founder authorization.

**Assessment:** As illustrative content these are the boards' examples; as product scope they would require rights decisions that have not been made. Flagged so the gate record is explicit that depicting a licensed universe confers no rights position. **Disposition: Founder decision required (legal/rights track).**

### GX-06 — Social discovery feed and follow graph — **Blocking**

**Depicted:** Pass 08: "Friend Activity" feed with like/comment counts and a "View Feed" action; World Discovery tabs "For You / Trending / New Worlds / People to Follow"; Groups & Circles with member counts; Messages; Community Events; a "Community Contributions Map" with live-activity metrics.

**Governing record:** Charter §4 explicit exclusions: Stage 03 does not authorize "**a generalized public feed**". The accepted visitor model is a finite visit to a compiled Perspective under a named grant (D03-04 row 6), not a feed of others' activity. B-12 (views are not endorsements; visitor behavior never testifies) sits uneasily with like/comment counts as depicted social proof, though counts are not, in themselves, testimony.

**Assessment:** Pass 08's own note ("Social discovery is recommendation-driven and user-controllable") moderates but does not cure the conflict: a friend-activity feed plus a follow graph plus trending discovery is a generalized public feed in structure. **Disposition: Founder decision required.** Not adoptable at the G3 gate.

### GX-07 — Contributor reputation — **Material**

**Depicted:** Pass 08 Moderation & Trust includes "Contributor Reputation"; the social journey ends "Build Reputation (Trusted Contributor)".

**Governing record:** Charter §4 excludes "personality inference" and "relationship scoring". Reputation scoring of contributors is not literally either, but it is an adjacent computed standing about a person, and D03-04 row 17 prohibits presenting system-computed measures as facts about a person in the Worldprint context.

**Assessment:** Flagged as adjacent-to-exclusion. Whether any reputation system may exist, and what it may be computed from, is a Founder decision; nothing in the accepted record authorizes one. **Disposition: Founder decision required.**

### GX-08 — Collaborative and shared worlds; contribution into shared era worlds — **Material**

**Depicted:** Pass 08 "Collaborative Worlds" (The 1960s Project — "A growing, community-built era.", Open; Mythic Realms, Open) with a "Contribute to a World" action chain; Pass 06 Living Era detail offers "+ Add a Memory" and "Contribute Media" into "The 1960s — A Living Era", with a Community Contributions list.

**Governing record:** A World is owned by exactly one owner and changes only through owner testimony (D03-04 row 1). Era Worlds and the Living Memory Network are corpus concepts (Bible Parts XIV–XVII), and Pass 06's own status panel holds "Contribution & provenance — Pending (Q-09)". Multi-party contribution into a shared world is a different ownership model from the accepted one and is not Stage 03 scope.

**Assessment:** Flagged. The designs are corpus-faithful as *vision* material; they are not the accepted Stage 02/03 product model. **Disposition: Founder decision required; contribution mechanics remain gated on Q-09 in any case (as Pass 06 itself states).**

### GX-09 — World-scale metrics presented in product chrome — **Note** (see §4)

The scale numbers on Passes 06, 08, 09 and the Insights figures on Board 00 are illustrative fiction. They are flagged here and in §4 so that no later document cites them as product claims (Charter §2: a simulated capability shall not be represented as implemented; B-20: no scale claims beyond scope).

---

## 3. Terminology deviations against D03-04 v1.1

### GX-10 — "Territory" presented as the owner's world geography — **Material**

**Depicted:** The Atlas maps (Board 00, Pass 04) present seven named Territories as the structure of "Bobby's World", with a Studio that adds landmarks, paths, regions, and decorations to them, and counts ("7 Territories") in the product chrome.

**Governing record:** D03-04 row 8: in the adopted slice scope, "Territory" is a **provisional visual term only** — a grouping inside the owner's World that "creates no Atlas geography" and is "not an Atlas entity in its own right"; owners never create Atlas geography (conflict C-1 records the three coexisting usages).

**Assessment:** The boards use the word in its strongest corpus sense (named world geography the owner builds on), not the adopted provisional sense. The deviation is presentational rather than semantic-invention — the Bible's Atlas sense exists (Ch. 10) — but interface language in Stage 03 scope must follow the adopted disposition. **Disposition: Founder/Design-Lead disposition at the gate** (retain boards as design material; specification language keeps row 8's provisional qualification).

### GX-11 — "Studio" depicted in the Presentation-Studio sense — **Material**

**Depicted:** Studio (Board 00, Pass 04) is a world *builder*: terrain, landmarks, biomes, decorations, style, effects, audio, theme application.

**Governing record:** D03-04 row 7 and conflict C-2: in Stage 02/03 slice scope, Studio is the **correction/authoring surface only** (the testimony write path); the Presentation Studio (Bible Ch. 44) is the excluded second referent.

**Assessment:** The boards' Studio is referent (ii). No board depicts the correction surface (BOOST/REDUCE/REJECT/KEEP_WATCHING under testimony-v1, B-15) at all — a coverage observation as much as a deviation: the accepted product's only write path is undesigned in this material, while an excluded referent is designed in detail. **Disposition: Founder decision required** (whether G3 scope includes Presentation-Studio design as conceptual material, and when the correction surface gets its design pass).

### GX-12 — "Explore / Explorer" blends the two surfaces — **Material**

**Depicted:** Explore (Board 00, Pass 04) and Explore Living Worlds (Pass 06) combine owner-side browsing with discovery of *other people's* public worlds, eras, and perspectives in a single surface and a single search field ("Search worlds, eras, people, or topics…").

**Governing record:** D03-04 row 6 and conflict C-3: Explorer names two surfaces (owner exploration; authorized visitor Perspective experience) under **separate access rules**, and the surface must always be distinguished; B-02 bars any existence signal to an uninvited party.

**Assessment:** A unified discovery surface presupposes the public/discoverable world model of GX-01/GX-06. Within the accepted model, only the owner-exploration half of the depicted Explore is in scope. **Disposition: Founder decision required** (with GX-01/GX-06).

### GX-13 — "Connections" as a primary product noun — **Note**

**Depicted:** "Connections" is a top-nav item (Board 00, Pass 04), a Lens permission row ("Connections (Visible, No Edit)", Pass 05), a metric ("732K Connections"), and a Journal-adjacent concept ("Connection created — Niece • Soccer", Board 00 activity).

**Governing record:** "Connections" is not a D03-04 crosswalk term. In the permission-matrix position it appears to mean the owner's people/links being visible within a Perspective; in the nav position it means a social graph (Pass 08). One word, two referents — the same failure mode as conflicts C-2/C-3.

**Assessment:** Recorded so that future specification work defines the term before use. **Disposition: terminology decision for the Founder/Design Lead; no gate block.**

### GX-14 — Insights "Your Top Interests" percentages — **Material**

**Depicted:** Board 00 Insights: "Your Top Interests — Nature 32%, History 24%, Art 18%, Animals 14%, Literature 12%".

**Governing record:** D03-04 row 17: there is **no "confidence"**; no system-computed probability about the owner may be presented, and strength "must never be labelled or paraphrased as 'confidence,' probability, certainty, importance, or inferred significance (prominence is not importance, CORE-PW-07)". The crosswalk's cross-cutting note prohibits the word and its synonyms for any node field in interface copy.

**Assessment:** Percentage shares of *activity* (entries, views) could in principle be owner-visible descriptive statistics; presented as "Your Top Interests" with percentage bars, the panel reads as a computed profile of the owner's interests — the presentation the record prohibits. The boards do not state what the percentages are percentages *of*. **Disposition: Founder/Privacy disposition required** before any Insights surface is specified further; at minimum the measure must be defined as the owner's own testified material or removed.

### GX-15 — WCAG version text — **Note**

Board 00 prints "WCAG 2.1 AA compliant"; Passes 04/05 and the Charter use 2.2 AA, and "compliant" claims a tested status no board can confer. Recorded in D03-09 §1; correction belongs to source design files. No gate block.

---

## 4. Depicted metrics are illustrative fiction — standing note

The following are board example content. They describe no product, population, or revenue, and must not be quoted as claims in any later document:

- Pass 06 World Pulse: "18,427 Worlds · 2.9M Memories · 732K Connections · 11.4K Active Contributors".
- Pass 08: group member counts (6,780 / 4,902 / 3,215 / 2,466), event attendances (428 / 312 / 184), map "Live Activity" (18,427 Worlds; 3.6M Contributions; 732K Creators; 1.2M Connections), like/comment counts.
- Pass 09: "68.4K Visitors", "$1,284 (30 Days)", analytics (68,427 Views; 8,943 Visitors; $1,284 Revenue; 4.8 Avg Rating), marketplace counts (128K / 71K / 22.8K / 195K), tier prices ($4.99/mo, $9.99/mo — see GX-04).
- Pass 05: lens member counts (28 / 12 / 412 / 36) — the 412 belongs to GX-01.
- Board 00 / Pass 04: Insights figures, ratings (★ 4.7–4.9), territory connection counts (which also disagree between boards: 12 vs 24 Connections; 4 vs 6 Lenses).

---

## 5. The G2 gap — stated for the gate record

- G2 (Charter §6, weeks 3–4) requires **D03-05** (responsive low-fidelity wireframes) and **D03-06** (error, denial, expiry, revocation, and quarantine state designs).
- **Neither deliverable has ever been produced. G2 has never been assigned** (A-57; A-70; A-71). The G1 package was accepted for its bounded scope with G2 expressly not granted.
- The boards in this package are **high-fidelity design development** produced under the Founder's separate A-70 authorization. They are not wireframes, are not low-fidelity, and were not produced under a G2 assignment.
- Specific non-backfill, for the record: no board depicts a **quarantine** state (B-05), an **expiry** state, or the generic-denial presentation (B-04) as designed states; the "Restricted" depictions (Board 00 interface-state row; Pass 05 Perspective States) are adjacent but are not D03-06 state designs.
- **This package does not backfill G2**, and G3 gate acceptance — if the Founder grants it — would not retroactively constitute G2 approval. The Founder's gate decision should record G2's disposition expressly (assign, defer, or formally re-sequence), because the Charter's gate order (§6) otherwise leaves Stage 03 with an unclosed gate behind an accepted one.

---

## 6. Flag register (summary)

| ID | Item | Board(s) | Governing source | Severity | Disposition |
|---|---|---|---|---|---|
| GX-01 | Public Perspective as standard lens | B00, P04, P05 | OQ-8; D03-04 row 11, B-02, C-7 | Blocking | Founder decision |
| GX-02 | Follow mechanics | P04, P08 | D03-04 rows 11–13; B-12, B-16 | Material | Founder decision |
| GX-03 | Creator Marketplace | P09 | Charter §4 exclusions; §129 open | Blocking | Founder decision (outside gate) |
| GX-04 | Subscriptions / monetization | P09 | §129 open; no pricing decision | Blocking | Founder decision (§129 track) |
| GX-05 | Third-party IP licensing depicted | P06, P08, P09 | No rights decisions; Charter §5 by analogy | Material | Founder decision (legal track) |
| GX-06 | Social discovery feed / follow graph | P08 | Charter §4 (no generalized public feed) | Blocking | Founder decision |
| GX-07 | Contributor reputation | P08 | Charter §4 exclusions (adjacent); D03-04 row 17 | Material | Founder decision |
| GX-08 | Collaborative/shared worlds; contribution into shared eras | P06, P08 | D03-04 row 1; Q-09 (per P06 itself) | Material | Founder decision |
| GX-09 | Scale metrics in product chrome | B00, P06, P08, P09 | Charter §2; B-20 | Note | Recorded (§4) |
| GX-10 | "Territory" in Atlas sense | B00, P04 | D03-04 row 8, C-1 | Material | Gate disposition |
| GX-11 | "Studio" as Presentation Studio; correction surface undesigned | B00, P04 | D03-04 row 7, C-2; B-15 | Material | Founder decision |
| GX-12 | Explore blends owner/visitor surfaces | B00, P04, P06 | D03-04 row 6, C-3; B-02 | Material | Founder decision |
| GX-13 | "Connections" undefined, two referents | B00, P04, P05, P08 | D03-04 (absent term) | Note | Terminology decision |
| GX-14 | Insights "Top Interests" percentages | B00 | D03-04 row 17; "confidence" prohibition | Material | Founder/Privacy disposition |
| GX-15 | "WCAG 2.1 AA compliant" text | B00 | Charter §9 (2.2 AA); D03-09 §1 | Note | Source-file correction |

**Net position for the gate:** the boards are strong, largely model-faithful design material for the *owner-side* product (World, Studio-as-builder, Journal/Memory, Lens mechanics), and they flag their own deepest opens honestly. They also depict, as standard product scope, a public-audience and commercial layer (GX-01, GX-03, GX-04, GX-06) that the accepted record has excluded or left undecided. The G3 gate decision can accept the design system (D03-07), the motion/accessibility specification (D03-09), and the identity material (D03-08, partially) while expressly **not** adopting the flagged scope — but only if the decision says so item by item. A blanket acceptance would, by silence, adopt what the Charter excludes; this annex exists so that does not happen by accident.

---

*End of G3-CONFORMANCE-ANNEX v1.0 — Draft for Founder review — E1 — G3 gate acceptance pending.*
