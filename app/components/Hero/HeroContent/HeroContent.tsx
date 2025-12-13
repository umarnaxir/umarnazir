import React from 'react';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  title: string;
  headline: string;
  description: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  headline,
  description,
}) => {
  const headlineLines = headline.split('\n').filter((line) => line.trim() !== '');

  return (
    <div className={styles.heroText}>
      <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="0">
        {title}
      </p>
      <div className={styles.title}>
        {headlineLines.map((line, index) => (
          <h2 
            key={index} 
            className={styles.headline}
            data-aos="fade-up"
            data-aos-delay={`${100 + index * 100}`}
          >
            {line.trim()}
          </h2>
        ))}
      </div>
      <p className={styles.description} data-aos="fade-up" data-aos-delay="400">
        {description}
      </p>
    </div>
  );
};

