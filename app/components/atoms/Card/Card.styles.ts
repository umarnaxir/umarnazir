import styled, { css } from 'styled-components';

export const StyledCard = styled.div<{ $interactive?: boolean }>`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
      }
    `}
`;
