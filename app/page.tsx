import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArchitectureVisual } from "@/sections/ArchitectureVisual";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { EngineeringPrinciples } from "@/sections/EngineeringPrinciples";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Intro } from "@/sections/Intro";
import { Journey } from "@/sections/Journey";
import { Metrics } from "@/sections/Metrics";
import { Philosophy } from "@/sections/Philosophy";
import { SelectedWork } from "@/sections/SelectedWork";
import { TechStack } from "@/sections/TechStack";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <SelectedWork />
        <EngineeringPrinciples />
        <ArchitectureVisual />
        <TechStack />
        <Journey />
        <Certifications />
        <Philosophy />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
