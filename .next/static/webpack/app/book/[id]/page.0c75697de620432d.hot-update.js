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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/getBook */ \"(app-client)/./app/actions/getBook.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst DetailedBook = (param)=>{\n    let { id } = param;\n    _s();\n    console.log(\"DetailedBook: id =\", id);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [fetchedBook, setFetchedBook] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            (0,_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.getBook)(id).then(()=>{\n                setFetchedBook(_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.fetched_book);\n            }).catch((error)=>{\n                console.log(error);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        };\n        getData();\n        console.log(\"DetailedBook: fetchedBook =\", fetchedBook);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-full px-16 py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full h-full rounded-lg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:flex-row py-5 items-top justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.image,\n                        alt: \"Book cover\",\n                        className: \"w-1/4 h-7/8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col ps-20 justify-start items-top gap-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-4xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-2xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-xl text-light\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.ranking\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row gap-5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-xl\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailedBook, \"nwEgLibrfkiG1+F8MqhxbyQNCFg=\");\n_c = DetailedBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedBook);\nvar _c;\n$RefreshReg$(_c, \"DetailedBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jvb2svW2lkXS9jb21wb25lbnRzL0RldGFpbGVkQm9vay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU4RDtBQUVsQjtBQU81QyxNQUFNSSxlQUErQjtRQUFDLEVBQ2xDQyxFQUFFLEVBQ0w7O0lBRUNDLFFBQVFDLElBQUksc0JBQXNCRjtJQUVsQyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFjO0lBRTVERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFVBQVU7WUFDZFgsNkRBQU9BLENBQUNJLElBQ0xRLEtBQUs7Z0JBQ0pGLGVBQWVYLDhEQUFZQTtZQUM3QixHQUVDYyxNQUFNLENBQUNDO2dCQUNOVCxRQUFRQyxJQUFJUTtZQUNkLEdBRUNDLFFBQVE7Z0JBQ1BQLGFBQWE7WUFDZjtRQUVGO1FBRUFHO1FBRUFOLFFBQVFDLElBQUksK0JBQStCRztJQUUvQyxHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUMsS0FBS1Ysd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhVzt3QkFBT0MsS0FBSTt3QkFBYUosV0FBVTs7Ozs7O2tDQUV6RCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRWIsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1pSLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYWE7Ozs7Ozs4Q0FFaEIsOERBQUNOO29DQUFJQyxXQUFVOzhDQUNaUix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFjOzs7Ozs7OENBRWhCLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FDWlIsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhZTs7Ozs7OzhDQUdoQiw4REFBQ1I7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FJZiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1pSLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXOUI7R0FyRU10QjtLQUFBQTtBQXVFTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYm9vay9baWRdL2NvbXBvbmVudHMvRGV0YWlsZWRCb29rLnRzeD83NjJlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hlZF9ib29rLCBnZXRCb29rIH0gZnJvbSBcIkAvYXBwL2FjdGlvbnMvZ2V0Qm9va1wiO1xyXG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIkAvYXBwL21vZGVscy9Cb29rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBEZXRhaWxlZEJvb2s6UmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICAgIGlkXHJcbn0pID0+IHtcclxuXHJcbiAgY29uc29sZS5sb2coJ0RldGFpbGVkQm9vazogaWQgPScsIGlkKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmZXRjaGVkQm9vaywgc2V0RmV0Y2hlZEJvb2tdID0gdXNlU3RhdGU8Qm9vayB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZ2V0Qm9vayhpZCEpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgc2V0RmV0Y2hlZEJvb2soZmV0Y2hlZF9ib29rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBnZXREYXRhKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnRGV0YWlsZWRCb29rOiBmZXRjaGVkQm9vayA9JywgZmV0Y2hlZEJvb2spO1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LWZ1bGwgcHgtMTYgcHktMTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBweS01IGl0ZW1zLXRvcCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZmV0Y2hlZEJvb2s/LmltYWdlfSBhbHQ9XCJCb29rIGNvdmVyXCIgY2xhc3NOYW1lPVwidy0xLzQgaC03LzhcIi8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBzLTIwIGp1c3RpZnktc3RhcnQgaXRlbXMtdG9wIGdhcC01XCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LTR4bCB0ZXh0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHtmZXRjaGVkQm9vaz8udGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIHRleHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge2ZldGNoZWRCb29rPy5hdXRob3J9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14bCB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7ZmV0Y2hlZEJvb2s/LnJhbmtpbmd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNVwiPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgIHtmZXRjaGVkQm9vaz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZEJvb2tcclxuIl0sIm5hbWVzIjpbImZldGNoZWRfYm9vayIsImdldEJvb2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRldGFpbGVkQm9vayIsImlkIiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoZWRCb29rIiwic2V0RmV0Y2hlZEJvb2siLCJnZXREYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImF1dGhvciIsInJhbmtpbmciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/book/[id]/components/DetailedBook.tsx\n"));

/***/ })

});