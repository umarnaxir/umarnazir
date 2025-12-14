import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spinIn = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  50% {
    opacity: 1;
    transform: rotate(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;

export const StyledNavbar = styled.nav<{ $mobileMenuActive?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    opacity: ${({ $mobileMenuActive }) => ($mobileMenuActive ? 1 : 0)};
    transition: opacity ${({ theme }) => theme.transitions.base};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  position: relative;

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    height: 32px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen?: boolean }>`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'flex')};
  }
`;

export const HamburgerLine = styled.span<{ $index: number; $isOpen?: boolean }>`
  display: block;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ${({ theme }) => theme.transitions.base};
  border-radius: 2px;

  ${({ $index }) => {
    switch ($index) {
      case 0:
        return css`
          width: 12px;
          align-self: flex-end;
        `;
      case 1:
        return css`
          align-self: flex-end;
          width: 18px;
        `;
      case 2:
        return css`
          width: 24px;
        `;
    }
  }}

  ${({ $isOpen, $index }) =>
    $isOpen &&
    css`
      ${$index === 0 &&
      css`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${$index === 1 &&
      css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${$index === 2 &&
      css`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`;

export const MobileMenu = styled.div<{ $isOpen?: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
  animation: ${slideDown} ${({ theme }) => theme.transitions.slow} ease-out;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const MobileMenuLogo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out 0.1s forwards;
`;

export const MobileMenuCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 48px;
  line-height: 1;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({ theme }) => theme.transitions.fast};
  opacity: 0;
  animation: ${spinIn} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MobileMenuDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`;

export const MobileNavLinkItem = styled.li<{ $index: number }>`
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out forwards;
  animation-delay: ${({ $index }) => 0.1 + $index * 0.1}s;
`;

export const MobileNavLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  display: block;
  transition: all ${({ theme }) => theme.transitions.base};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ResumeButton = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;

export const ResumeModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ResumeModal = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing['3xl']};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${slideUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ResumeModalTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  line-height: 1.2;
`;

export const ResumeModalText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  line-height: 1.6;
`;

export const ResumeModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ResumeModalButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.bgPrimary};
    border-color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px);
  }
`;

export const ResumeModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md} 0 0;
  transition: all ${({ theme }) => theme.transitions.base};
  font-weight: 300;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgTertiary};
  }
`;
