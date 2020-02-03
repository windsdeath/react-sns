webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: dummy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummy", function() { return dummy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _pages_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/LoginForm */ "./pages/LoginForm.js");
/* harmony import */ var _pages_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Card */ "./pages/Card.js");
var _jsxFileName = "/root/wsl_projects/react-sns/ch2/front/components/AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var dummy = {
  nickname: 'SIPO',
  Post: [],
  Follwings: [],
  Followers: [],
  isLoggedIn: true
};

var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "NodeSNS"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [16, 16],
    type: "flex",
    justify: "space-around",
    align: "top",
    style: {
      margin: "1%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 8,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, dummy.isLoggedIn ? __jsx(_pages_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : __jsx(_pages_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 8,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 8,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\uC138\uBC88\uC9F8\uC904")));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.f92ae5dfe19c9034ab9f.hot-update.js.map