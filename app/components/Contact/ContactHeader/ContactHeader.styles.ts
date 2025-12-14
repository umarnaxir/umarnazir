import styled from 'styled-components';

export const ContactHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const ContactHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  text-align: center;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`;

export const Headline = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(3rem, 10vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`;

export const ContactDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
