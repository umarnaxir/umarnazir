import React from 'react';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  name: string;
  title: string;
  headline: string;
  description: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  name,
  title,
  headline,
  description,
}) => {
  const headlineLines = headline.split('\n').filter((line) => line.trim() !== '');

  return (
    <div className={styles.heroText}>
      <div className={styles.nameTitle}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.subtitle}>{title}</p>
      </div>
      <div className={styles.title}>
        {headlineLines.map((line, index) => (
          <h2 key={index} className={styles.headline}>
            {line.trim()}
          </h2>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

