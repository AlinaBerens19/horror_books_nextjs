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

/***/ "(app-client)/./app/(site)/components/TopTenBooks.tsx":
/*!***********************************************!*\
  !*** ./app/(site)/components/TopTenBooks.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst TopTenBooks = (param)=>{\n    let { children, title, ranking } = param;\n    const book_arr = title === null || title === void 0 ? void 0 : title.map((title, index)=>{\n        return {\n            ranking: ranking[index],\n            title: title\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[500px] w-[400px] bg-neutral-950 rounded-xl border-2 border-red-800   border-rounded-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4 flex flex-col px-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-3 flex flex-row items-top justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl text-white\",\n                        children: \"Top 10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col p-4 items-start text-xl gap-3 justify-start\",\n                    children: book_arr === null || book_arr === void 0 ? void 0 : book_arr.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row items-center gap-3 justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white\",\n                                    children: book.ranking\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white\",\n                                    children: book.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\TopTenBooks.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TopTenBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopTenBooks);\nvar _c;\n$RefreshReg$(_c, \"TopTenBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhzaXRlKS9jb21wb25lbnRzL1RvcFRlbkJvb2tzLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFVQSxNQUFNQSxjQUEwQztRQUFDLEVBQzdDQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsT0FBTyxFQUNWO0lBRUMsTUFBTUMsV0FBV0Ysa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPRyxJQUFJLENBQUNILE9BQU9JO1FBQ2xDLE9BQU87WUFDTEgsU0FBU0EsT0FBUSxDQUFDRyxNQUFNO1lBQ3hCSixPQUFPQTtRQUNUO0lBQ0Y7SUFHQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBRWYsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7OzhCQUt2Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1ZKLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUMsSUFBSSxDQUFDSSxNQUFNSCxzQkFDcEIsOERBQUNDOzRCQUFnQkMsV0FBVTs7OENBQ3pCLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWkMsS0FBS047Ozs7Ozs4Q0FFUiw4REFBQ0k7b0NBQUlDLFdBQVU7OENBQ1pDLEtBQUtQOzs7Ozs7OzJCQUxBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3RCO0tBekNNTjtBQTJDTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHNpdGUpL2NvbXBvbmVudHMvVG9wVGVuQm9va3MudHN4P2FmZjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5cclxuaW50ZXJmYWNlIFRvcFRlbkJvb2tzUHJvcHMge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICB0aXRsZT86IChzdHJpbmcgfCBudWxsKVtdO1xyXG4gICAgcmFua2luZz86IChudW1iZXIgfCBudWxsKVtdO1xyXG59XHJcblxyXG5cclxuY29uc3QgVG9wVGVuQm9va3M6IFJlYWN0LkZDPFRvcFRlbkJvb2tzUHJvcHM+ID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdGl0bGUsXHJcbiAgICByYW5raW5nLFxyXG59KSA9PiB7XHJcblxyXG4gIGNvbnN0IGJvb2tfYXJyID0gdGl0bGU/Lm1hcCgodGl0bGUsIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByYW5raW5nOiByYW5raW5nIVtpbmRleF0sXHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNTAwcHhdIHctWzQwMHB4XSBiZy1uZXV0cmFsLTk1MCByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1yZWQtODAwXHJcbiAgICAgYm9yZGVyLXJvdW5kZWQteGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGZsZXggZmxleC1jb2wgcHgtMTBcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBmbGV4IGZsZXgtcm93IGl0ZW1zLXRvcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBUb3AgMTBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC00IGl0ZW1zLXN0YXJ0IHRleHQteGwgZ2FwLTMganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAge2Jvb2tfYXJyPy5tYXAoKGJvb2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTMganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHtib29rLnJhbmtpbmd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICB7Ym9vay50aXRsZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wVGVuQm9va3NcclxuIl0sIm5hbWVzIjpbIlRvcFRlbkJvb2tzIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInJhbmtpbmciLCJib29rX2FyciIsIm1hcCIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9vayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/(site)/components/TopTenBooks.tsx\n"));

/***/ })

});