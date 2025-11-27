import React from "react";
import { AdditionalSkillsProps } from "../types";

const AdditionalSkills: React.FC<AdditionalSkillsProps> = ({
  title,
  developmentSkills,
  toolsSkills,
}) => {
  return (
    <section className="mt-16 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] border border-gray-200 dark:border-purple-900/40 p-8 md:p-10 rounded-xl">
        <header className="mb-10 text-center font-sans">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white font-mono">
            {title}
          </h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-sm font-medium font-mono text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-4">
              Development & Collaboration
            </h4>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
              {developmentSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 px-3 py-2 rounded-lg border border-gray-100 dark:border-purple-900/30 bg-gray-50 dark:bg-black/50 font-mono"
                >
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-700 dark:bg-purple-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium font-mono text-gray-600 dark:text-gray-300 uppercase tracking-wide mb-4">
              Tools & Practices
            </h4>
            <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200 font-mono">
              {toolsSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 px-3 py-2 rounded-lg border border-gray-100 dark:border-purple-900/30 bg-gray-50 dark:bg-black/50"
                >
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-700 dark:bg-purple-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
