import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Intro() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Introduction</SectionLabel>
        <Reveal as="h2" className="serif mt-6 max-w-4xl text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]">
          Engineering is not just about writing code. It is about making systems trustworthy.
        </Reveal>
        <div className="mt-12 max-w-3xl space-y-6 text-[17px] leading-8 text-muted">
          <Reveal as="p">
            A Computer Science education at Babu Banarasi Das University taught me to treat software as a system with
            constraints: data that must stay correct, APIs that must stay clear, and interfaces that people can actually
            operate. I graduated in 2025 with a B.Tech in CSE (CGPA 7.27), and I still start from the problem domain
            before reaching for a framework.
          </Reveal>
          <Reveal as="p" delay={0.08}>
            At Four Corners Technologies I worked as a Tech Intern in Bengaluru, building{" "}
            <span className="text-fg">Python backend solutions</span>, automating{" "}
            <span className="text-fg">data workflows</span>, and implementing{" "}
            <span className="text-fg">validation and error handling</span> so processed data stayed accurate. I wrote
            optimized SQL, managed structured data, and refactored scripts to reduce execution time — the unglamorous
            work that makes operations reliable.
          </Reveal>
          <Reveal as="p" delay={0.16}>
            That same instinct shows up in my project work: cleaning image datasets before they reach a model, and
            grounding language-model answers in retrieved documents. I am drawn to pipelines, quality, and the
            architecture that keeps intelligence honest.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
