# 01 — Requirement Analysis

| Field | Value |
|---|---|
| Project | SEAMEO CECCEP Conference Website |
| Version | 1.0 — Planning baseline |
| Date | 2026-11-26 |
| Status | Validated by developer; institutional approval not yet documented |
| Reference | https://cprn2026.ceccep.org/ |
| Related documents | 02-FUNCTIONAL-REQUIREMENTS.md, 03-NON-FUNCTIONAL-REQUIREMENTS.md, 04-PROJECT-SCOPE.md, 05-PROJECT-ROADMAP.md |

## 1. Background

SEAMEO CECCEP membutuhkan website konferensi baru yang menggunakan CPRN 2026 sebagai referensi fungsi dan struktur informasi, bukan menyalin desain visual atau konten acara lama. Website menjadi pusat informasi publik, mendukung bahasa Inggris dan Indonesia, dan mengarahkan peserta ke Interconf untuk registrasi. Konten dikelola oleh developer melalui source code. Identitas visual mengikuti branding resmi SEAMEO CECCEP.

Visi produk: **Reusable bilingual conference microsite** yang profesional, informatif, aksesibel, mudah dipelihara dan dapat diadaptasi untuk konferensi berikutnya.

## 2. Decision record

| ID | Decision | Status |
|---|---|---|
| DEC-01 | Website konferensi baru, CPRN sebagai referensi | Validated |
| DEC-02 | Pertahankan fungsi relevan dan tambahkan improvement | Validated |
| DEC-03 | Konten diubah melalui source code | Validated |
| DEC-04 | Registrasi dan login peserta melalui Interconf | Validated |
| DEC-05 | Identitas visual mengikuti branding SEAMEO CECCEP | Validated; aset dan pedoman resmi TBD |
| DEC-06 | English dan Bahasa Indonesia wajib | Validated |
| DEC-07 | Nuxt 4, Vue 3, TypeScript, Tailwind CSS v4 | Validated |
| DEC-08 | Target deployment belum ditentukan | Open |
| DEC-09 | Modular, data-driven, reusable; tanpa backend/database sendiri untuk MVP | Proposed baseline consistent with scope |
| DEC-10 | SSG sebagai pendekatan awal, keputusan teknis pada Phase 2 | Proposed |
| DEC-11 | ChatGPT/Figma untuk desain; Codex untuk coding; Git untuk version control | Planned workflow |
| DEC-12 | English sebagai locale default; struktur locale yang konsisten | Proposed; confirm during Phase 2 |

Validated berarti dikonfirmasi dalam percakapan oleh developer, bukan bukti persetujuan formal mentor atau panitia. Perubahan baseline dicatat melalui change request.

## 3. Business objectives

| ID | Objective | Success indicator |
|---|---|---|
| BO-01 | Pusat informasi resmi konferensi | Informasi publik yang disetujui tersedia di website |
| BO-02 | Mempermudah penemuan informasi | Pengguna dapat menemukan agenda, biaya, pembicara, deadline dan lokasi melalui navigasi |
| BO-03 | Mempermudah registrasi | CTA mengarah ke Interconf acara yang benar |
| BO-04 | Meningkatkan kualitas visual dan UX | Desain baru konsisten dan disetujui mentor |
| BO-05 | Mempermudah maintenance tim IT | Dokumentasi setup, edit data, build dan deployment tersedia |
| BO-06 | Mendukung penggunaan kembali | Data dan branding dapat diganti tanpa menulis ulang komponen utama |
| BO-07 | Meningkatkan kualitas teknis | Target NFR diuji dan hasilnya dicatat |
| BO-08 | Identitas institusi profesional | Aset, warna dan penggunaan logo mengikuti pedoman resmi |
| BO-09 | Menjangkau pengguna bilingual | Konten inti dan navigasi tersedia dalam EN dan ID |

## 4. Reference analysis and proposed improvements

Basis: pemetaan halaman publik CPRN yang dibahas sebelumnya. Tidak ada audit source code, pengujian browser, Lighthouse atau security scan baru pada tahap finalisasi ini. Pemetaan bukan spesifikasi resmi acara baru; detail aktual harus divalidasi oleh panitia.

| Reference module | Proposed improvement |
|---|---|
| Home / About / Why Join | Hierarki konten, CTA, navigasi section yang jelas |
| Keynote / Plenary speakers | Kartu reusable, pengelompokan sesi, status konfirmasi |
| Summit scopes / themes | Tema dan subtema terstruktur, accordion aksesibel |
| Brief programme / Event programmes | Tab harian, jadwal terbaca, status agenda |
| Important dates | Timeline kronologis, tanggal dan zona waktu jelas |
| Fees | Kategori, mata uang dan nominal yang konsisten |
| Venue / accommodation | Informasi praktis dan tautan terverifikasi |
| Presentations / documents | Daftar dokumen dengan status publikasi dan tautan valid |
| Organizers / partners | Logo resmi dan pengelompokan institusi |
| Registration / Login | CTA eksternal menuju Interconf acara baru |
| Visitor counter | Pertahankan fungsi statistik secara proporsional jika disetujui; jangan membuat angka pengunjung fiktif |
| Bahasa | EN dan ID, termasuk navigasi, metadata dan status konten |

Peluang improvement berdasarkan analisis sebelumnya (perlu verifikasi saat QA): organisasi homepage, keterbacaan agenda, tujuan tautan footer, konsistensi status Coming Soon, ketersediaan dokumen dan alt text. Tidak menyimpulkan performa atau keamanan situs lama tanpa pengukuran.

## 5. Stakeholders

| Stakeholder | Proposed responsibility |
|---|---|
| SEAMEO CECCEP | Pemilik produk, identitas institusi |
| Mentor | Validasi requirement, persetujuan desain, prioritas |
| Conference committee | Sumber informasi dan penerjemahan yang disetujui |
| IT team | Infrastruktur, akses repository, maintenance, release |
| Web developer | Analisis, desain, implementasi, testing, dokumentasi |
| Participants | Pengguna informasi dan registrasi |
| Speakers | Sumber profil dan materi yang diizinkan |
| Partners | Sumber logo dan informasi kemitraan |

Pembagian ini usulan, bukan struktur organisasi resmi.

## 6. Target users and needs

| Persona (hypothesis) | Need | Primary journey |
|---|---|---|
| Researchers & academicians | Tema, deadline paper, biaya | Home → Themes → Important dates → Interconf |
| Participants | Agenda, fee, venue | Home → Programme/Fees → Registration |
| Speakers & presenters | Profil, sesi, dokumen | Speakers → Programme → Documents |
| Policymakers | Tujuan dan mitra | About → Themes → Partners |
| Committee | Informasi akurat dua bahasa | Menyerahkan data → review → publikasi |
| IT / developers | Konten dan kode mudah dirawat | Repository → edit data → test → build |

Persona merupakan hipotesis, bukan hasil riset wawancara.

## 7. Content inventory and ownership

| Content | Required fields | Source/approval |
|---|---|---|
| Event identity | Nama, tahun, tema, tanggal, zona waktu, lokasi, deskripsi EN/ID | Committee / mentor |
| Branding | Logo, warna, font, aturan penggunaan, foto/ilustrasi berizin | SEAMEO CECCEP |
| Speakers | Nama, jabatan, institusi, foto, bio EN/ID, sesi, status | Committee / speaker |
| Themes | Tema/subtema EN/ID | Committee |
| Programme | Hari, waktu mulai/selesai, judul, deskripsi EN/ID, ruang | Committee |
| Important dates | Jenis deadline, tanggal, zona waktu, status | Committee |
| Fees | Kategori EN/ID, nominal, mata uang, periode | Committee |
| Registration | URL registrasi dan login Interconf khusus acara | Committee / IT |
| Venue/accommodation | Alamat, foto, informasi EN/ID, kontak, tarif bila relevan, tautan | Committee |
| Documents | Judul EN/ID, jenis, bahasa file, URL, status publikasi, izin | Committee |
| Partners | Logo berizin, nama resmi, kategori, URL | Committee |
| Contact | Email dan kanal resmi, kebijakan privasi bila diperlukan | Committee / IT |

Nama orang, institusi dan nominal tidak diterjemahkan secara bebas. Konten bahasa kedua ditinjau oleh penanggung jawab konten. Placeholder hanya untuk development/staging; production menggunakan informasi resmi atau status TBA/TBC yang disetujui.

## 8. Open items (TBD)

| ID | Pending decision | Owner (proposed) | Gate |
|---|---|---|---|
| TBD-01 | Nama, tema, tanggal, lokasi dan identitas acara | Mentor / committee | Before content approval |
| TBD-02 | Brand guideline, logo, palet, tipografi resmi | Mentor / CECCEP | Before high-fidelity approval |
| TBD-03 | Konten resmi, penerjemahan dan izin aset | Committee | Before UAT/release |
| TBD-04 | URL Interconf khusus acara dan status registrasi | Committee / IT | Before UAT/release |
| TBD-05 | Domain, hosting, runtime, akses deployment | IT | Before final deployment design/release |
| TBD-06 | Deadline, waktu kerja, anggaran | Mentor | Before schedule commitment |
| TBD-07 | Kebijakan analytics / visitor counter dan privasi | Mentor / IT | Before analytics integration |
| TBD-08 | Locale default dan format URL bilingual | Developer / mentor | Phase 2 |
| TBD-09 | Fitur kondisional (paper, hotel, tarif, materi) | Committee | Before final scope/UAT |
| TBD-10 | Izin penggunaan AI atas source code internal | IT / mentor | Before sharing repository with AI tools |

## 9. Phase acceptance

- [x] Tujuan, pengguna, fitur referensi dan improvement teridentifikasi.
- [x] Keputusan jenis proyek, bahasa, stack, content management, branding dan registrasi dicatat.
- [x] Daftar informasi dan keputusan yang belum tersedia dibuat.
- [ ] Mentor/committee review baseline dan memberikan konfirmasi formal (belum terdokumentasi).
