import React from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  size = 'medium',
  className = '',
  id,
}) => {
  const sizeClass = size === 'small' ? styles.sectionSmall : size === 'large' ? styles.sectionLarge : '';

  return (
    <section id={id} className={`${styles.section} ${sizeClass} ${className}`}>
      {children}
    </section>
  );
};

