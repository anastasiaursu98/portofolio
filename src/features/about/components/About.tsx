import React from "react";
import { assets } from "@/assets/assets";
import { infoList, keyHighlights } from "../constants/text";
import SectionHeader from "./SectionHeader";
import ProfileImage from "./ProfileImage";
import AboutDescription from "./AboutDescription";
import InfoCard from "./InfoCard";
import KeyHighlights from "./KeyHighlights";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-violet-50"
    >
      <SectionHeader
        subtitle="Get to Know Me"
        title="About Me"
        highlightedText="Me"
      />
      <AboutDescription />

      <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-12">
        <ProfileImage
          src={assets.user_image}
          alt="Anastasia Ursu"
          width={200}
          height={200}
        />

        <div
          className="flex-1 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoList.map((item, index) => (
                <InfoCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <KeyHighlights highlights={keyHighlights} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
