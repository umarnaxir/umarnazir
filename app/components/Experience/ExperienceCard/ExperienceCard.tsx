'use client';

import React from 'react';
import { Text, Tag } from '../../atoms';
import { ArrowRight } from 'lucide-react';
import { ExperienceItem } from '@/lib/data';
import {
  TimelineItem,
  TimelineDotWrapper,
  TimelineDotOuter,
  TimelineDot,
  StyledExperienceCard,
  CardHeader,
  CardHeaderLeft,
  CompanyName,
  Role,
  LocationType,
  DateLocation,
  ExperienceDescription,
  ExperienceList,
  ExperienceListItem,
  ExperienceListArrow,
  ExperienceTags,
} from './ExperienceCard.styles';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <TimelineItem data-aos="fade-up" data-aos-delay={index * 150}>
      <TimelineDotWrapper>
        <TimelineDotOuter />
        <TimelineDot />
      </TimelineDotWrapper>
      <StyledExperienceCard>
        <CardHeader>
          <DateLocation>{experience.date}</DateLocation>
        </CardHeader>
        <CardHeaderLeft>
          <Text variant="h4" as="span">
            <CompanyName>{experience.company}</CompanyName>
          </Text>
          <Text variant="h5" as="span">
            <Role>{experience.role}</Role>
          </Text>
          <Text variant="bodySmall" color="tertiary" as="span">
            <LocationType>{experience.location} • {experience.type}</LocationType>
          </Text>
        </CardHeaderLeft>
        <Text variant="body" color="secondary" as="span">
          <ExperienceDescription>{experience.description}</ExperienceDescription>
        </Text>
        <ExperienceList>
          {experience.responsibilities.map((responsibility, idx) => (
            <ExperienceListItem key={idx}>
              <ExperienceListArrow>
                <ArrowRight size={16} />
              </ExperienceListArrow>
              <span>{responsibility}</span>
            </ExperienceListItem>
          ))}
        </ExperienceList>
        <ExperienceTags>
          {experience.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ExperienceTags>
      </StyledExperienceCard>
    </TimelineItem>
  );
};

