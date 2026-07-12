"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?/\\|{}[]<>";

function randomChar(): string {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export const TextHoverEffect = ({
  text,
}: {
  text: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const [bootPhase, setBootPhase] = useState<"idle" | "scramble" | "resolved">("idle");
  const [displayText, setDisplayText] = useState(text);
  const [cursorVisible, setCursorVisible] = useState(true);
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const startScramble = useCallback(() => {
    setHovered(true);
    setBootPhase("scramble");

    let iterations = 0;
    const maxIterations = text.length * 2;

    scrambleRef.current = setInterval(() => {
      iterations++;
      const progress = iterations / maxIterations;

      const scrambled = text.split("").map((originalChar, i) => {
        if (originalChar === " ") return " ";
        const charProgress = (progress * text.length - i) / text.length;
        if (charProgress > 1) return originalChar;
        if (charProgress < 0) return randomChar();
        return Math.random() > progress ? randomChar() : originalChar;
      });

      setDisplayText(scrambled.join(""));

      if (iterations >= maxIterations) {
        if (scrambleRef.current) clearInterval(scrambleRef.current);
        setDisplayText(text);
        setBootPhase("resolved");
      }
    }, 35);
  }, [text]);

  const stopScramble = useCallback(() => {
    if (scrambleRef.current) {
      clearInterval(scrambleRef.current);
      scrambleRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHovered(false);
    setBootPhase("idle");
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    return () => {
      if (scrambleRef.current) clearInterval(scrambleRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const len = text.length;
  const boxWidth = Math.max(500, len * 28);
  const boxHeight = 100;

  return (
    <div
      className="relative select-none"
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      style={{ width: "100%", maxWidth: boxWidth, height: boxHeight }}
    >
      {/* Main Text Display */}
      <div className="absolute inset-0 flex items-center">
        <div className="relative">
          {/* Phosphor glow behind text */}
          <div
            className="absolute inset-x-0 -inset-y-4 blur-2xl transition-opacity duration-500"
            style={{
              opacity: hovered ? 0.12 : 0.02,
              background: "radial-gradient(ellipse, #22c55e 0%, transparent 70%)",
            }}
          />

          {/* Characters */}
          <div className="relative flex items-center">
            {displayText.split("").map((char, i) => {
              const isResolving = bootPhase === "scramble" && char === text[i];
              return (
                <span
                  key={i}
                  className="transition-all duration-100"
                  style={{
                    fontSize: "clamp(20px, 3vw, 48px)",
                    fontWeight: 700,
                    color: isResolving ? "#22c55e" : "#d4d4d8",
                    textShadow: hovered
                      ? "0 0 4px rgba(34, 197, 94, 0.3), 0 0 12px rgba(34, 197, 94, 0.1)"
                      : "none",
                    letterSpacing: "-0.02em",
                    display: "inline-block",
                    minWidth: char === " " ? "0.3em" : undefined,
                    transform: isResolving ? "translateY(-1px)" : "none",
                  }}
                >
                  {char}
                </span>
              );
            })}

            {/* Blinking cursor */}
            <motion.span
              className="ml-0.5"
              style={{
                fontSize: "clamp(20px, 3vw, 48px)",
                fontWeight: 700,
                color: "#22c55e",
                textShadow: "0 0 4px rgba(34, 197, 94, 0.5)",
                opacity: cursorVisible ? 1 : 0,
              }}
              animate={hovered ? { opacity: [1, 0, 1] } : {}}
              transition={hovered ? { duration: 0.53, repeat: Infinity } : {}}
            >
              _
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};
