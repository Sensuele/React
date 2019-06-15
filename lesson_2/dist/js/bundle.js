"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/js/parts/business.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/parts/business.js":
  /*!**********************************!*\
    !*** ./src/js/parts/business.js ***!
    \**********************************/

  /*! no exports provided */

  /***/
  function srcJsPartsBusinessJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./employers */
    "./src/js/parts/employers.js");
    /* harmony import */


    var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./money */
    "./src/js/parts/money.js");

    var BusinessInfo =
    /*#__PURE__*/
    function () {
      function BusinessInfo(eu, rus, owner, cash, emp) {
        _classCallCheck(this, BusinessInfo);

        this.eu = eu;
        this.rus = rus;
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
      }

      _createClass(BusinessInfo, [{
        key: "completeSponsors",
        value: function completeSponsors() {
          this.sumSponsors = [].concat(_toConsumableArray(this.eu), _toConsumableArray(this.rus), ['unexpected sponsor']).join(', ');
        }
      }, {
        key: "makeBusiness",
        value: function makeBusiness() {
          var director = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'viktor';
          console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
          console.log("And we have a sponsors: ".concat(this.completeSponsors()));
          console.log("Note. Be careful with ".concat(this.eu[0], ". It's a huge risk."));
        }
      }]);

      return BusinessInfo;
    }();

    var mainBusiness = new BusinessInfo(_money__WEBPACK_IMPORTED_MODULE_1__["eu"], _money__WEBPACK_IMPORTED_MODULE_1__["rus"], 'Sam', _money__WEBPACK_IMPORTED_MODULE_1__["money"], _employers__WEBPACK_IMPORTED_MODULE_0__["employersNames"]);
    mainBusiness.makeBusiness();
    /***/
  },

  /***/
  "./src/js/parts/employers.js":
  /*!***********************************!*\
    !*** ./src/js/parts/employers.js ***!
    \***********************************/

  /*! exports provided: employersNames */

  /***/
  function srcJsPartsEmployersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "employersNames", function () {
      return employersNames;
    });

    var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    var employersNames = [];
    employersNames = employers.filter(function (name) {
      return name.length > 0 && name.length != '';
    });
    employersNames = employersNames.map(function (item) {
      return item.toLowerCase().trim();
    });
    /***/
  },

  /***/
  "./src/js/parts/money.js":
  /*!*******************************!*\
    !*** ./src/js/parts/money.js ***!
    \*******************************/

  /*! exports provided: money, eu, rus */

  /***/
  function srcJsPartsMoneyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "money", function () {
      return money;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eu", function () {
      return eu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rus", function () {
      return rus;
    });

    var sponsors = {
      cash: [40000, 5000, 30400, 12000],
      eu: ['SRL', 'PLO', 'J&K'],
      rus: ['RusAuto', 'SBO']
    };
    var cash = sponsors.cash,
        eu = sponsors.eu,
        rus = sponsors.rus;

    var calcCash = function calcCash() {
      var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var everyCash = arguments.length > 1 ? arguments[1] : undefined;
      var total = everyCash.reduce(function (total, currentValue) {
        return total + currentValue;
      }) + own;
      return total;
    };

    var money = calcCash(null, cash);
    /***/
  }
  /******/

});