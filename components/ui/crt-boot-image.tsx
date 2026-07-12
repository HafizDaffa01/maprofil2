"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";

interface CRTBootImageProps {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
  onComplete?: () => void;
}

export const CRTBootImage = ({
  src = "/me.png",
  alt = "Profile",
  className = "",
  width = 320,
  height = 426,
  delay = 0,
  onComplete,
}: CRTBootImageProps) => {
  const [showImage, setShowImage] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    const runBoot = async () => {
      if (!mounted || hasRun) return;
      setHasRun(true);
      
      if (delay > 0) await new Promise(r => setTimeout(r, delay));
      if (!mounted) return;

      // Phase 1: Turn On (expand from center) - 1.5s
      await controls.start({
        scaleX: [0.001, 0.002, 1, 1],
        scaleY: [0.001, 0.002, 0.002, 1],
        borderRadius: ["50%", "50%", 0, 0],
        backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "#050505"],
        boxShadow: [
          "0 0 20px 10px #fff, 0 0 50px 20px #00f2ff",
          "0 0 30px 15px #fff, 0 0 80px 30px #00f2ff",
          "0 0 40px 20px #fff, 0 0 100px 40px #00f2ff",
          "none",
        ],
        opacity: [0, 1, 1, 1],
      }, {
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
      });
      if (!mounted) return;

      // Phase 2: Stable - show image
      setShowImage(true);
      await new Promise(r => setTimeout(r, 800));
      if (!mounted) return;

      // Done - stays visible with CRT effects
      onComplete?.();
    };

    runBoot();
    return () => { mounted = false; };
  }, [delay, onComplete, controls]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Vignette / Curvature Overlay - always visible */}
        <div className="pointer-events-none absolute inset-0 z-20" style={{
          background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.8) 100%)",
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
        }} />

        {/* Scanlines - always visible */}
        <div className="pointer-events-none absolute inset-0 z-10" style={{
          background: "linear-gradient(to bottom, transparent, transparent 50%, rgba(0,242,255,0.05) 50%, rgba(0,242,255,0.05))",
          backgroundSize: "100% 4px",
          opacity: 0.4,
        }} />

        {/* CRT Frame - controlled by motion */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformOrigin: "center center" }}
          animate={controls}
          initial={false}
        >
          {/* Image appears after boot */}
          {showImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          )}

          {/* Flash effect during turn-on */}
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            initial={false}
            animate={{
              filter: ["brightness(3) contrast(1.5) hue-rotate(-20deg)", "brightness(1.5) contrast(1.2)", "brightness(1) contrast(1)"]
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CRTBootImage;