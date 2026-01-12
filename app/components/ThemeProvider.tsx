'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext, ThemeMode } from '../context/ThemeContext';
import { getTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/GlobalStyles';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or default to 'dark'
  const getInitialTheme = (): ThemeMode => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        // Set data-theme attribute immediately to prevent flash
        document.documentElement.setAttribute('data-theme', savedTheme);
        return savedTheme;
      }
    }
    // Default theme is 'dark'
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    return 'dark';
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  // Mark as mounted after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const themeValue = getTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeValue}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
