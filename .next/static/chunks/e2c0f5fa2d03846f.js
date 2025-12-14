(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57405,e=>{"use strict";var r=e.i(71645),o=e.i(5329);e.s(["AOSInit",0,()=>((0,r.useEffect)(()=>{o.default.init({duration:800,easing:"ease-in-out",once:!0,offset:100,delay:0})},[]),null)])},89220,e=>{"use strict";var r=e.i(43476),o=e.i(97053);let t={colors:{bgPrimary:"#0a0a0a",bgSecondary:"#1a1a1a",bgTertiary:"#2a2a2a",textPrimary:"#ffffff",textSecondary:"#b3b3b3",textTertiary:"#808080",accent:"#3b82f6",accentHover:"#2563eb",border:"#333333",inputBg:"#1a1a1a",inputBorder:"#333333",inputFocus:"#3b82f6"},typography:{fontFamilyHeading:'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',fontFamilyBody:'var(--font-inter), Inter, -apple-system, "system-ui", sans-serif',fontFamilyMono:"'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3rem","6xl":"4rem"},fontWeight:{normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem","2xl":"3rem","3xl":"4rem","4xl":"5rem","5xl":"6rem","6xl":"7rem","7xl":"8rem","8xl":"9rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem"},transitions:{fast:"150ms ease",base:"250ms ease",slow:"350ms ease"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},a=o.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${t.colors.bgPrimary};
    color: ${t.colors.textPrimary};
    font-family: ${t.typography.fontFamilyBody};
    font-size: ${t.typography.fontSize.base};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Grid background pattern */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${t.transitions.fast};
  }

  a:hover {
    color: ${t.colors.accent};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  input,
  textarea {
    font-family: inherit;
    color: inherit;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${t.colors.bgPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${t.colors.border};
    border-radius: ${t.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${t.colors.textTertiary};
  }
`;function i({children:e}){return(0,r.jsxs)(o.ThemeProvider,{theme:t,children:[(0,r.jsx)(a,{}),e]})}e.s(["ThemeProvider",()=>i],89220)},68436,e=>{"use strict";var r=e.i(43476);function o({children:e}){return(0,r.jsx)(r.Fragment,{children:e})}e.s(["default",()=>o])}]);