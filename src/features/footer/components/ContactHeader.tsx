import React from "react";
import SectionHeader from "@/components/SectionHeader";

const ContactHeader = () => {
  return (
    <SectionHeader
      subtitle="Get In Touch"
      title="Let's Work Together"
      highlightedText="Together"
      description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
      subtitleClassName="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3"
      titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
      descriptionClassName="text-gray-300 max-w-2xl mx-auto mt-6 text-lg"
      gradientColors="from-purple-400 to-pink-400"
    />
  );
};

export default ContactHeader;
