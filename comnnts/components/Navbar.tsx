"use client";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "@/features/header/components/MobileNav";
import ThemeToggle from "@/features/header/components/ThemeToggle";
import ContactButton from "@/features/header/components/ContactButton";
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
      className={`w-full fixed z-50 flex px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between ${
        isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <Logo />
      <DesktopNav isScrolled={isScrolled} />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <ContactButton />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
