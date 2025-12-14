import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: 'primary' | 'secondary' | 'accent';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant = 'primary' }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.bgSecondary};
          border-color: ${({ theme }) => theme.colors.border};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.bgTertiary};
            border-color: ${({ theme }) => theme.colors.textSecondary};
          }
        `;
      case 'secondary':
        return css`
          background-color: transparent;
          border-color: ${({ theme }) => theme.colors.border};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({ theme }) => theme.colors.accent};
            color: ${({ theme }) => theme.colors.accent};
          }
        `;
      case 'accent':
        return css`
          background-color: ${({ theme }) => theme.colors.accent};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.accentHover};
          }
        `;
    }
  }}

  ${({ $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
        `;
      case 'medium':
        return css`
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
        `;
      case 'large':
        return css`
          padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
        `;
    }
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const StyledButtonLink = styled.a<{
  $variant?: 'primary' | 'secondary' | 'accent';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;

  ${({ $variant = 'primary' }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.bgSecondary};
          border-color: ${({ theme }) => theme.colors.border};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme }) => theme.colors.bgTertiary};
            border-color: ${({ theme }) => theme.colors.textSecondary};
          }
        `;
      case 'secondary':
        return css`
          background-color: transparent;
          border-color: ${({ theme }) => theme.colors.border};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover {
            border-color: ${({ theme }) => theme.colors.accent};
            color: ${({ theme }) => theme.colors.accent};
          }
        `;
      case 'accent':
        return css`
          background-color: ${({ theme }) => theme.colors.accent};
          color: ${({ theme }) => theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme }) => theme.colors.accentHover};
          }
        `;
    }
  }}

  ${({ $size = 'medium' }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
        `;
      case 'medium':
        return css`
          padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
        `;
      case 'large':
        return css`
          padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
        `;
    }
  }}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;
