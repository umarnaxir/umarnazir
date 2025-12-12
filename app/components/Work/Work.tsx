import React from 'react';
import { Section, Container } from '../atoms';
import { WorkHeader } from './WorkHeader/WorkHeader';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { Project } from '@/lib/data';
import styles from './Work.module.css';

export interface WorkProps {
  sectionNumber?: string;
  projects: Project[];
}

export const Work: React.FC<WorkProps> = ({
  sectionNumber = '01',
  projects,
}) => {
  return (
    <Section id="work" className={styles.work}>
      <Container>
        <WorkHeader sectionNumber={sectionNumber} />
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

