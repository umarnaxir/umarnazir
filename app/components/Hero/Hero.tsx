import React from 'react';
import { HeroContent } from './HeroContent/HeroContent';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import styles from './Hero.module.css';

export interface HeroProps {
  title: string;
  headline: string;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ title, headline, description }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <HeroContent title={title} headline={headline} description={description} />
      </div>
      <ScrollIndicator />
    </section>
  );
};

