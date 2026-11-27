# 21 — AGENTS.md Candidate (Phase 2)

Status: Phase 2 review record. The [root AGENTS.md](../AGENTS.md) is the operational version and reflects the verified baseline and outstanding release gates.

## Candidate instructions

- Read `doc/00-INDEX.md` first. Documents 01–05 are the developer-validated planning baseline. Use the architecture decision register and each document's status to identify approved decisions and open proposals.
- Stack: Nuxt 4, Vue 3 Composition API `<script setup lang="ts">`, TypeScript, Tailwind v4, npm. Preserve existing conventions and locked dependencies. Inspect repo and scripts before edits. No forced audit fixes, unapproved dependencies, blind script approvals or architecture migration.
- Scope: new bilingual conference microsite, EN/ID, source-code-managed data, Interconf external link. No internal auth, CMS, DB, payment or submission. Do not invent event names, speakers, dates, prices, logos, URLs or approval status.
- Follow separation of concerns: pages compose, layouts share shell, UI props/emits, typed data single source, pure utilities, locale-aware routing. No hardcoded duplicate content or strings; keep EN/ID parity, shared dates/currencies, explicit status. Avoid unnecessary state libraries and overengineering.
- Accessibility: semantic HTML, visible focus, keyboard menu/tabs/accordion, contrast, reduced motion, responsive 320–1920+, test actual long translations. Preserve SEO and static generated routes. Avoid image zoom, decorative excess, fake portraits and generic AI UI.
- Security: no secrets/private content in source, docs, public build or logs. Verify links and asset rights. No real third-party transactions or unapproved external scans. Never push/deploy/change DNS without authorized instruction.
- Workflow: identify task and FR/NFR, inspect relevant files, state plan and unresolved decisions, implement smallest coherent change when authorized, run configured checks, report actual commands/results and limitations, update impacted docs and tests. Never label unrun tests passed. Do not edit unrelated files or overwrite user changes.
- Code review: review large page/component files for cohesion rather than arbitrary splitting; avoid unrelated refactors. Report diff summary, affected routes/locales, tests, risks and follow-up. Do not commit without request; review staged changes before commit.

## Promotion review

- [x] Actual repository, package scripts, Node compatibility and lockfile inspected.
- [x] PoC architecture, locale routing and data choices reflected in the prepared root file.
- [x] Root checked for existing instructions. No previous root AGENTS.md was present.
- [ ] Team AI policy, Git conventions and design process confirmed.
- [x] Initial baseline commit `595808f` confirmed on `main`.
- [ ] Developer and IT confirm pending production and CI decisions in the [architecture register](07-ARCHITECTURE.md).
