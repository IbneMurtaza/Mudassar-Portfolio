import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Record } from "@/components/sections/Record";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg">
      <ParticlesBackground className="fixed inset-0 z-0" />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Record />
        <Skills />
        <Experience />
        <Projects />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
