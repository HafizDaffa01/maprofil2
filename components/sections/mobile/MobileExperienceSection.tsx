"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";

export default function MobileExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="mb-2 text-[10px] text-tui-orange/70 font-medium">
              {t.experience.sectionNum}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.experience.title}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-2 bg-white/[0.03]">
            {t.experience.entries.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-card p-4 transition-all duration-200 hover:bg-[#1a1a1a]"
              >
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium text-foreground/80">
                    {exp.role}
                  </h3>
                  <span className="shrink-0 text-[9px] text-muted-foreground/35 tabular-nums">
                    {exp.period}
                  </span>
                </div>

                <p className="mb-3 text-xs leading-relaxed text-muted-foreground/50">
                  {exp.description}
                </p>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[9px] text-tui-cyan/60 bg-tui-cyan/[0.06] rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}