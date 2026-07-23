import styled from 'styled-components';

/** Matches NavBar content width: max-width 1280px + horizontal gutters */
export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
`;
