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

// Group achievements by year
function groupByYear(achievements: AchievementItem[]) {
  const acc: Record<number, AchievementItem[]> = {};
  for (const item of achievements) {
    (acc[item.year] = acc[item.year] || []).push(item);
  }
  return acc;
}

export default function Timeline() {
  const { t } = useLanguage();

  const grouped = groupByYear([...t.timeline.achievements] as AchievementItem[]);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="timeline" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <p className="mb-3 text-[11px] text-tui-cyan/70 font-medium">
              {t.timeline.sectionNum}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.timeline.title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-tui-cyan/20 via-tui-green/10 to-transparent" />

            {years.map((year, yearIdx) => (
              <div key={year} className={cn("relative", yearIdx > 0 && "mt-16")}>
                {/* Year marker */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 mb-8 flex items-center gap-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center border border-white/[0.08] bg-[#111111]">
                    <span className="text-sm font-bold text-foreground/70 tabular-nums">
                      {year.toString().slice(2)}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/[0.04]" />
                  <span className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
                    {grouped[year].length} {grouped[year].length > 1 ? "achievements" : "achievement"}
                  </span>
                </motion.div>

                {/* Achievement cards */}
                <div className="ml-[52px] flex flex-col gap-3">
                  {grouped[year].map((item, idx) => {
                    const cat = item.category as AchievementCategory;
                    const colors = categoryColors[cat];
                    const label = t.timeline.categories[cat];
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.06,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={cn(
                          "group relative border-l-2 bg-[#111111] p-5 transition-all duration-300 hover:bg-[#151515]",
                          colors.border,
                          item.highlight && "bg-[#131313]"
                        )}
                      >
                        {/* Top row — category badge + highlight */}
                        <div className="mb-3 flex items-center justify-between">
                          <div className={cn("inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-sm", colors.color, colors.bg)}>
                            {label}
                          </div>
                          {item.highlight && (
                            <span className="text-[10px] text-tui-amber font-medium">
                              {t.timeline.highlight}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="mb-1.5 text-sm font-semibold text-foreground/85 leading-snug">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs leading-relaxed text-muted-foreground/45">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-12 flex items-center gap-5 border-t border-white/[0.04] pt-6"
          >
            <span className="text-[10px] text-muted-foreground/30 uppercase tracking-wider">{t.timeline.legend}</span>
            {(Object.keys(categoryColors) as AchievementCategory[]).map((key) => (
              <div key={key} className="flex items-center gap-1.5">
                <div className={cn("size-1.5 rounded-full", categoryColors[key].color.replace("text-", "bg-"))} />
                <span className="text-[10px] text-muted-foreground/30 uppercase tracking-wider">{t.timeline.categories[key]}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
