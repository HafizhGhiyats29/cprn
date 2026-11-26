# 11 — Testing & Quality Assurance

Version 0.1 | Draft test plan | No tests executed

Sources: [FR](02-FUNCTIONAL-REQUIREMENTS.md), [NFR](03-NON-FUNCTIONAL-REQUIREMENTS.md), [roadmap](05-PROJECT-ROADMAP.md). Test IDs below are initial representative cases, not full coverage; expand traceability to every applicable Must during QA. All actual results are Not Run.

## 1. Strategy

Use unit tests for data formatting, validation and status logic; component tests for UI states where appropriate; E2E for user flows; manual review for visual quality, official data and accessibility. Candidate tooling: Vitest, Playwright, axe, Lighthouse, browser DevTools; verify dependencies and scripts before installing. Run against production-like build, both EN/ID, record commit, environment and evidence.

## 2. Initial test matrix

| ID | Scenario | Expected result | Trace | Status |
|---|---|---|---|---|
| TC-01 | Open homepage EN/ID | Approved identity, CTA, navigation and overview | FR-001–009,061 | Not Run |
| TC-02 | Open mobile menu and dropdown by keyboard | Correct route, focus usable | FR-002–004; NFR-016,019 | Not Run |
| TC-03 | Switch language on subpage; refresh direct URL | Equivalent localized page, no missing labels | FR-067–069; NFR-059–063 | Not Run |
| TC-04 | Speaker list with empty/long data | Correct grouping, fallback and status | FR-013–018; NFR-052,056 | Not Run |
| TC-05 | Expand theme accordion | Correct content and accessible state | FR-020–023 | Not Run |
| TC-06 | Change programme day | Correct sessions, dates and timezone | FR-024–029 | Not Run |
| TC-07 | Review dates and fees in EN/ID | Correct order, currency and amount | FR-033–038; NFR-064 | Not Run |
| TC-08 | Register/login open state | Correct verified external Interconf URL | FR-007,039,040 | Not Run |
| TC-09 | Registration closed/TBA/missing URL | Status shown; no fake link | FR-070 | Not Run |
| TC-10 | Venue and applicable accommodation | Approved information and links | FR-041–048 | Not Run |
| TC-11 | Published/unpublished file | Valid file or appropriate status | FR-049–052 | Not Run |
| TC-12 | Partner and contact | Approved logos and correct links | FR-011,053–055 | Not Run |
| TC-13 | Edit bilingual data and regenerate | Changes render without rewriting UI | FR-071; NFR-041,050 | Not Run |
| TC-14 | Widths 320,390,768,1023,1024,1440,1920 | No page overflow, usable layouts | NFR-007–012,063 | Not Run |
| TC-15 | Keyboard, contrast, alt text, reduced motion | Meets applicable accessibility checks | NFR-013–020 | Not Run |
| TC-16 | Audit dependencies, secrets, headers and XSS | No unresolved critical findings | NFR-021–028,066 | Not Run |
| TC-17 | Lighthouse production-like EN/ID | Compare to targets, record results | NFR-001–006,014,029 | Not Run |
| TC-18 | Metadata, HTML, sitemap, robots, hreflang | Correct locale-specific crawlable output | NFR-029–037,059–061 | Not Run |
| TC-19 | Invalid route and link crawl | Correct 404 behavior; no broken internal links | NFR-055,058 | Not Run |
| TC-20 | Clean build/typecheck and approved host smoke | Reproducible build, direct links work | NFR-048,049,054,057 | Not Run |

## 3. Quality gates

Proposed Lighthouse minimums: Performance 90, Accessibility 95, Best Practices 95, SEO 95. Field CWV where available: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at p75. Lab metrics not proof of field INP or WCAG compliance. Zero unresolved critical bugs/security issues, zero broken internal links, approved bilingual content. Conditional Must features must be marked applicable/not applicable with reasons. Capture actual scores and deviations with approval.

## 4. Test record template

`Test ID | FR/NFR | Commit | Locale | Browser/OS | Viewport | Steps | Expected | Actual | Status (Pass/Fail/Blocked/NA) | Evidence | Owner | Date`

Bug record: ID, severity, priority, steps, expected/actual, screenshot/log, environment, assigned owner, status, retest result. UAT: mentor/committee verifies content, branding, usability, registration status, and records explicit approval. No release based on this unexecuted plan alone.

## 5. Test architecture and toolchain proposal

```text
              Manual UAT / release smoke
            Playwright E2E (EN/ID, browsers)
          Component integration and accessibility
        Unit tests (data / formatting / status / URL)
      Static checks (types, lint, content parity, build)
```

```text
tests/
  unit/{content-validation,format-date,format-money,safe-url,registration-status}.test.ts
  components/{Navbar,LanguageSwitcher,ScheduleTabs,ThemeAccordion,DocumentCard}.test.ts
  e2e/{navigation,locales,programme,registration,documents,accessibility,responsive,seo}.spec.ts
  fixtures/       # synthetic controlled data only
  reports/        # ignored generated evidence; retain approved reports separately
```

Proposed tools: Vitest for pure modules, Vue Test Utils or Nuxt testing utilities if component runtime needed, Playwright for E2E, axe for automated accessibility, Lighthouse for lab performance. No dependency installed or test file implemented by this document. Validate version compatibility and package scripts in Phase 2/4. Keep tests deterministic, use fixtures and fixed clocks; avoid sleep-based waits, brittle CSS selectors and external live transactions.

## 6. Command matrix (proposed scripts, verify package.json)

| Gate | Candidate command | Expected result |
|---|---|---|
| Install | `npm ci` | Lockfile respected; review install warnings |
| Lint | `npm run lint` | Configured lint rules pass |
| Typecheck | `npm run typecheck` (Nuxt typecheck) | Zero type errors |
| Content validation | `npm run validate:content` | IDs, references, URLs, assets and EN/ID parity pass |
| Unit/component | `npm run test:unit` | All required suites pass |
| Static build | `npm run generate` | All published routes generated |
| E2E | `npm run test:e2e` | All applicable cases pass; reports retained |
| Audit | `npm audit` | Findings triaged, critical unresolved blocks release |

Scripts are desired contracts, not confirmation of existing commands. Use `npm run` to inspect. Typecheck may require configured `vue-tsc`/TypeScript; see https://nuxt.com/docs/api/commands/typecheck . Do not use npm run --if-present as release gate because missing checks must be visible. Playwright browser installation only after tool approval.

## 7. Unit and integration scenarios

| ID | Input / operation | Expected | Trace |
|---|---|---|---|
| UT-01 | Duplicate speaker or session IDs | Validator rejects | NFR-041,052 |
| UT-02 | Session references nonexistent speaker | Reject | FR-016,026 |
| UT-03 | Missing ID translation | Reject required field | FR-061,069 |
| UT-04 | Invalid timezone, end before start | Reject | FR-025 |
| UT-05 | Valid parallel sessions | Flag/retain, not discard | FR-024–029 |
| UT-06 | Date at midnight offset | Display correct event date | NFR-064 |
| UT-07 | Same numeric fee EN/ID | Locale formatting only | FR-037–038 |
| UT-08 | Negative fee, missing currency | Reject | FR-037–038 |
| UT-09 | Registration open without URL | Reject or approved fail-closed state | FR-039,070 |
| UT-10 | javascript URL or spoofed host | Reject | NFR-026 |
| UT-11 | Unpublished document with stale path | No clickable URL emitted | FR-051 |
| UT-12 | Unknown locale | Explicit safe handling; no raw keys | FR-061 |
| UT-13 | Empty speaker/programme | Localized empty state | NFR-056 |
| CT-01 | Keyboard open/close menu | Focus and aria state correct | FR-003–004 |
| CT-02 | Switch schedule tab | Correct day content, selected state | FR-028 |
| CT-03 | Accordion expands/collapses | Accessible state and content | FR-023 |
| CT-04 | Missing speaker image | Approved fallback; no broken icon | FR-014 |
| CT-05 | Closed/TBA registration | Status visible, no fake link | FR-070 |
| CT-06 | Language switch on subpage | Equivalent destination | FR-067 |

## 8. Browser and performance execution protocol

Run E2E against served generated artifact, not only dev server. Test Chromium, Firefox, WebKit and mobile emulation. Viewports 320x740, 390x844, 768x1024, 1024x768, 1440x900, 1920x1080; add 1536x864 and 1280x720 for layout checks resembling Windows scaled workspaces. Manual OS DPI 125/150% and 200% browser zoom; emulation not substitute. Record browser version, OS, DPR and CSS viewport. Check no console errors, failed first-party requests, hydration warnings, overflow, clipping or inaccessible focus. Treat third-party errors separately and document disposition.

Lighthouse: production-like build, documented device/network settings, at least 3 runs per key route/locale when practical; report median and individual runs, not best score. Identify LCP asset, JS/CSS size, request waterfall, layout shifts and TBT. Field INP measured only from real-user data if available. Suggested review budgets (not approved hard gates): hero asset ≤350 KB when quality permits, initial JS transfer ≤250 KB compressed, investigate chunks >500 KB uncompressed. Measure actual values and tune based on approved design. Do not lazy-load LCP image. Test sitemap/robots/meta and actual HTTP 404 on staging.

## 9. Traceability and sign-off

[UAT plan](19-UAT-TESTING-PLAN.md) has one primary scenario per FR (including explicit exclusion checks) plus cross-cutting NFR scenarios. [E2E guide](18-E2E-TESTING-GUIDE.md) specifies execution. Create FR/NFR coverage matrix with actual test IDs; every applicable Must and quality gate has evidence, conditional items NA only with approval. A skipped test is not a pass. Record failed/blocked tests, severity, repro and fix commit, retest and regression result. Critical/major issues block release unless authorized process explicitly allows noncritical exceptions; critical security and broken registration cannot be waived casually. Release audit [20](20-FINAL-RELEASE-READINESS-AUDIT.md) remains Not Ready until evidence.
