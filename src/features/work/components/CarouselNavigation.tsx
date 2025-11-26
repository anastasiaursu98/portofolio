import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-violet-200 hover:border-violet-500"
        aria-label="Previous projects"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-violet-200 hover:border-violet-500"
        aria-label="Next projects"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};

