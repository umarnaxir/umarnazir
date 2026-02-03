import styled from 'styled-components';

export const WorkHeaderWrapper = styled.div<{ $centered?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const WorkTitleLine = styled.h2<{ $centered?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  letter-spacing: 0.08em;

  .header-meta {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  .section-num {
    font-family: ${({ theme }) => theme.typography.fontFamilyMono};
    font-size: 0.85em;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  .separator {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  .title {
    letter-spacing: 0.06em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: ${({ $centered }) => ($centered ? 'center' : 'flex-start')};
    gap: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    letter-spacing: 0.05em;

    .title {
      text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
    }
  }
`;
