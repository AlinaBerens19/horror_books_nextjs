"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/account/[...id]/page",{

/***/ "(app-client)/./app/(site)/components/Header.tsx":
/*!******************************************!*\
  !*** ./app/(site)/components/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwind-merge */ \"(app-client)/./node_modules/tailwind-merge/dist/lib/tw-merge.mjs\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ \"(app-client)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { className } = param;\n    _s();\n    const [searchVisible, setSearchVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSearchClick = ()=>{\n        setSearchVisible(!searchVisible);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.twMerge)(\"\\n        w-full h-fit bg-gradient-to-b from-red-900 to-red-600 py-1 px-10\\n      \", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row gap-5 items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/images/spider.webp\",\n                                className: \"w-25 h-20 bg-transparent\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"text-white text-4xl cursor-pointer\",\n                            children: \"Horror Library\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"transition-all duration-300 \".concat(searchVisible ? \"translate-y-0 opacity-100\" : \"-translate-y-full opacity-0\", \" sm:translate-y-0 sm:opacity-100 sm:static \").concat(searchVisible ? \"relative\" : \"absolute\", \" top-full left-1/2 transform-gpu sm:relative sm:top-auto sm:left-auto sm:transform-none\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Search\",\n                                className: \"bg-transparent border border-white rounded p-1 text-white hover:border-[3px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"hover:text-black cursor-pointer text-white text-2xl\",\n                            onClick: handleSearchClick,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_5__.IoMdSearch, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-3\",\n                            children: [\n                                session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n                                        router.push(\"/\");\n                                    },\n                                    className: \"hover:text-black text-white text-xl cursor-pointer\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>router.push(\"/auth/login/\"),\n                                    className: \"hover:text-black text-white text-xl cursor-pointer\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-xl\",\n                                    children: \"|\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        var _session_user;\n                                        session ? router.push(\"/dashboard/account/\".concat(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email)) : router.push(\"/auth/register/\");\n                                    },\n                                    className: \"hover:text-black text-white text-xl cursor-pointer\",\n                                    children: session ? \"Dashboard\" : \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Header.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"jbjWd8QsePp3/YZwRa/Y5YRaEeY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhzaXRlKS9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ0c7QUFDWDtBQUNXO0FBQ1U7QUFNdEQsTUFBTU0sU0FBZ0M7UUFBQyxFQUFFQyxTQUFTLEVBQUU7O0lBQ2xELE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sRUFBRVEsTUFBTUMsT0FBTyxFQUFFLEdBQUdOLDJEQUFVQTtJQUVwQyxNQUFNTyxTQUFTVCwwREFBU0E7SUFFeEIsTUFBTVUsb0JBQW9CO1FBQ3hCSixpQkFBaUIsQ0FBQ0Q7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ007UUFDQ1AsV0FBV1AsdURBQU9BLENBQUUsc0ZBRWpCTztrQkFFSCw0RUFBQ087WUFBSVAsV0FBVTs7OEJBQ2IsOERBQUNPO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ087c0NBQ0MsNEVBQUNDO2dDQUFJQyxLQUFJO2dDQUFzQlQsV0FBVTs7Ozs7Ozs7Ozs7c0NBRTNDLDhEQUFDTzs0QkFDQ0csU0FBUyxJQUFNTCxPQUFPTSxLQUFNOzRCQUM1QlgsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7OzhCQUtILDhEQUFDTztvQkFBSVAsV0FBVTs7c0NBRWIsOERBQUNPOzRCQUNDUCxXQUFXLCtCQUdUQyxPQUZBQSxnQkFBZ0IsOEJBQThCLCtCQUMvQywrQ0FFQSxPQURDQSxnQkFBZ0IsYUFBYSxZQUM5QjtzQ0FFRCw0RUFBQ1c7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pkLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDZTs0QkFDQ2YsV0FBVTs0QkFDVlUsU0FBU0o7c0NBRVQsNEVBQUNaLHNEQUFVQTs7Ozs7Ozs7OztzQ0FHYiw4REFBQ2E7NEJBQUlQLFdBQVU7O2dDQUNaSSx3QkFDQyw4REFBQ1c7b0NBQ0NMLFNBQVM7d0NBQ1BiLHdEQUFPQTt3Q0FDUFEsT0FBT00sS0FBTTtvQ0FDZjtvQ0FDQVgsV0FBVTs4Q0FDWDs7Ozs7OERBSUQsOERBQUNlO29DQUNDTCxTQUFTLElBQU1MLE9BQU9NLEtBQU07b0NBQzVCWCxXQUFVOzhDQUNYOzs7Ozs7OENBSUgsOERBQUNPO29DQUFJUCxXQUFVOzhDQUFxQjs7Ozs7OzhDQUNwQyw4REFBQ2U7b0NBQ0NMLFNBQVM7NENBRStCTjt3Q0FEdENBLFVBQ0lDLE9BQU9NLEtBQUssc0JBQTJDLE9BQXJCUCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxRQUFTWSxrQkFBVFosMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVhLFVBQ2pEWixPQUFPTSxLQUFNO29DQUNuQjtvQ0FDQVgsV0FBVTs4Q0FFVEksVUFBVSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QztHQXRGTUw7O1FBRXNCRCx1REFBVUE7UUFFckJGLHNEQUFTQTs7O0tBSnBCRztBQXdGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHNpdGUpL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9lM2Y3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xyXG5pbXBvcnQgeyBJb01kU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hWaXNpYmxlLCBzZXRTZWFyY2hWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoVmlzaWJsZSghc2VhcmNoVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXt0d01lcmdlKGBcclxuICAgICAgICB3LWZ1bGwgaC1maXQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXJlZC05MDAgdG8tcmVkLTYwMCBweS0xIHB4LTEwXHJcbiAgICAgIGAsIGNsYXNzTmFtZSl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwaWRlci53ZWJwXCIgY2xhc3NOYW1lPVwidy0yNSBoLTIwIGJnLXRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL2ApfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSG9ycm9yIExpYnJhcnlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC01XCI+XHJcbiAgICAgICAgICB7LyogU2xpZGUtaW4gc2VhcmNoIGZpZWxkICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgICAgICBzZWFyY2hWaXNpYmxlID8gJ3RyYW5zbGF0ZS15LTAgb3BhY2l0eS0xMDAnIDogJy10cmFuc2xhdGUteS1mdWxsIG9wYWNpdHktMCdcclxuICAgICAgICAgICAgfSBzbTp0cmFuc2xhdGUteS0wIHNtOm9wYWNpdHktMTAwIHNtOnN0YXRpYyAke1xyXG4gICAgICAgICAgICAgIHNlYXJjaFZpc2libGUgPyAncmVsYXRpdmUnIDogJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICB9IHRvcC1mdWxsIGxlZnQtMS8yIHRyYW5zZm9ybS1ncHUgc206cmVsYXRpdmUgc206dG9wLWF1dG8gc206bGVmdC1hdXRvIHNtOnRyYW5zZm9ybS1ub25lYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBib3JkZXIgYm9yZGVyLXdoaXRlIHJvdW5kZWQgcC0xIHRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLVszcHhdXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgdGV4dC0yeGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElvTWRTZWFyY2ggLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtM1wiPlxyXG4gICAgICAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsYWNrIHRleHQtd2hpdGUgdGV4dC14bCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9hdXRoL2xvZ2luL2ApfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ibGFjayB0ZXh0LXdoaXRlIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsXCI+fDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICA/IHJvdXRlci5wdXNoKGAvZGFzaGJvYXJkL2FjY291bnQvJHtzZXNzaW9uPy51c2VyPy5lbWFpbH1gKVxyXG4gICAgICAgICAgICAgICAgICA6IHJvdXRlci5wdXNoKGAvYXV0aC9yZWdpc3Rlci9gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmxhY2sgdGV4dC13aGl0ZSB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZXNzaW9uID8gJ0Rhc2hib2FyZCcgOiAnUmVnaXN0ZXInfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJ0d01lcmdlIiwiSW9NZFNlYXJjaCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJIZWFkZXIiLCJjbGFzc05hbWUiLCJzZWFyY2hWaXNpYmxlIiwic2V0U2VhcmNoVmlzaWJsZSIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJkaXYiLCJpbWciLCJzcmMiLCJvbkNsaWNrIiwicHVzaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidXNlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/(site)/components/Header.tsx\n"));

/***/ })

});