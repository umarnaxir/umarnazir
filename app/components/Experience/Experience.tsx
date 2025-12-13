import React from 'react';
import { Section, Container } from '../atoms';
import { ExperienceHeader } from './ExperienceHeader/ExperienceHeader';
import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import { ExperienceItem } from '@/lib/data';
import styles from './Experience.module.css';

export interface ExperienceProps {
  sectionNumber?: string;
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({
  sectionNumber = '02',
  experiences,
}) => {
  return (
    <>
      <Section id="experience" className={styles.experience}>
        <Container>
          <ExperienceHeader sectionNumber={sectionNumber} />
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            <div className={styles.timelineItems}>
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <hr className={styles.experienceDivider} />
    </>
  );
};

