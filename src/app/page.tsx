import { Header } from "@/components";
import { Hero } from "./_components";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/hero.png')] h-full bg-cover bg-center bg-no-repeat">
        <Header />
        <Hero />
      </div>
    </>
  );
}
