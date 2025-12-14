'use client';

import React from 'react';
import { Text } from '../../atoms';
import { AboutDescription } from './AboutContent.styles';

interface AboutContentProps {
  content: string | React.ReactNode;
}

export const AboutContent: React.FC<AboutContentProps> = ({ content }) => {
  return (
    <AboutDescription data-aos="fade-right" data-aos-delay="200">
      {typeof content === 'string' ? (
        content.split('\n\n').map((paragraph, index) => (
          <Text key={index} variant="bodyLarge" color="secondary">
            {paragraph}
          </Text>
        ))
      ) : (
        content
      )}
    </AboutDescription>
  );
};

