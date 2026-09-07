"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[70] h-px origin-left bg-fg/70"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
