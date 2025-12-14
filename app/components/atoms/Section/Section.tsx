'use client';

import React from 'react';
import { StyledSection } from './Section.styles';

export interface SectionProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  size = 'medium',
  className = '',
  id,
}) => {
  return (
    <StyledSection id={id} $size={size} className={className}>
      {children}
    </StyledSection>
  );
};

