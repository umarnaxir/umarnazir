(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57405,e=>{"use strict";var t=e.i(71645),r=e.i(5329);e.s(["AOSInit",0,()=>((0,t.useEffect)(()=>{r.default.init({duration:800,easing:"ease-in-out",once:!0,offset:100,delay:0})},[]),null)])},89220,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(97053),o=e.i(59657);let n={bgPrimary:"#0a0a0a",bgSecondary:"#1a1a1a",bgTertiary:"#2a2a2a",textPrimary:"#ffffff",textSecondary:"#b3b3b3",textTertiary:"#808080",accent:"#0d9488",accentHover:"#0f766e",border:"#333333",inputBg:"#1a1a1a",inputBorder:"#333333",inputFocus:"#0d9488"},i={bgPrimary:"#FFFFFF",bgSecondary:"#F5F5F5",bgTertiary:"#E5E5E5",textPrimary:"#000000",textSecondary:"#4A4A4A",textTertiary:"#6B6B6B",accent:"#0d9488",accentHover:"#0f766e",border:"#E0E0E0",inputBg:"#F5F5F5",inputBorder:"#E0E0E0",inputFocus:"#0d9488"},s={typography:{fontFamilyHeading:'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',fontFamilyBody:'var(--font-inter), Inter, -apple-system, "system-ui", sans-serif',fontFamilyMono:"'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3rem","6xl":"4rem"},fontWeight:{normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem","2xl":"3rem","3xl":"4rem","4xl":"5rem","5xl":"6rem","6xl":"7rem","7xl":"8rem","8xl":"9rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem"},transitions:{fast:"150ms ease",base:"250ms ease",slow:"350ms ease"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},l=(e="dark")=>({mode:e,colors:"light"===e?i:n,...s});l("dark");let d=a.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme:e})=>e.colors.bgPrimary};
    color: ${({theme:e})=>e.colors.textPrimary};
    font-family: ${({theme:e})=>e.typography.fontFamilyBody};
    font-size: ${({theme:e})=>e.typography.fontSize.base};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color ${({theme:e})=>e.transitions.base}, color ${({theme:e})=>e.transitions.base};
  }

  /* Grid background pattern - only visible in dark mode */
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
    opacity: ${({theme:e})=>+("dark"===e.mode)};
    transition: opacity ${({theme:e})=>e.transitions.base};
  }

  /* Grid background pattern for light mode - subtle teal grid */
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: ${({theme:e})=>+("light"===e.mode)};
    transition: opacity ${({theme:e})=>e.transitions.base};
    background-image: 
      linear-gradient(rgba(13, 148, 136, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(13, 148, 136, 0.03) 1px, transparent 1px),
      radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(13, 148, 136, 0.03) 0%, transparent 50%),
      linear-gradient(135deg, rgba(13, 148, 136, 0.015) 0%, transparent 100%);
    background-size: 
      50px 50px,
      50px 50px,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%;
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({theme:e})=>e.transitions.fast};
  }

  a:hover {
    color: ${({theme:e})=>e.colors.accent};
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
    background: ${({theme:e})=>e.colors.bgPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.textTertiary};
  }
`;function c({children:e}){let[n,i]=(0,r.useState)(()=>{{let e=localStorage.getItem("theme");if("dark"===e||"light"===e)return document.documentElement.setAttribute("data-theme",e),e}return document.documentElement.setAttribute("data-theme","dark"),"dark"}),[s,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{c(!0)},[]),(0,r.useEffect)(()=>{s&&(localStorage.setItem("theme",n),document.documentElement.setAttribute("data-theme",n))},[n,s]);let m=l(n);return(0,t.jsx)(o.ThemeContext.Provider,{value:{theme:n,toggleTheme:()=>{i(e=>"dark"===e?"light":"dark")}},children:(0,t.jsxs)(a.ThemeProvider,{theme:m,children:[(0,t.jsx)(d,{}),e]})})}e.s(["ThemeProvider",()=>c],89220)},68436,e=>{"use strict";var t=e.i(43476);function r({children:e}){return(0,t.jsx)(t.Fragment,{children:e})}e.s(["default",()=>r])}]);