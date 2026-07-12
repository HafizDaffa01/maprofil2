export type TechCategory = {
  name: string;
  description: string;
  items: TechItem[];
};

export type TechItem = {
  name: string;
  icon: string;
  proficiency: "core" | "advanced" | "learning";
};

export const techCategories: TechCategory[] = [
  {
    name: "Low-Level & Embedded Systems",
    description: "Hardware-level programming and microcontroller systems",
    items: [
      { name: "C++", icon: "Cpu", proficiency: "core" },
      { name: "ESP32", icon: "Wifi", proficiency: "core" },
      { name: "Arduino", icon: "CircuitBoard", proficiency: "core" },
      { name: "RTOS", icon: "Timer", proficiency: "advanced" },
    ],
  },
  {
    name: "Web & Full-Stack Engineering",
    description: "Modern web development across the entire stack",
    items: [
      { name: "React.js", icon: "Code", proficiency: "core" },
      { name: "TypeScript", icon: "FileCode", proficiency: "core" },
      { name: "JavaScript", icon: "Braces", proficiency: "core" },
      { name: "Next.js", icon: "Globe", proficiency: "advanced" },
      { name: "Tailwind CSS", icon: "Palette", proficiency: "core" },
      { name: "Python", icon: "Terminal", proficiency: "advanced" },
      { name: "PHP", icon: "Server", proficiency: "advanced" },
      { name: "Laravel", icon: "Server", proficiency: "advanced" },
    ],
  },
];
