# SEE MY WORLD — Product Bible 1.2 · Continuation 12 · Chapters 101–112

## The Presentation Compiler — Engineering Creative Freedom

*Pasted by Bobby, 21 November 2026, after Product Bible Edition 1.2 was delivered. Filed verbatim (interactive-prototype debris retained and marked). Disposition: logged in `EDITION-1.3-AMENDMENT-REGISTER.md` (entry A-14) as the engineering specification refining the Presentation Layer (A-12); Edition 1.2 remains frozen as delivered.*

---

We now have three essential foundations:

Worldprint = Meaning. Presentation = Expression. Lens = Permission.

The next development challenge is to make these systems work together without compromising any of them.

The owner should be able to transform their World into an archipelago, constellation, architectural landscape, interactive journal, or something entirely original. Visitors should experience that creativity—but only through the information the owner deliberately authorizes.

This installment develops the proposed Presentation Compiler v1.0, including its architecture, editing experience, privacy rules, responsive layouts, soundscape integration, version history, and acceptance criteria.

These are engineering specifications and product proposals, not claims that the existing application already implements them.

## 101. The Presentation Compiler

The compiler should translate an owner's design into a safe rendering specification that works across desktop, tablet, mobile, and accessible nonvisual interfaces.

It must not simply transmit the entire Presentation object to the visitor.

Instead, the server creates a disclosure-safe representation.

### Normative compilation sequence

* Authenticate the owner or visitor and validate the relevant grant.
* Resolve the approved Worldprint revision.
* Compile the Lens-authorized data projection.
* Load the approved Presentation revision.
* Remove modules and assets that exceed the grant.
* Resolve visual bindings using only permitted projected data.
* Validate the responsive layout and accessible reading order.
* Produce an immutable render manifest for the authorized publication.
* Revalidate access whenever protected manifest or asset content is requested.

Critical invariant: Presentation compilation cannot increase the information available in the authorized World projection.

Aesthetic choices may change how permitted information appears. They must never act as a secondary channel for revealing excluded information.

## 102. The Render Manifest Contract

I recommend treating the compiled Presentation as a declarative document rather than executable application code.

```ts
interface RenderManifest {
  manifestVersion: "render-v1";
  perspectiveId: string;
  publicationRevision: number;
  source: {
    worldRevision: number;
    presentationRevision: number;
    atlasVersion: string;
  };
  resolution: "CONTINENT" | "COAST" | "HARBOUR";
  theme: CompiledTheme;
  layout: CompiledLayout;
  modules: CompiledModule[];
  assets: AuthorizedAsset[];
  audio?: CompiledSoundscape;
  accessibility: {
    readingOrder: string[];
    reducedMotionFallback: boolean;
    nonVisualNavigation: boolean;
  };
}
```

The manifest must not contain raw testimony, hidden topic IDs, internal evidence references, suppressed module identifiers, or private strength values.

A visitor should receive a fully compiled experience, not instructions to hide information they are unauthorized to see.

### Manifest identity

A stable manifest digest should be computed from its canonical contents.

The digest can help detect unexpected changes, support cache consistency, and verify that a visitor receives the publication revision the owner approved.

However, the digest itself is not an authorization token. Every protected request must still enforce access control.

## 103. The World Studio Interface

The reference designs establish a strong visual direction: immersive cartography, modular composition, and accessible customization.

I recommend dividing the editor into four workspaces.

*[Prototype debris from the World Studio widget, transcribed: "World Studio · Interactive concept / Theme Layout Bindings Sound / Territory material: Islands, Stars, Contours / Color palette: Midnight, Dawn, Emerald / Copy presentation draft / Interactive concept only. It does not write to the application or modify an existing World."]*

The interface should preserve the owner's changes as private drafts, with explicit save and restore controls.

Publishing must remain a separate operation.

## 104. Module Contracts

Each module needs a strict contract defining what it may read, display, and emit.

| Module | Reads | Required protection |
|---|---|---|
| Primary Map | Authorized regions and edges | No hidden nodes or geometry |
| Featured Territories | Approved pinned topics | No private rankings or counts |
| Constellations | Owner-approved groups | No inferred hidden memberships |
| Soundtrack | Approved audio references | No private listening history |
| Recent Seeds | Owner-selected Seed references | No originating private World snapshots |
| Timeline / Tides | Permitted temporal summaries | No unauthorized history |
| Journal / About | Explicitly approved owner text | No automatic private-note inclusion |
| Accessible List | Same authorized data as map | Equivalent navigation and information |

### Module dependency rule

Every module must declare its required data fields.

If a module requires a field the Lens does not permit, the compiler should either provide an approved lower-resolution representation or omit the module.

It must never fetch private data and rely on the module's own code to hide it.

### Module isolation

Modules should not be able to inspect each other's private state or request arbitrary World data.

The safest initial implementation is a fixed registry of built-in modules, each with a validated configuration schema.

Third-party modules should be deferred until a separate sandbox and permission model exists.

## 105. Responsive Layout Engineering

The layout must work across different devices without sacrificing the owner's intended composition.

I recommend a constrained grid model.

```ts
interface ModulePlacement {
  moduleId: string;
  desktop: {
    column: number;
    row: number;
    columnSpan: number;
    rowSpan: number;
  };
  tablet?: {
    order: number;
    span: number;
  };
  mobile: {
    order: number;
    collapsed?: boolean;
  };
}
```

The owner may control desktop composition, tablet ordering, and mobile stacking.

The system should validate that modules do not overlap in ways that obscure controls, create unreachable content, or break the accessible reading order.

*[Prototype debris, transcribed: "Responsive behavior — Desktop: Map / Featured / Soundtrack / List. Mobile: Map / Featured / List / Soundtrack."]*

The mobile layout should not merely shrink the desktop map.

It should reorganize the experience while preserving the same authorized information and interaction capabilities.

## 106. Safe Visual Bindings

The Presentation Layer should support model-driven visual changes without permitting arbitrary computation.

A binding must declare a source, a target, and an approved transformation.

```ts
type BindingSource =
  | "PUBLIC_PROMINENCE_BAND"
  | "PUBLIC_ASSERTION_STATE"
  | "PUBLIC_EXPLORATION_STATE";
type BindingTarget =
  | "NODE_SCALE"
  | "NODE_GLOW"
  | "NODE_OUTLINE"
  | "TERRITORY_MATERIAL";
interface CompiledBinding {
  source: BindingSource;
  target: BindingTarget;
  transform:
    | "LINEAR_CLAMPED"
    | "THREE_BAND"
    | "STATE_TO_STYLE";
}
```

Notice that the visitor-facing compiler does not expose raw private strength or testimony.

Instead, it uses approved projection fields such as a three-level prominence band.

### Example binding behavior

| Authorized state | Possible appearance |
|---|---|
| Owner-confirmed | Solid outline |
| Owner-declared | Solid outline with different owner-selected treatment |
| Public prominence: low | Subtle glow |
| Public prominence: medium | Moderate glow |
| Public prominence: high | Strong glow |

Proposed and refuted nodes remain private under the recommended pilot disclosure policy.

A theme cannot force them into a public projection.

## 107. Soundscape Integration

Sound should contribute atmosphere without creating a second surveillance or permission system.

### Proposed Soundscape object

```ts
interface Soundscape {
  mode: "NONE" | "CURATED" | "AMBIENT";
  tracks: Array<{
    assetId: string;
    title: string;
    licenseRef?: string;
  }>;
  settings: {
    loop: boolean;
    defaultVolume: number;
    autoplay: false;
  };
  visitorPolicy: {
    offered: boolean;
    requiresUserGesture: true;
  };
}
```

For the pilot, I recommend using a small set of properly licensed ambient tracks plus owner-uploaded audio only where rights and hosting policies are established.

Streaming-platform integrations should be evaluated separately. Linking to a song does not necessarily grant permission to embed, redistribute, remix, or synchronize it with a visual experience.

### Audio accessibility

Every visitor must be able to mute audio, control volume, and navigate without sound.

Audio should not be required to understand a topic, relationship, correction, or invitation.

If a module contains meaningful spoken content, it needs an equivalent text representation.

## 108. Theme Versioning and Recovery

Creative freedom becomes much safer when the owner can experiment without fear of destroying a carefully designed World.

I recommend independent Presentation revision history.

*[Prototype debris, transcribed: "Illustrative revision history — Revision 3: Midnight archipelago. Revision 2: Celestial constellation. Revision 1: Default World."]*

Restoring this design would create a new Presentation revision. It would not change testimony, Atlas state, or previously published Perspectives.

A restore operation should never overwrite history in place.

It should create a new revision based on an earlier approved design.

Published Perspectives should remain tied to the Presentation revision that was approved at publication time.

## 109. Advanced Creator Mode

Advanced CSS and HTML offer enormous creative freedom, but they introduce security risks that cannot be solved by simple string filtering.

For the first implementation, I recommend not accepting arbitrary executable HTML, JavaScript, or unrestricted CSS.

Instead, use a declarative component schema with validated style tokens and a restricted layout language.

Later, advanced creators could receive a sandboxed environment with explicit capability restrictions, resource quotas, content security policies, and an isolated origin.

The advanced environment must not be able to:

* Read private World data outside its authorized projection.
* Exfiltrate visitor information through external requests.
* Hide required consent or accessibility controls.
* Impersonate system authorization dialogs.
* Execute untrusted scripts in the main application origin.
* Create uncontrolled motion, flashing, or audio behavior.

A custom theme must also remain recoverable if its assets fail or its configuration becomes invalid.

## 110. Presentation Privacy Threat Model

The Presentation Layer introduces new information channels that the Lens Compiler must explicitly control.

| Threat | Example | Required defense |
|---|---|---|
| Hidden-topic inference | Empty region reveals suppressed territory | Reflow layout after filtering |
| Visual strength leakage | Glow reveals exact private score | Use authorized prominence bands |
| Asset leakage | Image URL contains private identifiers | Opaque authorized asset references |
| Soundtrack inference | Private playlist exposed in visitor view | Explicit audio publication permission |
| Metadata leakage | Module title reveals a hidden topic | Sanitize labels and descriptions |
| CSS exfiltration | External asset URL transmits visitor data | Restrict external resources |
| Cache leakage | Revoked manifest remains accessible | Authorization-aware caching |
| Accessibility mismatch | Screen reader reveals hidden module | Compile accessible tree from same projection |
| Revision mismatch | Preview differs from publication | Bind approval to manifest digest |
| Cross-device mismatch | Mobile shows extra private details | Same disclosure contract across breakpoints |

### Important architectural principle

The accessible view must not be generated from the private World separately.

It must be derived from the same authorized projection as the visual map.

Otherwise, two different renderers could disagree about what the visitor is permitted to know.

## 111. Presentation Acceptance Suite

I recommend a dedicated acceptance suite that tests both creativity and privacy.

### Proposed test categories

| Category | Cases |
|---|---|
| Theme validation | 12 cases |
| Layout responsiveness | 14 cases |
| Module permissions | 18 cases |
| Visual binding safety | 16 cases |
| Asset authorization | 12 cases |
| Soundscape behavior | 10 cases |
| Revision and recovery | 10 cases |
| Accessibility | 16 cases |
| Adversarial disclosure | 22 cases |
| **Total proposed** | **130 cases** |

Planning targets only. No tests have been executed for this proposed subsystem.

### Highest-priority regression tests

A theme change must never modify testimony.

A private node must never appear through a module, asset, animation, audio cue, accessibility tree, or metadata field.

A Lens downgrade must reduce available detail without breaking the experience.

A revoked Perspective must stop serving protected manifests and assets.

A restored theme must preserve the Worldprint and create a new Presentation revision.

A mobile rendering must not disclose more information than its desktop counterpart.

A failed custom theme must fall back to a safe, accessible default.

## 112. The New Product Identity

The Presentation Layer changes SEE MY WORLD's competitive position.

The project is no longer just about building an interest graph that a person can correct.

It now offers three forms of authorship:

**Authorship of Meaning** — The owner decides what belongs in their World.

**Authorship of Expression** — The owner decides how their World looks, sounds, and feels.

**Authorship of Access** — The owner decides which parts of that experience others may enter.

That combination is the product's strongest emerging differentiation.

A conventional social profile tells people about its owner. SEE MY WORLD aims to let the owner create an environment through which other people can understand what matters to them.

### Next development phase

The next step should be the World Studio Interaction and Publishing Specification, covering drag-and-drop module editing, theme presets, responsive layout rules, owner-uploaded assets, soundtrack licensing, collaborative theme sharing, and exact preview-to-publication guarantees.

After that, the complete Presentation Layer should be reconciled with the existing application architecture before implementation begins.

The World belongs to its owner—not just its information, but its atmosphere, composition, and the experience of stepping inside it.
