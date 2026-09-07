"use client";

import { profile } from "@/data/profile";
import { ease } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-5 pt-28 pb-8 md:px-10 md:pt-32 md:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,255,255,0.06),transparent_50%)]" />

      <motion.p
        aria-hidden
        className="serif pointer-events-none absolute top-[-4%] right-[-6%] text-[28vw] leading-none text-fg/[0.045] select-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease }}
      >
        {profile.firstName.toUpperCase()}
      </motion.p>
      <motion.p
        aria-hidden
        className="serif pointer-events-none absolute bottom-[-8%] left-[-8%] text-[26vw] leading-none text-fg/[0.04] select-none"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.15, ease }}
      >
        {profile.lastName.toUpperCase()}
      </motion.p>

      <div className="relative z-10 max-w-xl">
        <motion.p
          className="font-mono text-[11px] tracking-[0.32em] text-muted uppercase"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {profile.title}
        </motion.p>
        <motion.h1
          className="serif mt-5 max-w-4xl text-[clamp(2.4rem,7vw,6.4rem)] leading-[0.95] tracking-tight"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
        >
          {profile.headline}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-lg text-[15px] leading-7 text-muted md:text-base"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          <a
            href="#work"
            data-cursor="VIEW"
            className="border border-fg bg-fg px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-bg uppercase transition-opacity hover:opacity-80"
          >
            View my work
          </a>
          <a
            href={profile.resumePath}
            download
            className="border border-line px-5 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-fg"
          >
            Download resume
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 flex items-end justify-between gap-6">
        <p className="serif hidden max-w-sm text-sm text-muted italic md:block">
          {profile.location}
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.32em] text-faint uppercase">
            Scroll
          </span>
          <span className="h-10 w-px bg-fg/40" />
        </div>
        <div className="text-right">
          <p className="serif text-2xl">{profile.heroMeta.year}</p>
          <ul className="mt-2 space-y-1">
            {profile.heroMeta.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[10px] tracking-[0.22em] text-faint uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
