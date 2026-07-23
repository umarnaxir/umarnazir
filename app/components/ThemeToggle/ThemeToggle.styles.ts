import styled from 'styled-components';

/** Simple theme toggle icon button for the navbar. */
export const ThemeToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : '4px'};
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  transition: color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.bgTertiary : theme.colors.bgSecondary};
    ${({ theme }) =>
      theme.mode === 'light' &&
      `
      border-color: ${theme.colors.accent};
      color: ${theme.colors.accent};
    `}
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:focus-visible {
    box-shadow: ${({ theme }) =>
      theme.mode === 'light'
        ? theme.shadows.glow
        : `0 0 0 2px ${theme.colors.textPrimary}`};
  }
`;
