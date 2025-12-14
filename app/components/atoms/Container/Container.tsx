'use client';

import React from 'react';
import { StyledContainer } from './Container.styles';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

