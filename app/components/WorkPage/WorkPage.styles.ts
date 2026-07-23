import styled, { css } from 'styled-components';

export const WorkPageShell = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: visible;
`;

/** Full-bleed hero band — galaxy fills edge-to-edge from page top (under navbar) */
export const WorkHeroBand = styled.section`
  position: relative;
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: 42vh;
  }
`;

export const WorkHeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const WorkHero = styled.header`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  column-gap: ${({ theme }) => theme.spacing['3xl']};
  row-gap: ${({ theme }) => theme.spacing.md};
  align-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  /* Clear fixed navbar; no extra top gap above the galaxy */
  padding: calc(${({ theme }) => theme.spacing['5xl']} + 48px)
    ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 0;
    row-gap: ${({ theme }) => theme.spacing.md};
    align-items: start;
    padding: calc(${({ theme }) => theme.spacing['4xl']} + 56px)
      0.75rem
      ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const WorkPageInner = styled.div`
  flex: 1 0 auto;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing['4xl']};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md}
      0.75rem
      ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const WorkEyebrow = styled.p`
  grid-column: 1;
  grid-row: 1;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.accent : theme.colors.textTertiary};
  margin: 0;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: auto;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

export const WorkTitle = styled.h1`
  grid-column: 1;
  grid-row: 2;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  align-self: end;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: auto;
    font-size: clamp(2.75rem, 16vw, 3.75rem);
    padding-right: 0;
  }
`;

export const WorkSubtitle = styled.p`
  grid-column: 1;
  grid-row: 3;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 36rem;
  width: 100%;
  margin: 0;
  white-space: normal;
  align-self: start;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: auto;
    max-width: 100%;
    font-size: 0.875rem;
    padding-right: 0;
  }
`;

export const WorkCountBlock = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  align-self: end;
  text-align: right;

  @media (max-width: 900px) {
    position: static;
    grid-column: 1;
    grid-row: auto;
    order: 4;
    align-self: flex-end;
    justify-self: end;
    margin-top: ${({ theme }) => theme.spacing.sm};
    flex-shrink: 0;
  }
`;

export const WorkCount = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(6rem, 16vw, 11rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 900px) {
    font-size: clamp(4.25rem, 22vw, 6rem);
    line-height: 0.85;
    letter-spacing: -0.04em;
  }
`;

export const WorkCountLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  text-align: right;
  padding-top: 0.15em;

  @media (max-width: 900px) {
    font-size: clamp(0.75rem, 3.2vw, 0.95rem);
    letter-spacing: 0.12em;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    padding-top: 0.25em;
    max-width: none;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;

export const ToolbarControls = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ViewToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  border: none;
  background: transparent;
  padding: 0;
`;

export const ViewToggleButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.md : theme.borderRadius.sm};
  background: ${({ theme, $active }) =>
    $active
      ? theme.mode === 'light'
        ? theme.colors.accent
        : theme.colors.textPrimary
      : 'transparent'};
  color: ${({ theme, $active }) =>
    $active
      ? theme.mode === 'light'
        ? '#ffffff'
        : theme.colors.bgPrimary
      : theme.colors.textSecondary};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme, $active }) =>
      $active
        ? theme.mode === 'light'
          ? '#ffffff'
          : theme.colors.bgPrimary
        : theme.mode === 'light'
          ? theme.colors.accent
          : theme.colors.textPrimary};
    background: ${({ theme, $active }) =>
      $active
        ? theme.mode === 'light'
          ? theme.colors.accentHover
          : theme.colors.textPrimary
        : theme.colors.bgSecondary};
  }
`;

export const ResultsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0;
  flex: 1;
`;

export const ProjectGrid = styled.div<{ $view: 'grid' | 'list' }>`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ $view }) =>
    $view === 'grid'
      ? css`
          grid-template-columns: repeat(2, minmax(0, 1fr));

          @media (max-width: 900px) {
            grid-template-columns: 1fr;
          }
        `
      : css`
          grid-template-columns: 1fr;
          gap: ${({ theme }) => theme.spacing.md};

          @media (max-width: 768px) {
            gap: 0.65rem;
          }
        `}
`;

export const ProjectCard = styled.article<{ $view: 'grid' | 'list' }>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.xl : theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transform-origin: center;
  will-change: transform;
  isolation: isolate;
  transition: border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          display: grid;
          grid-template-columns: 140px minmax(0, 1fr);
          align-items: stretch;
          min-height: 112px;
          background: ${theme.mode === 'light' ? theme.colors.bgSecondary : '#0a0a0a'};
          box-shadow: ${theme.mode === 'light'
            ? theme.shadows.sm
            : '0 4px 18px rgba(0, 0, 0, 0.28)'};

          @media (max-width: 768px) {
            grid-template-columns: 88px minmax(0, 1fr);
            min-height: 88px;
            border-radius: ${theme.borderRadius.lg};
          }
        `
      : css`
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          aspect-ratio: 4 / 3;
          min-height: 300px;
          background: #0a0a0a;
          box-shadow: ${theme.mode === 'light'
            ? theme.shadows.md
            : '0 8px 28px rgba(0, 0, 0, 0.35)'};

          @media (max-width: 768px) {
            aspect-ratio: 5 / 4;
            min-height: 260px;
          }
        `}

  &:hover {
    border-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : 'rgba(255, 255, 255, 0.28)'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'light'
        ? theme.shadows.hover
        : '0 16px 40px rgba(0, 0, 0, 0.5)'};
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) =>
        theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
    outline-offset: 3px;
  }
`;

export const CardMedia = styled.div<{ $view: 'grid' | 'list' }>`
  overflow: hidden;
  background: #111;

  img {
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.45s ease;
  }

  ${({ $view }) =>
    $view === 'list'
      ? css`
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 112px;

          img {
            filter: brightness(0.95);
          }

          ${ProjectCard}:hover & img {
            transform: scale(1.04);
          }

          @media (max-width: 768px) {
            min-height: 88px;
          }
        `
      : css`
          position: absolute;
          inset: 0;
          z-index: 0;

          img {
            filter: brightness(0.9);
          }

          ${ProjectCard}:hover & img {
            transform: scale(1.05);
            filter: brightness(0.98);
          }
        `}
`;

export const CardOverlay = styled.div<{ $view?: 'grid' | 'list' }>`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  ${({ $view }) =>
    $view === 'list'
      ? css`
          display: none;
        `
      : css`
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.72) 22%,
            rgba(0, 0, 0, 0.35) 48%,
            rgba(0, 0, 0, 0.08) 72%,
            transparent 100%
          );

          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 55%;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.75) 0%,
              rgba(0, 0, 0, 0.35) 45%,
              transparent 100%
            );
          }
        `}
`;

export const CardIndex = styled.span<{ $view?: 'grid' | 'list' }>`
  position: absolute;
  z-index: 3;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  letter-spacing: 0.1em;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          top: 0.4rem;
          left: 0.4rem;
          font-size: 0.55rem;
          padding: 0.15rem 0.35rem;
          border-radius: ${theme.borderRadius.sm};

          @media (max-width: 768px) {
            top: 0.3rem;
            left: 0.3rem;
            font-size: 0.5rem;
            padding: 0.12rem 0.28rem;
          }
        `
      : css`
          top: ${theme.spacing.md};
          left: ${theme.spacing.md};
          font-size: 0.7rem;
          padding: 0.3rem 0.55rem;
          border-radius: ${theme.borderRadius.md};

          @media (max-width: 768px) {
            top: ${theme.spacing.sm};
            left: ${theme.spacing.sm};
            font-size: 0.6rem;
            padding: 0.25rem 0.45rem;
          }
        `}
`;

export const CardBody = styled.div<{ $view: 'grid' | 'list' }>`
  position: relative;
  z-index: 2;
  display: flex;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          margin-top: 0;
          background: ${theme.mode === 'light' ? theme.colors.bgSecondary : '#0a0a0a'};

          @media (max-width: 768px) {
            padding: 0.55rem 0.65rem;
            gap: 0.45rem;
          }
        `
      : css`
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 1rem 1rem 0.9rem;
          margin-top: auto;

          @media (max-width: 768px) {
            padding: 0.85rem;
            gap: 0.55rem;
          }
        `}
`;

export const CardContent = styled.div<{ $view?: 'grid' | 'list' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  flex: 1;

  ${({ $view }) =>
    $view === 'list'
      ? css`
          justify-content: center;
          gap: 0.15rem;
          text-shadow: none;
        `
      : css`
          justify-content: flex-end;
          gap: 0.2rem;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.65), 0 1px 3px rgba(0, 0, 0, 0.85);
        `}
`;

export const CardMeta = styled.div<{ $view?: 'grid' | 'list' }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          font-size: 0.62rem;
          color: ${theme.colors.textTertiary};

          @media (max-width: 768px) {
            font-size: 0.52rem;
            letter-spacing: 0.05em;
            gap: 0.25rem;
          }
        `
      : css`
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.72);
        `}
`;

export const CardTitle = styled.h2<{ $view?: 'grid' | 'list' }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          font-size: 1.05rem;
          color: ${theme.colors.textPrimary};
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;

          @media (max-width: 768px) {
            font-size: 0.85rem;
            line-height: 1.2;
          }
        `
      : css`
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          color: #ffffff;
        `}
`;

export const CardDescription = styled.p<{ $view?: 'grid' | 'list' }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          font-size: 0.78rem;
          line-height: 1.4;
          color: ${theme.colors.textSecondary};
          -webkit-line-clamp: 2;

          @media (max-width: 768px) {
            font-size: 0.68rem;
            line-height: 1.35;
            -webkit-line-clamp: 2;
          }
        `
      : css`
          font-size: 0.78rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.8);
          -webkit-line-clamp: 2;
        `}
`;

export const VisitLink = styled.a<{ $view?: 'grid' | 'list' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: ${({ $view }) => ($view === 'list' ? 'center' : 'flex-end')};
  gap: 0.28rem;
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: 0.62rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  padding: 0.32rem 0.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background 0.3s ease, border-color 0.3s ease, gap 0.3s ease, color 0.3s ease;

  svg {
    width: 11px;
    height: 11px;
  }

  ${({ $view, theme }) =>
    $view === 'list'
      ? css`
          color: ${theme.mode === 'light' ? theme.colors.accent : theme.colors.textPrimary};
          border: 1px solid ${theme.colors.border};
          background: ${theme.mode === 'light' ? theme.colors.bgTertiary : 'rgba(255,255,255,0.04)'};
          box-shadow: none;

          &:hover {
            gap: 0.38rem;
            color: ${theme.mode === 'light' ? '#fff' : theme.colors.textPrimary};
            background: ${theme.mode === 'light' ? theme.colors.accent : 'rgba(255,255,255,0.1)'};
            border-color: ${theme.mode === 'light' ? theme.colors.accent : 'rgba(255,255,255,0.35)'};
          }

          @media (max-width: 768px) {
            padding: 0.28rem 0.45rem;
            font-size: 0.55rem;
          }
        `
      : css`
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);

          &:hover {
            gap: 0.38rem;
            color: #ffffff;
            background: ${theme.mode === 'light'
              ? theme.colors.accent
              : 'rgba(255, 255, 255, 0.16)'};
            border-color: ${theme.mode === 'light'
              ? theme.colors.accent
              : 'rgba(255, 255, 255, 0.5)'};
          }
        `}
`;
