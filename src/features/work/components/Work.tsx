"use client";
import React, { useRef } from "react";
import { WORK_DATA } from "../constants/work-data";
import { useCarousel } from "../hooks/useCarousel";
import { WorkHeader } from "./WorkHeader";
import { ProjectCard } from "./ProjectCard";
import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselDots } from "./CarouselDots";

const Work: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const {
    currentIndex,
    cardsPerView,
    maxIndex,
    goToPrevious,
    goToNext,
    goToSlide,
  } = useCarousel({
    totalItems: WORK_DATA.length,
    autoPlayInterval: 5000,
  });

  const shouldShowNavigation = WORK_DATA.length > cardsPerView;
  const cardWidth = `calc((100% - ${
    (cardsPerView - 1) * 2
  }rem) / ${cardsPerView})`;

  return (
    <div
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-violet-50 to-white"
    >
      <WorkHeader />

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        {shouldShowNavigation && (
          <CarouselNavigation onPrevious={goToPrevious} onNext={goToNext} />
        )}

        {/* Carousel */}
        <div ref={carouselRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: "2rem",
              transform: `translateX(calc(-${currentIndex} * (100% / ${cardsPerView} + 2rem)))`,
            }}
          >
            {WORK_DATA.map((work) => (
              <ProjectCard key={work.id} work={work} width={cardWidth} />
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        {shouldShowNavigation && (
          <CarouselDots
            totalDots={maxIndex + 1}
            currentIndex={currentIndex}
            onDotClick={goToSlide}
          />
        )}
      </div>
    </div>
  );
};

export default Work;

