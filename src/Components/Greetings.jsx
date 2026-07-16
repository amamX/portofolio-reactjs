import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FolderKanban } from "lucide-react";

export default function Greetings() {
  return (
    <div className="self-center w-full px-4 lg:w-1/2 animate__animated animate__fadeInLeft">
      <h1 className="text-base font-semibold text-primary md:text-xl">
        Hello Everyone 👋, I&apos;m{" "}
        <span className="block text-4xl font-bold text-dark lg:text-5xl">
          AHMAD MAULANA
        </span>
      </h1>
      <h2 className="mb-5 text-lg font-medium text-slate-500 lg:text-2xl">
        <Typewriter
          words={["Frontend Engineer", "UI/UX Enthusiast", "Web Developer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </h2>
      <p className="mt-1 mb-5 font-medium leading-relaxed text-slate-400">
        Welcome to My Personal{" "}
        <span className="font-bold text-dark">Website</span>
      </p>

      <div className="flex items-center gap-3 mb-6">
        <a
          href="https://github.com/amamX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-black transition duration-300 ease-in-out bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-lg"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/amamm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-black transition duration-300 ease-in-out bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-lg"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-xl bg-primary hover:shadow-lg hover:opacity-80"
        >
          <FolderKanban size={18} />
          View Project
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black transition duration-300 ease-in-out bg-white border-2 border-black rounded-xl hover:bg-black hover:text-white hover:shadow-lg"
        >
          <Mail size={18} />
          Contact Me
        </a>
      </div>
    </div>
  );
}
