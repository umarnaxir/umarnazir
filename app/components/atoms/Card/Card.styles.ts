import styled, { css } from 'styled-components';

export const StyledCard = styled.div<{ $interactive?: boolean }>`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) =>
    theme.mode === 'light'
      ? `all ${theme.transitions.smooth}`
      : `all ${theme.transitions.base} ease-out`};
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    border-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textSecondary};
    transform: translateY(-4px) translateZ(10px);
    box-shadow: ${({ theme }) =>
      theme.mode === 'light' ? theme.shadows.hover : theme.shadows.md};
  }

  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) =>
          theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
        box-shadow: ${({ theme }) => theme.shadows.hover};
      }

      &:focus-visible {
        outline: none;
        box-shadow: ${({ theme }) => theme.shadows.glow};
      }
    `}
`;
