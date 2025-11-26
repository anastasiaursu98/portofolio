import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon?: IconType;
  color: string;
}

export interface SkillCardProps {
  skill: Skill;
  index: number;
}

export interface SkillsHeaderProps {
  subtitle: string;
  title: string;
  highlightedText: string;
  description: string;
}

export interface AdditionalSkillsProps {
  title: string;
  developmentSkills: string[];
  toolsSkills: string[];
}
