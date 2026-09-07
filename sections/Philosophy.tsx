"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

const line1 = "I enjoy building systems";
const line2 = "where complexity is hidden";
const line3 = "behind clarity, and data";
const line4 = "stays reliable under use.";

function Line({ text, delay }: { text: string; delay: number }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className="block">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block pr-[0.28em]"
          initial={reduce ? false : { opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: delay + i * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Philosophy() {
  return (
    <section className="border-t border-line px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.28em] text-faint uppercase">
          Engineering philosophy
        </p>
        <h2 className="serif mt-8 text-[clamp(2.1rem,6vw,5.2rem)] leading-[1.05]">
          <Line text={line1} delay={0} />
          <Line text={line2} delay={0.15} />
          <Line text={line3} delay={0.3} />
          <Line text={line4} delay={0.45} />
        </h2>
        <p className="mt-12 max-w-2xl text-[15px] leading-8 text-muted">
          Whether I am validating a data workflow, cleaning an image corpus, or retrieving documents for a language
          model, I care about correctness first. Performance follows from clearer logic. Interfaces exist so people can
          inspect what the system did.
        </p>
      </div>
    </section>
  );
}
