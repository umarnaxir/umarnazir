'use client';

import React from 'react';
import { boldPhrases } from '@/lib/utils/boldPhrases';
import { Text } from '../../atoms';
import { AboutDescription, AboutEducationBlock } from './AboutContent.styles';

interface AboutContentProps {
  content: string | React.ReactNode;
}

export const AboutContent: React.FC<AboutContentProps> = ({ content }) => {
  return (
    <AboutDescription data-aos="fade-right" data-aos-delay="200">
      {typeof content === 'string' ? (
        content.split('\n\n').map((paragraph, index) =>
          paragraph.startsWith('Education:') ? (
            <AboutEducationBlock key={index}>{boldPhrases(paragraph)}</AboutEducationBlock>
          ) : (
            <Text key={index} variant="bodyLarge" color="secondary">
              {boldPhrases(paragraph)}
            </Text>
          )
        )
      ) : (
        content
      )}
    </AboutDescription>
  );
};

