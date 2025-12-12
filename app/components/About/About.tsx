import React from 'react';
import { Section, Container } from '../atoms';
import { AboutHeader } from './AboutHeader/AboutHeader';
import { AboutContent } from './AboutContent/AboutContent';
import styles from './About.module.css';

export interface AboutProps {
  sectionNumber?: string;
  content: string | React.ReactNode;
}

export const About: React.FC<AboutProps> = ({
  sectionNumber = '03',
  content,
}) => {
  return (
    <Section id="about" className={styles.about}>
      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <AboutHeader sectionNumber={sectionNumber} />
            <AboutContent content={content} />
          </div>
          <div className={styles.aboutVisual}>
            <div className={styles.aboutImage} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

