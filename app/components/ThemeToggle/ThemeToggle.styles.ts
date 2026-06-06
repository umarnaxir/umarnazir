import styled from 'styled-components';

export const ThemeToggleFab = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    border-color: rgba(0, 0, 0, 0.25);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 34px;
    height: 34px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
