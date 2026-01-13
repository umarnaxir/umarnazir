import styled from 'styled-components';

export const StyledAbout = styled.div`
  position: relative;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const AboutVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.transitions.slow} ease-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateZ(20px) rotateY(-2deg) rotateX(2deg);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 400px;
  }
`;

export const AboutDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  width: 100%;
`;
