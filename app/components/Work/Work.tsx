'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { CornerRightDown, CornerRightUp } from 'lucide-react';
import { Section, Container } from '../atoms';
import { WorkHeader } from './WorkHeader/WorkHeader';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { Project } from '@/lib/data';
import { StyledWork, ProjectsList, ViewAllButtonContainer, ViewAllButton } from './Work.styles';

export interface WorkProps {
  sectionNumber?: string;
  projects: Project[];
}

const INITIAL_PROJECTS_COUNT = 5;

export const Work: React.FC<WorkProps> = ({
  sectionNumber = '01',
  projects,
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

  useEffect(() => {
    // Refresh AOS when projects are dynamically shown/hidden
    AOS.refresh();
  }, [showAll]);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Scroll to work section smoothly
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Section id="work">
      <Container>
        <StyledWork>
          <WorkHeader sectionNumber={sectionNumber} />
          <ProjectsList>
            {displayedProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </ProjectsList>
          {hasMoreProjects && (
            <ViewAllButtonContainer>
              {showAll ? (
                <ViewAllButton onClick={handleShowLess}>
                  Show Less
                  <CornerRightUp size={14} />
                </ViewAllButton>
              ) : (
                <ViewAllButton onClick={handleViewAll}>
                  View All Projects
                  <CornerRightDown size={14} />
                </ViewAllButton>
              )}
            </ViewAllButtonContainer>
          )}
        </StyledWork>
      </Container>
    </Section>
  );
};

