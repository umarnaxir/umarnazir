import React from 'react';
import { HeroContent } from './HeroContent/HeroContent';
import { HeroVisual } from './HeroVisual/HeroVisual';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import styles from './Hero.module.css';

export interface HeroProps {
  name: string;
  title: string;
  headline: string;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, headline, description }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <HeroContent name={name} title={title} headline={headline} description={description} />
        <HeroVisual />
      </div>
      <ScrollIndicator />
    </section>
  );
};

