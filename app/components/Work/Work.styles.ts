import styled from 'styled-components';

export const StyledWork = styled.div`
  position: relative;
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
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`;
