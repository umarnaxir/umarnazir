'use client';

import React from 'react';
import { StyledTag } from './Tag.styles';

export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return <StyledTag className={className}>{children}</StyledTag>;
};

