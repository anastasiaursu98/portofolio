import React from "react";
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  onContactClick: () => void;
}

const CTAButtons = ({ onContactClick }: CTAButtonsProps) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up"
      style={{ animationDelay: "0.4s" }}
    >
      <Button
        variant="primary"
        size="lg"
        className="px-12 text-base shadow-lg hover:shadow-xl rounded-2xl"
        onClick={onContactClick}
      >
        Contact Me
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="px-12 text-base rounded-2xl"
      >
        My Resume
      </Button>
    </div>
  );
};

export default CTAButtons;
