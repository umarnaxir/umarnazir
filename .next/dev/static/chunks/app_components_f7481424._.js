(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/NavBar/NavBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fadeIn": "NavBar-module__ywSGya__fadeIn",
  "fadeInUp": "NavBar-module__ywSGya__fadeInUp",
  "hamburgerLine": "NavBar-module__ywSGya__hamburgerLine",
  "logo": "NavBar-module__ywSGya__logo",
  "mobileMenu": "NavBar-module__ywSGya__mobileMenu",
  "mobileMenuActive": "NavBar-module__ywSGya__mobileMenuActive",
  "mobileMenuButton": "NavBar-module__ywSGya__mobileMenuButton",
  "mobileMenuButtonOpen": "NavBar-module__ywSGya__mobileMenuButtonOpen",
  "mobileMenuCloseButton": "NavBar-module__ywSGya__mobileMenuCloseButton",
  "mobileMenuContent": "NavBar-module__ywSGya__mobileMenuContent",
  "mobileMenuDivider": "NavBar-module__ywSGya__mobileMenuDivider",
  "mobileMenuHeader": "NavBar-module__ywSGya__mobileMenuHeader",
  "mobileMenuLogo": "NavBar-module__ywSGya__mobileMenuLogo",
  "mobileMenuOpen": "NavBar-module__ywSGya__mobileMenuOpen",
  "mobileNavLinks": "NavBar-module__ywSGya__mobileNavLinks",
  "navLink": "NavBar-module__ywSGya__navLink",
  "navLinks": "NavBar-module__ywSGya__navLinks",
  "navRight": "NavBar-module__ywSGya__navRight",
  "navbar": "NavBar-module__ywSGya__navbar",
  "navbarContent": "NavBar-module__ywSGya__navbarContent",
  "resumeButton": "NavBar-module__ywSGya__resumeButton",
  "resumeLink": "NavBar-module__ywSGya__resumeLink",
  "resumeModal": "NavBar-module__ywSGya__resumeModal",
  "resumeModalButton": "NavBar-module__ywSGya__resumeModalButton",
  "resumeModalButtons": "NavBar-module__ywSGya__resumeModalButtons",
  "resumeModalClose": "NavBar-module__ywSGya__resumeModalClose",
  "resumeModalOverlay": "NavBar-module__ywSGya__resumeModalOverlay",
  "resumeModalText": "NavBar-module__ywSGya__resumeModalText",
  "resumeModalTitle": "NavBar-module__ywSGya__resumeModalTitle",
  "slideDown": "NavBar-module__ywSGya__slideDown",
  "slideUp": "NavBar-module__ywSGya__slideUp",
  "spinIn": "NavBar-module__ywSGya__spinIn",
});
}),
"[project]/app/components/NavBar/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/NavBar/NavBar.module.css [app-client] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar} ${mobileMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuActive : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navRight,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks,
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onClick: handleResumeClick,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeButton,
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuButton} ${mobileMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuButtonOpen : ''}`,
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerLine
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerLine
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerLine
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenu} ${mobileMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuOpen : ''}`,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        closeMobileMenu();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLogo,
                                    onClick: closeMobileMenu,
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuCloseButton,
                                    onClick: closeMobileMenu,
                                    "aria-label": "Close menu",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuDivider
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLinks,
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLink,
                                            onClick: closeMobileMenu,
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeLink,
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            closeMobileMenu();
                                            handleResumeClick(e);
                                        },
                                        children: "Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            resumeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalOverlay,
                onClick: closeResumeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModal,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalTitle,
                            children: "Resume Options"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalText,
                            children: "Choose an option:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalButtons,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalButton,
                                    onClick: handleViewResume,
                                    children: "View Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalButton,
                                    onClick: handleDownloadResume,
                                    children: "Download Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalClose,
                            onClick: closeResumeModal,
                            "aria-label": "Close modal",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NavBar/NavBar.tsx",
        lineNumber: 73,
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
"[project]/app/components/atoms/Button/Button.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledButton",
    ()=>StyledButton,
    "StyledButtonLink",
    ()=>StyledButtonLink
]);
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const StyledButton = styled.button`
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
            return css`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return css`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover:not(:disabled) {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return css`
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
            return css`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return css`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return css`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && css`
      width: 100%;
    `}
`;
const StyledButtonLink = styled.a`
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
            return css`
          background-color: ${({ theme })=>theme.colors.bgSecondary};
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            background-color: ${({ theme })=>theme.colors.bgTertiary};
            border-color: ${({ theme })=>theme.colors.textSecondary};
          }
        `;
        case 'secondary':
            return css`
          background-color: transparent;
          border-color: ${({ theme })=>theme.colors.border};
          color: ${({ theme })=>theme.colors.textPrimary};

          &:hover {
            border-color: ${({ theme })=>theme.colors.accent};
            color: ${({ theme })=>theme.colors.accent};
          }
        `;
        case 'accent':
            return css`
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
            return css`
          padding: ${({ theme })=>theme.spacing.xs} ${({ theme })=>theme.spacing.md};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
        `;
        case 'medium':
            return css`
          padding: ${({ theme })=>theme.spacing.sm} ${({ theme })=>theme.spacing.lg};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
        `;
        case 'large':
            return css`
          padding: ${({ theme })=>theme.spacing.md} ${({ theme })=>theme.spacing.xl};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
        `;
    }
}}

  ${({ $fullWidth })=>$fullWidth && css`
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
                lineNumber: 36,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            Icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 38,
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
            lineNumber: 44,
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
        lineNumber: 59,
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
"[project]/app/components/atoms/Card/Card.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Card-module__QL3yZW__card",
  "cardInteractive": "Card-module__QL3yZW__cardInteractive",
});
}),
"[project]/app/components/atoms/Card/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Card/Card.module.css [app-client] (css module)");
;
;
const Card = ({ children, className = '', interactive = false, onClick })=>{
    const classNames = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        interactive && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Card$2f$Card$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInteractive,
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classNames,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Card/Card.tsx",
        lineNumber: 26,
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
"[project]/app/components/atoms/Tag/Tag.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "tag": "Tag-module__-1qnsG__tag",
});
}),
"[project]/app/components/atoms/Tag/Tag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Tag/Tag.module.css [app-client] (css module)");
;
;
const Tag = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Tag/Tag.tsx",
        lineNumber: 10,
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
"[project]/app/components/atoms/Input/Input.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "Input-module__jP4lDW__error",
  "errorMessage": "Input-module__jP4lDW__errorMessage",
  "input": "Input-module__jP4lDW__input",
  "inputWrapper": "Input-module__jP4lDW__inputWrapper",
  "label": "Input-module__jP4lDW__label",
  "textarea": "Input-module__jP4lDW__textarea",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.module.css [app-client] (css module)");
;
;
const Input = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
        style: {
            width: fullWidth ? '100%' : 'auto'
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input} ${error ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error : ''} ${className}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 24,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Input;
const Textarea = ({ label, error, fullWidth = true, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
        style: {
            width: fullWidth ? '100%' : 'auto'
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea} ${error ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error : ''} ${className}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Input/Input.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/atoms/Input/Input.tsx",
        lineNumber: 43,
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
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const StyledText = styled.p`
  margin: 0;

  ${({ $variant = 'body' })=>{
    switch($variant){
        case 'h1':
            return css`
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
            return css`
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
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['4xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          }
        `;
        case 'h4':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['3xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({ theme })=>theme.typography.fontSize.xl};
          }
        `;
        case 'h5':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize['2xl']};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.4;
        `;
        case 'h6':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyHeading};
          font-size: ${({ theme })=>theme.typography.fontSize.xl};
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
          line-height: 1.5;
        `;
        case 'body':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.base};
          line-height: 1.6;
        `;
        case 'bodyLarge':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.lg};
          line-height: 1.6;
        `;
        case 'bodySmall':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.sm};
          line-height: 1.5;
        `;
        case 'caption':
            return css`
          font-family: ${({ theme })=>theme.typography.fontFamilyBody};
          font-size: ${({ theme })=>theme.typography.fontSize.xs};
          line-height: 1.4;
        `;
    }
}}

  ${({ $color = 'primary' })=>{
    switch($color){
        case 'primary':
            return css`
          color: ${({ theme })=>theme.colors.textPrimary};
        `;
        case 'secondary':
            return css`
          color: ${({ theme })=>theme.colors.textSecondary};
        `;
        case 'tertiary':
            return css`
          color: ${({ theme })=>theme.colors.textTertiary};
        `;
        case 'accent':
            return css`
          color: ${({ theme })=>theme.colors.accent};
        `;
    }
}}

  ${({ $weight })=>{
    if (!$weight) return '';
    switch($weight){
        case 'normal':
            return css`
          font-weight: ${({ theme })=>theme.typography.fontWeight.normal};
        `;
        case 'medium':
            return css`
          font-weight: ${({ theme })=>theme.typography.fontWeight.medium};
        `;
        case 'semibold':
            return css`
          font-weight: ${({ theme })=>theme.typography.fontWeight.semibold};
        `;
        case 'bold':
            return css`
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
        lineNumber: 51,
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
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const StyledContainer = styled.div`
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
;
;
const Container = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledContainer"], {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/atoms/Container/Container.tsx",
        lineNumber: 10,
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
(()=>{
    const e = new Error("Cannot find module 'styled-components'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const StyledSection = styled.section`
  padding: ${({ theme })=>theme.spacing['4xl']} 0;
  position: relative;

  ${({ $size = 'medium' })=>{
    switch($size){
        case 'small':
            return css`
          padding: ${({ theme })=>theme.spacing['2xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing.lg} 0;
          }
        `;
        case 'large':
            return css`
          padding: ${({ theme })=>theme.spacing['4xl']} 0;

          @media (max-width: 768px) {
            padding: ${({ theme })=>theme.spacing['2xl']} 0;
          }
        `;
        default:
            return css`
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
        lineNumber: 18,
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
"[project]/app/components/Work/WorkHeader/WorkHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "sectionNumber": "WorkHeader-module__0deTBq__sectionNumber",
  "workHeader": "WorkHeader-module__0deTBq__workHeader",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.module.css [app-client] (css module)");
;
;
;
const WorkHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].workHeader,
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionNumber,
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/Work/WorkHeader/WorkHeader.tsx",
                lineNumber: 12,
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
        lineNumber: 11,
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
"[project]/app/components/Work/ProjectCard/ProjectCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projectCard": "ProjectCard-module__MVib1a__projectCard",
  "projectCardReverse": "ProjectCard-module__MVib1a__projectCardReverse",
  "projectCategory": "ProjectCard-module__MVib1a__projectCategory",
  "projectDescription": "ProjectCard-module__MVib1a__projectDescription",
  "projectDivider": "ProjectCard-module__MVib1a__projectDivider",
  "projectInfo": "ProjectCard-module__MVib1a__projectInfo",
  "projectLink": "ProjectCard-module__MVib1a__projectLink",
  "projectMeta": "ProjectCard-module__MVib1a__projectMeta",
  "projectNumber": "ProjectCard-module__MVib1a__projectNumber",
  "projectTags": "ProjectCard-module__MVib1a__projectTags",
  "projectTitle": "ProjectCard-module__MVib1a__projectTitle",
  "projectVisual": "ProjectCard-module__MVib1a__projectVisual",
  "projectVisualImg": "ProjectCard-module__MVib1a__projectVisualImg",
  "projectYear": "ProjectCard-module__MVib1a__projectYear",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ProjectCard = ({ project, index, isLast = false })=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectCard} ${index % 2 === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectCardReverse : ''}`,
                ...aosProps,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h4",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectNumber,
                                children: project.number
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectMeta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectYear,
                                        children: project.year
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectCategory,
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "h3",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectTitle,
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body",
                                color: "secondary",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectDescription,
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectTags,
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.link || 'https://google.com',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectLink,
                                children: [
                                    "Live Link",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectVisual,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/ml-jobs.png",
                            alt: project.title,
                            fill: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectVisualImg,
                            style: {
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectDivider
            }, void 0, false, {
                fileName: "[project]/app/components/Work/ProjectCard/ProjectCard.tsx",
                lineNumber: 83,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ProjectCard, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Work/Work.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projectsList": "Work-module__cc3rUq__projectsList",
  "viewAllButton": "Work-module__cc3rUq__viewAllButton",
  "viewAllButtonContainer": "Work-module__cc3rUq__viewAllButtonContainer",
  "work": "Work-module__cc3rUq__work",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/WorkHeader/WorkHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Work/ProjectCard/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Work/Work.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].work,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$WorkHeader$2f$WorkHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkHeader"], {
                    sectionNumber: sectionNumber
                }, void 0, false, {
                    fileName: "[project]/app/components/Work/Work.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectsList,
                    children: displayedProjects.map((project, index)=>{
                        const isLastInDisplayed = index === displayedProjects.length - 1;
                        // Only mark as last if we're showing all projects and this is the last one
                        const isLast = showAll && isLastInDisplayed;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$ProjectCard$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCard"], {
                            project: project,
                            index: index,
                            isLast: isLast
                        }, project.id, false, {
                            fileName: "[project]/app/components/Work/Work.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/Work/Work.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                hasMoreProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewAllButtonContainer,
                    children: showAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewAllButton,
                        onClick: handleShowLess,
                        children: "Show Less"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Work$2f$Work$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewAllButton,
                        onClick: handleViewAll,
                        children: "View All Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Work/Work.tsx",
                        lineNumber: 75,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Work/Work.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
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
_s(Work, "3bKx8wat2XNBooAT6QKv3g8GiPg=");
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/AboutHeader/AboutHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutHeader": "AboutHeader-module__dQvwkW__aboutHeader",
  "sectionNumber": "AboutHeader-module__dQvwkW__sectionNumber",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutHeader/AboutHeader.module.css [app-client] (css module)");
;
;
;
const AboutHeader = ({ sectionNumber })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutHeader,
        "data-aos": "fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                variant: "h2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionNumber,
                children: sectionNumber
            }, void 0, false, {
                fileName: "[project]/app/components/About/AboutHeader/AboutHeader.tsx",
                lineNumber: 12,
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
        lineNumber: 11,
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
"[project]/app/components/About/AboutContent/AboutContent.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutDescription": "AboutContent-module__Qn5uTW__aboutDescription",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/About/AboutContent/AboutContent.module.css [app-client] (css module)");
;
;
;
const AboutContent = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutDescription,
        "data-aos": "fade-right",
        "data-aos-delay": "200",
        children: typeof content === 'string' ? content.split('\n\n').map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
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
_c = AboutContent;
var _c;
__turbopack_context__.k.register(_c, "AboutContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "About-module__WVzPFq__about",
  "aboutContent": "About-module__WVzPFq__aboutContent",
  "aboutDivider": "About-module__WVzPFq__aboutDivider",
  "aboutImage": "About-module__WVzPFq__aboutImage",
  "aboutImageImg": "About-module__WVzPFq__aboutImageImg",
  "aboutText": "About-module__WVzPFq__aboutText",
  "aboutVisual": "About-module__WVzPFq__aboutVisual",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/About/About.module.css [app-client] (css module)");
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
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].about,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutText,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutHeader$2f$AboutHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutHeader"], {
                                        sectionNumber: sectionNumber
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/About/About.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$AboutContent$2f$AboutContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutContent"], {
                                        content: content
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/About/About.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/About/About.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutVisual,
                                ...aosProps,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutImage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/me.png",
                                        alt: "Profile photo",
                                        fill: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutImageImg,
                                        style: {
                                            objectFit: 'cover'
                                        }
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
                            }, void 0, false, {
                                fileName: "[project]/app/components/About/About.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].aboutDivider
            }, void 0, false, {
                fileName: "[project]/app/components/About/About.tsx",
                lineNumber: 60,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message sent successfully!', {
                        description: "Message received. I’ll get back to you shortly."
                    });
                    // Reset form
                    resetForm();
                } catch (error) {
                    // Error handling
                    const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to send message', {
                        description: errorMessage
                    });
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
"[project]/app/components/Contact/ContactForm/ContactForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "contactForm": "ContactForm-module__zmhP2G__contactForm",
  "formActions": "ContactForm-module__zmhP2G__formActions",
  "sendButton": "ContactForm-module__zmhP2G__sendButton",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Contact/ContactForm/ContactForm.module.css [app-client] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactForm,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendButton,
                    disabled: isSubmitting,
                    children: [
                        isSubmitting ? 'Sending...' : 'Send Message',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                            lineNumber: 50,
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
]);

//# sourceMappingURL=app_components_f7481424._.js.map