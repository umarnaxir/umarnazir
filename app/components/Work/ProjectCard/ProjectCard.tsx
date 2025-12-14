'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Text, Tag } from '../../atoms';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/lib/data';
import {
  ProjectCardWrapper,
  ProjectInfo,
  ProjectNumber,
  ProjectMeta,
  ProjectMetaLeft,
  ProjectYear,
  ProjectCategory,
  ProjectTitleWrapper,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectLink,
  ProjectVisual,
} from './ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
    'data-aos': index % 2 === 0 ? "fade-right" : "fade-left",
    'data-aos-delay': index * 100
  };

  const isReverse = index % 2 === 1;

  return (
    <ProjectCardWrapper 
      $isReverse={isReverse} 
      {...aosProps}
      className="project-card-wrapper"
    >
      <ProjectInfo $isReverse={isReverse}>
        <Text variant="h4" as="span">
          <ProjectNumber>{project.number}</ProjectNumber>
        </Text>
        <ProjectMeta>
          <ProjectMetaLeft>
            <ProjectYear>{project.year}</ProjectYear>
            <span>•</span>
            <ProjectCategory>{project.category}</ProjectCategory>
          </ProjectMetaLeft>
        </ProjectMeta>
        <ProjectTitleWrapper>
          <Text variant="h3" as="span">
            <ProjectTitle className="project-title">{project.title}</ProjectTitle>
          </Text>
        </ProjectTitleWrapper>
        <Text variant="body" color="secondary" as="span">
          <ProjectDescription>{project.description}</ProjectDescription>
        </Text>
        <ProjectTags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ProjectTags>
        {project.link && (
          <ProjectLink
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Link
            <ExternalLink size={16} />
          </ProjectLink>
        )}
      </ProjectInfo>
      <ProjectVisual $isReverse={isReverse}>
        <Image
          src={project.imageLink || '/images/ml-jobs.png'}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        />
      </ProjectVisual>
    </ProjectCardWrapper>
  );
};

