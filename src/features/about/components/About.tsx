import React from "react";
import { assets } from "@/assets/assets";
import { infoList, keyHighlights } from "../constants/text";
import SectionHeader from "@/components/SectionHeader";
import ProfileImage from "@/components/ProfileImage";
import AboutDescription from "./AboutDescription";
import Card from "@/components/Card";
import KeyHighlights from "@/components/KeyHighlights";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-violet-50 dark:from-[#0a0118] dark:to-[#0f0322]"
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
          width={400}
          height={400}
          shape="rectangular"
          size="large"
          withGlow
          containerClassName="w-full lg:w-1/3 animate-slide-up max-w-96"
        />

        <div
          className="flex-1 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoList.map((item, index) => (
                <Card
                  key={index}
                  variant="icon"
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <KeyHighlights highlights={keyHighlights} variant="list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
