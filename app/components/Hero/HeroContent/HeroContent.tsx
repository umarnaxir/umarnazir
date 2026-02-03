'use client';

import React from 'react';
import { boldPhrases } from '@/lib/utils/boldPhrases';
import { HeroText, Subtitle, Title, Headline, Description } from './HeroContent.styles';

interface HeroContentProps {
  title: string;
  headline: string;
  description: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  headline,
  description,
}) => {
  const headlineLines = headline.split('\n').filter((line) => line.trim() !== '');

  return (
    <HeroText>
      <Subtitle data-aos="fade-up" data-aos-delay="0">
        {title}
      </Subtitle>
      <Title>
        {headlineLines.map((line, index) => (
          <Headline 
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${100 + index * 100}`}
          >
            {line.trim()}
          </Headline>
        ))}
      </Title>
      <Description data-aos="fade-up" data-aos-delay="400">
        {boldPhrases(description)}
      </Description>
    </HeroText>
  );
};

