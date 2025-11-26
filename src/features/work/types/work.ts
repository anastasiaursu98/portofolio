export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  category: string;
  techStack: string[];
}

