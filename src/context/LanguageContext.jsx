import { createContext, useContext, useState, useEffect } from "react";

// Inisialisasi Context Bahasa
const LanguageContext = createContext();

// Kamus terjemahan bilingual (Indonesia & English)
const translations = {
  id: {
    navbar: {
      home: "Beranda",
      about: "Tentang Saya",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo Semua 👋, Saya",
      roleWords: ["Frontend Engineer", "UI/UX Enthusiast", "Web Developer"],
      welcome: "Selamat Datang di Website Personal",
      website: "Saya",
      viewProject: "Lihat Proyek",
      downloadCv: "Unduh CV",
      contactMe: "Hubungi Saya",
    },
    about: {
      badge: "Profil Profesional",
      titlePrefix: "Tentang",
      titleSuffix: "Saya",
      headlinePrefix: "Mengubah Ide Desain Menjadi",
      headlineSuffix: "Pengalaman Web Interaktif",
      paragraph1:
        "Saya adalah mahasiswa Teknik Informatika yang berfokus mendalam pada rekayasa antarmuka web modern (Front-End Web Development). Memadukan presisi desain visual dengan arsitektur kode yang bersih, terstruktur, dan mudah dipelihara.",
      paragraph2:
        "Keahlian utama saya berpusat pada penerjemahan rancangan Figma menjadi aplikasi web responsif berkinerja tinggi. Berpengalaman memanfaatkan ekosistem React, Tailwind CSS, hingga integrasi database dan cloud services untuk menghadirkan pengalaman pengguna yang intuitif.",
      highlights: [
        { title: "Pendidikan", desc: "Mahasiswa Teknik Informatika" },
        { title: "Spesialisasi", desc: "Front-End & UI/UX Implementation" },
        { title: "Pendekatan", desc: "Clean Code & Interactive Experience" },
      ],
      stats: [
        { label: "Proyek Selesai", value: "10+" },
        { label: "Tech Stack Dikuasai", value: "8+" },
        { label: "Fokus Utama", value: "Frontend" },
      ],
      downloadCvBtn: "Unduh CV (Resume)",
      exploreJourneyBtn: "Lihat Linimasa Pengalaman",
      statusAvailable: "Terbuka untuk Peluang",
      statusType: "Full-time / Freelance",
    },
    experience: {
      badge: "Milestone & Pertumbuhan",
      title: "Pendidikan & Pengalaman",
      subtitle:
        "Rekam jejak akademis formal, sertifikasi kejuruan industri, dan spesialisasi komputasi awan yang membentuk fondasi keahlian saya.",
      items: [
        {
          id: "edu",
          institution: "Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari (UNISKA)",
          role: "S1 Mahasiswa Teknik Informatika",
          period: "2025 — Sekarang",
          description:
            "Menempuh studi sarjana (S1) Teknik Informatika dengan fokus pada rekayasa perangkat lunak, struktur data, arsitektur basis data, dan pengembangan web modern. Mengembangkan fondasi computational thinking, logika pemrograman, dan problem solving.",
          skills: [
            "Software Engineering",
            "Data Structures",
            "Algorithms",
            "OOP",
            "Database Systems",
          ],
        },
        {
          id: "dicoding",
          institution: "Dicoding Academy Indonesia",
          role: "AI Fullstack Developer",
          period: "2026 — 2027",
          description:
            "Menempuh kurikulum intensif pengembangan AI Fullstack: Mengintegrasikan model Machine Learning & Generative AI (LLMs) ke dalam arsitektur aplikasi web fullstack modern (React, Node.js/Python, REST APIs, dan database) berstandar industri.",
          skills: [
            "Generative AI & LLM",
            "Fullstack Web",
            "Python & Node.js",
            "React.js",
            "REST APIs",
          ],
        },
        {
          id: "aws",
          institution: "AWS Academy (Amazon Web Services)",
          role: "Cloud Foundations & Cloud Practitioner",
          period: "2026 — 2027",
          description:
            "Mendalami infrastruktur komputasi awan, konsep Shared Responsibility Model, layanan inti Amazon EC2, Amazon S3, VPC, RDS, manajemen akses IAM Security, dan fondasi arsitektur cloud serverless.",
          skills: [
            "Cloud Computing",
            "Amazon EC2",
            "Amazon S3",
            "IAM & Security",
            "Serverless Basics",
          ],
        },
        {
          id: "projects",
          institution: "Independent Web Development",
          role: "Front-End & UI/UX Developer",
          period: "2026 — Sekarang",
          description:
            "Mengembangkan berbagai proyek aplikasi web nyata dengan konversi presisi dari rancangan Figma. Membangun antarmuka interaktif menggunakan React, Tailwind CSS, serta integrasi database Supabase dan PostgreSQL.",
          skills: [
            "React.js",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Figma to Code",
          ],
        },
      ],
    },
    tools: {
      badge: "KEAHLIAN TEKNIS",
      title: "Bahasa & Alat Pengembangan",
      subtitle:
        "Teknologi, bahasa pemrograman, framework, dan peralatan modern yang saya gunakan dalam membangun ekosistem web responsif.",
    },
    certificates: {
      badge: "KREDENSIAL & LISENSI",
      title: "Sertifikasi & Pencapaian",
      subtitle:
        "Sertifikat kompetensi terverifikasi industri, kelulusan kurikulum Dicoding, AWS, Google Cloud, serta penghargaan kompetisi.",
      filterAll: "Semua",
      filterDicoding: "Dicoding",
      filterOther: "Lainnya",
      previewPdf: "Lihat Sertifikat",
      downloadPdf: "Unduh PDF",
      verify: "Verifikasi Online",
      credentialId: "ID Kredensial",
      viewMore: "Lihat Sertifikat Lainnya",
      viewLess: "Tampilkan Lebih Sedikit",
      showingCount: "Menampilkan 6 dari {total} sertifikat",
    },
    projects: {
      badge: "KARYA & PORTOFOLIO",
      title: "Proyek Pilihan",
      subtitle:
        "Koleksi produk digital, aplikasi web fullstack, dan antarmuka interaktif yang dibangun dengan fokus pada performa dan pengalaman pengguna.",
      filterAll: "Semua",
      filterWebsite: "Website",
      filterApp: "Web App",
      filterUiUx: "UI/UX",
      liveDemo: "Kunjungi Web",
      github: "Kode Sumber",
    },
    contact: {
      badge: "HUBUNGI SAYA",
      title: "Mari Berkolaborasi Bersama",
      subtitle:
        "Tertarik bekerja sama, memiliki proyek menarik, atau ingin berdiskusi seputar AI & web development? Kirimkan pesan Anda melalui formulir di bawah ini.",
      infoTitle: "Informasi Kontak",
      infoSubtitle: "Saya biasanya merespons pesan dalam waktu kurang dari 24 jam.",
      statusBadge: "Terbuka untuk Freelance & Full-time",
      responseTime: "Respon Cepat (< 24 Jam)",
      location: "Banjarmasin, Kalimantan Selatan",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Alamat Email",
      emailPlaceholder: "nama@contoh.com",
      subjectLabel: "Topik / Subjek Pesan",
      subjectPlaceholder: "Misal: Diskusi Proyek Web / Penawaran Kolaborasi",
      messageLabel: "Pesan Anda",
      messagePlaceholder: "Tuliskan detail proyek atau pesan yang ingin disampaikan...",
      sendBtn: "Kirim Pesan",
      sending: "Sedang Mengirim...",
      success: "Pesan berhasil terkirim! Terima kasih telah menghubungi saya.",
      error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.",
    },
    footer: {
      createdBy: "Dibuat oleh",
      brandName: "amam",
      copyright: "© 2026 Ahmad Maulana. Platform portofolio & karya digital.",
    },
  },
  en: {
    navbar: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello Everyone 👋, I'm",
      roleWords: ["Frontend Engineer", "UI/UX Enthusiast", "Web Developer"],
      welcome: "Welcome to My Personal",
      website: "Website",
      viewProject: "View Projects",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
    },
    about: {
      badge: "Professional Profile",
      titlePrefix: "About",
      titleSuffix: "Me",
      headlinePrefix: "Transforming Visionary Designs Into",
      headlineSuffix: "Interactive Web Experiences",
      paragraph1:
        "I'm an Informatics Engineering student with a strong dedication to modern Front-End Web Development, blending visual design precision with clean, structured, and maintainable code architecture.",
      paragraph2:
        "My core expertise focuses on translating Figma designs into high-performance, pixel-accurate, and responsive web applications. Experienced with React, Tailwind CSS, as well as cloud database integrations to craft intuitive user experiences.",
      highlights: [
        { title: "Education", desc: "Informatics Engineering Student" },
        { title: "Specialization", desc: "Front-End & UI/UX Implementation" },
        { title: "Approach", desc: "Clean Code & Interactive Experiences" },
      ],
      stats: [
        { label: "Projects Built", value: "10+" },
        { label: "Tech Stacks Mastered", value: "8+" },
        { label: "Primary Focus", value: "Frontend" },
      ],
      downloadCvBtn: "Download CV (Resume)",
      exploreJourneyBtn: "Explore My Journey",
      statusAvailable: "Open to Opportunities",
      statusType: "Full-time / Freelance",
    },
    experience: {
      badge: "Milestones & Growth",
      title: "Experience & Education",
      subtitle:
        "Academic background, professional tech academies, and cloud computing specializations shaping my technical foundation.",
      items: [
        {
          id: "edu",
          institution: "Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari (UNISKA)",
          role: "Undergraduate Informatics Engineering Student",
          period: "2025 — Present",
          description:
            "Pursuing an undergraduate degree (S1) in Informatics Engineering focused on software engineering, data structures, database architecture, and modern web engineering. Cultivating computational thinking and algorithmic problem solving.",
          skills: [
            "Software Engineering",
            "Data Structures",
            "Algorithms",
            "OOP",
            "Database Systems",
          ],
        },
        {
          id: "dicoding",
          institution: "Dicoding Academy Indonesia",
          role: "AI Fullstack Developer",
          period: "2026 — 2027",
          description:
            "Completed industry-accredited curriculum in AI Fullstack engineering: Integrating Machine Learning models & Generative AI (LLMs) into modern fullstack web architectures (React, Node.js/Python, REST APIs, and databases).",
          skills: [
            "Generative AI & LLM",
            "Fullstack Web",
            "Python & Node.js",
            "React.js",
            "REST APIs",
          ],
        },
        {
          id: "aws",
          institution: "AWS Academy (Amazon Web Services)",
          role: "Cloud Foundations & Cloud Practitioner",
          period: "2026 — 2027",
          description:
            "Mastering cloud computing foundations, the Shared Responsibility Model, core services (Amazon EC2, Amazon S3, VPC, RDS), IAM access security, and serverless architectural concepts.",
          skills: [
            "Cloud Computing",
            "Amazon EC2",
            "Amazon S3",
            "IAM & Security",
            "Serverless Basics",
          ],
        },
        {
          id: "projects",
          institution: "Independent Web Development",
          role: "Front-End & UI/UX Developer",
          period: "2026 — Present",
          description:
            "Developing real-world web applications translated with pixel accuracy from Figma. Engineering interactive interfaces using React, Tailwind CSS, Supabase, and PostgreSQL.",
          skills: [
            "React.js",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Figma to Code",
          ],
        },
      ],
    },
    tools: {
      badge: "TECH STACK & TOOLS",
      title: "Language & Tools",
      subtitle:
        "Modern technologies, programming languages, frameworks, and developer tools powering my web development workflow.",
    },
    certificates: {
      badge: "CREDENTIALS & LICENSES",
      title: "Certifications & Achievements",
      subtitle:
        "Industry-verified competence certificates from Dicoding Academy, AWS, Google Cloud, and academic competitions.",
      filterAll: "All",
      filterDicoding: "Dicoding",
      filterOther: "Others",
      previewPdf: "View Certificate",
      downloadPdf: "Download PDF",
      verify: "Online Verification",
      credentialId: "Credential ID",
      viewMore: "View More Certificates",
      viewLess: "Show Less",
      showingCount: "Showing 6 of {total} certificates",
    },
    projects: {
      badge: "FEATURED WORK",
      title: "Featured Projects",
      subtitle:
        "A curated selection of digital products, fullstack applications, and interactive user interfaces built with precision and performance in mind.",
      filterAll: "All",
      filterWebsite: "Website",
      filterApp: "Web App",
      filterUiUx: "UI/UX",
      liveDemo: "Live Preview",
      github: "Source Code",
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Let's Build Something Meaningful Together",
      subtitle:
        "Have an exciting project idea, collaboration inquiry, or want to talk tech and AI? Reach out via the form below.",
      infoTitle: "Contact Information",
      infoSubtitle: "I typically respond to inquiries within 24 hours.",
      statusBadge: "Available for Freelance & Full-time",
      responseTime: "Fast Response (< 24h)",
      location: "Banjarmasin, South Kalimantan",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g., Web Project Inquiry / Collaboration Offer",
      messageLabel: "Your Message",
      messagePlaceholder: "Write your project details or message here...",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! Thank you for reaching out.",
      error: "Failed to send message. Please try again or reach out directly via email.",
    },
    footer: {
      createdBy: "Built by",
      brandName: "amam",
      copyright: "© 2026 Ahmad Maulana. Personal portfolio & digital showcase.",
    },
  },
};

/**
 * Provider untuk membungkus seluruh aplikasi dengan state bahasa.
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "id";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = translations[language] || translations.id;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook untuk mengakses terjemahan dan fungsi switch bahasa.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
