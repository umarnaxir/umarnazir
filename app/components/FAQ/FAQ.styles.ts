import styled, { css } from 'styled-components';

export const StyledFaq = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;
`;

export const FaqHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  align-items: center;
  width: 100%;
`;

export const FaqTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  line-height: 1.1;
`;

export const FaqSectionNumber = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const FaqHeadline = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  text-align: center;
`;

export const FaqDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  text-align: center;
  max-width: 720px;
`;

export const AccordionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const AccordionItem = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgSecondary};
  overflow: hidden;
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base},
    background ${({ theme }) => theme.transitions.base};

  ${({ $isOpen, theme }) =>
    $isOpen &&
    css`
      border-color: ${theme.colors.accent};
      box-shadow: 0 0 0 1px ${theme.colors.accent};
      background: ${theme.colors.bgSecondary};
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.textTertiary};
  }

  ${({ $isOpen, theme }) =>
    $isOpen &&
    css`
      &:hover {
        border-color: ${theme.colors.accent};
      }
    `}
`;

export const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  text-align: left;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const AccordionIcon = styled.span<{ $isOpen: boolean }>`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  transition: transform ${({ theme }) => theme.transitions.base};
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows ${({ theme }) => theme.transitions.slow} ease-out;
`;

export const AccordionContentInner = styled.div`
  overflow: hidden;
`;

export const AccordionAnswer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  padding-top: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
