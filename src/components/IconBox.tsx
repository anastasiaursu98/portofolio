import React from "react";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "small" | "medium" | "large";
  variant?: "default" | "gradient" | "outlined";
  withHoverScale?: boolean;
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  size = "medium",
  variant = "default",
  withHoverScale = true,
  className = "",
}) => {
  // Size classes
  const sizeClasses = {
    small: "w-8 h-8 p-2",
    medium: "w-12 h-12 p-3",
    large: "w-16 h-16 p-4",
  };

  // Icon size classes
  const iconSizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  // Variant classes
  const variantClasses = {
    default:
      "bg-white dark:bg-black border-1 border-gray-300 dark:border-purple-900/50",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    outlined: "border-2 border-gray-300 dark:border-purple-500/50 bg-transparent",
  };

  // Icon color classes
  const iconColorClasses = {
    default: "text-black dark:text-white",
    gradient: "text-white",
    outlined: "text-gray-700 dark:text-white",
  };

  const hoverClass = withHoverScale
    ? "group-hover:scale-110 transition-transform duration-300"
    : "";

  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${hoverClass} rounded-xl flex items-center justify-center ${className}`}
    >
      <Icon className={`${iconSizeClasses[size]} ${iconColorClasses[variant]}`} />
    </div>
  );
};

export default IconBox;
