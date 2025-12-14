import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
