"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BlogItem_BlogItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogItem/BlogItem */ \"./components/BlogItem/BlogItem.jsx\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.jsx\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"\\u041C\\u043E\\u0439 \\u0431\\u043B\\u043E\\u0433\"\n            }, void 0, false, {\n                fileName: \"F:\\\\develop\\\\develop\\\\next\\\\simple-blog\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"posts\",\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogItem_BlogItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        title: post.title,\n                        description: post.description,\n                        id: post.id\n                    }, post.id, false, {\n                        fileName: \"F:\\\\develop\\\\develop\\\\next\\\\simple-blog\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 6\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\develop\\\\develop\\\\next\\\\simple-blog\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\develop\\\\develop\\\\next\\\\simple-blog\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNOOztBQUVqQyxTQUFTRSxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDbkMscUJBQ0MsOERBQUNGLGlFQUFNOzswQkFDTiw4REFBQ0csSUFBRTswQkFBQyw2Q0FBUTs7Ozs7b0JBQUs7MEJBQ2pCLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsT0FBTzswQkFDcEJILEtBQUssQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3lDQUNkLDhEQUFDUixxRUFBUTt3QkFDUlMsS0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBQUs7d0JBQ2pCQyxXQUFXLEVBQUVGLElBQUksQ0FBQ0UsV0FBVzt3QkFDN0JDLEVBQUUsRUFBRUgsSUFBSSxDQUFDRyxFQUFFO3VCQUNOSCxJQUFJLENBQUNHLEVBQUU7Ozs7NkJBQ1g7aUJBQ0YsQ0FBQzs7Ozs7b0JBQ0c7Ozs7OztZQUNFLENBQ1Q7Q0FDRDtBQWhCdUJULEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZ0l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nSXRlbS9CbG9nSXRlbSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcG9zdHMgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8aDE+0JzQvtC5INCx0LvQvtCzPC9oMT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb3N0cyc+XG5cdFx0XHRcdHtwb3N0cy5tYXAocG9zdCA9PiAoXG5cdFx0XHRcdFx0PEJsb2dJdGVtXG5cdFx0XHRcdFx0XHR0aXRsZT17cG9zdC50aXRsZX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtwb3N0LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0aWQ9e3Bvc3QuaWR9XG5cdFx0XHRcdFx0XHRrZXk9e3Bvc3QuaWR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cycpXG5cdGNvbnN0IHBvc3RzID0gYXdhaXQgZGF0YS5qc29uKClcblx0Y29uc29sZS5sb2cocG9zdHMpXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgcG9zdHMgfSxcblx0fVxufVxuIl0sIm5hbWVzIjpbIkJsb2dJdGVtIiwiTGF5b3V0IiwiSG9tZSIsInBvc3RzIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});