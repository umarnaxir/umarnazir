'use client';

import React from 'react';
import { Section, Container } from '../atoms';
import { ExperienceHeader } from './ExperienceHeader/ExperienceHeader';
import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import { ExperienceItem } from '@/lib/data';
import { StyledExperience, Timeline, TimelineLine, TimelineItems } from './Experience.styles';

export interface ExperienceProps {
  sectionNumber?: string;
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({
  sectionNumber = '02',
  experiences,
}) => {
  return (
    <Section id="experience">
      <Container>
        <StyledExperience>
          <ExperienceHeader sectionNumber={sectionNumber} />
          <Timeline>
            <TimelineLine />
            <TimelineItems>
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </TimelineItems>
          </Timeline>
        </StyledExperience>
      </Container>
    </Section>
  );
};

