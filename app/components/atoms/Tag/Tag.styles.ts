import styled from 'styled-components';

export const StyledTag = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accentHover : theme.colors.textSecondary};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'light' ? 'rgba(13, 148, 136, 0.2)' : theme.colors.border};
  transition: all ${({ theme }) =>
    theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textSecondary};
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    ${({ theme }) =>
      theme.mode === 'light' &&
      `
      background-color: ${theme.colors.accentSoft};
      transform: translateY(-1px);
    `}
  }
`;
