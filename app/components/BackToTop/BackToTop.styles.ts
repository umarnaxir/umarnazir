import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  transition: background-color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 44px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
