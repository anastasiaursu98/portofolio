import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "tech" | "status";
  icon?: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  icon,
  className = "",
}) => {
  const variantClasses = {
    default:
      "px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-md text-xs font-medium border border-gray-300 dark:border-white/20 dark:backdrop-blur-sm",
    tech: "px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-md text-xs font-medium border border-gray-300 dark:border-white/20 dark:backdrop-blur-sm",
    status:
      "relative flex items-center gap-2 bg-white dark:bg-gradient-to-r dark:from-[#1a0f2e] dark:via-[#2d1b4e] dark:to-[#1a0f2e] px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-purple-900/40 dark:shadow-purple-900/30 overflow-hidden text-sm text-gray-600 dark:text-white",
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {variant === "status" && (
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-white/5 dark:via-transparent dark:to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
      )}
      {icon && <span className="relative z-10">{icon}</span>}
      <span className={variant === "status" ? "relative z-10" : ""}>
        {children}
      </span>
    </span>
  );
};

export default Badge;
