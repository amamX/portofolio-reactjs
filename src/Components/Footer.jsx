import logo from "../img/logo/iconAmam__1_-removebg-preview.png";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

/**
 * Komponen Footer minimalis & elegan sesuai referensi visual.
 * Menampilkan:
 * - Sisi Kiri: Teks "Dibuat oleh" diikuti kapsul rounded-full berisi logo AM, teks "amam",
 *   garis pemisah vertikal, serta ikon Instagram, LinkedIn, dan GitHub.
 * - Sisi Kanan: Teks hak cipta tahun 2026 dan deskripsi portofolio personal.
 */
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-6 sm:py-7 bg-black border-t border-zinc-800/80">
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Sisi Kiri: Teks Dibuat oleh + Kapsul Profil & Sosmed */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-normal sm:text-sm text-zinc-400">
              {t.footer?.createdBy || "Dibuat oleh"}
            </span>

            {/* Kapsul Profil Brand amam */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-inner">
              {/* Logo AM */}
              <img
                src={logo}
                alt="amam logo"
                className="object-contain w-5 h-5 brightness-110"
              />

              {/* Nama Brand */}
              <span className="text-xs font-bold tracking-tight text-white sm:text-sm">
                {t.footer?.brandName || "amam"}
              </span>

              {/* Garis Pemisah Vertikal */}
              <span className="w-[1px] h-3.5 bg-zinc-700 mx-0.5" />

              {/* Ikon Sosial Media Interaktif */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com/lanzrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  <FiInstagram size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/amamm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  <FiLinkedin size={14} />
                </a>

                <a
                  href="https://github.com/amamX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  <FiGithub size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Teks Hak Cipta & Informasi Portofolio */}
          <div className="text-center sm:text-right">
            <p className="text-xs font-normal sm:text-sm text-zinc-400">
              {t.footer?.copyright ||
                "© 2026 Ahmad Maulana. Platform portofolio & karya digital."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

