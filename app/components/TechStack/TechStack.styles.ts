import styled from 'styled-components';

export const StyledTechStack = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
    min-height: 100vh;
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
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    transform: scale(1.1);
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

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: inherit;
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

export const TechStackDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  width: 100%;
`;
