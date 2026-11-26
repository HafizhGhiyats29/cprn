# 02 — Functional Requirements (FR)

Version 1.0 | 2026-11-26 | Planning baseline

## 1. Priority and traceability

MoSCoW: **Must** = MVP wajib; **Must*** = wajib jika relevan/tersedia dan disetujui panitia; **Should** = penting, dapat ditunda dengan persetujuan; **Could** = tambahan; **Won't** = di luar MVP. Seluruh konten dan UI publik yang relevan harus tersedia dalam EN dan ID. ID draft FR-001–066 dipertahankan, FR-061 dinaikkan ke Must, FR-067–071 ditambahkan. Improvement bukan bukti bahwa fitur tersebut sudah diminta mentor.

Priority summary: 42 Must, 8 conditional Must, 9 Should, 8 Could, 4 Won't = 71 total.

## 2. Navigation and homepage

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-001 | Logo dan identitas acara | Must | Aset disetujui; tampil di kedua locale |
| FR-002 | Navigation bar | Must | Semua tujuan menu dapat diakses |
| FR-003 | Dropdown navigation | Must | Mouse/keyboard dapat membuka, memilih, menutup |
| FR-004 | Mobile navigation | Must | Menu dapat digunakan di layar kecil |
| FR-005 | Hero section | Must | Hero menampilkan informasi resmi dan CTA |
| FR-006 | Nama, tema, tanggal, lokasi acara | Must | Data cocok dengan sumber resmi; TBA disetujui jika belum tersedia |
| FR-007 | Register Now CTA | Must | Mengarah ke registrasi acara yang benar saat aktif |
| FR-008 | Conference overview | Must | Deskripsi resmi EN/ID tersedia |
| FR-009 | Tujuan dan manfaat kegiatan | Must | Konten disetujui dan terbaca |
| FR-010 | Countdown | Could | Waktu benar, status berubah ketika berakhir |
| FR-011 | Footer dan kontak | Must | Kontak resmi dan tautan benar |
| FR-012 | Sticky navigation | Should | Tidak menutupi konten atau keyboard focus |

## 3. Speakers and sessions

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-013 | Daftar keynote speakers | Must | Daftar sesuai data resmi; empty state bila belum diumumkan |
| FR-014 | Foto pembicara | Must* | Foto berizin; fallback jika tidak tersedia |
| FR-015 | Nama, jabatan, institusi | Must | Data cocok dengan sumber resmi |
| FR-016 | Kelompok pembicara berdasarkan sesi | Must | Setiap pembicara tampil pada sesi yang ditetapkan |
| FR-017 | Detail profil pembicara | Should | Bio EN/ID dapat diakses |
| FR-018 | Status konfirmasi speaker | Must | Status confirmed/TBC mengikuti persetujuan panitia |
| FR-019 | Filter kategori/sesi | Could | Filter menghasilkan daftar yang benar dan reset |

## 4. Conference themes

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-020 | Tema utama | Must | Tema resmi tersedia dalam EN/ID |
| FR-021 | Kategori tema | Must | Kategori sesuai struktur acara |
| FR-022 | Subtema | Must | Subtema terkait kategori yang benar |
| FR-023 | Expandable accordion | Must | Buka/tutup dengan pointer dan keyboard; state aksesibel |

## 5. Programme and schedule

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-024 | Agenda per hari | Must | Semua hari yang disetujui ditampilkan |
| FR-025 | Waktu sesi | Must | Urutan waktu dan zona waktu benar |
| FR-026 | Nama dan deskripsi sesi | Must | Informasi EN/ID sesuai sumber |
| FR-027 | Ruangan | Must* | Ditampilkan jika diumumkan |
| FR-028 | Tab per hari | Must | Memilih hari menampilkan sesi yang sesuai; keyboard supported |
| FR-029 | Detail event programmes | Must | Detail atau status ketersediaan benar |
| FR-030 | Download programme PDF | Should | File resmi dapat dibuka atau diunduh bila tersedia |
| FR-031 | Filter jenis sesi | Could | Hasil sesuai tipe sesi |
| FR-032 | Add to Calendar | Could | Tanggal, zona waktu dan judul kalender benar |

## 6. Dates and registration

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-033 | Important dates | Must | Deadline dan status sesuai data resmi |
| FR-034 | Deadline abstract dan paper | Must* | Hanya jika acara menerima submission |
| FR-035 | Timeline kegiatan | Must | Tanggal kronologis dan mudah dibaca |
| FR-036 | Kategori peserta | Must | Kategori sesuai kebijakan acara |
| FR-037 | Biaya registrasi | Must | Nominal benar atau status TBA resmi; acara gratis ditandai sesuai keputusan |
| FR-038 | IDR dan USD | Must* | Mata uang dan nominal eksplisit jika ditetapkan; tidak konversi otomatis |
| FR-039 | Registrasi eksternal Interconf | Must | URL acara baru terverifikasi, bukan URL acara lama |
| FR-040 | Login eksternal Interconf | Must | URL login benar; tidak meminta password pada microsite |

## 7. Venue and accommodation

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-041 | Informasi venue | Must | Nama dan lokasi resmi atau status TBA |
| FR-042 | Foto venue | Must* | Foto berizin dan sesuai venue |
| FR-043 | Alamat lengkap | Must | Alamat resmi atau TBA jika belum diumumkan |
| FR-044 | Tautan peta | Should | Mengarah ke venue yang benar |
| FR-045 | Pilihan akomodasi | Must* | Hotel hanya ditampilkan jika direkomendasikan/disetujui |
| FR-046 | Tarif dan kontak hotel | Must* | Data sesuai sumber dan periode berlaku |
| FR-047 | Website hotel | Should | Tautan valid jika relevan |
| FR-048 | Formulir konfirmasi akomodasi | Must* | Tautan eksternal resmi jika digunakan |

## 8. Documents and partners

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-049 | Daftar dokumen konferensi | Must | Judul, jenis, status, bahasa file ditampilkan |
| FR-050 | Download presentation slides | Must | File resmi bisa diakses jika dipublikasikan; selain itu status tersedia/coming soon |
| FR-051 | Status ketersediaan dokumen | Must | Tidak ada tautan kosong atau file fiktif |
| FR-052 | Download concept note / paper template | Should | File resmi tersedia jika relevan |
| FR-053 | Logo organizer | Must | Logo dan aturan penggunaan disetujui |
| FR-054 | Logo partner/sponsor | Must | Hanya institusi yang disetujui; empty state/section hidden jika belum ada |
| FR-055 | Pengelompokan partner | Should | Kategori sesuai data resmi |

## 9. Additional and bilingual features

| ID | Requirement | Priority | Acceptance check |
|---|---|---|---|
| FR-056 | FAQ | Should | Jawaban resmi tersedia EN/ID |
| FR-057 | Back to top | Could | Kembali ke atas tanpa merusak focus |
| FR-058 | Social sharing | Could | URL dan metadata locale tepat |
| FR-059 | Visitor analytics/counter | Should | Hanya setelah persetujuan privasi; statistik nyata, bukan dummy; counter publik bila disetujui |
| FR-060 | Pencarian | Could | Hasil sesuai locale dan query |
| FR-061 | Dukungan EN dan ID | Must | Seluruh UI dan konten inti tersedia dalam dua bahasa |
| FR-062 | Dark mode | Could | Konsisten dengan brand, kontras dan preferensi pengguna |
| FR-063 | Admin dashboard/CMS | Won't | Tidak dibuat dalam MVP |
| FR-064 | Registrasi peserta internal | Won't | Interconf menangani registrasi |
| FR-065 | Pembayaran internal | Won't | Microsite tidak mengumpulkan pembayaran |
| FR-066 | Paper submission internal | Won't | Menggunakan layanan eksternal jika relevan |
| FR-067 | Language switcher | Must | Beralih EN/ID pada halaman ekuivalen; tidak reset ke home jika halaman tersedia |
| FR-068 | Localized routes dan direct access | Must | URL setiap locale dapat dibuka/refresh/bookmark/share; pola final Phase 2 |
| FR-069 | Localized data, label dan status | Must | Navbar, CTA, tanggal, fee, speaker, program, error/empty state konsisten |
| FR-070 | Status registrasi | Must | Jika belum buka/tutup/URL belum dikonfirmasi, tampilkan status resmi, tanpa tautan palsu |
| FR-071 | Source-code content workflow | Must | Developer mengubah data EN/ID terpusat, menjalankan validasi dan build tanpa mengedit komponen UI |

## 10. User stories and acceptance scenarios

| ID | Story | Given / When / Then | FR trace |
|---|---|---|---|
| US-01 | Visitor understands event | Given home, when loaded, then official title, dates/status, venue and CTA are visible | 005–009 |
| US-02 | Participant registers | Given registration open, when CTA selected, then official Interconf event URL opens; if closed, show status | 007,039,040,070 |
| US-03 | Researcher checks deadlines | Given important dates, when accessed, then relevant dates and timezone are readable in order | 033–035 |
| US-04 | Participant views agenda | Given multi-day programme, when changing day via keyboard or pointer, then correct sessions display | 024–029 |
| US-05 | Participant checks costs | Given fee data, when selecting locale, then labels change without altering currency/amount | 036–038,069 |
| US-06 | Visitor browses speakers | Given official speaker data, when viewing list, then name, role, institution and session are correct | 013–018 |
| US-07 | Participant downloads material | Given published document, when clicking, then official file opens; unpublished items show status | 049–052 |
| US-08 | Mobile visitor navigates | Given 390 px screen, when opening and closing menu, then navigation works and focus is usable | 002–004 |
| US-09 | Developer changes event data | Given repository, when editing structured bilingual content and rebuilding, then the UI reflects the update without UI rewrite | 061,069,071 |
| US-10 | Visitor switches language | Given a programme page in EN, when switching to ID, then equivalent localized page opens and URLs remain shareable | 061,067,068 |
| US-11 | Visitor checks venue | Given venue details, when selecting map or hotel link, then correct official destination opens | 041–048 |
| US-12 | Visitor encounters unavailable content | Given unconfirmed schedule or docs, when viewing page, then approved status is shown without misleading details | 018,029,051,070 |

## 11. Acceptance process

Every applicable Must must pass a mapped test case in Phase 5 in both languages, unless intrinsically language-independent. Conditional Must items need an explicit applicable/not applicable decision. Should/Could items are tracked in backlog, not silently treated as completed. No internal registration, payment, database or CMS without scope change. Final content, URLs and status require committee/mentor review.
