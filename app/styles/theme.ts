import { ThemeMode } from '../context/ThemeContext';

// Dark theme — black / white first; teal only as a sparse accent
const darkColors = {
  bgPrimary: '#0a0a0a',
  bgSecondary: '#141414',
  bgTertiary: '#1f1f1f',
  textPrimary: '#ffffff',
  textSecondary: '#b3b3b3',
  textTertiary: '#808080',
  accent: '#0f766e',
  accentHover: '#115e59',
  accentSoft: '#134e4a',
  border: '#2a2a2a',
  inputBg: '#141414',
  inputBorder: '#2a2a2a',
  inputFocus: '#ffffff',
};

// Light theme — white + teal accent; premium SaaS feel
const lightColors = {
  bgPrimary: '#F7FAFA',
  bgSecondary: '#FFFFFF',
  bgTertiary: '#F0FDFA',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textTertiary: '#64748B',
  accent: '#0D9488',
  accentHover: '#0F766E',
  accentSoft: '#CCFBF1',
  border: '#E5E7EB',
  inputBg: '#FFFFFF',
  inputBorder: '#E5E7EB',
  inputFocus: '#0D9488',
};

// Shadows — dark values preserve existing look; light uses soft premium depth
const darkShadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.04)',
  md: '0 8px 24px rgba(0, 0, 0, 0.1)',
  lg: '0 12px 40px rgba(0, 0, 0, 0.2)',
  hover: '0 12px 32px rgba(0, 0, 0, 0.18)',
  glow: '0 0 0 3px rgba(255, 255, 255, 0.12)',
};

const lightShadows = {
  sm: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.03)',
  md: '0 4px 16px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.04)',
  lg: '0 12px 40px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(13, 148, 136, 0.05)',
  hover: '0 16px 48px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(13, 148, 136, 0.18)',
  glow: '0 0 0 3px rgba(13, 148, 136, 0.18)',
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
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    smooth: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
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
  shadows: mode === 'light' ? lightShadows : darkShadows,
  ...sharedTheme,
});

// Default theme (dark) for backward compatibility
export const theme = getTheme('dark');

export type Theme = ReturnType<typeof getTheme>;
