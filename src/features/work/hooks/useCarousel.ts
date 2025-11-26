import { useState, useEffect, useCallback } from "react";

interface UseCarouselProps {
  totalItems: number;
  autoPlayInterval?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  cardsPerView: number;
  maxIndex: number;
  goToPrevious: () => void;
  goToNext: () => void;
  goToSlide: (index: number) => void;
}

export const useCarousel = ({
  totalItems,
  autoPlayInterval = 5000,
}: UseCarouselProps): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Calculate maximum index based on total items and cards per view
  const maxIndex = Math.max(0, totalItems - cardsPerView);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(index, maxIndex));
    },
    [maxIndex]
  );

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [maxIndex, autoPlayInterval]);

  return {
    currentIndex,
    cardsPerView,
    maxIndex,
    goToPrevious,
    goToNext,
    goToSlide,
  };
};

