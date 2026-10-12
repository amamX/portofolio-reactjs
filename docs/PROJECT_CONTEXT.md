# Konteks Proyek: Portfolio React

## Tujuan Proyek
Website portofolio pribadi interaktif satu halaman (single-page) milik Ahmad Maulana (amamX) untuk menampilkan keahlian, sertifikasi industri (Dicoding & lainnya), riwayat proyek, dan formulir kontak via EmailJS.

## Stack dan Cara Menjalankan
- **Framework & Build:** React 18, Vite 5
- **Styling & UI:** Tailwind CSS 3, Flowbite React, Lucide React, React Icons, shadcn/ui components (`clsx`, `tailwind-merge`)
- **Animasi & Grafis:** AOS (Animate on Scroll), Framer Motion, HTML5 Canvas (`KineticGridBackground`), Typewriter, Marquee
- **Layanan & Fitur:** EmailJS (`@emailjs/browser`), Multi-bahasa (ID/EN), SEO (`sitemap.xml`, `robots.txt`, JSON-LD)
- **Menjalankan:**
  - `npm run dev` : Development server
  - `npm run build` : Build produksi
  - `npm run preview` : Pratinjau hasil build
  - `npm run lint` : Linting ESLint

## Struktur Folder
- `src/` : Kode aplikasi utama
  - `Components/` : Komponen antarmuka (`Navbar`, `Home`, `About`, `Me`, `ExperienceJourney`, `LangTools`, `CertifSection`, `Certification`, `Works`, `Project`, `Contact`, `Footer`, `Loading`, `KineticGridBackground`)
  - `components/ui/` : Komponen atomik (`marquee.tsx`, `demo.tsx`)
  - `context/` : State global aplikasi (`LanguageContext.jsx` untuk bahasa ID & EN)
  - `lib/` : Helper utility (`utils.ts` untuk helper kelas Tailwind `cn`)
  - `Data.jsx`, `ProjData.jsx`, `CerData.jsx` : Dataset statis tech stack, proyek, dan sertifikat
  - `assets/`, `img/`, `file/` : Aset gambar proyek, sertifikat, logo instansi, dan berkas CV
  - `App.jsx`, `main.jsx`, `index.css` : Root komponen, mounting DOM, dan Tailwind base styling
- `public/` : Aset statis web publik (`certificates/`, `favicon.*`, `og-image.png`, `robots.txt`, `sitemap.xml`)

## Alur Utama
1. `main.jsx` me-mount `App.jsx` ke `#root`.
2. `App.jsx` membungkus aplikasi dengan `LanguageProvider` dan merender `KineticGridBackground` (latar interaktif kanvas).
3. Komponen dimuat berurutan: `Loading` -> `Navbar` -> `Home` -> `About` (`Me` -> `ExperienceJourney` -> `LangTools` -> `CertifSection`) -> `Works` -> `Contact` -> `Footer`.
4. Navigasi halaman menggunakan smooth anchor link ID (`#home`, `#about`, `#certificates`, `#projects`, `#contact`).
5. `Works` memfilter proyek berdasarkan kategori; `CertifSection` memfilter sertifikasi serta menyediakan modal preview/unduh PDF; `Contact` memproses pengiriman form via EmailJS.

## Modul dan Fungsi Penting
- `App.jsx`: Root layout, inisialisasi AOS terpusat, dan integrasi latar grid kinetik.
- `KineticGridBackground.jsx`: Efek kanvas interaktif respon kursor (warping) dan efek ripple saat klik.
- `LanguageContext.jsx`: Penyedia konteks multibahasa (ID/EN) dan dictionary terjemahan teks.
- `CertifSection.jsx` & `Certification.jsx`: Tampilan sertifikat terakreditasi dengan tab filter dan modal penampil/unduh file.
- `Works.jsx` & `Project.jsx`: Grid kartu proyek dengan mockup frame browser dan filter kategori.
- `Contact.jsx`: Formulir interaktif dengan validasi pesan dan pengiriman email via EmailJS.

## Konvensi yang Dipakai
- Komponen fungsional React (JSX/TSX) terpecah modular berdasarkan per-section dan sub-section.
- Desain utility-first dengan Tailwind CSS, styling dinamis via `cn()`, dan animasi AOS (`data-aos`).
- Dataset konten statis dipisah di file `*Data.jsx` agar mudah diperbarui tanpa mengubah logic komponen.

## Hal yang Belum Jelas atau Berisiko
- Kredensial EmailJS (`serviceID`, `templateID`, `publicKey`) di `Contact.jsx` masih tertulis langsung (hardcoded), disarankan dipindahkan ke environment variable (`.env` / `VITE_*`).
- Terdapat tautan eksternal proyek di `ProjData.jsx` yang bernilai string kosong (`link: ""`).

## Pekerjaan Terakhir dan TODO
- Tidak ada catatan TODO/FIXME di kode sumber.
- Pembaruan terakhir: perombakan besar UI/UX section, penambahan komponen sertifikasi & background kinetik, integrasi meta tag SEO, sitemap, dan verifikasi Google Search Console.

## Metadata
- **Commit terakhir:** `7928794` (penambahan tag html goggle search)
- **Tanggal pembaruan:** 2026-10-12
