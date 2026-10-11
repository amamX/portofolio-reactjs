import { useState } from "react";
import CerData from "../CerData";
import Certification from "./Certification";
import { Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CertifSection() {
  const [activeTab, setActiveTab] = useState("all");
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

  return (
    <div id="certificates" className="self-center mt-20 lg:mt-24">
      {/* Header Bagian Sertifikasi */}
      <div className="flex flex-col items-center mb-10 text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          <Award size={14} className="text-primary" />
          <span>{t.certificates?.badge || "KREDENSIAL & LISENSI"}</span>
        </div>
        <h3 className="text-2xl font-extrabold text-dark md:text-3xl lg:text-4xl">
          {t.certificates?.title || "Sertifikasi & Pencapaian"}
        </h3>
        <p className="max-w-2xl mt-2 text-xs md:text-sm font-normal text-slate-500">
          {t.certificates?.subtitle ||
            "Sertifikat kompetensi terverifikasi industri, kelulusan kurikulum Dicoding, AWS, Google Cloud, serta penghargaan kompetisi."}
        </p>

        {/* Tab Filter Kategori */}
        <div className="inline-flex items-center p-1.5 mt-6 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${
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

      {/* Grid Kartu Sertifikat Interaktif & Modal Viewer */}
      <Certification item={filteredItems} />
    </div>
  );
}

