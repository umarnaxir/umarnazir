import styled, { keyframes } from 'styled-components';

/** Gentle floating bob to match the WhatsApp FAB. */
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

/**
 * Floating theme toggle, stacked just above the WhatsApp FAB.
 * Same size as the WhatsApp FAB (64px / 56px mobile).
 */
export const ThemeToggleFab = styled.button`
  position: fixed;
  bottom: calc(${({ theme }) => theme.spacing.xl} + 64px + 24px);
  right: ${({ theme }) => theme.spacing.xl};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  animation: ${float} 3.5s ease-in-out infinite;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: scale(1.12) rotate(-12deg);
    border-color: ${({ theme }) => theme.colors.textPrimary};
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    animation-play-state: paused;
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: rotate(12deg) scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    bottom: calc(${({ theme }) => theme.spacing.lg} + 56px + 20px);
    right: ${({ theme }) => theme.spacing.lg};
    width: 56px;
    height: 56px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
