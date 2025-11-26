import React from "react";

interface CarouselDotsProps {
  totalDots: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalDots,
  currentIndex,
  onDotClick,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "w-8 bg-gradient-to-r from-violet-500 to-purple-500"
              : "w-2 bg-gray-300 hover:bg-violet-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentIndex ? "true" : "false"}
        />
      ))}
    </div>
  );
};

