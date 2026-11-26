# SEAMEO CECCEP Conference Website

## Project baseline

- Start with [doc/00-INDEX.md](doc/00-INDEX.md). Documents 01–05 define the developer-validated planning baseline. Check the status of later documents and record changes to approved scope through the project change process.
- Use Nuxt 4, Vue 3 Composition API, TypeScript, Tailwind CSS v4, and npm. Use `<script setup lang="ts">` in Vue components with logic. Inspect `package.json`, the lockfile, and relevant source before editing.
- The MVP is a public, bilingual EN/ID conference microsite. Keep registration and login as approved Interconf links. Keep conference content in source code. Internal authentication, payment, submission, database, CMS, and backend API are outside MVP scope.

## Architecture and content

- Use the same Nuxt page for both locales. Preserve `/en` and `/id`, EN default, browser detection disabled, locale-aware links, and server rendering during static generation.
- Pages compose content, layouts provide the shared shell, and generic components use props and emits. Prefer existing Vue and Tailwind patterns. Keep reusable logic small and review cohesion when a file grows.
- Keep UI labels and status messages in `i18n/locales/`. Keep event records typed, with stable IDs, bilingual fields, and shared dates, amounts, and approved destinations. Use official wording and approved assets. Keep synthetic fixtures isolated from the public artifact.
- Preserve semantic HTML, keyboard controls, visible focus, reduced motion, and layouts that accommodate longer text in both languages.

## Verification and changes

- Check Git status and preserve user changes. Match work to relevant FR/NFR and ADRs. Keep changes scoped and update affected documentation and checks.
- The PoC was verified with Node 26.13.1 and npm 12.2.3. Use `npm run typecheck`, `npm run test:content`, and `npm run generate`. Check the generated `.output/public/` for locale HTML and test navigation on a static server. Report actual exit codes and distinguish blocked or unrun checks from successful results.
- Review dependency and lifecycle-script changes before applying them. Preserve lockfile reproducibility. Keep secrets, sensitive or unapproved content, and participant data out of source and artifacts.
- Obtain explicit authorization for commits, pushes, deployment, DNS changes, real third-party transactions, or external scans. Follow the institution's approved AI and access policies.
