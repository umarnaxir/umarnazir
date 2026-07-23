import styled, { css } from 'styled-components';

export const StyledSection = styled.section<{
  $size?: 'small' | 'medium' | 'large';
}>`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  position: relative;
  transform-style: preserve-3d;

  ${({ theme }) =>
    theme.mode === 'light' &&
    css`
      padding: ${theme.spacing['3xl']} 0;
    `}

  ${({ $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${({ theme }) => theme.spacing.xl} 0;

          ${({ theme }) =>
            theme.mode === 'light' &&
            css`
              padding: ${theme.spacing['2xl']} 0;
            `}

          @media (max-width: 768px) {
            padding: ${({ theme }) => theme.spacing.md} 0;
          }
        `;
      case 'large':
        return css`
          padding: ${({ theme }) => theme.spacing['3xl']} 0;

          ${({ theme }) =>
            theme.mode === 'light' &&
            css`
              padding: ${theme.spacing['4xl']} 0;
            `}

          @media (max-width: 768px) {
            padding: ${({ theme }) => theme.spacing.xl} 0;
          }
        `;
      default:
        return css`
          @media (max-width: 768px) {
            padding: ${({ theme }) => theme.spacing.xl} 0;
          }
        `;
    }
  }}
`;
