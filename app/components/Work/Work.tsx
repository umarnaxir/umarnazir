'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Section, Container } from '../atoms';
import { WorkHeader } from './WorkHeader/WorkHeader';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { Project } from '@/lib/data';
import styles from './Work.module.css';

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
    <Section id="work" className={styles.work}>
      <Container>
        <WorkHeader sectionNumber={sectionNumber} />
        <div className={styles.projectsList}>
          {displayedProjects.map((project, index) => {
            const isLastInDisplayed = index === displayedProjects.length - 1;
            // Only mark as last if we're showing all projects and this is the last one
            const isLast = showAll && isLastInDisplayed;
            
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isLast={isLast}
              />
            );
          })}
        </div>
        {hasMoreProjects && (
          <div className={styles.viewAllButtonContainer}>
            {showAll ? (
              <button 
                className={styles.viewAllButton}
                onClick={handleShowLess}
              >
                Show Less
              </button>
            ) : (
              <button 
                className={styles.viewAllButton}
                onClick={handleViewAll}
              >
                View All Projects
              </button>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};

