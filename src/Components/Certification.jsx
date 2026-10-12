import { useState } from "react";
import {
  ExternalLink,
  Download,
  Eye,
  X,
  Calendar,
  CheckCircle2,
  Award,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Galeri Sertifikat Interaktif & Modal Viewer PDF.
 * Menampilkan:
 * - Cover thumbnail sertifikat dengan efek hover halus
 * - Badge penerbit resmi (Dicoding, AWS, Google Cloud, BEM, Camp404, dll.)
 * - Tombol "Buka Preview" (membuka modal PDF interaktif dengan iframe di dalam website)
 * - Tombol "Unduh PDF" dan "Verifikasi Online" (langsung ke dicoding.com)
 */
export default function Certification({ item }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const { t } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {item.map((val, idx) => {
          const hasPdf = Boolean(val.pdfUrl);

          return (
            <div
              key={val.id}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="group flex flex-col overflow-hidden bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Gambar / Cover Thumbnail Sertifikat */}
              <div
                className="relative overflow-hidden aspect-[16/11] bg-slate-100 dark:bg-slate-800 cursor-pointer"
                onClick={() => setSelectedCert(val)}
              >
                <img
                  src={val.img}
                  alt={val.title}
                  loading="lazy"
                  className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay saat hover dengan tombol Preview */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-dark/50 dark:bg-black/60 backdrop-blur-[2px] group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-xl bg-white/20 dark:bg-slate-900/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg">
                    <Eye size={15} />
                    <span>{t.certificates?.previewPdf || "Lihat Sertifikat"}</span>
                  </span>
                </div>

                {/* Badge Kategori / Penerbit di Pojok Kiri Atas */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/60 dark:border-slate-700/80">
                    {val.logo && (
                      <img
                        src={val.logo}
                        alt=""
                        className="w-3.5 h-3.5 object-contain rounded-sm"
                      />
                    )}
                    <span>{val.issuer || val.category}</span>
                  </span>
                </div>
              </div>

              {/* Konten Kartu Sertifikat */}
              <div className="flex flex-col flex-1 p-5">
                <h4
                  onClick={() => setSelectedCert(val)}
                  className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-sky-400 transition-colors cursor-pointer line-clamp-2 mb-2"
                >
                  {val.title}
                </h4>

                {/* Informasi Tanggal & Kode */}
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400 dark:text-slate-500" />
                    <span>{val.date}</span>
                  </div>
                  {val.code && (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      #{val.code}
                    </span>
                  )}
                </div>

                {/* Skill Pills */}
                {val.skills && (
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {val.skills.slice(0, 3).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200/60 dark:border-slate-700/80"
                      >
                        {sk}
                      </span>
                    ))}
                    {val.skills.length > 3 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 rounded-md">
                        +{val.skills.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Tombol Aksi Bagian Bawah */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  {/* Tombol Preview Modal */}
                  <button
                    onClick={() => setSelectedCert(val)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white rounded-lg bg-primary hover:bg-blue-600 transition-colors shadow-xs"
                  >
                    <Eye size={13} />
                    <span>{t.certificates?.previewPdf || "Lihat"}</span>
                  </button>

                  {/* Tombol Unduh PDF jika tersedia */}
                  {hasPdf && (
                    <a
                      href={val.pdfUrl}
                      download
                      aria-label="Unduh PDF"
                      className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-dark dark:hover:text-white rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/80"
                      title={t.certificates?.downloadPdf || "Unduh PDF"}
                    >
                      <Download size={15} />
                    </a>
                  )}

                  {/* Tombol Verifikasi Online Dicoding */}
                  {val.verifyUrl && (
                    <a
                      href={val.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Verifikasi Online"
                      className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-dark dark:hover:text-white rounded-lg transition-colors border border-slate-200/60 dark:border-slate-700/80"
                      title={t.certificates?.verify || "Verifikasi Online"}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Popup Viewer Interaktif */}
      {selectedCert && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate__animated animate__fadeIn animate__faster">
          <div className="relative flex flex-col w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 shrink-0">
                  <Award size={18} />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate sm:text-base">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {selectedCert.issuer} · {selectedCert.date}
                  </p>
                </div>
              </div>

              {/* Tombol Close */}
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg transition-colors ml-2"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Badan Modal (Iframe PDF atau Gambar) */}
            <div className="flex-1 overflow-auto bg-slate-900/95 flex items-center justify-center min-h-[400px]">
              {selectedCert.pdfUrl ? (
                <iframe
                  src={`${selectedCert.pdfUrl}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-[65vh] border-0"
                />
              ) : (
                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="object-contain max-h-[70vh] w-auto mx-auto p-4"
                />
              )}
            </div>

            {/* Footer Modal dengan Aksi Lengkap */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                {selectedCert.code && (
                  <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    ID: {selectedCert.code}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    <Download size={14} />
                    <span>{t.certificates?.downloadPdf || "Unduh PDF"}</span>
                  </a>
                )}

                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-primary hover:bg-blue-600 rounded-lg transition-colors shadow-sm"
                  >
                    <CheckCircle2 size={14} />
                    <span>{t.certificates?.verify || "Verifikasi Resmi"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

