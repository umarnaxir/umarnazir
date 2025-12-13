import React from 'react';
import { Text, Tag } from '../../atoms';
import { ArrowRight } from 'lucide-react';
import { ExperienceItem } from '@/lib/data';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineDotWrapper}>
        <div className={styles.timelineDotOuter} />
        <div className={styles.timelineDot} />
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderLeft}>
            <Text variant="h4" className={styles.companyName}>
              {experience.company}
            </Text>
            <Text variant="h5" className={styles.role}>
              {experience.role}
            </Text>
            <Text variant="bodySmall" color="tertiary" className={styles.locationType}>
              {experience.location} • {experience.type}
            </Text>
          </div>
          <Text variant="bodySmall" color="tertiary" className={styles.dateLocation}>
            {experience.date}
          </Text>
        </div>
        <Text variant="body" color="secondary" className={styles.experienceDescription}>
          {experience.description}
        </Text>
        <ul className={styles.experienceList}>
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className={styles.experienceListItem}>
              <ArrowRight size={16} className={styles.experienceListArrow} />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        <div className={styles.experienceTags}>
          {experience.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

