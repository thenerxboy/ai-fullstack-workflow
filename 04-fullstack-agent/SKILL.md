---
name: fullstack-agent
description: Monorepo code generation, Expo Router mobile components, Next.js App Router storefronts, Convex/Supabase client DB schemas, tailored AGENTS.md generator (/init-agents), external skills & doc mapper (docs/05-external-skills/), mandatory TECH-STACK.md ingestion gate, feature-branch & CodeRabbit PR workflow, Vibe Engineering loop, and full-stack codebase builder.
---

# 💻 Full-Stack Monorepo Code Generation & Delivery Skill (`fullstack-agent`)

Universal, agent-agnostic AI coding skill based on **Vibe Engineering** and **Practical Vibe Coding** principles. It equips AI coding agents with procedural rules, autonomous project-tailored `AGENTS.md` generation (`/init-agents`), external skill/doc mapping (`docs/05-external-skills/`), mandatory `TECH-STACK.md` ingestion gates, feature-branch & CodeRabbit PR workflows, 8-step execution loops, 10-step build-in-order roadmaps, and hardcoded cheatsheets to build production-ready software inside an enterprise Turborepo monorepo.

> [!IMPORTANT]
> **AGENT MANDATE**: Any agent executing a feature build, code generation, refactoring, or bug fix task **MUST ALWAYS read this SKILL.md file first** (`view_file`). The agent must follow the 8-Step Vibe Engineering Loop: write an implementation plan to `prompts/<task-name>.md` first, inspect `docs/03-tech-stack/TECH-STACK.md` for real schemas, check `docs/05-external-skills/` for dependency docs, execute on a dedicated feature branch, run typecheck/lint checks, handle CodeRabbit PR reviews, and sync local `main`.

---

## 📁 Document Path & Fallback Protocol

Agents MUST search for input context files and write output artifacts using this prioritized path resolution hierarchy:

| Ingested / Generated Asset | Primary Target Path | Fallback Path 1 | Fallback Path 2 |
| :--- | :--- | :--- | :--- |
| **Project Rules & Conventions** | `./AGENTS.md` | `docs/AGENTS.md` | `docs/00-workflow-guide/AGENTS.md` |
| **App Brief** | `docs/01-app-brief/APP-BRIEF.md` | `docs/APP-BRIEF.md` | `./APP-BRIEF.md` |
| **System ARCH-PRD** | `docs/02-prd-research/ARCH-PRD.md` | `docs/ARCH-PRD.md` | `./ARCH-PRD.md` |
| **App Features Map** | `docs/03-tech-stack/app-features.md` | `docs/app-features.md` | `./app-features.md` |
| **Tech Stack Spec (MANDATORY)** | `docs/03-tech-stack/TECH-STACK.md` | `docs/TECH-STACK.md` | `./TECH-STACK.md` |
| **UI Design Memory** | `docs/04-ui-design/DESIGN-MEMORY.md` | `docs/DESIGN-MEMORY.md` | `./DESIGN-MEMORY.md` |
| **External Skills & Docs Cache** | `docs/05-external-skills/*.md` | `docs/external-skills/*.md` | `./skills/*.md` |
| **Google Stitch Screen Prompts** | `app-screens/prompts/<screen_id>.md` | `app-screens/<screen_id>.md` | `./<screen_id>.md` |
| **AI Implementation Plans** | `prompts/<task_name>.md` | `docs/prompts/<task_name>.md` | `./prompts/<task_name>.md` |

---

## ⚡ Shortcut Commands & Help Triggers

| Command / Shortcut | Alias Flag | Action / Behavior |
| :--- | :--- | :--- |
| **`/fullstack-agent-help`** | `/fullstack-agent --help`, `/coder-help` | Displays complete Phase 5 manual: Vibe Engineering loop, `./AGENTS.md` rules, feature branch PRs, and Visual AI Diff. |
| **`/fullstack-agent-shortcuts`** | `/fullstack-agent --shortcuts` | Fast cheat-sheet list of all Phase 5 trigger shortcuts. |
| **`/init-agents`** | N/A | Ingests `docs/` (App Brief, PRD, Tech Stack, UI Design Memory) and generates a 100% project-tailored `./AGENTS.md` file at root. |
| **`fullstack-agent`** | `/code`, `/build`, `/plan` | Launches Phase 5 (Full-Stack Monorepo Code Generation & Feature Building on dedicated branch). |

---

## 🛡️ Mandatory `TECH-STACK.md` Ingestion & Anti-Drift Engine

To ensure the AI agent **NEVER ignores `TECH-STACK.md` or forgets it exists**:

1. **Mandatory Ingestion Gate**: Before drafting ANY implementation plan in `prompts/<task-name>.md`, the agent **MUST ALWAYS read and inspect `docs/03-tech-stack/TECH-STACK.md` and `docs/03-tech-stack/app-features.md`**.
2. **Proof of Read in Implementation Plans**: In `prompts/<task-name>.md`, the agent MUST explicitly record:
   ```markdown
   ## 2. What It Read
   - [x] `docs/03-tech-stack/TECH-STACK.md` (Inspected Section X: Data Model & Package Rules)
   - [x] `docs/03-tech-stack/app-features.md` (Inspected Feature Y Monorepo Mapping)
   ```
   *If `docs/03-tech-stack/TECH-STACK.md` is missing from "What It Read", the user MUST reject the plan!*
3. **Anti-Drift Tech Stack Constraint Line**:
   > *"Do NOT reach for unapproved libraries or alternative patterns from training data. All backend schemas, package boundaries, and allowed tools MUST strictly match `docs/03-tech-stack/TECH-STACK.md`."*
4. **Interactive Learning Clarification Mandate**:
   - If a coding or planning request is underspecified or has multiple execution paths (e.g. *"Build feature X"* or *"Fix screen Y"*):
     a) **DO NOT** write code or generate plans blindly.
     b) **STOP & ASK**: Present an **Interactive Learning Menu** displaying valid execution options (`fullstack-agent plan <task>` for architectural plan vs `fullstack-agent build <task>` for feature branch code), explaining what each option does, and showing the **EXACT shortcut command** formatted with the user's original request text.

---

## 🌿 Feature-Branch & CodeRabbit PR Review Protocol

For EVERY feature or bug fix, the agent MUST follow this 7-step isolated Git lifecycle:

```
[1. Feature Branch] ➔ [2. Build & Test] ➔ [3. Stage & Commit] ➔ [4. Push Branch] ➔ [5. CodeRabbit PR Review] ➔ [6. Merge to Main] ➔ [7. Sync Local Main]
```

1. **Step 1: Feature Branch Isolation**: Create and check out a dedicated branch named after the feature (e.g. `feature/profile-legal-pages` or `git checkout -b feature/<task-name>`). Never write code directly on `main` / `master`!
2. **Step 2: Local Feature Build & Automated Checks**: Implement feature code strictly scoped to the plan. Execute `npx tsc --noEmit` (TypeScript typecheck) and `npm run lint`.
3. **Step 3: Stage & Structured Commit**: Stage changes (`git add .`) and create a concise commit message (e.g. `feat(profile): implement profile & web legal pages`).
4. **Step 4: Push Branch to GitHub**: Propose pushing the feature branch to GitHub (`git push -u origin feature/<task-name>`).
5. **Step 5: CodeRabbit AI PR Review Gate**:
   - Create a Pull Request (PR) on GitHub.
   - When **CodeRabbit AI** scans the PR diffs and posts inline review comments (flagging edge cases, missing error handlers, security risks, or type mismatches), inspect CodeRabbit's feedback.
   - Write a targeted fix prompt, update the feature branch locally, push the fixes, and confirm CodeRabbit's re-check passes.
6. **Step 6: Merge PR into `main`**: Confirm merge on GitHub to integrate the feature into remote `main`. Option to delete remote feature branch.
7. **Step 7: Sync Local Workspace `main`**: Return to terminal and run:
   ```bash
   git checkout main
   git pull origin main
   ```
#### 📍 App Code Commit Specification:
- **Target Execution Directory**: `./` (App Workspace Root)
- **Target Repository**: `https://github.com/your-username/my-app.git` (Your Project Repo)
- **Target Branch**: `feature/<task-name>`

```bash
git checkout -b feature/<task-name>
git add .
git commit -m "feat(scope): implement feature name"
git push -u origin feature/<task-name>
```
*Note: This commits ONLY application code to your project repository.*

---

## 🌟 Feature A: Autonomous Tailored `AGENTS.md` Generator (`/init-agents`)

The agent—NOT the human—generates the project-level `./AGENTS.md` file by ingesting the completed project artifacts from earlier workflow stages.

### Execution Workflow for `/init-agents`:
1. **Ingest Documentation**: Read `docs/01-app-brief/APP-BRIEF.md`, `docs/02-prd-research/ARCH-PRD.md`, `docs/03-tech-stack/TECH-STACK.md` & `app-features.md`, and `docs/04-ui-design/DESIGN-MEMORY.md`.
2. **Extract Real Attributes**: Extract the app's real name, tagline, core features (In Scope), explicit out-of-scope defense list, monorepo package paths, database schemas, approved Google Fonts pairings, and locked stadium pill navbar specs.
3. **GitHub Remote Verification Gate**: Check if workspace root has an active remote origin (`git remote get-url origin`). If NO remote is set up yet, guide the user using their locked real product name:
   > 🚀 **Phase 5 GitHub Remote Setup**:
   > Now that we have locked your product name as **[PRODUCT_NAME]**, let's link your workspace to GitHub before creating feature branches:
   > 1. Create repository `[product-name]` on GitHub.
   > 2. Run in terminal: `git remote add origin https://github.com/your-username/[product-name].git`
4. **Minimum Environment Bootstrap**:
   - Generate / Upgrade `./AGENTS.md`: Preserve the top **Pre-Flight Skill Router & Intent Protocol** block (from the Base `AGENTS.md` Shell), and append the comprehensive Monorepo Code Architecture, Database Schemas, Monorepo Package Paths, and Visual AI Diff Loop rules below it.
   - Ensure clean `.gitignore` (protecting `.env`, `.env.local`, `node_modules/`, `.expo/`, `.next/`).
   - Generate starting `.env.example` with bare minimum starting vars (`EXPO_PUBLIC_APP_NAME`, `EXPO_PUBLIC_DEV_URL`).
   - Create initial `docs/00-workflow-guide/ENVIRONMENT-CHECKLIST.md` tracking initial setup status.
5. **File Generation Proposal**: Ask gatekeeper question: *"I am ready to generate your project-tailored `./AGENTS.md` and starting environment files. Do you approve?"*
6. **File Output**: Upon user approval, write the files to the project root.

---

## 🌟 Feature B: Progressive Environment & Skill Unlocking Engine (`docs/05-external-skills/`)

Environment variables and framework skills (`clerk`, `convex`, `stripe`, `supabase`, `expo-camera`) are **NEVER dumped all at once**. They are unlocked **Just-in-Time** as you progress through feature development:

### Progressive Unlocking Protocol:
1. **Feature-Level Assessment**: When a developer requests a feature, inspect `prompts/<task-name>.md` to identify ONLY the environment additions required for *this specific feature*.
2. **Just-in-Time `.env` Key Prompting**: If building Auth (Step 3), prompt for Clerk/Supabase keys. If building DB (Step 4), prompt for Convex URL. If building UI screens (Step 1-2), require ZERO keys!
3. **Just-in-Time Skill Doc Mapping**: Check `docs/05-external-skills/<library_name>.md`. Load cached docs into context or prompt the developer to add missing docs ONLY when building that specific library integration.
4. **Checklist Update**: Cross off completed environment items in `docs/00-workflow-guide/ENVIRONMENT-CHECKLIST.md` as features progress.
2. **Local Cache Check**: Search `docs/05-external-skills/<library_name>.md`. If found, load it into context to ground code in real documentation.
3. **On-Demand User Guidance**: If a required library doc/skill is missing:
   - Provide CLI installation command: `npx skills add <library>/skills`
   - Provide official documentation URLs.
   - Offer to save any pasted documentation snippet directly into `docs/05-external-skills/<library_name>.md` for permanent future reference.

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
[1. Read Rules & Stack] ➔ [2. Short Task] ➔ [3. Write Plan to prompts/] ➔ [4. Human Review] ➔ [5. Human Approval] ➔ [6. Build on Branch] ➔ [7. Visual AI Diff Loop] ➔ [8. Typecheck & CodeRabbit PR]
```

1. **Read Rules & Tech Stack**: Read `./AGENTS.md`, `docs/03-tech-stack/TECH-STACK.md`, `docs/04-ui-design/DESIGN-MEMORY.md`, and named skills (`app-coder`, `ui-skill`, `tech-stack`).
2. **Receive Short Prompt**: Accept a single-feature prompt with a defined scope.
3. **Write Detailed Implementation Plan**: Write the complete plan file to `prompts/<task-name>.md` (including Proof of Read & External Skills mapping).
4. **Human Review**: Hit pause and ask the user to review `prompts/<task-name>.md`.
5. **Human Approval**: Wait for explicit user approval ("yes", "approved", "go ahead").
6. **AI Build on Feature Branch**: Create feature branch (`git checkout -b feature/<name>`) and implement code.
7. **Visual AI Diff Loop (Module 6)**: Capture simulator/browser screenshot, perform 10-point multimodal visual comparison against `app-screens/<screen_id>.png`, and refine until 100% pixel-perfect.
8. **CodeRabbit PR & Main Sync**: Run `tsc`/`lint`, push branch, review CodeRabbit feedback on PR, merge to `main`, and run `git checkout main && git pull origin main`.

---

## 🔮 Module 6: The Pixel-Perfect Visual AI Diff & Verification Micro-Loop

For all UI components, screens, and layout changes, the agent MUST NOT ask *"Does this look right?"*. It MUST execute the 4-step Visual Verification Loop:

```
╔═════════════╗      ╔══════════════════════╗      ╔═══════════════════════╗      ╔════════════════════════╗
║   1. BUILD  ║ ───> ║  2. TAKE SCREENSHOT  ║ ───> ║  3. COMPARE TO DESIGN ║ ───> ║  4. IDENTICAL? (100%)  ║
╚═════════════╝      ╚══════════════════════╝      ╚═══════════════════════╝      ╚════════════════════════╝
       ▲                                                                                      │
       │                                    ❌ NO (Refine Code)                               │
       └──────────────────────────────────────────────────────────────────────────────────────┘
                                                                                              │
                                                                                      ✅ YES (100% Match)
                                                                                              │
                                                                                              ▼
                                                                                   [CodeRabbit PR & Merge]
```

### 📸 Dual-Mode Native Mobile Screenshot Capture Protocol

> ⚠️ **NATIVE MOBILE TARGET MANDATE**: For mobile native apps (`apps/native` Expo Router), Visual AI Diff verification MUST run against **Native Mobile Targets ONLY**. Running `--web` Playwright verification as a substitute for Native Mobile screen validation is STRICTLY FORBIDDEN.

1. **Mode A (Autonomous Native CLI Capture)**: Capture the native mobile screenshot via `run_command`:
   - **iOS Simulator**: `xcrun simctl io booted screenshot docs/04-ui-design/verification/<screen_id>-actual.png`
   - **Android Emulator / Device**: `adb exec-out screencap -p > docs/04-ui-design/verification/<screen_id>-actual.png`
2. **Mode B (User Native Device Screenshot Fallback)**: If running on a physical phone or Expo Go app:
   > *"Initial native mobile UI build complete. Please take a screenshot on your mobile device (Expo Go / Simulator) and save/upload it to `docs/04-ui-design/verification/<screen_id>-actual.png` so I can run the visual diff check."*

### 📋 10-Point Multimodal Visual Comparison Matrix
During Step 3 (Compare to Design), evaluate `app-screens/<screen_id>.png` (Target) vs `docs/04-ui-design/verification/<screen_id>-actual.png` (Actual) across:
1. **Layout & Spacing**: Container padding, item margins, vertical/horizontal gap alignment.
2. **Typography**: Font size, font weight (bold/medium/regular), line height, letter spacing.
3. **Colors & Gradients**: Hex code accuracy, background contrast, gradient direction & opacity.
4. **Button Styles**: Height, padding, label centering, active/pressed states.
5. **Input Fields**: Border color, placeholder text position, field height, icon padding.
6. **Border Radius**: Corner curvature matching across cards, buttons, and inputs.
7. **Shadows & Depth**: Elevation, shadow color blur, spread radius, soft drop-shadows.
8. **Icons & Imagery**: Asset scaling, icon size, aspect ratio, image cropping.
9. **Alignment**: Flexbox/grid alignment (left, center, space-between).
10. **Visual Hierarchy**: Primary vs. secondary element prominence, overall layout balance.

*If any item scores <100% match, apply visual fixes, update code, capture a new screenshot, and repeat until 100% identical.*

---

## 🐛 Dedicated Bug Diagnostic Engine (`/debug`)

When the user triggers **`/debug`** or reports an unexpected error, build crash, or missing feature:

1. **Raw Log Inspection Mandate**: The agent MUST NOT form diagnostic hypotheses or write code without reading un-truncated runtime terminal logs, build outputs, or stack traces (`view_file` on log files or running diagnostic log commands).
2. **Zero Superficial Symptom Patching**: Absolutely NO masking errors with silent `try/catch` blocks, returning dummy fallbacks, or deleting failing assertions. Identify and fix the true root cause upstream.
3. **Traceback Justification**: Every edit made during debugging MUST be justified by explicit log line evidence.
4. **Automated Fix Verification**: After applying fixes, execute TypeScript typecheck (`npx tsc --noEmit`) and capture a fresh native mobile screenshot to confirm clean resolution.
5. **Universal Proactive Software Engineer Mandate**: DO NOT act as a passive order-taker. Proactively enforce clean architecture, defensive programming (defensive null-checks, error boundary wrappers), WCAG accessibility props (`accessibilityLabel`), and web search audits (`search_web`) for current live framework patterns.
6. **Universal Zero-Token Follow-Up Quality Gate**: On EVERY follow-up generation turn, internally audit draft code against TypeScript strictness, Monorepo package rules, and Native Mobile target constraints before emitting output.

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

## 📄 Hardcoded Cheatsheet 1: Tailored `AGENTS.md` Template (`/init-agents`)

```markdown
# AGENTS.md — Master Project Rules & Conventions

You are a principal-level software engineer building [PRODUCT_NAME], a [ONE_LINE_DESCRIPTION].
Your job: understand the request, inspect relevant code, read docs/03-tech-stack/TECH-STACK.md, read named skills in docs/05-external-skills/, write a detailed implementation plan to prompts/<task-name>.md, get human approval, then implement on a feature branch.

## 1. Workflow
1. Read AGENTS.md, `docs/03-tech-stack/TECH-STACK.md`, and relevant skills first before writing code.
2. Check `docs/05-external-skills/` for cached dependency documentation.
3. Inspect relevant existing files.
4. Ask a focused question ONLY if there is real ambiguity.
5. Write a detailed implementation plan to `prompts/<task-name>.md`.
6. Ask: "I prepared the implementation prompt at prompts/<task-name>.md. Good to execute?"
7. Implement ONLY after human approval on a dedicated feature branch (`feature/<name>`).
8. For UI tasks: Execute Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine) against `app-screens/<screen_id>.png` until 100% match.
9. Run typecheck (`tsc`) and lint checks.
10. App Code Commit: Push branch from `./` (App Root) to project repo (`my-app.git`), handle CodeRabbit PR review, merge to main, and sync local main (`git checkout main && git pull`).
11. Design Token Sync: If `./app_theme.json` or `./design_catalog.json` were updated during UI iteration, ensure they are committed to your local app repository (`my-app.git`).

## 2. Product Scope
- **In Scope**: [REAL_FEATURE_LIST_FROM_PRD]
- **Out of Scope (CRITICAL DEFENSE)**: [REAL_OUT_OF_SCOPE_LIST_FROM_PRD] (Do NOT overbuild or invent unrequested features!)

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
- **Typography**: [APPROVED_GOOGLE_FONTS_PAIRING]
- **State**: Zustand (global client state) + AsyncStorage (persistence)
- **Database**: Convex / Supabase PostgreSQL (Strictly match `docs/03-tech-stack/TECH-STACK.md`)
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
- [x] `docs/03-tech-stack/TECH-STACK.md` (Inspected Section X: Data Model & Package Rules)
- [x] `docs/03-tech-stack/app-features.md` (Inspected Feature Y Monorepo Mapping)
- [x] `@.agents/skills/fullstack-agent-workflow/04-fullstack-agent`
- [ ] `docs/05-external-skills/<library>.md`

## 3. External Skills & Documentation Status
- [ ] Loaded from `docs/05-external-skills/<library>.md`
- [ ] MISSING: [Library Name] ──> Run `npx skills add <library>/skills` or paste docs into `docs/05-external-skills/<library>.md`

## 4. Assumptions & Resolved Ambiguities
- [Explicit list of any ambiguous decisions resolved on its own for review]

## 5. Files That Will Change
- [NEW] `apps/native/components/FeatureCard.tsx`
- [MODIFY] `apps/native/app/(tabs)/index.tsx`

## 6. Implementation Requirements
- [Concrete requirement 1]
- [Concrete requirement 2]

## 7. Security & Server/Client Boundaries
- [State server vs client boundaries and how secrets are kept safe]

## 8. Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## 9. Checks to Run
- `npx tsc --noEmit`
- `npm run lint`

## 10. How to Verify It
- [Exact step-by-step manual testing steps for human review]
- [x] Visual AI Diff Loop Status: Compare target app-screens/[screen_id].png vs captured docs/04-ui-design/verification/[screen_id]-actual.png across 10-Point Matrix until 100% match.
```

---

## 📄 Hardcoded Cheatsheet 3: The 4-Part Prompt Structure & Everyday Templates

Every prompt written or executed follows these 4 parts in order:
1. **Anchor**: Read `AGENTS.md` / `TECH-STACK.md` first and follow it strictly.
2. **Task**: One feature, one screen, or one integration. Not three.
3. **Constraints**: Protected files and rules not to break.
4. **Reference**: Attached design image, PRD excerpt, or loaded doc from `docs/05-external-skills/`.

### Template 1: Pixel-Perfect UI Re-creation & Visual AI Diff Trigger Prompt
```markdown
Read AGENTS.md and TECH-STACK.md first and follow them strictly.

Build the [screen_name] screen by closely recreating the UI from app-screens/[screen_id].png.
Your goal is to match the reference design as accurately as possible, including:
- Layout and spacing
- Typography, font sizes, and font weights
- Colors and gradients
- Button styles & state styling
- Input fields & padding
- Border radius
- Shadows and depth
- Icons (embedded mathematical SVG)
- Alignment and padding
- Overall visual hierarchy

Use the existing project structure and styling system (NativeWind). Do not redesign or improvise unless something is missing from the reference.

After implementing the first version, execute Module 6 Visual Verification:
1. Capture simulator/browser screenshot to docs/04-ui-design/verification/[screen_id]-actual.png.
2. Compare the captured screenshot against app-screens/[screen_id].png across the 10-Point Visual Matrix.
3. Identify all visual differences (margins, font sizes, colors, alignment).
4. Update the implementation code.
5. Capture another simulator screenshot and compare again.
6. Repeat until the implemented screen and reference design are visually identical (100% match).

Be strict with the comparison. Pay attention to small details like spacing, text positioning, button height, shadows, image cropping, and color accuracy.
Do not stop after the first implementation. Keep refining until the screenshot and reference design look nearly identical.
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
- `"All backend schemas and tools MUST strictly match docs/03-tech-stack/TECH-STACK.md."`

---

## 🚫 Common Mistakes to Avoid

- ❌ **Ignoring TECH-STACK.md**: Never write code without reading `docs/03-tech-stack/TECH-STACK.md`.
- ❌ **Direct Commits to Main**: Never code directly on `main` / `master`. Always use feature branches.
- ❌ **Skipping Visual AI Diff**: Never declare UI complete without screenshot comparison against `app-screens/<screen_id>.png`.
- ❌ **Bundling Multiple Features**: Never attempt 3 features in 1 prompt.
- ❌ **Full App Generation**: Never ask for an entire app in a single prompt.
- ❌ **Over-Engineering**: Never add unrequested abstractions, extra helpers, or unrequested libraries.
- ❌ **Unverified Output**: Never declare success without running `tsc` typecheck and linting.

---

## 🎯 The 60-Second Pre-Build Checklist

Before saying "yes" to build a feature, verify:
- [ ] Is the feature defined clearly enough to direct, not script?
- [ ] Are project rules defined in `./AGENTS.md` (via `/init-agents`)?
- [ ] Did the AI inspect `docs/03-tech-stack/TECH-STACK.md` and list it under "What It Read"?
- [ ] Are external library skills/docs checked in `docs/05-external-skills/`?
- [ ] Did the AI create a feature branch (`feature/<name>`)?
- [ ] Did the AI save a detailed plan to `prompts/<task-name>.md` and ask for approval?
- [ ] Will the AI execute the Visual AI Diff Loop (Build ──> Screenshot ──> Compare ──> Refine) against `app-screens/<screen_id>.png`?
- [ ] Are server/client boundaries and secrets handled safely?

*If all eight are yes, approve the plan and let it build!*
