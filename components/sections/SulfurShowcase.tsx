"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlight, themes } from "prism-react-renderer";
import { useLanguage } from "@/i18n/context";
import { sulfur } from "@/data/config";

export default function SulfurShowcase() {
  const { t } = useLanguage();

  return (
    <section id="sulfur" className="relative section-py">
      <div className="section-px">
        <div className="mx-auto max-w-5xl">
          {/* Top — Header + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <p className="mb-3 text-[11px] text-tui-orange/70 font-medium">
              {t.sulfur.sectionNum}
            </p>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.sulfur.title}
            </h2>
            <p className="mb-6 text-xs text-muted-foreground/50">
              {t.sulfur.tagline}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/60">
              {t.sulfur.description}
            </p>
          </motion.div>

          {/* Problem — Solution */}
          <div className="grid gap-6 lg:grid-cols-2 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="tui-panel"
            >
              <div className="tui-panel-header">
                <span className="text-[10px] text-tui-orange/60">{t.sulfur.problem.title}</span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground/55">
                  {t.sulfur.problem.desc}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="tui-panel"
            >
              <div className="tui-panel-header">
                <span className="text-[10px] text-tui-green/60">{t.sulfur.solution.title}</span>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground/55">
                  {t.sulfur.solution.desc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Architecture Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <p className="mb-6 text-[10px] text-muted-foreground/40 uppercase tracking-wider">
              {t.sulfur.architecture}
            </p>
            <div className="tui-panel">
              <div className="flex items-center justify-between gap-0 overflow-x-auto">
                {t.sulfur.pipeline.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className="flex flex-col items-center gap-2 py-6 px-4 min-w-[100px]">
                      <div className="flex size-10 items-center justify-center border border-tui-orange/20 bg-tui-orange/[0.04] text-tui-orange text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-foreground/70">{step.label}</p>
                        <p className="text-[9px] text-muted-foreground/35 mt-0.5">{step.sub}</p>
                      </div>
                    </div>
                    {i < t.sulfur.pipeline.length - 1 && (
                      <div className="flex items-center text-tui-orange/25 text-xs shrink-0">
                        {">>"}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main content grid — Features + Code */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Left — Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                {t.sulfur.features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 text-tui-orange/60 text-xs">+</span>
                    <div>
                      <p className="mb-0.5 text-sm font-medium text-foreground/70">
                        {f.label}
                      </p>
                      <p className="text-xs text-muted-foreground/45">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-fit gap-2 rounded-sm border-white/10 text-muted-foreground transition-all duration-300 text-xs uppercase tracking-wider hover:text-tui-orange hover:border-tui-orange/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => window.open(sulfur.repo, "_blank")}
              >
                {t.sulfur.viewRepo}
                <ExternalLink className="size-3" />
              </Button>
            </motion.div>

            {/* Right — Code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tui-panel tui-corners relative overflow-hidden">
                <div className="tui-panel-header justify-between">
                  <span className="text-[10px] text-muted-foreground/40">example.sfpp</span>
                  <span className="text-[10px] text-tui-orange/60">{t.sulfur.source}</span>
                </div>

                <Highlight theme={themes.nightOwl} code={sulfur.code} language="rust">
                  {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className="overflow-x-auto px-5 py-4 text-[12px] leading-[1.8]"
                      style={{ ...style, background: "transparent" }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="table-row">
                          <span className="table-cell select-none pr-4 text-right text-[10px] text-white/15">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="table-cell">
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>

                <div className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2">
                  <span className="text-[10px] text-muted-foreground/30">sulfur++ {sulfur.version}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-tui-orange/60" />
                    <span className="text-[10px] text-muted-foreground/30">{t.sulfur.compiled}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
