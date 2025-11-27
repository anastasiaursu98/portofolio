import React from "react";
import { WorkItem } from "../types/work";
import Badge from "@/components/Badge";

interface ProjectCardProps {
  work: WorkItem;
  width: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ work, width }) => {
  return (
    <div
      className="group relative bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] rounded-2xl shadow-lg dark:shadow-purple-500/10 overflow-hidden card-hover border-2 border-gray-100 dark:border-purple-500/30 hover:border-violet-500 dark:hover:border-purple-400 transition-all duration-300 flex-shrink-0 dark:backdrop-blur-sm"
      style={{ width }}
    >
      {/* Glossy overlay effect for dark mode */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-white/5 dark:via-transparent dark:to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>

      {/* Project Info */}
      <div className="relative p-6 z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-purple-300 transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {work.description}
        </p>

        {/* Tech Stack */}
        {work.techStack && work.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech, i) => (
              <Badge key={i} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
