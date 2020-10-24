webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\GithubProject\\nodeSNS\\front\\components\\ImagesZoom\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed\n    z-index: 5000\n    top: 0\n    left: 0\n    right: 0\n    bottom: 0\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = Overlay;

var ImageZoom = function ImageZoom(_ref) {
  _s();

  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentSlide = _useState[0],
      setCurrnetSlide = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(Overlay, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx("button", {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "X")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    },
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, images.map(function (v) {
    return __jsx("div", {
      key: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: v.src,
      alt: v.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 33
      }
    }));
  }))))));
};

_s(ImageZoom, "0SL1RLLGXC5FZx+IsG0+300QAMQ=");

_c2 = ImageZoom;
ImageZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageZoom);

var _c, _c2;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "ImageZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIl0sIm5hbWVzIjpbIk92ZXJsYXkiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZVpvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwidXNlU3RhdGUiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJybmV0U2xpZGUiLCJzbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsIm1hcCIsInYiLCJzcmMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBYjtLQUFNRixPOztBQVNOLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUNoQ0MsWUFEZ0M7QUFBQSxNQUNsQkMsZUFEa0I7O0FBRXZDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREosRUFFSTtBQUFRLFdBQU8sRUFBRUgsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKLENBREEsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFDSSxnQkFBWSxFQUFFLENBRGxCO0FBRUksZUFBVyxFQUFFLHFCQUFDSSxLQUFEO0FBQUEsYUFBV0MsZUFBZSxDQUFDRCxLQUFELENBQTFCO0FBQUEsS0FGakI7QUFHSSxZQUFRLE1BSFo7QUFJSSxVQUFNLEVBQUUsS0FKWjtBQUtJLGdCQUFZLEVBQUUsQ0FMbEI7QUFNSSxrQkFBYyxFQUFFLENBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRS0wsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsQ0FBRDtBQUFBLFdBQ1I7QUFBSyxTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixTQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRFE7QUFBQSxHQUFYLENBUkwsQ0FESixDQURKLENBTEEsQ0FESixDQURKO0FBNEJILENBOUJEOztHQUFNVixTOztNQUFBQSxTO0FBZ0NOQSxTQUFTLENBQUNXLFNBQVYsR0FBc0I7QUFDbEJWLFFBQU0sRUFBRVcsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRDFCO0FBRWxCYixTQUFPLEVBQUVVLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGTixDQUF0QjtBQUtlZix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2MzYzFlZTM0M2I0YWZkMmE3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHotaW5kZXg6IDUwMDBcclxuICAgIHRvcDogMFxyXG4gICAgbGVmdDogMFxyXG4gICAgcmlnaHQ6IDBcclxuICAgIGJvdHRvbTogMFxyXG5gXHJcblxyXG5jb25zdCBJbWFnZVpvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3Vycm5ldFNsaWRlXSA9IHVzZVN0YXRlKDApXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE92ZXJsYXk+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvT3ZlcmxheT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuSW1hZ2Vab29tLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlWm9vbSJdLCJzb3VyY2VSb290IjoiIn0=