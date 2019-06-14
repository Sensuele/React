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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/parts/business.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/business.js":
/*!**********************************!*\
  !*** ./src/js/parts/business.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employers */ "./src/js/parts/employers.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money */ "./src/js/parts/money.js");



class BusinessInfo{
  constructor({
      eu: eu, rus: rus, owner: owner, director: director, cash: cash, emp: emp} = {
      eu: ['Google','Apple'], rus: ['Yandex','Mail']}
  ){
      this.eu = eu;
      this. rus = rus;
      this.owner = owner;
      this.director = director;
      this.cash = cash;
      this.emp = emp;

      this.init(); // Инициализация //
  }
  completeSponsors(){
      this.sumSponsors = [...this.eu, ...this.rus, 'unexpected sponsor'];
  }
  makeBusiness(){
      console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
      console.log(`And we have a sponsors: ${this.sumSponsors.join(', ')}`);
      console.log(`Note. Be careful with ${this.eu[0]}. It's a huge risk.`);
  }
  init(){
      this.completeSponsors();
      this.makeBusiness();
  }
}
const mainBusiness = new BusinessInfo({
  eu: _money__WEBPACK_IMPORTED_MODULE_1__["eu"],
  rus: _money__WEBPACK_IMPORTED_MODULE_1__["rus"],
  owner: 'Sam',
  cash: _money__WEBPACK_IMPORTED_MODULE_1__["money"],
  emp: _employers__WEBPACK_IMPORTED_MODULE_0__["employersNames"],
});

/***/ }),

/***/ "./src/js/parts/employers.js":
/*!***********************************!*\
  !*** ./src/js/parts/employers.js ***!
  \***********************************/
/*! exports provided: employersNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employersNames", function() { return employersNames; });
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = employers.filter((name) => {
    return (name.length > 0 && name.length != '');
})

employersNames = employersNames.map ((item) => item.toLowerCase().trim());



/***/ }),

/***/ "./src/js/parts/money.js":
/*!*******************************!*\
  !*** ./src/js/parts/money.js ***!
  \*******************************/
/*! exports provided: money, eu, rus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "money", function() { return money; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eu", function() { return eu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rus", function() { return rus; });
const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const calcCash = (own = 0, everyCash) => {
  let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;
  return total;
}

const money = calcCash(null, cash);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map