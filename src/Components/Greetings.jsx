import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FolderKanban, Download } from "lucide-react";
import cvFile from "../file/CV AHMAD MAULANA.pdf";
import { useLanguage } from "../context/LanguageContext";

export default function Greetings() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-center w-full px-2 sm:px-4 lg:w-1/2 animate__animated animate__fadeInLeft">
      <h1 className="text-base font-semibold text-primary md:text-xl">
        {t.hero.greeting}{" "}
        <span className="block text-4xl font-bold text-dark lg:text-5xl">
          AHMAD MAULANA
        </span>
      </h1>
      <h2 className="mb-4 text-lg font-medium text-slate-500 lg:text-2xl min-h-[36px]">
        <Typewriter
          words={t.hero.roleWords}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </h2>
      <p className="mt-1 mb-6 font-medium leading-relaxed text-slate-400">
        {t.hero.welcome}{" "}
        <span className="font-bold text-dark">{t.hero.website}</span>
      </p>

      {/* Social Media Links & Email */}
      <div className="flex items-center gap-3 mb-6">
        <a
          href="https://github.com/amamX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center justify-center w-10 h-10 text-black transition duration-300 ease-in-out bg-white border border-slate-300 rounded-full hover:bg-black hover:text-white hover:border-black hover:shadow-md"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/amamm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center justify-center w-10 h-10 text-black transition duration-300 ease-in-out bg-white border border-slate-300 rounded-full hover:bg-black hover:text-white hover:border-black hover:shadow-md"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="mailto:lanxft1204@email.com"
          aria-label="Send Email"
          className="flex items-center justify-center w-10 h-10 text-black transition duration-300 ease-in-out bg-white border border-slate-300 rounded-full hover:bg-black hover:text-white hover:border-black hover:shadow-md"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Action Buttons: View Project (Primary) & Download CV (Secondary) */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-xl bg-primary hover:bg-blue-600 hover:shadow-lg shadow-primary/25"
        >
          <FolderKanban size={17} />
          <span>{t.hero.viewProject}</span>
        </a>

        <a
          href={cvFile}
          download="CV_Ahmad_Maulana.pdf"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 transition duration-300 ease-in-out bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 hover:shadow-md"
        >
          <Download size={17} className="text-primary" />
          <span>{t.hero.downloadCv}</span>
        </a>
      </div>
    </div>
  );
}
