import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProjData from "../ProjData";
import building from "../img/projects.png";
import Project from "./Project";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("website");
  const items = ProjData;

  const filteredItems = items.filter(
    (item) => item.category.toLowerCase() === activeCategory.toLowerCase(),
  );

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <section id="projects" className="pt-24 pb-24">
      <div className="container">
        <div className="self-center">
          <div className="flex items-center px-4 mb-8" data-aos="fade-up">
            <img src={building} alt="" className="w-[40px] pl-2 mr-1" />
            <h4 className="text-xl font-semibold text-dark">Projects</h4>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex px-4 mt-2">
            <button
              onClick={() => setActiveCategory("website")}
              className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
                activeCategory === "website"
                  ? "bg-primary text-white"
                  : "transition-colors duration-500 hover:bg-primary hover:text-white"
              }`}
            >
              Website
            </button>
            <button
              onClick={() => setActiveCategory("ui/ux")}
              className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
                activeCategory === "ui/ux"
                  ? "bg-primary text-white"
                  : "transition-colors duration-500 hover:bg-primary hover:text-white"
              }`}
            >
              UI/UX
            </button>
          </div>

          <Project item={filteredItems} />
        </div>
      </div>
    </section>
  );
}
