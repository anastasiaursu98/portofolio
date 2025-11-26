import { NAV_ITEMS } from "../../../constants/navigation";
import { Menu, X } from "lucide-react";
import { useRef } from "react";

const MobileNav = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };

  const scrollToSection = (href: string) => {
    closeMenu();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button className="block md:hidden ml-3 p-2 rounded-full hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors" onClick={openMenu}>
        <Menu className="w-6 h-6" />
      </button>

      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500 shadow-2xl`}
      >
        <button className="absolute right-6 top-6 p-2 rounded-full hover:bg-purple-50 text-gray-600 hover:text-purple-600 transition-colors">
          <X onClick={closeMenu} className="w-6 h-6 cursor-pointer" />
        </button>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="relative block py-2 font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNav;
