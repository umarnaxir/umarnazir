import { ThemeMode } from '../context/ThemeContext';

// Dark theme colors (default - existing UI)
const darkColors = {
  bgPrimary: '#0a0a0a',
  bgSecondary: '#1a1a1a',
  bgTertiary: '#2a2a2a',
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3',
  textTertiary: '#808080',
  accent: '#0d9488',
  accentHover: '#0f766e',
  border: '#333333',
  inputBg: '#1a1a1a',
  inputBorder: '#333333',
  inputFocus: '#0d9488',
};

// Light theme colors
const lightColors = {
  bgPrimary: '#FFFFFF',
  bgSecondary: '#EBEBEB',
  bgTertiary: '#D5D5D5',
  textPrimary: '#000000',
  textSecondary: '#4A4A4A',
  textTertiary: '#6B6B6B',
  accent: '#0d9488', // Teal color
  accentHover: '#0f766e', // Darker teal for hover
  border: '#E0E0E0',
  inputBg: '#F5F5F5',
  inputBorder: '#E0E0E0',
  inputFocus: '#0d9488', // Teal color
};

// Shared theme properties
const sharedTheme = {
  typography: {
    fontFamilyHeading: 'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontFamilyBody: 'var(--font-lexend), "Lexend", -apple-system, "system-ui", sans-serif',
    fontFamilyMono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
    '5xl': '6rem',
    '6xl': '7rem',
    '7xl': '8rem',
    '8xl': '9rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '350ms ease',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Theme factory function
export const getTheme = (mode: ThemeMode = 'dark') => ({
  mode,
  colors: mode === 'light' ? lightColors : darkColors,
  ...sharedTheme,
});

// Default theme (dark) for backward compatibility
export const theme = getTheme('dark');

export type Theme = ReturnType<typeof getTheme>;
