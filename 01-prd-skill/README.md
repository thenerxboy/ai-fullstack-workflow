# 🚀 Product Ideation & PRD Architecture Skill (`prd-skill`)

Universal, agent-agnostic AI skill combining 20-app-idea market research, creative vibe brief drafting, Google Fonts pairing selection, ASO keyword research, competitor audits, and 15-section system PRD architecture into `docs/01-app-brief/APP-BRIEF.md` and `docs/02-prd-research/ARCH-PRD.md`.

---

## ⚡ Shortcut Commands & Trigger Flags

You can invoke `prd-skill` at any stage using these shortcut commands:

- **`/app-idea`**: Launches **Phase 0** (Researches market trends, YouTube resources, competitor gaps, and pitches **20 data-backed app ideas**).
- **`/app-brief`**: Launches **Phase 1** (Creative Vibe Jamming for identity, mascot, Google Fonts specimen preview selection, color psychology, and 20-section `APP-BRIEF.md`).
- **`/prd`**: Launches **Phase 2** (Ingests `APP-BRIEF.md`, executes the 8-question discovery loop, locks typography spec, and generates `ARCH-PRD.md`).

---

## 🎨 Google Fonts Selection Engine
- Proposes 2–3 curated font pairings tailored to the app's aesthetic (Display Header + Body).
- Includes clickable Google Fonts specimen preview links (`https://fonts.google.com/specimen/...`) for explicit user review and approval before locking typography into `APP-BRIEF.md` and `ARCH-PRD.md`.

---

## 🔄 Sequential Phase Progression & File Proposals
- **Phase 0 ──> Phase 1**: When you select an app concept in `/app-idea`, the agent automatically proposes launching `/app-brief`.
- **Phase 1 ──> File Generation**: When creative jamming and font approval are complete, the agent proposes generating `docs/01-app-brief/APP-BRIEF.md`.
- **Phase 1 ──> Phase 2**: Upon approving `APP-BRIEF.md`, the agent automatically proposes launching `/prd`.
- **Phase 2 ──> File Generation**: When the 8-question discovery loop is complete, the agent proposes generating `docs/02-prd-research/ARCH-PRD.md`.

---

## 🚀 Installation & Usage

### 1. Install Skill into Your Monorepo
Clone this repository directly into your project's `.agents/skills/` directory:

```bash
git clone https://github.com/thenerxboy/prd-skill.git .agents/skills/prd-skill
```

### 2. Invoke the Skill
Ask your AI coding assistant:
> "Run `/app-idea` to research 20 app ideas for productivity"  
> "Run `/app-brief` to jam on my app vibe and choose Google Fonts"  
> "Run `/prd` to generate the system PRD"
