import nusantara from "./img/project-img/nusantara.png";
import portopolio from "./img/project-img/portopolio.png";
import fotoinyu from "./img/project-img/Fotoinyu.png";
import spmonitor from "./img/project-img/SPMonitor.png";
const ProjData = [
  {
    id: "1",
    title: "Nusantara Bersuara",
    category: "Website",
    type: "Public Community Platform",
    descriptionId:
      "Platform aspirasi dan pelaporan publik digital interaktif dengan navigasi responsif, verifikasi data real-time, dan UI modern bertema nasionalisme.",
    descriptionEn:
      "Interactive digital public aspiration platform featuring responsive navigation, community reporting workflow, and modern patriotic aesthetic.",
    img: nusantara,
    link: "https://nusantarabersuara.vercel.app/",
    github: "https://github.com/amamX",
    tech: ["HTML5", "JavaScript", "Tailwind CSS", "Vercel"],
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Website",
    category: "Website",
    type: "Interactive Single-Page App",
    descriptionId:
      "Portofolio personal interaktif dengan dukungan multi-bahasa (ID/EN), komponen modern Marquee, linimasa pengalaman, dan formulir EmailJS.",
    descriptionEn:
      "Interactive personal portfolio engineered with bilingual support (ID/EN), modern Marquee, structured learning timeline, and EmailJS form.",
    img: portopolio,
    link: "",
    github: "https://github.com/amamX/portofolio-reactjs",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "3",
    title: "Fotoinyu",
    category: "Website",
    type: "Responsive Photobooth Website",
    descriptionId:
      "Website layanan photobooth interaktif untuk acara Wedding, Birthday, Wisuda, dan event spesial lainnya, dilengkapi galeri foto, informasi paket, testimoni, serta fitur booking untuk memudahkan pelanggan mengabadikan momen berharga.",
    descriptionEn:
      "Interactive photobooth service website for weddings, birthdays, graduations, and special events, featuring a photo gallery, service packages, testimonials, and a booking feature to help customers capture memorable moments.",
    img: fotoinyu,
    link: "https://fotoinyu.vercel.app/",
    github: "https://github.com/amamX/Fotoinyu.git",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "4",
    title: "Student Project Monitoring",
    category: "Website",
    type: "Project Management Web Application",
    descriptionId:
      "Platform monitoring proyek mahasiswa yang membantu mahasiswa dan dosen mengelola proyek, memantau progres, mengatur tugas, serta memberikan feedback dalam satu sistem terintegrasi. Dilengkapi dashboard interaktif, manajemen tim, dan fitur eksplorasi proyek untuk mendukung kolaborasi dan transparansi.",
    descriptionEn:
      "A student project monitoring platform that helps students and lecturers manage projects, track progress, organize tasks, and provide feedback in one integrated system. Features an interactive dashboard, team management, and project exploration to support collaboration and transparency.",
    img: spmonitor,
    link: "https://student-project-monitoring.vercel.app",
    github: "https://github.com/amamX/student-project-monitoring.git",
    tech: ["React.js", "Vite", "Tailwind CSS", "Supabase"],
    featured: true,
  },
];

export default ProjData;
