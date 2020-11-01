module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/mac/nodeSocial/front/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst App = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, \"\\uD3EC\\uD06C\\uD3EC\\uD06C\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }));\n};\n\nApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n}; // export default App\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(App)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzNCLFNBQ0ksbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUZKLENBREosRUFLSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREo7QUFTSCxDQVZEOztBQVlBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0I7QUFDWkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURyQixDQUFoQixDLENBSUE7O0FBQ2VDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLEdBQUQsQ0FBL0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPu2PrO2BrO2PrO2BrDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoQXBwKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // (이전상태, 액션) => 다음상태\n// initialState : 초기상태\n\nconst rootRedeucer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootRedeucer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWRldWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7Q0FHQTtBQUNBOztBQUNBLE1BQU1BLFlBQVksR0FBR0MsNkRBQWUsQ0FBQztBQUNqQ0MsT0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDM0IsWUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBS0MsMERBQUw7QUFDSUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosTUFBdkI7QUFDQSwrQ0FBWUQsS0FBWixHQUFzQkMsTUFBTSxDQUFDSyxPQUE3Qjs7QUFDSjtBQUNJLGVBQU9OLEtBQVA7QUFMUjtBQU9ILEdBVGdDO0FBVWpDTyxxREFWaUM7QUFXakNDLHFEQUFJQTtBQVg2QixDQUFELENBQXBDO0FBZWVYLDJFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xuXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxuLy8gaW5pdGlhbFN0YXRlIDog7LSI6riw7IOB7YOcXG5jb25zdCByb290UmVkZXVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbilcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXNlcixcbiAgICBwb3N0LFxufSlcblxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkZXVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'supercoder'\n    },\n    content: '첫 번째 게시글 #헤시태그 #익스프레스',\n    Images: [{\n      src: 'https://img2.quasarzone.com/editor/2020/10/23/aa5182ac1e6c8413cf2481a0fedf1643.jpg'\n    }, {\n      src: 'https://img2.quasarzone.com/editor/2020/10/23/5b73ab27035604d1da049875abb6f361.jpg'\n    }, {\n      src: 'https://img2.quasarzone.com/editor/2020/10/23/aa5182ac1e6c8413cf2481a0fedf1643.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'hero'\n      },\n      content: '드디어 댓글 구현'\n    }, {\n      User: {\n        nickname: 'hypercoder'\n      },\n      content: '졸리다아아앙아ㅏ'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터',\n  User: {\n    id: 1,\n    nickname: 'supercoder'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGRTtBQU9SQyxXQUFPLEVBQUUsdUJBUEQ7QUFTUkMsVUFBTSxFQUFFLENBQUM7QUFDTEMsU0FBRyxFQUFFO0FBREEsS0FBRCxFQUVMO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBRkssRUFJTDtBQUNDQSxTQUFHLEVBQUU7QUFETixLQUpLLENBVEE7QUFpQlJDLFlBQVEsRUFBRSxDQUFDO0FBQ1BMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEQztBQUlQQyxhQUFPLEVBQUU7QUFKRixLQUFELEVBS1A7QUFDQ0YsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURQO0FBSUNDLGFBQU8sRUFBRTtBQUpWLEtBTE87QUFqQkYsR0FBRCxDQURhO0FBOEJ4QkksWUFBVSxFQUFFLEVBOUJZO0FBK0J4QkMsV0FBUyxFQUFFO0FBL0JhLENBQXJCO0FBa0NQLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLE1BQU1DLE9BQU8sR0FBRztBQUNuQkMsTUFBSSxFQUFFRjtBQURhLENBQWhCO0FBSVAsTUFBTUcsU0FBUyxHQUFHO0FBQ2RaLElBQUUsRUFBRSxDQURVO0FBRWRHLFNBQU8sRUFBRSxPQUZLO0FBR2RGLE1BQUksRUFBRTtBQUNGRCxNQUFFLEVBQUUsQ0FERjtBQUVGRSxZQUFRLEVBQUU7QUFGUixHQUhRO0FBT2RFLFFBQU0sRUFBRSxFQVBNO0FBUWRFLFVBQVEsRUFBRTtBQVJJLENBQWxCOztBQVdBLE1BQU1PLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdoQixZQUFULEVBQXVCaUIsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlmLGlCQUFTLEVBQUUsQ0FBQ2EsU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ2YsU0FBckIsQ0FGZjtBQUdJUyxpQkFBUyxFQUFFO0FBSGY7O0FBS0o7QUFDSSxhQUFPTSxLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1haW5Qb3N0czogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmlja25hbWU6ICdzdXBlcmNvZGVyJyxcbiAgICAgICAgfSxcblxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2XpOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcblxuICAgICAgICBJbWFnZXM6IFt7XG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2ltZzIucXVhc2Fyem9uZS5jb20vZWRpdG9yLzIwMjAvMTAvMjMvYWE1MTgyYWMxZTZjODQxM2NmMjQ4MWEwZmVkZjE2NDMuanBnJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9pbWcyLnF1YXNhcnpvbmUuY29tL2VkaXRvci8yMDIwLzEwLzIzLzViNzNhYjI3MDM1NjA0ZDFkYTA0OTg3NWFiYjZmMzYxLmpwZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vaW1nMi5xdWFzYXJ6b25lLmNvbS9lZGl0b3IvMjAyMC8xMC8yMy9hYTUxODJhYzFlNmM4NDEzY2YyNDgxYTBmZWRmMTY0My5qcGcnXG4gICAgICAgIH1dLFxuXG4gICAgICAgIENvbW1lbnRzOiBbe1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJ+uTnOuUlOyWtCDrjJPquIAg6rWs7ZiEJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaHlwZXJjb2RlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDogJ+yhuOumrOuLpOyVhOyVhOyVmeyVhOOFjydcbiAgICAgICAgfV1cbiAgICB9XSxcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxufVxuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgICB0eXBlOiBBRERfUE9TVCxcbn1cblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiAyLFxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLAnLFxuICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiAnc3VwZXJjb2RlcicsXG4gICAgfSxcbiAgICBJbWFnZXM6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggingIn: false,\n  //로그인 시도중 \n  isLoggingOut: false,\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst loginRequestAction = data => {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data\n  };\n}; // log-out\n\nconst logoutRequestAction = () => {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN_REQUEST':\n      console.log('reducer logIn');\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false\n      });\n\n    case 'LOG_IN_SUCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: '오규찬'\n        })\n      });\n\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n\n    case 'LOG_OUT_REQUEST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true\n      });\n\n    case 'LOG_OUT_SUCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZEluIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxhQUFXLEVBQUUsS0FEVztBQUNKO0FBQ3BCQyxjQUFZLEVBQUUsS0FGVTtBQUd4QkMsWUFBVSxFQUFFLEtBSFk7QUFJeEJDLElBQUUsRUFBRSxJQUpvQjtBQUt4QkMsWUFBVSxFQUFFLEVBTFk7QUFNeEJDLFdBQVMsRUFBRTtBQU5hLENBQXJCO0FBU0EsTUFBTUMsa0JBQWtCLEdBQUlDLElBQUQsSUFBVTtBQUN4QyxTQUFPO0FBQ0hDLFFBQUksRUFBRSxnQkFESDtBQUVIRDtBQUZHLEdBQVA7QUFJSCxDQUxNLEMsQ0FPUDs7QUFDTyxNQUFNRSxtQkFBbUIsR0FBRyxNQUFNO0FBQ3JDLFNBQU87QUFDSEQsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk07O0FBTVAsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1osWUFBVCxFQUF1QmEsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBSyxnQkFBTDtBQUNJSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsNkNBQ09ILEtBRFA7QUFFSVgsbUJBQVcsRUFBRTtBQUZqQjs7QUFLSixTQUFLLGVBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJWCxtQkFBVyxFQUFFLEtBRmpCO0FBR0lFLGtCQUFVLEVBQUUsSUFIaEI7QUFJSUMsVUFBRSxrQ0FBT1MsTUFBTSxDQUFDTCxJQUFkO0FBQW9CUSxrQkFBUSxFQUFFO0FBQTlCO0FBSk47O0FBT0osU0FBSyxnQkFBTDtBQUNJLDZDQUNPSixLQURQO0FBRUlYLG1CQUFXLEVBQUUsS0FGakI7QUFHSUUsa0JBQVUsRUFBRTtBQUhoQjs7QUFPSixTQUFLLGlCQUFMO0FBQ0ksNkNBQ09TLEtBRFA7QUFFSVYsb0JBQVksRUFBRTtBQUZsQjs7QUFLSixTQUFLLGdCQUFMO0FBQ0ksNkNBQ09VLEtBRFA7QUFFSVYsb0JBQVksRUFBRSxLQUZsQjtBQUdJQyxrQkFBVSxFQUFFLEtBSGhCO0FBSUlDLFVBQUUsRUFBRTtBQUpSOztBQU9KLFNBQUssaUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJVixvQkFBWSxFQUFFO0FBRmxCOztBQUtKO0FBQ0ksYUFBT1UsS0FBUDtBQTdDUjtBQStDSCxDQWhERDs7QUFrRGVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaXNMb2dnaW5nSW46IGZhbHNlLCAvL+uhnOq3uOyduCDsi5zrj4TspJEgXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICBtZTogbnVsbCxcbiAgICBzaWduVXBEYXRhOiB7fSxcbiAgICBsb2dpbkRhdGE6IHt9LFxufVxuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLFxuICAgICAgICBkYXRhLFxuICAgIH1cbn1cblxuLy8gbG9nLW91dFxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXG4gICAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0xPR19JTl9SRVFVRVNUJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ0luJylcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0xPR19JTl9TVUNFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICfsmKTqt5zssKwnIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdMT0dfT1VUX1JFUVVFU1QnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnTE9HX09VVF9TVUNFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfRkFJTFVSRSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDQyw2Q0FBRCxDQURFLEVBRU5ELCtEQUFJLENBQUNFLDZDQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXG4gICAgXSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return postSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/addPost', data);\n}\n\nfunction* addPost(action) {\n  // 요청 실패 대비 try catch로 감싸기\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_SUCESS' // data: result.data\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('ADD_POST_REQUEST', addPost);\n}\n\nfunction* postSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxjQUFYLEVBQTJCRixJQUEzQixDQUFQO0FBQ0g7O0FBR0QsVUFBVUcsT0FBVixDQUFrQkMsTUFBbEIsRUFBMEI7QUFDdEI7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7QUFDQSxVQUFNQyw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRSxpQkFEQSxDQUVOOztBQUZNLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPQyxHQUFQLEVBQVk7QUFDVixVQUFNRiw4REFBRyxDQUFDO0FBQ05DLFVBQUksRUFBRSxrQkFEQTtBQUVOUCxVQUFJLEVBQUVRLEdBQUcsQ0FBQ0MsUUFBSixDQUFhVDtBQUZiLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBR0QsVUFBVVUsWUFBVixHQUF5QjtBQUNyQixRQUFNQyxxRUFBVSxDQUFDLGtCQUFELEVBQXFCUixPQUFyQixDQUFoQjtBQUNIOztBQUVjLFVBQVVTLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDSixZQUFELENBREUsQ0FBRCxDQUFUO0FBR0giLCJmaWxlIjoiLi9zYWdhcy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvYWRkUG9zdCcsIGRhdGEpXG59XG5cblxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XG4gICAgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYQgdHJ5IGNhdGNo66GcIOqwkOyLuOq4sFxuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnQUREX1BPU1RfU1VDRVNTJyxcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnQUREX1BPU1RfRkFJTFVSRScsXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdBRERfUE9TVF9SRVFVRVNUJywgYWRkUG9zdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KVxuICAgIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction logInAPI(data) {\n  return axios.post('/api/login', data);\n}\n\nfunction logOutAPI() {\n  return axios.post('/api/logOut');\n}\n\nfunction* logIn(action) {\n  // 요청 실패 대비 try catch로 감싸기\n  try {\n    // const result = yield call(logInAPI, action.data)\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_SUCESS',\n      data: action.data // data: result.data\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* logOut() {\n  // 요청 실패 대비 try catch로 감싸기\n  try {\n    // const result = yield call(logOutAPI)\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_SUCESS' // data: result.data\n\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* watchLogIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_IN_REQUEST', logIn);\n}\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_OUT_REQUEST', logOut);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9nT3V0QVBJIiwibG9nSW4iLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJlcnIiLCJyZXNwb25zZSIsImxvZ091dCIsIndhdGNoTG9nSW4iLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hMb2dPdXQiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEIsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkYsSUFBekIsQ0FBUDtBQUNIOztBQUVELFNBQVNHLFNBQVQsR0FBcUI7QUFDakIsU0FBT0YsS0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0g7O0FBRUQsVUFBVUUsS0FBVixDQUFnQkMsTUFBaEIsRUFBd0I7QUFDcEI7QUFDQSxNQUFJO0FBQ0E7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFLGVBREE7QUFFTlIsVUFBSSxFQUFFSyxNQUFNLENBQUNMLElBRlAsQ0FHTjs7QUFITSxLQUFELENBQVQ7QUFLSCxHQVJELENBUUUsT0FBT1MsR0FBUCxFQUFZO0FBQ1YsVUFBTUYsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUsZ0JBREE7QUFFTlIsVUFBSSxFQUFFUyxHQUFHLENBQUNDLFFBQUosQ0FBYVY7QUFGYixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUdELFVBQVVXLE1BQVYsR0FBbUI7QUFDZjtBQUNBLE1BQUk7QUFDQTtBQUNBLFVBQU1MLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUsZ0JBREEsQ0FFTjs7QUFGTSxLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1YsVUFBTUYsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUsaUJBREE7QUFFTlIsVUFBSSxFQUFFUyxHQUFHLENBQUNDLFFBQUosQ0FBYVY7QUFGYixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUlELFVBQVVZLFVBQVYsR0FBdUI7QUFDbkIsUUFBTUMscUVBQVUsQ0FBQyxnQkFBRCxFQUFtQlQsS0FBbkIsQ0FBaEI7QUFDSDs7QUFFRCxVQUFVVSxXQUFWLEdBQXdCO0FBQ3BCLFFBQU1ELHFFQUFVLENBQUMsaUJBQUQsRUFBb0JGLE1BQXBCLENBQWhCO0FBQ0g7O0FBRWMsVUFBVUksUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNMLFVBQUQsQ0FERSxFQUVOSywrREFBSSxDQUFDSCxXQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgiLCJmaWxlIjoiLi9zYWdhcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBkZWxheSwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ091dCcpXG59XG5cbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcbiAgICAvLyDsmpTssq0g7Iuk7YyoIOuMgOu5hCB0cnkgY2F0Y2jroZwg6rCQ7Iu46riwXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnTE9HX0lOX1NVQ0VTUycsXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnTE9HX0lOX0ZBSUxVUkUnLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gICAgLy8g7JqU7LKtIOyLpO2MqCDrjIDruYQgdHJ5IGNhdGNo66GcIOqwkOyLuOq4sFxuICAgIHRyeSB7XG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKVxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogJ0xPR19PVVRfU1VDRVNTJyxcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnTE9HX09VVF9GQUlMVVJFJyxcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19JTl9SRVFVRVNUJywgbG9nSW4pXG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfT1VUX1JFUVVFU1QnLCBsb2dPdXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcbiAgICBdKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/index */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n //saga\n\n\n\nconst loggerMiddleware = ({\n  dispatch,\n  getState\n}) => next => action => {\n  console.log(action);\n  return next(action);\n};\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\n  const middleware = [sagaMiddleware, loggerMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middleware));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBOztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBNkJDLElBQUQsSUFBV0MsTUFBRCxJQUFZO0FBQ3ZFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFNBQU9ELElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0gsQ0FIRDs7QUFLQSxNQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUN6QixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFVBQVUsR0FBRyxDQUFDRixjQUFELEVBQWlCUixnQkFBakIsQ0FBbkI7QUFDQSxRQUFNVyxRQUFRLEdBQUcsUUFDWEMsU0FEVyxHQUVYQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixVQUFKLENBQWhCLENBRnpCO0FBR0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyx1REFBRCxFQUFVTixRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0csUUFBTixHQUFpQlYsY0FBYyxDQUFDVyxHQUFmLENBQW1CQyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPTCxLQUFQO0FBQ0gsQ0FURDs7QUFXQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFDMUNnQixPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBR2VGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcblxuLy9zYWdhXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcbiAgICBjb25zdCBtaWRkbGV3YXJlID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXVxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWNpb24nXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcbiAgICByZXR1cm4gc3RvcmVcbn1cblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59KVxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });