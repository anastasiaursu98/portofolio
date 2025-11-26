import { NAV_ITEMS } from "@/constants/navigation";

const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <ul
      className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full py-3 px-12 ${
        isScrolled ? "" : "bg-white shadow-sm bg-opacity-50 backdrop-blur-sm "
      }  `}
    >
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a href={item.href} className="font-Ovo">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
