import React from "react";
import { SectionHeaderProps } from "../types";

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  highlightedText,
}) => {
  return (
    <div className="text-center mb-16 animate-slide-up">
      <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        {highlightedText ? (
          <>
            {title.split(highlightedText)[0]}
            <span className="gradient-text">{highlightedText}</span>
            {title.split(highlightedText)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionHeader;

