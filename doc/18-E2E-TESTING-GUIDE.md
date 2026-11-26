# 18 — End-to-End Testing & Troubleshooting Guide

Version 0.2 | Draft | No E2E suite installed or executed by this documentation.

## 1. Public-user roles and test boundaries

Test visitor, researcher, participant and mobile visitor journeys. Operational developer/reviewer/IT permissions are covered by Git and release process, not in-app RBAC. No login test using real participant credentials; verify only approved Interconf link and status. No test submissions/payments on external production services. Use synthetic fixture conference in isolated preview when testing state transitions; never publish fixtures.

## 2. Setup and execution

1. Record commit, branch, Node/npm versions, lockfile, environment and locale configuration. Confirm clean working tree and approved test tool versions.
2. Run configured `npm ci`, typecheck/content validation, unit tests and `npm run generate`.
3. Serve `.output/public` using approved local static server (ensure directory index and 404 behavior) or staging. Dev server can assist debugging but is not final proof.
4. Configure Playwright baseURL to that preview; install browser binaries only after dependencies approved. Run Chromium first, then full browser/viewport matrix.
5. Retain HTML report, trace and screenshots on failure; redact private paths or tokens. Review failures and rerun affected and regression suite.

Illustrative commands after setup, not executed:

```bash
npx playwright test --project=chromium
npx playwright test
npx playwright show-report
npx playwright test --debug
```

Project names and package scripts must match actual config. Example config concept (do not paste before tool setup):

```ts
import { defineConfig, devices } from '@playwright/test'
export default defineConfig({
  testDir: './tests/e2e',
  retries: 0,
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  reporter: [['list'], ['html', { open: 'never' }]],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile', use: { ...devices['iPhone 14'] } }
  ]
})
```

Preview server must already be running on chosen port or configure webServer with an actual approved command. Browser profile emulation does not replace actual devices.

## 3. E2E implementation patterns

Prefer semantic locators (`getByRole`, `getByLabel`) and assertions on visible state. Use test IDs only when semantic locators insufficient; names and route labels from approved translations. Wait for state with Playwright assertions, no arbitrary sleeps. Capture console and failed first-party requests, excluding only documented benign cases. Keep each test independent; reset locale/storage between cases. External URL tests assert `href` without navigating to payment/registration.

Illustrative scenario (label/URL contract must match final design):

```ts
import { test, expect } from '@playwright/test'
test('programme locale switch preserves page', async ({ page }) => {
  await page.goto('/en/programme')
  await page.getByRole('link', { name: 'Indonesia', exact: true }).click()
  await expect(page).toHaveURL(/\/id\/programme\/?$/)
  await expect(page.locator('html')).toHaveAttribute('lang', /^id/)
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
```

## 4. Suite inventory and procedure

| Suite | Manual verification / automation target |
|---|---|
| Navigation | Direct GET all locales; menu, dropdown, footer, anchor, back/forward, 404 |
| Homepage | Approved identity, event details/TBA, primary CTA, partner/overview |
| Speaker | Grouping, status, long names, missing portrait, details if approved |
| Themes | Expand/collapse via mouse and keyboard, localized copy |
| Programme | Every day, timezone, parallel sessions, no data state, schedule PDF |
| Registration | Open/closed/TBA fixtures, exact official href, no local credential form, fees parity |
| Venue | Address, approved map/hotel links, optional accommodation state |
| Documents | File status, actual file path/type/language, missing link prevention |
| Bilingual | Equivalent page switch, direct refresh, metadata, no untranslated keys |
| Accessibility | Skip link, focus order, focus visible, Escape, axe, reduced motion |
| Responsive | Viewport matrix, long strings, overflow, zoom, actual OS DPI manual |
| SEO/static | Pre-rendered HTML, reciprocal hreflang, sitemap, canonical, real 404 |
| Security | Unsafe link fixtures, no private payloads, approved host headers |

## 5. Manual keyboard and responsive procedure

Open homepage using Tab, activate skip link, traverse navbar, expand dropdown, Escape, open mobile menu, choose programme, use tabs and accordion with appropriate keys, switch locale, reach footer. Focus must remain visible, no keyboard trap; if modal, return focus to opener. At 320px and 200% zoom, check text wraps and controls remain accessible. For schedule tables allow contained horizontal scrolling only when necessary, not entire page. Run reduced-motion mode. Test actual Windows scaling if available and document display/OS/browser separately.

## 6. Troubleshooting

| Symptom | Diagnosis | Corrective action |
|---|---|---|
| Dev works, generated deep link 404 | Missing prerender or host directory index | Inspect output and host routing, regenerate explicit routes |
| Locale resets to home | Switcher uses hardcoded URL | Use equivalent route helper; test every route |
| Missing locale JSON after deploy | Runtime locale asset not generated | Inspect network/build output; adapt module configuration |
| Hydration warning | Non-deterministic time/random/browser condition | Make initial render deterministic; defer browser-only effects |
| E2E timeout | Wrong baseURL, server stopped, selector mismatch | Inspect trace, request and locator; no blanket timeout increase |
| Tests pass Chromium only | Browser behavior differs | Inspect WebKit/Firefox layout and native APIs, fix compatibility |
| Overflow at scaling | Fixed width, long labels, grid min-width | Flexible layout, min-width:0, wrap; retest |
| Image broken | Missing case-sensitive path or file | Check build artifact and asset manifest |
| Interconf link changed | Committee changed event destination | Reconfirm official URL and status; update source and redeploy |
| npm engine warning | Runtime mismatch with locked deps | Check engines and use approved supported runtime; avoid blind upgrade |

## 7. Exit criteria

All applicable required flows pass; no unresolved critical defect; reports associated with exact commit, environment and locale; third-party issues documented; manual accessibility and UAT still required. No fabricated pass counts or zero-error claim. See [UAT](19-UAT-TESTING-PLAN.md) and [release audit](20-FINAL-RELEASE-READINESS-AUDIT.md).
