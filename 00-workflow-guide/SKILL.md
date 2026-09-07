---
name: start-workflow
description: Interactive onboarding sitemap, phase navigator, and quick-start guide for the AI Full-Stack Workflow suite (/start-workflow).
---

# 🚀 AI Full-Stack Workflow Onboarding & Sitemap Skill (`start-workflow`)

This skill acts as the interactive onboarding sitemap and phase navigator for the entire `ai-fullstack-workflow` suite.

> [!IMPORTANT]
> When the user types **`/start-workflow`**, asks *"Where do I start?"*, or requests help getting started with the workflow, the agent MUST output the interactive onboarding guide below and prompt the user to choose their starting phase.

---

## 🛡️ Git Submodule Pre-Flight Audit Gate

Before presenting the onboarding sitemap or executing workflow commands, the agent **MUST ALWAYS check the workspace Git & Submodule status**:

1. **Audit Check**: Check if current project root is a Git repository (`.git` exists) AND if `.agents/skills/ai-fullstack-workflow` is registered as a Git Submodule.
2. **If Validated (Submodule Confirmed)**: Display status badge:
   `✅ App Workspace Initialized | ✅ Skills Submodule Linked (.agents/skills/ai-fullstack-workflow)`
3. **If NOT a Submodule (Warning Blueprint)**: If the workspace root is not a Git repo or if skills are cloned without submodule status, display this prominent warning before proceeding:

> ⚠️ **Git Submodule Pre-Flight Warning**: Your project folder is not set up with `ai-fullstack-workflow` as a Git Submodule.
> 
> **Why this matters**:
> - **Repo Isolation**: Guarantees your app code commits ONLY to your project repository (`my-app.git`).
> - **Catalog Learnings**: Allows `design_catalog.json` updates from `/ui-extract` to commit back to `ai-fullstack-workflow.git`.
> 
> **Run this 3-step setup in your project terminal to fix**:
> ```bash
> git init
> git remote add origin https://github.com/your-username/my-app.git
> git submodule add https://github.com/thenerxboy/ai-fullstack-workflow.git .agents/skills/ai-fullstack-workflow
> ```

---

## 🗺️ Interactive Onboarding Response Blueprint

```markdown
👋 Welcome to **`ai-fullstack-workflow`**! I am your AI Lead Architect and product partner, ready to guide you step-by-step through taking your app concept from Vibe ──> PRD ──> UI ──> Codebase.

Here is our 5-Phase Production Journey:

1️⃣ **Phase 0: Market Research & 20 App Ideas Pitch** (`/app-idea`)
   - Researches micro-niches, competitor complaints, and search trends to pitch 20 data-backed app concepts.

2️⃣ **Phase 1: Creative Vibe Jamming & Google Fonts Selection** (`/app-brief`)
   - Jams on identity, mascot, color psychology, and Google Fonts pairings with clickable specimen preview links.
   - Outputs: `docs/01-app-brief/APP-BRIEF.md`

3️⃣ **Phase 2: Product Strategy, ASO & System PRD Architecture** (`/prd`)
   - Executes an 8-question discovery loop for ASO keywords, web surface models, compliance triad, and V1 scope.
   - Outputs: `docs/02-prd-research/ARCH-PRD.md` & `aso_keywords.json`

4️⃣ **Phase 3: Monorepo Architecture & Feature-First Stack** (`tech-stack`)
   - Feature-first stack decomposition across 8 monorepo layers (Expo Router, Next.js, Convex/Supabase, Clerk).
   - Outputs: `docs/03-tech-stack/app-features.md` & `TECH-STACK.md`

5️⃣ **Phase 4: Stitch UI Prompts, Dual App Icons & Screenshots** (`/ui-flow`, `/app-icon`, `/app-screenshots`)
   - Compiles Google Stitch UI prompts, Dual-Prompt App Icons, and panoramic App Store marketing screenshots.
   - Outputs: `app-screens/*.png` (reference screens), `app-screens/prompts/<screen_id>.md`, `docs/04-ui-design/DESIGN-MEMORY.md`

6️⃣ **Phase 5: Tailored AGENTS.md Setup & External Skills Mapping** (`/init-agents`)
   - Ingests `docs/` to generate a 100% project-tailored `./AGENTS.md` at project root.
   - Maps framework/dependency skills and caches docs in `docs/05-external-skills/`.

7️⃣ **Phase 5 (Build): Vibe Engineering & Visual AI Diff Micro-Loop** (`app-coder`)
   - Executes 8-step Vibe Engineering loop, writes plans to `prompts/<task>.md`, runs Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine) against `app-screens/*.png`, and merges feature branch after CodeRabbit PR review.

---

### 🏁 Where would you like to start?

- Type **`/app-idea`** to research 20 data-backed app ideas for a specific niche.
- Type **`/app-brief`** if you already have an app idea and want to jam on the vibe, mascot, and Google Fonts!
- Type **`/prd`** if you have `APP-BRIEF.md` ready and want to build the System PRD.
- Type **`/ui-flow`** if your PRD is locked and you want to generate Google Stitch UI prompt blueprints!
- Type **`/init-agents`** if your design system and PRD are ready and you want to generate your tailored `./AGENTS.md` file!
```

---

## ⚡ Shortcut Commands Reference

- **`/start-workflow`**: Displays this interactive onboarding sitemap and prompt menu.
- **`/app-idea`**: Launches Phase 0 (20 App Ideas Pitch).
- **`/app-brief`**: Launches Phase 1 (Creative Vibe Brief & Google Fonts Selection).
- **`/prd`**: Launches Phase 2 (System ARCH-PRD & ASO Keywords).
- **`tech-stack`**: Launches Phase 3 (Monorepo Infrastructure & DB Schemas).
- **`/ui-flow`**: Compiles Phase 4 UI screen prompt blueprints.
- **`/app-icon`**: Generates Phase 4 Dual-Prompt logo exploration canvases.
- **`/app-screenshots`**: Generates Phase 4 Dual-Prompt App Store marketing screenshots.
- **`/init-agents`**: Ingests `docs/` and generates a 100% project-tailored `./AGENTS.md` file.
- **`app-coder`**: Launches Phase 5 full-stack code generation.
