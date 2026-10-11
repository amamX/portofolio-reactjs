# Konteks Proyek: Portfolio React

## Tujuan Proyek
Website portofolio pribadi interaktif satu halaman (single-page) untuk menampilkan profil diri, keterampilan teknologi (skills/tools), sertifikasi, riwayat proyek/karya, serta formulir kontak langsung via email.

## Stack dan Cara Menjalankan
- **Framework & Build:** React 18, Vite 5
- **Styling & UI:** Tailwind CSS 3, Flowbite React, Lucide React, React Icons, shadcn/ui components (`clsx`, `tailwind-merge`)
- **Animasi & Interaktivitas:** AOS (Animate on Scroll), Framer Motion, react-simple-typewriter, Marquee
- **Layanan Eksternal:** EmailJS (`@emailjs/browser`) untuk pengiriman pesan formulir
- **Menjalankan:**
  - `npm run dev` : Menjalankan development server
  - `npm run build` : Build produksi
  - `npm run preview` : Menjalankan pratinjau hasil build
  - `npm run lint` : Menjalankan pengecekan ESLint

## Struktur Folder
- `src/` : Sumber kode utama aplikasi
  - `components/ui/` : Komponen antarmuka atomik/reusable shadcn (`marquee.tsx`, `demo.tsx`)
  - `Components/` : Komponen tampilan portofolio (Navbar, Home, About, Me, ExperienceJourney, LangTools, Works, Contact, Footer, Loading, dll.)
  - `context/` : State management aplikasi (`LanguageContext.jsx` untuk multi-bahasa ID/EN)
  - `lib/` : Utilitas fungsi helper (`utils.ts` untuk `cn`)
  - `Data.jsx`, `ProjData.jsx`, `CerData.jsx` : Dataset statis untuk keahlian, proyek, dan sertifikasi
  - `assets/`, `img/`, `file/` : Gambar proyek, ikon teknologi, foto profil, dan berkas unduhan
  - `App.jsx`, `main.jsx`, `index.css` : Root komponen aplikasi, titik masuk DOM, dan konfigurasi styling global
- `public/` : Aset statis publik

## Alur Utama
1. `main.jsx` me-mount komponen `App.jsx` ke elemen DOM `#root`.
2. `App.jsx` merender komponen berurutan secara vertikal: `Loading` -> `Navbar` -> `Home` -> `About` -> `Works` -> `Contact` -> `Footer`.
3. Navigasi mengarahkan pengguna ke masing-masing bagian halaman via anchor link ID (`#home`, `#about`, `#projects`, `#contact`).
4. Bagian `Works` memfilter dan menampilkan daftar portofolio berdasarkan kategori.
5. Bagian `Contact` menangani input formulir dan mengirimkan pesan langsung via EmailJS.

## Modul dan Fungsi Penting
- `App.jsx`: Menyusun tata letak utama halaman portofolio dan membungkus `LanguageProvider`.
- `Works.jsx` & `Project.jsx`: Menyaring dan merender kartu portofolio berdesain mockup browser dengan filter kategori dari `ProjData.jsx`.
- `ExperienceJourney.jsx`: Menampilkan linimasa pendidikan (S1 Teknik Informatika), Dicoding (AI Fullstack Developer), AWS Cloud, dan proyek mandiri.
- `LangTools.jsx`: Menampilkan marquee teknologi modern tanpa border kaku dengan ambient radial glow.
- `Contact.jsx`: Menangani validasi dan pengiriman pesan formulir kontak via `emailjs.sendForm` dengan kartu info modern dan indikator ketersediaan kerja.
- `Loading.jsx`: Menampilkan animasi loading sebelum konten utama siap.

## Konvensi yang Dipakai
- Komponen fungsional React (JSX) dengan modularitas berbasis per-section.
- Utility-first CSS menggunakan Tailwind CSS dan transisi AOS (`data-aos`).
- Pemisahan data konten (portfolio, sertifikasi, tech stack) ke file data terpisah (`*Data.jsx`).

## Hal yang Belum Jelas atau Berisiko
- Kredensial EmailJS (`serviceID`, `templateID`, `publicKey`) di `Contact.jsx` tertulis langsung (hardcoded) di komponen client, bukan melalui environment variable (`.env` / `VITE_*`).
- Beberapa item pada `ProjData.jsx` memiliki nilai link kosong (`link: ""`).

## Pekerjaan Terakhir dan TODO
- Tidak ada catatan TODO/FIXME di dalam kode.
- Riwayat perbaikan terakhir: penyesuaian logo pada navbar dan footer.

## Metadata
- **Commit terakhir:** `d9617ff` (Fix logo navbar and footer)
- **Tanggal pembaruan:** 2026-10-11
