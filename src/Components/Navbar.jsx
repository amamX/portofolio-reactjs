import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, FolderKanban, Mail, Sun, Moon } from "lucide-react";
import "animate.css";
import logo from "../img/logo/iconAmam__1_-removebg-preview.png";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const SECTION_IDS = ["home", "about", "projects", "contact"];

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: t.navbar.home, icon: Home },
    { id: "about", label: t.navbar.about, icon: User },
    { id: "projects", label: t.navbar.projects, icon: FolderKanban },
    { id: "contact", label: t.navbar.contact, icon: Mail },
  ];

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header className="fixed z-50 flex items-center w-[94%] max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-lg dark:shadow-slate-950/60 border border-slate-100 dark:border-slate-800 top-4 left-0 right-0 animate__animated animate__fadeInDown transition-colors duration-300">
      <div className="container px-2 sm:px-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center px-2 py-1">
            <a href="#home" className="flex items-center group">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          <div className="flex items-center gap-2">
            {/* Navigasi Desktop & Menu Dropdown Mobile */}
            <nav
              id="nav-menu"
              className={`absolute py-5 bg-white dark:bg-slate-900 shadow-xl dark:shadow-slate-950/80 rounded-2xl max-w-[200px] w-full right-2 top-full lg:block lg:static lg:bg-transparent lg:dark:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:py-0 border border-slate-100 dark:border-slate-800 lg:border-none animate__animated animate__fadeInRight ${
                isNavMenuOpen ? "" : "hidden"
              }`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id} className="relative">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setIsNavMenuOpen(false)}
                        className={`relative z-10 flex items-center gap-2 px-3.5 py-1.5 mx-3 my-1 text-sm font-medium transition-colors duration-300 rounded-full lg:mx-0 ${
                          isActive
                            ? "text-white"
                            : "text-dark dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                        }`}
                      >
                        <Icon size={15} />
                        {item.label}
                      </a>

                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 mx-3 my-1 rounded-full lg:mx-0 bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Toggle Tema (Dark / Light Mode) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Mode Terang" : "Mode Gelap"}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:text-dark dark:hover:text-amber-300 border border-slate-200/80 dark:border-slate-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs"
            >
              {isDark ? (
                <Sun size={15} className="transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
              ) : (
                <Moon size={15} className="transition-transform duration-300 text-slate-700" />
              )}
            </button>

            {/* Toggle Pengubah Bahasa (ID | EN) */}
            <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200/80 dark:border-slate-700 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                aria-label="Bahasa Indonesia"
                className={`px-2 py-1 rounded-full transition-all duration-200 ${
                  language === "id"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-dark dark:hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label="English"
                className={`px-2 py-1 rounded-full transition-all duration-200 ${
                  language === "en"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-dark dark:hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Button untuk Mobile */}
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block lg:hidden p-1.5 ${
                isNavMenuOpen ? "hamburger-active" : ""
              }`}
              onClick={toggleNavMenu}
              aria-label="Toggle Navigation"
            >
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
