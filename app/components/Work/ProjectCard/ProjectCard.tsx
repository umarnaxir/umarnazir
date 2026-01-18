'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Text, Tag } from '../../atoms';
import { ExternalLink, Info } from 'lucide-react';
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
  ProjectLinksContainer,
  ProjectLink,
  ProjectNoteWrapper,
  ProjectNote,
  ProjectNoteTooltip,
  ProjectNoteContent,
  ProjectVisual,
} from './ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNoteClick = () => {
    if (isMobile) {
      setIsNoteOpen(!isNoteOpen);
    }
  };

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
        {((project.link || project.note) && !isMobile) && (
          <ProjectLinksContainer className="project-links-desktop">
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
            {project.note && (
              <ProjectNoteWrapper>
                <ProjectNote>
                  Note
                  <Info size={16} />
                  <ProjectNoteTooltip className="project-note-tooltip">
                    {project.note}
                  </ProjectNoteTooltip>
                </ProjectNote>
              </ProjectNoteWrapper>
            )}
          </ProjectLinksContainer>
        )}
      </ProjectInfo>
      <ProjectVisual $isReverse={isReverse} className="project-visual">
        <Image
          src={project.imageLink || '/images/ml-jobs.png'}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        />
      </ProjectVisual>
      {((project.link || project.note) && isMobile) && (
        <ProjectLinksContainer className="project-links-mobile">
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
          {project.note && (
            <ProjectNoteWrapper>
              <ProjectNote onClick={handleNoteClick} $isOpen={isNoteOpen}>
                Note
                <Info size={16} />
              </ProjectNote>
              <ProjectNoteContent $isOpen={isNoteOpen} className="project-note-content">
                {project.note}
              </ProjectNoteContent>
            </ProjectNoteWrapper>
          )}
        </ProjectLinksContainer>
      )}
    </ProjectCardWrapper>
  );
};

