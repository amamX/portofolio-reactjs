/* eslint-disable react/prop-types */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function SkillCard({item}){
  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])
  return(
    <div className="grid grid-cols-2 gap-4 px-4 mt-6 lg:grid-cols-4">
      {item.map((val) => (
        <div key={val.id} className={`grid-card group`} style={{ borderColor: val.border }} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <img src={val.logo} className="inline-block w-6"/>
          <h6 className="px-2 text-sm font-semibold transition-all duration-300">{val.title}</h6>
        </div>
      ))}
    </div>
  )
}