"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";

export default function TinkersCorner() {
  const { t } = useLanguage();

  return (
    <section id="tinkers" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-5xl">
          {/* Header + Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-3 text-[11px] text-tui-orange/70 font-medium">
                {t.tinkers.sectionNum}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.tinkers.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground/50">
                {t.tinkers.description}
              </p>
            </div>

            {/* Logo + Founder */}
            <div className="flex shrink-0 items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/the_tinkers.png"
                alt="The Tinker's logo"
                className="size-16 object-contain invert opacity-50 sm:size-20"
              />
              <div className="border-l border-white/[0.06] pl-4">
                <p className="text-sm font-medium text-foreground/70">
                  {t.tinkers.founder}
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground/35">
                  {t.tinkers.tagline}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Points — TUI panels */}
          <div className="grid gap-4 sm:grid-cols-3">
            {t.tinkers.points.map((point, i) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group tui-panel transition-all duration-200 hover:border-tui-orange/20"
              >
                <div className="tui-panel-header justify-between">
                  <span className="text-[10px] text-tui-orange/60">
                    {point.number}
                  </span>
                  <span className="text-[9px] text-muted-foreground/25">
                    ACTIVE
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground/45">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
