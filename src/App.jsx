import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import KineticGridBackground from "./Components/KineticGridBackground";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function MainContent() {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white dark:bg-[#0b1120] text-slate-800 dark:text-slate-100 selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Background Canvas Interaktif: Kinetic Grid (Warping ke Kursor & Ripple saat Klik) */}
      <KineticGridBackground
        gridColor={isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(148, 163, 184, 0.18)"}
        dotColor={isDark ? "rgba(148, 163, 184, 0.22)" : "rgba(100, 116, 139, 0.28)"}
        activeDotColor={isDark ? "rgba(56, 189, 248, 1)" : "rgba(14, 165, 233, 0.95)"}
        activeLineColor={isDark ? "rgba(56, 189, 248, 0.65)" : "rgba(56, 189, 248, 0.55)"}
      />

      <Loading />
      <Navbar />
      <div className="relative z-10">
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Inisialisasi AOS secara terpusat dengan konfigurasi ramah layar mobile
    Aos.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true, // Mencegah elemen hilang kembali saat scroll di mobile
      offset: 40, // Trigger animasi lebih cepat saat elemen mulai masuk viewport
      delay: 0,
      mirror: false,
    });

    // Refresh kalkulasi posisi elemen setelah animasi Loading selesai (2.3s)
    const refreshTimer = setTimeout(() => {
      Aos.refresh();
    }, 2400);

    const handleResize = () => {
      Aos.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
