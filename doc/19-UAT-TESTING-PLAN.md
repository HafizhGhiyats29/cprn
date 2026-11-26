# 19 — User Acceptance Testing (UAT) Plan

Version 0.2 | Planned / Not Run | Tester: mentor, committee and developer (assignments TBD) | Environment: controlled preview/staging TBD.

## 1. Objective and entry conditions

Validate functional scope, bilingual accuracy, visual usability, registration handoff, accessible behavior and production readiness. Use approved official data on staging or clearly labeled synthetic fixtures in controlled environment. Record test commit, build ID, date, tester, device, browser, locale, expected/actual, evidence and issue ID. Before execution confirm design approval, applicable conditional requirements, test environment, verified links, both translations, content validation, typecheck and build. No real external transaction or credentials. All results below are **Not Run**.

## 2. Conventions

- Pass: expected result demonstrated with evidence. Fail: deviation. Blocked: prerequisite unavailable. NA: optional/conditional not applicable with reason and reviewer approval. Not Run: no execution. Exclusion cases verify scope; do not implement out-of-scope features to test them.
- Severity: Critical = release impossible, security/data exposure, broken primary registration; Major = core feature unusable; Minor = limited noncritical issue; Cosmetic = visual issue without functional impact. Assign severity based on actual impact.
- For locale-dependent cases run both EN and ID, and repeat relevant UI on mobile. Use separate evidence rows as needed. Optional Should/Could cases not implemented are NA after backlog review, not Pass. Conditional Must requires committee decision.

## 3. Functional UAT matrix (71 scenarios)

### 3.1 Navigation and homepage
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-001 | FR-001 / Must | Logo dan identitas acara | Open homepage EN/ID and compare logo with approved asset manifest. | Aset disetujui; tampil di kedua locale | Not Run |
| UAT-FR-002 | FR-002 / Must | Navigation bar | Traverse desktop navbar and select every menu destination. | Semua tujuan menu dapat diakses | Not Run |
| UAT-FR-003 | FR-003 / Must | Dropdown navigation | Open dropdown with mouse and keyboard; select item; press Escape. | Mouse/keyboard dapat membuka, memilih, menutup | Not Run |
| UAT-FR-004 | FR-004 / Must | Mobile navigation | At 390px open menu, choose page, reopen and close. | Menu dapat digunakan di layar kecil | Not Run |
| UAT-FR-005 | FR-005 / Must | Hero section | Open home at mobile and desktop; inspect first content section. | Hero menampilkan informasi resmi dan CTA | Not Run |
| UAT-FR-006 | FR-006 / Must | Nama, tema, tanggal, lokasi acara | Compare displayed event title, theme, dates/status and location to approved source. | Data cocok dengan sumber resmi; TBA disetujui jika belum tersedia | Not Run |
| UAT-FR-007 | FR-007 / Must | Register Now CTA | Inspect primary CTA in open fixture and closed fixture; verify href without transaction. | Mengarah ke registrasi acara yang benar saat aktif | Not Run |
| UAT-FR-008 | FR-008 / Must | Conference overview | Open overview in both locales and compare approved text. | Deskripsi resmi EN/ID tersedia | Not Run |
| UAT-FR-009 | FR-009 / Must | Tujuan dan manfaat kegiatan | Find objectives and why-join section; compare approved benefits. | Konten disetujui dan terbaca | Not Run |
| UAT-FR-010 | FR-010 / Could | Countdown | If implemented, use fixed-clock fixture before, at and after event start. | Waktu benar, status berubah ketika berakhir | Not Run |
| UAT-FR-011 | FR-011 / Must | Footer dan kontak | Inspect footer on home and subpage; verify official contact and links. | Kontak resmi dan tautan benar | Not Run |
| UAT-FR-012 | FR-012 / Should | Sticky navigation | Scroll page, tab through controls near sticky header. | Tidak menutupi konten atau keyboard focus | Not Run |

### 3.2 Speakers
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-013 | FR-013 / Must | Daftar keynote speakers | Open speaker section with confirmed fixture and empty fixture. | Daftar sesuai data resmi; empty state bila belum diumumkan | Not Run |
| UAT-FR-014 | FR-014 / Must* | Foto pembicara | Compare each approved portrait and alt text; test missing photo fallback. | Foto berizin; fallback jika tidak tersedia | Not Run |
| UAT-FR-015 | FR-015 / Must | Nama, jabatan, institusi | Compare names, roles and institution against approved speaker roster. | Data cocok dengan sumber resmi | Not Run |
| UAT-FR-016 | FR-016 / Must | Kelompok pembicara berdasarkan sesi | Open keynote and plenary groups; match speaker IDs against programme. | Setiap pembicara tampil pada sesi yang ditetapkan | Not Run |
| UAT-FR-017 | FR-017 / Should | Detail profil pembicara | If implemented, open speaker detail in both languages. | Bio EN/ID dapat diakses | Not Run |
| UAT-FR-018 | FR-018 / Must | Status konfirmasi speaker | Load confirmed and TBC speaker fixtures; inspect labels. | Status confirmed/TBC mengikuti persetujuan panitia | Not Run |
| UAT-FR-019 | FR-019 / Could | Filter kategori/sesi | If implemented, filter speakers by session and clear filter. | Filter menghasilkan daftar yang benar dan reset | Not Run |

### 3.3 Themes
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-020 | FR-020 / Must | Tema utama | Locate main theme on home/about and compare both translations. | Tema resmi tersedia dalam EN/ID | Not Run |
| UAT-FR-021 | FR-021 / Must | Kategori tema | Open theme categories and compare committee category list. | Kategori sesuai struktur acara | Not Run |
| UAT-FR-022 | FR-022 / Must | Subtema | Expand each category and verify its subthemes. | Subtema terkait kategori yang benar | Not Run |
| UAT-FR-023 | FR-023 / Must | Expandable accordion | Toggle accordion by pointer and keyboard; inspect expanded state. | Buka/tutup dengan pointer dan keyboard; state aksesibel | Not Run |

### 3.4 Programme
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-024 | FR-024 / Must | Agenda per hari | Open programme and select each published day. | Semua hari yang disetujui ditampilkan | Not Run |
| UAT-FR-025 | FR-025 / Must | Waktu sesi | Compare start/end and timezone for each session against official schedule. | Urutan waktu dan zona waktu benar | Not Run |
| UAT-FR-026 | FR-026 / Must | Nama dan deskripsi sesi | Read session names/descriptions in both locales. | Informasi EN/ID sesuai sumber | Not Run |
| UAT-FR-027 | FR-027 / Must* | Ruangan | Verify published rooms; test absent-room fixture. | Ditampilkan jika diumumkan | Not Run |
| UAT-FR-028 | FR-028 / Must | Tab per hari | Change day using pointer and keyboard, inspect active state and content. | Memilih hari menampilkan sesi yang sesuai; keyboard supported | Not Run |
| UAT-FR-029 | FR-029 / Must | Detail event programmes | Open event programme detail in published and TBA fixtures. | Detail atau status ketersediaan benar | Not Run |
| UAT-FR-030 | FR-030 / Should | Download programme PDF | If implemented, open approved schedule PDF and verify revision. | File resmi dapat dibuka atau diunduh bila tersedia | Not Run |
| UAT-FR-031 | FR-031 / Could | Filter jenis sesi | If implemented, filter session type and reset. | Hasil sesuai tipe sesi | Not Run |
| UAT-FR-032 | FR-032 / Could | Add to Calendar | If implemented, inspect exported calendar file in a test calendar. | Tanggal, zona waktu dan judul kalender benar | Not Run |

### 3.5 Dates and registration
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-033 | FR-033 / Must | Important dates | Open registration dates; compare approved deadlines and statuses. | Deadline dan status sesuai data resmi | Not Run |
| UAT-FR-034 | FR-034 / Must* | Deadline abstract dan paper | If submissions apply, check abstract and paper deadlines. | Hanya jika acara menerima submission | Not Run |
| UAT-FR-035 | FR-035 / Must | Timeline kegiatan | Compare timeline ordering, including TBA item handling. | Tanggal kronologis dan mudah dibaca | Not Run |
| UAT-FR-036 | FR-036 / Must | Kategori peserta | Compare registration categories against approved list. | Kategori sesuai kebijakan acara | Not Run |
| UAT-FR-037 | FR-037 / Must | Biaya registrasi | Compare fees in both languages and free/TBA fixtures. | Nominal benar atau status TBA resmi; acara gratis ditandai sesuai keputusan | Not Run |
| UAT-FR-038 | FR-038 / Must* | IDR dan USD | If two currencies apply, compare exact amounts/currency labels. | Mata uang dan nominal eksplisit jika ditetapkan; tidak konversi otomatis | Not Run |
| UAT-FR-039 | FR-039 / Must | Registrasi eksternal Interconf | Inspect Register CTA href against approved new-event URL; do not submit. | URL acara baru terverifikasi, bukan URL acara lama | Not Run |
| UAT-FR-040 | FR-040 / Must | Login eksternal Interconf | Inspect Login link against approved destination; confirm no local password form. | URL login benar; tidak meminta password pada microsite | Not Run |

### 3.6 Venue and accommodation
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-041 | FR-041 / Must | Informasi venue | Open venue and compare name/location with official source. | Nama dan lokasi resmi atau status TBA | Not Run |
| UAT-FR-042 | FR-042 / Must* | Foto venue | If approved photo exists, compare image and alt text; check fallback. | Foto berizin dan sesuai venue | Not Run |
| UAT-FR-043 | FR-043 / Must | Alamat lengkap | Compare full address with official venue address or approved TBA. | Alamat resmi atau TBA jika belum diumumkan | Not Run |
| UAT-FR-044 | FR-044 / Should | Tautan peta | If implemented, inspect map link and verify correct venue destination. | Mengarah ke venue yang benar | Not Run |
| UAT-FR-045 | FR-045 / Must* | Pilihan akomodasi | If accommodation applies, compare listed hotel names against approved list. | Hotel hanya ditampilkan jika direkomendasikan/disetujui | Not Run |
| UAT-FR-046 | FR-046 / Must* | Tarif dan kontak hotel | If applicable, compare rates, validity period and contacts against official data. | Data sesuai sumber dan periode berlaku | Not Run |
| UAT-FR-047 | FR-047 / Should | Website hotel | If implemented, inspect hotel website link against official source. | Tautan valid jika relevan | Not Run |
| UAT-FR-048 | FR-048 / Must* | Formulir konfirmasi akomodasi | If accommodation form applies, inspect approved external href; do not submit. | Tautan eksternal resmi jika digunakan | Not Run |

### 3.7 Documents and partners
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-049 | FR-049 / Must | Daftar dokumen konferensi | Open downloads and inspect title, format, language and status. | Judul, jenis, status, bahasa file ditampilkan | Not Run |
| UAT-FR-050 | FR-050 / Must | Download presentation slides | Open approved presentation fixture/document; inspect file name and content. | File resmi bisa diakses jika dipublikasikan; selain itu status tersedia/coming soon | Not Run |
| UAT-FR-051 | FR-051 / Must | Status ketersediaan dokumen | Use unpublished and missing-file fixtures; inspect status and lack of dead link. | Tidak ada tautan kosong atau file fiktif | Not Run |
| UAT-FR-052 | FR-052 / Should | Download concept note / paper template | If implemented, inspect concept note/template and version. | File resmi tersedia jika relevan | Not Run |
| UAT-FR-053 | FR-053 / Must | Logo organizer | Compare organizer logo/name against asset manifest. | Logo dan aturan penggunaan disetujui | Not Run |
| UAT-FR-054 | FR-054 / Must | Logo partner/sponsor | Compare partners against approved list; test no partners fixture. | Hanya institusi yang disetujui; empty state/section hidden jika belum ada | Not Run |
| UAT-FR-055 | FR-055 / Should | Pengelompokan partner | If implemented, compare partner category grouping. | Kategori sesuai data resmi | Not Run |

### 3.8 Additional features and bilingual
| ID | Trace / priority | Scenario | Steps | Expected result | Status |
|---|---|---|---|---|---|
| UAT-FR-056 | FR-056 / Should | FAQ | If implemented, expand FAQ in both locales and compare answers. | Jawaban resmi tersedia EN/ID | Not Run |
| UAT-FR-057 | FR-057 / Could | Back to top | If implemented, scroll and activate back-to-top with keyboard. | Kembali ke atas tanpa merusak focus | Not Run |
| UAT-FR-058 | FR-058 / Could | Social sharing | If implemented, inspect shared URL and metadata without publishing a post. | URL dan metadata locale tepat | Not Run |
| UAT-FR-059 | FR-059 / Should | Visitor analytics/counter | If approved/implemented, inspect analytics requests and actual counter behavior. | Hanya setelah persetujuan privasi; statistik nyata, bukan dummy; counter publik bila disetujui | Not Run |
| UAT-FR-060 | FR-060 / Could | Pencarian | If implemented, search known term and unknown term in both locales. | Hasil sesuai locale dan query | Not Run |
| UAT-FR-061 | FR-061 / Must | Dukungan EN dan ID | Traverse every public page in English and Indonesian. | Seluruh UI dan konten inti tersedia dalam dua bahasa | Not Run |
| UAT-FR-062 | FR-062 / Could | Dark mode | If implemented, switch theme and check contrast/preference. | Konsisten dengan brand, kontras dan preferensi pengguna | Not Run |
| UAT-FR-063 | FR-063 / Won't | Admin dashboard/CMS | Inspect routes and source for admin/CMS; verify exclusion from MVP. | Tidak dibuat dalam MVP | Not Run |
| UAT-FR-064 | FR-064 / Won't | Registrasi peserta internal | Inspect registration and routes for local participant account form/endpoint. | Interconf menangani registrasi | Not Run |
| UAT-FR-065 | FR-065 / Won't | Pembayaran internal | Inspect registration and source for local payment form/endpoint. | Microsite tidak mengumpulkan pembayaran | Not Run |
| UAT-FR-066 | FR-066 / Won't | Paper submission internal | Inspect submission links and source for local submission feature. | Menggunakan layanan eksternal jika relevan | Not Run |
| UAT-FR-067 | FR-067 / Must | Language switcher | Switch EN/ID from each subpage, verify equivalent route and back button. | Beralih EN/ID pada halaman ekuivalen; tidak reset ke home jika halaman tersedia | Not Run |
| UAT-FR-068 | FR-068 / Must | Localized routes dan direct access | Direct-load and refresh each locale URL; copy URL into new tab. | URL setiap locale dapat dibuka/refresh/bookmark/share; pola final Phase 2 | Not Run |
| UAT-FR-069 | FR-069 / Must | Localized data, label dan status | Compare labels, status, dates and fees across locales; check raw key absence. | Navbar, CTA, tanggal, fee, speaker, program, error/empty state konsisten | Not Run |
| UAT-FR-070 | FR-070 / Must | Status registrasi | Use open, closed, TBA and missing URL fixtures in controlled preview. | Jika belum buka/tutup/URL belum dikonfirmasi, tampilkan status resmi, tanpa tautan palsu | Not Run |
| UAT-FR-071 | FR-071 / Must | Source-code content workflow | Change approved synthetic bilingual content in test branch, validate and rebuild. | Developer mengubah data EN/ID terpusat, menjalankan validasi dan build tanpa mengedit komponen UI | Not Run |

## 4. Cross-cutting UAT scenarios
| ID | Trace | Scenario | Steps | Expected | Status |
|---|---|---|---|---|---|
| UAT-PERF-001 | NFR-001–006 | Lighthouse performance | Run 3 documented mobile lab runs per key route/locale. | Median meets target or approved exception; attach raw reports. | Not Run |
| UAT-PERF-002 | NFR-001–006 | LCP and layout stability | Inspect LCP element, image dimensions, lazy loading and network waterfall. | LCP image not lazy; layout stable; record lab metrics and field data availability. | Not Run |
| UAT-PERF-003 | NFR-006 | Cache policy | Inspect cache headers for HTML, hashed JS and non-hashed media. | Policy avoids stale HTML/incorrect asset versions. | Not Run |
| UAT-RESP-004 | NFR-007–011,063 | 320px and long strings | Open all pages at 320 CSS px with long EN/ID labels. | No page overflow; all content and controls usable. | Not Run |
| UAT-RESP-005 | NFR-007–012 | Mobile and tablet | Test 390, 768 and 1023 px portrait/landscape. | Navigation, programme and documents remain usable. | Not Run |
| UAT-RESP-006 | NFR-009–012 | Desktop and large display | Test 1024,1440,1920 CSS px. | Content readable, no clipping or unintended gaps. | Not Run |
| UAT-RESP-007 | NFR-012 | Cross-browser | Run main journeys on Chromium, Firefox, WebKit. | Equivalent behavior; defects recorded. | Not Run |
| UAT-RESP-008 | NFR-007–012 | Windows scaling and zoom | Manually test 125/150% DPI and 200% zoom where available. | No obscured text, controls or horizontal page overflow; record environment. | Not Run |
| UAT-A11Y-009 | NFR-013–020 | Keyboard navigation | Use Tab, Shift+Tab, Enter, Space and Escape through header, tabs and accordion. | Logical focus order and no trap; state communicated. | Not Run |
| UAT-A11Y-010 | NFR-013–020 | Semantic structure | Inspect landmarks, heading hierarchy, accessible names and skip link. | Meaningful semantic structure; skip link works. | Not Run |
| UAT-A11Y-011 | NFR-015 | Image text alternatives | Review images and logos with screen reader/inspection. | Informative images meaningful alt; decorative images ignored. | Not Run |
| UAT-A11Y-012 | NFR-017 | Contrast | Measure text, controls and focus contrast in actual design. | Applicable WCAG AA contrast met. | Not Run |
| UAT-A11Y-013 | NFR-019 | Focus visibility | Tab across sticky navigation and buttons at zoomed viewport. | Focus visible and not obscured. | Not Run |
| UAT-A11Y-014 | NFR-020 | Reduced motion | Enable reduced-motion preference and interact. | Nonessential animation reduced/removed. | Not Run |
| UAT-A11Y-015 | NFR-013–014 | Automated accessibility | Run axe/Lighthouse and manual checks in both languages. | No unresolved applicable violations; targets recorded; not sole compliance proof. | Not Run |
| UAT-SEC-016 | NFR-021,025 | HTTPS and headers | Inspect staging/production HTTP headers and certificate. | Approved headers, valid TLS; no mixed content. | Not Run |
| UAT-SEC-017 | NFR-022,027 | Secret and privacy check | Inspect source/build artifacts via approved scanner. | No credentials, participant data or private fixtures. | Not Run |
| UAT-SEC-018 | NFR-023,028 | Dependency triage | Review npm audit and mitigation evidence. | No unresolved critical findings; others documented. | Not Run |
| UAT-SEC-019 | NFR-024,026 | Unsafe content and URLs | Use synthetic script text and javascript/spoofed host URL in local fixture. | Text escaped; invalid links rejected; no execution. | Not Run |
| UAT-SEC-020 | NFR-027 | Tracking | Inspect network requests on first visit without approval. | No unapproved tracking or participant-data collection. | Not Run |
| UAT-SEO-021 | NFR-029–037,059–061 | Localized metadata | View generated HTML on both locale pages. | Unique title/description, correct canonical, lang and reciprocal hreflang. | Not Run |
| UAT-SEO-022 | NFR-032–033,037 | Sitemap and robots | Fetch files in staging and production; verify URL set. | Production published canonical routes; staging restricted/noindex as appropriate. | Not Run |
| UAT-SEO-023 | NFR-035 | Event structured data | Validate schema if official event data available. | No fabricated values; schema valid if applicable. | Not Run |
| UAT-SEO-024 | NFR-029 | SEO lab target | Run Lighthouse SEO on key routes. | Target ≥95 or documented approval. | Not Run |
| UAT-DATA-025 | NFR-041,050,062,064 | Data invariants | Run missing translation, duplicate ID and bad session ref fixtures. | Validation blocks invalid release; no partial content. | Not Run |
| UAT-DATA-026 | NFR-038–047 | Maintainability | Review representative pages, tokens, typing, dependency direction, docs. | Modular code, centralized data and consistent conventions. | Not Run |
| UAT-DATA-027 | NFR-051–053 | Extensibility | Add synthetic speaker/day to test branch and rebuild; inspect adapter boundary. | No duplicate UI needed; no speculative CMS dependency. | Not Run |
| UAT-BUILD-028 | NFR-048–049 | Clean build and typecheck | From clean checkout run pinned install, configured typecheck and generate. | Zero errors; locale artifacts present. | Not Run |
| UAT-BUILD-029 | NFR-054 | CI workflow | Run approved pipeline on test PR. | Required checks block failures; artifact tied to commit. | Not Run |
| UAT-ROUTE-030 | NFR-055,058 | 404 and broken links | Request invalid path directly; crawl internal published links. | Real 404 and no broken internal links. | Not Run |
| UAT-ROUTE-031 | NFR-056 | Empty states | Use no-speaker/no-session/no-document fixture. | Localized honest states, no broken placeholders. | Not Run |
| UAT-RELEASE-032 | NFR-057 | Rollback rehearsal | Restore previous verified artifact in staging and smoke test. | Previous release available and both locales usable. | Not Run |
| UAT-RELEASE-033 | NFR-065–066 | Bilingual release/privacy review | Compare content approvals and external-service/privacy policy; inspect release artifacts. | Both translations and approved external integrations verified; no private info. | Not Run |
| UAT-RELEASE-034 | NFR-048,054,057 | Production smoke | After authorized release open both locales, programme, CTA and file. | Expected release ID, correct routes and external destinations; rollback trigger if critical. | Not Run |

## 5. Execution order

1. Technical prerequisite review and controlled fixture checks.
2. Public pages EN, then ID, then cross-locale navigation and content parity.
3. Mobile/desktop/browser/accessibility checks.
4. Security, SEO, performance, staging smoke and rollback rehearsal.
5. Committee confirms official content, mentor reviews design and applicable scope, IT reviews host release.
6. Record defect list, retest and release decision; production smoke only after authorized deployment.

## 6. UAT summary template

| Metric | Result |
|---|---|
| Planned primary functional cases | 71 |
| Planned cross-cutting cases | 34 |
| Total planned scenarios | 105 (each may execute across multiple locales/devices) |
| Executed / Pass / Fail / Blocked / NA | TBD — Not Run |
| Critical / Major defects | TBD — not measured |
| Evidence directory / commit | TBD |
| Decision | Not Ready; UAT not executed |

| ID | Actual | Status | Severity | Issue | Evidence | Tester / date | Retest |
|---|---|---|---|---|---|---|---|
| TBD | TBD | Not Run | TBD | TBD | TBD | TBD | TBD |

## 7. Acceptance criteria and approval

All applicable Must scenarios pass with evidence; exclusion checks confirm no unauthorized scope expansion; no critical or unresolved blocking major defects; conditional items explicitly marked applicable/NA; required quality gates pass or justified noncritical exceptions approved; both translations, official links and asset rights approved; rollback rehearsed; IT and mentor authorization recorded. Automated test count is independent of UAT count. Do not report 100% or release-ready without actual results.

| Sign-off | Name / date | Decision | Notes |
|---|---|---|---|
| Developer QA | TBD | Pending | |
| Content / translation reviewer | TBD | Pending | |
| Mentor / committee | TBD | Pending | |
| IT release approver | TBD | Pending | |
