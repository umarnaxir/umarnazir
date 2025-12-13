import React from 'react';
import { Text } from '../../atoms';
import styles from './AboutHeader.module.css';

interface AboutHeaderProps {
  sectionNumber: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ sectionNumber }) => {
  return (
    <div className={styles.aboutHeader} data-aos="fade-up">
      <Text variant="h2" className={styles.sectionNumber}>
        {sectionNumber}
      </Text>
      <Text variant="h2">About</Text>
    </div>
  );
};

