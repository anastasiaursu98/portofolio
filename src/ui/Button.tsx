import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children?: ReactNode;
}

// Base styles shared across all variants – includes focus ring for accessibility
const baseStyles =
  "relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out text-base overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
  secondary:
    "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-black dark:via-purple-950/40 dark:to-black text-gray-800 dark:text-white hover:from-gray-200 hover:to-gray-300 dark:hover:from-purple-950/60 dark:hover:via-purple-900/50 dark:hover:to-purple-950/60 shadow-md hover:shadow-lg dark:border dark:border-purple-900/30",
  outline:
    "border-2 border-gray-300 dark:border-purple-900/50 text-gray-700 dark:text-white hover:border-violet-500 dark:hover:border-purple-500 hover:text-violet-600 dark:hover:text-purple-400 hover:bg-violet-50 dark:hover:bg-purple-950/30 backdrop-blur-sm",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}
    </button>
  );
}

export default Button;