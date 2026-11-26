# 08 — Sitemap

Version 0.1 | Phase 3 draft | Route decisions depend on Phase 2

## 1. Proposed information architecture

```text
Conference Website
├── Home (identity, overview, why join, featured speakers, themes, partners)
├── About (overview, objectives, themes)
├── Speakers (keynote and plenary)
├── Programme (daily schedule, event programmes)
├── Registration (dates, fees, status, external CTA/login)
├── Venue (venue, accommodation)
├── Downloads (documents and presentations)
└── Contact (official contacts; may be a footer section)
```

FAQ is a Should feature; search and dark mode remain Could. External registration/login links go to approved event-specific Interconf URLs, not local routes. Optional sections depend on approved content. No local auth, admin or payment pages.

## 2. Candidate route matrix

| Page | EN | ID | FR coverage |
|---|---|---|---|
| Home | /en | /id | 001–012,053–054 |
| About | /en/about | /id/about | 008–009,020–023 |
| Speakers | /en/speakers | /id/speakers | 013–019 |
| Programme | /en/programme | /id/programme | 024–032 |
| Registration | /en/registration | /id/registration | 033–040,070 |
| Venue | /en/venue | /id/venue | 041–048 |
| Downloads | /en/downloads | /id/downloads | 049–052 |
| Contact | /en/contact | /id/contact | 011 |

All routes also support FR-061,067–069. Slugs are proposals; translated labels are required but translated slugs are not yet decided. Root behavior and 404 handling are TBD. If contact becomes footer-only, use an accessible anchor and update matrix. Keep both locale routes equivalent. Do not invent new routes solely to match the reference's URL naming.

## 3. Navigation proposal

Desktop: Home, About, Speakers, Programme, Registration, Venue, Downloads; language switcher, Login (external), Register (external or official status). Use dropdown only where grouping helps and ensure keyboard support. Mobile: menu button, same destinations, clear CTA and language switcher. Footer: contact, important links, approved organizer logo and policy links where applicable.

## 4. Acceptance

- [ ] Every applicable Must feature mapped to route or section.
- [ ] No orphan pages; both locales navigable and shareable.
- [ ] Direct access/refresh, 404 and external destinations verified.
- [ ] Navigation labels and information hierarchy approved by mentor.

## 5. Page composition and information hierarchy

| Route | Primary section sequence | Main CTA | Alternate path |
|---|---|---|---|
| Home | Hero → event facts → overview/why join → featured speakers → themes → programme preview → partners | Register | Programme, registration details |
| About | Purpose → objectives → themes/subthemes | Explore programme | Speakers |
| Speakers | Keynotes → plenary groups → status/biography | View programme | Registration |
| Programme | Date/timezone → daily tabs → session rows → event details | Registration | Download official schedule if available |
| Registration | Availability → deadlines → categories/fees → external registration/login | Interconf | Contact/venue |
| Venue | Venue overview → address/map → accommodation options | Official map | Registration/contact |
| Downloads | Document filters only if needed → published/TBA cards | Open official document | Programme |
| Contact | Official contact channels → help notes | Official email/link | FAQ if approved |

Menu grouping proposal: Programme dropdown (daily agenda, event programmes); Registration dropdown (important dates, fees); Venue dropdown only if lodging applicable. Anchors must use stable IDs and work with language switch. Use `scroll-margin-top` with sticky header. Avoid hidden-only navigation on hover. Separate URLs for long sections only if UX review warrants; update route registry and tests together.

## 6. Navigation inventory and review checklist

- Route names are stable semantic identifiers, independent of translated labels. Maintain one navigation config for desktop/mobile/footer variants, no hardcoded per-locale links in multiple components.
- Internal links use locale-aware Nuxt links; external links use verified URLs and indicate destination. No `href="#"` stand-ins for missing links.
- Footer contact uses official details only. No privacy policy URL invented; if analytics approved, add approved privacy policy link.
- Sitemap XML includes canonical published routes only; 404, preview and external destinations excluded. Locale links must be reciprocal.
- Verify direct access, browser back/forward, mobile menu close, anchor offsets and current-page announcement. Record sitemap approval in Phase 3.
