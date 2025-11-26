import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { WorkItem } from "../types/work";

interface ProjectCardProps {
  work: WorkItem;
  width: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ work, width }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-gray-100 hover:border-violet-500 transition-all duration-300 flex-shrink-0"
      style={{ width }}
    >
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {work.description}
        </p>

        {/* Tech Stack */}
        {work.techStack && work.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white text-gray-900 rounded-md text-xs font-medium border border-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
