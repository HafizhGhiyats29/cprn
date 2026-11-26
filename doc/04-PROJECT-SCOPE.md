# 04 — Project Scope

Version 1.0 | 2026-11-26 | Planning baseline

## 1. Scope statement

Build a new public, bilingual (EN/ID) SEAMEO CECCEP conference microsite inspired by CPRN 2026 functionality, with a distinct design following official institutional branding. Use Nuxt 4, Vue 3, TypeScript and Tailwind CSS v4. Content is maintained through source code; participant registration/login remains in Interconf. Do not copy old event details into the new production website.

## 2. In scope (MVP v1.0)

- Planning, requirement traceability, architecture and documentation.
- UX research assumptions, sitemap, user flow, wireframes, custom branded design, design system, desktop/tablet/mobile layouts, mentor approval.
- Homepage, about/why join, speakers/plenary sessions, themes/subthemes, programme, important dates, registration fees, venue/accommodation (where relevant), documents/presentations, organizers/partners and contact.
- External Interconf registration/login and official external links. Availability states for unconfirmed event details.
- Full EN/ID content and UI, language switcher, localized routing, localized SEO.
- Modular reusable Vue components; data-driven content and configuration, source-code update workflow.
- Responsive, accessible, SEO-friendly, performance-conscious implementation; QA, security review and testing.
- Production build, CI/CD and deployment preparation; actual hosting depends on IT decision; documentation and handover.

## 3. Out of scope (MVP)

| Item | Rationale |
|---|---|
| Internal registration, participant authentication | Interconf |
| Payment gateway, paper submission, peer review | External conference system where applicable |
| QR attendance, certificates, reporting platform | Beyond public microsite |
| Admin dashboard, CMS, database, custom backend API | Content maintained through source code |
| Mobile native app | Responsive web sufficient |
| Microservices, Kubernetes | Not justified by current scope |
| Multi-conference management platform | Reusability of code is in scope, runtime platform is not |

## 4. MVP modules and priority

| Module | MVP content |
|---|---|
| Home | Hero, about, objectives, CTA |
| Speakers | Keynote and plenary, speaker status |
| Themes | Theme/subthemes, accordion |
| Programme | Daily schedule and event details |
| Dates | Important dates and applicable submission deadlines |
| Registration | Official Interconf links and registration status |
| Fees | Categories and applicable costs |
| Venue | Location/address/status |
| Accommodation | If relevant and approved |
| Downloads | Documents and availability status |
| Partners | Approved organizers and partners |
| Contact | Official contact/footer |
| Cross-cutting bilingual | EN/ID language switcher, routes, localized content and metadata |

These are modules, not a fixed page count. Phase 2/3 establishes exact routes and information architecture. See FR document for acceptance criteria. Optional improvements (FAQ, analytics, filters, countdown, search, dark mode, etc.) are prioritized by mentor and privacy constraints. Public visitor count is a Should, not an invented metric or a guaranteed feature.

## 5. Version roadmap

| Release | Scope | Commitment |
|---|---|---|
| v1.0 | Public bilingual microsite, external registration, approved feature parity, essential improvements | Current project |
| v1.1 | Optional UX improvements, FAQ, analytics, countdown, filters/calendar | Backlog; approval required |
| v2.0 | CMS/admin, backend, database if justified | Future concept only |
| v3.0 | Multi-conference platform | Future concept only |

## 6. Constraints and dependencies

| Category | Baseline |
|---|---|
| Stack | Nuxt 4, Vue 3 Composition API, TypeScript, Tailwind CSS v4 |
| Package manager / IDE | npm / VS Code; Windows local development |
| Content | Structured source-code data; no admin CMS |
| Rendering | SSG proposed; finalize Phase 2 after considering hosting |
| Internationalization | EN/ID required; default EN and prefixed locale routes are proposals, not final decisions |
| Registration | Interconf event-specific URL TBD |
| Brand | SEAMEO CECCEP; official brand assets/guidelines TBD |
| Tools | Git/GitHub; ChatGPT, Codex, Figma subject to access and internal policy |
| Hosting / domain / access | TBD by IT; no production deployment without authorization |
| Budget / deadline | TBD by mentor |
| Content ownership | Committee/mentor validates official content and translation |
| Existing local repo | Not inspected during planning; verify package versions and scripts in Phase 2/4 |

## 7. Risks

| ID | Risk | Impact | Mitigation | Owner (proposed) |
|---|---|---|---|---|
| R-01 | Scope changes | Rework | Change request, update FR and roadmap | Developer/mentor |
| R-02 | Official data late | Incomplete pages | TBA in staging; approved status in production | Committee |
| R-03 | Brand/design rejected | Rework | Obtain guideline and approval before full UI implementation | Mentor/developer |
| R-04 | AI code inconsistent | Technical debt | AGENTS.md, review, small changes, tests | Developer |
| R-05 | Dependency audit issues | Security/build risk | Review npm audit; avoid blind force upgrades | Developer/IT |
| R-06 | Host incompatible | Release delay | Confirm runtime/SSG, URL behavior, headers, rollback early | IT |
| R-07 | Interconf link stale | Registration failure | Validate exact new-event link and status | Committee/IT |
| R-08 | Heavy assets/animations | Poor performance | Optimize images, reduced motion, budget review | Developer |
| R-09 | Inaccurate speaker/fee/date | Reputational risk | Official content approval; no fake data | Committee |
| R-10 | Handover incomplete | Maintenance risk | README, update guide, CI/CD docs, Git history | Developer |
| R-11 | EN/ID inconsistency | UX and information errors | Translation parity test and human review | Committee/developer |
| R-12 | Analytics privacy issues | Compliance risk | Approval, data minimization, consent if required | IT/mentor |
| R-13 | AI sharing not authorized | Confidentiality risk | Obtain permission, never share secrets or participant data | Developer/IT |

## 8. Change control

1. Record requested change, requester and reason.
2. Identify affected FR/NFR, user flows, architecture, timeline and costs.
3. Obtain mentor/IT approval where required.
4. Update baseline documents and TASKS.md when created; retain IDs for traceability.
5. Implement via scoped Git branch and review; update tests and documentation.

## 9. Scope acceptance

Developer-confirmed baseline recorded. Formal mentor approval, content release approval, official branding details and hosting remain open. See 01-REQUIREMENT-ANALYSIS.md for TBD register. Do not expand MVP or select a paid service without approval.
