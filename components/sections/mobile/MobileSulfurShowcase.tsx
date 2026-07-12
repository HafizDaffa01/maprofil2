"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function MobileSulfurShowcase() {
  const { t } = useLanguage();

  const features = t.sulfur.features.map((f) => ({ title: f.label, desc: f.desc }));

  const pipeline = t.sulfur.pipeline.map((p) => ({ label: p.label, color: "text-tui-green" }));

  return (
    <section id="sulfur" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[10px] text-tui-orange/70 font-medium">
              {t.sulfur.sectionNum}
            </p>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              {t.sulfur.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/50 max-w-xs">
              {t.sulfur.description}
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="tui-panel p-4">
              <div className="tui-panel-header">
                <span className="text-[9px] text-tui-orange/60 font-medium">{t.sulfur.problem.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground/45">{t.sulfur.problem.desc}</p>
            </div>
            <div className="tui-panel p-4">
              <div className="tui-panel-header">
                <span className="text-[9px] text-tui-green/60 font-medium">{t.sulfur.solution.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground/45">{t.sulfur.solution.desc}</p>
            </div>
          </motion.div>

          {/* Architecture Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <div className="tui-panel-header mb-4">
              <span className="text-[9px] text-muted-foreground/40">{t.sulfur.architecture}</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white/[0.01] border border-white/[0.03] rounded-sm">
              {pipeline.map((step, i) => (
                <React.Fragment key={i}>
                  <span className={`text-sm font-medium ${step.color}`}>{step.label}</span>
                  {i < pipeline.length - 1 && (
                    <svg className="size-4 text-tui-green/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

{/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <div className="tui-panel-header mb-4">
              <span className="text-[9px] text-muted-foreground/40">{t.sulfur.features[0]?.label || "features"}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.sulfur.features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="tui-panel p-4 group hover:border-tui-orange/20 transition-colors"
                >
                  <h3 className="mb-1 text-sm font-bold text-foreground">{f.label}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground/45">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <div className="tui-panel p-4 overflow-x-auto">
              <div className="tui-panel-header mb-3">
                <span className="text-[9px] text-muted-foreground/40">{t.sulfur.source}</span>
              </div>
              <pre className="text-[9px] leading-relaxed text-muted-foreground/50 font-mono tabular-nums">
                {t.sulfur.description}
              </pre>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex justify-center"
          >
            <Button
              variant="outline"
              className="group gap-2 px-6 py-3 rounded-sm border-tui-orange/30 text-tui-orange text-xs uppercase tracking-wider hover:bg-tui-orange/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => window.open("https://github.com/HafizDaffa01/sulfur", "_blank")}
            >
              {t.sulfur.viewRepo}
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}