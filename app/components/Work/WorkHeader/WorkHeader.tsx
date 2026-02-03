'use client';

import React from 'react';
import { WorkHeaderWrapper, WorkTitleLine } from './WorkHeader.styles';

interface WorkHeaderProps {
  sectionNumber: string;
  title?: string;
}

export const WorkHeader: React.FC<WorkHeaderProps> = ({
  sectionNumber,
  title = 'Work',
}) => {
  const isCentered = title?.toLowerCase().includes('selected projects');
  return (
    <WorkHeaderWrapper data-aos="fade-up" $centered={isCentered}>
      <WorkTitleLine $centered={isCentered}>
        <span className="header-meta">
          <span className="section-num">{sectionNumber}</span>
          <span className="separator">—</span>
        </span>
        <span className="title">{title}</span>
      </WorkTitleLine>
    </WorkHeaderWrapper>
  );
};

