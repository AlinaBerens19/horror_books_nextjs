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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/getBook */ \"(app-client)/./app/actions/getBook.tsx\");\n/* harmony import */ var _app_components_DownloadBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/DownloadBook */ \"(app-client)/./app/components/DownloadBook.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailedBook = (param)=>{\n    let { id } = param;\n    _s();\n    console.log(\"DetailedBook: id =\", id);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [fetchedBook, setFetchedBook] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getData = async ()=>{\n            (0,_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.getBook)(id).then(()=>{\n                setFetchedBook(_app_actions_getBook__WEBPACK_IMPORTED_MODULE_1__.fetched_book);\n            }).catch((error)=>{\n                console.log(error);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        };\n        getData();\n        console.log(\"DetailedBook: fetchedBook =\", fetchedBook);\n    }, []);\n    const onDownloadBook = async (format)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen overflow-y-auto sm:h-screen w-full px-3 sm:px-16 py-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col sm:flex-row py-1 sm:py-5 items-top justify-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.image,\n                        alt: \"Book cover\",\n                        className: \"w-full h-full sm:w-1/4 sm:h-7/8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pt-5 sm:ps-20 justify-start items-top gap-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-4xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-2xl text-bold\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.author\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-red-500 text-xl text-light\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.ranking\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_DownloadBook__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onDownloadBook: onDownloadBook\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white text-xl pt-10 pb-10\",\n                                    children: fetchedBook === null || fetchedBook === void 0 ? void 0 : fetchedBook.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\book\\\\[id]\\\\components\\\\DetailedBook.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailedBook, \"nwEgLibrfkiG1+F8MqhxbyQNCFg=\");\n_c = DetailedBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailedBook);\nvar _c;\n$RefreshReg$(_c, \"DetailedBook\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Jvb2svW2lkXS9jb21wb25lbnRzL0RldGFpbGVkQm9vay50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFOEQ7QUFDTDtBQUViO0FBTzVDLE1BQU1LLGVBQStCO1FBQUMsRUFDbENDLEVBQUUsRUFDTDs7SUFFQ0MsUUFBUUMsSUFBSSxzQkFBc0JGO0lBRWxDLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQWM7SUFFNURELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsVUFBVTtZQUNkWiw2REFBT0EsQ0FBQ0ssSUFDTFEsS0FBSztnQkFDSkYsZUFBZVosOERBQVlBO1lBQzdCLEdBRUNlLE1BQU0sQ0FBQ0M7Z0JBQ05ULFFBQVFDLElBQUlRO1lBQ2QsR0FFQ0MsUUFBUTtnQkFDUFAsYUFBYTtZQUNmO1FBRUY7UUFFQUc7UUFFQU4sUUFBUUMsSUFBSSwrQkFBK0JHO0lBRS9DLEdBQUcsRUFBRTtJQUVMLE1BQU1PLGlCQUFpQixPQUFPQyxVQUU5QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJQyxLQUFLWix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFhO3dCQUFPQyxLQUFJO3dCQUFhSixXQUFVOzs7Ozs7a0NBRXpELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FFYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWlYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhZTs7Ozs7OzhDQUVoQiw4REFBQ047b0NBQUlDLFdBQVU7OENBQ1pWLHdCQUFBQSx5QkFBQUEsS0FBQUEsSUFBQUEsWUFBYWdCOzs7Ozs7OENBRWhCLDhEQUFDUDtvQ0FBSUMsV0FBVTs4Q0FDWlYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhaUI7Ozs7Ozs4Q0FHaEIsOERBQUMxQixvRUFBWUE7b0NBQUNnQixnQkFBZ0JBOzs7Ozs7OENBRTlCLDhEQUFDRTtvQ0FBSUMsV0FBVTs4Q0FDWlYsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFha0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5QjtHQXJFTXhCO0tBQUFBO0FBdUVOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ib29rL1tpZF0vY29tcG9uZW50cy9EZXRhaWxlZEJvb2sudHN4Pzc2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBmZXRjaGVkX2Jvb2ssIGdldEJvb2sgfSBmcm9tIFwiQC9hcHAvYWN0aW9ucy9nZXRCb29rXCI7XHJcbmltcG9ydCBEb3dubG9hZEJvb2sgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvRG93bmxvYWRCb29rXCI7XHJcbmltcG9ydCB7IEJvb2sgfSBmcm9tIFwiQC9hcHAvbW9kZWxzL0Jvb2tcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbGVkQm9vazpSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gICAgaWRcclxufSkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZygnRGV0YWlsZWRCb29rOiBpZCA9JywgaWQpO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2ZldGNoZWRCb29rLCBzZXRGZXRjaGVkQm9va10gPSB1c2VTdGF0ZTxCb29rIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBnZXRCb29rKGlkISlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRGZXRjaGVkQm9vayhmZXRjaGVkX2Jvb2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGdldERhdGEoKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdEZXRhaWxlZEJvb2s6IGZldGNoZWRCb29rID0nLCBmZXRjaGVkQm9vayk7XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Eb3dubG9hZEJvb2sgPSBhc3luYyAoZm9ybWF0OiBzdHJpbmcpID0+IHtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gb3ZlcmZsb3cteS1hdXRvIHNtOmgtc2NyZWVuIHctZnVsbCBweC0zIHNtOnB4LTE2IHB5LTEwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHB5LTEgc206cHktNSBpdGVtcy10b3AganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ZldGNoZWRCb29rPy5pbWFnZX0gYWx0PVwiQm9vayBjb3ZlclwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgc206dy0xLzQgc206aC03LzhcIi8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTUgc206cHMtMjAganVzdGlmeS1zdGFydCBpdGVtcy10b3AgZ2FwLTVcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtNHhsIHRleHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge2ZldGNoZWRCb29rPy50aXRsZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgdGV4dC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICB7ZmV0Y2hlZEJvb2s/LmF1dGhvcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhsIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIHtmZXRjaGVkQm9vaz8ucmFua2luZ31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPERvd25sb2FkQm9vayBvbkRvd25sb2FkQm9vaz17b25Eb3dubG9hZEJvb2t9Lz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcHQtMTAgcGItMTBcIj5cclxuICAgICAgICAgICAgICAgIHtmZXRjaGVkQm9vaz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZEJvb2tcclxuIl0sIm5hbWVzIjpbImZldGNoZWRfYm9vayIsImdldEJvb2siLCJEb3dubG9hZEJvb2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRldGFpbGVkQm9vayIsImlkIiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoZWRCb29rIiwic2V0RmV0Y2hlZEJvb2siLCJnZXREYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5Iiwib25Eb3dubG9hZEJvb2siLCJmb3JtYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiYXV0aG9yIiwicmFua2luZyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/book/[id]/components/DetailedBook.tsx\n"));

/***/ })

});