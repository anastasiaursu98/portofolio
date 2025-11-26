import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out text-base overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-md hover:shadow-lg",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600 hover:bg-violet-50 backdrop-blur-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      )}
    </button>
  );
}

