'use client';

import React from 'react';
import { Text } from '../../atoms';
import { SectionHeader, SectionNumber } from './ExperienceHeader.styles';

interface ExperienceHeaderProps {
  sectionNumber: string;
}

export const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ sectionNumber }) => {
  return (
    <SectionHeader data-aos="fade-up">
      <SectionNumber>{sectionNumber}</SectionNumber>
      <Text variant="h2">Experience</Text>
    </SectionHeader>
  );
};

