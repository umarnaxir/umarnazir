import React from 'react';
import styles from './HeroVisual.module.css';

export const HeroVisual: React.FC = () => {
  return (
    <div className={styles.heroVisual} data-aos="fade-left" data-aos-delay="300">
      <div className={styles.cursorIndicator}>
        <div className={styles.cursorDot} />
      </div>
    </div>
  );
};

