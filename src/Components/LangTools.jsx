import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Data from "../Data";
import stick from "../img/stick.png";

export default function LangTools() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="self-center mt-16">
      <div className="flex items-center px-4 mb-8" data-aos="fade-up">
        <img src={stick} alt="" width="40" className="mr-1" />
        <h4 className="text-xl font-semibold text-dark">Language & Tools</h4>
      </div>

      <div
        className="relative w-full overflow-hidden marquee-container"
        data-aos="fade-up"
      >
        <div className="absolute top-0 left-0 z-10 w-16 h-full bg-gradient-to-r from-white to-transparent lg:w-32"></div>
        <div className="absolute top-0 right-0 z-10 w-16 h-full bg-gradient-to-l from-white to-transparent lg:w-32"></div>

        <div className="flex w-max animate-marquee">
          {[...Data, ...Data].map((skill, index) => (
            <div
              key={index}
              style={{ borderColor: skill.border }}
              className="flex flex-col items-center justify-center gap-2 mx-4 transition duration-300 ease-in-out bg-white border-2 shadow-sm w-28 h-28 shrink-0 rounded-xl hover:shadow-md hover:-translate-y-1"
            >
              <img
                src={skill.logo}
                alt={skill.title}
                className="object-contain w-10 h-10"
              />
              <span className="text-xs font-medium text-slate-500">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
