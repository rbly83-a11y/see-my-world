# SEE MY WORLD — Stage 03 — Design-Token and Component Specifications

> **Deliverable ID:** D03-07 · **Version:** 1.0 · **Owner:** Design Lead (package assembly) · **Status:** Draft for Founder review — E1 — G3 gate acceptance pending · **Associated requirements:** Stage 03 Charter A-51 (§§4 WS-02, 6 G3, 7 D03-07); D03-04 v1.1 (terminology and boundary statements B-01…B-20) · **Verification method:** author transcription and self-check against the seven filed design boards (E1) · **Review decision:** Pending (Founder, G3 gate).

**Evidence discipline.** This specification is author-produced, self-checked work — evidence level **E1** under Charter A-51 §10. It is not independently verified (E3) and not Founder-accepted (E4). It resolves nothing about **Q-09**, **Q-01/D-34**, or **Q-21**. Where a depicted capability exceeds Stage 03 authorization, this document specifies its *visual* tokens only; scope conformance is assessed separately in G3-CONFORMANCE-ANNEX.md.

**Source boards.** All values are transcribed from the raster design boards filed at `stage-03/design-boards/` (MD5s recorded in G3-PACKAGE-REPORT.md): Board 00 (design-system overview), Pass 04 (experience suite), Pass 05 (Lens/permissions), Pass 06 (Living Experience), Pass 07 (Memory Universe), Pass 08 (Social Universe), Pass 09 (Creator Economy).

---

## 0. Transcription method and confidence legend

The boards are raster images, not source design files. Every value in this specification carries one of three confidence marks:

| Mark | Meaning |
|---|---|
| **[T]** Transcribed | The value is legible on at least one board (verified against a zoomed crop for the color palette) and is recorded exactly as printed. |
| **[T?]** Transcribed, uncertain | A reading was obtained but one or more characters are ambiguous at raster resolution. The reading is given with the ambiguity noted. The exact value is **to be confirmed from source design files**. |
| **[D]** Depicted only | The property is visibly depicted (form, relative size, behavior) but no exact value is printed or legible. Recorded as "depicted, exact value to be confirmed from source design files." No value is invented. |

**A standing discrepancy is recorded, not resolved:** Board 00 and Pass 04 print *different* hex values for the same named palette tokens (see §1.2). Both readings are preserved. Selecting the canonical value is a Founder/Design-Lead confirmation against source design files, listed as an open item in §10.

---

## 1. Color tokens

### 1.1 Primary palette (as printed)

| Token | Role as depicted | Board 00 reading | Pass 04 reading | Confidence |
|---|---|---|---|---|
| **Midnight** | Deepest background / base surface | `#07182S` — final character ambiguous (plausibly `#071829` or `#071825`) | `#0A1226` | [T?] / [T] |
| **Ocean** | Secondary surface / panel blue | `#1B2B4A` | `#1B2B4F` | [T?] both; last digit differs between boards |
| **Amethyst** | Primary accent / primary action violet | `#7458C8` | hex present but not fully legible in crop (label "Amethyst"); visually the same violet family | [T?] / [D] |
| **Gold** | Highlight accent / ratings / identity star | `#DAA65E` | `#DAA65F` (final character uncertain) | [T?] both; last digit differs or is misread |
| **Teal** | Secondary accent / success-adjacent highlight | `#59C5C6` | hex present, not fully legible in crop (label "Teal") | [T?] / [D] |
| **Pearl** | Light text / light surface | `#F6E6DC` | hex present, truncated in crop (begins "FF…" as rendered; plausibly the same Pearl value) | [T?] / [D] |

### 1.2 Discrepancy record (not resolved here)

- Midnight: Board 00 ≈ `#07182x` vs Pass 04 `#0A1226` — materially different values, not a last-digit misread. One of the two boards carries a superseded or erroneous value.
- Ocean: `#1B2B4A` vs `#1B2B4F` — last-digit difference; may be a genuine token revision between passes or a raster misread.
- Gold: `#DAA65E` vs `#DAA65F` — same class of difference as Ocean.
- **Required confirmation:** canonical hex for all six tokens from the source design files, before any implementation or G4 prototype work consumes these tokens.

### 1.3 Functional color usage (depicted)

| Usage | Depicted treatment | Confidence |
|---|---|---|
| Page background | Midnight-family deep navy, near-black at panel edges | [D] |
| Panel / card surface | Ocean-family dark blue with thin lighter border and soft outer glow | [D] |
| Primary button | Amethyst-to-violet gradient fill, Pearl/white label | [D] |
| Selected nav item | Amethyst gradient pill (left rail and tab bars) | [D] |
| Success / saved state | Green check indicator (Pass 04 "Information State Indicators"; Pass 05 specification checklist) | [D] |
| Warning / conflict state | Amber/yellow triangle indicator (Pass 04) | [D] |
| Restricted state | Red/pink badge and lock treatment (Pass 04 badges; Pass 05 "Restricted (Not Authorized)" state card) | [D] |
| Error state | Red-tinted message row (Board 00 "Interface States": "Something went wrong. Please try again.") | [D] |
| Ratings | Gold star + numeric (e.g. "★ 4.8" on the Territory Card specimen) | [T] (the specimen value 4.8 is depicted example content, not a token) |

### 1.4 Gradients (named, as printed)

| Gradient | Printed on | Depicted direction/content | Confidence |
|---|---|---|---|
| **Cosmic** | Board 00, Pass 04 | Violet-to-indigo nebula gradient, used on primary buttons and hero treatments | [T] name; stops [D] |
| **Ocean** | Board 00, Pass 04 | Blue gradient, mid-to-bright blue | [T] name; stops [D] |
| **Sunset** | Board 00, Pass 04 | Orange-to-pink-to-violet gradient, used on hero imagery edges and accent bars | [T] name; stops [D] |
| **Aurora** | Pass 04 only | Teal-to-violet gradient chip | [T] name; stops [D] |

Gradient stop positions and intermediate colors are **not printed** on any board: depicted, exact values to be confirmed from source design files.

---

## 2. Typography

| Token | As printed | Confidence |
|---|---|---|
| Headline family | **Playfair Display** — printed "Playfair Display (Headlines)" (Board 00, Pass 04) | [T] |
| Body / UI family | **Inter** — printed "Inter (Body)" (Board 00), "Inter (Body / UI)" (Pass 04) | [T] |
| Scale labels | "H1 H2 H3" under Playfair Display; "Body Large Small Caption" under Inter (Board 00). Pass 04 shows specimen glyphs "Aa Bb Cc Dd Ee Ff Gg" for both families. | [T] labels |
| Point sizes, line heights, weights | **Not printed on any board.** Depicted hierarchy only (hero headline > panel title > body > caption). Exact values to be confirmed from source design files. | [D] |

Depicted usage: Playfair Display for screen titles and hero headlines ("Welcome, Bobby"; "Explore Living Worlds"; "My Memory Universe"; "The Social Universe"; "The Creator Hub"); Inter for navigation, body copy, labels, metrics, and controls throughout.

---

## 3. Spacing, radius, elevation, layout

No numeric spacing scale, radius value, or elevation specification is printed on any board. The following are **depicted only** [D], exact values to be confirmed from source design files:

- **Corner radius:** large-radius rounded rectangles for panels and cards; full-pill radius for primary buttons, tab bars, and badges; circular avatars and map nodes.
- **Elevation:** panels read as raised surfaces over the Midnight background via a lighter 1px-style border plus a soft colored outer glow (Amethyst/Ocean). Hero panels carry photographic/illustrated headers.
- **Spacing rhythm:** consistent panel gutters across all boards; dense multi-panel grid on desktop boards, single-column stacks on phone frames.
- **Responsive frames:** every board presents desktop, tablet (Pass 04 header toggle: "Desktop / Tablet / Mobile"), and mobile variants of the same systems. Phone frames show a 9:41 status bar and bottom navigation (see §6).

---

## 4. Component library

### 4.1 Buttons

| Component | Depicted form | Source |
|---|---|---|
| Primary Button | Violet (Cosmic) gradient pill, white label ("Enter My World", "Create New Lens", "Save", "Publish or License" outline-pairing) | Board 00 UI Components; Pass 04 Core UI Components |
| Secondary Button | Dark surface pill with light border and label ("Explore Worlds", "Learn More", "Secondary") | Board 00; Pass 04 |
| Outline Button | Transparent fill, bordered pill ("Outline" in Pass 04 Buttons row) | Pass 04 |
| Icon + label buttons | e.g. "+ New Entry", "+ Create a World", "+ Add a Memory", "Contribute Media" | Passes 04, 06, 09 |
| Stepper actions | Numbered step pills 1–4 (Lens / People / Message / Confirm) in the Share Perspective flow | Pass 05 |

### 4.2 Form controls

| Component | Depicted form | Source |
|---|---|---|
| Toggle switch | Pill track with circular thumb, on-state violet; used for permission rows (Territories, Journal Entries, Media, Memories, Connections (View), World Structure) and Creator Tools (World Templates, Scene Builder, AI Assist, Collaboration Spaces, Team Permissions) | Board 00 ("Toggle"); Pass 05 "Set Permissions" phone frame; Pass 09 Creator Tools |
| Dropdown / select | Bordered field with chevron ("Dropdown" Board 00; "World Structure (Layout & Design) — View Only" select, Pass 05) | Board 00; Pass 05 |
| Slider | Track with circular thumb; Studio style controls: "Node Glow 65%", "Atmosphere 72%", "Motion" slider (Pass 04 Studio) | Pass 04 |
| Search field | Rounded field with magnifier icon and placeholder ("Search worlds, places, people…", "Search territories, people, interests…") | Board 00; Passes 04, 06 |
| Checkbox / check row | Green check marks in Lens Details ("Selected territories (5)", "Approved media", "Journal (selected)", "Comments (on)", "Private notes (off)") | Pass 04 |
| Text input (invite) | "Add people by name or email" field with removable recipient chips (Alex Morgan, Jordan Bly, Casey L. as depicted examples) | Pass 05 |

### 4.3 Cards and lists

| Component | Depicted anatomy | Source |
|---|---|---|
| Territory Card | Image header, title, "Description line", gold star rating ("★ 4.8" specimen) | Pass 04 Core UI Components |
| World / experience card | Image header, title, subtitle line (e.g. "Nature • Beauty • Wonder"), metric row (star rating, member/view counts as depicted example numbers) | Board 00 Explore; Passes 04, 06, 08, 09 |
| Journal entry card | Thumbnail, title, date, heart and comment counts as depicted | Board 00 Journal; Passes 04, 07 |
| Lens list row | Thumbnail, lens name, audience description line, member count, status chip (Active / Default / Paused), overflow menu | Pass 05 Lens Manager |
| Person row | Avatar, name, role line ("Explorer • Photographer"), chevron | Board 00 Community; Pass 08 |
| Activity row | Thumbnail, event text ("New memory added — Sunset at Siesta Key"), relative time ("2 hours ago") | Board 00 |
| Event row | Thumbnail, title, date/time, attendee count as depicted | Pass 08 Community Events |
| Message row | Avatar, name, excerpt, relative time, unread badge | Pass 08 Messages |

### 4.4 Badges and status chips

Printed on Pass 04 (Badges row) and used throughout:

| Badge | Depicted treatment | Confidence |
|---|---|---|
| **Owner** | Violet pill | [T] label; color [D] |
| **Shared** | Blue pill | [T] label; color [D] |
| **Public** | Green pill | [T] label; color [D] |
| **Restricted** | Red/pill with lock icon | [T] label; color [D] |
| Status chips on lenses | "Active" (green), "Default" (neutral), "Paused" (amber/neutral) | [T] labels; colors [D] |
| Verification chip | "Verified Creator" pill (Pass 09) — depicted; see conformance annex on scope | [T] label |
| Tier chips | "Current Plan", "Upgrade" buttons on subscription cards (Pass 09) — depicted; scope flagged in annex | [D] |

### 4.5 Map and world components

| Component | Depicted form | Source |
|---|---|---|
| World map canvas | Illustrated island/continent map with glowing connection lines between nodes; compass rose; zoom controls (+/−) and "3D" toggle | Board 00 Atlas; Pass 04 Atlas |
| Map node | Circular icon medallion per territory (e.g. book, house, paw, gear icons) with label beneath ("Memory Isles — Personal", "Creative Realm — Projects", "Horizon — Places", "The Archive — Stories", "Sanctuary — Animals", "The Workshop — Ideas", "The Hostory [sic] — Adventures") | Board 00; Pass 04 |
| Node glow / atmosphere | Adjustable via Studio sliders (Node Glow, Atmosphere, Motion) | Pass 04 |
| Mini-map / thumbnail strip | Vertical terrain-style thumbnails beside the Studio canvas; terrain style cards (four named styles depicted, incl. "Emerald Isles", "Midnight Atlas"; remaining labels not fully legible) | Pass 04 |
| World Pulse | Waveform strip with caption ("Your world is evolving", Board 00; "Your World is evolving" pattern, Pass 06 globe variant with metric list) | Board 00; Pass 06 |
| Life Constellation | Radial node graph: center node with satellite nodes (Family, People, Places, Travel, Music, Passion, Challenges, Growth) joined by glowing lines | Pass 07 |
| Memory Map | Small island map with location pins and a selected-memory card | Pass 07 |
| Contributions map | Stylized world map with glowing regional nodes (Pass 08 "Community Contributions Map") | Pass 08 |

### 4.6 Navigation components

Specified in §6. **Permission matrix** (Pass 05): a table component — content-type rows (Territories, Journal Entries, Media (Photos, Videos, Audio), Memories & Collections, Connections (People/Links), World Structure (Map/Design)) × audience columns (Private, Family, Creative, Public) with check / view-only / empty cells. **Visibility Summary** (Pass 05 Perspective Preview): check-list summary of what a Lens includes, with "Open Full Preview" action.

---

## 5. Iconography

Line icons with rounded caps throughout, drawn from a single consistent set as depicted [D]: home, compass/explore, layers/territories, eye/perspectives, people, envelope/memories (Board 00 rail), image/media, chart/insights, gear/settings, book/journal, grid/connections, library, bell, search, help. The compass-star identity mark is specified in D03-08. Exact icon font/library and stroke values are not printed: to be confirmed from source design files.

---

## 6. Navigation patterns

Printed as a named list on Board 00 ("Navigation Patterns") and Pass 04, and depicted in use:

| Pattern | As depicted |
|---|---|
| Primary Navigation | Desktop top bar (Home, Explore, Studio, Journal, Connections, Library — Board 00) or left rail (My World, Territories, Lenses, Perspectives, People, Memories, Media, Insights, Settings — Board 00; Home/My World/Explore/Studio/Lenses/Perspectives/Community/Library/Learn/Insights/Settings — Pass 06 variant) |
| Secondary Navigation | In-panel tab rows (e.g. Studio: Map / Media / Style / Settings; Journal: All / Photos / Notes / Reflections; Immersion: All / History / Literature / Education / Fantasy) |
| Breadcrumbs | Named on Board 00; depicted form not separately illustrated — [D] |
| Tabs | Pill tab bars with Amethyst selected state (Explore: Featured / Trending / New / Categories) |
| Bottom Navigation (mobile) | Four-to-five item bar (Home, Explore/Map, Studio, Journal, Profile) with center emphasis on some frames |
| Mobile Menu | Hamburger at top-left of phone frames; slide-in rail replicating the desktop left rail |
| Stepper (wizard) | Numbered steps with connecting rule (Share Perspective: Lens → People → Message → Confirm) |

---

## 7. Interface states

Printed as a named panel on Board 00 ("Interface States") with depicted treatments:

| State | Depicted copy/treatment | Confidence |
|---|---|---|
| Loading | Skeleton/shimmer panel ("Loading" row) | [T] label; treatment [D] |
| Empty | "No content yet. Let's create something." with dashed-border placeholder | [T] copy as rendered on Board 00 |
| Error | "Something went wrong. Please try again." (red-tinted row) | [T] copy as rendered on Board 00 |
| Restricted | "This content is not available with your current access." with lock treatment | [T] copy as rendered on Board 00 |
| Offline | "You're offline. Some features may be unavailable." | [T] copy as rendered on Board 00 |

Perspective-level states are depicted separately on Pass 05 ("Perspective States"): **Owner View (Full Access)**, **Authorized View (Lens Perspective)**, **Restricted (Not Authorized)** — a bright rendered view, a rendered Lens view, and a darkened lock card respectively.

**Scope note.** These are *interface* state depictions. The G2 deliverable D03-06 (error, denial, expiry, revocation, and quarantine state designs) has never been produced; the states above do not backfill it (see G3-CONFORMANCE-ANNEX.md §5). In particular, no quarantine state (B-05) and no expiry state are depicted on any board.

---

## 8. Information state indicators

Printed on Pass 04 ("Information State Indicators"):

| Indicator | Depicted treatment | Confidence |
|---|---|---|
| Saved / Synchronized | Green check in circle | [T] |
| Draft / Unsaved | Blue cloud outline | [T] |
| Syncing | Blue circular arrows | [T] |
| Conflict / Needs Review | Amber warning triangle | [T] |
| Restricted (Not in Perspective) | Red lock | [T] |

---

## 9. What this specification does not establish

- No token value marked [T?] or [D] may be treated as implementation-ready until confirmed from source design files.
- Component presence in this specification records that a component is *depicted*; it does not classify the underlying capability as Existing, Prototype-only, or Deferred under Charter §4. That classification lives in D03-01/D03-02 (G1) and, for the conflicts, in the conformance annex.
- Depicted example content (names, counts, ratings, dates) is illustrative board content, not product data.

## 10. Open confirmations required (to the Founder / Design Lead)

1. Canonical hex values for Midnight, Ocean, Amethyst, Gold, Teal, Pearl — Board 00 and Pass 04 disagree (see §1.2).
2. Gradient stop values for Cosmic, Ocean, Sunset, Aurora.
3. Type scale: H1/H2/H3 and Body/Large/Small/Caption sizes, weights, line heights.
4. Spacing scale, corner-radius scale, elevation/glow values.
5. Icon set source and stroke specification.
6. Terrain-style names not fully legible on Pass 04 (two of four).

---

*End of D03-07 v1.0 — Draft for Founder review — E1 — G3 gate acceptance pending.*
