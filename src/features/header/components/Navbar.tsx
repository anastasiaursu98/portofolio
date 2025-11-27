"use client";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <nav
      className={`w-full fixed z-50 flex px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white/50 dark:bg-gradient-to-r dark:from-black/80 dark:via-purple-950/50 dark:to-black/80 backdrop-blur-lg shadow-sm dark:shadow-purple-900/20" : ""
      }`}
    >
      <Logo />
      <DesktopNav isScrolled={isScrolled} />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
