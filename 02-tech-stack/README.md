# 🛠️ Production Tech Stack & Architecture Skill (`tech-stack`)

Universal, agent-agnostic AI skill for feature-first stack decomposition, 8-layer monorepo infrastructure evaluation, and dual-artifact generation of `docs/03-tech-stack/app-features.md` and `docs/03-tech-stack/TECH-STACK.md`.

---

## ⚡ Features
- **Phase 1 (Feature-by-Feature Stack Decomposition)**: Extracts every V1 feature from `ARCH-PRD.md` and maps exact npm dependencies, surface targets, selection rationales, integration strategies, and step-by-step implementation logic into `docs/03-tech-stack/app-features.md`.
- **Phase 2 (8 Sequential Infrastructure Layers)**: Guides you through 8 architectural layers (Runtimes & Expo Native Tabs, Database & Storage, Auth & Session Security, Styling & Motion, Background Workers, State & Persistence, Observability, Monetization & Privacy) quoting `ARCH-PRD.md` and asking 1–2 specific questions per layer.
- **Dual-Artifact Delivery**: Generates both [`app-features.md`](file:///c:/Users/ADMIN/Desktop/UI%20Design/docs/03-tech-stack/app-features.md) and [`TECH-STACK.md`](file:///c:/Users/ADMIN/Desktop/UI%20Design/docs/03-tech-stack/TECH-STACK.md).
- **Zero Memory Bloat**: Leaves `./MEMORY.md` untouched. All documentation lives inside `docs/03-tech-stack/`.

---

## 🚀 Installation & Usage (1 Command Per Line)

#### Step 1: Add the workflow framework as a Git Submodule
```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```
*Links the fullstack-agent-workflow skill suite into `.agents/skills/` as a clean submodule.*

#### Step 2: Invoke the Skill in your AI assistant
```markdown
tech-stack
```
*Launches Phase 3 to evaluate 8-layer monorepo infrastructure and generate app-features.md & TECH-STACK.md.*
