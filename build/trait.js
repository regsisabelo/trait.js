var trait =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Trait() {\n  this.name = 'Trait';\n\n  for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {\n    methods[_key] = arguments[_key];\n  }\n\n  this.$traits = methods;\n}\n\nTrait.prototype.inheritTo = __webpack_require__(/*! ./methods/inherit_to */ \"./dist/methods/inherit_to.js\");\nTrait.prototype.call = __webpack_require__(/*! ./methods/call */ \"./dist/methods/call.js\");\nTrait.prototype.each = __webpack_require__(/*! ./methods/each */ \"./dist/methods/each.js\");\nTrait.prototype.methods = __webpack_require__(/*! ./methods/methods */ \"./dist/methods/methods.js\");\n\nTrait.prototype.in = Trait.prototype.inheritTo; // a shorthand for inhertTo\n\nvar trait = function trait(methods) {\n  return new Trait(methods);\n};\n\nmodule.exports = trait;\nmodule.exports.trait = trait;\nmodule.exports.default = trait;\nmodule.exports.Trait = Trait;\n\n//# sourceURL=webpack://trait/./dist/index.js?");

/***/ }),

/***/ "./dist/methods/call.js":
/*!******************************!*\
  !*** ./dist/methods/call.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Call a method from a trait using the method name\n * @param {string} methodName\n */\nmodule.exports = function call(methodName) {\n  var METHOD = null;\n\n  this.$traits.forEach(function (trait) {\n    if (trait[methodName]) {\n      METHOD = trait[methodName];\n    }\n  });\n\n  if (!METHOD) {\n    throw new Error(methodName + \" does not exist on \" + this.name);\n  }\n\n  return METHOD.apply(this);\n};\n\n//# sourceURL=webpack://trait/./dist/methods/call.js?");

/***/ }),

/***/ "./dist/methods/each.js":
/*!******************************!*\
  !*** ./dist/methods/each.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Iterate to all traits listed\n * @param {function} callback\n */\nmodule.exports = function each(callback) {\n  var _this = this;\n\n  if (typeof callback !== 'function') {\n    throw new Error('Each method parameter must be a callback function');\n  }\n\n  this.$traits.forEach(function (trait) {\n    // iterate the methods\n    Object.keys(trait).forEach(function (method) {\n      // verify the method's existence\n      if (Object.prototype.hasOwnProperty.call(trait, method)) {\n        var METHOD_FUNCTION = trait[method];\n        var METHOD_NAME = method;\n        callback.apply(_this, [METHOD_NAME, METHOD_FUNCTION]);\n      }\n    });\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack://trait/./dist/methods/each.js?");

/***/ }),

/***/ "./dist/methods/inherit_to.js":
/*!************************************!*\
  !*** ./dist/methods/inherit_to.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function inheritTo(klass) {\n  var KLASS_PROTOTYPE = klass.prototype || klass;\n\n  return this.each(function (methodName, methodFunction) {\n    // if method already exists, skip\n    if (KLASS_PROTOTYPE[methodName]) {\n      return;\n    }\n\n    // attempt to inherit the methods to the class\n    KLASS_PROTOTYPE[methodName] = methodFunction;\n  });\n};\n\n//# sourceURL=webpack://trait/./dist/methods/inherit_to.js?");

/***/ }),

/***/ "./dist/methods/methods.js":
/*!*********************************!*\
  !*** ./dist/methods/methods.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Get all methods listed to the trait\n * @returns {object} methods\n */\nmodule.exports = function methods() {\n  var listOfMethods = {};\n  this.each(function (methodName, methodFunction) {\n    methods[methodName] = methodFunction;\n  });\n\n  return listOfMethods;\n};\n\n//# sourceURL=webpack://trait/./dist/methods/methods.js?");

/***/ })

/******/ });