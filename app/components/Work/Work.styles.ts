import styled from 'styled-components';

export const StyledWork = styled.div`
  position: relative;
  width: 100%;
  max-width: 1265px;
  margin: 0 auto;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: auto;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CarouselViewport = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const CarouselTrack = styled.div<{ $offset: number }>`
  display: flex;
  transition: transform ${({ theme }) => theme.transitions.slow} ease-out;
  transform: translateX(${({ $offset }) => $offset}%);
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  min-width: 0;
`;

/* Image 60%, content 40% - fixed size for all cards */
export const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 0;
  align-items: stretch;
  height: 520px;
  min-height: 520px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 260px 1fr;
    gap: 0;
    height: 540px;
    min-height: 540px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 0;
    grid-template-rows: 220px auto;
  }
`;

/* Image half: fixed height, full-height image */
export const SlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg} 0 0
    ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 260px;
    min-height: 260px;
    order: 0;
    grid-row: 1;
    border-radius: ${({ theme }) => theme.borderRadius.lg}
      ${({ theme }) => theme.borderRadius.lg} 0 0;
  }

  @media (max-width: 768px) {
    height: 220px;
    min-height: 220px;
  }
`;

export const SlideImage = styled.div`
  position: absolute;
  inset: 0;
`;

/* Meta bar on top of image - interactive coloured */
export const ImageMetaBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.35) 70%,
    transparent 100%
  );
`;

export const ImageMetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.4);
`;

/* Content half: fixed height, no scroll */
export const DetailsCard = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  background: ${({ theme }) => theme.colors.bgPrimary};
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 1024px) {
    order: 1;
    grid-row: 2;
    height: auto;
    min-height: 280px;
    border-left: none;
    border-radius: 0 0 ${({ theme }) => theme.borderRadius.lg}
      ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    min-height: 0;
    overflow: visible;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

export const DetailsTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  line-height: 1.25;
  padding-right: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

export const DetailsDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    -webkit-line-clamp: 4;
  }
`;

export const DetailsNote = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.4;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.md};
  background: rgba(253, 230, 138, 0.2);
  border-left: 3px solid #eab308;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  animation: noteFadeIn 0.4s ease-out;

  @keyframes noteFadeIn {
    from {
      opacity: 0;
      transform: translateX(-6px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const TechnologiesLabel = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.sm};
`;

export const DetailsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const DetailTag = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailsMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DetailsMetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const DetailsActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

/* Visit Website: teal text link, no background */
export const DetailLinkPrimary = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0;
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.base};

  svg {
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    opacity: 0.85;

    svg {
      transform: translate(2px, -2px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CarouselNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

/* On mobile: groups play + arrows in one row. On desktop: invisible (display: contents). */
export const PlayArrowsRow = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PlayPauseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  order: 0; /* Desktop: play first in row */
`;

export const DotsAndCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  order: 1; /* Desktop: dots/counter in middle */

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    order: -1; /* First row on mobile */
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

/* Inactive: small grey circle. Active: black pill (like image) */
export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '24px' : '6px')};
  height: 6px;
  border-radius: ${({ $active }) => ($active ? '3px' : '50%')};
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.textPrimary : theme.colors.textTertiary};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
`;

export const CarouselCounter = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const NavArrows = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  order: 2; /* Desktop: arrows last in row */
`;

export const NavArrowButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (max-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing.sm};
    padding-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ViewAllButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: 0;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`;
