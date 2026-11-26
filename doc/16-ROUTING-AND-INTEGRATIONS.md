# 16 — Routing, External Integrations & SEO Contracts

Version 0.3 | Phase 2 locale route PoC | Production route matrix and host policy pending

The PoC generates `/en` and `/id` from one temporary page. Both have translated HTML, route-specific `lang`, and a link to the equivalent locale. Nuxt generates `404.html` as a fallback. Deploying hosts must return HTTP 404 with the fallback body for unknown paths. The PoC excludes `/` from prerender. The current proposal is an HTTP 302 from `/` to `/en` at the production host, subject to approval and host tests. Real Interconf destinations have not been incorporated.

In the local file server test, `/en`, `/id` and the equivalent URLs with trailing slashes returned HTTP 200. Refresh and switching worked in Chrome. `/missing`, `/id/not-a-route` and `/` returned HTTP 404. Chrome rendered the fallback on `/id/not-a-route`. The test server had no root redirect. Verify the production host separately, including its canonical slash policy and error response.

## 1. Routes and responsibilities

One Nuxt pages directory generates locale routes. Candidate matrix (all URLs relative; root domain TBD):

| Name | Source | EN | ID | Purpose |
|---|---|---|---|---|
| index | app/pages/index.vue | /en | /id | Home |
| about | app/pages/about.vue | /en/about | /id/about | Overview/themes |
| speakers | app/pages/speakers.vue | /en/speakers | /id/speakers | Keynote/plenary |
| programme | app/pages/programme.vue | /en/programme | /id/programme | Schedule/events |
| registration | app/pages/registration.vue | /en/registration | /id/registration | Dates/fees/CTA |
| venue | app/pages/venue.vue | /en/venue | /id/venue | Venue/lodging |
| downloads | app/pages/downloads.vue | /en/downloads | /id/downloads | Documents/presentations |
| contact | app/pages/contact.vue | /en/contact | /id/contact | Official contacts |
| root | host redirect or explicit entry TBD | / | / | Locale entry |
| error | app/error.vue (candidate) | invalid path | invalid path | 404 recovery |

If contact is footer-only, remove route from registry and update test/sitemap. Keep anchors stable (e.g. `#important-dates`, `#fees`) across locales. No local `/admin`, `/login`, `/api/register`, payment or paper endpoints. An absent route must return 404, not proxy to Interconf.

## 2. Request and navigation lifecycle

```mermaid
sequenceDiagram
  participant U as Browser
  participant H as Static host
  participant V as Vue hydrated UI
  participant E as Interconf
  U->>H: GET /id/programme
  H-->>U: Generated HTML and static assets
  U->>V: Hydrate UI; select day or locale
  V-->>U: Render correct selected content
  U->>E: Follow approved registration link
  E-->>U: External service response
```

No participant session, API token or callback is required. Nuxt route middleware can help locale UX but does not enforce access control on static files. Real 404, redirects and TLS are host responsibilities.

## 3. Integration contracts

| Integration | Input | Output / behavior | Failure handling |
|---|---|---|---|
| Interconf registration | Approved HTTPS event URL + open status | Navigate to external event | TBA/closed state if unconfirmed; no fake URL |
| Interconf login | Approved event login URL | Navigate externally | Hide/disable with explanation if unavailable |
| Documents | Approved local public path or verified HTTPS URL | Browser opens/downloads official document | Unpublished status; validate file exists |
| Map | Official venue address and link | External map opens | Plain address still available |
| Accommodation form | Official approved form link | External form opens | Omit when not applicable/unconfirmed |
| Analytics/counter | Approved provider and privacy policy | Optional aggregate measurement | Disabled by default; no fabricated count |

No API calls to Interconf are assumed. Do not scrape it or collect participant credentials. Approved URL allowlist must be checked by parsed hostname and scheme, not substring matching. If link health check is blocked by provider or login requirement, record manual verification; no bulk registration/login or automated form submission against production.

## 4. SEO and redirect policy

- Generate HTML for every published locale route with correct title, description, OG image and canonical using approved absolute base URL.
- Use hreflang links for equivalent locales, HTML lang and sitemap XML with published canonical URLs. Staging must not be indexed; private preview requires actual access control, not robots.txt.
- Choose root policy (temporary 302 to EN or approved entry; host-specific) before implementation. Do not claim a static client redirect is HTTP 301. Permanent redirect only when a real URL migration is approved; new conference does not redirect CPRN old URLs by default.
- Host must serve directory index/deep links, return 404 for unknown URLs and preserve query/fragment behavior as intended. Test direct requests independently from client navigation.
- Generate explicit prerender list if routes not discovered by crawl; check all locale HTML and static assets. Reference https://nuxt.com/docs/4.x/ and https://i18n.nuxtjs.org/docs/guide .

## 5. Test matrix and evidence

Verify every internal route by direct load and client click; check alternate locale; inspect HTTP status, canonical, robots, sitemap and actual external href. External tests use fixture or safe link inspection, no external transaction. Record `route | locale | status | expected title | canonical | hreflang | evidence | result`. Review on staging and production after publish.
