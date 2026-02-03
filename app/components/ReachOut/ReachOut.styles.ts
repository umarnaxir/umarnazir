import styled from 'styled-components';

export const StyledReachOut = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing['4xl']} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing['3xl']} 0;
  }
`;

export const ReachOutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['3xl']};
  position: relative;
`;

export const ReachOutHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ReachOutLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ReachOutHeader = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

export const ContactCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all ${({ theme }) => theme.transitions.base} ease-out;
  transform-style: preserve-3d;
  transform: translateZ(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  will-change: transform;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSecondary};
    transform: translateY(-6px) translateZ(15px) rotateX(2deg);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

export const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CardValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textPrimary};
  word-break: break-word;
`;

export const CardLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
