import styled from 'styled-components';

export const LoaderContainer = styled.div<{ $bgColor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor, theme }) => 
    $bgColor || theme?.colors?.bgPrimary || '#0a0a0a'};
  z-index: 9999;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
