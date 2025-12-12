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
  return (
    <div className={styles.contactHeader}>
      <div className={styles.contactHeaderContent}>
        <div className={styles.contactTitle}>
          <Text variant="h2" className={styles.sectionNumber}>
            {sectionNumber}
          </Text>
          <Text variant="h2">{headline}</Text>
        </div>
        <Text variant="bodyLarge" color="secondary" className={styles.contactDescription}>
          {description}
        </Text>
      </div>
      <div className={styles.contactVisual}>
        <div className={styles.cursorIndicator}>
          <div className={styles.cursorDot} />
        </div>
      </div>
    </div>
  );
};

