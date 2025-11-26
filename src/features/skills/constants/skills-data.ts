import { Skill } from "../types";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

export const SKILLS_DATA: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Zustand", icon: SiReact, color: "#2496ED" },
];

export const ADDITIONAL_SKILLS = {
  development: [
    "RESTful API Integration",
    "Responsive Web Design",
    "Performance Optimization",
    "Cross-browser Compatibility",
  ],
  tools: [
    "VS Code, Visual Studio",
    "Agile/Scrum Methodology",
    "Code Reviews & Unit Testing",
    "CI/CD & Version Control",
  ],
};
