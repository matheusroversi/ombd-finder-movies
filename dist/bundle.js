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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/node-fetch/browser.js":
/*!*********************************************!*\
  !*** ../node_modules/node-fetch/browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "../node_modules/omdb-wrapper/lib/config.js":
/*!**************************************************!*\
  !*** ../node_modules/omdb-wrapper/lib/config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = exports.API_KEY = void 0;
const API_KEY = '19572e5c';
exports.API_KEY = API_KEY;
const API_URL = 'https://www.omdbapi.com';
exports.API_URL = API_URL;

/***/ }),

/***/ "../node_modules/omdb-wrapper/lib/index.js":
/*!*************************************************!*\
  !*** ../node_modules/omdb-wrapper/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ "../node_modules/omdb-wrapper/lib/search.js"));

var _movie = _interopRequireDefault(__webpack_require__(/*! ./movie */ "../node_modules/omdb-wrapper/lib/movie.js"));

var _config = __webpack_require__(/*! ./config */ "../node_modules/omdb-wrapper/lib/config.js");

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/omdb-wrapper/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = __webpack_require__(/*! node-fetch */ "../node_modules/node-fetch/browser.js");

class OmdbWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || _config.API_URL;
    this.apiKEY = options.apiKEY;
    this.movie = _movie.default.bind(this)();
    this.search = _search.default.bind(this)();
  }

  request(url) {
    // ${this.token}`
    return fetch(url).then(_utils.toJSON);
  }

}

exports.default = OmdbWrapper;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/omdb-wrapper/lib/movie.js":
/*!*************************************************!*\
  !*** ../node_modules/omdb-wrapper/lib/movie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = movie;

function movie() {
  return {
    getMovie: id => this.request(`${this.apiURL}/?i=${id}&apikey=${this.apiKEY}`)
  };
}

/***/ }),

/***/ "../node_modules/omdb-wrapper/lib/search.js":
/*!**************************************************!*\
  !*** ../node_modules/omdb-wrapper/lib/search.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;

function searcher(query, value, page) {
  return this.request(`${this.apiURL}/?${query}=${value}&apikey=${this.apiKEY}`); //return this.request(`${this.apiURL}/&${query}=${value}${(page) ? '&page='+page : '' }`);
}

function search() {
  return {
    movies: searcher.bind(this, 's')
  };
}

/***/ }),

/***/ "../node_modules/omdb-wrapper/lib/utils.js":
/*!*************************************************!*\
  !*** ../node_modules/omdb-wrapper/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.toJSON = void 0;

const toJSON = data => data.json();

exports.toJSON = toJSON;
var _default = toJSON;
exports.default = _default;

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./js/IncludeGenre.js":
/*!****************************!*\
  !*** ./js/IncludeGenre.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return includeGenre; });
/* harmony import */ var _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Omdb.lib */ "./js/Omdb.lib.js");
/* harmony import */ var _RenderMovieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderMovieList */ "./js/RenderMovieList.js");


var count = 0;
var total = 0;
var data2;
var movieList = document.getElementById('movie-list');
function includeGenre(data) {
  total = data.length;
  count = 0;
  data2 = data;
  data.map(function (item, index) {
    _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__["default"].movie.getMovie(item.imdbID).then(function (genre) {
      count++;
      data2[index].Genre = genre.Genre;
      count === total ? Object(_RenderMovieList__WEBPACK_IMPORTED_MODULE_1__["default"])(data2, movieList) : '';
    });
  });
}

/***/ }),

/***/ "./js/Main.js":
/*!********************!*\
  !*** ./js/Main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchTrigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchTrigger */ "./js/SearchTrigger.js");
/* harmony import */ var _SelectMovieTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectMovieTrigger */ "./js/SelectMovieTrigger.js");


Object(_SearchTrigger__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_SelectMovieTrigger__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./js/Omdb.lib.js":
/*!************************!*\
  !*** ./js/Omdb.lib.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var omdb_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! omdb-wrapper */ "../node_modules/omdb-wrapper/lib/index.js");
/* harmony import */ var omdb_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(omdb_wrapper__WEBPACK_IMPORTED_MODULE_0__);

var omdb = new omdb_wrapper__WEBPACK_IMPORTED_MODULE_0___default.a({
  apiKEY: '19572e5c'
});
/* harmony default export */ __webpack_exports__["default"] = (omdb);

/***/ }),

/***/ "./js/RenderMovieInfo.js":
/*!*******************************!*\
  !*** ./js/RenderMovieInfo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderMovieInfo; });
function createMarkup(data) {
  return "\n    <figure><img width=\"250\" src=\"".concat(data.Poster, "\" alt=\"").concat(data.Title, "\"></figure>\n    <div class=\"content\">\n      <h2>").concat(data.Title, "</h2>\n      <p>").concat(data.Plot, "</p>\n      <p>\n        <strong>Ano:</strong> <span>").concat(data.Year, "</span><br>\n        <strong>Gerero:</strong> <span>").concat(data.Genre, "</span><br>\n        <strong>Dire\xE7\xE3o:</strong> <span>").concat(data.Director, "</span><br>\n        <strong>Pr\xEAmios:</strong> <span>").concat(data.Awards, "</span>\n      </p>\n    </div>");
}

function renderMovieInfo(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;
  return true;
}

/***/ }),

/***/ "./js/RenderMovieList.js":
/*!*******************************!*\
  !*** ./js/RenderMovieList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderMovies; });
function createMarkup(data) {
  return data.map(function (movie) {
    return "\n        <tr class=\"list-item\">\n          <td><a data-movie-id=\"".concat(movie.imdbID, "\" title=\"").concat(movie.Title, "\">").concat(movie.Title, "</a></td>\n          <td>").concat(movie.Year, "</td>\n          <td>").concat(movie.Genre, "</td>\n        </tr>");
  }).join('');
}

function renderMovies(data, element) {
  var markup = createMarkup(data);
  element.innerHTML = markup;
  return data;
}

/***/ }),

/***/ "./js/SearchTrigger.js":
/*!*****************************!*\
  !*** ./js/SearchTrigger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchEnterTrigger; });
/* harmony import */ var _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Omdb.lib */ "./js/Omdb.lib.js");
/* harmony import */ var _IncludeGenre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncludeGenre */ "./js/IncludeGenre.js");


var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('search-input');

function makeRequest() {
  _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__["default"].search.movies(searchInput.value).then(function (data) {
    data.hasOwnProperty("Search") ? Object(_IncludeGenre__WEBPACK_IMPORTED_MODULE_1__["default"])(data.Search) : alert('Sua pesquisa não retornou nenhum resultado');
  });
}

function searchEnterTrigger() {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    makeRequest();
  });
}

/***/ }),

/***/ "./js/SelectMovieTrigger.js":
/*!**********************************!*\
  !*** ./js/SelectMovieTrigger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectMovieTrigger; });
/* harmony import */ var _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Omdb.lib */ "./js/Omdb.lib.js");
/* harmony import */ var _RenderMovieInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderMovieInfo */ "./js/RenderMovieInfo.js");


var listMovies = document.getElementById('movie-list');
var movieInfo = document.getElementById('movie-info');
var modal = document.getElementById('modal_');

function makeRequest(movieId) {
  _Omdb_lib__WEBPACK_IMPORTED_MODULE_0__["default"].movie.getMovie(movieId).then(function (data) {
    return Object(_RenderMovieInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(data, movieInfo);
  }).then(modal.classList.add('active'));
}

function selectMovieTrigger() {
  listMovies.addEventListener('click', function (e) {
    var target = e.target;
    makeRequest(target.getAttribute('data-movie-id'));
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map