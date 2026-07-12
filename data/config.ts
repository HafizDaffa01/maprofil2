// ──────────────────────────────────────────────
// SITE CONFIG — Change variables here only
// ──────────────────────────────────────────────

export const site = {
  name: "hdw",
  fullName: "Hafiz Daffa W.",
  portrait: "/me.png",
} as const;

// ──────────────────────────────────────────────
// SOCIAL LINKS
// ──────────────────────────────────────────────

export const socials = {
  github: "https://github.com/HafizDaffa01",
  email: "hafizdaffaw+contact@gmail.com",
  instagram: "https://instagram.com/h.daffa.w",
} as const;

// ──────────────────────────────────────────────
// ABOUT STATS (values only, labels are in translations)
// ──────────────────────────────────────────────

export const stats = [
  { key: "languages" as const, value: "7+" },
  { key: "projects" as const, value: "12+" },
  { key: "competitions" as const, value: "4" },
  { key: "experience" as const, value: "2yr" },
] as const;

// ──────────────────────────────────────────────
// SULFUR++ CONFIG
// ──────────────────────────────────────────────

export const sulfur = {
  repo: "https://github.com/HafizDaffa01/sulfurplusplus-lang",
  version: "v0.1.0",
  code: `import std/io as io;

var x = 10;
const pi = 3.14159;

// Complex math
import std/math as math;
var c = math.complex(3, 4);
io.Terminal.Out << "Absolute value of c: "
                << math.abs(c)
                << io.Terminal.EOL;`,
} as const;

// ──────────────────────────────────────────────
// PROJECTS (URLs only, text is in translations)
// ──────────────────────────────────────────────

export const projectLinks = [
  "https://github.com/HafizDaffa01/sulfurplusplus-lang",
  "https://github.com/HafizDaffa01/SulvionPiGUI",
  "https://github.com/HafizDaffa01/WebsiteBuilder",
] as const;

// ──────────────────────────────────────────────
// TECH STACK (imported from data/techstack.ts)
// ──────────────────────────────────────────────
// Already modular — edit data/techstack.ts to change categories/items

// ──────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────

export const footer = {
  ascii: `    __  __      _____          ____        ________         _       __      __                __
   / / / /___ _/ __(_)___     / __ \\____ _/ __/ __/___ _   | |     / /___ _/ /_  __  ____  __/ /_____ _____ ___  ____ _
  / /_/ / __ \`/ /_/ /_  /    / / / / __ \`/ /_/ /_/ __ \`/   | | /| / / __ \`/ __ \\/ / / / / / / __/ __ \`/ __ \`__ \\/ __ \`/
 / __  / /_/ / __/ / / /_   / /_/ / /_/ / __/ __/ /_/ /    | |/ |/ / /_/ / / / / /_/ / /_/ / /_/ /_/ / / / / / / /_/ /
/_/ /_/\\__,_/_/ /_/ /___/  /_____/\\__,_/_/ /_/  \\__,_/     |__/|__/\\__,_/_/ /_/\\__, /\\__,_/\\__/\\__,_/_/ /_/ /_/\\__,_/
                                                                              /____/                                    `,
} as const;
