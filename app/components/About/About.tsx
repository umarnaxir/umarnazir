'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Text } from '../atoms';
import { Section, Container } from '../atoms';
import { AboutHeader } from './AboutHeader/AboutHeader';
import { AboutContent } from './AboutContent/AboutContent';
import { StyledAbout, AboutContent as AboutContentWrapper, AboutText, AboutVisual, AboutImage, AboutDivider, AboutSectionNumber, AboutTitle, AboutDescriptionWrapper } from './About.styles';

export interface AboutProps {
  sectionNumber?: string;
  content: string | React.ReactNode;
}

export const About: React.FC<AboutProps> = ({
  sectionNumber = '03',
  content,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const aosProps = isMobile ? {} : {
    'data-aos': "fade-left",
    'data-aos-delay': 300
  };

  return (
    <>
      <Section id="about">
        <Container>
          <StyledAbout>
            <AboutContentWrapper>
              {isMobile ? (
                <>
                  <AboutSectionNumber>{sectionNumber}</AboutSectionNumber>
                  <AboutVisual {...aosProps}>
                    <AboutImage>
                      <Image
                        src="/images/me.JPG"
                        alt="Profile photo"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '1rem' }}
                      />
                    </AboutImage>
                  </AboutVisual>
                  <AboutTitle>
                    <Text variant="h2">About</Text>
                  </AboutTitle>
                  <AboutDescriptionWrapper>
                    <AboutContent content={content} />
                  </AboutDescriptionWrapper>
                </>
              ) : (
                <>
                  <AboutText>
                    <AboutHeader sectionNumber={sectionNumber} />
                    <AboutContent content={content} />
                  </AboutText>
                  <AboutVisual {...aosProps}>
                    <AboutImage>
                      <Image
                        src="/images/me.JPG"
                        alt="Profile photo"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '1rem' }}
                      />
                    </AboutImage>
                  </AboutVisual>
                </>
              )}
            </AboutContentWrapper>
          </StyledAbout>
        </Container>
      </Section>
      <AboutDivider />
    </>
  );
};

