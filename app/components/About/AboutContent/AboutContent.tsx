import React from 'react';
import { Text } from '../../atoms';
import styles from './AboutContent.module.css';

interface AboutContentProps {
  content: string | React.ReactNode;
}

export const AboutContent: React.FC<AboutContentProps> = ({ content }) => {
  return (
    <div className={styles.aboutDescription}>
      {typeof content === 'string' ? (
        content.split('\n\n').map((paragraph, index) => (
          <Text key={index} variant="bodyLarge" color="secondary">
            {paragraph}
          </Text>
        ))
      ) : (
        content
      )}
    </div>
  );
};

