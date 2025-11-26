import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface InfoListItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlightedText?: string;
}

export interface ProfileImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface KeyHighlightsProps {
  highlights: string[];
}
