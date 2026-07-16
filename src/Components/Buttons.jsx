/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Data from "../Data";

export default function Buttons({ menuItems, filterItems, setItems }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (val) => {
    setActiveButton(val);
    filterItems(val);
  };

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="flex px-4 mt-2">
      <button
        className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
          activeButton === null
            ? "bg-primary text-white"
            : "transition-colors duration-500 hover:bg-primary hover:text-white"
        }`}
        data-aos="fade-up"
        onClick={() => {
          setActiveButton(null);
          setItems(Data);
        }}
      >
        All
      </button>
      {menuItems.map((val) => (
        <button
          data-aos="fade-up"
          key={val}
          className={`p-1 px-2 text-[12px] md:text-[14px] mx-1 font-medium rounded-sm border-primary text-primary border-[1px] ${
            activeButton === val
              ? "bg-primary text-white"
              : "transition-colors duration-500 hover:bg-primary hover:text-white"
          }`}
          onClick={() => handleClick(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
