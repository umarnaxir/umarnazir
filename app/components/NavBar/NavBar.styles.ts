import styled, { css, keyframes } from 'styled-components';

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
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(10, 10, 10, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) =>
      theme.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%)'
        : 'linear-gradient(180deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%)'};
    pointer-events: none;
    z-index: -1;
  }

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
    position: fixed;
    padding: ${({ theme }) => theme.spacing.md} 0;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
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
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
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
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    height: 36px;
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

export const MobileNavRight = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    display: flex;
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
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
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
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  justify-content: center;
  align-items: flex-end;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;
  border-radius: 12px;
  transition: all ${({ theme }) => theme.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  
  &:hover {
    background-color: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'rgba(0, 0, 0, 0.05)'};
    transform: scale(1.1);
    
    span {
      background-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
    }
  }
  
  &:active,
  &:focus {
    outline: none;
    border: none;
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: none;
  }

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'flex')};
  }
`;

export const HamburgerLine = styled.span<{ $index: number; $isOpen?: boolean }>`
  display: block;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ${({ theme }) => theme.transitions.base} cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  ${({ $index }) => {
    switch ($index) {
      case 0:
        return css`
          width: 14px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `;
      case 1:
        return css`
          width: 18px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `;
      case 2:
        return css`
          width: 24px;
          align-self: flex-end;
          border-radius: 8px 2px 2px 8px;
        `;
    }
  }}

  ${({ $isOpen, $index }) =>
    $isOpen &&
    css`
      ${$index === 0 &&
      css`
        width: 28px;
        transform: rotate(45deg) translate(8px, 8px);
        border-radius: 8px;
      `}
      ${$index === 1 &&
      css`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${$index === 2 &&
      css`
        width: 28px;
        transform: rotate(-45deg) translate(8px, -8px);
        border-radius: 8px;
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

export const MobileMenuHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const MobileMenuLogo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
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
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const MobileResumeLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  display: inline-block;
  transition: all ${({ theme }) => theme.transitions.base};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.sm};
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    transition: all ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    padding-left: ${({ theme }) => theme.spacing.sm};
    
    &::after {
      background-color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const ResumeButton = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xl};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    transition: all ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    
    &::after {
      background-color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;
