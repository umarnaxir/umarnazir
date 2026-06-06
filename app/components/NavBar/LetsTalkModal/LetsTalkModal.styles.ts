import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)'};
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.lg};
  animation: ${fadeIn} 0.25s ease-out;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    align-items: flex-start;
    overflow-y: auto;
  }
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  position: relative;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  animation: ${slideUp} 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  @media (max-width: 768px) {
    max-width: 440px;
    margin: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const Panel = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }
`;

/* Decorative background graphics */
export const Decoration = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  /* soft accent glow, top-right */
  &::before {
    content: '';
    position: absolute;
    top: -90px;
    right: -70px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${({ theme }) => `${theme.colors.accent}33`} 0%,
      transparent 70%
    );
    filter: blur(6px);
  }

  /* subtle accent glow, bottom-left */
  &::after {
    content: '';
    position: absolute;
    bottom: -110px;
    left: -80px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${({ theme }) => `${theme.colors.accent}22`} 0%,
      transparent 70%
    );
  }
`;

/* dotted accent grid in the corner */
export const Grid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0;
  animation: ${popIn} 0.4s ease-out 0.1s forwards;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.accent}33`};
  }
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  opacity: 0;
  animation: ${popIn} 0.4s ease-out 0.15s forwards;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: border-color ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.base};
  opacity: 0;
  animation: ${popIn} 0.4s ease-out 0.2s forwards;

  &:nth-of-type(2) {
    animation-delay: 0.25s;
  }

  &:hover {
    border-color: ${({ theme }) => `${theme.colors.accent}80`};
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
  }
`;

export const ContactIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: #ffffff;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

export const ContactLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const ContactValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ResumeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  animation: ${popIn} 0.4s ease-out 0.3s forwards;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

export const ResumeButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => `${theme.colors.accent}40`};

    svg {
      transform: scale(1.15) translateY(-1px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  animation: ${popIn} 0.4s ease-out 0.35s forwards;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const FollowLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.base} cubic-bezier(0.34, 1.56, 0.64, 1);

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px) scale(1.08);
    box-shadow: 0 8px 18px ${({ theme }) => `${theme.colors.accent}45`};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.accent};
    transform: rotate(90deg) scale(1.05);
  }
`;
