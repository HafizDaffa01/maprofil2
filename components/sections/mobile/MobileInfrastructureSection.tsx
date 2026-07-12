"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";

export default function MobileInfrastructureSection() {
  const { t } = useLanguage();

  return (
    <section id="infra" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="mb-3 text-[10px] text-tui-cyan/70 font-medium">
              {t.infra.sectionNum}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.infra.title}
            </h2>
          </motion.div>

          {/* Environment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="tui-panel mb-4"
          >
            <div className="tui-panel-header">
              <span className="text-[9px] text-tui-cyan/60">{t.infra.environment.title}</span>
            </div>
            <div className="p-4">
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground/45">
                {t.infra.environment.desc}
              </p>
              <div className="space-y-2">
                {t.infra.environment.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className="p-3 bg-white/[0.02] border border-white/[0.03] transition-colors hover:bg-white/[0.05]"
                  >
                    <p className="text-[11px] font-medium text-foreground/70">{item.name}</p>
                    <p className="mt-1 text-[9px] text-muted-foreground/35">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="tui-panel"
          >
            <div className="tui-panel-header">
              <span className="text-[9px] text-tui-orange/60">{t.infra.tools.title}</span>
            </div>
            <div className="p-4">
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground/45">
                {t.infra.tools.desc}
              </p>
              <div className="space-y-3">
                {t.infra.tools.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 text-tui-orange/60 text-[10px]">+</span>
                    <div>
                      <p className="text-[11px] font-medium text-foreground/70">{item.name}</p>
                      <p className="text-[9px] text-muted-foreground/40">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}