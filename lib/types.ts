export interface Project {
  id: string;
  number: string;
  year: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  imageLink?: string;
  visualVariant?: 'default' | 'alt' | 'alt2';
  note?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  date: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface ContactInfo {
  headline: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experiences: ExperienceItem[];
  about: string;
  contact: ContactInfo;
}
