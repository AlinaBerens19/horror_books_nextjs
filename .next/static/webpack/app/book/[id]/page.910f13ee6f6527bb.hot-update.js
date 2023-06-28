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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/getBook */ \"(app-client)/./app/actions/getBook.tsx\");\n/* harmony import */ var _app_components_DownloadBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/DownloadBook */ \"(app-client)/./app/components/DownloadBook.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailedBook = (param)=>{\n    let { id } = param;\n    _s();\n    console.log(\"DetailedBook: id =\", id);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [fetchedBook, setFetchedBook] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getData = async ()=>{\n            (0,_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.getBook)(id).then(()=>{\n                setFetchedBook(_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.fetched_book);\n            }).catch((error)=>{\n                console.log(error);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        };\n        getData();\n        console.log(\"DetailedBook: fetchedBook =\", fetchedBook);\n    }, []);\n    const onDownloadBook = async (format)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen overflow-y-auto sm:h-screen w-full px-3 sm:px-16 py-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:flex-row py-1 sm:py-5 items-top justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.image,\n                        alt: \"Book cover\",\n                        className: \"w-full h-full sm:w-1/4 sm:h-7/8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col sm:ps-20 justify-start items-top gap-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-4xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-2xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-xl text-light\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.ranking\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_DownloadBook__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onDownloadBook: onDownloadBook\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-white text-xl text-bold cursor-pointer hover:text-red-500\",\n                                        children: \"Read online\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-xl pt-10 pb-10\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailedBook, \"nwEgLibrfkiG1+F8MqhxbyQNCFg=\");\n_c = DetailedBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedBook);\nvar _c;\n$RefreshReg$(_c, \"DetailedBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jvb2svW2lkXS9jb21wb25lbnRzL0RldGFpbGVkQm9vay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFOEQ7QUFDTDtBQUViO0FBTzVDLE1BQU1LLGVBQStCO1FBQUMsRUFDbENDLEVBQUUsRUFDTDs7SUFFQ0MsUUFBUUMsSUFBSSxzQkFBc0JGO0lBRWxDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQWM7SUFFNURELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsVUFBVTtZQUNkWiw2REFBT0EsQ0FBQ0ssSUFDTFEsS0FBSztnQkFDSkYsZUFBZVosOERBQVlBO1lBQzdCLEdBRUNlLE1BQU0sQ0FBQ0M7Z0JBQ05ULFFBQVFDLElBQUlRO1lBQ2QsR0FFQ0MsUUFBUTtnQkFDUFAsYUFBYTtZQUNmO1FBRUY7UUFFQUc7UUFFQU4sUUFBUUMsSUFBSSwrQkFBK0JHO0lBRS9DLEdBQUcsRUFBRTtJQUVMLE1BQU1PLGlCQUFpQixPQUFPQyxVQUU5QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJQyxLQUFLWix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFhO3dCQUFPQyxLQUFJO3dCQUFhSixXQUFVOzs7Ozs7a0NBRXpELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWlYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhZTs7Ozs7OzhDQUVoQiw4REFBQ047b0NBQUlDLFdBQVU7OENBQ1pWLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYWdCOzs7Ozs7OENBRWhCLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FDWlYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhaUI7Ozs7Ozs4Q0FHaEIsOERBQUMxQixvRUFBWUE7b0NBQUNnQixnQkFBZ0JBOzs7Ozs7OENBRTlCLDhEQUFDRTs4Q0FDQyw0RUFBQ0E7d0NBQUlDLFdBQVU7a0RBQWlFOzs7Ozs7Ozs7Ozs4Q0FLbEYsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNaVix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzlCO0dBM0VNeEI7S0FBQUE7QUE2RU4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jvb2svW2lkXS9jb21wb25lbnRzL0RldGFpbGVkQm9vay50c3g/NzYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGZldGNoZWRfYm9vaywgZ2V0Qm9vayB9IGZyb20gXCJAL2FwcC9hY3Rpb25zL2dldEJvb2tcIjtcclxuaW1wb3J0IERvd25sb2FkQm9vayBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Eb3dubG9hZEJvb2tcIjtcclxuaW1wb3J0IHsgQm9vayB9IGZyb20gXCJAL2FwcC9tb2RlbHMvQm9va1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRGV0YWlsZWRCb29rOlJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgICBpZFxyXG59KSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdEZXRhaWxlZEJvb2s6IGlkID0nLCBpZCk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZmV0Y2hlZEJvb2ssIHNldEZldGNoZWRCb29rXSA9IHVzZVN0YXRlPEJvb2sgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGdldEJvb2soaWQhKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHNldEZldGNoZWRCb29rKGZldGNoZWRfYm9vayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZ2V0RGF0YSgpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0RldGFpbGVkQm9vazogZmV0Y2hlZEJvb2sgPScsIGZldGNoZWRCb29rKTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkRvd25sb2FkQm9vayA9IGFzeW5jIChmb3JtYXQ6IHN0cmluZykgPT4ge1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBvdmVyZmxvdy15LWF1dG8gc206aC1zY3JlZW4gdy1mdWxsIHB4LTMgc206cHgtMTYgcHktNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBweS0xIHNtOnB5LTUgaXRlbXMtdG9wIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtmZXRjaGVkQm9vaz8uaW1hZ2V9IGFsdD1cIkJvb2sgY292ZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHNtOnctMS80IHNtOmgtNy84XCIvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpwcy0yMCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXRvcCBnYXAtNFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC00eGwgdGV4dC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmV0Y2hlZEJvb2s/LnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCB0ZXh0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHtmZXRjaGVkQm9vaz8uYXV0aG9yfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteGwgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAge2ZldGNoZWRCb29rPy5yYW5raW5nfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8RG93bmxvYWRCb29rIG9uRG93bmxvYWRCb29rPXtvbkRvd25sb2FkQm9va30vPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBSZWFkIG9ubGluZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIHB0LTEwIHBiLTEwXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmV0Y2hlZEJvb2s/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsZWRCb29rXHJcbiJdLCJuYW1lcyI6WyJmZXRjaGVkX2Jvb2siLCJnZXRCb29rIiwiRG93bmxvYWRCb29rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEZXRhaWxlZEJvb2siLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaGVkQm9vayIsInNldEZldGNoZWRCb29rIiwiZ2V0RGF0YSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiZmluYWxseSIsIm9uRG93bmxvYWRCb29rIiwiZm9ybWF0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImF1dGhvciIsInJhbmtpbmciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/book/[id]/components/DetailedBook.tsx\n"));

/***/ })

});