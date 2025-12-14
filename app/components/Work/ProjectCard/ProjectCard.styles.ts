import styled from 'styled-components';

export const ProjectCardWrapper = styled.div<{ $isReverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isReverse }) => ($isReverse ? '1.5fr 1fr' : '1fr 1.5fr')};
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;

  &:hover .project-title {
    color: #60a5fa;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

export const ProjectInfo = styled.div<{ $isReverse?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 100%;
  order: ${({ $isReverse }) => ($isReverse ? 2 : 1)};

  @media (max-width: 1024px) {
    order: 2;
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
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: gap ${({ theme }) => theme.transitions.base};

  &:hover {
    gap: ${({ theme }) => theme.spacing.sm};
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

  @media (max-width: 1024px) {
    height: 350px;
    order: 1;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const ProjectVisualImg = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
