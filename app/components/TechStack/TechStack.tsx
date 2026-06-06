'use client';

import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiVercel,
} from 'react-icons/si';
import { Webhook } from 'lucide-react';
import { Section, Container } from '../atoms';
import {
  StyledTechStack,
  TechStackContainer,
  TechStackWrapper,
  TechStackTitle,
  TechStackGrid,
  TechItem,
  TechIcon,
  TechLabel,
} from './TechStack.styles';

interface Tech {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Theme teal for the non-branded (skill) tiles
const TEAL = '#0d9488';

const techStack: Tech[] = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#5FA04E' },
  { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Styled Components', icon: <SiStyledcomponents />, color: '#DB7093' },
  { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
  { name: 'APIs', icon: <Webhook />, color: TEAL },
];

export const TechStack: React.FC = () => {
  return (
    <Section id="techstack">
      <Container>
        <StyledTechStack>
          <TechStackContainer>
            <TechStackWrapper>
              <TechStackTitle data-aos="fade-up">
                TECHNOLOGIES I WORK WITH
              </TechStackTitle>
              <TechStackGrid>
                {techStack.map((tech, index) => (
                  <TechItem
                    key={index}
                    aria-label={tech.name}
                    data-aos="zoom-in"
                    data-aos-delay={(index % 8) * 40}
                  >
                    <TechIcon style={{ color: tech.color }}>
                      {tech.icon}
                    </TechIcon>
                    <TechLabel>{tech.name}</TechLabel>
                  </TechItem>
                ))}
              </TechStackGrid>
            </TechStackWrapper>
          </TechStackContainer>
        </StyledTechStack>
      </Container>
    </Section>
  );
};
