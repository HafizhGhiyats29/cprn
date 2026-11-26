# 06 — Reference Analysis

Version 0.1 | Consolidated preliminary analysis | 2026-11-26

Reference: https://cprn2026.ceccep.org/ . Basis: section 4 in [01](01-REQUIREMENT-ANALYSIS.md) and earlier project discussion. No new live crawl, browser test, source-code inspection, or performance/security measurement performed for this update. Revalidate URLs/content before using them as current evidence.

## 1. Reference inventory and implementation mapping

| Reference page / feature | Function | Proposed new-site approach | FR trace |
|---|---|---|---|
| [Home](https://cprn2026.ceccep.org/) | Identity, overview, benefits, navigation | New visual hierarchy, clear CTA, bilingual sections | 001–012,061 |
| Home speakers and plenary | Speaker profiles and sessions | Reusable typed speaker cards, status and grouping | 013–019 |
| Home scopes/themes | Main and subtopics | Accessible structured accordion | 020–023 |
| [Brief Programme](https://cprn2026.ceccep.org/programme/brief-programme) | Agenda per day | Daily tabs, explicit timezone | 024–028,030–032 |
| [Event Programmes](https://cprn2026.ceccep.org/programme/event-programmes) | Detailed event information | Programme details with publication state | 029 |
| [Event Details](https://cprn2026.ceccep.org/programme/important-dates) | Dates, fees, venue and lodging | Clear sections and chronological timeline | 033–038,041–048 |
| [Presentations](https://cprn2026.ceccep.org/presentations) | Conference materials | Document listing, availability and file language | 049–052 |
| Organizer / partner logos | Institutional identity | Approved logos and consistent grouping | 053–055 |
| Login / registration | Interconf external handoff | Verified new-event links; no internal auth | 039,040,070 |
| Visitor counter | Visitor statistics | Real data only, subject to privacy approval | 059 |
| Footer / contact | Secondary navigation | Verified contact and internal links | 011 |
| New bilingual support | EN and ID | Equivalent routes and approved translations | 061,067–069,071 |

## 2. Improvement hypotheses

- Simplify dense homepage content and provide clear paths to details.
- Make schedules readable across devices; ensure tabs support keyboard interaction.
- Avoid dead links and misleading coming-soon placeholders; show approved status instead.
- Validate alt text against actual content; use semantic HTML and accessible interaction states.
- Use distinct visual composition while following official SEAMEO CECCEP branding.
- Measure performance and SEO in QA; do not claim the reference site is slow or insecure without evidence.

## 3. Content migration policy

This is a new conference, not a content clone. Do not reuse CPRN speakers, event dates, fees, forms or registration URLs as official new-event data. Do not copy assets without permission. Request current content, translations, photo/logo rights and brand guidelines from the committee. Preserve the relevant functions, not the old visual design.

## 4. Next verification

Record page URL, observation date, viewport, navigation behavior, screenshots where allowed, and evidence of each issue; distinguish observed facts from suggestions. Update this document if reference changes. Mentor confirms which functions remain applicable (especially paper submission, accommodation, analytics). See [requirements](02-FUNCTIONAL-REQUIREMENTS.md).

## 5. Evidence capture and comparison protocol

| Audit dimension | Procedure | Evidence | Status |
|---|---|---|---|
| Information architecture | Traverse header/footer in both screen classes; inventory links, anchors, downloads and external destinations | URL + screenshot + date | Pending fresh audit |
| Content integrity | Compare labels, dates, speaker names and alt text; flag missing or outdated content | Observation record | Pending |
| Responsive behavior | Inspect 320, 390, 768, 1024, 1440 CSS px; check text wrapping and menu | Screenshots | Pending |
| Accessibility | Keyboard traversal, focus, semantic headings, contrast | Manual notes and axe report | Pending |
| Performance | Test production reference without stressing server; record lab settings and repeated runs | Lighthouse JSON | Pending |
| Visual distinction | Compare layout, hierarchy, imagery and typography; preserve functions rather than pixels | Design comparison | Pending |

Use record `REF-NNN | observed URL | date | viewport | observed behavior | screenshot | suggested improvement | FR | validation owner`. Treat earlier findings as historical observations; do not present them as current failures without rechecking. Public analysis cannot determine internal framework, authentication or data storage.

## 6. Acceptance and migration boundary

For every reference function, the committee assigns retain, adapt, optional, or not applicable. Record reasons for omitted conditional items in scope. Do not redirect the old CPRN domain or reuse its event-specific URLs: a new conference is a separate publication. If IT later requests migration, prepare an explicit URL map and approval before any redirect.
