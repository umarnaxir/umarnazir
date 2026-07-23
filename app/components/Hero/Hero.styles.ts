import styled from 'styled-components';

export const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 160px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-top: 120px;
    min-height: 100vh;
    padding-bottom: ${({ theme }) => theme.spacing.xl};
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
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;
