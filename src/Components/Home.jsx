import Greetings from "./Greetings"
import HeroImage from "./HeroImage"

export default function Home() {
  return (
    <section id="home" className="pt-28 lg:h-[100vh]">
      <div className="container">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <HeroImage />
          <Greetings />
        </div>
      </div>
    </section>
  )
}