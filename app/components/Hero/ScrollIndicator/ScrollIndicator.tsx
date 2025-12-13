import React from 'react';
import styles from './ScrollIndicator.module.css';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className={styles.scrollIndicator} data-aos="fade-up" data-aos-delay="600">
      <span>SCROLL TO EXPLORE</span>
      <div className={styles.scrollLine} />
    </div>
  );
};

