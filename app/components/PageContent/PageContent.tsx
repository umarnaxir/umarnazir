'use client';

import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Hero } from '../Hero/Hero';
import { Work } from '../Work/Work';
import { Experience } from '../Experience/Experience';
import { About } from '../About/About';
import { TechStack } from '../TechStack/TechStack';
import { Contact } from '../Contact/Contact';
import { ReachOut } from '../ReachOut/ReachOut';
import { Footer } from '../Footer/Footer';
import { BackToTop } from '../BackToTop/BackToTop';
import { portfolioData } from '@/lib/data';

export const PageContent: React.FC = () => {
  const { personal, projects, experiences, about, contact } = portfolioData;

  return (
    <main>
      <NavBar name={personal.name} />
      <Hero
        title={personal.title}
        headline={personal.headline}
        description={personal.description}
      />
      <Work sectionNumber="01" projects={projects} />
      <Experience sectionNumber="02" experiences={experiences} />
      <TechStack />
      <About sectionNumber="03" content={about} />
      <Contact
        sectionNumber="04"
        headline={contact.headline}
        description={contact.description}
      />
      <ReachOut
        email={personal.email}
        phone={personal.phone}
        github="https://github.com/umarnaxir"
        linkedin="https://www.linkedin.com/in/umar-nazir19/"
      />
      <Footer name={personal.name} />
      <BackToTop />
    </main>
  );
};
