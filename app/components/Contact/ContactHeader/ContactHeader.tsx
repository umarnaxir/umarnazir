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
    <div className={styles.contactHeader} data-aos="fade-up">
      <div className={styles.contactHeaderContent}>
        <div className={styles.contactTitle}>
          {headlineLines.map((line, index) => (
            <Text 
              key={index} 
              variant="h1" 
              className={styles.headline}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {line.trim()}
            </Text>
          ))}
        </div>
        <Text 
          variant="bodyLarge" 
          color="secondary" 
          className={styles.contactDescription}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

