---
name: app-coder
description: Monorepo code generation, Expo Router mobile components, Next.js App Router storefronts, Convex/Supabase client DB schemas, and full-stack codebase builder.
---

# 💻 Monorepo Code Generation & Delivery Skill (`app-coder`)

Universal AI agent skill for transforming system PRDs (`ARCH-PRD.md`), tech stack specifications (`TECH-STACK.md`), design system memory logs (`DESIGN-MEMORY.md`), and approved screen prompt blueprints into production-ready TypeScript code within an enterprise Turborepo monorepo.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files using this prioritized path resolution hierarchy:

| Ingested Document | Primary Input Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **System ARCH-PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **App Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Tech Stack Spec** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **Approved UI Prompts** | `app-screens/prompts/*.md` | `app-screens/*.md` | `./*.md` |

---

## ⚡ Trigger Flags & Capabilities

- **`app-coder`**: Launches Phase 5 (Full-Stack Monorepo Code Generation).

---

## 📐 Canonical Turborepo Monorepo Architecture

- **`apps/native`**: Expo Router mobile app (iOS & Android) with NativeWind/Tailwind styling, Expo Router native tabs `(tabs)/_layout.tsx`, and haptics/sensors.
- **`apps/web`**: Next.js App Router marketing landing page, legal triad (`/privacy`, `/terms`, `/support`), and operator dashboard.
- **`packages/ui`**: Shared cross-platform design primitives & tailwind design tokens.
- **`packages/db`**: Database client, queries, and schemas (Convex, Supabase, or InsForge).
- **`packages/auth`**: Cross-platform authentication session helpers (Clerk or Supabase Auth).

---

## 📋 Operating Directives & Code Quality

1. **Zero Hallucinated Imports**: Always inspect existing package definitions, exports, and proto/schema definitions before referencing external symbols.
2. **Type Safety & Strict Null Checks**: Write production-grade TypeScript with explicit type signatures, interfaces, and Zod validation schemas.
3. **Store Compliance & GDPR Triad**: Implement self-serve account deletion routes (Apple Guideline 5.1.1(v) + GDPR Article 17) and responsive web legal routes.
