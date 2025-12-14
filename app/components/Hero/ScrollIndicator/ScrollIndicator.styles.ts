import styled, { keyframes } from 'styled-components';

const scrollLineAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: 40px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`;

export const ScrollIndicatorWrapper = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    bottom: ${({ theme }) => theme.spacing.md};
    font-size: 0.65rem;
  }
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  animation: ${scrollLineAnimation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`;
