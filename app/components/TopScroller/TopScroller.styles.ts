import styled from 'styled-components';

export const ProgressTrack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.14)' : 'rgba(15, 23, 42, 0.12)'};
  pointer-events: none;
`;

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  /* White in dark mode, black in light mode */
  background: ${({ theme }) => theme.colors.textPrimary};
  transform-origin: left center;
  transform: scaleX(0);
  will-change: transform;
  pointer-events: none;
`;
