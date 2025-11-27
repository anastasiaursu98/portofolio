import React from "react";
import { SKILLS_DATA, ADDITIONAL_SKILLS } from "../constants/skills-data";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import AdditionalSkills from "./AdditionalSkills";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-violet-50 dark:from-[#0f0322] dark:to-[#0a0118]"
    >
      <SectionHeader
        subtitle="My Expertise"
        title="Technical Skills"
        highlightedText="Skills"
        description="Technologies and tools I use to bring ideas to life"
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {SKILLS_DATA.map((skill, index) => (
          <Card
            key={index}
            variant="skill"
            icon={skill.icon}
            title={skill.name}
            animationDelay={`${index * 0.05}s`}
          />
        ))}
      </div>

      <AdditionalSkills
        title="Other Skills & Tools"
        developmentSkills={ADDITIONAL_SKILLS.development}
        toolsSkills={ADDITIONAL_SKILLS.tools}
      />
    </div>
  );
};

export default Skills;
