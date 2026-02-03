import styled from 'styled-components';

export const StyledContact = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  width: 100%;
`;

export const ContactFormSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transform-style: preserve-3d;
  transform: translateZ(0);
`;
