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
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textSecondary};
  }

  a:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
    border-radius: 2px;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  button:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
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

  /* Hide scrollbar while keeping scroll */
  html {
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
