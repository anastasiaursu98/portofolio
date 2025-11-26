import React from "react";

export const WorkHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 animate-slide-up">
      <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
        My Portfolio
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
      <p className="text-center max-w-2xl mx-auto mt-6 mb-12 text-gray-600 text-lg leading-relaxed">
        Step into my digital playground — a showcase of front-end creations
        crafted with code, creativity, and a passion for seamless user
        experiences.
      </p>
    </div>
  );
};

