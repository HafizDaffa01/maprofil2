"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import { projectLinks } from "@/data/config";

const rankConfig = [
  { medal: "01", color: "text-tui-amber", border: "border-tui-amber/30", bg: "bg-tui-amber/[0.04]", glow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.08)]" },
  { medal: "02", color: "text-tui-cyan", border: "border-tui-cyan/30", bg: "bg-tui-cyan/[0.04]", glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.06)]" },
  { medal: "03", color: "text-tui-green", border: "border-tui-green/30", bg: "bg-tui-green/[0.04]", glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]" },
];

export default function MobileProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative section-py">
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
              {t.projects.sectionNum}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {t.projects.title}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[1, 0, 2].map((idx) => {
              const project = t.projects.items[idx];
              const rank = rankConfig[idx];
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative border ${rank.border} ${rank.bg} ${rank.glow} transition-all duration-300`}
                >
                  <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${rank.border}`} />
                  <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${rank.border}`} />
                  <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${rank.border}`} />
                  <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${rank.border}`} />

                  <div className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${rank.color} tabular-nums`}>
                          #{rank.medal}
                        </span>
                      </div>
                      <a
                        href={projectLinks[idx]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 px-3 py-1 text-[10px] ${rank.color} border ${rank.border} rounded-sm transition-all duration-200 hover:bg-white/[0.03]`}
                      >
                        repository
                        <ExternalLink className="size-2.5" />
                      </a>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {project.name}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground/50">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap border-t border-white/[0.04] pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-[10px] ${rank.color}/60 ${rank.bg} rounded-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-[9px] text-muted-foreground/25 uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}