webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/pha/project/react-sns/ch1/front/pages/signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Signup = function Signup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nick = _useState2[0],
      setNick = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('false'),
      term = _useState5[0],
      setTerm = _useState5[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    console.log({
      id: id,
      nick: nick,
      password: password,
      passwordCheck: passwordCheck,
      term: term
    });
  };

  var onChangeId = function onChangeId(e) {
    setId(e.target.value);
  };

  var onChangeNick = function onChangeNick(e) {
    setNick(e.target.value);
  };

  var onChangePassword = function onChangePassword(e) {
    setPassword(e.target.value);
  };

  var onChangePasswordCheck = function onChangePasswordCheck(e) {
    setPasswordCheck(e.target.value);
  };

  var onChangeTerm = function onChangeTerm(e) {
    setTerm(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "NodeSNS"), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.7/antd.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: "30vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-nick",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-password",
    value: password,
    type: "password",
    required: true,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "user-password-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-password-check",
    value: passwordCheck,
    type: "password",
    required: true,
    onChange: onChangePasswordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    name: "user-term",
    value: term,
    onChange: onChangeTerm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\uAC00\uC785\uD558\uAE30"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.614f802a346d645ebb45.hot-update.js.map