import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  opacity: 1;
  visibility: visible;
  transform: none;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

export const FooterCopyright = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

export const FooterTagline = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

export const FooterLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const FooterLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
  }
`;

export const BackToTopPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.04)' : theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.sm : 'none'};
  transition: border-color ${({ theme }) => theme.transitions.smooth},
    background-color ${({ theme }) => theme.transitions.smooth},
    box-shadow ${({ theme }) => theme.transitions.smooth},
    transform ${({ theme }) => theme.transitions.smooth},
    color ${({ theme }) => theme.transitions.smooth};

  svg {
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    border-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    background-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.bgTertiary : theme.colors.bgTertiary};
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    ${({ theme }) =>
      theme.mode === 'light' &&
      `
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    `}

    svg {
      transform: translateY(-3px);
    }
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
  }
`;
