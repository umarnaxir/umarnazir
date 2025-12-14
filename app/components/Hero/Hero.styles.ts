import styled from 'styled-components';

export const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
    min-height: 85vh;
    padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;
