import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { About } from './components/About';
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
        name={personal.name}
        title={personal.title}
        headline={personal.headline}
        description={personal.description}
      />
      <Work sectionNumber="01" projects={projects} />
      <Experience sectionNumber="02" experiences={experiences} />
      <About sectionNumber="03" content={about} />
      <Contact
        sectionNumber="04"
        headline={contact.headline}
        description={contact.description}
      />
      <ReachOut
        email={personal.email}
        github={personal.github}
        linkedin={personal.linkedin}
      />
      <Footer name={personal.name} />
    </main>
  );
}
