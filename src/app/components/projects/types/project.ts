export interface Project {
  period: string;
  title: string;
  tag: string[];
  description: string;
  thumbnail: string;
  outline: string;
  features: string[];
  contributions: string[];
  screenshots?: { src: string; caption: string }[];
}
