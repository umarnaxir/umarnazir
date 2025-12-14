import styled from 'styled-components';

export const StyledExperience = styled.div`
  position: relative;
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['6xl']};

  @media (max-width: 768px) {
    padding-left: ${({ theme }) => theme.spacing['xxl']};
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const TimelineItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ExperienceDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0;
  width: 100%;
`;
