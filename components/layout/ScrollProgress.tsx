"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-tui-green"
      style={{ scaleX }}
    />
  );
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      className="fixed bottom-6 right-6 z-50 flex size-9 items-center justify-center bg-card text-tui-green border border-white/[0.06] transition-all duration-300 text-xs rounded-sm hover:bg-tui-green/10 hover:border-tui-green/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] hover:scale-110 active:scale-95"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
}
