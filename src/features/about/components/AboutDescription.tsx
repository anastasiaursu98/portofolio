import React from "react";

const AboutDescription: React.FC = () => {
  return (
    <div className="text-center mb-6">
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-4xl mx-auto">
        Passionate{" "}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">
          Frontend Developer
        </span>{" "}
        with{" "}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">
          4.5+ years of professional experience
        </span>{" "}
        specializing in modern web development with hands-on expertise in{" "}
        <span className="text-gray-800 dark:text-white font-medium">
          React, Next.js (SSR/SSG), and TypeScript
        </span>
        .
      </p>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-6 max-w-4xl mx-auto">
        I&apos;ve contributed to diverse{" "}
        <span className="text-gray-800 dark:text-white font-medium">
          enterprise platforms, AI-powered solutions, sustainability
          applications, and healthcare systems
        </span>
        —maintaining a strong focus on performance, accessibility, and clean,
        maintainable code.
      </p>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-6 max-w-4xl mx-auto">
        With a{" "}
        <span className="text-violet-600 dark:text-violet-400 font-semibold">
          Master&apos;s degree in Computer Science
        </span>
        , I combine academic rigor with practical expertise to deliver robust,
        scalable frontend solutions.
      </p>
    </div>
  );
};

export default AboutDescription;
