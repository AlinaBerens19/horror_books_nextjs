"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst options = {\n    secret: \"django-insecure-_-p#v^m+eftrje#rdkey=9od&xc30(#rc)#qd#%g!1&4pqqmz+\",\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                if (!credentials?.username || !credentials?.password) {\n                    throw new Error(\"Missing credentials\");\n                }\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(\"http://127.0.0.1:8000/auth/login/\", credentials);\n                    const data = response.data;\n                    if (response.status === 200) {\n                        // Return user data if authentication is successful\n                        // console.log(data.user)\n                        return {\n                            id: data.user.id,\n                            email: data.user.email,\n                            username: data.user.username,\n                            phone: data.user.phone,\n                            accessToken: data.user.access,\n                            image: data.user.profile_picture\n                        };\n                    } else {\n                        // Throw an error if authentication fails\n                        throw new Error(data.error);\n                    }\n                } catch (error) {\n                    throw new Error(\"Failed to authenticate\");\n                }\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpRTtBQUVWO0FBQ0s7QUFDbEM7QUFJMUIsTUFBTUksVUFBNEI7SUFDaENDLFFBQVFDLG9FQUFrQ0U7SUFDMUNDLFdBQVc7UUFDVFQsc0VBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07Z0JBQU87Z0JBQzVDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVyxFQUFFTSxHQUFHO2dCQUM5QixJQUFJLENBQUNOLGFBQWFDLFlBQVksQ0FBQ0QsYUFBYUksVUFBVTtvQkFDcEQsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFFQSxJQUFJO29CQUNGLE1BQU1DLFdBQVcsTUFBTWhCLGlEQUFVaUIsQ0FBQyxxQ0FBcUNUO29CQUV2RSxNQUFNVSxPQUFPRixTQUFTRTtvQkFFdEIsSUFBSUYsU0FBU0csV0FBVyxLQUFLO3dCQUMzQixtREFBbUQ7d0JBQ25ELHlCQUF5Qjt3QkFDekIsT0FBTzs0QkFDTEMsSUFBSUYsS0FBS0csS0FBS0Q7NEJBQ2RFLE9BQU9KLEtBQUtHLEtBQUtDOzRCQUNqQmIsVUFBVVMsS0FBS0csS0FBS1o7NEJBQ3BCYyxPQUFPTCxLQUFLRyxLQUFLRTs0QkFDakJDLGFBQWFOLEtBQUtHLEtBQUtJOzRCQUN2QkMsT0FBT1IsS0FBS0csS0FBS007d0JBQ25CO29CQUNGLE9BQU87d0JBQ0wseUNBQXlDO3dCQUN6QyxNQUFNLElBQUlaLE1BQU1HLEtBQUtVO29CQUN2QjtnQkFDRixFQUFFLE9BQU9BLE9BQU87b0JBQ2QsTUFBTSxJQUFJYixNQUFNO2dCQUNsQjtZQUNGO1FBRUY7UUFDQWpCLGlFQUFjQSxDQUFDO1lBQ2IrQixVQUFVMUIsUUFBUUMsSUFBSTBCO1lBQ3RCQyxjQUFjNUIsUUFBUUMsSUFBSTRCO1FBQzVCO0tBRUQ7QUFDSDtBQUVBLGlFQUFlakMsZ0RBQVFBLENBQUNFLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcclxuaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucywgVXNlciB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IG9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyAgPSB7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRUNSRVRfS0VZLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6ICdVc2VybmFtZScsIHR5cGU6ICd0ZXh0JyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8udXNlcm5hbWUgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNyZWRlbnRpYWxzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aC9sb2dpbi8nLCBjcmVkZW50aWFscyk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiB1c2VyIGRhdGEgaWYgYXV0aGVudGljYXRpb24gaXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnVzZXIpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaWQ6IGRhdGEudXNlci5pZCxcclxuICAgICAgICAgICAgICBlbWFpbDogZGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgcGhvbmU6IGRhdGEudXNlci5waG9uZSxcclxuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogZGF0YS51c2VyLmFjY2VzcyxcclxuICAgICAgICAgICAgICBpbWFnZTogZGF0YS51c2VyLnByb2ZpbGVfcGljdHVyZSxcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIGF1dGhlbnRpY2F0aW9uIGZhaWxzXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gYXV0aGVudGljYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgIH0pLFxyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQhLFxyXG4gICAgfSksXHJcblxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChvcHRpb25zKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJOZXh0QXV0aCIsImF4aW9zIiwib3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TRUNSRVRfS0VZIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsIkVycm9yIiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsInN0YXR1cyIsImlkIiwidXNlciIsImVtYWlsIiwicGhvbmUiLCJhY2Nlc3NUb2tlbiIsImFjY2VzcyIsImltYWdlIiwicHJvZmlsZV9waWN0dXJlIiwiZXJyb3IiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();