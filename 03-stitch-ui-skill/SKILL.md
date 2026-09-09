---
name: stitch-ui-skill
description: End-to-end framework for extracting UI reference screens into color-agnostic JSON blueprints, maintaining brand design tokens & locked component specs, saving approved screen prompts to app-screens/, compiling domain-adapted Google Stitch prompts, and generating Dual-Prompt specs for App Icons and App Store Screenshots with zero dummy text guardrails.
---

# 🎨 Google Stitch UI Design & Prompt Compilation Skill (`stitch-ui-skill`)

This skill defines the complete, 3-tier architecture and execution workflow for extracting reference UI screenshots, cataloging color-agnostic visual blueprints in `design_catalog.json`, applying brand themes in `app_theme.json`, archiving approved screen prompts into `app-screens/`, compiling domain-adapted Google Stitch prompts via `scripts/stitch_formatter.js`, and tracking UI design state in `docs/04-ui-design/DESIGN-MEMORY.md`.

> [!IMPORTANT]
> **AGENT MANDATE**: Any agent executing a UI extraction, design system setup, or generative prompt compilation task **MUST ALWAYS read this SKILL.md file first** (`view_file`) to adhere to the PRD & Component-First Execution Protocol, Design Guardrails, Hardcoded Output Prompt Standards, Zero Dummy Text Enforcement, and Dedicated UI Design Memory (`docs/04-ui-design/DESIGN-MEMORY.md`).

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Document / Asset | Primary Target Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Ingested App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **Ingested System PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **Ingested Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Ingested Tech Stack** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory Log** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **Approved Prompts Archive** | `app-screens/prompts/<screen_id>.md` | `app-screens/<screen_id>.md` | `./<screen_id>.md` |
| **UI Screenshots Archive** | `app-screens/<screen_id>.png` | `app-screens/<screen_id>.png` | `./<screen_id>.png` |
| **Theme & SVG Registry** | `./app-theme.json` | `./app_theme.json` | `resources/app_theme.json` |
| **Project Design Catalog** | `./design_catalog.json` | `docs/04-ui-design/design_catalog.json` | `resources/design_catalog.json` |

### 🛠️ CLI Formatter Catalog Lookup Fallback Array (`scripts/stitch_formatter.js`)
When running prompt compilation scripts, the script dynamically evaluates candidate paths until `design_catalog.json` is found:
1. `path.join(process.cwd(), 'design_catalog.json')`
2. `path.join(process.cwd(), 'docs', '04-ui-design', 'design_catalog.json')`
3. `path.join(__dirname, '..', 'resources', 'design_catalog.json')`
4. `path.join(__dirname, '..', '..', '03-stitch-ui-skill', 'resources', 'design_catalog.json')`

---

## ⚡ Shortcut Slash Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/stitch-ui-help`** | `/stitch-ui --help`, `/ui-help` | Displays complete manual overview: what the skill does, file schemas (`app_theme.json`, `design_catalog.json`), phases, and rules. |
| **`/stitch-ui-shortcuts`** | `/stitch-ui --shortcuts`, `/ui-shortcuts` | Displays fast reference list of all available UI shortcut triggers and what they do. |
| **`/ui-theme`** | Ingests `APP-BRIEF.md` & `ARCH-PRD.md`, proposes 2–3 Color Palettes and Google Fonts pairings, audits required visual assets (mascot/logo/SVGs), and locks `./app_theme.json`. | **Design System Token Lock** |
| **`/ui-flow`** | Generates UI screen prompt blueprints organized by single user flow (Onboarding & Auth, Activation & Paywall, Main App Tabs, Happy Path Core Loop). Ingests `docs/` for real copy. | **Google Stitch Prompt ONLY** |
| **`/app-icon`** | Generates 5 distinct logo exploration concept canvases (Mascot, Metaphor, Lettermark, Geometric, Wordmark) for the app brand. | **Dual-Prompt Standard** (Variant A: Stitch + Variant B: ChatGPT / Midjourney) |
| **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero mockup screen (`shots.so` framing). | **Dual-Prompt Standard** (Variant A: Stitch + Variant B: ChatGPT / Midjourney) |
| **`/ui-init`** | Auto-creates `./app_theme.json`, project-local `./design_catalog.json`, `app-screens/` folder, and `docs/04-ui-design/DESIGN-MEMORY.md` in project root. | Operations Script |
| **`/ui-extract`** | Extracts attached ChatGPT visual concept screenshot into color-agnostic JSON blueprint via `scripts/add_catalog_blueprint.js` and appends to local `./design_catalog.json`. | Local Catalog JSON |
| **`/ui-compile`** | Compiles a Stitch prompt for a specific screen from local `./design_catalog.json` with domain adaptation (`node scripts/stitch_formatter.js --app_domain`). | **Google Stitch Prompt ONLY** |
| **`/ui-sync`** | Batch compiles & updates ALL archived screen prompts in `app-screens/` to reflect global theme changes (`node scripts/stitch_formatter.js --all`). | Formatter Sync |
| **`/ui-approve`** | Saves current approved Google Stitch prompt into `app-screens/prompts/<screen_id>.md` and updates `docs/04-ui-design/DESIGN-MEMORY.md`. | Markdown File Archive |

---

## 📄 PRD Content Extraction Mandate (Zero Dummy Text Rule)

When compiling UI screens (`/ui-flow`), App Icons (`/app-icon`), or Storefront Screenshots (`/app-screenshots`), the agent **MUST INGEST** the authoritative documentation files using the primary and fallback paths defined above:
- `APP-BRIEF.md` (Product Identity, Mascot, Brand Personality, Copy & Vibe)
- `ARCH-PRD.md` (Features, JTBD, Monorepo, Onboarding Carousel, Paywall, Permissions)
- `app-features.md` (Feature-First Stack Decomposition)
- `TECH-STACK.md` (Monorepo Infrastructure & DB Schemas)

### Strict Copy Directives:
1. **Real Domain Copy Only**: All titles, labels, card descriptions, stat counters, badge microcopy, and button text MUST be pulled directly from the PRD or adapted to the app's real domain.
2. **Zero Placeholder String Policy**: Absolutely NO "Lorem Ipsum", "John Doe", "$99", "Sample User", "Feature Title 1", "Lorem dolor sit amet", or generic placeholders.
3. **Exact Brand Theme Alignment**: Use the exact Hex codes, color tokens, and Google Fonts pairings defined in `./app_theme.json` and `APP-BRIEF.md`.

---

## 🏛️ System Architecture & File Structure

```
+-----------------------------------------------------------------+
| Phase 4A: Look & Feel, Theme & Asset Audit (/ui-theme)           |
| Color Palettes, Google Fonts, Asset Audit & app_theme.json      |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Phase 4B: Vision Extraction to Local Catalog (/ui-extract)      |
| Project-local structural layout in ./design_catalog.json         |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 3: Prompt Compiler (scripts/stitch_formatter.js)           |
| Outputs domain-adapted Stitch prompt with guardrails             |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 4: Approved Prompts Archive (app-screens/)                 |
| Prompts in app-screens/prompts/ & screenshots in app-screens/   |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 5: Dedicated UI Memory Log (docs/04-ui-design/DESIGN-MEMORY)|
| Dedicated UI design system state & active screen version log    |
+-----------------------------------------------------------------+
```

---

## 📋 Interactive 2-Phase App Design Lifecycle Protocol

### Phase 4A: Look & Feel, Theme & Asset Audit (`/ui-theme`)
1. Ingest `APP-BRIEF.md` and `ARCH-PRD.md`.
2. Propose 2–3 curated **Color Palettes** with color psychology rationales.
3. Propose 2–3 curated **Google Fonts Pairings** (Header + Body) with clickable specimen preview links (`https://fonts.google.com/specimen/...`).
4. Perform **Asset Audit**: Proactively identify and list all required visual assets (mascots, custom SVG logos, hero illustrations) and request them from the developer if missing.
5. Save approved visual tokens into project-local `./app_theme.json`.

### Phase 4B: Vision Extraction & Stitch Prompt Compilation (`/ui-extract`, `/ui-flow`)
1. **Reference Input**: Ingest ChatGPT-generated (or reference) screen concepts provided by user.
2. **Extraction**: Run `/ui-extract` to extract layout hierarchy, spacing, and element scale into project-local `./design_catalog.json` via `scripts/add_catalog_blueprint.js`.
3. **Prompt Compilation**: Run `/ui-flow` or `/ui-compile` using `./design_catalog.json`, `./app_theme.json`, real PRD copy, and provided visual assets.
4. **Single Active Delivery**: Output ONE prompt matching the active design theme profile.

### Phase 4C: Screen Approval, Archiving & Visual Hand-off Protocol (`app-screens/`)
1. Save generated/approved visual screen image to `app-screens/<screen_id>.png`.
2. Save approved screen prompt spec to `app-screens/prompts/<screen_id>.md` (fallback `app-screens/<screen_id>.md`).
3. Update `docs/04-ui-design/DESIGN-MEMORY.md` (fallback `docs/DESIGN-MEMORY.md`).
4. **Visual Hand-off to `04-app-coder`**: Screen images in `app-screens/<screen_id>.png` serve as the target design references for `04-app-coder`'s Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine).
5. Single Active File Overwrite Mandate: Replace previous version files (`_v1`) upon layout approval.

---

## 📐 Mandatory Design Rules & Guardrails

1. **Color-Agnostic Catalog Rule**: NEVER hardcode HEX or RGB values inside `design_catalog.json`. Only use abstract semantic color roles (`primary_accent`, `surface_background`, `on_surface_high`, etc.).
2. **Mobile Portrait Canvas Mandate (9:16 Aspect Ratio)**: Target `Mobile Smartphone App Screen (Vertical 9:16 Portrait)`.
3. **Zero Shadows & Zero Glows Rule**: Flat UI surfaces ONLY. No drop-shadows, box-shadows, or ambient glows.
4. **Zero Animations Rule**: 100% static UI renders. No motion graphics or dynamic loops.
5. **Locked Single Navigation Bar Rule**: Render EXACTLY ONE bottom navigation bar using the locked stadium pill spec from `app_theme.json`.
6. **Screen Correction & Dual Prompt Standard**: When revisions are requested, output (1) Follow-Up Revision Prompt, and (2) Full Standalone Prompt.
7. **Auto-Generated Folder README Rule**: Automatically generate a self-documenting `README.md` when creating any new workspace folder.
8. **Embedded SVG Vector Icon Rule**: Icons MUST be drawn using explicit mathematical SVG path data (`<svg viewBox="..." ...><path d="..."/></svg>`).
9. **Central Project SVG Registry (`app_theme.json.svg_registry`)**: Register all mathematical SVG icon geometries in `app_theme.json.svg_registry`.
10. **Contextual Git Commit Protocol**: Ask for explicit user approval before executing `git commit` or `git push`.
11. **Dedicated UI Design Memory Log Protocol (`docs/04-ui-design/DESIGN-MEMORY.md`)**: Track active screen versions, theme locks, and registered SVG icons in `docs/04-ui-design/DESIGN-MEMORY.md` (isolated from agent memory).

---

## 🔒 Component Consistency & Explicit Locking Protocol

1. **Embedded SVG Vector Mandate**: Every locked component in `app_theme.json` includes an immutable `svg_vector` path string.
2. **Dual Layout Directives**:
   - Active Pill Layout: `HORIZONTAL_INLINE_SIDE_BY_SIDE` (icon left of label inside pill).
   - Inactive Tab Layout: `VERTICAL_STACK_ICON_TOP_LABEL_BOTTOM` (icon top, label text bottom).
3. **Quantitative Pixel & Font Dimension Locking**: Icon size = `24px x 24px`, Active label = `13px` bold, Inactive label = `11px` medium, Nav bar height = `80px`, Active pill height = `56px`, Corner radius = `32px`.

---

## 🏛️ Master Visual Direction System & Vibe Presets

### SYSTEM DIRECTIVE & WORKFLOW INITIALIZATION: VISUAL DIRECTION PRESET 01

**ROLE DEFINITION:**
You are acting as an elite Lead Product Designer, Design Systems Architect, and Mobile UI Prompt Specialist for high-growth, modern consumer apps. Your mission is to establish a distinct, uncompromising aesthetic identity and translate product concepts into precise, production-grade visual generation prompts across a multi-stage design workflow.

```json
{
  "vibe_preset_01": {
    "name": "Exaggerated Focus-First Minimalism",
    "spatial_specs": {
      "corner_radius": "18px–24px smooth continuous Apple superellipse squircle curvature",
      "elevation": "Flat, multi-planar stacked layering; zero heavy volumetric depth or 3D extrusion",
      "shadows": "Subtle, soft ambient drop shadows (e.g., 0px 8px 24px rgba(0,0,0,0.06))",
      "containers": "Fewer, larger, isolated 'breathing' card components"
    },
    "scale_and_exaggeration": {
      "display_typography": "Exaggerated large sans-serif headers (Display 56px–72px, H1 36px–48px), bold, expressive, short punchy copy (Max 6 words)",
      "interactive_elements": "Oversized, tactile, rounded pill-shaped CTA buttons with large touch targets spanning the thumb zone",
      "indicators": "Oversized single numbers, giant progress rings, and enlarged focal icons instead of small data tables",
      "cards": "Fewer, larger cards used sparingly, with wide vertical margins and generous horizontal safe zones"
    },
    "color_dynamics": {
      "neutral_mode": "Predominantly calm light mode with warm off-white/neutral background fields and pure white cards",
      "brand_inversion_state": "SELECT Transition and High-Emotion Milestone screens (Splash, Milestone/Celebration, Welcome) dynamically invert to full-bleed primary brand color with high-contrast white text"
    },
    "graphics_and_illustration": {
      "mascot_treatment": {
        "role": "Emotional companion and reward anchor, never UI clutter or generic decoration",
        "aesthetic": "Clean 2D vector style, simple expressive features (e.g., vertical pill eyes 2.2:1 ratio), flat planar color steps, zero 3D claymorphism",
        "framing": "Oversized and intentional; anchors to and bleeds off bottom/side edges (heads/tops float in upper viewport) or anchors beside MAJOR task status transformations"
      },
      "icons_and_symbols": {
        "style": "Oversized, expressive, bold vector outlines or flat filled shapes; strictly consistent design language across all categories (Primary Nav, Settings Row icons)"
      }
    },
    "navigation_engine": {
      "primary_bar": "Compact floating pill-shaped bottom bar (Max 4 destinations), large simple icons, minimal labels, active item softly elevated/filled with primary brand color, inactive items muted/quiet, separated by generous whitespace",
      "secondary_screens": "Oversized minimalist top-left back arrow (←), zero top-bar clutter",
      "immersive_focus_screens": "Bottom pill hidden; explicit top-left exit control (× or ← Exit) + massive thumb-zone CTA",
      "reward_completion_screens": "Bottom pill hidden; oversized forward CTA (Next →) + quiet secondary return action"
    }
  }
}
```

---

## 📋 Hardcoded Unabridged Output Prompt Templates

### 1. Stage 1 Output Prompt Template: Design Tokens & Component Kit (`/ui-theme`)
```text
[APP NAME] UI DESIGN SYSTEM & COMPONENT KIT PROMPT

Generate an image of a complete modern mobile app UI design system, component library, and design tokens sheet for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description based on user input].

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, editorial design token layout
[Light/Dark mode based on design direction]
Soft rounded corners (16–20px radius)
Floating card containers and subtle ambient shadows
Apple-level clean UI mixed with [Benchmark brands from design direction]

Color Palette
[Primary surface and background hex codes]
[Primary brand accent hex code]
[Secondary and gradient accent hex codes]
[Deep charcoal/soft white text colors]
[Semantic status tag colors]

Typography
Clean modern sans-serif (Inter / SF Pro style)
Strong Apple-like hierarchy: bold display headers, medium labels, clear body text
Prominent metadata pill labels

Components to Include
1. Color Swatches & Tokens (Primary, Secondary, Backgrounds, Accent States)
2. Typography Scale Hierarchy (Display, H1, H2, Body, Metadata)
3. Button System (Primary filled pill, secondary outlined, ghost, icon-only)
4. Form Controls (Search bar, rounded input fields with active/error states, toggle switches)
5. Navigation Archetypes (Floating bottom tab bar with active icon states, top app bar)
6. Micro-Components (Pill chips, status tags, rating badges, avatar clusters, step progress bars)
7. Card Archetypes (Interactive media card, metrics HUD card, comparison table row, compact list item)

Direction
Design the component sheet like a production-ready Figma design system kit for a top App Store startup. Keep layouts clean, sharp, pixel-perfect, and ultra-high-resolution.
```

### 2. Stage 2 Output Prompt Template: App Icon & Logo Exploration Matrix (`/app-icon`)
```text
APP ICON & LOGO EXPLORATION MATRIX PROMPT (20 ICONS - 1080x1080 CANVAS)

Generate an image of a clean, modern 20-icon app logo exploration matrix with ZERO text, letters, headers, labels, or watermarks anywhere on the canvas, arranged in an exact 4 rows × 5 columns grid on a single 1080x1080 dark canvas for the app designed in Stage 1.
The app is the product defined in Stage 1, incorporating its core utility and brand personality.

Logo Style Reference & Rendering JSON Library
{
  "canvas_and_tile_spec": {
    "canvas": "1080x1080 pure black / deep obsidian slate canvas (#000000 / #0A0A0E) with zero typography, zero labels, and zero text",
    "grid_structure": "4 Rows × 5 Columns (20 app icon squircles total, evenly spaced across the canvas)",
    "tile_geometry": {
      "aspect_ratio": "Strict 1:1 square aspect ratio (equal width and height dimensions, perfectly symmetrical, zero vertical stretching, strictly square bounding box)",
      "curvature": "Apple superellipse squircle standard (n=4.5 continuous corner curvature)",
      "internal_padding": "Safe zone margin of 20% between mark boundary and squircle edge"
    }
  },
  "visual_execution_and_treatments": {
    "zero_3d_mandate": "ABSOLUTELY NO 3D RENDERING, NO 3D CLAYMORPHISM, NO VOLUMETRIC EXTRUSION. Pure modern 2D graphic vector design with flat tactile depth.",
    "column_background_architecture": {
      "col_1_full_hero": "Vibrant duo-tone linear gradient field utilizing the primary and secondary brand accents from Stage 1 with subtle depth and glowing highlights",
      "col_2_semi_flat": "Soft tinted background (very pale brand-tinted / off-white field derived from Stage 1 background tokens)",
      "col_3_geometric": "Soft tinted background matching Column 2",
      "col_4_contour_abstract": "Soft tinted background matching Column 2",
      "col_5_minimal_glyph": "Full solid primary brand color fill background directly inherited from Stage 1 primary accent"
    },
    "mascot_and_graphic_framing": {
      "bottom_frame_crop_bleed": "Mascots, characters, and objects anchoring and bleeding cleanly off the bottom squircle edge with heads/tops floating in the upper half",
      "facial_and_eye_primitives": "High-contrast cutout pill eyes (pure white #FFFFFF or obsidian #000000), single oversized circular pupils, minimal sleeping zen arcs, and micro-toothed cutouts",
      "vector_shading": "Flat 2D graphic styling with subtle planar tonal shading, 1px top-rim highlights, soft planar drop shadows under floating marks, clean vector geometry"
    },
    "progressive_5_step_reduction_rule": {
      "col_1": "Full Hero 2D (rich multi-tone gradients, bottom-crop anchor, subtle planar shadows, accessory detail)",
      "col_2": "Semi-Flat (simplified 2D vector, unified body color, signature expressive features on pale tinted squircle)",
      "col_3": "Geometric (abstracted geometric shape using pure circles, pills, and continuous curves on pale tinted squircle)",
      "col_4": "Contour / Line Abstract (monoline or contour vector outline of the abstracted mark on pale tinted squircle)",
      "col_5": "Minimal Glyph (pure solid white negative-space iconic vector glyph centered on full solid brand color squircle)"
    }
  }
}

Design Style & Material Finish
Ultra modern 2026 App Store icon aesthetic
App squircle containers: Strict 1:1 square tiles (width = height), continuous Apple corner radii
Rendering: Pure 2D flat vector art, ultra-clean edges, subtle planar gradients, bottom-anchored crops, zero 3D modeling
Color Palette: Directly inherited primary accent, secondary tones, surface backgrounds, and gradient tokens from Stage 1

Matrix Layout Breakdown (4 Distinct Rows × 5 Columns Progressive Simplification - No Text)
* ROW 1 (Archetype A: Playful Mascot / Character with Bottom-Frame Bleed):
  - Col 1 (Full Hero 2D): Expressive character tied to the app concept emerging from bottom edge of vibrant duo-tone gradient square squircle, stylized pill/circle eyes, subtle planar shadows, accessory detail
  - Col 2 (Semi-Flat): Simplified character silhouette with unified body color, bottom-edge anchor, and signature expressive eyes on pale tinted square squircle
  - Col 3 (Geometric): Abstracted geometric head/body silhouette using pure rounded shapes and solid high-contrast eye cutouts on pale tinted square squircle
  - Col 4 (Contour Abstract): Clean monoline contour outline of the mascot head with single-color accents on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white flat vector icon/glyph of the character head centered on full solid primary brand color square squircle

* ROW 2 (Archetype B: Tactile Action Symbol / Metaphor Badge):
  - Col 1 (Full Hero 2D): Multi-layered symbol representing the core utility from Stage 1 with soft planar cast shadow, high-contrast rim strokes, and duo-tone gradient square squircle
  - Col 2 (Semi-Flat): Streamlined 2D symbol with clean geometry and simplified flat surface layers on pale tinted square squircle
  - Col 3 (Geometric): Solid dual-tone geometric abstraction of the core metaphor embedded inside a continuous line/arc on pale tinted square squircle
  - Col 4 (Contour Abstract): Monoline vector outline of the metaphor badge and action arc on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white negative-space action glyph centered on full solid primary brand color square squircle

* ROW 3 (Archetype C: Dynamic Modern Lettermark / Abstract Initial):
  - Col 1 (Full Hero 2D): Multi-segment dynamic initial/symbol based on the app name with smooth directional gradient flow, subtle inset shadows, and high-contrast gradient square squircle
  - Col 2 (Semi-Flat): Clean dual-tone 2D lettermark with simplified color blocks and crisp vector cuts on pale tinted square squircle
  - Col 3 (Geometric): High-contrast geometric symbol constructed from solid color-blocked primitives on pale tinted square squircle
  - Col 4 (Contour Abstract): Monoline contour vector form of the lettermark on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white vector initial/lettermark cutout centered on full solid primary brand color square squircle

* ROW 4 (Archetype D: Modular Spatial / Connected Node Flow Mark):
  - Col 1 (Full Hero 2D): Layered pathway/stepped nodes representing the app workflow with multi-color surface fills, connected flow geometry, and duo-tone gradient square squircle
  - Col 2 (Semi-Flat): Simplified planar nodes with flat unified connection lines on pale tinted square squircle
  - Col 3 (Geometric): Abstracted geometric flow mark using pure circles and angled connector segments on pale tinted square squircle
  - Col 4 (Contour Abstract): Clean monoline vector schematic outline of the connected nodes on pale tinted square squircle
  - Col 5 (Minimal Glyph): Pure solid white vector stepped-node glyph centered on full solid primary brand color square squircle

### 3. Stage 3 Output Prompt Template: Core Auth & System Onboarding (`/ui-flow`)
```text
[APP NAME] CORE AUTH & ONBOARDING UI PROMPT (8 SCREENS - 1080x1080 CANVAS)

Generate an image of 8 modern mobile app authentication and system entry screen designs presented on a single 1080x1080 canvas for an app called "[APP NAME]".
[APP NAME] is a [1-sentence description from stage 1].

Design Style
Ultra modern 2026 startup aesthetic
Minimalistic, clean, editorial layouts
[Light/Dark mode from stage 1]
Uses exact components from Design System (pill buttons, rounded input fields, soft elevation)
Apple-level clean UX inspired by [Benchmark brands from stage 1]

Color Palette & Typography
[Inherited Palette and Typography tokens from Stage 1]

Screens (8 Screens on a 1080x1080 Canvas)
1. Splash Screen: Centered logo, minimal startup branding, ambient background glow
2. Welcome Screen: Full-bleed hero visual, motivational hook headline, "Continue with Apple", "Continue with Google", "Continue with Email" pill buttons
3. Account Registration: Clean form fields, password validation check indicators, primary brand CTA
4. Sign In Screen: Email/password inputs, biometric face ID prompt, forgot password link
5. OTP / Verification Screen: 4-to-6 digit rounded pin code input boxes, resend timer pill, verify CTA
6. Password Reset / Recovery: Recovery email input, reset instructions card, back to sign in
7. System Permissions Screen: Clean modal sheet requesting camera/photos/notification access with clear value-driven micro-copy
8. Account Confirmed / State: Celebratory state widget, checkmark feedback, "Proceed to Setup" CTA

Direction
Design the app like a real App Store startup product. Display all 8 screens neatly arranged in a cohesive 1080x1080 presentation canvas. Realistic iPhone mockups with clean spacing and production-ready quality.
```
```

### 3. Hardcoded Example Output Prompt: `/app-screenshots` (Dual-Prompt Standard)
```markdown
# 📸 App Store Marketing Screenshots Storyboard: StreakStudio

## 📐 Storyboard Overview (5 Screenshots + Web Hero Mockup)
- **Screen 1 (Hook)**: "Build Unstoppable Habits in 5 Seconds a Day" (Home Feed & Shutter)
- **Screen 2 (Feature)**: "Record & Lock Your Daily Video Clip" (5s Camera Viewport)
- **Screen 3 (Streaks)**: "Watch Your 30-Day Flame Streak Grow" (Milestone Calendar)
- **Screen 4 (Memories)**: "Relive Your Habit Journey in 1-Min Rewinds" (Video Montage)
- **Screen 5 (Paywall)**: "Unlock Unlimited Cloud Rewinds with Pro" (Paywall Trial Modal)
- **Screen 6 (Web Hero)**: Next.js Storefront Hero Mockup with `shots.so` transparent device framing

---

### SCREEN 1 (THE HOOK): Dual-Prompt Specification

#### VARIANT A: Google Stitch Screenshot Prompt
```
=== GOOGLE STITCH APP STORE SCREENSHOT SPECIFICATION ===
Target Platform: Mobile App Store Marketing Screenshot (Vertical 9:16 Portrait)
App Name: StreakStudio
Screenshot Index: 1 of 5 (Hero Hook Screenshot)

[BACKGROUND CANVAS & TYPOGRAPHY HEADER]
- Top Background: Soft dark ambient gradient (#090A0F to #181B26).
- Headline Banner: "Build Unstoppable Habits in 5 Seconds a Day" (Font: Plus Jakarta Sans 28px ExtraBold, Color: #FFFFFF, Center Aligned).
- Subheadline: "No typing required. Just hold to record your daily win." (Font: Inter 14px Medium, Color: #A0A5B5).

[EMBEDDED DEVICE MOCKUP FRAME]
- Device Framing: Frameless vertical 9:16 iPhone 15 Pro titanium frame tilted at 0 degrees centered in the bottom 70% of the canvas.
- Displayed App Screen: StreakStudio Home Dashboard Screen showing 14-day flame streak counter (#FF6D00), cyan 5s video shutter card (#00E5FF), and bottom stadium pill navbar.

[STRICT CONSTRAINTS]
1. 9:16 PORTRAIT CANVAS ONLY.
2. Professional App Store presentation framing with headline copy at the top and app mockup below.
============================================================
```

#### VARIANT B: ChatGPT / Midjourney / DALL-E / Recraft Prompt
```
App Store promotional screenshot for a mobile video habit app named StreakStudio, 9:16 portrait ratio. Dark premium gradient background (#090A0F). Bold white headline at the top reading 'Build Unstoppable Habits in 5 Seconds a Day'. Centered floating 3D iPhone mockup displaying a dark mode app UI with an electric cyan (#00E5FF) video record button and orange flame (#FF6D00) streak badge. Modern Apple App Store feature graphic style, sleek composition, 8k resolution, vector UI graphics --v 6.0 --ar 9:16
```
```

---

## 🚫 Zero Memory Logging Mandate
- Memory updates during UI prompt compilation MUST sit inside `docs/04-ui-design/DESIGN-MEMORY.md` (or fallback paths `docs/DESIGN-MEMORY.md` / `./DESIGN-MEMORY.md`).
- All approved screen prompts sit permanently inside `app-screens/prompts/` (or fallback `app-screens/`).
