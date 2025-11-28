import React from "react";
import Greeting from "./Greeting";
import MainHeading from "./MainHeading";


const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-[#0a0118] dark:via-[#0f0322] dark:to-black">
      <div className="relative w-11/12 max-w-5xl text-center mx-auto px-4 py-20 flex flex-col items-center justify-center gap-8 animate-fade-in">
        <Greeting />
        <MainHeading onContactClick={() => scrollToSection("contact")} />
      </div>
    </div>
  );
};

export default Home;
