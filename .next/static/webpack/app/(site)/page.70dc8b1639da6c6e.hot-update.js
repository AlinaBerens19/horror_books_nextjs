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

/***/ "(app-client)/./app/(site)/components/Main.tsx":
/*!****************************************!*\
  !*** ./app/(site)/components/Main.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/getData */ \"(app-client)/./app/actions/getData.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TopTenBooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopTenBooks */ \"(app-client)/./app/(site)/components/TopTenBooks.tsx\");\n/* harmony import */ var _TrendingNow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrendingNow */ \"(app-client)/./app/(site)/components/TrendingNow.tsx\");\n/* harmony import */ var _MostTerrifying__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MostTerrifying */ \"(app-client)/./app/(site)/components/MostTerrifying.tsx\");\n/* harmony import */ var _NewArrival__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewArrival */ \"(app-client)/./app/(site)/components/NewArrival.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [fetchedBooks, setFetchedBooks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.books);\n    let i = -1;\n    let j = -1;\n    const sortedBooks = fetchedBooks === null || fetchedBooks === void 0 ? void 0 : fetchedBooks.sort((a, b)=>{\n        if (a !== null && b !== null) {\n            return b.ranking - a.ranking;\n        }\n        return 0;\n    });\n    // Filter first ten books by category 'Terrifying'\n    const filteredBooksTerrifying = fetchedBooks === null || fetchedBooks === void 0 ? void 0 : fetchedBooks.filter((book)=>book.category === \"Terrifying\").slice(0, 5);\n    // Filter first ten books by category 'New'\n    const filteredBooksNewArrival = fetchedBooks.filter((book)=>book.category === \"New\").slice(0, 5);\n    // Create array of 'Terrifying' book images\n    const terrifyingBooks = filteredBooksTerrifying === null || filteredBooksTerrifying === void 0 ? void 0 : filteredBooksTerrifying.map((book)=>book);\n    // Create array of 'New' book images\n    const newBooksArrival = filteredBooksNewArrival === null || filteredBooksNewArrival === void 0 ? void 0 : filteredBooksNewArrival.map((book)=>book);\n    // Create array of first top ten books\n    const topTenBooks = sortedBooks === null || sortedBooks === void 0 ? void 0 : sortedBooks.slice(0, 9);\n    let trending_now = _app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.books === null || _app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.books === void 0 ? void 0 : _app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.books.filter((book)=>book.trending === true);\n    trending_now.sort((a, b)=>{\n        if (a !== null && b !== null) {\n            return b.ranking - a.ranking;\n        }\n        return 0; // Return 0 for null or undefined values\n    });\n    const firstTrendingBook = trending_now[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getBooks = async ()=>{\n            (0,_app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(\"http://127.0.0.1:8000/library/books/\").then(()=>{\n                setFetchedBooks(_app_actions_getData__WEBPACK_IMPORTED_MODULE_1__.books);\n            }).catch((error)=>{\n                console.log(error);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        };\n        getBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-full items-center justify-center bg-neutral-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row px-24 py-5 lg:gap-5 gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopTenBooks__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: topTenBooks === null || topTenBooks === void 0 ? void 0 : topTenBooks.map((book)=>book.title),\n                        ranking: topTenBooks === null || topTenBooks === void 0 ? void 0 : topTenBooks.map((book)=>book.ranking)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrendingNow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        id: firstTrendingBook === null || firstTrendingBook === void 0 ? void 0 : firstTrendingBook.id,\n                        title: firstTrendingBook === null || firstTrendingBook === void 0 ? void 0 : firstTrendingBook.title,\n                        description: firstTrendingBook === null || firstTrendingBook === void 0 ? void 0 : firstTrendingBook.description,\n                        image: firstTrendingBook === null || firstTrendingBook === void 0 ? void 0 : firstTrendingBook.image,\n                        ranking: firstTrendingBook === null || firstTrendingBook === void 0 ? void 0 : firstTrendingBook.ranking\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MostTerrifying__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                books: terrifyingBooks\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewArrival__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                books: newBooksArrival\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\Main.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"zhujVsXPaw0rm811GZJA/ZL/2Z8=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhzaXRlKS9jb21wb25lbnRzL01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ1g7QUFDSjtBQUNBO0FBQ007QUFDUjtBQUV0QyxNQUFNUSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQ0gsdURBQUtBO0lBRXRELElBQUlhLElBQUksQ0FBQztJQUNULElBQUlDLElBQUksQ0FBQztJQUVULE1BQU1DLGNBQWNKLHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY0ssS0FBSyxDQUFDQyxHQUFHQztRQUN6QyxJQUFJRCxNQUFNLFFBQVFDLE1BQU0sTUFBTTtZQUM1QixPQUFPQSxFQUFFQyxVQUFXRixFQUFFRTtRQUN4QjtRQUNBLE9BQU87SUFDVDtJQUVBLGtEQUFrRDtJQUNsRCxNQUFNQywwQkFBMEJULHlCQUFBQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBY1UsT0FBTyxDQUFDQyxPQUFTQSxLQUFLQyxhQUFhLGNBQWNDLE1BQU0sR0FBRztJQUV4RywyQ0FBMkM7SUFDM0MsTUFBTUMsMEJBQTBCZCxhQUFhVSxPQUFPLENBQUNDLE9BQVNBLEtBQUtDLGFBQWEsT0FBT0MsTUFBTSxHQUFHO0lBRWhHLDJDQUEyQztJQUMzQyxNQUFNRSxrQkFBa0JOLG9DQUFBQSxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXlCTyxJQUFJLENBQUNMLE9BQVNBO0lBRS9ELG9DQUFvQztJQUNwQyxNQUFNTSxrQkFBa0JILG9DQUFBQSxxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXlCRSxJQUFJLENBQUNMLE9BQVNBO0lBRS9ELHNDQUFzQztJQUN0QyxNQUFNTyxjQUFjZCx3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFTLE1BQU0sR0FBRztJQUUxQyxJQUFJTSxlQUFlOUIsdURBQUtBLGFBQUxBLHVEQUFLQSxjQUFMQSxLQUFBQSxJQUFBQSx1REFBS0EsQ0FBRXFCLE9BQU8sQ0FBQ0MsT0FBU0EsS0FBS1MsYUFBYTtJQUM3REQsYUFBYWQsS0FBSyxDQUFDQyxHQUFHQztRQUNwQixJQUFJRCxNQUFNLFFBQVFDLE1BQU0sTUFBTTtZQUM1QixPQUFPQSxFQUFFQyxVQUFXRixFQUFFRTtRQUN4QjtRQUNBLE9BQU8sR0FBRyx3Q0FBd0M7SUFDcEQ7SUFFQSxNQUFNYSxvQkFBb0JGLFlBQVksQ0FBQyxFQUFFO0lBR3pDNUIsZ0RBQVNBLENBQUM7UUFDUixNQUFNK0IsV0FBVztZQUNmaEMsNkRBQU9BLENBQUMsd0NBQ0xpQyxLQUFLO2dCQUNGdEIsZ0JBQWdCWix1REFBS0E7WUFDekIsR0FFQ21DLE1BQU0sQ0FBQ0M7Z0JBQ05DLFFBQVFDLElBQUlGO1lBQ2QsR0FFQ0csUUFBUTtnQkFDUDdCLGFBQWE7WUFDZjtRQUVGO1FBRUF1QjtJQUVKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDckMsb0RBQVdBO3dCQUNWc0MsS0FBSyxFQUFFYix3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFGLElBQUksQ0FBQ0wsT0FBU0EsS0FBS29CO3dCQUN2Q3ZCLE9BQU8sRUFBRVUsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhRixJQUFJLENBQUNMLE9BQVNBLEtBQUtIOzs7Ozs7a0NBRTNDLDhEQUFDZCxvREFBV0E7d0JBQ1ZzQyxJQUFJWCw4QkFBQUEsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFtQlc7d0JBQ3ZCRCxPQUFPViw4QkFBQUEsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFtQlU7d0JBQzFCRSxhQUFhWiw4QkFBQUEsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFtQlk7d0JBQ2hDQyxPQUFPYiw4QkFBQUEsK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFtQmE7d0JBQzFCMUIsU0FBU2EsOEJBQUFBLCtCQUFBQSxLQUFBQSxJQUFBQSxrQkFBbUJiOzs7Ozs7Ozs7Ozs7MEJBR2xDLDhEQUFDYix1REFBY0E7Z0JBQUNOLE9BQU8wQjs7Ozs7OzBCQUN2Qiw4REFBQ25CLG1EQUFVQTtnQkFBQ1AsT0FBTzRCOzs7Ozs7Ozs7Ozs7QUFHekI7R0FoRk1wQjtLQUFBQTtBQWtGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHNpdGUpL2NvbXBvbmVudHMvTWFpbi50c3g/YjhkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IGJvb2tzLCBnZXREYXRhIH0gZnJvbSBcIkAvYXBwL2FjdGlvbnMvZ2V0RGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb3BUZW5Cb29rcyBmcm9tIFwiLi9Ub3BUZW5Cb29rc1wiO1xyXG5pbXBvcnQgVHJlbmRpbmdOb3cgZnJvbSBcIi4vVHJlbmRpbmdOb3dcIjtcclxuaW1wb3J0IE1vc3RUZXJyaWZ5aW5nIGZyb20gXCIuL01vc3RUZXJyaWZ5aW5nXCI7XHJcbmltcG9ydCBOZXdBcnJpdmFsIGZyb20gXCIuL05ld0Fycml2YWxcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtmZXRjaGVkQm9va3MsIHNldEZldGNoZWRCb29rc10gPSB1c2VTdGF0ZShib29rcyk7XHJcblxyXG4gIGxldCBpID0gLTE7XHJcbiAgbGV0IGogPSAtMTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQm9va3MgPSBmZXRjaGVkQm9va3M/LnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGlmIChhICE9PSBudWxsICYmIGIgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGIucmFua2luZyEgLSBhLnJhbmtpbmchO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gRmlsdGVyIGZpcnN0IHRlbiBib29rcyBieSBjYXRlZ29yeSAnVGVycmlmeWluZydcclxuICBjb25zdCBmaWx0ZXJlZEJvb2tzVGVycmlmeWluZyA9IGZldGNoZWRCb29rcz8uZmlsdGVyKChib29rKSA9PiBib29rLmNhdGVnb3J5ID09PSAnVGVycmlmeWluZycpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAvLyBGaWx0ZXIgZmlyc3QgdGVuIGJvb2tzIGJ5IGNhdGVnb3J5ICdOZXcnXHJcbiAgY29uc3QgZmlsdGVyZWRCb29rc05ld0Fycml2YWwgPSBmZXRjaGVkQm9va3MuZmlsdGVyKChib29rKSA9PiBib29rLmNhdGVnb3J5ID09PSAnTmV3Jykuc2xpY2UoMCwgNSk7XHJcblxyXG4gIC8vIENyZWF0ZSBhcnJheSBvZiAnVGVycmlmeWluZycgYm9vayBpbWFnZXNcclxuICBjb25zdCB0ZXJyaWZ5aW5nQm9va3MgPSBmaWx0ZXJlZEJvb2tzVGVycmlmeWluZz8ubWFwKChib29rKSA9PiBib29rKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGFycmF5IG9mICdOZXcnIGJvb2sgaW1hZ2VzXHJcbiAgY29uc3QgbmV3Qm9va3NBcnJpdmFsID0gZmlsdGVyZWRCb29rc05ld0Fycml2YWw/Lm1hcCgoYm9vaykgPT4gYm9vayk7XHJcblxyXG4gIC8vIENyZWF0ZSBhcnJheSBvZiBmaXJzdCB0b3AgdGVuIGJvb2tzXHJcbiAgY29uc3QgdG9wVGVuQm9va3MgPSBzb3J0ZWRCb29rcz8uc2xpY2UoMCwgOSlcclxuXHJcbiAgbGV0IHRyZW5kaW5nX25vdyA9IGJvb2tzPy5maWx0ZXIoKGJvb2spID0+IGJvb2sudHJlbmRpbmcgPT09IHRydWUpXHJcbiAgdHJlbmRpbmdfbm93LnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGlmIChhICE9PSBudWxsICYmIGIgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGIucmFua2luZyEgLSBhLnJhbmtpbmchO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7IC8vIFJldHVybiAwIGZvciBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmlyc3RUcmVuZGluZ0Jvb2sgPSB0cmVuZGluZ19ub3dbMF07XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0Qm9va3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9saWJyYXJ5L2Jvb2tzLycpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGZXRjaGVkQm9va3MoYm9va3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGdldEJvb2tzKCk7XHJcblxyXG4gIH0sIFtdKTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1uZXV0cmFsLTgwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgcHgtMjQgcHktNSBsZzpnYXAtNSBnYXAtMTBcIj5cclxuICAgICAgICAgIDxUb3BUZW5Cb29rc1xyXG4gICAgICAgICAgICB0aXRsZT17dG9wVGVuQm9va3M/Lm1hcCgoYm9vaykgPT4gYm9vay50aXRsZSl9XHJcbiAgICAgICAgICAgIHJhbmtpbmc9e3RvcFRlbkJvb2tzPy5tYXAoKGJvb2spID0+IGJvb2sucmFua2luZyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRyZW5kaW5nTm93XHJcbiAgICAgICAgICAgIGlkPXtmaXJzdFRyZW5kaW5nQm9vaz8uaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtmaXJzdFRyZW5kaW5nQm9vaz8udGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtmaXJzdFRyZW5kaW5nQm9vaz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGltYWdlPXtmaXJzdFRyZW5kaW5nQm9vaz8uaW1hZ2V9XHJcbiAgICAgICAgICAgIHJhbmtpbmc9e2ZpcnN0VHJlbmRpbmdCb29rPy5yYW5raW5nfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb3N0VGVycmlmeWluZyBib29rcz17dGVycmlmeWluZ0Jvb2tzfSAvPlxyXG4gICAgICA8TmV3QXJyaXZhbCBib29rcz17bmV3Qm9va3NBcnJpdmFsfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcblxyXG4iXSwibmFtZXMiOlsiYm9va3MiLCJnZXREYXRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb3BUZW5Cb29rcyIsIlRyZW5kaW5nTm93IiwiTW9zdFRlcnJpZnlpbmciLCJOZXdBcnJpdmFsIiwiTWFpbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoZWRCb29rcyIsInNldEZldGNoZWRCb29rcyIsImkiLCJqIiwic29ydGVkQm9va3MiLCJzb3J0IiwiYSIsImIiLCJyYW5raW5nIiwiZmlsdGVyZWRCb29rc1RlcnJpZnlpbmciLCJmaWx0ZXIiLCJib29rIiwiY2F0ZWdvcnkiLCJzbGljZSIsImZpbHRlcmVkQm9va3NOZXdBcnJpdmFsIiwidGVycmlmeWluZ0Jvb2tzIiwibWFwIiwibmV3Qm9va3NBcnJpdmFsIiwidG9wVGVuQm9va3MiLCJ0cmVuZGluZ19ub3ciLCJ0cmVuZGluZyIsImZpcnN0VHJlbmRpbmdCb29rIiwiZ2V0Qm9va3MiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJpZCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/(site)/components/Main.tsx\n"));

/***/ })

});