# 20 — Final Release Readiness Audit

Version 0.2 | **NOT READY — evidence not collected** | No application, test suite or production deployment inspected by this documentation task.

## 1. Executive summary

Planning baseline validated by developer: new conference site, bilingual EN/ID, Nuxt/Vue/TypeScript/Tailwind, source-code content, Interconf external registration, institutional branding. Formal mentor approval, actual repository configuration, approved content/design, deployment provider and verification results remain pending. Unlike the supplied portal audit, no pass counts, performance scores or claims of zero errors are copied.

## 2. Release gates and evidence

| Gate | Required evidence | Owner proposal | State |
|---|---|---|---|
| Scope | Approved applicable Must list and change decisions | Mentor | Pending |
| Architecture | ADRs, actual versions and SSG/i18n decisions | Developer/IT | Pending |
| Branding | Approved Figma version, asset rights and tokens | Mentor/committee | Pending |
| Content | Official event details, EN/ID and link approvals | Committee | Pending |
| Code review | PR checks and reviewer approval | Developer | Pending |
| Static checks | Typecheck, lint, content-validation reports | Developer | Not Run |
| Automated tests | Unit/component/E2E reports and commit SHA | QA/developer | Not Run |
| Browser/DPI | Chromium, Firefox, WebKit, mobile, scaling evidence | QA | Not Run |
| Accessibility | Automated and manual WCAG review, issue disposition | QA | Not Run |
| Performance | Lighthouse lab results, field data if available | QA | Not Run |
| Security | Audit triage, secrets review, headers, external URLs | IT/developer | Not Run |
| SEO | Generated HTML, sitemap, robots, canonical, hreflang | QA | Not Run |
| UAT | Applicable scenarios passed, defects closed, sign-off | Mentor/committee | Not Run |
| Build | Reproducible artifact, commit and checksum | Developer | Not Run |
| Host | Domain, TLS, routes, cache, access approved | IT | TBD |
| Rollback | Staging rehearsal and previous artifact | IT | Not Run |
| Production smoke | Both locale routes, CTA and docs | IT/developer | Not Run |
| Handover | Documentation, ownership and access transfer | IT/mentor | Pending |

## 3. Actual metric report (fill with evidence)

| Metric | Target proposal | Actual | Evidence |
|---|---|---|---|
| Lighthouse Performance | ≥90 | Not Run | TBD |
| Accessibility | ≥95 + manual checks | Not Run | TBD |
| Best Practices | ≥95 | Not Run | TBD |
| SEO | ≥95 | Not Run | TBD |
| LCP / INP / CLS field p75 | ≤2.5s / ≤200ms / ≤0.1 | No field data | TBD |
| Type errors | 0 | Not Run | TBD |
| Required automated tests | All pass | Not Run | TBD |
| UAT | All applicable Must pass | Not Run (105 planned cases) | TBD |
| Broken internal links | 0 | Not Run | TBD |
| Critical unresolved security/defects | 0 | Not Run | TBD |

A planned test is not an executed test. Lighthouse is not proof of WCAG compliance. Report actual measured conditions and exceptions. Avoid aggregate pass rates hiding blocked/NA scenarios.

## 4. Residual risks and acceptance

| Risk | Impact | Mitigation | Residual state |
|---|---|---|---|
| Interconf URL changes/outage | Registration disrupted | Committee confirms URLs/status; incident contact and update | TBD |
| Content translation drift | Misinformation | Shared IDs, review parity and bilingual gate | TBD |
| Static content update delay | Stale agenda/status | Document expedited release workflow | TBD |
| Hosting behavior mismatch | Locale deep links/404 fail | Host validation and rollback rehearsal | TBD |
| Supply-chain changes | Build/security risk | Locked deps, reviewed updates, audit | TBD |
| Unapproved imagery | Institutional/legal risk | Asset manifest and consent | TBD |
| Late brand or event changes | Rework | Approval before full development; change control | TBD |
| No approved analytics | Limited field measurement | Lab reports; analytics only after privacy approval | TBD |

Residual risk acceptance requires owner, severity, mitigation, deadline and approval. Critical security or broken registration cannot be silently waived.

## 5. Go/no-go and rollback

Release decision is **No-Go** until evidence is available. At release meeting check exact commit/artifact, unresolved defects, UAT, official links, deployment access and rollback. If production smoke fails, use [deployment runbook](12-DEPLOYMENT.md) and record incident. Do not deploy just because documentation is complete.

| Approval | Name | Date | Decision / evidence |
|---|---|---|---|
| Developer / QA | TBD | TBD | Pending |
| Content / bilingual reviewer | TBD | TBD | Pending |
| Mentor / conference committee | TBD | TBD | Pending |
| IT release authority | TBD | TBD | Pending |

## 6. Handover checklist

- [ ] Repository ownership, protected branches, approved access and recovery procedure.
- [ ] README setup, architecture ADRs, data contract and editorial guide.
- [ ] Approved design/Figma handoff, brand tokens and asset rights inventory.
- [ ] Test/UAT reports, issue register, security findings and release record.
- [ ] Deployment/DNS owner, previous artifact and rollback evidence.
- [ ] Demonstrate bilingual content update and registration-status change on preview.
- [ ] Transfer access securely; no credential values in docs. Remove temporary access per IT policy.
- [ ] Archive event/maintenance owner and contact confirmed.
