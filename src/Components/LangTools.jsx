import Data from "../Data";
import { Marquee } from "./ui/marquee";
import { Wrench, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Language & Tools (Tech Stack).
 * Didesain seragam dan harmonis dengan section lainnya:
 * - Badge kapsul rounded-full dengan icon Wrench / Sparkles
 * - Judul tebal kontras tinggi dan subtitle penjelas yang informatif
 * - Wadah Marquee dengan kartu kaca glassmorphism, accent border top pendar,
 *   dan transisi interaktif halus saat hover.
 */
export default function LangTools() {
  const { t } = useLanguage();

  return (
    <div id="tools" className="self-center w-full mt-20 lg:mt-24">
      {/* Header Bagian Language & Tools (Seragam dengan About, Experience, Projects) */}
      <div className="flex flex-col items-center mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          <Wrench size={14} className="text-primary" />
          <span>{t.tools?.badge || "KEAHLIAN TEKNIS"}</span>
        </div>
        <h3 className="text-2xl font-extrabold text-dark md:text-3xl lg:text-4xl">
          {t.tools?.title || "Bahasa & Alat Pengembangan"}
        </h3>
        <p className="max-w-2xl mt-2 text-xs md:text-sm font-normal text-slate-500">
          {t.tools?.subtitle ||
            "Teknologi, bahasa pemrograman, framework, dan peralatan modern yang saya gunakan dalam membangun ekosistem web responsif."}
        </p>
      </div>

      {/* Marquee Infinite Loop Container */}
      <div className="relative w-full py-4 overflow-hidden" data-aos="fade-up">
        {/* Gradient Fade di Sisi Kiri & Kanan */}
        <div className="pointer-events-none absolute top-0 left-0 z-20 w-16 sm:w-24 h-full bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-20 w-16 sm:w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent"></div>

        <Marquee pauseOnHover={true} speed={28} className="py-2">
          {Data.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center justify-center gap-2.5 mx-3.5 w-28 h-28 lg:w-32 lg:h-32 shrink-0 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border border-slate-200/80"
            >
              {/* Garis aksen subtle di bagian atas yang menyala saat hover */}
              <div
                className="absolute inset-x-0 top-0 h-1 transition-opacity duration-300 opacity-0 rounded-t-2xl group-hover:opacity-100"
                style={{ backgroundColor: skill.border }}
              />

              {/* Ambient radial glow di background saat hover */}
              <div
                className="absolute inset-0 transition-opacity duration-300 rounded-2xl opacity-0 pointer-events-none group-hover:opacity-15"
                style={{
                  background: `radial-gradient(circle at center, ${skill.border}, transparent 70%)`,
                }}
              />

              {/* Wadah logo dengan animasi scale */}
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-xl bg-slate-50/80 group-hover:scale-110">
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="object-contain w-8 h-8"
                  loading="lazy"
                />
              </div>

              {/* Label nama teknologi */}
              <span className="text-xs font-semibold tracking-wide transition-colors text-slate-600 group-hover:text-dark">
                {skill.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

