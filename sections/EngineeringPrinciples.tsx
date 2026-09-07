"use client";

import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { principles } from "@/data/principles";
import { useState } from "react";

export function EngineeringPrinciples() {
  const [active, setActive] = useState<(typeof principles)[number]["id"]>(principles[0].id);
  const current = principles.find((p) => p.id === active) ?? principles[0];

  return (
    <section id="engineering" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Engineering Principles</SectionLabel>
        <Reveal as="h2" className="serif mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08]">
          Building systems that stay correct, inspectable, and usable.
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="divide-y divide-line border-y border-line">
            {principles.map((item) => {
              const open = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-expanded={open}
                  onClick={() => setActive(item.id)}
                  className="block w-full py-5 text-left transition-colors"
                >
                  <span className={`serif text-2xl md:text-3xl ${open ? "text-fg" : "text-faint"}`}>
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted">{item.summary}</span>
                </button>
              );
            })}
          </div>

          <div className="border border-line bg-bg-2 p-6 md:p-8">
            <p className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
              Architecture flow
            </p>
            <ol className="mt-6 space-y-2 font-mono text-xs tracking-wide text-muted">
              {current.flow.map((step, i) => (
                <li key={step} className="flex flex-col">
                  <span className="text-fg">{step}</span>
                  {i < current.flow.length - 1 ? <span className="pl-2 text-faint">↓</span> : null}
                </li>
              ))}
            </ol>
            <p className="mt-10 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
              Engineering process
            </p>
            <ol className="mt-4 space-y-2 text-sm text-muted">
              {current.process.map((step, i) => (
                <li key={step}>
                  {i + 1}. {step}
                </li>
              ))}
            </ol>
            <p className="mt-10 font-mono text-[10px] tracking-[0.22em] text-faint uppercase">Snippet</p>
            <pre className="mt-4 overflow-x-auto font-mono text-[11px] leading-6 text-muted">
              <code>{current.snippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
