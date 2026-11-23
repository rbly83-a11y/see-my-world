# SEE MY WORLD — Stage 03 — Accessible Motion and Reduced-Motion Specification

> **Deliverable ID:** D03-09 · **Version:** 1.0 · **Owner:** Accessibility Lead (package assembly) · **Status:** Draft for Founder review — E1 — G3 gate acceptance pending · **Associated requirements:** Stage 03 Charter A-51 (§§4 WS-02/WS-06/WS-07, 6 G3, 7 D03-09, 9 Accessibility, 10); D03-07 (tokens/components) · **Verification method:** author expansion of the boards' printed accessibility commitments into testable criteria, self-checked (E1) · **Review decision:** Pending (Founder, G3 gate).

**Evidence discipline.** Author-produced, self-checked work — evidence level **E1** (Charter A-51 §10). This is a *specification*, not an accessibility audit: D03-13 (G5 accessibility assessment) remains a separate, later deliverable, and nothing here claims any tested WCAG conformance. It resolves nothing about Q-09, Q-01/D-34, or Q-21.

---

## 1. The boards' accessibility commitments (as printed)

Board 00 ("Accessibility" panel) and Pass 04 ("Accessibility & Inclusivity" panel) print the following commitments, quoted as rendered:

- "WCAG 2.1 AA compliant" (Board 00) / "WCAG 2.2 AA (Target)" (Pass 04)
- "Keyboard navigation"
- "Screen reader support"
- "High-contrast mode" (Board 00) / "High-contrast themes" (Pass 04)
- "Reduced motion"
- "Resizable text" (Board 00) / "Scalable text & layout" (Pass 04)
- "Accessible color ratios" (Board 00)
- "Clear focus indicators"
- "Captioning & transcripts" (Pass 04)

Pass 05's specification panel adds: "Accessible (WCAG 2.2 AA, keyboard, screen reader)" and "Responsive (desktop, tablet, mobile)". Pass 06 and Pass 07 design notes repeat accessibility/responsive commitments in summary form.

**Version note.** Board 00 cites WCAG **2.1** AA; Pass 04 and Pass 05 cite WCAG **2.2** AA. The Charter (§9) sets the acceptance threshold at WCAG **2.2** AA. This specification adopts **WCAG 2.2 AA** as the governing target and records Board 00's "2.1" as superseded design-board text, to be corrected in source design files (open item, §7).

This document expands the motion-related commitments into a full specification (§§2–4) and restates the remaining commitments as acceptance criteria (§5). Where the boards print no numeric value, criteria are stated as testable rules without invented numbers; values requiring source confirmation are marked **[confirm]**.

---

## 2. Motion inventory and reduced-motion equivalents

Every animated treatment depicted on the boards is inventoried below. For each: the depicted motion, its function, and the **required reduced-motion equivalent**. "Reduced-motion mode" is triggered by the operating-system `prefers-reduced-motion` setting *and* by an in-product toggle (§3, rule M-2).

| # | Depicted motion (source) | Function | Reduced-motion equivalent (required) |
|---|---|---|---|
| MO-01 | **World Pulse waveform** — animated audio-style waveform strip captioned "Your world is evolving" (Board 00 Atlas right rail); globe/pulse variant (Pass 06 "World Pulse") | Ambient signal that the World has changed | Static waveform rendered once, with the same information carried in text (e.g. a "Recent Activity" list, already depicted on Board 00). No oscillating animation. The pulse must never be the only carrier of the change signal in any mode. |
| MO-02 | **Map node glows and connection-line pulses** — glowing territory medallions and light-lines joining nodes on the Atlas/Studio maps (Board 00, Pass 04) | Show territories and their connections; Studio exposes "Node Glow" and "Atmosphere" as adjustable style sliders | Connections shown as static lines; nodes shown with a static halo of fixed intensity. Glow intensity remains user-adjustable; in reduced-motion mode all pulsing/breathing of glow is frozen at the user's set intensity. |
| MO-03 | **Map camera movement** — zoom (+/−) and "3D" toggle on the world map (Board 00, Pass 04); terrain transitions in Studio | Reframe the map | Zoom changes apply instantly (no animated flight/pan). The 3D tilt, if present, applies as a static transform with no transition. Keyboard-operable zoom buttons are required in both modes (the depicted +/− controls satisfy the visible-control requirement; keyboard equivalence is §5). |
| MO-04 | **Life Constellation animation** — radial node graph with glowing links (Pass 07) | Show life-theme relationships | Static graph, identical layout and labels; link glow frozen. Node focus order follows a logical reading order for keyboard/screen-reader use (§5). |
| MO-05 | **Immersive scene pans / parallax** — "Immersive Experience — Beta Concept" viewer with directional arrows, location/info pins (Pass 06); hero-art panels across boards | Explore a depicted place/era scene | No automatic pan or parallax on scroll or pointer movement. Scene changes occur only on explicit user activation of the depicted controls and apply as instant cuts. Pin content is available as a text list equivalent. |
| MO-06 | **Gradient and aurora animation** — Cosmic/Sunset/Aurora gradients on hero panels and buttons (all boards) | Brand atmosphere | Gradients render as static images. No hue cycling, shimmer, or drifting nebula in reduced-motion mode; in full-motion mode any such drift must be slow, non-repeating-attention-seeking, and pausable (rule M-5). |
| MO-07 | **Carousel / scroller movement** — horizontal card rails with arrow controls (Passes 06, 07 Life Timeline, 08 World Discovery, 09 Publishable Worlds) | Browse collections | Arrows move content by discrete instant steps (no smooth glide). No auto-advance in any mode. All rail content reachable by keyboard without the arrows. |
| MO-08 | **Timeline scrubbing** — Life Timeline decade track with connected nodes (Pass 07) | Navigate life periods | Selecting a decade applies instantly; the connecting line is static. |
| MO-09 | **State-change transitions** — tab switches, panel swaps, wizard steps (Share Perspective stepper, Pass 05), save/sync indicator changes (D03-07 §8) | Show navigation and system state | Instant state change with the D03-07 information-state indicators (static icons) carrying the meaning. Syncing indicator in reduced-motion mode is a static icon plus text ("Syncing"), never a rotating animation as the sole signal. |
| MO-10 | **Loading treatments** — skeleton/shimmer panels (Board 00 Interface States: Loading) | Indicate pending content | Static placeholder blocks with a text label ("Loading") and an ARIA live announcement (§5). No shimmer sweep in reduced-motion mode; in full-motion mode shimmer must not be the only loading signal. |
| MO-11 | **Media playback** — Soundtrack player with play/pause and progress (Pass 07); video-bearing journal/media cards (Passes 04, 07) | Play owner media | No autoplay with motion or sound in any mode. Standard accessible player controls; captions/transcripts per §5. Progress bar updates are not treated as decorative motion. |
| MO-12 | **Success confirmation animation** — large check medallion on "Perspective Shared!" (Pass 05) | Confirm a completed share | Static check with the same text. Confirmation is never conveyed by animation alone in any mode. |

---

## 3. Vestibular safety rules (binding on any implementation of these designs)

- **M-1 — No flashing.** No content flashes more than three times in any one-second period (WCAG 2.2 AA, 2.3.1). The map glows (MO-02) and pulse (MO-01) must be designed so their combined effect cannot approach this threshold.
- **M-2 — Dual trigger.** Reduced-motion mode engages on (a) the OS/browser `prefers-reduced-motion` setting, honored by default with no user action, and (b) an in-product "Reduced motion" setting that persists per user and overrides the OS signal in the direction of *less* motion whenever the two disagree.
- **M-3 — No essential motion.** No information, state, or affordance may be conveyed by motion alone (see MO-01, MO-09, MO-10, MO-12 equivalents).
- **M-4 — No unrequested camera motion.** No auto-playing pans, zooms, parallax scrolling, or simulated 3D flight (MO-03, MO-05). All viewpoint change is user-initiated and, in reduced-motion mode, instantaneous.
- **M-5 — Pause for ambient motion.** Any ambient animation that runs longer than five seconds in full-motion mode (MO-01, MO-02, MO-06) must provide a pause/stop control, per WCAG 2.2.2.
- **M-6 — Motion sensitivity in immersive surfaces.** The Immersion surfaces (Pass 06) are the highest-risk area: first entry in full-motion mode presents the static form with an explicit opt-in to animated exploration; the opt-in is per-surface and remembered.
- **M-7 — Respect in wizards and states.** The Share Perspective stepper, permission toggles, and state indicators (D03-07 §§7–8) must not use slide/bounce transitions in reduced-motion mode; focus moves directly to the new step's heading.

---

## 4. Motion values requiring confirmation

Durations, easing curves, glow pulse rates, and waveform refresh behavior are **not printed on any board**. No values are invented here. Before G4 prototype work, the Design Lead must supply from source design files: transition durations for MO-03/MO-07/MO-09; pulse period and amplitude for MO-01/MO-02; drift parameters for MO-06. Each supplied value must then be checked against rules M-1 and M-5 and recorded as an amendment to this specification.

---

## 5. Non-motion accessibility acceptance criteria (from the boards' printed commitments)

Each criterion is stated so a G5 audit (D03-13) can test it. All are **specified, not yet tested** — E1.

| # | Commitment (source) | Acceptance criterion |
|---|---|---|
| AC-1 | WCAG 2.2 AA target (Passes 04, 05; Charter §9) | No unresolved critical WCAG 2.2 AA failures in the tested journeys (Charter §9 threshold). Text and meaningful graphics meet 2.2 AA contrast ratios against the D03-07 palette as confirmed (D03-07 §10 item 1 is a dependency: contrast cannot be finally computed until canonical hex values are confirmed). |
| AC-2 | Keyboard navigation (Board 00, Pass 04) | Every depicted flow in G3-SCREEN-SYSTEMS-AND-FLOWS.md §11 is completable by keyboard alone, in a visible, logical focus order, with no keyboard trap — including map zoom controls, constellation nodes (MO-04), carousels (MO-07), permission toggles, and the Share Perspective stepper. |
| AC-3 | Clear focus indicators (Board 00) | A visible focus indicator is present on every interactive element in both themes, meeting WCAG 2.2 AA focus-appearance requirements; the indicator style is a token to be added to D03-07 on confirmation [confirm]. |
| AC-4 | Screen reader support (Board 00, Pass 04) | All depicted information has a text equivalent: map territories are available as a list with the same labels; the World Pulse change signal is announced as text (MO-01); permission matrix cells are real table data; state indicators (D03-07 §8) have text labels, not icon-only meaning. |
| AC-5 | High-contrast themes (Pass 04) / High-contrast mode (Board 00) | A high-contrast theme is provided in which the Amethyst-on-Midnight combinations that fail AA at body sizes are replaced; theme is user-selectable and persistent. |
| AC-6 | Scalable text & layout (Pass 04) / Resizable text (Board 00) | Layouts survive 200% text resize without loss of content or function; phone frames' bottom navigation and desktop rails reflow rather than clip. |
| AC-7 | Captioning & transcripts (Pass 04) | All audio/video media types depicted (Journal media, Soundtrack, Immersion media) support captions and transcripts; the Soundtrack player (Pass 07) exposes a transcript affordance for spoken content. |
| AC-8 | Responsive (Pass 05; Charter §9) | All primary journeys reviewed at mobile, tablet, and desktop widths; no depicted flow exists only at one width (the Pass 05 permission matrix has a depicted mobile equivalent path: the phone "Set Permissions" toggle list). |

---

## 6. Relationship to other deliverables

- Motion inventory sources are the boards as catalogued in G3-SCREEN-SYSTEMS-AND-FLOWS.md.
- This specification is the G3 design input to D03-13 (G5 accessibility assessment); it does not discharge D03-13.
- State designs for denial, expiry, revocation, and quarantine belong to D03-06 (G2, unproduced); this document specifies only their *motion* behavior if designed later (M-7).

## 7. Open items

1. Board 00's "WCAG 2.1 AA" text to be corrected to 2.2 AA in source design files (§1).
2. Motion values from source files (§4).
3. Focus-indicator token to be confirmed and added to D03-07 (AC-3).
4. Contrast computation blocked on canonical palette confirmation (D03-07 §10 item 1; AC-1).

---

*End of D03-09 v1.0 — Draft for Founder review — E1 — G3 gate acceptance pending.*
