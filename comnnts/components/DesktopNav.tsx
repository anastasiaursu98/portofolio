import { NAV_ITEMS } from "../constants/navigation";

const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul
      className={`hidden md:flex items-center gap-2 rounded-full py-3 px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-white/50 backdrop-blur-sm shadow-sm"
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
            className="relative px-4 py-2 font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 group"
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


