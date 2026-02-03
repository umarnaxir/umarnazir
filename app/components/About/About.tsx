'use client';

import React from 'react';
import Image from 'next/image';
import { Text } from '../atoms';
import { Section, Container } from '../atoms';
import { AboutHeader } from './AboutHeader/AboutHeader';
import { AboutContent } from './AboutContent/AboutContent';
import {
  StyledAbout,
  AboutInner,
  AboutText,
  AboutVisual,
  AboutImage,
} from './About.styles';

export interface AboutProps {
  sectionNumber?: string;
  content: string | React.ReactNode;
}

export const About: React.FC<AboutProps> = ({
  sectionNumber = '03',
  content,
}) => {
  const aosProps = {
    'data-aos': 'fade-left',
    'data-aos-delay': 300,
  };

  return (
    <Section id="about">
      <Container>
        <StyledAbout>
          <AboutInner>
            {/* Left: content (desktop) / order 2 on mobile */}
            <AboutText>
              <AboutHeader sectionNumber={sectionNumber} />
              <AboutContent content={content} />
            </AboutText>

            {/* Right: image (desktop) / order 1 on mobile */}
            <AboutVisual {...aosProps}>
              <AboutImage>
                <Image
                  src="/images/me.JPG"
                  alt="Profile photo"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '1rem' }}
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </AboutImage>
            </AboutVisual>
          </AboutInner>
        </StyledAbout>
      </Container>
    </Section>
  );
};

