import styled from 'styled-components';

export const ProjectCardWrapper = styled.div<{ $isReverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isReverse }) => ($isReverse ? '1.5fr 1fr' : '1fr 1.5fr')};
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  transition: transform ${({ theme }) => theme.transitions.base};

  &:hover .project-title {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover .project-visual {
    @media (min-width: 1025px) {
      transform: scale(1.02);
      
      img {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
    
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const ProjectInfo = styled.div<{ $isReverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 100%;
  order: ${({ $isReverse }) => ($isReverse ? 2 : 1)};
  transition: opacity ${({ theme }) => theme.transitions.base};

  @media (max-width: 1024px) {
    order: 1;
    animation: fadeInUp 0.6s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectNumber = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  line-height: 1;
`;

export const ProjectMeta = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ProjectMetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ProjectYear = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
`;

export const ProjectCategory = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProjectTitleWrapper = styled.div``;

export const ProjectTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  display: block;
`;

export const ProjectDescription = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  &.project-links-mobile {
    margin-top: ${({ theme }) => theme.spacing.lg};
    animation: fadeInUp 0.6s ease-out 0.4s both;
    order: 3;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectNoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ProjectLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: gap ${({ theme }) => theme.transitions.base};

  &:hover {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ProjectNote = styled.button<{ $isOpen?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  width: fit-content;
  transition: gap ${({ theme }) => theme.transitions.base};

  &:hover {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (min-width: 1025px) {
    &:hover .project-note-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(8px);
    }
  }
`;

export const ProjectNoteTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: normal;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0;
  visibility: hidden;
  transition: opacity ${({ theme }) => theme.transitions.base},
              visibility ${({ theme }) => theme.transitions.base},
              transform ${({ theme }) => theme.transitions.base};
  z-index: 1000;
  margin-top: ${({ theme }) => theme.spacing.xs};
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ProjectNoteContent = styled.div<{ $isOpen: boolean }>`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: normal;
  border: 1px solid ${({ theme }) => theme.colors.border};
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitions.base},
              opacity ${({ theme }) => theme.transitions.base},
              padding ${({ theme }) => theme.transitions.base},
              margin-top ${({ theme }) => theme.transitions.base};
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const ProjectVisual = styled.div<{ $isReverse?: boolean }>`
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  order: ${({ $isReverse }) => ($isReverse ? 1 : 2)};
  transition: transform ${({ theme }) => theme.transitions.base}, opacity ${({ theme }) => theme.transitions.base};

  img {
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  @media (max-width: 1024px) {
    height: 350px;
    order: 2;
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  @media (max-width: 768px) {
    height: 280px;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectVisualImg = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
