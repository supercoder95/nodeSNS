webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "E:\\GithubProject\\nodeSNS\\front\\components\\PostImages.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      setShowImageZoom = _useState[0],
      setShowImagesZoom = _useState[2];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImageZoom(true);
  });

  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }));
  }

  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      width: "50%",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }), __jsx("img", {
      role: "presentation",
      width: "50%",
      src: images[1].src,
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }));
  }

  if (images.length === 3) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }), __jsx("div", {
      role: "presentation",
      style: {
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30")));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "\uAD6C\uD604\uC911...");
};

_s(PostImages, "mcciT2E6hnJidDoNOYnD4XQ+k98=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'supercoder'
    },
    content: '첫 번째 게시글 #헤시태그 #익스프레스',
    Images: [{
      src: 'https://i3.ruliweb.com/img/20/10/24/17559455b8122edbd.jpg'
    }, {
      src: 'https://i3.ruliweb.com/img/20/10/24/17559455b8122edbd.jpg'
    }, {
      src: 'https://i3.ruliweb.com/img/20/10/24/17559455b8122edbd.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'hero'
      },
      content: '드디어 댓글 구현이 되어가는군요'
    }, {
      User: {
        nickname: 'hypercoder'
      },
      content: '하이퍼코더 짜응'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'supercoder'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNldFNob3dJbWFnZVpvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwic3JjIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLEtBQUQsQ0FEeEI7QUFBQSxNQUN4QkMsZ0JBRHdCO0FBQUEsTUFDTEMsaUJBREs7O0FBRy9CLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzdCSCxvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0gsR0FGeUIsQ0FBMUI7O0FBR0EsTUFBSUYsTUFBTSxDQUFDTSxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLFdBQ0ksbUVBQ0k7QUFBSyxVQUFJLEVBQUMsY0FBVjtBQUF5QixTQUFHLEVBQUVOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sR0FBeEM7QUFB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SixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtSO0FBQ0VGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUjtBQUlFQyxhQUFPLEVBQUU7QUFKWCxLQUxRO0FBZEYsR0FBRCxDQURhO0FBNEJ4QkcsWUFBVSxFQUFFLEVBNUJZO0FBNkJ4QkMsV0FBUyxFQUFFO0FBN0JhLENBQXJCO0FBZ0NQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBSVAsSUFBTUcsU0FBUyxHQUFHO0FBQ2RYLElBQUUsRUFBRSxDQURVO0FBRWRHLFNBQU8sRUFBRSxXQUZLO0FBR2RGLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxZQUFRLEVBQUU7QUFGUixHQUhRO0FBT2RFLFFBQU0sRUFBRSxFQVBNO0FBUWRDLFVBQVEsRUFBRTtBQVJJLENBQWxCOztBQVdBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmYsWUFBeUI7QUFBQSxNQUFYZ0IsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlkLGlCQUFTLEdBQUdZLFNBQUgsc0dBQWlCRSxLQUFLLENBQUNkLFNBQXZCLEVBRmI7QUFHSVEsaUJBQVMsRUFBRTtBQUhmOztBQUtKO0FBQ0ksYUFBT00sS0FBUDtBQVJSO0FBVUgsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRiMGQ3MzkyYjFlMzY3MDUwNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NldFNob3dJbWFnZVpvb20sLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0ltYWdlWm9vbSh0cnVlKTtcclxuICAgIH0pXHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPVwiNTAlXCIgc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9e2ltYWdlc1swXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgd2lkdGg9XCI1MCVcIiBzcmM9e2ltYWdlc1sxXS5zcmN9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIOqwnOydmCDsgqzsp4Qg642UIOuztOq4sFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+6rWs7ZiE7KSRLi4uPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RJbWFnZXMucHJvcFR5cGVzID0ge1xyXG4gICAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICdzdXBlcmNvZGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7Zek7Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9pMy5ydWxpd2ViLmNvbS9pbWcvMjAvMTAvMjQvMTc1NTk0NTViODEyMmVkYmQuanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaTMucnVsaXdlYi5jb20vaW1nLzIwLzEwLzI0LzE3NTU5NDU1YjgxMjJlZGJkLmpwZycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2kzLnJ1bGl3ZWIuY29tL2ltZy8yMC8xMC8yNC8xNzU1OTQ1NWI4MTIyZWRiZC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn65Oc65SU7Ja0IOuMk+q4gCDqtaztmITsnbQg65CY7Ja06rCA64qU6rWw7JqUJyxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoeXBlcmNvZGVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2VmOydtO2NvOy9lOuNlCDsp5zsnZEnXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgICB0eXBlOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdzdXBlcmNvZGVyJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=