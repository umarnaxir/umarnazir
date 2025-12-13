import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { ReachOut } from './components/ReachOut';
import { Footer } from './components/Footer';
import { portfolioData } from '@/lib/data';

export default function Home() {
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
    </main>
  );
}
