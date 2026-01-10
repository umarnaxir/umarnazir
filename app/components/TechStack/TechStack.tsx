'use client';

import React from 'react';
import { Section, Container, Text } from '../atoms';
import {
  StyledTechStack,
  TechStackContainer,
  TechStackWrapper,
  TechStackTitle,
  TechStackGrid,
  TechItem,
  TechIcon,
  TechName,
  TechStackDivider,
} from './TechStack.styles';
import {
  TechIconJavaScript,
  TechIconTypeScript,
  TechIconReact,
  TechIconReactNative,
  TechIconNextJS,
  TechIconTailwind,
  TechIconStyledComponents,
  TechIconGraphQL,
  TechIconMongoDB,
  TechIconMySQL,
  TechIconFirebase,
  TechIconSEO,
  TechIconSEOTools,
  TechIconAPIs,
  TechIconResponsive,
} from './TechIcons';

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const techStack: Tech[] = [
  // Programming Languages
  { name: 'JavaScript', icon: <TechIconJavaScript />, category: 'Programming Languages' },
  { name: 'TypeScript', icon: <TechIconTypeScript />, category: 'Programming Languages' },
  
  // Frameworks & Libraries
  { name: 'React', icon: <TechIconReact />, category: 'Frameworks & Libraries' },
  { name: 'React Native', icon: <TechIconReactNative />, category: 'Frameworks & Libraries' },
  { name: 'Next.js', icon: <TechIconNextJS />, category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', icon: <TechIconTailwind />, category: 'Frameworks & Libraries' },
  { name: 'Styled Components', icon: <TechIconStyledComponents />, category: 'Frameworks & Libraries' },
  { name: 'GraphQL', icon: <TechIconGraphQL />, category: 'Frameworks & Libraries' },
  
  // DB & Backend / Deployment
  { name: 'MongoDB', icon: <TechIconMongoDB />, category: 'DB & Backend / Deployment' },
  { name: 'MySQL', icon: <TechIconMySQL />, category: 'DB & Backend / Deployment' },
  { name: 'Firebase', icon: <TechIconFirebase />, category: 'DB & Backend / Deployment' },
  
  // Digital and Creative Skills
  { name: 'SEO', icon: <TechIconSEO />, category: 'Digital and Creative Skills' },
  { name: 'SEO Tools', icon: <TechIconSEOTools />, category: 'Digital and Creative Skills' },
  
  // General & Soft Skills
  { name: 'APIs', icon: <TechIconAPIs />, category: 'General & Soft Skills' },
  { name: 'Responsive Design', icon: <TechIconResponsive />, category: 'General & Soft Skills' },
];

export const TechStack: React.FC = () => {
  const categories = Array.from(new Set(techStack.map(tech => tech.category)));
  
  return (
    <>
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
                      data-aos="zoom-in"
                      data-aos-delay={index * 50}
                    >
                      <TechIcon>
                        {tech.icon}
                      </TechIcon>
                      <Text variant="bodySmall" as="span">
                        <TechName>{tech.name}</TechName>
                      </Text>
                    </TechItem>
                  ))}
                </TechStackGrid>
              </TechStackWrapper>
            </TechStackContainer>
          </StyledTechStack>
        </Container>
      </Section>
      <TechStackDivider />
    </>
  );
};
