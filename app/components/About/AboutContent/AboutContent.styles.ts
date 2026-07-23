import styled from 'styled-components';

export const AboutDescription = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize['base']};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

/** Education line — black / white block */
export const AboutEducationBlock = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'light' ? 'rgba(13, 148, 136, 0.2)' : theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize['base']};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.sm};
  transition: border-color ${({ theme }) => theme.transitions.smooth},
    box-shadow ${({ theme }) => theme.transitions.smooth};

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    box-shadow: ${theme.shadows.sm};

    &:hover {
      border-color: ${theme.colors.accent};
      box-shadow: ${theme.shadows.md};
    }
  `}
`;
