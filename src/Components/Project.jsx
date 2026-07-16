import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Project({ item }) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 px-6 mt-6 lg:grid-cols-2 lg:gap-6">
      {item.map((val) => (
        <a
          href={val.link}
          className="block overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-xl group hover:shadow-xl"
          key={val.id}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="relative overflow-hidden aspect-video">
            <img
              src={val.img}
              alt={val.title}
              className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold" style={{ color: val.titleColor }}>
              {val.title}
            </h2>
            <p className="mt-2 text-gray-600">{val.subtitle}</p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm font-medium text-gray-500">{val.type}</p>
              <div className="flex items-center gap-3">
                {val.tech1 && <img src={val.tech1} alt="" className="w-6 h-6" />}
                {val.tech2 && <img src={val.tech2} alt="" className="w-6 h-6" />}
                {val.tech3 && <img src={val.tech3} alt="" className="w-6 h-6" />}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

