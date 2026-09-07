"use client";

import { Reveal } from "@/components/Reveal";
import { motion, useReducedMotion } from "motion/react";

const stages = [
  "Sources",
  "Ingestion",
  "Validation",
  "Transform",
  "Storage",
  "Retrieval",
  "Consumers",
];

export function ArchitectureVisual() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className="serif text-[clamp(1.8rem,3.5vw,2.8rem)]">
          How data should move.
        </Reveal>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          From intern workflows at Four Corners to project pipelines for dataset cleaning and RAG: ingest, validate,
          transform, store, then serve something a person or a model can trust.
        </p>
        <div className="mt-12 flex flex-col gap-0 md:flex-row md:items-center md:justify-between">
          {stages.map((stage, i) => (
            <div key={stage} className="flex flex-col items-start md:items-center">
              <motion.div
                className="border border-line bg-bg-2 px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase"
                initial={reduce ? false : { opacity: 0.4 }}
                animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.2, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
              >
                {stage}
              </motion.div>
              {i < stages.length - 1 ? (
                <span className="my-2 h-6 w-px bg-line md:my-0 md:h-px md:w-8 md:bg-line" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
