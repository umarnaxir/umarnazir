'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.fontFamilyBody};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color ${({ theme }) => theme.transitions.base}, color ${({ theme }) => theme.transitions.base};
  }

  /* Grid background pattern - only visible in dark mode */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.base};
  }

  /* Grid background pattern for light mode - subtle orange grid */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: ${({ theme }) => (theme.mode === 'light' ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.base};
    background-image: 
      linear-gradient(rgba(255, 107, 53, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 107, 53, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
      linear-gradient(135deg, rgba(255, 107, 53, 0.015) 0%, transparent 100%);
    background-size: 
      50px 50px,
      50px 50px,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%;
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  input,
  textarea {
    font-family: inherit;
    color: inherit;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textTertiary};
  }
`;
