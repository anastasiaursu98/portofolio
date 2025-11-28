import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
        className="px-14 text-base shadow-2xl hover:shadow-xl rounded-xl"
        onClick={onContactClick}
      >
        Contact Me
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="px-14 text-base shadow-2xl hover:shadow-xl rounded-xl"
      >
        <Link href="/Ursu-Anastasia-CV.pdf" target="_blank">
          My Resume
        </Link>
      </Button>
    </div>
  );
};

export default CTAButtons;
