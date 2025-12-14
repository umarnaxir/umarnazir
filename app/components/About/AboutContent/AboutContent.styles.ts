import styled from 'styled-components';

export const AboutDescription = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize['base']};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
