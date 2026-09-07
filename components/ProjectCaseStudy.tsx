"use client";

import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="group border-t border-line py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal className="relative overflow-hidden border border-line bg-bg-2">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
              Case study
            </span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              {project.title}
            </span>
          </div>
          <div className="aspect-[16/10] p-6 text-muted transition-transform duration-700 group-hover:scale-[1.02]">
            <ProjectVisual kind={project.visual} />
          </div>
        </Reveal>

        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-faint transition-transform duration-500 group-hover:-translate-y-0.5">
            {project.number.split("").join(" ")}
          </p>
          <h3 className="serif mt-3 text-3xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{project.description}</p>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">Context</dt>
              <dd className="mt-2 text-sm leading-7 text-muted">{project.context}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
                Architecture
              </dt>
              <dd className="mt-2 text-sm leading-7 text-muted">{project.architecture}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
                Challenges
              </dt>
              <dd className="mt-2">
                <ul className="space-y-2 text-sm leading-7 text-muted">
                  {project.challenges.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">Outcome</dt>
              <dd className="mt-2 text-sm leading-7 text-muted">{project.outcome}</dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-muted uppercase transition-colors group-hover:border-fg/25"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
            Selected work
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </p>
        </div>
      </div>
    </article>
  );
}
