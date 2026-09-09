# 🚀 Product Ideation & PRD Architecture Skill (`prd-skill`)

Universal, agent-agnostic AI skill combining 20-app-idea market research, creative vibe brief drafting, product positioning, ASO keyword research, competitor audits, and 15-section system PRD architecture into `docs/01-app-brief/APP-BRIEF.md` and `docs/02-prd-research/ARCH-PRD.md`.

---

## ⚡ Shortcut Commands & Trigger Flags

You can invoke `prd-skill` at any stage using these shortcut commands:

- **`/app-idea`**: Launches **Phase 0** (Researches market trends, YouTube resources, competitor gaps, and pitches **20 data-backed app ideas**).
- **`/app-brief`**: Launches **Phase 1** (Creative Vibe Jamming for brand identity, mascot quirks, sensory personality, copy tone, and 20-section `APP-BRIEF.md`).
- **`/prd`**: Launches **Phase 2** (Ingests `APP-BRIEF.md`, executes the 8-question discovery loop, locks V1 feature scope, and generates `ARCH-PRD.md`).

---

## 💡 Pure UX & Product Strategy Protocol
- Focuses 100% on product positioning, target audience, brand voice/personality, V1 feature scoping, ASO keywords, user flows, copy, and PRD requirements.
- Hand-off to Stage 4 (`stitch-ui-skill`) for precise HEX color selections, Google Fonts pairing previews, asset moodboarding, and component styling.

---

## 🔄 Sequential Phase Progression & File Proposals
- **Phase 0 ──> Phase 1**: When you select an app concept in `/app-idea`, the agent automatically proposes launching `/app-brief`.
- **Phase 1 ──> File Generation**: When creative jamming is complete, the agent proposes generating `docs/01-app-brief/APP-BRIEF.md`.
- **Phase 1 ──> Phase 2**: Upon approving `APP-BRIEF.md`, the agent automatically proposes launching `/prd`.
- **Phase 2 ──> File Generation**: When the 8-question discovery loop is complete, the agent proposes generating `docs/02-prd-research/ARCH-PRD.md`.

---

## 🚀 Installation & Usage

### 1. Install Skill into Your Monorepo
Add the `fullstack-agent-workflow` repository as a Git Submodule into your project's `.agents/skills/` directory:

```bash
git submodule add https://github.com/thenerxboy/fullstack-agent-workflow.git .agents/skills/fullstack-agent-workflow
```

### 2. Invoke the Skill
Ask your AI coding assistant:
> "Run `/app-idea` to research 20 app ideas for productivity"  
> "Run `/app-brief` to jam on my app vibe and brand identity"  
> "Run `/prd` to generate the system PRD"
