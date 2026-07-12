"use client";

import React from "react";
import { motion } from "motion/react";
import { techCategories } from "@/data/techstack";
import { useLanguage } from "@/i18n/context";

const proficiencyConfig = {
  core: { symbol: "■", color: "text-foreground" },
  advanced: { symbol: "◧", color: "text-muted-foreground" },
  learning: { symbol: "□", color: "text-tui-cyan" },
};

export default function MobileTechStack() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="relative section-py">
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
              {t.tech.sectionNum}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.tech.title}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            {techCategories.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: catIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[9px] text-tui-cyan/40">
                    {String(catIdx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.04]" />
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground/40">
                    {category.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/[0.03]">
                  {category.items.map((item, itemIdx) => {
                    const config = proficiencyConfig[item.proficiency];
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: itemIdx * 0.015 }}
                        className="group bg-card p-3 transition-all duration-200 hover:bg-[#1a1a1a]"
                      >
                        <div className="flex items-baseline justify-between">
                          <span className="text-[10px] font-medium text-foreground/60 transition-colors group-hover:text-foreground">
                            {item.name}
                          </span>
                          <span className={`text-[8px] ${config.color}`}>
                            {config.symbol}
                          </span>
                        </div>
                        <span className="mt-1 block text-[8px] text-muted-foreground/30 uppercase tracking-wider">
                          {t.tech.proficiency[item.proficiency]}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.04] pt-5"
          >
            <span className="text-[9px] text-muted-foreground/30 uppercase tracking-wider">{t.tech.legend}</span>
            {Object.entries(proficiencyConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-1">
                <span className={`text-[9px] ${config.color}`}>{config.symbol}</span>
                <span className="text-[9px] text-muted-foreground/30 uppercase tracking-wider">{t.tech.proficiency[key as keyof typeof t.tech.proficiency]}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}