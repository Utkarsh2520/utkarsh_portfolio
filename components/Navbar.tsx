"use client";

import { profile } from "@/data/profile";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="serif text-lg tracking-tight">
            {profile.name.replace(" ", "").toUpperCase()}
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumePath}
              download
              className="hidden border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-fg hover:text-bg md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pt-24 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile">
              {profile.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="serif text-4xl"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={profile.resumePath}
              download
              className="font-mono text-xs tracking-[0.2em] uppercase"
              onClick={() => setOpen(false)}
            >
              Download resume
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
