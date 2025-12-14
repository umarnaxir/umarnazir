import styled from 'styled-components';

export const TimelineItem = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const TimelineDotWrapper = styled.div`
  position: absolute;
  left: calc(-1 * ${({ theme }) => theme.spacing['4xl']} - ${({ theme }) => theme.spacing.xl} + 1px - 16px);
  top: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({ theme }) => theme.spacing.xl} - ${({ theme }) => theme.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const TimelineDotOuter = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    border-color: ${({ theme }) => theme.colors.accentHover};
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`;

export const TimelineDot = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const StyledExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${TimelineItem}:hover & {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(8px);
    box-shadow: 0 4px 24px rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};

    ${TimelineItem}:hover & {
      transform: translateX(4px);
      box-shadow: 0 2px 12px rgba(59, 130, 246, 0.12);
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const CardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CompanyName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }
`;

export const Role = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #60a5fa;
  }
`;

export const LocationType = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    line-height: 1.4;
  }
`;

export const DateLocation = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    text-align: left;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    white-space: normal;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const ExperienceDescription = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ExperienceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ExperienceListItem = styled.li`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const ExperienceListArrow = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 6px;
  flex-shrink: 0;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  svg {
    color: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`;

export const ExperienceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;
