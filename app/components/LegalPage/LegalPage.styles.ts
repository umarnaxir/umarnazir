import styled, { keyframes, css } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LegalShell = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LegalBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const LegalContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const LegalInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5.5rem ${({ theme }) => theme.spacing.xl} 4rem;

  @media (max-width: 768px) {
    padding: 4rem 0.75rem 2rem;
  }
`;

export const LegalHero = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  animation: ${fadeUp} 0.55s ease both;

  @media (max-width: 768px) {
    margin-bottom: 1.15rem;
  }
`;

export const LegalEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textTertiary};
  margin: 0 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    margin-bottom: 0.4rem;
  }
`;

export const LegalTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 1.45rem;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 0.55rem;
  }
`;

export const LegalSummary = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 42rem;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 0.65rem;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

export const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  letter-spacing: 0.04em;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accentHover : theme.colors.textSecondary};
  border: 1px solid
    ${({ theme }) =>
      theme.mode === 'light' ? 'rgba(13, 148, 136, 0.2)' : theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : '0'};
  padding: 0.4rem 0.75rem;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : theme.colors.bgTertiary};

  @media (max-width: 768px) {
    font-size: 0.58rem;
    padding: 0.22rem 0.42rem;
    letter-spacing: 0.01em;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const TocAside = styled.aside`
  position: sticky;
  top: 4.5rem;
  align-self: start;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? '#0a0a0a' : theme.colors.bgSecondary};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.sm : '0 8px 32px rgba(0, 0, 0, 0.35)'};

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TocLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-bottom: 0.5rem;
  }
`;

export const TocList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 0;

  @media (max-width: 900px) {
    flex-direction: row;
    overflow-x: auto;
    border-left: none;
    gap: 0.5rem;
    padding-bottom: 0.35rem;
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 3px;
    }
  }

  @media (max-width: 768px) {
    gap: 0.35rem;
    padding-bottom: 0.2rem;
  }
`;

export const TocLink = styled.button<{ $active?: boolean }>`
  appearance: none;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.35;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  padding: 0.55rem 0.85rem;
  border-left: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.textPrimary : 'transparent')};
  margin-left: -1px;
  transition:
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
    white-space: nowrap;
    border-left: none;
    margin-left: 0;
    border: 1px solid
      ${({ theme, $active }) =>
        $active ? theme.colors.textPrimary : theme.colors.border};
    padding: 0.45rem 0.8rem;
    background: ${({ theme, $active }) =>
      $active
        ? theme.mode === 'dark'
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.05)'
        : 'transparent'};
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.55rem;
    line-height: 1.25;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
  min-width: 0;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.65rem;
  }
`;

export const SectionBlock = styled.section<{ $active?: boolean }>`
  scroll-margin-top: 5.5rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid
    ${({ theme, $active }) =>
      $active
        ? theme.mode === 'light'
          ? theme.colors.accent
          : theme.colors.textPrimary
        : theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? '#0a0a0a' : theme.colors.bgSecondary};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.sm : '0 8px 32px rgba(0, 0, 0, 0.35)'};
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};
  animation: ${fadeUp} 0.5s ease both;

  ${({ $active, theme }) =>
    $active &&
    css`
      transform: translateY(-1px);
      box-shadow: ${theme.mode === 'light'
        ? theme.shadows.md
        : '0 12px 40px rgba(0, 0, 0, 0.45)'};
    `}

  @media (max-width: 768px) {
    scroll-margin-top: 4rem;
    padding: 0.7rem 0.75rem;
    transform: none;
  }
`;

export const SectionHeading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: -0.02em;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }
`;

export const SectionParagraph = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.72rem;
    line-height: 1.55;
    margin-bottom: 0.4rem;
  }
`;

export const BulletList = styled.ul`
  margin: 0.25rem 0 0;
  padding: 0 0 0 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;

  @media (max-width: 768px) {
    padding-left: 0.85rem;
    gap: 0.3rem;
    margin-top: 0.1rem;
  }
`;

export const BulletItem = styled.li`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.72rem;
    line-height: 1.5;
  }
`;

export const ContactPanel = styled.aside`
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.lg};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? '#0a0a0a' : theme.colors.bgSecondary};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.sm : '0 8px 32px rgba(0, 0, 0, 0.35)'};
  animation: ${fadeUp} 0.55s ease both;

  @media (max-width: 768px) {
    margin-top: 0.15rem;
    padding: 0.75rem;
  }
`;

export const ContactPanelTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }
`;

export const ContactPanelText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  max-width: 36rem;

  @media (max-width: 768px) {
    font-size: 0.72rem;
    line-height: 1.5;
    margin-bottom: 0.65rem;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  color: inherit;
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    gap: 0.15rem;
    padding: 0.55rem 0.65rem;

    &:hover {
      transform: none;
    }
  }
`;

export const ContactCardStatic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: inherit;

  @media (max-width: 768px) {
    gap: 0.15rem;
    padding: 0.55rem 0.65rem;
  }
`;

export const ContactCardLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  display: inline-flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.55rem;
    letter-spacing: 0.06em;
  }
`;

export const ContactCardValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.35rem;
    margin-top: 0.6rem;
  }
`;

const actionStyles = css`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  padding: 0.65rem 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'};
  }

  @media (max-width: 768px) {
    font-size: 0.65rem;
    padding: 0.4rem 0.55rem;
    gap: 0.25rem;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const ActionButton = styled.button`
  ${actionStyles}
`;

export const ActionLink = styled.a`
  ${actionStyles}
`;

export const RelatedRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${({ theme }) => theme.spacing.xl};
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    padding-top: 0.75rem;
    margin-top: 0.35rem;
  }
`;

export const RelatedText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textTertiary};

  @media (max-width: 768px) {
    font-size: 0.68rem;
  }
`;

export const RelatedLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textPrimary};
  padding-bottom: 2px;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 0.68rem;
  }
`;
