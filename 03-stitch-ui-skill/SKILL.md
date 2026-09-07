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
| **UI Screenshots Archive** | `app-screens/<screen_id>.png` | `app-screens/images/<screen_id>.png` | `./<screen_id>.png` |
| **Theme & SVG Registry** | `./app-theme.json` | `./app_theme.json` | `resources/app_theme.json` |

### 🛠️ CLI Formatter Catalog Lookup Fallback Array (`scripts/stitch_formatter.js`)
When running prompt compilation scripts, the script dynamically evaluates candidate paths until `design_catalog.json` is found:
1. `path.join(process.cwd(), 'design_catalog.json')`
2. `path.join(__dirname, '..', 'resources', 'design_catalog.json')`
3. `path.join(__dirname, '..', '..', '03-stitch-ui-skill', 'resources', 'design_catalog.json')`
4. `path.join(__dirname, '..', '..', 'stitch-ui-skill', 'resources', 'design_catalog.json')`

---

## ⚡ Shortcut Slash Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/stitch-ui-help`** | `/stitch-ui --help`, `/ui-help` | Displays complete manual overview: what the skill does, file schemas (`app_theme.json`, `design_catalog.json`), phases, and rules. |
| **`/stitch-ui-shortcuts`** | `/stitch-ui --shortcuts`, `/ui-shortcuts` | Displays fast reference list of all available UI shortcut triggers and what they do. |
| **`/ui-flow`** | Generates UI screen prompt blueprints organized by single user flow (Onboarding & Auth, Activation & Paywall, Main App Tabs, Happy Path Core Loop). Ingests `docs/` for real copy. | **Google Stitch Prompt ONLY** |
| **`/app-icon`** | Generates 5 distinct logo exploration concept canvases (Mascot, Metaphor, Lettermark, Geometric, Wordmark) for the app brand. | **Dual-Prompt Standard** (Variant A: Stitch + Variant B: ChatGPT / Midjourney) |
| **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero mockup screen (`shots.so` framing). | **Dual-Prompt Standard** (Variant A: Stitch + Variant B: ChatGPT / Midjourney) |
| **`/ui-init`** | Auto-creates `app_theme.json`, `design_catalog.json`, `app-screens/` folder, and `docs/04-ui-design/DESIGN-MEMORY.md` in current project root. | Operations Script |
| **`/ui-extract`** | Extracts attached reference screenshot into color-agnostic JSON blueprint via `scripts/add_catalog_blueprint.js` and appends to `design_catalog.json`. | Catalog Blueprint JSON |
| **`/ui-compile`** | Compiles a Stitch prompt for a specific screen from `design_catalog.json` with domain adaptation (`node scripts/stitch_formatter.js --app_domain`). | **Google Stitch Prompt ONLY** |
| **`/ui-sync`** | Batch compiles & updates ALL archived screen prompts in `app-screens/` to reflect global theme changes (`node scripts/stitch_formatter.js --all`). | Formatter Sync |
| **`/ui-approve`** | Saves current approved Google Stitch prompt into `app-screens/prompts/<screen_id>.md` and updates `docs/04-ui-design/DESIGN-MEMORY.md`. | Markdown File Archive |

---

## 📄 PRD Content Extraction Mandate (Zero Dummy Text Rule)

When compiling UI screens (`/ui-flow`), App Icons (`/app-icon`), or Storefront Screenshots (`/app-screenshots`), the agent **MUST INGEST** the authoritative documentation files using the primary and fallback paths defined above:
- `APP-BRIEF.md` (Product Identity, Mascot, Colors, Copy & Vibe)
- `ARCH-PRD.md` (Features, JTBD, Monorepo, Onboarding Carousel, Paywall, Permissions)
- `app-features.md` (Feature-First Stack Decomposition)
- `TECH-STACK.md` (Monorepo Infrastructure & DB Schemas)

### Strict Copy Directives:
1. **Real Domain Copy Only**: All titles, labels, card descriptions, stat counters, badge microcopy, and button text MUST be pulled directly from the PRD or adapted to the app's real domain.
2. **Zero Placeholder String Policy**: Absolutely NO "Lorem Ipsum", "John Doe", "$99", "Sample User", "Feature Title 1", "Lorem dolor sit amet", or generic placeholders.
3. **Exact Brand Theme Alignment**: Use the exact Hex codes, color tokens, and Google Fonts pairings defined in `app_theme.json` and `APP-BRIEF.md`.

---

## 🏛️ System Architecture & File Structure

```
+-----------------------------------------------------------------+
| Tier 1: Reference UI Extraction (design_catalog.json)           |
| Color-agnostic structural layout & hand-curated specs           |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 2: App Brand System (app_theme.json)                       |
| Color tokens, Google Fonts, SVG icon registry & navbar          |
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
| Permanent markdown files for approved screen prompts            |
+-----------------------------------------------------------------+
                               │
                               ▼
+-----------------------------------------------------------------+
| Tier 5: Dedicated UI Memory Log (docs/04-ui-design/DESIGN-MEMORY)|
| Dedicated UI design system state & active screen version log    |
+-----------------------------------------------------------------+
```

---

## 📋 Interactive App Design Lifecycle Protocol (4 Phases)

### Phase 1: Foundation Component Lock
Confirm foundational components (Nav Bar, Action Buttons, Headers) from `app_theme.json` and `APP-BRIEF.md` before generating full screens. Write specs to `app_theme.json.locked_navigation_bar`.

### Phase 2: Screen Generation Interview & Reference Image Selection
1. Ask user: *"For the **[Screen Name] Screen**, do you have a reference UI screenshot / inspiration image you'd like me to extract and use, or should I select and adapt the best layout blueprint from our `design_catalog.json` based on your PRD?"*
2. **Branch A (Reference Provided)**: Extract visual blueprint into JSON $\rightarrow$ Append to `design_catalog.json` via `scripts/add_catalog_blueprint.js` $\rightarrow$ Compile prompt.
3. **Branch B (No Reference Provided)**: Query `design_catalog.json` by `domain_tags` $\rightarrow$ Select best blueprint $\rightarrow$ Adapt domain copy from `docs/` $\rightarrow$ Compile prompt.
4. **Single Active Theme Delivery**: Output ONE prompt matching the active theme profile.

### Phase 3: Screen Approval, Archiving & Visual Hand-off Protocol (`app-screens/`)
1. Save generated/approved visual screen image to `app-screens/<screen_id>.png`.
2. Save approved screen prompt spec to `app-screens/prompts/<screen_id>.md` (fallback `app-screens/<screen_id>.md`).
3. Update `docs/04-ui-design/DESIGN-MEMORY.md` (fallback `docs/DESIGN-MEMORY.md`).
4. **Visual Hand-off to `04-app-coder`**: Screen images in `app-screens/<screen_id>.png` serve as the target design references for `04-app-coder`'s Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine).
5. Single Active File Overwrite Mandate: Replace previous version files (`_v1`) upon layout approval.

### Phase 4: Hand-Curated Component Library Policy
Save component snippets to `design_catalog.json.components` only when explicitly approved by user.

### Phase 5: Catalog Learner Commit Protocol (`.agents/skills/ai-fullstack-workflow`)
When `/ui-extract` appends a newly extracted UI blueprint to `design_catalog.json`, the agent **MUST explicitly state the Catalog Learner Commit Protocol**:

```markdown
#### 📍 Design Catalog Commit Specification:
- **Target File**: `03-stitch-ui-skill/resources/design_catalog.json`
- **Execution Path**: `.agents/skills/ai-fullstack-workflow`
- **Target Repository**: `https://github.com/thenerxboy/ai-fullstack-workflow.git`

To sync this newly learned screen blueprint back to the shared fullstack workflow repository:
```bash
cd .agents/skills/ai-fullstack-workflow
git add 03-stitch-ui-skill/resources/design_catalog.json
git commit -m "feat(catalog): add [screen_id] extracted color-agnostic blueprint"
git push origin main
cd ../../..
```
*Note: This commits ONLY the newly learned UI design blueprint to the shared skills repo.*
```

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

## 📋 Hardcoded Unabridged Output Prompt Examples

### 1. Hardcoded Example Output Prompt: `/ui-flow` (Google Stitch Screen Format)
```markdown
=== GOOGLE STITCH PROMPT SPECIFICATION ===
Target Platform: Mobile Smartphone App Screen (Vertical 9:16 Portrait)
Target App Name: StreakStudio (5-Sec Video Habit Journal)
Active Theme Profile: "Cyber Obsidian Dark" (cyber_obsidian)
Design Title: StreakStudio Home Daily Streak Feed & 5s Video Recorder Screen
Target Viewport: Mobile Smartphone App Screen (Vertical 9:16 Portrait)
Screen Category: home

[CRITICAL CANVAS ASPECT RATIO INSTRUCTION]
Canvas Type: Mobile Phone App Screen (Narrow Vertical Portrait 9:16 aspect ratio).
Do NOT render a widescreen desktop dashboard, web browser canvas, or wide tablet container. The generated UI canvas MUST be a standard narrow vertical smartphone app screen.

[GOAL & INSTRUCTIONS FOR GOOGLE STITCH]
Generate a high-fidelity mobile app screen for StreakStudio using the exact structural layout, component positions, and element scale below. Apply the specified app color palette and styling tokens into the design.

[EMBEDDED MATHEMATICAL SVG VECTOR ICON MANDATE]
CRITICAL MANDATORY DIRECTIVE FOR ALL ICONS:
- EVERY SINGLE ICON on this screen MUST BE DRAWN USING EXPLICIT MATHEMATICAL SVG PATH DATA (<svg width="..." height="..." viewBox="0 0 24 24"><path d="..."/></svg>).
- Do NOT use emojis, text placeholders, or generic font names for icons under any circumstances!

[PROJECT CENTRAL SVG REGISTRY (APP_THEME.JSON)]
{
  "flame_streak": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FF6D00\" stroke-width=\"2\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/></svg>",
  "video_camera": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#00E5FF\" stroke-width=\"2\"><polygon points=\"23 7 16 12 23 17 23 7\"/><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"/></svg>",
  "plus_add": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"2.5\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>"
}

[APP DESIGN SYSTEM COLOR PALETTE & TYPOGRAPHY]
- Primary Brand Accent: #00E5FF (Electric Cyan)
- Secondary Vibe Accent: #FF6D00 (Flame Orange)
- Surface Background: #090A0F (Cyber Obsidian)
- Container Surface: #181B26
- High-Contrast Text: #FFFFFF (Font: Plus Jakarta Sans Bold)
- Body & Muted Text: #A0A5B5 (Font: Inter Medium)
- Subtle Border: #232736

[EXACT LAYOUT & COMPONENT BLUEPRINT]
1. Header Bar (56px Height):
   - Left: App Mascot Icon (Sparky Flame) + Title "StreakStudio" (Font: Plus Jakarta Sans 22px Bold, Color: #FFFFFF).
   - Right: Active Streak Counter Pill (#181B26 background, 1.5px #232736 border, rounded-full) containing SVG Flame Icon + Text "14 Days 🔥" (#FF6D00, 14px SemiBold).

2. Hero Daily Action Card (#181B26 background, 24px rounded corners, 1.5px #00E5FF border):
   - Card Badge: "TODAY'S 5-SEC HABIT" (#00E5FF background, #090A0F text, 11px Bold, 6px padding).
   - Card Title: "Record Your 5-Second Morning Workout Clip" (Font: Plus Jakarta Sans 18px Bold, #FFFFFF).
   - Center Visual: Video Viewport Frame (9:16 thumbnail preview with dark low-opacity overlay) featuring camera shutter button icon (64px circle, #00E5FF fill, white inner ring).
   - CTA Primary Action Button: Full-width 52px height stadium pill button (#00E5FF solid fill, #090A0F text, Plus Jakarta Sans 16px Bold) reading "Hold to Record 5s Clip".

3. Daily Streak Milestones Grid:
   - Section Title: "Weekly Consistency" (#FFFFFF 16px Bold).
   - 7 Day Tracker Pills (Mon - Sun): Completed days (Mon-Fri) rendered in solid #FF6D00 fill with white checkmarks; Today (Sat) pulsing cyan ring; Sun locked gray.

[LOCKED APP NAVIGATION SYSTEM]
Render ONLY this single floating stadium pill navigation bar (80px height, 32px corner radius, #18181B dark surface container):
- Tab 1 [Home - Active]: #00E5FF highlighted pill container, icon + "Today" label.
- Tab 2 [Streaks]: Muted text #A0A5B5, flame icon + "Streaks" label.
- Tab 3 [Memories]: Muted text #A0A5B5, video gallery icon + "Memories" label.
- Tab 4 [Profile]: Muted text #A0A5B5, user icon + "Profile" label.

[STRICT GENERATION CONSTRAINTS]
1. MOBILE PORTRAIT CANVAS ONLY (9:16 Portrait Aspect Ratio).
2. ZERO SHADOWS & ZERO GLOWS (Flat 2D surfaces only).
3. ZERO ANIMATION RULE (100% static UI render).
4. LOCKED SINGLE NAVIGATION BAR (Do NOT render multiple nav bars).
============================================================
```

### 2. Hardcoded Example Output Prompt: `/app-icon` (Dual-Prompt Standard)
```markdown
# 📱 App Icon Design Exploration: StreakStudio — 5-Sec Video Habit Journal

## 🎨 Design Vision & Canvas Specs
- **App Concept**: 5-Second Video Habit Journal & Daily Streak Tracker
- **Brand Vibe**: Energetic, Tactile, Modern, Cyber Obsidian & Flame Orange
- **Canvas Requirements**: Standard App Icon (1:1 Square with rounded squircle mask framing, high contrast, zero tiny text)

---

### VARIANT A: Google Stitch Canvas Exploration Prompt
```
=== GOOGLE STITCH APP ICON SPECIFICATION ===
Target Platform: Mobile App Icon Spec (1:1 Aspect Ratio Canvas)
App Name: StreakStudio
Brand Colors: #00E5FF (Electric Cyan), #FF6D00 (Flame Orange), #090A0F (Cyber Obsidian)

[GOAL & INSTRUCTIONS FOR GOOGLE STITCH]
Generate an App Store high-resolution mobile app icon on a 1:1 square canvas with iOS squircle corner mask framing.

[VISUAL COMPOSITION BLUEPRINT]
- Icon Container: Dark obsidian gradient background (#090A0F top-left to #12141D bottom-right) with a subtle 2px #00E5FF border highlight around the squircle edge.
- Central Emblem: A stylized dual-symbol fusion of a 5-second video camera shutter aperture ring intertwined with a vibrant #FF6D00 flame vector symbol.
- Center Shutter Ring: Clean 64px circular aperture ring drawn in #00E5FF solid stroke with a centered play triangle.
- Lighting & Surface: Flat 2D vector graphic aesthetics. Zero photorealistic glossy glass reflection, zero outer ambient neon glow, zero complex gradient mesh.
- Composition Rule: Center the emblem with 25% padding on all sides. Do NOT add app title text inside the icon.

[STRICT GENERATION CONSTRAINTS]
1. 1:1 SQUARE ASPECT RATIO ONLY with rounded squircle boundary.
2. FLAT 2D VECTOR SURFACE ONLY. No 3D render depth or hyper-realistic textures.
3. NO SMALL TEXT INSIDE ICON. Emblem symbol ONLY.
============================================================
```

---

### VARIANT B: ChatGPT / Midjourney / DALL-E / Recraft Generative Prompt
```
App store icon for a mobile habit tracker app named StreakStudio, 1:1 aspect ratio, centered emblem composition on a dark obsidian background (#090A0F). The icon features a striking minimalistic flat 2D vector logo combining an electric cyan (#00E5FF) video camera shutter ring and a bright flame orange (#FF6D00) streak icon. Clean geometric lines, smooth curves, iOS squircle shape framing, bold colors, professional App Store aesthetic, vector graphic style, high contrast, no words or text, isolated design on dark background --v 6.0 --ar 1:1 --no text, font, photorealism, glossy glass, shadows
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
