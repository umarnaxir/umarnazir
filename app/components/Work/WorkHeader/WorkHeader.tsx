'use client';

import React from 'react';
import { Text } from '../../atoms';
import { WorkHeaderWrapper, SectionNumber } from './WorkHeader.styles';

interface WorkHeaderProps {
  sectionNumber: string;
}

export const WorkHeader: React.FC<WorkHeaderProps> = ({ sectionNumber }) => {
  return (
    <WorkHeaderWrapper data-aos="fade-up">
      <SectionNumber>{sectionNumber}</SectionNumber>
      <Text variant="h2">Work</Text>
    </WorkHeaderWrapper>
  );
};

