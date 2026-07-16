import logo from "../img/logo/iconAmam__1_-removebg-preview.png";
import { useState, useEffect } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFadingOut(true), 1800);
    const removeTimer = setTimeout(() => setIsVisible(false), 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo dengan efek pulse */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-20 h-20 border-4 rounded-full border-primary/20"></div>
        <div className="absolute w-20 h-20 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </div>

      {/* Teks dengan animasi titik-titik */}
      <p className="text-sm font-medium tracking-widest uppercase text-slate-400">
        Loading
        <span className="inline-flex ml-1">
          <span className="animate-bounce [animation-delay:-0.3s]">.</span>
          <span className="animate-bounce [animation-delay:-0.15s]">.</span>
          <span className="animate-bounce">.</span>
        </span>
      </p>
    </div>
  );
}
