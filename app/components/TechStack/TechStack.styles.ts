import styled from 'styled-components';

export const StyledTechStack = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  display: flex;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1200px;

  [data-theme='dark'] & {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
    min-height: 100vh;
    perspective: 800px;
  }
`;

export const TechStackContainer = styled.div`
  width: 100%;
`;

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4xl']};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const TechStackTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
  transform-style: preserve-3d;
  transform: translateZ(10px);
  transition: transform ${({ theme }) => theme.transitions.slow} ease-out;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
`;

export const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 1400px;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.base} ease-out;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  transform-style: preserve-3d;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.colors.accent}15, transparent)`
        : `linear-gradient(135deg, ${theme.colors.accent}20, transparent)`};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base} ease-out;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-12px) translateZ(30px) rotateX(8deg);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 16px 48px ${({ theme }) => theme.colors.accent}25;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    transform: scale(1.2) translateZ(15px);
  }
`;

export const TechIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.transitions.base} ease-out;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: inherit;
    transition: transform ${({ theme }) => theme.transitions.base} ease-out,
                filter ${({ theme }) => theme.transitions.base} ease-out;
  }

  ${TechItem}:hover & {
    transform: translateZ(15px);
  }

  ${TechItem}:hover svg {
    filter: drop-shadow(0 8px 16px ${({ theme }) => theme.colors.accent}30);
  }

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const TechName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

