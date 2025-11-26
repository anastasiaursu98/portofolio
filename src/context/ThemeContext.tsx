import { createContext, useContext, useState, ReactNode } from "react";
import { Theme } from "@/types";

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  //   const [isDark, setIsDark] = useState(false);
  //   const toggleTheme = () => setIsDark(!isDark);
  //   return (
  //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
  // }
  // export function useTheme() {
  //   const context = useContext(ThemeContext);
  //   if (context === undefined) {
  //     throw new Error("useTheme must be used within a ThemeProvider");
  //   }
  //   return context;
}
