"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/context";
import { site, socials } from "@/data/config";

const TiltPortrait = dynamic(
  () => import("@/components/ui/tilt-portrait").then((m) => m.TiltPortrait),
  { ssr: false },
);

const TextHoverEffect = dynamic(
  () => import("@/components/ui/text-hover-effect").then((m) => m.TextHoverEffect),
  { ssr: false },
);

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center">
        {/* LEFT — Content */}
        <div className="w-full lg:w-[55%] section-px py-24">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Terminal prompt */}
              <div className="mb-6 flex items-center gap-2">
                <span className="text-tui-green text-sm font-medium">$</span>
                <span className="text-sm text-muted-foreground">
                  {t.hero.whoami}
                </span>
                <span className="tui-cursor text-tui-green text-sm">|</span>
              </div>

              {/* Name */}
              <div className="mb-6">
                <Suspense fallback={<div className="h-20" />}>
                  <TextHoverEffect text={site.fullName} />
                </Suspense>
              </div>

              {/* Role */}
              <p className="mb-3 text-sm text-tui-green/70 font-medium">
                {t.hero.role}
              </p>

              {/* Description */}
              <p className="mb-12 max-w-lg text-sm leading-relaxed text-muted-foreground/50">
                {t.hero.description}
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-3">
                <Button
                  size="lg"
                  className="group gap-2 px-6 bg-tui-green text-black font-medium rounded-sm transition-all duration-300 text-xs uppercase tracking-wider hover:bg-tui-green/80 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.hero.aboutMe}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2 px-6 rounded-sm border-white/10 text-muted-foreground transition-all duration-300 text-xs uppercase tracking-wider hover:text-tui-green hover:border-tui-green/40 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => window.open(socials.github, "_blank")}
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t.hero.github}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2 px-6 rounded-sm border-white/10 text-muted-foreground transition-all duration-300 text-xs uppercase tracking-wider hover:text-tui-cyan hover:border-tui-cyan/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => window.open(`mailto:${socials.email}`, "_blank")}
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {t.hero.email}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group gap-2 px-6 rounded-sm border-white/10 text-muted-foreground transition-all duration-300 text-xs uppercase tracking-wider hover:text-tui-orange hover:border-tui-orange/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => window.open(socials.instagram, "_blank")}
                >
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  {t.hero.instagram}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — Portrait */}
        <div className="hidden lg:flex w-[45%] h-screen items-center justify-center relative px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[320px]"
          >
            <Suspense fallback={
              <div className="w-full aspect-[3/4] bg-card border border-white/[0.06] flex items-center justify-center rounded-sm">
                <span className="text-xs text-muted-foreground/40">{t.hero.loading}</span>
              </div>
            }>
              <TiltPortrait />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground/20"
        >
          <span className="text-[10px] uppercase tracking-widest">{t.hero.scroll}</span>
          <span className="text-xs">v</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
