# SEE MY WORLD — Stage 03 — G3 Screen Systems and Flows (Supporting Volume)

> **Document ID:** G3-SCREEN-SYSTEMS-AND-FLOWS · **Version:** 1.0 · **Owner:** Design Lead (package assembly) · **Status:** Draft for Founder review — E1 — G3 gate acceptance pending · **Associated requirements:** Stage 03 Charter A-51 (§§4, 6 G3, 7); D03-02 v1.1 (G1 screen inventory — the governing inventory this volume *illustrates at high fidelity* but does not replace); D03-04 v1.1 · **Verification method:** author transcription and self-check against the seven filed design boards (E1) · **Review decision:** Pending (Founder, G3 gate).

**Evidence discipline.** Author-produced, self-checked work — **E1** (Charter A-51 §10). This volume mirrors the boards faithfully: it adds no screens, redesigns nothing, and improves nothing. All names, counts, ratings, dates, and content shown on the boards are **depicted example content**, not product data, not metrics, and not claims. Scope conformance of each system against the accepted record is assessed **only** in G3-CONFORMANCE-ANNEX.md; this volume describes what is depicted.

**Board key.** B00 = design-system overview board · P04 = Pass 04 experience suite · P05 = Pass 05 Lens/permissions · P06 = Pass 06 Living Experience · P07 = Pass 07 Memory Universe · P08 = Pass 08 Social Universe · P09 = Pass 09 Creator Economy.

---

## 1. Welcome / entry

**Boards:** B00 (desktop splash, mobile home).

- **Desktop welcome:** full-bleed illustrated hero (castle city, waterfalls, sunset). Centered compass-star, wordmark, tagline. Greeting "Welcome, Bobby"; line "Every story starts with a place. What will you create?" Actions: **Enter My World** (primary), **Explore Worlds**, **Learn More**.
- **Mobile home:** wordmark; "Good evening, Bobby"; "Where will your curiosity take you today?"; search field ("Search worlds, places, people…"); six-tile grid (Explore, My World, Studio, Journal, Connections, More); "Featured World — Hidden Harbors: Solitude and reflection."; bottom navigation (Home, Map, Library, Profile).

## 2. Atlas — My World (home dashboard)

**Boards:** B00 (desktop + right rail), P04 panel 1.

- **Layout:** left rail (My World, Territories, Lenses, Perspectives, People, Memories, Media, Insights, Settings; "Your World — Create. Share. Inspire." card at rail foot on B00); center world map; right rail (Current World, Recent Activity, World Pulse).
- **Map:** illustrated territories joined by glowing connection lines; compass rose; zoom +/− and "3D" controls; footer counts as depicted ("7 Territories • 12 Connections • 4 Lenses" B00; "7 Territories • 24 Connections • 6 Lenses" P04 — the two boards disagree; both are depicted example numbers).
- **Territories depicted (both boards, substantially the same set):** Memory Isles (Personal), Creative Realm (Projects), Horizon (Places), The Archive (Stories), Sanctuary (Animals), The Workshop (Ideas), and a seventh rendered "The Hostory" [sic] (Adventures) on B00 / "The Hostory" (P04). Labels transcribed as rendered.
- **Right rail:** "Current World — Bobby's World: A place for ideas, stories, animals, and the people I care about." with **Manage World**; Recent Activity list ("New memory added — Sunset at Siesta Key, 2 hours ago"; "Connection created — Niece • Soccer, 5 hours ago"; "New perspective — The Quiet Shelter, Yesterday"); **World Pulse** waveform, "Your world is evolving."

## 3. Studio — World Builder

**Boards:** B00 (phone-width panel), P04 panel 2, P04 mobile frames.

- **Tabs:** Design / Content / Connections / Preview (P04); B00 phone variant: Map / Media / Style / Settings.
- **Tool rail:** Terrain, Landmarks, Nodes, Paths, Biomes, Style, Effects, Audio, Save (P04); B00 variant: Terrain, Landmarks, Paths, Regions, Decorations, Upload.
- **Canvas:** editable illustrated map with nodes and an "Add Landmark" affordance; terrain-style thumbnail strip.
- **Style panel:** four terrain-style cards (two legibly named: "Emerald Isles", "Midnight Atlas"); sliders "Node Glow 65%", "Atmosphere 72%", "Motion"; **Apply Theme**.
- **Footer actions:** Preview, Save.

## 4. Lens Manager and Share Perspective

**Boards:** B00 (Lenses phone panel), P04 panel 3, P05 (full board).

- **B00 Lenses panel:** heading "Lenses — Control what others can see." Tabs: My Lenses / Shared With Me. Rows: **Public** ("Open to everyone"), **Friends** ("People I choose"), **Family** ("Close connections"), **Custom** ("Time, location, or access") — each with View. **Create New Lens** button.
- **P04 Lens Manager:** rows: Private (Only Me); Family & Close Friends ("Selected people • 12"); Creative Circle ("Collaboration • 28", selected); Public Perspective ("Curated view • Read-only"). **+ New Lens.** Lens Details card (Creative Circle): "Selected territories (5)", "Approved media", "Journal (selected)", "Comments (on)", "Private notes (off)"; **Edit Lens**; **Preview Perspective →**.
- **P05 Lens Manager:** rows with member counts and status chips: Creative Circle (28, Active), Family & Close Friends (12, Active), Public Perspective ("A curated view for everyone", 412, Active), Private (Only Me) (1, Default), Read-Only Archive (36, Paused). **+ Create Lens.**
- **P05 Lens Details — Creative Circle:** tabs Permissions / Territories / Preview / Activity. Permission toggles: Territories (with per-territory checkboxes — The Workshop on, Creative Realm on), Journal & Entries, Media (Photos, Videos, Audio), Memories & Collections, Connections (Visible, No Edit), World Structure (Layout & Design) — "View Only" select, Comments & Reactions.
- **P05 Permission Matrix (example):** content-type rows × Private / Family / Creative / Public columns with check, "View", "View Only", or empty cells (full transcription in D03-07 §4.6).
- **P05 Perspective Preview:** rendered visitor view ("Bobby's World — Creative Circle Perspective") with carousel arrows; **Visibility Summary**: "2 Territories (The Workshop, Creative Realm)", "Journal Entries — Included", "Media — Included", "Comments — Allowed"; **Open Full Preview**.
- **P05 Share Perspective:** 4-step stepper (1 Lens, 2 People, 3 Message, 4 Confirm); lens radio choices (Creative Circle / Family & Close Friends / Public Perspective); **Next: Choose People →**. Phone frames complete the flow: Create Lens (audience choices: Personal (Only Me), Family & Close Friends, Creative Circle (Collaborators), Public (Everyone)); Set Permissions (toggles); Invite People ("Add people by name or email", recipient chips, optional message — depicted text: "I'd love for you to explore my Creative Circle perspective.", **Send Invites**); confirmation "Perspective Shared! — Your Creative Circle Lens is now active for 3 people." with View Activity / Manage Lens.
- **P05 Perspective States:** Owner View (Full Access) / Authorized View (Lens Perspective) / Restricted (Not Authorized) — see D03-07 §7.
- **P05 Key Design Specifications** (printed on the board; quoted in the conformance annex): World → Lens → Perspective enforcement; server-side disclosure; explicit permission controls; preview before sharing; revocation with immediate access removal; audit log; accessibility; responsive; and two **Pending** flags — "Q-09 field-level disclosure schema" and "Q-01/D-34 confirm vs. boost policy".

## 5. Perspective — visitor view

**Boards:** P04 panel 4; P05 Perspective Preview and states (§4).

- **P04 visitor view:** hero art; "Bobby's World — A curated perspective"; **Follow** button and overflow menu; territory chips (The Archive — Stories; Horizon — Places; Sanctuary — Animals; Creative Realm — Projects).
- The visitor sees the compiled Perspective only; the three-state model (Owner / Authorized / Restricted) is P05 §4 above.

## 6. Journal & Memories

**Boards:** B00 (Journal phone panel), P04 panel 5, P07 (Journal, Life Timeline, Media Library, Soundtrack, Memory Map, Memory Detail).

- **Journal:** tabs All / Photos / Notes / Reflections (B00); P04 adds left rail (Journal, Timeline, Entries, Collections, Media, Tags) and **New Entry**. Entry cards as depicted: "Sunset at Siesta Key — Nov 20, 2026"; "Gizzy — My little guy" (P04) / "Gizzy — Eight Years: My little traveler, my constant…" (P07); "Niece's Game — Nov 15, 2026" / "Game Day — North Port Fusion, Nov 15, 2026"; "The Marble Guy — Work in progress" / "A day on the job, Nov 10, 2026". Heart/comment counts depicted.
- **P07 Journal list variant:** tabs All Entries / Reflections / Ideas / Dreams / Drafts; entries incl. "The Quiet Shelter — Some places don't just calm you… — Nov 20, 2026" (starred).
- **Life Timeline (P07):** decade cards — 1983 (Beginnings), 1990s (Growing Up), 2000s (Service & Care), 2010s (Craft & Creation), 2020s (A New Chapter) — on a connected node track; view toggles Timeline / Map View / List View.
- **Media Library (P07):** "Photos, videos, audio, and keepsakes." — six-thumbnail grid with media-type icons.
- **Soundtrack of My World (P07):** "The music that moves your story." Player (track "Tidal Drift — Hollow Year", Ambient tag, 2:14 / 6:37 as depicted), track list (Tidal Drift 6:37; Before the Fire 4:21; Glass Horizons 5:08; Siesta Key Nights 3:57), **+ Add Song**.
- **Memory Map (P07):** "Your memories, mapped in space and time." Island map with pins; selected card "Siesta Key — Nov 20, 2026".
- **Memory Detail (example) (P07):** "Siesta Key Sunset — Nov 20, 2026 — Sarasota, FL"; body text as depicted; tags Peace / Reflection / Florida / Sunset; **+ Add Tag**; Edit.
- **My Memory Universe hero (P07):** "The places, people, moments, and stories that made you." Actions: **+ New Entry**, **Revisit a Memory**.
- **Life Constellation (P07):** "A living map of your memories, connections, and themes." — radial graph (Family center-top; People, Places, Travel, Music, Passion, Challenges, Growth satellites). Motion treatment specified in D03-09 (MO-04).
- **People & Family (P07):** "The people who shape your world." Cards: Mom (Family), Jordan (Brother), Niece (Inspiration), Gizzy (Companion); **Add Connection**; **Family Tree — View All**; **+ Add Person**.

## 7. Explore / Explorer — discovery

**Boards:** B00 (Explore phone panel), P04 panel 6, P06 (Explore Living Worlds).

- **B00 Explore:** search ("Search territories, people, interests…"); tabs Featured / Trending / New / Categories; cards: Northern Lights ("Nature • Beauty • Wonder"), Ancient Ruins ("History • Adventure • Discovery"), Hidden Harbors ("Solitude • Reflection"), Creative Minds ("Art • Innovation • Inspiration") with depicted ratings/coverage percentages.
- **P04 Explorer:** heading "Explore — Discover worlds, eras, people, and perspectives." Search; filter chips (Featured, History, Literature, Mythology, Education, Fiction, Real Worlds); cards The Lost City (★ 4.9), Northern Lights (★ 4.8), Hidden Harbors (★ 4.7) as depicted.
- **P06 Explore:** see §8.

## 8. Immersion — Living Worlds

**Boards:** B00 (Immersion phone panel), P04 panel 7, P06 (full board).

- **B00/P04 Immersion:** "Step into living worlds." Category tabs (All / History / Literature / Education / Fantasy on B00; rail on P04: All Experiences, Historical Eras, Literary Worlds, Mythic Realms, Educational, User Creations). Cards: The Lost City ("An ancient world awaits.", **Enter**), The Northern Lights ("A journey through the Arctic"), The Great Library ("Knowledge has many forms"); P04: The 1960s, Ancient Greece, The Vampire Chronicles.
- **P06 Explore Living Worlds:** hero with search ("Search worlds, eras, people, or topics…"); **Today's Journeys** (The 1960s; Ann Rice [sic] Universe; Greek Pantheon); **World Pulse** panel with depicted scale metrics ("18,427 Worlds; 2.9M Memories; 732K Connections; 11.4K Active Contributors") and "See What's Growing →".
- **Featured World Collections (P06):** Historical Eras ("Live the moments that shaped our world."), Literary Universes ("Explore the worlds of beloved authors."), Mythology & Pantheons ("Greek • Norse • Egyptian • Santeria • Vodou • More"), Education & Learning ("Interactive history, culture, science, and ideas."), Community Memories ("Real people, real stories, shared across generations."), Creator Worlds ("Original worlds from our community.").
- **Living Era detail (P06):** "The 1960s — A Living Era: Music, protest, freedom, and a world in transition." Tabs Overview / Stories / Timeline / People / Media. Actions: **Enter Era**, **+ Add a Memory**, **Contribute Media**; side actions: Upload Photos, Add a Song, Write a Memory, Mark a Place, Share Your Perspective. **Community Contributions** list ("My First Concert" by Jordan K.; "Summer of '67" by Casey M.; "A Different World" by Alex M. — depicted).
- **Immersive Experience — Beta Concept (P06):** scene viewer with directional controls and pins; modes: Explore Freely, Guided Story, Learn & Discover, Contribute.
- **Example Journey: Literary Universe (P06):** "Interview with the Vampire — The Ann Rice [sic] Universe"; chips Characters / Locations / Timeline / Themes / Community; **Enter World →**.
- **Education Mode (P06):** checklist (Interactive Lessons, Primary Sources, World Context, Discussion Prompts, Creative Projects); **Start a Learning Journey →**.
- **Experience Modes (P06):** Explore (Discover), Create (Build), Learn (Understand), Share (Contribute), Immerse (Experience).
- **Status & Gates (P06, printed):** "Visual design & flows — Draft Complete"; "Work, Curate, Lens & Perspective — Designed"; "Contribution & provenance — Pending (Q-09)"; "Implention [sic] persistence — Pending (Q-21)".

## 9. Community — Social Universe

**Boards:** B00 (Community phone panel), P08 (full board).

- **B00 Community:** "Real people. Shared perspectives." Tabs Connections / Groups / Events; person rows (Alex M. — Explorer • Photographer; Taylor R. — Writer • Dreamer; Jordan K. — Nature Lover • Adventurer; Sam P. — History Buff • Researcher; Casey L. — Artist • Creator).
- **P08 The Social Universe:** hero ("Discover people, share perspectives, and build worlds together."; **Discover Worlds**, **See How It Works**). Left rail adds Messages, Notifications (badge "3"), Events, Groups, Collections, Library.
- **Your Connections:** Jordan (Brother), Casey M. (Explorer), Alex M. (Creator), Leila M. (Historian); Add.
- **Friend Activity** feed: "Casey M. added a memory to The 1990s: Summer of '97 — 2h ago" (24 likes, 8 comments as depicted); "Alex M. contributed to Ancient Greece: The Agora — 4h ago" (56, 12). "View Feed".
- **World Discovery:** tabs For You / Trending / New Worlds / People to Follow; cards The 1980s (★ 4.9), Dracula's World (★ 4.8), Ancient Egypt (★ 4.9), The Lost City (★ 4.7) with depicted member counts.
- **Collaborative Worlds:** The 1960s Project ("A growing, community-built era.", Open), Mythic Realms (Open), Frankenstein & Beyond ("A literary universe in expansion.", Invite).
- **Contribute to a World:** Add Media → Write a Story → Mark a Place → Connect a Memory → Collaborate (Optional); **+ Contribute Now**.
- **Groups & Circles:** History Enthusiasts (6,780), Vesper University (Fans) (4,902), Creative World Builders (3,215), Family History Collective (2,466) as depicted.
- **Messages:** conversation list with unread badges (Casey M., Leila M., Alex M., Jordan as depicted).
- **Community Contributions Map:** world map with glowing nodes; "Live Activity" metrics as depicted (18,427 Worlds; 3.6M Contributions; 732K Creators; 1.2M Connections).
- **Community Events:** 1960s Film Night (Nov 28, 2026 • 8:00 PM, 428), Mythology Roundtable (Dec 2, 2026 • 7:00 PM, 312), Vesper Readers Circle (Dec 5, 2026 • 8:00 PM, 184) as depicted.
- **Moderation & Trust:** Community Guidelines; Content Review (Human + AI); Provenance & Source Labels; Dispute Resolution; Privacy & Safety Controls; Contributor Reputation.
- **Key Design Notes — Pass 08 (printed):** "Community participation is optional, never required."; "Contributions are labeled by type and provenance."; "Each World retains an owner and permission model (World → Lens → Perspective)."; "Moderation protects people, communities, and historical integrity."; "Social discovery is recommendation-driven and user-controllable."

## 10. Insights

**Boards:** B00 (Insights phone panel).

- Tabs Overview / Growth / Connections. Metrics as depicted: Total Views 2,843 (↑12%), New Connections 156 (↑28%), Territories 7 (↑17%), Memories 48 (↑32%). "Your Top Interests" bars: Nature 32%, History 24%, Art 18%, Animals 14%, Literature 12% (depicted example values).

## 11. Creator Hub — Creator Economy & Marketplace

**Boards:** P09 (full board).

- **Hero:** "The Creator Hub — Turn your worlds, stories, and knowledge into immersive experiences for others." Actions: **+ Create a World**, **Publish or License**.
- **Action list:** Publish a World ("Share an original world or series."); License a Property ("Bring existing IP into SEE MY WORLD."); Create an Educational World ("Build curriculum and learning experiences."); Monetize Your Work ("Subscriptions, access passes, and more.").
- **Creator Status:** "Verified Creator"; "Creator Tier: Architect" on a Builder → Creator → Architect → Partner track; depicted counts (12 Published Worlds, 4 Active Series, 68.4K Visitors, $1,284 (30 Days)).
- **Publishable Worlds:** tabs My Creations / Licensed IP / Public Domain / Collaborations. Cards: A Higher Education — Vesper Universe ("Original Series", Published); Interview with the Vampire Universe ("Licensed IP", In Review); Stephen King — The Expanded Universe ("Curated Universe", Development); Greek Pantheon — Mythic Realms (Mythology, Published); Païe [sic] 1960s — Historical Era (Published).
- **Publishing Workflow:** Create (Build World) → Prepare (Content & Metadata) → Review (QA & Compliance) → Rights (Licensing/Attribution) → Publish (Go Live). Buttons: + New Publication; Submission Queue (3); Publishing Guide.
- **Marketplace — Discover & Experience:** tabs Featured / New Releases / Top Rated / By Genre; cards The Lost City (★ 4.9, 128K), Dracula's World (★ 4.8, 71K), Ancient Egypt (★ 4.9, 22.8K), Vesper University (★ 4.9, 195K) as depicted.
- **Subscriptions & Access:** Explorer (Free — Browse & Discover, Limited Perspectives, Community Access; "Current Plan"); Voyager ($4.99/mo — Full Perspectives, Ad-Free Experience, Create 3 Worlds, Contribute to Collections; "Upgrade"); Architect ($9.99/mo — Unlimited Worlds, Advanced Studio Tools, Publish & Monetize, Early Access Features; "Upgrade").
- **Creator Analytics:** line chart "Last 30 Days"; depicted metrics (68,427 Views ↑18%; 8,943 Visitors ↑24%; $1,284 Revenue ↑31%; 4.8 Avg Rating).
- **Education & Institutions:** image panel; checklist (Curriculum Worlds, Classroom Collections, Historical Reconstructions, Literary Analysis Experiences, Teacher Tools & Assessments); **Build an Educational World →**.
- **Licensing & Rights Management:** IP Integration (Licensed Worlds), Public Domain (Classic Literature), Creator Rights (Your Original Works), Attribution & Provenance, Revenue & Reporting.
- **Creator Tools:** toggles — World Templates, Scene Builder (Immersive), AI Assist (Writing & Design), Collaboration Spaces, Team Permissions.
- **Key Design Notes — Pass 09 (printed):** "Supports original, licensed, and public-domain worlds."; "Creator-driven publishing with review and rights flow."; "Subscription tiers aligned to features and usage."; "Education mode for schools, teachers, and institutions."; "Marketplace for discovery and authorized access."; "Analytics, revenue, and creator growth tools."; **"All publication and licensing are proposal concepts pending legal and Founder authorization."**

## 12. Depicted user flows (end-to-end, as printed on the boards)

| Flow | Source | Steps as depicted |
|---|---|---|
| Create a World | P04 User Flows | Onboard → New World → Studio (Design) → Save |
| Share a Perspective | P04 User Flows | My World → Lens → Configure → Preview → Invite |
| Explore a World | P04 User Flows | Explore → Search/Filter → Select → Perspective View |
| Add a Memory | P04 User Flows | Journal → New Entry → Media → Tag → Save |
| Revoke Access | P04 User Flows | Lenses → Select Lens → Revoke → Confirm → Update |
| Create, Configure, Share | P05 | Create/Edit World → Create a Lens (Audience) → Set Permissions (What they can see) → Preview Perspective → Invite & Share → Confirm & Activate |
| Share Perspective wizard | P05 | 1 Lens → 2 People → 3 Message → 4 Confirm (with phone-frame equivalents: Create Lens → Set Permissions → Invite People → "Perspective Shared!") |
| The Living World Engine (design overview) | P06 | Create World (Owner) → Create Lens (Access Rules) → Generate Perspective (Bounded View) → Invite / Share (Authorized) → Evolve (Memories, Media) |
| Creating a Memory | P07 | Capture (Photo / Video / Audio) → Add Details (Title, Story, Tags) → Connect (People, Places, Era) → Set Visibility (Private / Lens / Perspective) → Preview (How others will see it) → Save to My World |
| Social & Community Experience (overview) | P08 | Discover (Worlds, People, Groups) → Connect (Follow, Invite, Join) → Contribute (Media, Story, Memory) → Collabte [sic] (Authorized Perspective) → Engage (Discuss, Learn, Create) → Build Reputation (Trusted Contributor) |
| Publishing Workflow | P09 | Create (Build World) → Prepare (Content & Metadata) → Review (QA & Compliance) → Rights (Licensing/Attribution) → Publish (Go Live) |
| Visibility & Provenance | P07 (panel, not a flow) | Owner (Full Access) / Authorized Lens (Limited) / Perspective (Bounded View); Provenance Labels: Personal Memory, Family Account, Historical Source, Fictional/Creative |

---

*End of G3-SCREEN-SYSTEMS-AND-FLOWS v1.0 — Draft for Founder review — E1 — G3 gate acceptance pending.*
