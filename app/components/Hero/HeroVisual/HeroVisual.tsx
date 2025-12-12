import React from 'react';
import styles from './HeroVisual.module.css';

export const HeroVisual: React.FC = () => {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.cursorIndicator}>
        <div className={styles.cursorDot} />
      </div>
    </div>
  );
};

