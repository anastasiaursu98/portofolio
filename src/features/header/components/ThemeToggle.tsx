import { Moon } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // const { isDark, toggleTheme } = useTheme();

  return (
    <Button variant="outline" size="icon">
      <Moon className="w-6 h-6" />
    </Button>
  );
};

export default ThemeToggle;
