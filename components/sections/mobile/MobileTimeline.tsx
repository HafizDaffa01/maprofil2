"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/context";

type AchievementCategory = "competition" | "workshop" | "conference";

const categoryColors: Record<AchievementCategory, { color: string; border: string; bg: string; icon: string }> = {
  competition: {
    color: "text-tui-orange",
    border: "border-tui-orange/30",
    bg: "bg-tui-orange/[0.06]",
    icon: "🏆",
  },
  workshop: {
    color: "text-tui-green",
    border: "border-tui-green/30",
    bg: "bg-tui-green/[0.06]",
    icon: "🔧",
  },
  conference: {
    color: "text-tui-cyan",
    border: "border-tui-cyan/30",
    bg: "bg-tui-cyan/[0.06]",
    icon: "📡",
  },
};

type AchievementItem = {
  year: number;
  title: string;
  description: string;
  category: AchievementCategory;
  highlight?: boolean;
};

function groupByYear(achievements: AchievementItem[]) {
  const acc: Record<number, AchievementItem[]> = {};
  for (const item of achievements) {
    (acc[item.year] = acc[item.year] || []).push(item);
  }
  return acc;
}

export default function MobileTimeline() {
  const { t } = useLanguage();

  const grouped = groupByYear([...t.timeline.achievements] as AchievementItem[]);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="timeline" className="relative section-py">
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
              {t.timeline.sectionNum}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.timeline.title}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-tui-cyan/20 via-tui-green/10 to-transparent" />

            {years.map((year, yearIdx) => (
              <div key={year} className={cn("relative", yearIdx > 0 && "mt-12")}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 mb-6 flex items-center gap-3"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center border border-white/[0.08] bg-[#111111]">
                    <span className="text-xs font-bold text-foreground/70 tabular-nums">
                      {year.toString().slice(2)}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/[0.04]" />
                  <span className="text-[9px] text-muted-foreground/30 uppercase tracking-widest">
                    {grouped[year].length} {grouped[year].length > 1 ? "s" : ""}
                  </span>
                </motion.div>

                <div className="ml-12 flex flex-col gap-2">
                  {grouped[year].map((item, idx) => {
                    const cat = item.category as AchievementCategory;
                    const colors = categoryColors[cat];
                    const label = t.timeline.categories[cat];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={cn(
                          "group relative border-l bg-[#111111] p-3 transition-all duration-200 hover:bg-[#151515]",
                          colors.border,
                          item.highlight && "bg-[#131313]"
                        )}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <div className={cn("inline-flex items-center gap-1.5 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider rounded-sm", colors.color, colors.bg)}>
                            {label}
                          </div>
                          {item.highlight && (
                            <span className="text-[9px] text-tui-amber font-medium">
                              {t.timeline.highlight}
                            </span>
                          )}
                        </div>

                        <h3 className="mb-1 text-sm font-semibold text-foreground/85 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-[10px] leading-relaxed text-muted-foreground/45">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex items-center flex-wrap gap-3 border-t border-white/[0.04] pt-6"
            >
              <span className="text-[9px] text-muted-foreground/30 uppercase tracking-wider">
                {t.timeline.legend}
              </span>
              {(Object.keys(categoryColors) as AchievementCategory[]).map((key) => (
                <div key={key} className="flex items-center gap-1.5">
                  <div className={cn("size-1.5 rounded-full", categoryColors[key].color.replace("text-", "bg-"))} />
                  <span className="text-[9px] text-muted-foreground/30 uppercase tracking-wider">{t.timeline.categories[key]}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}