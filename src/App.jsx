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
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-clip bg-white selection:bg-primary selection:text-white">
        {/* Background Canvas Interaktif: Kinetic Grid (Warping ke Kursor & Ripple saat Klik) */}
        <KineticGridBackground />

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
    </LanguageProvider>
  );
}

export default App;
