import React from "react";
import { SkillsHeaderProps } from "../types";

const SkillsHeader: React.FC<SkillsHeaderProps> = ({
  subtitle,
  title,
  highlightedText,
  description,
}) => {
  return (
    <div className="text-center mb-16 animate-slide-up">
      <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        {title.split(highlightedText)[0]}
        <span className="gradient-text">{highlightedText}</span>
        {title.split(highlightedText)[1]}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
        {description}
      </p>
    </div>
  );
};

export default SkillsHeader;

