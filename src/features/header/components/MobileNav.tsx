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
      <button className="block md:hidden ml-3" onClick={openMenu}>
        <Menu className="w-6 h-6" />
      </button>

      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500`}
      >
        <button className="absolute right-6 top-6">
          <X onClick={closeMenu} className="w-5 h-5 cursor-pointer" />
        </button>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="font-Ovo"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNav;
