# 🚀 `fullstack-agent-workflow`

Universal, Enterprise-Grade 5-Phase AI Agent Workflow for Building Multi-Surface Applications across Expo (React Native) and Next.js (App Router) inside a Turborepo Monorepo.

---

## ⚡ Quick-Start Installation (2 Commands)

To ensure your app code commits ONLY to your app repository while keeping `design_catalog.json` learnings linked, initialize your app repository first and add the workflow as a Git Submodule:

```bash
# 1. Create folder & initialize local git repository
mkdir my-app && cd my-app
git init

# 2. Add the workflow as a Git Submodule
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```

### 🔄 Working with Submodules (Existing Repos & Updates)

```bash
# Clone an existing project with the workflow submodule included:
git clone --recursive <your-app-repo-url>

# Or if you already cloned without submodules, initialize it:
git submodule update --init --recursive

# Update the workflow skill to the latest version at any time:
git submodule update --remote --merge
```

Once installed, open your project in your AI assistant (Antigravity, Claude Code, Cursor, Windsurf) and type:

> **`"Run /start-workflow to guide me through building my app"`**

---

## 🗺️ 5-Phase Sequential Workflow Map

```
+-----------------------------------------------------------------------------------+
| Phase 0: Market Research & 20 App Ideas Pitch (/app-idea)                          |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 1: Creative Vibe Jamming & Brand Identity (/app-brief)                      |
| Outputs: docs/01-app-brief/APP-BRIEF.md                                           |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 2: Product Strategy, ASO & System PRD Architecture (/prd)                    |
| Outputs: docs/02-prd-research/ARCH-PRD.md & aso_keywords.json                    |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 3: Monorepo Architecture & Feature-First Stack (tech-stack)                 |
| Outputs: docs/03-tech-stack/app-features.md & TECH-STACK.md                       |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 4: Design Tokens, Generative UI Prompts, Dual App Icons (/ui-theme, /ui-flow)|
| Outputs: app-screens/*.png, app-screens/prompts/, docs/04-ui-design/DESIGN-MEMORY |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 5: Autonomous Tailored AGENTS.md & External Skills Mapping (/init-agents)   |
| Outputs: ./AGENTS.md, docs/05-external-skills/<library>.md                        |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
| Phase 5 (Build): Vibe Engineering & Visual AI Diff Micro-Loop (app-coder)         |
| Feature Branch ──> Visual AI Diff (100%) ──> CodeRabbit PR ──> Merge to Main      |
+-----------------------------------------------------------------------------------+
```

---

| Phase / Trigger | Shortcut Command | Action / Description | Output Artifact / Standard |
| :--- | :--- | :--- | :--- |
| **Universal Help** | **`/help`** *(alias: `/workflow-help`)* | Master Directory of ALL commands across all 5 skills. | Complete Help Menu |
| **Universal Shortcuts** | **`/shortcuts`** | Fast cheat-sheet list of all skill shortcuts. | Shortcut Table |
| **Onboarding** | **`/start-workflow`** | Runs Submodule Pre-Flight Audit Gate & interactive sitemap. | Interactive Guide |
| **Phase 0** | **`/app-idea`** | Researches market trends, competitor gaps, YouTube transcripts, and pitches 20 data-backed app ideas. | 20 App Ideas Table |
| **Phase 1** | **`/app-brief`** | Creative vibe jamming for brand identity, mascot quirks, sensory personality, and copy tone. | `docs/01-app-brief/APP-BRIEF.md` |
| **Phase 2** | **`/prd`** | Executes 8-question discovery loop for ASO keywords, web surface models, compliance triad, and V1 scope. | `docs/02-prd-research/ARCH-PRD.md` |
| **Phase 3** | **`tech-stack`** | Feature-first stack decomposition across 8 Turborepo monorepo layers and DB client schemas. | `docs/03-tech-stack/TECH-STACK.md` |
| **Phase 4** | **`/ui-theme`** | Ingests PRD & App Brief, locks 2-3 color palettes and Google Fonts pairings, audits visual assets in `./app_theme.json`. | **Design System Token Lock** |
| **Phase 4** | **`/ui-flow`** | Compiles Generative UI screen prompt blueprints organized by user flow (Onboarding, Auth, Paywall, Main Tabs, Happy Path). | **Generative UI Screen Prompts** |
| **Phase 4** | **`/app-icon`** | Generates 20-icon app logo exploration matrix prompt across 4 rows × 5 columns (1080x1080 \| 100% 2D vector). | **20-Icon Matrix Prompt (ChatGPT / Midjourney)** |
| **Phase 4** | **`/app-screenshots`** | Generates 5 panoramic App Store marketing screenshots + 1 Next.js web storefront hero screen. | **Dual-Prompt Standard** (Vector Spec + Midjourney) |
| **Phase 5 (Setup)** | **`/init-agents`** | Ingests `docs/` and autonomously generates a 100% project-tailored `./AGENTS.md` file at the root. | Tailored `./AGENTS.md` |
| **Phase 5 (Build)** | **`fullstack-agent`** | Executes Vibe Engineering 8-step loop, Feature-Branch & CodeRabbit PR workflow, and builds monorepo TypeScript code. | `prompts/<task>.md` & Code |

---

## 📂 Repository Directory Structure

```
fullstack-agent-workflow/
├── README.md                          <── Root Documentation & Quick-Start Guide
│
├── 00-workflow-guide/                 <── Interactive Onboarding Skill (/start-workflow, /help)
│   └── SKILL.md
│
├── 01-prd-skill/                      <── Phase 0, 1, 2: Ideation, Vibe Brief & PRD (/app-idea, /app-brief, /prd, /prd-skill-help)
│   ├── SKILL.md
│   └── README.md
│
├── 02-tech-stack/                     <── Phase 3: Monorepo Stack & DB Schemas (tech-stack, /tech-stack-help)
│   ├── SKILL.md
│   └── README.md
│
├── 03-ui-skill/                       <── Phase 4: Generative UI Prompts, App Icons & Screenshots (/ui-theme, /ui-flow, /ui-help)
│   ├── SKILL.md
│   ├── README.md
│   └── scripts/                        <── CLI Prompt Formatter & Blueprint Extractor Helper Scripts
│
└── 04-fullstack-agent/                <── Phase 5: Codebase Builder & AGENTS.md Generator (/init-agents, fullstack-agent, /fullstack-agent-help)
    ├── SKILL.md
    └── README.md
```

---

## 🎨 Key Features & Operational Guardrails

- **Git Submodule Pre-Flight Audit Gate**: `/start-workflow` automatically verifies that `.agents/skills/fullstack-agent-workflow` is connected as a Git Submodule, guaranteeing zero repo clashes between app code (`my-app.git`) and workflow skills.
- **Project-Local UI Catalog**: `design_catalog.json` lives in your app workspace root (`./design_catalog.json`), keeping app extractions 100% isolated with zero submodule commit clutter.
- **Feature-Branch & CodeRabbit PR Protocol**: 7-step isolated Git lifecycle (Feature Branch $\rightarrow$ Build & Test $\rightarrow$ Stage & Commit $\rightarrow$ Push Branch $\rightarrow$ CodeRabbit PR AI Review $\rightarrow$ Merge to Main $\rightarrow$ Sync Local Main).
- **Pixel-Perfect Visual AI Diff Micro-Loop (Module 6)**: 4-step visual verification loop (Build $\rightarrow$ Screenshot $\rightarrow$ Compare $\rightarrow$ Refine) using `app-screens/<screen_id>.png` as target reference, powered by a Dual-Mode Screenshot Capture Protocol (iOS `xcrun`, Android `adb`, Web `Playwright` + User fallback) and a 10-Point Multimodal Comparison Matrix.
- **Mandatory `TECH-STACK.md` Ingestion Gate**: Compels agents to inspect `docs/03-tech-stack/TECH-STACK.md` before planning and record proof under `## 2. What It Read` in `prompts/<task-name>.md`.
- **Autonomous `AGENTS.md` Generator (`/init-agents`)**: Compiles a 100% project-tailored `./AGENTS.md` at the project root by ingesting completed `docs/` artifacts.
- **External Skill & Doc Mapping Engine (`docs/05-external-skills/`)**: Maps required framework/dependency skills (Clerk, Convex, Expo, Stripe, Supabase), checks local cache, guides developer on missing skills/docs, and stores doc snippets for permanent future reference.
- **Zero Memory Collision Policy**: Tracks UI design system locks, registered SVG icons, and screen versions in `docs/04-ui-design/DESIGN-MEMORY.md` to guarantee zero collisions with main agent memory.
- **Dual-Prompt Standard**: Generates Dual Prompts (Vector spec + ChatGPT / Midjourney prompt) for App Icons (`/app-icon`) and Storefront Screenshots (`/app-screenshots`).
- **Google Fonts Pairing Engine**: Suggests 2–3 curated font combinations with clickable specimen preview links (`https://fonts.google.com/specimen/...`) for explicit user approval.
- **PRD Content Extraction Mandate**: Strictly ingests real domain copy, CTAs, and metrics from `docs/` with zero placeholder text ("Lorem Ipsum", "John Doe", "$99").
- **Canonical Turborepo Monorepo Architecture**: Enforces `apps/native` (Expo Router), `apps/web` (Next.js App Router), `packages/ui`, `packages/db`, and `packages/auth`.

---

## 📄 License

MIT License. Free for open-source and commercial software development.
