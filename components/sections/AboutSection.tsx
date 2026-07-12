"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { stats } from "@/data/config";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-3 text-[11px] text-tui-cyan/70 font-medium">
                {t.about.sectionNum}
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.about.title}
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/60">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-[10px] text-muted-foreground/40 uppercase tracking-wider">
                  {t.about.explorationTitle}
                </p>
                <div className="space-y-3">
                  {t.about.explorations.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 text-tui-cyan/60 text-xs">+</span>
                      <span className="text-sm text-foreground/60">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Stats panel */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tui-panel tui-corners">
                <div className="tui-panel-header">
                  <span className="text-[10px] text-muted-foreground/40">{t.about.profile}</span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.04]">
                  {stats.map((stat) => (
                    <div key={stat.key} className="p-5">
                      <p className="text-2xl font-bold text-foreground/80 tabular-nums">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground/40 uppercase tracking-wider">
                        {t.about.stats[stat.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
