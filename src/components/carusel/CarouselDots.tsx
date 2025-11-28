import React from "react";

interface CarouselDotsProps {
  totalDots: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalDots,
  currentIndex,
  onDotClick,
  className = "",
}) => {
  return (
    <div className={`flex justify-center gap-2 mt-8 ${className}`}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "w-8 bg-gradient-to-r from-violet-500 to-purple-500"
              : "w-2 bg-gray-300 hover:bg-violet-300 dark:bg-gray-600 dark:hover:bg-violet-400"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
        />
      ))}
    </div>
  );
};

export default CarouselDots;

