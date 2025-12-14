module.exports = [
"[project]/app/components/NavBar/NavBar.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const fadeInUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const spinIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
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
const StyledNavbar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav`
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
const NavbarContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
const NavRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.xl};
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
const MobileMenuButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
    display: flex;
  }
`;
const HamburgerLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: block;
  height: 2px;
  background-color: ${({ theme })=>theme.colors.textPrimary};
  transition: all ${({ theme })=>theme.transitions.base};
  border-radius: 2px;

  ${({ $index })=>{
    switch($index){
        case 0:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          width: 12px;
          align-self: flex-end;
        `;
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          align-self: flex-end;
          width: 18px;
        `;
        case 2:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          width: 24px;
        `;
    }
}}

  ${({ $isOpen, $index })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      ${$index === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        width: 32px;
        transform: rotate(45deg) translate(10px, 10px);
      `}
      ${$index === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        opacity: 0;
        transform: translateX(-10px);
      `}
      ${$index === 2 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        width: 32px;
        transform: rotate(-45deg) translate(10px, -10px);
      `}
    `}
`;
const MobileMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const MobileMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const MobileMenuHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme })=>theme.spacing.sm};
  padding-bottom: ${({ theme })=>theme.spacing.sm};
`;
const MobileMenuLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
  color: ${({ theme })=>theme.colors.textPrimary};
  text-decoration: none;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out 0.1s forwards;
`;
const MobileMenuCloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
const MobileMenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hr`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  margin-bottom: ${({ theme })=>theme.spacing.lg};
  width: 100%;
`;
const MobileNavLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  list-style: none;
  flex: 1;
  justify-content: flex-start;
`;
const MobileNavLinkItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease-out forwards;
  animation-delay: ${({ $index })=>0.1 + $index * 0.1}s;
`;
const MobileNavLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
const ResumeButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
const ResumeModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const ResumeModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const ResumeModalTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textPrimary};
  margin: 0 0 ${({ theme })=>theme.spacing.md} 0;
  line-height: 1.2;
`;
const ResumeModalText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
  color: ${({ theme })=>theme.colors.textSecondary};
  margin: 0 0 ${({ theme })=>theme.spacing.xl} 0;
  line-height: 1.6;
`;
const ResumeModalButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.md};
`;
const ResumeModalButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
const ResumeModalClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
}),
"[project]/app/components/NavBar/NavBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavBar/NavBar.styles.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resumeModalOpen, setResumeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mobileMenuOpen || resumeModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledNavbar"], {
        $mobileMenuActive: mobileMenuOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavbarContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                        href: "#",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavRight"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLinks"], {
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuButton"], {
                        $isOpen: mobileMenuOpen,
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HamburgerLine"], {
                                $index: 0,
                                $isOpen: mobileMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HamburgerLine"], {
                                $index: 1,
                                $isOpen: mobileMenuOpen
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HamburgerLine"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenu"], {
                $isOpen: mobileMenuOpen,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        closeMobileMenu();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuLogo"], {
                                    href: "#",
                                    onClick: closeMobileMenu,
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuCloseButton"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenuDivider"], {}, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileNavLinks"], {
                            children: [
                                navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileNavLinkItem"], {
                                        $index: index,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileNavLink"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileNavLinkItem"], {
                                    $index: navItems.length,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileNavLink"], {
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
            resumeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalOverlay"], {
                onClick: closeResumeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModal"], {
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalTitle"], {
                            children: "Resume Options"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalText"], {
                            children: "Choose an option:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalButtons"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalButton"], {
                                    onClick: handleViewResume,
                                    children: "View Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalButton"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResumeModalClose"], {
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
}),
"[project]/app/components/Hero/HeroContent/HeroContent.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const HeroText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xl};
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: ${({ theme })=>theme.spacing.md};
  }
`;
const Subtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme })=>theme.colors.textSecondary};
  margin: 0;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
  align-items: center;
`;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
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
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
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
}),
"[project]/app/components/Hero/HeroContent/HeroContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroContent",
    ()=>HeroContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/HeroContent/HeroContent.styles.ts [app-ssr] (ecmascript)");
;
;
const HeroContent = ({ title, headline, description })=>{
    const headlineLines = headline.split('\n').filter((line)=>line.trim() !== '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroText"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subtitle"], {
                "data-aos": "fade-up",
                "data-aos-delay": "0",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
                children: headlineLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Headline"], {
                        "data-aos": "fade-up",
                        "data-aos-delay": `${100 + index * 100}`,
                        children: line.trim()
                    }, index, false, {
                        fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
                "data-aos": "fade-up",
                "data-aos-delay": "400",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero/HeroContent/HeroContent.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicatorWrapper",
    ()=>ScrollIndicatorWrapper,
    "ScrollLine",
    ()=>ScrollLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const scrollLineAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"]`
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
const ScrollIndicatorWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const ScrollLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 1px;
  height: 40px;
  background-color: ${({ theme })=>theme.colors.textSecondary};
  animation: ${scrollLineAnimation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    height: 30px;
  }
`;
}),
"[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicator",
    ()=>ScrollIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.styles.ts [app-ssr] (ecmascript)");
;
;
const ScrollIndicator = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollIndicatorWrapper"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "SCROLL TO EXPLORE"
            }, void 0, false, {
                fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollLine"], {}, void 0, false, {
                fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/Hero/Hero.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroContentWrapper",
    ()=>HeroContentWrapper,
    "StyledHero",
    ()=>StyledHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledHero = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
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
const HeroContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
}),
"[project]/app/components/Hero/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/HeroContent/HeroContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/ScrollIndicator/ScrollIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero/Hero.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Hero = ({ title, headline, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledHero"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$Hero$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroContentWrapper"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$HeroContent$2f$HeroContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroContent"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2f$ScrollIndicator$2f$ScrollIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollIndicator"], {}, void 0, false, {
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
}),
"[project]/app/components/atoms/Button/Button.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledButton",
    ()=>StyledButton,
    "StyledButtonLink",
    ()=>StyledButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      width: 100%;
    `}
`;
const StyledButtonLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      width: 100%;
    `}
`;
}),
"[project]/app/components/atoms/Button/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Button/Button.styles.ts [app-ssr] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ variant = 'primary', size = 'medium', fullWidth = false, icon: Icon, iconPosition = 'left', children, className = '', as = 'button', href, ...props }, ref)=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            Icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 36,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            Icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 38,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    if (as === 'a' && href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledButtonLink"], {
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
            lineNumber: 44,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledButton"], {
        ref: ref,
        $variant: variant,
        $size: size,
        $fullWidth: fullWidth,
        className: className,
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Button/Button.tsx",
        lineNumber: 59,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
}),
"[project]/app/components/atoms/Card/Card.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledCard",
    ()=>StyledCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  background-color: ${({ theme })=>theme.colors.bgSecondary};
  border: 1px solid ${({ theme })=>theme.colors.border};
  border-radius: ${({ theme })=>theme.borderRadius.md};
  padding: ${({ theme })=>theme.spacing.xl};
  transition: all ${({ theme })=>theme.transitions.base};

  &:hover {
    border-color: ${({ theme })=>theme.colors.textSecondary};
    transform: translateY(-2px);
  }

  ${({ $interactive })=>$interactive && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme })=>theme.colors.accent};
      }
    `}
`;
}),
"[project]/app/components/atoms/Card/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Card/Card.styles.ts [app-ssr] (ecmascript)");
;
;
const Card = ({ children, className = '', interactive = false, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledCard"], {
        $interactive: interactive,
        className: className,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Card/Card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/Tag/Tag.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledTag",
    ()=>StyledTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
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
}),
"[project]/app/components/atoms/Tag/Tag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.styles.ts [app-ssr] (ecmascript)");
;
;
const Tag = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledTag"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Tag/Tag.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/Input/Input.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.xs};
  width: ${({ $fullWidth = true })=>$fullWidth ? '100%' : 'auto'};
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme })=>theme.colors.textSecondary};
`;
const StyledInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input`
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
const StyledTextarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].textarea`
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
const ErrorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  color: #ef4444;
`;
}),
"[project]/app/components/atoms/Input/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input,
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.styles.ts [app-ssr] (ecmascript)");
;
;
const Input = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputWrapper"], {
        $fullWidth: fullWidth,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledInput"], {
                $error: !!error,
                className: className,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Textarea = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputWrapper"], {
        $fullWidth: fullWidth,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledTextarea"], {
                $error: !!error,
                className: className,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/Text/Text.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledText",
    ()=>StyledText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  margin: 0;

  ${({ $variant = 'body' })=>{
    switch($variant){
        case 'h1':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          }
        `;
        case 'h4':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['3xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize.xl};
          }
        `;
        case 'h5':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;
        `;
        case 'h6':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize.xl};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.5;
        `;
        case 'body':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
          line-height: 1.6;
        `;
        case 'bodyLarge':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.lg};
          line-height: 1.6;
        `;
        case 'bodySmall':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
          line-height: 1.5;
        `;
        case 'caption':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
          line-height: 1.4;
        `;
    }
}}

  ${({ $color = 'primary' })=>{
    switch($color){
        case 'primary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textPrimary};
        `;
        case 'secondary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textSecondary};
        `;
        case 'tertiary':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.textTertiary};
        `;
        case 'accent':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          color: ${({ theme })=>theme.colors.accent};
        `;
    }
}}

  ${({ $weight })=>{
    if (!$weight) return '';
    switch($weight){
        case 'normal':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.normal};
        `;
        case 'medium':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
        `;
        case 'semibold':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
        `;
        case 'bold':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
        `;
    }
}}
`;
}),
"[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.styles.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledText"], {
        as: Component,
        $variant: variant,
        $color: color,
        $weight: weight,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Text/Text.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/Container/Container.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledContainer",
    ()=>StyledContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
}),
"[project]/app/components/atoms/Container/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.styles.ts [app-ssr] (ecmascript)");
;
;
const Container = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledContainer"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Container/Container.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/Section/Section.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledSection",
    ()=>StyledSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  padding: ${({ theme })=>theme.spacing['4xl']} 0;
  position: relative;

  ${({ $size = 'medium' })=>{
    switch($size){
        case 'small':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing['2xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing.lg} 0;
          }
        `;
        case 'large':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          padding: ${({ theme })=>theme.spacing['4xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing['2xl']} 0;
          }
        `;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing['2xl']} 0;
          }
        `;
    }
}}
`;
}),
"[project]/app/components/atoms/Section/Section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.styles.ts [app-ssr] (ecmascript)");
;
;
const Section = ({ children, size = 'medium', className = '', id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledSection"], {
        id: id,
        $size: size,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Section/Section.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Button/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Card/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/app/components/Work/WorkHeader/WorkHeader.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionNumber",
    ()=>SectionNumber,
    "WorkHeaderWrapper",
    ()=>WorkHeaderWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const WorkHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const SectionNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};

  @media (max-width: 768px) {
    font-size: ${({ theme })=>theme.typography.fontSize.lg};
  }
`;
}),
"[project]/app/components/Work/WorkHeader/WorkHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkHeader",
    ()=>WorkHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.styles.ts [app-ssr] (ecmascript)");
;
;
;
const WorkHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkHeaderWrapper"], {
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionNumber"], {
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                children: "Work"
            }, void 0, false, {
                fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/Work/ProjectCard/ProjectCard.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCardWrapper",
    ()=>ProjectCardWrapper,
    "ProjectCategory",
    ()=>ProjectCategory,
    "ProjectDescription",
    ()=>ProjectDescription,
    "ProjectDivider",
    ()=>ProjectDivider,
    "ProjectInfo",
    ()=>ProjectInfo,
    "ProjectLink",
    ()=>ProjectLink,
    "ProjectMeta",
    ()=>ProjectMeta,
    "ProjectNumber",
    ()=>ProjectNumber,
    "ProjectTags",
    ()=>ProjectTags,
    "ProjectTitle",
    ()=>ProjectTitle,
    "ProjectVisual",
    ()=>ProjectVisual,
    "ProjectVisualImg",
    ()=>ProjectVisualImg,
    "ProjectYear",
    ()=>ProjectYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const ProjectCardWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme })=>theme.spacing['4xl']};
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme })=>theme.spacing['4xl']} 0;
  direction: ${({ $isReverse })=>$isReverse ? 'rtl' : 'ltr'};

  & > * {
    direction: ltr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme })=>theme.spacing['2xl']};
    min-height: auto;
    padding: ${({ theme })=>theme.spacing['2xl']} 0;
    direction: ltr;
  }
`;
const ProjectInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.md};
  max-width: 100%;
`;
const ProjectNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-size: ${({ theme })=>theme.typography.fontSize.xl};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
  margin-bottom: ${({ theme })=>theme.spacing.sm};
  line-height: 1;
`;
const ProjectMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.spacing.md};
  font-size: ${({ theme })=>theme.typography.fontSize.xs};
  color: ${({ theme })=>theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme })=>theme.spacing.sm};
`;
const ProjectYear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
`;
const ProjectCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
`;
const ProjectTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
  color: ${({ theme })=>theme.colors.accent};
`;
const ProjectDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;
`;
const ProjectTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme })=>theme.spacing.sm};
  margin-top: ${({ theme })=>theme.spacing.sm};
`;
const ProjectLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
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
const ProjectVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  width: 100%;
  height: 500px;
  border-radius: ${({ theme })=>theme.borderRadius.md};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;
const ProjectVisualImg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  border-radius: ${({ theme })=>theme.borderRadius.md};
`;
const ProjectDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hr`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  width: 100%;
`;
}),
"[project]/app/components/Work/ProjectCard/ProjectCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ProjectCard = ({ project, index, isLast = false })=>{
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    const aosProps = isMobile ? {} : {
        'data-aos': index % 2 === 0 ? "fade-right" : "fade-left",
        'data-aos-delay': index * 100
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectCardWrapper"], {
                $isReverse: index % 2 === 1,
                ...aosProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectInfo"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h4",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectNumber"], {
                                    children: project.number
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectMeta"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectYear"], {
                                        children: project.year
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectCategory"], {
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h3",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectTitle"], {
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body",
                                color: "secondary",
                                as: "span",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDescription"], {
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectTags"], {
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectLink"], {
                                href: project.link || 'https://google.com',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    "Live Link",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectVisual"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/ml-jobs.png",
                            alt: project.title,
                            fill: true,
                            style: {
                                objectFit: 'cover',
                                borderRadius: '0.5rem'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectDivider"], {}, void 0, false, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 89,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/app/components/Work/Work.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledWork = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;
`;
const ProjectsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
const ViewAllButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme })=>theme.spacing['4xl']};
  padding-top: ${({ theme })=>theme.spacing['4xl']};

  @media (max-width: 768px) {
    margin-top: ${({ theme })=>theme.spacing.xl};
    padding-top: ${({ theme })=>theme.spacing.xl};
  }
`;
const ViewAllButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  background-color: transparent;
  border: 1px solid ${({ theme })=>theme.colors.border};
  color: ${({ theme })=>theme.colors.textPrimary};
  padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing['2xl']};
  font-size: ${({ theme })=>theme.typography.fontSize.base};
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

  &:hover {
    background-color: ${({ theme })=>theme.colors.textPrimary};
    color: ${({ theme })=>theme.colors.bgPrimary};
    border-color: ${({ theme })=>theme.colors.textPrimary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.xl};
    font-size: ${({ theme })=>theme.typography.fontSize.sm};
  }
`;
}),
"[project]/app/components/Work/Work.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Work",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/Work.styles.ts [app-ssr] (ecmascript)");
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
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
    const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Refresh AOS when projects are dynamically shown/hidden
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refresh();
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
        id: "work",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledWork"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkHeader"], {
                        sectionNumber: sectionNumber
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectsList"], {
                        children: displayedProjects.map((project, index)=>{
                            const isLastInDisplayed = index === displayedProjects.length - 1;
                            // Only mark as last if we're showing all projects and this is the last one
                            const isLast = showAll && isLastInDisplayed;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProjectCard"], {
                                project: project,
                                index: index,
                                isLast: isLast
                            }, project.id, false, {
                                fileName: "[project]/app/components/Work/Work.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasMoreProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewAllButtonContainer"], {
                        children: showAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewAllButton"], {
                            onClick: handleShowLess,
                            children: "Show Less"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/Work.tsx",
                            lineNumber: 69,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewAllButton"], {
                            onClick: handleViewAll,
                            children: "View All Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/Work.tsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Work/Work.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Work/Work.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Work/Work.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/About/AboutHeader/AboutHeader.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutHeaderWrapper",
    ()=>AboutHeaderWrapper,
    "SectionNumber",
    ()=>SectionNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const AboutHeaderWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const SectionNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
  font-weight: ${({ theme })=>theme.typography.fontWeight.bold};
  color: ${({ theme })=>theme.colors.textTertiary};
  font-family: ${({ theme })=>theme.typography.fontFamilyMono};
`;
}),
"[project]/app/components/About/AboutHeader/AboutHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutHeader",
    ()=>AboutHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutHeader/AboutHeader.styles.ts [app-ssr] (ecmascript)");
;
;
;
const AboutHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutHeaderWrapper"], {
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionNumber"], {
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                children: "About"
            }, void 0, false, {
                fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/About/AboutContent/AboutContent.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutDescription",
    ()=>AboutDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const AboutDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  font-family: ${({ theme })=>theme.typography.fontFamilyBody};
  color: ${({ theme })=>theme.colors.textSecondary};
  line-height: 1.8;

  p {
    margin-bottom: ${({ theme })=>theme.spacing.md};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
}),
"[project]/app/components/About/AboutContent/AboutContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutContent",
    ()=>AboutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutContent/AboutContent.styles.ts [app-ssr] (ecmascript)");
;
;
;
const AboutContent = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutDescription"], {
        "data-aos": "fade-right",
        "data-aos-delay": "200",
        children: typeof content === 'string' ? content.split('\n\n').map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                variant: "bodyLarge",
                color: "secondary",
                children: paragraph
            }, index, false, {
                fileName: "[project]/app/components/About/AboutContent/AboutContent.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))) : content
    }, void 0, false, {
        fileName: "[project]/app/components/About/AboutContent/AboutContent.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/components/About/About.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const StyledAbout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;
`;
const AboutContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme })=>theme.spacing['4xl']};
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${({ theme })=>theme.spacing['2xl']};
  }
`;
const AboutText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.lg};
`;
const AboutVisual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    order: -1;
  }
`;
const AboutImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
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
const AboutDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hr`
  border: none;
  border-top: 1px solid ${({ theme })=>theme.colors.border};
  margin: 0;
  width: 100%;
`;
}),
"[project]/app/components/About/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutHeader/AboutHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutContent/AboutContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About/About.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const About = ({ sectionNumber = '03', content })=>{
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    const aosProps = isMobile ? {} : {
        'data-aos': "fade-left",
        'data-aos-delay': 300
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "about",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledAbout"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutText"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutHeader"], {
                                            sectionNumber: sectionNumber
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/About/About.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutContent"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutVisual"], {
                                    ...aosProps,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutImage"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AboutDivider"], {}, void 0, false, {
                fileName: "[project]/app/components/About/About.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
"[project]/app/components/Contact/ContactForm/hooks/contactFormValidation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactFormInitialValues",
    ()=>contactFormInitialValues,
    "contactFormValidationSchema",
    ()=>contactFormValidationSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-ssr] (ecmascript)");
;
const contactFormInitialValues = {
    name: '',
    email: '',
    message: ''
};
const contactFormValidationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Name is required').min(2, 'Name must be at least 2 characters').max(200, 'Name must be less than 200 characters').trim(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Email is required').email('Please provide a valid email address').max(200, 'Email must be less than 200 characters').trim(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().required('Message is required').min(10, 'Message must be at least 10 characters').max(5000, 'Message must be less than 5000 characters').trim()
});
}),
"[project]/app/components/Contact/ContactForm/hooks/useContactForm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useContactForm",
    ()=>useContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/hooks/contactFormValidation.ts [app-ssr] (ecmascript)");
;
;
;
const useContactForm = ()=>{
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactFormInitialValues"],
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$contactFormValidation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactFormValidationSchema"],
        onSubmit: async (values, { setSubmitting, resetForm })=>{
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Message sent successfully!', {
                    description: "Message received. I’ll get back to you shortly."
                });
                // Reset form
                resetForm();
            } catch (error) {
                // Error handling
                const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to send message', {
                    description: errorMessage
                });
            } finally{
                setSubmitting(false);
            }
        }
    });
    return {
        formik,
        isSubmitting: formik.isSubmitting
    };
};
}),
"[project]/app/components/Contact/ContactForm/ContactForm.styles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactFormWrapper",
    ()=>ContactFormWrapper,
    "FormActions",
    ()=>FormActions,
    "SendButton",
    ()=>SendButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const ContactFormWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const FormActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme })=>theme.spacing.sm};
`;
const SendButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
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
}),
"[project]/app/components/Contact/ContactForm/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$useContactForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/hooks/useContactForm.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/ContactForm.styles.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ContactForm = ()=>{
    const { formik, isSubmitting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$hooks$2f$useContactForm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContactForm"])();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactFormWrapper"], {
        onSubmit: handleSubmit,
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormActions"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SendButton"], {
                    type: "submit",
                    disabled: isSubmitting,
                    children: [
                        isSubmitting ? 'Sending...' : 'Send Message',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
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
}),
];

//# sourceMappingURL=app_components_0f61d769._.js.map