# 💻 `app-coder`

Universal AI Agent Coding Skill based on **Vibe Engineering** and **Practical Vibe Coding** principles for building production-grade mobile and web applications inside a Turborepo monorepo.

---

### 📖 Overview

`app-coder` equips AI coding agents with the procedural rules, 8-step execution loop, 10-step build-in-order roadmap, 4-part prompt templates, and hardcoded cheatsheets to build software feature-by-feature without unwanted rewrites, hallucinated imports, or security leaks.

---

### ⚡ Key Features & Operational Guardrails

- **8-Step Vibe Engineering Loop**: Read rules $\rightarrow$ Accept focused prompt $\rightarrow$ Write implementation plan to `prompts/<task-name>.md` $\rightarrow$ Human review $\rightarrow$ Human approval ("yes") $\rightarrow$ Implement code $\rightarrow$ Run typecheck (`tsc`) & lint checks $\rightarrow$ Share manual verification steps.
- **10-Step Build-in-Order Roadmap**: Design System ──> Core UI Screens ──> Auth (Clerk) ──> DB Schemas ──> Seed Data ──> Read Path ──> Core Engine ──> Intelligence ──> Automation ──> Deploy, Polish & Harden.
- **Hardcoded Cheatsheets**:
  * **Cheatsheet 1**: Master `AGENTS.md` project rules template.
  * **Cheatsheet 2**: Implementation plan template (`prompts/<task-name>.md`).
  * **Cheatsheet 3**: 4-part prompt structure (Anchor, Task, Constraints, Reference) & everyday templates.
- **Strict Code Quality & Constraint Library**: Centralized image imports (`constants/images.ts`), NativeWind rules + StyleSheet exception list, Zustand + AsyncStorage state management, strict TypeScript zero `any`, and server/client secrecy boundaries.

---

### 🚀 How to Use

Invoke the skill in any AI assistant:

```markdown
Run app-coder to build <feature_name> using @.agents/skills/ai-fullstack-workflow/04-app-coder.
```
