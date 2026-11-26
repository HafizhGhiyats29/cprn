# 03 — Non-Functional Requirements (NFR)

Version 1.0 | 2026-11-26 | Planning baseline; quality targets proposed, not measured.

Dokumen ini menetapkan target kualitas dan metode verifikasi. NFR-001–058 mempertahankan identitas requirement draft sebelumnya; NFR-059–066 menambahkan dukungan bilingual dan aturan terkait. Detail implementasi difinalisasi di Phase 2.

## Performance

| ID | Requirement | Verification |
|---|---|---|
| NFR-001 | Halaman publik cepat; target Lighthouse Performance ≥90 | Production build, mobile profile, main routes EN/ID |
| NFR-002 | Gambar dioptimasi dan responsive | Inspect image dimensions, format, payload |
| NFR-003 | Minimalkan JS yang tidak dibutuhkan | Inspect build output and network |
| NFR-004 | Hindari layout shift, tetapkan dimensi gambar | Lighthouse/DevTools; target CLS ≤0.1 |
| NFR-005 | Lazy load aset di luar viewport; jangan menghambat LCP image | Inspect loading behavior |
| NFR-006 | Caching aset sesuai hosting | Inspect cache headers and redeploy behavior |

Core Web Vitals (good): LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 pada persentil ke-75 data pengguna nyata, jika data tersedia. Lighthouse lab test tidak membuktikan field INP; gunakan TBT sebagai indikator lab tambahan, bukan pengganti INP. Referensi: https://web.dev/articles/vitals.

## Responsive and compatibility

| ID | Requirement | Verification |
|---|---|---|
| NFR-007 | Mobile 320–639 px | Test 320, 390 px |
| NFR-008 | Tablet 640–1023 px | Test 768, 1023 px |
| NFR-009 | Desktop 1024–1919 px | Test 1024, 1440 px |
| NFR-010 | Large displays ≥1920 px | Test 1920 px |
| NFR-011 | Tidak ada horizontal overflow halaman; tabel lebar boleh scroll dalam container yang aksesibel | Visual and keyboard test |
| NFR-012 | Chrome, Firefox, Edge, Safari modern | Browser matrix; catat versi/OS dan keterbatasan |

## Accessibility

| ID | Requirement | Verification |
|---|---|---|
| NFR-013 | Target WCAG 2.2 AA | Automated axe + manual applicable criteria |
| NFR-014 | Lighthouse Accessibility ≥95 | Lighthouse lab report |
| NFR-015 | Alt text lokal untuk gambar informatif; decorative alt kosong | Audit rendered HTML |
| NFR-016 | Semua interaksi dapat diakses keyboard | Tab/Shift+Tab/Enter/Esc and focus order |
| NFR-017 | Kontras WCAG AA (teks normal ≥4.5:1, teks besar ≥3:1, exceptions per standard) | Contrast checker |
| NFR-018 | Semantic HTML, heading dan landmark logis | DOM and screen-reader spot check |
| NFR-019 | Focus visible dan tidak tertutup | Keyboard review |
| NFR-020 | Hormati prefers-reduced-motion | Browser emulation |

Referensi standar: https://www.w3.org/TR/WCAG22/. Skor otomatis bukan bukti kepatuhan penuh.

## Security and privacy

| ID | Requirement | Verification |
|---|---|---|
| NFR-021 | HTTPS production | TLS and redirect check |
| NFR-022 | Tidak ada secret dalam source code, Git, public build atau client config | Secret scan; inspect output |
| NFR-023 | Audit dependency; dokumentasikan temuan dan keputusan mitigasi | npm audit and dependency review |
| NFR-024 | Cegah XSS; hindari raw HTML tanpa sanitasi, gunakan trusted content | Code review and negative tests |
| NFR-025 | Security headers sesuai hosting (mis. CSP, X-Content-Type-Options, Referrer-Policy) | HTTP header review; CSP diuji terhadap integrasi |
| NFR-026 | URL eksternal disetujui dan aman; tab baru menggunakan rel yang sesuai | Link review |
| NFR-027 | Tidak mengumpulkan data pribadi peserta di microsite tanpa persetujuan scope/privacy | Data-flow review |
| NFR-028 | Tidak ada kerentanan kritis yang belum ditangani pada release | Audit report; unresolved critical blocks release |

## SEO

| ID | Requirement | Verification |
|---|---|---|
| NFR-029 | Lighthouse SEO ≥95 | Lighthouse main pages EN/ID |
| NFR-030 | Unique localized title/description | Rendered HTML |
| NFR-031 | Open Graph metadata lokal dan URL gambar absolut pada production | HTML inspection |
| NFR-032 | Sitemap XML memuat URL publik yang layak diindeks | Parse sitemap and check status |
| NFR-033 | Robots.txt sesuai environment | Verify staging protected/noindex as appropriate; production crawlable |
| NFR-034 | Canonical per locale ke URL yang benar | Inspect metadata |
| NFR-035 | Event structured data hanya memakai informasi resmi yang tersedia | Validate JSON-LD; omit unknown fields |
| NFR-036 | URL mudah dibaca dan stabil | Route review |
| NFR-037 | Halaman publik dapat diindeks tanpa bergantung pada client JS untuk konten inti | Inspect generated/served HTML |

## Maintainability and reusability

| ID | Requirement | Verification |
|---|---|---|
| NFR-038 | Modular component architecture | Architecture/code review |
| NFR-039 | TypeScript untuk data dan logic | Type check |
| NFR-040 | Vue Composition API (script setup) | Code review |
| NFR-041 | Pisahkan data dari presentasi | Edit content without changing UI components |
| NFR-042 | Reusable components | Review component reuse |
| NFR-043 | Design tokens konsisten dengan brand yang disetujui | Figma/CSS review |
| NFR-044 | Hindari duplikasi yang tidak diperlukan | Code review |
| NFR-045 | Naming convention terdokumentasi | Code review |
| NFR-046 | Git version control | Review history, changes and release tag |
| NFR-047 | Setup dan maintenance terdokumentasi | Follow README from clean checkout |
| NFR-048 | Production build/generate berhasil tanpa error | Run selected production script |
| NFR-049 | Type checking tanpa error | Run configured typecheck |
| NFR-050 | Konten dan branding dapat diubah tanpa rewrite halaman utama | Test sample data/theme edit |

## Scalability and reliability

| ID | Requirement | Verification |
|---|---|---|
| NFR-051 | Penambahan halaman baru tanpa rewrite base layout | Architecture review |
| NFR-052 | Mendukung variasi jumlah speaker/sesi dan judul panjang | Fixture tests incl. empty and long values |
| NFR-053 | Pemisahan data memungkinkan integrasi CMS di masa depan tanpa membangunnya sekarang | Architecture review |
| NFR-054 | CI/CD mendukung build dan deployment ulang | Test pipeline after host selected |
| NFR-055 | Halaman 404 dan status HTTP sesuai kemampuan host | Test unknown routes in production-like environment |
| NFR-056 | Empty state dan konten belum tersedia ditangani | Test no data/TBA/unpublished |
| NFR-057 | Rollback ke versi stabil terdokumentasi | Rehearsal on staging if available |
| NFR-058 | Tidak ada broken internal links pada production | Link crawler/test |

## Internationalization (mandatory additions)

| ID | Requirement | Verification |
|---|---|---|
| NFR-059 | HTML lang benar (en/id) pada setiap halaman | DOM inspection |
| NFR-060 | Hreflang EN/ID reciprocal dan canonical locale-specific; x-default jika sesuai | SEO check |
| NFR-061 | Semua halaman utama tersedia pada kedua locale; akses langsung dan refresh berhasil | Route matrix, generated HTML check |
| NFR-062 | Tidak ada missing translation key, campuran bahasa UI yang tidak disengaja atau placeholder palsu pada release | Translation key/content audit |
| NFR-063 | Layout mendukung perbedaan panjang terjemahan | Responsive tests in both locales |
| NFR-064 | Format tanggal/angka sesuai locale; zona waktu acara dan mata uang eksplisit, nominal tidak berubah akibat locale | Fixture and manual review |
| NFR-065 | Konten terjemahan memiliki sumber, status review dan penanggung jawab; jangan menerjemahkan nama resmi sembarangan | Content review checklist |
| NFR-066 | Penggunaan analytics/counter tunduk pada persetujuan IT, privacy policy dan consent jika berlaku | Privacy review before activation |

## Quality gate and reproducibility

| Metric | Proposed minimum |
|---|---|
| Lighthouse Performance | 90 |
| Lighthouse Accessibility | 95 |
| Lighthouse Best Practices | 95 |
| Lighthouse SEO | 95 |
| Critical bugs | 0 unresolved |
| Critical security vulnerabilities | 0 unresolved |
| Broken internal links | 0 |
| Required translation coverage | 100% approved core content and UI strings |

Test production build, record commit, date, browser, Lighthouse version, environment, network/device profile, route and locale. Run representative routes at least 3 times where feasible; report median and individual results. Lab scores are targets, not guaranteed. Record deviations, impact, mitigation and approval; critical bugs/security and incorrect official data block release. QA must include manual accessibility, actual link destinations and localized content; automated scores alone are insufficient.
