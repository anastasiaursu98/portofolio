import { NAV_ITEMS } from "@/constants/navigation";

const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul
      className={`hidden md:flex items-center gap-2 rounded-full py-3 px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gradient-to-r dark:from-black/90 dark:via-purple-950/60 dark:to-black/90 backdrop-blur-lg shadow-lg dark:shadow-purple-900/30 dark:border dark:border-purple-900/30"
          : "bg-white/50 dark:bg-gradient-to-r dark:from-black/70 dark:via-purple-950/40 dark:to-black/70 backdrop-blur-sm shadow-sm dark:border dark:border-purple-900/20"
      }`}
    >
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className="relative px-4 py-2 font-medium text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
