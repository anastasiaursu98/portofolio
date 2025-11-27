import { ArrowDownIcon } from "lucide-react";
import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ArrowDownIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
    </div>
  );
};

export default ScrollIndicator;

