'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Section, Container } from '../atoms';
import { AboutHeader } from './AboutHeader/AboutHeader';
import { AboutContent } from './AboutContent/AboutContent';
import styles from './About.module.css';

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
      <Section id="about" className={styles.about}>
        <Container>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <AboutHeader sectionNumber={sectionNumber} />
              <AboutContent content={content} />
            </div>
            <div className={styles.aboutVisual} {...aosProps}>
              <div className={styles.aboutImage}>
                <Image
                  src="/images/me.png"
                  alt="Profile photo"
                  fill
                  className={styles.aboutImageImg}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <hr className={styles.aboutDivider} />
    </>
  );
};

