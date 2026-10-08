import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
