import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
  className = "",
  previousLabel = "Previous",
  nextLabel = "Next",
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-violet-500 hover:text-white dark:hover:bg-violet-600 transition-all duration-300 transform hover:scale-110 border-2 border-violet-200 dark:border-violet-700 hover:border-violet-500 dark:hover:border-violet-400 ${className}`}
        aria-label={previousLabel}
      >
        <ChevronLeft className="w-6 h-6 dark:text-white" />
      </button>
      <button
        onClick={onNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-violet-500 hover:text-white dark:hover:bg-violet-600 transition-all duration-300 transform hover:scale-110 border-2 border-violet-200 dark:border-violet-700 hover:border-violet-500 dark:hover:border-violet-400 ${className}`}
        aria-label={nextLabel}
      >
        <ChevronRight className="w-6 h-6 dark:text-white" />
      </button>
    </>
  );
};

export default CarouselNavigation;
