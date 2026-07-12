const en = {
  nav: {
    about: "about",
    sulfur: "sulfur++",
    tech: "tech",
    infra: "infra",
    projects: "projects",
    timeline: "timeline",
    tinkers: "tinker's",
    online: "online",
  },
  hero: {
    whoami: "whoami",
    role: "// Full-Stack Developer & Tech Enthusiast",
    description:
      "Architecting scalable web solutions from low-level systems to cloud infrastructure.",
    aboutMe: "about me",
    github: "github",
    email: "email",
    instagram: "instagram",
    scroll: "scroll",
    loading: "loading...",
  },
  about: {
    sectionNum: "[01] about",
    title: "About Me",
    p1: "Full-Stack Developer & Systems Engineer with a deep passion for low-level architecture and scalable infrastructure. Having managed real-world VPS environments, I bridge the gap between high-level web applications and the underlying hardware systems.",
    p2: "Currently building Sulfur++, a performance-oriented programming language, while exploring the frontiers of Agentic AI and Quantum Computing. Founder of The Tinker's.",
    explorationTitle: "current exploration",
    explorations: [
      "Systems Programming & Compiler Design (Sulfur++)",
      "AI/ML Integration & Agentic Systems",
      "Quantum Computing Theory & Physics",
    ],
    stats: {
      languages: "languages",
      projects: "projects",
      competitions: "competitions",
      experience: "experience",
    },
    profile: "profile",
  },
  experience: {
    sectionNum: "[02] experience",
    title: "Work",
    entries: [
      {
        period: "2025 — Present",
        role: "Freelance Web Developer & System Administrator",
        description:
          "Managed end-to-end web deployment, including VPS configuration, database optimization, and routine system maintenance.",
        tech: ["Linux Server", "MySQL", "NGINX", "Laravel"],
      },
      {
        period: "2025 — Present",
        role: "IoT & Embedded Systems Developer",
        description:
          "Designed and built IoT solutions using ESP32 and Arduino platforms. Developed sensor networks, GPS tracking systems, and automated control systems for real-world applications.",
        tech: ["C++", "ESP32", "Arduino", "RTOS", "IoT"],
      },
      {
        period: "2025 — Present",
        role: "Full-Stack Web Developer",
        description:
          "Built and deployed modern web applications using React, Next.js, and TypeScript. Focused on performance, accessibility, and clean architecture.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      },
      {
        period: "2024 — Present",
        role: "Systems Programming & Language Design",
        description:
          "Developed Sulfur++, a programming language built on LLVM with AOT and JIT compiler pipelines. Explored compiler architecture, code generation, and language design principles.",
        tech: ["C++", "LLVM", "Compiler Design", "Assembly"],
      },
    ],
  },
  sulfur: {
    sectionNum: "[02] featured project",
    title: "Sulfur++",
    tagline: "write easy, perform fast",
    description:
      "An interpreted programming language built on the LLVM infrastructure with a JIT compiler pipeline. Designed for systems programming with modern syntax.",
    problem: {
      title: "The Problem",
      desc: "Existing systems languages like C/C++ and Rust have steep learning curves, complex syntax, and error-prone manual memory management. Developers shouldn't have to choose between performance and productivity.",
    },
    solution: {
      title: "The Solution",
      desc: "Sulfur++ combines modern, readable syntax with full systems-level control. Write expressive code that runs fast via LLVM-powered interpretation — getting both developer productivity and near-native performance.",
    },
    architecture: "interpreter pipeline",
    pipeline: [
      { label: "Source Code", sub: ".sfpp" },
      { label: "Lexer", sub: "tokenize" },
      { label: "Parser", sub: "AST" },
      { label: "Interpreter", sub: "execute" },
    ],
    features: [
      { label: "LLVM Backend", desc: "Optimized machine code generation" },
      { label: "JIT Compiler", desc: "Runtime performance optimization" },
      { label: "Systems-Level", desc: "Manual memory, zero-cost abstractions" },
    ],
    viewRepo: "view repository",
    source: "source",
    compiled: "compiled",
  },
  tech: {
    sectionNum: "[03] capabilities",
    title: "Tech Stack",
    legend: "legend",
    proficiency: {
      core: "CORE",
      advanced: "ADV",
      learning: "LRN",
    },
  },
  infra: {
    sectionNum: "[04] infrastructure",
    title: "Infrastructure & Tooling",
    environment: {
      title: "Environment",
      desc: "Experienced with Linux server administration across Ubuntu/Debian distributions. Comfortable with command-line environments, systemd services, and shell scripting for automation.",
      items: [
        { name: "Ubuntu/Debian", desc: "Primary server OS" },
        { name: "Bash/Zsh", desc: "Shell scripting & automation" },
        { name: "systemd", desc: "Service management" },
        { name: "Git", desc: "Version control & CI/CD" },
      ],
    },
    tools: {
      title: "Tools & Services",
      desc: "Hands-on experience managing production VPS environments, configuring web servers, databases, and implementing security best practices.",
      items: [
        { name: "NGINX", desc: "Reverse proxy & static serving" },
        { name: "MySQL", desc: "Database management & optimization" },
        { name: "SSH", desc: "Remote access & key management" },
        { name: "VPS Management", desc: "Deployment, monitoring & scaling" },
        { name: "Docker", desc: "Containerized deployments" },
        { name: "Let's Encrypt", desc: "SSL/TLS certificate management" },
      ],
    },
  },
  projects: {
    sectionNum: "[05] work",
    title: "Top 3 Projects",
    items: [
      {
        name: "Sulfur++",
        description:
          "A high-performance, C++-backed scripting language for desktop, embedded, and IoT applications. Features dynamic typing, native system access, a rich standard library, and modern syntax.",
        tags: ["C++", "LLVM", "Scripting"],
        status: "active",
      },
      {
        name: "SulvionPiGUI",
        description:
          "A premium, powerful, and easy-to-use Python GUI library built on top of CustomTkinter. Designed for developers who want to create beautiful, grid-based desktop applications with minimal code.",
        tags: ["Python", "GUI", "CustomTkinter"],
        status: "active",
      },
      {
        name: "WebsiteBuilder",
        description:
          "A powerful yet simple Python-based application that lets you create, edit, and manage your websites dynamically. Built for flexibility and speed.",
        tags: ["Python", "Web", "Tool"],
        status: "active",
      },
    ],
  },
  timeline: {
    sectionNum: "[06] journey",
    title: "Achievements",
    highlight: "★ Highlight",
    legend: "legend",
    categories: {
      competition: "Competition",
      workshop: "Workshop",
      conference: "Conference",
    },
    achievements: [
      {
        year: 2026,
        title: "2nd Place — Robotic Innovation Competition",
        description:
          "GDA Future Defenders — Junior High School Level",
        category: "competition",
        highlight: true,
      },
      {
        year: 2026,
        title: "Ardumeka — Arduthon",
        description:
          "Welcoming the Agentic AI Era & Connecting Vocational Education with Industry through Tech Communities",
        category: "conference",
      },
      {
        year: 2026,
        title: "Workshop Rizky Project",
        description:
          "Smart GPS Tracker Web-Based with AI/LLM Integration",
        category: "workshop",
      },
      {
        year: 2026,
        title: "Ardumeka Workshop",
        description:
          "Industrial PLC: QRIS Payment Integration",
        category: "workshop",
      },
      {
        year: 2026,
        title: "Karya Inspirasi Indonesia",
        description:
          "Great Conference of Gen Z & Gen Alpha",
        category: "conference",
      },
      {
        year: 2025,
        title: "Juara 3 — Lomba Coding Tinkercad",
        description:
          "Tingkat SMP/MTs Se-Soloraya — Rumah Talenta",
        category: "competition",
        highlight: true,
      },
      {
        year: 2025,
        title: "Juara Harapan 2 — Innovation Robotic Competition",
        description:
          "Arduino Project Inovasi Tingkat SMP/MTs Nasional — IRC",
        category: "competition",
      },
    ],
  },
  tinkers: {
    sectionNum: "[07] community",
    title: "The Tinker's",
    tagline: '"Explore, Innovate, Collab"',
    description:
      "A student-led technology club dedicated to peer-to-peer tech incubation. Building, hacking, and learning together.",
    founder: "Founded by Hafiz Daffa W.",
    points: [
      {
        number: "01",
        title: "Explore",
        description:
          "Hardware and software projects — Arduino robotics, IoT systems, web applications.",
      },
      {
        number: "02",
        title: "Innovate",
        description:
          "Peer-to-peer knowledge sharing on systems programming, embedded tech, and modern web.",
      },
      {
        number: "03",
        title: "Collab",
        description:
          "Workshops, hackathons, and open-source contributions to the student tech community.",
      },
    ],
  },
  footer: {
    github: "github",
    email: "email",
    instagram: "instagram",
  },
} as const;

export default en;
