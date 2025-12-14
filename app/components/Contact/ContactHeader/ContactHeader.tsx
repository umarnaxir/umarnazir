'use client';

import React from 'react';
import { Text } from '../../atoms';
import { ContactHeaderWrapper, ContactHeaderContent, ContactTitle, Headline, ContactDescription } from './ContactHeader.styles';

interface ContactHeaderProps {
  sectionNumber: string;
  headline: string;
  description: string;
}

export const ContactHeader: React.FC<ContactHeaderProps> = ({
  sectionNumber,
  headline,
  description,
}) => {
  const headlineLines = headline.split('\n').filter((line) => line.trim() !== '');

  return (
    <ContactHeaderWrapper data-aos="fade-up">
      <ContactHeaderContent>
        <ContactTitle>
          {headlineLines.map((line, index) => (
            <Headline
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {line.trim()}
            </Headline>
          ))}
        </ContactTitle>
        <ContactDescription data-aos="fade-up" data-aos-delay="200">
          {description}
        </ContactDescription>
      </ContactHeaderContent>
    </ContactHeaderWrapper>
  );
};

