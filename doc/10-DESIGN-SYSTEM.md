# 10 — Design System

Version 0.1 | Phase 3 draft | Brand guideline and Figma approval pending

## 1. Visual direction

Professional international academic conference, accessible and contemporary, distinct from CPRN reference. Follow official SEAMEO CECCEP logo, colors and typography once supplied. Southeast Asian-inspired elements may be explored only if consistent with the official brand. No final palette, typeface or logo modifications are approved here.

| Asset / decision | Status |
|---|---|
| Official logo variants, clear space, minimum size | TBD — obtain brand guideline |
| Brand primary/secondary/accent colors | TBD — obtain approved values |
| Heading/body typeface and licenses | TBD |
| Photography and illustration rights | TBD |
| Figma file / component library | Not created in this update |

## 2. Proposed token structure

| Category | Token names / provisional scale |
|---|---|
| Semantic colors | brand-primary, brand-secondary, accent, surface, surface-muted, text, text-muted, border, focus, success, warning, danger |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64 px (proposal) |
| Typography | display, h1, h2, h3, body, small, caption; line-height and weight documented after font approval |
| Radius | small, medium, large (values TBD) |
| Layout | container width, gutters, section spacing, responsive columns |
| Motion | short interaction, optional reveal; respect reduced motion |

Map approved Figma variables to Tailwind CSS v4 semantic tokens; avoid hardcoding brand colors in components. Choose accessible text/background combinations; status must not rely on color alone. Verify WCAG contrast.

## 3. Component inventory

| Component | Variants / states |
|---|---|
| Navbar and mobile menu | desktop/mobile, open/closed, current route, focus |
| Language switcher | EN/ID, active, focus |
| Button / link | primary/secondary/text, hover, focus, disabled when applicable |
| Hero / section heading | default and compact; long titles |
| Speaker card | confirmed/TBC, image fallback |
| Programme tabs / session item | selected, focus, empty day, long titles |
| Theme accordion | expanded/collapsed, keyboard focus |
| Timeline | published/TBA deadline, chronological |
| Pricing card | fee, currency, free/TBA state |
| Venue / hotel card | photo fallback, optional external link |
| Document card | available/unpublished, language and file type |
| Partner logos / footer | approved asset, responsive grid, links |
| Status / empty state | TBA, unavailable, closed, error |

## 4. Responsive and accessibility rules

Design desktop 1440 px, tablet 768 px and mobile 390 px; test 320–1920+ per NFR. Use flexible layouts, no clipping of long EN/ID labels, readable typography, semantic heading structure, visible focus, keyboard support and appropriately sized targets. Ensure actual interactive behavior matches design. Avoid excessive motion and heavy decorative assets.

## 5. Deliverables and gate

Moodboard, visual concept, wireframe, approved tokens, reusable Figma components/variants, desktop/mobile designs, tablet review, prototype and developer handoff. Record Figma URL and approval date when available. Until approved, do not treat token proposals as institutional branding.

## 6. Institutional reference vs conference design

The supplied institutional portal design guide specifies Plus Jakarta Sans and navy/amber tokens. These are **reference values from the portal**, not yet an approved new-event brand kit. Prefer a new editorial composition (asymmetric hero, clear conference information strip, readable schedule, restrained ornament) rather than copying its CMS layout. Mentor confirms logo clear space, palette, font licenses and permitted patterns. Proposed light theme; dark mode remains Could.

| Semantic token | Reference / proposed seed | Use and constraints |
|---|---|---|
| brand-deep | #0B2545 | Header, primary dark backgrounds; verify contrast |
| brand | #1B4D89 | Primary button, links, focus candidate |
| accent | #E38B29 | Highlights; use dark text if contrast requires |
| text | #0F172A | Body/headings |
| muted | #475569 | Metadata on light surface |
| surface | #FFFFFF | Main reading surface |
| surface-subtle | #F8FAFC | Alternate sections |
| border | #CBD5E1 | Dividers, non-text contrast verified where required |
| success / error | #166534 / #B91C1C (proposal) | Semantic statuses with text/icon, not color alone |

Example Tailwind v4 token pattern, illustrative (merge with existing CSS, do not blindly overwrite):

```css
@import "tailwindcss";
@theme {
  --color-brand-deep: #0b2545;
  --color-brand: #1b4d89;
  --color-accent: #e38b29;
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

Only define `@import "tailwindcss"` once in root stylesheet. Keep semantic token definitions centralized. Review final contrast against actual backgrounds (normal text 4.5:1, large text 3:1, applicable UI boundaries 3:1), not merely token names.

## 7. Type scale, grid and density (proposal)

| Element | Mobile / desktop | Weight / line height |
|---|---|---|
| Hero H1 | 36 / 64 px | 700–800 / 1.12 |
| Page H1 | 32 / 48 px | 700 / 1.2 |
| H2 | 26 / 36 px | 700 / 1.25 |
| H3 | 20 / 24 px | 600–700 / 1.35 |
| Body | 16 / 16–18 px | 400 / 1.6 |
| Meta | 14 / 14 px | 500 / 1.5 |
| CTA | 16 / 16 px | 600 / 1.4 |

Prefer readable public event text over copying compact admin tables. Grid proposal 4/8/12 columns with 16/24/32 px gutters, container max 1200–1280px. Spacing scale 4,8,12,16,24,32,48,64,96px. Section padding 48 mobile / 80 desktop; adjust for content density. Radius 4/8/12px, restrained shadows. Touch targets aim for 44px where possible, at least WCAG 2.2 AA requirements and exceptions. Avoid fixed heights for translated titles; hero not forced to one viewport.

## 8. CSS organization and component behavior

```text
app/assets/css/
  main.css        # root import and order
  theme.css       # tokens and fonts (if split approved)
  base.css        # semantic defaults, focus, reduced motion
  typography.css  # editorial scale and prose
  components.css  # only repeated non-utility patterns
  animations.css  # restrained optional motion
```

| Component | Contract | Interaction/accessibility |
|---|---|---|
| AppButton / AppLink | variant, label, href/type, disabled state | Native anchor/button; clear visible focus; no nested links |
| Navbar | navigation records, locale, current route | aria-current; dropdown button, Escape; mobile disclosure or accessible dialog |
| LanguageSwitcher | available locales, equivalent destination | Text EN/ID; identify current language; avoid flags alone |
| SpeakerCard | speaker props, status, image | Name/role readable; no invented biography; image alt meaningful or decorative |
| ScheduleTabs | days, active ID | WAI-ARIA tabs behavior including keyboard, or native buttons with explicit state |
| ThemeAccordion | theme ID, heading, content | Native details/summary or button+aria-expanded; predictable focus |
| Timeline | dates, localized label/status | Semantic list/time; chronological; no color-only deadline |
| PricingCard | category, amount/currency, status | No misleading conversion or fake discount |
| DocumentCard | title, language, type, URL/status | Unavailable is text; available link clearly identifies file |
| StatusMessage | state, label, detail | No unnecessary live region on static content |
| PartnerGrid | approved logos, names, URLs | Preserve aspect ratio; alt/name and clear external links |

## 9. Media, motion and anti-generic UI

Use authentic approved event imagery; no AI-generated portrait presented as real speaker. Maintain image license inventory; reserve dimensions; responsive sizes; LCP image prioritized, below-fold lazy-loaded. Use consistent neutral placeholder for unpublished portraits; no fake organizer marks. No needless gradients, decorative floating badges, repeated oversized pills, hover zoom or heavy animation. Motion 150–250ms for small interactions, respects prefers-reduced-motion. Review both EN/ID including long strings, 200% zoom and Windows scaling 125/150%; emulator DPR is not actual OS scaling. Record actual review environment.

## 10. Figma handoff specification

Pages: Research, Sitemap & Flows, Moodboard, Wireframes, Foundations, Components, Desktop, Tablet/Mobile, Prototype, Handoff. Use Auto Layout, semantic variable names, component variants, descriptive layers and text styles. Frames: 1440, 768, 390; edge-case frame 320. Provide desktop/mobile states for navigation, tab, accordion, registration open/closed/TBA, missing images and documents. Map Figma components to Vue component names; export approved SVG/logos and optimized photos only. Record design file URL, version, token mapping, reviewer and date. No design approval claimed until mentor confirms.
