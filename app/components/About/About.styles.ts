import styled from 'styled-components';

export const StyledAbout = styled.div`
  position: relative;
`;

/** Single bg div: content + image inside, ~80% viewport height (20% less) */
export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 0;
  align-items: stretch;
  min-height: 80vh;
  min-height: 80dvh;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transform-style: preserve-3d;
  transition: border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2),
      0 0 0 1px ${({ theme }) => theme.colors.accent}40;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

/** Left div: content (same bg as parent) */
export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing['3xl']};
  min-height: 0;
  justify-content: center;

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

/** Right div: image (same bg div as content) */
export const AboutVisual = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  position: relative;
  min-height: 0;

  @media (max-width: 1024px) {
    order: 1;
    min-height: 520px;
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

/** Image fills its column, no extra radius (parent has overflow hidden) */
export const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
    min-height: 520px;
  }
`;

