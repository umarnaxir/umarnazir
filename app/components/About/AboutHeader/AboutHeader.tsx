'use client';

import React from 'react';
import { Text } from '../../atoms';
import { AboutHeaderWrapper, SectionNumber } from './AboutHeader.styles';

interface AboutHeaderProps {
  sectionNumber: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ sectionNumber }) => {
  return (
    <AboutHeaderWrapper data-aos="fade-up">
      <SectionNumber>{sectionNumber}</SectionNumber>
      <Text variant="h2">About</Text>
    </AboutHeaderWrapper>
  );
};

