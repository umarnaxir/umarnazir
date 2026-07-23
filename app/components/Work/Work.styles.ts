import styled from 'styled-components';
import Link from 'next/link';

export const WorkSection = styled.section`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgPrimary};
`;

export const WorkPin = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4.5rem 0 ${({ theme }) => theme.spacing.xl};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 4.25rem 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 768px) {
    padding: 3.75rem 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const WorkInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;

export const WorkHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-shrink: 0;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  z-index: 2;

  @media (max-width: 1024px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const WorkTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.01em;
`;

export const WorkCounter = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 0.04em;
  white-space: nowrap;
`;

/** Fixed stage — all cards occupy this same slot */
export const CardsStage = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: hidden;
`;

/** Full card stacked in the same place */
export const ProjectCard = styled.article`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  will-change: transform, opacity;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const CardMedia = styled.div`
  position: relative;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.md : 'none'};
  border: ${({ theme }) =>
    theme.mode === 'light' ? `1px solid ${theme.colors.border}` : 'none'};
  transition: box-shadow ${({ theme }) => theme.transitions.smooth},
    border-color ${({ theme }) => theme.transitions.smooth};

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    &:hover {
      box-shadow: ${theme.shadows.hover};
      border-color: ${theme.colors.accent};
    }
  `}
`;

export const MediaBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  z-index: 2;
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : theme.borderRadius.sm};
  background: ${({ theme }) =>
    theme.mode === 'light'
      ? 'rgba(255, 255, 255, 0.88)'
      : 'rgba(20, 20, 20, 0.72)'};
  backdrop-filter: blur(8px);
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textSecondary};
  border: ${({ theme }) =>
    theme.mode === 'light' ? '1px solid rgba(13, 148, 136, 0.2)' : 'none'};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.sm};
    justify-content: flex-start;
  }
`;

export const ProjectNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ProjectNavItem = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: 0.2rem 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme, $active }) =>
    $active ? theme.typography.fontSize.base : theme.typography.fontSize.sm};
  font-weight: ${({ theme, $active }) =>
    $active
      ? theme.typography.fontWeight.semibold
      : theme.typography.fontWeight.normal};
  color: ${({ theme, $active }) =>
    $active
      ? theme.mode === 'light'
        ? theme.colors.accent
        : theme.colors.textPrimary
      : theme.colors.textTertiary};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: color 0.35s ease, opacity 0.35s ease, font-size 0.35s ease;
  line-height: 1.35;

  &:hover {
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 4px;
  }
`;

export const ProjectNavNumber = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: inherit;
  letter-spacing: 0.02em;
  flex-shrink: 0;
`;

export const ProjectNavTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  min-height: 0;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const DetailsCategory = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textTertiary};
`;

export const DetailsTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(1.15rem, 1.8vw, 1.65rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const DetailsDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;
  margin: 0;
  max-width: 42ch;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: none;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: 1.5;
    -webkit-line-clamp: 2;
  }
`;

export const DetailsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 1024px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
    padding-bottom: 2px;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DetailTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accentHover : theme.colors.textSecondary};
  border: ${({ theme }) =>
    theme.mode === 'light' ? '1px solid rgba(13, 148, 136, 0.18)' : 'none'};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all ${({ theme }) => theme.transitions.smooth};

  ${({ theme }) =>
    theme.mode === 'light' &&
    `
    &:hover {
      border-color: ${theme.colors.accent};
      color: ${theme.colors.accent};
      transform: translateY(-1px);
    }
  `}
`;

export const DetailsActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: 0;
  }
`;

export const ViewLiveButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0.7rem 1.15rem;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.lg : theme.borderRadius.md};
  background: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
  color: ${({ theme }) =>
    theme.mode === 'light' ? '#ffffff' : theme.colors.bgPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${({ theme }) =>
    theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.fast};
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? '0 4px 14px rgba(13, 148, 136, 0.25)' : 'none'};

  svg {
    flex-shrink: 0;
  }

  &:hover {
    ${({ theme }) =>
      theme.mode === 'light'
        ? `
      background: ${theme.colors.accentHover};
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(13, 148, 136, 0.35);
      opacity: 1;
    `
        : `
      opacity: 0.88;
    `}
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
  }
`;

export const AllWorkLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${({ theme }) =>
    theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.fast};

  svg {
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    ${({ theme }) =>
      theme.mode === 'light'
        ? `
      color: ${theme.colors.accent};
      opacity: 1;
    `
        : `
      opacity: 0.75;
    `}

    svg {
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
  }
`;

export const ScrollRail = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 3;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ScrollDots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
`;

export const ScrollDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '7px' : '5px')};
  height: ${({ $active }) => ($active ? '7px' : '5px')};
  padding: 0;
  border: none;
  border-radius: 50%;
  background: ${({ theme, $active }) =>
    $active
      ? theme.mode === 'light'
        ? theme.colors.accent
        : theme.colors.textPrimary
      : theme.colors.textTertiary};
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  cursor: pointer;
  transition: width ${({ theme }) => theme.transitions.fast},
    height ${({ theme }) => theme.transitions.fast},
    opacity ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 1;
    background: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
  }
`;
