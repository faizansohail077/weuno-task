import { Header } from "@/components";
import { Experience, General, Hero, Place, Possibilities } from "./_components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/hero.png')] h-full bg-cover bg-center bg-no-repeat">
        <Header />
        <Hero />
      </div>
      <div className="bg-custom-gradient bg-no-repeat bg-padding-box">
        <Possibilities />
        <General/>
        <Experience/>
        <Place/>
      </div>
    </>
  );
}
