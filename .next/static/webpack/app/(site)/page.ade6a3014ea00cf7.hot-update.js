"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-client)/./app/components/DownloadBook.tsx":
/*!*****************************************!*\
  !*** ./app/components/DownloadBook.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst DownloadBook = (param)=>{\n    let { onDownloadBook } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row gap-2 text-white text-base md:text-xl mt-4 md:mt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500\",\n                children: \"Download\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\components\\\\DownloadBook.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    onDownloadBook(\"pdf\");\n                },\n                className: \"cursor-pointer hover:text-red-500\",\n                children: \"PDF\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\components\\\\DownloadBook.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            \"|\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    onDownloadBook(\"epub\");\n                },\n                className: \"cursor-pointer hover:text-red-500\",\n                children: \"EPUB\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\components\\\\DownloadBook.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            \"|\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>{\n                    onDownloadBook(\"mobi\");\n                },\n                className: \"cursor-pointer hover:text-red-500\",\n                children: \"MOBI\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\components\\\\DownloadBook.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\components\\\\DownloadBook.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DownloadBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DownloadBook);\nvar _c;\n$RefreshReg$(_c, \"DownloadBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRG93bmxvYWRCb29rLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFPQSxNQUFNQSxlQUEyQztRQUFDLEVBQzlDQyxjQUFjLEVBQ2pCO0lBQ0MscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDZDs7Ozs7OzBCQUVELDhEQUFDRDtnQkFDREUsU0FBUztvQkFDTEgsZUFBZTtnQkFDbkI7Z0JBQ0FFLFdBQVU7MEJBQ1Q7Ozs7OztZQUNLOzBCQUVOLDhEQUFDRDtnQkFDREUsU0FBUztvQkFDTEgsZUFBZTtnQkFDbkI7Z0JBQ0FFLFdBQVU7MEJBQ1Q7Ozs7OztZQUNLOzBCQUVOLDhEQUFDRDtnQkFDREUsU0FBUztvQkFDTEgsZUFBZTtnQkFDbkI7Z0JBQ0FFLFdBQVU7MEJBQ1Q7Ozs7Ozs7Ozs7OztBQUlUO0tBakNNSDtBQW1DTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Eb3dubG9hZEJvb2sudHN4P2NiODEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5cclxuaW50ZXJmYWNlIERvd25sb2FkQm9va1Byb3BzIHtcclxuICAgIG9uRG93bmxvYWRCb29rOiAoZm9ybWF0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IERvd25sb2FkQm9vazpSZWFjdC5GQzxEb3dubG9hZEJvb2tQcm9wcz4gPSAoe1xyXG4gICAgb25Eb3dubG9hZEJvb2tcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTIgdGV4dC13aGl0ZSB0ZXh0LWJhc2UgbWQ6dGV4dC14bCBtdC00IG1kOm10LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgIHsnRG93bmxvYWQnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvd25sb2FkQm9vaygncGRmJyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICB7J1BERid9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBvbkRvd25sb2FkQm9vaygnZXB1YicpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgeydFUFVCJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB8XHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRG93bmxvYWRCb29rKCdtb2JpJyk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICB7J01PQkknfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRCb29rXHJcbiJdLCJuYW1lcyI6WyJEb3dubG9hZEJvb2siLCJvbkRvd25sb2FkQm9vayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/DownloadBook.tsx\n"));

/***/ })

});