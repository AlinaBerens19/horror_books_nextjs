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

/***/ "(app-client)/./app/(site)/components/NewArrival.tsx":
/*!**********************************************!*\
  !*** ./app/(site)/components/NewArrival.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ListOfBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListOfBooks */ \"(app-client)/./app/(site)/components/ListOfBooks.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst NewArrival = (param)=>{\n    let { books } = param;\n    const imageDictionary = books === null || books === void 0 ? void 0 : books.map((book, index)=>{\n        return {\n            id: book === null || book === void 0 ? void 0 : book.id,\n            image: book === null || book === void 0 ? void 0 : book.image,\n            title: book === null || book === void 0 ? void 0 : book.title,\n            description: book === null || book === void 0 ? void 0 : book.description,\n            author: book === null || book === void 0 ? void 0 : book.author\n        };\n    });\n    // console.log('IMAGE DICTIONARY NEW ARRIVAL ==> ', imageDictionary)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col py-10 justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-top text-white text-3xl\",\n                children: \"New Arrival\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\NewArrival.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ListOfBooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                books: imageDictionary\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\NewArrival.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alina\\\\Desktop\\\\SHECODES\\\\Final Project\\\\djangoreact\\\\nextjs\\\\app\\\\(site)\\\\components\\\\NewArrival.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewArrival;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewArrival);\nvar _c;\n$RefreshReg$(_c, \"NewArrival\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwLyhzaXRlKS9jb21wb25lbnRzL05ld0Fycml2YWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFHd0M7QUFTeEMsTUFBTUMsYUFBd0M7UUFBQyxFQUM3Q0MsS0FBSyxFQUNOO0lBRUMsTUFBTUMsa0JBQWtCRCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9FLElBQUksQ0FBQ0MsTUFBTUM7UUFDeEMsT0FBTztZQUNMQyxJQUFJRixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1FO1lBQ1ZDLE9BQU9ILGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUc7WUFDYkMsT0FBT0osaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNSTtZQUNiQyxhQUFhTCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1LO1lBQ25CQyxRQUFRTixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1NO1FBQ2hCO0lBQ0Y7SUFFQSxvRUFBb0U7SUFFcEUscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBK0I7Ozs7OzswQkFJOUMsOERBQUNiLG9EQUFXQTtnQkFBQ0UsT0FBT0M7Ozs7Ozs7Ozs7OztBQUcxQjtLQTFCTUY7QUE0Qk4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhzaXRlKS9jb21wb25lbnRzL05ld0Fycml2YWwudHN4P2ZjNWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIkAvYXBwL21vZGVscy9Cb29rXCI7XHJcbmltcG9ydCBMaXN0T2ZCb29rcyBmcm9tIFwiLi9MaXN0T2ZCb29rc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIE5ld0Fycml2YWxQcm9wcyB7XHJcbiAgYm9va3M/OiAoQm9vayB8IHVuZGVmaW5lZClbXTtcclxufVxyXG5cclxuXHJcbmNvbnN0IE5ld0Fycml2YWw6IFJlYWN0LkZDPE5ld0Fycml2YWxQcm9wcz4gPSAoe1xyXG4gIGJvb2tzXHJcbn0pID0+IHtcclxuXHJcbiAgY29uc3QgaW1hZ2VEaWN0aW9uYXJ5ID0gYm9va3M/Lm1hcCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBib29rPy5pZCxcclxuICAgICAgaW1hZ2U6IGJvb2s/LmltYWdlLFxyXG4gICAgICB0aXRsZTogYm9vaz8udGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBib29rPy5kZXNjcmlwdGlvbixcclxuICAgICAgYXV0aG9yOiBib29rPy5hdXRob3JcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBjb25zb2xlLmxvZygnSU1BR0UgRElDVElPTkFSWSBORVcgQVJSSVZBTCA9PT4gJywgaW1hZ2VEaWN0aW9uYXJ5KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB5LTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRvcCB0ZXh0LXdoaXRlIHRleHQtM3hsXCI+XHJcbiAgICAgICAgTmV3IEFycml2YWxcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGlzdE9mQm9va3MgYm9va3M9e2ltYWdlRGljdGlvbmFyeX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdBcnJpdmFsXHJcbiJdLCJuYW1lcyI6WyJMaXN0T2ZCb29rcyIsIk5ld0Fycml2YWwiLCJib29rcyIsImltYWdlRGljdGlvbmFyeSIsIm1hcCIsImJvb2siLCJpbmRleCIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/(site)/components/NewArrival.tsx\n"));

/***/ })

});