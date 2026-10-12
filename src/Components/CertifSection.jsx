import { useState } from "react";
import CerData from "../CerData";
import Certification from "./Certification";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CertifSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t.certificates?.filterAll || "Semua" },
    { id: "dicoding", label: t.certificates?.filterDicoding || "Dicoding" },
    { id: "other", label: t.certificates?.filterOther || "Lainnya" },
  ];

  const filteredItems =
    activeTab === "all"
      ? CerData
      : activeTab === "dicoding"
      ? CerData.filter((c) => c.category === "Dicoding")
      : CerData.filter((c) => c.category !== "Dicoding");

  const INITIAL_COUNT = 6;
  const displayedItems = isExpanded
    ? filteredItems
    : filteredItems.slice(0, INITIAL_COUNT);
  const hasMore = filteredItems.length > INITIAL_COUNT;

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    setIsExpanded(false);
  };

  return (
    <div id="certificates" className="self-center mt-20 lg:mt-24">
      {/* Header Bagian Sertifikasi */}
      <div className="flex flex-col items-center mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          <Award size={14} className="text-primary" />
          <span>{t.certificates?.badge || "KREDENSIAL & LISENSI"}</span>
        </div>
        <h3 className="text-2xl font-extrabold text-dark dark:text-white md:text-3xl lg:text-4xl transition-colors">
          {t.certificates?.title || "Sertifikasi & Pencapaian"}
        </h3>
        <p className="max-w-2xl mt-2 text-xs md:text-sm font-normal text-slate-500 dark:text-slate-400">
          {t.certificates?.subtitle ||
            "Sertifikat kompetensi terverifikasi industri, kelulusan kurikulum Dicoding, AWS, Google Cloud, serta penghargaan kompetisi."}
        </p>

        {/* Tab Filter Kategori */}
        <div className="inline-flex items-center p-1.5 mt-6 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`px-4 py-1.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-primary dark:text-sky-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-dark dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Kartu Sertifikat Interaktif & Modal Viewer */}
      <Certification item={displayedItems} />

      {/* Tombol View More / Show Less */}
      {hasMore && (
        <div className="flex flex-col items-center justify-center mt-10" data-aos="fade-up">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>
              {isExpanded
                ? t.certificates?.viewLess || "Tampilkan Lebih Sedikit"
                : t.certificates?.viewMore || "Lihat Sertifikat Lainnya"}
            </span>
            {!isExpanded && (
              <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400">
                +{filteredItems.length - INITIAL_COUNT}
              </span>
            )}
            {isExpanded ? (
              <ChevronUp size={16} className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown size={16} className="text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </button>
          <span className="mt-2.5 text-[11px] sm:text-xs text-slate-400 dark:text-slate-500">
            {isExpanded
              ? `Menampilkan seluruh ${filteredItems.length} sertifikat`
              : `Menampilkan ${INITIAL_COUNT} dari ${filteredItems.length} sertifikat`}
          </span>
        </div>
      )}
    </div>
  );
}

