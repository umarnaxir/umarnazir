import React from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return <span className={`${styles.tag} ${className}`}>{children}</span>;
};

