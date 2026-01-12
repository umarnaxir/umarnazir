'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

  // Always provide the context, even before mounting
  // This prevents the "useTheme must be used within a ThemeContextProvider" error
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
