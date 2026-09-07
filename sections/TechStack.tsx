"use client";

import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { skillGroups } from "@/data/skills";
import { useState } from "react";

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Technical stack</SectionLabel>
        <Reveal as="h2" className="serif mt-6 text-[clamp(2rem,4vw,3.4rem)]">
          Tools I actually use.
        </Reveal>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
          Only technologies from my professional work and projects. No invented stacks, no percentage bars.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const dim = active !== null && active !== group.id;
            return (
              <div
                key={group.id}
                onMouseEnter={() => setActive(group.id)}
                onMouseLeave={() => setActive(null)}
                className={`border-t border-line pt-5 transition-opacity duration-300 ${dim ? "opacity-35" : "opacity-100"}`}
              >
                <h3 className="font-mono text-[11px] tracking-[0.24em] text-faint uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      title={item}
                      className="text-lg text-fg/90 transition-colors hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
