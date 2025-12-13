import React from 'react';
import { Text } from '../../atoms';
import styles from './ContactHeader.module.css';

interface ContactHeaderProps {
  sectionNumber: string;
  headline: string;
  description: string;
}

export const ContactHeader: React.FC<ContactHeaderProps> = ({
  sectionNumber,
  headline,
  description,
}) => {
  const headlineLines = headline.split('\n').filter((line) => line.trim() !== '');

  return (
    <div className={styles.contactHeader}>
      <div className={styles.contactHeaderContent}>
        <div className={styles.contactTitle}>
          {headlineLines.map((line, index) => (
            <Text key={index} variant="h1" className={styles.headline}>
              {line.trim()}
            </Text>
          ))}
        </div>
        <Text variant="bodyLarge" color="secondary" className={styles.contactDescription}>
          {description}
        </Text>
      </div>
    </div>
  );
};

