import React from "react";
import Title from "./Title";
import Subheading from "./Subheading";
import KeyHighlights from "./KeyHighlights";
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
      <KeyHighlights />
      <CTAButtons onContactClick={onContactClick} />
    </div>
  );
};

export default MainHeading;
