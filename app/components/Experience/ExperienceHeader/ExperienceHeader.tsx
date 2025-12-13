import React from 'react';
import { Text } from '../../atoms';
import styles from './ExperienceHeader.module.css';

interface ExperienceHeaderProps {
  sectionNumber: string;
}

export const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ sectionNumber }) => {
  return (
    <div className={styles.sectionHeader} data-aos="fade-up">
      <Text variant="h2" className={styles.sectionNumber}>
        {sectionNumber}
      </Text>
      <Text variant="h2">Experience</Text>
    </div>
  );
};

