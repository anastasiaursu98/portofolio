import React from "react";

const AboutDescription: React.FC = () => {
  return (
    <div className="text-center mb-4">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Passionate Frontend Developer
      </h3>
      <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
        I&apos;m a <span className=" text-violet-600 dark:text-violet-400">Frontend Developer</span>{" "}
        with{" "}
        <span className=" text-violet-600 dark:text-violet-400">
          4+ years of professional experience
        </span>{" "}
        in web development, with hands-on expertise in{" "}
        <span className="text-black dark:text-white">
          React, Next.js (SSR, SSG), and TypeScript
        </span>
        .
      </p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4">
        I&apos;ve contributed to{" "}
        <span className="text-black dark:text-white">
          enterprise platforms, sustainability solutions, and healthcare
          applications
        </span>
        —focusing on performance, accessibility, and clean, maintainable code.
      </p>
    </div>
  );
};

export default AboutDescription;
