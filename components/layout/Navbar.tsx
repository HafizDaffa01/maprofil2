"use client";

import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/i18n/context";
import { site } from "@/data/config";

const NAV_HREFS = ["#about", "#sulfur", "#tech", "#infra", "#projects", "#timeline", "#tinkers"] as const;
const NAV_KEYS = ["about", "sulfur", "tech", "infra", "projects", "timeline", "tinkers"] as const;

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [show, setShow] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  const navItems = React.useMemo(
    () => NAV_KEYS.map((key, i) => ({ label: t.nav[key], href: NAV_HREFS[i] })),
    [t]
  );

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    NAV_HREFS.forEach((href) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-5xl px-4 pt-3">
        <nav className="flex items-center justify-between bg-[#111111]/95 backdrop-blur-sm border border-white/[0.06] px-4 py-2 rounded-sm">
          <div className="flex items-center gap-2">
            <span className="text-tui-green text-xs font-medium">~</span>
            <span className="text-xs text-foreground/60">{site.name}</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() =>
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-3 py-1 text-[11px] transition-all duration-300 rounded-sm ${
                  activeSection === item.href.slice(1)
                    ? "text-tui-green bg-tui-green/10"
                    : "text-muted-foreground/50 hover:text-foreground/70 hover:bg-white/[0.03]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2 py-0.5 text-[10px] text-muted-foreground/40 hover:text-foreground/70 transition-colors rounded-sm hover:bg-white/[0.03]"
            >
              <span className={locale === "en" ? "text-tui-green" : ""}>EN</span>
              <span className="text-muted-foreground/20">/</span>
              <span className={locale === "id" ? "text-tui-green" : ""}>ID</span>
            </button>
            <div className="flex items-center gap-1.5">
              <div className="size-1.5 rounded-full bg-tui-green" />
              <span className="text-[10px] text-muted-foreground/40">{t.nav.online}</span>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
