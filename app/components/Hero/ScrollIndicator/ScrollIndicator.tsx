import React from 'react';
import styles from './ScrollIndicator.module.css';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className={styles.scrollIndicator}>
      <span>SCROLL TO EXPLORE</span>
      <div className={styles.scrollLine} />
    </div>
  );
};

