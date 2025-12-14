'use client';

import React from 'react';
import { HeroContent } from './HeroContent/HeroContent';
import { ScrollIndicator } from './ScrollIndicator/ScrollIndicator';
import { StyledHero, HeroContentWrapper } from './Hero.styles';

export interface HeroProps {
  title: string;
  headline: string;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ title, headline, description }) => {
  return (
    <StyledHero>
      <HeroContentWrapper>
        <HeroContent title={title} headline={headline} description={description} />
      </HeroContentWrapper>
      <ScrollIndicator />
    </StyledHero>
  );
};

