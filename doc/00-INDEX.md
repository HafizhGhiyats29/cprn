# 00 — SEAMEO CECCEP Conference Website Documentation

Version 2.2 | 2026-11-27 | Phase 1 baseline and Phase 2 conditional closure recommendation

New public conference microsite inspired by CPRN 2026, bilingual EN/ID, built with Nuxt 4 / Vue 3 / TypeScript / Tailwind CSS v4. Source-code content, external Interconf, no internal database/auth/CMS in MVP. This package expands v1.1 without renaming existing files or rewriting the five planning baseline files.

## 1. Documentation map

| File | Scope | Status |
|---|---|---|
| [00-INDEX.md](00-INDEX.md) | Documentation navigation and status | Maintained |
| [01-REQUIREMENT-ANALYSIS.md](01-REQUIREMENT-ANALYSIS.md) | Business requirements and decisions | Phase 1 baseline |
| [02-FUNCTIONAL-REQUIREMENTS.md](02-FUNCTIONAL-REQUIREMENTS.md) | 71 FR, priority and acceptance | Phase 1 baseline |
| [03-NON-FUNCTIONAL-REQUIREMENTS.md](03-NON-FUNCTIONAL-REQUIREMENTS.md) | 66 NFR and quality targets | Phase 1 baseline |
| [04-PROJECT-SCOPE.md](04-PROJECT-SCOPE.md) | MVP, exclusions, risks | Phase 1 baseline |
| [05-PROJECT-ROADMAP.md](05-PROJECT-ROADMAP.md) | Six-phase delivery plan | Phase 1 baseline |
| [06-REFERENCE-ANALYSIS.md](06-REFERENCE-ANALYSIS.md) | CPRN mapping, evidence protocol | Preliminary |
| [07-ARCHITECTURE.md](07-ARCHITECTURE.md) | ADRs, quality review, regression evidence and closure checklist | Phase 2 Conditionally Approved recommended, sign-off pending |
| [08-SITEMAP.md](08-SITEMAP.md) | Navigation, pages and routes | Phase 3 draft |
| [09-USER-FLOW.md](09-USER-FLOW.md) | User journeys and interaction contracts | Phase 3 draft |
| [10-DESIGN-SYSTEM.md](10-DESIGN-SYSTEM.md) | Brand reference, tokens, components, Figma handoff | Phase 3 draft |
| [11-TESTING.md](11-TESTING.md) | Quality strategy, test suite and gates | Phase 5 draft |
| [12-DEPLOYMENT.md](12-DEPLOYMENT.md) | Build, hosting, CI/CD, rollback, operations | Phase 6 draft |
| [13-DATA-ARCHITECTURE.md](13-DATA-ARCHITECTURE.md) | Typed source data, relationships and validation | Minimal validator verified; production schema draft |
| [14-BILINGUAL-TRANSLATION.md](14-BILINGUAL-TRANSLATION.md) | i18n configuration, glossary and translation review | Phase 2 PoC; production content pending |
| [15-CONTENT-EDITORIAL.md](15-CONTENT-EDITORIAL.md) | Operational roles and content update workflow | Phase 2/4 draft |
| [16-ROUTING-AND-INTEGRATIONS.md](16-ROUTING-AND-INTEGRATIONS.md) | Locale route contracts, Interconf and SEO | Locale home PoC; production routing pending |
| [17-SECURITY.md](17-SECURITY.md) | Threat model, privacy, security review and npm audit | Phase 2 triage complete. Release disposition and controls pending. |
| [18-E2E-TESTING-GUIDE.md](18-E2E-TESTING-GUIDE.md) | Playwright execution and troubleshooting | Phase 5 draft |
| [19-UAT-TESTING-PLAN.md](19-UAT-TESTING-PLAN.md) | 105 planned functional/cross-cutting UAT scenarios | Phase 5 draft; Not Run |
| [20-FINAL-RELEASE-READINESS-AUDIT.md](20-FINAL-RELEASE-READINESS-AUDIT.md) | Go/no-go, evidence and risk register | Phase 6 draft; Not Ready |
| [21-AGENTS-DRAFT.md](21-AGENTS-DRAFT.md) | Review record for the root AGENTS.md | Root file synchronized with the closure review |

## 2. Start here

1. Read documents 01–05 before changing scope. Phase 1 validated by developer; formal institutional approval pending.
2. Phase 2: review the verified local baseline and closure checklist in 07 and the security triage in 17. The initial application commit is `595808f`. The conditional closure recommendation awaits sign-off.
3. Phase 3: after authorization, refine 08–10. Obtain official branding before high-fidelity approval and record the mentor-approved Figma handoff.
4. Phase 4: implement approved requirements; update 15, route/data contracts and test files. Do not use drafts as permission to implement optional features.
5. Phase 5: execute 11, 18, 19 and security checks; attach actual evidence.
6. Phase 6: finalize 12 and 20; release only after authorized approval.

## 3. Source and adaptation record

- Existing CPRN Documentation v1.1 is the baseline; 01–05 retained byte-for-byte.
- The supplied 13 Markdown references for the institutional Laravel/React portal informed depth and structure: README index; architecture and code sizing; design tokens and CSS organization; CMS editorial and RBAC guides; database schemas; bilingual provider architecture; routing; security; testing; E2E; UAT; deployment; release audit. Adapted to this separate Nuxt project. No credentials, portal-specific account data, database SQL, CMS privileges, historical test counts or deployment secrets copied.
- Reference portal design tokens and Plus Jakarta Sans are reference seeds only, pending official conference approval. Public CPRN findings are prior observations, not a fresh audit.
- Technical references: https://nuxt.com/docs/4.x/ ; https://i18n.nuxtjs.org/docs/guide ; https://i18n.nuxtjs.org/docs/getting-started/usage ; https://i18n.nuxtjs.org/docs/api/options ; https://playwright.dev/docs/intro ; https://www.w3.org/TR/WCAG22/ ; https://web.dev/articles/vitals . Verify installed versions before implementation.

## 4. Documentation governance

Status terms: Baseline = developer-validated requirement; Draft = candidate not approved; Implemented = code verified; Not Run = tests not executed; Verified = evidence tied to commit; Approved = designated reviewer confirms. Do not equate documentation with implementation. Track revisions, ADRs, FR/NFR trace, test evidence and approvals; update impacted docs with changes. Do not store secrets or private event information in Markdown. Use official content and human bilingual approval.

Pending decisions include official event content and branding, exact Interconf URLs, applicable optional features, CI runner and runtime, production root redirect and 404 handling, security headers, hosting/domain, analytics and deadline. The [closure checklist](07-ARCHITECTURE.md) assigns Phase 5 verification and Phase 6 release gates.

## 5. Local setup overview

Inspect `git status`, `node -v`, `npm -v`, `npm run` and `npm ls --depth=0`. The Windows PoC used Node 26.13.1 and npm 12.2.3. Closure regression used Node 24.15.0 and npm 11.12.1. The project defines `npm run typecheck`, `npm run test:content` and `npm run generate`. Use `.output/public/` for static verification. Additional quality scripts in the [test plan](11-TESTING.md) remain proposals.
