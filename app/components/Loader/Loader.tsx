'use client';

import React, { useEffect, useState } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { LoaderContainer } from './Loader.styles';

const getTheme = (): 'light' | 'dark' => {
  // Always check data-theme attribute first (set by blocking script in head)
  // This ensures server and client use the same value
  if (typeof document !== 'undefined') {
    const dataTheme = document.documentElement.getAttribute('data-theme');
    if (dataTheme === 'light' || dataTheme === 'dark') {
      return dataTheme;
    }
  }
  // Fallback to 'dark' if data-theme is not set (shouldn't happen with blocking script)
  return 'dark';
};

const getColors = (theme: 'light' | 'dark') => {
  if (theme === 'light') {
    return {
      dotColor: '#000000', // Black for light theme
      bgColor: '#FFFFFF'   // White background for light theme
    };
  } else {
    return {
      dotColor: '#ffffff', // White for dark theme
      bgColor: '#0a0a0a'   // Dark background for dark theme
    };
  }
};

export const Loader: React.FC = () => {
  // Initialize with theme from data-theme attribute
  // On server, this defaults to 'dark' since document is undefined
  // On client, blocking script sets data-theme before React hydrates, so we can read it
  const [colors, setColors] = useState(() => {
    const theme = getTheme();
    return getColors(theme);
  });
  
  // Update colors after mount to ensure we have the correct theme
  // This handles any edge cases and ensures theme is correct
  useEffect(() => {
    const theme = getTheme();
    const newColors = getColors(theme);
    setColors(newColors);
    
    // Scroll to top when loader is shown to ensure it's always centered
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <LoaderContainer $bgColor={colors.bgColor} suppressHydrationWarning>
      <div suppressHydrationWarning>
        <ThreeDot color={colors.dotColor} size="small" text="" textColor="" />
      </div>
    </LoaderContainer>
  );
};
