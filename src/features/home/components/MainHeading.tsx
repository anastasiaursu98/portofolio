import React from "react";
import Title from "./Title";
import Subheading from "./Subheading";
import KeyHighlights from "@/components/KeyHighlights";
import CTAButtons from "./CTAButtons";

interface MainHeadingProps {
  onContactClick: () => void;
}

const MainHeading = ({ onContactClick }: MainHeadingProps) => {
  return (
    <div
      className="space-y-6 animate-slide-up"
      style={{ animationDelay: "0.2s" }}
    >
      <Title />
      <Subheading />
      <KeyHighlights
        variant="badges"
        badges={[
          {
            label: "Open to new opportunities",
            color: "green",
            pulse: true,
          },
          {
            label: "Master’s Degree – Computer Science",
            color: "violet",
          },
        ]}
        className="mt-6"
      />
      <CTAButtons onContactClick={onContactClick} />
    </div>
  );
};

export default MainHeading;
