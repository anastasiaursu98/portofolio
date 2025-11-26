import { GiHand } from "react-icons/gi";
import React from "react";

const Greeting = () => {
  return (
    <>
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-medium text-gray-700 animate-slide-up">
        Hi! I&apos;m{" "}
        <span className="font-semibold gradient-text">Anastasia Ursu</span>
        <GiHand className="w-6 h-6 inline-block animate-bounce " />
      </h3>
    </>
  );
};

export default Greeting;
