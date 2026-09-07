# 💻 `app-coder`

Universal AI Agent Coding Skill based on **Vibe Engineering** and **Practical Vibe Coding** principles for building production-grade mobile and web applications inside a Turborepo monorepo.

---

### 📖 Overview

`app-coder` equips AI coding agents with the procedural rules, autonomous project-tailored `AGENTS.md` generation (`/init-agents`), external skill and documentation mapping engine (`docs/05-external-skills/`), 8-step execution loop, 10-step build-in-order roadmap, 4-part prompt templates, and hardcoded cheatsheets to build software feature-by-feature without unwanted rewrites, hallucinated imports, or security leaks.

---

### ⚡ Key Features & Operational Guardrails

- **Autonomous `AGENTS.md` Generator (`/init-agents`)**: Ingests `docs/` (App Brief, System PRD, Tech Stack, UI Design Memory) and generates a 100% project-tailored `./AGENTS.md` at the project root.
- **External Skill & Doc Mapping Engine (`docs/05-external-skills/`)**: Analyzes feature requests to map required framework/dependency skills (Clerk, Convex, Expo, Stripe, Supabase), checks local cache, guides developer on missing skills/docs, and stores doc snippets for permanent future reference.
- **8-Step Vibe Engineering Loop**: Read rules $\rightarrow$ Accept focused prompt $\rightarrow$ Write implementation plan to `prompts/<task-name>.md` $\rightarrow$ Human review $\rightarrow$ Human approval ("yes") $\rightarrow$ Implement code $\rightarrow$ Run typecheck (`tsc`) & lint checks $\rightarrow$ Share manual verification steps.
- **10-Step Build-in-Order Roadmap**: Design System ──> Core UI Screens ──> Auth (Clerk) ──> DB Schemas ──> Seed Data ──> Read Path ──> Core Engine ──> Intelligence ──> Automation ──> Deploy, Polish & Harden.
- **Hardcoded Cheatsheets**:
  * **Cheatsheet 1**: Tailored `AGENTS.md` project rules template.
  * **Cheatsheet 2**: Implementation plan template (`prompts/<task-name>.md`) with External Skills Status.
  * **Cheatsheet 3**: 4-part prompt structure (Anchor, Task, Constraints, Reference) & everyday templates.

---

### 🚀 How to Use

Invoke the skill in any AI assistant:

```markdown
Run /init-agents to generate your project-tailored AGENTS.md file.
Run app-coder to build <feature_name> using @.agents/skills/ai-fullstack-workflow/04-app-coder.
```
