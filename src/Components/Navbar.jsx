import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, FolderKanban, Mail } from "lucide-react";
import "animate.css";
import logo from "../img/logo/iconAmam__1_-removebg-preview.png";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "contact", label: "Contact", icon: Mail },
];

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
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
    <header className="fixed z-10 flex items-center w-[90%] max-w-2xl mx-auto bg-white rounded-full shadow-lg top-4 left-0 right-0 animate__animated animate__fadeInDown">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4 ">
            <img src={logo} alt="logo" className="w-25 h-20" />
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={` absolute block right-4 lg:hidden ${isNavMenuOpen ? "hamburger-active" : ""}`}
              onClick={toggleNavMenu}
            >
              <span className="transition duration-300 ease-in-out origin-top-left hamburger-line"></span>
              <span className="transition duration-300 ease-in-out hamburger-line"></span>
              <span className="transition duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
            </button>

            <nav
              id="nav-menu"
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none animate__animated animate__fadeInRight ${isNavMenuOpen ? "" : "hidden"}`}
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
                        className={`relative z-10 flex items-center gap-2 px-4 py-2 mx-4 my-1 text-sm font-medium transition-colors duration-300 rounded-full lg:mx-0 ${
                          isActive
                            ? "text-white"
                            : "text-dark hover:text-primary"
                        }`}
                      >
                        <Icon size={16} />
                        {item.label}
                      </a>

                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 mx-4 my-1 rounded-full lg:mx-0 bg-primary"
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
