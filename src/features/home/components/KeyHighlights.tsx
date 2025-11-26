import React from "react";

const KeyHighlights = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mt-6">
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Available for Projects</span>
      </div>
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
        <span>Bachelor&apos;s in Computer Science</span>
      </div>
    </div>
  );
};

export default KeyHighlights;

