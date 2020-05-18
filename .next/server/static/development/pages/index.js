module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getPostSlugs, getPostBySlug, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostSlugs", function() { return getPostSlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(process.cwd(), '_posts');
function getPostSlugs() {
  return Object(fs__WEBPACK_IMPORTED_MODULE_1__["readdirSync"])(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(postsDirectory, `${realSlug}.md`);
  const fileContents = Object(fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"])(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {};
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)).sort((post1, post2) => post1.date > post2.data ? '-1' : '1');
  return posts;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/DateFormater.js":
/*!****************************************!*\
  !*** ./src/components/DateFormater.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateFormater; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/DateFormater.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function DateFormater(_ref) {
  let {
    dateStr,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["dateStr", "className"]);

  const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(dateStr);
  return __jsx("time", _extends({
    dateTime: dateStr,
    className: `mt-1 text-sm block text-gray-600 ${className}`
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'LLLL	d, yyyy'));
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("div", {
    className: "h-48 flex justify-between items-end pb-8 flex-shrink-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "mr-6 font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/tepythai",
    target: "_blank",
    rel: "noopener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, "GitHub")), __jsx("li", {
    className: "font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://twitter.com/TepyThai",
    target: "_blank",
    rel: "noopener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Twitter"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "@2020,"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Tepy Thai")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVG/Logo */ "./src/components/SVG/Logo.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "transform -skew-x-6 flex justify-between h-16 border-2 px-4 my-2 border-teal-900 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_SVG_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "cursor-pointer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  })), __jsx("ul", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(NavLink, {
    href: "/writing",
    className: "mr-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Writing"), __jsx(NavLink, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "About"))));
}

function NavLink(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const {
    href,
    className,
    children
  } = props,
        rest = _objectWithoutProperties(props, ["href", "className", "children"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("li", _extends({
    className: `${router.pathname === href ? 'text-primary' : 'text-black'} hover:text-primary cursor-pointer font-medium ${className}`
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), children));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "max-w-6xl px-10 mx-auto font-body ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/PostItem.js":
/*!************************************!*\
  !*** ./src/components/PostItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DateFormater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateFormater */ "./src/components/DateFormater.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/PostItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PostItem({
  post,
  className,
  href = '#'
}) {
  const {
    title,
    date,
    slug
  } = post;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: `/posts/${slug}`,
    href: "/posts/[slug]",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `group hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer w-sm py-4 px-6 rounded-lg bg-gray-200 my-4 max-w-xl ${className}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex justify-between items-center flex-wrap ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mb-4 sm:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "group-hover:text-primary transition duration-300 ease-in-out group-hover:underline font-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, title), __jsx(_DateFormater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateStr: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SVG_ProfileSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVG/ProfileSvg */ "./src/components/SVG/ProfileSvg.js");
/* harmony import */ var _SVG_Blob1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVG/Blob1 */ "./src/components/SVG/Blob1.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Profile() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex flex-wrap items-center justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sm:hidden inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(ProfileImage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "mb-32 sm:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(Detail, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "hidden sm:inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(ProfileImage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))));
}

function Detail() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "flex-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_SVG_Blob1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-64 opacity-25 absolute",
    style: {
      top: '-30px',
      left: '-50px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_SVG_Blob1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-64 opacity-25 absolute transform rotate-90",
    style: {
      top: '-30px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "text-3xl uppercase text-teal-600 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Hi, I'm Tepy")), __jsx("div", {
    className: "h-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "block font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Frontend Developer")));
}

function ProfileImage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "p-8 w-auto h-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_SVG_ProfileSvg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/SVG/Blob1.js":
/*!*************************************!*\
  !*** ./src/components/SVG/Blob1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/SVG/Blob1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Blob1(props) {
  return __jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    fill: "#08BDBA",
    d: "M157 76.7c5.2 20.8-10.3 43.5-30.7 57.9-20.4 14.4-45.6 20.5-62 9.8-16.4-10.8-23.9-38.5-16.5-62.4 7.4-23.8 29.8-43.8 54-44.4 24.1-.6 50 18.3 55.2 39.1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Blob1);

/***/ }),

/***/ "./src/components/SVG/Logo.js":
/*!************************************!*\
  !*** ./src/components/SVG/Logo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/SVG/Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)'
  }
};

function Logo(_ref) {
  let {
    loadingType
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["loadingType"]);

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    initial: "hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].svg, _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none",
    viewBox: "0 0 24 24"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#fff",
    d: "M0 0H24V24H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    variants: icon,
    initial: "hidden",
    animate: "visible",
    transition: {
      default: {
        duration: 2,
        ease: 'easeInOut'
      },
      fill: {
        duration: 2,
        ease: [1, 0, 0.8, 1]
      }
    },
    stroke: "#08BDBA",
    strokeWidth: "3",
    d: "M5 8l-1.026-.513A.785.785 0 013.77 6.23v0A.785.785 0 014.325 6H8m0 0h3.349c.36 0 .651-.292.651-.651v0a.651.651 0 00-.29-.542L10.5 4M8 6v14m5-10v0a2.7 2.7 0 01-.146-2.06l.005-.018c.094-.28.231-.542.408-.778l.408-.544A3.252 3.252 0 0115.87 5.33v0c1.523-.19 2.98.72 3.465 2.175v0c.11.329.165.672.165 1.019v.406a5 5 0 01-1.465 3.535l-5.224 5.225a1.06 1.06 0 00-.311.75v0c0 .586.475 1.061 1.06 1.061H20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/SVG/ProfileSvg.js":
/*!******************************************!*\
  !*** ./src/components/SVG/ProfileSvg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/SVG/ProfileSvg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProfileSvg() {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].svg, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "217",
    height: "272",
    version: "1",
    viewBox: "0 0 2170 2720",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#0e141b",
    stroke: "none",
    d: "M256 2704c-3-9-6-30-6-48s-14-72-30-122c-17-49-42-129-55-179-22-86-25-90-49-87-32 3-34-14-4-45 14-15 21-34 20-57-2-48 96-225 164-296l34-36-12-59c-8-42-21-71-42-95-17-19-42-53-56-75-13-22-30-46-37-53s-13-17-13-22-11-21-25-36c-38-41-34-79 12-103 21-11 65-40 98-65s79-54 102-63c24-10 43-24 43-31 0-24-42-97-81-139-21-22-43-59-48-81-11-40-34-74-79-119-26-26-26-50-7-238 7-57 5-61-23-88l-30-29 18-56c9-32 22-83 28-114C212 187 343 51 515 19c74-14 191-6 255 17 62 22 166 107 202 164 40 66 128 242 128 258 0 8 23 39 51 70 28 32 67 89 87 127 30 58 36 81 36 130 0 71-21 117-88 190-52 57-61 95-21 95 35 0 65 33 65 71 0 22 12 46 35 75 58 70 64 74 109 74 55 0 92 28 106 79 6 22 29 64 53 95 23 30 53 74 67 96 27 44 97 88 320 202 63 32 122 64 131 71 8 7 39 45 67 86l52 74v727h-954c-861 0-954-2-960-16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#2f3637",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M256 2704c-3-9-6-30-6-47 0-18-14-75-32-127-17-52-41-133-54-180-21-81-23-85-48-82-33 4-33-12-1-50 19-23 24-38 20-57-4-20 5-46 33-96 59-108 91-157 129-196 33-35 34-37 23-84-12-55-5-92 14-76 8 7 16 7 22 1 20-20 143 37 129 60-3 4 8 19 24 33 16 13 31 33 34 43 4 15 5 14 6-5 2-47 16-9 17 49 1 32 6 73 12 92 6 18 13 79 17 134l6 101-27 7c-23 6-24 9-11 19 9 7 25 32 35 57l19 45 27-52c14-29 26-60 26-68 0-10 5-13 13-9 9 6 9 4-1-8-18-23-5-99 16-91 10 4 13 2 8-5-4-7-2-12 5-12 12 0 9 37-6 75-12 30 9 7 33-36 18-32 19-39 7-56-13-18-11-21 13-34 34-18 51-38 52-64 1-12 4-15 7-7 4 10 8 10 19 1 8-6 11-15 8-20s2-9 10-9c9 0 16-6 16-14s7-22 16-30c8-9 12-20 9-26-3-5-2-10 4-10s13-15 16-34c6-30 14-37 77-65 83-36 99-38 123-11 16 18 19 43 23 184l5 163-34-5-34-6 30-6c28-5 26-7-29-23-33-9-61-16-61-14-1 1-5 14-8 28-8 31 9 39 84 39h46l17 73c30 124 30 137 10 152-15 11-17 17-8 32 7 12 8 27 2 42-5 14-11 65-14 115-6 90 4 146 26 146 14 0 31-47 33-92 1-21 4-38 7-38 4 0 5-18 3-40-2-27 1-40 10-40 8 0 7-3-3-10-10-6-15-31-17-87-1-43-3-112-5-153-4-96 10-101 81-29 28 29 54 50 57 46 4-4 3-7-3-7s-8-11-5-25c3-19 11-25 31-25l26-1-25-14-25-14 35-1h35l-29-15c-16-9-58-20-92-24-35-5-67-12-72-15-4-2-7-45-5-95 2-68-2-103-17-147-11-31-18-60-15-64 3-5 0-19-5-32-10-21-10-21-5 6 5 24 4 26-8 14-8-8-18-24-21-36-10-30 17-30 38 0l16 22 1-24 1-25 8 25c8 25 11 22 15-17 4-35 14-55 25-48 6 3 13-1 16-10 4-9 13-14 20-11 8 3 14-1 14-10 0-10 6-14 14-11s17-1 20-8c3-8 24-18 46-21 22-4 43-11 46-15 9-15-15-10-79 15-34 14-74 28-90 32-15 3-30 10-33 15-10 17-49 9-93-20l-44-29 31-16c55-28 223-226 193-226-6 0-11 7-11 15s-8 15-19 15c-15 0-19-8-19-42-1-78-10-119-28-132-16-12-13-36 5-36 4 0 28 25 52 55 42 52 46 55 90 55 59 0 95 27 109 82 6 22 28 61 48 87s50 68 67 95c23 37 46 56 105 88 41 23 94 54 117 70 23 15 45 28 50 28 11 0 163 77 184 93 8 7 39 47 67 89l52 77v721h-186c-161 0-185-2-180-15 3-8 1-15-5-15s-9-8-8-17c1-10-1-25-4-33-8-20-27-117-27-136 0-8 20-24 45-36s45-28 45-36c0-10-4-10-16 3-23 22-73 47-84 40-5-3-6 20-3 57 4 35 7 73 7 86 1 12 4 22 9 22 4 0 7 18 7 40v40h-57c-36 0-53-4-45-9 11-6 10-10-3-15s-15-9-6-20c9-10 8-15-4-19-8-4-12-13-9-22 4-9 1-15-9-15s-13-7-10-20c3-11 1-20-4-20s-9-8-10-17c-2-25-13-75-21-93-7-18-13-47-15-77-1-13-5-23-8-23-13 0-18 30-9 59 5 17 6 31 2 31s0 5 9 10c11 6 17 24 17 55 1 25 3 49 6 54 3 4 8 30 12 57 3 27 10 50 14 52 5 2 6 10 3 18-4 12-103 14-683 14-603-1-679-2-684-16zm100-96l3-43-14 45c-18 55-19 68-3 52 6-6 13-31 14-54zm1421-174c-7-7-37 7-37 17 0 6 9 5 21-1 11-7 19-14 16-16zm73-41c0-11-6-10-25 4-32 23-32 36 0 21 14-6 25-17 25-25zm0-43c0-14-14-12-28 2-19 19-14 30 8 18 11-6 20-15 20-20zm-1150-31c0-17-9-9-24 24l-16 32 20-24c11-13 20-27 20-32zm121-1c1-7 1-16 0-20 0-5 11-8 27-8 19 0 32-8 44-29 16-30 16-30-12-36-34-8-70 9-71 33 0 9-2 29-4 45-2 15 1 27 6 27s10-6 10-12zm1019-9c11-19 10-20-10-9-11 6-18 15-15 21 9 13 13 11 25-12zm-670 0c0-5-14-9-31-9-16 0-28 4-25 9s17 9 31 9 25-4 25-9zm352-43c-9-31-8-36 6-36 13 0 12-4-6-20-36-33-41-23-19 40 22 64 35 75 19 16zm-789 4c16-19 16-20-5-20-12 0-18 3-15 7 4 3 2 12-4 20-6 7-7 13-2 13s16-9 26-20zm1009-10c-2-16-5-30-7-30s-5 14-7 30c-3 19 0 30 7 30s10-11 7-30zM499 2054c-23-48-43-103-44-122-1-32-14-47-45-51-3-1-5 19-4 44s-1 45-5 45-7 10-8 21c-2 21-1 21 13 3 9-11 13-14 10-7-4 6-2 14 4 18 7 4 6 14-2 28-10 19-9 20 4 9 21-17 58 21 89 92 19 44 25 50 27 31 2-13-16-63-39-111zm1007 110c-28-24-45-27-31-4 6 10 41 28 55 29 3 0-8-11-24-25zm8-29c-7-18-44-40-44-27 0 5 10 17 23 25 28 20 28 20 21 2zm-994-277c0-16-3-19-11-11-6 6-8 16-5 22 11 17 16 13 16-11z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M662 2045c-13-28-16-52-5-42 3 4 11 3 17-2s26-12 43-16c28-6 32-4 27 10-4 9-12 14-19 11-9-3-11 2-7 16 4 15 2 19-7 13-10-5-11-2-6 14 10 32-29 28-43-4zM653 1970c-1-11-18-34-38-52-34-29-36-35-33-77 3-25 8-55 13-66l8-20-17 20c-16 19-16 19-5-7 7-15 16-26 21-25s17-17 27-41c34-85 45-89 166-62 28 6 66 14 86 19 46 10 117 2 98-11-10-6-6-7 11-3 14 3 39 1 55-6 48-19 58-20 44-3-7 9-13 26-14 40-1 34-19 47-115 83-47 18-100 41-119 52-29 17-53 20-143 21-82 0-108 3-108 13 0 14 29 24 75 26 29 1 29 1 5 8-35 10-40 41-6 41 14 0 28 5 31 11 5 7 11 5 18-5 7-8 24-20 39-25 22-8 26-7 22 4-3 8-15 17-26 21-11 3-17 8-14 11 6 7-13 26-41 41-30 17-39 15-40-8zM268 1661c-12-16-39-55-58-87s-47-70-62-84c-38-37-36-71 5-95 17-10 65-43 106-72 40-29 89-58 107-65 19-7 34-18 34-25 0-25-42-97-81-140-21-22-43-59-48-81-11-39-34-74-78-118-19-19-23-33-22-86 0-35 6-90 13-123 15-67 8-97-26-125-22-17-22-20-9-66 7-27 18-73 22-102 22-128 95-251 182-306 92-58 140-71 262-71 104 0 114 2 175 32 64 31 170 115 170 134 0 5 16 34 36 64 20 29 37 65 38 78 0 14 4 23 9 20 8-5 57 93 57 115 0 8 23 39 51 70 28 32 67 89 87 127 30 57 36 81 36 130 0 71-16 106-87 188-43 50-49 62-43 88 5 27 4 30-12 24-9-4-25-10-34-12-10-3-18-9-18-14 0-13-34-11-48 3-7 7-12 22-12 35 0 17-7 24-27 28-16 4-48 11-73 16-28 6-88 39-161 88-91 62-134 84-205 105-49 16-102 32-118 37s-36 9-45 8c-9 0 14-10 52-21 37-12 67-27 67-34 0-6-16-21-36-33-37-22-74-28-74-12 0 5-10 13-22 17-24 7-68 36-102 67-17 14-18 20-7 26 8 5-8 11-45 16-33 4-62 12-66 19-13 19-9 46 7 46 9 0 15 6 13 13-2 6 7 26 20 44 12 17 22 34 22 38 0 3 18 33 40 65 42 65 46 77 8 31zm32-715c-4-19-6-38-4-41s-1-1-7 4c-12 10-1 84 11 76 4-3 4-20 0-39zm355-26c-3-5-13-10-21-10s-14 5-14 10c0 6 9 10 21 10 11 0 17-4 14-10zM337 818c3 6 9 12 15 12s7-7 4-16c-3-8-2-12 4-9s10 2 10-4c0-5 8-12 18-15 12-4 18-15 17-29-1-12 3-28 9-36 9-12 7-12-12-2s-23 18-18 39c5 27 5 27-6 3-11-21-9-26 17-47 17-13 33-24 37-24s28-21 54-47c26-27 44-41 39-33-4 8 3 5 17-7 13-13 29-23 35-23s25-13 43-30c18-16 38-30 45-30 24 0 27-20 3-21-62-2-115 1-138 6-14 4-32 7-40 8s-25 8-37 15c-13 7-23 10-23 7 0-4-7 1-16 9-8 9-22 16-30 16s-13 4-10 9c8 12-19 33-29 23-5-4-5-1-1 6 4 6 3 12-2 12s-15 15-22 33c-7 17-16 41-20 52-19 45-24 73-21 125 3 74 11 81 34 29 11-24 21-38 24-31zm747-23c1-11 8-20 14-20 22 0 21-12-3-25-14-7-25-19-25-27 0-7-6-13-14-13s-21-8-28-18-19-22-26-26c-11-7-12-4-3 12 18 34 34 76 37 99 1 13 8 39 16 59l13 35 7-28c5-15 10-37 12-48zm-601-28c3 2 4-3 3-14-2-13-12-18-35-19-19-1-30 3-28 10 3 6 10 10 17 8 11-3 11 0 0 13-12 14-10 15 12 6 14-5 28-7 31-4zm322-47c-3-5-1-10 4-10 6 0 11-4 11-8 0-5-15-9-34-9-27 0-32 4-28 19 3 11 13 18 29 18 13 0 21-4 18-10zm99-108c-6-4-10-15-9-24 2-11-2-15-11-11-8 3-11 10-7 17 13 24 26 36 32 31 3-3 1-9-5-13zm-644-48c13-20 41-50 62-67s38-34 38-39c0-13 26-38 40-38 6 0 13-7 16-15 4-8 11-12 17-8 5 3 7 1 4-4-17-28 73-41 105-16 21 17 143 34 187 27 23-4 41-3 41 2 0 11 151 12 168 1 7-5 10-12 7-17s3-7 14-5c18 3 19 2 3-28-20-37-34-50-42-37-3 6-22 13-40 16-20 4-31 3-27-2 16-17-97-32-199-28l-100 5-54-40c-30-23-63-41-72-41-27 0-131 109-125 131 4 13-11 32-50 65-45 39-53 51-49 70 5 17 2 24-9 24-16 0-21 25-6 35 5 3 12-4 16-14 3-11 20-32 38-47 25-21 27-25 10-20-26 8-36-4-18-21 11-10 17-10 29 3 17 16 21 34 9 34-14 0-53 66-53 88 0 31 11 27 40-14zm727-241c-4-3-1-13 6-21 8-11 8-14 0-9-6 4-14 1-16-5-3-7-6-4-6 8-1 20 6 34 17 34 3 0 2-3-1-7zM847 104c-21-20-42-32-45-28-4 3-1 9 6 11 7 3 25 16 40 29 42 37 41 27-1-12zM513 57c26-7 45-16 42-19-6-6-94 17-103 27-8 8 8 5 61-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M265 439c-4-5 1-9 9-9 9 0 16-4 16-10 0-5 8-10 18-10s23-5 30-12 12-8 12-2-12 16-26 22c-14 7-23 16-20 20 2 4-4 8-14 9-11 1-22-2-25-8zM900 370c-12-8-10-10 8-10 13 0 20-4 17-10-3-5-1-10 4-10 13 0 13 3 5 24-7 18-13 19-34 6zM554 334c-17-14-17-15-1-10 10 3 23 6 28 6s9 5 9 10c0 14-13 12-36-6zM701 342c-25-8 3-22 42-21 23 1 34 3 25 6-10 2-18 8-18 13 0 9-26 10-49 2zM390 277c0-33 53-51 64-22 4 11-3 19-20 25-34 13-44 13-44-3z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#1d3b5c",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M256 2704c-3-9-6-30-6-47 0-18-14-75-32-127-17-52-41-133-54-180-21-81-23-85-48-82-33 4-33-12-1-50 19-23 24-38 20-57-4-20 5-46 33-96 59-108 91-157 129-196 32-33 33-38 25-76-10-46 5-82 26-61 9 9 12 8 12-5 0-16 2-16 30-2 18 9 28 20 24 27-5 7-2 9 8 5 10-3 19 3 27 19 11 24 11 24-18 9-16-8-31-20-33-27-2-6-10 3-18 22-15 36-16 35 66 97l29 23-28-10c-42-15-44-14-43 34 1 24-2 42-6 40-4-3-6 8-4 23 1 16 8 27 15 25 8-2 10 4 6 18-5 16-2 20 14 20 24 0 81 72 81 102 0 10 4 18 9 18s12 8 15 18c5 16 3-34-11-262-5-82-3-107 5-102 7 4 12 16 12 26s4 20 10 22c5 2 11 24 13 49s8 52 12 59c5 8 10 32 11 54 1 23 5 72 9 109l6 68-30 12c-31 12-42 27-18 27 13 0 39 34 47 63s24 23 46-20c12-22 37-63 55-91 19-27 50-76 69-108 19-31 49-78 66-103 17-26 35-57 39-70 5-18 9-21 16-10s9 9 9-6c0-30 25-96 33-88 4 3 7 0 7-9 0-15 110-68 141-68 9 0 24 9 34 20 15 17 19 44 23 170 3 84 1 150-4 150s-31-7-58-15c-65-20-63-20-70 20-14 72-16 105-6 105 6 0 10-11 10-25 0-34 20-32 21 3 2 25 2 25 6 3 3-13 13-26 24-28 10-3 19-10 19-15s12-8 27-6c23 3 29 9 35 43 3 22 14 60 22 84 21 58 21 58-19 53-21-3-35 0-35 7 0 6 16 11 35 11 34 0 48 14 23 23-8 2-14 24-15 53-1 27-4 67-8 89-8 52-8 150 0 175 13 42 50 15 57-43 2-14 6-29 9-31 3-3 4-29 3-58-2-35 2-55 11-62 11-8 12-15 4-26-9-13-10-12-5 3 3 9 2 17-3 17-9 0-20-70-18-110 2-22 6-25 42-23 37 2 33-1-22-13-22-4-23-9-23-91v-86l21 19c49 44 139 139 139 146 0 5 5 8 10 8 6 0 4-13-5-30-17-34-20-70-4-70 5 0 8-4 5-9-4-5 0-12 6-14 10-4 10-8-1-15-11-8-9-11 10-17l24-8-23-8c-13-5-20-13-17-19 4-6-11-10-37-10-24 0-60-3-80-6l-38-7v-92c0-57-6-109-15-135-21-59-19-93 6-108 13-8 19-20 16-32-5-18 26-53 37-43 3 4 6-3 6-15 0-29 17-28 24 1 2 12 4 5 2-15-1-30 1-35 11-26 10 8 17 7 26-7 8-9 27-18 44-19 16-1 38-8 48-16 12-10 41-15 86-15 43 0 62-3 52-9-17-9-157-1-218 14-32 7-41 6-48-6-4-7-14-14-20-14-7 0-13-9-13-20s4-20 9-20 4-7-3-15c-9-11-10-15-1-15 8 0 10-8 6-19-4-12 5-37 24-68 16-26 32-61 35-78 6-29 6-29-4-5-14 32-41 61-51 55-4-3-11-35-15-71-4-46-13-73-26-86-17-17-18-22-7-29 8-4 16-5 20-1 3 4 23 28 43 55 36 44 41 47 86 47 60 0 96 26 110 82 6 22 28 61 48 87s50 68 67 95c23 37 46 56 105 88 41 23 94 54 117 70 23 15 45 28 50 28 11 0 163 77 184 93 8 7 39 47 67 89l52 77v721h-342l6-62c10-106 17-238 12-238-3 0-16 11-30 25-25 25-56 33-56 15 0-5 5-10 10-10 6 0 10-4 10-10 0-5-6-10-14-10-9 0-12-7-9-20 3-12 0-20-7-20s-10-8-7-20c3-11 1-17-4-14s-7 22-5 42c3 20 8 73 12 117 9 113 10 125 19 168l7 37h-51c-30 0-50-4-46-9 3-5 0-13-6-16-5-4-8-13-5-21s-1-17-9-20c-8-4-12-11-9-16 4-6 3-13-2-17-20-14-65-189-46-177 6 3 14 2 17-4 4-6 3-10-2-9-22 4-30-3-30-23-1-45-3-50-19-44-12 5-15 2-10-10 4-9 0-24-8-33-17-18-24-70-13-88 4-6 2-15-4-18-5-4-8-13-5-21 3-7 1-16-5-20-6-3-8-12-5-20 7-18-31-57-45-48-8 4-7 9 1 14 7 4 9 13 6 19-4 6-4 17 0 23 5 7 9 19 9 28 3 32 47 150 56 150 6 0 7 4 4 10-3 5 1 32 9 60 8 27 12 50 9 50-4 0 1 6 12 13 10 8 15 19 12 24-6 9 9 114 28 201l5 22-217-2c-168-2-217-6-216-15 2-7-2-13-7-13-6 0-10 7-10 15 0 13-57 15-454 14-397 0-455-2-460-15zm80-19c-3-8 2-19 12-24 9-5 14-13 10-17-4-3-3-14 2-23 8-16 13-43 26-143 3-21 3-38 0-38-4 0-23 72-31 120-2 14-13 51-23 83-16 48-17 57-5 57 9 0 13-6 9-15zm282-33c2-7-6-12-17-12-21 0-27 11-14 24 9 9 26 2 31-12zm1232-264c0-13-4-17-12-12-10 6-10 4-2-7 16-20 12-92-6-97-12-3-12-2-2 6 10 7 10 11-3 22-12 10-13 16-3 27 10 12 9 18-4 27-16 12-16 14-1 29s15 17 0 23c-9 3-17 10-17 15s11 3 25-3 25-20 25-30zm-1160-45c0-7 7-13 15-13s15-6 15-14c0-7 7-19 15-26s12-16 9-21 8-9 24-9c29 0 29 1 27 44-2 24-6 49-9 54-3 6-1 12 6 14 16 6 70-21 63-31-2-5 4-16 15-26s17-22 14-26c-3-5 5-9 18-10 13 0 17-3 11-6-10-3-9-9 4-21 15-16 13-17-26-25-31-6-49-4-73 7-17 9-48 16-68 16-35 0-39 3-59 50-12 28-25 50-30 50-4 0-8 6-8 13 0 6-4 21-8 32-5 14 1 11 19-10 14-16 25-36 26-42zm-178 10c-6-2-10-9-7-13 6-10-34-35-42-26-7 7 38 46 52 45 6 0 4-3-3-6zm1231-29c-3-8-6-14-7-12s-7 11-14 20c-11 14-10 16 7 11 12-3 17-11 14-19zm2-69c0-19-4-35-9-35-6 0-1-7 10-15 16-13 16-14 2-9s-18 1-18-16c0-11-4-19-9-16s-5 22-1 42c5 20 6 47 4 60-3 15 0 24 8 24s13-13 13-35zm-858-151c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm898-75c-3-4-12-6-20-3-8 4-13 10-10 15 3 4 12 6 20 3 8-4 13-10 10-15zM556 1923c-3-8-6-21-6-29s-4-14-10-14c-5 0-10 16-10 35 0 27 3 33 16 28 8-3 13-12 10-20zm796-398c-4-14-53-9-69 8-12 11-7 13 29 8 24-3 42-10 40-16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1154 1776c-20-22-27-56-11-56 24 0 41 28 31 49-7 15-11 17-20 7zM152 1403c14-17 111-81 120-79 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-24-25-93-73-147-23-26-47-65-53-87-10-38-33-73-77-117-19-19-23-33-23-86 0-35 4-79 10-98 13-47 18-130 8-124-4 3-8-4-8-15 0-30 28-15 32 17l3 27 25-30c14-16 46-51 72-76 27-26 48-50 48-54 0-9 27-35 37-35 5 0 19-13 31-30 19-25 28-29 62-26 22 2 45 8 52 13 21 17 143 34 187 27 23-4 41-3 41 2 0 11 151 12 168 1 7-5 9-13 6-19-4-6 2-5 15 1 12 7 27 21 34 31 6 11 15 20 19 20 5 0-7-21-25-47-19-27-37-56-40-66-5-13-18-17-54-18-26 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-14-6-40 15-31 25 3 2-1 5-8 5-10 0-12-10-6-41 4-23 12-69 18-104 25-140 95-259 184-316 92-58 140-71 262-71 104 0 114 2 175 32 81 40 154 103 177 151 9 20 23 43 30 50 22 23 35 53 29 68-4 9-2 12 5 8 8-4 9 1 4 17-5 18-4 20 4 9s15-3 35 40c14 30 26 61 26 68 0 8 23 39 51 70 28 32 67 89 87 127 30 57 36 81 36 130 0 71-16 106-85 186-27 31-49 63-49 70 0 8-4 20-9 28-8 12-13 12-35-2-47-31-91-12-79 33 4 15-8 20-69 34-58 13-92 29-158 73-96 65-206 123-229 122-12 0-11-3 4-10 18-8 17-9-4-5-16 3-46-6-82-25l-57-31-48 25c-53 27-124 86-124 103 0 5-24 14-54 20-44 8-53 7-44-3zm152-425c-2-18-5-40-6-48-3-26 14-90 24-90 5 0 7-4 4-9-4-5 4-7 16-3 18 4 20 2 14-14-4-10-4-15 0-11 10 9 34-11 30-26-1-7-1-9 1-4 3 4 9 7 14 7 6 0 8-4 4-9-3-5-1-12 5-16 6-3 13 1 16 9 4 11 12 13 29 6 13-5 26-6 31-2 4 4 3 1-1-7-6-11-4-13 11-8 18 7 18 6-1-8-13-11-32-14-57-11-25 4-36 1-34-7 3-20 17-38 26-32 4 3 15-6 24-20s24-25 32-25c10 0 14-6 11-14-4-9-1-13 6-10 7 2 24-7 37-21s29-25 36-25c6 0 26-13 44-30 18-16 38-30 45-30 24 0 27-20 3-21-62-2-115 1-138 6-14 4-32 7-40 8s-25 8-37 15c-13 7-23 10-23 7 0-4-7 1-16 9-8 9-22 16-29 16-8 0-17 5-21 12-5 7-2 9 7 3 8-4-1 7-18 24-18 18-33 33-33 35s-11 34-25 72-25 89-25 114c0 47 17 168 26 182 9 15 11 8 8-24zm351-58c-3-5-13-10-21-10s-14 5-14 10c0 6 9 10 21 10 11 0 17-4 14-10zm422-62c3-48 12-83 21-83 22 0 21-12-3-25-14-7-25-19-25-27 0-7-6-13-13-13s-23-11-35-25-28-25-34-25c-10 0-10 2-1 8 16 10 45 79 50 117 6 55 38 112 40 73zM818 709c2-12-6-16-33-16-33 0-45 14-28 31 13 12 58 2 61-15zm86-97c-6-4-10-15-9-24 2-11-2-15-11-11-8 3-14 8-14 11 0 11 33 42 39 37 3-4 1-9-5-13zm-99-23c5-5 0-9-14-9-12 0-30 8-39 17-16 15-15 16 13 9 17-4 34-12 40-17zm195-278c0-10-8-26-19-35-17-15-19-15-25-1-7 19 22 67 35 59 5-3 9-13 9-23zm-113-27c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#53322e",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M255 2702c-3-8-5-28-5-45 0-18-14-75-32-127-17-52-41-133-54-180-21-81-23-85-48-82-33 4-33-12-1-50 19-23 24-38 20-57-4-20 5-46 33-96 59-108 91-157 129-196 32-33 33-38 25-76-10-46 5-82 26-61 9 9 12 8 12-5 0-16 2-16 30-2 18 9 28 20 24 27-5 7-2 9 8 5 10-3 19 3 27 19 11 24 11 24-18 9-16-8-31-20-33-27-2-6-10 3-18 22-15 36-15 36 66 97l29 22-34-11c-35-11-55 1-44 29 4 9 0 11-11 7-18-7-22-24-6-24 6 0 10-8 10-17 0-14-3-13-17 6-15 23-15 25 5 41 18 15 20 22 12 51-6 19-10 35-10 36s9 0 21-2c15-3 19 0 15 10-8 20-14 42-9 33 3-5 13-8 24-8 22 0 79 73 79 102 0 10 4 18 9 18s12 8 15 18c5 16 3-34-11-262-5-82-3-107 5-102 7 4 12 16 12 26s4 20 10 22c5 2 11 24 13 49s8 52 12 59c5 8 10 32 11 54 1 23 5 72 9 109l6 68-30 12c-31 12-42 27-18 27 13 0 39 34 47 63s24 23 46-20c12-22 37-63 55-90 19-28 52-81 74-117 22-37 50-81 62-98l23-32v27c0 15 4 27 10 27 5 0 7 16 4 36-3 29-1 35 11 31 8-4 17-2 20 3 4 6 12 10 18 10 8 0 7-3-2-9-11-7-11-10 2-17 16-9 40-112 30-128-4-5-1-6 5-2 7 4 12 0 12-10s2-15 5-12c4 3-1 43-9 89s-12 86-10 88c8 8 14-7 19-45 3-21 8-59 11-84 4-25 10-49 14-55 4-5 16-41 25-80 10-38 21-74 25-78 20-22 23 92 4 154-2 9-1 26 4 39 7 18 12 2 21-71 14-102 19-124 26-117 3 3 0 40-6 84-20 136-17 183 14 184 4 0 7-8 7-17 0-10 4-23 8-30s8 15 9 47c1 33-1 60-5 60s-29-7-57-15c-50-15-81-13-70 4 3 5 1 13-5 16-6 4-8 16-5 26 4 11 1 26-5 34-9 10-9 15-2 15 6 0 9 7 6 15-4 8-1 15 5 15s11-11 11-25c0-34 20-32 21 3 2 25 2 25 6 3 3-13 13-26 24-28 10-3 19-10 19-15s12-8 27-6c23 3 29 9 35 43 3 22 14 60 22 84 21 58 21 58-19 53-21-3-35 0-35 7 0 6 16 11 35 11 36 0 47 13 19 24-12 5-14 13-9 33 4 17 2 29-7 34-8 5-9 9-2 9s9 11 6 25c-2 14-11 25-18 25-19 0-18 16 2 24 26 10 7 23-27 18-22-3-30-1-25 7 4 6 11 9 16 6 13-8 40 6 40 21 0 8-10 14-22 15h-23l23 9c17 7 22 17 22 44 0 44 9 66 26 66 16 0 33-30 36-65 2-25 4-26 53-21l50 5-44-12c-64-18-66-38-4-32 47 5 47 4 13-6-19-6-41-13-47-15-7-2-13-8-13-14 0-8 15-9 46-4 59 8 53-11-6-21-41-7-51-19-25-29 8-3 12-12 9-21-5-12 0-14 27-10s30 3 14-4c-11-5-30-10-42-10-24-1-34-25-30-71 2-22 6-25 42-23 37 2 33-1-22-13-22-4-23-9-23-91v-86l21 19c49 44 139 139 139 146 0 5 5 8 10 8 6 0 4-13-5-30-17-34-20-70-4-70 5 0 7-5 4-11-5-7 14-9 56-7l62 3 24 70c13 39 28 72 33 73 6 2 8 8 5 13s1 31 9 59l15 50-37 2c-36 1-36 1 8 7 37 5 45 9 43 26-1 17 17 134 32 203l5 22-217-2c-168-2-217-6-216-15 2-7-2-13-7-13-6 0-10 6-10 14 0 21-907 18-915-2zm81-17c-3-8 2-19 12-24 9-5 14-13 10-17-4-3-3-14 2-23 8-16 13-43 26-143 3-21 3-38 0-38-4 0-23 72-31 120-2 14-13 51-23 83-16 48-17 57-5 57 9 0 13-6 9-15zm282-33c2-7-6-12-17-12-21 0-27 11-14 24 9 9 26 2 31-12zm842-32c11-8 7-10-17-8-17 1-29 6-27 10 7 11 26 10 44-2zm44-42c-3-5-24-7-47-7-23 1-52-1-64-5s-24-3-26 2c-3 4 8 9 26 10 17 2 32 4 33 5 7 7 82 1 78-5zm56-27c0-10-39-17-135-25-27-2-62-7-77-11-20-5-28-3-28 6 0 7 3 9 6 6 4-3 14-2 23 3 10 5 57 11 105 14 48 2 90 7 94 10 8 9 12 7 12-3zm-540-11c-8-5-24-9-35-9-16 1-16 2 5 9 35 11 48 11 30 0zm23-31c-10-10-136-40-163-38-11 1 98 32 170 48 2 1-1-4-7-10zm57-39c-8-6-24-10-35-10s-30-3-42-6c-14-4-23-2-23 5 0 6 15 11 33 12 17 0 41 4 52 8 25 10 35 3 15-9zm180 0c-19-13-30-13-30 0 0 6 10 10 23 10 18 0 19-2 7-10zm-330-32c-25-4-49-6-55-4-17 6 59 23 80 17 14-3 6-7-25-13zm119-12c-10-10-59-14-59-5 0 5 14 9 32 9 17 0 29-2 27-4zm-379-83c0-7 7-13 15-13s15-6 15-14c0-7 7-19 15-26s12-16 9-21 8-9 24-9c29 0 29 1 27 44-2 24-6 49-9 54-3 6-1 12 6 14 16 6 70-21 63-31-2-5 4-16 15-26s17-22 14-26c-3-5 5-9 18-10 13 0 17-3 11-6-10-3-8-9 4-21 16-16 14-18-24-26-31-6-49-5-74 8-17 9-49 16-69 16-35 0-39 3-59 50-12 28-25 50-30 50-4 0-8 6-8 13 0 6-4 21-8 32-5 14 1 11 19-10 14-16 25-36 26-42zm-178 10c-6-2-10-9-7-13 6-10-34-35-42-26-7 7 38 46 52 45 6 0 4-3-3-6zm392-188c-4-8-1-15 5-15s11-8 11-17c0-15-1-15-13 2-10 12-22 16-40 13s-24-1-20 8c2 7 14 15 26 17s25 5 29 6c4 0 5-6 2-14zm-625-60c0-5-6-1-14 9-8 11-15 24-15 30 0 5 7 1 15-10 8-10 14-23 14-29zm608-1c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm-521-30c7-37-4-26-16 16-7 23-6 30 1 23 5-5 12-23 15-39zm-41 15c-4-6-10-8-13-5s-11 1-19-5c-8-8-13-8-13-1 0 11 16 20 38 21 7 1 10-4 7-10zm805-39c0-5-9-14-20-20-16-8-20-8-20 4 0 8 8 17 18 19 9 3 18 5 20 6 1 0 2-3 2-9zm-102-77c1-35-2-52-7-43-9 16-7 100 3 100 2 0 4-26 4-57zm-472-50c-3-8-6-21-6-29s-4-14-10-14c-5 0-10 16-10 35 0 27 3 33 16 28 8-3 13-12 10-20zm498-104c9-57 2-59-11-4-6 25-7 45-3 45s10-19 14-41z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1834 2653c4-38 9-101 11-142 3-44 10-78 18-83s7-8-5-8c-9 0-29 11-44 25s-33 25-40 25c-26 0-14-15 31-40 24-13 47-30 50-38 3-7 9-11 14-8 5 4 42-10 82-29 41-19 67-35 59-35s-41 13-73 30c-53 27-87 30-87 9 0-5 15-13 33-18l32-9-39-1c-32-1-37-3-27-13 6-7 16-14 21-14 31-4 32-7 5-13-23-6-36-3-55 15-42 37-95 59-70 29 16-19 90-60 125-69 26-7 26-8 10-26-9-10-14-24-10-29 10-17-5-52-18-44-6 4-21 7-34 8-12 0-32 11-43 23s-28 22-38 22c-20 0 96-80 118-81 10 0 8-3-5-8-18-7-61 4-75 19-13 13-50 29-50 22 0-5 11-15 25-22s25-17 25-22c0-4 9-8 19-8s21-7 25-15c8-23-17-18-63 12-36 24-43 33-40 60 0 4-8 10-18 14-17 7-17 8 0 8 12 1 17 10 18 29 0 15 2 43 4 62s-1 41-7 48c-7 8-7 12 1 12 6 0 11 11 11 24 0 21-4 24-28 21-21-3-33 3-46 21-10 13-23 21-28 18s-15-1-22 5c-9 8-13 7-13-4 0-8 4-15 8-15s10-7 13-16c5-14 4-15-9-4-22 18-28 7-12-23 8-15 17-24 20-20 4 3 7 1 7-5 0-14-16-16-24-3-3 5-15 11-27 14-16 4-19 2-15-10 4-9 0-23-8-32-13-15-20-46-17-79 1-10 6-10 24-2 17 9 16 6-5-10-34-26-36-44-5-35 19 6 18 3-8-19-30-25-21-35 16-16 34 19 20 2-25-30-46-31-98-39-126-19-11 8-8 9 13 4 31-6 67 1 67 15 0 4-15 6-32 5-18-2-46-3-61-4-16-1-26-5-22-11s-11-10-37-10c-24 0-60-3-80-6l-38-7v-117c0-92-3-120-15-130-8-7-15-29-15-49 0-26 3-32 9-21 6 8 7 18 5 22-3 4-1 8 4 8s13-25 17-55c3-30 11-55 16-55s6 12 3 28c-11 46 7 17 21-35l13-48 2 50 2 50 10-40c5-22 7-50 5-62-5-27 11-20 23 11 8 19 9 19 9-7 1-32 43-56 66-37 9 8 14 7 18-2 3-9 13-6 33 12l29 25-24-27c-14-16-22-31-19-34 4-3 38-6 76-7 46-1 65-5 55-11-17-9-157-1-218 14-32 7-41 6-48-6-4-7-14-14-20-14-7 0-13-9-13-20s4-20 9-20 4-7-3-15c-9-11-10-15-1-15 8 0 10-8 6-19-4-12 5-37 24-68 16-26 32-61 35-78 6-29 6-29-4-5-14 32-41 61-51 55-4-3-11-35-15-71-4-46-13-73-26-86-16-16-17-22-8-28s28 9 58 46c42 52 47 54 92 54 60 0 96 26 110 82 6 22 28 61 48 87s50 68 67 95c23 37 46 56 105 88 41 23 94 54 117 70 23 15 45 28 50 28 11 0 163 77 184 93 8 7 39 47 68 90l52 77-2 117c-1 95-4 120-18 131-15 13-15 13 2 8 16-5 17 10 17 229v235h-342l6-67zm123-259c-2-2-20 3-40 10s-34 15-31 19c3 3 21-2 40-10 19-9 33-18 31-19zm-303-19c3-9 0-15-9-15-8 0-15 7-15 15s4 15 9 15 11-7 15-15zm63-11c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm336-11c9-3 17-9 17-14s-15-2-32 7c-39 19-51 30-23 19 11-4 28-10 38-12zm-366-20c-3-3-11-2-17 2-9 6-9 10 1 16 14 8 27-7 16-18zm378-81c-17-4-111 36-125 54-7 7 22-1 64-19 41-18 69-33 61-35zm-105 7c0-5 4-8 9-4 5 3 12 1 16-5 3-5 15-10 25-10s25-7 34-15c8-8 19-15 25-15s11-4 11-9c0-9-45 6-89 29-9 5-24 11-33 14-19 6-25 26-8 26 6 0 10-5 10-11zm60-75c0-16-16-19-25-4-15 25-32 9-30-29s2-38-25-28c-15 6-27 16-27 23 0 10 5 10 20 2 13-7 17-7 13 0-3 6-2 13 4 17s8 10 5 15c-8 13 25 28 46 23 11-3 19-12 19-19zm-475-80c-35-30-85-58-92-50-3 2 0 13 6 23s11 15 11 12 21 4 48 17c60 30 64 30 27-2zm205-6c0-3 14-9 30-13 17-4 30-11 30-16 0-23-64 5-85 38-15 23-15 23 5 11 11-7 20-16 20-20zm-109 5c1-10 2-25 3-33 0-9 10-14 21-13 20 2 20 1 0-13-18-13-21-12-36 18-16 32-16 58 2 58 5 0 10-8 10-17zm-18-78c-3-9-16-13-34-11-22 3-27 0-19-9 15-18 0-26-24-13-19 10-20 9-8-5 12-13 10-18-7-29-21-13-29-30-12-25 5 1 9-2 10-8 1-5-9-10-21-10-13-1-28-4-33-7-6-4-17-3-24 1-8 6-3 10 18 14 17 4 31 11 31 17 0 5-6 9-12 8-7-2-12 5-12 15 2 14-1 15-12 6-8-6-11-16-7-23s2-7-7 1c-10 9-9 15 4 29 12 12 14 20 7 27-6 6-11 14-11 18 0 12 74 46 89 41 8-3 11 0 7 7-5 7 1 11 14 11 11 0 23 7 27 16 5 12 10 7 24-20 10-21 15-44 12-51zm342 55c17-18 17-20 2-14-9 3-17 10-17 15 0 4-7 5-17 2-11-4-14-3-9 5 10 17 20 15 41-8zm-33-28c20-20 4-22-22-2-19 14-21 18-7 16 9-1 22-7 29-14zm-695-54c-2-13-4-5-4 17-1 22 1 32 4 23 2-10 2-28 0-40zm537 46c17-6 22-24 8-24-5 0-17 7-28 15-19 15-8 20 20 9zm-144-54c-8-5-11-10-5-10 5 0-7-9-28-20-41-22-57-25-57-9 0 5 5 7 10 4 6-3 25 5 43 19 17 14 37 26 42 26 6 0 3-5-5-10zm-314-106c-7-36-16-43-16-12 0 22 7 38 17 38 2 0 1-12-1-26zm-79-36c-2-13-4-5-4 17-1 22 1 32 4 23 2-10 2-28 0-40zm115-323c-4-14-53-9-69 8-12 11-7 13 29 8 24-3 42-10 40-16zM146 1408c8-12 118-86 126-84 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-24-25-93-73-147-23-26-47-65-53-87-10-38-33-73-77-117-19-19-23-33-23-86 0-35 4-79 10-98 13-47 18-130 8-124-4 3-8-4-8-15 0-30 28-15 32 17l3 27 25-30c14-16 46-51 72-76 27-26 48-50 48-54 0-9 27-35 37-35 5 0 19-13 31-30 19-25 28-29 62-26 22 2 45 8 52 13 21 17 143 34 187 27 23-4 41-3 41 2 0 11 151 12 168 1 7-5 9-13 6-19-4-6 2-5 15 1 12 7 27 21 34 31 6 11 15 20 19 20 5 0-7-21-25-47-19-27-37-56-40-66-5-13-18-17-54-18-26 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-14-6-40 15-31 25 3 2-1 5-8 5-10 0-12-10-6-41 4-23 12-69 18-104 25-140 95-259 184-316 92-58 140-71 262-71 104 0 114 2 175 32 81 40 154 103 177 151 9 20 23 43 31 51 19 20 33 61 26 73-5 7-2 8 6 3 9-6 10-1 5 16-5 18-4 20 4 9s15-3 35 40c14 30 26 61 26 68 0 8 23 39 51 70 28 32 67 89 87 127 30 57 36 81 36 130 0 71-16 106-85 186-27 31-49 63-49 70 0 8-4 20-9 28-8 12-13 12-35-2-47-31-91-12-79 33 4 15-8 20-69 34-58 13-92 29-158 73-96 65-206 123-229 122-12 0-11-3 4-10 18-8 17-9-4-5-16 3-46-6-82-25l-57-31-48 25c-53 27-124 86-124 103 0 5-24 14-54 20-30 5-52 6-50 2zm158-430c-2-18-5-40-6-48-3-26 14-90 24-90 5 0 7-4 4-9-4-5 4-7 16-3 18 4 20 2 14-14-4-10-4-15 0-11 10 9 34-11 30-26-1-7-1-9 1-4 3 4 9 7 14 7 6 0 8-4 4-9-3-5-1-12 5-16 6-3 13 1 16 9 4 11 12 13 29 6 13-5 26-6 31-2 4 4 3 1-1-7-6-11-4-13 11-8 18 7 18 6-1-8-13-11-32-14-57-11-25 4-36 1-34-7 3-20 17-38 26-32 4 3 15-6 24-20s24-25 32-25c10 0 14-6 11-14-4-9-1-13 6-10 7 2 24-7 37-21s29-25 36-25c6 0 26-13 44-30 18-16 38-30 45-30 24 0 27-20 3-21-62-2-115 1-138 6-14 4-32 7-40 8s-25 8-37 15c-13 7-23 10-23 7 0-4-7 1-16 9-8 9-22 16-29 16-8 0-17 5-21 12-5 7-2 9 7 3 8-4-1 7-18 24-18 18-33 33-33 35s-11 34-25 72-25 89-25 114c0 47 17 168 26 182 9 15 11 8 8-24zm351-58c-3-5-13-10-21-10s-14 5-14 10c0 6 9 10 21 10 11 0 17-4 14-10zm422-62c3-48 12-83 21-83 22 0 21-12-3-25-14-7-25-19-25-27 0-7-6-13-13-13s-23-11-35-25-28-25-34-25c-10 0-10 2-1 8 16 10 45 79 50 117 6 55 38 112 40 73zM818 709c2-12-6-16-33-16-33 0-45 14-28 31 13 12 58 2 61-15zm86-97c-6-4-10-15-9-24 2-11-2-15-11-11-8 3-14 8-14 11 0 11 33 42 39 37 3-4 1-9-5-13zm-99-23c5-5 0-9-14-9-12 0-30 8-39 17-16 15-15 16 13 9 17-4 34-12 40-17zm195-278c0-10-8-26-19-35-17-15-19-15-25-1-7 19 22 67 35 59 5-3 9-13 9-23zm-113-27c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#53463c",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M255 2702c-3-8-5-28-5-45 0-18-14-75-32-127-17-52-41-133-54-180-21-81-23-85-48-82-33 4-33-12-1-50 19-23 24-38 20-57-4-20 5-46 33-96 55-101 105-176 136-204 22-21 25-30 20-58-3-18-3-45 0-59 6-21 9-24 21-14s15 9 15-4c0-15 2-15 30-1 18 9 28 20 24 27-5 7-2 9 8 5 10-3 19 3 27 19 11 24 11 24-18 9-16-8-31-20-33-27-2-6-10 3-18 22-15 36-15 36 66 97l29 22-33-12c-27-10-35-9-42 2-4 8-6 20-3 28 4 9 0 11-11 7-18-7-22-24-6-24 6 0 10-8 10-17 0-14-3-13-17 6-15 23-15 25 5 41 18 15 20 22 12 51-6 19-10 35-10 36s9 0 21-2c15-3 19 0 15 10-8 20-14 42-9 33 3-5 13-8 24-8 22 0 79 73 79 102 0 10 4 18 9 18s12 8 15 18c3 9 3-26 0-78-14-226-14-296-1-270 6 14 15 27 19 30s9 26 11 52c2 25 8 51 12 58 5 8 10 32 11 54 1 23 5 72 9 109l6 68-30 12c-31 12-42 27-18 27 13 0 39 34 47 63s24 23 46-20c12-22 37-63 55-90 19-28 52-81 74-117 22-37 50-81 62-98l23-32v27c0 15 4 27 10 27 5 0 7 16 4 36-3 29-1 35 11 31 8-4 17-2 20 3 4 6 12 10 18 10 8 0 7-3-2-9-11-7-11-10 2-17 16-9 40-112 30-128-4-5-1-6 5-2 7 4 12 0 12-10s2-15 5-12c4 3-1 43-9 89s-12 86-10 88c8 8 14-7 19-45 3-21 8-59 11-84 4-25 10-49 14-55 4-5 16-41 25-80 10-38 21-74 25-78 20-22 23 92 4 154-2 9-1 26 4 39 7 18 12 2 21-71 14-102 19-124 26-117 3 3 0 40-6 84-20 136-17 183 14 184 4 0 7-8 7-17 0-10 4-23 8-30s8 15 9 47c1 33-1 60-5 60s-29-7-57-15c-50-15-81-13-70 4 3 5 1 13-5 16-6 4-8 16-5 26 4 11 1 26-5 34-9 10-9 15-2 15 6 0 9 7 6 15-4 8-1 15 5 15s11-11 11-25c0-34 20-32 21 3 2 25 2 25 6 3 3-13 13-26 24-28 10-3 19-10 19-15s12-8 27-6c23 3 29 9 35 43 3 22 14 60 22 84 21 58 21 58-19 53-21-3-35 0-35 7 0 6 16 11 35 11 36 0 47 13 19 24-12 5-14 13-9 33 4 17 2 29-7 34-8 5-9 9-2 9s9 11 6 25c-2 14-11 25-18 25-19 0-18 16 2 24 26 10 7 23-27 18-22-3-30-1-25 7 4 6 11 9 16 6 13-8 40 6 40 21 0 8-10 14-22 15h-23l23 9c17 7 22 17 22 44 0 44 9 66 26 66 16 0 33-30 36-65 2-25 4-26 53-21l50 5-44-12c-64-18-66-38-4-32 47 5 47 4 13-6-19-6-41-13-47-15-7-2-13-8-13-14 0-8 15-9 46-4 59 8 53-11-6-21-41-7-51-19-25-29 8-3 12-12 9-21-5-12 0-14 27-10s30 3 14-4c-11-5-30-10-42-10-24-1-34-25-30-71 2-22 6-25 42-23 37 2 33-1-22-13-22-4-23-9-23-91v-86l21 19c49 44 139 139 139 146 0 5 5 8 10 8 6 0 4-13-5-30-17-34-20-70-4-70 5 0 7-5 4-11-5-7 14-9 56-7l62 3 24 70c13 39 28 72 33 73 6 2 8 8 5 13s1 31 9 59l15 50-37 2c-36 1-36 1 8 7 37 5 45 9 43 26-1 17 17 134 32 203l5 22-217-2c-168-2-217-6-216-15 2-7-2-13-7-13-6 0-10 6-10 14 0 21-907 18-915-2zm81-17c-3-8 2-19 12-24 9-5 14-13 10-17-4-3-3-14 2-23 8-16 13-43 26-143 3-21 3-38 0-38-4 0-23 72-31 120-2 14-13 51-23 83-16 48-17 57-5 57 9 0 13-6 9-15zm282-33c2-7-6-12-17-12-21 0-27 11-14 24 9 9 26 2 31-12zm842-32c11-8 7-10-17-8-17 1-29 6-27 10 7 11 26 10 44-2zm44-42c-3-5-24-7-47-7-23 1-52-1-64-5s-24-3-26 2c-3 4 8 9 26 10 17 2 32 4 33 5 7 7 82 1 78-5zm56-27c0-10-39-17-135-25-27-2-62-7-77-11-20-5-28-3-28 6 0 7 3 9 6 6 4-3 14-2 23 3 10 5 57 11 105 14 48 2 90 7 94 10 8 9 12 7 12-3zm-540-11c-8-5-24-9-35-9-16 1-16 2 5 9 35 11 48 11 30 0zm23-31c-10-10-136-40-163-38-11 1 98 32 170 48 2 1-1-4-7-10zm57-39c-8-6-24-10-35-10s-30-3-42-6c-14-4-23-2-23 5 0 6 15 11 33 12 17 0 41 4 52 8 25 10 35 3 15-9zm180 0c-19-13-30-13-30 0 0 6 10 10 23 10 18 0 19-2 7-10zm-330-32c-25-4-49-6-55-4-17 6 59 23 80 17 14-3 6-7-25-13zm119-12c-10-10-59-14-59-5 0 5 14 9 32 9 17 0 29-2 27-4zm-379-83c0-7 7-13 15-13s15-6 15-14c0-7 7-19 15-26s12-16 9-21 8-9 24-9c29 0 29 1 27 44-2 24-6 49-9 54-3 6-1 12 6 14 16 6 70-21 63-31-2-5 4-16 15-26s17-22 14-26c-3-5 5-9 18-10 13 0 17-3 11-6-10-3-8-9 4-21 16-16 14-18-24-26-31-6-49-5-74 8-17 9-49 16-69 16-35 0-39 3-59 50-12 28-25 50-30 50-4 0-8 6-8 13 0 6-4 21-8 32-5 14 1 11 19-10 14-16 25-36 26-42zm-178 10c-6-2-10-9-7-13 6-10-34-35-42-26-7 7 38 46 52 45 6 0 4-3-3-6zm392-188c-4-8-1-15 5-15s11-8 11-17c0-15-1-15-13 2-10 12-22 16-40 13s-24-1-20 8c2 7 14 15 26 17s25 5 29 6c4 0 5-6 2-14zm-625-60c0-5-6-1-14 9-8 11-15 24-15 30 0 5 7 1 15-10 8-10 14-23 14-29zm608-1c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm-521-30c7-37-4-26-16 16-7 23-6 30 1 23 5-5 12-23 15-39zm-41 15c-4-6-10-8-13-5s-11 1-19-5c-8-8-13-8-13-1 0 11 16 20 38 21 7 1 10-4 7-10zm805-39c0-5-9-14-20-20-16-8-20-8-20 4 0 8 8 17 18 19 9 3 18 5 20 6 1 0 2-3 2-9zm-102-77c1-35-2-52-7-43-9 16-7 100 3 100 2 0 4-26 4-57zm-472-50c-3-8-6-21-6-29s-4-14-10-14c-5 0-10 16-10 35 0 27 3 33 16 28 8-3 13-12 10-20zm498-104c9-57 2-59-11-4-6 25-7 45-3 45s10-19 14-41z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1834 2653c4-38 9-101 11-142 3-44 10-78 18-83s7-8-5-8c-9 0-29 11-44 25s-33 25-40 25c-26 0-14-15 31-40 24-13 47-30 50-38 3-7 9-11 14-8 5 4 42-10 82-29 41-19 67-35 59-35s-41 13-73 30c-53 27-87 30-87 9 0-5 15-13 33-18l32-9-39-1c-32-1-37-3-27-13 6-7 16-14 21-14 31-4 32-7 5-13-23-6-36-3-55 15-42 37-95 59-70 29 16-19 90-60 125-69 26-7 26-8 10-26-9-10-14-24-10-29 3-6 3-20 0-32-5-15-10-17-20-9-9 8-15 8-20 0-3-6-12-8-18-4-7 3-3-2 7-10 11-9 27-16 35-17 11 0 10-3-4-8-18-7-61 4-75 19-3 3-16 11-30 19-20 11-19 7 8-18 18-17 41-31 51-31s18-7 18-15c0-21-30-19-57 5-23 20-40 26-40 14s29-33 54-40c29-7 34-19 11-28-8-3-15-1-15 4 0 6-3 9-7 8-5-2-19 5-33 15-13 9-21 17-16 17s3 7-4 15c-8 10-9 15-1 15 7 0 8 8 1 25-5 14-6 25-2 26 4 0-2 4-13 9-17 7-17 9-2 9 12 1 17 10 18 29 0 15 2 43 4 62s-1 41-7 48c-7 8-7 12 1 12 6 0 11 11 11 24 0 21-4 24-28 21-21-3-33 3-46 21-10 13-23 21-28 18s-15-1-22 5c-9 8-13 7-13-4 0-8 4-15 8-15s10-7 13-16c5-14 4-15-9-4-22 18-28 7-12-23 8-15 17-24 20-20 4 3 7 1 7-5 0-7-7-12-15-12s-15 4-15 9-9 11-21 14c-16 4-19 2-15-10 4-9 0-23-8-32-13-15-20-46-17-79 1-10 6-10 24-2 17 9 16 6-5-10-34-26-36-44-5-35 19 6 18 3-8-19-30-25-21-35 16-16 34 19 20 2-25-30-46-31-98-39-126-19-11 8-8 9 13 4 31-6 67 1 67 15 0 4-15 6-32 5-18-2-46-3-61-4-16-1-26-5-22-11s-11-10-37-10c-24 0-60-3-81-6l-37-7 2-112c3-96 0-116-14-132-10-11-18-35-18-54 0-24 3-30 9-19 6 8 7 18 5 22-3 4-1 8 5 8 5 0 11-15 13-32 2-18 7-31 11-28 11 7 36-39 38-70 1-14 5-5 8 20l7 45 8-52c8-53 21-68 29-35 3 11 5 7 6-10 1-19 8-29 31-36 20-8 32-8 36 0 4 7 9 6 15-3 6-11 14-8 36 11l28 25-24-27c-22-26-23-28-6-34 10-4 44-8 76-8 35-1 52-4 43-9-18-10-164-2-219 12-32 8-41 7-48-5-4-7-14-14-20-14-7 0-13-9-13-20s4-20 9-20 4-7-3-15c-9-11-10-15-1-15 8 0 10-8 6-19-4-12 5-37 24-68 16-26 32-61 35-78 6-29 6-29-4-5-14 32-41 61-51 55-4-3-11-35-15-71-4-46-13-73-26-86-16-16-17-22-8-28s28 9 58 46c42 52 47 54 92 54 60 0 96 26 110 82 6 22 28 61 48 87s50 68 67 95c23 37 46 56 105 88 41 23 94 54 117 70 23 15 45 28 50 28 11 0 163 77 184 93 8 7 39 47 68 90l52 77-2 117c-1 95-4 120-18 131-15 13-15 13 2 8 16-5 17 10 17 229v235h-342l6-67zm123-259c-2-2-20 3-40 10s-34 15-31 19c3 3 21-2 40-10 19-9 33-18 31-19zm-303-19c3-9 0-15-9-15-8 0-15 7-15 15s4 15 9 15 11-7 15-15zm63-11c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm336-11c9-3 17-9 17-14s-15-2-32 7c-39 19-51 30-23 19 11-4 28-10 38-12zm-363-8c0-8-7-15-15-15-26 0-18 20 13 29 1 1 2-6 2-14zm-46-64c16-17 16-21 4-21-9 0-18 9-21 21-4 13-10 18-18 13-7-4-10-3-6 3s-2 13-13 16-20 10-20 17c0 13 45-16 74-49zm421-29c-17-4-111 36-125 54-7 7 22-1 64-19 41-18 69-33 61-35zm-105 7c0-5 4-8 9-4 5 3 12 1 16-5 3-5 15-10 25-10s25-7 34-15c8-8 19-15 25-15s11-4 11-9c0-9-45 6-89 29-9 5-24 11-33 14-19 6-25 26-8 26 6 0 10-5 10-11zm-272-32c5-24-15-21-28 4-10 18-9 20 7 17 10-2 19-11 21-21zm332-43c0-16-16-19-25-4-15 25-32 9-30-29s2-38-25-28c-15 6-27 16-27 23 0 10 5 10 20 2 13-7 17-7 13 0-3 6-2 13 4 17s8 10 5 15c-8 13 25 28 46 23 11-3 19-12 19-19zm-475-80c-35-30-85-58-92-50-3 2 0 13 6 23s11 15 11 12 21 4 48 17c60 30 64 30 27-2zm96-1c1-10 2-25 3-33 0-8 9-15 18-15s19-4 22-8 3-5 0-2c-4 2-14 0-24-5-13-7-20-2-32 23-15 32-14 57 3 57 5 0 10-8 10-17zm-18-78c-3-9-16-13-34-11-22 3-27 0-19-9 15-18 0-26-24-13-19 10-20 9-8-5 12-13 10-18-7-29-21-13-29-30-12-25 5 1 9-2 10-8 1-5-11-11-26-11-16-1-28-3-28-4s-10-3-22-4c-32-4-19 10 17 17 16 4 30 11 30 17 0 5-6 9-12 8-7-2-12 5-12 15 2 14-1 15-12 6-8-6-11-16-7-23s2-7-7 1c-10 9-9 15 4 29 12 12 14 20 7 27-6 6-11 14-11 18 0 12 74 46 89 41 8-3 11 0 7 7-5 7 1 11 14 11 11 0 23 7 27 16 5 12 10 7 24-20 10-21 15-44 12-51zm342 55c17-18 17-20 2-14-9 3-17 10-17 15 0 4-7 5-17 2-11-4-14-3-9 5 10 17 20 15 41-8zm-33-28c20-20 4-22-22-2-19 14-21 18-7 16 9-1 22-7 29-14zm-695-54c-2-13-4-5-4 17-1 22 1 32 4 23 2-10 2-28 0-40zm547 37c8-8 21-15 28-16 9 0 9-2 1-5-11-5-73 22-73 31 0 11 30 4 44-10zm-154-45c-8-5-11-10-5-10 5 0-7-9-28-20-41-22-57-25-57-9 0 5 5 7 10 4 6-3 25 5 43 19 17 14 37 26 42 26 6 0 3-5-5-10zm-314-106c-7-36-16-43-16-12 0 22 7 38 17 38 2 0 1-12-1-26zm-77-21c-1-34-2-35-9-13-11 36-11 50 0 50 6 0 10-17 9-37zm113-338c-4-14-53-9-69 8-12 11-7 13 29 8 24-3 42-10 40-16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1750 2210c0-5 9-14 20-20 16-8 18-8 14 4-6 17-34 30-34 16zM893 1927c4-10 7-25 7-33 0-9 5-12 10-9 6 3 10 2 10-3 0-6 7-13 16-16 14-5 15-4 5 8-8 10-9 16-1 21 5 3 10 12 10 18 0 7-4 6-10-3-9-13-14-11-32 10-15 18-19 20-15 7zM146 1408c8-12 118-86 126-84 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-24-25-93-73-147-23-26-47-65-53-87-10-38-33-73-77-117-19-19-23-33-23-86 0-35 4-79 9-98 13-48 21-131 12-126-4 3-7-4-8-14-1-13 3-17 13-13 8 3 14 18 14 34s5 29 12 29c6 0 9-3 5-6-6-6 31-52 78-96 17-15 40-37 53-50 35-34 75-58 85-51 5 3 18-5 28-18 16-21 20-22 43-10 14 8 24 17 22 20s49 6 115 6c65 0 119 4 119 8s25 6 56 3c31-2 70 0 85 4 22 6 29 5 29-5 0-7 7-15 15-19 8-3 15-2 15 2s14 16 31 26l30 18-36-48c-21-27-41-59-46-71-7-19-16-23-56-24-27 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-17-7-39 16-28 28 4 5 1 5-6 0-9-5-12-20-9-44 35-268 118-397 302-467 38-15 76-19 160-19 104 0 114 2 175 32 81 40 154 103 177 151 9 20 23 43 31 51 19 20 33 61 26 73-4 6-2 8 4 4 11-6 72 105 72 131 0 8 23 40 51 71 57 64 115 171 125 230 9 60-19 133-81 206-30 35-57 75-61 90-7 31-17 33-42 8-11-11-28-21-40-24-17-5-23 0-33 31-17 51-27 61-65 61-43 0-111 33-193 93-62 46-73 51-100 48-7-2-10 3-6 9 7 11-68 50-95 49-8 0 3-7 25-15 41-15 77-41 40-29-11 4-29 11-41 17-21 10-86-6-140-33-17-9-31-6-70 14-53 27-124 86-124 103 0 5-24 14-54 20-30 5-52 6-50 2zm498-334c58-4 106-11 106-15 0-12-48-11-140 2-74 11-112 17-118 18-2 1 0 6 3 11 4 7 13 7 24 0 10-5 66-12 125-16zM309 972c-16-68 0-132 34-132 13 0 26-9 32-22 7-17 26-27 72-38 34-9 65-19 68-22 11-11-48-36-75-32-22 3-23 2-7-7 10-6 27-9 37-6 16 4 16 2 4-22-13-24-12-27 8-36 12-5 35-22 51-37 15-16 34-28 42-28s15-4 15-10c0-5 7-10 15-10s15-5 15-11c0-19 70-41 112-34 73 13 59 59-19 64-7 1-10 8-7 16 5 13 9 13 22 3 10-8 13-9 9-1-7 11 56 10 95-3 19-6 47 7 74 33 17 17 17 17 12-5l-6-22 29 21c17 11 37 33 47 47 9 15 20 29 23 32 4 3 13 34 20 70 6 36 21 78 32 93 10 15 17 36 14 47-3 10 1 21 8 24 18 7 27-5 15-19-6-7-11-36-11-66-1-43 2-56 21-71 12-10 33-18 46-18s24-4 24-9c0-4-10-8-22-8-41-1-48-3-48-14 0-6 11-20 26-31 14-11 22-23 19-26-3-4-10-1-14 6-7 12-33 17-74 13-10 0-15-5-12-11 3-5-2-10-12-11-10 0-13-3-5-6 6-2 12-12 11-21 0-9-3-12-5-6-6 15-50 6-66-13-10-13-8-18 10-33 27-22 29-34 3-20-27 14-54 13-77-4-15-12-17-17-6-27 16-17 16-34-1-20-13 10-79 7-98-4-4-3-6-12-2-20 3-8 0-15-7-15-6 0-8 4-5 10 12 20-134-4-147-24-5-7-8-4-8 7 0 12-4 15-12 11-7-4-27-7-46-6-19 2-41-3-50-10-13-11-15-10-9 4 5 13 1 18-16 18-67 2-87 6-83 17 3 6-6 14-20 17-13 4-24 10-24 16 0 5-11 7-25 4-19-3-23-1-19 11 4 8 1 15-7 15-7 0-9 3-6 6 4 4-3 15-14 25-12 10-18 23-14 28 3 6 1 11-5 11-8 0-8 6 0 21 7 11 9 23 6 27-3 3-6 0-6-7 0-9-5-9-21-1-19 11-19 13-4 24 12 9 14 17 7 36-5 14-12 24-16 23-3-2-12-3-18-2-7 0-4 4 7 8 11 5 20 12 21 17 9 125 20 193 32 212 21 32 24 22 11-36zm252-18c10-13 10-17-2-25-22-14-32-11-26 11 3 10 0 21-7 24-6 2-4 5 5 5 9 1 22-6 30-15zm119-4c12-8 12-10 1-10-8 0-19-7-26-17s-19-14-29-10c-15 6-15 8 1 27 19 22 31 24 53 10zm540-87c0-12 6-28 13-35 12-14 24-48 12-36-4 4-18 3-31-2-25-10-34 3-13 16 8 4 9 25 5 58-4 34-2 46 4 36 5-8 10-25 10-37zM736 720c0-23-7-25-24-8s-15 28 6 28c11 0 18-7 18-20zm97 11c38-1 50-17 21-28-9-3-20 0-26 8-8 11-9 11-5-3 4-10-1-18-14-21-23-6-59 2-59 13 0 22 13 38 28 35 9-2 34-4 55-4zm252-98l18-28-21 19c-12 11-22 23-22 28 0 14 7 9 25-19zm-85-324c0-9-8-24-19-33-16-15-19-15-24-2-8 21 25 79 35 63 4-7 8-19 8-28zm-113-25c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#883b3b",
    stroke: "none",
    d: "M146 1408c8-12 118-86 126-84 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-24-25-93-73-147-23-26-47-65-53-87-10-38-33-73-77-117-19-19-23-33-23-86 0-35 4-79 9-98 15-54 23-132 13-127-4 3-8-3-9-13-1-13 3-17 13-13 8 3 14 18 14 34s2 29 5 29c10 0 64-65 65-77 0-7 3-13 8-13 4 0 33-25 66-55 32-30 63-56 70-56 6-1 16-2 23-3 7 0 19-10 27-21 13-17 17-18 40-6 14 8 24 17 22 20s48 7 112 9c232 6 268 8 280 16 7 4 12 1 12-8 0-22 16-20 57 5l35 22-37-49c-20-26-41-59-46-71-7-19-16-23-56-24-27 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-17-7-39 16-28 28 4 5 1 5-6 0-9-5-12-20-9-44 35-268 118-397 302-467 38-15 76-19 160-19 104 0 114 2 175 32 81 40 154 103 177 151 9 20 23 43 31 51 19 20 33 61 26 73-4 6-2 8 4 4 11-6 72 105 72 131 0 8 23 40 51 71 57 64 115 171 125 230 9 60-19 133-81 206-30 35-57 75-61 90-7 31-17 33-43 7-32-32-63-31-74 4-15 48-34 62-89 68-35 5-65 16-93 36-98 73-145 103-167 106-13 2-43 9-68 15-49 12-97 7-147-16-29-14-34-14-80 9-52 27-123 86-123 103 0 5-24 14-54 20-30 5-52 6-50 2zm434-329c30-4 81-8 113-8 31-1 57-5 57-11 0-13-45-12-140 1-41 6-84 12-94 13-11 2-22 9-24 16-4 10 0 11 14 5 11-4 44-11 74-16zm-265-84c-26-85-11-152 33-148 16 2 25-4 31-21 7-16 25-28 60-40 27-9 57-16 66-16 22 0 14-22-13-36-29-14-42-29-19-21 20 7 23-13 6-30-9-9-5-14 14-18 15-4 29-16 32-26 4-11 19-27 33-36 15-9 51-32 79-51 48-32 56-34 95-26 58 12 64 40 11 49-49 8-68 19-58 35 6 9 30 11 95 6 85-6 89-6 120 21 31 25 32 26 26 5-12-37 19-16 59 39 28 39 38 66 47 126 10 60 16 77 31 81 13 3 18 11 14 28-2 13 2 25 9 28 16 6 28-10 14-19-5-3-10-31-10-61 0-61 22-94 65-94 14 0 25-4 25-9 0-4-10-8-22-8-41-1-48-3-48-14 0-6 11-20 26-31 14-11 22-23 19-26-3-4-10-1-14 6-7 12-33 17-74 13-10 0-15-5-12-11 3-5-2-10-12-11-10 0-13-3-6-6 7-2 13-12 12-21 0-9-3-12-5-6-6 15-50 6-66-13-10-13-8-18 10-33 27-22 29-34 3-20-27 14-54 13-77-4-15-12-17-17-6-27 16-17 16-34-1-20-13 10-79 7-98-4-4-3-6-12-2-20 3-8 0-15-7-15-6 0-8 4-5 10 12 20-134-4-147-24-6-8-8-8-8 0 0 16-90 16-109 1-12-10-14-9-8 5 5 13 1 18-16 18-65 2-87 6-83 16 4 11-60 40-81 36-8-2-10 3-7 13 4 8 1 15-7 15-7 0-9 3-6 6 4 4-3 15-14 25-12 10-18 23-14 28 3 6 2 11-4 11s-8 6-5 14-4 19-16 26c-20 10-20 13-5 24 11 8 14 18 8 33-4 12-11 22-15 22-5 1-14 1-20 2-7 0-4 4 6 8 21 8 33 51 15 51-8 0-8 4 0 13 6 8 13 42 17 77 3 39 13 75 27 95 12 19 23 33 24 31 1-1-4-24-12-51zm246-41c10-13 10-17-2-25-22-14-32-11-26 11 3 10 0 21-7 24-6 2-4 5 5 5 9 1 22-6 30-15zm119-4c12-8 12-10 1-10-8 0-19-7-26-17s-19-14-29-10c-15 6-15 8 1 27 19 22 31 24 53 10zm540-87c0-12 6-28 13-35 12-14 24-48 12-36-4 4-18 3-31-2-25-10-34 3-13 16 8 4 9 25 5 58-4 34-2 46 4 36 5-8 10-25 10-37zM818 734c28-4 52-11 52-16 0-17-71-39-104-32-32 6-66 30-66 46 0 10 45 10 118 2zm267-101l18-28-21 19c-12 11-22 23-22 28 0 14 7 9 25-19zm-85-324c0-9-8-24-19-33-16-15-19-15-24-2-8 21 25 79 35 63 4-7 8-19 8-28zm-113-25c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#1d658b",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1834 2653c4-38 9-101 11-142 3-44 10-78 18-83s7-8-5-8c-9 0-29 11-44 25s-33 25-40 25c-26 0-14-15 31-40 24-13 47-30 50-38 3-7 9-11 14-8 5 4 42-10 82-29 41-19 67-35 59-35s-41 13-73 30c-53 27-87 30-87 9 0-5 15-13 33-18l32-9-39-1c-32-1-37-3-27-13 6-7 16-14 21-14 31-4 32-7 5-13-23-6-36-3-55 15-42 37-95 59-70 29 16-19 90-60 125-69 26-7 26-8 10-26-9-10-14-24-10-29 3-6 3-20 0-32-5-15-10-17-20-9-9 7-16 6-25-4-10-13-7-16 15-22l26-6-23-12c-13-7-22-19-20-29 2-14-1-15-23-7-15 6-33 17-42 26-8 8-18 13-20 10-7-7 14-41 24-39 13 4 43-8 43-17 0-4-7-10-15-14-8-3-15 0-15 6s-3 8-6 5c-8-8-48 19-50 33-1 6-2 12-4 15-1 3-2 20-3 38 0 19-7 35-16 39-14 6-14 7 2 7 12 1 17 10 18 29 0 15 2 43 4 62s-1 41-7 48c-7 8-7 12 1 12 6 0 11 11 11 24 0 20-4 24-27 21-20-2-34 5-50 24-13 15-23 20-23 12 0-10-3-11-14-2-10 8-16 9-21 1-3-5-2-10 3-10 6 0 13-7 16-16 6-15 4-15-11-3-15 13-16 12-10-11 4-14 7-29 7-35 0-5 5-3 10 5 8 13 10 12 10-4 0-13-5-17-20-13-29 8-25-1 23-44 28-25 36-38 26-39-9 0-19 9-22 21-4 13-10 18-18 13-7-4-10-3-6 3s-2 13-13 16c-12 3-20 14-20 25 0 12-5 24-12 28-8 5-9 2-4-11 4-10 1-25-8-34-13-15-20-46-17-79 1-10 6-10 24-2 17 9 16 6-5-10-34-26-36-44-5-35 19 6 18 3-8-19-30-25-21-35 16-16 34 19 20 2-25-30-46-31-98-39-126-19-11 8-8 9 13 4 31-6 67 1 67 15 0 4-15 6-32 5-18-2-46-3-61-4-16-1-26-5-22-11s-11-10-37-10c-24 0-59-3-80-6l-36-6 1-113c2-95-1-116-15-132-10-11-18-35-18-54 0-24 3-30 9-19 6 8 7 18 5 22-3 4-1 8 5 8 5 0 11-15 13-32 2-20 8-32 16-31 6 2 12 2 12 0 0-1 7-20 15-42l14-40 2 40 1 40 12-47c12-51 26-72 27-42 0 14 3 12 11-9 9-27 47-45 67-33 5 3 11 0 14-6 3-9 13-5 33 12l29 25-24-27c-22-26-23-28-6-34 10-4 44-8 76-8 37-1 52-4 42-9-8-5-46-7-84-5-43 3-70 1-73-6s-8-6-14 2c-5 7-27 17-48 22-30 7-41 6-47-6-4-7-14-14-20-14-7 0-13-9-13-20s4-20 9-20 4-7-3-15c-9-11-10-15-1-15 8 0 10-8 6-19-4-12 5-37 24-68 16-26 32-61 35-78 6-29 6-29-4-5-14 32-41 61-51 55-4-3-11-35-15-71-4-46-13-73-26-86-16-16-17-22-8-28s28 9 58 46c42 52 47 54 92 54 60 0 96 26 110 82 6 22 28 61 48 87s50 68 67 95c23 37 46 56 105 88 41 23 94 54 117 70 23 15 45 28 50 28 11 0 163 77 184 93 8 7 39 47 68 90l52 77-2 117c-1 95-4 120-18 131-15 13-15 13 2 8 16-5 17 10 17 229v235h-342l6-67zm123-259c-2-2-20 3-40 10s-34 15-31 19c3 3 21-2 40-10 19-9 33-18 31-19zm-301-19c-3-20-20-20-24-1-2 9 3 16 11 16 9 0 14-7 13-15zm61-11c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm336-11c9-3 17-9 17-14s-15-2-32 7c-39 19-51 30-23 19 11-4 28-10 38-12zm-363-8c0-8-7-15-15-15-26 0-18 20 13 29 1 1 2-6 2-14zm375-93c-17-4-111 36-125 54-7 7 22-1 64-19 41-18 69-33 61-35zm-105 7c0-5 4-8 9-4 5 3 12 1 16-5 3-5 15-10 25-10s25-7 34-15c8-8 19-15 25-15s11-4 11-9c0-9-45 6-89 29-9 5-24 11-33 14-19 6-25 26-8 26 6 0 10-5 10-11zm-273-24c9-26-6-30-27-7l-21 22h21c11 0 23-7 27-15zm333-51c0-16-16-19-25-4-15 25-32 9-30-29s2-38-25-28c-15 6-27 16-27 23 0 10 5 10 20 2 13-7 17-7 13 0-3 6-2 13 4 17s8 10 5 15c-8 13 25 28 46 23 11-3 19-12 19-19zm-475-80c-35-30-85-58-92-50-3 2 0 13 6 23s11 15 11 12 21 4 48 17c60 30 64 30 27-2zm96-1c1-10 2-25 3-33 0-8 9-15 18-15s20-4 25-8c4-5 3-8-2-7-21 5-36 0-30-10 3-5 4-10 1-10-10 0-43 75-39 88 7 18 23 15 24-5zm-18-78c-3-9-16-13-34-11-22 3-27 0-19-9 15-18 0-26-24-13-19 10-19 9-8-4 9-12 10-18 2-23-6-4-10-16-8-28 2-18-2-22-27-23-16-1-30-3-30-4s-9-3-21-4c-11-1-21 3-21 10s4 11 9 8c13-8 58 5 58 16 0 6-6 9-12 8-7-2-12 5-12 15 2 14-1 15-12 6-8-6-11-16-7-23s2-7-7 1c-10 9-9 15 4 29 12 12 14 20 7 27-6 6-11 14-11 18 0 12 74 46 89 41 8-3 11 0 7 7-5 7 1 11 14 11 11 0 23 7 27 16 5 12 10 7 24-20 10-21 15-44 12-51zm342 55c17-18 17-20 2-14-9 3-17 10-17 15 0 4-7 5-17 2-11-4-14-3-9 5 10 17 20 15 41-8zm-31-27c9-23 4-24-22-4-21 16-22 17-3 18 11 1 22-5 25-14zm-144-23c0-6 8-10 18-11 9 0 12-3 5-5-16-7-75 25-68 36 7 12 45-6 45-20zm-553-32c-2-13-4-5-4 17-1 22 1 32 4 23 2-10 2-28 0-40zm393-8c-8-5-11-10-5-10 5 0-7-9-28-20-41-22-57-25-57-9 0 5 5 7 10 4 6-3 25 5 43 19 17 14 37 26 42 26 6 0 3-5-5-10zm-340-41c0-10-4-19-10-19-5 0-9 11-8 24 3 28 18 24 18-5zm26-69c-1-35-16-41-16-7 0 20 7 37 15 37 2 0 2-13 1-30zm-74-10c3-17 1-33-4-36-4-3-8 1-8 8s-3 23-6 36c-4 12-2 22 4 22 5 0 12-14 14-30zm208-209c-10-20-30-37-30-27 0 6 33 46 38 46 1 0-2-9-8-19zm-98-136c-4-14-53-9-69 8-12 11-7 13 29 8 24-3 42-10 40-16zM146 1408c8-12 118-86 126-84 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-23-24-92-74-149-23-28-46-62-49-76-10-42-33-80-69-115-32-31-34-38-34-97 0-34 4-79 9-98 15-54 23-132 13-127-4 3-8-3-9-13-1-13 3-17 13-13 8 3 14 18 14 34s2 29 5 29c10 0 64-65 65-77 0-7 3-13 8-13 4 0 33-25 66-55 32-30 63-56 70-56 6-1 16-2 23-3 7 0 19-10 27-21 13-17 17-18 40-6 14 8 24 17 22 20s48 7 112 9c232 6 268 8 280 16 7 4 12 1 12-8 0-22 16-20 57 5l35 22-37-49c-20-26-41-59-46-71-7-19-16-23-56-24-27 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-17-7-39 16-28 28 4 5 1 5-6 0-9-5-12-20-9-44 35-268 118-397 302-467 38-15 76-19 160-19 104 0 114 2 175 32 81 40 154 103 177 151 9 20 23 43 31 51 19 20 33 61 26 73-4 6-3 8 3 5 12-7 58 74 67 119 4 17 29 54 56 83 53 56 115 169 126 228 11 56-18 129-80 204-30 36-58 78-61 92-8 32-18 34-44 8-32-32-63-31-74 4-15 48-34 62-89 68-35 5-65 16-93 36-98 73-145 103-167 106-13 2-43 9-68 15-49 12-97 7-147-16-29-14-34-14-80 9-52 27-123 86-123 103 0 5-24 14-54 20-30 5-52 6-50 2zm492-332c61-5 112-14 112-19 0-11-150-2-199 13-18 5-38 8-43 7-6-1-13 4-16 12-3 11 0 12 14 6 11-5 70-13 132-19zm-323-81c-26-85-11-152 33-148 16 2 25-4 31-21 7-16 25-28 60-40 27-9 57-16 66-16 22 0 14-22-13-36-29-14-42-29-19-21 20 7 23-13 6-30-9-9-5-14 14-18 15-4 29-16 32-26 4-11 19-27 33-36 15-9 51-32 79-51 48-32 56-34 95-26 58 12 64 40 11 49-49 8-68 19-58 35 6 9 30 11 95 6 85-6 89-6 120 21 31 25 32 26 26 5-12-37 19-16 59 39 28 39 38 66 47 126 10 60 16 77 31 81 13 3 18 11 14 28-2 13 1 25 7 27 18 6 36-4 36-20 0-9-6-13-15-9-12 4-15-4-15-45 0-65 12-85 55-93 39-8 48-23 13-23-41-1-48-3-48-14 0-6 11-20 26-31 14-11 22-23 19-26-3-4-10-1-14 6-7 12-33 17-74 13-10 0-15-5-12-11 3-5-2-10-12-11-10 0-13-3-6-6 7-2 13-12 13-21 0-13-2-14-9-3-6 9-11 10-15 3-4-6-13-9-20-6s-18-2-25-10c-9-11-7-19 14-41 29-33 29-32 10-32-8 0-12 4-10 8 6 8-19 19-44 19-9 0-26-6-37-14-15-12-17-17-6-27 16-17 16-34-1-20-13 10-79 7-98-4-4-3-6-12-2-20 3-8 0-15-7-15-6 0-8 4-5 10s-9 8-32 6c-68-6-113-18-113-30 0-8-2-8-8 0-10 17-108 13-104-4 1-8-2-11-8-7s-9 13-6 21c3 9-2 14-17 14-69 2-87 6-82 18 4 10-4 13-30 12-3-1-12 6-21 14-8 8-21 13-29 9-11-4-13-1-9 11 4 10 1 16-7 16-7 0-9 3-6 6 4 4-3 15-14 25-12 10-18 23-14 28 3 6 2 11-4 11s-8 6-5 14-4 19-16 26c-20 10-20 13-5 24 11 8 14 18 8 33-4 12-11 22-15 22-5 1-14 1-20 2-7 0-4 4 6 8 21 8 33 51 15 51-8 0-8 4 0 13 6 8 13 42 17 77 3 39 13 75 27 95 12 19 23 33 24 31 1-1-4-24-12-51zm246-41c10-13 10-17-2-25-22-14-32-11-26 11 3 10 0 21-7 24-6 2-4 5 5 5 9 1 22-6 30-15zm119-4c12-8 12-10 1-10-8 0-19-7-26-17s-19-14-29-10c-15 6-15 8 1 27 19 22 31 24 53 10zm515-98c4-20 3-32-4-32-15 0-31 34-31 65 0 22 2 24 14 13 7-8 17-29 21-46zm25 11c0-12 6-28 13-35 12-14 24-48 12-36-4 4-18 2-32-3-22-8-24-7-17 8 5 10 8 40 8 66-1 30 2 43 7 35 5-7 9-23 9-35zM818 734c28-4 52-11 52-16 0-17-71-39-104-32-32 6-66 30-66 46 0 10 45 10 118 2zm275-124c-6-6-33 30-33 44 0 6 9 0 20-14 10-14 16-27 13-30zm-93-301c0-9-8-24-19-33-16-15-19-15-24-2-8 21 25 79 35 63 4-7 8-19 8-28zm-113-25c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#425161",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M255 2702c-3-8-5-28-5-45 0-18-14-75-32-127-17-52-41-133-54-180-21-81-23-85-48-82-33 4-33-12-1-50 19-23 24-38 20-57-4-20 5-46 33-96 55-101 105-176 136-204 22-21 25-30 20-58-3-18-3-45 0-59 6-21 9-24 21-14s15 9 15-4c0-15 2-15 30-1 18 9 28 20 24 27-5 7-2 9 8 5 10-3 19 3 27 19 11 24 11 24-18 9-16-8-31-20-33-27-2-6-10 3-18 22-15 36-15 36 66 97l29 22-33-12c-27-10-35-9-42 2-4 8-6 20-3 28 4 9 0 11-11 7-18-7-22-24-6-24 6 0 10-8 10-17 0-14-3-13-17 6-15 23-15 25 5 41 18 15 20 22 12 51-6 19-10 35-10 36s9 0 21-2c15-3 19 0 15 10-8 20-14 42-9 33 3-5 13-8 24-8 22 0 79 73 79 102 0 10 4 18 9 18s12 8 15 18c3 9 3-26 0-78-14-226-14-296-1-270 6 14 15 27 19 30s9 26 11 52c2 25 8 51 12 58 5 8 10 32 11 54 1 23 5 72 9 109l6 68-30 12c-31 12-42 27-18 27 13 0 39 34 47 63s24 23 46-20c12-22 37-63 55-90 19-28 52-81 74-117 22-37 50-81 62-98l23-32v27c0 15 4 27 10 27 5 0 7 16 4 36-3 29-1 35 11 31 8-4 17-2 20 3 4 6 12 10 18 10 8 0 7-3-2-9-11-7-11-10 2-17 16-9 40-112 30-128-4-5-1-6 5-2 7 4 12 0 12-10s2-15 5-12c4 3-1 43-9 89s-12 86-10 88c8 8 14-7 19-45 3-21 8-59 11-84 4-25 10-49 14-55 4-5 16-41 25-80 10-38 21-74 25-78 20-22 23 92 4 154-2 9-1 26 4 39 7 18 12 2 21-71 14-102 19-124 26-117 3 3 0 40-6 84-20 136-17 183 14 184 4 0 7-8 7-17 0-10 4-23 8-30s8 15 9 47c1 33-1 60-5 60s-29-7-57-15c-50-15-81-13-70 4 3 5 1 13-5 16-6 4-8 16-5 26 4 11 1 26-5 34-9 10-9 15-2 15 6 0 9 7 6 15-4 8-1 15 5 15s11-11 11-25c0-34 20-32 21 3 2 25 2 25 6 3 3-13 13-26 24-28 10-3 19-10 19-15s12-8 27-6c23 3 29 9 35 43 3 22 14 60 22 84 21 58 21 58-19 53-21-3-35 0-35 7 0 6 16 11 35 11 36 0 47 13 19 24-12 5-14 13-9 33 4 17 2 29-7 34-8 5-9 9-2 9s9 11 6 25c-2 14-11 25-18 25-19 0-18 16 2 24 26 10 7 23-27 18-22-3-30-1-25 7 4 6 11 9 16 6 13-8 40 6 40 21 0 8-10 14-22 15h-23l23 9c17 7 22 17 22 44 0 44 9 66 26 66 16 0 33-30 36-65 2-25 4-26 53-21l50 5-44-12c-64-18-66-38-4-32 47 5 47 4 13-6-19-6-41-13-47-15-7-2-13-8-13-14 0-8 15-9 46-4 59 8 53-11-6-21-41-7-51-19-25-29 8-3 12-12 9-21-5-12 0-14 27-10s30 3 14-4c-11-5-30-10-42-10-24-1-34-25-30-71 2-22 6-25 42-23 37 2 33-1-22-13-22-4-23-9-23-91v-86l21 19c49 44 139 139 139 146 0 5 5 8 10 8 6 0 4-13-5-30-17-34-20-70-4-70 5 0 7-5 4-11-5-7 14-9 56-7l62 3 24 70c13 39 28 72 33 73 6 2 8 8 5 13s1 31 9 59l15 50-37 2c-36 1-36 1 8 7 37 5 45 9 43 26-1 17 17 134 32 203l5 22-217-2c-168-2-217-6-216-15 2-7-2-13-7-13-6 0-10 6-10 14 0 21-907 18-915-2zm81-17c-3-8 2-19 12-24 9-5 14-13 10-17-4-3-3-14 2-23 8-16 13-43 26-143 3-21 3-38 0-38-4 0-23 72-31 120-2 14-13 51-23 83-16 48-17 57-5 57 9 0 13-6 9-15zm282-33c2-7-6-12-17-12-21 0-27 11-14 24 9 9 26 2 31-12zm842-32c11-8 7-10-17-8-17 1-29 6-27 10 7 11 26 10 44-2zm44-42c-3-5-24-7-47-7-23 1-52-1-64-5s-24-3-26 2c-3 4 8 9 26 10 17 2 32 4 33 5 7 7 82 1 78-5zm56-27c0-10-39-17-135-25-27-2-62-7-77-11-20-5-28-3-28 6 0 7 3 9 6 6 4-3 14-2 23 3 10 5 57 11 105 14 48 2 90 7 94 10 8 9 12 7 12-3zm-540-11c-8-5-24-9-35-9-16 1-16 2 5 9 35 11 48 11 30 0zm23-31c-10-10-136-40-163-38-11 1 98 32 170 48 2 1-1-4-7-10zm57-39c-8-6-24-10-35-10s-30-3-42-6c-14-4-23-2-23 5 0 6 15 11 33 12 17 0 41 4 52 8 25 10 35 3 15-9zm180 0c-19-13-30-13-30 0 0 6 10 10 23 10 18 0 19-2 7-10zm-330-32c-25-4-49-6-55-4-17 6 59 23 80 17 14-3 6-7-25-13zm119-12c-10-10-59-14-59-5 0 5 14 9 32 9 17 0 29-2 27-4zm-379-83c0-7 7-13 15-13s15-6 15-14c0-7 7-19 15-26s12-16 9-21 8-9 24-9c29 0 29 1 27 44-2 24-6 49-9 54-3 6-1 12 6 14 16 6 70-21 63-31-2-5 4-16 15-26s17-22 14-26c-3-5 5-9 18-10 13 0 17-3 11-6-10-3-8-9 4-21 16-16 14-18-24-26-31-6-49-5-74 8-17 9-49 16-69 16-35 0-39 3-59 50-12 28-25 50-30 50-4 0-8 6-8 13 0 6-4 21-8 32-5 14 1 11 19-10 14-16 25-36 26-42zm-178 10c-6-2-10-9-7-13 6-10-34-35-42-26-7 7 38 46 52 45 6 0 4-3-3-6zm392-188c-4-8-1-15 5-15s11-8 11-17c0-15-1-15-13 2-10 12-22 16-40 13s-24-1-20 8c2 7 14 15 26 17s25 5 29 6c4 0 5-6 2-14zm-625-60c0-5-6-1-14 9-8 11-15 24-15 30 0 5 7 1 15-10 8-10 14-23 14-29zm608-1c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm-527 0c0-11 6-14 18-10 15 5 15 5 1-6-9-7-14-20-11-28s2-12-2-9c-12 11-25 69-15 69 5 0 9-7 9-16zm-35-15c-4-6-10-8-13-5s-11 1-19-5c-8-8-13-8-13-1 0 11 16 20 38 21 7 1 10-4 7-10zm805-39c0-5-9-14-20-20-16-8-20-8-20 4 0 8 8 17 18 19 9 3 18 5 20 6 1 0 2-3 2-9zm-102-77c1-35-2-52-7-43-9 16-7 100 3 100 2 0 4-26 4-57zm-472-50c-3-8-6-21-6-29s-4-14-10-14c-5 0-10 16-10 35 0 27 3 33 16 28 8-3 13-12 10-20zm498-104c9-57 2-59-11-4-6 25-7 45-3 45s10-19 14-41zM1676 2712c5-4 25-20 45-35l37-26 6 22c11 43 8 47-46 47-29 0-48-4-42-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1834 2653c4-38 9-101 11-142 3-44 10-78 18-83s7-8-5-8c-9 0-29 11-44 25s-33 25-40 25c-26 0-14-15 31-40 24-13 47-30 50-38 3-7 9-11 14-8 5 4 42-10 82-29 41-19 67-35 59-35s-41 13-73 30c-53 27-87 30-87 9 0-5 15-13 33-18l32-9-39-1c-32-1-37-3-27-13 6-7 16-14 21-14 31-4 32-7 5-13-23-6-36-3-55 15-42 37-95 59-70 29 16-19 90-60 125-69 26-7 26-8 10-26-9-10-14-24-10-29 3-6 3-20 0-32-5-15-10-17-20-9-9 7-16 6-25-4-10-13-7-16 15-22l26-6-23-12c-13-7-22-19-20-29 2-14-1-15-23-7-15 6-33 17-42 26-8 8-18 13-20 10-7-7 14-41 24-39 13 4 43-8 43-17 0-4-7-10-15-14-8-3-15 0-15 6s-3 8-6 5c-8-8-48 19-50 33-1 6-2 12-4 15-1 3-2 20-3 38 0 19-7 35-16 39-14 6-14 7 2 7 12 1 17 10 18 29 0 15 2 43 4 62s-1 41-7 48c-7 8-7 12 1 12 6 0 11 11 11 24 0 20-4 24-27 21-20-2-34 5-50 24-13 15-23 20-23 12 0-10-3-11-14-2-10 8-16 9-21 1-3-5-2-10 3-10 6 0 13-7 16-16 6-15 4-15-11-3-15 13-16 12-10-11 4-14 7-29 7-35 0-5 5-3 10 5 8 13 10 12 10-4 0-13-5-17-20-13-29 8-25-1 23-44 28-25 36-38 26-39-9 0-19 9-22 21-4 13-10 18-18 13-7-4-10-3-6 3s-2 13-13 16c-12 3-20 14-20 25 0 12-5 24-12 28-8 5-9 2-4-11 4-10 1-25-8-34-13-15-20-46-17-79 1-10 6-10 24-2 17 9 16 6-5-10-34-26-36-44-5-35 19 6 18 3-8-19-30-25-21-35 16-16 34 19 20 2-25-30-46-31-98-39-126-19-11 8-8 9 13 4 31-6 67 1 67 15 0 4-15 6-32 5-18-2-46-3-61-4-16-1-26-5-22-11s-11-10-37-10c-24 0-59-3-80-6l-36-6 1-113c2-95-1-116-15-132-10-11-18-35-18-54 0-24 3-30 9-19 6 8 7 18 5 22-3 4-1 8 5 8 5 0 11-15 13-32 2-20 8-32 16-31 6 2 12 2 12 0 0-1 7-20 15-42l14-40 2 40 1 40 12-47c12-51 26-72 27-42 0 14 3 12 11-9 9-27 47-45 67-33 5 3 11 0 14-6 3-9 13-5 33 12l29 25-23-26c-25-29-18-42 21-38 12 1 30-1 40-6 9-4 29-4 45-1 23 5 24 5 9-5-11-6-47-9-88-7-43 3-70 1-73-6s-8-6-14 2c-5 7-27 17-48 22-30 7-41 6-47-6-4-7-14-14-20-14-7 0-13-9-13-20s4-20 9-20 4-7-3-15c-9-11-10-15-1-15 8 0 10-8 6-19-4-12 5-37 24-68 16-26 32-61 35-78 6-29 6-29-4-5-14 32-41 61-51 55-4-3-11-35-15-71-4-46-13-73-26-86-16-16-17-22-8-28s28 9 58 46c42 52 47 54 92 54 60 0 96 26 111 82 6 23 25 60 43 82 18 23 49 66 69 96 29 45 49 62 109 94 40 22 91 51 113 66 22 14 65 37 95 50 119 52 152 78 208 161l53 80-2 117c-1 94-4 119-18 130-15 13-15 13 2 8 16-5 17 10 17 229v235h-342l6-67zm123-259c-2-2-20 3-40 10s-34 15-31 19c3 3 21-2 40-10 19-9 33-18 31-19zm-301-19c-3-20-20-20-24-1-2 9 3 16 11 16 9 0 14-7 13-15zm61-11c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm336-11c9-3 17-9 17-14s-15-2-32 7c-39 19-51 30-23 19 11-4 28-10 38-12zm-363-8c0-8-7-15-15-15-26 0-18 20 13 29 1 1 2-6 2-14zm375-93c-17-4-111 36-125 54-7 7 22-1 64-19 41-18 69-33 61-35zm-105 7c0-5 4-8 9-4 5 3 12 1 16-5 3-5 15-10 25-10s25-7 34-15c8-8 19-15 25-15s11-4 11-9c0-9-45 6-89 29-9 5-24 11-33 14-19 6-25 26-8 26 6 0 10-5 10-11zm-273-24c9-26-6-30-27-7l-21 22h21c11 0 23-7 27-15zm333-51c0-16-16-19-25-4-15 25-32 9-30-29s2-38-25-28c-15 6-27 16-27 23 0 10 5 10 20 2 13-7 17-7 13 0-3 6-2 13 4 17s8 10 5 15c-8 13 25 28 46 23 11-3 19-12 19-19zm-475-80c-35-30-85-58-92-50-3 2 0 13 6 23s11 15 11 12 21 4 48 17c60 30 64 30 27-2zm96-1c1-10 2-25 3-33 0-8 9-15 18-15s20-4 25-8c4-5 3-8-2-7-21 5-36 0-30-10 3-5 4-10 1-10-10 0-43 75-39 88 7 18 23 15 24-5zm-18-78c-3-9-16-13-34-11-22 3-27 0-19-9 15-18 0-26-24-13-19 10-19 9-8-4 9-12 10-18 2-23-6-4-10-16-8-28 2-18-2-22-27-23-16-1-30-3-30-4s-9-3-21-4c-11-1-21 3-21 10s4 11 9 8c13-8 58 5 58 16 0 6-6 9-12 8-7-2-12 5-12 15 2 14-1 15-12 6-8-6-11-16-7-23s2-7-7 1c-10 9-9 15 4 29 12 12 14 20 7 27-6 6-11 14-11 18 0 12 74 46 89 41 8-3 11 0 7 7-5 7 1 11 14 11 11 0 23 7 27 16 5 12 10 7 24-20 10-21 15-44 12-51zm342 55c17-18 17-20 2-14-9 3-17 10-17 15 0 4-7 5-17 2-11-4-14-3-9 5 10 17 20 15 41-8zm-31-27c9-23 4-24-22-4-21 16-22 17-3 18 11 1 22-5 25-14zm-144-23c0-6 8-10 18-11 9 0 12-3 5-5-16-7-75 25-68 36 7 12 45-6 45-20zm-553-32c-2-13-4-5-4 17-1 22 1 32 4 23 2-10 2-28 0-40zm393-8c-8-5-11-10-5-10 5 0-7-9-28-20-41-22-57-25-57-9 0 5 5 7 10 4 6-3 25 5 43 19 17 14 37 26 42 26 6 0 3-5-5-10zm-340-41c0-10-4-19-10-19-5 0-9 11-8 24 3 28 18 24 18-5zm26-69c-1-35-16-41-16-7 0 20 7 37 15 37 2 0 2-13 1-30zm-74-10c3-17 1-33-4-36-4-3-8 1-8 8s-3 23-6 36c-4 12-2 22 4 22 5 0 12-14 14-30zm208-209c-10-20-30-37-30-27 0 6 33 46 38 46 1 0-2-9-8-19zm-98-136c-4-14-53-9-69 8-12 11-7 13 29 8 24-3 42-10 40-16z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1660 2683c1-13 100-85 100-73 0 18-66 80-84 80-9 0-16-3-16-7zM1672 2618c18-18 35-32 37-30 2 1 13-5 23-15 16-14 18-14 18-1 0 22-66 78-91 78-18 0-17-4 13-32zM1630 2614c0-10 68-74 78-74 6 0 12-7 16-15 3-8 10-15 15-15 6 0 7 8 4 18-8 19-60 72-66 65-2-2-10 3-17 12-13 15-30 20-30 9zM1804 2602c-14-10-26-40-31-79-3-25 1-34 17-43 32-17 54-6 40 20-6 12-9 26-7 33s-2 20-11 30c-8 9-11 17-5 17 5 0 10 7 10 15s-1 15-1 15c-1 0-6-4-12-8z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1620 2572c0-8 10-18 77-73 18-15 29-30 26-33-4-3-1-6 5-6 29 0 7 45-34 71-20 12-31 26-27 32 3 7 3 9-2 5-4-4-16-3-26 3-11 5-19 6-19 1zM1630 2525c0-13 20-35 32-35 4 0 8 5 8 12 0 6-3 8-7 5-3-4-12 1-19 11-7 9-14 12-14 7zM1670 2424c0-9 5-14 12-12 18 6 21 28 4 28-9 0-16-7-16-16zM1755 2420c9-15 62-40 69-33 7 8-43 43-62 43-7 0-10-5-7-10zM1750 2382c0-5 18-18 40-31 48-27 54-11 6 18-36 23-46 25-46 13zM1380 2170l-25-7 26-7c36-10 92-4 97 12 4 14-55 15-98 2zM1772 2141c7-12 18-17 27-13 14 6 14 7-1 10-10 2-18 8-18 13s-5 9-10 9c-6 0-6-7 2-19zM883 2004c-16-17 9-27 27-11 7 7 10 7 7 2-3-6-2-17 4-25 6-11 9-9 9 11 0 30-28 44-47 23zM456 1951c-3-5 1-14 9-21 12-10 15-10 15 3 0 19-16 31-24 18zM1119 1923l-1-28-8 25c-5 15-8 18-9 8-1-24 9-48 22-48 6 0 8 3 5 6-4 3-2 19 2 35 5 17 5 29-1 29-5 0-9-12-10-27zM900 1901c0-12 5-19 10-16 6 3 10 2 10-3 0-6 7-13 16-16 14-5 15-4 5 8-8 10-9 16-1 21 5 3 10 12 10 18 0 8-4 7-9-2-8-12-12-12-25-2-14 12-16 10-16-8zM985 1883c16-77 28-123 32-120 6 7-18 127-27 132-5 3-7-3-5-12zM146 1408c8-12 118-86 126-84 4 0 15-9 23-22 9-12 20-20 25-17 4 3 13-2 20-10s16-12 21-9 9 0 9-6 5-8 10-5c6 3 13-1 16-10 9-23-24-92-74-149-23-28-46-62-49-76-10-42-33-80-69-115-32-31-34-38-34-97 0-34 4-79 9-98 15-54 23-132 13-127-4 3-8-3-9-13-1-13 3-17 13-13 8 3 14 18 14 34s2 29 5 29c10 0 64-65 65-77 0-7 3-13 8-13 4 0 33-25 66-55 32-30 63-56 70-56 6-1 16-2 23-3 7 0 19-10 27-21 13-17 17-18 40-6 14 8 24 17 22 20s48 7 112 9c232 6 268 8 280 16 7 4 12 1 12-8 0-22 16-20 57 5l35 22-37-49c-20-26-41-59-46-71-7-19-16-23-56-24-27 0-57-2-67-4-43-8-223-8-235 0-9 5-12 4-7-3 3-6 1-14-5-18-7-4-9-3-5 4 13 22-15 23-49 2-19-12-35-25-35-29s-13-14-28-23c-25-15-32-15-55-3-15 8-29 13-31 12-3-1-8 2-13 7s-2 6 7 2c9-5 8-2-2 7-10 8-14 17-10 21s1 6-7 4c-16-3-51 50-54 81-1 12-22 37-49 59-42 32-48 41-43 66 4 21 2 27-9 23-17-7-39 16-28 28 4 5 1 5-5 1-15-9-17-45-4-95 5-20 14-60 20-90 15-70 61-165 106-218 24-29 64-57 122-85l86-43h116c111 0 119 1 181 32 81 40 154 103 177 151 9 20 23 43 31 51 19 20 33 61 26 73-4 6-3 8 3 5 12-7 58 74 67 119 4 17 29 54 56 83 53 56 115 169 126 228 11 56-18 129-80 204-30 36-58 78-61 92-8 32-18 34-44 8-32-32-63-31-74 4-15 48-34 62-89 68-35 5-65 16-93 36-98 73-145 103-167 106-13 2-43 9-68 15-49 12-97 7-147-16-29-14-34-14-80 9-52 27-123 86-123 103 0 5-24 14-54 20-30 5-52 6-50 2zm492-332c61-5 112-14 112-19 0-11-150-2-199 13-18 5-38 8-43 7-6-1-13 4-16 12-3 11 0 12 14 6 11-5 70-13 132-19zm-323-81c-26-85-11-152 33-148 16 2 25-4 31-21 7-16 25-28 60-40 27-9 57-16 66-16 22 0 14-22-13-36-29-14-42-29-19-21 20 7 23-13 6-30-9-9-5-14 14-18 15-4 29-16 32-26 4-11 19-27 33-36 15-9 51-32 79-51 48-32 56-34 95-26 58 12 64 40 11 49-49 8-68 19-58 35 6 9 30 11 95 6 85-6 89-6 120 21 31 25 32 26 26 5-12-37 19-16 59 39 28 39 38 66 47 126 10 60 16 77 31 81 13 3 18 11 14 28-2 13 1 25 7 27 18 6 36-4 36-20 0-9-6-13-15-9-12 4-15-4-15-45 0-65 12-85 55-93 39-8 48-23 13-23-41-1-48-3-48-14 0-6 11-20 26-31 14-11 22-23 19-26-3-4-10-1-14 6-7 12-33 17-74 13-10 0-15-5-12-11 3-5-2-10-12-11-10 0-13-3-6-6 7-2 13-12 13-21 0-13-2-14-9-3-6 9-11 10-15 3-4-6-13-9-20-6s-18-2-25-10c-9-11-7-19 14-41 29-33 29-32 10-32-8 0-12 4-10 8 6 8-19 19-44 19-9 0-26-6-37-14-15-12-17-17-6-27 16-17 16-34-1-20-13 10-79 7-98-4-4-3-6-12-2-20 3-8 0-15-7-15-6 0-8 4-5 10s-9 8-32 6c-68-6-113-18-113-30 0-8-2-8-8 0-10 17-108 13-104-4 1-8-2-11-8-7s-9 13-6 21c3 9-2 14-17 14-69 2-87 6-82 18 4 10-4 13-30 12-3-1-12 6-21 14-8 8-21 13-29 9-11-4-13-1-9 11 4 10 1 16-7 16-7 0-9 3-6 6 4 4-3 15-14 25-12 10-18 23-14 28 3 6 2 11-4 11s-8 6-5 14-4 19-16 26c-20 10-20 13-5 24 11 8 14 18 8 33-4 12-11 22-15 22-5 1-14 1-20 2-7 0-4 4 6 8 21 8 33 51 15 51-8 0-8 4 0 13 6 8 13 42 17 77 3 39 13 75 27 95 12 19 23 33 24 31 1-1-4-24-12-51zm246-41c10-13 10-17-2-25-22-14-32-11-26 11 3 10 0 21-7 24-6 2-4 5 5 5 9 1 22-6 30-15zm119-4c12-8 12-10 1-10-8 0-19-7-26-17s-19-14-29-10c-15 6-15 8 1 27 19 22 31 24 53 10zm515-98c4-20 3-32-4-32-15 0-31 34-31 65 0 22 2 24 14 13 7-8 17-29 21-46zm25 11c0-12 6-28 13-35 12-14 24-48 12-36-4 4-18 2-32-3-22-8-24-7-17 8 5 10 8 40 8 66-1 30 2 43 7 35 5-7 9-23 9-35zM818 734c28-4 52-11 52-16 0-17-71-39-104-32-32 6-66 30-66 46 0 10 45 10 118 2zm275-124c-6-6-33 30-33 44 0 6 9 0 20-14 10-14 16-27 13-30zm-93-301c0-9-8-24-19-33-16-15-19-15-24-2-8 21 25 79 35 63 4-7 8-19 8-28zm-113-25c-9-9-106-10-100-1 2 4 27 7 55 7s49-3 45-6zm-12-164c-12-19-109-70-135-70-17 0-7 8 34 25 33 13 69 33 80 44 20 21 34 21 21 1zM530 54c82-20 86-24 19-20-59 4-81 8-89 17-3 3-14 11-25 18-23 14-32 15 95-15zM455 1355c34-16 72-21 45-6-8 5-28 11-45 14l-30 6 30-14zM560 1323c8-3 34-14 58-24 23-10 42-16 42-13 0 8-83 44-100 43-13-1-13-1 0-6z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M262 447c18-18 39-33 46-34 14 0-56 66-71 67-4 0 7-15 25-33zM723 340c-29-12-29-15 0-18 15-1 24 4 24 13 0 8-1 15-1 14-1 0-11-4-23-9zM390 283c0-21 28-46 44-40 18 7 22 26 6 28-20 3-25 4-37 12-7 5-13 4-13 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#79534c",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M2157 2498c-2-7-4-28-3-46 1-17-2-32-6-32-5 0-8-9-8-21 0-11-3-18-7-16-5 3-8-8-8-25 0-34 29-58 39-32 6 16 7 184 1 184-2 0-5-6-8-12zM1600 2438c0-2 28-28 63-58 34-29 51-41 37-26-25 28-100 91-100 84zM1591 2395c2-5 33-37 68-70s60-53 55-44c-11 19-129 129-123 114zM1644 2282c39-39 72-69 75-67 6 7-75 91-114 117-16 12 1-11 39-50zM1590 2286c0-5 29-40 65-77s65-62 65-55c0 6-29 41-65 76s-65 60-65 56zM134 2256c-3-8-12-12-20-9-9 3-6-9 10-38 19-33 22-47 15-62-6-10-8-21-5-25 3-3 6 0 6 7 0 9 5 9 23 0l22-12-20 23c-18 21-18 23-2 17 10-4 22-7 26-7 5 0 6-12 3-26-3-16-9-23-18-20-22 8-16-8 7-23 17-10 19-15 9-21-11-7-11-14-2-35 7-16 17-23 24-19s8 3 4-4c-9-15 37-89 84-132 43-41 50-55 39-92-7-26-6-26 18-15 14 6 21 13 16 14-15 5-3 56 16 72 14 12 13 13-10 7-26-6-60 17-46 30 10 10-41 134-83 206-22 36-40 72-40 78 0 7-11 26-25 42s-23 34-20 39c4 5-2 6-11 2-12-4-15-3-10 5 4 7 5 12 1 12-3 0-8-6-11-14zm131-234c-2-3-13 1-22 8-10 7-6 1 9-13 25-23 25-25 8-30-11-3-19-2-18 2 1 3-3 16-10 29-7 12-9 22-5 22s2 5-5 12c-27 27-10 30 18 3 16-16 28-31 25-33z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1611 2215c0-6 22-55 48-109l48-99-104-54c-64-33-116-53-137-53-33 0-33 0-34 47-2 65-24 151-33 126-6-16-8-14-18 10-8 20-17 27-39 27h-28l2-177c3-292 3-290 20-307 8-9 21-16 27-16 7 0 53 41 102 90 50 50 104 100 120 112l30 21-30-34c-16-19-66-72-110-118-64-68-70-77-30-44 71 58 212 209 203 218-3 3-31-6-62-20-32-14-83-27-115-30l-58-4-7 67c-3 37-5 94-5 127 1 48 3 54 9 30 4-16 9-59 10-95s4-59 7-52c2 6 20 12 40 12 22 0 69 18 131 50 95 50 122 59 122 41 0-16-203-112-243-116-52-4-60-15-10-15 29 0 70 15 142 51 55 28 109 49 118 47 11-2-19-21-72-46-49-24-99-48-110-54s-45-14-75-18l-55-7 48-2c27 0 65 6 85 16 21 9 66 30 102 46 36 17 72 30 80 30s18 5 22 11 10 7 14 3c4-3-10-25-30-47s-36-43-36-48c0-4 17 13 38 37l39 45 41-21c23-11 38-23 35-27-4-4 1-4 12 0 15 6 17 4 12-11-6-15-5-16 8-5 12 10 15 10 15-4 0-16-89-120-97-113-2 2 12 21 32 42 19 22 35 42 35 47 0 6-75-72-87-91-2-2-6-1-10 2-3 4 4 20 18 35 13 15 0 3-28-27-29-30-56-52-59-48-10 10-45-13-38-25 4-5 0-14-7-19-20-13-31-11-23 4 5 8 2 8-9-2-19-15-23-26-5-15 8 5 9 2 5-10-5-13 10-9 60 20 38 20 71 42 75 48s12 12 18 12c5 1 14 2 18 3 5 0 17 9 28 19 10 9 28 17 39 18 21 1 158 65 185 87 23 18 63 77 57 84-4 3-50 23-104 45-88 35-130 54-241 106-18 8-41 29-52 46-22 36-100 115-99 101zm394-274c43-16 81-34 83-40 5-14-117 29-226 80-45 21-85 39-89 39-3 0-15 7-25 17-40 36-13 30 80-17 53-27 133-63 177-79zm-121-160l-37-36 31 40c18 22 33 46 33 55 1 10 3 9 6-4 3-12-7-31-33-55zm-374-14c0-1-27-29-60-61-64-63-83-65-26-3 18 20 31 37 27 38-3 0 8 7 24 14 33 16 35 16 35 12zm236-66c-16-17-38-28-53-28-16 0-21 2-12 7 6 5 17 6 24 4 6-3 22 7 35 21s26 25 29 25c2 0-8-13-23-29zM1860 2145c25-14 58-30 135-65 101-45 158-70 163-70 19 0-25 23-113 60-55 23-119 53-142 66s-48 24-55 24-2-7 12-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1740 2116c0-7 99-58 208-108 98-44 182-71 182-57 0 5-5 9-11 9-14 0-149 54-224 90-33 16-78 37-100 46-22 10-43 20-47 22-5 2-8 1-8-2zM1855 2102c37-23 178-87 235-107 81-29 50-8-52 35-57 23-122 53-145 66-49 28-82 33-38 6zM1282 1915c0-110 3-216 8-235 10-45 12 326 1 390-5 28-8-30-9-155zM1248 1927c4-242 9-255 11-30 0 105-2 194-7 197-4 2-6-73-4-167zM1213 2050c0-25 2-35 4-22 2 12 2 32 0 45-2 12-4 2-4-23zM1578 1984c-38-20-36-28 2-9 17 9 30 18 30 20 0 7-1 6-32-11zM1699 1883c-14-16-43-50-64-78-21-27-77-88-124-134-48-46-77-79-66-73 33 17 212 206 263 280 28 39 24 41-9 5zM1213 1835c0-38 2-53 4-32 2 20 2 52 0 70-2 17-4 1-4-38zM524 1866c-3-8-4-23-2-33 3-13 7-9 15 15 12 31-1 48-13 18zM1585 1707c-103-106-100-108 8-7 43 39 115 121 105 119-1 0-52-51-113-112zM1540 1558c-14-5-58-10-99-10-54 0-70-3-62-11 17-17 14-40-4-33-13 5-35-3-65-22-2-2 2-7 9-12 11-6 9-13-11-33-27-27-27-40 0-30 10 4 13 2 8-5-13-21 12-13 39 12 18 17 22 26 13 29-9 4-9 6-1 6 34 2 21-54-16-68-17-6-20-10-8-10 20-1 23-29 4-37-7-2-13-13-14-22-1-15 7-19 41-21 54-2 92 26 106 80 6 22 31 66 56 98 65 84 67 115 4 89zM485 1284c-57-21-69-32-100-94-15-30-45-75-67-99-21-24-41-56-45-70-10-43-32-81-69-116-32-31-34-38-34-97 0-35 4-79 10-97 5-19 11-49 12-67 1-21 6-30 14-27 14 5 73-55 74-74 0-7 3-13 8-13 4 0 33-25 66-55 32-30 63-56 70-56 6-1 16-2 23-3 7 0 19-10 27-21 13-17 17-18 40-6 14 8 24 17 22 20s48 7 112 9c232 6 268 8 280 16 7 4 12 1 12-8 0-21 19-20 55 4 50 33 57 23 20-29-44-61-29-78 22-24l35 38-17-33c-9-19-14-36-11-39 7-7 42 65 50 103 4 17 29 54 56 83 53 56 115 169 126 228 11 56-18 129-79 203-30 36-58 78-63 94-9 27-11 28-27 12-9-10-17-14-17-9 0 4-4 3-8-3-4-7-18-14-31-15-20-3-26 2-35 30-15 43-35 57-94 65-36 5-67 21-137 71-49 35-98 65-108 65s-26 4-36 9c-34 18-114 21-156 5zm153-208c61-5 112-14 112-19 0-11-150-2-199 13-18 5-38 8-43 7-6-1-13 4-16 12-3 11 0 12 14 6 11-5 70-13 132-19zm-323-81c-26-85-11-152 33-148 16 2 25-4 31-21 7-16 25-28 60-40 27-9 57-16 66-16 22 0 14-22-13-36-29-14-42-29-19-21 20 7 23-13 6-30-9-9-5-14 14-18 15-4 29-16 32-26 4-11 19-27 33-36 15-9 51-32 79-51 48-32 56-34 95-26 58 12 64 40 11 49-49 8-68 19-58 35 6 9 30 11 95 6 85-6 89-6 120 21 31 25 32 26 26 5-12-37 19-16 59 39 28 39 38 66 47 126 10 60 16 77 31 81 13 3 18 11 14 28-2 13 1 25 7 27 18 6 36-4 36-20 0-9-6-13-15-9-12 4-15-4-15-45 0-65 12-85 55-93 39-8 48-23 13-23-41-1-48-3-48-14 0-6 11-20 26-31 14-11 22-23 19-26-3-4-10-1-14 6-7 12-33 17-74 13-10 0-15-5-12-11 3-5-2-10-12-11-10 0-13-3-6-6 7-2 13-12 13-21 0-13-2-14-9-3-6 9-11 10-15 3-4-6-13-9-20-6s-18-2-25-10c-9-11-7-19 14-41 29-33 29-32 10-32-8 0-12 4-10 8 6 8-19 19-44 19-9 0-26-6-37-14-15-12-17-17-6-27 16-17 16-34-1-20-13 10-79 7-98-4-4-3-6-12-2-20 3-8 0-15-7-15-6 0-8 4-5 10s-9 8-32 6c-68-6-113-18-113-30 0-8-2-8-8 0-10 17-108 13-104-4 1-8-2-11-8-7s-9 13-6 21c3 9-2 14-17 14-69 2-87 6-82 18 4 10-4 13-30 12-3-1-12 6-21 14-8 8-21 13-29 9-11-4-13-1-9 11 4 10 1 16-7 16-7 0-9 3-6 6 4 4-3 15-14 25-12 10-18 23-14 28 3 6 2 11-4 11s-8 6-5 14-4 19-16 26c-20 10-20 13-5 24 11 8 14 18 8 33-4 12-11 22-15 22-5 1-14 1-20 2-7 0-4 4 6 8 21 8 33 51 15 51-8 0-8 4 0 13 6 8 13 42 17 77 3 39 13 75 27 95 12 19 23 33 24 31 1-1-4-24-12-51zm246-41c10-13 10-17-2-25-22-14-32-11-26 11 3 10 0 21-7 24-6 2-4 5 5 5 9 1 22-6 30-15zm119-4c12-8 12-10 1-10-8 0-19-7-26-17s-19-14-29-10c-15 6-15 8 1 27 19 22 31 24 53 10zm515-98c4-20 3-32-4-32-15 0-31 34-31 65 0 22 2 24 14 13 7-8 17-29 21-46zm25 11c0-12 6-28 13-35 12-14 24-48 12-36-4 4-18 2-32-3-22-8-24-7-17 8 5 10 8 40 8 66-1 30 2 43 7 35 5-7 9-23 9-35zM818 734c28-4 52-11 52-16 0-17-71-39-104-32-32 6-66 30-66 46 0 10 45 10 118 2zm275-124c-6-6-33 30-33 44 0 6 9 0 20-14 10-14 16-27 13-30z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#935a3b",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1642 2158c6-18 22-57 36-87 14-29 25-59 25-67 0-7 4-11 9-8 4 3 8-1 8-9 0-21-194-118-242-122-52-4-61-15-13-15 27 0 72 16 142 51 57 28 111 49 121 47s-20-21-73-46c-49-24-99-48-110-54s-45-14-75-18l-55-7 48-2c27 0 65 6 85 16 21 9 66 30 102 46 36 17 73 30 83 29 10 0 17 6 17 16 0 12 3 13 12 4 8-8 2-21-25-52-21-22-37-43-37-47s19 14 43 41l42 48 24-21c13-12 30-21 38-21s11-4 8-10c-4-6 1-7 11-3 14 5 16 3 11-12-6-14-5-16 7-6 19 16 45 4 39-19-3-10-21-33-41-51l-36-34 32 40c18 22 32 46 32 55 0 8-8 2-19-15-19-30-91-104-91-93 0 3 16 23 35 44s35 41 35 46c0 6-75-72-87-91-2-2-6-1-10 2-3 4 4 20 18 35 13 15 0 3-28-27-29-30-56-52-59-48-10 10-45-13-38-25 4-5 0-14-7-19-20-13-31-11-23 4 5 8 2 8-9-2-19-15-23-26-5-15 8 5 9 2 5-10-5-13 10-9 60 20 38 20 71 42 75 48s12 12 18 12c5 1 14 2 18 3 5 0 17 9 28 19 10 9 28 17 39 18 21 1 158 65 185 87 26 20 57 71 53 85-3 6-11 12-18 12-17 0-69 21-208 85-31 15-63 25-69 23-15-5 115-68 216-103 41-15 73-31 71-35-8-13-157 40-253 90-44 23-72 21-72-5 0-8-4-15-10-15-9 0-14 17-13 47 1 7-4 10-10 6s-8 0-4 10c3 9 2 19-3 22-6 4-10 16-10 29 0 19-69 106-84 106-3 0 0-15 6-32zm104-457c-16-17-38-28-53-28-16 0-21 2-12 7 6 5 17 6 24 4 6-3 22 7 35 21s26 25 29 25c2 0-8-13-23-29zM506 1283c-4-4-12-8-19-9-52-8-72-27-107-95-16-30-36-61-45-69-9-7-25-26-36-42l-20-28h21c12 0 19 4 15 9-3 5-1 12 5 16 14 9 13-14-5-71-8-27-15-58-15-69 0-32 24-70 45-72 39-5 115-28 115-35 0-4 16-10 35-14 26-5 40-15 51-36 14-27 12-69-3-54-7 7-43-23-43-37 0-5 7-6 15-3 11 4 17-3 21-23 4-21 20-39 53-60 25-17 56-38 69-47 19-15 28-15 69-4 43 13 44 14 22 23-13 5-28 10-34 11-28 6-56 29-53 44 3 13 12 16 43 13l40-3-37 37c-21 20-38 40-38 45 0 4 14 20 31 34 23 19 41 26 72 25 23 0 36-3 29-6-25-10 1-23 48-23 39 0 48-3 44-15-8-20-88-48-123-43-26 4-29 2-20-14 5-10 19-18 30-18 13 0 19-5 16-13-3-9 6-14 33-15 28-2 45 4 68 23 16 14 39 25 51 25 35 0 71 67 80 151 6 51 5 78-3 88-11 15-11 15 39-5 8-3 15-1 15 4 0 15-30 43-40 37-5-3-12 0-16 6-4 7-3 9 4 5 5-3 12-1 14 5 6 17 58-1 75-27 11-18 12-28 5-37-7-8-9-29-5-52 4-27 3-36-5-31-16 9-15-7 0-22 28-28 38-13 38 58 0 81 12 89 40 28 16-35 18-37 13-13-3 17-14 44-24 61-11 17-19 38-19 45 1 8 7 0 14-17 15-33 41-50 52-33 3 6-3 13-15 16-11 3-23 14-26 24-4 11-17 32-30 47s-25 39-27 52l-3 25-20-21c-11-12-30-25-42-28-14-5-23-16-24-29 0-12-9 5-19 37-24 76-35 83-139 87-49 2-54 5-63 31-6 15-13 28-17 28-5 0-21 11-37 25-32 28-66 40-89 31-9-3-14-2-11 3 8 13-146 46-158 34zm26-192c13-4 57-11 98-15 70-6 74-5 55 10-20 16-19 16 5 9 42-11 80-27 80-34 0-8-112-41-140-41-11 0-20-7-20-15s-5-15-11-15-9 9-6 20c4 16 1 20-13 18-19-3-110 49-110 63 0 11 32 11 62 0zm113-128c51-7 65-19 64-52l-1-26-7 24c-8 30-24 36-41 16-18-21-35-19-53 8-14 22-15 22-35 3-24-21-57-15-48 9 3 8 1 15-5 15s-8 4-4 9c5 9 38 8 130-6z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M252 924l4-35-19 23c-10 13-16 17-12 11 3-7 1-13-5-13-7 0-20-10-31-22-23-29-25-123-5-193 8-26 14-53 13-59-1-5 3-10 9-11 11 0 74-59 74-70 0-10 48-55 59-55 5 0 12-8 15-18 7-21 66-59 66-42 0 6 12 2 26-9 15-12 33-21 41-21s11-5 8-12c-4-7 0-5 8 4 8 10 18 14 22 10 5-4 5 2 1 12-5 16-4 17 9 6 8-7 22-10 30-6 8 3 15 2 15-2s16-7 35-8c25 0 35 4 35 15s3 12 8 4 26-10 67-7c33 3 92 6 130 6 42 0 73 5 77 11 5 8 8 6 8-5 0-23 42-24 60-3 7 8 21 15 32 15 22 0 25 7-28-75-34-52 13-22 62 40 13 16 15 17 10 3-16-48-16-51-3-28 8 14 18 39 21 56 4 17 29 55 57 84 27 29 66 87 86 128 38 79 55 162 34 162-7 0-9 5-6 10 3 6 1 10-4 10-6 0-11 8-11 18 0 14-2 14-9 3-6-9-6-22 0-32 13-25 11-39-6-39-8 0-15-5-15-11 0-5-4-7-10-4-5 3-10 2-10-4 0-5 4-13 10-16 5-3 15-16 21-28 11-21 11-21-7-6-23 19-84 33-84 19 0-6-6-10-14-10s1-15 20-36c19-19 34-41 34-47s-7-1-16 11c-8 12-20 20-25 16-5-3-8 0-7 7 2 6-9 15-23 19-20 6-31 3-43-12-17-19-16-19 6-12 19 6 21 5 11-8-17-20-4-31 16-15 14 11 14 10 2-5-11-15-11-21-1-33 11-13 10-14-4-9-9 3-21 14-26 24s-19 16-32 15-29-3-36-4c-7 0-10-6-7-11s1-10-5-10c-7 0 0-14 14-31s26-36 26-42c0-7-5-4-11 5-5 9-16 15-24 12-8-4-12-11-8-17 3-6 1-7-6-3-8 6-9 12-2 20 11 13 5 26-11 26-5 0-7-4-4-9 3-4-6-6-19-3-19 3-25 0-25-12 0-11-4-14-12-10-7 4-2-7 11-24 12-18 18-32 13-32-6 0-13 7-16 16-3 8-11 12-17 8-7-4-9-3-5 4 8 13-48 5-89-13-25-12-81-21-144-24-8-1-11-8-8-21 3-11 1-20-4-20s-9 9-9 20-7 20-16 20-12-5-8-12c6-10 5-10-7-1-13 10-21 10-42 0-28-12-38-34-13-24 10 4 13 1 10-8-5-11-10-12-24-3-10 7-17 15-15 18s-1 12-6 20c-8 13-10 13-19 0-8-13-10-12-10 4 0 15-5 17-26 12-16-4-23-3-19 3 3 7 0 8-9 5s-13-11-9-17c3-6 1-7-6-3-7 5-9 16-5 28 5 16 3 20-10 15-8-3-18-2-21 2-3 5-15 7-28 4-18-4-19-3-7 6 13 9 12 11-4 11-13 0-16 5-12 16 5 12 2 15-9 10-9-3-13-2-10 4 7 12-18 40-36 40-9 0-8 4 1 15 9 10 9 15 1 15-6 0-10 3-10 8 3 18-2 32-12 32-5 0-7-4-4-10 3-5 0-7-8-4-17 6-18 34-1 34 6 0 15 8 18 17 8 19-20 46-37 36-6-3-7-1-3 5 4 7 14 12 21 12 12 0 12 5 4 24-8 17-8 29 0 45 10 17 9 21-4 21-8 0-15 4-15 9s9 7 19 4c21-5 30 16 23 55-7 37-25 25-20-14zm554-436c-1-13-6-22-9-20-4 1-14 2-22 2s-15 5-15 11c0 5 4 8 9 5s14 1 21 9c17 20 20 19 16-7z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#75675a",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1669 2317c36-39 41-42 41-29 0 4-17 20-38 36l-37 29 34-36zM1657 2270c10-11 21-20 25-20s0 9-9 20c-10 11-21 20-25 20s0-9 9-20zM1600 2273c0-4 20-27 44-50 25-23 52-53 60-65 11-16 16-18 16-7 0 9-27 41-60 73s-60 54-60 49zM134 2256c-3-8-12-12-20-9-9 3-6-9 10-38 19-33 22-47 15-62-6-10-8-21-5-25 3-3 6 0 6 6 0 7 7 9 18 5 15-6 16-5 2 12s-13 18 3 12c10-4 22-7 26-7 5 0 6-12 3-26-3-16-9-23-18-20-22 8-16-8 7-23 17-10 19-15 8-21-11-7-11-13 0-34 8-14 19-23 24-19 6 4 7 1 3-6-5-7-2-20 6-29s20-30 28-45c8-16 27-36 42-45s28-22 28-29 4-13 9-13c14 0 18-31 10-62-7-26-6-26 18-15 14 6 21 13 16 14-15 5-3 56 16 72 14 12 13 13-10 7-19-4-31 0-44 14-10 11-13 20-7 20 17 0-30 121-78 202-22 36-40 72-40 78 0 7-11 26-25 42s-23 34-20 39c4 5-2 6-11 2-12-4-15-3-10 5 4 7 5 12 1 12-3 0-8-6-11-14zm91-175c-2-5 7-19 20-31 31-29 33-50 3-24-13 10-6 1 15-20 45-46 48-62 7-41-16 8-29 19-28 23s-3 17-10 30c-7 12-10 22-6 22 3 0 2 6-3 13-12 15-13 48-1 41 5-3 6-9 3-13z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1642 2158c6-18 22-57 36-87 14-29 25-59 25-67 0-7 4-11 9-8 4 3 8-1 8-9 0-21-194-118-242-122-52-4-61-15-13-15 27 0 72 16 142 51 57 28 111 49 121 47s-20-21-73-46c-49-24-99-48-110-54s-45-14-75-18l-55-7 48-2c27 0 65 6 85 16 21 9 66 30 102 46 36 17 73 30 83 29 10 0 17 6 17 16 0 12 3 13 12 4 8-8 2-21-25-52-21-22-37-43-37-47s19 14 43 41l42 48 24-21c13-12 30-21 38-21s11-4 8-10c-4-6 1-7 11-3 14 5 16 3 11-12-6-14-5-16 7-6 19 16 45 4 39-19-3-10-21-33-41-51l-36-34 32 40c18 22 32 46 32 55 0 8-8 2-19-15-19-30-91-104-91-93 0 3 16 23 35 44s35 41 35 46c0 6-75-72-87-91-2-2-6-1-10 2-3 4 4 20 18 35 13 15 0 3-28-27-29-30-56-52-59-48-10 10-45-13-38-25 4-5 0-14-7-19-20-13-31-11-23 4 5 8 2 8-9-2-19-15-23-26-5-15 8 5 9 2 5-10-5-13 10-9 60 20 38 20 71 42 75 48s12 12 18 12c5 1 14 2 18 3 5 0 17 9 28 19 10 9 28 17 39 18 21 1 158 65 185 87 26 20 57 71 53 85-3 6-11 12-18 12-17 0-69 21-208 85-31 15-63 25-69 23-15-5 115-68 216-103 41-15 73-31 71-35-8-13-157 40-253 90-44 23-72 21-72-5 0-41-32 7-35 52 0 6-4 15-8 19s-7 17-7 29c0 18-69 105-84 105-3 0 0-15 6-32zm104-457c-16-17-38-28-53-28-16 0-21 2-12 7 6 5 17 6 24 4 6-3 22 7 35 21s26 25 29 25c2 0-8-13-23-29zM1876 2139c6-11 66-39 81-39 4 0-12 11-36 25-48 28-55 30-45 14zM1846 2110c12-5 25-13 29-19 3-6 12-11 18-11 7 1 1 10-12 20-13 11-31 20-40 19-11 0-10-3 5-9zM1284 1903c1-116 4-214 7-217 8-9 8 331 0 384-4 25-7-50-7-167z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1317 1893c1-120 5-228 8-240s15-27 26-34c18-9 30-2 99 67 44 43 78 80 76 83s20 21 48 40l51 34-35-39c-19-22-71-77-115-123-56-59-67-73-35-48 42 34 67 59 174 174 36 38 37 41 15 38-13-2-48-13-77-24-32-13-72-21-100-20l-47 2-3 115c-5 144-18 186-59 190l-30 3 4-218zm157-166c-24-27-43-40-49-35-6 6-1 17 15 30 14 12 18 19 10 16-47-18-49-15-5 6 70 34 73 32 29-17zm-54-46c0-5-7-14-15-21-16-14-18-10-9 14 6 17 24 22 24 7zM1248 1927c4-237 9-249 11-25 0 103-2 189-7 192-4 2-6-73-4-167z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1424 2080c3-14 6-31 6-37 0-7 5-13 10-13 12 0 2 50-13 65-6 7-8 2-3-15zM1970 2096c0-7 112-57 117-52 3 3-20 17-52 31-59 26-65 28-65 21zM1810 2082c0-8 37-28 115-62 28-12 58-26 68-31 32-17 137-47 137-39 0 4-12 11-27 14-31 8-212 84-228 97-18 13-65 29-65 21zM1964 2050c66-33 167-72 172-67 4 4-211 97-223 96-4 0 18-13 51-29zM1405 2052c4-8 11-46 15-85l9-72-3 73c-2 43-9 78-16 85-10 9-11 9-5-1zM2124 2025c36-19 45-19 20 0-10 8-26 14-34 15-8 0-2-7 14-15zM1578 1939c-21-11-38-22-38-24 0-3 18 4 40 15s40 23 40 25c0 7 0 7-42-16zM1699 1883c-14-16-42-50-63-78-21-27-77-87-125-132-47-46-82-83-77-83 22 0 199 188 289 308 17 22 1 12-24-15zM530 1865c-6-8-10-19-8-26 2-6 9 0 16 15 13 29 10 33-8 11zM506 1283c-4-4-12-8-19-9-52-8-72-27-107-95-16-30-36-61-45-69-9-7-25-26-36-42l-20-28h21c12 0 19 4 15 9-3 5-1 12 5 16 14 9 13-14-5-71-8-27-15-58-15-69 0-32 24-70 45-72 39-5 115-28 115-35 0-4 16-10 35-14 26-5 40-15 51-36 14-27 12-69-3-54-7 7-43-23-43-37 0-5 7-6 15-3 11 4 17-3 21-23 4-21 20-39 53-60 25-17 56-38 69-47 19-15 28-15 69-4 43 13 44 14 22 23-13 5-28 10-34 11-28 6-56 29-53 44 3 13 12 16 43 13l40-3-37 37c-21 20-38 40-38 45 0 4 14 20 31 34 23 19 41 26 72 25 23 0 36-3 29-6-25-10 1-23 48-23 39 0 48-3 44-15-8-20-88-48-123-43-26 4-29 2-20-14 5-10 19-18 30-18 13 0 19-5 16-13-3-9 6-14 33-15 28-2 45 4 68 23 16 14 39 25 51 25 35 0 71 67 80 151 6 51 5 78-3 88-11 15-11 15 39-5 8-3 15-1 15 4 0 15-30 43-40 37-5-3-12 0-16 6-4 7-3 9 4 5 5-3 12-1 14 5 6 17 58-1 75-27 11-18 12-28 5-37-7-8-9-29-5-52 4-27 3-36-5-31-16 9-15-7 0-22 28-28 37-13 40 71l3 82 28-55c19-38 25-46 21-25-4 17-15 44-25 61-23 39-26 66-3 38 14-18 14-18 3 6-6 14-20 34-29 45-10 11-20 31-22 45l-3 25-20-21c-11-12-30-25-42-28-14-5-23-16-24-29 0-12-9 5-19 37-24 76-35 83-139 87-49 2-54 5-63 31-6 15-13 28-17 28-5 0-21 11-37 25-32 28-66 40-89 31-9-3-14-2-11 3 8 13-146 46-158 34zm26-192c13-4 57-11 98-15 70-6 74-5 55 10-20 16-19 16 5 9 42-11 80-27 80-34 0-8-112-41-140-41-11 0-20-7-20-15s-5-15-11-15-9 9-6 20c4 16 1 20-13 18-19-3-110 49-110 63 0 11 32 11 62 0zm113-128c51-7 65-19 64-52l-1-26-7 24c-8 30-24 36-41 16-18-21-35-19-53 8-14 22-15 22-35 3-24-21-57-15-48 9 3 8 1 15-5 15s-8 4-4 9c5 9 38 8 130-6zM252 924l4-35-19 23c-10 13-16 17-12 11 3-7 1-13-5-13-7 0-20-10-31-22-23-29-25-123-5-193 8-26 14-53 13-59-1-5 3-10 9-11 11 0 74-59 74-70 0-4 6-13 14-20 12-12 15-12 20 1 3 8-1 17-9 21-9 3-14 13-13 22 2 10-3 15-15 14-14-1-17 4-14 18 3 10 1 22-5 25-5 3-7 12-4 19 2 7-2 16-9 19-8 3-12 14-10 26 2 11-1 20-7 20s-5 7 3 17c12 15 12 16-3 10-21-7-24 13-6 31 6 6 12 21 13 32 2 19 0 19-24 5-15-9-9-1 14 20 22 20 36 35 30 34-26-4-42 2-42 16 0 18 2 18 27 3 21-13 27-11 30 12 5 32 0 60-11 60-7 0-10-14-7-36zM363 490c0-19 2-29 4-22 3 6 8 10 13 7 4-3 13 2 19 9 10 12 9 14-6 12-10-2-21 4-24 13-4 9-7 1-6-19z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#697175",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1943 2704c0-15 48-29 56-16 3 4 14 11 24 15 14 5 17 1 17-23 0-19 6-31 18-34 32-10 72 5 72 27 0 6-6 2-14-9-14-18-15-18-13 4 1 12 5 22 9 22s5 6 2 14c-8 20-171 19-171 0zM2150 2677c-18-37-15-67 6-67 10 0 14 13 14 50 0 28-1 50-2 50-2-1-10-15-18-33zM255 2676c-2-11-6-34-9-51-3-16-8-43-11-60-5-23-4-26 4-15 8 12 11 8 11-17 0-28 4-33 23-32 16 1 18 2 5 6-35 9-18 24 20 17 34-7 36-6 23 9-7 10-10 17-6 17 5 0 1 8-7 18-20 23-30 52-18 52 6 0 10-5 10-11 0-5 4-7 10-4 5 3 12-6 16-20 3-14 9-24 12-21s-3 32-13 65c-14 48-22 60-41 64-19 3-25-1-29-17zM1955 2650c28-12 37-12 30 0-3 6-16 10-28 9-21 0-21-1-2-9zM2040 2621c0-10 30-24 37-17 3 2-5 9-16 16-12 6-21 7-21 1zM1999 2590c35-17 66-28 69-25 5 5-67 38-108 49-14 4 4-7 39-24zM2157 2498c-2-7-4-28-3-46 1-17-1-32-4-32s-11-19-17-42c-10-37-10-45 4-55 26-20 33 1 32 100-1 87-3 98-12 75zM1942 2468c-7-7-12-19-12-27 0-19 23 1 26 24 3 18 1 18-14 3zM259 2441c-1-12-2-31-3-43 0-13-11-27-23-33-25-11-32-28-8-19 10 4 15 0 15-12 0-15 2-16 9-5 6 10 12-3 18-40l9-54 11 37c6 21 10 49 9 63-2 14 1 25 5 25 10 0-10 41-25 51-5 4-6 14-3 23 3 8 2 18-3 21-6 4-11-3-11-14zM436 2444c-9-25-7-64 4-64 6 0 10 18 10 40 0 43-4 50-14 24zM590 2406c0-10 40-76 46-76 3 0-2 12-10 28-22 40-36 58-36 48zM1260 2353c-32-6-51-23-24-22 10 0 40 4 67 8 26 4 47 4 47 0s-21-11-47-15c-74-11-97-23-43-22 67 0 95 10 98 36 3 20-1 22-35 21-21-1-49-4-63-6zM189 2330c-1-5-2-14-3-19 0-5-4-13-8-17-5-4-8-12-8-18 0-7 3-7 10 0 12 12 24 64 15 64-3 0-6-4-6-10zM1115 2330l-40-7 42-2c23 0 45 4 48 9 3 6 3 9-2 9-4-1-26-5-48-9zM1115 2290l-30-8h30c17 0 39 3 50 8l20 9-20-1c-11 0-33-4-50-8zM134 2256c-3-8-12-12-20-9-9 3-5-10 11-39 17-30 21-48 15-58-14-22-12-33 4-18 8 7 12 16 10 19-2 4 7 6 21 5 14 0 25-1 25-1s-4-14-9-31-5-37 0-45 3-16-4-21c-8-5-8-13 2-32 8-14 18-23 22-20 5 3 6-1 3-9s2-20 11-27c8-7 15-17 15-22 0-19 39-49 68-53l31-4-25 67c-14 37-43 97-64 134-22 36-40 72-40 78 0 7-11 26-25 42s-23 34-20 39c4 5-2 6-11 2-12-4-15-3-10 5 4 7 5 12 1 12-3 0-8-6-11-14zm91-175c-2-5 7-19 20-31 28-27 34-49 8-29-10 7-3-2 15-20 40-42 41-56 2-36-16 8-29 19-28 23s-3 17-10 30c-7 12-9 22-5 22s2 5-5 12c-15 15-16 52-2 43 6-4 8-10 5-14zM684 2245c11-8 24-15 30-15 5 0 1 7-10 15-10 8-23 14-29 14-5 0-1-6 9-14zM1650 2140c6-11 8-20 5-20s3-10 15-22c11-12 20-28 20-35 0-22 44-107 65-124 19-16 19-18-18-58-20-23-37-44-37-48s19 14 43 41c39 45 44 48 59 33 8-9 18-13 22-10 3 4 6 1 6-5 0-7 3-11 8-9 4 1 26-6 49-16 49-23 48-39-5-88l-36-34 32 40c18 22 32 46 32 55 0 8-8 2-19-15-19-30-91-104-91-93 0 3 16 23 35 44s35 41 35 46c0 6-75-72-87-91-2-2-6-1-10 2-3 4 4 20 18 35 13 15 0 3-28-27-29-30-56-52-59-48-10 10-45-13-38-25 4-5 0-14-7-19-20-13-31-11-23 4 5 8 2 8-9-2-19-15-23-26-5-15 8 5 9 2 5-10-5-13 10-9 60 20 38 20 71 42 75 48s12 12 18 12c5 1 14 2 18 3 5 0 17 9 28 19 10 9 28 17 39 18 27 1 167 70 194 95 26 24 27 48 4 55-10 4-33 13-52 21-18 8-39 16-45 18-23 5-90 34-140 62-29 15-30 15-51-11-25-32-29-32-32-3-6 64-40 151-67 169-23 16-37 9-26-12zm96-439c-16-17-38-28-53-28-16 0-21 2-12 7 6 5 17 6 24 4 6-3 22 7 35 21s26 25 29 25c2 0-8-13-23-29zM831 2135c-1-14 12-30 25-32 6-1 11 5 11 13s-6 13-13 10-15 0-18 7c-2 7-5 8-5 2zM883 2126c4-10 7-22 7-27s5-9 11-9c15 0 7 43-10 48-10 3-12 0-8-12zM1280 2079c0-19 4-41 9-48 6-10 8 1 4 30-7 55-13 63-13 18z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1317 1932c3-238 5-279 14-294 5-7 9-9 9-4 0 6 6 2 13-8 13-17 16-17 45 15 19 21 30 41 26 51-3 10 4 22 18 32 26 19 19 21-16 5-21-10-23-15-15-32 8-14 7-23-3-33-12-12-14-8-12 28 1 24 2 56 3 71 1 16 5 26 10 23 5-4 12 0 14 6 4 9 6 10 6 1 1-6-3-15-9-18-5-3-10-13-10-22 0-11 6-14 23-9 32 8 127 52 157 73 21 15 19 11-9-22-18-22-60-68-93-102-76-79-69-82 9-5 57 55 172 180 143 155-16-15-34-17-26-4 3 5-20-2-52-15-37-16-75-23-108-22l-51 1 3 40c2 22 0 45-3 51-4 6-6 36-5 66s-4 75-11 100c-12 39-18 45-43 47l-29 1 2-176z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1424 2087c3-10 6-27 6-38 0-10 5-19 10-19 12 0 2 50-13 65-7 7-8 4-3-8zM1830 2069c0-5 6-9 14-9s17-6 19-12c4-8 6-7 6 3 1 9-8 19-19 22s-20 1-20-4zM1820 2029c14-13 64-39 75-39 3 0 5 4 5 8s-17 14-37 22c-21 8-42 17-48 19-5 2-3-2 5-10zM1934 2021c11-12 27-21 37-21s21-4 24-10c3-5 24-14 46-20s47-14 56-17c11-4 14-2 9 5-4 7-14 12-23 12-16 0-77 25-138 56l-30 16 19-21zM2006 2028c3-5 8-7 11-4s15-1 27-9c11-8 27-15 36-14 8 0-1 8-20 17-44 19-62 23-54 10zM1924 1975c11-8 26-15 33-15s21-4 31-10c31-18 102-38 102-29 0 5-5 9-11 9-10 0-22 5-104 40-16 7-39 15-50 17-20 3-20 3-1-12zM1618 1918c-53-35-44-36 18-3 56 30 58 32 39 32-8 0-34-13-57-29zM1726 1933c-4-5-11-8-14-8-4-1-20-9-37-19-29-17-27-17 25-1l25 8-20-24c-11-13-22-26-25-29s-21-25-39-50-74-84-125-132c-50-49-87-88-82-88 15 0 156 142 219 220 33 41 69 83 80 93 13 12 17 21 10 28-5 5-13 6-17 2zM300 1880c0-5 5-10 10-10 6 0 10-7 10-15s4-15 9-15c14 0 18-31 10-62-7-26-6-26 18-15 14 6 21 13 16 14-15 5-3 56 16 72 14 12 13 13-10 7-19-4-31 0-44 14-20 22-35 26-35 10zM1606 1875c-11-8-27-15-35-15-9 0-27-9-41-20-18-15-20-18-6-13 35 12 116 53 116 58 0 9-15 5-34-10zM1438 1823c12-2 30-2 40 0 9 3-1 5-23 4-22 0-30-2-17-4zM1585 1707c-103-106-100-108 8-7 42 39 115 122 105 119-1 0-52-51-113-112zM1490 1745c-13-14-21-27-18-30 2-3 17 9 33 25 16 17 24 30 19 30-6 0-21-11-34-25zM360 1751c0-17 29-20 42-3 12 15 11 16-4 3-12-9-18-10-18-2 0 6-4 11-10 11-5 0-10-4-10-9zM1540 1558c-14-5-58-10-99-10-54 0-70-3-62-11 17-17 14-40-4-33-13 5-35-3-65-22-2-2 2-7 9-12 11-6 9-13-11-33-27-27-27-40 0-30 10 4 13 2 8-5-13-21 12-13 39 12 18 17 22 26 13 29-9 4-9 6-1 6 34 2 21-54-16-68-17-6-20-10-8-10 20-1 23-29 4-37-7-2-13-13-14-22-1-15 7-19 41-21 54-2 88 23 105 79 7 23 32 67 55 98 66 86 67 116 6 90zM488 1263c-16-3-28-9-28-14s-10-9-23-9c-17 0-30-14-55-59-17-32-39-64-47-71-9-7-25-26-36-42l-20-28h21c12 0 19 4 16 9s2 15 11 22c14 12 16 12 11-1-3-8-13-46-23-85-21-84-12-120 32-128 34-6 88-24 126-43 16-8 35-14 43-14 13 0 44-48 44-69 0-6-9-19-21-30-13-12-17-21-10-26 6-3 11-15 11-26 0-10 4-19 9-19 4 0 28-17 52-38 58-52 83-64 114-56 29 7 28 27-1 33-10 2-31 13-45 26-35 29-23 57 21 48 19-3 30-1 30 6 0 6-4 11-9 11s-17 12-26 27c-18 26-18 27 14 55 24 22 41 28 74 27 23 0 36-3 29-6-25-10 1-23 48-23 39 0 48-3 44-14-7-19-76-46-114-46-33 0-41-17-12-26 9-3 25-10 34-15 31-16 84-10 103 11 10 11 28 20 40 20 15 0 32 14 51 42 26 37 29 49 29 122-1 45-4 96-7 114-4 19-2 32 4 32s8 14 3 36c-9 52-25 83-47 90-10 3-16 8-14 12s-26 8-63 10c-56 2-69 6-86 27-12 14-26 25-31 25-6 0-19 9-30 21-22 25-69 51-77 43-3-3-16 0-29 7-23 13-111 19-160 12zm44-172c13-4 57-11 98-15 70-6 74-5 55 10-20 16-19 16 5 9 42-11 80-27 80-34 0-8-112-41-140-41-11 0-20-7-20-15s-5-15-11-15-9 9-6 20c4 16 1 20-13 18-19-3-110 49-110 63 0 11 32 11 62 0zm113-128c51-7 65-19 64-52l-1-26-7 24c-8 30-29 39-37 17-8-20-54-21-54-2 0 24-20 29-40 11-22-20-55-13-46 10 3 8 1 15-5 15s-8 4-4 9c5 9 38 8 130-6zM1105 1063c-11-11-30-24-42-27-17-5-23-15-23-36 0-24 5-30 30-35 37-8 68-49 52-68-7-8-9-29-5-52 4-27 3-36-5-31-16 9-15-7 0-22 28-28 37-13 40 71l3 82 28-55c19-38 25-46 21-25-4 17-15 44-25 61-23 38-26 66-4 38 14-17 15-16 1 13-9 17-21 33-27 35s-14 19-18 38l-7 34-19-21zM225 923c3-7 1-13-5-13-7 0-20-10-31-22-23-29-25-123-4-193 8-27 12-52 9-57-3-4 0-8 7-8 12 0 79-64 79-75 0-4 6-13 14-20 12-12 15-12 20 1 3 8-1 17-9 21-9 3-14 13-13 22 2 10-3 15-15 14-14-1-17 4-14 18 3 10 1 22-5 25-5 3-7 12-4 19 2 7-2 16-9 19-8 3-12 14-10 26 2 11-1 20-7 20s-5 7 3 17c12 15 12 16-3 10-21-7-24 13-6 31 6 6 12 21 13 32 2 19 0 19-24 5-15-9-9-1 14 20 22 20 36 35 30 34-26-4-42 2-42 16 0 18 9 19 25 3 21-21 21-4 0 22-11 14-17 19-13 13zM1246 768c3-4-2-8-10-8-10 0-13-6-10-15 4-8 10-13 14-10 5 3 3-8-3-24-9-25-14-28-29-20-13 7-18 6-16-3 2-7-4-12-12-10-13 2-13 1 0-10 8-7 14-23 12-35-2-16-11-23-35-25-30-3-32-5-29-38 2-29 0-32-8-17-6 9-17 17-25 17s-19 9-25 21c-10 18-25 19-25 1 0-4-3-12-7-18s-3-26 2-45c12-42 12-72 0-41-6 13-18 22-31 22-15 0-19 4-15 16 3 9 2 12-5 9-6-4-8-13-5-21s2-13-2-13c-29 5-37-3-37-40-1-34 1-37 12-23 12 16 13 16 7 0-8-23 18-24 36-3 7 8 21 15 32 15 22 0 25 7-28-75-34-52 13-22 62 40l16 20-7-20c-15-45-16-49-2-25 8 14 18 39 21 56 4 17 26 52 50 76 50 52 93 125 109 186 6 23 15 42 19 42s5 6 2 13c-3 8-11 14-19 14s-12-4-9-9zm-161-202c14-8 22-17 16-20-5-4-13-1-17 5-4 8-9 7-15-2-6-11-11-11-20-2-6 6-8 16-5 22 9 14 8 14 41-3zM160 498c0-3 7-18 15-34 10-21 11-31 3-41s-8-28 1-66c12-54 72-183 81-176 3 2 24-10 45-27 50-39 73-51 143-75 164-56 310-37 421 56 33 28 42 24 15-6s11-18 44 14c26 25 44 86 22 72-6-3-10-17-10-30s-5-27-10-30c-6-4-10 9-10 32 0 28-3 34-10 23-8-12-14-10-37 16-34 38-102 54-232 54-84 0-87-1-156-45-84-53-89-51-152 51-23 38-62 88-87 111s-46 46-46 53c0 6-9 20-20 32s-20 19-20 16zM270 163c0-16 63-69 110-93 22-11 40-18 40-15 0 2-15 12-32 21-18 9-52 35-75 57-24 23-43 36-43 30z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M785 55c-29-14-86-28-135-34l-85-10 84 4c60 3 98 11 137 29 30 14 54 27 54 30 0 7 5 9-55-19z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#9b5a5f",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M488 1263c-16-3-28-9-28-14s-7-9-16-9c-21 0-38-18-78-87-19-32-44-66-55-75-25-21-27-38-5-38 8 0 13 4 10 9s2 15 11 22c14 12 16 12 11-1-3-8-13-47-22-85-21-85-12-120 31-128 34-6 88-24 126-43 16-8 35-14 43-14 13 0 44-48 44-69 0-6-9-19-21-30-13-12-17-21-10-26 6-3 11-15 11-26 0-10 4-19 9-19 4 0 28-17 52-38 58-52 83-64 114-56 29 7 28 27-1 33-10 2-31 13-45 26-35 29-23 57 21 48 19-3 30-1 30 6 0 6-4 11-9 11s-17 12-26 27c-18 26-18 27 14 55 24 22 41 28 74 27 23 0 36-3 29-6-25-10 1-23 48-23 39 0 48-3 44-14-7-19-76-46-114-46-33 0-41-17-12-26 9-3 25-10 34-15 31-16 84-10 103 11 10 11 28 20 40 20 15 0 32 14 51 42 26 37 29 49 29 122-1 45-4 96-7 114-4 19-2 32 4 32s8 14 3 36c-15 83-37 100-137 111-47 5-63 11-75 30-8 12-21 23-28 23-6 0-20 9-31 21-22 25-69 51-77 43-3-3-16 0-29 7-23 13-111 19-160 12zm44-172c13-4 57-11 98-15 70-6 74-5 55 10-20 16-19 16 5 9 42-11 80-27 80-34 0-8-112-41-140-41-11 0-20-7-20-15s-5-15-11-15-9 9-6 20c4 16 1 20-13 18-19-3-110 49-110 63 0 11 32 11 62 0zm113-128c51-7 65-19 64-52l-1-26-7 24c-8 30-29 39-37 17-8-20-54-21-54-2 0 24-20 29-40 11-22-20-55-13-46 10 3 8 1 15-5 15s-8 4-4 9c5 9 38 8 130-6zM1068 1038c-22-8-28-16-28-38 0-24 5-30 30-35 37-8 68-49 52-68-7-8-9-29-5-52 4-27 3-36-5-31-16 9-15-7 0-22 28-28 37-13 40 71l3 82 28-55c19-38 25-46 21-25-4 17-15 44-25 61-23 39-26 66-3 38 14-18 14-18 3 6-14 29-48 64-69 72-8 3-27 1-42-4zM257 953c-11-10-8-53 3-53 6 0 10 14 10 30 0 31-2 35-13 23zM1246 768c3-4-2-8-10-8-10 0-13-6-10-15 4-8 10-13 14-10 5 3 3-8-3-24-9-25-14-28-29-20-13 7-18 6-16-3 2-7-4-12-12-10-13 2-13 1 0-10 8-7 14-23 12-35-2-16-11-23-35-25-30-3-32-5-29-38 2-29 0-32-8-17-6 9-17 17-25 17s-19 9-25 21c-10 18-25 19-25 1 0-4-3-12-7-18s-3-26 2-45c12-42 12-72 0-41-6 13-18 22-31 22-15 0-19 4-15 16 3 9 2 12-5 9-6-4-8-13-5-21s2-13-2-13c-29 5-37-3-37-40-1-34 1-37 12-23 12 16 13 16 7 0-8-23 18-24 36-3 12 14 50 21 50 10 0-3-14-24-30-47-42-57-27-63 22-8 34 37 39 41 34 20-5-17-4-20 2-10 6 8 13 29 16 46 4 17 26 52 50 76 50 52 93 125 109 186 6 23 15 42 19 42s5 6 2 13c-3 8-11 14-19 14s-12-4-9-9zm-161-202c14-8 22-17 16-20-5-4-13-1-17 5-4 8-9 7-15-2-6-11-11-11-20-2-6 6-8 16-5 22 9 14 8 14 41-3z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#598291",
    stroke: "none",
    d: "M628 13c12-2 30-2 40 0 9 3-1 5-23 4-22 0-30-2-17-4z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#9d786b",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M146 2225c4-9 20-31 36-48l29-32-13 34c-8 19-24 41-36 49-20 13-22 13-16-3zM1663 2113c14-27 33-68 43-92s27-55 37-68c22-27 174-107 227-118 19-4 38-12 41-17 8-13 71 42 67 59-2 8-34 26-73 39-38 14-101 40-140 60l-70 35-20-26c-25-31-30-31-31-2-5 73-57 177-90 177-12 0-11-9 9-47z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M210 2136c0-3 20-45 45-92 25-46 45-87 45-89 0-14-26-1-51 26-35 37-36 34-6-24 21-41 97-120 97-100 0 5-3 13-7 16-3 4-7 18-9 31-5 48-114 270-114 232zM1319 2097v-197c2-181 8-276 19-266 3 3 10-1 16-10 10-13 16-9 46 23 19 21 26 30 14 20-26-22-37-22-25 1 13 24 13 283-1 367-8 52-13 65-19 50s-8-16-8-4c-1 19-41 33-42 16zM1827 2025c24-17 73-37 73-30 0 6-76 45-87 45-4 0 2-7 14-15zM1935 2021c13-12 136-63 141-58 2 2-31 18-74 35-42 18-72 28-67 23zM1910 1986c0-6 157-66 172-66 11 1-156 70-168 70-2 0-4-2-4-4zM1690 1915c-25-13-42-24-39-24 13-2 78 29 84 39 8 12 10 13-45-15zM1573 1861c-28-14-55-30-59-34-11-10 86 32 111 49 30 21 6 14-52-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1555 1819c-27-10-66-18-86-19-28 0-39-6-49-25-7-14-10-28-7-32 9-8 133 42 165 67 13 11 29 17 35 13 6-3 7-1 3 5-4 7-8 11-9 11-1-1-24-10-52-20zM1443 1823c9-2 25-2 35 0 9 3 1 5-18 5s-27-2-17-5zM1570 1775c-13-14-19-25-14-25 8 1 50 50 41 50-2 0-14-11-27-25zM1491 1745c-13-14-22-28-19-30 3-3 17 8 31 25 33 36 22 40-12 5zM1421 1726c-13-7-19-16-14-19 6-4 18 2 28 13 21 23 19 24-14 6zM1495 1698l-40-43 43 40c39 36 47 45 39 45-2 0-21-19-42-42zM488 1263c-16-3-28-9-28-14s-7-9-16-9c-21 0-38-18-78-87-19-32-44-66-55-75-12-10-21-22-21-28 0-5 9-1 21 11 11 11 22 19 24 17s-5-38-16-81c-25-93-18-128 27-138 40-10 93-28 127-45 16-8 35-14 43-14 13 0 44-48 44-69 0-6-9-19-21-30-13-12-17-21-10-26 6-3 11-15 11-26 0-10 4-19 9-19 4 0 28-17 52-38 58-52 83-64 114-56 29 7 28 27-1 33-10 2-31 13-45 26-35 29-23 57 21 48 19-3 30-1 30 6 0 6-4 11-9 11s-17 12-26 27c-18 26-18 27 14 55 24 22 41 28 74 27 23 0 36-3 29-6-25-10 1-23 48-23 39 0 48-3 44-14-7-19-76-46-114-46-33 0-41-17-12-26 9-3 25-10 34-15 31-16 84-10 103 11 10 11 28 20 40 20 15 0 32 14 51 42 26 37 29 49 29 122-1 45-4 96-7 114-4 19-2 32 4 32s8 14 3 36c-15 83-37 100-137 111-47 5-63 11-75 30-8 12-21 23-28 23-6 0-20 9-31 21-22 25-69 51-77 43-3-3-16 0-29 7-23 13-111 19-160 12zm165-153c10 0 41-10 68-21 48-21 64-39 33-39-8 0-40-11-70-25-31-14-59-23-64-20-4 3-11-1-13-7-4-9-8-10-14-3-4 6-34 28-65 49-60 41-71 56-40 56 10 0 22 4 28 9 12 12 96 19 109 9 5-5 17-8 28-8zm-8-147c51-7 65-19 64-52l-1-26-7 24c-8 30-29 39-37 17-8-20-54-21-54-2 0 24-20 29-40 11-22-20-55-13-47 10 4 10 1 12-11 8-15-6-15-4-4 9 13 17 30 17 137 1zM1090 1040c0-5-10-10-22-12-16-2-24-11-26-29-3-22 2-27 26-32 45-9 61-31 58-80-5-75-6-78-16-72-5 3-10 2-10-4 0-13 40-35 48-26 4 3 0 10-8 15-12 8-12 10-1 10 20 0 11 123-12 148-9 10-14 22-10 25 12 13 21 7 33-23 7-17 17-33 22-36 6-4 5 3-1 14-16 31-13 49 5 26 14-18 14-18 3 6-21 43-89 97-89 70zM258 925c2-14 6-25 8-25s4 11 4 25-4 25-9 25c-4 0-6-11-3-25z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1060 919c7-11 14-19 16-16 7 7-7 37-17 37-6 0-5-9 1-21zM219 913c-45-10-63-122-34-218 8-27 12-52 9-57-3-4 0-8 7-8 12 0 79-64 79-75 0-4 6-13 14-20 12-12 15-12 20 1 3 8-1 17-9 21-9 3-14 13-13 22 2 10-3 15-15 14-14-1-17 4-14 18 3 10 1 22-5 25-5 3-7 12-4 19 2 7-2 16-9 19-8 3-12 14-10 26 2 11-1 20-7 20s-5 7 3 17c12 15 12 16-3 10-21-7-24 13-6 31 6 6 12 21 13 32 2 19 0 19-24 5-15-9-9-1 14 20 22 20 36 35 30 34-26-4-42 2-42 16 0 18 9 19 25 3s23-7 9 12c-7 9-19 14-28 13zM1253 816c0-18 3-24 9-18 7 7 7 16 0 28-8 14-9 13-9-10zM1246 768c3-4-2-8-10-8-10 0-13-6-10-15 4-8 10-13 14-10 5 3 3-8-3-24-9-25-14-28-29-20-13 7-18 6-16-3 2-7-4-12-12-10-13 2-13 1 0-10 8-7 14-23 12-35-2-16-11-23-35-25-30-3-32-5-29-38 2-29 0-32-8-17-6 9-17 17-25 17s-19 9-25 21c-10 18-25 19-25 1 0-4-3-12-7-18s-3-26 2-45c12-42 12-72 0-41-6 13-18 22-31 22-15 0-19 4-15 16 3 9 2 12-5 9-6-4-8-13-5-21s2-13-2-13c-29 5-37-3-37-40-1-34 1-37 12-23 12 16 13 16 7 0-8-23 18-24 36-3 17 20 60 19 75-1 10-15 13-13 18 12 3 16 27 52 53 79 46 49 114 172 114 207 0 10 4 18 10 18 5 0 7 6 4 13-3 8-11 14-19 14s-12-4-9-9zm-161-202c14-8 22-17 16-20-5-4-13-1-17 5-4 8-9 7-15-2-6-11-11-11-20-2-6 6-8 16-5 22 9 14 8 14 41-3z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M1128 643c10-4 9-8-5-19-20-15-6-19 16-5 15 10 7 31-12 30-8 0-8-2 1-6zM363 499c1-27 18-32 38-12 9 9 7 11-7 9-11-2-22 4-26 13-4 11-6 7-5-10zM870 476c0-11-5-16-14-13-8 3-17 0-20-8-6-17 25-30 34-14 6 8 9 7 13-2 3-9 6-7 6 6 0 11-4 27-9 35-8 13-10 12-10-4zM897 468c7-8 10-18 6-21-10-10 10-8 27 3s14 15-20 25c-21 7-23 6-13-7zM1040 425c-7-8-9-15-4-15s-2-9-16-20c-14-10-21-22-17-26 8-8 44 22 58 48 12 22-5 32-21 13z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#b2855c",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M198 863c-24-6-33-48-19-80 6-14 9-34 5-45-4-14-3-18 6-13 7 4 10 2 9-6s0-21 4-29c3-8 8-22 11-30s4 5 3 30-6 48-11 51c-5 4-7 13-4 20 3 8 6 19 8 24 1 6 7 17 13 25s2 6-11-4c-28-24-28-13-1 30 21 34 20 36-13 27zM1214 665c3-8 0-14-6-12-7 1-14-9-17-23s-12-25-18-26c-27-2-33-4-32-11 1-5 0-11-1-15-5-15-8-28-10-45-1-11-3-13-7-6-3 10-9 9-20-3-9-8-24-13-34-11-11 3-19 1-19-4s5-9 11-9 4-7-5-15c-8-8-19-15-25-15s-11-5-11-10c0-6 14-4 35 4 41 17 73 35 63 36-3 0 7 14 23 31s26 35 23 40 0 8 6 7c7-2 25 21 42 50 25 44 27 52 13 52-11 0-15-5-11-15zM230 632c0-5 7-15 15-22s15-8 15-2c0 5-7 15-15 22s-15 8-15 2zM975 465c-3-8-7-22-10-30-6-20 2-19 27 4 11 11 18 25 15 33-4 8-6 7-6-5-1-10-6-15-11-12-6 4-8 11-5 16 4 5 4 9 0 9-3 0-8-7-10-15z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#a27b8a",
    stroke: "none",
    d: "M1070 444c0-10-3-14-7-11-8 9-34-13-28-24 3-4-4-13-15-19-20-11-27-30-11-30 15 0 82 88 71 95-5 3-10-2-10-11z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].g, {
    fill: "#8f949b",
    stroke: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    d: "M340 1783c0-13 5-23 10-23 13 0 13 11 0 30-8 12-10 11-10-7zM1042 419c-6-15-18-29-26-32-9-4-16-11-16-17 0-16 37 7 50 31 6 11 9 25 7 32-3 7-9 0-15-14zM193 414c-16-40-7-99 26-166 18-37 40-73 49-80 12-10 11-7-3 17-17 27-14 26 26-11 61-56 102-79 190-103 133-37 262-22 353 40 52 36 62 59 41 102-14 31-24 37-66 46-28 6-96 11-152 11-100 0-104-1-154-34-95-62-106-60-162 32-22 37-63 89-90 116-45 44-51 48-58 30z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#cdabc5",
    stroke: "none",
    d: "M1041 416c-6-14-15-26-20-26s-11-7-15-15c-4-12-2-13 12-6 21 11 48 58 39 67-4 4-11-5-16-20z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].path, {
    fill: "#b2bcc2",
    stroke: "none",
    d: "M195 391c-4-26-1-51 10-77 8-21 13-44 11-51-3-7 0-15 6-19 7-5 9-2 4 7-4 8-1 5 6-5 59-89 151-150 273-181 130-33 271-7 346 65 39 37 40 38 26 71-19 48-52 60-180 66-119 6-147-1-229-58-47-34-74-25-114 36-20 30-44 55-53 55-28 1-58 33-76 83-10 26-19 47-20 47-2 0-6-17-10-39z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileSvg);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _components_PostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostItem */ "./src/components/PostItem.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HomePage({
  allPosts
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "flex flex-col md:flex-row justify-between items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "text-gray-600 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Recent Writing:"), __jsx("div", {
    className: "mt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, allPosts.length > 0 && allPosts.map(post => __jsx(_components_PostItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: post,
    key: post.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "min-w-xs mt-8 md:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "md:text-center text-gray-600 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Portfolio:"), __jsx("div", {
    className: "px-4 py-8 flex flex-col justify-start md:items-center md:justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://tituy-client.now.sh/",
    target: "_blank",
    rel: "noopener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center justify-center py-8 px-4 min-w-xs max-w-sm border border-primary rounded-md hover:bg-gray-100 bg-white ",
    style: {
      backdropFilter: 'blur(0.8)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "font-bold pb-4 text-xl text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Tituy"), __jsx("div", {
    className: "text-gray-800 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Reading, Writing, Sharing online platform for Cambodian people."), __jsx("img", {
    src: "/images/tituy.png",
    className: "w-48 h-48 rounded-full object-cover mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }))))))));
}
async function getStaticProps() {
  const allPosts = Object(_lib_api__WEBPACK_IMPORTED_MODULE_4__["getAllPosts"])(['title', 'date', 'slug']);
  return {
    props: {
      allPosts
    }
  };
}

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/txb/PersonalProject/portfolio/tepy.dev/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZUZvcm1hdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bvc3RJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU1ZHL0Jsb2IxLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NWRy9Mb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NWRy9Qcm9maWxlU3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFBvc3RTbHVncyIsInJlYWRkaXJTeW5jIiwiZ2V0UG9zdEJ5U2x1ZyIsInNsdWciLCJmaWVsZHMiLCJyZWFsU2x1ZyIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJjb250ZW50IiwibWF0dGVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJtYXAiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsImRhdGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkRhdGVGb3JtYXRlciIsImRhdGVTdHIiLCJjbGFzc05hbWUiLCJyZXN0IiwicGFyc2VJU08iLCJGb290ZXIiLCJIZWFkZXIiLCJOYXZMaW5rIiwiTGF5b3V0IiwiUG9zdEl0ZW0iLCJwb3N0IiwidGl0bGUiLCJQcm9maWxlIiwiRGV0YWlsIiwidG9wIiwibGVmdCIsIlByb2ZpbGVJbWFnZSIsIkJsb2IxIiwiaWNvbiIsImhpZGRlbiIsIm9wYWNpdHkiLCJwYXRoTGVuZ3RoIiwiZmlsbCIsInZpc2libGUiLCJMb2dvIiwibG9hZGluZ1R5cGUiLCJkdXJhdGlvbiIsImVhc2UiLCJQcm9maWxlU3ZnIiwi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RkYsQ0FERixDQURGO0FBK0NEO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNRixRQUFRLEdBQUd4WCw0REFBVyxDQUFDLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsQ0FBRCxDQUE1QjtBQUNBLFNBQU87QUFDTGlFLFNBQUssRUFBRTtBQUFFdVQ7QUFBRjtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVERCxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBqb2luKHByb2Nlc3MuY3dkKCksICdfcG9zdHMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIHJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzID0gW10pIHtcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sICcnKTtcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtyZWFsU2x1Z30ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gcmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuXG4gIGNvbnN0IGl0ZW1zID0ge307XG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkID09PSAnc2x1ZycpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xuICAgIH1cbiAgICBpZiAoZmllbGQgPT09ICdjb250ZW50Jykge1xuICAgICAgaXRlbXNbZmllbGRdID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKGRhdGFbZmllbGRdKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RzKGZpZWxkcyA9IFtdKSB7XG4gIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKCk7XG4gIGNvbnN0IHBvc3RzID0gc2x1Z3NcbiAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpXG4gICAgLnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRhID8gJy0xJyA6ICcxJykpO1xuICByZXR1cm4gcG9zdHM7XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRm9ybWF0ZXIoeyBkYXRlU3RyLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkge1xuICBjb25zdCBkYXRlID0gcGFyc2VJU08oZGF0ZVN0cik7XG4gIHJldHVybiAoXG4gICAgPHRpbWVcbiAgICAgIGRhdGVUaW1lPXtkYXRlU3RyfVxuICAgICAgY2xhc3NOYW1lPXtgbXQtMSB0ZXh0LXNtIGJsb2NrIHRleHQtZ3JheS02MDAgJHtjbGFzc05hbWV9YH1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtmb3JtYXQoZGF0ZSwgJ0xMTExcdGQsIHl5eXknKX1cbiAgICA8L3RpbWU+XG4gICk7XG59XG4iLCJmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTQ4IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWVuZCBwYi04IGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci02IGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90ZXB5dGhhaVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICBHaXRIdWJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1RlcHlUaGFpXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+QDIwMjAsPC9zcGFuPlxuICAgICAgICA8c3Bhbj5UZXB5IFRoYWk8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMb2dvIGZyb20gJy4vU1ZHL0xvZ28nO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidHJhbnNmb3JtIC1za2V3LXgtNiBmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2IGJvcmRlci0yIHB4LTQgbXktMiBib3JkZXItdGVhbC05MDAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPExvZ28gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvd3JpdGluZ1wiIGNsYXNzTmFtZT1cIm1yLTZcIj5cbiAgICAgICAgICAgIFdyaXRpbmdcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXZMaW5rPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIE5hdkxpbmsocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaHJlZiwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICd0ZXh0LXByaW1hcnknIDogJ3RleHQtYmxhY2snXG4gICAgICAgIH0gaG92ZXI6dGV4dC1wcmltYXJ5IGN1cnNvci1wb2ludGVyIGZvbnQtbWVkaXVtICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2xpPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC0xMCBteC1hdXRvIGZvbnQtYm9keSBcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IERhdGVGb3JtYXRlciBmcm9tICcuL0RhdGVGb3JtYXRlcic7XG5cbmZ1bmN0aW9uIFBvc3RJdGVtKHsgcG9zdCwgY2xhc3NOYW1lLCBocmVmID0gJyMnIH0pIHtcbiAgY29uc3QgeyB0aXRsZSwgZGF0ZSwgc2x1ZyB9ID0gcG9zdDtcbiAgcmV0dXJuIChcbiAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgdy1zbSBweS00IHB4LTYgcm91bmRlZC1sZyBiZy1ncmF5LTIwMCBteS00IG1heC13LXhsICR7Y2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgc206bWItMFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOnVuZGVybGluZSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8RGF0ZUZvcm1hdGVyIGRhdGVTdHI9e2RhdGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIHtbJ1JlYWN0JywgJ0phdmFzY3JpcHQnXS5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXRlYWwgYm9yZGVyLTIgcHgtMiBweS0xIHJvdW5kZWQtZnVsbCBtci0yIHRleHQtc20gYmctdGVhbC0yMDBcIj5cbiAgICAgICAgICAgICAgICB7dn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0SXRlbTtcbiIsImltcG9ydCBQcm9maWxlU3ZnIGZyb20gJy4vU1ZHL1Byb2ZpbGVTdmcnO1xuaW1wb3J0IEJsb2IxIGZyb20gJy4vU1ZHL0Jsb2IxJztcblxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBzbTptYi0wXCI+XG4gICAgICAgICAgPERldGFpbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEZXRhaWwoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxCbG9iMVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBvcGFjaXR5LTI1IGFic29sdXRlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogJy0zMHB4JywgbGVmdDogJy01MHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJsb2IxXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IG9wYWNpdHktMjUgYWJzb2x1dGUgdHJhbnNmb3JtIHJvdGF0ZS05MFwiXG4gICAgICAgICAgICBzdHlsZT17eyB0b3A6ICctMzBweCcgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIHVwcGVyY2FzZSB0ZXh0LXRlYWwtNjAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgSGksIEknbSBUZXB5XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLThcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBmb250LWJvbGRcIj5Gcm9udGVuZCBEZXZlbG9wZXI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBQcm9maWxlSW1hZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IHctYXV0byBoLWF1dG9cIj5cbiAgICAgICAgPFByb2ZpbGVTdmcgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQmxvYjEocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cIiMwOEJEQkFcIlxuICAgICAgICBkPVwiTTE1NyA3Ni43YzUuMiAyMC44LTEwLjMgNDMuNS0zMC43IDU3LjktMjAuNCAxNC40LTQ1LjYgMjAuNS02MiA5LjgtMTYuNC0xMC44LTIzLjktMzguNS0xNi41LTYyLjQgNy40LTIzLjggMjkuOC00My44IDU0LTQ0LjQgMjQuMS0uNiA1MCAxOC4zIDU1LjIgMzkuMXpcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvYjE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IGljb24gPSB7XG4gIGhpZGRlbjoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgcGF0aExlbmd0aDogMCxcbiAgICBmaWxsOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScsXG4gIH0sXG4gIHZpc2libGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHBhdGhMZW5ndGg6IDEsXG4gICAgZmlsbDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknLFxuICB9LFxufTtcblxuZnVuY3Rpb24gTG9nbyh7IGxvYWRpbmdUeXBlLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9XCJoaWRkZW5cIj5cbiAgICAgIDxtb3Rpb24uc3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBIMjRWMjRIMHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgICB2YXJpYW50cz17aWNvbn1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZGVmYXVsdDogeyBkdXJhdGlvbjogMiwgZWFzZTogJ2Vhc2VJbk91dCcgfSxcbiAgICAgICAgICAgIGZpbGw6IHsgZHVyYXRpb246IDIsIGVhc2U6IFsxLCAwLCAwLjgsIDFdIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHJva2U9XCIjMDhCREJBXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjNcIlxuICAgICAgICAgIGQ9XCJNNSA4bC0xLjAyNi0uNTEzQS43ODUuNzg1IDAgMDEzLjc3IDYuMjN2MEEuNzg1Ljc4NSAwIDAxNC4zMjUgNkg4bTAgMGgzLjM0OWMuMzYgMCAuNjUxLS4yOTIuNjUxLS42NTF2MGEuNjUxLjY1MSAwIDAwLS4yOS0uNTQyTDEwLjUgNE04IDZ2MTRtNS0xMHYwYTIuNyAyLjcgMCAwMS0uMTQ2LTIuMDZsLjAwNS0uMDE4Yy4wOTQtLjI4LjIzMS0uNTQyLjQwOC0uNzc4bC40MDgtLjU0NEEzLjI1MiAzLjI1MiAwIDAxMTUuODcgNS4zM3YwYzEuNTIzLS4xOSAyLjk4LjcyIDMuNDY1IDIuMTc1djBjLjExLjMyOS4xNjUuNjcyLjE2NSAxLjAxOXYuNDA2YTUgNSAwIDAxLTEuNDY1IDMuNTM1bC01LjIyNCA1LjIyNWExLjA2IDEuMDYgMCAwMC0uMzExLjc1djBjMCAuNTg2LjQ3NSAxLjA2MSAxLjA2IDEuMDYxSDIwXCJcbiAgICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5zdmc+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmZ1bmN0aW9uIFByb2ZpbGVTdmcoKSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5zdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyMTdcIlxuICAgICAgaGVpZ2h0PVwiMjcyXCJcbiAgICAgIHZlcnNpb249XCIxXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjE3MCAyNzIwXCJcbiAgICA+XG4gICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgZmlsbD1cIiMwZTE0MWJcIlxuICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgZD1cIk0yNTYgMjcwNGMtMy05LTYtMzAtNi00OHMtMTQtNzItMzAtMTIyYy0xNy00OS00Mi0xMjktNTUtMTc5LTIyLTg2LTI1LTkwLTQ5LTg3LTMyIDMtMzQtMTQtNC00NSAxNC0xNSAyMS0zNCAyMC01Ny0yLTQ4IDk2LTIyNSAxNjQtMjk2bDM0LTM2LTEyLTU5Yy04LTQyLTIxLTcxLTQyLTk1LTE3LTE5LTQyLTUzLTU2LTc1LTEzLTIyLTMwLTQ2LTM3LTUzcy0xMy0xNy0xMy0yMi0xMS0yMS0yNS0zNmMtMzgtNDEtMzQtNzkgMTItMTAzIDIxLTExIDY1LTQwIDk4LTY1czc5LTU0IDEwMi02M2MyNC0xMCA0My0yNCA0My0zMSAwLTI0LTQyLTk3LTgxLTEzOS0yMS0yMi00My01OS00OC04MS0xMS00MC0zNC03NC03OS0xMTktMjYtMjYtMjYtNTAtNy0yMzggNy01NyA1LTYxLTIzLTg4bC0zMC0yOSAxOC01NmM5LTMyIDIyLTgzIDI4LTExNEMyMTIgMTg3IDM0MyA1MSA1MTUgMTljNzQtMTQgMTkxLTYgMjU1IDE3IDYyIDIyIDE2NiAxMDcgMjAyIDE2NCA0MCA2NiAxMjggMjQyIDEyOCAyNTggMCA4IDIzIDM5IDUxIDcwIDI4IDMyIDY3IDg5IDg3IDEyNyAzMCA1OCAzNiA4MSAzNiAxMzAgMCA3MS0yMSAxMTctODggMTkwLTUyIDU3LTYxIDk1LTIxIDk1IDM1IDAgNjUgMzMgNjUgNzEgMCAyMiAxMiA0NiAzNSA3NSA1OCA3MCA2NCA3NCAxMDkgNzQgNTUgMCA5MiAyOCAxMDYgNzkgNiAyMiAyOSA2NCA1MyA5NSAyMyAzMCA1MyA3NCA2NyA5NiAyNyA0NCA5NyA4OCAzMjAgMjAyIDYzIDMyIDEyMiA2NCAxMzEgNzEgOCA3IDM5IDQ1IDY3IDg2bDUyIDc0djcyN2gtOTU0Yy04NjEgMC05NTQtMi05NjAtMTZ6XCJcbiAgICAgID48L21vdGlvbi5wYXRoPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjMmYzNjM3XCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNTYgMjcwNGMtMy05LTYtMzAtNi00NyAwLTE4LTE0LTc1LTMyLTEyNy0xNy01Mi00MS0xMzMtNTQtMTgwLTIxLTgxLTIzLTg1LTQ4LTgyLTMzIDQtMzMtMTItMS01MCAxOS0yMyAyNC0zOCAyMC01Ny00LTIwIDUtNDYgMzMtOTYgNTktMTA4IDkxLTE1NyAxMjktMTk2IDMzLTM1IDM0LTM3IDIzLTg0LTEyLTU1LTUtOTIgMTQtNzYgOCA3IDE2IDcgMjIgMSAyMC0yMCAxNDMgMzcgMTI5IDYwLTMgNCA4IDE5IDI0IDMzIDE2IDEzIDMxIDMzIDM0IDQzIDQgMTUgNSAxNCA2LTUgMi00NyAxNi05IDE3IDQ5IDEgMzIgNiA3MyAxMiA5MiA2IDE4IDEzIDc5IDE3IDEzNGw2IDEwMS0yNyA3Yy0yMyA2LTI0IDktMTEgMTkgOSA3IDI1IDMyIDM1IDU3bDE5IDQ1IDI3LTUyYzE0LTI5IDI2LTYwIDI2LTY4IDAtMTAgNS0xMyAxMy05IDkgNiA5IDQtMS04LTE4LTIzLTUtOTkgMTYtOTEgMTAgNCAxMyAyIDgtNS00LTctMi0xMiA1LTEyIDEyIDAgOSAzNy02IDc1LTEyIDMwIDkgNyAzMy0zNiAxOC0zMiAxOS0zOSA3LTU2LTEzLTE4LTExLTIxIDEzLTM0IDM0LTE4IDUxLTM4IDUyLTY0IDEtMTIgNC0xNSA3LTcgNCAxMCA4IDEwIDE5IDEgOC02IDExLTE1IDgtMjBzMi05IDEwLTljOSAwIDE2LTYgMTYtMTRzNy0yMiAxNi0zMGM4LTkgMTItMjAgOS0yNi0zLTUtMi0xMCA0LTEwczEzLTE1IDE2LTM0YzYtMzAgMTQtMzcgNzctNjUgODMtMzYgOTktMzggMTIzLTExIDE2IDE4IDE5IDQzIDIzIDE4NGw1IDE2My0zNC01LTM0LTYgMzAtNmMyOC01IDI2LTctMjktMjMtMzMtOS02MS0xNi02MS0xNC0xIDEtNSAxNC04IDI4LTggMzEgOSAzOSA4NCAzOWg0NmwxNyA3M2MzMCAxMjQgMzAgMTM3IDEwIDE1Mi0xNSAxMS0xNyAxNy04IDMyIDcgMTIgOCAyNyAyIDQyLTUgMTQtMTEgNjUtMTQgMTE1LTYgOTAgNCAxNDYgMjYgMTQ2IDE0IDAgMzEtNDcgMzMtOTIgMS0yMSA0LTM4IDctMzggNCAwIDUtMTggMy00MC0yLTI3IDEtNDAgMTAtNDAgOCAwIDctMy0zLTEwLTEwLTYtMTUtMzEtMTctODctMS00My0zLTExMi01LTE1My00LTk2IDEwLTEwMSA4MS0yOSAyOCAyOSA1NCA1MCA1NyA0NiA0LTQgMy03LTMtN3MtOC0xMS01LTI1YzMtMTkgMTEtMjUgMzEtMjVsMjYtMS0yNS0xNC0yNS0xNCAzNS0xaDM1bC0yOS0xNWMtMTYtOS01OC0yMC05Mi0yNC0zNS01LTY3LTEyLTcyLTE1LTQtMi03LTQ1LTUtOTUgMi02OC0yLTEwMy0xNy0xNDctMTEtMzEtMTgtNjAtMTUtNjQgMy01IDAtMTktNS0zMi0xMC0yMS0xMC0yMS01IDYgNSAyNCA0IDI2LTggMTQtOC04LTE4LTI0LTIxLTM2LTEwLTMwIDE3LTMwIDM4IDBsMTYgMjIgMS0yNCAxLTI1IDggMjVjOCAyNSAxMSAyMiAxNS0xNyA0LTM1IDE0LTU1IDI1LTQ4IDYgMyAxMy0xIDE2LTEwIDQtOSAxMy0xNCAyMC0xMSA4IDMgMTQtMSAxNC0xMCAwLTEwIDYtMTQgMTQtMTFzMTctMSAyMC04YzMtOCAyNC0xOCA0Ni0yMSAyMi00IDQzLTExIDQ2LTE1IDktMTUtMTUtMTAtNzkgMTUtMzQgMTQtNzQgMjgtOTAgMzItMTUgMy0zMCAxMC0zMyAxNS0xMCAxNy00OSA5LTkzLTIwbC00NC0yOSAzMS0xNmM1NS0yOCAyMjMtMjI2IDE5My0yMjYtNiAwLTExIDctMTEgMTVzLTggMTUtMTkgMTVjLTE1IDAtMTktOC0xOS00Mi0xLTc4LTEwLTExOS0yOC0xMzItMTYtMTItMTMtMzYgNS0zNiA0IDAgMjggMjUgNTIgNTUgNDIgNTIgNDYgNTUgOTAgNTUgNTkgMCA5NSAyNyAxMDkgODIgNiAyMiAyOCA2MSA0OCA4N3M1MCA2OCA2NyA5NWMyMyAzNyA0NiA1NiAxMDUgODggNDEgMjMgOTQgNTQgMTE3IDcwIDIzIDE1IDQ1IDI4IDUwIDI4IDExIDAgMTYzIDc3IDE4NCA5MyA4IDcgMzkgNDcgNjcgODlsNTIgNzd2NzIxaC0xODZjLTE2MSAwLTE4NS0yLTE4MC0xNSAzLTggMS0xNS01LTE1cy05LTgtOC0xN2MxLTEwLTEtMjUtNC0zMy04LTIwLTI3LTExNy0yNy0xMzYgMC04IDIwLTI0IDQ1LTM2czQ1LTI4IDQ1LTM2YzAtMTAtNC0xMC0xNiAzLTIzIDIyLTczIDQ3LTg0IDQwLTUtMy02IDIwLTMgNTcgNCAzNSA3IDczIDcgODYgMSAxMiA0IDIyIDkgMjIgNCAwIDcgMTggNyA0MHY0MGgtNTdjLTM2IDAtNTMtNC00NS05IDExLTYgMTAtMTAtMy0xNXMtMTUtOS02LTIwYzktMTAgOC0xNS00LTE5LTgtNC0xMi0xMy05LTIyIDQtOSAxLTE1LTktMTVzLTEzLTctMTAtMjBjMy0xMSAxLTIwLTQtMjBzLTktOC0xMC0xN2MtMi0yNS0xMy03NS0yMS05My03LTE4LTEzLTQ3LTE1LTc3LTEtMTMtNS0yMy04LTIzLTEzIDAtMTggMzAtOSA1OSA1IDE3IDYgMzEgMiAzMXMwIDUgOSAxMGMxMSA2IDE3IDI0IDE3IDU1IDEgMjUgMyA0OSA2IDU0IDMgNCA4IDMwIDEyIDU3IDMgMjcgMTAgNTAgMTQgNTIgNSAyIDYgMTAgMyAxOC00IDEyLTEwMyAxNC02ODMgMTQtNjAzLTEtNjc5LTItNjg0LTE2em0xMDAtOTZsMy00My0xNCA0NWMtMTggNTUtMTkgNjgtMyA1MiA2LTYgMTMtMzEgMTQtNTR6bTE0MjEtMTc0Yy03LTctMzcgNy0zNyAxNyAwIDYgOSA1IDIxLTEgMTEtNyAxOS0xNCAxNi0xNnptNzMtNDFjMC0xMS02LTEwLTI1IDQtMzIgMjMtMzIgMzYgMCAyMSAxNC02IDI1LTE3IDI1LTI1em0wLTQzYzAtMTQtMTQtMTItMjggMi0xOSAxOS0xNCAzMCA4IDE4IDExLTYgMjAtMTUgMjAtMjB6bS0xMTUwLTMxYzAtMTctOS05LTI0IDI0bC0xNiAzMiAyMC0yNGMxMS0xMyAyMC0yNyAyMC0zMnptMTIxLTFjMS03IDEtMTYgMC0yMCAwLTUgMTEtOCAyNy04IDE5IDAgMzItOCA0NC0yOSAxNi0zMCAxNi0zMC0xMi0zNi0zNC04LTcwIDktNzEgMzMgMCA5LTIgMjktNCA0NS0yIDE1IDEgMjcgNiAyN3MxMC02IDEwLTEyem0xMDE5LTljMTEtMTkgMTAtMjAtMTAtOS0xMSA2LTE4IDE1LTE1IDIxIDkgMTMgMTMgMTEgMjUtMTJ6bS02NzAgMGMwLTUtMTQtOS0zMS05LTE2IDAtMjggNC0yNSA5czE3IDkgMzEgOSAyNS00IDI1LTl6bTM1Mi00M2MtOS0zMS04LTM2IDYtMzYgMTMgMCAxMi00LTYtMjAtMzYtMzMtNDEtMjMtMTkgNDAgMjIgNjQgMzUgNzUgMTkgMTZ6bS03ODkgNGMxNi0xOSAxNi0yMC01LTIwLTEyIDAtMTggMy0xNSA3IDQgMyAyIDEyLTQgMjAtNiA3LTcgMTMtMiAxM3MxNi05IDI2LTIwem0xMDA5LTEwYy0yLTE2LTUtMzAtNy0zMHMtNSAxNC03IDMwYy0zIDE5IDAgMzAgNyAzMHMxMC0xMSA3LTMwek00OTkgMjA1NGMtMjMtNDgtNDMtMTAzLTQ0LTEyMi0xLTMyLTE0LTQ3LTQ1LTUxLTMtMS01IDE5LTQgNDRzLTEgNDUtNSA0NS03IDEwLTggMjFjLTIgMjEtMSAyMSAxMyAzIDktMTEgMTMtMTQgMTAtNy00IDYtMiAxNCA0IDE4IDcgNCA2IDE0LTIgMjgtMTAgMTktOSAyMCA0IDkgMjEtMTcgNTggMjEgODkgOTIgMTkgNDQgMjUgNTAgMjcgMzEgMi0xMy0xNi02My0zOS0xMTF6bTEwMDcgMTEwYy0yOC0yNC00NS0yNy0zMS00IDYgMTAgNDEgMjggNTUgMjkgMyAwLTgtMTEtMjQtMjV6bTgtMjljLTctMTgtNDQtNDAtNDQtMjcgMCA1IDEwIDE3IDIzIDI1IDI4IDIwIDI4IDIwIDIxIDJ6bS05OTQtMjc3YzAtMTYtMy0xOS0xMS0xMS02IDYtOCAxNi01IDIyIDExIDE3IDE2IDEzIDE2LTExelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTY2MiAyMDQ1Yy0xMy0yOC0xNi01Mi01LTQyIDMgNCAxMSAzIDE3LTJzMjYtMTIgNDMtMTZjMjgtNiAzMi00IDI3IDEwLTQgOS0xMiAxNC0xOSAxMS05LTMtMTEgMi03IDE2IDQgMTUgMiAxOS03IDEzLTEwLTUtMTEtMi02IDE0IDEwIDMyLTI5IDI4LTQzLTR6TTY1MyAxOTcwYy0xLTExLTE4LTM0LTM4LTUyLTM0LTI5LTM2LTM1LTMzLTc3IDMtMjUgOC01NSAxMy02Nmw4LTIwLTE3IDIwYy0xNiAxOS0xNiAxOS01LTcgNy0xNSAxNi0yNiAyMS0yNXMxNy0xNyAyNy00MWMzNC04NSA0NS04OSAxNjYtNjIgMjggNiA2NiAxNCA4NiAxOSA0NiAxMCAxMTcgMiA5OC0xMS0xMC02LTYtNyAxMS0zIDE0IDMgMzkgMSA1NS02IDQ4LTE5IDU4LTIwIDQ0LTMtNyA5LTEzIDI2LTE0IDQwLTEgMzQtMTkgNDctMTE1IDgzLTQ3IDE4LTEwMCA0MS0xMTkgNTItMjkgMTctNTMgMjAtMTQzIDIxLTgyIDAtMTA4IDMtMTA4IDEzIDAgMTQgMjkgMjQgNzUgMjYgMjkgMSAyOSAxIDUgOC0zNSAxMC00MCA0MS02IDQxIDE0IDAgMjggNSAzMSAxMSA1IDcgMTEgNSAxOC01IDctOCAyNC0yMCAzOS0yNSAyMi04IDI2LTcgMjIgNC0zIDgtMTUgMTctMjYgMjEtMTEgMy0xNyA4LTE0IDExIDYgNy0xMyAyNi00MSA0MS0zMCAxNy0zOSAxNS00MC04ek0yNjggMTY2MWMtMTItMTYtMzktNTUtNTgtODdzLTQ3LTcwLTYyLTg0Yy0zOC0zNy0zNi03MSA1LTk1IDE3LTEwIDY1LTQzIDEwNi03MiA0MC0yOSA4OS01OCAxMDctNjUgMTktNyAzNC0xOCAzNC0yNSAwLTI1LTQyLTk3LTgxLTE0MC0yMS0yMi00My01OS00OC04MS0xMS0zOS0zNC03NC03OC0xMTgtMTktMTktMjMtMzMtMjItODYgMC0zNSA2LTkwIDEzLTEyMyAxNS02NyA4LTk3LTI2LTEyNS0yMi0xNy0yMi0yMC05LTY2IDctMjcgMTgtNzMgMjItMTAyIDIyLTEyOCA5NS0yNTEgMTgyLTMwNiA5Mi01OCAxNDAtNzEgMjYyLTcxIDEwNCAwIDExNCAyIDE3NSAzMiA2NCAzMSAxNzAgMTE1IDE3MCAxMzQgMCA1IDE2IDM0IDM2IDY0IDIwIDI5IDM3IDY1IDM4IDc4IDAgMTQgNCAyMyA5IDIwIDgtNSA1NyA5MyA1NyAxMTUgMCA4IDIzIDM5IDUxIDcwIDI4IDMyIDY3IDg5IDg3IDEyNyAzMCA1NyAzNiA4MSAzNiAxMzAgMCA3MS0xNiAxMDYtODcgMTg4LTQzIDUwLTQ5IDYyLTQzIDg4IDUgMjcgNCAzMC0xMiAyNC05LTQtMjUtMTAtMzQtMTItMTAtMy0xOC05LTE4LTE0IDAtMTMtMzQtMTEtNDggMy03IDctMTIgMjItMTIgMzUgMCAxNy03IDI0LTI3IDI4LTE2IDQtNDggMTEtNzMgMTYtMjggNi04OCAzOS0xNjEgODgtOTEgNjItMTM0IDg0LTIwNSAxMDUtNDkgMTYtMTAyIDMyLTExOCAzN3MtMzYgOS00NSA4Yy05IDAgMTQtMTAgNTItMjEgMzctMTIgNjctMjcgNjctMzQgMC02LTE2LTIxLTM2LTMzLTM3LTIyLTc0LTI4LTc0LTEyIDAgNS0xMCAxMy0yMiAxNy0yNCA3LTY4IDM2LTEwMiA2Ny0xNyAxNC0xOCAyMC03IDI2IDggNS04IDExLTQ1IDE2LTMzIDQtNjIgMTItNjYgMTktMTMgMTktOSA0NiA3IDQ2IDkgMCAxNSA2IDEzIDEzLTIgNiA3IDI2IDIwIDQ0IDEyIDE3IDIyIDM0IDIyIDM4IDAgMyAxOCAzMyA0MCA2NSA0MiA2NSA0NiA3NyA4IDMxem0zMi03MTVjLTQtMTktNi0zOC00LTQxcy0xLTEtNyA0Yy0xMiAxMC0xIDg0IDExIDc2IDQtMyA0LTIwIDAtMzl6bTM1NS0yNmMtMy01LTEzLTEwLTIxLTEwcy0xNCA1LTE0IDEwYzAgNiA5IDEwIDIxIDEwIDExIDAgMTctNCAxNC0xMHpNMzM3IDgxOGMzIDYgOSAxMiAxNSAxMnM3LTcgNC0xNmMtMy04LTItMTIgNC05czEwIDIgMTAtNGMwLTUgOC0xMiAxOC0xNSAxMi00IDE4LTE1IDE3LTI5LTEtMTIgMy0yOCA5LTM2IDktMTIgNy0xMi0xMi0ycy0yMyAxOC0xOCAzOWM1IDI3IDUgMjctNiAzLTExLTIxLTktMjYgMTctNDcgMTctMTMgMzMtMjQgMzctMjRzMjgtMjEgNTQtNDdjMjYtMjcgNDQtNDEgMzktMzMtNCA4IDMgNSAxNy03IDEzLTEzIDI5LTIzIDM1LTIzczI1LTEzIDQzLTMwYzE4LTE2IDM4LTMwIDQ1LTMwIDI0IDAgMjctMjAgMy0yMS02Mi0yLTExNSAxLTEzOCA2LTE0IDQtMzIgNy00MCA4cy0yNSA4LTM3IDE1Yy0xMyA3LTIzIDEwLTIzIDcgMC00LTcgMS0xNiA5LTggOS0yMiAxNi0zMCAxNnMtMTMgNC0xMCA5YzggMTItMTkgMzMtMjkgMjMtNS00LTUtMS0xIDYgNCA2IDMgMTItMiAxMnMtMTUgMTUtMjIgMzNjLTcgMTctMTYgNDEtMjAgNTItMTkgNDUtMjQgNzMtMjEgMTI1IDMgNzQgMTEgODEgMzQgMjkgMTEtMjQgMjEtMzggMjQtMzF6bTc0Ny0yM2MxLTExIDgtMjAgMTQtMjAgMjIgMCAyMS0xMi0zLTI1LTE0LTctMjUtMTktMjUtMjcgMC03LTYtMTMtMTQtMTNzLTIxLTgtMjgtMTgtMTktMjItMjYtMjZjLTExLTctMTItNC0zIDEyIDE4IDM0IDM0IDc2IDM3IDk5IDEgMTMgOCAzOSAxNiA1OWwxMyAzNSA3LTI4YzUtMTUgMTAtMzcgMTItNDh6bS02MDEtMjhjMyAyIDQtMyAzLTE0LTItMTMtMTItMTgtMzUtMTktMTktMS0zMCAzLTI4IDEwIDMgNiAxMCAxMCAxNyA4IDExLTMgMTEgMCAwIDEzLTEyIDE0LTEwIDE1IDEyIDYgMTQtNSAyOC03IDMxLTR6bTMyMi00N2MtMy01LTEtMTAgNC0xMCA2IDAgMTEtNCAxMS04IDAtNS0xNS05LTM0LTktMjcgMC0zMiA0LTI4IDE5IDMgMTEgMTMgMTggMjkgMTggMTMgMCAyMS00IDE4LTEwem05OS0xMDhjLTYtNC0xMC0xNS05LTI0IDItMTEtMi0xNS0xMS0xMS04IDMtMTEgMTAtNyAxNyAxMyAyNCAyNiAzNiAzMiAzMSAzLTMgMS05LTUtMTN6bS02NDQtNDhjMTMtMjAgNDEtNTAgNjItNjdzMzgtMzQgMzgtMzljMC0xMyAyNi0zOCA0MC0zOCA2IDAgMTMtNyAxNi0xNSA0LTggMTEtMTIgMTctOCA1IDMgNyAxIDQtNC0xNy0yOCA3My00MSAxMDUtMTYgMjEgMTcgMTQzIDM0IDE4NyAyNyAyMy00IDQxLTMgNDEgMiAwIDExIDE1MSAxMiAxNjggMSA3LTUgMTAtMTIgNy0xN3MzLTcgMTQtNWMxOCAzIDE5IDIgMy0yOC0yMC0zNy0zNC01MC00Mi0zNy0zIDYtMjIgMTMtNDAgMTYtMjAgNC0zMSAzLTI3LTIgMTYtMTctOTctMzItMTk5LTI4bC0xMDAgNS01NC00MGMtMzAtMjMtNjMtNDEtNzItNDEtMjcgMC0xMzEgMTA5LTEyNSAxMzEgNCAxMy0xMSAzMi01MCA2NS00NSAzOS01MyA1MS00OSA3MCA1IDE3IDIgMjQtOSAyNC0xNiAwLTIxIDI1LTYgMzUgNSAzIDEyLTQgMTYtMTQgMy0xMSAyMC0zMiAzOC00NyAyNS0yMSAyNy0yNSAxMC0yMC0yNiA4LTM2LTQtMTgtMjEgMTEtMTAgMTctMTAgMjkgMyAxNyAxNiAyMSAzNCA5IDM0LTE0IDAtNTMgNjYtNTMgODggMCAzMSAxMSAyNyA0MC0xNHptNzI3LTI0MWMtNC0zLTEtMTMgNi0yMSA4LTExIDgtMTQgMC05LTYgNC0xNCAxLTE2LTUtMy03LTYtNC02IDgtMSAyMCA2IDM0IDE3IDM0IDMgMCAyLTMtMS03ek04NDcgMTA0Yy0yMS0yMC00Mi0zMi00NS0yOC00IDMtMSA5IDYgMTEgNyAzIDI1IDE2IDQwIDI5IDQyIDM3IDQxIDI3LTEtMTJ6TTUxMyA1N2MyNi03IDQ1LTE2IDQyLTE5LTYtNi05NCAxNy0xMDMgMjctOCA4IDggNSA2MS04elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTI2NSA0MzljLTQtNSAxLTkgOS05IDkgMCAxNi00IDE2LTEwIDAtNSA4LTEwIDE4LTEwczIzLTUgMzAtMTIgMTItOCAxMi0yLTEyIDE2LTI2IDIyYy0xNCA3LTIzIDE2LTIwIDIwIDIgNC00IDgtMTQgOS0xMSAxLTIyLTItMjUtOHpNOTAwIDM3MGMtMTItOC0xMC0xMCA4LTEwIDEzIDAgMjAtNCAxNy0xMC0zLTUtMS0xMCA0LTEwIDEzIDAgMTMgMyA1IDI0LTcgMTgtMTMgMTktMzQgNnpNNTU0IDMzNGMtMTctMTQtMTctMTUtMS0xMCAxMCAzIDIzIDYgMjggNnM5IDUgOSAxMGMwIDE0LTEzIDEyLTM2LTZ6TTcwMSAzNDJjLTI1LTggMy0yMiA0Mi0yMSAyMyAxIDM0IDMgMjUgNi0xMCAyLTE4IDgtMTggMTMgMCA5LTI2IDEwLTQ5IDJ6TTM5MCAyNzdjMC0zMyA1My01MSA2NC0yMiA0IDExLTMgMTktMjAgMjUtMzQgMTMtNDQgMTMtNDQtM3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzFkM2I1Y1wiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjU2IDI3MDRjLTMtOS02LTMwLTYtNDcgMC0xOC0xNC03NS0zMi0xMjctMTctNTItNDEtMTMzLTU0LTE4MC0yMS04MS0yMy04NS00OC04Mi0zMyA0LTMzLTEyLTEtNTAgMTktMjMgMjQtMzggMjAtNTctNC0yMCA1LTQ2IDMzLTk2IDU5LTEwOCA5MS0xNTcgMTI5LTE5NiAzMi0zMyAzMy0zOCAyNS03Ni0xMC00NiA1LTgyIDI2LTYxIDkgOSAxMiA4IDEyLTUgMC0xNiAyLTE2IDMwLTIgMTggOSAyOCAyMCAyNCAyNy01IDctMiA5IDggNSAxMC0zIDE5IDMgMjcgMTkgMTEgMjQgMTEgMjQtMTggOS0xNi04LTMxLTIwLTMzLTI3LTItNi0xMCAzLTE4IDIyLTE1IDM2LTE2IDM1IDY2IDk3bDI5IDIzLTI4LTEwYy00Mi0xNS00NC0xNC00MyAzNCAxIDI0LTIgNDItNiA0MC00LTMtNiA4LTQgMjMgMSAxNiA4IDI3IDE1IDI1IDgtMiAxMCA0IDYgMTgtNSAxNi0yIDIwIDE0IDIwIDI0IDAgODEgNzIgODEgMTAyIDAgMTAgNCAxOCA5IDE4czEyIDggMTUgMThjNSAxNiAzLTM0LTExLTI2Mi01LTgyLTMtMTA3IDUtMTAyIDcgNCAxMiAxNiAxMiAyNnM0IDIwIDEwIDIyYzUgMiAxMSAyNCAxMyA0OXM4IDUyIDEyIDU5YzUgOCAxMCAzMiAxMSA1NCAxIDIzIDUgNzIgOSAxMDlsNiA2OC0zMCAxMmMtMzEgMTItNDIgMjctMTggMjcgMTMgMCAzOSAzNCA0NyA2M3MyNCAyMyA0Ni0yMGMxMi0yMiAzNy02MyA1NS05MSAxOS0yNyA1MC03NiA2OS0xMDggMTktMzEgNDktNzggNjYtMTAzIDE3LTI2IDM1LTU3IDM5LTcwIDUtMTggOS0yMSAxNi0xMHM5IDkgOS02YzAtMzAgMjUtOTYgMzMtODggNCAzIDcgMCA3LTkgMC0xNSAxMTAtNjggMTQxLTY4IDkgMCAyNCA5IDM0IDIwIDE1IDE3IDE5IDQ0IDIzIDE3MCAzIDg0IDEgMTUwLTQgMTUwcy0zMS03LTU4LTE1Yy02NS0yMC02My0yMC03MCAyMC0xNCA3Mi0xNiAxMDUtNiAxMDUgNiAwIDEwLTExIDEwLTI1IDAtMzQgMjAtMzIgMjEgMyAyIDI1IDIgMjUgNiAzIDMtMTMgMTMtMjYgMjQtMjggMTAtMyAxOS0xMCAxOS0xNXMxMi04IDI3LTZjMjMgMyAyOSA5IDM1IDQzIDMgMjIgMTQgNjAgMjIgODQgMjEgNTggMjEgNTgtMTkgNTMtMjEtMy0zNSAwLTM1IDcgMCA2IDE2IDExIDM1IDExIDM0IDAgNDggMTQgMjMgMjMtOCAyLTE0IDI0LTE1IDUzLTEgMjctNCA2Ny04IDg5LTggNTItOCAxNTAgMCAxNzUgMTMgNDIgNTAgMTUgNTctNDMgMi0xNCA2LTI5IDktMzEgMy0zIDQtMjkgMy01OC0yLTM1IDItNTUgMTEtNjIgMTEtOCAxMi0xNSA0LTI2LTktMTMtMTAtMTItNSAzIDMgOSAyIDE3LTMgMTctOSAwLTIwLTcwLTE4LTExMCAyLTIyIDYtMjUgNDItMjMgMzcgMiAzMy0xLTIyLTEzLTIyLTQtMjMtOS0yMy05MXYtODZsMjEgMTljNDkgNDQgMTM5IDEzOSAxMzkgMTQ2IDAgNSA1IDggMTAgOCA2IDAgNC0xMy01LTMwLTE3LTM0LTIwLTcwLTQtNzAgNSAwIDgtNCA1LTktNC01IDAtMTIgNi0xNCAxMC00IDEwLTgtMS0xNS0xMS04LTktMTEgMTAtMTdsMjQtOC0yMy04Yy0xMy01LTIwLTEzLTE3LTE5IDQtNi0xMS0xMC0zNy0xMC0yNCAwLTYwLTMtODAtNmwtMzgtN3YtOTJjMC01Ny02LTEwOS0xNS0xMzUtMjEtNTktMTktOTMgNi0xMDggMTMtOCAxOS0yMCAxNi0zMi01LTE4IDI2LTUzIDM3LTQzIDMgNCA2LTMgNi0xNSAwLTI5IDE3LTI4IDI0IDEgMiAxMiA0IDUgMi0xNS0xLTMwIDEtMzUgMTEtMjYgMTAgOCAxNyA3IDI2LTcgOC05IDI3LTE4IDQ0LTE5IDE2LTEgMzgtOCA0OC0xNiAxMi0xMCA0MS0xNSA4Ni0xNSA0MyAwIDYyLTMgNTItOS0xNy05LTE1Ny0xLTIxOCAxNC0zMiA3LTQxIDYtNDgtNi00LTctMTQtMTQtMjAtMTQtNyAwLTEzLTktMTMtMjBzNC0yMCA5LTIwIDQtNy0zLTE1Yy05LTExLTEwLTE1LTEtMTUgOCAwIDEwLTggNi0xOS00LTEyIDUtMzcgMjQtNjggMTYtMjYgMzItNjEgMzUtNzggNi0yOSA2LTI5LTQtNS0xNCAzMi00MSA2MS01MSA1NS00LTMtMTEtMzUtMTUtNzEtNC00Ni0xMy03My0yNi04Ni0xNy0xNy0xOC0yMi03LTI5IDgtNCAxNi01IDIwLTEgMyA0IDIzIDI4IDQzIDU1IDM2IDQ0IDQxIDQ3IDg2IDQ3IDYwIDAgOTYgMjYgMTEwIDgyIDYgMjIgMjggNjEgNDggODdzNTAgNjggNjcgOTVjMjMgMzcgNDYgNTYgMTA1IDg4IDQxIDIzIDk0IDU0IDExNyA3MCAyMyAxNSA0NSAyOCA1MCAyOCAxMSAwIDE2MyA3NyAxODQgOTMgOCA3IDM5IDQ3IDY3IDg5bDUyIDc3djcyMWgtMzQybDYtNjJjMTAtMTA2IDE3LTIzOCAxMi0yMzgtMyAwLTE2IDExLTMwIDI1LTI1IDI1LTU2IDMzLTU2IDE1IDAtNSA1LTEwIDEwLTEwIDYgMCAxMC00IDEwLTEwIDAtNS02LTEwLTE0LTEwLTkgMC0xMi03LTktMjAgMy0xMiAwLTIwLTctMjBzLTEwLTgtNy0yMGMzLTExIDEtMTctNC0xNHMtNyAyMi01IDQyYzMgMjAgOCA3MyAxMiAxMTcgOSAxMTMgMTAgMTI1IDE5IDE2OGw3IDM3aC01MWMtMzAgMC01MC00LTQ2LTkgMy01IDAtMTMtNi0xNi01LTQtOC0xMy01LTIxcy0xLTE3LTktMjBjLTgtNC0xMi0xMS05LTE2IDQtNiAzLTEzLTItMTctMjAtMTQtNjUtMTg5LTQ2LTE3NyA2IDMgMTQgMiAxNy00IDQtNiAzLTEwLTItOS0yMiA0LTMwLTMtMzAtMjMtMS00NS0zLTUwLTE5LTQ0LTEyIDUtMTUgMi0xMC0xMCA0LTkgMC0yNC04LTMzLTE3LTE4LTI0LTcwLTEzLTg4IDQtNiAyLTE1LTQtMTgtNS00LTgtMTMtNS0yMSAzLTcgMS0xNi01LTIwLTYtMy04LTEyLTUtMjAgNy0xOC0zMS01Ny00NS00OC04IDQtNyA5IDEgMTQgNyA0IDkgMTMgNiAxOS00IDYtNCAxNyAwIDIzIDUgNyA5IDE5IDkgMjggMyAzMiA0NyAxNTAgNTYgMTUwIDYgMCA3IDQgNCAxMC0zIDUgMSAzMiA5IDYwIDggMjcgMTIgNTAgOSA1MC00IDAgMSA2IDEyIDEzIDEwIDggMTUgMTkgMTIgMjQtNiA5IDkgMTE0IDI4IDIwMWw1IDIyLTIxNy0yYy0xNjgtMi0yMTctNi0yMTYtMTUgMi03LTItMTMtNy0xMy02IDAtMTAgNy0xMCAxNSAwIDEzLTU3IDE1LTQ1NCAxNC0zOTcgMC00NTUtMi00NjAtMTV6bTgwLTE5Yy0zLTggMi0xOSAxMi0yNCA5LTUgMTQtMTMgMTAtMTctNC0zLTMtMTQgMi0yMyA4LTE2IDEzLTQzIDI2LTE0MyAzLTIxIDMtMzggMC0zOC00IDAtMjMgNzItMzEgMTIwLTIgMTQtMTMgNTEtMjMgODMtMTYgNDgtMTcgNTctNSA1NyA5IDAgMTMtNiA5LTE1em0yODItMzNjMi03LTYtMTItMTctMTItMjEgMC0yNyAxMS0xNCAyNCA5IDkgMjYgMiAzMS0xMnptMTIzMi0yNjRjMC0xMy00LTE3LTEyLTEyLTEwIDYtMTAgNC0yLTcgMTYtMjAgMTItOTItNi05Ny0xMi0zLTEyLTItMiA2IDEwIDcgMTAgMTEtMyAyMi0xMiAxMC0xMyAxNi0zIDI3IDEwIDEyIDkgMTgtNCAyNy0xNiAxMi0xNiAxNC0xIDI5czE1IDE3IDAgMjNjLTkgMy0xNyAxMC0xNyAxNXMxMSAzIDI1LTMgMjUtMjAgMjUtMzB6bS0xMTYwLTQ1YzAtNyA3LTEzIDE1LTEzczE1LTYgMTUtMTRjMC03IDctMTkgMTUtMjZzMTItMTYgOS0yMSA4LTkgMjQtOWMyOSAwIDI5IDEgMjcgNDQtMiAyNC02IDQ5LTkgNTQtMyA2LTEgMTIgNiAxNCAxNiA2IDcwLTIxIDYzLTMxLTItNSA0LTE2IDE1LTI2czE3LTIyIDE0LTI2Yy0zLTUgNS05IDE4LTEwIDEzIDAgMTctMyAxMS02LTEwLTMtOS05IDQtMjEgMTUtMTYgMTMtMTctMjYtMjUtMzEtNi00OS00LTczIDctMTcgOS00OCAxNi02OCAxNi0zNSAwLTM5IDMtNTkgNTAtMTIgMjgtMjUgNTAtMzAgNTAtNCAwLTggNi04IDEzIDAgNi00IDIxLTggMzItNSAxNCAxIDExIDE5LTEwIDE0LTE2IDI1LTM2IDI2LTQyem0tMTc4IDEwYy02LTItMTAtOS03LTEzIDYtMTAtMzQtMzUtNDItMjYtNyA3IDM4IDQ2IDUyIDQ1IDYgMCA0LTMtMy02em0xMjMxLTI5Yy0zLTgtNi0xNC03LTEycy03IDExLTE0IDIwYy0xMSAxNC0xMCAxNiA3IDExIDEyLTMgMTctMTEgMTQtMTl6bTItNjljMC0xOS00LTM1LTktMzUtNiAwLTEtNyAxMC0xNSAxNi0xMyAxNi0xNCAyLTlzLTE4IDEtMTgtMTZjMC0xMS00LTE5LTktMTZzLTUgMjItMSA0MmM1IDIwIDYgNDcgNCA2MC0zIDE1IDAgMjQgOCAyNHMxMy0xMyAxMy0zNXptLTg1OC0xNTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptODk4LTc1Yy0zLTQtMTItNi0yMC0zLTggNC0xMyAxMC0xMCAxNSAzIDQgMTIgNiAyMCAzIDgtNCAxMy0xMCAxMC0xNXpNNTU2IDE5MjNjLTMtOC02LTIxLTYtMjlzLTQtMTQtMTAtMTRjLTUgMC0xMCAxNi0xMCAzNSAwIDI3IDMgMzMgMTYgMjggOC0zIDEzLTEyIDEwLTIwem03OTYtMzk4Yy00LTE0LTUzLTktNjkgOC0xMiAxMS03IDEzIDI5IDggMjQtMyA0Mi0xMCA0MC0xNnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xMTU0IDE3NzZjLTIwLTIyLTI3LTU2LTExLTU2IDI0IDAgNDEgMjggMzEgNDktNyAxNS0xMSAxNy0yMCA3ek0xNTIgMTQwM2MxNC0xNyAxMTEtODEgMTIwLTc5IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjQtMjUtOTMtNzMtMTQ3LTIzLTI2LTQ3LTY1LTUzLTg3LTEwLTM4LTMzLTczLTc3LTExNy0xOS0xOS0yMy0zMy0yMy04NiAwLTM1IDQtNzkgMTAtOTggMTMtNDcgMTgtMTMwIDgtMTI0LTQgMy04LTQtOC0xNSAwLTMwIDI4LTE1IDMyIDE3bDMgMjcgMjUtMzBjMTQtMTYgNDYtNTEgNzItNzYgMjctMjYgNDgtNTAgNDgtNTQgMC05IDI3LTM1IDM3LTM1IDUgMCAxOS0xMyAzMS0zMCAxOS0yNSAyOC0yOSA2Mi0yNiAyMiAyIDQ1IDggNTIgMTMgMjEgMTcgMTQzIDM0IDE4NyAyNyAyMy00IDQxLTMgNDEgMiAwIDExIDE1MSAxMiAxNjggMSA3LTUgOS0xMyA2LTE5LTQtNiAyLTUgMTUgMSAxMiA3IDI3IDIxIDM0IDMxIDYgMTEgMTUgMjAgMTkgMjAgNSAwLTctMjEtMjUtNDctMTktMjctMzctNTYtNDAtNjYtNS0xMy0xOC0xNy01NC0xOC0yNiAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE0LTYtNDAgMTUtMzEgMjUgMyAyLTEgNS04IDUtMTAgMC0xMi0xMC02LTQxIDQtMjMgMTItNjkgMTgtMTA0IDI1LTE0MCA5NS0yNTkgMTg0LTMxNiA5Mi01OCAxNDAtNzEgMjYyLTcxIDEwNCAwIDExNCAyIDE3NSAzMiA4MSA0MCAxNTQgMTAzIDE3NyAxNTEgOSAyMCAyMyA0MyAzMCA1MCAyMiAyMyAzNSA1MyAyOSA2OC00IDktMiAxMiA1IDggOC00IDkgMSA0IDE3LTUgMTgtNCAyMCA0IDlzMTUtMyAzNSA0MGMxNCAzMCAyNiA2MSAyNiA2OCAwIDggMjMgMzkgNTEgNzAgMjggMzIgNjcgODkgODcgMTI3IDMwIDU3IDM2IDgxIDM2IDEzMCAwIDcxLTE2IDEwNi04NSAxODYtMjcgMzEtNDkgNjMtNDkgNzAgMCA4LTQgMjAtOSAyOC04IDEyLTEzIDEyLTM1LTItNDctMzEtOTEtMTItNzkgMzMgNCAxNS04IDIwLTY5IDM0LTU4IDEzLTkyIDI5LTE1OCA3My05NiA2NS0yMDYgMTIzLTIyOSAxMjItMTIgMC0xMS0zIDQtMTAgMTgtOCAxNy05LTQtNS0xNiAzLTQ2LTYtODItMjVsLTU3LTMxLTQ4IDI1Yy01MyAyNy0xMjQgODYtMTI0IDEwMyAwIDUtMjQgMTQtNTQgMjAtNDQgOC01MyA3LTQ0LTN6bTE1Mi00MjVjLTItMTgtNS00MC02LTQ4LTMtMjYgMTQtOTAgMjQtOTAgNSAwIDctNCA0LTktNC01IDQtNyAxNi0zIDE4IDQgMjAgMiAxNC0xNC00LTEwLTQtMTUgMC0xMSAxMCA5IDM0LTExIDMwLTI2LTEtNy0xLTkgMS00IDMgNCA5IDcgMTQgNyA2IDAgOC00IDQtOS0zLTUtMS0xMiA1LTE2IDYtMyAxMyAxIDE2IDkgNCAxMSAxMiAxMyAyOSA2IDEzLTUgMjYtNiAzMS0yIDQgNCAzIDEtMS03LTYtMTEtNC0xMyAxMS04IDE4IDcgMTggNi0xLTgtMTMtMTEtMzItMTQtNTctMTEtMjUgNC0zNiAxLTM0LTcgMy0yMCAxNy0zOCAyNi0zMiA0IDMgMTUtNiAyNC0yMHMyNC0yNSAzMi0yNWMxMCAwIDE0LTYgMTEtMTQtNC05LTEtMTMgNi0xMCA3IDIgMjQtNyAzNy0yMXMyOS0yNSAzNi0yNWM2IDAgMjYtMTMgNDQtMzAgMTgtMTYgMzgtMzAgNDUtMzAgMjQgMCAyNy0yMCAzLTIxLTYyLTItMTE1IDEtMTM4IDYtMTQgNC0zMiA3LTQwIDhzLTI1IDgtMzcgMTVjLTEzIDctMjMgMTAtMjMgNyAwLTQtNyAxLTE2IDktOCA5LTIyIDE2LTI5IDE2LTggMC0xNyA1LTIxIDEyLTUgNy0yIDkgNyAzIDgtNC0xIDctMTggMjQtMTggMTgtMzMgMzMtMzMgMzVzLTExIDM0LTI1IDcyLTI1IDg5LTI1IDExNGMwIDQ3IDE3IDE2OCAyNiAxODIgOSAxNSAxMSA4IDgtMjR6bTM1MS01OGMtMy01LTEzLTEwLTIxLTEwcy0xNCA1LTE0IDEwYzAgNiA5IDEwIDIxIDEwIDExIDAgMTctNCAxNC0xMHptNDIyLTYyYzMtNDggMTItODMgMjEtODMgMjIgMCAyMS0xMi0zLTI1LTE0LTctMjUtMTktMjUtMjcgMC03LTYtMTMtMTMtMTNzLTIzLTExLTM1LTI1LTI4LTI1LTM0LTI1Yy0xMCAwLTEwIDItMSA4IDE2IDEwIDQ1IDc5IDUwIDExNyA2IDU1IDM4IDExMiA0MCA3M3pNODE4IDcwOWMyLTEyLTYtMTYtMzMtMTYtMzMgMC00NSAxNC0yOCAzMSAxMyAxMiA1OCAyIDYxLTE1em04Ni05N2MtNi00LTEwLTE1LTktMjQgMi0xMS0yLTE1LTExLTExLTggMy0xNCA4LTE0IDExIDAgMTEgMzMgNDIgMzkgMzcgMy00IDEtOS01LTEzem0tOTktMjNjNS01IDAtOS0xNC05LTEyIDAtMzAgOC0zOSAxNy0xNiAxNS0xNSAxNiAxMyA5IDE3LTQgMzQtMTIgNDAtMTd6bTE5NS0yNzhjMC0xMC04LTI2LTE5LTM1LTE3LTE1LTE5LTE1LTI1LTEtNyAxOSAyMiA2NyAzNSA1OSA1LTMgOS0xMyA5LTIzem0tMTEzLTI3Yy05LTktMTA2LTEwLTEwMC0xIDIgNCAyNyA3IDU1IDdzNDktMyA0NS02em0tMTItMTY0Yy0xMi0xOS0xMDktNzAtMTM1LTcwLTE3IDAtNyA4IDM0IDI1IDMzIDEzIDY5IDMzIDgwIDQ0IDIwIDIxIDM0IDIxIDIxIDF6TTUzMCA1NGM4Mi0yMCA4Ni0yNCAxOS0yMC01OSA0LTgxIDgtODkgMTctMyAzLTE0IDExLTI1IDE4LTIzIDE0LTMyIDE1IDk1LTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjNTMzMjJlXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNTUgMjcwMmMtMy04LTUtMjgtNS00NSAwLTE4LTE0LTc1LTMyLTEyNy0xNy01Mi00MS0xMzMtNTQtMTgwLTIxLTgxLTIzLTg1LTQ4LTgyLTMzIDQtMzMtMTItMS01MCAxOS0yMyAyNC0zOCAyMC01Ny00LTIwIDUtNDYgMzMtOTYgNTktMTA4IDkxLTE1NyAxMjktMTk2IDMyLTMzIDMzLTM4IDI1LTc2LTEwLTQ2IDUtODIgMjYtNjEgOSA5IDEyIDggMTItNSAwLTE2IDItMTYgMzAtMiAxOCA5IDI4IDIwIDI0IDI3LTUgNy0yIDkgOCA1IDEwLTMgMTkgMyAyNyAxOSAxMSAyNCAxMSAyNC0xOCA5LTE2LTgtMzEtMjAtMzMtMjctMi02LTEwIDMtMTggMjItMTUgMzYtMTUgMzYgNjYgOTdsMjkgMjItMzQtMTFjLTM1LTExLTU1IDEtNDQgMjkgNCA5IDAgMTEtMTEgNy0xOC03LTIyLTI0LTYtMjQgNiAwIDEwLTggMTAtMTcgMC0xNC0zLTEzLTE3IDYtMTUgMjMtMTUgMjUgNSA0MSAxOCAxNSAyMCAyMiAxMiA1MS02IDE5LTEwIDM1LTEwIDM2czkgMCAyMS0yYzE1LTMgMTkgMCAxNSAxMC04IDIwLTE0IDQyLTkgMzMgMy01IDEzLTggMjQtOCAyMiAwIDc5IDczIDc5IDEwMiAwIDEwIDQgMTggOSAxOHMxMiA4IDE1IDE4YzUgMTYgMy0zNC0xMS0yNjItNS04Mi0zLTEwNyA1LTEwMiA3IDQgMTIgMTYgMTIgMjZzNCAyMCAxMCAyMmM1IDIgMTEgMjQgMTMgNDlzOCA1MiAxMiA1OWM1IDggMTAgMzIgMTEgNTQgMSAyMyA1IDcyIDkgMTA5bDYgNjgtMzAgMTJjLTMxIDEyLTQyIDI3LTE4IDI3IDEzIDAgMzkgMzQgNDcgNjNzMjQgMjMgNDYtMjBjMTItMjIgMzctNjMgNTUtOTAgMTktMjggNTItODEgNzQtMTE3IDIyLTM3IDUwLTgxIDYyLTk4bDIzLTMydjI3YzAgMTUgNCAyNyAxMCAyNyA1IDAgNyAxNiA0IDM2LTMgMjktMSAzNSAxMSAzMSA4LTQgMTctMiAyMCAzIDQgNiAxMiAxMCAxOCAxMCA4IDAgNy0zLTItOS0xMS03LTExLTEwIDItMTcgMTYtOSA0MC0xMTIgMzAtMTI4LTQtNS0xLTYgNS0yIDcgNCAxMiAwIDEyLTEwczItMTUgNS0xMmM0IDMtMSA0My05IDg5cy0xMiA4Ni0xMCA4OGM4IDggMTQtNyAxOS00NSAzLTIxIDgtNTkgMTEtODQgNC0yNSAxMC00OSAxNC01NSA0LTUgMTYtNDEgMjUtODAgMTAtMzggMjEtNzQgMjUtNzggMjAtMjIgMjMgOTIgNCAxNTQtMiA5LTEgMjYgNCAzOSA3IDE4IDEyIDIgMjEtNzEgMTQtMTAyIDE5LTEyNCAyNi0xMTcgMyAzIDAgNDAtNiA4NC0yMCAxMzYtMTcgMTgzIDE0IDE4NCA0IDAgNy04IDctMTcgMC0xMCA0LTIzIDgtMzBzOCAxNSA5IDQ3YzEgMzMtMSA2MC01IDYwcy0yOS03LTU3LTE1Yy01MC0xNS04MS0xMy03MCA0IDMgNSAxIDEzLTUgMTYtNiA0LTggMTYtNSAyNiA0IDExIDEgMjYtNSAzNC05IDEwLTkgMTUtMiAxNSA2IDAgOSA3IDYgMTUtNCA4LTEgMTUgNSAxNXMxMS0xMSAxMS0yNWMwLTM0IDIwLTMyIDIxIDMgMiAyNSAyIDI1IDYgMyAzLTEzIDEzLTI2IDI0LTI4IDEwLTMgMTktMTAgMTktMTVzMTItOCAyNy02YzIzIDMgMjkgOSAzNSA0MyAzIDIyIDE0IDYwIDIyIDg0IDIxIDU4IDIxIDU4LTE5IDUzLTIxLTMtMzUgMC0zNSA3IDAgNiAxNiAxMSAzNSAxMSAzNiAwIDQ3IDEzIDE5IDI0LTEyIDUtMTQgMTMtOSAzMyA0IDE3IDIgMjktNyAzNC04IDUtOSA5LTIgOXM5IDExIDYgMjVjLTIgMTQtMTEgMjUtMTggMjUtMTkgMC0xOCAxNiAyIDI0IDI2IDEwIDcgMjMtMjcgMTgtMjItMy0zMC0xLTI1IDcgNCA2IDExIDkgMTYgNiAxMy04IDQwIDYgNDAgMjEgMCA4LTEwIDE0LTIyIDE1aC0yM2wyMyA5YzE3IDcgMjIgMTcgMjIgNDQgMCA0NCA5IDY2IDI2IDY2IDE2IDAgMzMtMzAgMzYtNjUgMi0yNSA0LTI2IDUzLTIxbDUwIDUtNDQtMTJjLTY0LTE4LTY2LTM4LTQtMzIgNDcgNSA0NyA0IDEzLTYtMTktNi00MS0xMy00Ny0xNS03LTItMTMtOC0xMy0xNCAwLTggMTUtOSA0Ni00IDU5IDggNTMtMTEtNi0yMS00MS03LTUxLTE5LTI1LTI5IDgtMyAxMi0xMiA5LTIxLTUtMTIgMC0xNCAyNy0xMHMzMCAzIDE0LTRjLTExLTUtMzAtMTAtNDItMTAtMjQtMS0zNC0yNS0zMC03MSAyLTIyIDYtMjUgNDItMjMgMzcgMiAzMy0xLTIyLTEzLTIyLTQtMjMtOS0yMy05MXYtODZsMjEgMTljNDkgNDQgMTM5IDEzOSAxMzkgMTQ2IDAgNSA1IDggMTAgOCA2IDAgNC0xMy01LTMwLTE3LTM0LTIwLTcwLTQtNzAgNSAwIDctNSA0LTExLTUtNyAxNC05IDU2LTdsNjIgMyAyNCA3MGMxMyAzOSAyOCA3MiAzMyA3MyA2IDIgOCA4IDUgMTNzMSAzMSA5IDU5bDE1IDUwLTM3IDJjLTM2IDEtMzYgMSA4IDcgMzcgNSA0NSA5IDQzIDI2LTEgMTcgMTcgMTM0IDMyIDIwM2w1IDIyLTIxNy0yYy0xNjgtMi0yMTctNi0yMTYtMTUgMi03LTItMTMtNy0xMy02IDAtMTAgNi0xMCAxNCAwIDIxLTkwNyAxOC05MTUtMnptODEtMTdjLTMtOCAyLTE5IDEyLTI0IDktNSAxNC0xMyAxMC0xNy00LTMtMy0xNCAyLTIzIDgtMTYgMTMtNDMgMjYtMTQzIDMtMjEgMy0zOCAwLTM4LTQgMC0yMyA3Mi0zMSAxMjAtMiAxNC0xMyA1MS0yMyA4My0xNiA0OC0xNyA1Ny01IDU3IDkgMCAxMy02IDktMTV6bTI4Mi0zM2MyLTctNi0xMi0xNy0xMi0yMSAwLTI3IDExLTE0IDI0IDkgOSAyNiAyIDMxLTEyem04NDItMzJjMTEtOCA3LTEwLTE3LTgtMTcgMS0yOSA2LTI3IDEwIDcgMTEgMjYgMTAgNDQtMnptNDQtNDJjLTMtNS0yNC03LTQ3LTctMjMgMS01Mi0xLTY0LTVzLTI0LTMtMjYgMmMtMyA0IDggOSAyNiAxMCAxNyAyIDMyIDQgMzMgNSA3IDcgODIgMSA3OC01em01Ni0yN2MwLTEwLTM5LTE3LTEzNS0yNS0yNy0yLTYyLTctNzctMTEtMjAtNS0yOC0zLTI4IDYgMCA3IDMgOSA2IDYgNC0zIDE0LTIgMjMgMyAxMCA1IDU3IDExIDEwNSAxNCA0OCAyIDkwIDcgOTQgMTAgOCA5IDEyIDcgMTItM3ptLTU0MC0xMWMtOC01LTI0LTktMzUtOS0xNiAxLTE2IDIgNSA5IDM1IDExIDQ4IDExIDMwIDB6bTIzLTMxYy0xMC0xMC0xMzYtNDAtMTYzLTM4LTExIDEgOTggMzIgMTcwIDQ4IDIgMS0xLTQtNy0xMHptNTctMzljLTgtNi0yNC0xMC0zNS0xMHMtMzAtMy00Mi02Yy0xNC00LTIzLTItMjMgNSAwIDYgMTUgMTEgMzMgMTIgMTcgMCA0MSA0IDUyIDggMjUgMTAgMzUgMyAxNS05em0xODAgMGMtMTktMTMtMzAtMTMtMzAgMCAwIDYgMTAgMTAgMjMgMTAgMTggMCAxOS0yIDctMTB6bS0zMzAtMzJjLTI1LTQtNDktNi01NS00LTE3IDYgNTkgMjMgODAgMTcgMTQtMyA2LTctMjUtMTN6bTExOS0xMmMtMTAtMTAtNTktMTQtNTktNSAwIDUgMTQgOSAzMiA5IDE3IDAgMjktMiAyNy00em0tMzc5LTgzYzAtNyA3LTEzIDE1LTEzczE1LTYgMTUtMTRjMC03IDctMTkgMTUtMjZzMTItMTYgOS0yMSA4LTkgMjQtOWMyOSAwIDI5IDEgMjcgNDQtMiAyNC02IDQ5LTkgNTQtMyA2LTEgMTIgNiAxNCAxNiA2IDcwLTIxIDYzLTMxLTItNSA0LTE2IDE1LTI2czE3LTIyIDE0LTI2Yy0zLTUgNS05IDE4LTEwIDEzIDAgMTctMyAxMS02LTEwLTMtOC05IDQtMjEgMTYtMTYgMTQtMTgtMjQtMjYtMzEtNi00OS01LTc0IDgtMTcgOS00OSAxNi02OSAxNi0zNSAwLTM5IDMtNTkgNTAtMTIgMjgtMjUgNTAtMzAgNTAtNCAwLTggNi04IDEzIDAgNi00IDIxLTggMzItNSAxNCAxIDExIDE5LTEwIDE0LTE2IDI1LTM2IDI2LTQyem0tMTc4IDEwYy02LTItMTAtOS03LTEzIDYtMTAtMzQtMzUtNDItMjYtNyA3IDM4IDQ2IDUyIDQ1IDYgMCA0LTMtMy02em0zOTItMTg4Yy00LTgtMS0xNSA1LTE1czExLTggMTEtMTdjMC0xNS0xLTE1LTEzIDItMTAgMTItMjIgMTYtNDAgMTNzLTI0LTEtMjAgOGMyIDcgMTQgMTUgMjYgMTdzMjUgNSAyOSA2YzQgMCA1LTYgMi0xNHptLTYyNS02MGMwLTUtNi0xLTE0IDktOCAxMS0xNSAyNC0xNSAzMCAwIDUgNyAxIDE1LTEwIDgtMTAgMTQtMjMgMTQtMjl6bTYwOC0xYy05LTktMjggNi0yMSAxOCA0IDYgMTAgNiAxNy0xIDYtNiA4LTEzIDQtMTd6bS01MjEtMzBjNy0zNy00LTI2LTE2IDE2LTcgMjMtNiAzMCAxIDIzIDUtNSAxMi0yMyAxNS0zOXptLTQxIDE1Yy00LTYtMTAtOC0xMy01cy0xMSAxLTE5LTVjLTgtOC0xMy04LTEzLTEgMCAxMSAxNiAyMCAzOCAyMSA3IDEgMTAtNCA3LTEwem04MDUtMzljMC01LTktMTQtMjAtMjAtMTYtOC0yMC04LTIwIDQgMCA4IDggMTcgMTggMTkgOSAzIDE4IDUgMjAgNiAxIDAgMi0zIDItOXptLTEwMi03N2MxLTM1LTItNTItNy00My05IDE2LTcgMTAwIDMgMTAwIDIgMCA0LTI2IDQtNTd6bS00NzItNTBjLTMtOC02LTIxLTYtMjlzLTQtMTQtMTAtMTRjLTUgMC0xMCAxNi0xMCAzNSAwIDI3IDMgMzMgMTYgMjggOC0zIDEzLTEyIDEwLTIwem00OTgtMTA0YzktNTcgMi01OS0xMS00LTYgMjUtNyA0NS0zIDQ1czEwLTE5IDE0LTQxelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE4MzQgMjY1M2M0LTM4IDktMTAxIDExLTE0MiAzLTQ0IDEwLTc4IDE4LTgzczctOC01LThjLTkgMC0yOSAxMS00NCAyNXMtMzMgMjUtNDAgMjVjLTI2IDAtMTQtMTUgMzEtNDAgMjQtMTMgNDctMzAgNTAtMzggMy03IDktMTEgMTQtOCA1IDQgNDItMTAgODItMjkgNDEtMTkgNjctMzUgNTktMzVzLTQxIDEzLTczIDMwYy01MyAyNy04NyAzMC04NyA5IDAtNSAxNS0xMyAzMy0xOGwzMi05LTM5LTFjLTMyLTEtMzctMy0yNy0xMyA2LTcgMTYtMTQgMjEtMTQgMzEtNCAzMi03IDUtMTMtMjMtNi0zNi0zLTU1IDE1LTQyIDM3LTk1IDU5LTcwIDI5IDE2LTE5IDkwLTYwIDEyNS02OSAyNi03IDI2LTggMTAtMjYtOS0xMC0xNC0yNC0xMC0yOSAxMC0xNy01LTUyLTE4LTQ0LTYgNC0yMSA3LTM0IDgtMTIgMC0zMiAxMS00MyAyM3MtMjggMjItMzggMjJjLTIwIDAgOTYtODAgMTE4LTgxIDEwIDAgOC0zLTUtOC0xOC03LTYxIDQtNzUgMTktMTMgMTMtNTAgMjktNTAgMjIgMC01IDExLTE1IDI1LTIyczI1LTE3IDI1LTIyYzAtNCA5LTggMTktOHMyMS03IDI1LTE1YzgtMjMtMTctMTgtNjMgMTItMzYgMjQtNDMgMzMtNDAgNjAgMCA0LTggMTAtMTggMTQtMTcgNy0xNyA4IDAgOCAxMiAxIDE3IDEwIDE4IDI5IDAgMTUgMiA0MyA0IDYycy0xIDQxLTcgNDhjLTcgOC03IDEyIDEgMTIgNiAwIDExIDExIDExIDI0IDAgMjEtNCAyNC0yOCAyMS0yMS0zLTMzIDMtNDYgMjEtMTAgMTMtMjMgMjEtMjggMThzLTE1LTEtMjIgNWMtOSA4LTEzIDctMTMtNCAwLTggNC0xNSA4LTE1czEwLTcgMTMtMTZjNS0xNCA0LTE1LTktNC0yMiAxOC0yOCA3LTEyLTIzIDgtMTUgMTctMjQgMjAtMjAgNCAzIDcgMSA3LTUgMC0xNC0xNi0xNi0yNC0zLTMgNS0xNSAxMS0yNyAxNC0xNiA0LTE5IDItMTUtMTAgNC05IDAtMjMtOC0zMi0xMy0xNS0yMC00Ni0xNy03OSAxLTEwIDYtMTAgMjQtMiAxNyA5IDE2IDYtNS0xMC0zNC0yNi0zNi00NC01LTM1IDE5IDYgMTggMy04LTE5LTMwLTI1LTIxLTM1IDE2LTE2IDM0IDE5IDIwIDItMjUtMzAtNDYtMzEtOTgtMzktMTI2LTE5LTExIDgtOCA5IDEzIDQgMzEtNiA2NyAxIDY3IDE1IDAgNC0xNSA2LTMyIDUtMTgtMi00Ni0zLTYxLTQtMTYtMS0yNi01LTIyLTExcy0xMS0xMC0zNy0xMGMtMjQgMC02MC0zLTgwLTZsLTM4LTd2LTExN2MwLTkyLTMtMTIwLTE1LTEzMC04LTctMTUtMjktMTUtNDkgMC0yNiAzLTMyIDktMjEgNiA4IDcgMTggNSAyMi0zIDQtMSA4IDQgOHMxMy0yNSAxNy01NWMzLTMwIDExLTU1IDE2LTU1czYgMTIgMyAyOGMtMTEgNDYgNyAxNyAyMS0zNWwxMy00OCAyIDUwIDIgNTAgMTAtNDBjNS0yMiA3LTUwIDUtNjItNS0yNyAxMS0yMCAyMyAxMSA4IDE5IDkgMTkgOS03IDEtMzIgNDMtNTYgNjYtMzcgOSA4IDE0IDcgMTgtMiAzLTkgMTMtNiAzMyAxMmwyOSAyNS0yNC0yN2MtMTQtMTYtMjItMzEtMTktMzQgNC0zIDM4LTYgNzYtNyA0Ni0xIDY1LTUgNTUtMTEtMTctOS0xNTctMS0yMTggMTQtMzIgNy00MSA2LTQ4LTYtNC03LTE0LTE0LTIwLTE0LTcgMC0xMy05LTEzLTIwczQtMjAgOS0yMCA0LTctMy0xNWMtOS0xMS0xMC0xNS0xLTE1IDggMCAxMC04IDYtMTktNC0xMiA1LTM3IDI0LTY4IDE2LTI2IDMyLTYxIDM1LTc4IDYtMjkgNi0yOS00LTUtMTQgMzItNDEgNjEtNTEgNTUtNC0zLTExLTM1LTE1LTcxLTQtNDYtMTMtNzMtMjYtODYtMTYtMTYtMTctMjItOC0yOHMyOCA5IDU4IDQ2YzQyIDUyIDQ3IDU0IDkyIDU0IDYwIDAgOTYgMjYgMTEwIDgyIDYgMjIgMjggNjEgNDggODdzNTAgNjggNjcgOTVjMjMgMzcgNDYgNTYgMTA1IDg4IDQxIDIzIDk0IDU0IDExNyA3MCAyMyAxNSA0NSAyOCA1MCAyOCAxMSAwIDE2MyA3NyAxODQgOTMgOCA3IDM5IDQ3IDY4IDkwbDUyIDc3LTIgMTE3Yy0xIDk1LTQgMTIwLTE4IDEzMS0xNSAxMy0xNSAxMyAyIDggMTYtNSAxNyAxMCAxNyAyMjl2MjM1aC0zNDJsNi02N3ptMTIzLTI1OWMtMi0yLTIwIDMtNDAgMTBzLTM0IDE1LTMxIDE5YzMgMyAyMS0yIDQwLTEwIDE5LTkgMzMtMTggMzEtMTl6bS0zMDMtMTljMy05IDAtMTUtOS0xNS04IDAtMTUgNy0xNSAxNXM0IDE1IDkgMTUgMTEtNyAxNS0xNXptNjMtMTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptMzM2LTExYzktMyAxNy05IDE3LTE0cy0xNS0yLTMyIDdjLTM5IDE5LTUxIDMwLTIzIDE5IDExLTQgMjgtMTAgMzgtMTJ6bS0zNjYtMjBjLTMtMy0xMS0yLTE3IDItOSA2LTkgMTAgMSAxNiAxNCA4IDI3LTcgMTYtMTh6bTM3OC04MWMtMTctNC0xMTEgMzYtMTI1IDU0LTcgNyAyMi0xIDY0LTE5IDQxLTE4IDY5LTMzIDYxLTM1em0tMTA1IDdjMC01IDQtOCA5LTQgNSAzIDEyIDEgMTYtNSAzLTUgMTUtMTAgMjUtMTBzMjUtNyAzNC0xNWM4LTggMTktMTUgMjUtMTVzMTEtNCAxMS05YzAtOS00NSA2LTg5IDI5LTkgNS0yNCAxMS0zMyAxNC0xOSA2LTI1IDI2LTggMjYgNiAwIDEwLTUgMTAtMTF6bTYwLTc1YzAtMTYtMTYtMTktMjUtNC0xNSAyNS0zMiA5LTMwLTI5czItMzgtMjUtMjhjLTE1IDYtMjcgMTYtMjcgMjMgMCAxMCA1IDEwIDIwIDIgMTMtNyAxNy03IDEzIDAtMyA2LTIgMTMgNCAxN3M4IDEwIDUgMTVjLTggMTMgMjUgMjggNDYgMjMgMTEtMyAxOS0xMiAxOS0xOXptLTQ3NS04MGMtMzUtMzAtODUtNTgtOTItNTAtMyAyIDAgMTMgNiAyM3MxMSAxNSAxMSAxMiAyMSA0IDQ4IDE3YzYwIDMwIDY0IDMwIDI3LTJ6bTIwNS02YzAtMyAxNC05IDMwLTEzIDE3LTQgMzAtMTEgMzAtMTYgMC0yMy02NCA1LTg1IDM4LTE1IDIzLTE1IDIzIDUgMTEgMTEtNyAyMC0xNiAyMC0yMHptLTEwOSA1YzEtMTAgMi0yNSAzLTMzIDAtOSAxMC0xNCAyMS0xMyAyMCAyIDIwIDEgMC0xMy0xOC0xMy0yMS0xMi0zNiAxOC0xNiAzMi0xNiA1OCAyIDU4IDUgMCAxMC04IDEwLTE3em0tMTgtNzhjLTMtOS0xNi0xMy0zNC0xMS0yMiAzLTI3IDAtMTktOSAxNS0xOCAwLTI2LTI0LTEzLTE5IDEwLTIwIDktOC01IDEyLTEzIDEwLTE4LTctMjktMjEtMTMtMjktMzAtMTItMjUgNSAxIDktMiAxMC04IDEtNS05LTEwLTIxLTEwLTEzLTEtMjgtNC0zMy03LTYtNC0xNy0zLTI0IDEtOCA2LTMgMTAgMTggMTQgMTcgNCAzMSAxMSAzMSAxNyAwIDUtNiA5LTEyIDgtNy0yLTEyIDUtMTIgMTUgMiAxNC0xIDE1LTEyIDYtOC02LTExLTE2LTctMjNzMi03LTcgMWMtMTAgOS05IDE1IDQgMjkgMTIgMTIgMTQgMjAgNyAyNy02IDYtMTEgMTQtMTEgMTggMCAxMiA3NCA0NiA4OSA0MSA4LTMgMTEgMCA3IDctNSA3IDEgMTEgMTQgMTEgMTEgMCAyMyA3IDI3IDE2IDUgMTIgMTAgNyAyNC0yMCAxMC0yMSAxNS00NCAxMi01MXptMzQyIDU1YzE3LTE4IDE3LTIwIDItMTQtOSAzLTE3IDEwLTE3IDE1IDAgNC03IDUtMTcgMi0xMS00LTE0LTMtOSA1IDEwIDE3IDIwIDE1IDQxLTh6bS0zMy0yOGMyMC0yMCA0LTIyLTIyLTItMTkgMTQtMjEgMTgtNyAxNiA5LTEgMjItNyAyOS0xNHptLTY5NS01NGMtMi0xMy00LTUtNCAxNy0xIDIyIDEgMzIgNCAyMyAyLTEwIDItMjggMC00MHptNTM3IDQ2YzE3LTYgMjItMjQgOC0yNC01IDAtMTcgNy0yOCAxNS0xOSAxNS04IDIwIDIwIDl6bS0xNDQtNTRjLTgtNS0xMS0xMC01LTEwIDUgMC03LTktMjgtMjAtNDEtMjItNTctMjUtNTctOSAwIDUgNSA3IDEwIDQgNi0zIDI1IDUgNDMgMTkgMTcgMTQgMzcgMjYgNDIgMjYgNiAwIDMtNS01LTEwem0tMzE0LTEwNmMtNy0zNi0xNi00My0xNi0xMiAwIDIyIDcgMzggMTcgMzggMiAwIDEtMTItMS0yNnptLTc5LTM2Yy0yLTEzLTQtNS00IDE3LTEgMjIgMSAzMiA0IDIzIDItMTAgMi0yOCAwLTQwem0xMTUtMzIzYy00LTE0LTUzLTktNjkgOC0xMiAxMS03IDEzIDI5IDggMjQtMyA0Mi0xMCA0MC0xNnpNMTQ2IDE0MDhjOC0xMiAxMTgtODYgMTI2LTg0IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjQtMjUtOTMtNzMtMTQ3LTIzLTI2LTQ3LTY1LTUzLTg3LTEwLTM4LTMzLTczLTc3LTExNy0xOS0xOS0yMy0zMy0yMy04NiAwLTM1IDQtNzkgMTAtOTggMTMtNDcgMTgtMTMwIDgtMTI0LTQgMy04LTQtOC0xNSAwLTMwIDI4LTE1IDMyIDE3bDMgMjcgMjUtMzBjMTQtMTYgNDYtNTEgNzItNzYgMjctMjYgNDgtNTAgNDgtNTQgMC05IDI3LTM1IDM3LTM1IDUgMCAxOS0xMyAzMS0zMCAxOS0yNSAyOC0yOSA2Mi0yNiAyMiAyIDQ1IDggNTIgMTMgMjEgMTcgMTQzIDM0IDE4NyAyNyAyMy00IDQxLTMgNDEgMiAwIDExIDE1MSAxMiAxNjggMSA3LTUgOS0xMyA2LTE5LTQtNiAyLTUgMTUgMSAxMiA3IDI3IDIxIDM0IDMxIDYgMTEgMTUgMjAgMTkgMjAgNSAwLTctMjEtMjUtNDctMTktMjctMzctNTYtNDAtNjYtNS0xMy0xOC0xNy01NC0xOC0yNiAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE0LTYtNDAgMTUtMzEgMjUgMyAyLTEgNS04IDUtMTAgMC0xMi0xMC02LTQxIDQtMjMgMTItNjkgMTgtMTA0IDI1LTE0MCA5NS0yNTkgMTg0LTMxNiA5Mi01OCAxNDAtNzEgMjYyLTcxIDEwNCAwIDExNCAyIDE3NSAzMiA4MSA0MCAxNTQgMTAzIDE3NyAxNTEgOSAyMCAyMyA0MyAzMSA1MSAxOSAyMCAzMyA2MSAyNiA3My01IDctMiA4IDYgMyA5LTYgMTAtMSA1IDE2LTUgMTgtNCAyMCA0IDlzMTUtMyAzNSA0MGMxNCAzMCAyNiA2MSAyNiA2OCAwIDggMjMgMzkgNTEgNzAgMjggMzIgNjcgODkgODcgMTI3IDMwIDU3IDM2IDgxIDM2IDEzMCAwIDcxLTE2IDEwNi04NSAxODYtMjcgMzEtNDkgNjMtNDkgNzAgMCA4LTQgMjAtOSAyOC04IDEyLTEzIDEyLTM1LTItNDctMzEtOTEtMTItNzkgMzMgNCAxNS04IDIwLTY5IDM0LTU4IDEzLTkyIDI5LTE1OCA3My05NiA2NS0yMDYgMTIzLTIyOSAxMjItMTIgMC0xMS0zIDQtMTAgMTgtOCAxNy05LTQtNS0xNiAzLTQ2LTYtODItMjVsLTU3LTMxLTQ4IDI1Yy01MyAyNy0xMjQgODYtMTI0IDEwMyAwIDUtMjQgMTQtNTQgMjAtMzAgNS01MiA2LTUwIDJ6bTE1OC00MzBjLTItMTgtNS00MC02LTQ4LTMtMjYgMTQtOTAgMjQtOTAgNSAwIDctNCA0LTktNC01IDQtNyAxNi0zIDE4IDQgMjAgMiAxNC0xNC00LTEwLTQtMTUgMC0xMSAxMCA5IDM0LTExIDMwLTI2LTEtNy0xLTkgMS00IDMgNCA5IDcgMTQgNyA2IDAgOC00IDQtOS0zLTUtMS0xMiA1LTE2IDYtMyAxMyAxIDE2IDkgNCAxMSAxMiAxMyAyOSA2IDEzLTUgMjYtNiAzMS0yIDQgNCAzIDEtMS03LTYtMTEtNC0xMyAxMS04IDE4IDcgMTggNi0xLTgtMTMtMTEtMzItMTQtNTctMTEtMjUgNC0zNiAxLTM0LTcgMy0yMCAxNy0zOCAyNi0zMiA0IDMgMTUtNiAyNC0yMHMyNC0yNSAzMi0yNWMxMCAwIDE0LTYgMTEtMTQtNC05LTEtMTMgNi0xMCA3IDIgMjQtNyAzNy0yMXMyOS0yNSAzNi0yNWM2IDAgMjYtMTMgNDQtMzAgMTgtMTYgMzgtMzAgNDUtMzAgMjQgMCAyNy0yMCAzLTIxLTYyLTItMTE1IDEtMTM4IDYtMTQgNC0zMiA3LTQwIDhzLTI1IDgtMzcgMTVjLTEzIDctMjMgMTAtMjMgNyAwLTQtNyAxLTE2IDktOCA5LTIyIDE2LTI5IDE2LTggMC0xNyA1LTIxIDEyLTUgNy0yIDkgNyAzIDgtNC0xIDctMTggMjQtMTggMTgtMzMgMzMtMzMgMzVzLTExIDM0LTI1IDcyLTI1IDg5LTI1IDExNGMwIDQ3IDE3IDE2OCAyNiAxODIgOSAxNSAxMSA4IDgtMjR6bTM1MS01OGMtMy01LTEzLTEwLTIxLTEwcy0xNCA1LTE0IDEwYzAgNiA5IDEwIDIxIDEwIDExIDAgMTctNCAxNC0xMHptNDIyLTYyYzMtNDggMTItODMgMjEtODMgMjIgMCAyMS0xMi0zLTI1LTE0LTctMjUtMTktMjUtMjcgMC03LTYtMTMtMTMtMTNzLTIzLTExLTM1LTI1LTI4LTI1LTM0LTI1Yy0xMCAwLTEwIDItMSA4IDE2IDEwIDQ1IDc5IDUwIDExNyA2IDU1IDM4IDExMiA0MCA3M3pNODE4IDcwOWMyLTEyLTYtMTYtMzMtMTYtMzMgMC00NSAxNC0yOCAzMSAxMyAxMiA1OCAyIDYxLTE1em04Ni05N2MtNi00LTEwLTE1LTktMjQgMi0xMS0yLTE1LTExLTExLTggMy0xNCA4LTE0IDExIDAgMTEgMzMgNDIgMzkgMzcgMy00IDEtOS01LTEzem0tOTktMjNjNS01IDAtOS0xNC05LTEyIDAtMzAgOC0zOSAxNy0xNiAxNS0xNSAxNiAxMyA5IDE3LTQgMzQtMTIgNDAtMTd6bTE5NS0yNzhjMC0xMC04LTI2LTE5LTM1LTE3LTE1LTE5LTE1LTI1LTEtNyAxOSAyMiA2NyAzNSA1OSA1LTMgOS0xMyA5LTIzem0tMTEzLTI3Yy05LTktMTA2LTEwLTEwMC0xIDIgNCAyNyA3IDU1IDdzNDktMyA0NS02em0tMTItMTY0Yy0xMi0xOS0xMDktNzAtMTM1LTcwLTE3IDAtNyA4IDM0IDI1IDMzIDEzIDY5IDMzIDgwIDQ0IDIwIDIxIDM0IDIxIDIxIDF6TTUzMCA1NGM4Mi0yMCA4Ni0yNCAxOS0yMC01OSA0LTgxIDgtODkgMTctMyAzLTE0IDExLTI1IDE4LTIzIDE0LTMyIDE1IDk1LTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjNTM0NjNjXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNTUgMjcwMmMtMy04LTUtMjgtNS00NSAwLTE4LTE0LTc1LTMyLTEyNy0xNy01Mi00MS0xMzMtNTQtMTgwLTIxLTgxLTIzLTg1LTQ4LTgyLTMzIDQtMzMtMTItMS01MCAxOS0yMyAyNC0zOCAyMC01Ny00LTIwIDUtNDYgMzMtOTYgNTUtMTAxIDEwNS0xNzYgMTM2LTIwNCAyMi0yMSAyNS0zMCAyMC01OC0zLTE4LTMtNDUgMC01OSA2LTIxIDktMjQgMjEtMTRzMTUgOSAxNS00YzAtMTUgMi0xNSAzMC0xIDE4IDkgMjggMjAgMjQgMjctNSA3LTIgOSA4IDUgMTAtMyAxOSAzIDI3IDE5IDExIDI0IDExIDI0LTE4IDktMTYtOC0zMS0yMC0zMy0yNy0yLTYtMTAgMy0xOCAyMi0xNSAzNi0xNSAzNiA2NiA5N2wyOSAyMi0zMy0xMmMtMjctMTAtMzUtOS00MiAyLTQgOC02IDIwLTMgMjggNCA5IDAgMTEtMTEgNy0xOC03LTIyLTI0LTYtMjQgNiAwIDEwLTggMTAtMTcgMC0xNC0zLTEzLTE3IDYtMTUgMjMtMTUgMjUgNSA0MSAxOCAxNSAyMCAyMiAxMiA1MS02IDE5LTEwIDM1LTEwIDM2czkgMCAyMS0yYzE1LTMgMTkgMCAxNSAxMC04IDIwLTE0IDQyLTkgMzMgMy01IDEzLTggMjQtOCAyMiAwIDc5IDczIDc5IDEwMiAwIDEwIDQgMTggOSAxOHMxMiA4IDE1IDE4YzMgOSAzLTI2IDAtNzgtMTQtMjI2LTE0LTI5Ni0xLTI3MCA2IDE0IDE1IDI3IDE5IDMwczkgMjYgMTEgNTJjMiAyNSA4IDUxIDEyIDU4IDUgOCAxMCAzMiAxMSA1NCAxIDIzIDUgNzIgOSAxMDlsNiA2OC0zMCAxMmMtMzEgMTItNDIgMjctMTggMjcgMTMgMCAzOSAzNCA0NyA2M3MyNCAyMyA0Ni0yMGMxMi0yMiAzNy02MyA1NS05MCAxOS0yOCA1Mi04MSA3NC0xMTcgMjItMzcgNTAtODEgNjItOThsMjMtMzJ2MjdjMCAxNSA0IDI3IDEwIDI3IDUgMCA3IDE2IDQgMzYtMyAyOS0xIDM1IDExIDMxIDgtNCAxNy0yIDIwIDMgNCA2IDEyIDEwIDE4IDEwIDggMCA3LTMtMi05LTExLTctMTEtMTAgMi0xNyAxNi05IDQwLTExMiAzMC0xMjgtNC01LTEtNiA1LTIgNyA0IDEyIDAgMTItMTBzMi0xNSA1LTEyYzQgMy0xIDQzLTkgODlzLTEyIDg2LTEwIDg4YzggOCAxNC03IDE5LTQ1IDMtMjEgOC01OSAxMS04NCA0LTI1IDEwLTQ5IDE0LTU1IDQtNSAxNi00MSAyNS04MCAxMC0zOCAyMS03NCAyNS03OCAyMC0yMiAyMyA5MiA0IDE1NC0yIDktMSAyNiA0IDM5IDcgMTggMTIgMiAyMS03MSAxNC0xMDIgMTktMTI0IDI2LTExNyAzIDMgMCA0MC02IDg0LTIwIDEzNi0xNyAxODMgMTQgMTg0IDQgMCA3LTggNy0xNyAwLTEwIDQtMjMgOC0zMHM4IDE1IDkgNDdjMSAzMy0xIDYwLTUgNjBzLTI5LTctNTctMTVjLTUwLTE1LTgxLTEzLTcwIDQgMyA1IDEgMTMtNSAxNi02IDQtOCAxNi01IDI2IDQgMTEgMSAyNi01IDM0LTkgMTAtOSAxNS0yIDE1IDYgMCA5IDcgNiAxNS00IDgtMSAxNSA1IDE1czExLTExIDExLTI1YzAtMzQgMjAtMzIgMjEgMyAyIDI1IDIgMjUgNiAzIDMtMTMgMTMtMjYgMjQtMjggMTAtMyAxOS0xMCAxOS0xNXMxMi04IDI3LTZjMjMgMyAyOSA5IDM1IDQzIDMgMjIgMTQgNjAgMjIgODQgMjEgNTggMjEgNTgtMTkgNTMtMjEtMy0zNSAwLTM1IDcgMCA2IDE2IDExIDM1IDExIDM2IDAgNDcgMTMgMTkgMjQtMTIgNS0xNCAxMy05IDMzIDQgMTcgMiAyOS03IDM0LTggNS05IDktMiA5czkgMTEgNiAyNWMtMiAxNC0xMSAyNS0xOCAyNS0xOSAwLTE4IDE2IDIgMjQgMjYgMTAgNyAyMy0yNyAxOC0yMi0zLTMwLTEtMjUgNyA0IDYgMTEgOSAxNiA2IDEzLTggNDAgNiA0MCAyMSAwIDgtMTAgMTQtMjIgMTVoLTIzbDIzIDljMTcgNyAyMiAxNyAyMiA0NCAwIDQ0IDkgNjYgMjYgNjYgMTYgMCAzMy0zMCAzNi02NSAyLTI1IDQtMjYgNTMtMjFsNTAgNS00NC0xMmMtNjQtMTgtNjYtMzgtNC0zMiA0NyA1IDQ3IDQgMTMtNi0xOS02LTQxLTEzLTQ3LTE1LTctMi0xMy04LTEzLTE0IDAtOCAxNS05IDQ2LTQgNTkgOCA1My0xMS02LTIxLTQxLTctNTEtMTktMjUtMjkgOC0zIDEyLTEyIDktMjEtNS0xMiAwLTE0IDI3LTEwczMwIDMgMTQtNGMtMTEtNS0zMC0xMC00Mi0xMC0yNC0xLTM0LTI1LTMwLTcxIDItMjIgNi0yNSA0Mi0yMyAzNyAyIDMzLTEtMjItMTMtMjItNC0yMy05LTIzLTkxdi04NmwyMSAxOWM0OSA0NCAxMzkgMTM5IDEzOSAxNDYgMCA1IDUgOCAxMCA4IDYgMCA0LTEzLTUtMzAtMTctMzQtMjAtNzAtNC03MCA1IDAgNy01IDQtMTEtNS03IDE0LTkgNTYtN2w2MiAzIDI0IDcwYzEzIDM5IDI4IDcyIDMzIDczIDYgMiA4IDggNSAxM3MxIDMxIDkgNTlsMTUgNTAtMzcgMmMtMzYgMS0zNiAxIDggNyAzNyA1IDQ1IDkgNDMgMjYtMSAxNyAxNyAxMzQgMzIgMjAzbDUgMjItMjE3LTJjLTE2OC0yLTIxNy02LTIxNi0xNSAyLTctMi0xMy03LTEzLTYgMC0xMCA2LTEwIDE0IDAgMjEtOTA3IDE4LTkxNS0yem04MS0xN2MtMy04IDItMTkgMTItMjQgOS01IDE0LTEzIDEwLTE3LTQtMy0zLTE0IDItMjMgOC0xNiAxMy00MyAyNi0xNDMgMy0yMSAzLTM4IDAtMzgtNCAwLTIzIDcyLTMxIDEyMC0yIDE0LTEzIDUxLTIzIDgzLTE2IDQ4LTE3IDU3LTUgNTcgOSAwIDEzLTYgOS0xNXptMjgyLTMzYzItNy02LTEyLTE3LTEyLTIxIDAtMjcgMTEtMTQgMjQgOSA5IDI2IDIgMzEtMTJ6bTg0Mi0zMmMxMS04IDctMTAtMTctOC0xNyAxLTI5IDYtMjcgMTAgNyAxMSAyNiAxMCA0NC0yem00NC00MmMtMy01LTI0LTctNDctNy0yMyAxLTUyLTEtNjQtNXMtMjQtMy0yNiAyYy0zIDQgOCA5IDI2IDEwIDE3IDIgMzIgNCAzMyA1IDcgNyA4MiAxIDc4LTV6bTU2LTI3YzAtMTAtMzktMTctMTM1LTI1LTI3LTItNjItNy03Ny0xMS0yMC01LTI4LTMtMjggNiAwIDcgMyA5IDYgNiA0LTMgMTQtMiAyMyAzIDEwIDUgNTcgMTEgMTA1IDE0IDQ4IDIgOTAgNyA5NCAxMCA4IDkgMTIgNyAxMi0zem0tNTQwLTExYy04LTUtMjQtOS0zNS05LTE2IDEtMTYgMiA1IDkgMzUgMTEgNDggMTEgMzAgMHptMjMtMzFjLTEwLTEwLTEzNi00MC0xNjMtMzgtMTEgMSA5OCAzMiAxNzAgNDggMiAxLTEtNC03LTEwem01Ny0zOWMtOC02LTI0LTEwLTM1LTEwcy0zMC0zLTQyLTZjLTE0LTQtMjMtMi0yMyA1IDAgNiAxNSAxMSAzMyAxMiAxNyAwIDQxIDQgNTIgOCAyNSAxMCAzNSAzIDE1LTl6bTE4MCAwYy0xOS0xMy0zMC0xMy0zMCAwIDAgNiAxMCAxMCAyMyAxMCAxOCAwIDE5LTIgNy0xMHptLTMzMC0zMmMtMjUtNC00OS02LTU1LTQtMTcgNiA1OSAyMyA4MCAxNyAxNC0zIDYtNy0yNS0xM3ptMTE5LTEyYy0xMC0xMC01OS0xNC01OS01IDAgNSAxNCA5IDMyIDkgMTcgMCAyOS0yIDI3LTR6bS0zNzktODNjMC03IDctMTMgMTUtMTNzMTUtNiAxNS0xNGMwLTcgNy0xOSAxNS0yNnMxMi0xNiA5LTIxIDgtOSAyNC05YzI5IDAgMjkgMSAyNyA0NC0yIDI0LTYgNDktOSA1NC0zIDYtMSAxMiA2IDE0IDE2IDYgNzAtMjEgNjMtMzEtMi01IDQtMTYgMTUtMjZzMTctMjIgMTQtMjZjLTMtNSA1LTkgMTgtMTAgMTMgMCAxNy0zIDExLTYtMTAtMy04LTkgNC0yMSAxNi0xNiAxNC0xOC0yNC0yNi0zMS02LTQ5LTUtNzQgOC0xNyA5LTQ5IDE2LTY5IDE2LTM1IDAtMzkgMy01OSA1MC0xMiAyOC0yNSA1MC0zMCA1MC00IDAtOCA2LTggMTMgMCA2LTQgMjEtOCAzMi01IDE0IDEgMTEgMTktMTAgMTQtMTYgMjUtMzYgMjYtNDJ6bS0xNzggMTBjLTYtMi0xMC05LTctMTMgNi0xMC0zNC0zNS00Mi0yNi03IDcgMzggNDYgNTIgNDUgNiAwIDQtMy0zLTZ6bTM5Mi0xODhjLTQtOC0xLTE1IDUtMTVzMTEtOCAxMS0xN2MwLTE1LTEtMTUtMTMgMi0xMCAxMi0yMiAxNi00MCAxM3MtMjQtMS0yMCA4YzIgNyAxNCAxNSAyNiAxN3MyNSA1IDI5IDZjNCAwIDUtNiAyLTE0em0tNjI1LTYwYzAtNS02LTEtMTQgOS04IDExLTE1IDI0LTE1IDMwIDAgNSA3IDEgMTUtMTAgOC0xMCAxNC0yMyAxNC0yOXptNjA4LTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptLTUyMS0zMGM3LTM3LTQtMjYtMTYgMTYtNyAyMy02IDMwIDEgMjMgNS01IDEyLTIzIDE1LTM5em0tNDEgMTVjLTQtNi0xMC04LTEzLTVzLTExIDEtMTktNWMtOC04LTEzLTgtMTMtMSAwIDExIDE2IDIwIDM4IDIxIDcgMSAxMC00IDctMTB6bTgwNS0zOWMwLTUtOS0xNC0yMC0yMC0xNi04LTIwLTgtMjAgNCAwIDggOCAxNyAxOCAxOSA5IDMgMTggNSAyMCA2IDEgMCAyLTMgMi05em0tMTAyLTc3YzEtMzUtMi01Mi03LTQzLTkgMTYtNyAxMDAgMyAxMDAgMiAwIDQtMjYgNC01N3ptLTQ3Mi01MGMtMy04LTYtMjEtNi0yOXMtNC0xNC0xMC0xNGMtNSAwLTEwIDE2LTEwIDM1IDAgMjcgMyAzMyAxNiAyOCA4LTMgMTMtMTIgMTAtMjB6bTQ5OC0xMDRjOS01NyAyLTU5LTExLTQtNiAyNS03IDQ1LTMgNDVzMTAtMTkgMTQtNDF6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTgzNCAyNjUzYzQtMzggOS0xMDEgMTEtMTQyIDMtNDQgMTAtNzggMTgtODNzNy04LTUtOGMtOSAwLTI5IDExLTQ0IDI1cy0zMyAyNS00MCAyNWMtMjYgMC0xNC0xNSAzMS00MCAyNC0xMyA0Ny0zMCA1MC0zOCAzLTcgOS0xMSAxNC04IDUgNCA0Mi0xMCA4Mi0yOSA0MS0xOSA2Ny0zNSA1OS0zNXMtNDEgMTMtNzMgMzBjLTUzIDI3LTg3IDMwLTg3IDkgMC01IDE1LTEzIDMzLTE4bDMyLTktMzktMWMtMzItMS0zNy0zLTI3LTEzIDYtNyAxNi0xNCAyMS0xNCAzMS00IDMyLTcgNS0xMy0yMy02LTM2LTMtNTUgMTUtNDIgMzctOTUgNTktNzAgMjkgMTYtMTkgOTAtNjAgMTI1LTY5IDI2LTcgMjYtOCAxMC0yNi05LTEwLTE0LTI0LTEwLTI5IDMtNiAzLTIwIDAtMzItNS0xNS0xMC0xNy0yMC05LTkgOC0xNSA4LTIwIDAtMy02LTEyLTgtMTgtNC03IDMtMy0yIDctMTAgMTEtOSAyNy0xNiAzNS0xNyAxMSAwIDEwLTMtNC04LTE4LTctNjEgNC03NSAxOS0zIDMtMTYgMTEtMzAgMTktMjAgMTEtMTkgNyA4LTE4IDE4LTE3IDQxLTMxIDUxLTMxczE4LTcgMTgtMTVjMC0yMS0zMC0xOS01NyA1LTIzIDIwLTQwIDI2LTQwIDE0czI5LTMzIDU0LTQwYzI5LTcgMzQtMTkgMTEtMjgtOC0zLTE1LTEtMTUgNCAwIDYtMyA5LTcgOC01LTItMTkgNS0zMyAxNS0xMyA5LTIxIDE3LTE2IDE3czMgNy00IDE1Yy04IDEwLTkgMTUtMSAxNSA3IDAgOCA4IDEgMjUtNSAxNC02IDI1LTIgMjYgNCAwLTIgNC0xMyA5LTE3IDctMTcgOS0yIDkgMTIgMSAxNyAxMCAxOCAyOSAwIDE1IDIgNDMgNCA2MnMtMSA0MS03IDQ4Yy03IDgtNyAxMiAxIDEyIDYgMCAxMSAxMSAxMSAyNCAwIDIxLTQgMjQtMjggMjEtMjEtMy0zMyAzLTQ2IDIxLTEwIDEzLTIzIDIxLTI4IDE4cy0xNS0xLTIyIDVjLTkgOC0xMyA3LTEzLTQgMC04IDQtMTUgOC0xNXMxMC03IDEzLTE2YzUtMTQgNC0xNS05LTQtMjIgMTgtMjggNy0xMi0yMyA4LTE1IDE3LTI0IDIwLTIwIDQgMyA3IDEgNy01IDAtNy03LTEyLTE1LTEycy0xNSA0LTE1IDktOSAxMS0yMSAxNGMtMTYgNC0xOSAyLTE1LTEwIDQtOSAwLTIzLTgtMzItMTMtMTUtMjAtNDYtMTctNzkgMS0xMCA2LTEwIDI0LTIgMTcgOSAxNiA2LTUtMTAtMzQtMjYtMzYtNDQtNS0zNSAxOSA2IDE4IDMtOC0xOS0zMC0yNS0yMS0zNSAxNi0xNiAzNCAxOSAyMCAyLTI1LTMwLTQ2LTMxLTk4LTM5LTEyNi0xOS0xMSA4LTggOSAxMyA0IDMxLTYgNjcgMSA2NyAxNSAwIDQtMTUgNi0zMiA1LTE4LTItNDYtMy02MS00LTE2LTEtMjYtNS0yMi0xMXMtMTEtMTAtMzctMTBjLTI0IDAtNjAtMy04MS02bC0zNy03IDItMTEyYzMtOTYgMC0xMTYtMTQtMTMyLTEwLTExLTE4LTM1LTE4LTU0IDAtMjQgMy0zMCA5LTE5IDYgOCA3IDE4IDUgMjItMyA0LTEgOCA1IDggNSAwIDExLTE1IDEzLTMyIDItMTggNy0zMSAxMS0yOCAxMSA3IDM2LTM5IDM4LTcwIDEtMTQgNS01IDggMjBsNyA0NSA4LTUyYzgtNTMgMjEtNjggMjktMzUgMyAxMSA1IDcgNi0xMCAxLTE5IDgtMjkgMzEtMzYgMjAtOCAzMi04IDM2IDAgNCA3IDkgNiAxNS0zIDYtMTEgMTQtOCAzNiAxMWwyOCAyNS0yNC0yN2MtMjItMjYtMjMtMjgtNi0zNCAxMC00IDQ0LTggNzYtOCAzNS0xIDUyLTQgNDMtOS0xOC0xMC0xNjQtMi0yMTkgMTItMzIgOC00MSA3LTQ4LTUtNC03LTE0LTE0LTIwLTE0LTcgMC0xMy05LTEzLTIwczQtMjAgOS0yMCA0LTctMy0xNWMtOS0xMS0xMC0xNS0xLTE1IDggMCAxMC04IDYtMTktNC0xMiA1LTM3IDI0LTY4IDE2LTI2IDMyLTYxIDM1LTc4IDYtMjkgNi0yOS00LTUtMTQgMzItNDEgNjEtNTEgNTUtNC0zLTExLTM1LTE1LTcxLTQtNDYtMTMtNzMtMjYtODYtMTYtMTYtMTctMjItOC0yOHMyOCA5IDU4IDQ2YzQyIDUyIDQ3IDU0IDkyIDU0IDYwIDAgOTYgMjYgMTEwIDgyIDYgMjIgMjggNjEgNDggODdzNTAgNjggNjcgOTVjMjMgMzcgNDYgNTYgMTA1IDg4IDQxIDIzIDk0IDU0IDExNyA3MCAyMyAxNSA0NSAyOCA1MCAyOCAxMSAwIDE2MyA3NyAxODQgOTMgOCA3IDM5IDQ3IDY4IDkwbDUyIDc3LTIgMTE3Yy0xIDk1LTQgMTIwLTE4IDEzMS0xNSAxMy0xNSAxMyAyIDggMTYtNSAxNyAxMCAxNyAyMjl2MjM1aC0zNDJsNi02N3ptMTIzLTI1OWMtMi0yLTIwIDMtNDAgMTBzLTM0IDE1LTMxIDE5YzMgMyAyMS0yIDQwLTEwIDE5LTkgMzMtMTggMzEtMTl6bS0zMDMtMTljMy05IDAtMTUtOS0xNS04IDAtMTUgNy0xNSAxNXM0IDE1IDkgMTUgMTEtNyAxNS0xNXptNjMtMTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptMzM2LTExYzktMyAxNy05IDE3LTE0cy0xNS0yLTMyIDdjLTM5IDE5LTUxIDMwLTIzIDE5IDExLTQgMjgtMTAgMzgtMTJ6bS0zNjMtOGMwLTgtNy0xNS0xNS0xNS0yNiAwLTE4IDIwIDEzIDI5IDEgMSAyLTYgMi0xNHptLTQ2LTY0YzE2LTE3IDE2LTIxIDQtMjEtOSAwLTE4IDktMjEgMjEtNCAxMy0xMCAxOC0xOCAxMy03LTQtMTAtMy02IDNzLTIgMTMtMTMgMTYtMjAgMTAtMjAgMTdjMCAxMyA0NS0xNiA3NC00OXptNDIxLTI5Yy0xNy00LTExMSAzNi0xMjUgNTQtNyA3IDIyLTEgNjQtMTkgNDEtMTggNjktMzMgNjEtMzV6bS0xMDUgN2MwLTUgNC04IDktNCA1IDMgMTIgMSAxNi01IDMtNSAxNS0xMCAyNS0xMHMyNS03IDM0LTE1YzgtOCAxOS0xNSAyNS0xNXMxMS00IDExLTljMC05LTQ1IDYtODkgMjktOSA1LTI0IDExLTMzIDE0LTE5IDYtMjUgMjYtOCAyNiA2IDAgMTAtNSAxMC0xMXptLTI3Mi0zMmM1LTI0LTE1LTIxLTI4IDQtMTAgMTgtOSAyMCA3IDE3IDEwLTIgMTktMTEgMjEtMjF6bTMzMi00M2MwLTE2LTE2LTE5LTI1LTQtMTUgMjUtMzIgOS0zMC0yOXMyLTM4LTI1LTI4Yy0xNSA2LTI3IDE2LTI3IDIzIDAgMTAgNSAxMCAyMCAyIDEzLTcgMTctNyAxMyAwLTMgNi0yIDEzIDQgMTdzOCAxMCA1IDE1Yy04IDEzIDI1IDI4IDQ2IDIzIDExLTMgMTktMTIgMTktMTl6bS00NzUtODBjLTM1LTMwLTg1LTU4LTkyLTUwLTMgMiAwIDEzIDYgMjNzMTEgMTUgMTEgMTIgMjEgNCA0OCAxN2M2MCAzMCA2NCAzMCAyNy0yem05Ni0xYzEtMTAgMi0yNSAzLTMzIDAtOCA5LTE1IDE4LTE1czE5LTQgMjItOCAzLTUgMC0yYy00IDItMTQgMC0yNC01LTEzLTctMjAtMi0zMiAyMy0xNSAzMi0xNCA1NyAzIDU3IDUgMCAxMC04IDEwLTE3em0tMTgtNzhjLTMtOS0xNi0xMy0zNC0xMS0yMiAzLTI3IDAtMTktOSAxNS0xOCAwLTI2LTI0LTEzLTE5IDEwLTIwIDktOC01IDEyLTEzIDEwLTE4LTctMjktMjEtMTMtMjktMzAtMTItMjUgNSAxIDktMiAxMC04IDEtNS0xMS0xMS0yNi0xMS0xNi0xLTI4LTMtMjgtNHMtMTAtMy0yMi00Yy0zMi00LTE5IDEwIDE3IDE3IDE2IDQgMzAgMTEgMzAgMTcgMCA1LTYgOS0xMiA4LTctMi0xMiA1LTEyIDE1IDIgMTQtMSAxNS0xMiA2LTgtNi0xMS0xNi03LTIzczItNy03IDFjLTEwIDktOSAxNSA0IDI5IDEyIDEyIDE0IDIwIDcgMjctNiA2LTExIDE0LTExIDE4IDAgMTIgNzQgNDYgODkgNDEgOC0zIDExIDAgNyA3LTUgNyAxIDExIDE0IDExIDExIDAgMjMgNyAyNyAxNiA1IDEyIDEwIDcgMjQtMjAgMTAtMjEgMTUtNDQgMTItNTF6bTM0MiA1NWMxNy0xOCAxNy0yMCAyLTE0LTkgMy0xNyAxMC0xNyAxNSAwIDQtNyA1LTE3IDItMTEtNC0xNC0zLTkgNSAxMCAxNyAyMCAxNSA0MS04em0tMzMtMjhjMjAtMjAgNC0yMi0yMi0yLTE5IDE0LTIxIDE4LTcgMTYgOS0xIDIyLTcgMjktMTR6bS02OTUtNTRjLTItMTMtNC01LTQgMTctMSAyMiAxIDMyIDQgMjMgMi0xMCAyLTI4IDAtNDB6bTU0NyAzN2M4LTggMjEtMTUgMjgtMTYgOSAwIDktMiAxLTUtMTEtNS03MyAyMi03MyAzMSAwIDExIDMwIDQgNDQtMTB6bS0xNTQtNDVjLTgtNS0xMS0xMC01LTEwIDUgMC03LTktMjgtMjAtNDEtMjItNTctMjUtNTctOSAwIDUgNSA3IDEwIDQgNi0zIDI1IDUgNDMgMTkgMTcgMTQgMzcgMjYgNDIgMjYgNiAwIDMtNS01LTEwem0tMzE0LTEwNmMtNy0zNi0xNi00My0xNi0xMiAwIDIyIDcgMzggMTcgMzggMiAwIDEtMTItMS0yNnptLTc3LTIxYy0xLTM0LTItMzUtOS0xMy0xMSAzNi0xMSA1MCAwIDUwIDYgMCAxMC0xNyA5LTM3em0xMTMtMzM4Yy00LTE0LTUzLTktNjkgOC0xMiAxMS03IDEzIDI5IDggMjQtMyA0Mi0xMCA0MC0xNnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNzUwIDIyMTBjMC01IDktMTQgMjAtMjAgMTYtOCAxOC04IDE0IDQtNiAxNy0zNCAzMC0zNCAxNnpNODkzIDE5MjdjNC0xMCA3LTI1IDctMzMgMC05IDUtMTIgMTAtOSA2IDMgMTAgMiAxMC0zIDAtNiA3LTEzIDE2LTE2IDE0LTUgMTUtNCA1IDgtOCAxMC05IDE2LTEgMjEgNSAzIDEwIDEyIDEwIDE4IDAgNy00IDYtMTAtMy05LTEzLTE0LTExLTMyIDEwLTE1IDE4LTE5IDIwLTE1IDd6TTE0NiAxNDA4YzgtMTIgMTE4LTg2IDEyNi04NCA0IDAgMTUtOSAyMy0yMiA5LTEyIDIwLTIwIDI1LTE3IDQgMyAxMy0yIDIwLTEwczE2LTEyIDIxLTkgOSAwIDktNiA1LTggMTAtNWM2IDMgMTMtMSAxNi0xMCA5LTI0LTI1LTkzLTczLTE0Ny0yMy0yNi00Ny02NS01My04Ny0xMC0zOC0zMy03My03Ny0xMTctMTktMTktMjMtMzMtMjMtODYgMC0zNSA0LTc5IDktOTggMTMtNDggMjEtMTMxIDEyLTEyNi00IDMtNy00LTgtMTQtMS0xMyAzLTE3IDEzLTEzIDggMyAxNCAxOCAxNCAzNHM1IDI5IDEyIDI5YzYgMCA5LTMgNS02LTYtNiAzMS01MiA3OC05NiAxNy0xNSA0MC0zNyA1My01MCAzNS0zNCA3NS01OCA4NS01MSA1IDMgMTgtNSAyOC0xOCAxNi0yMSAyMC0yMiA0My0xMCAxNCA4IDI0IDE3IDIyIDIwczQ5IDYgMTE1IDZjNjUgMCAxMTkgNCAxMTkgOHMyNSA2IDU2IDNjMzEtMiA3MCAwIDg1IDQgMjIgNiAyOSA1IDI5LTUgMC03IDctMTUgMTUtMTkgOC0zIDE1LTIgMTUgMnMxNCAxNiAzMSAyNmwzMCAxOC0zNi00OGMtMjEtMjctNDEtNTktNDYtNzEtNy0xOS0xNi0yMy01Ni0yNC0yNyAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE3LTctMzkgMTYtMjggMjggNCA1IDEgNS02IDAtOS01LTEyLTIwLTktNDQgMzUtMjY4IDExOC0zOTcgMzAyLTQ2NyAzOC0xNSA3Ni0xOSAxNjAtMTkgMTA0IDAgMTE0IDIgMTc1IDMyIDgxIDQwIDE1NCAxMDMgMTc3IDE1MSA5IDIwIDIzIDQzIDMxIDUxIDE5IDIwIDMzIDYxIDI2IDczLTQgNi0yIDggNCA0IDExLTYgNzIgMTA1IDcyIDEzMSAwIDggMjMgNDAgNTEgNzEgNTcgNjQgMTE1IDE3MSAxMjUgMjMwIDkgNjAtMTkgMTMzLTgxIDIwNi0zMCAzNS01NyA3NS02MSA5MC03IDMxLTE3IDMzLTQyIDgtMTEtMTEtMjgtMjEtNDAtMjQtMTctNS0yMyAwLTMzIDMxLTE3IDUxLTI3IDYxLTY1IDYxLTQzIDAtMTExIDMzLTE5MyA5My02MiA0Ni03MyA1MS0xMDAgNDgtNy0yLTEwIDMtNiA5IDcgMTEtNjggNTAtOTUgNDktOCAwIDMtNyAyNS0xNSA0MS0xNSA3Ny00MSA0MC0yOS0xMSA0LTI5IDExLTQxIDE3LTIxIDEwLTg2LTYtMTQwLTMzLTE3LTktMzEtNi03MCAxNC01MyAyNy0xMjQgODYtMTI0IDEwMyAwIDUtMjQgMTQtNTQgMjAtMzAgNS01MiA2LTUwIDJ6bTQ5OC0zMzRjNTgtNCAxMDYtMTEgMTA2LTE1IDAtMTItNDgtMTEtMTQwIDItNzQgMTEtMTEyIDE3LTExOCAxOC0yIDEgMCA2IDMgMTEgNCA3IDEzIDcgMjQgMCAxMC01IDY2LTEyIDEyNS0xNnpNMzA5IDk3MmMtMTYtNjggMC0xMzIgMzQtMTMyIDEzIDAgMjYtOSAzMi0yMiA3LTE3IDI2LTI3IDcyLTM4IDM0LTkgNjUtMTkgNjgtMjIgMTEtMTEtNDgtMzYtNzUtMzItMjIgMy0yMyAyLTctNyAxMC02IDI3LTkgMzctNiAxNiA0IDE2IDIgNC0yMi0xMy0yNC0xMi0yNyA4LTM2IDEyLTUgMzUtMjIgNTEtMzcgMTUtMTYgMzQtMjggNDItMjhzMTUtNCAxNS0xMGMwLTUgNy0xMCAxNS0xMHMxNS01IDE1LTExYzAtMTkgNzAtNDEgMTEyLTM0IDczIDEzIDU5IDU5LTE5IDY0LTcgMS0xMCA4LTcgMTYgNSAxMyA5IDEzIDIyIDMgMTAtOCAxMy05IDktMS03IDExIDU2IDEwIDk1LTMgMTktNiA0NyA3IDc0IDMzIDE3IDE3IDE3IDE3IDEyLTVsLTYtMjIgMjkgMjFjMTcgMTEgMzcgMzMgNDcgNDcgOSAxNSAyMCAyOSAyMyAzMiA0IDMgMTMgMzQgMjAgNzAgNiAzNiAyMSA3OCAzMiA5MyAxMCAxNSAxNyAzNiAxNCA0Ny0zIDEwIDEgMjEgOCAyNCAxOCA3IDI3LTUgMTUtMTktNi03LTExLTM2LTExLTY2LTEtNDMgMi01NiAyMS03MSAxMi0xMCAzMy0xOCA0Ni0xOHMyNC00IDI0LTljMC00LTEwLTgtMjItOC00MS0xLTQ4LTMtNDgtMTQgMC02IDExLTIwIDI2LTMxIDE0LTExIDIyLTIzIDE5LTI2LTMtNC0xMC0xLTE0IDYtNyAxMi0zMyAxNy03NCAxMy0xMCAwLTE1LTUtMTItMTEgMy01LTItMTAtMTItMTEtMTAgMC0xMy0zLTUtNiA2LTIgMTItMTIgMTEtMjEgMC05LTMtMTItNS02LTYgMTUtNTAgNi02Ni0xMy0xMC0xMy04LTE4IDEwLTMzIDI3LTIyIDI5LTM0IDMtMjAtMjcgMTQtNTQgMTMtNzctNC0xNS0xMi0xNy0xNy02LTI3IDE2LTE3IDE2LTM0LTEtMjAtMTMgMTAtNzkgNy05OC00LTQtMy02LTEyLTItMjAgMy04IDAtMTUtNy0xNS02IDAtOCA0LTUgMTAgMTIgMjAtMTM0LTQtMTQ3LTI0LTUtNy04LTQtOCA3IDAgMTItNCAxNS0xMiAxMS03LTQtMjctNy00Ni02LTE5IDItNDEtMy01MC0xMC0xMy0xMS0xNS0xMC05IDQgNSAxMyAxIDE4LTE2IDE4LTY3IDItODcgNi04MyAxNyAzIDYtNiAxNC0yMCAxNy0xMyA0LTI0IDEwLTI0IDE2IDAgNS0xMSA3LTI1IDQtMTktMy0yMy0xLTE5IDExIDQgOCAxIDE1LTcgMTUtNyAwLTkgMy02IDYgNCA0LTMgMTUtMTQgMjUtMTIgMTAtMTggMjMtMTQgMjggMyA2IDEgMTEtNSAxMS04IDAtOCA2IDAgMjEgNyAxMSA5IDIzIDYgMjctMyAzLTYgMC02LTcgMC05LTUtOS0yMS0xLTE5IDExLTE5IDEzLTQgMjQgMTIgOSAxNCAxNyA3IDM2LTUgMTQtMTIgMjQtMTYgMjMtMy0yLTEyLTMtMTgtMi03IDAtNCA0IDcgOCAxMSA1IDIwIDEyIDIxIDE3IDkgMTI1IDIwIDE5MyAzMiAyMTIgMjEgMzIgMjQgMjIgMTEtMzZ6bTI1Mi0xOGMxMC0xMyAxMC0xNy0yLTI1LTIyLTE0LTMyLTExLTI2IDExIDMgMTAgMCAyMS03IDI0LTYgMi00IDUgNSA1IDkgMSAyMi02IDMwLTE1em0xMTktNGMxMi04IDEyLTEwIDEtMTAtOCAwLTE5LTctMjYtMTdzLTE5LTE0LTI5LTEwYy0xNSA2LTE1IDggMSAyNyAxOSAyMiAzMSAyNCA1MyAxMHptNTQwLTg3YzAtMTIgNi0yOCAxMy0zNSAxMi0xNCAyNC00OCAxMi0zNi00IDQtMTggMy0zMS0yLTI1LTEwLTM0IDMtMTMgMTYgOCA0IDkgMjUgNSA1OC00IDM0LTIgNDYgNCAzNiA1LTggMTAtMjUgMTAtMzd6TTczNiA3MjBjMC0yMy03LTI1LTI0LThzLTE1IDI4IDYgMjhjMTEgMCAxOC03IDE4LTIwem05NyAxMWMzOC0xIDUwLTE3IDIxLTI4LTktMy0yMCAwLTI2IDgtOCAxMS05IDExLTUtMyA0LTEwLTEtMTgtMTQtMjEtMjMtNi01OSAyLTU5IDEzIDAgMjIgMTMgMzggMjggMzUgOS0yIDM0LTQgNTUtNHptMjUyLTk4bDE4LTI4LTIxIDE5Yy0xMiAxMS0yMiAyMy0yMiAyOCAwIDE0IDcgOSAyNS0xOXptLTg1LTMyNGMwLTktOC0yNC0xOS0zMy0xNi0xNS0xOS0xNS0yNC0yLTggMjEgMjUgNzkgMzUgNjMgNC03IDgtMTkgOC0yOHptLTExMy0yNWMtOS05LTEwNi0xMC0xMDAtMSAyIDQgMjcgNyA1NSA3czQ5LTMgNDUtNnptLTEyLTE2NGMtMTItMTktMTA5LTcwLTEzNS03MC0xNyAwLTcgOCAzNCAyNSAzMyAxMyA2OSAzMyA4MCA0NCAyMCAyMSAzNCAyMSAyMSAxek01MzAgNTRjODItMjAgODYtMjQgMTktMjAtNTkgNC04MSA4LTg5IDE3LTMgMy0xNCAxMS0yNSAxOC0yMyAxNC0zMiAxNSA5NS0xNXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICBmaWxsPVwiIzg4M2IzYlwiXG4gICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICBkPVwiTTE0NiAxNDA4YzgtMTIgMTE4LTg2IDEyNi04NCA0IDAgMTUtOSAyMy0yMiA5LTEyIDIwLTIwIDI1LTE3IDQgMyAxMy0yIDIwLTEwczE2LTEyIDIxLTkgOSAwIDktNiA1LTggMTAtNWM2IDMgMTMtMSAxNi0xMCA5LTI0LTI1LTkzLTczLTE0Ny0yMy0yNi00Ny02NS01My04Ny0xMC0zOC0zMy03My03Ny0xMTctMTktMTktMjMtMzMtMjMtODYgMC0zNSA0LTc5IDktOTggMTUtNTQgMjMtMTMyIDEzLTEyNy00IDMtOC0zLTktMTMtMS0xMyAzLTE3IDEzLTEzIDggMyAxNCAxOCAxNCAzNHMyIDI5IDUgMjljMTAgMCA2NC02NSA2NS03NyAwLTcgMy0xMyA4LTEzIDQgMCAzMy0yNSA2Ni01NSAzMi0zMCA2My01NiA3MC01NiA2LTEgMTYtMiAyMy0zIDcgMCAxOS0xMCAyNy0yMSAxMy0xNyAxNy0xOCA0MC02IDE0IDggMjQgMTcgMjIgMjBzNDggNyAxMTIgOWMyMzIgNiAyNjggOCAyODAgMTYgNyA0IDEyIDEgMTItOCAwLTIyIDE2LTIwIDU3IDVsMzUgMjItMzctNDljLTIwLTI2LTQxLTU5LTQ2LTcxLTctMTktMTYtMjMtNTYtMjQtMjcgMC01Ny0yLTY3LTQtNDMtOC0yMjMtOC0yMzUgMC05IDUtMTIgNC03LTMgMy02IDEtMTQtNS0xOC03LTQtOS0zLTUgNCAxMyAyMi0xNSAyMy00OSAyLTE5LTEyLTM1LTI1LTM1LTI5cy0xMy0xNC0yOC0yM2MtMjUtMTUtMzItMTUtNTUtMy0xNSA4LTI5IDEzLTMxIDEyLTMtMS04IDItMTMgN3MtMiA2IDcgMmM5LTUgOC0yLTIgNy0xMCA4LTE0IDE3LTEwIDIxczEgNi03IDRjLTE2LTMtNTEgNTAtNTQgODEtMSAxMi0yMiAzNy00OSA1OS00MiAzMi00OCA0MS00MyA2NiA0IDIxIDIgMjctOSAyMy0xNy03LTM5IDE2LTI4IDI4IDQgNSAxIDUtNiAwLTktNS0xMi0yMC05LTQ0IDM1LTI2OCAxMTgtMzk3IDMwMi00NjcgMzgtMTUgNzYtMTkgMTYwLTE5IDEwNCAwIDExNCAyIDE3NSAzMiA4MSA0MCAxNTQgMTAzIDE3NyAxNTEgOSAyMCAyMyA0MyAzMSA1MSAxOSAyMCAzMyA2MSAyNiA3My00IDYtMiA4IDQgNCAxMS02IDcyIDEwNSA3MiAxMzEgMCA4IDIzIDQwIDUxIDcxIDU3IDY0IDExNSAxNzEgMTI1IDIzMCA5IDYwLTE5IDEzMy04MSAyMDYtMzAgMzUtNTcgNzUtNjEgOTAtNyAzMS0xNyAzMy00MyA3LTMyLTMyLTYzLTMxLTc0IDQtMTUgNDgtMzQgNjItODkgNjgtMzUgNS02NSAxNi05MyAzNi05OCA3My0xNDUgMTAzLTE2NyAxMDYtMTMgMi00MyA5LTY4IDE1LTQ5IDEyLTk3IDctMTQ3LTE2LTI5LTE0LTM0LTE0LTgwIDktNTIgMjctMTIzIDg2LTEyMyAxMDMgMCA1LTI0IDE0LTU0IDIwLTMwIDUtNTIgNi01MCAyem00MzQtMzI5YzMwLTQgODEtOCAxMTMtOCAzMS0xIDU3LTUgNTctMTEgMC0xMy00NS0xMi0xNDAgMS00MSA2LTg0IDEyLTk0IDEzLTExIDItMjIgOS0yNCAxNi00IDEwIDAgMTEgMTQgNSAxMS00IDQ0LTExIDc0LTE2em0tMjY1LTg0Yy0yNi04NS0xMS0xNTIgMzMtMTQ4IDE2IDIgMjUtNCAzMS0yMSA3LTE2IDI1LTI4IDYwLTQwIDI3LTkgNTctMTYgNjYtMTYgMjIgMCAxNC0yMi0xMy0zNi0yOS0xNC00Mi0yOS0xOS0yMSAyMCA3IDIzLTEzIDYtMzAtOS05LTUtMTQgMTQtMTggMTUtNCAyOS0xNiAzMi0yNiA0LTExIDE5LTI3IDMzLTM2IDE1LTkgNTEtMzIgNzktNTEgNDgtMzIgNTYtMzQgOTUtMjYgNTggMTIgNjQgNDAgMTEgNDktNDkgOC02OCAxOS01OCAzNSA2IDkgMzAgMTEgOTUgNiA4NS02IDg5LTYgMTIwIDIxIDMxIDI1IDMyIDI2IDI2IDUtMTItMzcgMTktMTYgNTkgMzkgMjggMzkgMzggNjYgNDcgMTI2IDEwIDYwIDE2IDc3IDMxIDgxIDEzIDMgMTggMTEgMTQgMjgtMiAxMyAyIDI1IDkgMjggMTYgNiAyOC0xMCAxNC0xOS01LTMtMTAtMzEtMTAtNjEgMC02MSAyMi05NCA2NS05NCAxNCAwIDI1LTQgMjUtOSAwLTQtMTAtOC0yMi04LTQxLTEtNDgtMy00OC0xNCAwLTYgMTEtMjAgMjYtMzEgMTQtMTEgMjItMjMgMTktMjYtMy00LTEwLTEtMTQgNi03IDEyLTMzIDE3LTc0IDEzLTEwIDAtMTUtNS0xMi0xMSAzLTUtMi0xMC0xMi0xMS0xMCAwLTEzLTMtNi02IDctMiAxMy0xMiAxMi0yMSAwLTktMy0xMi01LTYtNiAxNS01MCA2LTY2LTEzLTEwLTEzLTgtMTggMTAtMzMgMjctMjIgMjktMzQgMy0yMC0yNyAxNC01NCAxMy03Ny00LTE1LTEyLTE3LTE3LTYtMjcgMTYtMTcgMTYtMzQtMS0yMC0xMyAxMC03OSA3LTk4LTQtNC0zLTYtMTItMi0yMCAzLTggMC0xNS03LTE1LTYgMC04IDQtNSAxMCAxMiAyMC0xMzQtNC0xNDctMjQtNi04LTgtOC04IDAgMCAxNi05MCAxNi0xMDkgMS0xMi0xMC0xNC05LTggNSA1IDEzIDEgMTgtMTYgMTgtNjUgMi04NyA2LTgzIDE2IDQgMTEtNjAgNDAtODEgMzYtOC0yLTEwIDMtNyAxMyA0IDggMSAxNS03IDE1LTcgMC05IDMtNiA2IDQgNC0zIDE1LTE0IDI1LTEyIDEwLTE4IDIzLTE0IDI4IDMgNiAyIDExLTQgMTFzLTggNi01IDE0LTQgMTktMTYgMjZjLTIwIDEwLTIwIDEzLTUgMjQgMTEgOCAxNCAxOCA4IDMzLTQgMTItMTEgMjItMTUgMjItNSAxLTE0IDEtMjAgMi03IDAtNCA0IDYgOCAyMSA4IDMzIDUxIDE1IDUxLTggMC04IDQgMCAxMyA2IDggMTMgNDIgMTcgNzcgMyAzOSAxMyA3NSAyNyA5NSAxMiAxOSAyMyAzMyAyNCAzMSAxLTEtNC0yNC0xMi01MXptMjQ2LTQxYzEwLTEzIDEwLTE3LTItMjUtMjItMTQtMzItMTEtMjYgMTEgMyAxMCAwIDIxLTcgMjQtNiAyLTQgNSA1IDUgOSAxIDIyLTYgMzAtMTV6bTExOS00YzEyLTggMTItMTAgMS0xMC04IDAtMTktNy0yNi0xN3MtMTktMTQtMjktMTBjLTE1IDYtMTUgOCAxIDI3IDE5IDIyIDMxIDI0IDUzIDEwem01NDAtODdjMC0xMiA2LTI4IDEzLTM1IDEyLTE0IDI0LTQ4IDEyLTM2LTQgNC0xOCAzLTMxLTItMjUtMTAtMzQgMy0xMyAxNiA4IDQgOSAyNSA1IDU4LTQgMzQtMiA0NiA0IDM2IDUtOCAxMC0yNSAxMC0zN3pNODE4IDczNGMyOC00IDUyLTExIDUyLTE2IDAtMTctNzEtMzktMTA0LTMyLTMyIDYtNjYgMzAtNjYgNDYgMCAxMCA0NSAxMCAxMTggMnptMjY3LTEwMWwxOC0yOC0yMSAxOWMtMTIgMTEtMjIgMjMtMjIgMjggMCAxNCA3IDkgMjUtMTl6bS04NS0zMjRjMC05LTgtMjQtMTktMzMtMTYtMTUtMTktMTUtMjQtMi04IDIxIDI1IDc5IDM1IDYzIDQtNyA4LTE5IDgtMjh6bS0xMTMtMjVjLTktOS0xMDYtMTAtMTAwLTEgMiA0IDI3IDcgNTUgN3M0OS0zIDQ1LTZ6bS0xMi0xNjRjLTEyLTE5LTEwOS03MC0xMzUtNzAtMTcgMC03IDggMzQgMjUgMzMgMTMgNjkgMzMgODAgNDQgMjAgMjEgMzQgMjEgMjEgMXpNNTMwIDU0YzgyLTIwIDg2LTI0IDE5LTIwLTU5IDQtODEgOC04OSAxNy0zIDMtMTQgMTEtMjUgMTgtMjMgMTQtMzIgMTUgOTUtMTV6XCJcbiAgICAgID48L21vdGlvbi5wYXRoPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjMWQ2NThiXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xODM0IDI2NTNjNC0zOCA5LTEwMSAxMS0xNDIgMy00NCAxMC03OCAxOC04M3M3LTgtNS04Yy05IDAtMjkgMTEtNDQgMjVzLTMzIDI1LTQwIDI1Yy0yNiAwLTE0LTE1IDMxLTQwIDI0LTEzIDQ3LTMwIDUwLTM4IDMtNyA5LTExIDE0LTggNSA0IDQyLTEwIDgyLTI5IDQxLTE5IDY3LTM1IDU5LTM1cy00MSAxMy03MyAzMGMtNTMgMjctODcgMzAtODcgOSAwLTUgMTUtMTMgMzMtMThsMzItOS0zOS0xYy0zMi0xLTM3LTMtMjctMTMgNi03IDE2LTE0IDIxLTE0IDMxLTQgMzItNyA1LTEzLTIzLTYtMzYtMy01NSAxNS00MiAzNy05NSA1OS03MCAyOSAxNi0xOSA5MC02MCAxMjUtNjkgMjYtNyAyNi04IDEwLTI2LTktMTAtMTQtMjQtMTAtMjkgMy02IDMtMjAgMC0zMi01LTE1LTEwLTE3LTIwLTktOSA3LTE2IDYtMjUtNC0xMC0xMy03LTE2IDE1LTIybDI2LTYtMjMtMTJjLTEzLTctMjItMTktMjAtMjkgMi0xNC0xLTE1LTIzLTctMTUgNi0zMyAxNy00MiAyNi04IDgtMTggMTMtMjAgMTAtNy03IDE0LTQxIDI0LTM5IDEzIDQgNDMtOCA0My0xNyAwLTQtNy0xMC0xNS0xNC04LTMtMTUgMC0xNSA2cy0zIDgtNiA1Yy04LTgtNDggMTktNTAgMzMtMSA2LTIgMTItNCAxNS0xIDMtMiAyMC0zIDM4IDAgMTktNyAzNS0xNiAzOS0xNCA2LTE0IDcgMiA3IDEyIDEgMTcgMTAgMTggMjkgMCAxNSAyIDQzIDQgNjJzLTEgNDEtNyA0OGMtNyA4LTcgMTIgMSAxMiA2IDAgMTEgMTEgMTEgMjQgMCAyMC00IDI0LTI3IDIxLTIwLTItMzQgNS01MCAyNC0xMyAxNS0yMyAyMC0yMyAxMiAwLTEwLTMtMTEtMTQtMi0xMCA4LTE2IDktMjEgMS0zLTUtMi0xMCAzLTEwIDYgMCAxMy03IDE2LTE2IDYtMTUgNC0xNS0xMS0zLTE1IDEzLTE2IDEyLTEwLTExIDQtMTQgNy0yOSA3LTM1IDAtNSA1LTMgMTAgNSA4IDEzIDEwIDEyIDEwLTQgMC0xMy01LTE3LTIwLTEzLTI5IDgtMjUtMSAyMy00NCAyOC0yNSAzNi0zOCAyNi0zOS05IDAtMTkgOS0yMiAyMS00IDEzLTEwIDE4LTE4IDEzLTctNC0xMC0zLTYgM3MtMiAxMy0xMyAxNmMtMTIgMy0yMCAxNC0yMCAyNSAwIDEyLTUgMjQtMTIgMjgtOCA1LTkgMi00LTExIDQtMTAgMS0yNS04LTM0LTEzLTE1LTIwLTQ2LTE3LTc5IDEtMTAgNi0xMCAyNC0yIDE3IDkgMTYgNi01LTEwLTM0LTI2LTM2LTQ0LTUtMzUgMTkgNiAxOCAzLTgtMTktMzAtMjUtMjEtMzUgMTYtMTYgMzQgMTkgMjAgMi0yNS0zMC00Ni0zMS05OC0zOS0xMjYtMTktMTEgOC04IDkgMTMgNCAzMS02IDY3IDEgNjcgMTUgMCA0LTE1IDYtMzIgNS0xOC0yLTQ2LTMtNjEtNC0xNi0xLTI2LTUtMjItMTFzLTExLTEwLTM3LTEwYy0yNCAwLTU5LTMtODAtNmwtMzYtNiAxLTExM2MyLTk1LTEtMTE2LTE1LTEzMi0xMC0xMS0xOC0zNS0xOC01NCAwLTI0IDMtMzAgOS0xOSA2IDggNyAxOCA1IDIyLTMgNC0xIDggNSA4IDUgMCAxMS0xNSAxMy0zMiAyLTIwIDgtMzIgMTYtMzEgNiAyIDEyIDIgMTIgMCAwLTEgNy0yMCAxNS00MmwxNC00MCAyIDQwIDEgNDAgMTItNDdjMTItNTEgMjYtNzIgMjctNDIgMCAxNCAzIDEyIDExLTkgOS0yNyA0Ny00NSA2Ny0zMyA1IDMgMTEgMCAxNC02IDMtOSAxMy01IDMzIDEybDI5IDI1LTI0LTI3Yy0yMi0yNi0yMy0yOC02LTM0IDEwLTQgNDQtOCA3Ni04IDM3LTEgNTItNCA0Mi05LTgtNS00Ni03LTg0LTUtNDMgMy03MCAxLTczLTZzLTgtNi0xNCAyYy01IDctMjcgMTctNDggMjItMzAgNy00MSA2LTQ3LTYtNC03LTE0LTE0LTIwLTE0LTcgMC0xMy05LTEzLTIwczQtMjAgOS0yMCA0LTctMy0xNWMtOS0xMS0xMC0xNS0xLTE1IDggMCAxMC04IDYtMTktNC0xMiA1LTM3IDI0LTY4IDE2LTI2IDMyLTYxIDM1LTc4IDYtMjkgNi0yOS00LTUtMTQgMzItNDEgNjEtNTEgNTUtNC0zLTExLTM1LTE1LTcxLTQtNDYtMTMtNzMtMjYtODYtMTYtMTYtMTctMjItOC0yOHMyOCA5IDU4IDQ2YzQyIDUyIDQ3IDU0IDkyIDU0IDYwIDAgOTYgMjYgMTEwIDgyIDYgMjIgMjggNjEgNDggODdzNTAgNjggNjcgOTVjMjMgMzcgNDYgNTYgMTA1IDg4IDQxIDIzIDk0IDU0IDExNyA3MCAyMyAxNSA0NSAyOCA1MCAyOCAxMSAwIDE2MyA3NyAxODQgOTMgOCA3IDM5IDQ3IDY4IDkwbDUyIDc3LTIgMTE3Yy0xIDk1LTQgMTIwLTE4IDEzMS0xNSAxMy0xNSAxMyAyIDggMTYtNSAxNyAxMCAxNyAyMjl2MjM1aC0zNDJsNi02N3ptMTIzLTI1OWMtMi0yLTIwIDMtNDAgMTBzLTM0IDE1LTMxIDE5YzMgMyAyMS0yIDQwLTEwIDE5LTkgMzMtMTggMzEtMTl6bS0zMDEtMTljLTMtMjAtMjAtMjAtMjQtMS0yIDkgMyAxNiAxMSAxNiA5IDAgMTQtNyAxMy0xNXptNjEtMTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptMzM2LTExYzktMyAxNy05IDE3LTE0cy0xNS0yLTMyIDdjLTM5IDE5LTUxIDMwLTIzIDE5IDExLTQgMjgtMTAgMzgtMTJ6bS0zNjMtOGMwLTgtNy0xNS0xNS0xNS0yNiAwLTE4IDIwIDEzIDI5IDEgMSAyLTYgMi0xNHptMzc1LTkzYy0xNy00LTExMSAzNi0xMjUgNTQtNyA3IDIyLTEgNjQtMTkgNDEtMTggNjktMzMgNjEtMzV6bS0xMDUgN2MwLTUgNC04IDktNCA1IDMgMTIgMSAxNi01IDMtNSAxNS0xMCAyNS0xMHMyNS03IDM0LTE1YzgtOCAxOS0xNSAyNS0xNXMxMS00IDExLTljMC05LTQ1IDYtODkgMjktOSA1LTI0IDExLTMzIDE0LTE5IDYtMjUgMjYtOCAyNiA2IDAgMTAtNSAxMC0xMXptLTI3My0yNGM5LTI2LTYtMzAtMjctN2wtMjEgMjJoMjFjMTEgMCAyMy03IDI3LTE1em0zMzMtNTFjMC0xNi0xNi0xOS0yNS00LTE1IDI1LTMyIDktMzAtMjlzMi0zOC0yNS0yOGMtMTUgNi0yNyAxNi0yNyAyMyAwIDEwIDUgMTAgMjAgMiAxMy03IDE3LTcgMTMgMC0zIDYtMiAxMyA0IDE3czggMTAgNSAxNWMtOCAxMyAyNSAyOCA0NiAyMyAxMS0zIDE5LTEyIDE5LTE5em0tNDc1LTgwYy0zNS0zMC04NS01OC05Mi01MC0zIDIgMCAxMyA2IDIzczExIDE1IDExIDEyIDIxIDQgNDggMTdjNjAgMzAgNjQgMzAgMjctMnptOTYtMWMxLTEwIDItMjUgMy0zMyAwLTggOS0xNSAxOC0xNXMyMC00IDI1LThjNC01IDMtOC0yLTctMjEgNS0zNiAwLTMwLTEwIDMtNSA0LTEwIDEtMTAtMTAgMC00MyA3NS0zOSA4OCA3IDE4IDIzIDE1IDI0LTV6bS0xOC03OGMtMy05LTE2LTEzLTM0LTExLTIyIDMtMjcgMC0xOS05IDE1LTE4IDAtMjYtMjQtMTMtMTkgMTAtMTkgOS04LTQgOS0xMiAxMC0xOCAyLTIzLTYtNC0xMC0xNi04LTI4IDItMTgtMi0yMi0yNy0yMy0xNi0xLTMwLTMtMzAtNHMtOS0zLTIxLTRjLTExLTEtMjEgMy0yMSAxMHM0IDExIDkgOGMxMy04IDU4IDUgNTggMTYgMCA2LTYgOS0xMiA4LTctMi0xMiA1LTEyIDE1IDIgMTQtMSAxNS0xMiA2LTgtNi0xMS0xNi03LTIzczItNy03IDFjLTEwIDktOSAxNSA0IDI5IDEyIDEyIDE0IDIwIDcgMjctNiA2LTExIDE0LTExIDE4IDAgMTIgNzQgNDYgODkgNDEgOC0zIDExIDAgNyA3LTUgNyAxIDExIDE0IDExIDExIDAgMjMgNyAyNyAxNiA1IDEyIDEwIDcgMjQtMjAgMTAtMjEgMTUtNDQgMTItNTF6bTM0MiA1NWMxNy0xOCAxNy0yMCAyLTE0LTkgMy0xNyAxMC0xNyAxNSAwIDQtNyA1LTE3IDItMTEtNC0xNC0zLTkgNSAxMCAxNyAyMCAxNSA0MS04em0tMzEtMjdjOS0yMyA0LTI0LTIyLTQtMjEgMTYtMjIgMTctMyAxOCAxMSAxIDIyLTUgMjUtMTR6bS0xNDQtMjNjMC02IDgtMTAgMTgtMTEgOSAwIDEyLTMgNS01LTE2LTctNzUgMjUtNjggMzYgNyAxMiA0NS02IDQ1LTIwem0tNTUzLTMyYy0yLTEzLTQtNS00IDE3LTEgMjIgMSAzMiA0IDIzIDItMTAgMi0yOCAwLTQwem0zOTMtOGMtOC01LTExLTEwLTUtMTAgNSAwLTctOS0yOC0yMC00MS0yMi01Ny0yNS01Ny05IDAgNSA1IDcgMTAgNCA2LTMgMjUgNSA0MyAxOSAxNyAxNCAzNyAyNiA0MiAyNiA2IDAgMy01LTUtMTB6bS0zNDAtNDFjMC0xMC00LTE5LTEwLTE5LTUgMC05IDExLTggMjQgMyAyOCAxOCAyNCAxOC01em0yNi02OWMtMS0zNS0xNi00MS0xNi03IDAgMjAgNyAzNyAxNSAzNyAyIDAgMi0xMyAxLTMwem0tNzQtMTBjMy0xNyAxLTMzLTQtMzYtNC0zLTggMS04IDhzLTMgMjMtNiAzNmMtNCAxMi0yIDIyIDQgMjIgNSAwIDEyLTE0IDE0LTMwem0yMDgtMjA5Yy0xMC0yMC0zMC0zNy0zMC0yNyAwIDYgMzMgNDYgMzggNDYgMSAwLTItOS04LTE5em0tOTgtMTM2Yy00LTE0LTUzLTktNjkgOC0xMiAxMS03IDEzIDI5IDggMjQtMyA0Mi0xMCA0MC0xNnpNMTQ2IDE0MDhjOC0xMiAxMTgtODYgMTI2LTg0IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjMtMjQtOTItNzQtMTQ5LTIzLTI4LTQ2LTYyLTQ5LTc2LTEwLTQyLTMzLTgwLTY5LTExNS0zMi0zMS0zNC0zOC0zNC05NyAwLTM0IDQtNzkgOS05OCAxNS01NCAyMy0xMzIgMTMtMTI3LTQgMy04LTMtOS0xMy0xLTEzIDMtMTcgMTMtMTMgOCAzIDE0IDE4IDE0IDM0czIgMjkgNSAyOWMxMCAwIDY0LTY1IDY1LTc3IDAtNyAzLTEzIDgtMTMgNCAwIDMzLTI1IDY2LTU1IDMyLTMwIDYzLTU2IDcwLTU2IDYtMSAxNi0yIDIzLTMgNyAwIDE5LTEwIDI3LTIxIDEzLTE3IDE3LTE4IDQwLTYgMTQgOCAyNCAxNyAyMiAyMHM0OCA3IDExMiA5YzIzMiA2IDI2OCA4IDI4MCAxNiA3IDQgMTIgMSAxMi04IDAtMjIgMTYtMjAgNTcgNWwzNSAyMi0zNy00OWMtMjAtMjYtNDEtNTktNDYtNzEtNy0xOS0xNi0yMy01Ni0yNC0yNyAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE3LTctMzkgMTYtMjggMjggNCA1IDEgNS02IDAtOS01LTEyLTIwLTktNDQgMzUtMjY4IDExOC0zOTcgMzAyLTQ2NyAzOC0xNSA3Ni0xOSAxNjAtMTkgMTA0IDAgMTE0IDIgMTc1IDMyIDgxIDQwIDE1NCAxMDMgMTc3IDE1MSA5IDIwIDIzIDQzIDMxIDUxIDE5IDIwIDMzIDYxIDI2IDczLTQgNi0zIDggMyA1IDEyLTcgNTggNzQgNjcgMTE5IDQgMTcgMjkgNTQgNTYgODMgNTMgNTYgMTE1IDE2OSAxMjYgMjI4IDExIDU2LTE4IDEyOS04MCAyMDQtMzAgMzYtNTggNzgtNjEgOTItOCAzMi0xOCAzNC00NCA4LTMyLTMyLTYzLTMxLTc0IDQtMTUgNDgtMzQgNjItODkgNjgtMzUgNS02NSAxNi05MyAzNi05OCA3My0xNDUgMTAzLTE2NyAxMDYtMTMgMi00MyA5LTY4IDE1LTQ5IDEyLTk3IDctMTQ3LTE2LTI5LTE0LTM0LTE0LTgwIDktNTIgMjctMTIzIDg2LTEyMyAxMDMgMCA1LTI0IDE0LTU0IDIwLTMwIDUtNTIgNi01MCAyem00OTItMzMyYzYxLTUgMTEyLTE0IDExMi0xOSAwLTExLTE1MC0yLTE5OSAxMy0xOCA1LTM4IDgtNDMgNy02LTEtMTMgNC0xNiAxMi0zIDExIDAgMTIgMTQgNiAxMS01IDcwLTEzIDEzMi0xOXptLTMyMy04MWMtMjYtODUtMTEtMTUyIDMzLTE0OCAxNiAyIDI1LTQgMzEtMjEgNy0xNiAyNS0yOCA2MC00MCAyNy05IDU3LTE2IDY2LTE2IDIyIDAgMTQtMjItMTMtMzYtMjktMTQtNDItMjktMTktMjEgMjAgNyAyMy0xMyA2LTMwLTktOS01LTE0IDE0LTE4IDE1LTQgMjktMTYgMzItMjYgNC0xMSAxOS0yNyAzMy0zNiAxNS05IDUxLTMyIDc5LTUxIDQ4LTMyIDU2LTM0IDk1LTI2IDU4IDEyIDY0IDQwIDExIDQ5LTQ5IDgtNjggMTktNTggMzUgNiA5IDMwIDExIDk1IDYgODUtNiA4OS02IDEyMCAyMSAzMSAyNSAzMiAyNiAyNiA1LTEyLTM3IDE5LTE2IDU5IDM5IDI4IDM5IDM4IDY2IDQ3IDEyNiAxMCA2MCAxNiA3NyAzMSA4MSAxMyAzIDE4IDExIDE0IDI4LTIgMTMgMSAyNSA3IDI3IDE4IDYgMzYtNCAzNi0yMCAwLTktNi0xMy0xNS05LTEyIDQtMTUtNC0xNS00NSAwLTY1IDEyLTg1IDU1LTkzIDM5LTggNDgtMjMgMTMtMjMtNDEtMS00OC0zLTQ4LTE0IDAtNiAxMS0yMCAyNi0zMSAxNC0xMSAyMi0yMyAxOS0yNi0zLTQtMTAtMS0xNCA2LTcgMTItMzMgMTctNzQgMTMtMTAgMC0xNS01LTEyLTExIDMtNS0yLTEwLTEyLTExLTEwIDAtMTMtMy02LTYgNy0yIDEzLTEyIDEzLTIxIDAtMTMtMi0xNC05LTMtNiA5LTExIDEwLTE1IDMtNC02LTEzLTktMjAtNnMtMTgtMi0yNS0xMGMtOS0xMS03LTE5IDE0LTQxIDI5LTMzIDI5LTMyIDEwLTMyLTggMC0xMiA0LTEwIDggNiA4LTE5IDE5LTQ0IDE5LTkgMC0yNi02LTM3LTE0LTE1LTEyLTE3LTE3LTYtMjcgMTYtMTcgMTYtMzQtMS0yMC0xMyAxMC03OSA3LTk4LTQtNC0zLTYtMTItMi0yMCAzLTggMC0xNS03LTE1LTYgMC04IDQtNSAxMHMtOSA4LTMyIDZjLTY4LTYtMTEzLTE4LTExMy0zMCAwLTgtMi04LTggMC0xMCAxNy0xMDggMTMtMTA0LTQgMS04LTItMTEtOC03cy05IDEzLTYgMjFjMyA5LTIgMTQtMTcgMTQtNjkgMi04NyA2LTgyIDE4IDQgMTAtNCAxMy0zMCAxMi0zLTEtMTIgNi0yMSAxNC04IDgtMjEgMTMtMjkgOS0xMS00LTEzLTEtOSAxMSA0IDEwIDEgMTYtNyAxNi03IDAtOSAzLTYgNiA0IDQtMyAxNS0xNCAyNS0xMiAxMC0xOCAyMy0xNCAyOCAzIDYgMiAxMS00IDExcy04IDYtNSAxNC00IDE5LTE2IDI2Yy0yMCAxMC0yMCAxMy01IDI0IDExIDggMTQgMTggOCAzMy00IDEyLTExIDIyLTE1IDIyLTUgMS0xNCAxLTIwIDItNyAwLTQgNCA2IDggMjEgOCAzMyA1MSAxNSA1MS04IDAtOCA0IDAgMTMgNiA4IDEzIDQyIDE3IDc3IDMgMzkgMTMgNzUgMjcgOTUgMTIgMTkgMjMgMzMgMjQgMzEgMS0xLTQtMjQtMTItNTF6bTI0Ni00MWMxMC0xMyAxMC0xNy0yLTI1LTIyLTE0LTMyLTExLTI2IDExIDMgMTAgMCAyMS03IDI0LTYgMi00IDUgNSA1IDkgMSAyMi02IDMwLTE1em0xMTktNGMxMi04IDEyLTEwIDEtMTAtOCAwLTE5LTctMjYtMTdzLTE5LTE0LTI5LTEwYy0xNSA2LTE1IDggMSAyNyAxOSAyMiAzMSAyNCA1MyAxMHptNTE1LTk4YzQtMjAgMy0zMi00LTMyLTE1IDAtMzEgMzQtMzEgNjUgMCAyMiAyIDI0IDE0IDEzIDctOCAxNy0yOSAyMS00NnptMjUgMTFjMC0xMiA2LTI4IDEzLTM1IDEyLTE0IDI0LTQ4IDEyLTM2LTQgNC0xOCAyLTMyLTMtMjItOC0yNC03LTE3IDggNSAxMCA4IDQwIDggNjYtMSAzMCAyIDQzIDcgMzUgNS03IDktMjMgOS0zNXpNODE4IDczNGMyOC00IDUyLTExIDUyLTE2IDAtMTctNzEtMzktMTA0LTMyLTMyIDYtNjYgMzAtNjYgNDYgMCAxMCA0NSAxMCAxMTggMnptMjc1LTEyNGMtNi02LTMzIDMwLTMzIDQ0IDAgNiA5IDAgMjAtMTQgMTAtMTQgMTYtMjcgMTMtMzB6bS05My0zMDFjMC05LTgtMjQtMTktMzMtMTYtMTUtMTktMTUtMjQtMi04IDIxIDI1IDc5IDM1IDYzIDQtNyA4LTE5IDgtMjh6bS0xMTMtMjVjLTktOS0xMDYtMTAtMTAwLTEgMiA0IDI3IDcgNTUgN3M0OS0zIDQ1LTZ6bS0xMi0xNjRjLTEyLTE5LTEwOS03MC0xMzUtNzAtMTcgMC03IDggMzQgMjUgMzMgMTMgNjkgMzMgODAgNDQgMjAgMjEgMzQgMjEgMjEgMXpNNTMwIDU0YzgyLTIwIDg2LTI0IDE5LTIwLTU5IDQtODEgOC04OSAxNy0zIDMtMTQgMTEtMjUgMTgtMjMgMTQtMzIgMTUgOTUtMTV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM0MjUxNjFcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTI1NSAyNzAyYy0zLTgtNS0yOC01LTQ1IDAtMTgtMTQtNzUtMzItMTI3LTE3LTUyLTQxLTEzMy01NC0xODAtMjEtODEtMjMtODUtNDgtODItMzMgNC0zMy0xMi0xLTUwIDE5LTIzIDI0LTM4IDIwLTU3LTQtMjAgNS00NiAzMy05NiA1NS0xMDEgMTA1LTE3NiAxMzYtMjA0IDIyLTIxIDI1LTMwIDIwLTU4LTMtMTgtMy00NSAwLTU5IDYtMjEgOS0yNCAyMS0xNHMxNSA5IDE1LTRjMC0xNSAyLTE1IDMwLTEgMTggOSAyOCAyMCAyNCAyNy01IDctMiA5IDggNSAxMC0zIDE5IDMgMjcgMTkgMTEgMjQgMTEgMjQtMTggOS0xNi04LTMxLTIwLTMzLTI3LTItNi0xMCAzLTE4IDIyLTE1IDM2LTE1IDM2IDY2IDk3bDI5IDIyLTMzLTEyYy0yNy0xMC0zNS05LTQyIDItNCA4LTYgMjAtMyAyOCA0IDkgMCAxMS0xMSA3LTE4LTctMjItMjQtNi0yNCA2IDAgMTAtOCAxMC0xNyAwLTE0LTMtMTMtMTcgNi0xNSAyMy0xNSAyNSA1IDQxIDE4IDE1IDIwIDIyIDEyIDUxLTYgMTktMTAgMzUtMTAgMzZzOSAwIDIxLTJjMTUtMyAxOSAwIDE1IDEwLTggMjAtMTQgNDItOSAzMyAzLTUgMTMtOCAyNC04IDIyIDAgNzkgNzMgNzkgMTAyIDAgMTAgNCAxOCA5IDE4czEyIDggMTUgMThjMyA5IDMtMjYgMC03OC0xNC0yMjYtMTQtMjk2LTEtMjcwIDYgMTQgMTUgMjcgMTkgMzBzOSAyNiAxMSA1MmMyIDI1IDggNTEgMTIgNTggNSA4IDEwIDMyIDExIDU0IDEgMjMgNSA3MiA5IDEwOWw2IDY4LTMwIDEyYy0zMSAxMi00MiAyNy0xOCAyNyAxMyAwIDM5IDM0IDQ3IDYzczI0IDIzIDQ2LTIwYzEyLTIyIDM3LTYzIDU1LTkwIDE5LTI4IDUyLTgxIDc0LTExNyAyMi0zNyA1MC04MSA2Mi05OGwyMy0zMnYyN2MwIDE1IDQgMjcgMTAgMjcgNSAwIDcgMTYgNCAzNi0zIDI5LTEgMzUgMTEgMzEgOC00IDE3LTIgMjAgMyA0IDYgMTIgMTAgMTggMTAgOCAwIDctMy0yLTktMTEtNy0xMS0xMCAyLTE3IDE2LTkgNDAtMTEyIDMwLTEyOC00LTUtMS02IDUtMiA3IDQgMTIgMCAxMi0xMHMyLTE1IDUtMTJjNCAzLTEgNDMtOSA4OXMtMTIgODYtMTAgODhjOCA4IDE0LTcgMTktNDUgMy0yMSA4LTU5IDExLTg0IDQtMjUgMTAtNDkgMTQtNTUgNC01IDE2LTQxIDI1LTgwIDEwLTM4IDIxLTc0IDI1LTc4IDIwLTIyIDIzIDkyIDQgMTU0LTIgOS0xIDI2IDQgMzkgNyAxOCAxMiAyIDIxLTcxIDE0LTEwMiAxOS0xMjQgMjYtMTE3IDMgMyAwIDQwLTYgODQtMjAgMTM2LTE3IDE4MyAxNCAxODQgNCAwIDctOCA3LTE3IDAtMTAgNC0yMyA4LTMwczggMTUgOSA0N2MxIDMzLTEgNjAtNSA2MHMtMjktNy01Ny0xNWMtNTAtMTUtODEtMTMtNzAgNCAzIDUgMSAxMy01IDE2LTYgNC04IDE2LTUgMjYgNCAxMSAxIDI2LTUgMzQtOSAxMC05IDE1LTIgMTUgNiAwIDkgNyA2IDE1LTQgOC0xIDE1IDUgMTVzMTEtMTEgMTEtMjVjMC0zNCAyMC0zMiAyMSAzIDIgMjUgMiAyNSA2IDMgMy0xMyAxMy0yNiAyNC0yOCAxMC0zIDE5LTEwIDE5LTE1czEyLTggMjctNmMyMyAzIDI5IDkgMzUgNDMgMyAyMiAxNCA2MCAyMiA4NCAyMSA1OCAyMSA1OC0xOSA1My0yMS0zLTM1IDAtMzUgNyAwIDYgMTYgMTEgMzUgMTEgMzYgMCA0NyAxMyAxOSAyNC0xMiA1LTE0IDEzLTkgMzMgNCAxNyAyIDI5LTcgMzQtOCA1LTkgOS0yIDlzOSAxMSA2IDI1Yy0yIDE0LTExIDI1LTE4IDI1LTE5IDAtMTggMTYgMiAyNCAyNiAxMCA3IDIzLTI3IDE4LTIyLTMtMzAtMS0yNSA3IDQgNiAxMSA5IDE2IDYgMTMtOCA0MCA2IDQwIDIxIDAgOC0xMCAxNC0yMiAxNWgtMjNsMjMgOWMxNyA3IDIyIDE3IDIyIDQ0IDAgNDQgOSA2NiAyNiA2NiAxNiAwIDMzLTMwIDM2LTY1IDItMjUgNC0yNiA1My0yMWw1MCA1LTQ0LTEyYy02NC0xOC02Ni0zOC00LTMyIDQ3IDUgNDcgNCAxMy02LTE5LTYtNDEtMTMtNDctMTUtNy0yLTEzLTgtMTMtMTQgMC04IDE1LTkgNDYtNCA1OSA4IDUzLTExLTYtMjEtNDEtNy01MS0xOS0yNS0yOSA4LTMgMTItMTIgOS0yMS01LTEyIDAtMTQgMjctMTBzMzAgMyAxNC00Yy0xMS01LTMwLTEwLTQyLTEwLTI0LTEtMzQtMjUtMzAtNzEgMi0yMiA2LTI1IDQyLTIzIDM3IDIgMzMtMS0yMi0xMy0yMi00LTIzLTktMjMtOTF2LTg2bDIxIDE5YzQ5IDQ0IDEzOSAxMzkgMTM5IDE0NiAwIDUgNSA4IDEwIDggNiAwIDQtMTMtNS0zMC0xNy0zNC0yMC03MC00LTcwIDUgMCA3LTUgNC0xMS01LTcgMTQtOSA1Ni03bDYyIDMgMjQgNzBjMTMgMzkgMjggNzIgMzMgNzMgNiAyIDggOCA1IDEzczEgMzEgOSA1OWwxNSA1MC0zNyAyYy0zNiAxLTM2IDEgOCA3IDM3IDUgNDUgOSA0MyAyNi0xIDE3IDE3IDEzNCAzMiAyMDNsNSAyMi0yMTctMmMtMTY4LTItMjE3LTYtMjE2LTE1IDItNy0yLTEzLTctMTMtNiAwLTEwIDYtMTAgMTQgMCAyMS05MDcgMTgtOTE1LTJ6bTgxLTE3Yy0zLTggMi0xOSAxMi0yNCA5LTUgMTQtMTMgMTAtMTctNC0zLTMtMTQgMi0yMyA4LTE2IDEzLTQzIDI2LTE0MyAzLTIxIDMtMzggMC0zOC00IDAtMjMgNzItMzEgMTIwLTIgMTQtMTMgNTEtMjMgODMtMTYgNDgtMTcgNTctNSA1NyA5IDAgMTMtNiA5LTE1em0yODItMzNjMi03LTYtMTItMTctMTItMjEgMC0yNyAxMS0xNCAyNCA5IDkgMjYgMiAzMS0xMnptODQyLTMyYzExLTggNy0xMC0xNy04LTE3IDEtMjkgNi0yNyAxMCA3IDExIDI2IDEwIDQ0LTJ6bTQ0LTQyYy0zLTUtMjQtNy00Ny03LTIzIDEtNTItMS02NC01cy0yNC0zLTI2IDJjLTMgNCA4IDkgMjYgMTAgMTcgMiAzMiA0IDMzIDUgNyA3IDgyIDEgNzgtNXptNTYtMjdjMC0xMC0zOS0xNy0xMzUtMjUtMjctMi02Mi03LTc3LTExLTIwLTUtMjgtMy0yOCA2IDAgNyAzIDkgNiA2IDQtMyAxNC0yIDIzIDMgMTAgNSA1NyAxMSAxMDUgMTQgNDggMiA5MCA3IDk0IDEwIDggOSAxMiA3IDEyLTN6bS01NDAtMTFjLTgtNS0yNC05LTM1LTktMTYgMS0xNiAyIDUgOSAzNSAxMSA0OCAxMSAzMCAwem0yMy0zMWMtMTAtMTAtMTM2LTQwLTE2My0zOC0xMSAxIDk4IDMyIDE3MCA0OCAyIDEtMS00LTctMTB6bTU3LTM5Yy04LTYtMjQtMTAtMzUtMTBzLTMwLTMtNDItNmMtMTQtNC0yMy0yLTIzIDUgMCA2IDE1IDExIDMzIDEyIDE3IDAgNDEgNCA1MiA4IDI1IDEwIDM1IDMgMTUtOXptMTgwIDBjLTE5LTEzLTMwLTEzLTMwIDAgMCA2IDEwIDEwIDIzIDEwIDE4IDAgMTktMiA3LTEwem0tMzMwLTMyYy0yNS00LTQ5LTYtNTUtNC0xNyA2IDU5IDIzIDgwIDE3IDE0LTMgNi03LTI1LTEzem0xMTktMTJjLTEwLTEwLTU5LTE0LTU5LTUgMCA1IDE0IDkgMzIgOSAxNyAwIDI5LTIgMjctNHptLTM3OS04M2MwLTcgNy0xMyAxNS0xM3MxNS02IDE1LTE0YzAtNyA3LTE5IDE1LTI2czEyLTE2IDktMjEgOC05IDI0LTljMjkgMCAyOSAxIDI3IDQ0LTIgMjQtNiA0OS05IDU0LTMgNi0xIDEyIDYgMTQgMTYgNiA3MC0yMSA2My0zMS0yLTUgNC0xNiAxNS0yNnMxNy0yMiAxNC0yNmMtMy01IDUtOSAxOC0xMCAxMyAwIDE3LTMgMTEtNi0xMC0zLTgtOSA0LTIxIDE2LTE2IDE0LTE4LTI0LTI2LTMxLTYtNDktNS03NCA4LTE3IDktNDkgMTYtNjkgMTYtMzUgMC0zOSAzLTU5IDUwLTEyIDI4LTI1IDUwLTMwIDUwLTQgMC04IDYtOCAxMyAwIDYtNCAyMS04IDMyLTUgMTQgMSAxMSAxOS0xMCAxNC0xNiAyNS0zNiAyNi00MnptLTE3OCAxMGMtNi0yLTEwLTktNy0xMyA2LTEwLTM0LTM1LTQyLTI2LTcgNyAzOCA0NiA1MiA0NSA2IDAgNC0zLTMtNnptMzkyLTE4OGMtNC04LTEtMTUgNS0xNXMxMS04IDExLTE3YzAtMTUtMS0xNS0xMyAyLTEwIDEyLTIyIDE2LTQwIDEzcy0yNC0xLTIwIDhjMiA3IDE0IDE1IDI2IDE3czI1IDUgMjkgNmM0IDAgNS02IDItMTR6bS02MjUtNjBjMC01LTYtMS0xNCA5LTggMTEtMTUgMjQtMTUgMzAgMCA1IDcgMSAxNS0xMCA4LTEwIDE0LTIzIDE0LTI5em02MDgtMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0tNTI3IDBjMC0xMSA2LTE0IDE4LTEwIDE1IDUgMTUgNSAxLTYtOS03LTE0LTIwLTExLTI4czItMTItMi05Yy0xMiAxMS0yNSA2OS0xNSA2OSA1IDAgOS03IDktMTZ6bS0zNS0xNWMtNC02LTEwLTgtMTMtNXMtMTEgMS0xOS01Yy04LTgtMTMtOC0xMy0xIDAgMTEgMTYgMjAgMzggMjEgNyAxIDEwLTQgNy0xMHptODA1LTM5YzAtNS05LTE0LTIwLTIwLTE2LTgtMjAtOC0yMCA0IDAgOCA4IDE3IDE4IDE5IDkgMyAxOCA1IDIwIDYgMSAwIDItMyAyLTl6bS0xMDItNzdjMS0zNS0yLTUyLTctNDMtOSAxNi03IDEwMCAzIDEwMCAyIDAgNC0yNiA0LTU3em0tNDcyLTUwYy0zLTgtNi0yMS02LTI5cy00LTE0LTEwLTE0Yy01IDAtMTAgMTYtMTAgMzUgMCAyNyAzIDMzIDE2IDI4IDgtMyAxMy0xMiAxMC0yMHptNDk4LTEwNGM5LTU3IDItNTktMTEtNC02IDI1LTcgNDUtMyA0NXMxMC0xOSAxNC00MXpNMTY3NiAyNzEyYzUtNCAyNS0yMCA0NS0zNWwzNy0yNiA2IDIyYzExIDQzIDggNDctNDYgNDctMjkgMC00OC00LTQyLTh6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTgzNCAyNjUzYzQtMzggOS0xMDEgMTEtMTQyIDMtNDQgMTAtNzggMTgtODNzNy04LTUtOGMtOSAwLTI5IDExLTQ0IDI1cy0zMyAyNS00MCAyNWMtMjYgMC0xNC0xNSAzMS00MCAyNC0xMyA0Ny0zMCA1MC0zOCAzLTcgOS0xMSAxNC04IDUgNCA0Mi0xMCA4Mi0yOSA0MS0xOSA2Ny0zNSA1OS0zNXMtNDEgMTMtNzMgMzBjLTUzIDI3LTg3IDMwLTg3IDkgMC01IDE1LTEzIDMzLTE4bDMyLTktMzktMWMtMzItMS0zNy0zLTI3LTEzIDYtNyAxNi0xNCAyMS0xNCAzMS00IDMyLTcgNS0xMy0yMy02LTM2LTMtNTUgMTUtNDIgMzctOTUgNTktNzAgMjkgMTYtMTkgOTAtNjAgMTI1LTY5IDI2LTcgMjYtOCAxMC0yNi05LTEwLTE0LTI0LTEwLTI5IDMtNiAzLTIwIDAtMzItNS0xNS0xMC0xNy0yMC05LTkgNy0xNiA2LTI1LTQtMTAtMTMtNy0xNiAxNS0yMmwyNi02LTIzLTEyYy0xMy03LTIyLTE5LTIwLTI5IDItMTQtMS0xNS0yMy03LTE1IDYtMzMgMTctNDIgMjYtOCA4LTE4IDEzLTIwIDEwLTctNyAxNC00MSAyNC0zOSAxMyA0IDQzLTggNDMtMTcgMC00LTctMTAtMTUtMTQtOC0zLTE1IDAtMTUgNnMtMyA4LTYgNWMtOC04LTQ4IDE5LTUwIDMzLTEgNi0yIDEyLTQgMTUtMSAzLTIgMjAtMyAzOCAwIDE5LTcgMzUtMTYgMzktMTQgNi0xNCA3IDIgNyAxMiAxIDE3IDEwIDE4IDI5IDAgMTUgMiA0MyA0IDYycy0xIDQxLTcgNDhjLTcgOC03IDEyIDEgMTIgNiAwIDExIDExIDExIDI0IDAgMjAtNCAyNC0yNyAyMS0yMC0yLTM0IDUtNTAgMjQtMTMgMTUtMjMgMjAtMjMgMTIgMC0xMC0zLTExLTE0LTItMTAgOC0xNiA5LTIxIDEtMy01LTItMTAgMy0xMCA2IDAgMTMtNyAxNi0xNiA2LTE1IDQtMTUtMTEtMy0xNSAxMy0xNiAxMi0xMC0xMSA0LTE0IDctMjkgNy0zNSAwLTUgNS0zIDEwIDUgOCAxMyAxMCAxMiAxMC00IDAtMTMtNS0xNy0yMC0xMy0yOSA4LTI1LTEgMjMtNDQgMjgtMjUgMzYtMzggMjYtMzktOSAwLTE5IDktMjIgMjEtNCAxMy0xMCAxOC0xOCAxMy03LTQtMTAtMy02IDNzLTIgMTMtMTMgMTZjLTEyIDMtMjAgMTQtMjAgMjUgMCAxMi01IDI0LTEyIDI4LTggNS05IDItNC0xMSA0LTEwIDEtMjUtOC0zNC0xMy0xNS0yMC00Ni0xNy03OSAxLTEwIDYtMTAgMjQtMiAxNyA5IDE2IDYtNS0xMC0zNC0yNi0zNi00NC01LTM1IDE5IDYgMTggMy04LTE5LTMwLTI1LTIxLTM1IDE2LTE2IDM0IDE5IDIwIDItMjUtMzAtNDYtMzEtOTgtMzktMTI2LTE5LTExIDgtOCA5IDEzIDQgMzEtNiA2NyAxIDY3IDE1IDAgNC0xNSA2LTMyIDUtMTgtMi00Ni0zLTYxLTQtMTYtMS0yNi01LTIyLTExcy0xMS0xMC0zNy0xMGMtMjQgMC01OS0zLTgwLTZsLTM2LTYgMS0xMTNjMi05NS0xLTExNi0xNS0xMzItMTAtMTEtMTgtMzUtMTgtNTQgMC0yNCAzLTMwIDktMTkgNiA4IDcgMTggNSAyMi0zIDQtMSA4IDUgOCA1IDAgMTEtMTUgMTMtMzIgMi0yMCA4LTMyIDE2LTMxIDYgMiAxMiAyIDEyIDAgMC0xIDctMjAgMTUtNDJsMTQtNDAgMiA0MCAxIDQwIDEyLTQ3YzEyLTUxIDI2LTcyIDI3LTQyIDAgMTQgMyAxMiAxMS05IDktMjcgNDctNDUgNjctMzMgNSAzIDExIDAgMTQtNiAzLTkgMTMtNSAzMyAxMmwyOSAyNS0yMy0yNmMtMjUtMjktMTgtNDIgMjEtMzggMTIgMSAzMC0xIDQwLTYgOS00IDI5LTQgNDUtMSAyMyA1IDI0IDUgOS01LTExLTYtNDctOS04OC03LTQzIDMtNzAgMS03My02cy04LTYtMTQgMmMtNSA3LTI3IDE3LTQ4IDIyLTMwIDctNDEgNi00Ny02LTQtNy0xNC0xNC0yMC0xNC03IDAtMTMtOS0xMy0yMHM0LTIwIDktMjAgNC03LTMtMTVjLTktMTEtMTAtMTUtMS0xNSA4IDAgMTAtOCA2LTE5LTQtMTIgNS0zNyAyNC02OCAxNi0yNiAzMi02MSAzNS03OCA2LTI5IDYtMjktNC01LTE0IDMyLTQxIDYxLTUxIDU1LTQtMy0xMS0zNS0xNS03MS00LTQ2LTEzLTczLTI2LTg2LTE2LTE2LTE3LTIyLTgtMjhzMjggOSA1OCA0NmM0MiA1MiA0NyA1NCA5MiA1NCA2MCAwIDk2IDI2IDExMSA4MiA2IDIzIDI1IDYwIDQzIDgyIDE4IDIzIDQ5IDY2IDY5IDk2IDI5IDQ1IDQ5IDYyIDEwOSA5NCA0MCAyMiA5MSA1MSAxMTMgNjYgMjIgMTQgNjUgMzcgOTUgNTAgMTE5IDUyIDE1MiA3OCAyMDggMTYxbDUzIDgwLTIgMTE3Yy0xIDk0LTQgMTE5LTE4IDEzMC0xNSAxMy0xNSAxMyAyIDggMTYtNSAxNyAxMCAxNyAyMjl2MjM1aC0zNDJsNi02N3ptMTIzLTI1OWMtMi0yLTIwIDMtNDAgMTBzLTM0IDE1LTMxIDE5YzMgMyAyMS0yIDQwLTEwIDE5LTkgMzMtMTggMzEtMTl6bS0zMDEtMTljLTMtMjAtMjAtMjAtMjQtMS0yIDkgMyAxNiAxMSAxNiA5IDAgMTQtNyAxMy0xNXptNjEtMTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptMzM2LTExYzktMyAxNy05IDE3LTE0cy0xNS0yLTMyIDdjLTM5IDE5LTUxIDMwLTIzIDE5IDExLTQgMjgtMTAgMzgtMTJ6bS0zNjMtOGMwLTgtNy0xNS0xNS0xNS0yNiAwLTE4IDIwIDEzIDI5IDEgMSAyLTYgMi0xNHptMzc1LTkzYy0xNy00LTExMSAzNi0xMjUgNTQtNyA3IDIyLTEgNjQtMTkgNDEtMTggNjktMzMgNjEtMzV6bS0xMDUgN2MwLTUgNC04IDktNCA1IDMgMTIgMSAxNi01IDMtNSAxNS0xMCAyNS0xMHMyNS03IDM0LTE1YzgtOCAxOS0xNSAyNS0xNXMxMS00IDExLTljMC05LTQ1IDYtODkgMjktOSA1LTI0IDExLTMzIDE0LTE5IDYtMjUgMjYtOCAyNiA2IDAgMTAtNSAxMC0xMXptLTI3My0yNGM5LTI2LTYtMzAtMjctN2wtMjEgMjJoMjFjMTEgMCAyMy03IDI3LTE1em0zMzMtNTFjMC0xNi0xNi0xOS0yNS00LTE1IDI1LTMyIDktMzAtMjlzMi0zOC0yNS0yOGMtMTUgNi0yNyAxNi0yNyAyMyAwIDEwIDUgMTAgMjAgMiAxMy03IDE3LTcgMTMgMC0zIDYtMiAxMyA0IDE3czggMTAgNSAxNWMtOCAxMyAyNSAyOCA0NiAyMyAxMS0zIDE5LTEyIDE5LTE5em0tNDc1LTgwYy0zNS0zMC04NS01OC05Mi01MC0zIDIgMCAxMyA2IDIzczExIDE1IDExIDEyIDIxIDQgNDggMTdjNjAgMzAgNjQgMzAgMjctMnptOTYtMWMxLTEwIDItMjUgMy0zMyAwLTggOS0xNSAxOC0xNXMyMC00IDI1LThjNC01IDMtOC0yLTctMjEgNS0zNiAwLTMwLTEwIDMtNSA0LTEwIDEtMTAtMTAgMC00MyA3NS0zOSA4OCA3IDE4IDIzIDE1IDI0LTV6bS0xOC03OGMtMy05LTE2LTEzLTM0LTExLTIyIDMtMjcgMC0xOS05IDE1LTE4IDAtMjYtMjQtMTMtMTkgMTAtMTkgOS04LTQgOS0xMiAxMC0xOCAyLTIzLTYtNC0xMC0xNi04LTI4IDItMTgtMi0yMi0yNy0yMy0xNi0xLTMwLTMtMzAtNHMtOS0zLTIxLTRjLTExLTEtMjEgMy0yMSAxMHM0IDExIDkgOGMxMy04IDU4IDUgNTggMTYgMCA2LTYgOS0xMiA4LTctMi0xMiA1LTEyIDE1IDIgMTQtMSAxNS0xMiA2LTgtNi0xMS0xNi03LTIzczItNy03IDFjLTEwIDktOSAxNSA0IDI5IDEyIDEyIDE0IDIwIDcgMjctNiA2LTExIDE0LTExIDE4IDAgMTIgNzQgNDYgODkgNDEgOC0zIDExIDAgNyA3LTUgNyAxIDExIDE0IDExIDExIDAgMjMgNyAyNyAxNiA1IDEyIDEwIDcgMjQtMjAgMTAtMjEgMTUtNDQgMTItNTF6bTM0MiA1NWMxNy0xOCAxNy0yMCAyLTE0LTkgMy0xNyAxMC0xNyAxNSAwIDQtNyA1LTE3IDItMTEtNC0xNC0zLTkgNSAxMCAxNyAyMCAxNSA0MS04em0tMzEtMjdjOS0yMyA0LTI0LTIyLTQtMjEgMTYtMjIgMTctMyAxOCAxMSAxIDIyLTUgMjUtMTR6bS0xNDQtMjNjMC02IDgtMTAgMTgtMTEgOSAwIDEyLTMgNS01LTE2LTctNzUgMjUtNjggMzYgNyAxMiA0NS02IDQ1LTIwem0tNTUzLTMyYy0yLTEzLTQtNS00IDE3LTEgMjIgMSAzMiA0IDIzIDItMTAgMi0yOCAwLTQwem0zOTMtOGMtOC01LTExLTEwLTUtMTAgNSAwLTctOS0yOC0yMC00MS0yMi01Ny0yNS01Ny05IDAgNSA1IDcgMTAgNCA2LTMgMjUgNSA0MyAxOSAxNyAxNCAzNyAyNiA0MiAyNiA2IDAgMy01LTUtMTB6bS0zNDAtNDFjMC0xMC00LTE5LTEwLTE5LTUgMC05IDExLTggMjQgMyAyOCAxOCAyNCAxOC01em0yNi02OWMtMS0zNS0xNi00MS0xNi03IDAgMjAgNyAzNyAxNSAzNyAyIDAgMi0xMyAxLTMwem0tNzQtMTBjMy0xNyAxLTMzLTQtMzYtNC0zLTggMS04IDhzLTMgMjMtNiAzNmMtNCAxMi0yIDIyIDQgMjIgNSAwIDEyLTE0IDE0LTMwem0yMDgtMjA5Yy0xMC0yMC0zMC0zNy0zMC0yNyAwIDYgMzMgNDYgMzggNDYgMSAwLTItOS04LTE5em0tOTgtMTM2Yy00LTE0LTUzLTktNjkgOC0xMiAxMS03IDEzIDI5IDggMjQtMyA0Mi0xMCA0MC0xNnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjYwIDI2ODNjMS0xMyAxMDAtODUgMTAwLTczIDAgMTgtNjYgODAtODQgODAtOSAwLTE2LTMtMTYtN3pNMTY3MiAyNjE4YzE4LTE4IDM1LTMyIDM3LTMwIDIgMSAxMy01IDIzLTE1IDE2LTE0IDE4LTE0IDE4LTEgMCAyMi02NiA3OC05MSA3OC0xOCAwLTE3LTQgMTMtMzJ6TTE2MzAgMjYxNGMwLTEwIDY4LTc0IDc4LTc0IDYgMCAxMi03IDE2LTE1IDMtOCAxMC0xNSAxNS0xNSA2IDAgNyA4IDQgMTgtOCAxOS02MCA3Mi02NiA2NS0yLTItMTAgMy0xNyAxMi0xMyAxNS0zMCAyMC0zMCA5ek0xODA0IDI2MDJjLTE0LTEwLTI2LTQwLTMxLTc5LTMtMjUgMS0zNCAxNy00MyAzMi0xNyA1NC02IDQwIDIwLTYgMTItOSAyNi03IDMzcy0yIDIwLTExIDMwYy04IDktMTEgMTctNSAxNyA1IDAgMTAgNyAxMCAxNXMtMSAxNS0xIDE1Yy0xIDAtNi00LTEyLTh6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTYyMCAyNTcyYzAtOCAxMC0xOCA3Ny03MyAxOC0xNSAyOS0zMCAyNi0zMy00LTMtMS02IDUtNiAyOSAwIDcgNDUtMzQgNzEtMjAgMTItMzEgMjYtMjcgMzIgMyA3IDMgOS0yIDUtNC00LTE2LTMtMjYgMy0xMSA1LTE5IDYtMTkgMXpNMTYzMCAyNTI1YzAtMTMgMjAtMzUgMzItMzUgNCAwIDggNSA4IDEyIDAgNi0zIDgtNyA1LTMtNC0xMiAxLTE5IDExLTcgOS0xNCAxMi0xNCA3ek0xNjcwIDI0MjRjMC05IDUtMTQgMTItMTIgMTggNiAyMSAyOCA0IDI4LTkgMC0xNi03LTE2LTE2ek0xNzU1IDI0MjBjOS0xNSA2Mi00MCA2OS0zMyA3IDgtNDMgNDMtNjIgNDMtNyAwLTEwLTUtNy0xMHpNMTc1MCAyMzgyYzAtNSAxOC0xOCA0MC0zMSA0OC0yNyA1NC0xMSA2IDE4LTM2IDIzLTQ2IDI1LTQ2IDEzek0xMzgwIDIxNzBsLTI1LTcgMjYtN2MzNi0xMCA5Mi00IDk3IDEyIDQgMTQtNTUgMTUtOTggMnpNMTc3MiAyMTQxYzctMTIgMTgtMTcgMjctMTMgMTQgNiAxNCA3LTEgMTAtMTAgMi0xOCA4LTE4IDEzcy01IDktMTAgOWMtNiAwLTYtNyAyLTE5ek04ODMgMjAwNGMtMTYtMTcgOS0yNyAyNy0xMSA3IDcgMTAgNyA3IDItMy02LTItMTcgNC0yNSA2LTExIDktOSA5IDExIDAgMzAtMjggNDQtNDcgMjN6TTQ1NiAxOTUxYy0zLTUgMS0xNCA5LTIxIDEyLTEwIDE1LTEwIDE1IDMgMCAxOS0xNiAzMS0yNCAxOHpNMTExOSAxOTIzbC0xLTI4LTggMjVjLTUgMTUtOCAxOC05IDgtMS0yNCA5LTQ4IDIyLTQ4IDYgMCA4IDMgNSA2LTQgMy0yIDE5IDIgMzUgNSAxNyA1IDI5LTEgMjktNSAwLTktMTItMTAtMjd6TTkwMCAxOTAxYzAtMTIgNS0xOSAxMC0xNiA2IDMgMTAgMiAxMC0zIDAtNiA3LTEzIDE2LTE2IDE0LTUgMTUtNCA1IDgtOCAxMC05IDE2LTEgMjEgNSAzIDEwIDEyIDEwIDE4IDAgOC00IDctOS0yLTgtMTItMTItMTItMjUtMi0xNCAxMi0xNiAxMC0xNi04ek05ODUgMTg4M2MxNi03NyAyOC0xMjMgMzItMTIwIDYgNy0xOCAxMjctMjcgMTMyLTUgMy03LTMtNS0xMnpNMTQ2IDE0MDhjOC0xMiAxMTgtODYgMTI2LTg0IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjMtMjQtOTItNzQtMTQ5LTIzLTI4LTQ2LTYyLTQ5LTc2LTEwLTQyLTMzLTgwLTY5LTExNS0zMi0zMS0zNC0zOC0zNC05NyAwLTM0IDQtNzkgOS05OCAxNS01NCAyMy0xMzIgMTMtMTI3LTQgMy04LTMtOS0xMy0xLTEzIDMtMTcgMTMtMTMgOCAzIDE0IDE4IDE0IDM0czIgMjkgNSAyOWMxMCAwIDY0LTY1IDY1LTc3IDAtNyAzLTEzIDgtMTMgNCAwIDMzLTI1IDY2LTU1IDMyLTMwIDYzLTU2IDcwLTU2IDYtMSAxNi0yIDIzLTMgNyAwIDE5LTEwIDI3LTIxIDEzLTE3IDE3LTE4IDQwLTYgMTQgOCAyNCAxNyAyMiAyMHM0OCA3IDExMiA5YzIzMiA2IDI2OCA4IDI4MCAxNiA3IDQgMTIgMSAxMi04IDAtMjIgMTYtMjAgNTcgNWwzNSAyMi0zNy00OWMtMjAtMjYtNDEtNTktNDYtNzEtNy0xOS0xNi0yMy01Ni0yNC0yNyAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE3LTctMzkgMTYtMjggMjggNCA1IDEgNS01IDEtMTUtOS0xNy00NS00LTk1IDUtMjAgMTQtNjAgMjAtOTAgMTUtNzAgNjEtMTY1IDEwNi0yMTggMjQtMjkgNjQtNTcgMTIyLTg1bDg2LTQzaDExNmMxMTEgMCAxMTkgMSAxODEgMzIgODEgNDAgMTU0IDEwMyAxNzcgMTUxIDkgMjAgMjMgNDMgMzEgNTEgMTkgMjAgMzMgNjEgMjYgNzMtNCA2LTMgOCAzIDUgMTItNyA1OCA3NCA2NyAxMTkgNCAxNyAyOSA1NCA1NiA4MyA1MyA1NiAxMTUgMTY5IDEyNiAyMjggMTEgNTYtMTggMTI5LTgwIDIwNC0zMCAzNi01OCA3OC02MSA5Mi04IDMyLTE4IDM0LTQ0IDgtMzItMzItNjMtMzEtNzQgNC0xNSA0OC0zNCA2Mi04OSA2OC0zNSA1LTY1IDE2LTkzIDM2LTk4IDczLTE0NSAxMDMtMTY3IDEwNi0xMyAyLTQzIDktNjggMTUtNDkgMTItOTcgNy0xNDctMTYtMjktMTQtMzQtMTQtODAgOS01MiAyNy0xMjMgODYtMTIzIDEwMyAwIDUtMjQgMTQtNTQgMjAtMzAgNS01MiA2LTUwIDJ6bTQ5Mi0zMzJjNjEtNSAxMTItMTQgMTEyLTE5IDAtMTEtMTUwLTItMTk5IDEzLTE4IDUtMzggOC00MyA3LTYtMS0xMyA0LTE2IDEyLTMgMTEgMCAxMiAxNCA2IDExLTUgNzAtMTMgMTMyLTE5em0tMzIzLTgxYy0yNi04NS0xMS0xNTIgMzMtMTQ4IDE2IDIgMjUtNCAzMS0yMSA3LTE2IDI1LTI4IDYwLTQwIDI3LTkgNTctMTYgNjYtMTYgMjIgMCAxNC0yMi0xMy0zNi0yOS0xNC00Mi0yOS0xOS0yMSAyMCA3IDIzLTEzIDYtMzAtOS05LTUtMTQgMTQtMTggMTUtNCAyOS0xNiAzMi0yNiA0LTExIDE5LTI3IDMzLTM2IDE1LTkgNTEtMzIgNzktNTEgNDgtMzIgNTYtMzQgOTUtMjYgNTggMTIgNjQgNDAgMTEgNDktNDkgOC02OCAxOS01OCAzNSA2IDkgMzAgMTEgOTUgNiA4NS02IDg5LTYgMTIwIDIxIDMxIDI1IDMyIDI2IDI2IDUtMTItMzcgMTktMTYgNTkgMzkgMjggMzkgMzggNjYgNDcgMTI2IDEwIDYwIDE2IDc3IDMxIDgxIDEzIDMgMTggMTEgMTQgMjgtMiAxMyAxIDI1IDcgMjcgMTggNiAzNi00IDM2LTIwIDAtOS02LTEzLTE1LTktMTIgNC0xNS00LTE1LTQ1IDAtNjUgMTItODUgNTUtOTMgMzktOCA0OC0yMyAxMy0yMy00MS0xLTQ4LTMtNDgtMTQgMC02IDExLTIwIDI2LTMxIDE0LTExIDIyLTIzIDE5LTI2LTMtNC0xMC0xLTE0IDYtNyAxMi0zMyAxNy03NCAxMy0xMCAwLTE1LTUtMTItMTEgMy01LTItMTAtMTItMTEtMTAgMC0xMy0zLTYtNiA3LTIgMTMtMTIgMTMtMjEgMC0xMy0yLTE0LTktMy02IDktMTEgMTAtMTUgMy00LTYtMTMtOS0yMC02cy0xOC0yLTI1LTEwYy05LTExLTctMTkgMTQtNDEgMjktMzMgMjktMzIgMTAtMzItOCAwLTEyIDQtMTAgOCA2IDgtMTkgMTktNDQgMTktOSAwLTI2LTYtMzctMTQtMTUtMTItMTctMTctNi0yNyAxNi0xNyAxNi0zNC0xLTIwLTEzIDEwLTc5IDctOTgtNC00LTMtNi0xMi0yLTIwIDMtOCAwLTE1LTctMTUtNiAwLTggNC01IDEwcy05IDgtMzIgNmMtNjgtNi0xMTMtMTgtMTEzLTMwIDAtOC0yLTgtOCAwLTEwIDE3LTEwOCAxMy0xMDQtNCAxLTgtMi0xMS04LTdzLTkgMTMtNiAyMWMzIDktMiAxNC0xNyAxNC02OSAyLTg3IDYtODIgMTggNCAxMC00IDEzLTMwIDEyLTMtMS0xMiA2LTIxIDE0LTggOC0yMSAxMy0yOSA5LTExLTQtMTMtMS05IDExIDQgMTAgMSAxNi03IDE2LTcgMC05IDMtNiA2IDQgNC0zIDE1LTE0IDI1LTEyIDEwLTE4IDIzLTE0IDI4IDMgNiAyIDExLTQgMTFzLTggNi01IDE0LTQgMTktMTYgMjZjLTIwIDEwLTIwIDEzLTUgMjQgMTEgOCAxNCAxOCA4IDMzLTQgMTItMTEgMjItMTUgMjItNSAxLTE0IDEtMjAgMi03IDAtNCA0IDYgOCAyMSA4IDMzIDUxIDE1IDUxLTggMC04IDQgMCAxMyA2IDggMTMgNDIgMTcgNzcgMyAzOSAxMyA3NSAyNyA5NSAxMiAxOSAyMyAzMyAyNCAzMSAxLTEtNC0yNC0xMi01MXptMjQ2LTQxYzEwLTEzIDEwLTE3LTItMjUtMjItMTQtMzItMTEtMjYgMTEgMyAxMCAwIDIxLTcgMjQtNiAyLTQgNSA1IDUgOSAxIDIyLTYgMzAtMTV6bTExOS00YzEyLTggMTItMTAgMS0xMC04IDAtMTktNy0yNi0xN3MtMTktMTQtMjktMTBjLTE1IDYtMTUgOCAxIDI3IDE5IDIyIDMxIDI0IDUzIDEwem01MTUtOThjNC0yMCAzLTMyLTQtMzItMTUgMC0zMSAzNC0zMSA2NSAwIDIyIDIgMjQgMTQgMTMgNy04IDE3LTI5IDIxLTQ2em0yNSAxMWMwLTEyIDYtMjggMTMtMzUgMTItMTQgMjQtNDggMTItMzYtNCA0LTE4IDItMzItMy0yMi04LTI0LTctMTcgOCA1IDEwIDggNDAgOCA2Ni0xIDMwIDIgNDMgNyAzNSA1LTcgOS0yMyA5LTM1ek04MTggNzM0YzI4LTQgNTItMTEgNTItMTYgMC0xNy03MS0zOS0xMDQtMzItMzIgNi02NiAzMC02NiA0NiAwIDEwIDQ1IDEwIDExOCAyem0yNzUtMTI0Yy02LTYtMzMgMzAtMzMgNDQgMCA2IDkgMCAyMC0xNCAxMC0xNCAxNi0yNyAxMy0zMHptLTkzLTMwMWMwLTktOC0yNC0xOS0zMy0xNi0xNS0xOS0xNS0yNC0yLTggMjEgMjUgNzkgMzUgNjMgNC03IDgtMTkgOC0yOHptLTExMy0yNWMtOS05LTEwNi0xMC0xMDAtMSAyIDQgMjcgNyA1NSA3czQ5LTMgNDUtNnptLTEyLTE2NGMtMTItMTktMTA5LTcwLTEzNS03MC0xNyAwLTcgOCAzNCAyNSAzMyAxMyA2OSAzMyA4MCA0NCAyMCAyMSAzNCAyMSAyMSAxek01MzAgNTRjODItMjAgODYtMjQgMTktMjAtNTkgNC04MSA4LTg5IDE3LTMgMy0xNCAxMS0yNSAxOC0yMyAxNC0zMiAxNSA5NS0xNXpNNDU1IDEzNTVjMzQtMTYgNzItMjEgNDUtNi04IDUtMjggMTEtNDUgMTRsLTMwIDYgMzAtMTR6TTU2MCAxMzIzYzgtMyAzNC0xNCA1OC0yNCAyMy0xMCA0Mi0xNiA0Mi0xMyAwIDgtODMgNDQtMTAwIDQzLTEzLTEtMTMtMSAwLTZ6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjYyIDQ0N2MxOC0xOCAzOS0zMyA0Ni0zNCAxNCAwLTU2IDY2LTcxIDY3LTQgMCA3LTE1IDI1LTMzek03MjMgMzQwYy0yOS0xMi0yOS0xNSAwLTE4IDE1LTEgMjQgNCAyNCAxMyAwIDgtMSAxNS0xIDE0LTEgMC0xMS00LTIzLTl6TTM5MCAyODNjMC0yMSAyOC00NiA0NC00MCAxOCA3IDIyIDI2IDYgMjgtMjAgMy0yNSA0LTM3IDEyLTcgNS0xMyA0LTEzIDB6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM3OTUzNGNcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTIxNTcgMjQ5OGMtMi03LTQtMjgtMy00NiAxLTE3LTItMzItNi0zMi01IDAtOC05LTgtMjEgMC0xMS0zLTE4LTctMTYtNSAzLTgtOC04LTI1IDAtMzQgMjktNTggMzktMzIgNiAxNiA3IDE4NCAxIDE4NC0yIDAtNS02LTgtMTJ6TTE2MDAgMjQzOGMwLTIgMjgtMjggNjMtNTggMzQtMjkgNTEtNDEgMzctMjYtMjUgMjgtMTAwIDkxLTEwMCA4NHpNMTU5MSAyMzk1YzItNSAzMy0zNyA2OC03MHM2MC01MyA1NS00NGMtMTEgMTktMTI5IDEyOS0xMjMgMTE0ek0xNjQ0IDIyODJjMzktMzkgNzItNjkgNzUtNjcgNiA3LTc1IDkxLTExNCAxMTctMTYgMTIgMS0xMSAzOS01MHpNMTU5MCAyMjg2YzAtNSAyOS00MCA2NS03N3M2NS02MiA2NS01NWMwIDYtMjkgNDEtNjUgNzZzLTY1IDYwLTY1IDU2ek0xMzQgMjI1NmMtMy04LTEyLTEyLTIwLTktOSAzLTYtOSAxMC0zOCAxOS0zMyAyMi00NyAxNS02Mi02LTEwLTgtMjEtNS0yNSAzLTMgNiAwIDYgNyAwIDkgNSA5IDIzIDBsMjItMTItMjAgMjNjLTE4IDIxLTE4IDIzLTIgMTcgMTAtNCAyMi03IDI2LTcgNSAwIDYtMTIgMy0yNi0zLTE2LTktMjMtMTgtMjAtMjIgOC0xNi04IDctMjMgMTctMTAgMTktMTUgOS0yMS0xMS03LTExLTE0LTItMzUgNy0xNiAxNy0yMyAyNC0xOXM4IDMgNC00Yy05LTE1IDM3LTg5IDg0LTEzMiA0My00MSA1MC01NSAzOS05Mi03LTI2LTYtMjYgMTgtMTUgMTQgNiAyMSAxMyAxNiAxNC0xNSA1LTMgNTYgMTYgNzIgMTQgMTIgMTMgMTMtMTAgNy0yNi02LTYwIDE3LTQ2IDMwIDEwIDEwLTQxIDEzNC04MyAyMDYtMjIgMzYtNDAgNzItNDAgNzggMCA3LTExIDI2LTI1IDQycy0yMyAzNC0yMCAzOWM0IDUtMiA2LTExIDItMTItNC0xNS0zLTEwIDUgNCA3IDUgMTIgMSAxMi0zIDAtOC02LTExLTE0em0xMzEtMjM0Yy0yLTMtMTMgMS0yMiA4LTEwIDctNiAxIDktMTMgMjUtMjMgMjUtMjUgOC0zMC0xMS0zLTE5LTItMTggMiAxIDMtMyAxNi0xMCAyOS03IDEyLTkgMjItNSAyMnMyIDUtNSAxMmMtMjcgMjctMTAgMzAgMTggMyAxNi0xNiAyOC0zMSAyNS0zM3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjExIDIyMTVjMC02IDIyLTU1IDQ4LTEwOWw0OC05OS0xMDQtNTRjLTY0LTMzLTExNi01My0xMzctNTMtMzMgMC0zMyAwLTM0IDQ3LTIgNjUtMjQgMTUxLTMzIDEyNi02LTE2LTgtMTQtMTggMTAtOCAyMC0xNyAyNy0zOSAyN2gtMjhsMi0xNzdjMy0yOTIgMy0yOTAgMjAtMzA3IDgtOSAyMS0xNiAyNy0xNiA3IDAgNTMgNDEgMTAyIDkwIDUwIDUwIDEwNCAxMDAgMTIwIDExMmwzMCAyMS0zMC0zNGMtMTYtMTktNjYtNzItMTEwLTExOC02NC02OC03MC03Ny0zMC00NCA3MSA1OCAyMTIgMjA5IDIwMyAyMTgtMyAzLTMxLTYtNjItMjAtMzItMTQtODMtMjctMTE1LTMwbC01OC00LTcgNjdjLTMgMzctNSA5NC01IDEyNyAxIDQ4IDMgNTQgOSAzMCA0LTE2IDktNTkgMTAtOTVzNC01OSA3LTUyYzIgNiAyMCAxMiA0MCAxMiAyMiAwIDY5IDE4IDEzMSA1MCA5NSA1MCAxMjIgNTkgMTIyIDQxIDAtMTYtMjAzLTExMi0yNDMtMTE2LTUyLTQtNjAtMTUtMTAtMTUgMjkgMCA3MCAxNSAxNDIgNTEgNTUgMjggMTA5IDQ5IDExOCA0NyAxMS0yLTE5LTIxLTcyLTQ2LTQ5LTI0LTk5LTQ4LTExMC01NHMtNDUtMTQtNzUtMThsLTU1LTcgNDgtMmMyNyAwIDY1IDYgODUgMTYgMjEgOSA2NiAzMCAxMDIgNDYgMzYgMTcgNzIgMzAgODAgMzBzMTggNSAyMiAxMSAxMCA3IDE0IDNjNC0zLTEwLTI1LTMwLTQ3cy0zNi00My0zNi00OGMwLTQgMTcgMTMgMzggMzdsMzkgNDUgNDEtMjFjMjMtMTEgMzgtMjMgMzUtMjctNC00IDEtNCAxMiAwIDE1IDYgMTcgNCAxMi0xMS02LTE1LTUtMTYgOC01IDEyIDEwIDE1IDEwIDE1LTQgMC0xNi04OS0xMjAtOTctMTEzLTIgMiAxMiAyMSAzMiA0MiAxOSAyMiAzNSA0MiAzNSA0NyAwIDYtNzUtNzItODctOTEtMi0yLTYtMS0xMCAyLTMgNCA0IDIwIDE4IDM1IDEzIDE1IDAgMy0yOC0yNy0yOS0zMC01Ni01Mi01OS00OC0xMCAxMC00NS0xMy0zOC0yNSA0LTUgMC0xNC03LTE5LTIwLTEzLTMxLTExLTIzIDQgNSA4IDIgOC05LTItMTktMTUtMjMtMjYtNS0xNSA4IDUgOSAyIDUtMTAtNS0xMyAxMC05IDYwIDIwIDM4IDIwIDcxIDQyIDc1IDQ4czEyIDEyIDE4IDEyYzUgMSAxNCAyIDE4IDMgNSAwIDE3IDkgMjggMTkgMTAgOSAyOCAxNyAzOSAxOCAyMSAxIDE1OCA2NSAxODUgODcgMjMgMTggNjMgNzcgNTcgODQtNCAzLTUwIDIzLTEwNCA0NS04OCAzNS0xMzAgNTQtMjQxIDEwNi0xOCA4LTQxIDI5LTUyIDQ2LTIyIDM2LTEwMCAxMTUtOTkgMTAxem0zOTQtMjc0YzQzLTE2IDgxLTM0IDgzLTQwIDUtMTQtMTE3IDI5LTIyNiA4MC00NSAyMS04NSAzOS04OSAzOS0zIDAtMTUgNy0yNSAxNy00MCAzNi0xMyAzMCA4MC0xNyA1My0yNyAxMzMtNjMgMTc3LTc5em0tMTIxLTE2MGwtMzctMzYgMzEgNDBjMTggMjIgMzMgNDYgMzMgNTUgMSAxMCAzIDkgNi00IDMtMTItNy0zMS0zMy01NXptLTM3NC0xNGMwLTEtMjctMjktNjAtNjEtNjQtNjMtODMtNjUtMjYtMyAxOCAyMCAzMSAzNyAyNyAzOC0zIDAgOCA3IDI0IDE0IDMzIDE2IDM1IDE2IDM1IDEyem0yMzYtNjZjLTE2LTE3LTM4LTI4LTUzLTI4LTE2IDAtMjEgMi0xMiA3IDYgNSAxNyA2IDI0IDQgNi0zIDIyIDcgMzUgMjFzMjYgMjUgMjkgMjVjMiAwLTgtMTMtMjMtMjl6TTE4NjAgMjE0NWMyNS0xNCA1OC0zMCAxMzUtNjUgMTAxLTQ1IDE1OC03MCAxNjMtNzAgMTkgMC0yNSAyMy0xMTMgNjAtNTUgMjMtMTE5IDUzLTE0MiA2NnMtNDggMjQtNTUgMjQtMi03IDEyLTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE3NDAgMjExNmMwLTcgOTktNTggMjA4LTEwOCA5OC00NCAxODItNzEgMTgyLTU3IDAgNS01IDktMTEgOS0xNCAwLTE0OSA1NC0yMjQgOTAtMzMgMTYtNzggMzctMTAwIDQ2LTIyIDEwLTQzIDIwLTQ3IDIyLTUgMi04IDEtOC0yek0xODU1IDIxMDJjMzctMjMgMTc4LTg3IDIzNS0xMDcgODEtMjkgNTAtOC01MiAzNS01NyAyMy0xMjIgNTMtMTQ1IDY2LTQ5IDI4LTgyIDMzLTM4IDZ6TTEyODIgMTkxNWMwLTExMCAzLTIxNiA4LTIzNSAxMC00NSAxMiAzMjYgMSAzOTAtNSAyOC04LTMwLTktMTU1ek0xMjQ4IDE5MjdjNC0yNDIgOS0yNTUgMTEtMzAgMCAxMDUtMiAxOTQtNyAxOTctNCAyLTYtNzMtNC0xNjd6TTEyMTMgMjA1MGMwLTI1IDItMzUgNC0yMiAyIDEyIDIgMzIgMCA0NS0yIDEyLTQgMi00LTIzek0xNTc4IDE5ODRjLTM4LTIwLTM2LTI4IDItOSAxNyA5IDMwIDE4IDMwIDIwIDAgNy0xIDYtMzItMTF6TTE2OTkgMTg4M2MtMTQtMTYtNDMtNTAtNjQtNzgtMjEtMjctNzctODgtMTI0LTEzNC00OC00Ni03Ny03OS02Ni03MyAzMyAxNyAyMTIgMjA2IDI2MyAyODAgMjggMzkgMjQgNDEtOSA1ek0xMjEzIDE4MzVjMC0zOCAyLTUzIDQtMzIgMiAyMCAyIDUyIDAgNzAtMiAxNy00IDEtNC0zOHpNNTI0IDE4NjZjLTMtOC00LTIzLTItMzMgMy0xMyA3LTkgMTUgMTUgMTIgMzEtMSA0OC0xMyAxOHpNMTU4NSAxNzA3Yy0xMDMtMTA2LTEwMC0xMDggOC03IDQzIDM5IDExNSAxMjEgMTA1IDExOS0xIDAtNTItNTEtMTEzLTExMnpNMTU0MCAxNTU4Yy0xNC01LTU4LTEwLTk5LTEwLTU0IDAtNzAtMy02Mi0xMSAxNy0xNyAxNC00MC00LTMzLTEzIDUtMzUtMy02NS0yMi0yLTIgMi03IDktMTIgMTEtNiA5LTEzLTExLTMzLTI3LTI3LTI3LTQwIDAtMzAgMTAgNCAxMyAyIDgtNS0xMy0yMSAxMi0xMyAzOSAxMiAxOCAxNyAyMiAyNiAxMyAyOS05IDQtOSA2LTEgNiAzNCAyIDIxLTU0LTE2LTY4LTE3LTYtMjAtMTAtOC0xMCAyMC0xIDIzLTI5IDQtMzctNy0yLTEzLTEzLTE0LTIyLTEtMTUgNy0xOSA0MS0yMSA1NC0yIDkyIDI2IDEwNiA4MCA2IDIyIDMxIDY2IDU2IDk4IDY1IDg0IDY3IDExNSA0IDg5ek00ODUgMTI4NGMtNTctMjEtNjktMzItMTAwLTk0LTE1LTMwLTQ1LTc1LTY3LTk5LTIxLTI0LTQxLTU2LTQ1LTcwLTEwLTQzLTMyLTgxLTY5LTExNi0zMi0zMS0zNC0zOC0zNC05NyAwLTM1IDQtNzkgMTAtOTcgNS0xOSAxMS00OSAxMi02NyAxLTIxIDYtMzAgMTQtMjcgMTQgNSA3My01NSA3NC03NCAwLTcgMy0xMyA4LTEzIDQgMCAzMy0yNSA2Ni01NSAzMi0zMCA2My01NiA3MC01NiA2LTEgMTYtMiAyMy0zIDcgMCAxOS0xMCAyNy0yMSAxMy0xNyAxNy0xOCA0MC02IDE0IDggMjQgMTcgMjIgMjBzNDggNyAxMTIgOWMyMzIgNiAyNjggOCAyODAgMTYgNyA0IDEyIDEgMTItOCAwLTIxIDE5LTIwIDU1IDQgNTAgMzMgNTcgMjMgMjAtMjktNDQtNjEtMjktNzggMjItMjRsMzUgMzgtMTctMzNjLTktMTktMTQtMzYtMTEtMzkgNy03IDQyIDY1IDUwIDEwMyA0IDE3IDI5IDU0IDU2IDgzIDUzIDU2IDExNSAxNjkgMTI2IDIyOCAxMSA1Ni0xOCAxMjktNzkgMjAzLTMwIDM2LTU4IDc4LTYzIDk0LTkgMjctMTEgMjgtMjcgMTItOS0xMC0xNy0xNC0xNy05IDAgNC00IDMtOC0zLTQtNy0xOC0xNC0zMS0xNS0yMC0zLTI2IDItMzUgMzAtMTUgNDMtMzUgNTctOTQgNjUtMzYgNS02NyAyMS0xMzcgNzEtNDkgMzUtOTggNjUtMTA4IDY1cy0yNiA0LTM2IDljLTM0IDE4LTExNCAyMS0xNTYgNXptMTUzLTIwOGM2MS01IDExMi0xNCAxMTItMTkgMC0xMS0xNTAtMi0xOTkgMTMtMTggNS0zOCA4LTQzIDctNi0xLTEzIDQtMTYgMTItMyAxMSAwIDEyIDE0IDYgMTEtNSA3MC0xMyAxMzItMTl6bS0zMjMtODFjLTI2LTg1LTExLTE1MiAzMy0xNDggMTYgMiAyNS00IDMxLTIxIDctMTYgMjUtMjggNjAtNDAgMjctOSA1Ny0xNiA2Ni0xNiAyMiAwIDE0LTIyLTEzLTM2LTI5LTE0LTQyLTI5LTE5LTIxIDIwIDcgMjMtMTMgNi0zMC05LTktNS0xNCAxNC0xOCAxNS00IDI5LTE2IDMyLTI2IDQtMTEgMTktMjcgMzMtMzYgMTUtOSA1MS0zMiA3OS01MSA0OC0zMiA1Ni0zNCA5NS0yNiA1OCAxMiA2NCA0MCAxMSA0OS00OSA4LTY4IDE5LTU4IDM1IDYgOSAzMCAxMSA5NSA2IDg1LTYgODktNiAxMjAgMjEgMzEgMjUgMzIgMjYgMjYgNS0xMi0zNyAxOS0xNiA1OSAzOSAyOCAzOSAzOCA2NiA0NyAxMjYgMTAgNjAgMTYgNzcgMzEgODEgMTMgMyAxOCAxMSAxNCAyOC0yIDEzIDEgMjUgNyAyNyAxOCA2IDM2LTQgMzYtMjAgMC05LTYtMTMtMTUtOS0xMiA0LTE1LTQtMTUtNDUgMC02NSAxMi04NSA1NS05MyAzOS04IDQ4LTIzIDEzLTIzLTQxLTEtNDgtMy00OC0xNCAwLTYgMTEtMjAgMjYtMzEgMTQtMTEgMjItMjMgMTktMjYtMy00LTEwLTEtMTQgNi03IDEyLTMzIDE3LTc0IDEzLTEwIDAtMTUtNS0xMi0xMSAzLTUtMi0xMC0xMi0xMS0xMCAwLTEzLTMtNi02IDctMiAxMy0xMiAxMy0yMSAwLTEzLTItMTQtOS0zLTYgOS0xMSAxMC0xNSAzLTQtNi0xMy05LTIwLTZzLTE4LTItMjUtMTBjLTktMTEtNy0xOSAxNC00MSAyOS0zMyAyOS0zMiAxMC0zMi04IDAtMTIgNC0xMCA4IDYgOC0xOSAxOS00NCAxOS05IDAtMjYtNi0zNy0xNC0xNS0xMi0xNy0xNy02LTI3IDE2LTE3IDE2LTM0LTEtMjAtMTMgMTAtNzkgNy05OC00LTQtMy02LTEyLTItMjAgMy04IDAtMTUtNy0xNS02IDAtOCA0LTUgMTBzLTkgOC0zMiA2Yy02OC02LTExMy0xOC0xMTMtMzAgMC04LTItOC04IDAtMTAgMTctMTA4IDEzLTEwNC00IDEtOC0yLTExLTgtN3MtOSAxMy02IDIxYzMgOS0yIDE0LTE3IDE0LTY5IDItODcgNi04MiAxOCA0IDEwLTQgMTMtMzAgMTItMy0xLTEyIDYtMjEgMTQtOCA4LTIxIDEzLTI5IDktMTEtNC0xMy0xLTkgMTEgNCAxMCAxIDE2LTcgMTYtNyAwLTkgMy02IDYgNCA0LTMgMTUtMTQgMjUtMTIgMTAtMTggMjMtMTQgMjggMyA2IDIgMTEtNCAxMXMtOCA2LTUgMTQtNCAxOS0xNiAyNmMtMjAgMTAtMjAgMTMtNSAyNCAxMSA4IDE0IDE4IDggMzMtNCAxMi0xMSAyMi0xNSAyMi01IDEtMTQgMS0yMCAyLTcgMC00IDQgNiA4IDIxIDggMzMgNTEgMTUgNTEtOCAwLTggNCAwIDEzIDYgOCAxMyA0MiAxNyA3NyAzIDM5IDEzIDc1IDI3IDk1IDEyIDE5IDIzIDMzIDI0IDMxIDEtMS00LTI0LTEyLTUxem0yNDYtNDFjMTAtMTMgMTAtMTctMi0yNS0yMi0xNC0zMi0xMS0yNiAxMSAzIDEwIDAgMjEtNyAyNC02IDItNCA1IDUgNSA5IDEgMjItNiAzMC0xNXptMTE5LTRjMTItOCAxMi0xMCAxLTEwLTggMC0xOS03LTI2LTE3cy0xOS0xNC0yOS0xMGMtMTUgNi0xNSA4IDEgMjcgMTkgMjIgMzEgMjQgNTMgMTB6bTUxNS05OGM0LTIwIDMtMzItNC0zMi0xNSAwLTMxIDM0LTMxIDY1IDAgMjIgMiAyNCAxNCAxMyA3LTggMTctMjkgMjEtNDZ6bTI1IDExYzAtMTIgNi0yOCAxMy0zNSAxMi0xNCAyNC00OCAxMi0zNi00IDQtMTggMi0zMi0zLTIyLTgtMjQtNy0xNyA4IDUgMTAgOCA0MCA4IDY2LTEgMzAgMiA0MyA3IDM1IDUtNyA5LTIzIDktMzV6TTgxOCA3MzRjMjgtNCA1Mi0xMSA1Mi0xNiAwLTE3LTcxLTM5LTEwNC0zMi0zMiA2LTY2IDMwLTY2IDQ2IDAgMTAgNDUgMTAgMTE4IDJ6bTI3NS0xMjRjLTYtNi0zMyAzMC0zMyA0NCAwIDYgOSAwIDIwLTE0IDEwLTE0IDE2LTI3IDEzLTMwelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjOTM1YTNiXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjQyIDIxNThjNi0xOCAyMi01NyAzNi04NyAxNC0yOSAyNS01OSAyNS02NyAwLTcgNC0xMSA5LTggNCAzIDgtMSA4LTkgMC0yMS0xOTQtMTE4LTI0Mi0xMjItNTItNC02MS0xNS0xMy0xNSAyNyAwIDcyIDE2IDE0MiA1MSA1NyAyOCAxMTEgNDkgMTIxIDQ3cy0yMC0yMS03My00NmMtNDktMjQtOTktNDgtMTEwLTU0cy00NS0xNC03NS0xOGwtNTUtNyA0OC0yYzI3IDAgNjUgNiA4NSAxNiAyMSA5IDY2IDMwIDEwMiA0NiAzNiAxNyA3MyAzMCA4MyAyOSAxMCAwIDE3IDYgMTcgMTYgMCAxMiAzIDEzIDEyIDQgOC04IDItMjEtMjUtNTItMjEtMjItMzctNDMtMzctNDdzMTkgMTQgNDMgNDFsNDIgNDggMjQtMjFjMTMtMTIgMzAtMjEgMzgtMjFzMTEtNCA4LTEwYy00LTYgMS03IDExLTMgMTQgNSAxNiAzIDExLTEyLTYtMTQtNS0xNiA3LTYgMTkgMTYgNDUgNCAzOS0xOS0zLTEwLTIxLTMzLTQxLTUxbC0zNi0zNCAzMiA0MGMxOCAyMiAzMiA0NiAzMiA1NSAwIDgtOCAyLTE5LTE1LTE5LTMwLTkxLTEwNC05MS05MyAwIDMgMTYgMjMgMzUgNDRzMzUgNDEgMzUgNDZjMCA2LTc1LTcyLTg3LTkxLTItMi02LTEtMTAgMi0zIDQgNCAyMCAxOCAzNSAxMyAxNSAwIDMtMjgtMjctMjktMzAtNTYtNTItNTktNDgtMTAgMTAtNDUtMTMtMzgtMjUgNC01IDAtMTQtNy0xOS0yMC0xMy0zMS0xMS0yMyA0IDUgOCAyIDgtOS0yLTE5LTE1LTIzLTI2LTUtMTUgOCA1IDkgMiA1LTEwLTUtMTMgMTAtOSA2MCAyMCAzOCAyMCA3MSA0MiA3NSA0OHMxMiAxMiAxOCAxMmM1IDEgMTQgMiAxOCAzIDUgMCAxNyA5IDI4IDE5IDEwIDkgMjggMTcgMzkgMTggMjEgMSAxNTggNjUgMTg1IDg3IDI2IDIwIDU3IDcxIDUzIDg1LTMgNi0xMSAxMi0xOCAxMi0xNyAwLTY5IDIxLTIwOCA4NS0zMSAxNS02MyAyNS02OSAyMy0xNS01IDExNS02OCAyMTYtMTAzIDQxLTE1IDczLTMxIDcxLTM1LTgtMTMtMTU3IDQwLTI1MyA5MC00NCAyMy03MiAyMS03Mi01IDAtOC00LTE1LTEwLTE1LTkgMC0xNCAxNy0xMyA0NyAxIDctNCAxMC0xMCA2cy04IDAtNCAxMGMzIDkgMiAxOS0zIDIyLTYgNC0xMCAxNi0xMCAyOSAwIDE5LTY5IDEwNi04NCAxMDYtMyAwIDAtMTUgNi0zMnptMTA0LTQ1N2MtMTYtMTctMzgtMjgtNTMtMjgtMTYgMC0yMSAyLTEyIDcgNiA1IDE3IDYgMjQgNCA2LTMgMjIgNyAzNSAyMXMyNiAyNSAyOSAyNWMyIDAtOC0xMy0yMy0yOXpNNTA2IDEyODNjLTQtNC0xMi04LTE5LTktNTItOC03Mi0yNy0xMDctOTUtMTYtMzAtMzYtNjEtNDUtNjktOS03LTI1LTI2LTM2LTQybC0yMC0yOGgyMWMxMiAwIDE5IDQgMTUgOS0zIDUtMSAxMiA1IDE2IDE0IDkgMTMtMTQtNS03MS04LTI3LTE1LTU4LTE1LTY5IDAtMzIgMjQtNzAgNDUtNzIgMzktNSAxMTUtMjggMTE1LTM1IDAtNCAxNi0xMCAzNS0xNCAyNi01IDQwLTE1IDUxLTM2IDE0LTI3IDEyLTY5LTMtNTQtNyA3LTQzLTIzLTQzLTM3IDAtNSA3LTYgMTUtMyAxMSA0IDE3LTMgMjEtMjMgNC0yMSAyMC0zOSA1My02MCAyNS0xNyA1Ni0zOCA2OS00NyAxOS0xNSAyOC0xNSA2OS00IDQzIDEzIDQ0IDE0IDIyIDIzLTEzIDUtMjggMTAtMzQgMTEtMjggNi01NiAyOS01MyA0NCAzIDEzIDEyIDE2IDQzIDEzbDQwLTMtMzcgMzdjLTIxIDIwLTM4IDQwLTM4IDQ1IDAgNCAxNCAyMCAzMSAzNCAyMyAxOSA0MSAyNiA3MiAyNSAyMyAwIDM2LTMgMjktNi0yNS0xMCAxLTIzIDQ4LTIzIDM5IDAgNDgtMyA0NC0xNS04LTIwLTg4LTQ4LTEyMy00My0yNiA0LTI5IDItMjAtMTQgNS0xMCAxOS0xOCAzMC0xOCAxMyAwIDE5LTUgMTYtMTMtMy05IDYtMTQgMzMtMTUgMjgtMiA0NSA0IDY4IDIzIDE2IDE0IDM5IDI1IDUxIDI1IDM1IDAgNzEgNjcgODAgMTUxIDYgNTEgNSA3OC0zIDg4LTExIDE1LTExIDE1IDM5LTUgOC0zIDE1LTEgMTUgNCAwIDE1LTMwIDQzLTQwIDM3LTUtMy0xMiAwLTE2IDYtNCA3LTMgOSA0IDUgNS0zIDEyLTEgMTQgNSA2IDE3IDU4LTEgNzUtMjcgMTEtMTggMTItMjggNS0zNy03LTgtOS0yOS01LTUyIDQtMjcgMy0zNi01LTMxLTE2IDktMTUtNyAwLTIyIDI4LTI4IDM4LTEzIDM4IDU4IDAgODEgMTIgODkgNDAgMjggMTYtMzUgMTgtMzcgMTMtMTMtMyAxNy0xNCA0NC0yNCA2MS0xMSAxNy0xOSAzOC0xOSA0NSAxIDggNyAwIDE0LTE3IDE1LTMzIDQxLTUwIDUyLTMzIDMgNi0zIDEzLTE1IDE2LTExIDMtMjMgMTQtMjYgMjQtNCAxMS0xNyAzMi0zMCA0N3MtMjUgMzktMjcgNTJsLTMgMjUtMjAtMjFjLTExLTEyLTMwLTI1LTQyLTI4LTE0LTUtMjMtMTYtMjQtMjkgMC0xMi05IDUtMTkgMzctMjQgNzYtMzUgODMtMTM5IDg3LTQ5IDItNTQgNS02MyAzMS02IDE1LTEzIDI4LTE3IDI4LTUgMC0yMSAxMS0zNyAyNS0zMiAyOC02NiA0MC04OSAzMS05LTMtMTQtMi0xMSAzIDggMTMtMTQ2IDQ2LTE1OCAzNHptMjYtMTkyYzEzLTQgNTctMTEgOTgtMTUgNzAtNiA3NC01IDU1IDEwLTIwIDE2LTE5IDE2IDUgOSA0Mi0xMSA4MC0yNyA4MC0zNCAwLTgtMTEyLTQxLTE0MC00MS0xMSAwLTIwLTctMjAtMTVzLTUtMTUtMTEtMTUtOSA5LTYgMjBjNCAxNiAxIDIwLTEzIDE4LTE5LTMtMTEwIDQ5LTExMCA2MyAwIDExIDMyIDExIDYyIDB6bTExMy0xMjhjNTEtNyA2NS0xOSA2NC01MmwtMS0yNi03IDI0Yy04IDMwLTI0IDM2LTQxIDE2LTE4LTIxLTM1LTE5LTUzIDgtMTQgMjItMTUgMjItMzUgMy0yNC0yMS01Ny0xNS00OCA5IDMgOCAxIDE1LTUgMTVzLTggNC00IDljNSA5IDM4IDggMTMwLTZ6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjUyIDkyNGw0LTM1LTE5IDIzYy0xMCAxMy0xNiAxNy0xMiAxMSAzLTcgMS0xMy01LTEzLTcgMC0yMC0xMC0zMS0yMi0yMy0yOS0yNS0xMjMtNS0xOTMgOC0yNiAxNC01MyAxMy01OS0xLTUgMy0xMCA5LTExIDExIDAgNzQtNTkgNzQtNzAgMC0xMCA0OC01NSA1OS01NSA1IDAgMTItOCAxNS0xOCA3LTIxIDY2LTU5IDY2LTQyIDAgNiAxMiAyIDI2LTkgMTUtMTIgMzMtMjEgNDEtMjFzMTEtNSA4LTEyYy00LTcgMC01IDggNCA4IDEwIDE4IDE0IDIyIDEwIDUtNCA1IDIgMSAxMi01IDE2LTQgMTcgOSA2IDgtNyAyMi0xMCAzMC02IDggMyAxNSAyIDE1LTJzMTYtNyAzNS04YzI1IDAgMzUgNCAzNSAxNXMzIDEyIDggNCAyNi0xMCA2Ny03YzMzIDMgOTIgNiAxMzAgNiA0MiAwIDczIDUgNzcgMTEgNSA4IDggNiA4LTUgMC0yMyA0Mi0yNCA2MC0zIDcgOCAyMSAxNSAzMiAxNSAyMiAwIDI1IDctMjgtNzUtMzQtNTIgMTMtMjIgNjIgNDAgMTMgMTYgMTUgMTcgMTAgMy0xNi00OC0xNi01MS0zLTI4IDggMTQgMTggMzkgMjEgNTYgNCAxNyAyOSA1NSA1NyA4NCAyNyAyOSA2NiA4NyA4NiAxMjggMzggNzkgNTUgMTYyIDM0IDE2Mi03IDAtOSA1LTYgMTAgMyA2IDEgMTAtNCAxMC02IDAtMTEgOC0xMSAxOCAwIDE0LTIgMTQtOSAzLTYtOS02LTIyIDAtMzIgMTMtMjUgMTEtMzktNi0zOS04IDAtMTUtNS0xNS0xMSAwLTUtNC03LTEwLTQtNSAzLTEwIDItMTAtNCAwLTUgNC0xMyAxMC0xNiA1LTMgMTUtMTYgMjEtMjggMTEtMjEgMTEtMjEtNy02LTIzIDE5LTg0IDMzLTg0IDE5IDAtNi02LTEwLTE0LTEwczEtMTUgMjAtMzZjMTktMTkgMzQtNDEgMzQtNDdzLTctMS0xNiAxMWMtOCAxMi0yMCAyMC0yNSAxNi01LTMtOCAwLTcgNyAyIDYtOSAxNS0yMyAxOS0yMCA2LTMxIDMtNDMtMTItMTctMTktMTYtMTkgNi0xMiAxOSA2IDIxIDUgMTEtOC0xNy0yMC00LTMxIDE2LTE1IDE0IDExIDE0IDEwIDItNS0xMS0xNS0xMS0yMS0xLTMzIDExLTEzIDEwLTE0LTQtOS05IDMtMjEgMTQtMjYgMjRzLTE5IDE2LTMyIDE1LTI5LTMtMzYtNGMtNyAwLTEwLTYtNy0xMXMxLTEwLTUtMTBjLTcgMCAwLTE0IDE0LTMxczI2LTM2IDI2LTQyYzAtNy01LTQtMTEgNS01IDktMTYgMTUtMjQgMTItOC00LTEyLTExLTgtMTcgMy02IDEtNy02LTMtOCA2LTkgMTItMiAyMCAxMSAxMyA1IDI2LTExIDI2LTUgMC03LTQtNC05IDMtNC02LTYtMTktMy0xOSAzLTI1IDAtMjUtMTIgMC0xMS00LTE0LTEyLTEwLTcgNC0yLTcgMTEtMjQgMTItMTggMTgtMzIgMTMtMzItNiAwLTEzIDctMTYgMTYtMyA4LTExIDEyLTE3IDgtNy00LTktMy01IDQgOCAxMy00OCA1LTg5LTEzLTI1LTEyLTgxLTIxLTE0NC0yNC04LTEtMTEtOC04LTIxIDMtMTEgMS0yMC00LTIwcy05IDktOSAyMC03IDIwLTE2IDIwLTEyLTUtOC0xMmM2LTEwIDUtMTAtNy0xLTEzIDEwLTIxIDEwLTQyIDAtMjgtMTItMzgtMzQtMTMtMjQgMTAgNCAxMyAxIDEwLTgtNS0xMS0xMC0xMi0yNC0zLTEwIDctMTcgMTUtMTUgMThzLTEgMTItNiAyMGMtOCAxMy0xMCAxMy0xOSAwLTgtMTMtMTAtMTItMTAgNCAwIDE1LTUgMTctMjYgMTItMTYtNC0yMy0zLTE5IDMgMyA3IDAgOC05IDVzLTEzLTExLTktMTdjMy02IDEtNy02LTMtNyA1LTkgMTYtNSAyOCA1IDE2IDMgMjAtMTAgMTUtOC0zLTE4LTItMjEgMi0zIDUtMTUgNy0yOCA0LTE4LTQtMTktMy03IDYgMTMgOSAxMiAxMS00IDExLTEzIDAtMTYgNS0xMiAxNiA1IDEyIDIgMTUtOSAxMC05LTMtMTMtMi0xMCA0IDcgMTItMTggNDAtMzYgNDAtOSAwLTggNCAxIDE1IDkgMTAgOSAxNSAxIDE1LTYgMC0xMCAzLTEwIDggMyAxOC0yIDMyLTEyIDMyLTUgMC03LTQtNC0xMCAzLTUgMC03LTgtNC0xNyA2LTE4IDM0LTEgMzQgNiAwIDE1IDggMTggMTcgOCAxOS0yMCA0Ni0zNyAzNi02LTMtNy0xLTMgNSA0IDcgMTQgMTIgMjEgMTIgMTIgMCAxMiA1IDQgMjQtOCAxNy04IDI5IDAgNDUgMTAgMTcgOSAyMS00IDIxLTggMC0xNSA0LTE1IDlzOSA3IDE5IDRjMjEtNSAzMCAxNiAyMyA1NS03IDM3LTI1IDI1LTIwLTE0em01NTQtNDM2Yy0xLTEzLTYtMjItOS0yMC00IDEtMTQgMi0yMiAycy0xNSA1LTE1IDExYzAgNSA0IDggOSA1czE0IDEgMjEgOWMxNyAyMCAyMCAxOSAxNi03elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjNzU2NzVhXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjY5IDIzMTdjMzYtMzkgNDEtNDIgNDEtMjkgMCA0LTE3IDIwLTM4IDM2bC0zNyAyOSAzNC0zNnpNMTY1NyAyMjcwYzEwLTExIDIxLTIwIDI1LTIwczAgOS05IDIwYy0xMCAxMS0yMSAyMC0yNSAyMHMwLTkgOS0yMHpNMTYwMCAyMjczYzAtNCAyMC0yNyA0NC01MCAyNS0yMyA1Mi01MyA2MC02NSAxMS0xNiAxNi0xOCAxNi03IDAgOS0yNyA0MS02MCA3M3MtNjAgNTQtNjAgNDl6TTEzNCAyMjU2Yy0zLTgtMTItMTItMjAtOS05IDMtNi05IDEwLTM4IDE5LTMzIDIyLTQ3IDE1LTYyLTYtMTAtOC0yMS01LTI1IDMtMyA2IDAgNiA2IDAgNyA3IDkgMTggNSAxNS02IDE2LTUgMiAxMnMtMTMgMTggMyAxMmMxMC00IDIyLTcgMjYtNyA1IDAgNi0xMiAzLTI2LTMtMTYtOS0yMy0xOC0yMC0yMiA4LTE2LTggNy0yMyAxNy0xMCAxOS0xNSA4LTIxLTExLTctMTEtMTMgMC0zNCA4LTE0IDE5LTIzIDI0LTE5IDYgNCA3IDEgMy02LTUtNy0yLTIwIDYtMjlzMjAtMzAgMjgtNDVjOC0xNiAyNy0zNiA0Mi00NXMyOC0yMiAyOC0yOSA0LTEzIDktMTNjMTQgMCAxOC0zMSAxMC02Mi03LTI2LTYtMjYgMTgtMTUgMTQgNiAyMSAxMyAxNiAxNC0xNSA1LTMgNTYgMTYgNzIgMTQgMTIgMTMgMTMtMTAgNy0xOS00LTMxIDAtNDQgMTQtMTAgMTEtMTMgMjAtNyAyMCAxNyAwLTMwIDEyMS03OCAyMDItMjIgMzYtNDAgNzItNDAgNzggMCA3LTExIDI2LTI1IDQycy0yMyAzNC0yMCAzOWM0IDUtMiA2LTExIDItMTItNC0xNS0zLTEwIDUgNCA3IDUgMTIgMSAxMi0zIDAtOC02LTExLTE0em05MS0xNzVjLTItNSA3LTE5IDIwLTMxIDMxLTI5IDMzLTUwIDMtMjQtMTMgMTAtNiAxIDE1LTIwIDQ1LTQ2IDQ4LTYyIDctNDEtMTYgOC0yOSAxOS0yOCAyM3MtMyAxNy0xMCAzMGMtNyAxMi0xMCAyMi02IDIyIDMgMCAyIDYtMyAxMy0xMiAxNS0xMyA0OC0xIDQxIDUtMyA2LTkgMy0xM3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjQyIDIxNThjNi0xOCAyMi01NyAzNi04NyAxNC0yOSAyNS01OSAyNS02NyAwLTcgNC0xMSA5LTggNCAzIDgtMSA4LTkgMC0yMS0xOTQtMTE4LTI0Mi0xMjItNTItNC02MS0xNS0xMy0xNSAyNyAwIDcyIDE2IDE0MiA1MSA1NyAyOCAxMTEgNDkgMTIxIDQ3cy0yMC0yMS03My00NmMtNDktMjQtOTktNDgtMTEwLTU0cy00NS0xNC03NS0xOGwtNTUtNyA0OC0yYzI3IDAgNjUgNiA4NSAxNiAyMSA5IDY2IDMwIDEwMiA0NiAzNiAxNyA3MyAzMCA4MyAyOSAxMCAwIDE3IDYgMTcgMTYgMCAxMiAzIDEzIDEyIDQgOC04IDItMjEtMjUtNTItMjEtMjItMzctNDMtMzctNDdzMTkgMTQgNDMgNDFsNDIgNDggMjQtMjFjMTMtMTIgMzAtMjEgMzgtMjFzMTEtNCA4LTEwYy00LTYgMS03IDExLTMgMTQgNSAxNiAzIDExLTEyLTYtMTQtNS0xNiA3LTYgMTkgMTYgNDUgNCAzOS0xOS0zLTEwLTIxLTMzLTQxLTUxbC0zNi0zNCAzMiA0MGMxOCAyMiAzMiA0NiAzMiA1NSAwIDgtOCAyLTE5LTE1LTE5LTMwLTkxLTEwNC05MS05MyAwIDMgMTYgMjMgMzUgNDRzMzUgNDEgMzUgNDZjMCA2LTc1LTcyLTg3LTkxLTItMi02LTEtMTAgMi0zIDQgNCAyMCAxOCAzNSAxMyAxNSAwIDMtMjgtMjctMjktMzAtNTYtNTItNTktNDgtMTAgMTAtNDUtMTMtMzgtMjUgNC01IDAtMTQtNy0xOS0yMC0xMy0zMS0xMS0yMyA0IDUgOCAyIDgtOS0yLTE5LTE1LTIzLTI2LTUtMTUgOCA1IDkgMiA1LTEwLTUtMTMgMTAtOSA2MCAyMCAzOCAyMCA3MSA0MiA3NSA0OHMxMiAxMiAxOCAxMmM1IDEgMTQgMiAxOCAzIDUgMCAxNyA5IDI4IDE5IDEwIDkgMjggMTcgMzkgMTggMjEgMSAxNTggNjUgMTg1IDg3IDI2IDIwIDU3IDcxIDUzIDg1LTMgNi0xMSAxMi0xOCAxMi0xNyAwLTY5IDIxLTIwOCA4NS0zMSAxNS02MyAyNS02OSAyMy0xNS01IDExNS02OCAyMTYtMTAzIDQxLTE1IDczLTMxIDcxLTM1LTgtMTMtMTU3IDQwLTI1MyA5MC00NCAyMy03MiAyMS03Mi01IDAtNDEtMzIgNy0zNSA1MiAwIDYtNCAxNS04IDE5cy03IDE3LTcgMjljMCAxOC02OSAxMDUtODQgMTA1LTMgMCAwLTE1IDYtMzJ6bTEwNC00NTdjLTE2LTE3LTM4LTI4LTUzLTI4LTE2IDAtMjEgMi0xMiA3IDYgNSAxNyA2IDI0IDQgNi0zIDIyIDcgMzUgMjFzMjYgMjUgMjkgMjVjMiAwLTgtMTMtMjMtMjl6TTE4NzYgMjEzOWM2LTExIDY2LTM5IDgxLTM5IDQgMC0xMiAxMS0zNiAyNS00OCAyOC01NSAzMC00NSAxNHpNMTg0NiAyMTEwYzEyLTUgMjUtMTMgMjktMTkgMy02IDEyLTExIDE4LTExIDcgMSAxIDEwLTEyIDIwLTEzIDExLTMxIDIwLTQwIDE5LTExIDAtMTAtMyA1LTl6TTEyODQgMTkwM2MxLTExNiA0LTIxNCA3LTIxNyA4LTkgOCAzMzEgMCAzODQtNCAyNS03LTUwLTctMTY3elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTEzMTcgMTg5M2MxLTEyMCA1LTIyOCA4LTI0MHMxNS0yNyAyNi0zNGMxOC05IDMwLTIgOTkgNjcgNDQgNDMgNzggODAgNzYgODNzMjAgMjEgNDggNDBsNTEgMzQtMzUtMzljLTE5LTIyLTcxLTc3LTExNS0xMjMtNTYtNTktNjctNzMtMzUtNDggNDIgMzQgNjcgNTkgMTc0IDE3NCAzNiAzOCAzNyA0MSAxNSAzOC0xMy0yLTQ4LTEzLTc3LTI0LTMyLTEzLTcyLTIxLTEwMC0yMGwtNDcgMi0zIDExNWMtNSAxNDQtMTggMTg2LTU5IDE5MGwtMzAgMyA0LTIxOHptMTU3LTE2NmMtMjQtMjctNDMtNDAtNDktMzUtNiA2LTEgMTcgMTUgMzAgMTQgMTIgMTggMTkgMTAgMTYtNDctMTgtNDktMTUtNSA2IDcwIDM0IDczIDMyIDI5LTE3em0tNTQtNDZjMC01LTctMTQtMTUtMjEtMTYtMTQtMTgtMTAtOSAxNCA2IDE3IDI0IDIyIDI0IDd6TTEyNDggMTkyN2M0LTIzNyA5LTI0OSAxMS0yNSAwIDEwMy0yIDE4OS03IDE5Mi00IDItNi03My00LTE2N3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNDI0IDIwODBjMy0xNCA2LTMxIDYtMzcgMC03IDUtMTMgMTAtMTMgMTIgMCAyIDUwLTEzIDY1LTYgNy04IDItMy0xNXpNMTk3MCAyMDk2YzAtNyAxMTItNTcgMTE3LTUyIDMgMy0yMCAxNy01MiAzMS01OSAyNi02NSAyOC02NSAyMXpNMTgxMCAyMDgyYzAtOCAzNy0yOCAxMTUtNjIgMjgtMTIgNTgtMjYgNjgtMzEgMzItMTcgMTM3LTQ3IDEzNy0zOSAwIDQtMTIgMTEtMjcgMTQtMzEgOC0yMTIgODQtMjI4IDk3LTE4IDEzLTY1IDI5LTY1IDIxek0xOTY0IDIwNTBjNjYtMzMgMTY3LTcyIDE3Mi02NyA0IDQtMjExIDk3LTIyMyA5Ni00IDAgMTgtMTMgNTEtMjl6TTE0MDUgMjA1MmM0LTggMTEtNDYgMTUtODVsOS03Mi0zIDczYy0yIDQzLTkgNzgtMTYgODUtMTAgOS0xMSA5LTUtMXpNMjEyNCAyMDI1YzM2LTE5IDQ1LTE5IDIwIDAtMTAgOC0yNiAxNC0zNCAxNS04IDAtMi03IDE0LTE1ek0xNTc4IDE5MzljLTIxLTExLTM4LTIyLTM4LTI0IDAtMyAxOCA0IDQwIDE1czQwIDIzIDQwIDI1YzAgNyAwIDctNDItMTZ6TTE2OTkgMTg4M2MtMTQtMTYtNDItNTAtNjMtNzgtMjEtMjctNzctODctMTI1LTEzMi00Ny00Ni04Mi04My03Ny04MyAyMiAwIDE5OSAxODggMjg5IDMwOCAxNyAyMiAxIDEyLTI0LTE1ek01MzAgMTg2NWMtNi04LTEwLTE5LTgtMjYgMi02IDkgMCAxNiAxNSAxMyAyOSAxMCAzMy04IDExek01MDYgMTI4M2MtNC00LTEyLTgtMTktOS01Mi04LTcyLTI3LTEwNy05NS0xNi0zMC0zNi02MS00NS02OS05LTctMjUtMjYtMzYtNDJsLTIwLTI4aDIxYzEyIDAgMTkgNCAxNSA5LTMgNS0xIDEyIDUgMTYgMTQgOSAxMy0xNC01LTcxLTgtMjctMTUtNTgtMTUtNjkgMC0zMiAyNC03MCA0NS03MiAzOS01IDExNS0yOCAxMTUtMzUgMC00IDE2LTEwIDM1LTE0IDI2LTUgNDAtMTUgNTEtMzYgMTQtMjcgMTItNjktMy01NC03IDctNDMtMjMtNDMtMzcgMC01IDctNiAxNS0zIDExIDQgMTctMyAyMS0yMyA0LTIxIDIwLTM5IDUzLTYwIDI1LTE3IDU2LTM4IDY5LTQ3IDE5LTE1IDI4LTE1IDY5LTQgNDMgMTMgNDQgMTQgMjIgMjMtMTMgNS0yOCAxMC0zNCAxMS0yOCA2LTU2IDI5LTUzIDQ0IDMgMTMgMTIgMTYgNDMgMTNsNDAtMy0zNyAzN2MtMjEgMjAtMzggNDAtMzggNDUgMCA0IDE0IDIwIDMxIDM0IDIzIDE5IDQxIDI2IDcyIDI1IDIzIDAgMzYtMyAyOS02LTI1LTEwIDEtMjMgNDgtMjMgMzkgMCA0OC0zIDQ0LTE1LTgtMjAtODgtNDgtMTIzLTQzLTI2IDQtMjkgMi0yMC0xNCA1LTEwIDE5LTE4IDMwLTE4IDEzIDAgMTktNSAxNi0xMy0zLTkgNi0xNCAzMy0xNSAyOC0yIDQ1IDQgNjggMjMgMTYgMTQgMzkgMjUgNTEgMjUgMzUgMCA3MSA2NyA4MCAxNTEgNiA1MSA1IDc4LTMgODgtMTEgMTUtMTEgMTUgMzktNSA4LTMgMTUtMSAxNSA0IDAgMTUtMzAgNDMtNDAgMzctNS0zLTEyIDAtMTYgNi00IDctMyA5IDQgNSA1LTMgMTItMSAxNCA1IDYgMTcgNTgtMSA3NS0yNyAxMS0xOCAxMi0yOCA1LTM3LTctOC05LTI5LTUtNTIgNC0yNyAzLTM2LTUtMzEtMTYgOS0xNS03IDAtMjIgMjgtMjggMzctMTMgNDAgNzFsMyA4MiAyOC01NWMxOS0zOCAyNS00NiAyMS0yNS00IDE3LTE1IDQ0LTI1IDYxLTIzIDM5LTI2IDY2LTMgMzggMTQtMTggMTQtMTggMyA2LTYgMTQtMjAgMzQtMjkgNDUtMTAgMTEtMjAgMzEtMjIgNDVsLTMgMjUtMjAtMjFjLTExLTEyLTMwLTI1LTQyLTI4LTE0LTUtMjMtMTYtMjQtMjkgMC0xMi05IDUtMTkgMzctMjQgNzYtMzUgODMtMTM5IDg3LTQ5IDItNTQgNS02MyAzMS02IDE1LTEzIDI4LTE3IDI4LTUgMC0yMSAxMS0zNyAyNS0zMiAyOC02NiA0MC04OSAzMS05LTMtMTQtMi0xMSAzIDggMTMtMTQ2IDQ2LTE1OCAzNHptMjYtMTkyYzEzLTQgNTctMTEgOTgtMTUgNzAtNiA3NC01IDU1IDEwLTIwIDE2LTE5IDE2IDUgOSA0Mi0xMSA4MC0yNyA4MC0zNCAwLTgtMTEyLTQxLTE0MC00MS0xMSAwLTIwLTctMjAtMTVzLTUtMTUtMTEtMTUtOSA5LTYgMjBjNCAxNiAxIDIwLTEzIDE4LTE5LTMtMTEwIDQ5LTExMCA2MyAwIDExIDMyIDExIDYyIDB6bTExMy0xMjhjNTEtNyA2NS0xOSA2NC01MmwtMS0yNi03IDI0Yy04IDMwLTI0IDM2LTQxIDE2LTE4LTIxLTM1LTE5LTUzIDgtMTQgMjItMTUgMjItMzUgMy0yNC0yMS01Ny0xNS00OCA5IDMgOCAxIDE1LTUgMTVzLTggNC00IDljNSA5IDM4IDggMTMwLTZ6TTI1MiA5MjRsNC0zNS0xOSAyM2MtMTAgMTMtMTYgMTctMTIgMTEgMy03IDEtMTMtNS0xMy03IDAtMjAtMTAtMzEtMjItMjMtMjktMjUtMTIzLTUtMTkzIDgtMjYgMTQtNTMgMTMtNTktMS01IDMtMTAgOS0xMSAxMSAwIDc0LTU5IDc0LTcwIDAtNCA2LTEzIDE0LTIwIDEyLTEyIDE1LTEyIDIwIDEgMyA4LTEgMTctOSAyMS05IDMtMTQgMTMtMTMgMjIgMiAxMC0zIDE1LTE1IDE0LTE0LTEtMTcgNC0xNCAxOCAzIDEwIDEgMjItNSAyNS01IDMtNyAxMi00IDE5IDIgNy0yIDE2LTkgMTktOCAzLTEyIDE0LTEwIDI2IDIgMTEtMSAyMC03IDIwcy01IDcgMyAxN2MxMiAxNSAxMiAxNi0zIDEwLTIxLTctMjQgMTMtNiAzMSA2IDYgMTIgMjEgMTMgMzIgMiAxOSAwIDE5LTI0IDUtMTUtOS05LTEgMTQgMjAgMjIgMjAgMzYgMzUgMzAgMzQtMjYtNC00MiAyLTQyIDE2IDAgMTggMiAxOCAyNyAzIDIxLTEzIDI3LTExIDMwIDEyIDUgMzIgMCA2MC0xMSA2MC03IDAtMTAtMTQtNy0zNnpNMzYzIDQ5MGMwLTE5IDItMjkgNC0yMiAzIDYgOCAxMCAxMyA3IDQtMyAxMyAyIDE5IDkgMTAgMTIgOSAxNC02IDEyLTEwLTItMjEgNC0yNCAxMy00IDktNyAxLTYtMTl6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM2OTcxNzVcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE5NDMgMjcwNGMwLTE1IDQ4LTI5IDU2LTE2IDMgNCAxNCAxMSAyNCAxNSAxNCA1IDE3IDEgMTctMjMgMC0xOSA2LTMxIDE4LTM0IDMyLTEwIDcyIDUgNzIgMjcgMCA2LTYgMi0xNC05LTE0LTE4LTE1LTE4LTEzIDQgMSAxMiA1IDIyIDkgMjJzNSA2IDIgMTRjLTggMjAtMTcxIDE5LTE3MSAwek0yMTUwIDI2NzdjLTE4LTM3LTE1LTY3IDYtNjcgMTAgMCAxNCAxMyAxNCA1MCAwIDI4LTEgNTAtMiA1MC0yLTEtMTAtMTUtMTgtMzN6TTI1NSAyNjc2Yy0yLTExLTYtMzQtOS01MS0zLTE2LTgtNDMtMTEtNjAtNS0yMy00LTI2IDQtMTUgOCAxMiAxMSA4IDExLTE3IDAtMjggNC0zMyAyMy0zMiAxNiAxIDE4IDIgNSA2LTM1IDktMTggMjQgMjAgMTcgMzQtNyAzNi02IDIzIDktNyAxMC0xMCAxNy02IDE3IDUgMCAxIDgtNyAxOC0yMCAyMy0zMCA1Mi0xOCA1MiA2IDAgMTAtNSAxMC0xMSAwLTUgNC03IDEwLTQgNSAzIDEyLTYgMTYtMjAgMy0xNCA5LTI0IDEyLTIxcy0zIDMyLTEzIDY1Yy0xNCA0OC0yMiA2MC00MSA2NC0xOSAzLTI1LTEtMjktMTd6TTE5NTUgMjY1MGMyOC0xMiAzNy0xMiAzMCAwLTMgNi0xNiAxMC0yOCA5LTIxIDAtMjEtMS0yLTl6TTIwNDAgMjYyMWMwLTEwIDMwLTI0IDM3LTE3IDMgMi01IDktMTYgMTYtMTIgNi0yMSA3LTIxIDF6TTE5OTkgMjU5MGMzNS0xNyA2Ni0yOCA2OS0yNSA1IDUtNjcgMzgtMTA4IDQ5LTE0IDQgNC03IDM5LTI0ek0yMTU3IDI0OThjLTItNy00LTI4LTMtNDYgMS0xNy0xLTMyLTQtMzJzLTExLTE5LTE3LTQyYy0xMC0zNy0xMC00NSA0LTU1IDI2LTIwIDMzIDEgMzIgMTAwLTEgODctMyA5OC0xMiA3NXpNMTk0MiAyNDY4Yy03LTctMTItMTktMTItMjcgMC0xOSAyMyAxIDI2IDI0IDMgMTggMSAxOC0xNCAzek0yNTkgMjQ0MWMtMS0xMi0yLTMxLTMtNDMgMC0xMy0xMS0yNy0yMy0zMy0yNS0xMS0zMi0yOC04LTE5IDEwIDQgMTUgMCAxNS0xMiAwLTE1IDItMTYgOS01IDYgMTAgMTItMyAxOC00MGw5LTU0IDExIDM3YzYgMjEgMTAgNDkgOSA2My0yIDE0IDEgMjUgNSAyNSAxMCAwLTEwIDQxLTI1IDUxLTUgNC02IDE0LTMgMjMgMyA4IDIgMTgtMyAyMS02IDQtMTEtMy0xMS0xNHpNNDM2IDI0NDRjLTktMjUtNy02NCA0LTY0IDYgMCAxMCAxOCAxMCA0MCAwIDQzLTQgNTAtMTQgMjR6TTU5MCAyNDA2YzAtMTAgNDAtNzYgNDYtNzYgMyAwLTIgMTItMTAgMjgtMjIgNDAtMzYgNTgtMzYgNDh6TTEyNjAgMjM1M2MtMzItNi01MS0yMy0yNC0yMiAxMCAwIDQwIDQgNjcgOCAyNiA0IDQ3IDQgNDcgMHMtMjEtMTEtNDctMTVjLTc0LTExLTk3LTIzLTQzLTIyIDY3IDAgOTUgMTAgOTggMzYgMyAyMC0xIDIyLTM1IDIxLTIxLTEtNDktNC02My02ek0xODkgMjMzMGMtMS01LTItMTQtMy0xOSAwLTUtNC0xMy04LTE3LTUtNC04LTEyLTgtMTggMC03IDMtNyAxMCAwIDEyIDEyIDI0IDY0IDE1IDY0LTMgMC02LTQtNi0xMHpNMTExNSAyMzMwbC00MC03IDQyLTJjMjMgMCA0NSA0IDQ4IDkgMyA2IDMgOS0yIDktNC0xLTI2LTUtNDgtOXpNMTExNSAyMjkwbC0zMC04aDMwYzE3IDAgMzkgMyA1MCA4bDIwIDktMjAtMWMtMTEgMC0zMy00LTUwLTh6TTEzNCAyMjU2Yy0zLTgtMTItMTItMjAtOS05IDMtNS0xMCAxMS0zOSAxNy0zMCAyMS00OCAxNS01OC0xNC0yMi0xMi0zMyA0LTE4IDggNyAxMiAxNiAxMCAxOS0yIDQgNyA2IDIxIDUgMTQgMCAyNS0xIDI1LTFzLTQtMTQtOS0zMS01LTM3IDAtNDUgMy0xNi00LTIxYy04LTUtOC0xMyAyLTMyIDgtMTQgMTgtMjMgMjItMjAgNSAzIDYtMSAzLTlzMi0yMCAxMS0yN2M4LTcgMTUtMTcgMTUtMjIgMC0xOSAzOS00OSA2OC01M2wzMS00LTI1IDY3Yy0xNCAzNy00MyA5Ny02NCAxMzQtMjIgMzYtNDAgNzItNDAgNzggMCA3LTExIDI2LTI1IDQycy0yMyAzNC0yMCAzOWM0IDUtMiA2LTExIDItMTItNC0xNS0zLTEwIDUgNCA3IDUgMTIgMSAxMi0zIDAtOC02LTExLTE0em05MS0xNzVjLTItNSA3LTE5IDIwLTMxIDI4LTI3IDM0LTQ5IDgtMjktMTAgNy0zLTIgMTUtMjAgNDAtNDIgNDEtNTYgMi0zNi0xNiA4LTI5IDE5LTI4IDIzcy0zIDE3LTEwIDMwYy03IDEyLTkgMjItNSAyMnMyIDUtNSAxMmMtMTUgMTUtMTYgNTItMiA0MyA2LTQgOC0xMCA1LTE0ek02ODQgMjI0NWMxMS04IDI0LTE1IDMwLTE1IDUgMCAxIDctMTAgMTUtMTAgOC0yMyAxNC0yOSAxNC01IDAtMS02IDktMTR6TTE2NTAgMjE0MGM2LTExIDgtMjAgNS0yMHMzLTEwIDE1LTIyYzExLTEyIDIwLTI4IDIwLTM1IDAtMjIgNDQtMTA3IDY1LTEyNCAxOS0xNiAxOS0xOC0xOC01OC0yMC0yMy0zNy00NC0zNy00OHMxOSAxNCA0MyA0MWMzOSA0NSA0NCA0OCA1OSAzMyA4LTkgMTgtMTMgMjItMTAgMyA0IDYgMSA2LTUgMC03IDMtMTEgOC05IDQgMSAyNi02IDQ5LTE2IDQ5LTIzIDQ4LTM5LTUtODhsLTM2LTM0IDMyIDQwYzE4IDIyIDMyIDQ2IDMyIDU1IDAgOC04IDItMTktMTUtMTktMzAtOTEtMTA0LTkxLTkzIDAgMyAxNiAyMyAzNSA0NHMzNSA0MSAzNSA0NmMwIDYtNzUtNzItODctOTEtMi0yLTYtMS0xMCAyLTMgNCA0IDIwIDE4IDM1IDEzIDE1IDAgMy0yOC0yNy0yOS0zMC01Ni01Mi01OS00OC0xMCAxMC00NS0xMy0zOC0yNSA0LTUgMC0xNC03LTE5LTIwLTEzLTMxLTExLTIzIDQgNSA4IDIgOC05LTItMTktMTUtMjMtMjYtNS0xNSA4IDUgOSAyIDUtMTAtNS0xMyAxMC05IDYwIDIwIDM4IDIwIDcxIDQyIDc1IDQ4czEyIDEyIDE4IDEyYzUgMSAxNCAyIDE4IDMgNSAwIDE3IDkgMjggMTkgMTAgOSAyOCAxNyAzOSAxOCAyNyAxIDE2NyA3MCAxOTQgOTUgMjYgMjQgMjcgNDggNCA1NS0xMCA0LTMzIDEzLTUyIDIxLTE4IDgtMzkgMTYtNDUgMTgtMjMgNS05MCAzNC0xNDAgNjItMjkgMTUtMzAgMTUtNTEtMTEtMjUtMzItMjktMzItMzItMy02IDY0LTQwIDE1MS02NyAxNjktMjMgMTYtMzcgOS0yNi0xMnptOTYtNDM5Yy0xNi0xNy0zOC0yOC01My0yOC0xNiAwLTIxIDItMTIgNyA2IDUgMTcgNiAyNCA0IDYtMyAyMiA3IDM1IDIxczI2IDI1IDI5IDI1YzIgMC04LTEzLTIzLTI5ek04MzEgMjEzNWMtMS0xNCAxMi0zMCAyNS0zMiA2LTEgMTEgNSAxMSAxM3MtNiAxMy0xMyAxMC0xNSAwLTE4IDdjLTIgNy01IDgtNSAyek04ODMgMjEyNmM0LTEwIDctMjIgNy0yN3M1LTkgMTEtOWMxNSAwIDcgNDMtMTAgNDgtMTAgMy0xMiAwLTgtMTJ6TTEyODAgMjA3OWMwLTE5IDQtNDEgOS00OCA2LTEwIDggMSA0IDMwLTcgNTUtMTMgNjMtMTMgMTh6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTMxNyAxOTMyYzMtMjM4IDUtMjc5IDE0LTI5NCA1LTcgOS05IDktNCAwIDYgNiAyIDEzLTggMTMtMTcgMTYtMTcgNDUgMTUgMTkgMjEgMzAgNDEgMjYgNTEtMyAxMCA0IDIyIDE4IDMyIDI2IDE5IDE5IDIxLTE2IDUtMjEtMTAtMjMtMTUtMTUtMzIgOC0xNCA3LTIzLTMtMzMtMTItMTItMTQtOC0xMiAyOCAxIDI0IDIgNTYgMyA3MSAxIDE2IDUgMjYgMTAgMjMgNS00IDEyIDAgMTQgNiA0IDkgNiAxMCA2IDEgMS02LTMtMTUtOS0xOC01LTMtMTAtMTMtMTAtMjIgMC0xMSA2LTE0IDIzLTkgMzIgOCAxMjcgNTIgMTU3IDczIDIxIDE1IDE5IDExLTktMjItMTgtMjItNjAtNjgtOTMtMTAyLTc2LTc5LTY5LTgyIDktNSA1NyA1NSAxNzIgMTgwIDE0MyAxNTUtMTYtMTUtMzQtMTctMjYtNCAzIDUtMjAtMi01Mi0xNS0zNy0xNi03NS0yMy0xMDgtMjJsLTUxIDEgMyA0MGMyIDIyIDAgNDUtMyA1MS00IDYtNiAzNi01IDY2cy00IDc1LTExIDEwMGMtMTIgMzktMTggNDUtNDMgNDdsLTI5IDEgMi0xNzZ6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTQyNCAyMDg3YzMtMTAgNi0yNyA2LTM4IDAtMTAgNS0xOSAxMC0xOSAxMiAwIDIgNTAtMTMgNjUtNyA3LTggNC0zLTh6TTE4MzAgMjA2OWMwLTUgNi05IDE0LTlzMTctNiAxOS0xMmM0LTggNi03IDYgMyAxIDktOCAxOS0xOSAyMnMtMjAgMS0yMC00ek0xODIwIDIwMjljMTQtMTMgNjQtMzkgNzUtMzkgMyAwIDUgNCA1IDhzLTE3IDE0LTM3IDIyYy0yMSA4LTQyIDE3LTQ4IDE5LTUgMi0zLTIgNS0xMHpNMTkzNCAyMDIxYzExLTEyIDI3LTIxIDM3LTIxczIxLTQgMjQtMTBjMy01IDI0LTE0IDQ2LTIwczQ3LTE0IDU2LTE3YzExLTQgMTQtMiA5IDUtNCA3LTE0IDEyLTIzIDEyLTE2IDAtNzcgMjUtMTM4IDU2bC0zMCAxNiAxOS0yMXpNMjAwNiAyMDI4YzMtNSA4LTcgMTEtNHMxNS0xIDI3LTljMTEtOCAyNy0xNSAzNi0xNCA4IDAtMSA4LTIwIDE3LTQ0IDE5LTYyIDIzLTU0IDEwek0xOTI0IDE5NzVjMTEtOCAyNi0xNSAzMy0xNXMyMS00IDMxLTEwYzMxLTE4IDEwMi0zOCAxMDItMjkgMCA1LTUgOS0xMSA5LTEwIDAtMjIgNS0xMDQgNDAtMTYgNy0zOSAxNS01MCAxNy0yMCAzLTIwIDMtMS0xMnpNMTYxOCAxOTE4Yy01My0zNS00NC0zNiAxOC0zIDU2IDMwIDU4IDMyIDM5IDMyLTggMC0zNC0xMy01Ny0yOXpNMTcyNiAxOTMzYy00LTUtMTEtOC0xNC04LTQtMS0yMC05LTM3LTE5LTI5LTE3LTI3LTE3IDI1LTFsMjUgOC0yMC0yNGMtMTEtMTMtMjItMjYtMjUtMjlzLTIxLTI1LTM5LTUwLTc0LTg0LTEyNS0xMzJjLTUwLTQ5LTg3LTg4LTgyLTg4IDE1IDAgMTU2IDE0MiAyMTkgMjIwIDMzIDQxIDY5IDgzIDgwIDkzIDEzIDEyIDE3IDIxIDEwIDI4LTUgNS0xMyA2LTE3IDJ6TTMwMCAxODgwYzAtNSA1LTEwIDEwLTEwIDYgMCAxMC03IDEwLTE1czQtMTUgOS0xNWMxNCAwIDE4LTMxIDEwLTYyLTctMjYtNi0yNiAxOC0xNSAxNCA2IDIxIDEzIDE2IDE0LTE1IDUtMyA1NiAxNiA3MiAxNCAxMiAxMyAxMy0xMCA3LTE5LTQtMzEgMC00NCAxNC0yMCAyMi0zNSAyNi0zNSAxMHpNMTYwNiAxODc1Yy0xMS04LTI3LTE1LTM1LTE1LTkgMC0yNy05LTQxLTIwLTE4LTE1LTIwLTE4LTYtMTMgMzUgMTIgMTE2IDUzIDExNiA1OCAwIDktMTUgNS0zNC0xMHpNMTQzOCAxODIzYzEyLTIgMzAtMiA0MCAwIDkgMy0xIDUtMjMgNC0yMiAwLTMwLTItMTctNHpNMTU4NSAxNzA3Yy0xMDMtMTA2LTEwMC0xMDggOC03IDQyIDM5IDExNSAxMjIgMTA1IDExOS0xIDAtNTItNTEtMTEzLTExMnpNMTQ5MCAxNzQ1Yy0xMy0xNC0yMS0yNy0xOC0zMCAyLTMgMTcgOSAzMyAyNSAxNiAxNyAyNCAzMCAxOSAzMC02IDAtMjEtMTEtMzQtMjV6TTM2MCAxNzUxYzAtMTcgMjktMjAgNDItMyAxMiAxNSAxMSAxNi00IDMtMTItOS0xOC0xMC0xOC0yIDAgNi00IDExLTEwIDExLTUgMC0xMC00LTEwLTl6TTE1NDAgMTU1OGMtMTQtNS01OC0xMC05OS0xMC01NCAwLTcwLTMtNjItMTEgMTctMTcgMTQtNDAtNC0zMy0xMyA1LTM1LTMtNjUtMjItMi0yIDItNyA5LTEyIDExLTYgOS0xMy0xMS0zMy0yNy0yNy0yNy00MCAwLTMwIDEwIDQgMTMgMiA4LTUtMTMtMjEgMTItMTMgMzkgMTIgMTggMTcgMjIgMjYgMTMgMjktOSA0LTkgNi0xIDYgMzQgMiAyMS01NC0xNi02OC0xNy02LTIwLTEwLTgtMTAgMjAtMSAyMy0yOSA0LTM3LTctMi0xMy0xMy0xNC0yMi0xLTE1IDctMTkgNDEtMjEgNTQtMiA4OCAyMyAxMDUgNzkgNyAyMyAzMiA2NyA1NSA5OCA2NiA4NiA2NyAxMTYgNiA5MHpNNDg4IDEyNjNjLTE2LTMtMjgtOS0yOC0xNHMtMTAtOS0yMy05Yy0xNyAwLTMwLTE0LTU1LTU5LTE3LTMyLTM5LTY0LTQ3LTcxLTktNy0yNS0yNi0zNi00MmwtMjAtMjhoMjFjMTIgMCAxOSA0IDE2IDlzMiAxNSAxMSAyMmMxNCAxMiAxNiAxMiAxMS0xLTMtOC0xMy00Ni0yMy04NS0yMS04NC0xMi0xMjAgMzItMTI4IDM0LTYgODgtMjQgMTI2LTQzIDE2LTggMzUtMTQgNDMtMTQgMTMgMCA0NC00OCA0NC02OSAwLTYtOS0xOS0yMS0zMC0xMy0xMi0xNy0yMS0xMC0yNiA2LTMgMTEtMTUgMTEtMjYgMC0xMCA0LTE5IDktMTkgNCAwIDI4LTE3IDUyLTM4IDU4LTUyIDgzLTY0IDExNC01NiAyOSA3IDI4IDI3LTEgMzMtMTAgMi0zMSAxMy00NSAyNi0zNSAyOS0yMyA1NyAyMSA0OCAxOS0zIDMwLTEgMzAgNiAwIDYtNCAxMS05IDExcy0xNyAxMi0yNiAyN2MtMTggMjYtMTggMjcgMTQgNTUgMjQgMjIgNDEgMjggNzQgMjcgMjMgMCAzNi0zIDI5LTYtMjUtMTAgMS0yMyA0OC0yMyAzOSAwIDQ4LTMgNDQtMTQtNy0xOS03Ni00Ni0xMTQtNDYtMzMgMC00MS0xNy0xMi0yNiA5LTMgMjUtMTAgMzQtMTUgMzEtMTYgODQtMTAgMTAzIDExIDEwIDExIDI4IDIwIDQwIDIwIDE1IDAgMzIgMTQgNTEgNDIgMjYgMzcgMjkgNDkgMjkgMTIyLTEgNDUtNCA5Ni03IDExNC00IDE5LTIgMzIgNCAzMnM4IDE0IDMgMzZjLTkgNTItMjUgODMtNDcgOTAtMTAgMy0xNiA4LTE0IDEycy0yNiA4LTYzIDEwYy01NiAyLTY5IDYtODYgMjctMTIgMTQtMjYgMjUtMzEgMjUtNiAwLTE5IDktMzAgMjEtMjIgMjUtNjkgNTEtNzcgNDMtMy0zLTE2IDAtMjkgNy0yMyAxMy0xMTEgMTktMTYwIDEyem00NC0xNzJjMTMtNCA1Ny0xMSA5OC0xNSA3MC02IDc0LTUgNTUgMTAtMjAgMTYtMTkgMTYgNSA5IDQyLTExIDgwLTI3IDgwLTM0IDAtOC0xMTItNDEtMTQwLTQxLTExIDAtMjAtNy0yMC0xNXMtNS0xNS0xMS0xNS05IDktNiAyMGM0IDE2IDEgMjAtMTMgMTgtMTktMy0xMTAgNDktMTEwIDYzIDAgMTEgMzIgMTEgNjIgMHptMTEzLTEyOGM1MS03IDY1LTE5IDY0LTUybC0xLTI2LTcgMjRjLTggMzAtMjkgMzktMzcgMTctOC0yMC01NC0yMS01NC0yIDAgMjQtMjAgMjktNDAgMTEtMjItMjAtNTUtMTMtNDYgMTAgMyA4IDEgMTUtNSAxNXMtOCA0LTQgOWM1IDkgMzggOCAxMzAtNnpNMTEwNSAxMDYzYy0xMS0xMS0zMC0yNC00Mi0yNy0xNy01LTIzLTE1LTIzLTM2IDAtMjQgNS0zMCAzMC0zNSAzNy04IDY4LTQ5IDUyLTY4LTctOC05LTI5LTUtNTIgNC0yNyAzLTM2LTUtMzEtMTYgOS0xNS03IDAtMjIgMjgtMjggMzctMTMgNDAgNzFsMyA4MiAyOC01NWMxOS0zOCAyNS00NiAyMS0yNS00IDE3LTE1IDQ0LTI1IDYxLTIzIDM4LTI2IDY2LTQgMzggMTQtMTcgMTUtMTYgMSAxMy05IDE3LTIxIDMzLTI3IDM1cy0xNCAxOS0xOCAzOGwtNyAzNC0xOS0yMXpNMjI1IDkyM2MzLTcgMS0xMy01LTEzLTcgMC0yMC0xMC0zMS0yMi0yMy0yOS0yNS0xMjMtNC0xOTMgOC0yNyAxMi01MiA5LTU3LTMtNCAwLTggNy04IDEyIDAgNzktNjQgNzktNzUgMC00IDYtMTMgMTQtMjAgMTItMTIgMTUtMTIgMjAgMSAzIDgtMSAxNy05IDIxLTkgMy0xNCAxMy0xMyAyMiAyIDEwLTMgMTUtMTUgMTQtMTQtMS0xNyA0LTE0IDE4IDMgMTAgMSAyMi01IDI1LTUgMy03IDEyLTQgMTkgMiA3LTIgMTYtOSAxOS04IDMtMTIgMTQtMTAgMjYgMiAxMS0xIDIwLTcgMjBzLTUgNyAzIDE3YzEyIDE1IDEyIDE2LTMgMTAtMjEtNy0yNCAxMy02IDMxIDYgNiAxMiAyMSAxMyAzMiAyIDE5IDAgMTktMjQgNS0xNS05LTktMSAxNCAyMCAyMiAyMCAzNiAzNSAzMCAzNC0yNi00LTQyIDItNDIgMTYgMCAxOCA5IDE5IDI1IDMgMjEtMjEgMjEtNCAwIDIyLTExIDE0LTE3IDE5LTEzIDEzek0xMjQ2IDc2OGMzLTQtMi04LTEwLTgtMTAgMC0xMy02LTEwLTE1IDQtOCAxMC0xMyAxNC0xMCA1IDMgMy04LTMtMjQtOS0yNS0xNC0yOC0yOS0yMC0xMyA3LTE4IDYtMTYtMyAyLTctNC0xMi0xMi0xMC0xMyAyLTEzIDEgMC0xMCA4LTcgMTQtMjMgMTItMzUtMi0xNi0xMS0yMy0zNS0yNS0zMC0zLTMyLTUtMjktMzggMi0yOSAwLTMyLTgtMTctNiA5LTE3IDE3LTI1IDE3cy0xOSA5LTI1IDIxYy0xMCAxOC0yNSAxOS0yNSAxIDAtNC0zLTEyLTctMThzLTMtMjYgMi00NWMxMi00MiAxMi03MiAwLTQxLTYgMTMtMTggMjItMzEgMjItMTUgMC0xOSA0LTE1IDE2IDMgOSAyIDEyLTUgOS02LTQtOC0xMy01LTIxczItMTMtMi0xM2MtMjkgNS0zNy0zLTM3LTQwLTEtMzQgMS0zNyAxMi0yMyAxMiAxNiAxMyAxNiA3IDAtOC0yMyAxOC0yNCAzNi0zIDcgOCAyMSAxNSAzMiAxNSAyMiAwIDI1IDctMjgtNzUtMzQtNTIgMTMtMjIgNjIgNDBsMTYgMjAtNy0yMGMtMTUtNDUtMTYtNDktMi0yNSA4IDE0IDE4IDM5IDIxIDU2IDQgMTcgMjYgNTIgNTAgNzYgNTAgNTIgOTMgMTI1IDEwOSAxODYgNiAyMyAxNSA0MiAxOSA0MnM1IDYgMiAxM2MtMyA4LTExIDE0LTE5IDE0cy0xMi00LTktOXptLTE2MS0yMDJjMTQtOCAyMi0xNyAxNi0yMC01LTQtMTMtMS0xNyA1LTQgOC05IDctMTUtMi02LTExLTExLTExLTIwLTItNiA2LTggMTYtNSAyMiA5IDE0IDggMTQgNDEtM3pNMTYwIDQ5OGMwLTMgNy0xOCAxNS0zNCAxMC0yMSAxMS0zMSAzLTQxcy04LTI4IDEtNjZjMTItNTQgNzItMTgzIDgxLTE3NiAzIDIgMjQtMTAgNDUtMjcgNTAtMzkgNzMtNTEgMTQzLTc1IDE2NC01NiAzMTAtMzcgNDIxIDU2IDMzIDI4IDQyIDI0IDE1LTZzMTEtMTggNDQgMTRjMjYgMjUgNDQgODYgMjIgNzItNi0zLTEwLTE3LTEwLTMwcy01LTI3LTEwLTMwYy02LTQtMTAgOS0xMCAzMiAwIDI4LTMgMzQtMTAgMjMtOC0xMi0xNC0xMC0zNyAxNi0zNCAzOC0xMDIgNTQtMjMyIDU0LTg0IDAtODctMS0xNTYtNDUtODQtNTMtODktNTEtMTUyIDUxLTIzIDM4LTYyIDg4LTg3IDExMXMtNDYgNDYtNDYgNTNjMCA2LTkgMjAtMjAgMzJzLTIwIDE5LTIwIDE2ek0yNzAgMTYzYzAtMTYgNjMtNjkgMTEwLTkzIDIyLTExIDQwLTE4IDQwLTE1IDAgMi0xNSAxMi0zMiAyMS0xOCA5LTUyIDM1LTc1IDU3LTI0IDIzLTQzIDM2LTQzIDMwelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTc4NSA1NWMtMjktMTQtODYtMjgtMTM1LTM0bC04NS0xMCA4NCA0YzYwIDMgOTggMTEgMTM3IDI5IDMwIDE0IDU0IDI3IDU0IDMwIDAgNyA1IDktNTUtMTl6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM5YjVhNWZcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTQ4OCAxMjYzYy0xNi0zLTI4LTktMjgtMTRzLTctOS0xNi05Yy0yMSAwLTM4LTE4LTc4LTg3LTE5LTMyLTQ0LTY2LTU1LTc1LTI1LTIxLTI3LTM4LTUtMzggOCAwIDEzIDQgMTAgOXMyIDE1IDExIDIyYzE0IDEyIDE2IDEyIDExLTEtMy04LTEzLTQ3LTIyLTg1LTIxLTg1LTEyLTEyMCAzMS0xMjggMzQtNiA4OC0yNCAxMjYtNDMgMTYtOCAzNS0xNCA0My0xNCAxMyAwIDQ0LTQ4IDQ0LTY5IDAtNi05LTE5LTIxLTMwLTEzLTEyLTE3LTIxLTEwLTI2IDYtMyAxMS0xNSAxMS0yNiAwLTEwIDQtMTkgOS0xOSA0IDAgMjgtMTcgNTItMzggNTgtNTIgODMtNjQgMTE0LTU2IDI5IDcgMjggMjctMSAzMy0xMCAyLTMxIDEzLTQ1IDI2LTM1IDI5LTIzIDU3IDIxIDQ4IDE5LTMgMzAtMSAzMCA2IDAgNi00IDExLTkgMTFzLTE3IDEyLTI2IDI3Yy0xOCAyNi0xOCAyNyAxNCA1NSAyNCAyMiA0MSAyOCA3NCAyNyAyMyAwIDM2LTMgMjktNi0yNS0xMCAxLTIzIDQ4LTIzIDM5IDAgNDgtMyA0NC0xNC03LTE5LTc2LTQ2LTExNC00Ni0zMyAwLTQxLTE3LTEyLTI2IDktMyAyNS0xMCAzNC0xNSAzMS0xNiA4NC0xMCAxMDMgMTEgMTAgMTEgMjggMjAgNDAgMjAgMTUgMCAzMiAxNCA1MSA0MiAyNiAzNyAyOSA0OSAyOSAxMjItMSA0NS00IDk2LTcgMTE0LTQgMTktMiAzMiA0IDMyczggMTQgMyAzNmMtMTUgODMtMzcgMTAwLTEzNyAxMTEtNDcgNS02MyAxMS03NSAzMC04IDEyLTIxIDIzLTI4IDIzLTYgMC0yMCA5LTMxIDIxLTIyIDI1LTY5IDUxLTc3IDQzLTMtMy0xNiAwLTI5IDctMjMgMTMtMTExIDE5LTE2MCAxMnptNDQtMTcyYzEzLTQgNTctMTEgOTgtMTUgNzAtNiA3NC01IDU1IDEwLTIwIDE2LTE5IDE2IDUgOSA0Mi0xMSA4MC0yNyA4MC0zNCAwLTgtMTEyLTQxLTE0MC00MS0xMSAwLTIwLTctMjAtMTVzLTUtMTUtMTEtMTUtOSA5LTYgMjBjNCAxNiAxIDIwLTEzIDE4LTE5LTMtMTEwIDQ5LTExMCA2MyAwIDExIDMyIDExIDYyIDB6bTExMy0xMjhjNTEtNyA2NS0xOSA2NC01MmwtMS0yNi03IDI0Yy04IDMwLTI5IDM5LTM3IDE3LTgtMjAtNTQtMjEtNTQtMiAwIDI0LTIwIDI5LTQwIDExLTIyLTIwLTU1LTEzLTQ2IDEwIDMgOCAxIDE1LTUgMTVzLTggNC00IDljNSA5IDM4IDggMTMwLTZ6TTEwNjggMTAzOGMtMjItOC0yOC0xNi0yOC0zOCAwLTI0IDUtMzAgMzAtMzUgMzctOCA2OC00OSA1Mi02OC03LTgtOS0yOS01LTUyIDQtMjcgMy0zNi01LTMxLTE2IDktMTUtNyAwLTIyIDI4LTI4IDM3LTEzIDQwIDcxbDMgODIgMjgtNTVjMTktMzggMjUtNDYgMjEtMjUtNCAxNy0xNSA0NC0yNSA2MS0yMyAzOS0yNiA2Ni0zIDM4IDE0LTE4IDE0LTE4IDMgNi0xNCAyOS00OCA2NC02OSA3Mi04IDMtMjcgMS00Mi00ek0yNTcgOTUzYy0xMS0xMC04LTUzIDMtNTMgNiAwIDEwIDE0IDEwIDMwIDAgMzEtMiAzNS0xMyAyM3pNMTI0NiA3NjhjMy00LTItOC0xMC04LTEwIDAtMTMtNi0xMC0xNSA0LTggMTAtMTMgMTQtMTAgNSAzIDMtOC0zLTI0LTktMjUtMTQtMjgtMjktMjAtMTMgNy0xOCA2LTE2LTMgMi03LTQtMTItMTItMTAtMTMgMi0xMyAxIDAtMTAgOC03IDE0LTIzIDEyLTM1LTItMTYtMTEtMjMtMzUtMjUtMzAtMy0zMi01LTI5LTM4IDItMjkgMC0zMi04LTE3LTYgOS0xNyAxNy0yNSAxN3MtMTkgOS0yNSAyMWMtMTAgMTgtMjUgMTktMjUgMSAwLTQtMy0xMi03LTE4cy0zLTI2IDItNDVjMTItNDIgMTItNzIgMC00MS02IDEzLTE4IDIyLTMxIDIyLTE1IDAtMTkgNC0xNSAxNiAzIDkgMiAxMi01IDktNi00LTgtMTMtNS0yMXMyLTEzLTItMTNjLTI5IDUtMzctMy0zNy00MC0xLTM0IDEtMzcgMTItMjMgMTIgMTYgMTMgMTYgNyAwLTgtMjMgMTgtMjQgMzYtMyAxMiAxNCA1MCAyMSA1MCAxMCAwLTMtMTQtMjQtMzAtNDctNDItNTctMjctNjMgMjItOCAzNCAzNyAzOSA0MSAzNCAyMC01LTE3LTQtMjAgMi0xMCA2IDggMTMgMjkgMTYgNDYgNCAxNyAyNiA1MiA1MCA3NiA1MCA1MiA5MyAxMjUgMTA5IDE4NiA2IDIzIDE1IDQyIDE5IDQyczUgNiAyIDEzYy0zIDgtMTEgMTQtMTkgMTRzLTEyLTQtOS05em0tMTYxLTIwMmMxNC04IDIyLTE3IDE2LTIwLTUtNC0xMy0xLTE3IDUtNCA4LTkgNy0xNS0yLTYtMTEtMTEtMTEtMjAtMi02IDYtOCAxNi01IDIyIDkgMTQgOCAxNCA0MS0zelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgIGZpbGw9XCIjNTk4MjkxXCJcbiAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgIGQ9XCJNNjI4IDEzYzEyLTIgMzAtMiA0MCAwIDkgMy0xIDUtMjMgNC0yMiAwLTMwLTItMTctNHpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM5ZDc4NmJcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE0NiAyMjI1YzQtOSAyMC0zMSAzNi00OGwyOS0zMi0xMyAzNGMtOCAxOS0yNCA0MS0zNiA0OS0yMCAxMy0yMiAxMy0xNi0zek0xNjYzIDIxMTNjMTQtMjcgMzMtNjggNDMtOTJzMjctNTUgMzctNjhjMjItMjcgMTc0LTEwNyAyMjctMTE4IDE5LTQgMzgtMTIgNDEtMTcgOC0xMyA3MSA0MiA2NyA1OS0yIDgtMzQgMjYtNzMgMzktMzggMTQtMTAxIDQwLTE0MCA2MGwtNzAgMzUtMjAtMjZjLTI1LTMxLTMwLTMxLTMxLTItNSA3My01NyAxNzctOTAgMTc3LTEyIDAtMTEtOSA5LTQ3elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTIxMCAyMTM2YzAtMyAyMC00NSA0NS05MiAyNS00NiA0NS04NyA0NS04OSAwLTE0LTI2LTEtNTEgMjYtMzUgMzctMzYgMzQtNi0yNCAyMS00MSA5Ny0xMjAgOTctMTAwIDAgNS0zIDEzLTcgMTYtMyA0LTcgMTgtOSAzMS01IDQ4LTExNCAyNzAtMTE0IDIzMnpNMTMxOSAyMDk3di0xOTdjMi0xODEgOC0yNzYgMTktMjY2IDMgMyAxMC0xIDE2LTEwIDEwLTEzIDE2LTkgNDYgMjMgMTkgMjEgMjYgMzAgMTQgMjAtMjYtMjItMzctMjItMjUgMSAxMyAyNCAxMyAyODMtMSAzNjctOCA1Mi0xMyA2NS0xOSA1MHMtOC0xNi04LTRjLTEgMTktNDEgMzMtNDIgMTZ6TTE4MjcgMjAyNWMyNC0xNyA3My0zNyA3My0zMCAwIDYtNzYgNDUtODcgNDUtNCAwIDItNyAxNC0xNXpNMTkzNSAyMDIxYzEzLTEyIDEzNi02MyAxNDEtNTggMiAyLTMxIDE4LTc0IDM1LTQyIDE4LTcyIDI4LTY3IDIzek0xOTEwIDE5ODZjMC02IDE1Ny02NiAxNzItNjYgMTEgMS0xNTYgNzAtMTY4IDcwLTIgMC00LTItNC00ek0xNjkwIDE5MTVjLTI1LTEzLTQyLTI0LTM5LTI0IDEzLTIgNzggMjkgODQgMzkgOCAxMiAxMCAxMy00NS0xNXpNMTU3MyAxODYxYy0yOC0xNC01NS0zMC01OS0zNC0xMS0xMCA4NiAzMiAxMTEgNDkgMzAgMjEgNiAxNC01Mi0xNXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNTU1IDE4MTljLTI3LTEwLTY2LTE4LTg2LTE5LTI4IDAtMzktNi00OS0yNS03LTE0LTEwLTI4LTctMzIgOS04IDEzMyA0MiAxNjUgNjcgMTMgMTEgMjkgMTcgMzUgMTMgNi0zIDctMSAzIDUtNCA3LTggMTEtOSAxMS0xLTEtMjQtMTAtNTItMjB6TTE0NDMgMTgyM2M5LTIgMjUtMiAzNSAwIDkgMyAxIDUtMTggNXMtMjctMi0xNy01ek0xNTcwIDE3NzVjLTEzLTE0LTE5LTI1LTE0LTI1IDggMSA1MCA1MCA0MSA1MC0yIDAtMTQtMTEtMjctMjV6TTE0OTEgMTc0NWMtMTMtMTQtMjItMjgtMTktMzAgMy0zIDE3IDggMzEgMjUgMzMgMzYgMjIgNDAtMTIgNXpNMTQyMSAxNzI2Yy0xMy03LTE5LTE2LTE0LTE5IDYtNCAxOCAyIDI4IDEzIDIxIDIzIDE5IDI0LTE0IDZ6TTE0OTUgMTY5OGwtNDAtNDMgNDMgNDBjMzkgMzYgNDcgNDUgMzkgNDUtMiAwLTIxLTE5LTQyLTQyek00ODggMTI2M2MtMTYtMy0yOC05LTI4LTE0cy03LTktMTYtOWMtMjEgMC0zOC0xOC03OC04Ny0xOS0zMi00NC02Ni01NS03NS0xMi0xMC0yMS0yMi0yMS0yOCAwLTUgOS0xIDIxIDExIDExIDExIDIyIDE5IDI0IDE3cy01LTM4LTE2LTgxYy0yNS05My0xOC0xMjggMjctMTM4IDQwLTEwIDkzLTI4IDEyNy00NSAxNi04IDM1LTE0IDQzLTE0IDEzIDAgNDQtNDggNDQtNjkgMC02LTktMTktMjEtMzAtMTMtMTItMTctMjEtMTAtMjYgNi0zIDExLTE1IDExLTI2IDAtMTAgNC0xOSA5LTE5IDQgMCAyOC0xNyA1Mi0zOCA1OC01MiA4My02NCAxMTQtNTYgMjkgNyAyOCAyNy0xIDMzLTEwIDItMzEgMTMtNDUgMjYtMzUgMjktMjMgNTcgMjEgNDggMTktMyAzMC0xIDMwIDYgMCA2LTQgMTEtOSAxMXMtMTcgMTItMjYgMjdjLTE4IDI2LTE4IDI3IDE0IDU1IDI0IDIyIDQxIDI4IDc0IDI3IDIzIDAgMzYtMyAyOS02LTI1LTEwIDEtMjMgNDgtMjMgMzkgMCA0OC0zIDQ0LTE0LTctMTktNzYtNDYtMTE0LTQ2LTMzIDAtNDEtMTctMTItMjYgOS0zIDI1LTEwIDM0LTE1IDMxLTE2IDg0LTEwIDEwMyAxMSAxMCAxMSAyOCAyMCA0MCAyMCAxNSAwIDMyIDE0IDUxIDQyIDI2IDM3IDI5IDQ5IDI5IDEyMi0xIDQ1LTQgOTYtNyAxMTQtNCAxOS0yIDMyIDQgMzJzOCAxNCAzIDM2Yy0xNSA4My0zNyAxMDAtMTM3IDExMS00NyA1LTYzIDExLTc1IDMwLTggMTItMjEgMjMtMjggMjMtNiAwLTIwIDktMzEgMjEtMjIgMjUtNjkgNTEtNzcgNDMtMy0zLTE2IDAtMjkgNy0yMyAxMy0xMTEgMTktMTYwIDEyem0xNjUtMTUzYzEwIDAgNDEtMTAgNjgtMjEgNDgtMjEgNjQtMzkgMzMtMzktOCAwLTQwLTExLTcwLTI1LTMxLTE0LTU5LTIzLTY0LTIwLTQgMy0xMS0xLTEzLTctNC05LTgtMTAtMTQtMy00IDYtMzQgMjgtNjUgNDktNjAgNDEtNzEgNTYtNDAgNTYgMTAgMCAyMiA0IDI4IDkgMTIgMTIgOTYgMTkgMTA5IDkgNS01IDE3LTggMjgtOHptLTgtMTQ3YzUxLTcgNjUtMTkgNjQtNTJsLTEtMjYtNyAyNGMtOCAzMC0yOSAzOS0zNyAxNy04LTIwLTU0LTIxLTU0LTIgMCAyNC0yMCAyOS00MCAxMS0yMi0yMC01NS0xMy00NyAxMCA0IDEwIDEgMTItMTEgOC0xNS02LTE1LTQtNCA5IDEzIDE3IDMwIDE3IDEzNyAxek0xMDkwIDEwNDBjMC01LTEwLTEwLTIyLTEyLTE2LTItMjQtMTEtMjYtMjktMy0yMiAyLTI3IDI2LTMyIDQ1LTkgNjEtMzEgNTgtODAtNS03NS02LTc4LTE2LTcyLTUgMy0xMCAyLTEwLTQgMC0xMyA0MC0zNSA0OC0yNiA0IDMgMCAxMC04IDE1LTEyIDgtMTIgMTAtMSAxMCAyMCAwIDExIDEyMy0xMiAxNDgtOSAxMC0xNCAyMi0xMCAyNSAxMiAxMyAyMSA3IDMzLTIzIDctMTcgMTctMzMgMjItMzYgNi00IDUgMy0xIDE0LTE2IDMxLTEzIDQ5IDUgMjYgMTQtMTggMTQtMTggMyA2LTIxIDQzLTg5IDk3LTg5IDcwek0yNTggOTI1YzItMTQgNi0yNSA4LTI1czQgMTEgNCAyNS00IDI1LTkgMjVjLTQgMC02LTExLTMtMjV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTA2MCA5MTljNy0xMSAxNC0xOSAxNi0xNiA3IDctNyAzNy0xNyAzNy02IDAtNS05IDEtMjF6TTIxOSA5MTNjLTQ1LTEwLTYzLTEyMi0zNC0yMTggOC0yNyAxMi01MiA5LTU3LTMtNCAwLTggNy04IDEyIDAgNzktNjQgNzktNzUgMC00IDYtMTMgMTQtMjAgMTItMTIgMTUtMTIgMjAgMSAzIDgtMSAxNy05IDIxLTkgMy0xNCAxMy0xMyAyMiAyIDEwLTMgMTUtMTUgMTQtMTQtMS0xNyA0LTE0IDE4IDMgMTAgMSAyMi01IDI1LTUgMy03IDEyLTQgMTkgMiA3LTIgMTYtOSAxOS04IDMtMTIgMTQtMTAgMjYgMiAxMS0xIDIwLTcgMjBzLTUgNyAzIDE3YzEyIDE1IDEyIDE2LTMgMTAtMjEtNy0yNCAxMy02IDMxIDYgNiAxMiAyMSAxMyAzMiAyIDE5IDAgMTktMjQgNS0xNS05LTktMSAxNCAyMCAyMiAyMCAzNiAzNSAzMCAzNC0yNi00LTQyIDItNDIgMTYgMCAxOCA5IDE5IDI1IDNzMjMtNyA5IDEyYy03IDktMTkgMTQtMjggMTN6TTEyNTMgODE2YzAtMTggMy0yNCA5LTE4IDcgNyA3IDE2IDAgMjgtOCAxNC05IDEzLTktMTB6TTEyNDYgNzY4YzMtNC0yLTgtMTAtOC0xMCAwLTEzLTYtMTAtMTUgNC04IDEwLTEzIDE0LTEwIDUgMyAzLTgtMy0yNC05LTI1LTE0LTI4LTI5LTIwLTEzIDctMTggNi0xNi0zIDItNy00LTEyLTEyLTEwLTEzIDItMTMgMSAwLTEwIDgtNyAxNC0yMyAxMi0zNS0yLTE2LTExLTIzLTM1LTI1LTMwLTMtMzItNS0yOS0zOCAyLTI5IDAtMzItOC0xNy02IDktMTcgMTctMjUgMTdzLTE5IDktMjUgMjFjLTEwIDE4LTI1IDE5LTI1IDEgMC00LTMtMTItNy0xOHMtMy0yNiAyLTQ1YzEyLTQyIDEyLTcyIDAtNDEtNiAxMy0xOCAyMi0zMSAyMi0xNSAwLTE5IDQtMTUgMTYgMyA5IDIgMTItNSA5LTYtNC04LTEzLTUtMjFzMi0xMy0yLTEzYy0yOSA1LTM3LTMtMzctNDAtMS0zNCAxLTM3IDEyLTIzIDEyIDE2IDEzIDE2IDcgMC04LTIzIDE4LTI0IDM2LTMgMTcgMjAgNjAgMTkgNzUtMSAxMC0xNSAxMy0xMyAxOCAxMiAzIDE2IDI3IDUyIDUzIDc5IDQ2IDQ5IDExNCAxNzIgMTE0IDIwNyAwIDEwIDQgMTggMTAgMTggNSAwIDcgNiA0IDEzLTMgOC0xMSAxNC0xOSAxNHMtMTItNC05LTl6bS0xNjEtMjAyYzE0LTggMjItMTcgMTYtMjAtNS00LTEzLTEtMTcgNS00IDgtOSA3LTE1LTItNi0xMS0xMS0xMS0yMC0yLTYgNi04IDE2LTUgMjIgOSAxNCA4IDE0IDQxLTN6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTEyOCA2NDNjMTAtNCA5LTgtNS0xOS0yMC0xNS02LTE5IDE2LTUgMTUgMTAgNyAzMS0xMiAzMC04IDAtOC0yIDEtNnpNMzYzIDQ5OWMxLTI3IDE4LTMyIDM4LTEyIDkgOSA3IDExLTcgOS0xMS0yLTIyIDQtMjYgMTMtNCAxMS02IDctNS0xMHpNODcwIDQ3NmMwLTExLTUtMTYtMTQtMTMtOCAzLTE3IDAtMjAtOC02LTE3IDI1LTMwIDM0LTE0IDYgOCA5IDcgMTMtMiAzLTkgNi03IDYgNiAwIDExLTQgMjctOSAzNS04IDEzLTEwIDEyLTEwLTR6TTg5NyA0NjhjNy04IDEwLTE4IDYtMjEtMTAtMTAgMTAtOCAyNyAzczE0IDE1LTIwIDI1Yy0yMSA3LTIzIDYtMTMtN3pNMTA0MCA0MjVjLTctOC05LTE1LTQtMTVzLTItOS0xNi0yMGMtMTQtMTAtMjEtMjItMTctMjYgOC04IDQ0IDIyIDU4IDQ4IDEyIDIyLTUgMzItMjEgMTN6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiNiMjg1NWNcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE5OCA4NjNjLTI0LTYtMzMtNDgtMTktODAgNi0xNCA5LTM0IDUtNDUtNC0xNC0zLTE4IDYtMTMgNyA0IDEwIDIgOS02czAtMjEgNC0yOWMzLTggOC0yMiAxMS0zMHM0IDUgMyAzMC02IDQ4LTExIDUxYy01IDQtNyAxMy00IDIwIDMgOCA2IDE5IDggMjQgMSA2IDcgMTcgMTMgMjVzMiA2LTExLTRjLTI4LTI0LTI4LTEzLTEgMzAgMjEgMzQgMjAgMzYtMTMgMjd6TTEyMTQgNjY1YzMtOCAwLTE0LTYtMTItNyAxLTE0LTktMTctMjNzLTEyLTI1LTE4LTI2Yy0yNy0yLTMzLTQtMzItMTEgMS01IDAtMTEtMS0xNS01LTE1LTgtMjgtMTAtNDUtMS0xMS0zLTEzLTctNi0zIDEwLTkgOS0yMC0zLTktOC0yNC0xMy0zNC0xMS0xMSAzLTE5IDEtMTktNHM1LTkgMTEtOSA0LTctNS0xNWMtOC04LTE5LTE1LTI1LTE1cy0xMS01LTExLTEwYzAtNiAxNC00IDM1IDQgNDEgMTcgNzMgMzUgNjMgMzYtMyAwIDcgMTQgMjMgMzFzMjYgMzUgMjMgNDAgMCA4IDYgN2M3LTIgMjUgMjEgNDIgNTAgMjUgNDQgMjcgNTIgMTMgNTItMTEgMC0xNS01LTExLTE1ek0yMzAgNjMyYzAtNSA3LTE1IDE1LTIyczE1LTggMTUtMmMwIDUtNyAxNS0xNSAyMnMtMTUgOC0xNSAyek05NzUgNDY1Yy0zLTgtNy0yMi0xMC0zMC02LTIwIDItMTkgMjcgNCAxMSAxMSAxOCAyNSAxNSAzMy00IDgtNiA3LTYtNS0xLTEwLTYtMTUtMTEtMTItNiA0LTggMTEtNSAxNiA0IDUgNCA5IDAgOS0zIDAtOC03LTEwLTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgIGZpbGw9XCIjYTI3YjhhXCJcbiAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgIGQ9XCJNMTA3MCA0NDRjMC0xMC0zLTE0LTctMTEtOCA5LTM0LTEzLTI4LTI0IDMtNC00LTEzLTE1LTE5LTIwLTExLTI3LTMwLTExLTMwIDE1IDAgODIgODggNzEgOTUtNSAzLTEwLTItMTAtMTF6XCJcbiAgICAgID48L21vdGlvbi5wYXRoPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjOGY5NDliXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0zNDAgMTc4M2MwLTEzIDUtMjMgMTAtMjMgMTMgMCAxMyAxMSAwIDMwLTggMTItMTAgMTEtMTAtN3pNMTA0MiA0MTljLTYtMTUtMTgtMjktMjYtMzItOS00LTE2LTExLTE2LTE3IDAtMTYgMzcgNyA1MCAzMSA2IDExIDkgMjUgNyAzMi0zIDctOSAwLTE1LTE0ek0xOTMgNDE0Yy0xNi00MC03LTk5IDI2LTE2NiAxOC0zNyA0MC03MyA0OS04MCAxMi0xMCAxMS03LTMgMTctMTcgMjctMTQgMjYgMjYtMTEgNjEtNTYgMTAyLTc5IDE5MC0xMDMgMTMzLTM3IDI2Mi0yMiAzNTMgNDAgNTIgMzYgNjIgNTkgNDEgMTAyLTE0IDMxLTI0IDM3LTY2IDQ2LTI4IDYtOTYgMTEtMTUyIDExLTEwMCAwLTEwNC0xLTE1NC0zNC05NS02Mi0xMDYtNjAtMTYyIDMyLTIyIDM3LTYzIDg5LTkwIDExNi00NSA0NC01MSA0OC01OCAzMHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICBmaWxsPVwiI2NkYWJjNVwiXG4gICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICBkPVwiTTEwNDEgNDE2Yy02LTE0LTE1LTI2LTIwLTI2cy0xMS03LTE1LTE1Yy00LTEyLTItMTMgMTItNiAyMSAxMSA0OCA1OCAzOSA2Ny00IDQtMTEtNS0xNi0yMHpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgZmlsbD1cIiNiMmJjYzJcIlxuICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgZD1cIk0xOTUgMzkxYy00LTI2LTEtNTEgMTAtNzcgOC0yMSAxMy00NCAxMS01MS0zLTcgMC0xNSA2LTE5IDctNSA5LTIgNCA3LTQgOC0xIDUgNi01IDU5LTg5IDE1MS0xNTAgMjczLTE4MSAxMzAtMzMgMjcxLTcgMzQ2IDY1IDM5IDM3IDQwIDM4IDI2IDcxLTE5IDQ4LTUyIDYwLTE4MCA2Ni0xMTkgNi0xNDctMS0yMjktNTgtNDctMzQtNzQtMjUtMTE0IDM2LTIwIDMwLTQ0IDU1LTUzIDU1LTI4IDEtNTggMzMtNzYgODMtMTAgMjYtMTkgNDctMjAgNDctMiAwLTYtMTctMTAtMzl6XCJcbiAgICAgID48L21vdGlvbi5wYXRoPlxuICAgIDwvbW90aW9uLnN2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVN2ZztcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlJztcbmltcG9ydCBQb3N0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RJdGVtJztcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgYWxsUG9zdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgPFByb2ZpbGUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkXCI+UmVjZW50IFdyaXRpbmc6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAge2FsbFBvc3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBhbGxQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgIDxQb3N0SXRlbSBwb3N0PXtwb3N0fSBrZXk9e3Bvc3Quc2x1Z30gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXcteHMgbXQtOCBtZDptdC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIFBvcnRmb2xpbzpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3RpdHV5LWNsaWVudC5ub3cuc2gvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjotdHJhbnNsYXRlLXktMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04IHB4LTQgbWluLXcteHMgbWF4LXctc20gYm9yZGVyIGJvcmRlci1wcmltYXJ5IHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JheS0xMDAgYmctd2hpdGUgXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tkcm9wRmlsdGVyOiAnYmx1cigwLjgpJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHBiLTQgdGV4dC14bCB0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgVGl0dXlcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgUmVhZGluZywgV3JpdGluZywgU2hhcmluZyBvbmxpbmUgcGxhdGZvcm0gZm9yIENhbWJvZGlhblxuICAgICAgICAgICAgICAgICAgICBwZW9wbGUuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy90aXR1eS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ4IGgtNDggcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBtdC00XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoWyd0aXRsZScsICdkYXRlJywgJ3NsdWcnXSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=