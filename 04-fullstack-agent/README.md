# 💻 `fullstack-agent`

Universal AI Agent Coding Skill based on **Vibe Engineering** and **Practical Vibe Coding** principles for building production-grade mobile and web applications inside a Turborepo monorepo.

---

### 📖 Overview

`fullstack-agent` equips AI coding agents with procedural rules, autonomous project-tailored `AGENTS.md` generation (`/init-agents`), external skill/doc mapping engine (`docs/05-external-skills/`), mandatory `TECH-STACK.md` ingestion gates, feature-branch & CodeRabbit PR workflows, 8-step execution loops, 10-step build-in-order roadmaps, and hardcoded cheatsheets to build software feature-by-feature without unwanted rewrites, hallucinated imports, or security leaks.

---

### ⚡ Key Features & Operational Guardrails

- **Feature-Branch & CodeRabbit PR Review Protocol**: 7-step isolated Git lifecycle (Feature Branch $\rightarrow$ Build & Test $\rightarrow$ Stage & Commit $\rightarrow$ Push Branch $\rightarrow$ CodeRabbit PR AI Review $\rightarrow$ Merge to Main $\rightarrow$ Sync Local Main).
- **Pixel-Perfect Visual AI Diff Micro-Loop (Module 6)**: 4-step visual verification loop (Build $\rightarrow$ Screenshot $\rightarrow$ Compare $\rightarrow$ Refine) using `app-screens/<screen_id>.png` as target reference, powered by a Dual-Mode Screenshot Capture Protocol (iOS `xcrun`, Android `adb`, Web `Playwright` + User fallback) and a 10-Point Multimodal Comparison Matrix.
- **Mandatory `TECH-STACK.md` Ingestion Gate**: Compels agents to inspect `docs/03-tech-stack/TECH-STACK.md` before planning and record proof under `## 2. What It Read` in `prompts/<task-name>.md`.
- **Autonomous `AGENTS.md` & Minimum Environment Generator (`/init-agents`)**: Ingests `docs/` artifacts, generates a project-tailored `./AGENTS.md` at root, secures `.gitignore`, sets up starting `.env.example`, and tracks initial setup status.
- **Progressive Environment & Skill Unlocking Engine (`docs/05-external-skills/`)**: Unlocks `.env` keys, framework docs (`clerk`, `convex`, `stripe`, `supabase`), and native build options Just-in-Time as features are built along the 10-step roadmap.
- **8-Step Vibe Engineering Loop**: Read rules & tech stack $\rightarrow$ Accept focused prompt $\rightarrow$ Write implementation plan to `prompts/<task-name>.md` $\rightarrow$ Human review $\rightarrow$ Human approval ("yes") $\rightarrow$ Implement code on branch $\rightarrow$ Run Visual AI Diff Loop $\rightarrow$ CodeRabbit PR & Main Sync.
- **10-Step Build-in-Order Roadmap**: Design System ──> Core UI Screens ──> Auth (Clerk) ──> DB Schemas ──> Seed Data ──> Read Path ──> Core Engine ──> Intelligence ──> Automation ──> Deploy, Polish & Harden.

---

### 🚀 How to Use

Invoke the skill in any AI assistant:

```markdown
Run /fullstack-agent-help to view the complete Phase 5 manual & operational guide.
Run /fullstack-agent-shortcuts to see all trigger shortcuts.
Run /init-agents to generate your project-tailored AGENTS.md file.
Run fullstack-agent to build <feature_name> using @.agents/skills/ai-fullstack-workflow/04-fullstack-agent.
```
