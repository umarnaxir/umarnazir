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

/** Dark teal background block for the Education line */
export const AboutEducationBlock = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: #0f766e;
  color: #f0fdfa;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize['base']};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;
