'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
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

  /* Subtle teal galaxy glow behind the animated dots (theme accent) */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -2;
    background-image:
      radial-gradient(circle at 18% 28%, rgba(13, 148, 136, 0.14) 0%, transparent 45%),
      radial-gradient(circle at 82% 72%, rgba(13, 148, 136, 0.10) 0%, transparent 45%),
      radial-gradient(circle at 55% 95%, rgba(13, 148, 136, 0.08) 0%, transparent 50%);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 1 : 0.55)};
    transition: opacity ${({ theme }) => theme.transitions.base};
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

  /* Apply Lexend to all paragraphs and plain text elements, excluding headings */
  p {
    font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  }

  span {
    font-family: inherit;
  }

  /* Ensure headings keep their heading font */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
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
