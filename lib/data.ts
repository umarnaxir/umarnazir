// Re-export types for backward compatibility
export type {
  Project,
  ExperienceItem,
  PersonalInfo,
  ContactInfo,
  PortfolioData,
} from './types';

// Re-export all data for backward compatibility
export { personalData as personal } from './data/personal.data';
export { projectsData as projects } from './data/projects.data';
export { experienceData as experiences } from './data/experience.data';
export { aboutData as about } from './data/about.data';
export { contactData as contact } from './data/contact.data';

// Import individual data files
import { personalData } from './data/personal.data';
import { projectsData } from './data/projects.data';
import { experienceData } from './data/experience.data';
import { aboutData } from './data/about.data';
import { contactData } from './data/contact.data';
import type { PortfolioData } from './types';

// Export combined portfolioData for backward compatibility
export const portfolioData: PortfolioData = {
  personal: personalData,
  projects: projectsData,
  experiences: experienceData,
  about: aboutData,
  contact: contactData,
};

