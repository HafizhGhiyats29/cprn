# 05 — Project Roadmap

Version 1.0 | 2026-11-26 | Agile Incremental Development

## 1. Delivery strategy

Develop in small increments with requirement, design, code and QA review. Proposed 4-week work plan, not an approved deadline. Actual schedule depends on mentor, workload, bilingual content readiness and IT hosting. Testing, security, accessibility and documentation run throughout, not solely in Phase 5/6.

| Phase | W1 | W2 | W3 | W4 |
|---|:---:|:---:|:---:|:---:|
| 1 — Planning | X | | | |
| 2 — Architecture | X | | | |
| 3 — UI/UX | X | X | | |
| 4 — Development | | X | X | |
| 5 — Quality Assurance | | | X | X |
| 6 — Release | | | | X |

## 2. Master task checklist

### Phase 1 — Planning

- [x] Requirement Analysis — documented
- [x] Functional Requirements — documented, bilingual mandatory
- [x] Non-Functional Requirements — documented; targets proposed
- [x] Project Scope — documented
- [x] Project Roadmap — documented
- [x] Developer validation decisions recorded
- [ ] Save/commit documentation into local repository
- [ ] Formal mentor baseline review (not yet documented)

### Phase 2 — Architecture

- [ ] System Architecture — public site, external Interconf, optional approved analytics; no internal API/DB for MVP
- [ ] Folder Structure — inspect current repository first; layout/components/data/locale/assets/tests/docs
- [ ] Rendering Strategy — decide SSG, route generation, 404 and hosting compatibility
- [ ] Data Architecture — typed conference data, translations, status, official links, assets, validation
- [ ] AGENTS.md — project rules and constraints for AI coding agent
- [ ] Decide bilingual routing, locale default and i18n approach; document decision and rationale
- [ ] Review local npm dependencies, Node compatibility and available scripts

### Phase 3 — UI/UX

- [ ] Sitemap (both locales)
- [ ] User Flow (including language switching and external registration)
- [ ] Moodboard (based on official branding)
- [ ] Visual Concept (distinct from CPRN)
- [ ] Wireframe
- [ ] Design System (tokens, components, interaction states)
- [ ] Desktop Design
- [ ] Mobile Design (and tablet review)
- [ ] Mentor Approval (including brand and content hierarchy)

### Phase 4 — Development

- [ ] Project Setup Review
- [ ] Reusable Components
- [ ] Base Layout (navigation, footer, locale switcher)
- [ ] Homepage
- [ ] Conference Subpages
- [ ] Data Integration (typed bilingual data, status and asset handling)
- [ ] External Registration (Interconf)
- [ ] Localized SEO and route generation
- [ ] Optional improvements only as prioritized

### Phase 5 — Quality Assurance

- [ ] Code Review
- [ ] Unit Testing
- [ ] End-to-End Testing (both locales and registration CTA)
- [ ] Responsive Testing
- [ ] Accessibility
- [ ] Security
- [ ] Performance
- [ ] SEO
- [ ] Translation parity, content approval, link testing, UAT

### Phase 6 — Release

- [ ] Production Build
- [ ] CI/CD
- [ ] Deployment (requires approved target and access)
- [ ] Documentation
- [ ] Handover
- [ ] Post-release smoke test and rollback verification

## 3. Milestones and gates

| Milestone | Deliverables | Exit criteria |
|---|---|---|
| M1 Planning | Five planning documents, decision/TBD register | Developer baseline documented; mentor review before committing institutional scope |
| M2 Architecture | Architecture decision, folder/data/rendering/i18n plan, AGENTS.md | Technical approach documented, build/hosting assumptions explicit |
| M3 UI/UX | Sitemap, wireframes, design system, desktop/mobile design | Official brand guideline and mentor approval |
| M4 Development | Working public microsite, locale support, content integration | Applicable Must features implemented in EN/ID; test build successful |
| M5 QA | FR/NFR traceability matrix, bug log, audit report, UAT | Critical issues resolved; official data and translation approved |
| M6 Release | Deployment, pipeline, rollback, technical and content update guide | Host/access approved; production verified; handover accepted |

## 4. Proposed sprint focus

| Sprint | Activities | Outcome |
|---|---|---|
| Week 1 | Finalize docs, baseline Git, architecture, i18n plan, request brand/data, sitemap/wireframe | Design-ready technical foundation |
| Week 2 | Design review, reusable components, layout, bilingual homepage | Approved design and initial working pages |
| Week 3 | Subpages, Interconf, localization, content, accessibility, early testing | Complete applicable MVP features |
| Week 4 | UAT, content review, performance, SEO, security, build, release and handover | Release candidate and production if approvals available |

If hosting is unresolved, complete a production build and handover package; do not mark deployment complete. If official content is late, use clearly marked staging placeholders and defer public release until approved content/status is available.

## 5. Definition of Done (project-level)

- [ ] All applicable Must FR pass; conditional requirements reviewed and documented.
- [ ] No unresolved critical bugs.
- [ ] No broken internal links.
- [ ] Responsive desktop, tablet and mobile layouts in EN/ID.
- [ ] Performance targets met or deviations documented and approved.
- [ ] Accessibility automated and manual checks completed.
- [ ] Security review completed, no unresolved critical vulnerabilities.
- [ ] Localized SEO metadata, sitemap and canonical/hreflang verified.
- [ ] Production build succeeds.
- [ ] Configured automated tests and type checking succeed.
- [ ] Official content, assets and translations approved.
- [ ] Interconf links and registration status correct.
- [ ] Mentor approves design and UAT.
- [ ] Website deployed to authorized hosting and smoke-tested.
- [ ] Technical, content update and deployment documentation available.
- [ ] Source code and access handed over to IT without embedding secrets.

## 6. Workflow and reporting

For each feature: reference FR/NFR → inspect code → implement small change → run relevant tests → review → commit → update progress. Use Git branches and follow team repository policy. No unapproved push to main or production deployment. AI assistance is subject to institutional permission; developer verifies output and avoids sharing secrets.

Suggested commit prefixes: docs, feat, fix, test, refactor, perf, chore, ci. Use `docs: finalize phase 1 planning` for the five planning documents after review.

## 7. Next action

Phase 1 artifacts are prepared, not yet verified as copied into the local repository. Save them under `docs/`, review `git status`, commit only the relevant docs, then proceed to Phase 2. Open items from 01-REQUIREMENT-ANALYSIS.md must remain visible until resolved. Update statuses based on real work, not assumptions.
