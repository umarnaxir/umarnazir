'use client';

import React, { useEffect } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { LoaderContainer } from './Loader.styles';

export const Loader: React.FC = () => {
  // Scroll to top when loader is shown to ensure it's always centered
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <LoaderContainer>
      <ThreeDot color="#ffffff" size="small" text="" textColor="" />
    </LoaderContainer>
  );
};
