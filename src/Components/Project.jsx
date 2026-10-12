import "aos/dist/aos.css";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Grid Kartu Proyek.
 * Didesain dengan estetika modern, rapi, dan profesional (bukan AI slop):
 * - Frame mockup browser dengan titik kontrol jendela.
 * - Transisi zoom gambar halus saat hover.
 * - Deskripsi dwi-bahasa yang informatif.
 * - Pill badge teknologi berjarak rapi.
 * - Tombol aksi langsung ke Live Demo dan Source Code.
 */
export default function Project({ items }) {
  const { language, t } = useLanguage();

  if (!items || items.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400">
        <p className="text-sm">Tidak ada proyek yang sesuai dengan kategori ini.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-8">
      {items.map((val, index) => {
        const description =
          language === "en" ? val.descriptionEn : val.descriptionId;

        return (
          <div
            key={val.id}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="group relative flex flex-col overflow-hidden bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Header Frame Mockup Browser */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 truncate max-w-[200px]">
                {val.type}
              </span>
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300">
                {val.category}
              </span>
            </div>

            {/* Gambar Preview Proyek */}
            <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-800">
              <img
                src={val.img}
                alt={val.title}
                loading="lazy"
                className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-dark/20 dark:bg-black/30 group-hover:opacity-100 pointer-events-none" />
            </div>

            {/* Konten Kartu Proyek */}
            <div className="flex flex-col flex-1 p-6">
              {/* Judul Proyek */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-sky-400 transition-colors">
                  {val.title}
                </h4>
                {val.link && (
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${val.title}`}
                    className="p-1.5 text-slate-400 dark:text-slate-400 hover:text-primary dark:hover:text-sky-400 transition-colors shrink-0"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              {/* Deskripsi Singkat */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                {description}
              </p>

              {/* Tag Teknologi */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {val.tech &&
                  val.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200/60 dark:border-slate-700/80"
                    >
                      {techItem}
                    </span>
                  ))}
              </div>

              {/* Tombol Aksi Bawah */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                {val.link ? (
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 rounded-lg bg-primary hover:bg-blue-600 shadow-sm"
                  >
                    <ExternalLink size={13} />
                    <span>{t.projects.liveDemo}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/60 dark:border-slate-700">
                    <Globe size={13} />
                    <span>Internal Project</span>
                  </span>
                )}

                {val.github && (
                  <a
                    href={val.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white"
                  >
                    <FaGithub size={13} />
                    <span>{t.projects.github}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
