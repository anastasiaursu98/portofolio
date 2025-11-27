import React from "react";

const Greeting = () => {
  return (
    <>
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-medium text-gray-700 dark:text-white animate-slide-up">
        Hi! I&apos;m{" "}
        <span className="font-semibold gradient-text">Anastasia Ursu</span>
      </h3>
    </>
  );
};

export default Greeting;
