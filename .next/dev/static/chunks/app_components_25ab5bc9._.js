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
  "mobileMenuContent": "NavBar-module__ywSGya__mobileMenuContent",
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
], resumeUrl = '#' })=>{
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
                        lineNumber: 76,
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
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onClick: handleResumeClick,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeButton,
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 80,
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
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
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
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 75,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuLogo,
                            onClick: closeMobileMenu,
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 116,
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
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.href, false, {
                                        fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                        lineNumber: 121,
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
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 107,
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
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalText,
                            children: "Choose an option:"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 159,
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
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalButton,
                                    onClick: handleDownloadResume,
                                    children: "Download Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavBar$2f$NavBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resumeModalClose,
                            onClick: closeResumeModal,
                            "aria-label": "Close modal",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavBar/NavBar.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavBar/NavBar.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/NavBar/NavBar.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NavBar/NavBar.tsx",
        lineNumber: 74,
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
"[project]/app/components/atoms/Button/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "Button-module__8-PlsG__accent",
  "button": "Button-module__8-PlsG__button",
  "fullWidth": "Button-module__8-PlsG__fullWidth",
  "large": "Button-module__8-PlsG__large",
  "medium": "Button-module__8-PlsG__medium",
  "primary": "Button-module__8-PlsG__primary",
  "secondary": "Button-module__8-PlsG__secondary",
  "small": "Button-module__8-PlsG__small",
});
}),
"[project]/app/components/atoms/Button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Button/Button.module.css [app-client] (css module)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ variant = 'primary', size = 'medium', fullWidth = false, icon: Icon, iconPosition = 'left', children, className = '', as = 'button', href, ...props }, ref)=>{
    const classNames = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
        fullWidth && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidth,
        className
    ].filter(Boolean).join(' ');
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            Icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 46,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            Icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/components/atoms/Button/Button.tsx",
                lineNumber: 48,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    if (as === 'a' && href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            className: classNames,
            href: href,
            ...props,
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/atoms/Button/Button.tsx",
            lineNumber: 54,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: classNames,
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
"[project]/app/components/atoms/Text/Text.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "Text-module__JA_K4a__accent",
  "body": "Text-module__JA_K4a__body",
  "bodyLarge": "Text-module__JA_K4a__bodyLarge",
  "bodySmall": "Text-module__JA_K4a__bodySmall",
  "bold": "Text-module__JA_K4a__bold",
  "caption": "Text-module__JA_K4a__caption",
  "h1": "Text-module__JA_K4a__h1",
  "h2": "Text-module__JA_K4a__h2",
  "h3": "Text-module__JA_K4a__h3",
  "h4": "Text-module__JA_K4a__h4",
  "h5": "Text-module__JA_K4a__h5",
  "h6": "Text-module__JA_K4a__h6",
  "medium": "Text-module__JA_K4a__medium",
  "normal": "Text-module__JA_K4a__normal",
  "primary": "Text-module__JA_K4a__primary",
  "secondary": "Text-module__JA_K4a__secondary",
  "semibold": "Text-module__JA_K4a__semibold",
  "tertiary": "Text-module__JA_K4a__tertiary",
  "text": "Text-module__JA_K4a__text",
});
}),
"[project]/app/components/atoms/Text/Text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Text/Text.module.css [app-client] (css module)");
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
    const classNames = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color],
        weight && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Text$2f$Text$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][weight],
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
        className: classNames
    }, children);
};
_c = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/atoms/Container/Container.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Container-module__7bDoYG__container",
});
}),
"[project]/app/components/atoms/Container/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Container/Container.module.css [app-client] (css module)");
;
;
const Container = ({ children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Container$2f$Container$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} ${className}`,
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
"[project]/app/components/atoms/Section/Section.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "section": "Section-module__wLSK3G__section",
  "sectionLarge": "Section-module__wLSK3G__sectionLarge",
  "sectionSmall": "Section-module__wLSK3G__sectionSmall",
});
}),
"[project]/app/components/atoms/Section/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Section/Section.module.css [app-client] (css module)");
;
;
const Section = ({ children, size = 'medium', className = '', id })=>{
    const sizeClass = size === 'small' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionSmall : size === 'large' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLarge : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Section$2f$Section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${sizeClass} ${className}`,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/atoms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/atoms/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
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
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        // Simulate API call
        setTimeout(()=>{
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            alert('Message sent successfully!');
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2f$ContactForm$2f$ContactForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactForm,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                label: "NAME",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                required: true,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                label: "EMAIL",
                name: "email",
                type: "email",
                value: formData.email,
                onChange: handleChange,
                required: true,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$atoms$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                label: "MESSAGE",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                required: true,
                placeholder: ""
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 60,
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
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Contact/ContactForm/ContactForm.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactForm, "8sy6ov9bmPa0uRm9eaaKVFAtbqU=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_25ab5bc9._.js.map