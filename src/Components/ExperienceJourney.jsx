import "aos/dist/aos.css";
import dicodingLogo from "../img/logo/dicoding.png";
import uniskaLogo from "../img/logo/uniska.png";
import {
  Cloud,
  Code2,
  Calendar,
  Briefcase,
  Database,
  Bot,
  Terminal,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Experience & Education Timeline.
 * Didesain persis sesuai referensi visual: garis alur vertikal di sebelah kiri,
 * node icon spesifik, badge institusi dengan logo, tanggal kalender, deskripsi ringkas,
 * serta pill tags keahlian abu-abu rounded-full. Mendukung multi-bahasa (ID & EN).
 */
export default function ExperienceJourney() {
  const { t } = useLanguage();

  // Konfigurasi icon dan logo untuk masing-masing item
  const itemIcons = {
    edu: {
      nodeIcon: <Bot size={17} className="text-slate-700 dark:text-slate-200" />,
      institutionLogo: (
        <img
          src={uniskaLogo}
          alt="UNISKA"
          className="w-4 h-4 object-contain rounded-sm"
        />
      ),
    },
    dicoding: {
      nodeIcon: <Database size={17} className="text-slate-700 dark:text-slate-200" />,
      institutionLogo: (
        <img
          src={dicodingLogo}
          alt="Dicoding Academy"
          className="w-4 h-4 object-contain rounded-sm"
        />
      ),
    },
    aws: {
      nodeIcon: <Cloud size={17} className="text-slate-700 dark:text-slate-200" />,
      institutionLogo: (
        <div className="flex items-center justify-center w-5 h-5 rounded bg-[#232F3E]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="#FF9900"
              d="M18.75 16.5c-3.1 2.3-7.6 3.5-11.5 3.5-5.4 0-10.3-2-14-5.3-.3-.3 0-.6.3-.4 4 2.3 8.9 3.7 14 3.7 3.5 0 7.3-.8 10.8-2.5.5-.3.9.3.4.6zm.9-1.4c-.4-.5-2.6-.2-3.6-.1-.3 0-.4-.3-.2-.5 1.1-.8 3-1 3.5-.4.5.6-.1 2.6-.9 3.5-.2.2-.4.1-.3-.2.3-.6.9-1.9.5-2.3z"
            />
          </svg>
        </div>
      ),
    },
    projects: {
      nodeIcon: <Terminal size={17} className="text-slate-700 dark:text-slate-200" />,
      institutionLogo: (
        <div className="flex items-center justify-center w-5 h-5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
          <Code2 size={13} />
        </div>
      ),
    },
  };

  return (
    <div id="experience" className="self-center max-w-3xl mx-auto mt-20 lg:mt-24">
      {/* Header Bagian Experience */}
      <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400">
          <Briefcase size={22} />
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-dark dark:text-white md:text-3xl transition-colors">
            {t.experience.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
            {t.experience.subtitle}
          </p>
        </div>
      </div>

      {/* Timeline Kontainer dengan Garis di Sisi Kiri */}
      <div className="relative pl-8 sm:pl-10">
        {/* Garis vertikal timeline */}
        <div className="absolute top-2.5 bottom-2.5 left-[13px] sm:left-[15px] w-[2px] bg-slate-200 dark:bg-slate-800"></div>

        <div className="space-y-12">
          {t.experience.items.map((exp, index) => {
            const visual = itemIcons[exp.id] || itemIcons.projects;

            return (
              <div
                key={exp.id}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Node Icon di atas garis vertikal */}
                <div className="absolute -left-[30px] sm:-left-[34px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm z-10 transition-transform duration-200 hover:scale-110">
                  {visual.nodeIcon}
                </div>

                {/* Konten Item Pengalaman */}
                <div className="flex flex-col items-start">
                  {/* Badge Institusi / Perusahaan dengan Logo */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/80">
                    {visual.institutionLogo}
                    <span>{exp.institution}</span>
                  </div>

                  {/* Judul Posisi / Role */}
                  <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
                    {exp.role}
                  </h4>

                  {/* Periode Kalender */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                    <Calendar size={14} className="text-slate-400 dark:text-slate-500" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Paragraf Deskripsi */}
                  <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Skill Pills (Rounded-full abu-abu sesuai gambar referensi) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
