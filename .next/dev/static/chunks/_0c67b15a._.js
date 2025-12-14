(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Loader/Loader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoaderContainer",
    ()=>LoaderContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const LoaderContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Loader.styles__LoaderContainer",
    componentId: "sc-c4a451a4-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme })=>theme.colors.bgPrimary};
  z-index: 9999;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Loader/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loading$2d$indicators$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-loading-indicators/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Loader$2f$Loader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Loader/Loader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Loader = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Loader$2f$Loader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoaderContainer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$loading$2d$indicators$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeLine"], {
            color: "#316fcc",
            size: "medium",
            text: "",
            textColor: ""
        }, void 0, false, {
            fileName: "[project]/app/components/Loader/Loader.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Loader/Loader.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavBar/NavBar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HamburgerLine",
    ()=>HamburgerLine,
    "Logo",
    ()=>Logo,
    "MobileMenu",
    ()=>MobileMenu,
    "MobileMenuButton",
    ()=>MobileMenuButton,
    "MobileMenuCloseButton",
    ()=>MobileMenuCloseButton,
    "MobileMenuContent",
    ()=>MobileMenuContent,
    "MobileMenuDivider",
    ()=>MobileMenuDivider,
    "MobileMenuHeader",
    ()=>MobileMenuHeader,
    "MobileMenuLogo",
    ()=>MobileMenuLogo,
    "MobileNavLink",
    ()=>MobileNavLink,
    "MobileNavLinkItem",
    ()=>MobileNavLinkItem,
    "MobileNavLinks",
    ()=>MobileNavLinks,
    "NavLink",
    ()=>NavLink,
    "NavLinks",
    ()=>NavLinks,
    "NavRight",
    ()=>NavRight,
    "NavbarContent",
    ()=>NavbarContent,
    "ResumeButton",
    ()=>ResumeButton,
    "ResumeModal",
    ()=>ResumeModal,
    "ResumeModalButton",
    ()=>ResumeModalButton,
    "ResumeModalButtons",
    ()=>ResumeModalButtons,
    "ResumeModalClose",
    ()=>ResumeModalClose,
    "ResumeModalOverlay",
    ()=>ResumeModalOverlay,
    "ResumeModalText",
    ()=>ResumeModalText,
    "ResumeModalTitle",
    ()=>ResumeModalTitle,
    "StyledNavbar",
    ()=>StyledNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const fadeInUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const spinIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  50% {
    opacity: 1;
    transform: rotate(10deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
`;
const StyledNavbar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "NavBar.styles__StyledNavbar",
    componentId: "sc-eefaf6bf-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme })=>theme.zIndex.sticky};
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme })=>theme.colors.border};
  padding: ${({ theme })=>theme.spacing.lg} 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme })=>theme.colors.textPrimary};
    opacity: ${({ $mobileMenuActive })=>$mobileMenuActive ? 1 : 0};
    transition: opacity ${({ theme })=>theme.transitions.base};
  }

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing.md} 0;
  }
`;
const NavbarContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__NavbarContent",
    componentId: "sc-eefaf6bf-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme })=>theme.spacing.xl};
  position: relative;

  @media (max-width: 768px) {
    padding: 0 ${({ theme })=>theme.spacing.xl};
  }
`;
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "NavBar.styles__Logo",
    componentId: "sc-eefaf6bf-2"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize.lg};
  font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
  color: ${({ theme })=>theme.colors.textPrimary};
  transition: color ${({ theme })=>theme.transitions.fast};
  display: flex;
  align-items: center;
  height: 40px;

  &:hover {
    color: ${({ theme })=>theme.colors.accent};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.base};
    height: 32px;
  }
`;
const NavRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__NavRight",
    componentId: "sc-eefaf6bf-3"
})`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NavBar.styles__NavLinks",
    componentId: "sc-eefaf6bf-4"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "NavBar.styles__NavLink",
    componentId: "sc-eefaf6bf-5"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.colors.textPrimary};
  transition: color ${({ theme })=>theme.transitions.fast};

  &:hover {
    color: ${({ theme })=>theme.colors.textSecondary};
  }
`;
const MobileMenuButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NavBar.styles__MobileMenuButton",
    componentId: "sc-eefaf6bf-6"
})`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme })=>theme.spacing.sm};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1001;
  align-self: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen })=>$isOpen ? 'none' : 'flex'};
  }
`;
const HamburgerLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "NavBar.styles__HamburgerLine",
    componentId: "sc-eefaf6bf-7"
})`
  display: block;
  height: 2px;
  background-color: ${({ theme })=>theme.colors.textPrimary};
  transition: all ${({ theme })=>theme.transitions.base};
  border-radius: 2px;

  ${({ $index })=>{
    switch($index){
        case 0:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          width: 12px;
          align-self: flex-end;
        `;
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          align-self: flex-end;
          width: 18px;
        `;
        case 2:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          width: 24px;
        `;
    }
}}

  ${({ $isOpen, $index })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      ${$index === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${$index === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${$index === 2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`;
const MobileMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__MobileMenu",
    componentId: "sc-eefaf6bf-8"
})`
  display: ${({ $isOpen })=>$isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${({ theme })=>theme.colors.bgPrimary};
  z-index: 1000;
  padding: ${({ theme })=>theme.spacing.lg} ${({ theme })=>theme.spacing.xl};
  overflow-y: auto;
  animation: ${slideDown} ${({ theme })=>theme.transitions.slow} ease-out;
`;
const MobileMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__MobileMenuContent",
    componentId: "sc-eefaf6bf-9"
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const MobileMenuHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__MobileMenuHeader",
    componentId: "sc-eefaf6bf-10"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme })=>theme.spacing.sm};
  padding-bottom: ${({ theme })=>theme.spacing.sm};
`;
const MobileMenuLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "NavBar.styles__MobileMenuLogo",
    componentId: "sc-eefaf6bf-11"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
  color: ${({ theme })=>theme.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out 0.1s forwards;
`;
const MobileMenuCloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NavBar.styles__MobileMenuCloseButton",
    componentId: "sc-eefaf6bf-12"
})`
  background: none;
  border: none;
  color: ${({ theme })=>theme.colors.textPrimary};
  font-size: 48px;
  line-height: 1;
  cursor: pointer;
  padding: ${({ theme })=>theme.spacing.xs};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({ theme })=>theme.transitions.fast};
  opacity: 0;
  animation: ${spinIn} 0.6s ease-out 0.1s forwards;

  &:hover {
    color: ${({ theme })=>theme.colors.accent};
  }
`;
const MobileMenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "NavBar.styles__MobileMenuDivider",
    componentId: "sc-eefaf6bf-13"
})`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  margin-bottom: ${({ theme })=>theme.spacing.lg};
  width: 100%;
`;
const MobileNavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NavBar.styles__MobileNavLinks",
    componentId: "sc-eefaf6bf-14"
})`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`;
const MobileNavLinkItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "NavBar.styles__MobileNavLinkItem",
    componentId: "sc-eefaf6bf-15"
})`
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out forwards;
  animation-delay: ${({ $index })=>0.1 + $index * 0.1}s;
`;
const MobileNavLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "NavBar.styles__MobileNavLink",
    componentId: "sc-eefaf6bf-16"
})`
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  padding: ${({ theme })=>theme.spacing.sm} 0;
  display: block;
  transition: all ${({ theme })=>theme.transitions.base};
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.colors.textPrimary};
  text-decoration: none;

  &:hover {
    color: ${({ theme })=>theme.colors.accent};
    padding-left: ${({ theme })=>theme.spacing.sm};
  }
`;
const ResumeButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "NavBar.styles__ResumeButton",
    componentId: "sc-eefaf6bf-17"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({ theme })=>theme.colors.textPrimary};
  color: ${({ theme })=>theme.colors.textPrimary};
  padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.lg};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme })=>theme.spacing.xl};

  &:hover {
    background-color: ${({ theme })=>theme.colors.textPrimary};
    color: ${({ theme })=>theme.colors.bgPrimary};
  }
`;
const ResumeModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__ResumeModalOverlay",
    componentId: "sc-eefaf6bf-18"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme })=>theme.zIndex.modal};
  padding: ${({ theme })=>theme.spacing.xl};
  animation: ${fadeIn} 0.2s ease-out;
`;
const ResumeModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__ResumeModal",
    componentId: "sc-eefaf6bf-19"
})`
  background-color: ${({ theme })=>theme.colors.bgSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.md};
  padding: ${({ theme })=>theme.spacing['2xl']};
  padding-top: ${({ theme })=>theme.spacing['3xl']};
  max-width: 450px;
  width: 100%;
  position: relative;
  animation: ${slideUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing.xl};
  }
`;
const ResumeModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "NavBar.styles__ResumeModalTitle",
    componentId: "sc-eefaf6bf-20"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textPrimary};
  margin: 0 0 ${({ theme })=>theme.spacing.md} 0;
  line-height: 1.2;
`;
const ResumeModalText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "NavBar.styles__ResumeModalText",
    componentId: "sc-eefaf6bf-21"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  color: ${({ theme })=>theme.colors.textSecondary};
  margin: 0 0 ${({ theme })=>theme.spacing.xl} 0;
  line-height: 1.6;
`;
const ResumeModalButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavBar.styles__ResumeModalButtons",
    componentId: "sc-eefaf6bf-22"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.md};
`;
const ResumeModalButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NavBar.styles__ResumeModalButton",
    componentId: "sc-eefaf6bf-23"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  color: ${({ theme })=>theme.colors.textPrimary};
  background-color: transparent;
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.lg};
  cursor: pointer;
  transition: all ${({ theme })=>theme.transitions.base};
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({ theme })=>theme.colors.textPrimary};
    color: ${({ theme })=>theme.colors.bgPrimary};
    border-color: ${({ theme })=>theme.colors.textPrimary};
    transform: translateY(-1px);
  }
`;
const ResumeModalClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NavBar.styles__ResumeModalClose",
    componentId: "sc-eefaf6bf-24"
})`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  padding: ${({ theme })=>theme.spacing.md};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 ${({ theme })=>theme.borderRadius.md} 0 0;
  transition: all ${({ theme })=>theme.transitions.base};
  font-weight: 300;

  &:hover {
    color: ${({ theme })=>theme.colors.textPrimary};
    background-color: ${({ theme })=>theme.colors.bgTertiary};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavBar/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavBar/NavBar.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const NavBar = ({ name, navItems = [
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Experience',
        href: '#experience'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
] })=>{
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resumeModalOpen, setResumeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            if (mobileMenuOpen || resumeModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "NavBar.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], [
        mobileMenuOpen,
        resumeModalOpen
    ]);
    const toggleMobileMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setMobileMenuOpen(false);
    };
    const handleResumeClick = (e)=>{
        e.preventDefault();
        setResumeModalOpen(true);
    };
    const handleViewResume = ()=>{
        window.open('/resume/cv.pdf', '_blank');
        setResumeModalOpen(false);
    };
    const handleDownloadResume = ()=>{
        const link = document.createElement('a');
        link.href = '/resume/cv.pdf';
        link.download = 'Umar_Nazir_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setResumeModalOpen(false);
    };
    const closeResumeModal = ()=>{
        setResumeModalOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledNavbar"], {
        $mobileMenuActive: mobileMenuOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                        href: "#",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavRight"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLinks"], {
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                            href: item.href,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeButton"], {
                                href: "#",
                                onClick: handleResumeClick,
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuButton"], {
                        $isOpen: mobileMenuOpen,
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HamburgerLine"], {
                                $index: 0,
                                $isOpen: mobileMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HamburgerLine"], {
                                $index: 1,
                                $isOpen: mobileMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HamburgerLine"], {
                                $index: 2,
                                $isOpen: mobileMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenu"], {
                $isOpen: mobileMenuOpen,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        closeMobileMenu();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuLogo"], {
                                    href: "#",
                                    onClick: closeMobileMenu,
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuCloseButton"], {
                                    onClick: closeMobileMenu,
                                    "aria-label": "Close menu",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenuDivider"], {}, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavLinks"], {
                            children: [
                                navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavLinkItem"], {
                                        $index: index,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavLink"], {
                                            href: item.href,
                                            onClick: closeMobileMenu,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavLinkItem"], {
                                    $index: navItems.length,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNavLink"], {
                                        href: "#",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            closeMobileMenu();
                                            handleResumeClick(e);
                                        },
                                        children: "Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            resumeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalOverlay"], {
                onClick: closeResumeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModal"], {
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalTitle"], {
                            children: "Resume Options"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalText"], {
                            children: "Choose an option:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalButtons"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalButton"], {
                                    onClick: handleViewResume,
                                    children: "View Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalButton"], {
                                    onClick: handleDownloadResume,
                                    children: "Download Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeModalClose"], {
                            onClick: closeResumeModal,
                            "aria-label": "Close modal",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NavBar/NavBar.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavBar, "/y8Jug58nGpkWIbI1B4sCxNZcWU=");
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/HeroContent/HeroContent.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Description",
    ()=>Description,
    "Headline",
    ()=>Headline,
    "HeroText",
    ()=>HeroText,
    "Subtitle",
    ()=>Subtitle,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const HeroText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroContent.styles__HeroText",
    componentId: "sc-5ac6c28e-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.md};
  }
`;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "HeroContent.styles__Subtitle",
    componentId: "sc-5ac6c28e-1"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme })=>theme.colors.textSecondary};
  margin: 0;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroContent.styles__Title",
    componentId: "sc-5ac6c28e-2"
})`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "HeroContent.styles__Headline",
    componentId: "sc-5ac6c28e-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme })=>theme.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
    line-height: 1.3;
  }
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "HeroContent.styles__Description",
    componentId: "sc-5ac6c28e-4"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  max-width: 600px;
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: ${({ theme })=>theme.spacing.sm};
    font-size: ${({ theme })=>theme.typography.fontSize.sm};
    line-height: 1.6;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/HeroContent/HeroContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroContent",
    ()=>HeroContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/HeroContent/HeroContent.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const HeroContent = ({ title, headline, description })=>{
    const headlineLines = headline.split('\n').filter((line)=>line.trim() !== '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroText"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subtitle"], {
                "data-aos": "fade-up",
                "data-aos-delay": "0",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                children: headlineLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                        "data-aos": "fade-up",
                        "data-aos-delay": `${100 + index * 100}`,
                        children: line.trim()
                    }, index, false, {
                        fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                "data-aos": "fade-up",
                "data-aos-delay": "400",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroContent;
var _c;
__turbopack_context__.k.register(_c, "HeroContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicatorWrapper",
    ()=>ScrollIndicatorWrapper,
    "ScrollLine",
    ()=>ScrollLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const scrollLineAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: 40px;
    opacity: 1;
  }
  100% {
    height: 0;
    opacity: 0;
  }
`;
const ScrollIndicatorWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ScrollIndicator.styles__ScrollIndicatorWrapper",
    componentId: "sc-fa897f55-0"
})`
  position: absolute;
  bottom: ${({ theme })=>theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.sm};
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    bottom: ${({ theme })=>theme.spacing.md};
    font-size: 0.65rem;
  }
`;
const ScrollLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ScrollIndicator.styles__ScrollLine",
    componentId: "sc-fa897f55-1"
})`
  width: 1px;
  height: 40px;
  background-color: ${({ theme })=>theme.colors.textSecondary};
  animation: ${scrollLineAnimation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicator",
    ()=>ScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const ScrollIndicator = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollIndicatorWrapper"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "SCROLL TO EXPLORE"
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollLine"], {}, void 0, false, {
                fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ScrollIndicator;
var _c;
__turbopack_context__.k.register(_c, "ScrollIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/Hero.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroContentWrapper",
    ()=>HeroContentWrapper,
    "StyledHero",
    ()=>StyledHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledHero = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "Hero.styles__StyledHero",
    componentId: "sc-8af8d994-0"
})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
    min-height: 85vh;
    padding-bottom: ${({ theme })=>theme.spacing['2xl']};
  }
`;
const HeroContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Hero.styles__HeroContentWrapper",
    componentId: "sc-8af8d994-1"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme })=>theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({ theme })=>theme.spacing.xl};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/HeroContent/HeroContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/Hero.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const Hero = ({ title, headline, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledHero"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroContentWrapper"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroContent"], {
                    title: title,
                    headline: headline,
                    description: description
                }, void 0, false, {
                    fileName: "[project]/app/components/Hero/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollIndicator"], {}, void 0, false, {
                fileName: "[project]/app/components/Hero/Hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero/Hero.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Button/Button.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledButton",
    ()=>StyledButton,
    "StyledButtonLink",
    ()=>StyledButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Button.styles__StyledButton",
    componentId: "sc-d2ac6181-0"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme })=>theme.spacing.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant = 'primary' })=>{
    switch($variant){
        case 'primary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.accent};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme })=>theme.colors.accentHover};
          }
        `;
    }
}}

  ${({ $size = 'medium' })=>{
    switch($size){
        case 'small':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      width: 100%;
    `}
`;
const StyledButtonLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "Button.styles__StyledButtonLink",
    componentId: "sc-d2ac6181-1"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme })=>theme.spacing.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;

  ${({ $variant = 'primary' })=>{
    switch($variant){
        case 'primary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.accent};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme })=>theme.colors.accentHover};
          }
        `;
    }
}}

  ${({ $size = 'medium' })=>{
    switch($size){
        case 'small':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      width: 100%;
    `}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Button/Button.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ variant = 'primary', size = 'medium', fullWidth = false, icon: Icon, iconPosition = 'left', children, className = '', as = 'button', href, ...props }, ref)=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            Icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 38,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            Icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 40,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    if (as === 'a' && href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledButtonLink"], {
            ref: ref,
            $variant: variant,
            $size: size,
            $fullWidth: fullWidth,
            href: href,
            className: className,
            ...props,
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/atoms/Button/Button.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledButton"], {
        ref: ref,
        $variant: variant,
        $size: size,
        $fullWidth: fullWidth,
        className: className,
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Button/Button.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Card/Card.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledCard",
    ()=>StyledCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Card.styles__StyledCard",
    componentId: "sc-cb91bbca-0"
})`
  background-color: ${({ theme })=>theme.colors.bgSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.md};
  padding: ${({ theme })=>theme.spacing.xl};
  transition: all ${({ theme })=>theme.transitions.base};

  &:hover {
    border-color: ${({ theme })=>theme.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({ $interactive })=>$interactive && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme })=>theme.colors.accent};
      }
    `}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Card/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Card/Card.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Card = ({ children, className = '', interactive = false, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledCard"], {
        $interactive: interactive,
        className: className,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Card/Card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Tag/Tag.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledTag",
    ()=>StyledTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Tag.styles__StyledTag",
    componentId: "sc-ea18aa85-0"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  background-color: ${({ theme })=>theme.colors.bgTertiary};
  color: ${({ theme })=>theme.colors.textSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  transition: all ${({ theme })=>theme.transitions.fast};

  &:hover {
    border-color: ${({ theme })=>theme.colors.textSecondary};
    color: ${({ theme })=>theme.colors.textPrimary};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Tag/Tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Tag = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTag"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Tag/Tag.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Tag;
var _c;
__turbopack_context__.k.register(_c, "Tag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Input/Input.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorMessage",
    ()=>ErrorMessage,
    "InputWrapper",
    ()=>InputWrapper,
    "Label",
    ()=>Label,
    "StyledInput",
    ()=>StyledInput,
    "StyledTextarea",
    ()=>StyledTextarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Input.styles__InputWrapper",
    componentId: "sc-7de3a321-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xs};
  width: ${({ $fullWidth = true })=>$fullWidth ? '100%' : 'auto'};
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "Input.styles__Label",
    componentId: "sc-7de3a321-1"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.colors.textSecondary};
`;
const StyledInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Input.styles__StyledInput",
    componentId: "sc-7de3a321-2"
})`
  width: 100%;
  padding: ${({ theme })=>theme.spacing.md};
  background-color: ${({ theme })=>theme.colors.inputBg};
  border: 1px solid ${({ theme, $error })=>$error ? '#ef4444' : theme.colors.inputBorder};
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  color: ${({ theme })=>theme.colors.textPrimary};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  transition: all ${({ theme })=>theme.transitions.base};
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error })=>$error ? '#ef4444' : theme.colors.inputFocus};
    background-color: ${({ theme })=>theme.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({ theme })=>theme.colors.textTertiary};
  }
`;
const StyledTextarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "Input.styles__StyledTextarea",
    componentId: "sc-7de3a321-3"
})`
  width: 100%;
  padding: ${({ theme })=>theme.spacing.md};
  background-color: ${({ theme })=>theme.colors.inputBg};
  border: 1px solid ${({ theme, $error })=>$error ? '#ef4444' : theme.colors.inputBorder};
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  color: ${({ theme })=>theme.colors.textPrimary};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  transition: all ${({ theme })=>theme.transitions.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: ${({ theme, $error })=>$error ? '#ef4444' : theme.colors.inputFocus};
    background-color: ${({ theme })=>theme.colors.bgTertiary};
  }

  &::placeholder {
    color: ${({ theme })=>theme.colors.textTertiary};
  }
`;
const ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Input.styles__ErrorMessage",
    componentId: "sc-7de3a321-4"
})`
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  color: #ef4444;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Input/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Input = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
        $fullWidth: fullWidth,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledInput"], {
                $error: !!error,
                className: className,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Input;
const Textarea = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
        $fullWidth: fullWidth,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTextarea"], {
                $error: !!error,
                className: className,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 45,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Textarea;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Text/Text.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledText",
    ()=>StyledText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Text.styles__StyledText",
    componentId: "sc-10b9dfea-0"
})`
  margin: 0;

  ${({ $variant = 'body' })=>{
    switch($variant){
        case 'h1':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['6xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
          }
        `;
        case 'h2':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['5xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize['3xl']};
          }
        `;
        case 'h3':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          }
        `;
        case 'h4':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['3xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize.xl};
          }
        `;
        case 'h5':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;
        `;
        case 'h6':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize.xl};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.5;
        `;
        case 'body':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
          line-height: 1.6;
        `;
        case 'bodyLarge':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.lg};
          line-height: 1.6;
        `;
        case 'bodySmall':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
          line-height: 1.5;
        `;
        case 'caption':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
          line-height: 1.4;
        `;
    }
}}

  ${({ $color = 'primary' })=>{
    switch($color){
        case 'primary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textPrimary};
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textSecondary};
        `;
        case 'tertiary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textTertiary};
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.accent};
        `;
    }
}}

  ${({ $weight })=>{
    if (!$weight) return '';
    switch($weight){
        case 'normal':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.normal};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
        `;
        case 'semibold':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
        `;
        case 'bold':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
        `;
    }
}}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Text = ({ variant = 'body', color = 'primary', weight, as, children, className = '' })=>{
    // Map variant to HTML tag name
    const getTagName = ()=>{
        if (as) {
            return as;
        }
        if (variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6') {
            return variant;
        }
        return 'p';
    };
    const Component = getTagName();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledText"], {
        as: Component,
        $variant: variant,
        $color: color,
        $weight: weight,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Text/Text.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Container/Container.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledContainer",
    ()=>StyledContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Container.styles__StyledContainer",
    componentId: "sc-ab2069fa-0"
})`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme })=>theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 0 ${({ theme })=>theme.spacing.lg};
  }

  @media (max-width: 640px) {
    padding: 0 ${({ theme })=>theme.spacing.md};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Container = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledContainer"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Container/Container.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Section/Section.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledSection",
    ()=>StyledSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "Section.styles__StyledSection",
    componentId: "sc-897389d1-0"
})`
  padding: ${({ theme })=>theme.spacing['4xl']} 0;
  position: relative;

  ${({ $size = 'medium' })=>{
    switch($size){
        case 'small':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing['2xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing.lg} 0;
          }
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing['4xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing['2xl']} 0;
          }
        `;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing['2xl']} 0;
          }
        `;
    }
}}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const Section = ({ children, size = 'medium', className = '', id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledSection"], {
        id: id,
        $size: size,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Section/Section.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Card/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/WorkHeader/WorkHeader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionNumber",
    ()=>SectionNumber,
    "WorkHeaderWrapper",
    ()=>WorkHeaderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const WorkHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WorkHeader.styles__WorkHeaderWrapper",
    componentId: "sc-45d9ae25-0"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.lg};
  margin-bottom: ${({ theme })=>theme.spacing['4xl']};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme })=>theme.spacing.sm};
    margin-bottom: ${({ theme })=>theme.spacing.xl};
  }
`;
const SectionNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "WorkHeader.styles__SectionNumber",
    componentId: "sc-45d9ae25-1"
})`
  font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.lg};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/WorkHeader/WorkHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkHeader",
    ()=>WorkHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const WorkHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkHeaderWrapper"], {
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionNumber"], {
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                children: "Work"
            }, void 0, false, {
                fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WorkHeader;
var _c;
__turbopack_context__.k.register(_c, "WorkHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/ProjectCard/ProjectCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCardWrapper",
    ()=>ProjectCardWrapper,
    "ProjectCategory",
    ()=>ProjectCategory,
    "ProjectDescription",
    ()=>ProjectDescription,
    "ProjectInfo",
    ()=>ProjectInfo,
    "ProjectLink",
    ()=>ProjectLink,
    "ProjectMeta",
    ()=>ProjectMeta,
    "ProjectMetaLeft",
    ()=>ProjectMetaLeft,
    "ProjectNumber",
    ()=>ProjectNumber,
    "ProjectTags",
    ()=>ProjectTags,
    "ProjectTitle",
    ()=>ProjectTitle,
    "ProjectTitleWrapper",
    ()=>ProjectTitleWrapper,
    "ProjectVisual",
    ()=>ProjectVisual,
    "ProjectVisualImg",
    ()=>ProjectVisualImg,
    "ProjectYear",
    ()=>ProjectYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const ProjectCardWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectCardWrapper",
    componentId: "sc-4b02ff16-0"
})`
  display: grid;
  grid-template-columns: ${({ $isReverse })=>$isReverse ? '1.5fr 1fr' : '1fr 1.5fr'};
  gap: ${({ theme })=>theme.spacing['4xl']};
  align-items: center;
  width: 100%;
  padding: ${({ theme })=>theme.spacing['4xl']} 0;

  &:hover .project-title {
    color: #60a5fa;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme })=>theme.spacing['2xl']};
    padding: ${({ theme })=>theme.spacing['2xl']} 0;
  }
`;
const ProjectInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectInfo",
    componentId: "sc-4b02ff16-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.md};
  max-width: 100%;
  order: ${({ $isReverse })=>$isReverse ? 2 : 1};

  @media (max-width: 1024px) {
    order: 2;
  }
`;
const ProjectNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ProjectCard.styles__ProjectNumber",
    componentId: "sc-4b02ff16-2"
})`
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
  line-height: 1;
`;
const ProjectMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectMeta",
    componentId: "sc-4b02ff16-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.spacing.md};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  color: ${({ theme })=>theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
const ProjectMetaLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectMetaLeft",
    componentId: "sc-4b02ff16-4"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.md};
`;
const ProjectYear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ProjectCard.styles__ProjectYear",
    componentId: "sc-4b02ff16-5"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
`;
const ProjectCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ProjectCard.styles__ProjectCategory",
    componentId: "sc-4b02ff16-6"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
`;
const ProjectTitleWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectTitleWrapper",
    componentId: "sc-4b02ff16-7"
})``;
const ProjectTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ProjectCard.styles__ProjectTitle",
    componentId: "sc-4b02ff16-8"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  color: ${({ theme })=>theme.colors.textPrimary};
  transition: color ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  display: block;
`;
const ProjectDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ProjectCard.styles__ProjectDescription",
    componentId: "sc-4b02ff16-9"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
`;
const ProjectTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectTags",
    componentId: "sc-4b02ff16-10"
})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme })=>theme.spacing.sm};
  margin-top: ${({ theme })=>theme.spacing.sm};
`;
const ProjectLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "ProjectCard.styles__ProjectLink",
    componentId: "sc-4b02ff16-11"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.xs};
  color: ${({ theme })=>theme.colors.accent};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: ${({ theme })=>theme.spacing.md};
  transition: gap ${({ theme })=>theme.transitions.base};

  &:hover {
    gap: ${({ theme })=>theme.spacing.sm};
  }
`;
const ProjectVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectVisual",
    componentId: "sc-4b02ff16-12"
})`
  width: 100%;
  height: 400px;
  border-radius: ${({ theme })=>theme.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  order: ${({ $isReverse })=>$isReverse ? 1 : 2};

  @media (max-width: 1024px) {
    height: 350px;
    order: 1;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`;
const ProjectVisualImg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProjectCard.styles__ProjectVisualImg",
    componentId: "sc-4b02ff16-13"
})`
  border-radius: ${({ theme })=>theme.borderRadius.md};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ProjectCard = ({ project, index })=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectCard.useEffect": ()=>{
            const checkMobile = {
                "ProjectCard.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth <= 1024);
                }
            }["ProjectCard.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "ProjectCard.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["ProjectCard.useEffect"];
        }
    }["ProjectCard.useEffect"], []);
    const aosProps = isMobile ? {} : {
        'data-aos': index % 2 === 0 ? "fade-right" : "fade-left",
        'data-aos-delay': index * 100
    };
    const isReverse = index % 2 === 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCardWrapper"], {
        $isReverse: isReverse,
        ...aosProps,
        className: "project-card-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectInfo"], {
                $isReverse: isReverse,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "h4",
                        as: "span",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectNumber"], {
                            children: project.number
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectMeta"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectMetaLeft"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectYear"], {
                                    children: project.year
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCategory"], {
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectTitleWrapper"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "h3",
                            as: "span",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectTitle"], {
                                className: "project-title",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        color: "secondary",
                        as: "span",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDescription"], {
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectTags"], {
                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    project.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectLink"], {
                        href: project.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            "Live Link",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectVisual"], {
                $isReverse: isReverse,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: project.imageLink || '/images/ml-jobs.png',
                    alt: project.title,
                    fill: true,
                    style: {
                        objectFit: 'cover',
                        borderRadius: '0.5rem'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectCard, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/Work.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsList",
    ()=>ProjectsList,
    "StyledWork",
    ()=>StyledWork,
    "ViewAllButton",
    ()=>ViewAllButton,
    "ViewAllButtonContainer",
    ()=>ViewAllButtonContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledWork = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Work.styles__StyledWork",
    componentId: "sc-afd42b7-0"
})`
  position: relative;
`;
const ProjectsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Work.styles__ProjectsList",
    componentId: "sc-afd42b7-1"
})`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const ViewAllButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Work.styles__ViewAllButtonContainer",
    componentId: "sc-afd42b7-2"
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ theme })=>theme.spacing.md};
  padding-top: ${({ theme })=>theme.spacing.md};
  width: 100%;

  @media (max-width: 768px) {
    margin-top: ${({ theme })=>theme.spacing.sm};
    padding-top: ${({ theme })=>theme.spacing.sm};
  }
`;
const ViewAllButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Work.styles__ViewAllButton",
    componentId: "sc-afd42b7-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme })=>theme.colors.textPrimary};
  color: ${({ theme })=>theme.colors.textPrimary};
  padding: ${({ theme })=>theme.spacing.xs} 0;
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.normal};
  text-transform: none;
  letter-spacing: 0;
  border-radius: 0;
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.xs};

  &:hover {
    opacity: 0.8;
  }

  svg {
    transition: transform ${({ theme })=>theme.transitions.base};
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.xs};
    padding: ${({ theme })=>theme.spacing.xs} 0;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Work",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$right$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerRightDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-right-down.js [app-client] (ecmascript) <export default as CornerRightDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$right$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerRightUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-right-up.js [app-client] (ecmascript) <export default as CornerRightUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/Work.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const INITIAL_PROJECTS_COUNT = 5;
const Work = ({ sectionNumber = '01', projects })=>{
    _s();
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
    const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            // Refresh AOS when projects are dynamically shown/hidden
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refresh();
        }
    }["Work.useEffect"], [
        showAll
    ]);
    const handleViewAll = ()=>{
        setShowAll(true);
    };
    const handleShowLess = ()=>{
        setShowAll(false);
        // Scroll to work section smoothly
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "work",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledWork"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkHeader"], {
                        sectionNumber: sectionNumber
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsList"], {
                        children: displayedProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCard"], {
                                project: project,
                                index: index
                            }, project.id, false, {
                                fileName: "[project]/app/components/Work/Work.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasMoreProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewAllButtonContainer"], {
                        children: showAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewAllButton"], {
                            onClick: handleShowLess,
                            children: [
                                "Show Less",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$right$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerRightUp$3e$__["CornerRightUp"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/Work.tsx",
                                    lineNumber: 65,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Work/Work.tsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewAllButton"], {
                            onClick: handleViewAll,
                            children: [
                                "View All Projects",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$right$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerRightDown$3e$__["CornerRightDown"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/Work.tsx",
                                    lineNumber: 70,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Work/Work.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Work/Work.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Work/Work.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Work/Work.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Work, "3bKx8wat2XNBooAT6QKv3g8GiPg=");
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader,
    "SectionNumber",
    ()=>SectionNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const SectionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceHeader.styles__SectionHeader",
    componentId: "sc-502ea126-0"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.lg};
  margin-bottom: ${({ theme })=>theme.spacing['4xl']};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme })=>theme.spacing.md};
  }
`;
const SectionNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceHeader.styles__SectionNumber",
    componentId: "sc-502ea126-1"
})`
  font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceHeader",
    ()=>ExperienceHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceHeader$2f$ExperienceHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const ExperienceHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceHeader$2f$ExperienceHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceHeader$2f$ExperienceHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionNumber"], {
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                children: "Experience"
            }, void 0, false, {
                fileName: "[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ExperienceHeader;
var _c;
__turbopack_context__.k.register(_c, "ExperienceHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/ExperienceCard/ExperienceCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardHeader",
    ()=>CardHeader,
    "CardHeaderLeft",
    ()=>CardHeaderLeft,
    "CompanyName",
    ()=>CompanyName,
    "DateLocation",
    ()=>DateLocation,
    "ExperienceDescription",
    ()=>ExperienceDescription,
    "ExperienceList",
    ()=>ExperienceList,
    "ExperienceListArrow",
    ()=>ExperienceListArrow,
    "ExperienceListItem",
    ()=>ExperienceListItem,
    "ExperienceTags",
    ()=>ExperienceTags,
    "LocationType",
    ()=>LocationType,
    "Role",
    ()=>Role,
    "StyledExperienceCard",
    ()=>StyledExperienceCard,
    "TimelineDot",
    ()=>TimelineDot,
    "TimelineDotOuter",
    ()=>TimelineDotOuter,
    "TimelineDotWrapper",
    ()=>TimelineDotWrapper,
    "TimelineItem",
    ()=>TimelineItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const TimelineItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__TimelineItem",
    componentId: "sc-692b517d-0"
})`
  position: relative;
  padding-left: ${({ theme })=>theme.spacing.xl};

  @media (max-width: 768px) {
    padding-left: ${({ theme })=>theme.spacing.sm};
  }
`;
const TimelineDotWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__TimelineDotWrapper",
    componentId: "sc-692b517d-1"
})`
  position: absolute;
  left: calc(-1 * ${({ theme })=>theme.spacing['4xl']} - ${({ theme })=>theme.spacing.xl} + 1px - 16px);
  top: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    left: calc(-1 * ${({ theme })=>theme.spacing.xl} - ${({ theme })=>theme.spacing.sm} + 1px - 12px);
    top: 10px;
    width: 24px;
    height: 24px;
  }
`;
const TimelineDotOuter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__TimelineDotOuter",
    componentId: "sc-692b517d-2"
})`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${({ theme })=>theme.colors.accent};
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    border-color: ${({ theme })=>theme.colors.accentHover};
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    border-width: 1.5px;
  }
`;
const TimelineDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__TimelineDot",
    componentId: "sc-692b517d-3"
})`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme })=>theme.colors.textPrimary};
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${TimelineItem}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;
const StyledExperienceCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__StyledExperienceCard",
    componentId: "sc-692b517d-4"
})`
  background-color: ${({ theme })=>theme.colors.bgSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.md};
  padding: ${({ theme })=>theme.spacing.xl};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 100%;
  max-width: 100%;
  cursor: pointer;

  ${TimelineItem}:hover & {
    border-color: ${({ theme })=>theme.colors.accent};
    transform: translateX(8px);
    box-shadow: 0 4px 24px rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing.md};
    border-radius: ${({ theme })=>theme.borderRadius.sm};

    ${TimelineItem}:hover & {
      transform: translateX(4px);
      box-shadow: 0 2px 12px rgba(59, 130, 246, 0.12);
    }
  }
`;
const CardHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__CardHeader",
    componentId: "sc-692b517d-5"
})`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: ${({ theme })=>theme.spacing.sm};
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: ${({ theme })=>theme.spacing.xs};
  }
`;
const CardHeaderLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__CardHeaderLeft",
    componentId: "sc-692b517d-6"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xs};
  width: 100%;
  margin-bottom: ${({ theme })=>theme.spacing.md};

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.xs};
    margin-bottom: ${({ theme })=>theme.spacing.sm};
  }
`;
const CompanyName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__CompanyName",
    componentId: "sc-692b517d-7"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  color: ${({ theme })=>theme.colors.textPrimary};
  line-height: 1.2;
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }
`;
const Role = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__Role",
    componentId: "sc-692b517d-8"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  color: ${({ theme })=>theme.colors.textPrimary};
  line-height: 1.3;
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #60a5fa;
  }
`;
const LocationType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__LocationType",
    componentId: "sc-692b517d-9"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  color: ${({ theme })=>theme.colors.textTertiary};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.xs};
    line-height: 1.4;
  }
`;
const DateLocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__DateLocation",
    componentId: "sc-692b517d-10"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  color: ${({ theme })=>theme.colors.textTertiary};
  text-align: right;
  white-space: nowrap;
  flex-shrink: 0;
  display: block;
  margin-bottom: ${({ theme })=>theme.spacing.sm};

  @media (max-width: 768px) {
    text-align: left;
    font-size: ${({ theme })=>theme.typography.fontSize.xs};
    white-space: normal;
    margin-bottom: ${({ theme })=>theme.spacing.xs};
  }
`;
const ExperienceDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__ExperienceDescription",
    componentId: "sc-692b517d-11"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({ theme })=>theme.spacing.md};
  transition: color 0.3s ease;
  display: block;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.sm};
    line-height: 1.6;
    margin-bottom: ${({ theme })=>theme.spacing.sm};
  }
`;
const ExperienceList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "ExperienceCard.styles__ExperienceList",
    componentId: "sc-692b517d-12"
})`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.sm};
  margin-bottom: ${({ theme })=>theme.spacing.md};

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.xs};
    margin-bottom: ${({ theme })=>theme.spacing.sm};
  }
`;
const ExperienceListItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "ExperienceCard.styles__ExperienceListItem",
    componentId: "sc-692b517d-13"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme })=>theme.spacing.sm};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
  transition: color 0.3s ease;

  ${StyledExperienceCard}:hover & {
    color: #e0e7ff;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.sm};
    line-height: 1.6;
    gap: ${({ theme })=>theme.spacing.xs};
  }
`;
const ExperienceListArrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ExperienceCard.styles__ExperienceListArrow",
    componentId: "sc-692b517d-14"
})`
  color: ${({ theme })=>theme.colors.accent};
  margin-top: 6px;
  flex-shrink: 0;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;

  svg {
    color: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`;
const ExperienceTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ExperienceCard.styles__ExperienceTags",
    componentId: "sc-692b517d-15"
})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme })=>theme.spacing.sm};
  margin-top: ${({ theme })=>theme.spacing.sm};

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.xs};
    margin-top: ${({ theme })=>theme.spacing.xs};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceCard",
    ()=>ExperienceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/ExperienceCard/ExperienceCard.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const ExperienceCard = ({ experience, index })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineItem"], {
        "data-aos": "fade-up",
        "data-aos-delay": index * 150,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineDotWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineDotOuter"], {}, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineDot"], {}, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledExperienceCard"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateLocation"], {
                            children: experience.date
                        }, void 0, false, {
                            fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeaderLeft"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h4",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompanyName"], {
                                    children: experience.company
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h5",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"], {
                                    children: experience.role
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "bodySmall",
                                color: "tertiary",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationType"], {
                                    children: [
                                        experience.location,
                                        " • ",
                                        experience.type
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        color: "secondary",
                        as: "span",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceDescription"], {
                            children: experience.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceList"], {
                        children: experience.responsibilities.map((responsibility, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceListItem"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceListArrow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: responsibility
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceTags"], {
                        children: experience.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                children: tag
                            }, tag, false, {
                                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ExperienceCard;
var _c;
__turbopack_context__.k.register(_c, "ExperienceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/Experience.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceDivider",
    ()=>ExperienceDivider,
    "StyledExperience",
    ()=>StyledExperience,
    "Timeline",
    ()=>Timeline,
    "TimelineItems",
    ()=>TimelineItems,
    "TimelineLine",
    ()=>TimelineLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledExperience = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Experience.styles__StyledExperience",
    componentId: "sc-bdd512cd-0"
})`
  position: relative;
`;
const Timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Experience.styles__Timeline",
    componentId: "sc-bdd512cd-1"
})`
  position: relative;
  padding-left: ${({ theme })=>theme.spacing['6xl']};

  @media (max-width: 768px) {
    padding-left: ${({ theme })=>theme.spacing['xxl']};
  }
`;
const TimelineLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Experience.styles__TimelineLine",
    componentId: "sc-bdd512cd-2"
})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${({ theme })=>theme.colors.accent};
`;
const TimelineItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Experience.styles__TimelineItems",
    componentId: "sc-bdd512cd-3"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing['4xl']};

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.xl};
  }
`;
const ExperienceDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "Experience.styles__ExperienceDivider",
    componentId: "sc-bdd512cd-4"
})`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  width: 100%;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceHeader$2f$ExperienceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/ExperienceHeader/ExperienceHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/ExperienceCard/ExperienceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/Experience.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Experience = ({ sectionNumber = '02', experiences })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "experience",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledExperience"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceHeader$2f$ExperienceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceHeader"], {
                        sectionNumber: sectionNumber
                    }, void 0, false, {
                        fileName: "[project]/app/components/Experience/Experience.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineLine"], {}, void 0, false, {
                                fileName: "[project]/app/components/Experience/Experience.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineItems"], {
                                children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$ExperienceCard$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                        experience: exp,
                                        index: index
                                    }, exp.id, false, {
                                        fileName: "[project]/app/components/Experience/Experience.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience/Experience.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Experience/Experience.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Experience/Experience.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Experience/Experience.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Experience/Experience.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/AboutHeader/AboutHeader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutHeaderWrapper",
    ()=>AboutHeaderWrapper,
    "SectionNumber",
    ()=>SectionNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const AboutHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AboutHeader.styles__AboutHeaderWrapper",
    componentId: "sc-34ec8c66-0"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.lg};
  margin-bottom: ${({ theme })=>theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme })=>theme.spacing.md};
  }
`;
const SectionNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AboutHeader.styles__SectionNumber",
    componentId: "sc-34ec8c66-1"
})`
  font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/AboutHeader/AboutHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutHeader",
    ()=>AboutHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutHeader/AboutHeader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const AboutHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutHeaderWrapper"], {
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionNumber"], {
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                children: "About"
            }, void 0, false, {
                fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AboutHeader;
var _c;
__turbopack_context__.k.register(_c, "AboutHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/AboutContent/AboutContent.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutDescription",
    ()=>AboutDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const AboutDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AboutContent.styles__AboutDescription",
    componentId: "sc-c102d131-0"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({ theme })=>theme.spacing.md};
    font-size: ${({ theme })=>theme.typography.fontSize['base']};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/AboutContent/AboutContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutContent",
    ()=>AboutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutContent/AboutContent.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const AboutContent = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutDescription"], {
        "data-aos": "fade-right",
        "data-aos-delay": "200",
        children: typeof content === 'string' ? content.split('\n\n').map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "bodyLarge",
                color: "secondary",
                children: paragraph
            }, index, false, {
                fileName: "[project]/app/components/About/AboutContent/AboutContent.tsx",
                lineNumber: 16,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))) : content
    }, void 0, false, {
        fileName: "[project]/app/components/About/AboutContent/AboutContent.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AboutContent;
var _c;
__turbopack_context__.k.register(_c, "AboutContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/About.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutContent",
    ()=>AboutContent,
    "AboutDivider",
    ()=>AboutDivider,
    "AboutImage",
    ()=>AboutImage,
    "AboutText",
    ()=>AboutText,
    "AboutVisual",
    ()=>AboutVisual,
    "StyledAbout",
    ()=>StyledAbout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledAbout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "About.styles__StyledAbout",
    componentId: "sc-e1b29e4a-0"
})`
  position: relative;
`;
const AboutContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "About.styles__AboutContent",
    componentId: "sc-e1b29e4a-1"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme })=>theme.spacing['4xl']};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme })=>theme.spacing['2xl']};
  }
`;
const AboutText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "About.styles__AboutText",
    componentId: "sc-e1b29e4a-2"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.lg};
`;
const AboutVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "About.styles__AboutVisual",
    componentId: "sc-e1b29e4a-3"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`;
const AboutImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "About.styles__AboutImage",
    componentId: "sc-e1b29e4a-4"
})`
  width: 100%;
  max-width: 500px;
  height: 600px;
  border-radius: ${({ theme })=>theme.borderRadius.lg};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    height: 400px;
  }
`;
const AboutDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "About.styles__AboutDivider",
    componentId: "sc-e1b29e4a-5"
})`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  width: 100%;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutHeader/AboutHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutContent/AboutContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/About.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const About = ({ sectionNumber = '03', content })=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const checkMobile = {
                "About.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth <= 1024);
                }
            }["About.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "About.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    const aosProps = isMobile ? {} : {
        'data-aos': "fade-left",
        'data-aos-delay': 300
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                id: "about",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledAbout"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutText"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutHeader"], {
                                            sectionNumber: sectionNumber
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/About/About.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutContent"], {
                                            content: content
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/About/About.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/About/About.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutVisual"], {
                                    ...aosProps,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutImage"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/me.png",
                                            alt: "Profile photo",
                                            fill: true,
                                            style: {
                                                objectFit: 'cover',
                                                borderRadius: '1rem'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/About/About.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/About/About.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/About/About.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/About/About.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/About/About.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/About/About.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/About/About.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutDivider"], {}, void 0, false, {
                fileName: "[project]/app/components/About/About.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(About, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TechStack/TechStack.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledTechStack",
    ()=>StyledTechStack,
    "TechIcon",
    ()=>TechIcon,
    "TechItem",
    ()=>TechItem,
    "TechName",
    ()=>TechName,
    "TechStackContainer",
    ()=>TechStackContainer,
    "TechStackDivider",
    ()=>TechStackDivider,
    "TechStackGrid",
    ()=>TechStackGrid,
    "TechStackTitle",
    ()=>TechStackTitle,
    "TechStackWrapper",
    ()=>TechStackWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledTechStack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__StyledTechStack",
    componentId: "sc-a293df8e-0"
})`
  position: relative;
  background-color: ${({ theme })=>theme.colors.bgPrimary};
  min-height: 100vh;
  padding: ${({ theme })=>theme.spacing['4xl']} 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing['3xl']} 0;
    min-height: 100vh;
  }
`;
const TechStackContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__TechStackContainer",
    componentId: "sc-a293df8e-1"
})`
  width: 100%;
`;
const TechStackWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__TechStackWrapper",
    componentId: "sc-a293df8e-2"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme })=>theme.spacing['4xl']};
  width: 100%;

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.xl};
  }
`;
const TechStackTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "TechStack.styles__TechStackTitle",
    componentId: "sc-a293df8e-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textPrimary};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
`;
const TechStackGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__TechStackGrid",
    componentId: "sc-a293df8e-4"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme })=>theme.spacing.xl};
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: ${({ theme })=>theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: ${({ theme })=>theme.spacing.lg};
  }
`;
const TechItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__TechItem",
    componentId: "sc-a293df8e-5"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme })=>theme.spacing.sm};
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }

  &:hover svg {
    opacity: 0.8;
  }
`;
const TechIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TechStack.styles__TechIcon",
    componentId: "sc-a293df8e-6"
})`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme })=>theme.spacing.xs};

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;
const TechName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TechStack.styles__TechName",
    componentId: "sc-a293df8e-7"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  color: ${({ theme })=>theme.colors.textSecondary};
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const TechStackDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "TechStack.styles__TechStackDivider",
    componentId: "sc-a293df8e-8"
})`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  width: 100%;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TechStack/TechStack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechStack",
    ()=>TechStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TechStack/TechStack.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const techStack = [
    // Programming Languages
    {
        name: 'HTML',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconHTML, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 25,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Programming Languages'
    },
    {
        name: 'CSS',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconCSS, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 26,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Programming Languages'
    },
    {
        name: 'JavaScript',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconJavaScript, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 27,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Programming Languages'
    },
    {
        name: 'TypeScript',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconTypeScript, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 28,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Programming Languages'
    },
    // Frameworks & Libraries
    {
        name: 'React',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconReact, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 31,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Next.js',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconNextJS, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 32,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Node.js',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconNodeJS, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 33,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Tailwind CSS',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconTailwind, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 34,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Bootstrap',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconBootstrap, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 35,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Styled Components',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconStyledComponents, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 36,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'Styled System',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconStyledSystem, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 37,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    {
        name: 'GraphQL',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGraphQL, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 38,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Frameworks & Libraries'
    },
    // DB & Backend / Deployment
    {
        name: 'MongoDB',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconMongoDB, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 41,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'MySQL',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconMySQL, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 42,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'Firebase',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconFirebase, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 43,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'Render',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconRender, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 44,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'NameCheap',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconNameCheap, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 45,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'Hostinger',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconHostinger, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 46,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'Vercel',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconVercel, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 47,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    {
        name: 'Netlify',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconNetlify, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 48,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'DB & Backend / Deployment'
    },
    // Digital and Creative Skills
    {
        name: 'Canva',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconCanva, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 51,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Figma',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconFigma, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 52,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Shopify',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconShopify, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 53,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'WordPress',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconWordPress, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 54,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'SEO',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconSEO, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 55,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'SEO Tools',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconSEOTools, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 56,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Google Analytics',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGoogleAnalytics, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 57,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Google Tag Manager',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGoogleTagManager, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 58,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Google Search Console',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGoogleSearchConsole, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 59,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    {
        name: 'Semrush',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconSemrush, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 60,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'Digital and Creative Skills'
    },
    // General & Soft Skills
    {
        name: 'Git',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGit, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 63,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    },
    {
        name: 'GitHub',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconGitHub, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 64,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    },
    {
        name: 'APIs',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconAPIs, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 65,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    },
    {
        name: 'Responsive Design',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconResponsive, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 66,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    },
    {
        name: 'MS Office',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconMSOffice, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 67,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    },
    {
        name: 'Communication',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechIconCommunication, {}, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 68,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)),
        category: 'General & Soft Skills'
    }
];
// SVG Icon Components
function TechIconHTML() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z",
                fill: "#E44D26"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 116.8l36.378-10.086 8.559-95.878H64z",
                fill: "#F16529"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 40.02l-.061.017-12.629-3.433-.807-9.04H38.896l1.585 17.759 23.256 6.453.063-.017z",
                fill: "#EBEBEB"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l23.259-6.439.206-2.325 3.233-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c = TechIconHTML;
function TechIconCSS() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z",
                fill: "#1572B6"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.001 117.062l36.559-10.141 8.601-96.354H64.001v106.495z",
                fill: "#33A9DC"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429zm0 64.785l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.312 7.851.063-.018z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M63.944 51.431v13.967h30.326l-.281 3.154-.631 7.112-.331 3.716h-29.083V93.45h17.096l-.969 10.849-16.127 4.354v14.234l28.369-7.863.207-2.325 2.424-27.171.256-2.824.178-1.992 1.297-14.536.167-1.876z",
                fill: "#EBEBEB"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c1 = TechIconCSS;
function TechIconJavaScript() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#F0DB4F",
                d: "M1.408 1.408h125.184v125.185H1.408z"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#323330",
                d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.402-3.498 9.163-5.81-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-1.499-6.592-3.308-9.139-6.948l-9.507 5.498c1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c2 = TechIconJavaScript;
function TechIconTypeScript() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.125 0C.502 0 0 .502 0 1.125v125.75c0 .623.502 1.125 1.125 1.125h125.75c.623 0 1.125-.502 1.125-1.125V1.125C128 .502 127.498 0 126.875 0zm17.113 113.752H14.834V47.717H9.552V34.895h26.375v12.822h-5.282v66.035zm34.642-60.184c0-6.314-2.577-10.585-7.732-12.81 2.791-1.396 4.939-3.215 6.446-5.458 1.506-2.243 2.259-4.886 2.259-7.93 0-.78-.063-1.626-.188-2.537-.126-.911-.346-1.929-.66-3.056-.314-1.126-.754-2.435-1.32-3.926-.565-1.492-1.308-3.227-2.229-5.207l-8.45 3.563c.783 1.776 1.389 3.354 1.815 4.733.427 1.38.739 2.696.935 3.95.196 1.252.294 2.478.294 3.674 0 2.405-.466 4.422-1.397 6.052-.932 1.629-2.199 2.681-3.8 3.156v.188c2.199.469 3.856 1.624 4.971 3.465 1.115 1.84 1.673 4.286 1.673 7.337v30.295h-10.738zm52.071 28.46c-1.724 4.053-3.923 7.15-6.597 9.29-2.674 2.141-6.084 3.211-10.229 3.211-2.821 0-5.213-.536-7.176-1.608-1.963-1.072-3.465-2.451-4.506-4.138-1.041-1.687-1.562-3.508-1.562-5.463 0-2.029.467-3.756 1.402-5.18.935-1.425 2.35-2.638 4.246-3.64 1.895-1.001 4.278-1.869 7.149-2.602 2.871-.733 6.24-1.465 10.106-2.196 3.866-.731 7.885-1.669 12.058-2.813v-3.38c0-4.84-1.077-8.277-3.23-10.311-2.155-2.033-5.573-3.05-10.255-3.05-4.624 0-9.547 1.168-14.769 3.506l-3.38-8.826c2.784-1.334 5.872-2.387 9.264-3.156 3.392-.769 6.978-1.154 10.756-1.154 4.996 0 9.194.886 12.594 2.658 3.4 1.772 5.918 4.293 7.556 7.563 1.637 3.27 2.456 7.149 2.456 11.637v44.171h-10.737z",
            fill: "#007ACC"
        }, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c3 = TechIconTypeScript;
function TechIconReact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "11.4",
                fill: "#61DAFB"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 19.2c-18.2 0-36.4 3.6-50.1 10.8-6.8 3.6-12 8.4-15.6 14.4-3.6 6-5.4 13.2-5.4 20.4s1.8 14.4 5.4 20.4c3.6 6 8.8 10.8 15.6 14.4 13.7 7.2 31.9 10.8 50.1 10.8s36.4-3.6 50.1-10.8c6.8-3.6 12-8.4 15.6-14.4 3.6-6 5.4-13.2 5.4-20.4s-1.8-14.4-5.4-20.4c-3.6-6-8.8-10.8-15.6-14.4C100.4 22.8 82.2 19.2 64 19.2z",
                stroke: "#61DAFB",
                strokeWidth: "2.4",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "64",
                cy: "64",
                rx: "64",
                ry: "11.4",
                stroke: "#61DAFB",
                strokeWidth: "2.4",
                fill: "none",
                transform: "rotate(-60 64 64)"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "64",
                cy: "64",
                rx: "64",
                ry: "11.4",
                stroke: "#61DAFB",
                strokeWidth: "2.4",
                fill: "none",
                transform: "rotate(60 64 64)"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c4 = TechIconReact;
function TechIconNextJS() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 0L123.712 106.667H4.288L64 0z",
                fill: "#000"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 64l45.238 78H18.762L64 64z",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "8"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84 64l20 34.667H64V64h20z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c5 = TechIconNextJS;
function TechIconNodeJS() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "60",
                fill: "#83CD29"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",
                fill: "#3E863D"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "64",
                y: "75",
                fontSize: "36",
                fontWeight: "bold",
                fill: "#fff",
                textAnchor: "middle",
                fontFamily: "Arial",
                children: "N"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c6 = TechIconNodeJS;
function TechIconTailwind() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M64 32c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C82.1 44.3 75.5 32 64 32zm-30 39c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C52.1 83.3 45.5 71 34 71z",
            fill: "#38BDF8"
        }, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_c7 = TechIconTailwind;
function TechIconBootstrap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.589 18.993h70.823c5.302 0 9.588 4.295 9.588 9.588v70.823c0 5.302-4.286 9.588-9.588 9.588H28.589c-5.293 0-9.588-4.286-9.588-9.588V28.581c0-5.293 4.295-9.588 9.588-9.588z",
                fill: "#7952B3"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 32c8.837 0 16 7.163 16 16v8c5.523 0 10 4.477 10 10s-4.477 10-10 10v10c8.837 0 16 7.163 16 16s-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h16zm-8 16v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8zm8 32v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_c8 = TechIconBootstrap;
function TechIconStyledComponents() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "60",
                fill: "#DB7093"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20L84 44H64V64h28v20H44V64h20V44H44L64 20z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = TechIconStyledComponents;
function TechIconStyledSystem() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#000"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "40",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "25",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "10",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c10 = TechIconStyledSystem;
function TechIconGraphQL() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.785 107.871L4 82.784l16.785-25.087h33.569L4 32.61 20.785 7.524h33.569L107.215 95.938H73.646l-13.93-20.785-13.931 20.785H20.785z",
                fill: "#E10098"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20.129L80.785 45.216H47.216L64 20.129zM47.216 82.784h33.569L64 107.871 47.216 82.784z",
                fill: "#E10098"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_c11 = TechIconGraphQL;
function TechIconMongoDB() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88.398 38.352c-2.112-14.378-8.67-26.49-18.304-35.669-.388-.463-1.018-.463-1.406 0C59.053 11.862 52.495 23.974 50.383 38.352c-1.378 9.376-1.035 18.133.734 26.724 2.896 14.138 8.576 27.224 15.789 39.194.388.659 1.413.659 1.801 0 7.213-11.97 12.893-25.056 15.789-39.194 1.769-8.591 2.112-17.348.734-26.724z",
                fill: "#47A248"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 100.535c-.388 0-.776-.194-.97-.582-6.715-12.866-12.156-25.761-14.915-39.718-1.769-8.59-2.112-17.348-.734-26.724.582-3.96 1.552-7.727 2.896-11.301.194-.582.776-.97 1.36-.776 6.327 2.112 12.47 3.378 18.42 3.378 5.951 0 12.093-1.266 18.42-3.378.584-.194 1.166.194 1.36.776 1.344 3.574 2.314 7.34 2.896 11.301 1.378 9.376 1.035 18.133-.734 26.724-2.759 13.957-8.2 26.852-14.915 39.718-.194.388-.582.582-.97.582z",
                fill: "#47A248"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c12 = TechIconMongoDB;
function TechIconMySQL() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20c-24.3 0-44 19.7-44 44v20h88V64c0-24.3-19.7-44-44-44z",
                fill: "#4479A1"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 84v20c0 24.3 19.7 44 44 44s44-19.7 44-44V84H20z",
                fill: "#00758F"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "54",
                r: "8",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M52 74h24v4H52zm0 8h24v4H52z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_c13 = TechIconMySQL;
function TechIconFirebase() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20L20 100l44-60-20 20 20-60 20 60-20-20z",
                fill: "#FFCA28"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84 100l24-80L64 40l20 60z",
                fill: "#FFA000"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 100l24-80 20 60-44 20z",
                fill: "#F57C00"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c14 = TechIconFirebase;
function TechIconRender() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#46E3B7"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 40h64v48H32z",
                fill: "#000"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "64",
                r: "8",
                fill: "#46E3B7"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "64",
                r: "8",
                fill: "#46E3B7"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_c15 = TechIconRender;
function TechIconNameCheap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#DE3723"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "64",
                y: "80",
                fontSize: "24",
                fontWeight: "bold",
                fill: "#fff",
                textAnchor: "middle",
                fontFamily: "Arial",
                children: "NC"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_c16 = TechIconNameCheap;
function TechIconHostinger() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#673DE6"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "64",
                y: "80",
                fontSize: "20",
                fontWeight: "bold",
                fill: "#fff",
                textAnchor: "middle",
                fontFamily: "Arial",
                children: "H"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_c17 = TechIconHostinger;
function TechIconVercel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#000"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20l44 76H20L64 20z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_c18 = TechIconVercel;
function TechIconNetlify() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#00AD9F"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20L20 80h44V60h24v20h24L64 20z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_c19 = TechIconNetlify;
function TechIconCanva() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#00C4CC"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "30",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "20",
                fill: "#FF5440"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
_c20 = TechIconCanva;
function TechIconFigma() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 64c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z",
                fill: "#0ACF83"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 104c0-11.046 8.954-20 20-20h20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20z",
                fill: "#A259FF"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 24v40H84c11.046 0 20-8.954 20-20S95.046 24 84 24H64z",
                fill: "#F24E1E"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 64c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",
                fill: "#FF7262"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 24c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z",
                fill: "#1ABCFE"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_c21 = TechIconFigma;
function TechIconShopify() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#95BF47"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 30l-20 10v48l20 10 20-10V40L64 30z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "54",
                r: "4",
                fill: "#95BF47"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_c22 = TechIconShopify;
function TechIconWordPress() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "60",
                fill: "#21759B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 24c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "20",
                fill: "#21759B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c23 = TechIconWordPress;
function TechIconSEO() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "54",
                r: "16",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48 80h32v8H48zm0 12h24v8H48z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_c24 = TechIconSEO;
function TechIconSEOTools() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#34A853"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 40h48v48H40z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "12",
                fill: "#34A853"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_c25 = TechIconSEOTools;
function TechIconGit() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.52L68.574 60.58l-.002 27.767c.932.459 1.819 1.028 2.644 1.85a9.677 9.677 0 010 13.683 9.677 9.677 0 01-13.683 0 9.677 9.677 0 010-13.683c.825-.821 1.712-1.39 2.644-1.851V59.733c-.932-.459-1.819-1.028-2.644-1.85a9.677 9.677 0 01-6.844-2.843L36.558 41.568 3.264 74.861c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.175-3.176 3.175-8.327-.001-11.499z",
            fill: "#F05032"
        }, void 0, false, {
            fileName: "[project]/app/components/TechStack/TechStack.tsx",
            lineNumber: 330,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, this);
}
_c26 = TechIconGit;
function TechIconGitHub() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.52-6.705-27.52-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.696 15.128 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z",
                fill: "#181717"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.189.44.197.69.61.538.91zm2.446 2.729c-.294.267-.871.143-1.232-.28-.396-.42-.47-.984-.172-1.255.298-.266.884-.14 1.24.28.394.426.472.99.164 1.255zm2.382 3.477c-.377.258-.984.028-1.354-.49-.372-.516-.372-1.183.01-1.44.373-.258.977-.03 1.35.488.372.517.372 1.19-.006 1.442zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.266 1.564.23.527.486.686 1.18.33 1.544zm4.5 1.951c-.147.473-.825.69-1.507.49-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.49.683.206 1.13.756.984 1.237zm4.943.361c.015.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.305.88zm4.598-.979c.086.486-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.662z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
_c27 = TechIconGitHub;
function TechIconAPIs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#FF6B6B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 40h64v48H32z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "64",
                r: "6",
                fill: "#FF6B6B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "6",
                fill: "#FF6B6B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "64",
                r: "6",
                fill: "#FF6B6B"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_c28 = TechIconAPIs;
function TechIconResponsive() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "32",
                width: "80",
                height: "64",
                rx: "8",
                fill: "none",
                stroke: "#4ECDC4",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "32",
                y: "40",
                width: "40",
                height: "48",
                rx: "4",
                fill: "#4ECDC4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "80",
                y: "52",
                width: "16",
                height: "24",
                rx: "2",
                fill: "#4ECDC4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_c29 = TechIconResponsive;
function TechIconMSOffice() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#EB3C00"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 32h64v64H32z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 40h16v48H40zm24 0h16v48H64z",
                fill: "#EB3C00"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_c30 = TechIconMSOffice;
function TechIconCommunication() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 24c22.091 0 40 17.909 40 40 0 8.837-2.865 17.008-7.727 23.64L104 104l-16.36-7.273C81.008 102.135 72.837 105 64 105c-22.091 0-40-17.909-40-40s17.909-40 40-40z",
                fill: "#9B59B6"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "52",
                cy: "64",
                r: "4",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "4",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "76",
                cy: "64",
                r: "4",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_c31 = TechIconCommunication;
function TechIconGoogleAnalytics() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#F9AB00"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z",
                fill: "#E37400"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44 64h20v20H44V64zm24-12h20v32H68V52zm24 18h12v14h-12V70z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "8",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_c32 = TechIconGoogleAnalytics;
function TechIconGoogleTagManager() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 24l20 20-20 20-20-20 20-20z",
                fill: "#34A853"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84 44l20 20-20 20-20-20 20-20z",
                fill: "#FBBC04"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M44 64l20 20-20 20-20-20 20-20z",
                fill: "#EA4335"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "12",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "64",
                y: "70",
                fontSize: "14",
                fontWeight: "bold",
                fill: "#4285F4",
                textAnchor: "middle",
                fontFamily: "Arial",
                children: "GTM"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, this);
}
_c33 = TechIconGoogleTagManager;
function TechIconGoogleSearchConsole() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "40",
                fill: "none",
                stroke: "#34A853",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "28",
                fill: "none",
                stroke: "#FBBC04",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "64",
                r: "16",
                fill: "#EA4335"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64 24v20M64 84v20M24 64h20M84 64h20",
                stroke: "#fff",
                strokeWidth: "4",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 413,
        columnNumber: 5
    }, this);
}
_c34 = TechIconGoogleSearchConsole;
function TechIconSemrush() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 128 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "128",
                height: "128",
                rx: "20",
                fill: "#FF6C37"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 40h64v48H32z",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 52h48v4H40zm0 8h40v4H40zm0 8h48v4H40zm0 8h36v4H40z",
                fill: "#FF6C37"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "96",
                cy: "60",
                r: "8",
                fill: "#FF6C37"
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechStack/TechStack.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_c35 = TechIconSemrush;
const TechStack = ()=>{
    const categories = Array.from(new Set(techStack.map((tech)=>tech.category)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
                id: "techstack",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTechStack"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStackContainer"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStackWrapper"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStackTitle"], {
                                        "data-aos": "fade-up",
                                        children: "TECHNOLOGIES I WORK WITH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStackGrid"], {
                                        children: techStack.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechItem"], {
                                                "data-aos": "zoom-in",
                                                "data-aos-delay": index * 50,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechIcon"], {
                                                        children: tech.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        variant: "bodySmall",
                                                        as: "span",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechName"], {
                                                            children: tech.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/TechStack/TechStack.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/TechStack/TechStack.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/TechStack/TechStack.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStackDivider"], {}, void 0, false, {
                fileName: "[project]/app/components/TechStack/TechStack.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c36 = TechStack;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36;
__turbopack_context__.k.register(_c, "TechIconHTML");
__turbopack_context__.k.register(_c1, "TechIconCSS");
__turbopack_context__.k.register(_c2, "TechIconJavaScript");
__turbopack_context__.k.register(_c3, "TechIconTypeScript");
__turbopack_context__.k.register(_c4, "TechIconReact");
__turbopack_context__.k.register(_c5, "TechIconNextJS");
__turbopack_context__.k.register(_c6, "TechIconNodeJS");
__turbopack_context__.k.register(_c7, "TechIconTailwind");
__turbopack_context__.k.register(_c8, "TechIconBootstrap");
__turbopack_context__.k.register(_c9, "TechIconStyledComponents");
__turbopack_context__.k.register(_c10, "TechIconStyledSystem");
__turbopack_context__.k.register(_c11, "TechIconGraphQL");
__turbopack_context__.k.register(_c12, "TechIconMongoDB");
__turbopack_context__.k.register(_c13, "TechIconMySQL");
__turbopack_context__.k.register(_c14, "TechIconFirebase");
__turbopack_context__.k.register(_c15, "TechIconRender");
__turbopack_context__.k.register(_c16, "TechIconNameCheap");
__turbopack_context__.k.register(_c17, "TechIconHostinger");
__turbopack_context__.k.register(_c18, "TechIconVercel");
__turbopack_context__.k.register(_c19, "TechIconNetlify");
__turbopack_context__.k.register(_c20, "TechIconCanva");
__turbopack_context__.k.register(_c21, "TechIconFigma");
__turbopack_context__.k.register(_c22, "TechIconShopify");
__turbopack_context__.k.register(_c23, "TechIconWordPress");
__turbopack_context__.k.register(_c24, "TechIconSEO");
__turbopack_context__.k.register(_c25, "TechIconSEOTools");
__turbopack_context__.k.register(_c26, "TechIconGit");
__turbopack_context__.k.register(_c27, "TechIconGitHub");
__turbopack_context__.k.register(_c28, "TechIconAPIs");
__turbopack_context__.k.register(_c29, "TechIconResponsive");
__turbopack_context__.k.register(_c30, "TechIconMSOffice");
__turbopack_context__.k.register(_c31, "TechIconCommunication");
__turbopack_context__.k.register(_c32, "TechIconGoogleAnalytics");
__turbopack_context__.k.register(_c33, "TechIconGoogleTagManager");
__turbopack_context__.k.register(_c34, "TechIconGoogleSearchConsole");
__turbopack_context__.k.register(_c35, "TechIconSemrush");
__turbopack_context__.k.register(_c36, "TechStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactHeader/ContactHeader.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactDescription",
    ()=>ContactDescription,
    "ContactHeaderContent",
    ()=>ContactHeaderContent,
    "ContactHeaderWrapper",
    ()=>ContactHeaderWrapper,
    "ContactTitle",
    ()=>ContactTitle,
    "Headline",
    ()=>Headline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const ContactHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactHeader.styles__ContactHeaderWrapper",
    componentId: "sc-1b5bfa94-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;
const ContactHeaderContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactHeader.styles__ContactHeaderContent",
    componentId: "sc-1b5bfa94-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xl};
  max-width: 800px;
  text-align: center;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const ContactTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactHeader.styles__ContactTitle",
    componentId: "sc-1b5bfa94-2"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  line-height: 1.1;
`;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "ContactHeader.styles__Headline",
    componentId: "sc-1b5bfa94-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: clamp(3rem, 10vw, 4rem);
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${({ theme })=>theme.colors.textPrimary};
  margin: 0;
  display: block;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`;
const ContactDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ContactHeader.styles__ContactDescription",
    componentId: "sc-1b5bfa94-4"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactHeader/ContactHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactHeader",
    ()=>ContactHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactHeader/ContactHeader.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const ContactHeader = ({ sectionNumber, headline, description })=>{
    const headlineLines = headline.split('\n').filter((line)=>line.trim() !== '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactHeaderWrapper"], {
        "data-aos": "fade-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactHeaderContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactTitle"], {
                    children: headlineLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": index * 100,
                            children: line.trim()
                        }, index, false, {
                            fileName: "[project]/app/components/Contact/ContactHeader/ContactHeader.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact/ContactHeader/ContactHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactDescription"], {
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/app/components/Contact/ContactHeader/ContactHeader.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Contact/ContactHeader/ContactHeader.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Contact/ContactHeader/ContactHeader.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ContactHeader;
var _c;
__turbopack_context__.k.register(_c, "ContactHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactForm/hooks/contactFormValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactFormInitialValues",
    ()=>contactFormInitialValues,
    "contactFormValidationSchema",
    ()=>contactFormValidationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const contactFormInitialValues = {
    name: '',
    email: '',
    message: ''
};
const contactFormValidationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Name is required').min(2, 'Name must be at least 2 characters').max(200, 'Name must be less than 200 characters').trim(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Email is required').email('Please provide a valid email address').max(200, 'Email must be less than 200 characters').trim(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required('Message is required').min(10, 'Message must be at least 10 characters').max(5000, 'Message must be less than 5000 characters').trim()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactForm/hooks/useContactForm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContactForm",
    ()=>useContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/hooks/contactFormValidation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useContactForm = ()=>{
    _s();
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactFormInitialValues"],
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactFormValidationSchema"],
        onSubmit: {
            "useContactForm.useFormik[formik]": async (values, { setSubmitting, resetForm })=>{
                try {
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    });
                    const data = await response.json();
                    if (!response.ok || !data.success) {
                        throw new Error(data.message || 'Failed to send message');
                    }
                    // Success
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Message sent successfully! I'll get back to you shortly.");
                    // Reset form
                    resetForm();
                } catch (error) {
                    // Error handling
                    const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(`Failed to send message: ${errorMessage}`);
                } finally{
                    setSubmitting(false);
                }
            }
        }["useContactForm.useFormik[formik]"]
    });
    return {
        formik,
        isSubmitting: formik.isSubmitting
    };
};
_s(useContactForm, "B/4rI4IXClQ7sG7psKj+pOuRe5Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactForm/ContactForm.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactFormWrapper",
    ()=>ContactFormWrapper,
    "FormActions",
    ()=>FormActions,
    "SendButton",
    ()=>SendButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const ContactFormWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "ContactForm.styles__ContactFormWrapper",
    componentId: "sc-f17c1543-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const FormActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__FormActions",
    componentId: "sc-f17c1543-1"
})`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme })=>theme.spacing.sm};
`;
const SendButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ContactForm.styles__SendButton",
    componentId: "sc-f17c1543-2"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  background-color: ${({ theme })=>theme.colors.bgTertiary};
  color: ${({ theme })=>theme.colors.textPrimary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme })=>theme.borderRadius.sm};
  transition: all ${({ theme })=>theme.transitions.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.xs};

  &:hover:not(:disabled) {
    background-color: ${({ theme })=>theme.colors.textSecondary};
    color: ${({ theme })=>theme.colors.bgPrimary};
    border-color: ${({ theme })=>theme.colors.textSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/ContactForm/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$useContactForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/hooks/useContactForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/ContactForm.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ContactForm = ()=>{
    _s();
    const { formik, isSubmitting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$useContactForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContactForm"])();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactFormWrapper"], {
        onSubmit: handleSubmit,
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                label: "NAME",
                name: "name",
                value: values.name,
                onChange: handleChange,
                onBlur: handleBlur,
                error: touched.name && errors.name ? errors.name : undefined,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                label: "EMAIL",
                name: "email",
                type: "email",
                value: values.email,
                onChange: handleChange,
                onBlur: handleBlur,
                error: touched.email && errors.email ? errors.email : undefined,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                label: "MESSAGE",
                name: "message",
                value: values.message,
                onChange: handleChange,
                onBlur: handleBlur,
                error: touched.message && errors.message ? errors.message : undefined,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormActions"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendButton"], {
                    type: "submit",
                    disabled: isSubmitting,
                    children: [
                        isSubmitting ? 'Sending...' : 'Send Message',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "6S1YsXk6vKTb8VCrszya2KGR8GI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$useContactForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContactForm"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/Contact.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactFormSection",
    ()=>ContactFormSection,
    "ContactWrapper",
    ()=>ContactWrapper,
    "StyledContact",
    ()=>StyledContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledContact = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Contact.styles__StyledContact",
    componentId: "sc-8b48986e-0"
})`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Contact.styles__ContactWrapper",
    componentId: "sc-8b48986e-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing['4xl']};
  align-items: center;
  width: 100%;
`;
const ContactFormSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Contact.styles__ContactFormSection",
    componentId: "sc-8b48986e-2"
})`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactHeader/ContactHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/ContactForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/Contact.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Contact = ({ sectionNumber = '04', headline = "Let's Build Something Together", description = 'Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities.' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "contact",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledContact"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactWrapper"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactHeader$2f$ContactHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactHeader"], {
                            sectionNumber: sectionNumber,
                            headline: headline,
                            description: description
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact/Contact.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactFormSection"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactForm"], {}, void 0, false, {
                                fileName: "[project]/app/components/Contact/Contact.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact/Contact.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact/Contact.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/Contact.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Contact/Contact.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Contact/Contact.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReachOut/ReachOut.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardLabel",
    ()=>CardLabel,
    "CardLink",
    ()=>CardLink,
    "CardValue",
    ()=>CardValue,
    "ContactCard",
    ()=>ContactCard,
    "ContactCards",
    ()=>ContactCards,
    "ReachOutContent",
    ()=>ReachOutContent,
    "ReachOutHeader",
    ()=>ReachOutHeader,
    "ReachOutHeaderWrapper",
    ()=>ReachOutHeaderWrapper,
    "ReachOutLine",
    ()=>ReachOutLine,
    "StyledReachOut",
    ()=>StyledReachOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledReachOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "ReachOut.styles__StyledReachOut",
    componentId: "sc-82657052-0"
})`
  position: relative;
  padding: ${({ theme })=>theme.spacing['4xl']} 0;

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing['3xl']} 0;
  }
`;
const ReachOutContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ReachOut.styles__ReachOutContent",
    componentId: "sc-82657052-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing['3xl']};
  position: relative;
`;
const ReachOutHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ReachOut.styles__ReachOutHeaderWrapper",
    componentId: "sc-82657052-2"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.lg};
  width: 100%;

  @media (max-width: 1024px) {
    gap: ${({ theme })=>theme.spacing.md};
  }
`;
const ReachOutLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ReachOut.styles__ReachOutLine",
    componentId: "sc-82657052-3"
})`
  flex: 1;
  height: 1px;
  background-color: ${({ theme })=>theme.colors.border};
`;
const ReachOutHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ReachOut.styles__ReachOutHeader",
    componentId: "sc-82657052-4"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  text-align: center;
  color: ${({ theme })=>theme.colors.textSecondary};
  font-size: ${({ theme })=>theme.typography.fontSize.sm};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    font-size: ${({ theme })=>theme.typography.fontSize.xs};
  }
`;
const ContactCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ReachOut.styles__ContactCards",
    componentId: "sc-82657052-5"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme })=>theme.spacing.xl};
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme })=>theme.spacing.lg};
  }
`;
const ContactCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ReachOut.styles__ContactCard",
    componentId: "sc-82657052-6"
})`
  background-color: ${({ theme })=>theme.colors.bgSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.md};
  padding: ${({ theme })=>theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.sm};
  transition: all ${({ theme })=>theme.transitions.base};

  &:hover {
    border-color: ${({ theme })=>theme.colors.textSecondary};
    transform: translateY(-2px);
  }
`;
const CardLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ReachOut.styles__CardLabel",
    componentId: "sc-82657052-7"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.colors.textSecondary};
`;
const CardValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ReachOut.styles__CardValue",
    componentId: "sc-82657052-8"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  color: ${({ theme })=>theme.colors.textPrimary};
  word-break: break-word;
`;
const CardLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "ReachOut.styles__CardLink",
    componentId: "sc-82657052-9"
})`
  color: ${({ theme })=>theme.colors.textPrimary};
  text-decoration: none;
  transition: color ${({ theme })=>theme.transitions.fast};

  &:hover {
    color: ${({ theme })=>theme.colors.accent};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ReachOut/ReachOut.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReachOut",
    ()=>ReachOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReachOut/ReachOut.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const ReachOut = ({ email = 'sd.umarnazir@gmail.com', phone = '+917051732616', github = 'https://github.com/umarnaxir', linkedin = 'https://www.linkedin.com/in/umar-nazir19/' })=>{
    const contactCards = [
        {
            label: 'EMAIL',
            value: email,
            href: `mailto:${email}`
        },
        {
            label: 'PHONE',
            value: phone,
            href: `tel:${phone}`
        },
        {
            label: 'GITHUB',
            value: 'umarnaxir',
            href: github
        },
        {
            label: 'LINKEDIN',
            value: 'Umar Nazir',
            href: linkedin
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledReachOut"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOutContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOutHeaderWrapper"], {
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOutLine"], {}, void 0, false, {
                                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "caption",
                                color: "secondary",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOutHeader"], {
                                    children: "OR REACH OUT DIRECTLY"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOutLine"], {}, void 0, false, {
                                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCards"], {
                        children: contactCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactCard"], {
                                "data-aos": "fade-up",
                                "data-aos-delay": index * 100,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "caption",
                                        color: "secondary",
                                        as: "span",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardLabel"], {
                                            children: card.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    card.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardLink"], {
                                        href: card.href,
                                        target: card.label !== 'EMAIL' ? '_blank' : undefined,
                                        rel: card.label !== 'EMAIL' ? 'noopener noreferrer' : undefined,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "body",
                                            as: "span",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardValue"], {
                                                children: card.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                                lineNumber: 89,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                            lineNumber: 88,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        as: "span",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardValue"], {
                                            children: card.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ReachOut/ReachOut.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ReachOut;
var _c;
__turbopack_context__.k.register(_c, "ReachOut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer/Footer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterContent",
    ()=>FooterContent,
    "FooterCopyright",
    ()=>FooterCopyright,
    "FooterTagline",
    ()=>FooterTagline,
    "StyledFooter",
    ()=>StyledFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "Footer.styles__StyledFooter",
    componentId: "sc-d97a5ab1-0"
})`
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  padding: ${({ theme })=>theme.spacing.xl} 0;
  background-color: ${({ theme })=>theme.colors.bgPrimary};
`;
const FooterContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterContent",
    componentId: "sc-d97a5ab1-1"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme })=>theme.spacing.md};
    text-align: center;
  }
`;
const FooterCopyright = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Footer.styles__FooterCopyright",
    componentId: "sc-d97a5ab1-2"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
`;
const FooterTagline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Footer.styles__FooterTagline",
    componentId: "sc-d97a5ab1-3"
})`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer/Footer.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Footer = ({ name })=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledFooter"], {
        "data-aos": "fade-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "caption",
                        color: "tertiary",
                        as: "span",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterCopyright"], {
                            children: [
                                "© ",
                                currentYear,
                                " ",
                                name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "caption",
                        color: "tertiary",
                        as: "span",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterTagline"], {
                            children: "Designed & Built with purpose"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer/Footer.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Footer/Footer.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Footer/Footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/personal.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "personalData",
    ()=>personalData
]);
const personalData = {
    name: 'Umar Nazir',
    title: 'SOFTWARE ENGINEER & SEO EXECUTIVE',
    headline: 'Developing\nFuture-Ready\nSoftware',
    description: 'Software Engineer & SEO Executive with 2+ years of experience creating high-performance web applications, optimizing digital presence, and delivering scalable solutions that drive business growth.',
    email: 'sd.umarnazir@gmail.com',
    phone: '+91 705-173-2616',
    location: 'Baramulla, J&K India',
    github: '@umarnazir',
    linkedin: '/in/umarnazir'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/projects.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectsData",
    ()=>projectsData
]);
const projectsData = [
    {
        id: '1',
        number: '001',
        year: '2024',
        category: 'AI / ML PLATFORM',
        title: 'AI-Mployed',
        description: 'AI/ML Talent & Career Platform connecting job seekers with opportunities in artificial intelligence and machine learning. Built with React.js and Next.js for optimal performance and user experience.',
        tags: [
            'REACT',
            'NEXT.JS',
            'TYPESCRIPT',
            'AI/ML',
            'FIREBASE'
        ],
        link: 'https://ml-jobs.com',
        imageLink: '/images/mljobs.png',
        visualVariant: 'default'
    },
    {
        id: '2',
        number: '002',
        year: '2024',
        category: 'TOURISM / BOOKING',
        title: 'NineMash',
        description: 'Tourism & Online Booking Platform for Kashmir region. Enables users to book hotels, tours, and experiences with seamless payment integration and real-time availability.',
        tags: [
            'REACT',
            'NEXT.JS',
            'STRIPE',
            'MONGODB',
            'SEO'
        ],
        link: 'https://ninemash.com/',
        imageLink: '/images/ninemash.png',
        visualVariant: 'alt2'
    },
    {
        id: '3',
        number: '003',
        year: '2024',
        category: 'LOGISTICS / COURIER',
        title: 'Rush Expected Courier',
        description: 'All Critical Shipments courier service platform. Specialized in handling urgent and time-sensitive deliveries with real-time tracking, priority booking, and customer support integration.',
        tags: [
            'REACT',
            'NEXT.JS',
            'REAL-TIME TRACKING',
            'FIREBASE'
        ],
        link: 'https://re-courier.com/',
        imageLink: '/images/re-courier.png',
        visualVariant: 'default'
    },
    {
        id: '4',
        number: '004',
        year: '2024',
        category: 'DIGITAL MARKETING / AGENCY',
        title: 'Digitlia',
        description: 'Digital marketing agency specializing in web development and SEO. Showcases services, portfolio, client testimonials, and case studies with integrated contact forms and lead generation features.',
        tags: [
            'REACT',
            'NEXT.JS',
            'SEO',
            'DIGITAL MARKETING',
            'LEAD GENERATION'
        ],
        link: 'https://digitlia.com/',
        imageLink: '/images/digitlia.jpeg',
        visualVariant: 'alt'
    },
    {
        id: '5',
        number: '005',
        year: '2024',
        category: 'LOGISTICS / E-COMMERCE',
        title: 'EliteExpress Courier',
        description: 'Delivery & Logistics System for managing shipments, tracking packages, and optimizing delivery routes. Features real-time tracking, automated notifications, and comprehensive admin dashboard.',
        tags: [
            'REACT',
            'NEXT.JS',
            'NODE.JS',
            'MONGODB',
            'FIREBASE'
        ],
        link: 'https://eliteexpressdeliveryservices.com/',
        imageLink: '/images/eliteexpress.png',
        visualVariant: 'alt'
    },
    {
        id: '6',
        number: '006',
        year: '2024',
        category: 'TRAVEL / BOOKING',
        title: 'Kashmir Tickets',
        description: 'Travel & Ticket Booking System for Kashmir region. Comprehensive platform for booking flights, buses, and travel packages with secure payment processing and booking management.',
        tags: [
            'REACT',
            'NEXT.JS',
            'PAYMENT GATEWAY',
            'MONGODB'
        ],
        link: 'https://kashmirtickets.com/',
        imageLink: '/images/kashmirtickets.png',
        visualVariant: 'alt'
    },
    {
        id: '7',
        number: '007',
        year: '2024',
        category: 'NGO / NON-PROFIT',
        title: 'Kindness Towards Humanity',
        description: 'NGO Website for humanitarian organization. Features donation system, volunteer registration, event management, and impact stories with multi-language support and accessibility features.',
        tags: [
            'REACT',
            'NEXT.JS',
            'DONATION SYSTEM',
            'ACCESSIBILITY'
        ],
        link: 'https://kindnesstowardshumanity.in/',
        imageLink: '/images/kindnesstowardshumanity.png',
        visualVariant: 'alt2'
    },
    {
        id: '8',
        number: '008',
        year: '2024',
        category: 'ENTERPRISE / HR',
        title: 'Office Management System',
        description: 'HR & Workflow Automation system for managing employee data, attendance, payroll, and workflow processes. Features role-based access control, reporting dashboards, and automated notifications.',
        tags: [
            'REACT',
            'NODE.JS',
            'MONGODB',
            'AUTOMATION',
            'HR SYSTEM'
        ],
        link: 'https://example.com',
        imageLink: '/images/office-management.png',
        visualVariant: 'alt'
    },
    {
        id: '9',
        number: '009',
        year: '2024',
        category: 'HOSPITALITY / BOOKING',
        title: 'Hotel Sea View',
        description: 'Hospitality Booking Website for hotel reservations. Features room availability, online booking, payment processing, and guest management system with beautiful UI/UX design.',
        tags: [
            'REACT',
            'NEXT.JS',
            'BOOKING SYSTEM',
            'PAYMENT',
            'UI/UX'
        ],
        link: 'https://thehotelseaview.in/',
        imageLink: '/images/hotel-sea-view.png',
        visualVariant: 'alt2'
    },
    {
        id: '10',
        number: '008',
        year: '2024',
        category: 'HEALTHCARE / PORTFOLIO',
        title: 'Dr. Jibran Bashir',
        description: 'Professional portfolio website for Orthopedic Surgeon featuring appointment booking, patient testimonials, and medical service information with responsive design and SEO optimization.',
        tags: [
            'REACT',
            'NEXT.JS',
            'TYPESCRIPT',
            'SEO',
            'RESPONSIVE'
        ],
        link: 'https://www.drjibranbashir.com/',
        imageLink: '/images/dr-jibran-bashir.png',
        visualVariant: 'default'
    },
    {
        id: '11',
        number: '009',
        year: '2024',
        category: 'HEALTHCARE / MEDICAL',
        title: 'Altaf Hospital',
        description: 'Healthcare & Medical Services Website for hospital. Includes appointment booking, doctor profiles, department information, and patient portal with secure data handling and HIPAA compliance considerations.',
        tags: [
            'REACT',
            'NEXT.JS',
            'HEALTHCARE',
            'APPOINTMENT SYSTEM',
            'SECURITY'
        ],
        link: 'https://www.altafhospital.com/',
        imageLink: '/images/altaf-hospital.png',
        visualVariant: 'default'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/experience.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experienceData",
    ()=>experienceData
]);
const experienceData = [
    {
        id: '1',
        company: 'Saibbyweb',
        role: 'Software Engineer',
        date: 'Jan 2025 - Present',
        location: 'On-Site',
        type: 'Full-time',
        description: 'Building high-performance React/Next.js applications with focus on SEO optimization, page speed, and exceptional user experience.',
        responsibilities: [
            'Build high-performance React/Next.js applications',
            'Improve SEO structure, page speed, and user experience',
            'Develop reusable components and optimized UI patterns',
            'Integrate APIs, Firebase services, and backend logic'
        ],
        tags: [
            'REACT',
            'NEXT.JS',
            'TYPESCRIPT',
            'SEO',
            'FIREBASE',
            'API INTEGRATION'
        ]
    },
    {
        id: '2',
        company: 'NexGen Developers',
        role: 'Founder & CEO',
        date: 'May 2025 - Present',
        location: 'Part-Time',
        type: 'Part-Time',
        description: 'Leading technical development across websites, apps & AI tools. Building custom automation & chatbot systems while managing branding, SEO, client communication & digital strategy.',
        responsibilities: [
            'Lead technical development across websites, apps & AI tools',
            'Build custom automation & chatbot systems',
            'Manage branding, SEO, client communication & digital strategy',
            'Deliver full-stack software tailored to business growth'
        ],
        tags: [
            'LEADERSHIP',
            'AI TOOLS',
            'AUTOMATION',
            'CHATBOTS',
            'DIGITAL STRATEGY'
        ]
    },
    {
        id: '3',
        company: 'Harmukh Technologies Pvt Ltd',
        role: 'Software Engineer & SEO Executive',
        date: 'July 2023 - Aug 2025',
        location: 'On-Site',
        type: 'Full-time',
        description: 'Designed and developed responsive websites while improving digital presence through SEO execution and UI/UX enhancements for better conversions.',
        responsibilities: [
            'Designed and developed responsive websites',
            'Improved digital presence through SEO execution',
            'Provided UI/UX enhancements for better conversions',
            'Collaborated with cross-functional teams'
        ],
        tags: [
            'REACT',
            'SEO',
            'UI/UX',
            'RESPONSIVE DESIGN',
            'TEAM COLLABORATION'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/about.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutData",
    ()=>aboutData
]);
const aboutData = 'Software Engineer with 2+ years of experience in Software Development, SEO Optimization, and building scalable digital products. Skilled in creating high-performance web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nI specialize in full-stack development, focusing on creating responsive, SEO-optimized websites and applications that deliver exceptional user experiences. My expertise includes integrating APIs, Firebase services, and implementing modern UI patterns that drive conversions and engagement.\n\nActively seeking opportunities to contribute and innovate in a growth-focused environment. When I\'m not coding, I work on personal projects, contribute to open-source initiatives, and stay updated with the latest web technologies and SEO best practices.\n\nEducation: B.Tech (Computer Science Engineering) — Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir).';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/contact.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactData",
    ()=>contactData
]);
const contactData = {
    headline: "Let's Build Something Together",
    description: 'Open to collaboration on web development projects, SEO optimization, full-stack development opportunities, or consulting work. Let\'s build something amazing together.'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-export types for backward compatibility
__turbopack_context__.s([
    "portfolioData",
    ()=>portfolioData
]);
// Re-export all data for backward compatibility
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$personal$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/personal.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/projects.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$experience$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/experience.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$about$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/about.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$contact$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/contact.data.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const portfolioData = {
    personal: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$personal$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["personalData"],
    projects: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$projects$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsData"],
    experiences: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$experience$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceData"],
    about: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$about$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutData"],
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$contact$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactData"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/PageContent/PageContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageContent",
    ()=>PageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavBar/NavBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/Work.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience/Experience.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TechStack/TechStack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ReachOut/ReachOut.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const PageContent = ()=>{
    const { personal, projects, experiences, about, contact } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portfolioData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavBar"], {
                name: personal.name
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                title: personal.title,
                headline: personal.headline,
                description: personal.description
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Work"], {
                sectionNumber: "01",
                projects: projects
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Experience"], {
                sectionNumber: "02",
                experiences: experiences
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStack$2f$TechStack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechStack"], {}, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["About"], {
                sectionNumber: "03",
                content: about
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {
                sectionNumber: "04",
                headline: contact.headline,
                description: contact.description
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ReachOut$2f$ReachOut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReachOut"], {
                email: personal.email,
                phone: personal.phone,
                github: "https://github.com/umarnaxir",
                linkedin: "https://www.linkedin.com/in/umar-nazir19/"
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                name: personal.name
            }, void 0, false, {
                fileName: "[project]/app/components/PageContent/PageContent.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PageContent/PageContent.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PageContent;
var _c;
__turbopack_context__.k.register(_c, "PageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Loader/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PageContent$2f$PageContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/PageContent/PageContent.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Home.useEffect.timer"], 2000);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Loader$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$PageContent$2f$PageContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContent"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(Home, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0c67b15a._.js.map