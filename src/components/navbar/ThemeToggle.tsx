import { Sun, Moon } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/ui/Button";

const ThemeToggle = () => {
  // const { isDark, toggleTheme } = useTheme();

  return (
    <Button variant="outline" className="p-2">
      <Moon className="w-6 h-6" />
    </Button>
  );
};

export default ThemeToggle;
