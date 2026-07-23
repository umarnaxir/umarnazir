import styled from 'styled-components';

export const AboutHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const SectionNumber = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textTertiary};
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  opacity: ${({ theme }) => (theme.mode === 'light' ? 0.85 : 1)};
`;
