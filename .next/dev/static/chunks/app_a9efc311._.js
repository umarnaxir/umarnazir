(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/AOSInit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AOSInit",
    ()=>AOSInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AOSInit = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AOSInit.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100,
                delay: 0
            });
        }
    }["AOSInit.useEffect"], []);
    return null;
};
_s(AOSInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AOSInit;
var _c;
__turbopack_context__.k.register(_c, "AOSInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/styles/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
const theme = {
    colors: {
        bgPrimary: '#0a0a0a',
        bgSecondary: '#1a1a1a',
        bgTertiary: '#2a2a2a',
        textPrimary: '#ffffff',
        textSecondary: '#b3b3b3',
        textTertiary: '#808080',
        accent: '#3b82f6',
        accentHover: '#2563eb',
        border: '#333333',
        inputBg: '#1a1a1a',
        inputBorder: '#333333',
        inputFocus: '#3b82f6'
    },
    typography: {
        fontFamilyHeading: 'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontFamilyBody: 'var(--font-inter), Inter, -apple-system, "system-ui", sans-serif',
        fontFamilyMono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '2rem',
            '4xl': '2.5rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        }
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem'
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem'
    },
    transitions: {
        fast: '150ms ease',
        base: '250ms ease',
        slow: '350ms ease'
    },
    zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/styles/GlobalStyles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>GlobalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/styles/theme.ts [app-client] (ecmascript)");
'use client';
;
;
const GlobalStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobalStyle"]`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.bgPrimary};
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.textPrimary};
    font-family: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.fontFamilyBody};
    font-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].typography.fontSize.base};
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
    transition: color ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].transitions.fast};
  }

  a:hover {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.accent};
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
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.bgPrimary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.border};
    border-radius: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].colors.textTertiary};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/styles/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$GlobalStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/styles/GlobalStyles.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function ThemeProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$styles$2f$GlobalStyles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalStyles"], {}, void 0, false, {
                fileName: "[project]/app/components/ThemeProvider.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ThemeProvider.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_a9efc311._.js.map