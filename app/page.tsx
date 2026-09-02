import ConsoleNav from "@/components/ConsoleNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Engagements from "@/components/Engagements";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <ConsoleNav />
      <div className="lg:pl-64">
        <Hero />
        <About />
        <Experience />
        <Engagements />
        <Capabilities />
        <Contact />
      </div>
    </main>
  );
}
