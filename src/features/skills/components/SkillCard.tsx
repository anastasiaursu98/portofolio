import React from "react";
import { SkillCardProps } from "../types";

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <div
      className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-violet-500 transition-all duration-300 card-hover flex flex-col items-center justify-center gap-3 shadow-lg overflow-hidden"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center border-1 border-gray-300 rounded-2xl p-4">
        {skill.icon && <skill.icon className="w-12 h-12" />}
      </div>

      {/* Skill Name */}
      <p className="relative z-10 text-sm font-semibold text-gray-700 group-hover:text-violet-600 transition-colors duration-300 text-center">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
