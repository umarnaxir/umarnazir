import styled from 'styled-components';

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textSecondary};
  margin: 0;

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.85rem;
    border-radius: 9999px;
    background: ${theme.colors.accentSoft};
    border: 1px solid rgba(13, 148, 136, 0.2);
    letter-spacing: 0.12em;
  `}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`;

export const Headline = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    background: linear-gradient(
      135deg,
      ${theme.colors.textPrimary} 0%,
      ${theme.colors.textPrimary} 55%,
      ${theme.colors.accent} 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    line-height: 1.3;
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  max-width: 900px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  @media (max-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: 1.6;
  }
`;
