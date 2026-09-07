import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Selected Work</SectionLabel>
        <Reveal as="h2" className="serif mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08]">
          Systems engineered for cleaner data and grounded intelligence.
        </Reveal>
        <div className="mt-6">
          {projects.map((project) => (
            <ProjectCaseStudy key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
