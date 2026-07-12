"use client";

import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { CRTBootImage } from "./crt-boot-image";

export function TiltPortrait({ src = "/me.png" }: { src?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!bootComplete) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY, bootComplete]);

  const handleMouseEnter = useCallback(() => {
    if (bootComplete) setHovered(true);
  }, [bootComplete]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center"
    >
      <div
        ref={containerRef}
        className="relative w-full tui-corners"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`tui-panel overflow-hidden transition-shadow duration-500 ${hovered && bootComplete ? "border-white/[0.1]" : ""}`}>
          <div className="tui-panel-header justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="size-2 bg-white/[0.06]" />
                <div className="size-2 bg-white/[0.06]" />
                <div className="size-2 bg-white/[0.06]" />
              </div>
              <span className="text-[10px] text-muted-foreground/40 ml-1">me.png</span>
            </div>
          </div>

          <CRTBootImage
            src={src}
            alt="Hafiz Daffa W."
            width={320}
            height={426}
            delay={200}
            onComplete={() => setBootComplete(true)}
          />

          <div className="flex items-center justify-between border-t border-white/[0.04] px-3 py-1.5">
            <span className="text-[9px] text-muted-foreground/25">me.png</span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-muted-foreground/20">RGB</span>
              <div className="flex items-center gap-1.5">
                <div className="size-1 rounded-full bg-tui-cyan/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TiltPortrait;