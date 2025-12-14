import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 640px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;
