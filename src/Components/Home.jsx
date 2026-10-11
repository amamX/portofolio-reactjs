import Greetings from "./Greetings";
import HeroImage from "./HeroImage";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="container max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-center w-full gap-8 lg:flex-row lg:gap-14 xl:gap-20">
          <Greetings />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}