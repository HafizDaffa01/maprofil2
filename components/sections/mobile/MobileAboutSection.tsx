"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { stats } from "@/data/config";

export default function MobileAboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[10px] text-tui-cyan/70 font-medium">
              {t.about.sectionNum}
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              {t.about.title}
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground/60 mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-[9px] text-muted-foreground/40 uppercase tracking-wider">
                {t.about.explorationTitle}
              </p>
              <div className="space-y-2">
                {t.about.explorations.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 text-tui-cyan/60 text-[10px]">+</span>
                    <span className="text-[12px] text-foreground/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tui-panel">
              <div className="tui-panel-header">
                <span className="text-[9px] text-muted-foreground/40">{t.about.profile}</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.04]">
                {stats.map((stat) => (
                  <div key={stat.key} className="p-4">
                    <p className="text-xl font-bold text-foreground/80 tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[9px] text-muted-foreground/40 uppercase tracking-wider">
                      {t.about.stats[stat.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}