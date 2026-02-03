module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},42602,(a,b,c)=>{"use strict";b.exports=a.r(18622)},87924,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactJsxRuntime},72131,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].React},88947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},53744,a=>{"use strict";var b=a.i(72131),c=a.i(71476);a.s(["AOSInit",0,()=>((0,b.useEffect)(()=>{c.default.init({duration:800,easing:"ease-in-out",once:!0,offset:100,delay:0})},[]),null)])},21991,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(34043);let f={bgPrimary:"#0a0a0a",bgSecondary:"#1a1a1a",bgTertiary:"#2a2a2a",textPrimary:"#ffffff",textSecondary:"#b3b3b3",textTertiary:"#808080",accent:"#0d9488",accentHover:"#0f766e",border:"#333333",inputBg:"#1a1a1a",inputBorder:"#333333",inputFocus:"#0d9488"},g={bgPrimary:"#FFFFFF",bgSecondary:"#EBEBEB",bgTertiary:"#D5D5D5",textPrimary:"#000000",textSecondary:"#4A4A4A",textTertiary:"#6B6B6B",accent:"#0d9488",accentHover:"#0f766e",border:"#E0E0E0",inputBg:"#F5F5F5",inputBorder:"#E0E0E0",inputFocus:"#0d9488"},h={typography:{fontFamilyHeading:'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',fontFamilyBody:'var(--font-lexend), "Lexend", -apple-system, "system-ui", sans-serif',fontFamilyMono:"'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"2rem","4xl":"2.5rem","5xl":"3rem","6xl":"4rem"},fontWeight:{normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem","2xl":"3rem","3xl":"4rem","4xl":"5rem","5xl":"6rem","6xl":"7rem","7xl":"8rem","8xl":"9rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem"},transitions:{fast:"150ms ease",base:"250ms ease",slow:"350ms ease"},zIndex:{dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},i=(a="dark")=>({mode:a,colors:"light"===a?g:f,...h});i("dark");let j=d.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme:a})=>a.colors.bgPrimary};
    color: ${({theme:a})=>a.colors.textPrimary};
    font-family: ${({theme:a})=>a.typography.fontFamilyBody};
    font-size: ${({theme:a})=>a.typography.fontSize.base};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color ${({theme:a})=>a.transitions.base}, color ${({theme:a})=>a.transitions.base};
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
      linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
    opacity: ${({theme:a})=>+("dark"===a.mode)};
    transition: opacity ${({theme:a})=>a.transitions.base};
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
    opacity: ${({theme:a})=>+("light"===a.mode)};
    transition: opacity ${({theme:a})=>a.transitions.base};
    background-image: 
      linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(13, 148, 136, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, rgba(13, 148, 136, 0.04) 0%, transparent 100%);
    background-size: 
      50px 50px,
      40px 40px,
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
    transition: color ${({theme:a})=>a.transitions.fast};
  }

  a:hover {
    color: ${({theme:a})=>a.colors.accent};
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

  /* Apply Lexend to all paragraphs and plain text elements, excluding headings */
  p {
    font-family: ${({theme:a})=>a.typography.fontFamilyBody};
  }

  span {
    font-family: inherit;
  }

  /* Ensure headings keep their heading font */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:a})=>a.typography.fontFamilyHeading};
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:a})=>a.colors.bgPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:a})=>a.colors.border};
    border-radius: ${({theme:a})=>a.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:a})=>a.colors.textTertiary};
  }
`;function k({children:a}){let[f,g]=(0,c.useState)(()=>"dark"),[h,k]=(0,c.useState)(!1);(0,c.useEffect)(()=>{k(!0)},[]),(0,c.useEffect)(()=>{h&&(localStorage.setItem("theme",f),document.documentElement.setAttribute("data-theme",f))},[f,h]);let l=i(f);return(0,b.jsx)(e.ThemeContext.Provider,{value:{theme:f,toggleTheme:()=>{g(a=>"dark"===a?"light":"dark")}},children:(0,b.jsxs)(d.ThemeProvider,{theme:l,children:[(0,b.jsx)(j,{}),a]})})}a.s(["ThemeProvider",()=>k],21991)},42243,a=>{"use strict";var b=a.i(87924);function c({children:a}){return(0,b.jsx)(b.Fragment,{children:a})}a.s(["default",()=>c])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8adf083._.js.map