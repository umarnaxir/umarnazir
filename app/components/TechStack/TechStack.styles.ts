import styled from 'styled-components';

export const StyledTechStack = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  display: flex;
  align-items: center;

  [data-theme='dark'] & {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const TechStackContainer = styled.div`
  width: 100%;
`;

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.lg};
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
  grid-template-columns: repeat(8, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const TechItem = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(18, 18, 18, 0.85)' : theme.colors.bgSecondary};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : theme.colors.border};
  backdrop-filter: blur(2px);
  transition: transform ${({ theme }) => theme.transitions.base} ease-out,
    border-color ${({ theme }) => theme.transitions.base} ease-out,
    box-shadow ${({ theme }) => theme.transitions.base} ease-out;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.accent}25;
  }
`;

export const TechIcon = styled.div`
  width: 52%;
  height: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${({ theme }) => theme.transitions.base} ease-out;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${TechItem}:hover & {
    transform: scale(1.12);
  }

  ${TechItem}:hover svg {
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.45));
  }
`;

export const TechLabel = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  white-space: nowrap;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(18, 18, 18, 0.95)' : theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  opacity: 0;
  pointer-events: none;
  z-index: 5;
  transition: opacity ${({ theme }) => theme.transitions.fast} ease-out,
    transform ${({ theme }) => theme.transitions.fast} ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.accent};
  }

  ${TechItem}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

