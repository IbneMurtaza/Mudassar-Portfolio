import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
      <Navbar />
      <main id="main">
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
