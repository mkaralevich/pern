webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoList; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/TodoList.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction TodoList() {\n  _s();\n\n  var getTodos = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response, jsonData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"http://localhost:5000/todos\");\n\n            case 3:\n              response = _context.sent;\n              jsonData = response.json();\n              console.log(jsonData);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0.message);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function getTodos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getTodos();\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, \"id\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, \"description\"));\n}\n\n_s(TodoList, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = TodoList;\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzYxM2MiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJnZXRUb2RvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uRGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQyxNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRQyxLQUFLLENBQUMsNkJBQUQsQ0FGYjs7QUFBQTtBQUVUQyxzQkFGUztBQUdUQyxzQkFIUyxHQUdFRCxRQUFRLENBQUNFLElBQVQsRUFIRjtBQUlmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFKZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1mRSxxQkFBTyxDQUFDRSxLQUFSLENBQWMsWUFBSUMsT0FBbEI7O0FBTmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVVBUyx5REFBUyxDQUFDLFlBQU07QUFDZlQsWUFBUTtBQUNSLEdBRlEsQ0FBVDtBQUlBLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxDQUREO0FBTUE7O0dBckJ1QkQsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0xpc3QoKSB7XG5cdGNvbnN0IGdldFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RvZG9zXCIpO1xuXHRcdFx0Y29uc3QganNvbkRhdGEgPSByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhqc29uRGF0YSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRnZXRUb2RvcygpO1xuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxkaXY+aWQ8L2Rpdj5cblx0XHRcdDxkaXY+ZGVzY3JpcHRpb248L2Rpdj5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.js\n");

/***/ })

})