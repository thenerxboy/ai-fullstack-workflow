---
name: app-coder
description: Monorepo code generation, Expo Router mobile components, Next.js App Router storefronts, Convex/Supabase client DB schemas, Vibe Engineering loop, and full-stack codebase builder.
---

# 💻 Monorepo Code Generation & Delivery Skill (`app-coder`)

Universal, agent-agnostic AI coding skill based on **Vibe Engineering** and **Practical Vibe Coding** principles. It equips AI coding agents with the procedural rules, 8-step execution loop, 10-step build-in-order roadmap, 4-part prompt templates, and hardcoded cheatsheets to build production-ready software inside an enterprise Turborepo monorepo.

> [!IMPORTANT]
> **AGENT MANDATE**: Any agent executing a feature build, code generation, refactoring, or bug fix task **MUST ALWAYS read this SKILL.md file first** (`view_file`). The agent must follow the 8-Step Vibe Engineering Loop: write an implementation plan to `prompts/<task-name>.md` first, get human approval, implement feature-by-feature, run automated typecheck/lint checks, and share exact manual verification steps.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Ingested / Generated Asset | Primary Target Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Project Rules & Conventions** | `./AGENTS.md` | `docs/AGENTS.md` | `docs/00-workflow-guide/AGENTS.md` |
| **App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **System ARCH-PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **App Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Tech Stack Spec** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **Approved UI Screen Prompts** | `app-screens/prompts/<screen_id>.md` | `app-screens/<screen_id>.md` | `./<screen_id>.md` |
| **AI Implementation Plans** | `prompts/<task_name>.md` | `docs/prompts/<task_name>.md` | `./prompts/<task_name>.md` |

---

## ⚡ Trigger Flags & Capabilities

- **`app-coder`** (or **`/code`**, **`/build`**, **`/plan`**): Launches Phase 5 (Full-Stack Monorepo Code Generation).

---

## 📐 Canonical Turborepo Monorepo Architecture

- **`apps/native`**: Expo Router mobile app (iOS & Android) with NativeWind/Tailwind styling, Expo Router native tabs `(tabs)/_layout.tsx`, and haptics/sensors.
- **`apps/web`**: Next.js App Router marketing landing page, legal triad (`/privacy`, `/terms`, `/support`), and operator dashboard.
- **`packages/ui`**: Shared cross-platform design primitives & tailwind design tokens.
- **`packages/db`**: Database client, queries, and schemas (Convex, Supabase, or InsForge).
- **`packages/auth`**: Cross-platform authentication session helpers (Clerk or Supabase Auth).

---

## 🔄 The 8-Step Vibe Engineering Execution Loop

For EVERY feature or code generation task, the AI agent MUST execute this exact loop:

```
[1. Read Rules & Context] ➔ [2. Receive Short Task] ➔ [3. Write Plan to prompts/] ➔ [4. Human Review] ➔ [5. Human Approval] ➔ [6. Build Code] ➔ [7. Run Automated Checks] ➔ [8. Share Manual Verification Steps]
```

1. **Read Rules Once**: Read `./AGENTS.md`, `DESIGN-MEMORY.md`, and named skill files (`app-coder`, `stitch-ui-skill`, `tech-stack`).
2. **Receive Short Prompt**: Accept a single-feature prompt with a defined scope.
3. **Write Detailed Implementation Plan**: Write the complete plan file to `prompts/<task-name>.md`.
4. **Human Review**: Hit pause and ask the user to review `prompts/<task-name>.md`.
5. **Human Approval**: Wait for explicit user approval ("yes", "approved", "go ahead").
6. **AI Build**: Implement the feature code according to the approved plan.
7. **Run Automated Checks**: Execute `tsc` (TypeScript typecheck), `lint`, and build scripts.
8. **Share Manual Verification**: Share step-by-step instructions for the user to verify the feature on device/browser.

---

## 🗺️ The 10-Step Build-in-Order Roadmap

Order matters. Building out of order creates UI decisions before data exists or wires integrations before dependencies exist. Execute features in this exact order:

```markdown
1. Design System        ──> Colors, typography, spacing, base primitives (NativeWind / packages/ui).
2. Core UI Screens     ──> Build screens on placeholder data to shape UX early without waiting for backend.
3. Authentication      ──> Add Clerk / Supabase Auth once screens exist so protected routes are clear.
4. Database & Schemas  ──> Lock DB tables, fields, Zod schemas, and required validation rules.
5. Seed / Config Data  ──> Add initial starting rows (categories, settings, defaults).
6. Read Path           ──> Bind UI to real stored data, replacing placeholders (expect empty states).
7. Core Engine         ──> Main business logic, processing, scraping, or generation pipelines.
8. Intelligence        ──> AI analysis, search, or recommendation layers on top of stored data.
9. Automation          ──> Background jobs, cron schedulers, push notifications (after manual flow works).
10. Deploy & Harden    ──> EAS Build, secret scanning, TestFlight (iOS) and Google Play internal testing.
```

---

## 📄 Hardcoded Cheatsheet 1: Master `AGENTS.md` Template

When bootstrapping or reading project conventions, `AGENTS.md` at the project root serves as the single source of truth:

```markdown
# AGENTS.md — Master Project Rules & Conventions

You are a principal-level software engineer building [PRODUCT_NAME], a [ONE_LINE_DESCRIPTION].
Your job: understand the request, inspect relevant code, read named skills, write a detailed implementation plan to prompts/<task-name>.md, get human approval, then implement.

## 1. Workflow
1. Read AGENTS.md and relevant skills first before writing code.
2. Inspect relevant existing files.
3. Ask a focused question ONLY if there is real ambiguity.
4. Write a detailed implementation plan to `prompts/<task-name>.md`.
5. Ask: "I prepared the implementation prompt at prompts/<task-name>.md. Good to execute?"
6. Implement ONLY after human approval.
7. Run typecheck (`tsc`) and lint checks.
8. Share exact manual verification steps.

## 2. Product Scope
- **In Scope**: [FEATURE_LIST]
- **Out of Scope (CRITICAL DEFENSE)**: [OUT_OF_SCOPE_LIST] (Do NOT overbuild or invent unrequested features!)

## 3. Architecture
- `apps/native`: Expo Router mobile app screens and routes.
- `apps/web`: Next.js App Router landing page and web legal triad.
- `packages/ui`: Shared cross-platform primitives (NativeWind).
- `packages/db`: Backend client, queries, and Zod schemas (Convex/Supabase).
- `packages/auth`: Clerk authentication session helpers.

## 4. Tech Stack & Don'ts
- **Framework**: Expo (React Native) + Next.js (App Router)
- **Language**: TypeScript (Strict mode, zero `any`)
- **Styling**: NativeWind (Tailwind CSS)
- **State**: Zustand (global client state) + AsyncStorage (persistence)
- **Database**: Convex / Supabase PostgreSQL
- **Auth**: Clerk (Do NOT build custom auth!)
- **Analytics**: PostHog
- **DO NOT USE**: Custom auth solutions, inline StyleSheet (unless on exception list), unapproved state libraries.

## 5. Security & Secrets
- NEVER expose service-role keys, admin secrets, or API tokens to the client browser or mobile bundle.
- API calls, model calls, scraping, and database writes MUST run on server routes / backend functions.

## 6. Code Standards & Fallback Rule
- Small functions, explicit types, no `any`, no over-engineering.
- **Fallback Rule**: When unsure, keep it small, ask ONE focused question, write a plan to `prompts/<task-name>.md`, get approval, then build.
```

---

## 📄 Hardcoded Cheatsheet 2: Implementation Plan Template (`prompts/<task-name>.md`)

Every implementation plan generated by `app-coder` MUST use this exact template:

```markdown
# 📋 Implementation Plan: [TASK_NAME]

## 1. Goal
[One sentence describing what this task accomplishes.]

## 2. What It Read
- [List of skills inspected, e.g., @.agents/skills/ai-fullstack-workflow/04-app-coder]
- [List of existing project files inspected, e.g., apps/native/app/(tabs)/index.tsx]

## 3. Assumptions & Resolved Ambiguities
- [Explicit list of any ambiguous decisions resolved on its own for review]

## 4. Files That Will Change
- [NEW] `apps/native/components/FeatureCard.tsx`
- [MODIFY] `apps/native/app/(tabs)/index.tsx`

## 5. Implementation Requirements
- [Concrete requirement 1]
- [Concrete requirement 2]

## 6. Security & Server/Client Boundaries
- [State server vs client boundaries and how secrets are kept safe]

## 7. Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## 8. Checks to Run
- `npx tsc --noEmit`
- `npm run lint`

## 9. How to Verify It
- [Exact step-by-step manual testing steps for human review]
- [For UI tasks: exact layout, spacing, typography, colors, and responsiveness expectations]
```

---

## 📄 Hardcoded Cheatsheet 3: The 4-Part Prompt Structure & Everyday Templates

Every prompt written or executed follows these 4 parts in order:
1. **Anchor**: Read `AGENTS.md` / `DESIGN-MEMORY.md` first and follow it strictly.
2. **Task**: One feature, one screen, or one integration. Not three.
3. **Constraints**: Protected files and rules not to break.
4. **Reference**: Attached design image, PRD excerpt, or library documentation.

### Template 1: Building a UI Screen
```markdown
Read AGENTS.md first and follow it strictly.

Implement the [screen_name] screen as shown in the attached design exactly, using assets from constants/images.ts.

[Optional navigation requirement, e.g., "Add a navigation link from the home route."]

Do not change [thing_to_preserve].
[attached design image or Google Stitch prompt spec]
```

### Template 2: Adding Application State
```markdown
Read AGENTS.md first and follow it strictly.

Integrate [feature] state. Store [data] using Zustand with @react-native-async-storage/async-storage.

[Behavior rule, e.g., "If an authenticated user has no selected streak, route them to onboarding."]

Preserve the existing UI exactly.
Do not expose secrets in client code.
```

### Template 3: Integrating a Library or External Service
```markdown
Read AGENTS.md first and follow it strictly.

Study the existing [related code], then [task] by following the [library] documentation provided below.

Keep existing UI and navigation flow intact.
Do not change the screen design.
Do not expose any secret keys in the client app.

[paste library documentation]
```

### Template 4: Fixing a Specific Issue
```markdown
Read AGENTS.md first and follow it strictly.

The [component/feature] is currently [actual_behavior]. It should [correct_behavior].

Do not change any other behavior or layout.
```

---

## 🔒 Code Quality Rules & Constraint Library

### 1. Centralized Image Imports (`constants/images.ts`)
- ALL image assets MUST be imported centrally in `constants/images.ts`:
  ```typescript
  import mascot from "@/assets/images/mascot.png";
  export const images = { mascot };
  ```
- Usage in components: `<Image source={images.mascot} />`
- **STRICT RULE**: Never import image assets directly inside individual screens or components!

### 2. NativeWind Styling & StyleSheet Exception List
- Use NativeWind `className="..."` for all styling.
- **StyleSheet Exception List**: Use inline styles or `StyleSheet.create` ONLY for:
  1. `SafeAreaView` (`className` unsupported on some platforms)
  2. `KeyboardAvoidingView` (behavior props)
  3. `Modal` (visible, transparent props)
  4. `Animated.View` (dynamic animated values)
  5. Dynamic runtime calculated style values
  6. Platform-specific conditional overrides (`Platform.OS === 'ios'`)
  7. `Pressable` / `TouchableOpacity` pressed state objects

### 3. State Management Rules
- **Global State**: Zustand (`packages/db` or `store/`).
- **Local State**: `useState` / `useReducer` for temporary UI toggles (modals, dropdowns).
- **Persistence**: `@react-native-async-storage/async-storage` for client persistence.

### 4. Constraint Library (Lines to drop into prompts)
- `"Do not change the screen design."`
- `"Preserve existing UI exactly."`
- `"Keep existing [feature] flow intact."`
- `"Do not expose any secrets in the client app."`
- `"Do not introduce new major libraries without asking."`
- `"Do not modify files outside [folder]."`
- `"Do not refactor existing unrelated code."`

---

## 🚫 Common Mistakes to Avoid

- ❌ **Bundling Multiple Features**: Never attempt 3 features in 1 prompt.
- ❌ **Full App Generation**: Never ask for an entire app in a single prompt.
- ❌ **Over-Engineering**: Never add unrequested abstractions, extra helpers, or unrequested libraries.
- ❌ **Unverified Output**: Never declare success without running `tsc` typecheck and linting.
- ❌ **Describing UI in Words**: Never describe UI in plain prose when a visual design image or Google Stitch prompt spec is available.

---

## 🎯 The 60-Second Pre-Build Checklist

Before saying "yes" to build a feature, verify:
- [ ] Is the feature defined clearly enough to direct, not script?
- [ ] Do the rules it needs already live in `AGENTS.md` / `DESIGN-MEMORY.md`?
- [ ] Are the required skills loaded and referenced?
- [ ] Did the AI save a detailed plan to `prompts/<task-name>.md` and ask for approval?
- [ ] Did you read the plan, including assumptions and test steps?
- [ ] Are server/client boundaries and secrets handled safely?

*If all six are yes, approve the plan and let it build!*
