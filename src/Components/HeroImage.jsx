import { useRef, useState } from "react";
import Computer from "../img/amamFP.jpeg";

export default function HeroImage() {
  const cardRef = useRef(null);

  const [style, setStyle] = useState({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 20px 40px rgba(0,0,0,.25)",
  });

  const [glare, setGlare] = useState({
    background:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,.35), transparent 60%)",
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;

    setStyle({
      transform: `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `,
      boxShadow: `
        ${-rotateY * 2}px
        ${rotateX * 2 + 25}px
        60px rgba(0,0,0,.35)
      `,
    });

    setGlare({
      background: `radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,.45),
      transparent 55%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 20px 40px rgba(0,0,0,.25)",
    });

    setGlare({
      background:
        "radial-gradient(circle at 50% 50%, rgba(255,255,255,.35), transparent 60%)",
    });
  };

  return (
    <div className="self-center w-full px-4 lg:w-1/2 animate__animated animate__fadeInRight">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="
          relative
          mx-auto
          w-fit
          rounded-3xl
          transition-all
          duration-200
          ease-out
          cursor-pointer
          [transform-style:preserve-3d]
          floating
        "
      >
        {/* Glow belakang */}
        <div className="absolute inset-0 -z-20 rounded-3xl bg-cyan-500/30 blur-[80px]"></div>

        {/* Glow kedua */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-500/20 blur-3xl"></div>

        {/* Foto */}
        <img
          src={Computer}
          alt="Computer"
          className="
            md:max-w-lg
            rounded-3xl
            border border-white/10
            select-none
            pointer-events-none
            relative
            z-10
            object-cover
          "
        />

        {/* Glass Reflection */}
        <div
          style={glare}
          className="
            absolute
            inset-0
            rounded-3xl
            mix-blend-screen
            pointer-events-none
            z-20
            transition-all
            duration-150
          "
        ></div>

        {/* Border Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-3xl
            border
            border-cyan-400/20
            pointer-events-none
            z-30
          "
        ></div>
      </div>
    </div>
  );
}
