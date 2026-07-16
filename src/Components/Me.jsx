import Dep from "../img/amamFotoWeb2.jpeg";
import ChatBot from "../img/chatbot.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Me() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const skills = [
    { name: "Tailwind", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    {
      name: "Bootstrap",
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      name: "JavaScript",
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    { name: "React.js", color: "bg-sky-50 text-sky-600 border-sky-200" },
    { name: "UI/UX", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "Figma", color: "bg-red-50 text-red-600 border-red-200" },
  ];

  const stats = [
    { label: "Projects Built", value: "10+" },
    { label: "Tech Stacks", value: "6+" },
    { label: "Focus", value: "Frontend" },
  ];

  return (
    <div
      className="self-center rounded-lg lg:w-[85%] mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-10 text-center lg:mb-14">
        <img
          src={ChatBot}
          alt="Chatbot"
          className="hidden w-14 mb-2 lg:block lg:animate-bounce"
        />
        <span className="text-sm font-semibold tracking-widest uppercase text-primary">
          Get To Know
        </span>
        <h4 className="text-3xl font-bold text-dark lg:text-5xl">About Me</h4>
      </div>

      <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* FOTO */}
        <div className="flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full lg:rounded-2xl bg-cyan-400/30 blur-[70px] -z-20"></div>

            <div className="absolute inset-0 p-[3px] rounded-full lg:rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
              <div className="w-full h-full bg-white rounded-full lg:rounded-2xl"></div>
            </div>

            <motion.img
              src={Dep}
              alt="Profile"
              className="relative z-10 object-cover object-top rounded-full lg:rounded-2xl aspect-square w-64 lg:w-full"
              style={{ transform: "translateZ(40px)" }}
            />

            <div className="absolute inset-0 rounded-full lg:rounded-2xl bg-gradient-to-tr from-white/40 via-transparent to-transparent mix-blend-screen pointer-events-none"></div>
          </motion.div>
        </div>

        {/* TEXT */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-dark lg:text-3xl">
            Turning Ideas Into{" "}
            <span className="text-primary">Interactive Experiences</span>
          </h3>

          <p className="mb-3 text-base leading-relaxed text-slate-500">
            I'm an Informatics Engineering student with a strong passion for
            front-end web development — where design meets logic, and static
            mockups turn into interfaces people can actually click, scroll, and
            enjoy.
          </p>

          <p className="mb-6 text-base leading-relaxed text-slate-500">
            My focus lies in converting{" "}
            <span className="font-semibold text-dark">Figma</span> designs into
            pixel-accurate, responsive, and user-friendly websites — combining
            clean code with smooth, meaningful interactions.
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-1.5 text-sm font-medium border rounded-full ${skill.color}`}
              >
                {skill.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-dark lg:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
