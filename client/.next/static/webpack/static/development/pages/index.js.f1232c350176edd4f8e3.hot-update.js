webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoList; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/maksim.karalevich/Code/-sketches/pern-app/client/components/TodoList.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction TodoList() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var getTodos = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response, jsonData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"http://localhost:5000/todos\");\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              jsonData = _context.sent;\n              setTodos(jsonData);\n              _context.next = 13;\n              break;\n\n            case 10:\n              _context.prev = 10;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0.message);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 10]]);\n    }));\n\n    return function getTodos() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    getTodos();\n  }, []);\n\n  var deleteTodo = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(todo) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return fetch(\"http://localhost:5000/todos/\".concat(todo.id), {\n                method: \"DELETE\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(todo)\n              });\n\n            case 3:\n              response = _context2.sent;\n              _context2.next = 9;\n              break;\n\n            case 6:\n              _context2.prev = 6;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.error(_context2.t0);\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 6]]);\n    }));\n\n    return function deleteTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var allTodos = todos.map(function (todo, key) {\n    return __jsx(\"div\", {\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 4\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }\n    }, todo.id), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }\n    }, todo.description), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }\n    }, \"Edit\"), __jsx(\"button\", {\n      onClick: deleteTodo(todo.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }\n    }, \"Delete\"));\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 3\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }\n  }, \"todos:\"), allTodos);\n}\n\n_s(TodoList, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n\n_c = TodoList;\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzYxM2MiXSwibmFtZXMiOlsiVG9kb0xpc3QiLCJ1c2VTdGF0ZSIsInRvZG9zIiwic2V0VG9kb3MiLCJnZXRUb2RvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiZGVsZXRlVG9kbyIsInRvZG8iLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFsbFRvZG9zIiwibWFwIiwia2V5IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsRUFBRCxDQURBO0FBQUEsTUFDM0JDLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9COztBQUdsQyxNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVRQyxLQUFLLENBQUMsNkJBQUQsQ0FGYjs7QUFBQTtBQUVUQyxzQkFGUztBQUFBO0FBQUEscUJBR1FBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhSOztBQUFBO0FBR1RDLHNCQUhTO0FBSWZMLHNCQUFRLENBQUNLLFFBQUQsQ0FBUjtBQUplO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTWZDLHFCQUFPLENBQUNDLEtBQVIsQ0FBYyxZQUFJQyxPQUFsQjs7QUFOZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBVUFRLHlEQUFTLENBQUMsWUFBTTtBQUNmUixZQUFRO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNUyxVQUFVO0FBQUEsaU1BQUcsa0JBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNVCxLQUFLLHVDQUFnQ1MsSUFBSSxDQUFDQyxFQUFyQyxHQUEyQztBQUN0RUMsc0JBQU0sRUFBRSxRQUQ4RDtBQUV0RUMsdUJBQU8sRUFBRTtBQUFFLGtDQUFnQjtBQUFsQixpQkFGNkQ7QUFHdEVDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmO0FBSGdFLGVBQTNDLENBRlg7O0FBQUE7QUFFWFIsc0JBRlc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFqQkcscUJBQU8sQ0FBQ0MsS0FBUjs7QUFSaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkcsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFZQSxNQUFNUSxRQUFRLEdBQUduQixLQUFLLENBQUNvQixHQUFOLENBQVUsVUFBQ1IsSUFBRCxFQUFPUyxHQUFQLEVBQWU7QUFDekMsV0FDQztBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNVCxJQUFJLENBQUNDLEVBQVgsQ0FERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUQsSUFBSSxDQUFDVSxXQUFYLENBRkQsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsRUFJQztBQUFRLGFBQU8sRUFBRVgsVUFBVSxDQUFDQyxJQUFJLENBQUNDLEVBQU4sQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRCxDQUREO0FBUUEsR0FUZ0IsQ0FBakI7QUFVQSxTQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQUVFTSxRQUZGLENBREQ7QUFNQTs7R0E3Q3VCckIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kb0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0xpc3QoKSB7XG5cdGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IGdldFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RvZG9zXCIpO1xuXHRcdFx0Y29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRzZXRUb2Rvcyhqc29uRGF0YSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcblx0XHR9XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRnZXRUb2RvcygpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jICh0b2RvKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90b2Rvcy8ke3RvZG8uaWR9YCwge1xuXHRcdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkodG9kbyksXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgYWxsVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8sIGtleSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGtleT17a2V5fT5cblx0XHRcdFx0PGRpdj57dG9kby5pZH08L2Rpdj5cblx0XHRcdFx0PGRpdj57dG9kby5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbj5FZGl0PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZGVsZXRlVG9kbyh0b2RvLmlkKX0+RGVsZXRlPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9KTtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8aDE+dG9kb3M6PC9oMT5cblx0XHRcdHthbGxUb2Rvc31cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.js\n");

/***/ })

})