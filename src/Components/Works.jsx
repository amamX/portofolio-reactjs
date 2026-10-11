import "aos/dist/aos.css";
import { useState } from "react";
import ProjData from "../ProjData";
import Project from "./Project";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t.projects.filterAll },
    { id: "website", label: t.projects.filterWebsite },
  ];

  const filteredItems =
    activeCategory === "all"
      ? ProjData
      : ProjData.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <section id="projects" className="pt-24 pb-28">
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={14} className="text-primary" />
            <span>{t.projects.badge}</span>
          </div>
          <h3 className="text-3xl font-extrabold text-dark lg:text-4xl">
            {t.projects.title}
          </h3>
          <p className="max-w-2xl mt-3 text-sm font-normal text-slate-500 lg:text-base">
            {t.projects.subtitle}
          </p>

          {/* Filter Segmented Pills */}
          <div className="inline-flex items-center p-1.5 mt-8 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-600 hover:text-dark hover:bg-white/50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <Project items={filteredItems} />
      </div>
    </section>
  );
}
