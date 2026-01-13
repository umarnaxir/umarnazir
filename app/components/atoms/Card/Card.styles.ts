import styled, { css } from 'styled-components';

export const StyledCard = styled.div<{ $interactive?: boolean }>`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.base} ease-out;
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSecondary};
    transform: translateY(-4px) translateZ(10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 12px 32px ${({ theme }) => theme.colors.accent}20;
      }
    `}
`;
