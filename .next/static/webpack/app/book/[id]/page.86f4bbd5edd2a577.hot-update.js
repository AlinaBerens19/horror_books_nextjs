"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/book/[id]/page",{

/***/ "(app-client)/./app/book/[id]/components/DetailedBook.tsx":
/*!***************************************************!*\
  !*** ./app/book/[id]/components/DetailedBook.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/getBook */ \"(app-client)/./app/actions/getBook.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst DetailedBook = (param)=>{\n    let { id } = param;\n    _s();\n    console.log(\"DetailedBook: id =\", id);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [fetchedBook, setFetchedBook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            (0,_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.getBook)(id).then(()=>{\n                setFetchedBook(_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.fetched_book);\n            }).catch((error)=>{\n                console.log(error);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        };\n        getData();\n        console.log(\"DetailedBook: fetchedBook =\", fetchedBook);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full px-16 py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full h-full rounded-lg border-[2px] border-red-500\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:flex-row px-20 py-10 items-center justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.image,\n                        alt: \"Book cover\",\n                        className: \"w-1/4 h-7/8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-start items-top\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-white text-3xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailedBook, \"nwEgLibrfkiG1+F8MqhxbyQNCFg=\");\n_c = DetailedBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedBook);\nvar _c;\n$RefreshReg$(_c, \"DetailedBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jvb2svW2lkXS9jb21wb25lbnRzL0RldGFpbGVkQm9vay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU4RDtBQUVsQjtBQU81QyxNQUFNSSxlQUErQjtRQUFDLEVBQ2xDQyxFQUFFLEVBQ0w7O0lBRUNDLFFBQVFDLElBQUksc0JBQXNCRjtJQUVsQyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFjO0lBRTVERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFVBQVU7WUFDZFgsNkRBQU9BLENBQUNJLElBQ0xRLEtBQUs7Z0JBQ0pGLGVBQWVYLDhEQUFZQTtZQUM3QixHQUVDYyxNQUFNLENBQUNDO2dCQUNOVCxRQUFRQyxJQUFJUTtZQUNkLEdBRUNDLFFBQVE7Z0JBQ1BQLGFBQWE7WUFDZjtRQUVGO1FBRUFHO1FBRUFOLFFBQVFDLElBQUksK0JBQStCRztJQUUvQyxHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUMsS0FBS1Ysd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhVzt3QkFBT0MsS0FBSTt3QkFBYUosV0FBVTs7Ozs7O2tDQUV6RCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0I7R0FqRE1kO0tBQUFBO0FBbUROLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ib29rL1tpZF0vY29tcG9uZW50cy9EZXRhaWxlZEJvb2sudHN4Pzc2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBmZXRjaGVkX2Jvb2ssIGdldEJvb2sgfSBmcm9tIFwiQC9hcHAvYWN0aW9ucy9nZXRCb29rXCI7XHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tIFwiQC9hcHAvbW9kZWxzL0Jvb2tcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbGVkQm9vazpSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gICAgaWRcclxufSkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZygnRGV0YWlsZWRCb29rOiBpZCA9JywgaWQpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2ZldGNoZWRCb29rLCBzZXRGZXRjaGVkQm9va10gPSB1c2VTdGF0ZTxCb29rIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBnZXRCb29rKGlkISlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGZXRjaGVkQm9vayhmZXRjaGVkX2Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGdldERhdGEoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdEZXRhaWxlZEJvb2s6IGZldGNoZWRCb29rID0nLCBmZXRjaGVkQm9vayk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctZnVsbCBweC0xNiBweS0xMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWxnIGJvcmRlci1bMnB4XSBib3JkZXItcmVkLTUwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBweC0yMCBweS0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ZldGNoZWRCb29rPy5pbWFnZX0gYWx0PVwiQm9vayBjb3ZlclwiIGNsYXNzTmFtZT1cInctMS80IGgtNy84XCIvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXRvcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGxcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZEJvb2tcclxuIl0sIm5hbWVzIjpbImZldGNoZWRfYm9vayIsImdldEJvb2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRldGFpbGVkQm9vayIsImlkIiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoZWRCb29rIiwic2V0RmV0Y2hlZEJvb2siLCJnZXREYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/book/[id]/components/DetailedBook.tsx\n"));

/***/ })

});