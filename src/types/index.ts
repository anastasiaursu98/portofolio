// Common types used across the application
export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface InfoListItem {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
}
