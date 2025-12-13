import React from 'react';
import Image from 'next/image';
import { Text, Tag } from '../../atoms';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/lib/data';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  isLast?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isLast = false }) => {
  return (
    <>
      <div
        className={`${styles.projectCard} ${
          index % 2 === 1 ? styles.projectCardReverse : ''
        }`}
      >
        <div className={styles.projectInfo}>
          <Text variant="h4" className={styles.projectNumber}>
            {project.number}
          </Text>
          <div className={styles.projectMeta}>
            <span className={styles.projectYear}>{project.year}</span>
            <span>•</span>
            <span className={styles.projectCategory}>{project.category}</span>
          </div>
          <Text variant="h3" className={styles.projectTitle}>
            {project.title}
          </Text>
          <Text variant="body" color="secondary" className={styles.projectDescription}>
            {project.description}
          </Text>
          <div className={styles.projectTags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <a
            href={project.link || 'https://google.com'}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Live Link
            <ExternalLink size={16} />
          </a>
        </div>
        <div className={styles.projectVisual}>
          <Image
            src="/images/ml-jobs.png"
            alt={project.title}
            fill
            className={styles.projectVisualImg}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      {!isLast && <hr className={styles.projectDivider} />}
    </>
  );
};

