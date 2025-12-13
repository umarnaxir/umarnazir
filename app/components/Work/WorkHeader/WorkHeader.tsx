import React from 'react';
import { Text } from '../../atoms';
import styles from './WorkHeader.module.css';

interface WorkHeaderProps {
  sectionNumber: string;
}

export const WorkHeader: React.FC<WorkHeaderProps> = ({ sectionNumber }) => {
  return (
    <div className={styles.workHeader} data-aos="fade-up">
      <Text variant="h2" className={styles.sectionNumber}>
        {sectionNumber}
      </Text>
      <Text variant="h2">Work</Text>
    </div>
  );
};

