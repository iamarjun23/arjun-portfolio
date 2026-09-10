import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Nav } from "@/components/Nav";
import { Proof } from "@/components/Proof";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Proof />
        <Metrics />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <CursorGlow />
    </>
  );
}
