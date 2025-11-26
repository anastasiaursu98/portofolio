import React from "react";
import { KeyHighlightsProps } from "../types";

const KeyHighlights: React.FC<KeyHighlightsProps> = ({ highlights }) => {
  return (
    <div className="p-8 rounded-2xl shadow-xl text-gray-900 bg-white">
      <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyHighlights;
