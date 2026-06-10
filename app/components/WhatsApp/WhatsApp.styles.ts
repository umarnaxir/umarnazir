import styled, { keyframes } from 'styled-components';

/** Continuous expanding-ring pulse to draw attention to the button. */
const pulseRing = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

/** Gentle floating bob. */
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

/** Floating action button — bottom-right WhatsApp launcher. */
export const WhatsAppFab = styled.a`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25d366 0%, #1ebe57 100%);
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 8px 22px rgba(37, 211, 102, 0.5);
  animation: ${pulseRing} 2s ease-out infinite, ${float} 3.5s ease-in-out infinite;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.12) rotate(8deg);
    box-shadow: 0 12px 30px rgba(37, 211, 102, 0.7);
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
    width: 34px;
    height: 34px;
    color: #ffffff;
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 768px) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 56px;
    height: 56px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

/** Inline icon button for the navbar. */
export const WhatsAppNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #25d366;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    transform: scale(1.1);
    color: #1ebe57;
  }
`;
