import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlightedText?: string;
  description?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gradientColors?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  highlightedText,
  description,
  className = "",
  subtitleClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  gradientColors = "from-violet-500 to-purple-500",
}) => {
  const defaultSubtitleClass =
    "text-violet-600 dark:text-violet-400 font-semibold text-sm uppercase tracking-wider mb-3";
  const defaultTitleClass =
    "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4";
  const defaultDescriptionClass =
    "text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed";

  return (
    <div className={`text-center mb-16 animate-slide-up ${className}`}>
      <p className={subtitleClassName || defaultSubtitleClass}>{subtitle}</p>
      <h2 className={titleClassName || defaultTitleClass}>
        {highlightedText ? (
          <>
            {title.split(highlightedText)[0]}
            <span
              className={
                gradientColors
                  ? `text-transparent bg-clip-text bg-gradient-to-r ${gradientColors}`
                  : "gradient-text"
              }
            >
              {highlightedText}
            </span>
            {title.split(highlightedText)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <div
        className={`w-20 h-1 bg-gradient-to-r ${gradientColors} mx-auto rounded-full`}
      ></div>
      {description && (
        <p className={descriptionClassName || defaultDescriptionClass}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
