import styled from 'styled-components';

export const StyledAbout = styled.div`
  position: relative;
`;

/** Single card: content + image share equal height */
export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 0;
  align-items: stretch;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius['2xl'] : theme.borderRadius.lg};
  overflow: hidden;
  transform-style: preserve-3d;
  box-shadow: ${({ theme }) =>
    theme.mode === 'light' ? theme.shadows.md : 'none'};
  transition: border-color ${({ theme }) =>
      theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.base},
    box-shadow ${({ theme }) =>
      theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.base},
    transform ${({ theme }) =>
      theme.mode === 'light' ? theme.transitions.smooth : theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.accent : theme.colors.textTertiary};
    box-shadow: ${({ theme }) =>
      theme.mode === 'light' ? theme.shadows.hover : '0 12px 40px rgba(0, 0, 0, 0.2)'};
    ${({ theme }) =>
      theme.mode === 'light' &&
      `
      transform: translateY(-4px);
    `}
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

/** Left: content — card height follows this column on desktop */
export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing['2xl']};
  min-height: 0;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    order: 2;
    padding: ${({ theme }) => theme.spacing.sm} 0;
    animation: fadeInUp 0.6s ease-out 0.5s both;
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

/** Right: image stretches to match content height */
export const AboutVisual = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  min-height: 0;
  align-self: stretch;

  @media (max-width: 1024px) {
    order: 1;
    min-height: 360px;
    animation: fadeInUp 0.6s ease-out both;
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

export const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    min-height: 360px;
  }
`;
