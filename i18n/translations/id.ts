const id = {
  nav: {
    about: "tentang",
    sulfur: "sulfur++",
    tech: "teknologi",
    infra: "infra",
    projects: "proyek",
    timeline: "timeline",
    tinkers: "tinker's",
    online: "online",
  },
  hero: {
    whoami: "whoami",
    role: "// Pengembang Full-Stack & Antusias Teknologi",
    description:
      "Merancang solusi web yang skalabel dari sistem low-level hingga infrastruktur cloud.",
    aboutMe: "tentang saya",
    github: "github",
    email: "email",
    instagram: "instagram",
    scroll: "gulir",
    loading: "memuat...",
  },
  about: {
    sectionNum: "[01] tentang",
    title: "Tentang Saya",
    p1: "Pengembang Full-Stack & Insinyur Sistem dengan hasrat mendalam terhadap arsitektur low-level dan infrastruktur yang skalabel. Setelah mengelola lingkungan VPS nyata, saya menjembatani kesenjangan antara aplikasi web tingkat tinggi dan sistem perangkat keras yang mendasarinya.",
    p2: "Saat ini sedang membangun Sulfur++, bahasa pemrograman berorientasi performa, sambil menjelajahi batas Agentic AI dan Komputasi Quantum. Pendiri The Tinker's.",
    explorationTitle: "eksplorasi saat ini",
    explorations: [
      "Pemrograman Sistem & Desain Compiler (Sulfur++)",
      "Integrasi AI/ML & Sistem Agentic",
      "Teori Komputasi Quantum & Fisika",
    ],
    stats: {
      languages: "bahasa",
      projects: "proyek",
      competitions: "kompetisi",
      experience: "pengalaman",
    },
    profile: "profil",
  },
  experience: {
    sectionNum: "[02] pengalaman",
    title: "Pekerjaan",
    entries: [
      {
        period: "2025 — Sekarang",
        role: "Pengembang Web Freelance & Administrator Sistem",
        description:
          "Mengelola deployment web end-to-end, termasuk konfigurasi VPS, optimasi basis data, dan pemeliharaan sistem rutin.",
        tech: ["Linux Server", "MySQL", "NGINX", "Laravel"],
      },
      {
        period: "2025 — Sekarang",
        role: "Pengembang IoT & Sistem Embedded",
        description:
          "Merancang dan membangun solusi IoT menggunakan platform ESP32 dan Arduino. Mengembangkan jaringan sensor, sistem pelacakan GPS, dan sistem kontrol otomatis untuk aplikasi dunia nyata.",
        tech: ["C++", "ESP32", "Arduino", "RTOS", "IoT"],
      },
      {
        period: "2025 — Sekarang",
        role: "Pengembang Web Full-Stack",
        description:
          "Membangun dan mendeploy aplikasi web modern menggunakan React, Next.js, dan TypeScript. Fokus pada performa, aksesibilitas, dan arsitektur yang bersih.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      },
      {
        period: "2024 — Sekarang",
        role: "Pemrograman Sistem & Desain Bahasa",
        description:
          "Mengembangkan Sulfur++, bahasa pemrograman yang dibangun di atas LLVM dengan pipeline compiler AOT dan JIT. Mengeksplorasi arsitektur compiler, code generation, dan prinsip desain bahasa.",
        tech: ["C++", "LLVM", "Compiler Design", "Assembly"],
      },
    ],
  },
  sulfur: {
    sectionNum: "[02] proyek unggulan",
    title: "Sulfur++",
    tagline: "tulis mudah, performa cepat",
    description:
      "Bahasa pemrograman interpreted yang dibangun di atas infrastruktur LLVM dengan pipeline JIT compiler. Dirancang untuk pemrograman sistem dengan sintaks modern.",
    problem: {
      title: "Masalah",
      desc: "Bahasa sistem seperti C/C++ dan Rust memiliki kurva belajar yang curam, sintaks kompleks, dan manajemen memori manual yang rentan error. Developer tidak harus memilih antara performa dan produktivitas.",
    },
    solution: {
      title: "Solusi",
      desc: "Sulfur++ menggabungkan sintaks modern yang terbaca dengan kontrol penuh tingkat sistem. Tulis kode ekspresif yang berjalan cepat via interpretasi bertenaga LLVM — produktivitas developer dan performa near-native sekaligus.",
    },
    architecture: "pipeline interpreter",
    pipeline: [
      { label: "Source Code", sub: ".sfpp" },
      { label: "Lexer", sub: "tokenize" },
      { label: "Parser", sub: "AST" },
      { label: "Interpreter", sub: "execute" },
    ],
    features: [
      { label: "Backend LLVM", desc: "Generasi kode mesin yang optimal" },
      { label: "Compiler JIT", desc: "Optimasi performa runtime" },
      { label: "Tingkat Sistem", desc: "Memori manual, abstraksi zero-cost" },
    ],
    viewRepo: "lihat repositori",
    source: "sumber",
    compiled: "terkompilasi",
  },
  tech: {
    sectionNum: "[03] kemampuan",
    title: "Tech Stack",
    legend: "legenda",
    proficiency: {
      core: "INTI",
      advanced: "LANJUT",
      learning: "BELAJAR",
    },
  },
  infra: {
    sectionNum: "[04] infrastruktur",
    title: "Infrastruktur & Tooling",
    environment: {
      title: "Lingkungan",
      desc: "Berpengalaman dengan administrasi server Linux pada distribusi Ubuntu/Debian. Terbiasa dengan environment command-line, service systemd, dan shell scripting untuk otomasi.",
      items: [
        { name: "Ubuntu/Debian", desc: "OS server utama" },
        { name: "Bash/Zsh", desc: "Shell scripting & otomasi" },
        { name: "systemd", desc: "Manajemen service" },
        { name: "Git", desc: "Version control & CI/CD" },
      ],
    },
    tools: {
      title: "Tools & Layanan",
      desc: "Pengalaman langsung mengelola lingkungan VPS production, mengkonfigurasi web server, database, dan menerapkan best practices keamanan.",
      items: [
        { name: "NGINX", desc: "Reverse proxy & static serving" },
        { name: "MySQL", desc: "Manajemen & optimasi database" },
        { name: "SSH", desc: "Remote access & key management" },
        { name: "VPS Management", desc: "Deployment, monitoring & scaling" },
        { name: "Docker", desc: "Containerized deployments" },
        { name: "Let's Encrypt", desc: "Manajemen sertifikat SSL/TLS" },
      ],
    },
  },
  projects: {
    sectionNum: "[05] proyek",
    title: "Top 3 Proyek",
    items: [
      {
        name: "Sulfur++",
        description:
          "Bahasa scripting performa tinggi berbasis C++ untuk aplikasi desktop, embedded, dan IoT. Dilengkapi dynamic typing, akses sistem native, standard library yang kaya, dan sintaks modern.",
        tags: ["C++", "LLVM", "Scripting"],
        status: "aktif",
      },
      {
        name: "SulvionPiGUI",
        description:
          "Library GUI Python premium, powerful, dan mudah digunakan yang dibangun di atas CustomTkinter. Dirancang untuk developer yang ingin membuat aplikasi desktop grid-based yang indah dengan kode minimal.",
        tags: ["Python", "GUI", "CustomTkinter"],
        status: "aktif",
      },
      {
        name: "WebsiteBuilder",
        description:
          "Aplikasi berbasis Python yang powerful namun sederhana untuk membuat, mengedit, dan mengelola website secara dinamis. Dibangun untuk fleksibilitas dan kecepatan.",
        tags: ["Python", "Web", "Tool"],
        status: "aktif",
      },
    ],
  },
  timeline: {
    sectionNum: "[06] perjalanan",
    title: "Pencapaian",
    highlight: "★ Sorotan",
    legend: "legenda",
    categories: {
      competition: "Kompetisi",
      workshop: "Workshop",
      conference: "Konferensi",
    },
    achievements: [
      {
        year: 2026,
        title: "Juara 2 — Kompetisi Inovasi Robotik",
        description:
          "GDA Future Defenders — Tingkat SMP",
        category: "competition",
        highlight: true,
      },
      {
        year: 2026,
        title: "Ardumeka — Arduthon",
        description:
          "Menyambut Era Agentic AI & Menghubungkan Vokasi dengan Industri melalui Komunitas Teknologi",
        category: "conference",
      },
      {
        year: 2026,
        title: "Workshop Rizky Project",
        description:
          "Smart GPS Tracker Web-Based dengan Integrasi AI/LLM",
        category: "workshop",
      },
      {
        year: 2026,
        title: "Workshop Ardumeka",
        description:
          "PLC Industri: Integrasi Pembayaran QRIS",
        category: "workshop",
      },
      {
        year: 2026,
        title: "Karya Inspirasi Indonesia",
        description:
          "Konferensi Besar Gen Z & Gen Alpha",
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
    sectionNum: "[07] komunitas",
    title: "The Tinker's",
    tagline: '"Jelajahi, Inovasi, Kolaborasi"',
    description:
      "Klub teknologi yang dipimpin siswa dan didedikasikan untuk inkubasi teknologi peer-to-peer. Membuat, mengoprek, dan belajar bersama.",
    founder: "Didirikan oleh Hafiz Daffa W.",
    points: [
      {
        number: "01",
        title: "Jelajahi",
        description:
          "Proyek perangkat keras dan perangkat lunak — robotika Arduino, sistem IoT, aplikasi web.",
      },
      {
        number: "02",
        title: "Inovasi",
        description:
          "Berbagi pengetahuan peer-to-peer tentang pemrograman sistem, teknologi embedded, dan web modern.",
      },
      {
        number: "03",
        title: "Kolaborasi",
        description:
          "Workshop, hackathon, dan kontribusi open-source untuk komunitas teknologi siswa.",
      },
    ],
  },
  footer: {
    github: "github",
    email: "email",
    instagram: "instagram",
  },
} as const;

export default id;
