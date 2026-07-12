"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { site, socials, footer } from "@/data/config";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative pt-20 pb-16">
      <div className="absolute top-0 left-0 right-0 border-t border-white/[0.04]" />
      <div className="max-w-5xl">
        {/* ASCII Art */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-14"
        >
          <pre className="ascii-shine text-[13px] sm:text-[16px] md:text-[20px] leading-none font-mono select-none whitespace-pre mx-auto w-fit translate-x-[20px] sm:translate-x-[40px] md:translate-x-[80px] lg:translate-x-[120px] overflow-x-auto sm:overflow-visible">
            {footer.ascii}
          </pre>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.04] pt-6 px-4">
          <div className="flex items-center gap-2">
            <span className="text-tui-cyan/40 text-xs">$</span>
            <p className="text-[11px] text-muted-foreground/30">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] text-muted-foreground/30 transition-colors hover:text-tui-green/60"
            >
              {t.footer.github}
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="text-[10px] sm:text-[11px] text-muted-foreground/30 transition-colors hover:text-tui-green/60"
            >
              {t.footer.email}
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] text-muted-foreground/30 transition-colors hover:text-tui-green/60"
            >
              {t.footer.instagram}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
