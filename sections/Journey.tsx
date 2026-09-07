"use client";

import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { education, journey } from "@/data/experience";
import { useEffect, useRef, useState } from "react";

export function Journey() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.45 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="journey" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Professional Journey</SectionLabel>
        <Reveal as="h2" className="serif mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08]">
          From computer science fundamentals to production data workflows.
        </Reveal>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
          A path shaped by a CSE degree, applied project work, and a six-month internship building backend and data
          systems in Bengaluru.
        </p>

        <ol className="mt-16 space-y-0">
          {journey.map((entry, i) => (
            <li
              key={`${entry.year}-${entry.title}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`grid gap-4 border-t border-line py-10 transition-opacity duration-500 md:grid-cols-[180px_1fr] ${
                active === i ? "opacity-100" : "opacity-45"
              }`}
            >
              <div>
                <p className="serif text-xl">{entry.year}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
                  {entry.category}
                </p>
              </div>
              <div>
                <h3 className="serif text-2xl md:text-3xl">{entry.title}</h3>
                {entry.place ? <p className="mt-2 text-sm text-muted">{entry.place}</p> : null}
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{entry.description}</p>
                {entry.details ? (
                  <ul className="mt-4 max-w-2xl space-y-1 text-sm text-muted">
                    {entry.details.map((d) => (
                      <li key={d}>— {d}</li>
                    ))}
                  </ul>
                ) : null}
                {entry.technologies ? (
                  <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                    {entry.technologies.join(" · ")}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 border border-line p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">Education</p>
          <p className="serif mt-3 text-2xl">{education.degree}</p>
          <p className="mt-2 text-sm text-muted">
            {education.university}, {education.place} · {education.years} · CGPA {education.cgpa}
          </p>
        </div>
      </div>
    </section>
  );
}
