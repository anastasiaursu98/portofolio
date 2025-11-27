import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface CardProps {
  children?: ReactNode;
  variant?: "default" | "icon" | "skill" | "project";
  icon?: LucideIcon | IconType;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
  animationDelay?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  icon: Icon,
  title,
  description,
  className = "",
  onClick,
  animationDelay,
}) => {
  const baseClasses =
    "relative group bg-white dark:bg-gradient-to-br dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] border-2 border-gray-100 dark:border-purple-900/40 rounded-2xl hover:border-violet-500 dark:hover:border-purple-500 transition-all duration-300 card-hover shadow-lg dark:shadow-purple-900/30 overflow-hidden";

  const variantClasses = {
    default: "p-6",
    icon: "p-6 cursor-pointer",
    skill: "p-6 flex flex-col items-center justify-center gap-3",
    project: "p-6",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-purple-950/50 dark:to-violet-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon variant */}
        {variant === "icon" && Icon && (
          <div className="w-12 h-12 bg-white dark:bg-black border-1 border-gray-300 dark:border-purple-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-black dark:text-white" />
          </div>
        )}

        {/* Skill variant */}
        {variant === "skill" && Icon && (
          <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center border-1 border-gray-300 dark:border-purple-900/50 rounded-2xl p-4">
            <Icon className="w-12 h-12 text-gray-700 dark:text-white" />
          </div>
        )}

        {/* Title */}
        {title && (
          <h3
            className={`font-bold text-gray-900 dark:text-white mb-2 ${
              variant === "skill"
                ? "text-sm text-center group-hover:text-violet-600 dark:group-hover:text-violet-400"
                : variant === "project"
                ? "text-xl mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400"
                : "text-lg"
            } transition-colors duration-300`}
          >
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p
            className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
              variant === "project" ? "text-sm mb-4" : "text-sm"
            }`}
          >
            {description}
          </p>
        )}

        {/* Custom children */}
        {children}
      </div>
    </div>
  );
};

export default Card;
