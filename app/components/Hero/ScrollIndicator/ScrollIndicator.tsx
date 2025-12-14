'use client';

import React from 'react';
import { ScrollIndicatorWrapper, ScrollLine } from './ScrollIndicator.styles';

export const ScrollIndicator: React.FC = () => {
  return (
    <ScrollIndicatorWrapper>
      <span>SCROLL TO EXPLORE</span>
      <ScrollLine />
    </ScrollIndicatorWrapper>
  );
};

