"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";

export default function InfrastructureSection() {
  const { t } = useLanguage();

  return (
    <section id="infra" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <p className="mb-3 text-[11px] text-tui-cyan/70 font-medium">
              {t.infra.sectionNum}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.infra.title}
            </h2>
          </motion.div>

          {/* Environment + Tools grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Environment */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="tui-panel"
            >
              <div className="tui-panel-header">
                <span className="text-[10px] text-tui-cyan/60">{t.infra.environment.title}</span>
              </div>
              <div className="p-5">
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground/55">
                  {t.infra.environment.desc}
                </p>
                <div className="grid grid-cols-2 gap-px bg-white/[0.03]">
                  {t.infra.environment.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.04 }}
                      className="bg-card p-4 transition-all duration-200 hover:bg-[#1a1a1a]"
                    >
                      <p className="text-xs font-medium text-foreground/70">{item.name}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground/35">{item.desc}</p>
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
                <span className="text-[10px] text-tui-orange/60">{t.infra.tools.title}</span>
              </div>
              <div className="p-5">
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground/55">
                  {t.infra.tools.desc}
                </p>
                <div className="flex flex-col gap-3">
                  {t.infra.tools.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 text-tui-orange/60 text-xs">+</span>
                      <div>
                        <p className="text-sm font-medium text-foreground/70">{item.name}</p>
                        <p className="text-[10px] text-muted-foreground/40">{item.desc}</p>
                      </div>
                    </motion.div>
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
