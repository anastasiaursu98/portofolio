import React, { ReactNode } from "react";

export interface StatusBadge {
  label: string;
  icon?: ReactNode;
  color?: "green" | "violet" | "blue" | "red" | "yellow";
  pulse?: boolean;
}

interface KeyHighlightsProps {
  // List variant props
  highlights?: string[];
  // Status badges variant props
  badges?: StatusBadge[];
  // Common props
  variant?: "list" | "badges";
  title?: string;
  className?: string;
}

const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  highlights = [],
  badges = [],
  variant = highlights.length > 0 ? "list" : "badges",
  title,
  className = "",
}) => {
  // Badge color classes
  const badgeColors = {
    green: "bg-green-500",
    violet: "bg-violet-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  // List variant
  if (variant === "list" && highlights.length > 0) {
    return (
      <div
        className={`p-8 rounded-2xl shadow-xl text-gray-900 bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] dark:text-white border-2 border-gray-100 dark:border-purple-900/40 ${className}`}
      >
        {title && (
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-2xl text-violet-600 dark:text-violet-400">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Badges variant
  if (variant === "badges" && badges.length > 0) {
    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-white ${className}`}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 bg-white dark:bg-gradient-to-r dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-purple-900/40 dark:shadow-purple-900/30 overflow-hidden"
          >
            {/* Glossy overlay effect for dark mode */}
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-white/5 dark:via-transparent dark:to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
            <div
              className={`w-2 h-2 rounded-full ${
                badge.color ? badgeColors[badge.color] : "bg-violet-500"
              } ${badge.pulse ? "animate-pulse" : ""} relative z-10`}
            ></div>
            {badge.icon && <span className="relative z-10">{badge.icon}</span>}
            <span className="relative z-10">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default KeyHighlights;


