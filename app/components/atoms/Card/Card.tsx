'use client';

import React from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  interactive = false,
  onClick,
}) => {
  return (
    <StyledCard $interactive={interactive} className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

