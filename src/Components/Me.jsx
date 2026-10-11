import Dep from "../img/amamFotoWeb2.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, GraduationCap, Code2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Me() {
  const { t } = useLanguage();

  const cardRef = useRef(null);

  // Efek interaktif 3D tilt pada foto profil
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const highlightIcons = [GraduationCap, Code2, Sparkles];

  return (
    <div
      className="self-center mx-auto lg:w-[90%]"
      data-aos="fade-up"
    >
      {/* Header Bagian About */}
      <div className="flex flex-col items-center mb-12 text-center lg:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          <Sparkles size={14} className="text-primary animate-pulse" />
          <span>{t.about.badge}</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-dark lg:text-5xl">
          {t.about.titlePrefix} <span className="text-primary">{t.about.titleSuffix}</span>
        </h2>
        <div className="w-16 h-1 mt-3 rounded-full bg-gradient-to-r from-primary to-cyan-400"></div>
      </div>

      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Kolom Kiri: Foto Profil dengan Card 3D & Status Badge */}
        <div className="flex flex-col items-center justify-center lg:col-span-5">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative cursor-pointer w-full max-w-[340px] sm:max-w-[380px]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-cyan-400/20 to-purple-500/30 blur-[60px] -z-10"></div>

            {/* Bingkai Luar Modern Glassmorphism */}
            <div className="relative p-3.5 bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-3xl overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/5] rounded-2xl bg-slate-100">
                <motion.img
                  src={Dep}
                  alt="Ahmad Maulana"
                  className="object-cover object-top w-full h-full transition-transform duration-700 hover:scale-105"
                  style={{ transform: "translateZ(30px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Badge Status di dalam foto */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2.5 h-2.5">
                      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                      <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {t.about.statusAvailable}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">
                    {t.about.statusType}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Kolom Kanan: Narasi Profesional & Download CV */}
        <div className="lg:col-span-7">
          <h3 className="mb-4 text-2xl font-bold leading-snug text-dark lg:text-4xl">
            {t.about.headlinePrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500">
              {t.about.headlineSuffix}
            </span>
          </h3>

          <p className="mb-4 text-base leading-relaxed text-slate-600">
            {t.about.paragraph1}
          </p>

          <p className="mb-6 text-base leading-relaxed text-slate-600">
            {t.about.paragraph2}
          </p>

          {/* Kartu Highlight Profesional */}
          <div className="grid grid-cols-1 gap-3 mb-8 sm:grid-cols-3">
            {t.about.highlights.map((item, idx) => {
              const Icon = highlightIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50/80 border border-slate-200/60 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-8 h-8 mb-2 rounded-lg bg-primary/10 text-primary">
                    <Icon size={16} />
                  </div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-dark mt-0.5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bagian Tombol Aksi: Explore My Journey */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.about.exploreJourneyBtn}</span>
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Baris Metrik & Statistik */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            {t.about.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dark to-slate-700 lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
