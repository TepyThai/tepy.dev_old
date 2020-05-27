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
  const posts = slugs.map(slug => getPostBySlug(slug, fields)).filter(post => {
    if (!fields.includes('isPublished')) return true;
    return post.isPublished;
  }).sort((post1, post2) => post1.date > post2.data ? '1' : '-1');
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
    className: `mt-1 text-sm block text-gray-800 ${className}`
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, `Tepy Thai's Personal Site`), __jsx("meta", {
    property: "description",
    content: `Personal website for Tepy Thai. He writes about Frontend and General Programming.`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "max-w-6xl px-6 md:px-10 mx-auto font-body ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
    as: `/writing/${slug}`,
    href: "/writing/[slug]",
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

/***/ "./src/components/TitleLabel.js":
/*!**************************************!*\
  !*** ./src/components/TitleLabel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/TitleLabel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TitleLabel(_ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return __jsx("div", _extends({
    className: `text-gray-800 font-bold ${className}`
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }), children);
}

/***/ }),

/***/ "./src/components/meta.js":
/*!********************************!*\
  !*** ./src/components/meta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialMeta; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/components/meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SocialMeta({
  title,
  description,
  image,
  url,
  keywords
}) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("meta", {
    name: "twitter:site",
    content: `@TepyThai`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: image ? 'summary_large_image' : 'summary',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), title && __jsx("meta", {
    name: "twitter:title",
    property: "og:title",
    content: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), description && __jsx("meta", {
    property: "og:description",
    content: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }), image && __jsx("meta", {
    property: "og:image",
    content: `https://tepy.dev${image}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), keywords && __jsx("meta", {
    property: "keywords",
    content: keywords,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 20
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Tepy Thai's Personal Site",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "twitter:image:alt",
    content: "Tepy Thai's Personal Site Image Card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

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
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/skip-nav */ "@reach/skip-nav");
/* harmony import */ var _reach_skip_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _components_PostItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostItem */ "./src/components/PostItem.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/meta */ "./src/components/meta.js");
/* harmony import */ var _components_TitleLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TitleLabel */ "./src/components/TitleLabel.js");
var _jsxFileName = "/Users/txb/PersonalProject/portfolio/tepy.dev/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function HomePage({
  allPosts
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    image: "/images/og-image.jpg",
    title: "Tepy Thai's Personal Site",
    url: "https://tepy.dev",
    description: `Personal website for Tepy Thai. He writes about Frontend and General Programming.`,
    keywords: "Tepy Thai, tepy, tepythai,tepythai react, tepythai blog, reactjs, react.js, next.js, gatsby.js,frontend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_reach_skip_nav__WEBPACK_IMPORTED_MODULE_1__["SkipNavContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "flex flex-col md:flex-row justify-between items-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(_components_TitleLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Recent Writing:"), __jsx("div", {
    className: "mt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, allPosts.length > 0 && allPosts.map(post => __jsx(_components_PostItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: post,
    key: post.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "min-w-xs mt-8 md:mt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_components_TitleLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "md:text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Portfolio:"), __jsx("div", {
    className: "px-4 py-8 flex flex-col justify-start md:items-center md:justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://tituy-client.now.sh/",
    target: "_blank",
    rel: "noopener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "font-bold pb-4 text-xl text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, "Tituy"), __jsx("div", {
    className: "text-gray-800 px-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Reading, Writing, Sharing online platform for Cambodian people."), __jsx("img", {
    src: "/images/tituy.jpg",
    className: "w-48 h-48 rounded-full object-cover mt-4",
    alt: "Screenshot for Tituy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }))))))));
}
async function getStaticProps() {
  const allPosts = Object(_lib_api__WEBPACK_IMPORTED_MODULE_5__["getAllPosts"])(['title', 'date', 'slug', 'isPublished']);
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

/***/ "@reach/skip-nav":
/*!**********************************!*\
  !*** external "@reach/skip-nav" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/skip-nav");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGF0ZUZvcm1hdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bvc3RJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU1ZHL0Jsb2IxLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NWRy9Mb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NWRy9Qcm9maWxlU3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpdGxlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWNoL3NraXAtbmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJyZWFkZGlyU3luYyIsImdldFBvc3RCeVNsdWciLCJzbHVnIiwiZmllbGRzIiwicmVhbFNsdWciLCJyZXBsYWNlIiwiZnVsbFBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsIm1hdHRlciIsIml0ZW1zIiwiZm9yRWFjaCIsImZpZWxkIiwiZ2V0QWxsUG9zdHMiLCJzbHVncyIsInBvc3RzIiwibWFwIiwiZmlsdGVyIiwicG9zdCIsImluY2x1ZGVzIiwiaXNQdWJsaXNoZWQiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsImRhdGUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkRhdGVGb3JtYXRlciIsImRhdGVTdHIiLCJjbGFzc05hbWUiLCJyZXN0IiwicGFyc2VJU08iLCJGb290ZXIiLCJIZWFkZXIiLCJOYXZMaW5rIiwiTGF5b3V0IiwiUG9zdEl0ZW0iLCJ0aXRsZSIsIlByb2ZpbGUiLCJEZXRhaWwiLCJ0b3AiLCJsZWZ0IiwiUHJvZmlsZUltYWdlIiwiQmxvYjEiLCJpY29uIiwiaGlkZGVuIiwib3BhY2l0eSIsInBhdGhMZW5ndGgiLCJmaWxsIiwidmlzaWJsZSIsIkxvZ28iLCJsb2FkaW5nVHlwZSIsImR1cmF0aW9uIiwiZWFzZSIsIlByb2ZpbGVTdmciLCJUaXRsZUxhYmVsIiwiU29jaWFsTWV0YSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJrZXl3b3JkcyIsIkhvbWVQYWdlIiwiYWxsUG9zdHMiLCJiYWNrZHJvcEZpbHRlciIsImdldFN0YXRpY1Byb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsY0FBYyxHQUFHQyxpREFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsRUFBRCxFQUFnQixRQUFoQixDQUEzQjtBQUVPLFNBQVNDLFlBQVQsR0FBd0I7QUFDN0IsU0FBT0Msc0RBQVcsQ0FBQ0wsY0FBRCxDQUFsQjtBQUNEO0FBRU0sU0FBU00sYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLE1BQU0sR0FBRyxFQUF0QyxFQUEwQztBQUMvQyxRQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdWLGlEQUFJLENBQUNELGNBQUQsRUFBa0IsR0FBRVMsUUFBUyxLQUE3QixDQUFyQjtBQUNBLFFBQU1HLFlBQVksR0FBR0MsdURBQVksQ0FBQ0YsUUFBRCxFQUFXLE1BQVgsQ0FBakM7QUFDQSxRQUFNO0FBQUVHLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsa0RBQU0sQ0FBQ0osWUFBRCxDQUFoQztBQUVBLFFBQU1LLEtBQUssR0FBRyxFQUFkO0FBRUFULFFBQU0sQ0FBQ1UsT0FBUCxDQUFnQkMsS0FBRCxJQUFXO0FBQ3hCLFFBQUlBLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ3BCRixXQUFLLENBQUNFLEtBQUQsQ0FBTCxHQUFlVixRQUFmO0FBQ0Q7O0FBQ0QsUUFBSVUsS0FBSyxLQUFLLFNBQWQsRUFBeUI7QUFDdkJGLFdBQUssQ0FBQ0UsS0FBRCxDQUFMLEdBQWVKLE9BQWY7QUFDRDs7QUFDRCxRQUFJRCxJQUFJLENBQUNLLEtBQUQsQ0FBUixFQUFpQjtBQUNmRixXQUFLLENBQUNFLEtBQUQsQ0FBTCxHQUFlTCxJQUFJLENBQUNLLEtBQUQsQ0FBbkI7QUFDRDtBQUNGLEdBVkQ7QUFZQSxTQUFPRixLQUFQO0FBQ0Q7QUFFTSxTQUFTRyxXQUFULENBQXFCWixNQUFNLEdBQUcsRUFBOUIsRUFBa0M7QUFDdkMsUUFBTWEsS0FBSyxHQUFHakIsWUFBWSxFQUExQjtBQUNBLFFBQU1rQixLQUFLLEdBQUdELEtBQUssQ0FDaEJFLEdBRFcsQ0FDTmhCLElBQUQsSUFBVUQsYUFBYSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FEaEIsRUFFWGdCLE1BRlcsQ0FFSEMsSUFBRCxJQUFVO0FBQ2hCLFFBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLFFBQVAsQ0FBZ0IsYUFBaEIsQ0FBTCxFQUFxQyxPQUFPLElBQVA7QUFDckMsV0FBT0QsSUFBSSxDQUFDRSxXQUFaO0FBQ0QsR0FMVyxFQU1YQyxJQU5XLENBTU4sQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQW1CRCxLQUFLLENBQUNFLElBQU4sR0FBYUQsS0FBSyxDQUFDaEIsSUFBbkIsR0FBMEIsR0FBMUIsR0FBZ0MsSUFON0MsQ0FBZDtBQU9BLFNBQU9RLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQzFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCYTs7QUFBQSxJQUFJVSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUYsSUFBSUMsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQXJCOztBQUF1QixJQUFJQyxNQUFNLEdBQUNKLHVCQUF1QixDQUFDRCxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbEM7O0FBQXFELElBQUlNLElBQUksR0FBQ04sbUJBQU8sQ0FBQyxnQkFBRCxDQUFoQjs7QUFBd0IsSUFBSU8sTUFBTSxHQUFDUCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQyxJQUFJUSxPQUFPLEdBQUNULHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDJEQUFELENBQVIsQ0FBbEM7O0FBQXdELElBQUlTLFFBQVEsR0FBQ1QsbUJBQU8sQ0FBQyxtR0FBRCxDQUFwQjs7QUFBeUQsU0FBU1UsT0FBVCxDQUFpQkMsSUFBakIsRUFBc0I7QUFBQyxNQUFJQyxHQUFHLEdBQUMsQ0FBQyxHQUFFTixJQUFJLENBQUNPLEtBQVIsRUFBZUYsSUFBZixFQUFvQixLQUFwQixFQUEwQixJQUExQixDQUFSO0FBQXdDLE1BQUlHLE1BQU0sR0FBQyxDQUFDLEdBQUVSLElBQUksQ0FBQ08sS0FBUixFQUFlLENBQUMsR0FBRU4sTUFBTSxDQUFDUSxpQkFBVixHQUFmLEVBQThDLEtBQTlDLEVBQW9ELElBQXBELENBQVg7QUFBcUUsU0FBTSxDQUFDSCxHQUFHLENBQUNJLElBQUwsSUFBV0osR0FBRyxDQUFDSyxRQUFKLEtBQWVILE1BQU0sQ0FBQ0csUUFBdEIsSUFBZ0NMLEdBQUcsQ0FBQ0ksSUFBSixLQUFXRixNQUFNLENBQUNFLElBQW5FO0FBQXlFOztBQUFBLFNBQVNFLGlCQUFULENBQTJCQyxVQUEzQixFQUFzQztBQUFDLE1BQUlDLFFBQVEsR0FBQyxJQUFiO0FBQWtCLE1BQUlDLE1BQU0sR0FBQyxJQUFYO0FBQWdCLE1BQUlDLFVBQVUsR0FBQyxJQUFmO0FBQW9CLFNBQU0sQ0FBQ1gsSUFBRCxFQUFNWSxFQUFOLEtBQVc7QUFBQyxRQUFHRCxVQUFVLElBQUVYLElBQUksS0FBR1MsUUFBbkIsSUFBNkJHLEVBQUUsS0FBR0YsTUFBckMsRUFBNEM7QUFBQyxhQUFPQyxVQUFQO0FBQW1COztBQUFBLFFBQUlFLE1BQU0sR0FBQ0wsVUFBVSxDQUFDUixJQUFELEVBQU1ZLEVBQU4sQ0FBckI7QUFBK0JILFlBQVEsR0FBQ1QsSUFBVDtBQUFjVSxVQUFNLEdBQUNFLEVBQVA7QUFBVUQsY0FBVSxHQUFDRSxNQUFYO0FBQWtCLFdBQU9BLE1BQVA7QUFBZSxHQUExSztBQUE0Szs7QUFBQSxTQUFTQyxTQUFULENBQW1CYixHQUFuQixFQUF1QjtBQUFDLFNBQU9BLEdBQUcsSUFBRSxPQUFPQSxHQUFQLEtBQWEsUUFBbEIsR0FBMkIsQ0FBQyxHQUFFTCxNQUFNLENBQUNtQixvQkFBVixFQUFnQ2QsR0FBaEMsQ0FBM0IsR0FBZ0VBLEdBQXZFO0FBQTRFOztBQUFBLElBQUllLFFBQUo7QUFBYSxJQUFJQyxTQUFTLEdBQUMsSUFBSUMsR0FBSixFQUFkO0FBQXdCLElBQUlDLG9CQUFvQixHQUFDLFFBQTRCQyxTQUE1QixHQUF3RCxJQUFqRjtBQUFzRixJQUFJQyxVQUFVLEdBQUMsRUFBZjs7QUFBa0IsU0FBU0MsV0FBVCxHQUFzQjtBQUFDO0FBQy9xQyxNQUFHTixRQUFILEVBQVk7QUFBQyxXQUFPQSxRQUFQO0FBQWlCLEdBRGdwQyxDQUNocEM7OztBQUM5QixNQUFHLENBQUNHLG9CQUFKLEVBQXlCO0FBQUMsV0FBT0ksU0FBUDtBQUFrQjs7QUFBQSxTQUFPUCxRQUFRLEdBQUMsSUFBSUcsb0JBQUosQ0FBeUJLLE9BQU8sSUFBRTtBQUFDQSxXQUFPLENBQUNsRCxPQUFSLENBQWdCbUQsS0FBSyxJQUFFO0FBQUMsVUFBRyxDQUFDUixTQUFTLENBQUNTLEdBQVYsQ0FBY0QsS0FBSyxDQUFDRSxNQUFwQixDQUFKLEVBQWdDO0FBQUM7QUFBUTs7QUFBQSxVQUFJQyxFQUFFLEdBQUNYLFNBQVMsQ0FBQ1ksR0FBVixDQUFjSixLQUFLLENBQUNFLE1BQXBCLENBQVA7O0FBQW1DLFVBQUdGLEtBQUssQ0FBQ0ssY0FBTixJQUFzQkwsS0FBSyxDQUFDTSxpQkFBTixHQUF3QixDQUFqRCxFQUFtRDtBQUFDZixnQkFBUSxDQUFDZ0IsU0FBVCxDQUFtQlAsS0FBSyxDQUFDRSxNQUF6QjtBQUFpQ1YsaUJBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJSLEtBQUssQ0FBQ0UsTUFBdkI7QUFBK0JDLFVBQUU7QUFBSTtBQUFDLEtBQS9OO0FBQWtPLEdBQXJRLEVBQXNRO0FBQUNNLGNBQVUsRUFBQztBQUFaLEdBQXRRLENBQWhCO0FBQTZTOztBQUFBLElBQUlDLHFCQUFxQixHQUFDLENBQUNDLEVBQUQsRUFBSVIsRUFBSixLQUFTO0FBQUMsTUFBSVosUUFBUSxHQUFDTSxXQUFXLEVBQXhCOztBQUEyQixNQUFHLENBQUNOLFFBQUosRUFBYTtBQUFDLFdBQU0sTUFBSSxDQUFFLENBQVo7QUFBYzs7QUFBQUEsVUFBUSxDQUFDcUIsT0FBVCxDQUFpQkQsRUFBakI7QUFBcUJuQixXQUFTLENBQUNxQixHQUFWLENBQWNGLEVBQWQsRUFBaUJSLEVBQWpCO0FBQXFCLFNBQU0sTUFBSTtBQUFDLFFBQUc7QUFBQ1osY0FBUSxDQUFDZ0IsU0FBVCxDQUFtQkksRUFBbkI7QUFBd0IsS0FBNUIsQ0FBNEIsT0FBTUcsR0FBTixFQUFVO0FBQUNDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQW9COztBQUFBdEIsYUFBUyxDQUFDZ0IsTUFBVixDQUFpQkcsRUFBakI7QUFBc0IsR0FBNUY7QUFBOEYsQ0FBbk87O0FBQW9PLE1BQU1NLElBQU4sU0FBbUJoRCxNQUFNLENBQUNpRCxTQUExQixDQUFtQztBQUFDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUFDLFVBQU1BLEtBQU47QUFBYSxTQUFLQyxDQUFMLEdBQU8sS0FBSyxDQUFaOztBQUFjLFNBQUtDLGdCQUFMLEdBQXNCLE1BQUksQ0FBRSxDQUE1Qjs7QUFBNkIsU0FBS0MsVUFBTCxHQUFnQnpDLGlCQUFpQixDQUFDLENBQUNQLElBQUQsRUFBTWlELE1BQU4sS0FBZTtBQUFDLGFBQU07QUFBQ2pELFlBQUksRUFBQyxDQUFDLEdBQUVGLFFBQVEsQ0FBQ29ELFdBQVosRUFBeUJwQyxTQUFTLENBQUNkLElBQUQsQ0FBbEMsQ0FBTjtBQUFnRFksVUFBRSxFQUFDcUMsTUFBTSxHQUFDLENBQUMsR0FBRW5ELFFBQVEsQ0FBQ29ELFdBQVosRUFBeUJwQyxTQUFTLENBQUNtQyxNQUFELENBQWxDLENBQUQsR0FBNkNBO0FBQXRHLE9BQU47QUFBcUgsS0FBdEksQ0FBakM7O0FBQXlLLFNBQUtFLFdBQUwsR0FBaUJDLENBQUMsSUFBRTtBQUFDLFVBQUc7QUFBQ0MsZ0JBQUQ7QUFBVTFCO0FBQVYsVUFBa0J5QixDQUFDLENBQUNFLGFBQXZCOztBQUFxQyxVQUFHRCxRQUFRLEtBQUcsR0FBWCxLQUFpQjFCLE1BQU0sSUFBRUEsTUFBTSxLQUFHLE9BQWpCLElBQTBCeUIsQ0FBQyxDQUFDRyxPQUE1QixJQUFxQ0gsQ0FBQyxDQUFDSSxPQUF2QyxJQUFnREosQ0FBQyxDQUFDSyxRQUFsRCxJQUE0REwsQ0FBQyxDQUFDTSxXQUFGLElBQWVOLENBQUMsQ0FBQ00sV0FBRixDQUFjQyxLQUFkLEtBQXNCLENBQWxILENBQUgsRUFBd0g7QUFBQztBQUN4Z0M7QUFBUTs7QUFBQSxVQUFHO0FBQUMzRCxZQUFEO0FBQU1ZO0FBQU4sVUFBVSxLQUFLb0MsVUFBTCxDQUFnQixLQUFLSCxLQUFMLENBQVc3QyxJQUEzQixFQUFnQyxLQUFLNkMsS0FBTCxDQUFXakMsRUFBM0MsQ0FBYjs7QUFBNEQsVUFBRyxDQUFDYixPQUFPLENBQUNDLElBQUQsQ0FBWCxFQUFrQjtBQUFDO0FBQ3ZGO0FBQVE7O0FBQUEsVUFBRztBQUFDNEQ7QUFBRCxVQUFXeEMsTUFBTSxDQUFDeUMsUUFBckI7QUFBOEI3RCxVQUFJLEdBQUMsQ0FBQyxHQUFFTCxJQUFJLENBQUNtRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQjVELElBQTFCLENBQUw7QUFBcUNZLFFBQUUsR0FBQ0EsRUFBRSxHQUFDLENBQUMsR0FBRWpCLElBQUksQ0FBQ21FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCaEQsRUFBMUIsQ0FBRCxHQUErQlosSUFBcEM7QUFBeUNvRCxPQUFDLENBQUNXLGNBQUYsR0FGcXZCLENBRWx1Qjs7QUFDdkksVUFBRztBQUFDQztBQUFELFVBQVMsS0FBS25CLEtBQWpCOztBQUF1QixVQUFHbUIsTUFBTSxJQUFFLElBQVgsRUFBZ0I7QUFBQ0EsY0FBTSxHQUFDcEQsRUFBRSxDQUFDcUQsT0FBSCxDQUFXLEdBQVgsSUFBZ0IsQ0FBdkI7QUFBMEIsT0FIdXlCLENBR3Z5Qjs7O0FBQ2xFcEUsYUFBTyxDQUFDSixPQUFSLENBQWdCLEtBQUtvRCxLQUFMLENBQVcvRSxPQUFYLEdBQW1CLFNBQW5CLEdBQTZCLE1BQTdDLEVBQXFEa0MsSUFBckQsRUFBMERZLEVBQTFELEVBQTZEO0FBQUNzRCxlQUFPLEVBQUMsS0FBS3JCLEtBQUwsQ0FBV3FCO0FBQXBCLE9BQTdELEVBQTJGQyxJQUEzRixDQUFnR0MsT0FBTyxJQUFFO0FBQUMsWUFBRyxDQUFDQSxPQUFKLEVBQVk7O0FBQU8sWUFBR0osTUFBSCxFQUFVO0FBQUM1QyxnQkFBTSxDQUFDaUQsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUFxQkMsa0JBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFkO0FBQXVCO0FBQUMsT0FBckw7QUFBd0wsS0FKNnBCOztBQUk1cEIsY0FBdUM7QUFBQyxVQUFHM0IsS0FBSyxDQUFDNEIsUUFBVCxFQUFrQjtBQUFDakMsZUFBTyxDQUFDa0MsSUFBUixDQUFhLGlLQUFiO0FBQWlMO0FBQUM7O0FBQUEsU0FBSzVCLENBQUwsR0FBT0QsS0FBSyxDQUFDNEIsUUFBTixLQUFpQixLQUF4QjtBQUErQjs7QUFBQUUsc0JBQW9CLEdBQUU7QUFBQyxTQUFLNUIsZ0JBQUw7QUFBeUI7O0FBQUE2QixVQUFRLEdBQUU7QUFBQyxRQUFHO0FBQUNoQjtBQUFELFFBQVd4QyxNQUFNLENBQUN5QyxRQUFyQjtBQUE4QixRQUFHO0FBQUM3RCxVQUFJLEVBQUM2RSxVQUFOO0FBQWlCakUsUUFBRSxFQUFDa0U7QUFBcEIsUUFBOEIsS0FBSzlCLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXN0MsSUFBM0IsRUFBZ0MsS0FBSzZDLEtBQUwsQ0FBV2pDLEVBQTNDLENBQWpDO0FBQWdGLFFBQUltRSxZQUFZLEdBQUMsQ0FBQyxHQUFFcEYsSUFBSSxDQUFDbUUsT0FBUixFQUFpQkYsUUFBakIsRUFBMEJpQixVQUExQixDQUFqQjtBQUF1RCxXQUFNLENBQUNFLFlBQUQsRUFBY0QsUUFBUSxHQUFDLENBQUMsR0FBRW5GLElBQUksQ0FBQ21FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCa0IsUUFBMUIsQ0FBRCxHQUFxQ0MsWUFBM0QsQ0FBTjtBQUFnRjs7QUFBQUMsV0FBUyxDQUFDQyxHQUFELEVBQUs7QUFBQyxRQUFHLEtBQUtuQyxDQUFMLElBQVEzQixvQkFBUixJQUE4QjhELEdBQTlCLElBQW1DQSxHQUFHLENBQUNDLE9BQTFDLEVBQWtEO0FBQUMsV0FBS25DLGdCQUFMO0FBQXdCLFVBQUlvQyxZQUFZLEdBQUM5RCxVQUFVLENBQUMsS0FBS3VELFFBQUwsR0FBZ0J2SCxJQUFoQixFQUFxQjtBQUNoNEIsU0FEMjJCLENBQUQsQ0FBM0I7O0FBQ3owQixVQUFHLENBQUM4SCxZQUFKLEVBQWlCO0FBQUMsYUFBS3BDLGdCQUFMLEdBQXNCWixxQkFBcUIsQ0FBQzhDLEdBQUQsRUFBSyxNQUFJO0FBQUMsZUFBS1IsUUFBTDtBQUFpQixTQUEzQixDQUEzQztBQUF5RTtBQUFDO0FBQUMsR0FMNmYsQ0FLN2Y7QUFDbkc7OztBQUNBQSxVQUFRLENBQUNXLE9BQUQsRUFBUztBQUFDLFFBQUcsQ0FBQyxLQUFLdEMsQ0FBTixRQUFILEVBQXdDLE9BQXpDLENBQWdEOztBQUNqRSxRQUFJdUMsS0FBSyxHQUFDLEtBQUtULFFBQUwsRUFBVixDQURpQixDQUNTO0FBQzFCO0FBQ0E7O0FBQ0EvRSxXQUFPLENBQUNKLE9BQVIsQ0FBZ0JnRixRQUFoQixDQUF5QlksS0FBSztBQUFDO0FBQVUsS0FBWCxDQUE5QixFQUE0Q0EsS0FBSztBQUFDO0FBQVksS0FBYixDQUFqRCxFQUFpRUQsT0FBakUsRUFBMEVFLEtBQTFFLENBQWdGL0MsR0FBRyxJQUFFO0FBQUMsZ0JBQXVDO0FBQUM7QUFDOUgsY0FBTUEsR0FBTjtBQUFXO0FBQUMsS0FEWjs7QUFDY2xCLGNBQVUsQ0FBQ2dFLEtBQUssQ0FBQ2hJLElBQU4sRUFBVztBQUNwQyxPQUR5QixDQUFELENBQVYsR0FDUixJQURRO0FBQ0Y7O0FBQUFrSSxRQUFNLEdBQUU7QUFBQyxRQUFHO0FBQUNDO0FBQUQsUUFBVyxLQUFLM0MsS0FBbkI7QUFBeUIsUUFBRztBQUFDN0MsVUFBRDtBQUFNWTtBQUFOLFFBQVUsS0FBS29DLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXN0MsSUFBM0IsRUFBZ0MsS0FBSzZDLEtBQUwsQ0FBV2pDLEVBQTNDLENBQWIsQ0FBMUIsQ0FBc0Y7O0FBQzFHLFFBQUcsT0FBTzRFLFFBQVAsS0FBa0IsUUFBckIsRUFBOEI7QUFBQ0EsY0FBUSxHQUFDLGFBQWE5RixNQUFNLENBQUNELE9BQVAsQ0FBZWdHLGFBQWYsQ0FBNkIsR0FBN0IsRUFBaUMsSUFBakMsRUFBc0NELFFBQXRDLENBQXRCO0FBQXVFLEtBRGxGLENBQ2tGOzs7QUFDdEcsUUFBSUUsS0FBSyxHQUFDaEcsTUFBTSxDQUFDaUcsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJKLFFBQXJCLENBQVY7O0FBQXlDLFFBQUkzQyxLQUFLLEdBQUM7QUFBQ29DLFNBQUcsRUFBQzdDLEVBQUUsSUFBRTtBQUFDLGFBQUs0QyxTQUFMLENBQWU1QyxFQUFmOztBQUFtQixZQUFHc0QsS0FBSyxJQUFFLE9BQU9BLEtBQVAsS0FBZSxRQUF0QixJQUFnQ0EsS0FBSyxDQUFDVCxHQUF6QyxFQUE2QztBQUFDLGNBQUcsT0FBT1MsS0FBSyxDQUFDVCxHQUFiLEtBQW1CLFVBQXRCLEVBQWlDUyxLQUFLLENBQUNULEdBQU4sQ0FBVTdDLEVBQVYsRUFBakMsS0FBb0QsSUFBRyxPQUFPc0QsS0FBSyxDQUFDVCxHQUFiLEtBQW1CLFFBQXRCLEVBQStCO0FBQUNTLGlCQUFLLENBQUNULEdBQU4sQ0FBVVksT0FBVixHQUFrQnpELEVBQWxCO0FBQXNCO0FBQUM7QUFBQyxPQUF2TDtBQUF3TDBELGtCQUFZLEVBQUMxQyxDQUFDLElBQUU7QUFBQyxZQUFHc0MsS0FBSyxDQUFDN0MsS0FBTixJQUFhLE9BQU82QyxLQUFLLENBQUM3QyxLQUFOLENBQVlpRCxZQUFuQixLQUFrQyxVQUFsRCxFQUE2RDtBQUFDSixlQUFLLENBQUM3QyxLQUFOLENBQVlpRCxZQUFaLENBQXlCMUMsQ0FBekI7QUFBNkI7O0FBQUEsYUFBS3FCLFFBQUwsQ0FBYztBQUFDc0Isa0JBQVEsRUFBQztBQUFWLFNBQWQ7QUFBZ0MsT0FBcFU7QUFBcVVDLGFBQU8sRUFBQzVDLENBQUMsSUFBRTtBQUFDLFlBQUdzQyxLQUFLLENBQUM3QyxLQUFOLElBQWEsT0FBTzZDLEtBQUssQ0FBQzdDLEtBQU4sQ0FBWW1ELE9BQW5CLEtBQTZCLFVBQTdDLEVBQXdEO0FBQUNOLGVBQUssQ0FBQzdDLEtBQU4sQ0FBWW1ELE9BQVosQ0FBb0I1QyxDQUFwQjtBQUF3Qjs7QUFBQSxZQUFHLENBQUNBLENBQUMsQ0FBQzZDLGdCQUFOLEVBQXVCO0FBQUMsZUFBSzlDLFdBQUwsQ0FBaUJDLENBQWpCO0FBQXFCO0FBQUM7QUFBaGQsS0FBVixDQUZyQixDQUVpZjtBQUNyZ0I7O0FBQ0EsUUFBRyxLQUFLUCxLQUFMLENBQVdxRCxRQUFYLElBQXFCUixLQUFLLENBQUNTLElBQU4sS0FBYSxHQUFiLElBQWtCLEVBQUUsVUFBU1QsS0FBSyxDQUFDN0MsS0FBakIsQ0FBMUMsRUFBa0U7QUFBQ0EsV0FBSyxDQUFDN0MsSUFBTixHQUFXWSxFQUFFLElBQUVaLElBQWY7QUFBcUIsS0FKcEUsQ0FJb0U7QUFDeEY7OztBQUNBLFFBQUcxQyxLQUFILEVBQTRDLGdDQUErTzs7QUFBQSxXQUFPb0MsTUFBTSxDQUFDRCxPQUFQLENBQWUyRyxZQUFmLENBQTRCVixLQUE1QixFQUFrQzdDLEtBQWxDLENBQVA7QUFBaUQ7O0FBbkJvUjs7QUFtQm5SLFVBQXdDO0FBQUMsTUFBSTZCLElBQUksR0FBQyxDQUFDLEdBQUU5RSxNQUFNLENBQUN5RyxRQUFWLEVBQW9CN0QsT0FBTyxDQUFDQyxLQUE1QixDQUFULENBQUQsQ0FBNkM7O0FBQ2xhLE1BQUk2RCxTQUFTLEdBQUNqSCxtQkFBTyxDQUFDLDhCQUFELENBQXJCOztBQUFvQyxNQUFJa0gsS0FBSyxHQUFDbEgsbUJBQU8sQ0FBQywwQ0FBRCxDQUFqQixDQURpVixDQUMzUzs7O0FBQzFFcUQsTUFBSSxDQUFDOEQsU0FBTCxHQUFlRCxLQUFLLENBQUM7QUFBQ3ZHLFFBQUksRUFBQ3NHLFNBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxTQUFTLENBQUNJLE1BQVgsRUFBa0JKLFNBQVMsQ0FBQ0ssTUFBNUIsQ0FBcEIsRUFBeURDLFVBQS9EO0FBQTBFaEcsTUFBRSxFQUFDMEYsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixDQUE3RTtBQUFzSWxDLFlBQVEsRUFBQzZCLFNBQVMsQ0FBQ08sSUFBeko7QUFBOEovSSxXQUFPLEVBQUN3SSxTQUFTLENBQUNPLElBQWhMO0FBQXFMM0MsV0FBTyxFQUFDb0MsU0FBUyxDQUFDTyxJQUF2TTtBQUE0TVgsWUFBUSxFQUFDSSxTQUFTLENBQUNPLElBQS9OO0FBQW9PN0MsVUFBTSxFQUFDc0MsU0FBUyxDQUFDTyxJQUFyUDtBQUEwUHJCLFlBQVEsRUFBQ2MsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ1EsT0FBWCxFQUFtQixDQUFDakUsS0FBRCxFQUFPa0UsUUFBUCxLQUFrQjtBQUFDLFVBQUlDLEtBQUssR0FBQ25FLEtBQUssQ0FBQ2tFLFFBQUQsQ0FBZjs7QUFBMEIsVUFBRyxPQUFPQyxLQUFQLEtBQWUsUUFBbEIsRUFBMkI7QUFBQ3RDLFlBQUksQ0FBQyxpSUFBRCxDQUFKO0FBQXlJOztBQUFBLGFBQU8sSUFBUDtBQUFhLEtBQWxQLENBQXBCLEVBQXlRa0M7QUFBNWdCLEdBQUQsQ0FBcEI7QUFBK2lCOztBQUFBLElBQUlLLFFBQVEsR0FBQ3ZFLElBQWI7QUFBa0JuRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0J3SCxRQUFoQixDOzs7Ozs7Ozs7Ozs7QUN2QnBqQjs7QUFBQSxJQUFJM0gsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGLElBQUlELHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUMySCxTQUFSLEdBQWtCQSxTQUFsQjtBQUE0QjNILE9BQU8sQ0FBQzRILHdCQUFSLEdBQWlDQSx3QkFBakM7QUFBMEQ1SCxPQUFPLENBQUM2SCxZQUFSLEdBQXFCN0gsT0FBTyxDQUFDOEgsVUFBUixHQUFtQjlILE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQTdEOztBQUErRCxJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlTLFFBQVEsR0FBQ1IsdUJBQXVCLENBQUNELG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFwQzs7QUFBa0ZFLE9BQU8sQ0FBQytILE1BQVIsR0FBZXhILFFBQVEsQ0FBQ0wsT0FBeEI7QUFBZ0NGLE9BQU8sQ0FBQ2dJLFVBQVIsR0FBbUJ6SCxRQUFRLENBQUN5SCxVQUE1Qjs7QUFBdUMsSUFBSUMsY0FBYyxHQUFDbkksbUJBQU8sQ0FBQyw0RUFBRCxDQUExQjs7QUFBZ0UsSUFBSW9JLFdBQVcsR0FBQ3JJLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBdEM7O0FBQWlFRSxPQUFPLENBQUM4SCxVQUFSLEdBQW1CSSxXQUFXLENBQUNoSSxPQUEvQjtBQUF1Qzs7QUFBbUIsSUFBSWlJLGVBQWUsR0FBQztBQUFDQyxRQUFNLEVBQUMsSUFBUjtBQUFhO0FBQzN3QkMsZ0JBQWMsRUFBQyxFQUQrdUI7O0FBQzV1QkMsT0FBSyxDQUFDakcsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLK0YsTUFBUixFQUFlLE9BQU8vRixFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEd29CLENBQXBCLEMsQ0FDbG5COztBQUN4SCxJQUFJa0csaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxDQUF0QjtBQUFpRyxJQUFJQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQWpCO0FBQTRJLElBQUlDLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXJCLEMsQ0FBb0Y7O0FBQ2pVQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JSLGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUM3RixLQUFHLEdBQUU7QUFBQyxXQUFPL0IsUUFBUSxDQUFDTCxPQUFULENBQWlCMEksTUFBeEI7QUFBZ0M7O0FBQXZDLENBQS9DO0FBQXlGTCxpQkFBaUIsQ0FBQ3hKLE9BQWxCLENBQTBCQyxLQUFLLElBQUU7QUFBQztBQUMzSDtBQUNBO0FBQ0E7QUFDQTBKLFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0NuSixLQUF0QyxFQUE0QztBQUFDc0QsT0FBRyxHQUFFO0FBQUMsVUFBSThGLE1BQU0sR0FBQ1MsU0FBUyxFQUFwQjtBQUF1QixhQUFPVCxNQUFNLENBQUNwSixLQUFELENBQWI7QUFBc0I7O0FBQXBELEdBQTVDO0FBQW9HLENBSlg7QUFJYXlKLGdCQUFnQixDQUFDMUosT0FBakIsQ0FBeUJDLEtBQUssSUFBRTtBQUFDO0FBQ3ZJOztBQUFDbUosaUJBQWUsQ0FBQ25KLEtBQUQsQ0FBZixHQUF1QixZQUFVO0FBQUMsUUFBSW9KLE1BQU0sR0FBQ1MsU0FBUyxFQUFwQjtBQUF1QixXQUFPVCxNQUFNLENBQUNwSixLQUFELENBQU4sQ0FBYyxHQUFHOEosU0FBakIsQ0FBUDtBQUFvQyxHQUE3RjtBQUErRixDQURNO0FBQ0pOLFlBQVksQ0FBQ3pKLE9BQWIsQ0FBcUJnSyxLQUFLLElBQUU7QUFBQ1osaUJBQWUsQ0FBQ0csS0FBaEIsQ0FBc0IsTUFBSTtBQUFDL0gsWUFBUSxDQUFDTCxPQUFULENBQWlCMEksTUFBakIsQ0FBd0JJLEVBQXhCLENBQTJCRCxLQUEzQixFQUFpQyxZQUFVO0FBQUMsVUFBSUUsVUFBVSxHQUFDLE9BQUtGLEtBQUssQ0FBQ0csTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBQUwsR0FBbUNKLEtBQUssQ0FBQ0ssU0FBTixDQUFnQixDQUFoQixDQUFsRDtBQUFxRSxVQUFJQyxnQkFBZ0IsR0FBQ2xCLGVBQXJCOztBQUFxQyxVQUFHa0IsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBbkIsRUFBZ0M7QUFBQyxZQUFHO0FBQUNJLDBCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUdILFNBQWhDO0FBQTRDLFNBQWhELENBQWdELE9BQU05RixHQUFOLEVBQVU7QUFBQztBQUM1WUMsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjLDBDQUF3QytGLFVBQXRELEVBRDJZLENBQ3pVOztBQUNsRWhHLGlCQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBRyxDQUFDc0csT0FBSixHQUFZLElBQVosR0FBaUJ0RyxHQUFHLENBQUN1RyxLQUFuQztBQUEyQztBQUFDO0FBQUMsS0FGNkc7QUFFMUcsR0FGK0U7QUFFNUUsQ0FGK0M7O0FBRTdDLFNBQVNWLFNBQVQsR0FBb0I7QUFBQyxNQUFHLENBQUNWLGVBQWUsQ0FBQ0MsTUFBcEIsRUFBMkI7QUFBQyxRQUFJa0IsT0FBTyxHQUFDLGdDQUE4Qix5RUFBMUM7QUFBb0gsVUFBTSxJQUFJRSxLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUEwQjs7QUFBQSxTQUFPbkIsZUFBZSxDQUFDQyxNQUF2QjtBQUErQixDLENBQUE7OztBQUNuUixJQUFJVixRQUFRLEdBQUNTLGVBQWIsQyxDQUE2Qjs7QUFDN0JuSSxPQUFPLENBQUNFLE9BQVIsR0FBZ0J3SCxRQUFoQjs7QUFBeUIsU0FBU0MsU0FBVCxHQUFvQjtBQUFDLFNBQU94SCxNQUFNLENBQUNELE9BQVAsQ0FBZXVKLFVBQWYsQ0FBMEJ4QixjQUFjLENBQUN5QixhQUF6QyxDQUFQO0FBQWdFLEMsQ0FBQTtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJN0IsWUFBWSxHQUFDLFNBQVNBLFlBQVQsR0FBdUI7QUFBQyxPQUFJLElBQUk4QixJQUFJLEdBQUNiLFNBQVMsQ0FBQ2MsTUFBbkIsRUFBMEJDLElBQUksR0FBQyxJQUFJQyxLQUFKLENBQVVILElBQVYsQ0FBL0IsRUFBK0NJLElBQUksR0FBQyxDQUF4RCxFQUEwREEsSUFBSSxHQUFDSixJQUEvRCxFQUFvRUksSUFBSSxFQUF4RSxFQUEyRTtBQUFDRixRQUFJLENBQUNFLElBQUQsQ0FBSixHQUFXakIsU0FBUyxDQUFDaUIsSUFBRCxDQUFwQjtBQUE0Qjs7QUFBQTVCLGlCQUFlLENBQUNDLE1BQWhCLEdBQXVCLElBQUk3SCxRQUFRLENBQUNMLE9BQWIsQ0FBcUIsR0FBRzJKLElBQXhCLENBQXZCO0FBQXFEMUIsaUJBQWUsQ0FBQ0UsY0FBaEIsQ0FBK0J0SixPQUEvQixDQUF1Q3NELEVBQUUsSUFBRUEsRUFBRSxFQUE3QztBQUFpRDhGLGlCQUFlLENBQUNFLGNBQWhCLEdBQStCLEVBQS9CO0FBQWtDLFNBQU9GLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQ0FBeFQsQyxDQUF5VDs7O0FBQ3pUcEksT0FBTyxDQUFDNkgsWUFBUixHQUFxQkEsWUFBckI7O0FBQWtDLFNBQVNELHdCQUFULENBQWtDUSxNQUFsQyxFQUF5QztBQUFDLE1BQUk5SCxPQUFPLEdBQUM4SCxNQUFaO0FBQW1CLE1BQUk0QixRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsT0FBSSxJQUFJQyxRQUFSLElBQW9CMUIsaUJBQXBCLEVBQXNDO0FBQUMsUUFBRyxPQUFPakksT0FBTyxDQUFDMkosUUFBRCxDQUFkLEtBQTJCLFFBQTlCLEVBQXVDO0FBQUNELGNBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CdkIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLEVBQWQsRUFBaUI1SixPQUFPLENBQUMySixRQUFELENBQXhCLENBQW5CLENBQUQsQ0FBd0Q7O0FBQ3JQO0FBQVU7O0FBQUFELFlBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CM0osT0FBTyxDQUFDMkosUUFBRCxDQUExQjtBQUFzQyxHQUQyQixDQUMzQjs7O0FBQ2hERCxVQUFRLENBQUNwQixNQUFULEdBQWdCckksUUFBUSxDQUFDTCxPQUFULENBQWlCMEksTUFBakM7QUFBd0NILGtCQUFnQixDQUFDMUosT0FBakIsQ0FBeUJDLEtBQUssSUFBRTtBQUFDZ0wsWUFBUSxDQUFDaEwsS0FBRCxDQUFSLEdBQWdCLFlBQVU7QUFBQyxhQUFPc0IsT0FBTyxDQUFDdEIsS0FBRCxDQUFQLENBQWUsR0FBRzhKLFNBQWxCLENBQVA7QUFBcUMsS0FBaEU7QUFBa0UsR0FBbkc7QUFBcUcsU0FBT2tCLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7O0FDckJqSjs7QUFBQSxJQUFJbkssc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQjRILFVBQWhCOztBQUEyQixJQUFJM0gsTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJUSxPQUFPLEdBQUNSLG1CQUFPLENBQUMsMkRBQUQsQ0FBbkI7O0FBQWdDLFNBQVNnSSxVQUFULENBQW9CcUMsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkI5RyxLQUEzQixFQUFpQztBQUFDLFdBQU0sYUFBYW5ELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0csYUFBZixDQUE2QmlFLGlCQUE3QixFQUErQ3pCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBYztBQUFDOUIsWUFBTSxFQUFDLENBQUMsR0FBRTlILE9BQU8sQ0FBQ3FILFNBQVg7QUFBUixLQUFkLEVBQStDckUsS0FBL0MsQ0FBL0MsQ0FBbkI7QUFBMEg7O0FBQUE4RyxtQkFBaUIsQ0FBQ0MsZUFBbEIsR0FBa0NGLGlCQUFpQixDQUFDRSxlQUFwRCxDQUFtRTtBQUFuRTtBQUN6YUQsbUJBQWlCLENBQUNFLG1CQUFsQixHQUFzQ0gsaUJBQWlCLENBQUNHLG1CQUF4RDs7QUFBNEUsWUFBdUM7QUFBQyxRQUFJQyxJQUFJLEdBQUNKLGlCQUFpQixDQUFDSyxXQUFsQixJQUErQkwsaUJBQWlCLENBQUNJLElBQWpELElBQXVELFNBQWhFO0FBQTBFSCxxQkFBaUIsQ0FBQ0ksV0FBbEIsR0FBOEIsZ0JBQWNELElBQWQsR0FBbUIsR0FBakQ7QUFBc0Q7O0FBQUEsU0FBT0gsaUJBQVA7QUFBMEIsQzs7Ozs7Ozs7Ozs7O0FDRGxRO0FBQ2I7Ozs7Ozs7Ozs7OztBQVdBMUIsTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVNnRCxJQUFULEdBQWdCO0FBQ1osUUFBTUMsR0FBRyxHQUFHaEMsTUFBTSxDQUFDaUMsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUNBLFNBQU87QUFDSDNCLE1BQUUsQ0FBQ3BDLElBQUQsRUFBT2dFLE9BQVAsRUFBZ0I7QUFDZDtBQUNBLE9BQUNGLEdBQUcsQ0FBQzlELElBQUQsQ0FBSCxLQUFjOEQsR0FBRyxDQUFDOUQsSUFBRCxDQUFILEdBQVksRUFBMUIsQ0FBRCxFQUFnQ2lFLElBQWhDLENBQXFDRCxPQUFyQztBQUNILEtBSkU7O0FBS0hFLE9BQUcsQ0FBQ2xFLElBQUQsRUFBT2dFLE9BQVAsRUFBZ0I7QUFDZixVQUFJRixHQUFHLENBQUM5RCxJQUFELENBQVAsRUFBZTtBQUNYO0FBQ0E4RCxXQUFHLENBQUM5RCxJQUFELENBQUgsQ0FBVW1FLE1BQVYsQ0FBaUJMLEdBQUcsQ0FBQzlELElBQUQsQ0FBSCxDQUFVbEMsT0FBVixDQUFrQmtHLE9BQWxCLE1BQStCLENBQWhELEVBQW1ELENBQW5EO0FBQ0g7QUFDSixLQVZFOztBQVdISSxRQUFJLENBQUNwRSxJQUFELEVBQU8sR0FBR3FFLElBQVYsRUFBZ0I7QUFDaEI7QUFDQTtBQUNBLE9BQUNQLEdBQUcsQ0FBQzlELElBQUQsQ0FBSCxJQUFhLEVBQWQsRUFBa0JzRSxLQUFsQixHQUEwQjlMLEdBQTFCLENBQStCd0wsT0FBRCxJQUFhO0FBQ3ZDQSxlQUFPLENBQUMsR0FBR0ssSUFBSixDQUFQO0FBQ0gsT0FGRDtBQUdIOztBQWpCRSxHQUFQO0FBbUJIOztBQUNEakwsT0FBTyxDQUFDRSxPQUFSLEdBQWtCdUssSUFBbEIsQzs7Ozs7Ozs7Ozs7O0FDbkNhOztBQUNiLElBQUlVLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDbkwsVUFBWixHQUEwQm1MLEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0ExQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0IzSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFeUgsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTTRELEtBQUssR0FBR3ZMLG1CQUFPLENBQUMsZ0JBQUQsQ0FBckI7O0FBQ0EsTUFBTXdMLE1BQU0sR0FBR0gsZUFBZSxDQUFDckwsbUJBQU8sQ0FBQyxpRUFBRCxDQUFSLENBQTlCOztBQUNBLE1BQU15TCxPQUFPLEdBQUd6TCxtQkFBTyxDQUFDLG1FQUFELENBQXZCOztBQUNBLE1BQU0wTCxZQUFZLEdBQUcxTCxtQkFBTyxDQUFDLCtGQUFELENBQTVCOztBQUNBLE1BQU0yTCxlQUFlLEdBQUczTCxtQkFBTyxDQUFDLHFHQUFELENBQS9COztBQUNBLE1BQU00TCxhQUFhLEdBQUc1TCxtQkFBTyxDQUFDLGlHQUFELENBQTdCOztBQUNBLE1BQU02TCxRQUFRLEdBQUc1TixNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVM0RixXQUFULENBQXFCaUksSUFBckIsRUFBMkI7QUFDdkIsU0FBT0EsSUFBSSxDQUFDbEgsT0FBTCxDQUFhaUgsUUFBYixNQUEyQixDQUEzQixHQUErQkEsUUFBUSxHQUFHQyxJQUExQyxHQUFpREEsSUFBeEQ7QUFDSDs7QUFDRDVMLE9BQU8sQ0FBQzJELFdBQVIsR0FBc0JBLFdBQXRCOztBQUNBLFNBQVNrSSxXQUFULENBQXFCRCxJQUFyQixFQUEyQjtBQUN2QixTQUFPQSxJQUFJLENBQUNsSCxPQUFMLENBQWFpSCxRQUFiLE1BQTJCLENBQTNCLEdBQ0RDLElBQUksQ0FBQ0UsTUFBTCxDQUFZSCxRQUFRLENBQUMvQixNQUFyQixLQUFnQyxHQUQvQixHQUVEZ0MsSUFGTjtBQUdIOztBQUNENUwsT0FBTyxDQUFDNkwsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU0UsT0FBVCxDQUFpQkgsSUFBakIsRUFBdUI7QUFDbkIsU0FBT0EsSUFBSSxDQUFDck4sT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsS0FBMkIsR0FBbEM7QUFDSDs7QUFDRCxNQUFNeU4sWUFBWSxHQUFJSixJQUFELElBQVVHLE9BQU8sQ0FBQyxDQUFDSCxJQUFELElBQVNBLElBQUksS0FBSyxHQUFsQixHQUF3QixRQUF4QixHQUFtQ0EsSUFBcEMsQ0FBdEM7O0FBQ0EsU0FBU0ssYUFBVCxDQUF1QjVILFFBQXZCLEVBQWlDNkgsS0FBakMsRUFBd0NDLGNBQXhDLEVBQXdEOUosRUFBeEQsRUFBNEQ7QUFDeEQsTUFBSStKLFFBQVEsR0FBR0QsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFwQzs7QUFDQSxXQUFTRSxXQUFULEdBQXVCO0FBQ25CLFdBQU9DLEtBQUssQ0FBQ2YsT0FBTyxDQUFDL0osb0JBQVIsQ0FBNkI7QUFDdEM2QyxjQUFRLEVBQUVWLFdBQVcsRUFDckI7QUFDQyxxQkFBYzRJLGFBQWEsQ0FBQ0MsT0FBUSxHQUFFWCxXQUFXLENBQUN4SCxRQUFELENBQVcsT0FGeEMsQ0FEaUI7QUFJdEM2SDtBQUpzQyxLQUE3QixDQUFELEVBS1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLGlCQUFXLEVBQUU7QUFaYixLQUxRLENBQUwsQ0FrQko3SCxJQWxCSSxDQWtCQzhILEdBQUcsSUFBSTtBQUNYLFVBQUksQ0FBQ0EsR0FBRyxDQUFDQyxFQUFULEVBQWE7QUFDVCxZQUFJLEVBQUVQLFFBQUYsR0FBYSxDQUFiLElBQWtCTSxHQUFHLENBQUNFLE1BQUosSUFBYyxHQUFwQyxFQUF5QztBQUNyQyxpQkFBT1AsV0FBVyxFQUFsQjtBQUNIOztBQUNELGNBQU0sSUFBSTdDLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0g7O0FBQ0QsYUFBT2tELEdBQUcsQ0FBQ0csSUFBSixFQUFQO0FBQ0gsS0ExQk0sQ0FBUDtBQTJCSDs7QUFDRCxTQUFPUixXQUFXLEdBQ2J6SCxJQURFLENBQ0dqRyxJQUFJLElBQUk7QUFDZCxXQUFPMEQsRUFBRSxHQUFHQSxFQUFFLENBQUMxRCxJQUFELENBQUwsR0FBY0EsSUFBdkI7QUFDSCxHQUhNLEVBSUZvSCxLQUpFLENBSUsvQyxHQUFELElBQVM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDbUosY0FBTCxFQUFxQjtBQUNqQjtBQUNBbkosU0FBRyxDQUFDOEosSUFBSixHQUFXLGlCQUFYO0FBQ0g7O0FBQ0QsVUFBTTlKLEdBQU47QUFDSCxHQWJNLENBQVA7QUFjSDs7QUFDRCxNQUFNK0UsTUFBTixDQUFhO0FBQ1QxRSxhQUFXLENBQUNnQixRQUFELEVBQVc2SCxLQUFYLEVBQWtCN0ssRUFBbEIsRUFBc0I7QUFBRTBMLGdCQUFGO0FBQWdCQyxjQUFoQjtBQUE0QkMsT0FBNUI7QUFBaUNDLFdBQWpDO0FBQTBDOUosYUFBMUM7QUFBcURKLE9BQXJEO0FBQTBEbUssZ0JBQTFEO0FBQXdFQztBQUF4RSxHQUF0QixFQUE2RztBQUNwSDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYOztBQUNBLFNBQUtDLFVBQUwsR0FBbUJ6SixDQUFELElBQU87QUFDckIsVUFBSSxDQUFDQSxDQUFDLENBQUMwSixLQUFQLEVBQWM7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUVsSixrQkFBRjtBQUFZNkg7QUFBWixZQUFzQixJQUE1QjtBQUNBLGFBQUtzQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDakMsT0FBTyxDQUFDL0osb0JBQVIsQ0FBNkI7QUFBRTZDLGtCQUFGO0FBQVk2SDtBQUFaLFNBQTdCLENBQWpDLEVBQW9GWCxPQUFPLENBQUNrQyxNQUFSLEVBQXBGO0FBQ0E7QUFDSCxPQWRvQixDQWVyQjtBQUNBOzs7QUFDQSxVQUFJNUosQ0FBQyxDQUFDMEosS0FBRixJQUNBLEtBQUtHLEtBREwsSUFFQTdKLENBQUMsQ0FBQzBKLEtBQUYsQ0FBUWxNLEVBQVIsS0FBZSxLQUFLc00sTUFGcEIsSUFHQXRDLEtBQUssQ0FBQzFLLEtBQU4sQ0FBWWtELENBQUMsQ0FBQzBKLEtBQUYsQ0FBUTdNLEdBQXBCLEVBQXlCMkQsUUFBekIsS0FBc0MsS0FBS0EsUUFIL0MsRUFHeUQ7QUFDckQ7QUFDSCxPQXRCb0IsQ0F1QnJCO0FBQ0E7OztBQUNBLFVBQUksS0FBS3VKLElBQUwsSUFBYSxDQUFDLEtBQUtBLElBQUwsQ0FBVS9KLENBQUMsQ0FBQzBKLEtBQVosQ0FBbEIsRUFBc0M7QUFDbEM7QUFDSDs7QUFDRCxZQUFNO0FBQUU3TSxXQUFGO0FBQU9XLFVBQVA7QUFBV3dFO0FBQVgsVUFBdUJoQyxDQUFDLENBQUMwSixLQUEvQjs7QUFDQSxnQkFBMkM7QUFDdkMsWUFBSSxPQUFPN00sR0FBUCxLQUFlLFdBQWYsSUFBOEIsT0FBT1csRUFBUCxLQUFjLFdBQWhELEVBQTZEO0FBQ3pENEIsaUJBQU8sQ0FBQ2tDLElBQVIsQ0FBYSwwSEFBYjtBQUNIO0FBQ0o7O0FBQ0QsV0FBSzVHLE9BQUwsQ0FBYW1DLEdBQWIsRUFBa0JXLEVBQWxCLEVBQXNCd0UsT0FBdEI7QUFDSCxLQW5DRDs7QUFvQ0EsU0FBS2dJLGNBQUwsR0FBdUJGLE1BQUQsSUFBWTtBQUM5QixZQUFNdEosUUFBUSxHQUFHMkgsWUFBWSxDQUFDWCxLQUFLLENBQUMxSyxLQUFOLENBQVlnTixNQUFaLEVBQW9CdEosUUFBckIsQ0FBN0I7QUFDQSxhQUFPLFNBQ0R5SixTQURDLEdBRUQ3QixhQUFhLENBQUM1SCxRQUFELEVBQVcsSUFBWCxFQUFpQixLQUFLcUosS0FBdEIsRUFBNkIvTyxJQUFJLElBQUssS0FBSzBPLEdBQUwsQ0FBU2hKLFFBQVQsSUFBcUIxRixJQUEzRCxDQUZuQjtBQUdILEtBTEQ7O0FBTUEsU0FBS29QLGNBQUwsR0FBdUJKLE1BQUQsSUFBWTtBQUM5QixVQUFJO0FBQUV0SixnQkFBRjtBQUFZNkg7QUFBWixVQUFzQmIsS0FBSyxDQUFDMUssS0FBTixDQUFZZ04sTUFBWixFQUFvQixJQUFwQixDQUExQjtBQUNBdEosY0FBUSxHQUFHMkgsWUFBWSxDQUFDM0gsUUFBRCxDQUF2QjtBQUNBLGFBQU80SCxhQUFhLENBQUM1SCxRQUFELEVBQVc2SCxLQUFYLEVBQWtCLEtBQUt3QixLQUF2QixDQUFwQjtBQUNILEtBSkQsQ0E3Q29ILENBa0RwSDs7O0FBQ0EsU0FBS00sS0FBTCxHQUFhakMsT0FBTyxDQUFDMUgsUUFBRCxDQUFwQixDQW5Eb0gsQ0FvRHBIOztBQUNBLFNBQUs0SixVQUFMLEdBQWtCLEVBQWxCLENBckRvSCxDQXNEcEg7QUFDQTtBQUNBOztBQUNBLFFBQUk1SixRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDeEIsV0FBSzRKLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsSUFBOEI7QUFDMUI1SyxpQkFEMEI7QUFFMUJFLGFBQUssRUFBRXlKLFlBRm1CO0FBRzFCL0osV0FIMEI7QUFJMUJrTCxlQUFPLEVBQUVuQixZQUFZLElBQUlBLFlBQVksQ0FBQ21CLE9BSlo7QUFLMUJDLGVBQU8sRUFBRXBCLFlBQVksSUFBSUEsWUFBWSxDQUFDb0I7QUFMWixPQUE5QjtBQU9IOztBQUNELFNBQUtGLFVBQUwsQ0FBZ0IsT0FBaEIsSUFBMkI7QUFBRTdLLGVBQVMsRUFBRTZKO0FBQWIsS0FBM0IsQ0FsRW9ILENBbUVwSDtBQUNBOztBQUNBLFNBQUtyRSxNQUFMLEdBQWNiLE1BQU0sQ0FBQ2EsTUFBckI7QUFDQSxTQUFLb0UsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLM0ksUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLNkgsS0FBTCxHQUFhQSxLQUFiLENBeEVvSCxDQXlFcEg7QUFDQTs7QUFDQSxTQUFLeUIsTUFBTCxHQUNJO0FBQ0FuQyxnQkFBWSxDQUFDNEMsY0FBYixDQUE0Qi9KLFFBQTVCLEtBQXlDa0ksYUFBYSxDQUFDOEIsVUFBdkQsR0FBb0VoSyxRQUFwRSxHQUErRWhELEVBRm5GO0FBR0EsU0FBS3NLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzJDLEdBQUwsR0FBV25CLFlBQVg7QUFDQSxTQUFLb0IsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCdEIsT0FBaEIsQ0FqRm9ILENBa0ZwSDtBQUNBOztBQUNBLFNBQUtRLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7O0FBQ0EsZUFBbUMsRUFTbEM7QUFDSixHQWpHUSxDQWtHVDs7O0FBQ0EsU0FBT3FCLHdCQUFQLENBQWdDL04sR0FBaEMsRUFBcUM7QUFDakMsUUFBSTNDLEtBQUosRUFBOEMsRUFBOUMsTUFLSztBQUNELGFBQU8yQyxHQUFQO0FBQ0g7QUFDSjs7QUFDRGdPLFFBQU0sQ0FBQ1YsS0FBRCxFQUFRNUMsR0FBUixFQUFhO0FBQ2YsVUFBTWhJLFNBQVMsR0FBR2dJLEdBQUcsQ0FBQ2xMLE9BQUosSUFBZWtMLEdBQWpDO0FBQ0EsVUFBTXpNLElBQUksR0FBRyxLQUFLc1AsVUFBTCxDQUFnQkQsS0FBaEIsQ0FBYjs7QUFDQSxRQUFJLENBQUNyUCxJQUFMLEVBQVc7QUFDUCxZQUFNLElBQUk2SyxLQUFKLENBQVcsb0NBQW1Dd0UsS0FBTSxFQUFwRCxDQUFOO0FBQ0g7O0FBQ0QsVUFBTVcsT0FBTyxHQUFHakcsTUFBTSxDQUFDd0IsTUFBUCxDQUFjeEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLEVBQWQsRUFBa0J2TCxJQUFsQixDQUFkLEVBQXVDO0FBQUV5RSxlQUFGO0FBQWE4SyxhQUFPLEVBQUU5QyxHQUFHLENBQUM4QyxPQUExQjtBQUFtQ0MsYUFBTyxFQUFFL0MsR0FBRyxDQUFDK0M7QUFBaEQsS0FBdkMsQ0FBaEI7QUFDQSxTQUFLRixVQUFMLENBQWdCRCxLQUFoQixJQUF5QlcsT0FBekIsQ0FQZSxDQVFmOztBQUNBLFFBQUlYLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQ25CLFdBQUtZLE1BQUwsQ0FBWSxLQUFLWCxVQUFMLENBQWdCLEtBQUtELEtBQXJCLENBQVo7QUFDQTtBQUNIOztBQUNELFFBQUlBLEtBQUssS0FBSyxLQUFLQSxLQUFuQixFQUEwQjtBQUN0QixXQUFLWSxNQUFMLENBQVlELE9BQVo7QUFDSDtBQUNKOztBQUNERSxRQUFNLEdBQUc7QUFDTGhOLFVBQU0sQ0FBQ3lDLFFBQVAsQ0FBZ0J1SyxNQUFoQjtBQUNIO0FBQ0Q7Ozs7O0FBR0FDLE1BQUksR0FBRztBQUNIak4sVUFBTSxDQUFDa04sT0FBUCxDQUFlRCxJQUFmO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQWpFLE1BQUksQ0FBQ25LLEdBQUQsRUFBTVcsRUFBRSxHQUFHWCxHQUFYLEVBQWdCbUYsT0FBTyxHQUFHLEVBQTFCLEVBQThCO0FBQzlCLFdBQU8sS0FBS21KLE1BQUwsQ0FBWSxXQUFaLEVBQXlCdE8sR0FBekIsRUFBOEJXLEVBQTlCLEVBQWtDd0UsT0FBbEMsQ0FBUDtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUF0SCxTQUFPLENBQUNtQyxHQUFELEVBQU1XLEVBQUUsR0FBR1gsR0FBWCxFQUFnQm1GLE9BQU8sR0FBRyxFQUExQixFQUE4QjtBQUNqQyxXQUFPLEtBQUttSixNQUFMLENBQVksY0FBWixFQUE0QnRPLEdBQTVCLEVBQWlDVyxFQUFqQyxFQUFxQ3dFLE9BQXJDLENBQVA7QUFDSDs7QUFDRG1KLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTN08sSUFBVCxFQUFlOE8sR0FBZixFQUFvQnJKLE9BQXBCLEVBQTZCO0FBQy9CLFdBQU8sSUFBSWlJLE9BQUosQ0FBWSxDQUFDdkosT0FBRCxFQUFVNEssTUFBVixLQUFxQjtBQUNwQyxVQUFJLENBQUN0SixPQUFPLENBQUN1SixFQUFiLEVBQWlCO0FBQ2IsYUFBSzFCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsT0FIbUMsQ0FJcEM7OztBQUNBLFVBQUluQyxPQUFPLENBQUM4RCxFQUFaLEVBQWdCO0FBQ1pDLG1CQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSCxPQVBtQyxDQVFwQztBQUNBOzs7QUFDQSxVQUFJN08sR0FBRyxHQUFHLE9BQU9OLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJtTCxPQUFPLENBQUMvSixvQkFBUixDQUE2QnBCLElBQTdCLENBQTNCLEdBQWdFQSxJQUExRTtBQUNBLFVBQUlpQixFQUFFLEdBQUcsT0FBTzZOLEdBQVAsS0FBZSxRQUFmLEdBQTBCM0QsT0FBTyxDQUFDL0osb0JBQVIsQ0FBNkIwTixHQUE3QixDQUExQixHQUE4REEsR0FBdkU7QUFDQXhPLFNBQUcsR0FBR2lELFdBQVcsQ0FBQ2pELEdBQUQsQ0FBakI7QUFDQVcsUUFBRSxHQUFHc0MsV0FBVyxDQUFDdEMsRUFBRCxDQUFoQixDQWJvQyxDQWNwQztBQUNBOztBQUNBLFVBQUl0RCxLQUFKLEVBQThDLEVBTzdDOztBQUNELFdBQUt5UixrQkFBTCxDQUF3Qm5PLEVBQXhCLEVBeEJvQyxDQXlCcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJLENBQUN3RSxPQUFPLENBQUN1SixFQUFULElBQWUsS0FBS0ssZUFBTCxDQUFxQnBPLEVBQXJCLENBQW5CLEVBQTZDO0FBQ3pDLGFBQUtzTSxNQUFMLEdBQWN0TSxFQUFkO0FBQ0EwRyxjQUFNLENBQUNhLE1BQVAsQ0FBY29DLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDM0osRUFBdEM7QUFDQSxhQUFLbU0sV0FBTCxDQUFpQnlCLE1BQWpCLEVBQXlCdk8sR0FBekIsRUFBOEJXLEVBQTlCLEVBQWtDd0UsT0FBbEM7QUFDQSxhQUFLNkosWUFBTCxDQUFrQnJPLEVBQWxCO0FBQ0EwRyxjQUFNLENBQUNhLE1BQVAsQ0FBY29DLElBQWQsQ0FBbUIsb0JBQW5CLEVBQXlDM0osRUFBekM7QUFDQSxlQUFPa0QsT0FBTyxDQUFDLElBQUQsQ0FBZDtBQUNIOztBQUNELFlBQU07QUFBRUYsZ0JBQUY7QUFBWTZILGFBQVo7QUFBbUJuTDtBQUFuQixVQUFnQ3NLLEtBQUssQ0FBQzFLLEtBQU4sQ0FBWUQsR0FBWixFQUFpQixJQUFqQixDQUF0Qzs7QUFDQSxVQUFJLENBQUMyRCxRQUFELElBQWF0RCxRQUFqQixFQUEyQjtBQUN2QixrQkFBMkM7QUFDdkMsZ0JBQU0sSUFBSXlJLEtBQUosQ0FBVyxrQ0FBaUM5SSxHQUFJLGtEQUFoRCxDQUFOO0FBQ0g7O0FBQ0QsZUFBTzZELE9BQU8sQ0FBQyxLQUFELENBQWQ7QUFDSCxPQTVDbUMsQ0E2Q3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQUksQ0FBQyxLQUFLb0wsUUFBTCxDQUFjdE8sRUFBZCxDQUFMLEVBQXdCO0FBQ3BCNE4sY0FBTSxHQUFHLGNBQVQ7QUFDSDs7QUFDRCxZQUFNakIsS0FBSyxHQUFHakMsT0FBTyxDQUFDMUgsUUFBRCxDQUFyQjtBQUNBLFlBQU07QUFBRU0sZUFBTyxHQUFHO0FBQVosVUFBc0JrQixPQUE1Qjs7QUFDQSxVQUFJMkYsWUFBWSxDQUFDNEMsY0FBYixDQUE0QkosS0FBNUIsQ0FBSixFQUF3QztBQUNwQyxjQUFNO0FBQUUzSixrQkFBUSxFQUFFdUw7QUFBWixZQUEyQnZFLEtBQUssQ0FBQzFLLEtBQU4sQ0FBWVUsRUFBWixDQUFqQztBQUNBLGNBQU13TyxVQUFVLEdBQUduRSxhQUFhLENBQUNvRSxhQUFkLENBQTRCOUIsS0FBNUIsQ0FBbkI7QUFDQSxjQUFNK0IsVUFBVSxHQUFHdEUsZUFBZSxDQUFDdUUsZUFBaEIsQ0FBZ0NILFVBQWhDLEVBQTRDRCxVQUE1QyxDQUFuQjs7QUFDQSxZQUFJLENBQUNHLFVBQUwsRUFBaUI7QUFDYixnQkFBTUUsYUFBYSxHQUFHdkgsTUFBTSxDQUFDd0gsSUFBUCxDQUFZTCxVQUFVLENBQUNNLE1BQXZCLEVBQStCOVEsTUFBL0IsQ0FBc0MrUSxLQUFLLElBQUksQ0FBQ2xFLEtBQUssQ0FBQ2tFLEtBQUQsQ0FBckQsQ0FBdEI7O0FBQ0EsY0FBSUgsYUFBYSxDQUFDckcsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixzQkFBMkM7QUFDdkMzRyxxQkFBTyxDQUFDa0MsSUFBUixDQUFjLDZEQUFELEdBQ1IsZUFBYzhLLGFBQWEsQ0FBQ25TLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsOEJBRDVDO0FBRUg7O0FBQ0QsbUJBQU9xUixNQUFNLENBQUMsSUFBSTNGLEtBQUosQ0FBVyw4QkFBNkJvRyxVQUFXLDhDQUE2QzVCLEtBQU0sS0FBNUYsR0FDbkIsNkRBRFMsQ0FBRCxDQUFiO0FBRUg7QUFDSixTQVZELE1BV0s7QUFDRDtBQUNBdEYsZ0JBQU0sQ0FBQ3dCLE1BQVAsQ0FBY2dDLEtBQWQsRUFBcUI2RCxVQUFyQjtBQUNIO0FBQ0o7O0FBQ0RoSSxZQUFNLENBQUNhLE1BQVAsQ0FBY29DLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDM0osRUFBdkMsRUEzRW9DLENBNEVwQzs7QUFDQSxXQUFLZ1AsWUFBTCxDQUFrQnJDLEtBQWxCLEVBQXlCM0osUUFBekIsRUFBbUM2SCxLQUFuQyxFQUEwQzdLLEVBQTFDLEVBQThDc0QsT0FBOUMsRUFBdURDLElBQXZELENBQTREMEwsU0FBUyxJQUFJO0FBQ3JFLGNBQU07QUFBRXBOO0FBQUYsWUFBWW9OLFNBQWxCOztBQUNBLFlBQUlwTixLQUFLLElBQUlBLEtBQUssQ0FBQ3FOLFNBQW5CLEVBQThCO0FBQzFCLGlCQUFPaE0sT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNIOztBQUNEd0QsY0FBTSxDQUFDYSxNQUFQLENBQWNvQyxJQUFkLENBQW1CLHFCQUFuQixFQUEwQzNKLEVBQTFDO0FBQ0EsYUFBS21NLFdBQUwsQ0FBaUJ5QixNQUFqQixFQUF5QnZPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQ3dFLE9BQWxDOztBQUNBLGtCQUEyQztBQUN2QyxnQkFBTTJLLE9BQU8sR0FBRyxLQUFLdkMsVUFBTCxDQUFnQixPQUFoQixFQUF5QjdLLFNBQXpDO0FBQ0F2QixnQkFBTSxDQUFDNE8sSUFBUCxDQUFZQyxhQUFaLEdBQ0lGLE9BQU8sQ0FBQ25HLGVBQVIsS0FBNEJtRyxPQUFPLENBQUNsRyxtQkFBcEMsSUFDSSxDQUFDZ0csU0FBUyxDQUFDbE4sU0FBVixDQUFvQmlILGVBRjdCO0FBR0g7O0FBQ0QsYUFBS3RILEdBQUwsQ0FBU2lMLEtBQVQsRUFBZ0IzSixRQUFoQixFQUEwQjZILEtBQTFCLEVBQWlDN0ssRUFBakMsRUFBcUNpUCxTQUFyQzs7QUFDQSxZQUFJcE4sS0FBSixFQUFXO0FBQ1A2RSxnQkFBTSxDQUFDYSxNQUFQLENBQWNvQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzlILEtBQXZDLEVBQThDN0IsRUFBOUM7QUFDQSxnQkFBTTZCLEtBQU47QUFDSDs7QUFDRDZFLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjb0MsSUFBZCxDQUFtQixxQkFBbkIsRUFBMEMzSixFQUExQztBQUNBLGVBQU9rRCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FwQkQsRUFvQkc0SyxNQXBCSDtBQXFCSCxLQWxHTSxDQUFQO0FBbUdIOztBQUNEM0IsYUFBVyxDQUFDeUIsTUFBRCxFQUFTdk8sR0FBVCxFQUFjVyxFQUFkLEVBQWtCd0UsT0FBTyxHQUFHLEVBQTVCLEVBQWdDO0FBQ3ZDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT2hFLE1BQU0sQ0FBQ2tOLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkM5TCxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPckIsTUFBTSxDQUFDa04sT0FBUCxDQUFlRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0NoTSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQkFBMEIrTCxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQjFELE9BQU8sQ0FBQ2tDLE1BQVIsT0FBcUJwTSxFQUFuRCxFQUF1RDtBQUNuRFEsWUFBTSxDQUFDa04sT0FBUCxDQUFlRSxNQUFmLEVBQXVCO0FBQ25Cdk8sV0FEbUI7QUFFbkJXLFVBRm1CO0FBR25Cd0U7QUFIbUIsT0FBdkIsRUFLQTtBQUNBO0FBQ0E7QUFDQSxRQVJBLEVBUUl4RSxFQVJKO0FBU0g7QUFDSjs7QUFDRGdQLGNBQVksQ0FBQ3JDLEtBQUQsRUFBUTNKLFFBQVIsRUFBa0I2SCxLQUFsQixFQUF5QjdLLEVBQXpCLEVBQTZCc0QsT0FBTyxHQUFHLEtBQXZDLEVBQThDO0FBQ3RELFVBQU1nTSxlQUFlLEdBQUcsS0FBSzFDLFVBQUwsQ0FBZ0JELEtBQWhCLENBQXhCLENBRHNELENBRXREO0FBQ0E7O0FBQ0EsUUFBSXJKLE9BQU8sSUFBSWdNLGVBQVgsSUFBOEIsS0FBSzNDLEtBQUwsS0FBZUEsS0FBakQsRUFBd0Q7QUFDcEQsYUFBT0YsT0FBTyxDQUFDdkosT0FBUixDQUFnQm9NLGVBQWhCLENBQVA7QUFDSDs7QUFDRCxVQUFNQyxXQUFXLEdBQUcsQ0FBQzVOLEdBQUQsRUFBTTZOLGFBQU4sS0FBd0I7QUFDeEMsYUFBTyxJQUFJL0MsT0FBSixDQUFZdkosT0FBTyxJQUFJO0FBQzFCLFlBQUl2QixHQUFHLENBQUM4SixJQUFKLEtBQWEsaUJBQWIsSUFBa0MrRCxhQUF0QyxFQUFxRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FoUCxnQkFBTSxDQUFDeUMsUUFBUCxDQUFnQjdELElBQWhCLEdBQXVCWSxFQUF2QixDQU5pRCxDQU9qRDtBQUNBOztBQUNBMkIsYUFBRyxDQUFDdU4sU0FBSixHQUFnQixJQUFoQixDQVRpRCxDQVVqRDs7QUFDQSxpQkFBT2hNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRCxZQUFJQSxHQUFHLENBQUN1TixTQUFSLEVBQW1CO0FBQ2Y7QUFDQSxpQkFBT2hNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRHVCLGVBQU8sQ0FBQyxLQUFLdU0sY0FBTCxDQUFvQixTQUFwQixFQUNIbE0sSUFERyxDQUNFOEgsR0FBRyxJQUFJO0FBQ2IsZ0JBQU07QUFBRXFFLGdCQUFJLEVBQUUzTjtBQUFSLGNBQXNCc0osR0FBNUI7QUFDQSxnQkFBTTRELFNBQVMsR0FBRztBQUFFbE4scUJBQUY7QUFBYUo7QUFBYixXQUFsQjtBQUNBLGlCQUFPLElBQUk4SyxPQUFKLENBQVl2SixPQUFPLElBQUk7QUFDMUIsaUJBQUs4RixlQUFMLENBQXFCakgsU0FBckIsRUFBZ0M7QUFDNUJKLGlCQUQ0QjtBQUU1QnFCLHNCQUY0QjtBQUc1QjZIO0FBSDRCLGFBQWhDLEVBSUd0SCxJQUpILENBSVF0QixLQUFLLElBQUk7QUFDYmdOLHVCQUFTLENBQUNoTixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBZ04sdUJBQVMsQ0FBQ3BOLEtBQVYsR0FBa0JGLEdBQWxCO0FBQ0F1QixxQkFBTyxDQUFDK0wsU0FBRCxDQUFQO0FBQ0gsYUFSRCxFQVFHVSxNQUFNLElBQUk7QUFDVC9OLHFCQUFPLENBQUNDLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RDhOLE1BQXpEO0FBQ0FWLHVCQUFTLENBQUNwTixLQUFWLEdBQWtCRixHQUFsQjtBQUNBc04sdUJBQVMsQ0FBQ2hOLEtBQVYsR0FBa0IsRUFBbEI7QUFDQWlCLHFCQUFPLENBQUMrTCxTQUFELENBQVA7QUFDSCxhQWJEO0FBY0gsV0FmTSxDQUFQO0FBZ0JILFNBcEJPLEVBcUJIdkssS0FyQkcsQ0FxQkcvQyxHQUFHLElBQUk0TixXQUFXLENBQUM1TixHQUFELEVBQU0sSUFBTixDQXJCckIsQ0FBRCxDQUFQO0FBc0JILE9BeENNLENBQVA7QUF5Q0gsS0ExQ0Q7O0FBMkNBLFdBQU8sSUFBSThLLE9BQUosQ0FBWSxDQUFDdkosT0FBRCxFQUFVNEssTUFBVixLQUFxQjtBQUNwQyxVQUFJd0IsZUFBSixFQUFxQjtBQUNqQixlQUFPcE0sT0FBTyxDQUFDb00sZUFBRCxDQUFkO0FBQ0g7O0FBQ0QsV0FBS0csY0FBTCxDQUFvQjlDLEtBQXBCLEVBQTJCcEosSUFBM0IsQ0FBZ0M4SCxHQUFHLElBQUluSSxPQUFPLENBQUM7QUFDM0NuQixpQkFBUyxFQUFFc0osR0FBRyxDQUFDcUUsSUFENEI7QUFFM0M3QyxlQUFPLEVBQUV4QixHQUFHLENBQUN0QixHQUFKLENBQVE4QyxPQUYwQjtBQUczQ0MsZUFBTyxFQUFFekIsR0FBRyxDQUFDdEIsR0FBSixDQUFRK0M7QUFIMEIsT0FBRCxDQUE5QyxFQUlJZ0IsTUFKSjtBQUtILEtBVE0sRUFVRnZLLElBVkUsQ0FVSTBMLFNBQUQsSUFBZTtBQUNyQixZQUFNO0FBQUVsTixpQkFBRjtBQUFhOEssZUFBYjtBQUFzQkM7QUFBdEIsVUFBa0NtQyxTQUF4Qzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTTtBQUFFVztBQUFGLFlBQXlCblIsbUJBQU8sQ0FBQywwQkFBRCxDQUF0Qzs7QUFDQSxZQUFJLENBQUNtUixrQkFBa0IsQ0FBQzdOLFNBQUQsQ0FBdkIsRUFBb0M7QUFDaEMsZ0JBQU0sSUFBSW9HLEtBQUosQ0FBVyx5REFBd0RuRixRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBSzZNLFFBQUwsQ0FBYyxNQUFNaEQsT0FBTyxHQUM1QixLQUFLTCxjQUFMLENBQW9CeE0sRUFBcEIsQ0FENEIsR0FFNUI4TSxPQUFPLEdBQ0gsS0FBS0osY0FBTCxDQUFvQjFNLEVBQXBCLENBREcsR0FFSCxLQUFLZ0osZUFBTCxDQUFxQmpILFNBQXJCLEVBQ0Y7QUFDQTtBQUNJaUIsZ0JBREo7QUFFSTZILGFBRko7QUFHSXlCLGNBQU0sRUFBRXRNO0FBSFosT0FGRSxDQUpILEVBVUt1RCxJQVZMLENBVVV0QixLQUFLLElBQUk7QUFDdEJnTixpQkFBUyxDQUFDaE4sS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxhQUFLMkssVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJzQyxTQUF6QjtBQUNBLGVBQU9BLFNBQVA7QUFDSCxPQWRNLENBQVA7QUFlSCxLQWpDTSxFQWtDRnZLLEtBbENFLENBa0NJNkssV0FsQ0osQ0FBUDtBQW1DSDs7QUFDRDdOLEtBQUcsQ0FBQ2lMLEtBQUQsRUFBUTNKLFFBQVIsRUFBa0I2SCxLQUFsQixFQUF5QjdLLEVBQXpCLEVBQTZCMUMsSUFBN0IsRUFBbUM7QUFDbEMsU0FBS3lPLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLWSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLM0osUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLNkgsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS3lCLE1BQUwsR0FBY3RNLEVBQWQ7QUFDQSxTQUFLdU4sTUFBTCxDQUFZalEsSUFBWjtBQUNIO0FBQ0Q7Ozs7OztBQUlBd1MsZ0JBQWMsQ0FBQzlPLEVBQUQsRUFBSztBQUNmLFNBQUt1TCxJQUFMLEdBQVl2TCxFQUFaO0FBQ0g7O0FBQ0RvTixpQkFBZSxDQUFDcE8sRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLc00sTUFBVixFQUNJLE9BQU8sS0FBUDtBQUNKLFVBQU0sQ0FBQ3lELFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLMUQsTUFBTCxDQUFZMkQsS0FBWixDQUFrQixHQUFsQixDQUFoQztBQUNBLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxPQUFmLElBQTBCblEsRUFBRSxDQUFDaVEsS0FBSCxDQUFTLEdBQVQsQ0FBaEMsQ0FKZ0IsQ0FLaEI7O0FBQ0EsUUFBSUUsT0FBTyxJQUFJSixZQUFZLEtBQUtHLFlBQTVCLElBQTRDRixPQUFPLEtBQUtHLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUmUsQ0FTaEI7OztBQUNBLFFBQUlKLFlBQVksS0FBS0csWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FaZSxDQWFoQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0YsT0FBTyxLQUFLRyxPQUFuQjtBQUNIOztBQUNEOUIsY0FBWSxDQUFDck8sRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHb1EsSUFBSCxJQUFXcFEsRUFBRSxDQUFDaVEsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViOztBQUNBLFFBQUlHLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2I1UCxZQUFNLENBQUNpRCxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0E7QUFDSCxLQU5ZLENBT2I7OztBQUNBLFVBQU00TSxJQUFJLEdBQUczTSxRQUFRLENBQUM0TSxjQUFULENBQXdCRixJQUF4QixDQUFiOztBQUNBLFFBQUlDLElBQUosRUFBVTtBQUNOQSxVQUFJLENBQUNFLGNBQUw7QUFDQTtBQUNILEtBWlksQ0FhYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUc5TSxRQUFRLENBQUMrTSxpQkFBVCxDQUEyQkwsSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJSSxNQUFKLEVBQVk7QUFDUkEsWUFBTSxDQUFDRCxjQUFQO0FBQ0g7QUFDSjs7QUFDRGpDLFVBQVEsQ0FBQ2hDLE1BQUQsRUFBUztBQUNiLFdBQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7QUFDSDtBQUNEOzs7Ozs7OztBQU1BekksVUFBUSxDQUFDeEUsR0FBRCxFQUFNaU4sTUFBTSxHQUFHak4sR0FBZixFQUFvQm1GLE9BQU8sR0FBRyxFQUE5QixFQUFrQztBQUN0QyxXQUFPLElBQUlpSSxPQUFKLENBQVksQ0FBQ3ZKLE9BQUQsRUFBVTRLLE1BQVYsS0FBcUI7QUFDcEMsWUFBTTtBQUFFOUssZ0JBQUY7QUFBWXREO0FBQVosVUFBeUJzSyxLQUFLLENBQUMxSyxLQUFOLENBQVlELEdBQVosQ0FBL0I7O0FBQ0EsVUFBSSxDQUFDMkQsUUFBRCxJQUFhdEQsUUFBakIsRUFBMkI7QUFDdkIsa0JBQTJDO0FBQ3ZDLGdCQUFNLElBQUl5SSxLQUFKLENBQVcsa0NBQWlDOUksR0FBSSxrREFBaEQsQ0FBTjtBQUNIOztBQUNEO0FBQ0gsT0FQbUMsQ0FRcEM7OztBQUNBLGdCQUEyQztBQUN2QztBQUNIOztBQUNELFlBQU1zTixLQUFLLEdBQUduQyxXQUFXLENBQUNFLE9BQU8sQ0FBQzFILFFBQUQsQ0FBUixDQUF6QjtBQUNBeUosYUFBTyxDQUFDcEQsR0FBUixDQUFZLENBQ1IsS0FBS3NDLFVBQUwsQ0FBZ0IrRSxZQUFoQixDQUE2QnJSLEdBQTdCLEVBQWtDbUwsV0FBVyxDQUFDOEIsTUFBRCxDQUE3QyxDQURRLEVBRVIsS0FBS1gsVUFBTCxDQUFnQm5ILE9BQU8sQ0FBQ1csUUFBUixHQUFtQixVQUFuQixHQUFnQyxVQUFoRCxFQUE0RHdILEtBQTVELENBRlEsQ0FBWixFQUdHcEosSUFISCxDQUdRLE1BQU1MLE9BQU8sRUFIckIsRUFHeUI0SyxNQUh6QjtBQUlILEtBakJNLENBQVA7QUFrQkg7O0FBQ0QsUUFBTTJCLGNBQU4sQ0FBcUI5QyxLQUFyQixFQUE0QjtBQUN4QixRQUFJdUMsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU15QixNQUFNLEdBQUksS0FBS3pELEdBQUwsR0FBVyxNQUFNO0FBQzdCZ0MsZUFBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBdkMsU0FBSyxHQUFHbkMsV0FBVyxDQUFDbUMsS0FBRCxDQUFuQjtBQUNBLFVBQU1pRSxlQUFlLEdBQUcsTUFBTSxLQUFLakYsVUFBTCxDQUFnQmtGLFFBQWhCLENBQXlCbEUsS0FBekIsQ0FBOUI7O0FBQ0EsUUFBSXVDLFNBQUosRUFBZTtBQUNYLFlBQU1yTixLQUFLLEdBQUcsSUFBSXNHLEtBQUosQ0FBVyx3Q0FBdUN3RSxLQUFNLEdBQXhELENBQWQ7QUFDQTlLLFdBQUssQ0FBQ3FOLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNck4sS0FBTjtBQUNIOztBQUNELFFBQUk4TyxNQUFNLEtBQUssS0FBS3pELEdBQXBCLEVBQXlCO0FBQ3JCLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsV0FBTzBELGVBQVA7QUFDSDs7QUFDRGYsVUFBUSxDQUFDaUIsRUFBRCxFQUFLO0FBQ1QsUUFBSTVCLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNeUIsTUFBTSxHQUFHLE1BQU07QUFDakJ6QixlQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsU0FBS2hDLEdBQUwsR0FBV3lELE1BQVg7QUFDQSxXQUFPRyxFQUFFLEdBQUd2TixJQUFMLENBQVVqRyxJQUFJLElBQUk7QUFDckIsVUFBSXFULE1BQU0sS0FBSyxLQUFLekQsR0FBcEIsRUFBeUI7QUFDckIsYUFBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxVQUFJZ0MsU0FBSixFQUFlO0FBQ1gsY0FBTXZOLEdBQUcsR0FBRyxJQUFJd0csS0FBSixDQUFVLGlDQUFWLENBQVo7QUFDQXhHLFdBQUcsQ0FBQ3VOLFNBQUosR0FBZ0IsSUFBaEI7QUFDQSxjQUFNdk4sR0FBTjtBQUNIOztBQUNELGFBQU9yRSxJQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0g7O0FBQ0QwTCxpQkFBZSxDQUFDakgsU0FBRCxFQUFZZ1AsR0FBWixFQUFpQjtBQUM1QixVQUFNO0FBQUVoUCxlQUFTLEVBQUU2SjtBQUFiLFFBQXFCLEtBQUtnQixVQUFMLENBQWdCLE9BQWhCLENBQTNCOztBQUNBLFVBQU1vRSxPQUFPLEdBQUcsS0FBSzdELFFBQUwsQ0FBY3ZCLEdBQWQsQ0FBaEI7O0FBQ0FtRixPQUFHLENBQUNDLE9BQUosR0FBY0EsT0FBZDtBQUNBLFdBQU85RyxPQUFPLENBQUMrRyxtQkFBUixDQUE0QnJGLEdBQTVCLEVBQWlDO0FBQ3BDb0YsYUFEb0M7QUFFcENqUCxlQUZvQztBQUdwQ2dGLFlBQU0sRUFBRSxJQUg0QjtBQUlwQ2dLO0FBSm9DLEtBQWpDLENBQVA7QUFNSDs7QUFDRDVDLG9CQUFrQixDQUFDbk8sRUFBRCxFQUFLO0FBQ25CLFFBQUksS0FBS2tOLEdBQVQsRUFBYztBQUNWLFlBQU0xSyxDQUFDLEdBQUcsSUFBSTJGLEtBQUosQ0FBVSxpQkFBVixDQUFWO0FBQ0EzRixPQUFDLENBQUMwTSxTQUFGLEdBQWMsSUFBZDtBQUNBeEksWUFBTSxDQUFDYSxNQUFQLENBQWNvQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q25ILENBQXZDLEVBQTBDeEMsRUFBMUM7QUFDQSxXQUFLa04sR0FBTDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7QUFDREssUUFBTSxDQUFDalEsSUFBRCxFQUFPO0FBQ1QsU0FBSzJQLEdBQUwsQ0FBUzNQLElBQVQsRUFBZSxLQUFLc1AsVUFBTCxDQUFnQixPQUFoQixFQUF5QjdLLFNBQXhDO0FBQ0g7O0FBdmZROztBQXlmYnBELE9BQU8sQ0FBQ0UsT0FBUixHQUFrQjZILE1BQWxCO0FBQ0FBLE1BQU0sQ0FBQ2EsTUFBUCxHQUFnQjBDLE1BQU0sQ0FBQ3BMLE9BQVAsRUFBaEIsQzs7Ozs7Ozs7Ozs7O0FDbGtCYTs7QUFDYndJLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjNJLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUV5SCxPQUFLLEVBQUU7QUFBVCxDQUE3QyxFLENBQ0E7O0FBQ0EsTUFBTThLLFVBQVUsR0FBRyxzQkFBbkI7O0FBQ0EsU0FBU25FLGNBQVQsQ0FBd0JKLEtBQXhCLEVBQStCO0FBQzNCLFNBQU91RSxVQUFVLENBQUNDLElBQVgsQ0FBZ0J4RSxLQUFoQixDQUFQO0FBQ0g7O0FBQ0RoTyxPQUFPLENBQUNvTyxjQUFSLEdBQXlCQSxjQUF6QixDOzs7Ozs7Ozs7Ozs7QUNQYTs7QUFDYjFGLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjNJLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUV5SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxTQUFTdUksZUFBVCxDQUF5QkgsVUFBekIsRUFBcUM7QUFDakMsUUFBTTtBQUFFNEMsTUFBRjtBQUFNdEM7QUFBTixNQUFpQk4sVUFBdkI7QUFDQSxTQUFReEwsUUFBRCxJQUFjO0FBQ2pCLFVBQU0wTCxVQUFVLEdBQUcwQyxFQUFFLENBQUNDLElBQUgsQ0FBUXJPLFFBQVIsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDMEwsVUFBTCxFQUFpQjtBQUNiLGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU00QyxNQUFNLEdBQUl2QyxLQUFELElBQVc7QUFDdEIsVUFBSTtBQUNBLGVBQU93QyxrQkFBa0IsQ0FBQ3hDLEtBQUQsQ0FBekI7QUFDSCxPQUZELENBR0EsT0FBT3lDLENBQVAsRUFBVTtBQUNOLGNBQU03UCxHQUFHLEdBQUcsSUFBSXdHLEtBQUosQ0FBVSx3QkFBVixDQUFaO0FBQ0F4RyxXQUFHLENBQUM4SixJQUFKLEdBQVcsZUFBWDtBQUNBLGNBQU05SixHQUFOO0FBQ0g7QUFDSixLQVREOztBQVVBLFVBQU04UCxNQUFNLEdBQUcsRUFBZjtBQUNBcEssVUFBTSxDQUFDd0gsSUFBUCxDQUFZQyxNQUFaLEVBQW9CcFIsT0FBcEIsQ0FBNkJnVSxRQUFELElBQWM7QUFDdEMsWUFBTUMsQ0FBQyxHQUFHN0MsTUFBTSxDQUFDNEMsUUFBRCxDQUFoQjtBQUNBLFlBQU1FLENBQUMsR0FBR2xELFVBQVUsQ0FBQ2lELENBQUMsQ0FBQ0UsR0FBSCxDQUFwQjs7QUFDQSxVQUFJRCxDQUFDLEtBQUtqUixTQUFWLEVBQXFCO0FBQ2pCOFEsY0FBTSxDQUFDQyxRQUFELENBQU4sR0FBbUIsQ0FBQ0UsQ0FBQyxDQUFDdk8sT0FBRixDQUFVLEdBQVYsQ0FBRCxHQUNidU8sQ0FBQyxDQUFDM0IsS0FBRixDQUFRLEdBQVIsRUFBYWxTLEdBQWIsQ0FBaUI4QyxLQUFLLElBQUl5USxNQUFNLENBQUN6USxLQUFELENBQWhDLENBRGEsR0FFYjhRLENBQUMsQ0FBQ0csTUFBRixHQUNJLENBQUNSLE1BQU0sQ0FBQ00sQ0FBRCxDQUFQLENBREosR0FFSU4sTUFBTSxDQUFDTSxDQUFELENBSmhCO0FBS0g7QUFDSixLQVZEO0FBV0EsV0FBT0gsTUFBUDtBQUNILEdBNUJEO0FBNkJIOztBQUNEOVMsT0FBTyxDQUFDZ1EsZUFBUixHQUEwQkEsZUFBMUIsQzs7Ozs7Ozs7Ozs7O0FDbENhOztBQUNidEgsTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDLEUsQ0FDQTtBQUNBOztBQUNBLFNBQVMyTCxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN0QixTQUFPQSxHQUFHLENBQUM5VSxPQUFKLENBQVksc0JBQVosRUFBb0MsTUFBcEMsQ0FBUDtBQUNIOztBQUNELFNBQVN1UixhQUFULENBQXVCd0QsZUFBdkIsRUFBd0M7QUFDcEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdILFdBQVcsQ0FBQ0UsZUFBZSxDQUFDL1UsT0FBaEIsQ0FBd0IsS0FBeEIsRUFBK0IsRUFBL0IsS0FBc0MsR0FBdkMsQ0FBaEM7QUFDQSxRQUFNNFIsTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJcUQsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdGLFlBQVksQ0FBQ2hWLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELENBQUNzVSxDQUFELEVBQUlhLEVBQUosS0FBVztBQUN0RixVQUFNQyxVQUFVLEdBQUcsYUFBYW5CLElBQWIsQ0FBa0JrQixFQUFsQixDQUFuQjtBQUNBdkQsVUFBTSxDQUFDdUQsRUFBRSxDQUNMO0FBREssS0FFSm5WLE9BRkUsQ0FFTSwwQkFGTixFQUVrQyxJQUZsQyxFQUdGQSxPQUhFLENBR00sUUFITixFQUdnQixFQUhoQixDQUFELENBSU47QUFKTSxLQUFOLEdBS0k7QUFBRTJVLFNBQUcsRUFBRU0sVUFBVSxFQUFqQjtBQUFxQkwsWUFBTSxFQUFFUTtBQUE3QixLQUxKO0FBTUEsV0FBT0EsVUFBVSxHQUFHLFFBQUgsR0FBYyxXQUEvQjtBQUNILEdBVDBCLENBQTNCO0FBVUEsTUFBSUMsdUJBQUosQ0Fmb0MsQ0FnQnBDO0FBQ0E7O0FBQ0EsWUFBbUM7QUFDL0JBLDJCQUF1QixHQUFHTCxZQUFZLENBQUNoVixPQUFiLENBQXFCLDZCQUFyQixFQUFvRCxDQUFDc1UsQ0FBRCxFQUFJYSxFQUFKLEtBQVc7QUFDckYsWUFBTUMsVUFBVSxHQUFHLGFBQWFuQixJQUFiLENBQWtCa0IsRUFBbEIsQ0FBbkI7QUFDQSxZQUFNRyxHQUFHLEdBQUdILEVBQUUsQ0FDVjtBQURVLE9BRVRuVixPQUZPLENBRUMsMEJBRkQsRUFFNkIsSUFGN0IsRUFHUEEsT0FITyxDQUdDLFFBSEQsRUFHVyxFQUhYLENBQVo7QUFJQSxhQUFPb1YsVUFBVSxHQUNWLE9BQU1QLFdBQVcsQ0FBQ1MsR0FBRCxDQUFNLE9BRGIsR0FFVixPQUFNVCxXQUFXLENBQUNTLEdBQUQsQ0FBTSxVQUY5QjtBQUdILEtBVHlCLENBQTFCO0FBVUg7O0FBQ0QsU0FBT25MLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBYztBQUFFdUksTUFBRSxFQUFFLElBQUlxQixNQUFKLENBQVcsTUFBTUwsa0JBQU4sR0FBMkIsU0FBdEMsRUFBaUQsR0FBakQsQ0FBTjtBQUE2RHREO0FBQTdELEdBQWQsRUFBc0Z5RCx1QkFBdUIsR0FDOUc7QUFDRUcsY0FBVSxFQUFHLElBQUdILHVCQUF3QjtBQUQxQyxHQUQ4RyxHQUk5RyxFQUpDLENBQVA7QUFLSDs7QUFDRDVULE9BQU8sQ0FBQzhQLGFBQVIsR0FBd0JBLGFBQXhCLEM7Ozs7Ozs7Ozs7OztBQzNDYTs7QUFDYnBILE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjNJLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUV5SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNNEQsS0FBSyxHQUFHdkwsbUJBQU8sQ0FBQyxnQkFBRCxDQUFyQjtBQUNBOzs7OztBQUdBLFNBQVNnSCxRQUFULENBQWtCcUwsRUFBbEIsRUFBc0I7QUFDbEIsTUFBSTZCLElBQUksR0FBRyxLQUFYO0FBQ0EsTUFBSTFTLE1BQUo7QUFDQSxTQUFRLENBQUMsR0FBR3VJLElBQUosS0FBYTtBQUNqQixRQUFJLENBQUNtSyxJQUFMLEVBQVc7QUFDUEEsVUFBSSxHQUFHLElBQVA7QUFDQTFTLFlBQU0sR0FBRzZRLEVBQUUsQ0FBQyxHQUFHdEksSUFBSixDQUFYO0FBQ0g7O0FBQ0QsV0FBT3ZJLE1BQVA7QUFDSCxHQU5EO0FBT0g7O0FBQ0R0QixPQUFPLENBQUM4RyxRQUFSLEdBQW1CQSxRQUFuQjs7QUFDQSxTQUFTakcsaUJBQVQsR0FBNkI7QUFDekIsUUFBTTtBQUFFRSxZQUFGO0FBQVlrVCxZQUFaO0FBQXNCQztBQUF0QixNQUErQnJTLE1BQU0sQ0FBQ3lDLFFBQTVDO0FBQ0EsU0FBUSxHQUFFdkQsUUFBUyxLQUFJa1QsUUFBUyxHQUFFQyxJQUFJLEdBQUcsTUFBTUEsSUFBVCxHQUFnQixFQUFHLEVBQXpEO0FBQ0g7O0FBQ0RsVSxPQUFPLENBQUNhLGlCQUFSLEdBQTRCQSxpQkFBNUI7O0FBQ0EsU0FBUzRNLE1BQVQsR0FBa0I7QUFDZCxRQUFNO0FBQUVoTjtBQUFGLE1BQVdvQixNQUFNLENBQUN5QyxRQUF4QjtBQUNBLFFBQU0xRCxNQUFNLEdBQUdDLGlCQUFpQixFQUFoQztBQUNBLFNBQU9KLElBQUksQ0FBQzJJLFNBQUwsQ0FBZXhJLE1BQU0sQ0FBQ2dKLE1BQXRCLENBQVA7QUFDSDs7QUFDRDVKLE9BQU8sQ0FBQ3lOLE1BQVIsR0FBaUJBLE1BQWpCOztBQUNBLFNBQVMwRyxjQUFULENBQXdCL1EsU0FBeEIsRUFBbUM7QUFDL0IsU0FBTyxPQUFPQSxTQUFQLEtBQXFCLFFBQXJCLEdBQ0RBLFNBREMsR0FFREEsU0FBUyxDQUFDb0gsV0FBVixJQUF5QnBILFNBQVMsQ0FBQ21ILElBQW5DLElBQTJDLFNBRmpEO0FBR0g7O0FBQ0R2SyxPQUFPLENBQUNtVSxjQUFSLEdBQXlCQSxjQUF6Qjs7QUFDQSxTQUFTQyxTQUFULENBQW1CMUgsR0FBbkIsRUFBd0I7QUFDcEIsU0FBT0EsR0FBRyxDQUFDMkgsUUFBSixJQUFnQjNILEdBQUcsQ0FBQzRILFdBQTNCO0FBQ0g7O0FBQ0R0VSxPQUFPLENBQUNvVSxTQUFSLEdBQW9CQSxTQUFwQjs7QUFDQSxlQUFlOUIsbUJBQWYsQ0FBbUNyRixHQUFuQyxFQUF3Q21GLEdBQXhDLEVBQTZDO0FBQ3pDLE1BQUltQyxFQUFKOztBQUNBLFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQ0EsRUFBRSxHQUFHdEgsR0FBRyxDQUFDdUgsU0FBVixNQUF5QixJQUF6QixJQUFpQ0QsRUFBRSxLQUFLLEtBQUssQ0FBN0MsR0FBaUQsS0FBSyxDQUF0RCxHQUEwREEsRUFBRSxDQUFDbEssZUFBakUsRUFBa0Y7QUFDOUUsWUFBTWYsT0FBTyxHQUFJLElBQUc2SyxjQUFjLENBQUNsSCxHQUFELENBQU0sd0pBQXhDO0FBQ0EsWUFBTSxJQUFJekQsS0FBSixDQUFVRixPQUFWLENBQU47QUFDSDtBQUNKLEdBUHdDLENBUXpDOzs7QUFDQSxRQUFNb0QsR0FBRyxHQUFHMEYsR0FBRyxDQUFDMUYsR0FBSixJQUFZMEYsR0FBRyxDQUFDQSxHQUFKLElBQVdBLEdBQUcsQ0FBQ0EsR0FBSixDQUFRMUYsR0FBM0M7O0FBQ0EsTUFBSSxDQUFDTyxHQUFHLENBQUM1QyxlQUFULEVBQTBCO0FBQ3RCLFFBQUkrSCxHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDaFAsU0FBbkIsRUFBOEI7QUFDMUI7QUFDQSxhQUFPO0FBQ0hxUixpQkFBUyxFQUFFLE1BQU1uQyxtQkFBbUIsQ0FBQ0YsR0FBRyxDQUFDaFAsU0FBTCxFQUFnQmdQLEdBQUcsQ0FBQ0EsR0FBcEI7QUFEakMsT0FBUDtBQUdIOztBQUNELFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU05TyxLQUFLLEdBQUcsTUFBTTJKLEdBQUcsQ0FBQzVDLGVBQUosQ0FBb0IrSCxHQUFwQixDQUFwQjs7QUFDQSxNQUFJMUYsR0FBRyxJQUFJMEgsU0FBUyxDQUFDMUgsR0FBRCxDQUFwQixFQUEyQjtBQUN2QixXQUFPcEosS0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsVUFBTWdHLE9BQU8sR0FBSSxJQUFHNkssY0FBYyxDQUFDbEgsR0FBRCxDQUFNLCtEQUE4RDNKLEtBQU0sWUFBNUc7QUFDQSxVQUFNLElBQUlrRyxLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUNIOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUlaLE1BQU0sQ0FBQ3dILElBQVAsQ0FBWTVNLEtBQVosRUFBbUJzRyxNQUFuQixLQUE4QixDQUE5QixJQUFtQyxDQUFDd0ksR0FBRyxDQUFDQSxHQUE1QyxFQUFpRDtBQUM3Q25QLGFBQU8sQ0FBQ2tDLElBQVIsQ0FBYyxHQUFFZ1AsY0FBYyxDQUFDbEgsR0FBRCxDQUFNLDRLQUFwQztBQUNIO0FBQ0o7O0FBQ0QsU0FBTzNKLEtBQVA7QUFDSDs7QUFDRHRELE9BQU8sQ0FBQ3NTLG1CQUFSLEdBQThCQSxtQkFBOUI7QUFDQXRTLE9BQU8sQ0FBQzBVLGFBQVIsR0FBd0IsQ0FDcEIsTUFEb0IsRUFFcEIsTUFGb0IsRUFHcEIsTUFIb0IsRUFJcEIsVUFKb0IsRUFLcEIsTUFMb0IsRUFNcEIsTUFOb0IsRUFPcEIsVUFQb0IsRUFRcEIsTUFSb0IsRUFTcEIsVUFUb0IsRUFVcEIsT0FWb0IsRUFXcEIsUUFYb0IsRUFZcEIsU0Fab0IsQ0FBeEI7O0FBY0EsU0FBU2xULG9CQUFULENBQThCZCxHQUE5QixFQUFtQ21GLE9BQW5DLEVBQTRDO0FBQ3hDLFlBQTRDO0FBQ3hDLFFBQUluRixHQUFHLEtBQUssSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7QUFDekNnSSxZQUFNLENBQUN3SCxJQUFQLENBQVl4UCxHQUFaLEVBQWlCM0IsT0FBakIsQ0FBeUI4VSxHQUFHLElBQUk7QUFDNUIsWUFBSTdULE9BQU8sQ0FBQzBVLGFBQVIsQ0FBc0JoUSxPQUF0QixDQUE4Qm1QLEdBQTlCLE1BQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDM0M1USxpQkFBTyxDQUFDa0MsSUFBUixDQUFjLHFEQUFvRDBPLEdBQUksRUFBdEU7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQUNKOztBQUNELFNBQU94SSxLQUFLLENBQUNzSixNQUFOLENBQWFqVSxHQUFiLEVBQWtCbUYsT0FBbEIsQ0FBUDtBQUNIOztBQUNEN0YsT0FBTyxDQUFDd0Isb0JBQVIsR0FBK0JBLG9CQUEvQjtBQUNBeEIsT0FBTyxDQUFDNFUsRUFBUixHQUFhLE9BQU90RixXQUFQLEtBQXVCLFdBQXBDO0FBQ0F0UCxPQUFPLENBQUNxUCxFQUFSLEdBQWFyUCxPQUFPLENBQUM0VSxFQUFSLElBQ1QsT0FBT3RGLFdBQVcsQ0FBQ0MsSUFBbkIsS0FBNEIsVUFEbkIsSUFFVCxPQUFPRCxXQUFXLENBQUN1RixPQUFuQixLQUErQixVQUZuQyxDOzs7Ozs7Ozs7OztBQ3RHQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBRWUsU0FBU0MsWUFBVCxPQUF1RDtBQUFBLE1BQWpDO0FBQUVDLFdBQUY7QUFBV0M7QUFBWCxHQUFpQztBQUFBLE1BQVJDLElBQVE7O0FBQ3BFLFFBQU1yVixJQUFJLEdBQUdzVix5REFBUSxDQUFDSCxPQUFELENBQXJCO0FBQ0EsU0FDRTtBQUNFLFlBQVEsRUFBRUEsT0FEWjtBQUVFLGFBQVMsRUFBRyxvQ0FBbUNDLFNBQVU7QUFGM0QsS0FHTUMsSUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0dOLHVEQUFNLENBQUMvVSxJQUFELEVBQU8sY0FBUCxDQUxULENBREY7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQsU0FBU3VWLE1BQVQsR0FBa0I7QUFDaEIsU0FDRTtBQUFLLGFBQVMsRUFBQyx3REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLDZCQUFSO0FBQXNDLFVBQU0sRUFBQyxRQUE3QztBQUFzRCxPQUFHLEVBQUMsVUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyw4QkFBUjtBQUF1QyxVQUFNLEVBQUMsUUFBOUM7QUFBdUQsT0FBRyxFQUFDLFVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQU5GLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQWJGLENBREY7QUFvQkQ7O0FBRWNBLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLCtGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSSxhQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFFBQUksRUFBQyxVQUFkO0FBQXlCLGFBQVMsRUFBQyxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFJRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsQ0FKRixDQURGLENBREY7QUFlRDs7QUFFRCxTQUFTQyxPQUFULENBQWlCL1IsS0FBakIsRUFBd0I7QUFDdEIsUUFBTThFLE1BQU0sR0FBR1QsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTTtBQUFFbEgsUUFBRjtBQUFRdVUsYUFBUjtBQUFtQi9PO0FBQW5CLE1BQXlDM0MsS0FBL0M7QUFBQSxRQUFzQzJSLElBQXRDLDRCQUErQzNSLEtBQS9DOztBQUVBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRTdDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFHLEdBQ1YySCxNQUFNLENBQUMvRCxRQUFQLEtBQW9CNUQsSUFBcEIsR0FBMkIsY0FBM0IsR0FBNEMsWUFDN0Msa0RBQWlEdVUsU0FBVTtBQUg5RCxLQUlNQyxJQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNR2hQLFFBTkgsQ0FERixDQURGO0FBWUQ7O0FBRWNtUCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxNQUFULENBQWdCO0FBQUVyUDtBQUFGLENBQWhCLEVBQThCO0FBQzVCLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTLDJCQUFULENBREYsRUFFRTtBQUNFLFlBQVEsRUFBQyxhQURYO0FBRUUsV0FBTyxFQUFHLG1GQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCQSxRQUExQixDQUZGLEVBR0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FSRixDQURGO0FBZ0JEOztBQUVjcVAscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQjtBQUFFalcsTUFBRjtBQUFRMFYsV0FBUjtBQUFtQnZVLE1BQUksR0FBRztBQUExQixDQUFsQixFQUFtRDtBQUNqRCxRQUFNO0FBQUUrVSxTQUFGO0FBQVM1VixRQUFUO0FBQWV4QjtBQUFmLE1BQXdCa0IsSUFBOUI7QUFDQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLEVBQUcsWUFBV2xCLElBQUssRUFBM0I7QUFBOEIsUUFBSSxFQUFDLGlCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUcsa0lBQWlJNFcsU0FBVSxFQUR6SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1EsS0FESCxDQURGLEVBSUUsTUFBQyxxREFBRDtBQUFjLFdBQU8sRUFBRTVWLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBSEYsQ0FERixDQURGO0FBdUJEOztBQUVjMlYsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQSxTQUFTRSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBREYsQ0FERjtBQWVEOztBQUVELFNBQVNDLE1BQVQsR0FBa0I7QUFDaEIsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsYUFBUyxFQUFDLDBCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLFNBQUcsRUFBRSxPQUFQO0FBQWdCQyxVQUFJLEVBQUU7QUFBdEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLGtEQUFEO0FBQ0UsYUFBUyxFQUFDLDhDQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVELFNBQUcsRUFBRTtBQUFQLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBU0U7QUFBTSxhQUFTLEVBQUMsNENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsQ0FERixFQWNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFmRixDQURGLENBREY7QUFxQkQ7O0FBRUQsU0FBU0UsWUFBVCxHQUF3QjtBQUN0QixTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREY7QUFPRDs7QUFFY0osc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7O0FBRUEsU0FBU0ssS0FBVCxDQUFleFMsS0FBZixFQUFzQjtBQUNwQixTQUNFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxLQUFrRUEsS0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxLQUFDLEVBQUMsdUpBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFRRDs7QUFFY3dTLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBLE1BQU1DLElBQUksR0FBRztBQUNYQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLENBREg7QUFFTkMsY0FBVSxFQUFFLENBRk47QUFHTkMsUUFBSSxFQUFFO0FBSEEsR0FERztBQU1YQyxTQUFPLEVBQUU7QUFDUEgsV0FBTyxFQUFFLENBREY7QUFFUEMsY0FBVSxFQUFFLENBRkw7QUFHUEMsUUFBSSxFQUFFO0FBSEM7QUFORSxDQUFiOztBQWFBLFNBQVNFLElBQVQsT0FBd0M7QUFBQSxNQUExQjtBQUFFQztBQUFGLEdBQTBCO0FBQUEsTUFBUnJCLElBQVE7O0FBQ3RDLFNBQ0UsTUFBQyw2REFBRDtBQUFpQixXQUFPLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsU0FBSyxFQUFDLElBRlI7QUFHRSxVQUFNLEVBQUMsSUFIVDtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsV0FBTyxFQUFDO0FBTFYsS0FNTUEsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxRQUFJLEVBQUMsTUFBbEI7QUFBeUIsS0FBQyxFQUFDLGVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQ0UsWUFBUSxFQUFFYyxJQURaO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUlFLGNBQVUsRUFBRTtBQUNWN1YsYUFBTyxFQUFFO0FBQUVxVyxnQkFBUSxFQUFFLENBQVo7QUFBZUMsWUFBSSxFQUFFO0FBQXJCLE9BREM7QUFFVkwsVUFBSSxFQUFFO0FBQUVJLGdCQUFRLEVBQUUsQ0FBWjtBQUFlQyxZQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsRUFBWSxDQUFaO0FBQXJCO0FBRkksS0FKZDtBQVFFLFVBQU0sRUFBQyxTQVJUO0FBU0UsZUFBVyxFQUFDLEdBVGQ7QUFVRSxLQUFDLEVBQUMsK1lBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsQ0FERjtBQTBCRDs7QUFFY0gsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOztBQUVBLFNBQVNJLFVBQVQsR0FBc0I7QUFDcEIsU0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFNBQUssRUFBQyw0QkFEUjtBQUVFLFNBQUssRUFBQyxLQUZSO0FBR0UsVUFBTSxFQUFDLEtBSFQ7QUFJRSxXQUFPLEVBQUMsR0FKVjtBQUtFLFdBQU8sRUFBQyxlQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsVUFBTSxFQUFDLE1BRlQ7QUFHRSxLQUFDLEVBQUMsbXhCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVlFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyxvNUdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsaTNHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLGthQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQVpGLEVBaUJFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQywwbUlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsMnVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWpCRixFQXFCRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsdXBJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLHE1TUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FyQkYsRUF5QkUsTUFBQyxvREFBRCxDQUFRLENBQVI7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUF5QixVQUFNLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLHFxSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyxzK0hBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsa3VIQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQXpCRixFQThCRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsVUFBTSxFQUFDLE1BRlQ7QUFHRSxLQUFDLEVBQUMseXJHQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUFtQ0UsTUFBQyxvREFBRCxDQUFRLENBQVI7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUF5QixVQUFNLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLG00T0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQ0YsRUFzQ0UsTUFBQyxvREFBRCxDQUFRLENBQVI7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUF5QixVQUFNLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLGt4SUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyw4aUlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsd2FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMseTlJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLDRNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQXRDRixFQTZDRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsZ2dDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLDBxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyw0aEhBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBN0NGLEVBa0RFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyw2b0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMscWpFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWxERixFQXNERSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsazZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLDIwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyx3ZEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyw4cUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBdERGLEVBNERFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyxpbkdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsMmZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsc25KQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLDRGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQTVERixFQWtFRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsZ2tFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxFRixFQXFFRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUNFLFFBQUksRUFBQyxTQURQO0FBRUUsVUFBTSxFQUFDLE1BRlQ7QUFHRSxLQUFDLEVBQUMscURBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJFRixFQTBFRSxNQUFDLG9EQUFELENBQVEsQ0FBUjtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsaVJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsb25CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQWEsS0FBQyxFQUFDLHMyREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyw0b0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFBYSxLQUFDLEVBQUMsd1pBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBMUVGLEVBaUZFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQywwc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakZGLEVBb0ZFLE1BQUMsb0RBQUQsQ0FBUSxJQUFSO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLEtBQUMsRUFBQyw0R0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEZGLEVBeUZFLE1BQUMsb0RBQUQsQ0FBUSxDQUFSO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLEtBQUMsRUFBQyxrWkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F6RkYsRUE0RkUsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLFVBQU0sRUFBQyxNQUZUO0FBR0UsS0FBQyxFQUFDLDJGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1RkYsRUFpR0UsTUFBQyxvREFBRCxDQUFRLElBQVI7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLFVBQU0sRUFBQyxNQUZUO0FBR0UsS0FBQyxFQUFDLDRRQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqR0YsQ0FERjtBQXlHRDs7QUFFY0EseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR2UsU0FBU0MsVUFBVCxPQUF1RDtBQUFBLE1BQW5DO0FBQUV6USxZQUFGO0FBQVkrTztBQUFaLEdBQW1DO0FBQUEsTUFBVDFSLEtBQVM7O0FBQ3BFLFNBQ0U7QUFBSyxhQUFTLEVBQUcsMkJBQTBCMFIsU0FBVTtBQUFyRCxLQUE0RDFSLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRzJDLFFBREgsQ0FERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBRWUsU0FBUzBRLFVBQVQsQ0FBb0I7QUFDakNuQixPQURpQztBQUVqQ29CLGFBRmlDO0FBR2pDQyxPQUhpQztBQUlqQ25XLEtBSmlDO0FBS2pDb1c7QUFMaUMsQ0FBcEIsRUFNWjtBQUNELFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFPLEVBQUcsV0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxRQUFJLEVBQUMsY0FEUDtBQUVFLFdBQU8sRUFBRUQsS0FBSyxHQUFHLHFCQUFILEdBQTJCLFNBRjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1HckIsS0FBSyxJQUNKO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsWUFBUSxFQUFDLFVBQXBDO0FBQStDLFdBQU8sRUFBRUEsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBVUdvQixXQUFXLElBQUk7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFFQSxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVmxCLEVBV0dDLEtBQUssSUFDSjtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBRyxtQkFBa0JBLEtBQU0sRUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLEVBY0dDLFFBQVEsSUFBSTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBRUEsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRmLEVBZUU7QUFBTSxZQUFRLEVBQUMsY0FBZjtBQUE4QixXQUFPLEVBQUMsMkJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQWdCRTtBQUNFLFFBQUksRUFBQyxtQkFEUDtBQUVFLFdBQU8sRUFBQyxzQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREY7QUF1QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUFnQztBQUM3QyxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUMsc0JBRFI7QUFFRSxTQUFLLEVBQUMsMkJBRlI7QUFHRSxPQUFHLEVBQUMsa0JBSE47QUFJRSxlQUFXLEVBQUcsbUZBSmhCO0FBS0UsWUFBUSxFQUFDLHlHQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyx1REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQUFRLENBQUNwTixNQUFULEdBQWtCLENBQWxCLElBQ0NvTixRQUFRLENBQUM1WCxHQUFULENBQWNFLElBQUQsSUFDWCxNQUFDLDREQUFEO0FBQVUsUUFBSSxFQUFFQSxJQUFoQjtBQUFzQixPQUFHLEVBQUVBLElBQUksQ0FBQ2xCLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLENBRkYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVksYUFBUyxFQUFDLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFDRSxhQUFTLEVBQUMsdU1BRFo7QUFFRSxTQUFLLEVBQUU7QUFBRTZZLG9CQUFjLEVBQUU7QUFBbEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFQRixFQVdFO0FBQ0UsT0FBRyxFQUFDLG1CQUROO0FBRUUsYUFBUyxFQUFDLDBDQUZaO0FBR0UsT0FBRyxFQUFDLHNCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUxGLENBREYsQ0FGRixDQVZGLENBRkYsQ0FURixDQURGO0FBc0REO0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNRixRQUFRLEdBQUcvWCw0REFBVyxDQUFDLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsYUFBMUIsQ0FBRCxDQUE1QjtBQUNBLFNBQU87QUFDTHFFLFNBQUssRUFBRTtBQUFFMFQ7QUFBRjtBQURGLEdBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBqb2luKHByb2Nlc3MuY3dkKCksICdfcG9zdHMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIHJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1ZywgZmllbGRzID0gW10pIHtcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sICcnKTtcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtyZWFsU2x1Z30ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gcmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuXG4gIGNvbnN0IGl0ZW1zID0ge307XG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkID09PSAnc2x1ZycpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xuICAgIH1cbiAgICBpZiAoZmllbGQgPT09ICdjb250ZW50Jykge1xuICAgICAgaXRlbXNbZmllbGRdID0gY29udGVudDtcbiAgICB9XG4gICAgaWYgKGRhdGFbZmllbGRdKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RzKGZpZWxkcyA9IFtdKSB7XG4gIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKCk7XG4gIGNvbnN0IHBvc3RzID0gc2x1Z3NcbiAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpXG4gICAgLmZpbHRlcigocG9zdCkgPT4ge1xuICAgICAgaWYgKCFmaWVsZHMuaW5jbHVkZXMoJ2lzUHVibGlzaGVkJykpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIHBvc3QuaXNQdWJsaXNoZWQ7XG4gICAgfSlcbiAgICAuc29ydCgocG9zdDEsIHBvc3QyKSA9PiAocG9zdDEuZGF0ZSA+IHBvc3QyLmRhdGEgPyAnMScgOiAnLTEnKSk7XG4gIHJldHVybiBwb3N0cztcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVGb3JtYXRlcih7IGRhdGVTdHIsIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyKTtcbiAgcmV0dXJuIChcbiAgICA8dGltZVxuICAgICAgZGF0ZVRpbWU9e2RhdGVTdHJ9XG4gICAgICBjbGFzc05hbWU9e2BtdC0xIHRleHQtc20gYmxvY2sgdGV4dC1ncmF5LTgwMCAke2NsYXNzTmFtZX1gfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfVxuICAgIDwvdGltZT5cbiAgKTtcbn1cbiIsImZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDggZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIHBiLTggZmxleC1zaHJpbmstMFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTYgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RlcHl0aGFpXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vVGVweVRoYWlcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj5AMjAyMCw8L3NwYW4+XG4gICAgICAgIDxzcGFuPlRlcHkgVGhhaTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9TVkcvTG9nbyc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gLXNrZXcteC02IGZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTYgYm9yZGVyLTIgcHgtNCBteS0yIGJvcmRlci10ZWFsLTkwMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8TG9nbyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi93cml0aW5nXCIgY2xhc3NOYW1lPVwibXItNlwiPlxuICAgICAgICAgICAgV3JpdGluZ1xuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTmF2TGluayhwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBocmVmLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBocmVmID8gJ3RleHQtcHJpbWFyeScgOiAndGV4dC1ibGFjaydcbiAgICAgICAgfSBob3Zlcjp0ZXh0LXByaW1hcnkgY3Vyc29yLXBvaW50ZXIgZm9udC1tZWRpdW0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbGk+XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgVGVweSBUaGFpJ3MgUGVyc29uYWwgU2l0ZWB9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXtgUGVyc29uYWwgd2Vic2l0ZSBmb3IgVGVweSBUaGFpLiBIZSB3cml0ZXMgYWJvdXQgRnJvbnRlbmQgYW5kIEdlbmVyYWwgUHJvZ3JhbW1pbmcuYH1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTYgbWQ6cHgtMTAgbXgtYXV0byBmb250LWJvZHkgXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBEYXRlRm9ybWF0ZXIgZnJvbSAnLi9EYXRlRm9ybWF0ZXInO1xuXG5mdW5jdGlvbiBQb3N0SXRlbSh7IHBvc3QsIGNsYXNzTmFtZSwgaHJlZiA9ICcjJyB9KSB7XG4gIGNvbnN0IHsgdGl0bGUsIGRhdGUsIHNsdWcgfSA9IHBvc3Q7XG4gIHJldHVybiAoXG4gICAgPExpbmsgYXM9e2Avd3JpdGluZy8ke3NsdWd9YH0gaHJlZj1cIi93cml0aW5nL1tzbHVnXVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bncm91cCBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBjdXJzb3ItcG9pbnRlciB3LXNtIHB5LTQgcHgtNiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIG15LTQgbWF4LXcteGwgJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleC13cmFwIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBzbTptYi0wXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZ3JvdXAtaG92ZXI6dW5kZXJsaW5lIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxEYXRlRm9ybWF0ZXIgZGF0ZVN0cj17ZGF0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAge1snUmVhY3QnLCAnSmF2YXNjcmlwdCddLm1hcCgodikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItdGVhbCBib3JkZXItMiBweC0yIHB5LTEgcm91bmRlZC1mdWxsIG1yLTIgdGV4dC1zbSBiZy10ZWFsLTIwMFwiPlxuICAgICAgICAgICAgICAgIHt2fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJdGVtO1xuIiwiaW1wb3J0IFByb2ZpbGVTdmcgZnJvbSAnLi9TVkcvUHJvZmlsZVN2Zyc7XG5pbXBvcnQgQmxvYjEgZnJvbSAnLi9TVkcvQmxvYjEnO1xuXG5mdW5jdGlvbiBQcm9maWxlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICA8UHJvZmlsZUltYWdlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIHNtOm1iLTBcIj5cbiAgICAgICAgICA8RGV0YWlsIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICA8UHJvZmlsZUltYWdlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERldGFpbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPEJsb2IxXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IG9wYWNpdHktMjUgYWJzb2x1dGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiAnLTMwcHgnLCBsZWZ0OiAnLTUwcHgnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QmxvYjFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgb3BhY2l0eS0yNSBhYnNvbHV0ZSB0cmFuc2Zvcm0gcm90YXRlLTkwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogJy0zMHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGwgdXBwZXJjYXNlIHRleHQtdGVhbC02MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBIaSwgSSdtIFRlcHlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtYm9sZFwiPkZyb250ZW5kIERldmVsb3BlcjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFByb2ZpbGVJbWFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggdy1hdXRvIGgtYXV0b1wiPlxuICAgICAgICA8UHJvZmlsZVN2ZyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBCbG9iMShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiIzA4QkRCQVwiXG4gICAgICAgIGQ9XCJNMTU3IDc2LjdjNS4yIDIwLjgtMTAuMyA0My41LTMwLjcgNTcuOS0yMC40IDE0LjQtNDUuNiAyMC41LTYyIDkuOC0xNi40LTEwLjgtMjMuOS0zOC41LTE2LjUtNjIuNCA3LjQtMjMuOCAyOS44LTQzLjggNTQtNDQuNCAyNC4xLS42IDUwIDE4LjMgNTUuMiAzOS4xelwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9iMTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgaWNvbiA9IHtcbiAgaGlkZGVuOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBwYXRoTGVuZ3RoOiAwLFxuICAgIGZpbGw6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgcGF0aExlbmd0aDogMSxcbiAgICBmaWxsOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBMb2dvKHsgbG9hZGluZ1R5cGUsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD1cImhpZGRlblwiPlxuICAgICAgPG1vdGlvbi5zdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiNDhcIlxuICAgICAgICBoZWlnaHQ9XCI0OFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLnBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgMEgyNFYyNEgwelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICAgIHZhcmlhbnRzPXtpY29ufVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkZWZhdWx0OiB7IGR1cmF0aW9uOiAyLCBlYXNlOiAnZWFzZUluT3V0JyB9LFxuICAgICAgICAgICAgZmlsbDogeyBkdXJhdGlvbjogMiwgZWFzZTogWzEsIDAsIDAuOCwgMV0gfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0cm9rZT1cIiMwOEJEQkFcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgZD1cIk01IDhsLTEuMDI2LS41MTNBLjc4NS43ODUgMCAwMTMuNzcgNi4yM3YwQS43ODUuNzg1IDAgMDE0LjMyNSA2SDhtMCAwaDMuMzQ5Yy4zNiAwIC42NTEtLjI5Mi42NTEtLjY1MXYwYS42NTEuNjUxIDAgMDAtLjI5LS41NDJMMTAuNSA0TTggNnYxNG01LTEwdjBhMi43IDIuNyAwIDAxLS4xNDYtMi4wNmwuMDA1LS4wMThjLjA5NC0uMjguMjMxLS41NDIuNDA4LS43NzhsLjQwOC0uNTQ0QTMuMjUyIDMuMjUyIDAgMDExNS44NyA1LjMzdjBjMS41MjMtLjE5IDIuOTguNzIgMy40NjUgMi4xNzV2MGMuMTEuMzI5LjE2NS42NzIuMTY1IDEuMDE5di40MDZhNSA1IDAgMDEtMS40NjUgMy41MzVsLTUuMjI0IDUuMjI1YTEuMDYgMS4wNiAwIDAwLS4zMTEuNzV2MGMwIC41ODYuNDc1IDEuMDYxIDEuMDYgMS4wNjFIMjBcIlxuICAgICAgICA+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLnN2Zz5cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZnVuY3Rpb24gUHJvZmlsZVN2ZygpIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjIxN1wiXG4gICAgICBoZWlnaHQ9XCIyNzJcIlxuICAgICAgdmVyc2lvbj1cIjFcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMTcwIDI3MjBcIlxuICAgID5cbiAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICBmaWxsPVwiIzBlMTQxYlwiXG4gICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICBkPVwiTTI1NiAyNzA0Yy0zLTktNi0zMC02LTQ4cy0xNC03Mi0zMC0xMjJjLTE3LTQ5LTQyLTEyOS01NS0xNzktMjItODYtMjUtOTAtNDktODctMzIgMy0zNC0xNC00LTQ1IDE0LTE1IDIxLTM0IDIwLTU3LTItNDggOTYtMjI1IDE2NC0yOTZsMzQtMzYtMTItNTljLTgtNDItMjEtNzEtNDItOTUtMTctMTktNDItNTMtNTYtNzUtMTMtMjItMzAtNDYtMzctNTNzLTEzLTE3LTEzLTIyLTExLTIxLTI1LTM2Yy0zOC00MS0zNC03OSAxMi0xMDMgMjEtMTEgNjUtNDAgOTgtNjVzNzktNTQgMTAyLTYzYzI0LTEwIDQzLTI0IDQzLTMxIDAtMjQtNDItOTctODEtMTM5LTIxLTIyLTQzLTU5LTQ4LTgxLTExLTQwLTM0LTc0LTc5LTExOS0yNi0yNi0yNi01MC03LTIzOCA3LTU3IDUtNjEtMjMtODhsLTMwLTI5IDE4LTU2YzktMzIgMjItODMgMjgtMTE0QzIxMiAxODcgMzQzIDUxIDUxNSAxOWM3NC0xNCAxOTEtNiAyNTUgMTcgNjIgMjIgMTY2IDEwNyAyMDIgMTY0IDQwIDY2IDEyOCAyNDIgMTI4IDI1OCAwIDggMjMgMzkgNTEgNzAgMjggMzIgNjcgODkgODcgMTI3IDMwIDU4IDM2IDgxIDM2IDEzMCAwIDcxLTIxIDExNy04OCAxOTAtNTIgNTctNjEgOTUtMjEgOTUgMzUgMCA2NSAzMyA2NSA3MSAwIDIyIDEyIDQ2IDM1IDc1IDU4IDcwIDY0IDc0IDEwOSA3NCA1NSAwIDkyIDI4IDEwNiA3OSA2IDIyIDI5IDY0IDUzIDk1IDIzIDMwIDUzIDc0IDY3IDk2IDI3IDQ0IDk3IDg4IDMyMCAyMDIgNjMgMzIgMTIyIDY0IDEzMSA3MSA4IDcgMzkgNDUgNjcgODZsNTIgNzR2NzI3aC05NTRjLTg2MSAwLTk1NC0yLTk2MC0xNnpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiMyZjM2MzdcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTI1NiAyNzA0Yy0zLTktNi0zMC02LTQ3IDAtMTgtMTQtNzUtMzItMTI3LTE3LTUyLTQxLTEzMy01NC0xODAtMjEtODEtMjMtODUtNDgtODItMzMgNC0zMy0xMi0xLTUwIDE5LTIzIDI0LTM4IDIwLTU3LTQtMjAgNS00NiAzMy05NiA1OS0xMDggOTEtMTU3IDEyOS0xOTYgMzMtMzUgMzQtMzcgMjMtODQtMTItNTUtNS05MiAxNC03NiA4IDcgMTYgNyAyMiAxIDIwLTIwIDE0MyAzNyAxMjkgNjAtMyA0IDggMTkgMjQgMzMgMTYgMTMgMzEgMzMgMzQgNDMgNCAxNSA1IDE0IDYtNSAyLTQ3IDE2LTkgMTcgNDkgMSAzMiA2IDczIDEyIDkyIDYgMTggMTMgNzkgMTcgMTM0bDYgMTAxLTI3IDdjLTIzIDYtMjQgOS0xMSAxOSA5IDcgMjUgMzIgMzUgNTdsMTkgNDUgMjctNTJjMTQtMjkgMjYtNjAgMjYtNjggMC0xMCA1LTEzIDEzLTkgOSA2IDkgNC0xLTgtMTgtMjMtNS05OSAxNi05MSAxMCA0IDEzIDIgOC01LTQtNy0yLTEyIDUtMTIgMTIgMCA5IDM3LTYgNzUtMTIgMzAgOSA3IDMzLTM2IDE4LTMyIDE5LTM5IDctNTYtMTMtMTgtMTEtMjEgMTMtMzQgMzQtMTggNTEtMzggNTItNjQgMS0xMiA0LTE1IDctNyA0IDEwIDggMTAgMTkgMSA4LTYgMTEtMTUgOC0yMHMyLTkgMTAtOWM5IDAgMTYtNiAxNi0xNHM3LTIyIDE2LTMwYzgtOSAxMi0yMCA5LTI2LTMtNS0yLTEwIDQtMTBzMTMtMTUgMTYtMzRjNi0zMCAxNC0zNyA3Ny02NSA4My0zNiA5OS0zOCAxMjMtMTEgMTYgMTggMTkgNDMgMjMgMTg0bDUgMTYzLTM0LTUtMzQtNiAzMC02YzI4LTUgMjYtNy0yOS0yMy0zMy05LTYxLTE2LTYxLTE0LTEgMS01IDE0LTggMjgtOCAzMSA5IDM5IDg0IDM5aDQ2bDE3IDczYzMwIDEyNCAzMCAxMzcgMTAgMTUyLTE1IDExLTE3IDE3LTggMzIgNyAxMiA4IDI3IDIgNDItNSAxNC0xMSA2NS0xNCAxMTUtNiA5MCA0IDE0NiAyNiAxNDYgMTQgMCAzMS00NyAzMy05MiAxLTIxIDQtMzggNy0zOCA0IDAgNS0xOCAzLTQwLTItMjcgMS00MCAxMC00MCA4IDAgNy0zLTMtMTAtMTAtNi0xNS0zMS0xNy04Ny0xLTQzLTMtMTEyLTUtMTUzLTQtOTYgMTAtMTAxIDgxLTI5IDI4IDI5IDU0IDUwIDU3IDQ2IDQtNCAzLTctMy03cy04LTExLTUtMjVjMy0xOSAxMS0yNSAzMS0yNWwyNi0xLTI1LTE0LTI1LTE0IDM1LTFoMzVsLTI5LTE1Yy0xNi05LTU4LTIwLTkyLTI0LTM1LTUtNjctMTItNzItMTUtNC0yLTctNDUtNS05NSAyLTY4LTItMTAzLTE3LTE0Ny0xMS0zMS0xOC02MC0xNS02NCAzLTUgMC0xOS01LTMyLTEwLTIxLTEwLTIxLTUgNiA1IDI0IDQgMjYtOCAxNC04LTgtMTgtMjQtMjEtMzYtMTAtMzAgMTctMzAgMzggMGwxNiAyMiAxLTI0IDEtMjUgOCAyNWM4IDI1IDExIDIyIDE1LTE3IDQtMzUgMTQtNTUgMjUtNDggNiAzIDEzLTEgMTYtMTAgNC05IDEzLTE0IDIwLTExIDggMyAxNC0xIDE0LTEwIDAtMTAgNi0xNCAxNC0xMXMxNy0xIDIwLThjMy04IDI0LTE4IDQ2LTIxIDIyLTQgNDMtMTEgNDYtMTUgOS0xNS0xNS0xMC03OSAxNS0zNCAxNC03NCAyOC05MCAzMi0xNSAzLTMwIDEwLTMzIDE1LTEwIDE3LTQ5IDktOTMtMjBsLTQ0LTI5IDMxLTE2YzU1LTI4IDIyMy0yMjYgMTkzLTIyNi02IDAtMTEgNy0xMSAxNXMtOCAxNS0xOSAxNWMtMTUgMC0xOS04LTE5LTQyLTEtNzgtMTAtMTE5LTI4LTEzMi0xNi0xMi0xMy0zNiA1LTM2IDQgMCAyOCAyNSA1MiA1NSA0MiA1MiA0NiA1NSA5MCA1NSA1OSAwIDk1IDI3IDEwOSA4MiA2IDIyIDI4IDYxIDQ4IDg3czUwIDY4IDY3IDk1YzIzIDM3IDQ2IDU2IDEwNSA4OCA0MSAyMyA5NCA1NCAxMTcgNzAgMjMgMTUgNDUgMjggNTAgMjggMTEgMCAxNjMgNzcgMTg0IDkzIDggNyAzOSA0NyA2NyA4OWw1MiA3N3Y3MjFoLTE4NmMtMTYxIDAtMTg1LTItMTgwLTE1IDMtOCAxLTE1LTUtMTVzLTktOC04LTE3YzEtMTAtMS0yNS00LTMzLTgtMjAtMjctMTE3LTI3LTEzNiAwLTggMjAtMjQgNDUtMzZzNDUtMjggNDUtMzZjMC0xMC00LTEwLTE2IDMtMjMgMjItNzMgNDctODQgNDAtNS0zLTYgMjAtMyA1NyA0IDM1IDcgNzMgNyA4NiAxIDEyIDQgMjIgOSAyMiA0IDAgNyAxOCA3IDQwdjQwaC01N2MtMzYgMC01My00LTQ1LTkgMTEtNiAxMC0xMC0zLTE1cy0xNS05LTYtMjBjOS0xMCA4LTE1LTQtMTktOC00LTEyLTEzLTktMjIgNC05IDEtMTUtOS0xNXMtMTMtNy0xMC0yMGMzLTExIDEtMjAtNC0yMHMtOS04LTEwLTE3Yy0yLTI1LTEzLTc1LTIxLTkzLTctMTgtMTMtNDctMTUtNzctMS0xMy01LTIzLTgtMjMtMTMgMC0xOCAzMC05IDU5IDUgMTcgNiAzMSAyIDMxczAgNSA5IDEwYzExIDYgMTcgMjQgMTcgNTUgMSAyNSAzIDQ5IDYgNTQgMyA0IDggMzAgMTIgNTcgMyAyNyAxMCA1MCAxNCA1MiA1IDIgNiAxMCAzIDE4LTQgMTItMTAzIDE0LTY4MyAxNC02MDMtMS02NzktMi02ODQtMTZ6bTEwMC05NmwzLTQzLTE0IDQ1Yy0xOCA1NS0xOSA2OC0zIDUyIDYtNiAxMy0zMSAxNC01NHptMTQyMS0xNzRjLTctNy0zNyA3LTM3IDE3IDAgNiA5IDUgMjEtMSAxMS03IDE5LTE0IDE2LTE2em03My00MWMwLTExLTYtMTAtMjUgNC0zMiAyMy0zMiAzNiAwIDIxIDE0LTYgMjUtMTcgMjUtMjV6bTAtNDNjMC0xNC0xNC0xMi0yOCAyLTE5IDE5LTE0IDMwIDggMTggMTEtNiAyMC0xNSAyMC0yMHptLTExNTAtMzFjMC0xNy05LTktMjQgMjRsLTE2IDMyIDIwLTI0YzExLTEzIDIwLTI3IDIwLTMyem0xMjEtMWMxLTcgMS0xNiAwLTIwIDAtNSAxMS04IDI3LTggMTkgMCAzMi04IDQ0LTI5IDE2LTMwIDE2LTMwLTEyLTM2LTM0LTgtNzAgOS03MSAzMyAwIDktMiAyOS00IDQ1LTIgMTUgMSAyNyA2IDI3czEwLTYgMTAtMTJ6bTEwMTktOWMxMS0xOSAxMC0yMC0xMC05LTExIDYtMTggMTUtMTUgMjEgOSAxMyAxMyAxMSAyNS0xMnptLTY3MCAwYzAtNS0xNC05LTMxLTktMTYgMC0yOCA0LTI1IDlzMTcgOSAzMSA5IDI1LTQgMjUtOXptMzUyLTQzYy05LTMxLTgtMzYgNi0zNiAxMyAwIDEyLTQtNi0yMC0zNi0zMy00MS0yMy0xOSA0MCAyMiA2NCAzNSA3NSAxOSAxNnptLTc4OSA0YzE2LTE5IDE2LTIwLTUtMjAtMTIgMC0xOCAzLTE1IDcgNCAzIDIgMTItNCAyMC02IDctNyAxMy0yIDEzczE2LTkgMjYtMjB6bTEwMDktMTBjLTItMTYtNS0zMC03LTMwcy01IDE0LTcgMzBjLTMgMTkgMCAzMCA3IDMwczEwLTExIDctMzB6TTQ5OSAyMDU0Yy0yMy00OC00My0xMDMtNDQtMTIyLTEtMzItMTQtNDctNDUtNTEtMy0xLTUgMTktNCA0NHMtMSA0NS01IDQ1LTcgMTAtOCAyMWMtMiAyMS0xIDIxIDEzIDMgOS0xMSAxMy0xNCAxMC03LTQgNi0yIDE0IDQgMTggNyA0IDYgMTQtMiAyOC0xMCAxOS05IDIwIDQgOSAyMS0xNyA1OCAyMSA4OSA5MiAxOSA0NCAyNSA1MCAyNyAzMSAyLTEzLTE2LTYzLTM5LTExMXptMTAwNyAxMTBjLTI4LTI0LTQ1LTI3LTMxLTQgNiAxMCA0MSAyOCA1NSAyOSAzIDAtOC0xMS0yNC0yNXptOC0yOWMtNy0xOC00NC00MC00NC0yNyAwIDUgMTAgMTcgMjMgMjUgMjggMjAgMjggMjAgMjEgMnptLTk5NC0yNzdjMC0xNi0zLTE5LTExLTExLTYgNi04IDE2LTUgMjIgMTEgMTcgMTYgMTMgMTYtMTF6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNNjYyIDIwNDVjLTEzLTI4LTE2LTUyLTUtNDIgMyA0IDExIDMgMTctMnMyNi0xMiA0My0xNmMyOC02IDMyLTQgMjcgMTAtNCA5LTEyIDE0LTE5IDExLTktMy0xMSAyLTcgMTYgNCAxNSAyIDE5LTcgMTMtMTAtNS0xMS0yLTYgMTQgMTAgMzItMjkgMjgtNDMtNHpNNjUzIDE5NzBjLTEtMTEtMTgtMzQtMzgtNTItMzQtMjktMzYtMzUtMzMtNzcgMy0yNSA4LTU1IDEzLTY2bDgtMjAtMTcgMjBjLTE2IDE5LTE2IDE5LTUtNyA3LTE1IDE2LTI2IDIxLTI1czE3LTE3IDI3LTQxYzM0LTg1IDQ1LTg5IDE2Ni02MiAyOCA2IDY2IDE0IDg2IDE5IDQ2IDEwIDExNyAyIDk4LTExLTEwLTYtNi03IDExLTMgMTQgMyAzOSAxIDU1LTYgNDgtMTkgNTgtMjAgNDQtMy03IDktMTMgMjYtMTQgNDAtMSAzNC0xOSA0Ny0xMTUgODMtNDcgMTgtMTAwIDQxLTExOSA1Mi0yOSAxNy01MyAyMC0xNDMgMjEtODIgMC0xMDggMy0xMDggMTMgMCAxNCAyOSAyNCA3NSAyNiAyOSAxIDI5IDEgNSA4LTM1IDEwLTQwIDQxLTYgNDEgMTQgMCAyOCA1IDMxIDExIDUgNyAxMSA1IDE4LTUgNy04IDI0LTIwIDM5LTI1IDIyLTggMjYtNyAyMiA0LTMgOC0xNSAxNy0yNiAyMS0xMSAzLTE3IDgtMTQgMTEgNiA3LTEzIDI2LTQxIDQxLTMwIDE3LTM5IDE1LTQwLTh6TTI2OCAxNjYxYy0xMi0xNi0zOS01NS01OC04N3MtNDctNzAtNjItODRjLTM4LTM3LTM2LTcxIDUtOTUgMTctMTAgNjUtNDMgMTA2LTcyIDQwLTI5IDg5LTU4IDEwNy02NSAxOS03IDM0LTE4IDM0LTI1IDAtMjUtNDItOTctODEtMTQwLTIxLTIyLTQzLTU5LTQ4LTgxLTExLTM5LTM0LTc0LTc4LTExOC0xOS0xOS0yMy0zMy0yMi04NiAwLTM1IDYtOTAgMTMtMTIzIDE1LTY3IDgtOTctMjYtMTI1LTIyLTE3LTIyLTIwLTktNjYgNy0yNyAxOC03MyAyMi0xMDIgMjItMTI4IDk1LTI1MSAxODItMzA2IDkyLTU4IDE0MC03MSAyNjItNzEgMTA0IDAgMTE0IDIgMTc1IDMyIDY0IDMxIDE3MCAxMTUgMTcwIDEzNCAwIDUgMTYgMzQgMzYgNjQgMjAgMjkgMzcgNjUgMzggNzggMCAxNCA0IDIzIDkgMjAgOC01IDU3IDkzIDU3IDExNSAwIDggMjMgMzkgNTEgNzAgMjggMzIgNjcgODkgODcgMTI3IDMwIDU3IDM2IDgxIDM2IDEzMCAwIDcxLTE2IDEwNi04NyAxODgtNDMgNTAtNDkgNjItNDMgODggNSAyNyA0IDMwLTEyIDI0LTktNC0yNS0xMC0zNC0xMi0xMC0zLTE4LTktMTgtMTQgMC0xMy0zNC0xMS00OCAzLTcgNy0xMiAyMi0xMiAzNSAwIDE3LTcgMjQtMjcgMjgtMTYgNC00OCAxMS03MyAxNi0yOCA2LTg4IDM5LTE2MSA4OC05MSA2Mi0xMzQgODQtMjA1IDEwNS00OSAxNi0xMDIgMzItMTE4IDM3cy0zNiA5LTQ1IDhjLTkgMCAxNC0xMCA1Mi0yMSAzNy0xMiA2Ny0yNyA2Ny0zNCAwLTYtMTYtMjEtMzYtMzMtMzctMjItNzQtMjgtNzQtMTIgMCA1LTEwIDEzLTIyIDE3LTI0IDctNjggMzYtMTAyIDY3LTE3IDE0LTE4IDIwLTcgMjYgOCA1LTggMTEtNDUgMTYtMzMgNC02MiAxMi02NiAxOS0xMyAxOS05IDQ2IDcgNDYgOSAwIDE1IDYgMTMgMTMtMiA2IDcgMjYgMjAgNDQgMTIgMTcgMjIgMzQgMjIgMzggMCAzIDE4IDMzIDQwIDY1IDQyIDY1IDQ2IDc3IDggMzF6bTMyLTcxNWMtNC0xOS02LTM4LTQtNDFzLTEtMS03IDRjLTEyIDEwLTEgODQgMTEgNzYgNC0zIDQtMjAgMC0zOXptMzU1LTI2Yy0zLTUtMTMtMTAtMjEtMTBzLTE0IDUtMTQgMTBjMCA2IDkgMTAgMjEgMTAgMTEgMCAxNy00IDE0LTEwek0zMzcgODE4YzMgNiA5IDEyIDE1IDEyczctNyA0LTE2Yy0zLTgtMi0xMiA0LTlzMTAgMiAxMC00YzAtNSA4LTEyIDE4LTE1IDEyLTQgMTgtMTUgMTctMjktMS0xMiAzLTI4IDktMzYgOS0xMiA3LTEyLTEyLTJzLTIzIDE4LTE4IDM5YzUgMjcgNSAyNy02IDMtMTEtMjEtOS0yNiAxNy00NyAxNy0xMyAzMy0yNCAzNy0yNHMyOC0yMSA1NC00N2MyNi0yNyA0NC00MSAzOS0zMy00IDggMyA1IDE3LTcgMTMtMTMgMjktMjMgMzUtMjNzMjUtMTMgNDMtMzBjMTgtMTYgMzgtMzAgNDUtMzAgMjQgMCAyNy0yMCAzLTIxLTYyLTItMTE1IDEtMTM4IDYtMTQgNC0zMiA3LTQwIDhzLTI1IDgtMzcgMTVjLTEzIDctMjMgMTAtMjMgNyAwLTQtNyAxLTE2IDktOCA5LTIyIDE2LTMwIDE2cy0xMyA0LTEwIDljOCAxMi0xOSAzMy0yOSAyMy01LTQtNS0xLTEgNiA0IDYgMyAxMi0yIDEycy0xNSAxNS0yMiAzM2MtNyAxNy0xNiA0MS0yMCA1Mi0xOSA0NS0yNCA3My0yMSAxMjUgMyA3NCAxMSA4MSAzNCAyOSAxMS0yNCAyMS0zOCAyNC0zMXptNzQ3LTIzYzEtMTEgOC0yMCAxNC0yMCAyMiAwIDIxLTEyLTMtMjUtMTQtNy0yNS0xOS0yNS0yNyAwLTctNi0xMy0xNC0xM3MtMjEtOC0yOC0xOC0xOS0yMi0yNi0yNmMtMTEtNy0xMi00LTMgMTIgMTggMzQgMzQgNzYgMzcgOTkgMSAxMyA4IDM5IDE2IDU5bDEzIDM1IDctMjhjNS0xNSAxMC0zNyAxMi00OHptLTYwMS0yOGMzIDIgNC0zIDMtMTQtMi0xMy0xMi0xOC0zNS0xOS0xOS0xLTMwIDMtMjggMTAgMyA2IDEwIDEwIDE3IDggMTEtMyAxMSAwIDAgMTMtMTIgMTQtMTAgMTUgMTIgNiAxNC01IDI4LTcgMzEtNHptMzIyLTQ3Yy0zLTUtMS0xMCA0LTEwIDYgMCAxMS00IDExLTggMC01LTE1LTktMzQtOS0yNyAwLTMyIDQtMjggMTkgMyAxMSAxMyAxOCAyOSAxOCAxMyAwIDIxLTQgMTgtMTB6bTk5LTEwOGMtNi00LTEwLTE1LTktMjQgMi0xMS0yLTE1LTExLTExLTggMy0xMSAxMC03IDE3IDEzIDI0IDI2IDM2IDMyIDMxIDMtMyAxLTktNS0xM3ptLTY0NC00OGMxMy0yMCA0MS01MCA2Mi02N3MzOC0zNCAzOC0zOWMwLTEzIDI2LTM4IDQwLTM4IDYgMCAxMy03IDE2LTE1IDQtOCAxMS0xMiAxNy04IDUgMyA3IDEgNC00LTE3LTI4IDczLTQxIDEwNS0xNiAyMSAxNyAxNDMgMzQgMTg3IDI3IDIzLTQgNDEtMyA0MSAyIDAgMTEgMTUxIDEyIDE2OCAxIDctNSAxMC0xMiA3LTE3czMtNyAxNC01YzE4IDMgMTkgMiAzLTI4LTIwLTM3LTM0LTUwLTQyLTM3LTMgNi0yMiAxMy00MCAxNi0yMCA0LTMxIDMtMjctMiAxNi0xNy05Ny0zMi0xOTktMjhsLTEwMCA1LTU0LTQwYy0zMC0yMy02My00MS03Mi00MS0yNyAwLTEzMSAxMDktMTI1IDEzMSA0IDEzLTExIDMyLTUwIDY1LTQ1IDM5LTUzIDUxLTQ5IDcwIDUgMTcgMiAyNC05IDI0LTE2IDAtMjEgMjUtNiAzNSA1IDMgMTItNCAxNi0xNCAzLTExIDIwLTMyIDM4LTQ3IDI1LTIxIDI3LTI1IDEwLTIwLTI2IDgtMzYtNC0xOC0yMSAxMS0xMCAxNy0xMCAyOSAzIDE3IDE2IDIxIDM0IDkgMzQtMTQgMC01MyA2Ni01MyA4OCAwIDMxIDExIDI3IDQwLTE0em03MjctMjQxYy00LTMtMS0xMyA2LTIxIDgtMTEgOC0xNCAwLTktNiA0LTE0IDEtMTYtNS0zLTctNi00LTYgOC0xIDIwIDYgMzQgMTcgMzQgMyAwIDItMy0xLTd6TTg0NyAxMDRjLTIxLTIwLTQyLTMyLTQ1LTI4LTQgMy0xIDkgNiAxMSA3IDMgMjUgMTYgNDAgMjkgNDIgMzcgNDEgMjctMS0xMnpNNTEzIDU3YzI2LTcgNDUtMTYgNDItMTktNi02LTk0IDE3LTEwMyAyNy04IDggOCA1IDYxLTh6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjY1IDQzOWMtNC01IDEtOSA5LTkgOSAwIDE2LTQgMTYtMTAgMC01IDgtMTAgMTgtMTBzMjMtNSAzMC0xMiAxMi04IDEyLTItMTIgMTYtMjYgMjJjLTE0IDctMjMgMTYtMjAgMjAgMiA0LTQgOC0xNCA5LTExIDEtMjItMi0yNS04ek05MDAgMzcwYy0xMi04LTEwLTEwIDgtMTAgMTMgMCAyMC00IDE3LTEwLTMtNS0xLTEwIDQtMTAgMTMgMCAxMyAzIDUgMjQtNyAxOC0xMyAxOS0zNCA2ek01NTQgMzM0Yy0xNy0xNC0xNy0xNS0xLTEwIDEwIDMgMjMgNiAyOCA2czkgNSA5IDEwYzAgMTQtMTMgMTItMzYtNnpNNzAxIDM0MmMtMjUtOCAzLTIyIDQyLTIxIDIzIDEgMzQgMyAyNSA2LTEwIDItMTggOC0xOCAxMyAwIDktMjYgMTAtNDkgMnpNMzkwIDI3N2MwLTMzIDUzLTUxIDY0LTIyIDQgMTEtMyAxOS0yMCAyNS0zNCAxMy00NCAxMy00NC0zelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5nIGZpbGw9XCIjMWQzYjVjXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNTYgMjcwNGMtMy05LTYtMzAtNi00NyAwLTE4LTE0LTc1LTMyLTEyNy0xNy01Mi00MS0xMzMtNTQtMTgwLTIxLTgxLTIzLTg1LTQ4LTgyLTMzIDQtMzMtMTItMS01MCAxOS0yMyAyNC0zOCAyMC01Ny00LTIwIDUtNDYgMzMtOTYgNTktMTA4IDkxLTE1NyAxMjktMTk2IDMyLTMzIDMzLTM4IDI1LTc2LTEwLTQ2IDUtODIgMjYtNjEgOSA5IDEyIDggMTItNSAwLTE2IDItMTYgMzAtMiAxOCA5IDI4IDIwIDI0IDI3LTUgNy0yIDkgOCA1IDEwLTMgMTkgMyAyNyAxOSAxMSAyNCAxMSAyNC0xOCA5LTE2LTgtMzEtMjAtMzMtMjctMi02LTEwIDMtMTggMjItMTUgMzYtMTYgMzUgNjYgOTdsMjkgMjMtMjgtMTBjLTQyLTE1LTQ0LTE0LTQzIDM0IDEgMjQtMiA0Mi02IDQwLTQtMy02IDgtNCAyMyAxIDE2IDggMjcgMTUgMjUgOC0yIDEwIDQgNiAxOC01IDE2LTIgMjAgMTQgMjAgMjQgMCA4MSA3MiA4MSAxMDIgMCAxMCA0IDE4IDkgMThzMTIgOCAxNSAxOGM1IDE2IDMtMzQtMTEtMjYyLTUtODItMy0xMDcgNS0xMDIgNyA0IDEyIDE2IDEyIDI2czQgMjAgMTAgMjJjNSAyIDExIDI0IDEzIDQ5czggNTIgMTIgNTljNSA4IDEwIDMyIDExIDU0IDEgMjMgNSA3MiA5IDEwOWw2IDY4LTMwIDEyYy0zMSAxMi00MiAyNy0xOCAyNyAxMyAwIDM5IDM0IDQ3IDYzczI0IDIzIDQ2LTIwYzEyLTIyIDM3LTYzIDU1LTkxIDE5LTI3IDUwLTc2IDY5LTEwOCAxOS0zMSA0OS03OCA2Ni0xMDMgMTctMjYgMzUtNTcgMzktNzAgNS0xOCA5LTIxIDE2LTEwczkgOSA5LTZjMC0zMCAyNS05NiAzMy04OCA0IDMgNyAwIDctOSAwLTE1IDExMC02OCAxNDEtNjggOSAwIDI0IDkgMzQgMjAgMTUgMTcgMTkgNDQgMjMgMTcwIDMgODQgMSAxNTAtNCAxNTBzLTMxLTctNTgtMTVjLTY1LTIwLTYzLTIwLTcwIDIwLTE0IDcyLTE2IDEwNS02IDEwNSA2IDAgMTAtMTEgMTAtMjUgMC0zNCAyMC0zMiAyMSAzIDIgMjUgMiAyNSA2IDMgMy0xMyAxMy0yNiAyNC0yOCAxMC0zIDE5LTEwIDE5LTE1czEyLTggMjctNmMyMyAzIDI5IDkgMzUgNDMgMyAyMiAxNCA2MCAyMiA4NCAyMSA1OCAyMSA1OC0xOSA1My0yMS0zLTM1IDAtMzUgNyAwIDYgMTYgMTEgMzUgMTEgMzQgMCA0OCAxNCAyMyAyMy04IDItMTQgMjQtMTUgNTMtMSAyNy00IDY3LTggODktOCA1Mi04IDE1MCAwIDE3NSAxMyA0MiA1MCAxNSA1Ny00MyAyLTE0IDYtMjkgOS0zMSAzLTMgNC0yOSAzLTU4LTItMzUgMi01NSAxMS02MiAxMS04IDEyLTE1IDQtMjYtOS0xMy0xMC0xMi01IDMgMyA5IDIgMTctMyAxNy05IDAtMjAtNzAtMTgtMTEwIDItMjIgNi0yNSA0Mi0yMyAzNyAyIDMzLTEtMjItMTMtMjItNC0yMy05LTIzLTkxdi04NmwyMSAxOWM0OSA0NCAxMzkgMTM5IDEzOSAxNDYgMCA1IDUgOCAxMCA4IDYgMCA0LTEzLTUtMzAtMTctMzQtMjAtNzAtNC03MCA1IDAgOC00IDUtOS00LTUgMC0xMiA2LTE0IDEwLTQgMTAtOC0xLTE1LTExLTgtOS0xMSAxMC0xN2wyNC04LTIzLThjLTEzLTUtMjAtMTMtMTctMTkgNC02LTExLTEwLTM3LTEwLTI0IDAtNjAtMy04MC02bC0zOC03di05MmMwLTU3LTYtMTA5LTE1LTEzNS0yMS01OS0xOS05MyA2LTEwOCAxMy04IDE5LTIwIDE2LTMyLTUtMTggMjYtNTMgMzctNDMgMyA0IDYtMyA2LTE1IDAtMjkgMTctMjggMjQgMSAyIDEyIDQgNSAyLTE1LTEtMzAgMS0zNSAxMS0yNiAxMCA4IDE3IDcgMjYtNyA4LTkgMjctMTggNDQtMTkgMTYtMSAzOC04IDQ4LTE2IDEyLTEwIDQxLTE1IDg2LTE1IDQzIDAgNjItMyA1Mi05LTE3LTktMTU3LTEtMjE4IDE0LTMyIDctNDEgNi00OC02LTQtNy0xNC0xNC0yMC0xNC03IDAtMTMtOS0xMy0yMHM0LTIwIDktMjAgNC03LTMtMTVjLTktMTEtMTAtMTUtMS0xNSA4IDAgMTAtOCA2LTE5LTQtMTIgNS0zNyAyNC02OCAxNi0yNiAzMi02MSAzNS03OCA2LTI5IDYtMjktNC01LTE0IDMyLTQxIDYxLTUxIDU1LTQtMy0xMS0zNS0xNS03MS00LTQ2LTEzLTczLTI2LTg2LTE3LTE3LTE4LTIyLTctMjkgOC00IDE2LTUgMjAtMSAzIDQgMjMgMjggNDMgNTUgMzYgNDQgNDEgNDcgODYgNDcgNjAgMCA5NiAyNiAxMTAgODIgNiAyMiAyOCA2MSA0OCA4N3M1MCA2OCA2NyA5NWMyMyAzNyA0NiA1NiAxMDUgODggNDEgMjMgOTQgNTQgMTE3IDcwIDIzIDE1IDQ1IDI4IDUwIDI4IDExIDAgMTYzIDc3IDE4NCA5MyA4IDcgMzkgNDcgNjcgODlsNTIgNzd2NzIxaC0zNDJsNi02MmMxMC0xMDYgMTctMjM4IDEyLTIzOC0zIDAtMTYgMTEtMzAgMjUtMjUgMjUtNTYgMzMtNTYgMTUgMC01IDUtMTAgMTAtMTAgNiAwIDEwLTQgMTAtMTAgMC01LTYtMTAtMTQtMTAtOSAwLTEyLTctOS0yMCAzLTEyIDAtMjAtNy0yMHMtMTAtOC03LTIwYzMtMTEgMS0xNy00LTE0cy03IDIyLTUgNDJjMyAyMCA4IDczIDEyIDExNyA5IDExMyAxMCAxMjUgMTkgMTY4bDcgMzdoLTUxYy0zMCAwLTUwLTQtNDYtOSAzLTUgMC0xMy02LTE2LTUtNC04LTEzLTUtMjFzLTEtMTctOS0yMGMtOC00LTEyLTExLTktMTYgNC02IDMtMTMtMi0xNy0yMC0xNC02NS0xODktNDYtMTc3IDYgMyAxNCAyIDE3LTQgNC02IDMtMTAtMi05LTIyIDQtMzAtMy0zMC0yMy0xLTQ1LTMtNTAtMTktNDQtMTIgNS0xNSAyLTEwLTEwIDQtOSAwLTI0LTgtMzMtMTctMTgtMjQtNzAtMTMtODggNC02IDItMTUtNC0xOC01LTQtOC0xMy01LTIxIDMtNyAxLTE2LTUtMjAtNi0zLTgtMTItNS0yMCA3LTE4LTMxLTU3LTQ1LTQ4LTggNC03IDkgMSAxNCA3IDQgOSAxMyA2IDE5LTQgNi00IDE3IDAgMjMgNSA3IDkgMTkgOSAyOCAzIDMyIDQ3IDE1MCA1NiAxNTAgNiAwIDcgNCA0IDEwLTMgNSAxIDMyIDkgNjAgOCAyNyAxMiA1MCA5IDUwLTQgMCAxIDYgMTIgMTMgMTAgOCAxNSAxOSAxMiAyNC02IDkgOSAxMTQgMjggMjAxbDUgMjItMjE3LTJjLTE2OC0yLTIxNy02LTIxNi0xNSAyLTctMi0xMy03LTEzLTYgMC0xMCA3LTEwIDE1IDAgMTMtNTcgMTUtNDU0IDE0LTM5NyAwLTQ1NS0yLTQ2MC0xNXptODAtMTljLTMtOCAyLTE5IDEyLTI0IDktNSAxNC0xMyAxMC0xNy00LTMtMy0xNCAyLTIzIDgtMTYgMTMtNDMgMjYtMTQzIDMtMjEgMy0zOCAwLTM4LTQgMC0yMyA3Mi0zMSAxMjAtMiAxNC0xMyA1MS0yMyA4My0xNiA0OC0xNyA1Ny01IDU3IDkgMCAxMy02IDktMTV6bTI4Mi0zM2MyLTctNi0xMi0xNy0xMi0yMSAwLTI3IDExLTE0IDI0IDkgOSAyNiAyIDMxLTEyem0xMjMyLTI2NGMwLTEzLTQtMTctMTItMTItMTAgNi0xMCA0LTItNyAxNi0yMCAxMi05Mi02LTk3LTEyLTMtMTItMi0yIDYgMTAgNyAxMCAxMS0zIDIyLTEyIDEwLTEzIDE2LTMgMjcgMTAgMTIgOSAxOC00IDI3LTE2IDEyLTE2IDE0LTEgMjlzMTUgMTcgMCAyM2MtOSAzLTE3IDEwLTE3IDE1czExIDMgMjUtMyAyNS0yMCAyNS0zMHptLTExNjAtNDVjMC03IDctMTMgMTUtMTNzMTUtNiAxNS0xNGMwLTcgNy0xOSAxNS0yNnMxMi0xNiA5LTIxIDgtOSAyNC05YzI5IDAgMjkgMSAyNyA0NC0yIDI0LTYgNDktOSA1NC0zIDYtMSAxMiA2IDE0IDE2IDYgNzAtMjEgNjMtMzEtMi01IDQtMTYgMTUtMjZzMTctMjIgMTQtMjZjLTMtNSA1LTkgMTgtMTAgMTMgMCAxNy0zIDExLTYtMTAtMy05LTkgNC0yMSAxNS0xNiAxMy0xNy0yNi0yNS0zMS02LTQ5LTQtNzMgNy0xNyA5LTQ4IDE2LTY4IDE2LTM1IDAtMzkgMy01OSA1MC0xMiAyOC0yNSA1MC0zMCA1MC00IDAtOCA2LTggMTMgMCA2LTQgMjEtOCAzMi01IDE0IDEgMTEgMTktMTAgMTQtMTYgMjUtMzYgMjYtNDJ6bS0xNzggMTBjLTYtMi0xMC05LTctMTMgNi0xMC0zNC0zNS00Mi0yNi03IDcgMzggNDYgNTIgNDUgNiAwIDQtMy0zLTZ6bTEyMzEtMjljLTMtOC02LTE0LTctMTJzLTcgMTEtMTQgMjBjLTExIDE0LTEwIDE2IDcgMTEgMTItMyAxNy0xMSAxNC0xOXptMi02OWMwLTE5LTQtMzUtOS0zNS02IDAtMS03IDEwLTE1IDE2LTEzIDE2LTE0IDItOXMtMTggMS0xOC0xNmMwLTExLTQtMTktOS0xNnMtNSAyMi0xIDQyYzUgMjAgNiA0NyA0IDYwLTMgMTUgMCAyNCA4IDI0czEzLTEzIDEzLTM1em0tODU4LTE1MWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em04OTgtNzVjLTMtNC0xMi02LTIwLTMtOCA0LTEzIDEwLTEwIDE1IDMgNCAxMiA2IDIwIDMgOC00IDEzLTEwIDEwLTE1ek01NTYgMTkyM2MtMy04LTYtMjEtNi0yOXMtNC0xNC0xMC0xNGMtNSAwLTEwIDE2LTEwIDM1IDAgMjcgMyAzMyAxNiAyOCA4LTMgMTMtMTIgMTAtMjB6bTc5Ni0zOThjLTQtMTQtNTMtOS02OSA4LTEyIDExLTcgMTMgMjkgOCAyNC0zIDQyLTEwIDQwLTE2elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTExNTQgMTc3NmMtMjAtMjItMjctNTYtMTEtNTYgMjQgMCA0MSAyOCAzMSA0OS03IDE1LTExIDE3LTIwIDd6TTE1MiAxNDAzYzE0LTE3IDExMS04MSAxMjAtNzkgNCAwIDE1LTkgMjMtMjIgOS0xMiAyMC0yMCAyNS0xNyA0IDMgMTMtMiAyMC0xMHMxNi0xMiAyMS05IDkgMCA5LTYgNS04IDEwLTVjNiAzIDEzLTEgMTYtMTAgOS0yNC0yNS05My03My0xNDctMjMtMjYtNDctNjUtNTMtODctMTAtMzgtMzMtNzMtNzctMTE3LTE5LTE5LTIzLTMzLTIzLTg2IDAtMzUgNC03OSAxMC05OCAxMy00NyAxOC0xMzAgOC0xMjQtNCAzLTgtNC04LTE1IDAtMzAgMjgtMTUgMzIgMTdsMyAyNyAyNS0zMGMxNC0xNiA0Ni01MSA3Mi03NiAyNy0yNiA0OC01MCA0OC01NCAwLTkgMjctMzUgMzctMzUgNSAwIDE5LTEzIDMxLTMwIDE5LTI1IDI4LTI5IDYyLTI2IDIyIDIgNDUgOCA1MiAxMyAyMSAxNyAxNDMgMzQgMTg3IDI3IDIzLTQgNDEtMyA0MSAyIDAgMTEgMTUxIDEyIDE2OCAxIDctNSA5LTEzIDYtMTktNC02IDItNSAxNSAxIDEyIDcgMjcgMjEgMzQgMzEgNiAxMSAxNSAyMCAxOSAyMCA1IDAtNy0yMS0yNS00Ny0xOS0yNy0zNy01Ni00MC02Ni01LTEzLTE4LTE3LTU0LTE4LTI2IDAtNTctMi02Ny00LTQzLTgtMjIzLTgtMjM1IDAtOSA1LTEyIDQtNy0zIDMtNiAxLTE0LTUtMTgtNy00LTktMy01IDQgMTMgMjItMTUgMjMtNDkgMi0xOS0xMi0zNS0yNS0zNS0yOXMtMTMtMTQtMjgtMjNjLTI1LTE1LTMyLTE1LTU1LTMtMTUgOC0yOSAxMy0zMSAxMi0zLTEtOCAyLTEzIDdzLTIgNiA3IDJjOS01IDgtMi0yIDctMTAgOC0xNCAxNy0xMCAyMXMxIDYtNyA0Yy0xNi0zLTUxIDUwLTU0IDgxLTEgMTItMjIgMzctNDkgNTktNDIgMzItNDggNDEtNDMgNjYgNCAyMSAyIDI3LTkgMjMtMTQtNi00MCAxNS0zMSAyNSAzIDItMSA1LTggNS0xMCAwLTEyLTEwLTYtNDEgNC0yMyAxMi02OSAxOC0xMDQgMjUtMTQwIDk1LTI1OSAxODQtMzE2IDkyLTU4IDE0MC03MSAyNjItNzEgMTA0IDAgMTE0IDIgMTc1IDMyIDgxIDQwIDE1NCAxMDMgMTc3IDE1MSA5IDIwIDIzIDQzIDMwIDUwIDIyIDIzIDM1IDUzIDI5IDY4LTQgOS0yIDEyIDUgOCA4LTQgOSAxIDQgMTctNSAxOC00IDIwIDQgOXMxNS0zIDM1IDQwYzE0IDMwIDI2IDYxIDI2IDY4IDAgOCAyMyAzOSA1MSA3MCAyOCAzMiA2NyA4OSA4NyAxMjcgMzAgNTcgMzYgODEgMzYgMTMwIDAgNzEtMTYgMTA2LTg1IDE4Ni0yNyAzMS00OSA2My00OSA3MCAwIDgtNCAyMC05IDI4LTggMTItMTMgMTItMzUtMi00Ny0zMS05MS0xMi03OSAzMyA0IDE1LTggMjAtNjkgMzQtNTggMTMtOTIgMjktMTU4IDczLTk2IDY1LTIwNiAxMjMtMjI5IDEyMi0xMiAwLTExLTMgNC0xMCAxOC04IDE3LTktNC01LTE2IDMtNDYtNi04Mi0yNWwtNTctMzEtNDggMjVjLTUzIDI3LTEyNCA4Ni0xMjQgMTAzIDAgNS0yNCAxNC01NCAyMC00NCA4LTUzIDctNDQtM3ptMTUyLTQyNWMtMi0xOC01LTQwLTYtNDgtMy0yNiAxNC05MCAyNC05MCA1IDAgNy00IDQtOS00LTUgNC03IDE2LTMgMTggNCAyMCAyIDE0LTE0LTQtMTAtNC0xNSAwLTExIDEwIDkgMzQtMTEgMzAtMjYtMS03LTEtOSAxLTQgMyA0IDkgNyAxNCA3IDYgMCA4LTQgNC05LTMtNS0xLTEyIDUtMTYgNi0zIDEzIDEgMTYgOSA0IDExIDEyIDEzIDI5IDYgMTMtNSAyNi02IDMxLTIgNCA0IDMgMS0xLTctNi0xMS00LTEzIDExLTggMTggNyAxOCA2LTEtOC0xMy0xMS0zMi0xNC01Ny0xMS0yNSA0LTM2IDEtMzQtNyAzLTIwIDE3LTM4IDI2LTMyIDQgMyAxNS02IDI0LTIwczI0LTI1IDMyLTI1YzEwIDAgMTQtNiAxMS0xNC00LTktMS0xMyA2LTEwIDcgMiAyNC03IDM3LTIxczI5LTI1IDM2LTI1YzYgMCAyNi0xMyA0NC0zMCAxOC0xNiAzOC0zMCA0NS0zMCAyNCAwIDI3LTIwIDMtMjEtNjItMi0xMTUgMS0xMzggNi0xNCA0LTMyIDctNDAgOHMtMjUgOC0zNyAxNWMtMTMgNy0yMyAxMC0yMyA3IDAtNC03IDEtMTYgOS04IDktMjIgMTYtMjkgMTYtOCAwLTE3IDUtMjEgMTItNSA3LTIgOSA3IDMgOC00LTEgNy0xOCAyNC0xOCAxOC0zMyAzMy0zMyAzNXMtMTEgMzQtMjUgNzItMjUgODktMjUgMTE0YzAgNDcgMTcgMTY4IDI2IDE4MiA5IDE1IDExIDggOC0yNHptMzUxLTU4Yy0zLTUtMTMtMTAtMjEtMTBzLTE0IDUtMTQgMTBjMCA2IDkgMTAgMjEgMTAgMTEgMCAxNy00IDE0LTEwem00MjItNjJjMy00OCAxMi04MyAyMS04MyAyMiAwIDIxLTEyLTMtMjUtMTQtNy0yNS0xOS0yNS0yNyAwLTctNi0xMy0xMy0xM3MtMjMtMTEtMzUtMjUtMjgtMjUtMzQtMjVjLTEwIDAtMTAgMi0xIDggMTYgMTAgNDUgNzkgNTAgMTE3IDYgNTUgMzggMTEyIDQwIDczek04MTggNzA5YzItMTItNi0xNi0zMy0xNi0zMyAwLTQ1IDE0LTI4IDMxIDEzIDEyIDU4IDIgNjEtMTV6bTg2LTk3Yy02LTQtMTAtMTUtOS0yNCAyLTExLTItMTUtMTEtMTEtOCAzLTE0IDgtMTQgMTEgMCAxMSAzMyA0MiAzOSAzNyAzLTQgMS05LTUtMTN6bS05OS0yM2M1LTUgMC05LTE0LTktMTIgMC0zMCA4LTM5IDE3LTE2IDE1LTE1IDE2IDEzIDkgMTctNCAzNC0xMiA0MC0xN3ptMTk1LTI3OGMwLTEwLTgtMjYtMTktMzUtMTctMTUtMTktMTUtMjUtMS03IDE5IDIyIDY3IDM1IDU5IDUtMyA5LTEzIDktMjN6bS0xMTMtMjdjLTktOS0xMDYtMTAtMTAwLTEgMiA0IDI3IDcgNTUgN3M0OS0zIDQ1LTZ6bS0xMi0xNjRjLTEyLTE5LTEwOS03MC0xMzUtNzAtMTcgMC03IDggMzQgMjUgMzMgMTMgNjkgMzMgODAgNDQgMjAgMjEgMzQgMjEgMjEgMXpNNTMwIDU0YzgyLTIwIDg2LTI0IDE5LTIwLTU5IDQtODEgOC04OSAxNy0zIDMtMTQgMTEtMjUgMTgtMjMgMTQtMzIgMTUgOTUtMTV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM1MzMyMmVcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTI1NSAyNzAyYy0zLTgtNS0yOC01LTQ1IDAtMTgtMTQtNzUtMzItMTI3LTE3LTUyLTQxLTEzMy01NC0xODAtMjEtODEtMjMtODUtNDgtODItMzMgNC0zMy0xMi0xLTUwIDE5LTIzIDI0LTM4IDIwLTU3LTQtMjAgNS00NiAzMy05NiA1OS0xMDggOTEtMTU3IDEyOS0xOTYgMzItMzMgMzMtMzggMjUtNzYtMTAtNDYgNS04MiAyNi02MSA5IDkgMTIgOCAxMi01IDAtMTYgMi0xNiAzMC0yIDE4IDkgMjggMjAgMjQgMjctNSA3LTIgOSA4IDUgMTAtMyAxOSAzIDI3IDE5IDExIDI0IDExIDI0LTE4IDktMTYtOC0zMS0yMC0zMy0yNy0yLTYtMTAgMy0xOCAyMi0xNSAzNi0xNSAzNiA2NiA5N2wyOSAyMi0zNC0xMWMtMzUtMTEtNTUgMS00NCAyOSA0IDkgMCAxMS0xMSA3LTE4LTctMjItMjQtNi0yNCA2IDAgMTAtOCAxMC0xNyAwLTE0LTMtMTMtMTcgNi0xNSAyMy0xNSAyNSA1IDQxIDE4IDE1IDIwIDIyIDEyIDUxLTYgMTktMTAgMzUtMTAgMzZzOSAwIDIxLTJjMTUtMyAxOSAwIDE1IDEwLTggMjAtMTQgNDItOSAzMyAzLTUgMTMtOCAyNC04IDIyIDAgNzkgNzMgNzkgMTAyIDAgMTAgNCAxOCA5IDE4czEyIDggMTUgMThjNSAxNiAzLTM0LTExLTI2Mi01LTgyLTMtMTA3IDUtMTAyIDcgNCAxMiAxNiAxMiAyNnM0IDIwIDEwIDIyYzUgMiAxMSAyNCAxMyA0OXM4IDUyIDEyIDU5YzUgOCAxMCAzMiAxMSA1NCAxIDIzIDUgNzIgOSAxMDlsNiA2OC0zMCAxMmMtMzEgMTItNDIgMjctMTggMjcgMTMgMCAzOSAzNCA0NyA2M3MyNCAyMyA0Ni0yMGMxMi0yMiAzNy02MyA1NS05MCAxOS0yOCA1Mi04MSA3NC0xMTcgMjItMzcgNTAtODEgNjItOThsMjMtMzJ2MjdjMCAxNSA0IDI3IDEwIDI3IDUgMCA3IDE2IDQgMzYtMyAyOS0xIDM1IDExIDMxIDgtNCAxNy0yIDIwIDMgNCA2IDEyIDEwIDE4IDEwIDggMCA3LTMtMi05LTExLTctMTEtMTAgMi0xNyAxNi05IDQwLTExMiAzMC0xMjgtNC01LTEtNiA1LTIgNyA0IDEyIDAgMTItMTBzMi0xNSA1LTEyYzQgMy0xIDQzLTkgODlzLTEyIDg2LTEwIDg4YzggOCAxNC03IDE5LTQ1IDMtMjEgOC01OSAxMS04NCA0LTI1IDEwLTQ5IDE0LTU1IDQtNSAxNi00MSAyNS04MCAxMC0zOCAyMS03NCAyNS03OCAyMC0yMiAyMyA5MiA0IDE1NC0yIDktMSAyNiA0IDM5IDcgMTggMTIgMiAyMS03MSAxNC0xMDIgMTktMTI0IDI2LTExNyAzIDMgMCA0MC02IDg0LTIwIDEzNi0xNyAxODMgMTQgMTg0IDQgMCA3LTggNy0xNyAwLTEwIDQtMjMgOC0zMHM4IDE1IDkgNDdjMSAzMy0xIDYwLTUgNjBzLTI5LTctNTctMTVjLTUwLTE1LTgxLTEzLTcwIDQgMyA1IDEgMTMtNSAxNi02IDQtOCAxNi01IDI2IDQgMTEgMSAyNi01IDM0LTkgMTAtOSAxNS0yIDE1IDYgMCA5IDcgNiAxNS00IDgtMSAxNSA1IDE1czExLTExIDExLTI1YzAtMzQgMjAtMzIgMjEgMyAyIDI1IDIgMjUgNiAzIDMtMTMgMTMtMjYgMjQtMjggMTAtMyAxOS0xMCAxOS0xNXMxMi04IDI3LTZjMjMgMyAyOSA5IDM1IDQzIDMgMjIgMTQgNjAgMjIgODQgMjEgNTggMjEgNTgtMTkgNTMtMjEtMy0zNSAwLTM1IDcgMCA2IDE2IDExIDM1IDExIDM2IDAgNDcgMTMgMTkgMjQtMTIgNS0xNCAxMy05IDMzIDQgMTcgMiAyOS03IDM0LTggNS05IDktMiA5czkgMTEgNiAyNWMtMiAxNC0xMSAyNS0xOCAyNS0xOSAwLTE4IDE2IDIgMjQgMjYgMTAgNyAyMy0yNyAxOC0yMi0zLTMwLTEtMjUgNyA0IDYgMTEgOSAxNiA2IDEzLTggNDAgNiA0MCAyMSAwIDgtMTAgMTQtMjIgMTVoLTIzbDIzIDljMTcgNyAyMiAxNyAyMiA0NCAwIDQ0IDkgNjYgMjYgNjYgMTYgMCAzMy0zMCAzNi02NSAyLTI1IDQtMjYgNTMtMjFsNTAgNS00NC0xMmMtNjQtMTgtNjYtMzgtNC0zMiA0NyA1IDQ3IDQgMTMtNi0xOS02LTQxLTEzLTQ3LTE1LTctMi0xMy04LTEzLTE0IDAtOCAxNS05IDQ2LTQgNTkgOCA1My0xMS02LTIxLTQxLTctNTEtMTktMjUtMjkgOC0zIDEyLTEyIDktMjEtNS0xMiAwLTE0IDI3LTEwczMwIDMgMTQtNGMtMTEtNS0zMC0xMC00Mi0xMC0yNC0xLTM0LTI1LTMwLTcxIDItMjIgNi0yNSA0Mi0yMyAzNyAyIDMzLTEtMjItMTMtMjItNC0yMy05LTIzLTkxdi04NmwyMSAxOWM0OSA0NCAxMzkgMTM5IDEzOSAxNDYgMCA1IDUgOCAxMCA4IDYgMCA0LTEzLTUtMzAtMTctMzQtMjAtNzAtNC03MCA1IDAgNy01IDQtMTEtNS03IDE0LTkgNTYtN2w2MiAzIDI0IDcwYzEzIDM5IDI4IDcyIDMzIDczIDYgMiA4IDggNSAxM3MxIDMxIDkgNTlsMTUgNTAtMzcgMmMtMzYgMS0zNiAxIDggNyAzNyA1IDQ1IDkgNDMgMjYtMSAxNyAxNyAxMzQgMzIgMjAzbDUgMjItMjE3LTJjLTE2OC0yLTIxNy02LTIxNi0xNSAyLTctMi0xMy03LTEzLTYgMC0xMCA2LTEwIDE0IDAgMjEtOTA3IDE4LTkxNS0yem04MS0xN2MtMy04IDItMTkgMTItMjQgOS01IDE0LTEzIDEwLTE3LTQtMy0zLTE0IDItMjMgOC0xNiAxMy00MyAyNi0xNDMgMy0yMSAzLTM4IDAtMzgtNCAwLTIzIDcyLTMxIDEyMC0yIDE0LTEzIDUxLTIzIDgzLTE2IDQ4LTE3IDU3LTUgNTcgOSAwIDEzLTYgOS0xNXptMjgyLTMzYzItNy02LTEyLTE3LTEyLTIxIDAtMjcgMTEtMTQgMjQgOSA5IDI2IDIgMzEtMTJ6bTg0Mi0zMmMxMS04IDctMTAtMTctOC0xNyAxLTI5IDYtMjcgMTAgNyAxMSAyNiAxMCA0NC0yem00NC00MmMtMy01LTI0LTctNDctNy0yMyAxLTUyLTEtNjQtNXMtMjQtMy0yNiAyYy0zIDQgOCA5IDI2IDEwIDE3IDIgMzIgNCAzMyA1IDcgNyA4MiAxIDc4LTV6bTU2LTI3YzAtMTAtMzktMTctMTM1LTI1LTI3LTItNjItNy03Ny0xMS0yMC01LTI4LTMtMjggNiAwIDcgMyA5IDYgNiA0LTMgMTQtMiAyMyAzIDEwIDUgNTcgMTEgMTA1IDE0IDQ4IDIgOTAgNyA5NCAxMCA4IDkgMTIgNyAxMi0zem0tNTQwLTExYy04LTUtMjQtOS0zNS05LTE2IDEtMTYgMiA1IDkgMzUgMTEgNDggMTEgMzAgMHptMjMtMzFjLTEwLTEwLTEzNi00MC0xNjMtMzgtMTEgMSA5OCAzMiAxNzAgNDggMiAxLTEtNC03LTEwem01Ny0zOWMtOC02LTI0LTEwLTM1LTEwcy0zMC0zLTQyLTZjLTE0LTQtMjMtMi0yMyA1IDAgNiAxNSAxMSAzMyAxMiAxNyAwIDQxIDQgNTIgOCAyNSAxMCAzNSAzIDE1LTl6bTE4MCAwYy0xOS0xMy0zMC0xMy0zMCAwIDAgNiAxMCAxMCAyMyAxMCAxOCAwIDE5LTIgNy0xMHptLTMzMC0zMmMtMjUtNC00OS02LTU1LTQtMTcgNiA1OSAyMyA4MCAxNyAxNC0zIDYtNy0yNS0xM3ptMTE5LTEyYy0xMC0xMC01OS0xNC01OS01IDAgNSAxNCA5IDMyIDkgMTcgMCAyOS0yIDI3LTR6bS0zNzktODNjMC03IDctMTMgMTUtMTNzMTUtNiAxNS0xNGMwLTcgNy0xOSAxNS0yNnMxMi0xNiA5LTIxIDgtOSAyNC05YzI5IDAgMjkgMSAyNyA0NC0yIDI0LTYgNDktOSA1NC0zIDYtMSAxMiA2IDE0IDE2IDYgNzAtMjEgNjMtMzEtMi01IDQtMTYgMTUtMjZzMTctMjIgMTQtMjZjLTMtNSA1LTkgMTgtMTAgMTMgMCAxNy0zIDExLTYtMTAtMy04LTkgNC0yMSAxNi0xNiAxNC0xOC0yNC0yNi0zMS02LTQ5LTUtNzQgOC0xNyA5LTQ5IDE2LTY5IDE2LTM1IDAtMzkgMy01OSA1MC0xMiAyOC0yNSA1MC0zMCA1MC00IDAtOCA2LTggMTMgMCA2LTQgMjEtOCAzMi01IDE0IDEgMTEgMTktMTAgMTQtMTYgMjUtMzYgMjYtNDJ6bS0xNzggMTBjLTYtMi0xMC05LTctMTMgNi0xMC0zNC0zNS00Mi0yNi03IDcgMzggNDYgNTIgNDUgNiAwIDQtMy0zLTZ6bTM5Mi0xODhjLTQtOC0xLTE1IDUtMTVzMTEtOCAxMS0xN2MwLTE1LTEtMTUtMTMgMi0xMCAxMi0yMiAxNi00MCAxM3MtMjQtMS0yMCA4YzIgNyAxNCAxNSAyNiAxN3MyNSA1IDI5IDZjNCAwIDUtNiAyLTE0em0tNjI1LTYwYzAtNS02LTEtMTQgOS04IDExLTE1IDI0LTE1IDMwIDAgNSA3IDEgMTUtMTAgOC0xMCAxNC0yMyAxNC0yOXptNjA4LTFjLTktOS0yOCA2LTIxIDE4IDQgNiAxMCA2IDE3LTEgNi02IDgtMTMgNC0xN3ptLTUyMS0zMGM3LTM3LTQtMjYtMTYgMTYtNyAyMy02IDMwIDEgMjMgNS01IDEyLTIzIDE1LTM5em0tNDEgMTVjLTQtNi0xMC04LTEzLTVzLTExIDEtMTktNWMtOC04LTEzLTgtMTMtMSAwIDExIDE2IDIwIDM4IDIxIDcgMSAxMC00IDctMTB6bTgwNS0zOWMwLTUtOS0xNC0yMC0yMC0xNi04LTIwLTgtMjAgNCAwIDggOCAxNyAxOCAxOSA5IDMgMTggNSAyMCA2IDEgMCAyLTMgMi05em0tMTAyLTc3YzEtMzUtMi01Mi03LTQzLTkgMTYtNyAxMDAgMyAxMDAgMiAwIDQtMjYgNC01N3ptLTQ3Mi01MGMtMy04LTYtMjEtNi0yOXMtNC0xNC0xMC0xNGMtNSAwLTEwIDE2LTEwIDM1IDAgMjcgMyAzMyAxNiAyOCA4LTMgMTMtMTIgMTAtMjB6bTQ5OC0xMDRjOS01NyAyLTU5LTExLTQtNiAyNS03IDQ1LTMgNDVzMTAtMTkgMTQtNDF6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTgzNCAyNjUzYzQtMzggOS0xMDEgMTEtMTQyIDMtNDQgMTAtNzggMTgtODNzNy04LTUtOGMtOSAwLTI5IDExLTQ0IDI1cy0zMyAyNS00MCAyNWMtMjYgMC0xNC0xNSAzMS00MCAyNC0xMyA0Ny0zMCA1MC0zOCAzLTcgOS0xMSAxNC04IDUgNCA0Mi0xMCA4Mi0yOSA0MS0xOSA2Ny0zNSA1OS0zNXMtNDEgMTMtNzMgMzBjLTUzIDI3LTg3IDMwLTg3IDkgMC01IDE1LTEzIDMzLTE4bDMyLTktMzktMWMtMzItMS0zNy0zLTI3LTEzIDYtNyAxNi0xNCAyMS0xNCAzMS00IDMyLTcgNS0xMy0yMy02LTM2LTMtNTUgMTUtNDIgMzctOTUgNTktNzAgMjkgMTYtMTkgOTAtNjAgMTI1LTY5IDI2LTcgMjYtOCAxMC0yNi05LTEwLTE0LTI0LTEwLTI5IDEwLTE3LTUtNTItMTgtNDQtNiA0LTIxIDctMzQgOC0xMiAwLTMyIDExLTQzIDIzcy0yOCAyMi0zOCAyMmMtMjAgMCA5Ni04MCAxMTgtODEgMTAgMCA4LTMtNS04LTE4LTctNjEgNC03NSAxOS0xMyAxMy01MCAyOS01MCAyMiAwLTUgMTEtMTUgMjUtMjJzMjUtMTcgMjUtMjJjMC00IDktOCAxOS04czIxLTcgMjUtMTVjOC0yMy0xNy0xOC02MyAxMi0zNiAyNC00MyAzMy00MCA2MCAwIDQtOCAxMC0xOCAxNC0xNyA3LTE3IDggMCA4IDEyIDEgMTcgMTAgMTggMjkgMCAxNSAyIDQzIDQgNjJzLTEgNDEtNyA0OGMtNyA4LTcgMTIgMSAxMiA2IDAgMTEgMTEgMTEgMjQgMCAyMS00IDI0LTI4IDIxLTIxLTMtMzMgMy00NiAyMS0xMCAxMy0yMyAyMS0yOCAxOHMtMTUtMS0yMiA1Yy05IDgtMTMgNy0xMy00IDAtOCA0LTE1IDgtMTVzMTAtNyAxMy0xNmM1LTE0IDQtMTUtOS00LTIyIDE4LTI4IDctMTItMjMgOC0xNSAxNy0yNCAyMC0yMCA0IDMgNyAxIDctNSAwLTE0LTE2LTE2LTI0LTMtMyA1LTE1IDExLTI3IDE0LTE2IDQtMTkgMi0xNS0xMCA0LTkgMC0yMy04LTMyLTEzLTE1LTIwLTQ2LTE3LTc5IDEtMTAgNi0xMCAyNC0yIDE3IDkgMTYgNi01LTEwLTM0LTI2LTM2LTQ0LTUtMzUgMTkgNiAxOCAzLTgtMTktMzAtMjUtMjEtMzUgMTYtMTYgMzQgMTkgMjAgMi0yNS0zMC00Ni0zMS05OC0zOS0xMjYtMTktMTEgOC04IDkgMTMgNCAzMS02IDY3IDEgNjcgMTUgMCA0LTE1IDYtMzIgNS0xOC0yLTQ2LTMtNjEtNC0xNi0xLTI2LTUtMjItMTFzLTExLTEwLTM3LTEwYy0yNCAwLTYwLTMtODAtNmwtMzgtN3YtMTE3YzAtOTItMy0xMjAtMTUtMTMwLTgtNy0xNS0yOS0xNS00OSAwLTI2IDMtMzIgOS0yMSA2IDggNyAxOCA1IDIyLTMgNC0xIDggNCA4czEzLTI1IDE3LTU1YzMtMzAgMTEtNTUgMTYtNTVzNiAxMiAzIDI4Yy0xMSA0NiA3IDE3IDIxLTM1bDEzLTQ4IDIgNTAgMiA1MCAxMC00MGM1LTIyIDctNTAgNS02Mi01LTI3IDExLTIwIDIzIDExIDggMTkgOSAxOSA5LTcgMS0zMiA0My01NiA2Ni0zNyA5IDggMTQgNyAxOC0yIDMtOSAxMy02IDMzIDEybDI5IDI1LTI0LTI3Yy0xNC0xNi0yMi0zMS0xOS0zNCA0LTMgMzgtNiA3Ni03IDQ2LTEgNjUtNSA1NS0xMS0xNy05LTE1Ny0xLTIxOCAxNC0zMiA3LTQxIDYtNDgtNi00LTctMTQtMTQtMjAtMTQtNyAwLTEzLTktMTMtMjBzNC0yMCA5LTIwIDQtNy0zLTE1Yy05LTExLTEwLTE1LTEtMTUgOCAwIDEwLTggNi0xOS00LTEyIDUtMzcgMjQtNjggMTYtMjYgMzItNjEgMzUtNzggNi0yOSA2LTI5LTQtNS0xNCAzMi00MSA2MS01MSA1NS00LTMtMTEtMzUtMTUtNzEtNC00Ni0xMy03My0yNi04Ni0xNi0xNi0xNy0yMi04LTI4czI4IDkgNTggNDZjNDIgNTIgNDcgNTQgOTIgNTQgNjAgMCA5NiAyNiAxMTAgODIgNiAyMiAyOCA2MSA0OCA4N3M1MCA2OCA2NyA5NWMyMyAzNyA0NiA1NiAxMDUgODggNDEgMjMgOTQgNTQgMTE3IDcwIDIzIDE1IDQ1IDI4IDUwIDI4IDExIDAgMTYzIDc3IDE4NCA5MyA4IDcgMzkgNDcgNjggOTBsNTIgNzctMiAxMTdjLTEgOTUtNCAxMjAtMTggMTMxLTE1IDEzLTE1IDEzIDIgOCAxNi01IDE3IDEwIDE3IDIyOXYyMzVoLTM0Mmw2LTY3em0xMjMtMjU5Yy0yLTItMjAgMy00MCAxMHMtMzQgMTUtMzEgMTljMyAzIDIxLTIgNDAtMTAgMTktOSAzMy0xOCAzMS0xOXptLTMwMy0xOWMzLTkgMC0xNS05LTE1LTggMC0xNSA3LTE1IDE1czQgMTUgOSAxNSAxMS03IDE1LTE1em02My0xMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0zMzYtMTFjOS0zIDE3LTkgMTctMTRzLTE1LTItMzIgN2MtMzkgMTktNTEgMzAtMjMgMTkgMTEtNCAyOC0xMCAzOC0xMnptLTM2Ni0yMGMtMy0zLTExLTItMTcgMi05IDYtOSAxMCAxIDE2IDE0IDggMjctNyAxNi0xOHptMzc4LTgxYy0xNy00LTExMSAzNi0xMjUgNTQtNyA3IDIyLTEgNjQtMTkgNDEtMTggNjktMzMgNjEtMzV6bS0xMDUgN2MwLTUgNC04IDktNCA1IDMgMTIgMSAxNi01IDMtNSAxNS0xMCAyNS0xMHMyNS03IDM0LTE1YzgtOCAxOS0xNSAyNS0xNXMxMS00IDExLTljMC05LTQ1IDYtODkgMjktOSA1LTI0IDExLTMzIDE0LTE5IDYtMjUgMjYtOCAyNiA2IDAgMTAtNSAxMC0xMXptNjAtNzVjMC0xNi0xNi0xOS0yNS00LTE1IDI1LTMyIDktMzAtMjlzMi0zOC0yNS0yOGMtMTUgNi0yNyAxNi0yNyAyMyAwIDEwIDUgMTAgMjAgMiAxMy03IDE3LTcgMTMgMC0zIDYtMiAxMyA0IDE3czggMTAgNSAxNWMtOCAxMyAyNSAyOCA0NiAyMyAxMS0zIDE5LTEyIDE5LTE5em0tNDc1LTgwYy0zNS0zMC04NS01OC05Mi01MC0zIDIgMCAxMyA2IDIzczExIDE1IDExIDEyIDIxIDQgNDggMTdjNjAgMzAgNjQgMzAgMjctMnptMjA1LTZjMC0zIDE0LTkgMzAtMTMgMTctNCAzMC0xMSAzMC0xNiAwLTIzLTY0IDUtODUgMzgtMTUgMjMtMTUgMjMgNSAxMSAxMS03IDIwLTE2IDIwLTIwem0tMTA5IDVjMS0xMCAyLTI1IDMtMzMgMC05IDEwLTE0IDIxLTEzIDIwIDIgMjAgMSAwLTEzLTE4LTEzLTIxLTEyLTM2IDE4LTE2IDMyLTE2IDU4IDIgNTggNSAwIDEwLTggMTAtMTd6bS0xOC03OGMtMy05LTE2LTEzLTM0LTExLTIyIDMtMjcgMC0xOS05IDE1LTE4IDAtMjYtMjQtMTMtMTkgMTAtMjAgOS04LTUgMTItMTMgMTAtMTgtNy0yOS0yMS0xMy0yOS0zMC0xMi0yNSA1IDEgOS0yIDEwLTggMS01LTktMTAtMjEtMTAtMTMtMS0yOC00LTMzLTctNi00LTE3LTMtMjQgMS04IDYtMyAxMCAxOCAxNCAxNyA0IDMxIDExIDMxIDE3IDAgNS02IDktMTIgOC03LTItMTIgNS0xMiAxNSAyIDE0LTEgMTUtMTIgNi04LTYtMTEtMTYtNy0yM3MyLTctNyAxYy0xMCA5LTkgMTUgNCAyOSAxMiAxMiAxNCAyMCA3IDI3LTYgNi0xMSAxNC0xMSAxOCAwIDEyIDc0IDQ2IDg5IDQxIDgtMyAxMSAwIDcgNy01IDcgMSAxMSAxNCAxMSAxMSAwIDIzIDcgMjcgMTYgNSAxMiAxMCA3IDI0LTIwIDEwLTIxIDE1LTQ0IDEyLTUxem0zNDIgNTVjMTctMTggMTctMjAgMi0xNC05IDMtMTcgMTAtMTcgMTUgMCA0LTcgNS0xNyAyLTExLTQtMTQtMy05IDUgMTAgMTcgMjAgMTUgNDEtOHptLTMzLTI4YzIwLTIwIDQtMjItMjItMi0xOSAxNC0yMSAxOC03IDE2IDktMSAyMi03IDI5LTE0em0tNjk1LTU0Yy0yLTEzLTQtNS00IDE3LTEgMjIgMSAzMiA0IDIzIDItMTAgMi0yOCAwLTQwem01MzcgNDZjMTctNiAyMi0yNCA4LTI0LTUgMC0xNyA3LTI4IDE1LTE5IDE1LTggMjAgMjAgOXptLTE0NC01NGMtOC01LTExLTEwLTUtMTAgNSAwLTctOS0yOC0yMC00MS0yMi01Ny0yNS01Ny05IDAgNSA1IDcgMTAgNCA2LTMgMjUgNSA0MyAxOSAxNyAxNCAzNyAyNiA0MiAyNiA2IDAgMy01LTUtMTB6bS0zMTQtMTA2Yy03LTM2LTE2LTQzLTE2LTEyIDAgMjIgNyAzOCAxNyAzOCAyIDAgMS0xMi0xLTI2em0tNzktMzZjLTItMTMtNC01LTQgMTctMSAyMiAxIDMyIDQgMjMgMi0xMCAyLTI4IDAtNDB6bTExNS0zMjNjLTQtMTQtNTMtOS02OSA4LTEyIDExLTcgMTMgMjkgOCAyNC0zIDQyLTEwIDQwLTE2ek0xNDYgMTQwOGM4LTEyIDExOC04NiAxMjYtODQgNCAwIDE1LTkgMjMtMjIgOS0xMiAyMC0yMCAyNS0xNyA0IDMgMTMtMiAyMC0xMHMxNi0xMiAyMS05IDkgMCA5LTYgNS04IDEwLTVjNiAzIDEzLTEgMTYtMTAgOS0yNC0yNS05My03My0xNDctMjMtMjYtNDctNjUtNTMtODctMTAtMzgtMzMtNzMtNzctMTE3LTE5LTE5LTIzLTMzLTIzLTg2IDAtMzUgNC03OSAxMC05OCAxMy00NyAxOC0xMzAgOC0xMjQtNCAzLTgtNC04LTE1IDAtMzAgMjgtMTUgMzIgMTdsMyAyNyAyNS0zMGMxNC0xNiA0Ni01MSA3Mi03NiAyNy0yNiA0OC01MCA0OC01NCAwLTkgMjctMzUgMzctMzUgNSAwIDE5LTEzIDMxLTMwIDE5LTI1IDI4LTI5IDYyLTI2IDIyIDIgNDUgOCA1MiAxMyAyMSAxNyAxNDMgMzQgMTg3IDI3IDIzLTQgNDEtMyA0MSAyIDAgMTEgMTUxIDEyIDE2OCAxIDctNSA5LTEzIDYtMTktNC02IDItNSAxNSAxIDEyIDcgMjcgMjEgMzQgMzEgNiAxMSAxNSAyMCAxOSAyMCA1IDAtNy0yMS0yNS00Ny0xOS0yNy0zNy01Ni00MC02Ni01LTEzLTE4LTE3LTU0LTE4LTI2IDAtNTctMi02Ny00LTQzLTgtMjIzLTgtMjM1IDAtOSA1LTEyIDQtNy0zIDMtNiAxLTE0LTUtMTgtNy00LTktMy01IDQgMTMgMjItMTUgMjMtNDkgMi0xOS0xMi0zNS0yNS0zNS0yOXMtMTMtMTQtMjgtMjNjLTI1LTE1LTMyLTE1LTU1LTMtMTUgOC0yOSAxMy0zMSAxMi0zLTEtOCAyLTEzIDdzLTIgNiA3IDJjOS01IDgtMi0yIDctMTAgOC0xNCAxNy0xMCAyMXMxIDYtNyA0Yy0xNi0zLTUxIDUwLTU0IDgxLTEgMTItMjIgMzctNDkgNTktNDIgMzItNDggNDEtNDMgNjYgNCAyMSAyIDI3LTkgMjMtMTQtNi00MCAxNS0zMSAyNSAzIDItMSA1LTggNS0xMCAwLTEyLTEwLTYtNDEgNC0yMyAxMi02OSAxOC0xMDQgMjUtMTQwIDk1LTI1OSAxODQtMzE2IDkyLTU4IDE0MC03MSAyNjItNzEgMTA0IDAgMTE0IDIgMTc1IDMyIDgxIDQwIDE1NCAxMDMgMTc3IDE1MSA5IDIwIDIzIDQzIDMxIDUxIDE5IDIwIDMzIDYxIDI2IDczLTUgNy0yIDggNiAzIDktNiAxMC0xIDUgMTYtNSAxOC00IDIwIDQgOXMxNS0zIDM1IDQwYzE0IDMwIDI2IDYxIDI2IDY4IDAgOCAyMyAzOSA1MSA3MCAyOCAzMiA2NyA4OSA4NyAxMjcgMzAgNTcgMzYgODEgMzYgMTMwIDAgNzEtMTYgMTA2LTg1IDE4Ni0yNyAzMS00OSA2My00OSA3MCAwIDgtNCAyMC05IDI4LTggMTItMTMgMTItMzUtMi00Ny0zMS05MS0xMi03OSAzMyA0IDE1LTggMjAtNjkgMzQtNTggMTMtOTIgMjktMTU4IDczLTk2IDY1LTIwNiAxMjMtMjI5IDEyMi0xMiAwLTExLTMgNC0xMCAxOC04IDE3LTktNC01LTE2IDMtNDYtNi04Mi0yNWwtNTctMzEtNDggMjVjLTUzIDI3LTEyNCA4Ni0xMjQgMTAzIDAgNS0yNCAxNC01NCAyMC0zMCA1LTUyIDYtNTAgMnptMTU4LTQzMGMtMi0xOC01LTQwLTYtNDgtMy0yNiAxNC05MCAyNC05MCA1IDAgNy00IDQtOS00LTUgNC03IDE2LTMgMTggNCAyMCAyIDE0LTE0LTQtMTAtNC0xNSAwLTExIDEwIDkgMzQtMTEgMzAtMjYtMS03LTEtOSAxLTQgMyA0IDkgNyAxNCA3IDYgMCA4LTQgNC05LTMtNS0xLTEyIDUtMTYgNi0zIDEzIDEgMTYgOSA0IDExIDEyIDEzIDI5IDYgMTMtNSAyNi02IDMxLTIgNCA0IDMgMS0xLTctNi0xMS00LTEzIDExLTggMTggNyAxOCA2LTEtOC0xMy0xMS0zMi0xNC01Ny0xMS0yNSA0LTM2IDEtMzQtNyAzLTIwIDE3LTM4IDI2LTMyIDQgMyAxNS02IDI0LTIwczI0LTI1IDMyLTI1YzEwIDAgMTQtNiAxMS0xNC00LTktMS0xMyA2LTEwIDcgMiAyNC03IDM3LTIxczI5LTI1IDM2LTI1YzYgMCAyNi0xMyA0NC0zMCAxOC0xNiAzOC0zMCA0NS0zMCAyNCAwIDI3LTIwIDMtMjEtNjItMi0xMTUgMS0xMzggNi0xNCA0LTMyIDctNDAgOHMtMjUgOC0zNyAxNWMtMTMgNy0yMyAxMC0yMyA3IDAtNC03IDEtMTYgOS04IDktMjIgMTYtMjkgMTYtOCAwLTE3IDUtMjEgMTItNSA3LTIgOSA3IDMgOC00LTEgNy0xOCAyNC0xOCAxOC0zMyAzMy0zMyAzNXMtMTEgMzQtMjUgNzItMjUgODktMjUgMTE0YzAgNDcgMTcgMTY4IDI2IDE4MiA5IDE1IDExIDggOC0yNHptMzUxLTU4Yy0zLTUtMTMtMTAtMjEtMTBzLTE0IDUtMTQgMTBjMCA2IDkgMTAgMjEgMTAgMTEgMCAxNy00IDE0LTEwem00MjItNjJjMy00OCAxMi04MyAyMS04MyAyMiAwIDIxLTEyLTMtMjUtMTQtNy0yNS0xOS0yNS0yNyAwLTctNi0xMy0xMy0xM3MtMjMtMTEtMzUtMjUtMjgtMjUtMzQtMjVjLTEwIDAtMTAgMi0xIDggMTYgMTAgNDUgNzkgNTAgMTE3IDYgNTUgMzggMTEyIDQwIDczek04MTggNzA5YzItMTItNi0xNi0zMy0xNi0zMyAwLTQ1IDE0LTI4IDMxIDEzIDEyIDU4IDIgNjEtMTV6bTg2LTk3Yy02LTQtMTAtMTUtOS0yNCAyLTExLTItMTUtMTEtMTEtOCAzLTE0IDgtMTQgMTEgMCAxMSAzMyA0MiAzOSAzNyAzLTQgMS05LTUtMTN6bS05OS0yM2M1LTUgMC05LTE0LTktMTIgMC0zMCA4LTM5IDE3LTE2IDE1LTE1IDE2IDEzIDkgMTctNCAzNC0xMiA0MC0xN3ptMTk1LTI3OGMwLTEwLTgtMjYtMTktMzUtMTctMTUtMTktMTUtMjUtMS03IDE5IDIyIDY3IDM1IDU5IDUtMyA5LTEzIDktMjN6bS0xMTMtMjdjLTktOS0xMDYtMTAtMTAwLTEgMiA0IDI3IDcgNTUgN3M0OS0zIDQ1LTZ6bS0xMi0xNjRjLTEyLTE5LTEwOS03MC0xMzUtNzAtMTcgMC03IDggMzQgMjUgMzMgMTMgNjkgMzMgODAgNDQgMjAgMjEgMzQgMjEgMjEgMXpNNTMwIDU0YzgyLTIwIDg2LTI0IDE5LTIwLTU5IDQtODEgOC04OSAxNy0zIDMtMTQgMTEtMjUgMTgtMjMgMTQtMzIgMTUgOTUtMTV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM1MzQ2M2NcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTI1NSAyNzAyYy0zLTgtNS0yOC01LTQ1IDAtMTgtMTQtNzUtMzItMTI3LTE3LTUyLTQxLTEzMy01NC0xODAtMjEtODEtMjMtODUtNDgtODItMzMgNC0zMy0xMi0xLTUwIDE5LTIzIDI0LTM4IDIwLTU3LTQtMjAgNS00NiAzMy05NiA1NS0xMDEgMTA1LTE3NiAxMzYtMjA0IDIyLTIxIDI1LTMwIDIwLTU4LTMtMTgtMy00NSAwLTU5IDYtMjEgOS0yNCAyMS0xNHMxNSA5IDE1LTRjMC0xNSAyLTE1IDMwLTEgMTggOSAyOCAyMCAyNCAyNy01IDctMiA5IDggNSAxMC0zIDE5IDMgMjcgMTkgMTEgMjQgMTEgMjQtMTggOS0xNi04LTMxLTIwLTMzLTI3LTItNi0xMCAzLTE4IDIyLTE1IDM2LTE1IDM2IDY2IDk3bDI5IDIyLTMzLTEyYy0yNy0xMC0zNS05LTQyIDItNCA4LTYgMjAtMyAyOCA0IDkgMCAxMS0xMSA3LTE4LTctMjItMjQtNi0yNCA2IDAgMTAtOCAxMC0xNyAwLTE0LTMtMTMtMTcgNi0xNSAyMy0xNSAyNSA1IDQxIDE4IDE1IDIwIDIyIDEyIDUxLTYgMTktMTAgMzUtMTAgMzZzOSAwIDIxLTJjMTUtMyAxOSAwIDE1IDEwLTggMjAtMTQgNDItOSAzMyAzLTUgMTMtOCAyNC04IDIyIDAgNzkgNzMgNzkgMTAyIDAgMTAgNCAxOCA5IDE4czEyIDggMTUgMThjMyA5IDMtMjYgMC03OC0xNC0yMjYtMTQtMjk2LTEtMjcwIDYgMTQgMTUgMjcgMTkgMzBzOSAyNiAxMSA1MmMyIDI1IDggNTEgMTIgNTggNSA4IDEwIDMyIDExIDU0IDEgMjMgNSA3MiA5IDEwOWw2IDY4LTMwIDEyYy0zMSAxMi00MiAyNy0xOCAyNyAxMyAwIDM5IDM0IDQ3IDYzczI0IDIzIDQ2LTIwYzEyLTIyIDM3LTYzIDU1LTkwIDE5LTI4IDUyLTgxIDc0LTExNyAyMi0zNyA1MC04MSA2Mi05OGwyMy0zMnYyN2MwIDE1IDQgMjcgMTAgMjcgNSAwIDcgMTYgNCAzNi0zIDI5LTEgMzUgMTEgMzEgOC00IDE3LTIgMjAgMyA0IDYgMTIgMTAgMTggMTAgOCAwIDctMy0yLTktMTEtNy0xMS0xMCAyLTE3IDE2LTkgNDAtMTEyIDMwLTEyOC00LTUtMS02IDUtMiA3IDQgMTIgMCAxMi0xMHMyLTE1IDUtMTJjNCAzLTEgNDMtOSA4OXMtMTIgODYtMTAgODhjOCA4IDE0LTcgMTktNDUgMy0yMSA4LTU5IDExLTg0IDQtMjUgMTAtNDkgMTQtNTUgNC01IDE2LTQxIDI1LTgwIDEwLTM4IDIxLTc0IDI1LTc4IDIwLTIyIDIzIDkyIDQgMTU0LTIgOS0xIDI2IDQgMzkgNyAxOCAxMiAyIDIxLTcxIDE0LTEwMiAxOS0xMjQgMjYtMTE3IDMgMyAwIDQwLTYgODQtMjAgMTM2LTE3IDE4MyAxNCAxODQgNCAwIDctOCA3LTE3IDAtMTAgNC0yMyA4LTMwczggMTUgOSA0N2MxIDMzLTEgNjAtNSA2MHMtMjktNy01Ny0xNWMtNTAtMTUtODEtMTMtNzAgNCAzIDUgMSAxMy01IDE2LTYgNC04IDE2LTUgMjYgNCAxMSAxIDI2LTUgMzQtOSAxMC05IDE1LTIgMTUgNiAwIDkgNyA2IDE1LTQgOC0xIDE1IDUgMTVzMTEtMTEgMTEtMjVjMC0zNCAyMC0zMiAyMSAzIDIgMjUgMiAyNSA2IDMgMy0xMyAxMy0yNiAyNC0yOCAxMC0zIDE5LTEwIDE5LTE1czEyLTggMjctNmMyMyAzIDI5IDkgMzUgNDMgMyAyMiAxNCA2MCAyMiA4NCAyMSA1OCAyMSA1OC0xOSA1My0yMS0zLTM1IDAtMzUgNyAwIDYgMTYgMTEgMzUgMTEgMzYgMCA0NyAxMyAxOSAyNC0xMiA1LTE0IDEzLTkgMzMgNCAxNyAyIDI5LTcgMzQtOCA1LTkgOS0yIDlzOSAxMSA2IDI1Yy0yIDE0LTExIDI1LTE4IDI1LTE5IDAtMTggMTYgMiAyNCAyNiAxMCA3IDIzLTI3IDE4LTIyLTMtMzAtMS0yNSA3IDQgNiAxMSA5IDE2IDYgMTMtOCA0MCA2IDQwIDIxIDAgOC0xMCAxNC0yMiAxNWgtMjNsMjMgOWMxNyA3IDIyIDE3IDIyIDQ0IDAgNDQgOSA2NiAyNiA2NiAxNiAwIDMzLTMwIDM2LTY1IDItMjUgNC0yNiA1My0yMWw1MCA1LTQ0LTEyYy02NC0xOC02Ni0zOC00LTMyIDQ3IDUgNDcgNCAxMy02LTE5LTYtNDEtMTMtNDctMTUtNy0yLTEzLTgtMTMtMTQgMC04IDE1LTkgNDYtNCA1OSA4IDUzLTExLTYtMjEtNDEtNy01MS0xOS0yNS0yOSA4LTMgMTItMTIgOS0yMS01LTEyIDAtMTQgMjctMTBzMzAgMyAxNC00Yy0xMS01LTMwLTEwLTQyLTEwLTI0LTEtMzQtMjUtMzAtNzEgMi0yMiA2LTI1IDQyLTIzIDM3IDIgMzMtMS0yMi0xMy0yMi00LTIzLTktMjMtOTF2LTg2bDIxIDE5YzQ5IDQ0IDEzOSAxMzkgMTM5IDE0NiAwIDUgNSA4IDEwIDggNiAwIDQtMTMtNS0zMC0xNy0zNC0yMC03MC00LTcwIDUgMCA3LTUgNC0xMS01LTcgMTQtOSA1Ni03bDYyIDMgMjQgNzBjMTMgMzkgMjggNzIgMzMgNzMgNiAyIDggOCA1IDEzczEgMzEgOSA1OWwxNSA1MC0zNyAyYy0zNiAxLTM2IDEgOCA3IDM3IDUgNDUgOSA0MyAyNi0xIDE3IDE3IDEzNCAzMiAyMDNsNSAyMi0yMTctMmMtMTY4LTItMjE3LTYtMjE2LTE1IDItNy0yLTEzLTctMTMtNiAwLTEwIDYtMTAgMTQgMCAyMS05MDcgMTgtOTE1LTJ6bTgxLTE3Yy0zLTggMi0xOSAxMi0yNCA5LTUgMTQtMTMgMTAtMTctNC0zLTMtMTQgMi0yMyA4LTE2IDEzLTQzIDI2LTE0MyAzLTIxIDMtMzggMC0zOC00IDAtMjMgNzItMzEgMTIwLTIgMTQtMTMgNTEtMjMgODMtMTYgNDgtMTcgNTctNSA1NyA5IDAgMTMtNiA5LTE1em0yODItMzNjMi03LTYtMTItMTctMTItMjEgMC0yNyAxMS0xNCAyNCA5IDkgMjYgMiAzMS0xMnptODQyLTMyYzExLTggNy0xMC0xNy04LTE3IDEtMjkgNi0yNyAxMCA3IDExIDI2IDEwIDQ0LTJ6bTQ0LTQyYy0zLTUtMjQtNy00Ny03LTIzIDEtNTItMS02NC01cy0yNC0zLTI2IDJjLTMgNCA4IDkgMjYgMTAgMTcgMiAzMiA0IDMzIDUgNyA3IDgyIDEgNzgtNXptNTYtMjdjMC0xMC0zOS0xNy0xMzUtMjUtMjctMi02Mi03LTc3LTExLTIwLTUtMjgtMy0yOCA2IDAgNyAzIDkgNiA2IDQtMyAxNC0yIDIzIDMgMTAgNSA1NyAxMSAxMDUgMTQgNDggMiA5MCA3IDk0IDEwIDggOSAxMiA3IDEyLTN6bS01NDAtMTFjLTgtNS0yNC05LTM1LTktMTYgMS0xNiAyIDUgOSAzNSAxMSA0OCAxMSAzMCAwem0yMy0zMWMtMTAtMTAtMTM2LTQwLTE2My0zOC0xMSAxIDk4IDMyIDE3MCA0OCAyIDEtMS00LTctMTB6bTU3LTM5Yy04LTYtMjQtMTAtMzUtMTBzLTMwLTMtNDItNmMtMTQtNC0yMy0yLTIzIDUgMCA2IDE1IDExIDMzIDEyIDE3IDAgNDEgNCA1MiA4IDI1IDEwIDM1IDMgMTUtOXptMTgwIDBjLTE5LTEzLTMwLTEzLTMwIDAgMCA2IDEwIDEwIDIzIDEwIDE4IDAgMTktMiA3LTEwem0tMzMwLTMyYy0yNS00LTQ5LTYtNTUtNC0xNyA2IDU5IDIzIDgwIDE3IDE0LTMgNi03LTI1LTEzem0xMTktMTJjLTEwLTEwLTU5LTE0LTU5LTUgMCA1IDE0IDkgMzIgOSAxNyAwIDI5LTIgMjctNHptLTM3OS04M2MwLTcgNy0xMyAxNS0xM3MxNS02IDE1LTE0YzAtNyA3LTE5IDE1LTI2czEyLTE2IDktMjEgOC05IDI0LTljMjkgMCAyOSAxIDI3IDQ0LTIgMjQtNiA0OS05IDU0LTMgNi0xIDEyIDYgMTQgMTYgNiA3MC0yMSA2My0zMS0yLTUgNC0xNiAxNS0yNnMxNy0yMiAxNC0yNmMtMy01IDUtOSAxOC0xMCAxMyAwIDE3LTMgMTEtNi0xMC0zLTgtOSA0LTIxIDE2LTE2IDE0LTE4LTI0LTI2LTMxLTYtNDktNS03NCA4LTE3IDktNDkgMTYtNjkgMTYtMzUgMC0zOSAzLTU5IDUwLTEyIDI4LTI1IDUwLTMwIDUwLTQgMC04IDYtOCAxMyAwIDYtNCAyMS04IDMyLTUgMTQgMSAxMSAxOS0xMCAxNC0xNiAyNS0zNiAyNi00MnptLTE3OCAxMGMtNi0yLTEwLTktNy0xMyA2LTEwLTM0LTM1LTQyLTI2LTcgNyAzOCA0NiA1MiA0NSA2IDAgNC0zLTMtNnptMzkyLTE4OGMtNC04LTEtMTUgNS0xNXMxMS04IDExLTE3YzAtMTUtMS0xNS0xMyAyLTEwIDEyLTIyIDE2LTQwIDEzcy0yNC0xLTIwIDhjMiA3IDE0IDE1IDI2IDE3czI1IDUgMjkgNmM0IDAgNS02IDItMTR6bS02MjUtNjBjMC01LTYtMS0xNCA5LTggMTEtMTUgMjQtMTUgMzAgMCA1IDcgMSAxNS0xMCA4LTEwIDE0LTIzIDE0LTI5em02MDgtMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0tNTIxLTMwYzctMzctNC0yNi0xNiAxNi03IDIzLTYgMzAgMSAyMyA1LTUgMTItMjMgMTUtMzl6bS00MSAxNWMtNC02LTEwLTgtMTMtNXMtMTEgMS0xOS01Yy04LTgtMTMtOC0xMy0xIDAgMTEgMTYgMjAgMzggMjEgNyAxIDEwLTQgNy0xMHptODA1LTM5YzAtNS05LTE0LTIwLTIwLTE2LTgtMjAtOC0yMCA0IDAgOCA4IDE3IDE4IDE5IDkgMyAxOCA1IDIwIDYgMSAwIDItMyAyLTl6bS0xMDItNzdjMS0zNS0yLTUyLTctNDMtOSAxNi03IDEwMCAzIDEwMCAyIDAgNC0yNiA0LTU3em0tNDcyLTUwYy0zLTgtNi0yMS02LTI5cy00LTE0LTEwLTE0Yy01IDAtMTAgMTYtMTAgMzUgMCAyNyAzIDMzIDE2IDI4IDgtMyAxMy0xMiAxMC0yMHptNDk4LTEwNGM5LTU3IDItNTktMTEtNC02IDI1LTcgNDUtMyA0NXMxMC0xOSAxNC00MXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xODM0IDI2NTNjNC0zOCA5LTEwMSAxMS0xNDIgMy00NCAxMC03OCAxOC04M3M3LTgtNS04Yy05IDAtMjkgMTEtNDQgMjVzLTMzIDI1LTQwIDI1Yy0yNiAwLTE0LTE1IDMxLTQwIDI0LTEzIDQ3LTMwIDUwLTM4IDMtNyA5LTExIDE0LTggNSA0IDQyLTEwIDgyLTI5IDQxLTE5IDY3LTM1IDU5LTM1cy00MSAxMy03MyAzMGMtNTMgMjctODcgMzAtODcgOSAwLTUgMTUtMTMgMzMtMThsMzItOS0zOS0xYy0zMi0xLTM3LTMtMjctMTMgNi03IDE2LTE0IDIxLTE0IDMxLTQgMzItNyA1LTEzLTIzLTYtMzYtMy01NSAxNS00MiAzNy05NSA1OS03MCAyOSAxNi0xOSA5MC02MCAxMjUtNjkgMjYtNyAyNi04IDEwLTI2LTktMTAtMTQtMjQtMTAtMjkgMy02IDMtMjAgMC0zMi01LTE1LTEwLTE3LTIwLTktOSA4LTE1IDgtMjAgMC0zLTYtMTItOC0xOC00LTcgMy0zLTIgNy0xMCAxMS05IDI3LTE2IDM1LTE3IDExIDAgMTAtMy00LTgtMTgtNy02MSA0LTc1IDE5LTMgMy0xNiAxMS0zMCAxOS0yMCAxMS0xOSA3IDgtMTggMTgtMTcgNDEtMzEgNTEtMzFzMTgtNyAxOC0xNWMwLTIxLTMwLTE5LTU3IDUtMjMgMjAtNDAgMjYtNDAgMTRzMjktMzMgNTQtNDBjMjktNyAzNC0xOSAxMS0yOC04LTMtMTUtMS0xNSA0IDAgNi0zIDktNyA4LTUtMi0xOSA1LTMzIDE1LTEzIDktMjEgMTctMTYgMTdzMyA3LTQgMTVjLTggMTAtOSAxNS0xIDE1IDcgMCA4IDggMSAyNS01IDE0LTYgMjUtMiAyNiA0IDAtMiA0LTEzIDktMTcgNy0xNyA5LTIgOSAxMiAxIDE3IDEwIDE4IDI5IDAgMTUgMiA0MyA0IDYycy0xIDQxLTcgNDhjLTcgOC03IDEyIDEgMTIgNiAwIDExIDExIDExIDI0IDAgMjEtNCAyNC0yOCAyMS0yMS0zLTMzIDMtNDYgMjEtMTAgMTMtMjMgMjEtMjggMThzLTE1LTEtMjIgNWMtOSA4LTEzIDctMTMtNCAwLTggNC0xNSA4LTE1czEwLTcgMTMtMTZjNS0xNCA0LTE1LTktNC0yMiAxOC0yOCA3LTEyLTIzIDgtMTUgMTctMjQgMjAtMjAgNCAzIDcgMSA3LTUgMC03LTctMTItMTUtMTJzLTE1IDQtMTUgOS05IDExLTIxIDE0Yy0xNiA0LTE5IDItMTUtMTAgNC05IDAtMjMtOC0zMi0xMy0xNS0yMC00Ni0xNy03OSAxLTEwIDYtMTAgMjQtMiAxNyA5IDE2IDYtNS0xMC0zNC0yNi0zNi00NC01LTM1IDE5IDYgMTggMy04LTE5LTMwLTI1LTIxLTM1IDE2LTE2IDM0IDE5IDIwIDItMjUtMzAtNDYtMzEtOTgtMzktMTI2LTE5LTExIDgtOCA5IDEzIDQgMzEtNiA2NyAxIDY3IDE1IDAgNC0xNSA2LTMyIDUtMTgtMi00Ni0zLTYxLTQtMTYtMS0yNi01LTIyLTExcy0xMS0xMC0zNy0xMGMtMjQgMC02MC0zLTgxLTZsLTM3LTcgMi0xMTJjMy05NiAwLTExNi0xNC0xMzItMTAtMTEtMTgtMzUtMTgtNTQgMC0yNCAzLTMwIDktMTkgNiA4IDcgMTggNSAyMi0zIDQtMSA4IDUgOCA1IDAgMTEtMTUgMTMtMzIgMi0xOCA3LTMxIDExLTI4IDExIDcgMzYtMzkgMzgtNzAgMS0xNCA1LTUgOCAyMGw3IDQ1IDgtNTJjOC01MyAyMS02OCAyOS0zNSAzIDExIDUgNyA2LTEwIDEtMTkgOC0yOSAzMS0zNiAyMC04IDMyLTggMzYgMCA0IDcgOSA2IDE1LTMgNi0xMSAxNC04IDM2IDExbDI4IDI1LTI0LTI3Yy0yMi0yNi0yMy0yOC02LTM0IDEwLTQgNDQtOCA3Ni04IDM1LTEgNTItNCA0My05LTE4LTEwLTE2NC0yLTIxOSAxMi0zMiA4LTQxIDctNDgtNS00LTctMTQtMTQtMjAtMTQtNyAwLTEzLTktMTMtMjBzNC0yMCA5LTIwIDQtNy0zLTE1Yy05LTExLTEwLTE1LTEtMTUgOCAwIDEwLTggNi0xOS00LTEyIDUtMzcgMjQtNjggMTYtMjYgMzItNjEgMzUtNzggNi0yOSA2LTI5LTQtNS0xNCAzMi00MSA2MS01MSA1NS00LTMtMTEtMzUtMTUtNzEtNC00Ni0xMy03My0yNi04Ni0xNi0xNi0xNy0yMi04LTI4czI4IDkgNTggNDZjNDIgNTIgNDcgNTQgOTIgNTQgNjAgMCA5NiAyNiAxMTAgODIgNiAyMiAyOCA2MSA0OCA4N3M1MCA2OCA2NyA5NWMyMyAzNyA0NiA1NiAxMDUgODggNDEgMjMgOTQgNTQgMTE3IDcwIDIzIDE1IDQ1IDI4IDUwIDI4IDExIDAgMTYzIDc3IDE4NCA5MyA4IDcgMzkgNDcgNjggOTBsNTIgNzctMiAxMTdjLTEgOTUtNCAxMjAtMTggMTMxLTE1IDEzLTE1IDEzIDIgOCAxNi01IDE3IDEwIDE3IDIyOXYyMzVoLTM0Mmw2LTY3em0xMjMtMjU5Yy0yLTItMjAgMy00MCAxMHMtMzQgMTUtMzEgMTljMyAzIDIxLTIgNDAtMTAgMTktOSAzMy0xOCAzMS0xOXptLTMwMy0xOWMzLTkgMC0xNS05LTE1LTggMC0xNSA3LTE1IDE1czQgMTUgOSAxNSAxMS03IDE1LTE1em02My0xMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0zMzYtMTFjOS0zIDE3LTkgMTctMTRzLTE1LTItMzIgN2MtMzkgMTktNTEgMzAtMjMgMTkgMTEtNCAyOC0xMCAzOC0xMnptLTM2My04YzAtOC03LTE1LTE1LTE1LTI2IDAtMTggMjAgMTMgMjkgMSAxIDItNiAyLTE0em0tNDYtNjRjMTYtMTcgMTYtMjEgNC0yMS05IDAtMTggOS0yMSAyMS00IDEzLTEwIDE4LTE4IDEzLTctNC0xMC0zLTYgM3MtMiAxMy0xMyAxNi0yMCAxMC0yMCAxN2MwIDEzIDQ1LTE2IDc0LTQ5em00MjEtMjljLTE3LTQtMTExIDM2LTEyNSA1NC03IDcgMjItMSA2NC0xOSA0MS0xOCA2OS0zMyA2MS0zNXptLTEwNSA3YzAtNSA0LTggOS00IDUgMyAxMiAxIDE2LTUgMy01IDE1LTEwIDI1LTEwczI1LTcgMzQtMTVjOC04IDE5LTE1IDI1LTE1czExLTQgMTEtOWMwLTktNDUgNi04OSAyOS05IDUtMjQgMTEtMzMgMTQtMTkgNi0yNSAyNi04IDI2IDYgMCAxMC01IDEwLTExem0tMjcyLTMyYzUtMjQtMTUtMjEtMjggNC0xMCAxOC05IDIwIDcgMTcgMTAtMiAxOS0xMSAyMS0yMXptMzMyLTQzYzAtMTYtMTYtMTktMjUtNC0xNSAyNS0zMiA5LTMwLTI5czItMzgtMjUtMjhjLTE1IDYtMjcgMTYtMjcgMjMgMCAxMCA1IDEwIDIwIDIgMTMtNyAxNy03IDEzIDAtMyA2LTIgMTMgNCAxN3M4IDEwIDUgMTVjLTggMTMgMjUgMjggNDYgMjMgMTEtMyAxOS0xMiAxOS0xOXptLTQ3NS04MGMtMzUtMzAtODUtNTgtOTItNTAtMyAyIDAgMTMgNiAyM3MxMSAxNSAxMSAxMiAyMSA0IDQ4IDE3YzYwIDMwIDY0IDMwIDI3LTJ6bTk2LTFjMS0xMCAyLTI1IDMtMzMgMC04IDktMTUgMTgtMTVzMTktNCAyMi04IDMtNSAwLTJjLTQgMi0xNCAwLTI0LTUtMTMtNy0yMC0yLTMyIDIzLTE1IDMyLTE0IDU3IDMgNTcgNSAwIDEwLTggMTAtMTd6bS0xOC03OGMtMy05LTE2LTEzLTM0LTExLTIyIDMtMjcgMC0xOS05IDE1LTE4IDAtMjYtMjQtMTMtMTkgMTAtMjAgOS04LTUgMTItMTMgMTAtMTgtNy0yOS0yMS0xMy0yOS0zMC0xMi0yNSA1IDEgOS0yIDEwLTggMS01LTExLTExLTI2LTExLTE2LTEtMjgtMy0yOC00cy0xMC0zLTIyLTRjLTMyLTQtMTkgMTAgMTcgMTcgMTYgNCAzMCAxMSAzMCAxNyAwIDUtNiA5LTEyIDgtNy0yLTEyIDUtMTIgMTUgMiAxNC0xIDE1LTEyIDYtOC02LTExLTE2LTctMjNzMi03LTcgMWMtMTAgOS05IDE1IDQgMjkgMTIgMTIgMTQgMjAgNyAyNy02IDYtMTEgMTQtMTEgMTggMCAxMiA3NCA0NiA4OSA0MSA4LTMgMTEgMCA3IDctNSA3IDEgMTEgMTQgMTEgMTEgMCAyMyA3IDI3IDE2IDUgMTIgMTAgNyAyNC0yMCAxMC0yMSAxNS00NCAxMi01MXptMzQyIDU1YzE3LTE4IDE3LTIwIDItMTQtOSAzLTE3IDEwLTE3IDE1IDAgNC03IDUtMTcgMi0xMS00LTE0LTMtOSA1IDEwIDE3IDIwIDE1IDQxLTh6bS0zMy0yOGMyMC0yMCA0LTIyLTIyLTItMTkgMTQtMjEgMTgtNyAxNiA5LTEgMjItNyAyOS0xNHptLTY5NS01NGMtMi0xMy00LTUtNCAxNy0xIDIyIDEgMzIgNCAyMyAyLTEwIDItMjggMC00MHptNTQ3IDM3YzgtOCAyMS0xNSAyOC0xNiA5IDAgOS0yIDEtNS0xMS01LTczIDIyLTczIDMxIDAgMTEgMzAgNCA0NC0xMHptLTE1NC00NWMtOC01LTExLTEwLTUtMTAgNSAwLTctOS0yOC0yMC00MS0yMi01Ny0yNS01Ny05IDAgNSA1IDcgMTAgNCA2LTMgMjUgNSA0MyAxOSAxNyAxNCAzNyAyNiA0MiAyNiA2IDAgMy01LTUtMTB6bS0zMTQtMTA2Yy03LTM2LTE2LTQzLTE2LTEyIDAgMjIgNyAzOCAxNyAzOCAyIDAgMS0xMi0xLTI2em0tNzctMjFjLTEtMzQtMi0zNS05LTEzLTExIDM2LTExIDUwIDAgNTAgNiAwIDEwLTE3IDktMzd6bTExMy0zMzhjLTQtMTQtNTMtOS02OSA4LTEyIDExLTcgMTMgMjkgOCAyNC0zIDQyLTEwIDQwLTE2elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE3NTAgMjIxMGMwLTUgOS0xNCAyMC0yMCAxNi04IDE4LTggMTQgNC02IDE3LTM0IDMwLTM0IDE2ek04OTMgMTkyN2M0LTEwIDctMjUgNy0zMyAwLTkgNS0xMiAxMC05IDYgMyAxMCAyIDEwLTMgMC02IDctMTMgMTYtMTYgMTQtNSAxNS00IDUgOC04IDEwLTkgMTYtMSAyMSA1IDMgMTAgMTIgMTAgMTggMCA3LTQgNi0xMC0zLTktMTMtMTQtMTEtMzIgMTAtMTUgMTgtMTkgMjAtMTUgN3pNMTQ2IDE0MDhjOC0xMiAxMTgtODYgMTI2LTg0IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjQtMjUtOTMtNzMtMTQ3LTIzLTI2LTQ3LTY1LTUzLTg3LTEwLTM4LTMzLTczLTc3LTExNy0xOS0xOS0yMy0zMy0yMy04NiAwLTM1IDQtNzkgOS05OCAxMy00OCAyMS0xMzEgMTItMTI2LTQgMy03LTQtOC0xNC0xLTEzIDMtMTcgMTMtMTMgOCAzIDE0IDE4IDE0IDM0czUgMjkgMTIgMjljNiAwIDktMyA1LTYtNi02IDMxLTUyIDc4LTk2IDE3LTE1IDQwLTM3IDUzLTUwIDM1LTM0IDc1LTU4IDg1LTUxIDUgMyAxOC01IDI4LTE4IDE2LTIxIDIwLTIyIDQzLTEwIDE0IDggMjQgMTcgMjIgMjBzNDkgNiAxMTUgNmM2NSAwIDExOSA0IDExOSA4czI1IDYgNTYgM2MzMS0yIDcwIDAgODUgNCAyMiA2IDI5IDUgMjktNSAwLTcgNy0xNSAxNS0xOSA4LTMgMTUtMiAxNSAyczE0IDE2IDMxIDI2bDMwIDE4LTM2LTQ4Yy0yMS0yNy00MS01OS00Ni03MS03LTE5LTE2LTIzLTU2LTI0LTI3IDAtNTctMi02Ny00LTQzLTgtMjIzLTgtMjM1IDAtOSA1LTEyIDQtNy0zIDMtNiAxLTE0LTUtMTgtNy00LTktMy01IDQgMTMgMjItMTUgMjMtNDkgMi0xOS0xMi0zNS0yNS0zNS0yOXMtMTMtMTQtMjgtMjNjLTI1LTE1LTMyLTE1LTU1LTMtMTUgOC0yOSAxMy0zMSAxMi0zLTEtOCAyLTEzIDdzLTIgNiA3IDJjOS01IDgtMi0yIDctMTAgOC0xNCAxNy0xMCAyMXMxIDYtNyA0Yy0xNi0zLTUxIDUwLTU0IDgxLTEgMTItMjIgMzctNDkgNTktNDIgMzItNDggNDEtNDMgNjYgNCAyMSAyIDI3LTkgMjMtMTctNy0zOSAxNi0yOCAyOCA0IDUgMSA1LTYgMC05LTUtMTItMjAtOS00NCAzNS0yNjggMTE4LTM5NyAzMDItNDY3IDM4LTE1IDc2LTE5IDE2MC0xOSAxMDQgMCAxMTQgMiAxNzUgMzIgODEgNDAgMTU0IDEwMyAxNzcgMTUxIDkgMjAgMjMgNDMgMzEgNTEgMTkgMjAgMzMgNjEgMjYgNzMtNCA2LTIgOCA0IDQgMTEtNiA3MiAxMDUgNzIgMTMxIDAgOCAyMyA0MCA1MSA3MSA1NyA2NCAxMTUgMTcxIDEyNSAyMzAgOSA2MC0xOSAxMzMtODEgMjA2LTMwIDM1LTU3IDc1LTYxIDkwLTcgMzEtMTcgMzMtNDIgOC0xMS0xMS0yOC0yMS00MC0yNC0xNy01LTIzIDAtMzMgMzEtMTcgNTEtMjcgNjEtNjUgNjEtNDMgMC0xMTEgMzMtMTkzIDkzLTYyIDQ2LTczIDUxLTEwMCA0OC03LTItMTAgMy02IDkgNyAxMS02OCA1MC05NSA0OS04IDAgMy03IDI1LTE1IDQxLTE1IDc3LTQxIDQwLTI5LTExIDQtMjkgMTEtNDEgMTctMjEgMTAtODYtNi0xNDAtMzMtMTctOS0zMS02LTcwIDE0LTUzIDI3LTEyNCA4Ni0xMjQgMTAzIDAgNS0yNCAxNC01NCAyMC0zMCA1LTUyIDYtNTAgMnptNDk4LTMzNGM1OC00IDEwNi0xMSAxMDYtMTUgMC0xMi00OC0xMS0xNDAgMi03NCAxMS0xMTIgMTctMTE4IDE4LTIgMSAwIDYgMyAxMSA0IDcgMTMgNyAyNCAwIDEwLTUgNjYtMTIgMTI1LTE2ek0zMDkgOTcyYy0xNi02OCAwLTEzMiAzNC0xMzIgMTMgMCAyNi05IDMyLTIyIDctMTcgMjYtMjcgNzItMzggMzQtOSA2NS0xOSA2OC0yMiAxMS0xMS00OC0zNi03NS0zMi0yMiAzLTIzIDItNy03IDEwLTYgMjctOSAzNy02IDE2IDQgMTYgMiA0LTIyLTEzLTI0LTEyLTI3IDgtMzYgMTItNSAzNS0yMiA1MS0zNyAxNS0xNiAzNC0yOCA0Mi0yOHMxNS00IDE1LTEwYzAtNSA3LTEwIDE1LTEwczE1LTUgMTUtMTFjMC0xOSA3MC00MSAxMTItMzQgNzMgMTMgNTkgNTktMTkgNjQtNyAxLTEwIDgtNyAxNiA1IDEzIDkgMTMgMjIgMyAxMC04IDEzLTkgOS0xLTcgMTEgNTYgMTAgOTUtMyAxOS02IDQ3IDcgNzQgMzMgMTcgMTcgMTcgMTcgMTItNWwtNi0yMiAyOSAyMWMxNyAxMSAzNyAzMyA0NyA0NyA5IDE1IDIwIDI5IDIzIDMyIDQgMyAxMyAzNCAyMCA3MCA2IDM2IDIxIDc4IDMyIDkzIDEwIDE1IDE3IDM2IDE0IDQ3LTMgMTAgMSAyMSA4IDI0IDE4IDcgMjctNSAxNS0xOS02LTctMTEtMzYtMTEtNjYtMS00MyAyLTU2IDIxLTcxIDEyLTEwIDMzLTE4IDQ2LTE4czI0LTQgMjQtOWMwLTQtMTAtOC0yMi04LTQxLTEtNDgtMy00OC0xNCAwLTYgMTEtMjAgMjYtMzEgMTQtMTEgMjItMjMgMTktMjYtMy00LTEwLTEtMTQgNi03IDEyLTMzIDE3LTc0IDEzLTEwIDAtMTUtNS0xMi0xMSAzLTUtMi0xMC0xMi0xMS0xMCAwLTEzLTMtNS02IDYtMiAxMi0xMiAxMS0yMSAwLTktMy0xMi01LTYtNiAxNS01MCA2LTY2LTEzLTEwLTEzLTgtMTggMTAtMzMgMjctMjIgMjktMzQgMy0yMC0yNyAxNC01NCAxMy03Ny00LTE1LTEyLTE3LTE3LTYtMjcgMTYtMTcgMTYtMzQtMS0yMC0xMyAxMC03OSA3LTk4LTQtNC0zLTYtMTItMi0yMCAzLTggMC0xNS03LTE1LTYgMC04IDQtNSAxMCAxMiAyMC0xMzQtNC0xNDctMjQtNS03LTgtNC04IDcgMCAxMi00IDE1LTEyIDExLTctNC0yNy03LTQ2LTYtMTkgMi00MS0zLTUwLTEwLTEzLTExLTE1LTEwLTkgNCA1IDEzIDEgMTgtMTYgMTgtNjcgMi04NyA2LTgzIDE3IDMgNi02IDE0LTIwIDE3LTEzIDQtMjQgMTAtMjQgMTYgMCA1LTExIDctMjUgNC0xOS0zLTIzLTEtMTkgMTEgNCA4IDEgMTUtNyAxNS03IDAtOSAzLTYgNiA0IDQtMyAxNS0xNCAyNS0xMiAxMC0xOCAyMy0xNCAyOCAzIDYgMSAxMS01IDExLTggMC04IDYgMCAyMSA3IDExIDkgMjMgNiAyNy0zIDMtNiAwLTYtNyAwLTktNS05LTIxLTEtMTkgMTEtMTkgMTMtNCAyNCAxMiA5IDE0IDE3IDcgMzYtNSAxNC0xMiAyNC0xNiAyMy0zLTItMTItMy0xOC0yLTcgMC00IDQgNyA4IDExIDUgMjAgMTIgMjEgMTcgOSAxMjUgMjAgMTkzIDMyIDIxMiAyMSAzMiAyNCAyMiAxMS0zNnptMjUyLTE4YzEwLTEzIDEwLTE3LTItMjUtMjItMTQtMzItMTEtMjYgMTEgMyAxMCAwIDIxLTcgMjQtNiAyLTQgNSA1IDUgOSAxIDIyLTYgMzAtMTV6bTExOS00YzEyLTggMTItMTAgMS0xMC04IDAtMTktNy0yNi0xN3MtMTktMTQtMjktMTBjLTE1IDYtMTUgOCAxIDI3IDE5IDIyIDMxIDI0IDUzIDEwem01NDAtODdjMC0xMiA2LTI4IDEzLTM1IDEyLTE0IDI0LTQ4IDEyLTM2LTQgNC0xOCAzLTMxLTItMjUtMTAtMzQgMy0xMyAxNiA4IDQgOSAyNSA1IDU4LTQgMzQtMiA0NiA0IDM2IDUtOCAxMC0yNSAxMC0zN3pNNzM2IDcyMGMwLTIzLTctMjUtMjQtOHMtMTUgMjggNiAyOGMxMSAwIDE4LTcgMTgtMjB6bTk3IDExYzM4LTEgNTAtMTcgMjEtMjgtOS0zLTIwIDAtMjYgOC04IDExLTkgMTEtNS0zIDQtMTAtMS0xOC0xNC0yMS0yMy02LTU5IDItNTkgMTMgMCAyMiAxMyAzOCAyOCAzNSA5LTIgMzQtNCA1NS00em0yNTItOThsMTgtMjgtMjEgMTljLTEyIDExLTIyIDIzLTIyIDI4IDAgMTQgNyA5IDI1LTE5em0tODUtMzI0YzAtOS04LTI0LTE5LTMzLTE2LTE1LTE5LTE1LTI0LTItOCAyMSAyNSA3OSAzNSA2MyA0LTcgOC0xOSA4LTI4em0tMTEzLTI1Yy05LTktMTA2LTEwLTEwMC0xIDIgNCAyNyA3IDU1IDdzNDktMyA0NS02em0tMTItMTY0Yy0xMi0xOS0xMDktNzAtMTM1LTcwLTE3IDAtNyA4IDM0IDI1IDMzIDEzIDY5IDMzIDgwIDQ0IDIwIDIxIDM0IDIxIDIxIDF6TTUzMCA1NGM4Mi0yMCA4Ni0yNCAxOS0yMC01OSA0LTgxIDgtODkgMTctMyAzLTE0IDExLTI1IDE4LTIzIDE0LTMyIDE1IDk1LTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgIGZpbGw9XCIjODgzYjNiXCJcbiAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgIGQ9XCJNMTQ2IDE0MDhjOC0xMiAxMTgtODYgMTI2LTg0IDQgMCAxNS05IDIzLTIyIDktMTIgMjAtMjAgMjUtMTcgNCAzIDEzLTIgMjAtMTBzMTYtMTIgMjEtOSA5IDAgOS02IDUtOCAxMC01YzYgMyAxMy0xIDE2LTEwIDktMjQtMjUtOTMtNzMtMTQ3LTIzLTI2LTQ3LTY1LTUzLTg3LTEwLTM4LTMzLTczLTc3LTExNy0xOS0xOS0yMy0zMy0yMy04NiAwLTM1IDQtNzkgOS05OCAxNS01NCAyMy0xMzIgMTMtMTI3LTQgMy04LTMtOS0xMy0xLTEzIDMtMTcgMTMtMTMgOCAzIDE0IDE4IDE0IDM0czIgMjkgNSAyOWMxMCAwIDY0LTY1IDY1LTc3IDAtNyAzLTEzIDgtMTMgNCAwIDMzLTI1IDY2LTU1IDMyLTMwIDYzLTU2IDcwLTU2IDYtMSAxNi0yIDIzLTMgNyAwIDE5LTEwIDI3LTIxIDEzLTE3IDE3LTE4IDQwLTYgMTQgOCAyNCAxNyAyMiAyMHM0OCA3IDExMiA5YzIzMiA2IDI2OCA4IDI4MCAxNiA3IDQgMTIgMSAxMi04IDAtMjIgMTYtMjAgNTcgNWwzNSAyMi0zNy00OWMtMjAtMjYtNDEtNTktNDYtNzEtNy0xOS0xNi0yMy01Ni0yNC0yNyAwLTU3LTItNjctNC00My04LTIyMy04LTIzNSAwLTkgNS0xMiA0LTctMyAzLTYgMS0xNC01LTE4LTctNC05LTMtNSA0IDEzIDIyLTE1IDIzLTQ5IDItMTktMTItMzUtMjUtMzUtMjlzLTEzLTE0LTI4LTIzYy0yNS0xNS0zMi0xNS01NS0zLTE1IDgtMjkgMTMtMzEgMTItMy0xLTggMi0xMyA3cy0yIDYgNyAyYzktNSA4LTItMiA3LTEwIDgtMTQgMTctMTAgMjFzMSA2LTcgNGMtMTYtMy01MSA1MC01NCA4MS0xIDEyLTIyIDM3LTQ5IDU5LTQyIDMyLTQ4IDQxLTQzIDY2IDQgMjEgMiAyNy05IDIzLTE3LTctMzkgMTYtMjggMjggNCA1IDEgNS02IDAtOS01LTEyLTIwLTktNDQgMzUtMjY4IDExOC0zOTcgMzAyLTQ2NyAzOC0xNSA3Ni0xOSAxNjAtMTkgMTA0IDAgMTE0IDIgMTc1IDMyIDgxIDQwIDE1NCAxMDMgMTc3IDE1MSA5IDIwIDIzIDQzIDMxIDUxIDE5IDIwIDMzIDYxIDI2IDczLTQgNi0yIDggNCA0IDExLTYgNzIgMTA1IDcyIDEzMSAwIDggMjMgNDAgNTEgNzEgNTcgNjQgMTE1IDE3MSAxMjUgMjMwIDkgNjAtMTkgMTMzLTgxIDIwNi0zMCAzNS01NyA3NS02MSA5MC03IDMxLTE3IDMzLTQzIDctMzItMzItNjMtMzEtNzQgNC0xNSA0OC0zNCA2Mi04OSA2OC0zNSA1LTY1IDE2LTkzIDM2LTk4IDczLTE0NSAxMDMtMTY3IDEwNi0xMyAyLTQzIDktNjggMTUtNDkgMTItOTcgNy0xNDctMTYtMjktMTQtMzQtMTQtODAgOS01MiAyNy0xMjMgODYtMTIzIDEwMyAwIDUtMjQgMTQtNTQgMjAtMzAgNS01MiA2LTUwIDJ6bTQzNC0zMjljMzAtNCA4MS04IDExMy04IDMxLTEgNTctNSA1Ny0xMSAwLTEzLTQ1LTEyLTE0MCAxLTQxIDYtODQgMTItOTQgMTMtMTEgMi0yMiA5LTI0IDE2LTQgMTAgMCAxMSAxNCA1IDExLTQgNDQtMTEgNzQtMTZ6bS0yNjUtODRjLTI2LTg1LTExLTE1MiAzMy0xNDggMTYgMiAyNS00IDMxLTIxIDctMTYgMjUtMjggNjAtNDAgMjctOSA1Ny0xNiA2Ni0xNiAyMiAwIDE0LTIyLTEzLTM2LTI5LTE0LTQyLTI5LTE5LTIxIDIwIDcgMjMtMTMgNi0zMC05LTktNS0xNCAxNC0xOCAxNS00IDI5LTE2IDMyLTI2IDQtMTEgMTktMjcgMzMtMzYgMTUtOSA1MS0zMiA3OS01MSA0OC0zMiA1Ni0zNCA5NS0yNiA1OCAxMiA2NCA0MCAxMSA0OS00OSA4LTY4IDE5LTU4IDM1IDYgOSAzMCAxMSA5NSA2IDg1LTYgODktNiAxMjAgMjEgMzEgMjUgMzIgMjYgMjYgNS0xMi0zNyAxOS0xNiA1OSAzOSAyOCAzOSAzOCA2NiA0NyAxMjYgMTAgNjAgMTYgNzcgMzEgODEgMTMgMyAxOCAxMSAxNCAyOC0yIDEzIDIgMjUgOSAyOCAxNiA2IDI4LTEwIDE0LTE5LTUtMy0xMC0zMS0xMC02MSAwLTYxIDIyLTk0IDY1LTk0IDE0IDAgMjUtNCAyNS05IDAtNC0xMC04LTIyLTgtNDEtMS00OC0zLTQ4LTE0IDAtNiAxMS0yMCAyNi0zMSAxNC0xMSAyMi0yMyAxOS0yNi0zLTQtMTAtMS0xNCA2LTcgMTItMzMgMTctNzQgMTMtMTAgMC0xNS01LTEyLTExIDMtNS0yLTEwLTEyLTExLTEwIDAtMTMtMy02LTYgNy0yIDEzLTEyIDEyLTIxIDAtOS0zLTEyLTUtNi02IDE1LTUwIDYtNjYtMTMtMTAtMTMtOC0xOCAxMC0zMyAyNy0yMiAyOS0zNCAzLTIwLTI3IDE0LTU0IDEzLTc3LTQtMTUtMTItMTctMTctNi0yNyAxNi0xNyAxNi0zNC0xLTIwLTEzIDEwLTc5IDctOTgtNC00LTMtNi0xMi0yLTIwIDMtOCAwLTE1LTctMTUtNiAwLTggNC01IDEwIDEyIDIwLTEzNC00LTE0Ny0yNC02LTgtOC04LTggMCAwIDE2LTkwIDE2LTEwOSAxLTEyLTEwLTE0LTktOCA1IDUgMTMgMSAxOC0xNiAxOC02NSAyLTg3IDYtODMgMTYgNCAxMS02MCA0MC04MSAzNi04LTItMTAgMy03IDEzIDQgOCAxIDE1LTcgMTUtNyAwLTkgMy02IDYgNCA0LTMgMTUtMTQgMjUtMTIgMTAtMTggMjMtMTQgMjggMyA2IDIgMTEtNCAxMXMtOCA2LTUgMTQtNCAxOS0xNiAyNmMtMjAgMTAtMjAgMTMtNSAyNCAxMSA4IDE0IDE4IDggMzMtNCAxMi0xMSAyMi0xNSAyMi01IDEtMTQgMS0yMCAyLTcgMC00IDQgNiA4IDIxIDggMzMgNTEgMTUgNTEtOCAwLTggNCAwIDEzIDYgOCAxMyA0MiAxNyA3NyAzIDM5IDEzIDc1IDI3IDk1IDEyIDE5IDIzIDMzIDI0IDMxIDEtMS00LTI0LTEyLTUxem0yNDYtNDFjMTAtMTMgMTAtMTctMi0yNS0yMi0xNC0zMi0xMS0yNiAxMSAzIDEwIDAgMjEtNyAyNC02IDItNCA1IDUgNSA5IDEgMjItNiAzMC0xNXptMTE5LTRjMTItOCAxMi0xMCAxLTEwLTggMC0xOS03LTI2LTE3cy0xOS0xNC0yOS0xMGMtMTUgNi0xNSA4IDEgMjcgMTkgMjIgMzEgMjQgNTMgMTB6bTU0MC04N2MwLTEyIDYtMjggMTMtMzUgMTItMTQgMjQtNDggMTItMzYtNCA0LTE4IDMtMzEtMi0yNS0xMC0zNCAzLTEzIDE2IDggNCA5IDI1IDUgNTgtNCAzNC0yIDQ2IDQgMzYgNS04IDEwLTI1IDEwLTM3ek04MTggNzM0YzI4LTQgNTItMTEgNTItMTYgMC0xNy03MS0zOS0xMDQtMzItMzIgNi02NiAzMC02NiA0NiAwIDEwIDQ1IDEwIDExOCAyem0yNjctMTAxbDE4LTI4LTIxIDE5Yy0xMiAxMS0yMiAyMy0yMiAyOCAwIDE0IDcgOSAyNS0xOXptLTg1LTMyNGMwLTktOC0yNC0xOS0zMy0xNi0xNS0xOS0xNS0yNC0yLTggMjEgMjUgNzkgMzUgNjMgNC03IDgtMTkgOC0yOHptLTExMy0yNWMtOS05LTEwNi0xMC0xMDAtMSAyIDQgMjcgNyA1NSA3czQ5LTMgNDUtNnptLTEyLTE2NGMtMTItMTktMTA5LTcwLTEzNS03MC0xNyAwLTcgOCAzNCAyNSAzMyAxMyA2OSAzMyA4MCA0NCAyMCAyMSAzNCAyMSAyMSAxek01MzAgNTRjODItMjAgODYtMjQgMTktMjAtNTkgNC04MSA4LTg5IDE3LTMgMy0xNCAxMS0yNSAxOC0yMyAxNC0zMiAxNSA5NS0xNXpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiMxZDY1OGJcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE4MzQgMjY1M2M0LTM4IDktMTAxIDExLTE0MiAzLTQ0IDEwLTc4IDE4LTgzczctOC01LThjLTkgMC0yOSAxMS00NCAyNXMtMzMgMjUtNDAgMjVjLTI2IDAtMTQtMTUgMzEtNDAgMjQtMTMgNDctMzAgNTAtMzggMy03IDktMTEgMTQtOCA1IDQgNDItMTAgODItMjkgNDEtMTkgNjctMzUgNTktMzVzLTQxIDEzLTczIDMwYy01MyAyNy04NyAzMC04NyA5IDAtNSAxNS0xMyAzMy0xOGwzMi05LTM5LTFjLTMyLTEtMzctMy0yNy0xMyA2LTcgMTYtMTQgMjEtMTQgMzEtNCAzMi03IDUtMTMtMjMtNi0zNi0zLTU1IDE1LTQyIDM3LTk1IDU5LTcwIDI5IDE2LTE5IDkwLTYwIDEyNS02OSAyNi03IDI2LTggMTAtMjYtOS0xMC0xNC0yNC0xMC0yOSAzLTYgMy0yMCAwLTMyLTUtMTUtMTAtMTctMjAtOS05IDctMTYgNi0yNS00LTEwLTEzLTctMTYgMTUtMjJsMjYtNi0yMy0xMmMtMTMtNy0yMi0xOS0yMC0yOSAyLTE0LTEtMTUtMjMtNy0xNSA2LTMzIDE3LTQyIDI2LTggOC0xOCAxMy0yMCAxMC03LTcgMTQtNDEgMjQtMzkgMTMgNCA0My04IDQzLTE3IDAtNC03LTEwLTE1LTE0LTgtMy0xNSAwLTE1IDZzLTMgOC02IDVjLTgtOC00OCAxOS01MCAzMy0xIDYtMiAxMi00IDE1LTEgMy0yIDIwLTMgMzggMCAxOS03IDM1LTE2IDM5LTE0IDYtMTQgNyAyIDcgMTIgMSAxNyAxMCAxOCAyOSAwIDE1IDIgNDMgNCA2MnMtMSA0MS03IDQ4Yy03IDgtNyAxMiAxIDEyIDYgMCAxMSAxMSAxMSAyNCAwIDIwLTQgMjQtMjcgMjEtMjAtMi0zNCA1LTUwIDI0LTEzIDE1LTIzIDIwLTIzIDEyIDAtMTAtMy0xMS0xNC0yLTEwIDgtMTYgOS0yMSAxLTMtNS0yLTEwIDMtMTAgNiAwIDEzLTcgMTYtMTYgNi0xNSA0LTE1LTExLTMtMTUgMTMtMTYgMTItMTAtMTEgNC0xNCA3LTI5IDctMzUgMC01IDUtMyAxMCA1IDggMTMgMTAgMTIgMTAtNCAwLTEzLTUtMTctMjAtMTMtMjkgOC0yNS0xIDIzLTQ0IDI4LTI1IDM2LTM4IDI2LTM5LTkgMC0xOSA5LTIyIDIxLTQgMTMtMTAgMTgtMTggMTMtNy00LTEwLTMtNiAzcy0yIDEzLTEzIDE2Yy0xMiAzLTIwIDE0LTIwIDI1IDAgMTItNSAyNC0xMiAyOC04IDUtOSAyLTQtMTEgNC0xMCAxLTI1LTgtMzQtMTMtMTUtMjAtNDYtMTctNzkgMS0xMCA2LTEwIDI0LTIgMTcgOSAxNiA2LTUtMTAtMzQtMjYtMzYtNDQtNS0zNSAxOSA2IDE4IDMtOC0xOS0zMC0yNS0yMS0zNSAxNi0xNiAzNCAxOSAyMCAyLTI1LTMwLTQ2LTMxLTk4LTM5LTEyNi0xOS0xMSA4LTggOSAxMyA0IDMxLTYgNjcgMSA2NyAxNSAwIDQtMTUgNi0zMiA1LTE4LTItNDYtMy02MS00LTE2LTEtMjYtNS0yMi0xMXMtMTEtMTAtMzctMTBjLTI0IDAtNTktMy04MC02bC0zNi02IDEtMTEzYzItOTUtMS0xMTYtMTUtMTMyLTEwLTExLTE4LTM1LTE4LTU0IDAtMjQgMy0zMCA5LTE5IDYgOCA3IDE4IDUgMjItMyA0LTEgOCA1IDggNSAwIDExLTE1IDEzLTMyIDItMjAgOC0zMiAxNi0zMSA2IDIgMTIgMiAxMiAwIDAtMSA3LTIwIDE1LTQybDE0LTQwIDIgNDAgMSA0MCAxMi00N2MxMi01MSAyNi03MiAyNy00MiAwIDE0IDMgMTIgMTEtOSA5LTI3IDQ3LTQ1IDY3LTMzIDUgMyAxMSAwIDE0LTYgMy05IDEzLTUgMzMgMTJsMjkgMjUtMjQtMjdjLTIyLTI2LTIzLTI4LTYtMzQgMTAtNCA0NC04IDc2LTggMzctMSA1Mi00IDQyLTktOC01LTQ2LTctODQtNS00MyAzLTcwIDEtNzMtNnMtOC02LTE0IDJjLTUgNy0yNyAxNy00OCAyMi0zMCA3LTQxIDYtNDctNi00LTctMTQtMTQtMjAtMTQtNyAwLTEzLTktMTMtMjBzNC0yMCA5LTIwIDQtNy0zLTE1Yy05LTExLTEwLTE1LTEtMTUgOCAwIDEwLTggNi0xOS00LTEyIDUtMzcgMjQtNjggMTYtMjYgMzItNjEgMzUtNzggNi0yOSA2LTI5LTQtNS0xNCAzMi00MSA2MS01MSA1NS00LTMtMTEtMzUtMTUtNzEtNC00Ni0xMy03My0yNi04Ni0xNi0xNi0xNy0yMi04LTI4czI4IDkgNTggNDZjNDIgNTIgNDcgNTQgOTIgNTQgNjAgMCA5NiAyNiAxMTAgODIgNiAyMiAyOCA2MSA0OCA4N3M1MCA2OCA2NyA5NWMyMyAzNyA0NiA1NiAxMDUgODggNDEgMjMgOTQgNTQgMTE3IDcwIDIzIDE1IDQ1IDI4IDUwIDI4IDExIDAgMTYzIDc3IDE4NCA5MyA4IDcgMzkgNDcgNjggOTBsNTIgNzctMiAxMTdjLTEgOTUtNCAxMjAtMTggMTMxLTE1IDEzLTE1IDEzIDIgOCAxNi01IDE3IDEwIDE3IDIyOXYyMzVoLTM0Mmw2LTY3em0xMjMtMjU5Yy0yLTItMjAgMy00MCAxMHMtMzQgMTUtMzEgMTljMyAzIDIxLTIgNDAtMTAgMTktOSAzMy0xOCAzMS0xOXptLTMwMS0xOWMtMy0yMC0yMC0yMC0yNC0xLTIgOSAzIDE2IDExIDE2IDkgMCAxNC03IDEzLTE1em02MS0xMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0zMzYtMTFjOS0zIDE3LTkgMTctMTRzLTE1LTItMzIgN2MtMzkgMTktNTEgMzAtMjMgMTkgMTEtNCAyOC0xMCAzOC0xMnptLTM2My04YzAtOC03LTE1LTE1LTE1LTI2IDAtMTggMjAgMTMgMjkgMSAxIDItNiAyLTE0em0zNzUtOTNjLTE3LTQtMTExIDM2LTEyNSA1NC03IDcgMjItMSA2NC0xOSA0MS0xOCA2OS0zMyA2MS0zNXptLTEwNSA3YzAtNSA0LTggOS00IDUgMyAxMiAxIDE2LTUgMy01IDE1LTEwIDI1LTEwczI1LTcgMzQtMTVjOC04IDE5LTE1IDI1LTE1czExLTQgMTEtOWMwLTktNDUgNi04OSAyOS05IDUtMjQgMTEtMzMgMTQtMTkgNi0yNSAyNi04IDI2IDYgMCAxMC01IDEwLTExem0tMjczLTI0YzktMjYtNi0zMC0yNy03bC0yMSAyMmgyMWMxMSAwIDIzLTcgMjctMTV6bTMzMy01MWMwLTE2LTE2LTE5LTI1LTQtMTUgMjUtMzIgOS0zMC0yOXMyLTM4LTI1LTI4Yy0xNSA2LTI3IDE2LTI3IDIzIDAgMTAgNSAxMCAyMCAyIDEzLTcgMTctNyAxMyAwLTMgNi0yIDEzIDQgMTdzOCAxMCA1IDE1Yy04IDEzIDI1IDI4IDQ2IDIzIDExLTMgMTktMTIgMTktMTl6bS00NzUtODBjLTM1LTMwLTg1LTU4LTkyLTUwLTMgMiAwIDEzIDYgMjNzMTEgMTUgMTEgMTIgMjEgNCA0OCAxN2M2MCAzMCA2NCAzMCAyNy0yem05Ni0xYzEtMTAgMi0yNSAzLTMzIDAtOCA5LTE1IDE4LTE1czIwLTQgMjUtOGM0LTUgMy04LTItNy0yMSA1LTM2IDAtMzAtMTAgMy01IDQtMTAgMS0xMC0xMCAwLTQzIDc1LTM5IDg4IDcgMTggMjMgMTUgMjQtNXptLTE4LTc4Yy0zLTktMTYtMTMtMzQtMTEtMjIgMy0yNyAwLTE5LTkgMTUtMTggMC0yNi0yNC0xMy0xOSAxMC0xOSA5LTgtNCA5LTEyIDEwLTE4IDItMjMtNi00LTEwLTE2LTgtMjggMi0xOC0yLTIyLTI3LTIzLTE2LTEtMzAtMy0zMC00cy05LTMtMjEtNGMtMTEtMS0yMSAzLTIxIDEwczQgMTEgOSA4YzEzLTggNTggNSA1OCAxNiAwIDYtNiA5LTEyIDgtNy0yLTEyIDUtMTIgMTUgMiAxNC0xIDE1LTEyIDYtOC02LTExLTE2LTctMjNzMi03LTcgMWMtMTAgOS05IDE1IDQgMjkgMTIgMTIgMTQgMjAgNyAyNy02IDYtMTEgMTQtMTEgMTggMCAxMiA3NCA0NiA4OSA0MSA4LTMgMTEgMCA3IDctNSA3IDEgMTEgMTQgMTEgMTEgMCAyMyA3IDI3IDE2IDUgMTIgMTAgNyAyNC0yMCAxMC0yMSAxNS00NCAxMi01MXptMzQyIDU1YzE3LTE4IDE3LTIwIDItMTQtOSAzLTE3IDEwLTE3IDE1IDAgNC03IDUtMTcgMi0xMS00LTE0LTMtOSA1IDEwIDE3IDIwIDE1IDQxLTh6bS0zMS0yN2M5LTIzIDQtMjQtMjItNC0yMSAxNi0yMiAxNy0zIDE4IDExIDEgMjItNSAyNS0xNHptLTE0NC0yM2MwLTYgOC0xMCAxOC0xMSA5IDAgMTItMyA1LTUtMTYtNy03NSAyNS02OCAzNiA3IDEyIDQ1LTYgNDUtMjB6bS01NTMtMzJjLTItMTMtNC01LTQgMTctMSAyMiAxIDMyIDQgMjMgMi0xMCAyLTI4IDAtNDB6bTM5My04Yy04LTUtMTEtMTAtNS0xMCA1IDAtNy05LTI4LTIwLTQxLTIyLTU3LTI1LTU3LTkgMCA1IDUgNyAxMCA0IDYtMyAyNSA1IDQzIDE5IDE3IDE0IDM3IDI2IDQyIDI2IDYgMCAzLTUtNS0xMHptLTM0MC00MWMwLTEwLTQtMTktMTAtMTktNSAwLTkgMTEtOCAyNCAzIDI4IDE4IDI0IDE4LTV6bTI2LTY5Yy0xLTM1LTE2LTQxLTE2LTcgMCAyMCA3IDM3IDE1IDM3IDIgMCAyLTEzIDEtMzB6bS03NC0xMGMzLTE3IDEtMzMtNC0zNi00LTMtOCAxLTggOHMtMyAyMy02IDM2Yy00IDEyLTIgMjIgNCAyMiA1IDAgMTItMTQgMTQtMzB6bTIwOC0yMDljLTEwLTIwLTMwLTM3LTMwLTI3IDAgNiAzMyA0NiAzOCA0NiAxIDAtMi05LTgtMTl6bS05OC0xMzZjLTQtMTQtNTMtOS02OSA4LTEyIDExLTcgMTMgMjkgOCAyNC0zIDQyLTEwIDQwLTE2ek0xNDYgMTQwOGM4LTEyIDExOC04NiAxMjYtODQgNCAwIDE1LTkgMjMtMjIgOS0xMiAyMC0yMCAyNS0xNyA0IDMgMTMtMiAyMC0xMHMxNi0xMiAyMS05IDkgMCA5LTYgNS04IDEwLTVjNiAzIDEzLTEgMTYtMTAgOS0yMy0yNC05Mi03NC0xNDktMjMtMjgtNDYtNjItNDktNzYtMTAtNDItMzMtODAtNjktMTE1LTMyLTMxLTM0LTM4LTM0LTk3IDAtMzQgNC03OSA5LTk4IDE1LTU0IDIzLTEzMiAxMy0xMjctNCAzLTgtMy05LTEzLTEtMTMgMy0xNyAxMy0xMyA4IDMgMTQgMTggMTQgMzRzMiAyOSA1IDI5YzEwIDAgNjQtNjUgNjUtNzcgMC03IDMtMTMgOC0xMyA0IDAgMzMtMjUgNjYtNTUgMzItMzAgNjMtNTYgNzAtNTYgNi0xIDE2LTIgMjMtMyA3IDAgMTktMTAgMjctMjEgMTMtMTcgMTctMTggNDAtNiAxNCA4IDI0IDE3IDIyIDIwczQ4IDcgMTEyIDljMjMyIDYgMjY4IDggMjgwIDE2IDcgNCAxMiAxIDEyLTggMC0yMiAxNi0yMCA1NyA1bDM1IDIyLTM3LTQ5Yy0yMC0yNi00MS01OS00Ni03MS03LTE5LTE2LTIzLTU2LTI0LTI3IDAtNTctMi02Ny00LTQzLTgtMjIzLTgtMjM1IDAtOSA1LTEyIDQtNy0zIDMtNiAxLTE0LTUtMTgtNy00LTktMy01IDQgMTMgMjItMTUgMjMtNDkgMi0xOS0xMi0zNS0yNS0zNS0yOXMtMTMtMTQtMjgtMjNjLTI1LTE1LTMyLTE1LTU1LTMtMTUgOC0yOSAxMy0zMSAxMi0zLTEtOCAyLTEzIDdzLTIgNiA3IDJjOS01IDgtMi0yIDctMTAgOC0xNCAxNy0xMCAyMXMxIDYtNyA0Yy0xNi0zLTUxIDUwLTU0IDgxLTEgMTItMjIgMzctNDkgNTktNDIgMzItNDggNDEtNDMgNjYgNCAyMSAyIDI3LTkgMjMtMTctNy0zOSAxNi0yOCAyOCA0IDUgMSA1LTYgMC05LTUtMTItMjAtOS00NCAzNS0yNjggMTE4LTM5NyAzMDItNDY3IDM4LTE1IDc2LTE5IDE2MC0xOSAxMDQgMCAxMTQgMiAxNzUgMzIgODEgNDAgMTU0IDEwMyAxNzcgMTUxIDkgMjAgMjMgNDMgMzEgNTEgMTkgMjAgMzMgNjEgMjYgNzMtNCA2LTMgOCAzIDUgMTItNyA1OCA3NCA2NyAxMTkgNCAxNyAyOSA1NCA1NiA4MyA1MyA1NiAxMTUgMTY5IDEyNiAyMjggMTEgNTYtMTggMTI5LTgwIDIwNC0zMCAzNi01OCA3OC02MSA5Mi04IDMyLTE4IDM0LTQ0IDgtMzItMzItNjMtMzEtNzQgNC0xNSA0OC0zNCA2Mi04OSA2OC0zNSA1LTY1IDE2LTkzIDM2LTk4IDczLTE0NSAxMDMtMTY3IDEwNi0xMyAyLTQzIDktNjggMTUtNDkgMTItOTcgNy0xNDctMTYtMjktMTQtMzQtMTQtODAgOS01MiAyNy0xMjMgODYtMTIzIDEwMyAwIDUtMjQgMTQtNTQgMjAtMzAgNS01MiA2LTUwIDJ6bTQ5Mi0zMzJjNjEtNSAxMTItMTQgMTEyLTE5IDAtMTEtMTUwLTItMTk5IDEzLTE4IDUtMzggOC00MyA3LTYtMS0xMyA0LTE2IDEyLTMgMTEgMCAxMiAxNCA2IDExLTUgNzAtMTMgMTMyLTE5em0tMzIzLTgxYy0yNi04NS0xMS0xNTIgMzMtMTQ4IDE2IDIgMjUtNCAzMS0yMSA3LTE2IDI1LTI4IDYwLTQwIDI3LTkgNTctMTYgNjYtMTYgMjIgMCAxNC0yMi0xMy0zNi0yOS0xNC00Mi0yOS0xOS0yMSAyMCA3IDIzLTEzIDYtMzAtOS05LTUtMTQgMTQtMTggMTUtNCAyOS0xNiAzMi0yNiA0LTExIDE5LTI3IDMzLTM2IDE1LTkgNTEtMzIgNzktNTEgNDgtMzIgNTYtMzQgOTUtMjYgNTggMTIgNjQgNDAgMTEgNDktNDkgOC02OCAxOS01OCAzNSA2IDkgMzAgMTEgOTUgNiA4NS02IDg5LTYgMTIwIDIxIDMxIDI1IDMyIDI2IDI2IDUtMTItMzcgMTktMTYgNTkgMzkgMjggMzkgMzggNjYgNDcgMTI2IDEwIDYwIDE2IDc3IDMxIDgxIDEzIDMgMTggMTEgMTQgMjgtMiAxMyAxIDI1IDcgMjcgMTggNiAzNi00IDM2LTIwIDAtOS02LTEzLTE1LTktMTIgNC0xNS00LTE1LTQ1IDAtNjUgMTItODUgNTUtOTMgMzktOCA0OC0yMyAxMy0yMy00MS0xLTQ4LTMtNDgtMTQgMC02IDExLTIwIDI2LTMxIDE0LTExIDIyLTIzIDE5LTI2LTMtNC0xMC0xLTE0IDYtNyAxMi0zMyAxNy03NCAxMy0xMCAwLTE1LTUtMTItMTEgMy01LTItMTAtMTItMTEtMTAgMC0xMy0zLTYtNiA3LTIgMTMtMTIgMTMtMjEgMC0xMy0yLTE0LTktMy02IDktMTEgMTAtMTUgMy00LTYtMTMtOS0yMC02cy0xOC0yLTI1LTEwYy05LTExLTctMTkgMTQtNDEgMjktMzMgMjktMzIgMTAtMzItOCAwLTEyIDQtMTAgOCA2IDgtMTkgMTktNDQgMTktOSAwLTI2LTYtMzctMTQtMTUtMTItMTctMTctNi0yNyAxNi0xNyAxNi0zNC0xLTIwLTEzIDEwLTc5IDctOTgtNC00LTMtNi0xMi0yLTIwIDMtOCAwLTE1LTctMTUtNiAwLTggNC01IDEwcy05IDgtMzIgNmMtNjgtNi0xMTMtMTgtMTEzLTMwIDAtOC0yLTgtOCAwLTEwIDE3LTEwOCAxMy0xMDQtNCAxLTgtMi0xMS04LTdzLTkgMTMtNiAyMWMzIDktMiAxNC0xNyAxNC02OSAyLTg3IDYtODIgMTggNCAxMC00IDEzLTMwIDEyLTMtMS0xMiA2LTIxIDE0LTggOC0yMSAxMy0yOSA5LTExLTQtMTMtMS05IDExIDQgMTAgMSAxNi03IDE2LTcgMC05IDMtNiA2IDQgNC0zIDE1LTE0IDI1LTEyIDEwLTE4IDIzLTE0IDI4IDMgNiAyIDExLTQgMTFzLTggNi01IDE0LTQgMTktMTYgMjZjLTIwIDEwLTIwIDEzLTUgMjQgMTEgOCAxNCAxOCA4IDMzLTQgMTItMTEgMjItMTUgMjItNSAxLTE0IDEtMjAgMi03IDAtNCA0IDYgOCAyMSA4IDMzIDUxIDE1IDUxLTggMC04IDQgMCAxMyA2IDggMTMgNDIgMTcgNzcgMyAzOSAxMyA3NSAyNyA5NSAxMiAxOSAyMyAzMyAyNCAzMSAxLTEtNC0yNC0xMi01MXptMjQ2LTQxYzEwLTEzIDEwLTE3LTItMjUtMjItMTQtMzItMTEtMjYgMTEgMyAxMCAwIDIxLTcgMjQtNiAyLTQgNSA1IDUgOSAxIDIyLTYgMzAtMTV6bTExOS00YzEyLTggMTItMTAgMS0xMC04IDAtMTktNy0yNi0xN3MtMTktMTQtMjktMTBjLTE1IDYtMTUgOCAxIDI3IDE5IDIyIDMxIDI0IDUzIDEwem01MTUtOThjNC0yMCAzLTMyLTQtMzItMTUgMC0zMSAzNC0zMSA2NSAwIDIyIDIgMjQgMTQgMTMgNy04IDE3LTI5IDIxLTQ2em0yNSAxMWMwLTEyIDYtMjggMTMtMzUgMTItMTQgMjQtNDggMTItMzYtNCA0LTE4IDItMzItMy0yMi04LTI0LTctMTcgOCA1IDEwIDggNDAgOCA2Ni0xIDMwIDIgNDMgNyAzNSA1LTcgOS0yMyA5LTM1ek04MTggNzM0YzI4LTQgNTItMTEgNTItMTYgMC0xNy03MS0zOS0xMDQtMzItMzIgNi02NiAzMC02NiA0NiAwIDEwIDQ1IDEwIDExOCAyem0yNzUtMTI0Yy02LTYtMzMgMzAtMzMgNDQgMCA2IDkgMCAyMC0xNCAxMC0xNCAxNi0yNyAxMy0zMHptLTkzLTMwMWMwLTktOC0yNC0xOS0zMy0xNi0xNS0xOS0xNS0yNC0yLTggMjEgMjUgNzkgMzUgNjMgNC03IDgtMTkgOC0yOHptLTExMy0yNWMtOS05LTEwNi0xMC0xMDAtMSAyIDQgMjcgNyA1NSA3czQ5LTMgNDUtNnptLTEyLTE2NGMtMTItMTktMTA5LTcwLTEzNS03MC0xNyAwLTcgOCAzNCAyNSAzMyAxMyA2OSAzMyA4MCA0NCAyMCAyMSAzNCAyMSAyMSAxek01MzAgNTRjODItMjAgODYtMjQgMTktMjAtNTkgNC04MSA4LTg5IDE3LTMgMy0xNCAxMS0yNSAxOC0yMyAxNC0zMiAxNSA5NS0xNXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzQyNTE2MVwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjU1IDI3MDJjLTMtOC01LTI4LTUtNDUgMC0xOC0xNC03NS0zMi0xMjctMTctNTItNDEtMTMzLTU0LTE4MC0yMS04MS0yMy04NS00OC04Mi0zMyA0LTMzLTEyLTEtNTAgMTktMjMgMjQtMzggMjAtNTctNC0yMCA1LTQ2IDMzLTk2IDU1LTEwMSAxMDUtMTc2IDEzNi0yMDQgMjItMjEgMjUtMzAgMjAtNTgtMy0xOC0zLTQ1IDAtNTkgNi0yMSA5LTI0IDIxLTE0czE1IDkgMTUtNGMwLTE1IDItMTUgMzAtMSAxOCA5IDI4IDIwIDI0IDI3LTUgNy0yIDkgOCA1IDEwLTMgMTkgMyAyNyAxOSAxMSAyNCAxMSAyNC0xOCA5LTE2LTgtMzEtMjAtMzMtMjctMi02LTEwIDMtMTggMjItMTUgMzYtMTUgMzYgNjYgOTdsMjkgMjItMzMtMTJjLTI3LTEwLTM1LTktNDIgMi00IDgtNiAyMC0zIDI4IDQgOSAwIDExLTExIDctMTgtNy0yMi0yNC02LTI0IDYgMCAxMC04IDEwLTE3IDAtMTQtMy0xMy0xNyA2LTE1IDIzLTE1IDI1IDUgNDEgMTggMTUgMjAgMjIgMTIgNTEtNiAxOS0xMCAzNS0xMCAzNnM5IDAgMjEtMmMxNS0zIDE5IDAgMTUgMTAtOCAyMC0xNCA0Mi05IDMzIDMtNSAxMy04IDI0LTggMjIgMCA3OSA3MyA3OSAxMDIgMCAxMCA0IDE4IDkgMThzMTIgOCAxNSAxOGMzIDkgMy0yNiAwLTc4LTE0LTIyNi0xNC0yOTYtMS0yNzAgNiAxNCAxNSAyNyAxOSAzMHM5IDI2IDExIDUyYzIgMjUgOCA1MSAxMiA1OCA1IDggMTAgMzIgMTEgNTQgMSAyMyA1IDcyIDkgMTA5bDYgNjgtMzAgMTJjLTMxIDEyLTQyIDI3LTE4IDI3IDEzIDAgMzkgMzQgNDcgNjNzMjQgMjMgNDYtMjBjMTItMjIgMzctNjMgNTUtOTAgMTktMjggNTItODEgNzQtMTE3IDIyLTM3IDUwLTgxIDYyLTk4bDIzLTMydjI3YzAgMTUgNCAyNyAxMCAyNyA1IDAgNyAxNiA0IDM2LTMgMjktMSAzNSAxMSAzMSA4LTQgMTctMiAyMCAzIDQgNiAxMiAxMCAxOCAxMCA4IDAgNy0zLTItOS0xMS03LTExLTEwIDItMTcgMTYtOSA0MC0xMTIgMzAtMTI4LTQtNS0xLTYgNS0yIDcgNCAxMiAwIDEyLTEwczItMTUgNS0xMmM0IDMtMSA0My05IDg5cy0xMiA4Ni0xMCA4OGM4IDggMTQtNyAxOS00NSAzLTIxIDgtNTkgMTEtODQgNC0yNSAxMC00OSAxNC01NSA0LTUgMTYtNDEgMjUtODAgMTAtMzggMjEtNzQgMjUtNzggMjAtMjIgMjMgOTIgNCAxNTQtMiA5LTEgMjYgNCAzOSA3IDE4IDEyIDIgMjEtNzEgMTQtMTAyIDE5LTEyNCAyNi0xMTcgMyAzIDAgNDAtNiA4NC0yMCAxMzYtMTcgMTgzIDE0IDE4NCA0IDAgNy04IDctMTcgMC0xMCA0LTIzIDgtMzBzOCAxNSA5IDQ3YzEgMzMtMSA2MC01IDYwcy0yOS03LTU3LTE1Yy01MC0xNS04MS0xMy03MCA0IDMgNSAxIDEzLTUgMTYtNiA0LTggMTYtNSAyNiA0IDExIDEgMjYtNSAzNC05IDEwLTkgMTUtMiAxNSA2IDAgOSA3IDYgMTUtNCA4LTEgMTUgNSAxNXMxMS0xMSAxMS0yNWMwLTM0IDIwLTMyIDIxIDMgMiAyNSAyIDI1IDYgMyAzLTEzIDEzLTI2IDI0LTI4IDEwLTMgMTktMTAgMTktMTVzMTItOCAyNy02YzIzIDMgMjkgOSAzNSA0MyAzIDIyIDE0IDYwIDIyIDg0IDIxIDU4IDIxIDU4LTE5IDUzLTIxLTMtMzUgMC0zNSA3IDAgNiAxNiAxMSAzNSAxMSAzNiAwIDQ3IDEzIDE5IDI0LTEyIDUtMTQgMTMtOSAzMyA0IDE3IDIgMjktNyAzNC04IDUtOSA5LTIgOXM5IDExIDYgMjVjLTIgMTQtMTEgMjUtMTggMjUtMTkgMC0xOCAxNiAyIDI0IDI2IDEwIDcgMjMtMjcgMTgtMjItMy0zMC0xLTI1IDcgNCA2IDExIDkgMTYgNiAxMy04IDQwIDYgNDAgMjEgMCA4LTEwIDE0LTIyIDE1aC0yM2wyMyA5YzE3IDcgMjIgMTcgMjIgNDQgMCA0NCA5IDY2IDI2IDY2IDE2IDAgMzMtMzAgMzYtNjUgMi0yNSA0LTI2IDUzLTIxbDUwIDUtNDQtMTJjLTY0LTE4LTY2LTM4LTQtMzIgNDcgNSA0NyA0IDEzLTYtMTktNi00MS0xMy00Ny0xNS03LTItMTMtOC0xMy0xNCAwLTggMTUtOSA0Ni00IDU5IDggNTMtMTEtNi0yMS00MS03LTUxLTE5LTI1LTI5IDgtMyAxMi0xMiA5LTIxLTUtMTIgMC0xNCAyNy0xMHMzMCAzIDE0LTRjLTExLTUtMzAtMTAtNDItMTAtMjQtMS0zNC0yNS0zMC03MSAyLTIyIDYtMjUgNDItMjMgMzcgMiAzMy0xLTIyLTEzLTIyLTQtMjMtOS0yMy05MXYtODZsMjEgMTljNDkgNDQgMTM5IDEzOSAxMzkgMTQ2IDAgNSA1IDggMTAgOCA2IDAgNC0xMy01LTMwLTE3LTM0LTIwLTcwLTQtNzAgNSAwIDctNSA0LTExLTUtNyAxNC05IDU2LTdsNjIgMyAyNCA3MGMxMyAzOSAyOCA3MiAzMyA3MyA2IDIgOCA4IDUgMTNzMSAzMSA5IDU5bDE1IDUwLTM3IDJjLTM2IDEtMzYgMSA4IDcgMzcgNSA0NSA5IDQzIDI2LTEgMTcgMTcgMTM0IDMyIDIwM2w1IDIyLTIxNy0yYy0xNjgtMi0yMTctNi0yMTYtMTUgMi03LTItMTMtNy0xMy02IDAtMTAgNi0xMCAxNCAwIDIxLTkwNyAxOC05MTUtMnptODEtMTdjLTMtOCAyLTE5IDEyLTI0IDktNSAxNC0xMyAxMC0xNy00LTMtMy0xNCAyLTIzIDgtMTYgMTMtNDMgMjYtMTQzIDMtMjEgMy0zOCAwLTM4LTQgMC0yMyA3Mi0zMSAxMjAtMiAxNC0xMyA1MS0yMyA4My0xNiA0OC0xNyA1Ny01IDU3IDkgMCAxMy02IDktMTV6bTI4Mi0zM2MyLTctNi0xMi0xNy0xMi0yMSAwLTI3IDExLTE0IDI0IDkgOSAyNiAyIDMxLTEyem04NDItMzJjMTEtOCA3LTEwLTE3LTgtMTcgMS0yOSA2LTI3IDEwIDcgMTEgMjYgMTAgNDQtMnptNDQtNDJjLTMtNS0yNC03LTQ3LTctMjMgMS01Mi0xLTY0LTVzLTI0LTMtMjYgMmMtMyA0IDggOSAyNiAxMCAxNyAyIDMyIDQgMzMgNSA3IDcgODIgMSA3OC01em01Ni0yN2MwLTEwLTM5LTE3LTEzNS0yNS0yNy0yLTYyLTctNzctMTEtMjAtNS0yOC0zLTI4IDYgMCA3IDMgOSA2IDYgNC0zIDE0LTIgMjMgMyAxMCA1IDU3IDExIDEwNSAxNCA0OCAyIDkwIDcgOTQgMTAgOCA5IDEyIDcgMTItM3ptLTU0MC0xMWMtOC01LTI0LTktMzUtOS0xNiAxLTE2IDIgNSA5IDM1IDExIDQ4IDExIDMwIDB6bTIzLTMxYy0xMC0xMC0xMzYtNDAtMTYzLTM4LTExIDEgOTggMzIgMTcwIDQ4IDIgMS0xLTQtNy0xMHptNTctMzljLTgtNi0yNC0xMC0zNS0xMHMtMzAtMy00Mi02Yy0xNC00LTIzLTItMjMgNSAwIDYgMTUgMTEgMzMgMTIgMTcgMCA0MSA0IDUyIDggMjUgMTAgMzUgMyAxNS05em0xODAgMGMtMTktMTMtMzAtMTMtMzAgMCAwIDYgMTAgMTAgMjMgMTAgMTggMCAxOS0yIDctMTB6bS0zMzAtMzJjLTI1LTQtNDktNi01NS00LTE3IDYgNTkgMjMgODAgMTcgMTQtMyA2LTctMjUtMTN6bTExOS0xMmMtMTAtMTAtNTktMTQtNTktNSAwIDUgMTQgOSAzMiA5IDE3IDAgMjktMiAyNy00em0tMzc5LTgzYzAtNyA3LTEzIDE1LTEzczE1LTYgMTUtMTRjMC03IDctMTkgMTUtMjZzMTItMTYgOS0yMSA4LTkgMjQtOWMyOSAwIDI5IDEgMjcgNDQtMiAyNC02IDQ5LTkgNTQtMyA2LTEgMTIgNiAxNCAxNiA2IDcwLTIxIDYzLTMxLTItNSA0LTE2IDE1LTI2czE3LTIyIDE0LTI2Yy0zLTUgNS05IDE4LTEwIDEzIDAgMTctMyAxMS02LTEwLTMtOC05IDQtMjEgMTYtMTYgMTQtMTgtMjQtMjYtMzEtNi00OS01LTc0IDgtMTcgOS00OSAxNi02OSAxNi0zNSAwLTM5IDMtNTkgNTAtMTIgMjgtMjUgNTAtMzAgNTAtNCAwLTggNi04IDEzIDAgNi00IDIxLTggMzItNSAxNCAxIDExIDE5LTEwIDE0LTE2IDI1LTM2IDI2LTQyem0tMTc4IDEwYy02LTItMTAtOS03LTEzIDYtMTAtMzQtMzUtNDItMjYtNyA3IDM4IDQ2IDUyIDQ1IDYgMCA0LTMtMy02em0zOTItMTg4Yy00LTgtMS0xNSA1LTE1czExLTggMTEtMTdjMC0xNS0xLTE1LTEzIDItMTAgMTItMjIgMTYtNDAgMTNzLTI0LTEtMjAgOGMyIDcgMTQgMTUgMjYgMTdzMjUgNSAyOSA2YzQgMCA1LTYgMi0xNHptLTYyNS02MGMwLTUtNi0xLTE0IDktOCAxMS0xNSAyNC0xNSAzMCAwIDUgNyAxIDE1LTEwIDgtMTAgMTQtMjMgMTQtMjl6bTYwOC0xYy05LTktMjggNi0yMSAxOCA0IDYgMTAgNiAxNy0xIDYtNiA4LTEzIDQtMTd6bS01MjcgMGMwLTExIDYtMTQgMTgtMTAgMTUgNSAxNSA1IDEtNi05LTctMTQtMjAtMTEtMjhzMi0xMi0yLTljLTEyIDExLTI1IDY5LTE1IDY5IDUgMCA5LTcgOS0xNnptLTM1LTE1Yy00LTYtMTAtOC0xMy01cy0xMSAxLTE5LTVjLTgtOC0xMy04LTEzLTEgMCAxMSAxNiAyMCAzOCAyMSA3IDEgMTAtNCA3LTEwem04MDUtMzljMC01LTktMTQtMjAtMjAtMTYtOC0yMC04LTIwIDQgMCA4IDggMTcgMTggMTkgOSAzIDE4IDUgMjAgNiAxIDAgMi0zIDItOXptLTEwMi03N2MxLTM1LTItNTItNy00My05IDE2LTcgMTAwIDMgMTAwIDIgMCA0LTI2IDQtNTd6bS00NzItNTBjLTMtOC02LTIxLTYtMjlzLTQtMTQtMTAtMTRjLTUgMC0xMCAxNi0xMCAzNSAwIDI3IDMgMzMgMTYgMjggOC0zIDEzLTEyIDEwLTIwem00OTgtMTA0YzktNTcgMi01OS0xMS00LTYgMjUtNyA0NS0zIDQ1czEwLTE5IDE0LTQxek0xNjc2IDI3MTJjNS00IDI1LTIwIDQ1LTM1bDM3LTI2IDYgMjJjMTEgNDMgOCA0Ny00NiA0Ny0yOSAwLTQ4LTQtNDItOHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xODM0IDI2NTNjNC0zOCA5LTEwMSAxMS0xNDIgMy00NCAxMC03OCAxOC04M3M3LTgtNS04Yy05IDAtMjkgMTEtNDQgMjVzLTMzIDI1LTQwIDI1Yy0yNiAwLTE0LTE1IDMxLTQwIDI0LTEzIDQ3LTMwIDUwLTM4IDMtNyA5LTExIDE0LTggNSA0IDQyLTEwIDgyLTI5IDQxLTE5IDY3LTM1IDU5LTM1cy00MSAxMy03MyAzMGMtNTMgMjctODcgMzAtODcgOSAwLTUgMTUtMTMgMzMtMThsMzItOS0zOS0xYy0zMi0xLTM3LTMtMjctMTMgNi03IDE2LTE0IDIxLTE0IDMxLTQgMzItNyA1LTEzLTIzLTYtMzYtMy01NSAxNS00MiAzNy05NSA1OS03MCAyOSAxNi0xOSA5MC02MCAxMjUtNjkgMjYtNyAyNi04IDEwLTI2LTktMTAtMTQtMjQtMTAtMjkgMy02IDMtMjAgMC0zMi01LTE1LTEwLTE3LTIwLTktOSA3LTE2IDYtMjUtNC0xMC0xMy03LTE2IDE1LTIybDI2LTYtMjMtMTJjLTEzLTctMjItMTktMjAtMjkgMi0xNC0xLTE1LTIzLTctMTUgNi0zMyAxNy00MiAyNi04IDgtMTggMTMtMjAgMTAtNy03IDE0LTQxIDI0LTM5IDEzIDQgNDMtOCA0My0xNyAwLTQtNy0xMC0xNS0xNC04LTMtMTUgMC0xNSA2cy0zIDgtNiA1Yy04LTgtNDggMTktNTAgMzMtMSA2LTIgMTItNCAxNS0xIDMtMiAyMC0zIDM4IDAgMTktNyAzNS0xNiAzOS0xNCA2LTE0IDcgMiA3IDEyIDEgMTcgMTAgMTggMjkgMCAxNSAyIDQzIDQgNjJzLTEgNDEtNyA0OGMtNyA4LTcgMTIgMSAxMiA2IDAgMTEgMTEgMTEgMjQgMCAyMC00IDI0LTI3IDIxLTIwLTItMzQgNS01MCAyNC0xMyAxNS0yMyAyMC0yMyAxMiAwLTEwLTMtMTEtMTQtMi0xMCA4LTE2IDktMjEgMS0zLTUtMi0xMCAzLTEwIDYgMCAxMy03IDE2LTE2IDYtMTUgNC0xNS0xMS0zLTE1IDEzLTE2IDEyLTEwLTExIDQtMTQgNy0yOSA3LTM1IDAtNSA1LTMgMTAgNSA4IDEzIDEwIDEyIDEwLTQgMC0xMy01LTE3LTIwLTEzLTI5IDgtMjUtMSAyMy00NCAyOC0yNSAzNi0zOCAyNi0zOS05IDAtMTkgOS0yMiAyMS00IDEzLTEwIDE4LTE4IDEzLTctNC0xMC0zLTYgM3MtMiAxMy0xMyAxNmMtMTIgMy0yMCAxNC0yMCAyNSAwIDEyLTUgMjQtMTIgMjgtOCA1LTkgMi00LTExIDQtMTAgMS0yNS04LTM0LTEzLTE1LTIwLTQ2LTE3LTc5IDEtMTAgNi0xMCAyNC0yIDE3IDkgMTYgNi01LTEwLTM0LTI2LTM2LTQ0LTUtMzUgMTkgNiAxOCAzLTgtMTktMzAtMjUtMjEtMzUgMTYtMTYgMzQgMTkgMjAgMi0yNS0zMC00Ni0zMS05OC0zOS0xMjYtMTktMTEgOC04IDkgMTMgNCAzMS02IDY3IDEgNjcgMTUgMCA0LTE1IDYtMzIgNS0xOC0yLTQ2LTMtNjEtNC0xNi0xLTI2LTUtMjItMTFzLTExLTEwLTM3LTEwYy0yNCAwLTU5LTMtODAtNmwtMzYtNiAxLTExM2MyLTk1LTEtMTE2LTE1LTEzMi0xMC0xMS0xOC0zNS0xOC01NCAwLTI0IDMtMzAgOS0xOSA2IDggNyAxOCA1IDIyLTMgNC0xIDggNSA4IDUgMCAxMS0xNSAxMy0zMiAyLTIwIDgtMzIgMTYtMzEgNiAyIDEyIDIgMTIgMCAwLTEgNy0yMCAxNS00MmwxNC00MCAyIDQwIDEgNDAgMTItNDdjMTItNTEgMjYtNzIgMjctNDIgMCAxNCAzIDEyIDExLTkgOS0yNyA0Ny00NSA2Ny0zMyA1IDMgMTEgMCAxNC02IDMtOSAxMy01IDMzIDEybDI5IDI1LTIzLTI2Yy0yNS0yOS0xOC00MiAyMS0zOCAxMiAxIDMwLTEgNDAtNiA5LTQgMjktNCA0NS0xIDIzIDUgMjQgNSA5LTUtMTEtNi00Ny05LTg4LTctNDMgMy03MCAxLTczLTZzLTgtNi0xNCAyYy01IDctMjcgMTctNDggMjItMzAgNy00MSA2LTQ3LTYtNC03LTE0LTE0LTIwLTE0LTcgMC0xMy05LTEzLTIwczQtMjAgOS0yMCA0LTctMy0xNWMtOS0xMS0xMC0xNS0xLTE1IDggMCAxMC04IDYtMTktNC0xMiA1LTM3IDI0LTY4IDE2LTI2IDMyLTYxIDM1LTc4IDYtMjkgNi0yOS00LTUtMTQgMzItNDEgNjEtNTEgNTUtNC0zLTExLTM1LTE1LTcxLTQtNDYtMTMtNzMtMjYtODYtMTYtMTYtMTctMjItOC0yOHMyOCA5IDU4IDQ2YzQyIDUyIDQ3IDU0IDkyIDU0IDYwIDAgOTYgMjYgMTExIDgyIDYgMjMgMjUgNjAgNDMgODIgMTggMjMgNDkgNjYgNjkgOTYgMjkgNDUgNDkgNjIgMTA5IDk0IDQwIDIyIDkxIDUxIDExMyA2NiAyMiAxNCA2NSAzNyA5NSA1MCAxMTkgNTIgMTUyIDc4IDIwOCAxNjFsNTMgODAtMiAxMTdjLTEgOTQtNCAxMTktMTggMTMwLTE1IDEzLTE1IDEzIDIgOCAxNi01IDE3IDEwIDE3IDIyOXYyMzVoLTM0Mmw2LTY3em0xMjMtMjU5Yy0yLTItMjAgMy00MCAxMHMtMzQgMTUtMzEgMTljMyAzIDIxLTIgNDAtMTAgMTktOSAzMy0xOCAzMS0xOXptLTMwMS0xOWMtMy0yMC0yMC0yMC0yNC0xLTIgOSAzIDE2IDExIDE2IDkgMCAxNC03IDEzLTE1em02MS0xMWMtOS05LTI4IDYtMjEgMTggNCA2IDEwIDYgMTctMSA2LTYgOC0xMyA0LTE3em0zMzYtMTFjOS0zIDE3LTkgMTctMTRzLTE1LTItMzIgN2MtMzkgMTktNTEgMzAtMjMgMTkgMTEtNCAyOC0xMCAzOC0xMnptLTM2My04YzAtOC03LTE1LTE1LTE1LTI2IDAtMTggMjAgMTMgMjkgMSAxIDItNiAyLTE0em0zNzUtOTNjLTE3LTQtMTExIDM2LTEyNSA1NC03IDcgMjItMSA2NC0xOSA0MS0xOCA2OS0zMyA2MS0zNXptLTEwNSA3YzAtNSA0LTggOS00IDUgMyAxMiAxIDE2LTUgMy01IDE1LTEwIDI1LTEwczI1LTcgMzQtMTVjOC04IDE5LTE1IDI1LTE1czExLTQgMTEtOWMwLTktNDUgNi04OSAyOS05IDUtMjQgMTEtMzMgMTQtMTkgNi0yNSAyNi04IDI2IDYgMCAxMC01IDEwLTExem0tMjczLTI0YzktMjYtNi0zMC0yNy03bC0yMSAyMmgyMWMxMSAwIDIzLTcgMjctMTV6bTMzMy01MWMwLTE2LTE2LTE5LTI1LTQtMTUgMjUtMzIgOS0zMC0yOXMyLTM4LTI1LTI4Yy0xNSA2LTI3IDE2LTI3IDIzIDAgMTAgNSAxMCAyMCAyIDEzLTcgMTctNyAxMyAwLTMgNi0yIDEzIDQgMTdzOCAxMCA1IDE1Yy04IDEzIDI1IDI4IDQ2IDIzIDExLTMgMTktMTIgMTktMTl6bS00NzUtODBjLTM1LTMwLTg1LTU4LTkyLTUwLTMgMiAwIDEzIDYgMjNzMTEgMTUgMTEgMTIgMjEgNCA0OCAxN2M2MCAzMCA2NCAzMCAyNy0yem05Ni0xYzEtMTAgMi0yNSAzLTMzIDAtOCA5LTE1IDE4LTE1czIwLTQgMjUtOGM0LTUgMy04LTItNy0yMSA1LTM2IDAtMzAtMTAgMy01IDQtMTAgMS0xMC0xMCAwLTQzIDc1LTM5IDg4IDcgMTggMjMgMTUgMjQtNXptLTE4LTc4Yy0zLTktMTYtMTMtMzQtMTEtMjIgMy0yNyAwLTE5LTkgMTUtMTggMC0yNi0yNC0xMy0xOSAxMC0xOSA5LTgtNCA5LTEyIDEwLTE4IDItMjMtNi00LTEwLTE2LTgtMjggMi0xOC0yLTIyLTI3LTIzLTE2LTEtMzAtMy0zMC00cy05LTMtMjEtNGMtMTEtMS0yMSAzLTIxIDEwczQgMTEgOSA4YzEzLTggNTggNSA1OCAxNiAwIDYtNiA5LTEyIDgtNy0yLTEyIDUtMTIgMTUgMiAxNC0xIDE1LTEyIDYtOC02LTExLTE2LTctMjNzMi03LTcgMWMtMTAgOS05IDE1IDQgMjkgMTIgMTIgMTQgMjAgNyAyNy02IDYtMTEgMTQtMTEgMTggMCAxMiA3NCA0NiA4OSA0MSA4LTMgMTEgMCA3IDctNSA3IDEgMTEgMTQgMTEgMTEgMCAyMyA3IDI3IDE2IDUgMTIgMTAgNyAyNC0yMCAxMC0yMSAxNS00NCAxMi01MXptMzQyIDU1YzE3LTE4IDE3LTIwIDItMTQtOSAzLTE3IDEwLTE3IDE1IDAgNC03IDUtMTcgMi0xMS00LTE0LTMtOSA1IDEwIDE3IDIwIDE1IDQxLTh6bS0zMS0yN2M5LTIzIDQtMjQtMjItNC0yMSAxNi0yMiAxNy0zIDE4IDExIDEgMjItNSAyNS0xNHptLTE0NC0yM2MwLTYgOC0xMCAxOC0xMSA5IDAgMTItMyA1LTUtMTYtNy03NSAyNS02OCAzNiA3IDEyIDQ1LTYgNDUtMjB6bS01NTMtMzJjLTItMTMtNC01LTQgMTctMSAyMiAxIDMyIDQgMjMgMi0xMCAyLTI4IDAtNDB6bTM5My04Yy04LTUtMTEtMTAtNS0xMCA1IDAtNy05LTI4LTIwLTQxLTIyLTU3LTI1LTU3LTkgMCA1IDUgNyAxMCA0IDYtMyAyNSA1IDQzIDE5IDE3IDE0IDM3IDI2IDQyIDI2IDYgMCAzLTUtNS0xMHptLTM0MC00MWMwLTEwLTQtMTktMTAtMTktNSAwLTkgMTEtOCAyNCAzIDI4IDE4IDI0IDE4LTV6bTI2LTY5Yy0xLTM1LTE2LTQxLTE2LTcgMCAyMCA3IDM3IDE1IDM3IDIgMCAyLTEzIDEtMzB6bS03NC0xMGMzLTE3IDEtMzMtNC0zNi00LTMtOCAxLTggOHMtMyAyMy02IDM2Yy00IDEyLTIgMjIgNCAyMiA1IDAgMTItMTQgMTQtMzB6bTIwOC0yMDljLTEwLTIwLTMwLTM3LTMwLTI3IDAgNiAzMyA0NiAzOCA0NiAxIDAtMi05LTgtMTl6bS05OC0xMzZjLTQtMTQtNTMtOS02OSA4LTEyIDExLTcgMTMgMjkgOCAyNC0zIDQyLTEwIDQwLTE2elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE2NjAgMjY4M2MxLTEzIDEwMC04NSAxMDAtNzMgMCAxOC02NiA4MC04NCA4MC05IDAtMTYtMy0xNi03ek0xNjcyIDI2MThjMTgtMTggMzUtMzIgMzctMzAgMiAxIDEzLTUgMjMtMTUgMTYtMTQgMTgtMTQgMTgtMSAwIDIyLTY2IDc4LTkxIDc4LTE4IDAtMTctNCAxMy0zMnpNMTYzMCAyNjE0YzAtMTAgNjgtNzQgNzgtNzQgNiAwIDEyLTcgMTYtMTUgMy04IDEwLTE1IDE1LTE1IDYgMCA3IDggNCAxOC04IDE5LTYwIDcyLTY2IDY1LTItMi0xMCAzLTE3IDEyLTEzIDE1LTMwIDIwLTMwIDl6TTE4MDQgMjYwMmMtMTQtMTAtMjYtNDAtMzEtNzktMy0yNSAxLTM0IDE3LTQzIDMyLTE3IDU0LTYgNDAgMjAtNiAxMi05IDI2LTcgMzNzLTIgMjAtMTEgMzBjLTggOS0xMSAxNy01IDE3IDUgMCAxMCA3IDEwIDE1cy0xIDE1LTEgMTVjLTEgMC02LTQtMTItOHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNjIwIDI1NzJjMC04IDEwLTE4IDc3LTczIDE4LTE1IDI5LTMwIDI2LTMzLTQtMy0xLTYgNS02IDI5IDAgNyA0NS0zNCA3MS0yMCAxMi0zMSAyNi0yNyAzMiAzIDcgMyA5LTIgNS00LTQtMTYtMy0yNiAzLTExIDUtMTkgNi0xOSAxek0xNjMwIDI1MjVjMC0xMyAyMC0zNSAzMi0zNSA0IDAgOCA1IDggMTIgMCA2LTMgOC03IDUtMy00LTEyIDEtMTkgMTEtNyA5LTE0IDEyLTE0IDd6TTE2NzAgMjQyNGMwLTkgNS0xNCAxMi0xMiAxOCA2IDIxIDI4IDQgMjgtOSAwLTE2LTctMTYtMTZ6TTE3NTUgMjQyMGM5LTE1IDYyLTQwIDY5LTMzIDcgOC00MyA0My02MiA0My03IDAtMTAtNS03LTEwek0xNzUwIDIzODJjMC01IDE4LTE4IDQwLTMxIDQ4LTI3IDU0LTExIDYgMTgtMzYgMjMtNDYgMjUtNDYgMTN6TTEzODAgMjE3MGwtMjUtNyAyNi03YzM2LTEwIDkyLTQgOTcgMTIgNCAxNC01NSAxNS05OCAyek0xNzcyIDIxNDFjNy0xMiAxOC0xNyAyNy0xMyAxNCA2IDE0IDctMSAxMC0xMCAyLTE4IDgtMTggMTNzLTUgOS0xMCA5Yy02IDAtNi03IDItMTl6TTg4MyAyMDA0Yy0xNi0xNyA5LTI3IDI3LTExIDcgNyAxMCA3IDcgMi0zLTYtMi0xNyA0LTI1IDYtMTEgOS05IDkgMTEgMCAzMC0yOCA0NC00NyAyM3pNNDU2IDE5NTFjLTMtNSAxLTE0IDktMjEgMTItMTAgMTUtMTAgMTUgMyAwIDE5LTE2IDMxLTI0IDE4ek0xMTE5IDE5MjNsLTEtMjgtOCAyNWMtNSAxNS04IDE4LTkgOC0xLTI0IDktNDggMjItNDggNiAwIDggMyA1IDYtNCAzLTIgMTkgMiAzNSA1IDE3IDUgMjktMSAyOS01IDAtOS0xMi0xMC0yN3pNOTAwIDE5MDFjMC0xMiA1LTE5IDEwLTE2IDYgMyAxMCAyIDEwLTMgMC02IDctMTMgMTYtMTYgMTQtNSAxNS00IDUgOC04IDEwLTkgMTYtMSAyMSA1IDMgMTAgMTIgMTAgMTggMCA4LTQgNy05LTItOC0xMi0xMi0xMi0yNS0yLTE0IDEyLTE2IDEwLTE2LTh6TTk4NSAxODgzYzE2LTc3IDI4LTEyMyAzMi0xMjAgNiA3LTE4IDEyNy0yNyAxMzItNSAzLTctMy01LTEyek0xNDYgMTQwOGM4LTEyIDExOC04NiAxMjYtODQgNCAwIDE1LTkgMjMtMjIgOS0xMiAyMC0yMCAyNS0xNyA0IDMgMTMtMiAyMC0xMHMxNi0xMiAyMS05IDkgMCA5LTYgNS04IDEwLTVjNiAzIDEzLTEgMTYtMTAgOS0yMy0yNC05Mi03NC0xNDktMjMtMjgtNDYtNjItNDktNzYtMTAtNDItMzMtODAtNjktMTE1LTMyLTMxLTM0LTM4LTM0LTk3IDAtMzQgNC03OSA5LTk4IDE1LTU0IDIzLTEzMiAxMy0xMjctNCAzLTgtMy05LTEzLTEtMTMgMy0xNyAxMy0xMyA4IDMgMTQgMTggMTQgMzRzMiAyOSA1IDI5YzEwIDAgNjQtNjUgNjUtNzcgMC03IDMtMTMgOC0xMyA0IDAgMzMtMjUgNjYtNTUgMzItMzAgNjMtNTYgNzAtNTYgNi0xIDE2LTIgMjMtMyA3IDAgMTktMTAgMjctMjEgMTMtMTcgMTctMTggNDAtNiAxNCA4IDI0IDE3IDIyIDIwczQ4IDcgMTEyIDljMjMyIDYgMjY4IDggMjgwIDE2IDcgNCAxMiAxIDEyLTggMC0yMiAxNi0yMCA1NyA1bDM1IDIyLTM3LTQ5Yy0yMC0yNi00MS01OS00Ni03MS03LTE5LTE2LTIzLTU2LTI0LTI3IDAtNTctMi02Ny00LTQzLTgtMjIzLTgtMjM1IDAtOSA1LTEyIDQtNy0zIDMtNiAxLTE0LTUtMTgtNy00LTktMy01IDQgMTMgMjItMTUgMjMtNDkgMi0xOS0xMi0zNS0yNS0zNS0yOXMtMTMtMTQtMjgtMjNjLTI1LTE1LTMyLTE1LTU1LTMtMTUgOC0yOSAxMy0zMSAxMi0zLTEtOCAyLTEzIDdzLTIgNiA3IDJjOS01IDgtMi0yIDctMTAgOC0xNCAxNy0xMCAyMXMxIDYtNyA0Yy0xNi0zLTUxIDUwLTU0IDgxLTEgMTItMjIgMzctNDkgNTktNDIgMzItNDggNDEtNDMgNjYgNCAyMSAyIDI3LTkgMjMtMTctNy0zOSAxNi0yOCAyOCA0IDUgMSA1LTUgMS0xNS05LTE3LTQ1LTQtOTUgNS0yMCAxNC02MCAyMC05MCAxNS03MCA2MS0xNjUgMTA2LTIxOCAyNC0yOSA2NC01NyAxMjItODVsODYtNDNoMTE2YzExMSAwIDExOSAxIDE4MSAzMiA4MSA0MCAxNTQgMTAzIDE3NyAxNTEgOSAyMCAyMyA0MyAzMSA1MSAxOSAyMCAzMyA2MSAyNiA3My00IDYtMyA4IDMgNSAxMi03IDU4IDc0IDY3IDExOSA0IDE3IDI5IDU0IDU2IDgzIDUzIDU2IDExNSAxNjkgMTI2IDIyOCAxMSA1Ni0xOCAxMjktODAgMjA0LTMwIDM2LTU4IDc4LTYxIDkyLTggMzItMTggMzQtNDQgOC0zMi0zMi02My0zMS03NCA0LTE1IDQ4LTM0IDYyLTg5IDY4LTM1IDUtNjUgMTYtOTMgMzYtOTggNzMtMTQ1IDEwMy0xNjcgMTA2LTEzIDItNDMgOS02OCAxNS00OSAxMi05NyA3LTE0Ny0xNi0yOS0xNC0zNC0xNC04MCA5LTUyIDI3LTEyMyA4Ni0xMjMgMTAzIDAgNS0yNCAxNC01NCAyMC0zMCA1LTUyIDYtNTAgMnptNDkyLTMzMmM2MS01IDExMi0xNCAxMTItMTkgMC0xMS0xNTAtMi0xOTkgMTMtMTggNS0zOCA4LTQzIDctNi0xLTEzIDQtMTYgMTItMyAxMSAwIDEyIDE0IDYgMTEtNSA3MC0xMyAxMzItMTl6bS0zMjMtODFjLTI2LTg1LTExLTE1MiAzMy0xNDggMTYgMiAyNS00IDMxLTIxIDctMTYgMjUtMjggNjAtNDAgMjctOSA1Ny0xNiA2Ni0xNiAyMiAwIDE0LTIyLTEzLTM2LTI5LTE0LTQyLTI5LTE5LTIxIDIwIDcgMjMtMTMgNi0zMC05LTktNS0xNCAxNC0xOCAxNS00IDI5LTE2IDMyLTI2IDQtMTEgMTktMjcgMzMtMzYgMTUtOSA1MS0zMiA3OS01MSA0OC0zMiA1Ni0zNCA5NS0yNiA1OCAxMiA2NCA0MCAxMSA0OS00OSA4LTY4IDE5LTU4IDM1IDYgOSAzMCAxMSA5NSA2IDg1LTYgODktNiAxMjAgMjEgMzEgMjUgMzIgMjYgMjYgNS0xMi0zNyAxOS0xNiA1OSAzOSAyOCAzOSAzOCA2NiA0NyAxMjYgMTAgNjAgMTYgNzcgMzEgODEgMTMgMyAxOCAxMSAxNCAyOC0yIDEzIDEgMjUgNyAyNyAxOCA2IDM2LTQgMzYtMjAgMC05LTYtMTMtMTUtOS0xMiA0LTE1LTQtMTUtNDUgMC02NSAxMi04NSA1NS05MyAzOS04IDQ4LTIzIDEzLTIzLTQxLTEtNDgtMy00OC0xNCAwLTYgMTEtMjAgMjYtMzEgMTQtMTEgMjItMjMgMTktMjYtMy00LTEwLTEtMTQgNi03IDEyLTMzIDE3LTc0IDEzLTEwIDAtMTUtNS0xMi0xMSAzLTUtMi0xMC0xMi0xMS0xMCAwLTEzLTMtNi02IDctMiAxMy0xMiAxMy0yMSAwLTEzLTItMTQtOS0zLTYgOS0xMSAxMC0xNSAzLTQtNi0xMy05LTIwLTZzLTE4LTItMjUtMTBjLTktMTEtNy0xOSAxNC00MSAyOS0zMyAyOS0zMiAxMC0zMi04IDAtMTIgNC0xMCA4IDYgOC0xOSAxOS00NCAxOS05IDAtMjYtNi0zNy0xNC0xNS0xMi0xNy0xNy02LTI3IDE2LTE3IDE2LTM0LTEtMjAtMTMgMTAtNzkgNy05OC00LTQtMy02LTEyLTItMjAgMy04IDAtMTUtNy0xNS02IDAtOCA0LTUgMTBzLTkgOC0zMiA2Yy02OC02LTExMy0xOC0xMTMtMzAgMC04LTItOC04IDAtMTAgMTctMTA4IDEzLTEwNC00IDEtOC0yLTExLTgtN3MtOSAxMy02IDIxYzMgOS0yIDE0LTE3IDE0LTY5IDItODcgNi04MiAxOCA0IDEwLTQgMTMtMzAgMTItMy0xLTEyIDYtMjEgMTQtOCA4LTIxIDEzLTI5IDktMTEtNC0xMy0xLTkgMTEgNCAxMCAxIDE2LTcgMTYtNyAwLTkgMy02IDYgNCA0LTMgMTUtMTQgMjUtMTIgMTAtMTggMjMtMTQgMjggMyA2IDIgMTEtNCAxMXMtOCA2LTUgMTQtNCAxOS0xNiAyNmMtMjAgMTAtMjAgMTMtNSAyNCAxMSA4IDE0IDE4IDggMzMtNCAxMi0xMSAyMi0xNSAyMi01IDEtMTQgMS0yMCAyLTcgMC00IDQgNiA4IDIxIDggMzMgNTEgMTUgNTEtOCAwLTggNCAwIDEzIDYgOCAxMyA0MiAxNyA3NyAzIDM5IDEzIDc1IDI3IDk1IDEyIDE5IDIzIDMzIDI0IDMxIDEtMS00LTI0LTEyLTUxem0yNDYtNDFjMTAtMTMgMTAtMTctMi0yNS0yMi0xNC0zMi0xMS0yNiAxMSAzIDEwIDAgMjEtNyAyNC02IDItNCA1IDUgNSA5IDEgMjItNiAzMC0xNXptMTE5LTRjMTItOCAxMi0xMCAxLTEwLTggMC0xOS03LTI2LTE3cy0xOS0xNC0yOS0xMGMtMTUgNi0xNSA4IDEgMjcgMTkgMjIgMzEgMjQgNTMgMTB6bTUxNS05OGM0LTIwIDMtMzItNC0zMi0xNSAwLTMxIDM0LTMxIDY1IDAgMjIgMiAyNCAxNCAxMyA3LTggMTctMjkgMjEtNDZ6bTI1IDExYzAtMTIgNi0yOCAxMy0zNSAxMi0xNCAyNC00OCAxMi0zNi00IDQtMTggMi0zMi0zLTIyLTgtMjQtNy0xNyA4IDUgMTAgOCA0MCA4IDY2LTEgMzAgMiA0MyA3IDM1IDUtNyA5LTIzIDktMzV6TTgxOCA3MzRjMjgtNCA1Mi0xMSA1Mi0xNiAwLTE3LTcxLTM5LTEwNC0zMi0zMiA2LTY2IDMwLTY2IDQ2IDAgMTAgNDUgMTAgMTE4IDJ6bTI3NS0xMjRjLTYtNi0zMyAzMC0zMyA0NCAwIDYgOSAwIDIwLTE0IDEwLTE0IDE2LTI3IDEzLTMwem0tOTMtMzAxYzAtOS04LTI0LTE5LTMzLTE2LTE1LTE5LTE1LTI0LTItOCAyMSAyNSA3OSAzNSA2MyA0LTcgOC0xOSA4LTI4em0tMTEzLTI1Yy05LTktMTA2LTEwLTEwMC0xIDIgNCAyNyA3IDU1IDdzNDktMyA0NS02em0tMTItMTY0Yy0xMi0xOS0xMDktNzAtMTM1LTcwLTE3IDAtNyA4IDM0IDI1IDMzIDEzIDY5IDMzIDgwIDQ0IDIwIDIxIDM0IDIxIDIxIDF6TTUzMCA1NGM4Mi0yMCA4Ni0yNCAxOS0yMC01OSA0LTgxIDgtODkgMTctMyAzLTE0IDExLTI1IDE4LTIzIDE0LTMyIDE1IDk1LTE1ek00NTUgMTM1NWMzNC0xNiA3Mi0yMSA0NS02LTggNS0yOCAxMS00NSAxNGwtMzAgNiAzMC0xNHpNNTYwIDEzMjNjOC0zIDM0LTE0IDU4LTI0IDIzLTEwIDQyLTE2IDQyLTEzIDAgOC04MyA0NC0xMDAgNDMtMTMtMS0xMy0xIDAtNnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNjIgNDQ3YzE4LTE4IDM5LTMzIDQ2LTM0IDE0IDAtNTYgNjYtNzEgNjctNCAwIDctMTUgMjUtMzN6TTcyMyAzNDBjLTI5LTEyLTI5LTE1IDAtMTggMTUtMSAyNCA0IDI0IDEzIDAgOC0xIDE1LTEgMTQtMSAwLTExLTQtMjMtOXpNMzkwIDI4M2MwLTIxIDI4LTQ2IDQ0LTQwIDE4IDcgMjIgMjYgNiAyOC0yMCAzLTI1IDQtMzcgMTItNyA1LTEzIDQtMTMgMHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzc5NTM0Y1wiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjE1NyAyNDk4Yy0yLTctNC0yOC0zLTQ2IDEtMTctMi0zMi02LTMyLTUgMC04LTktOC0yMSAwLTExLTMtMTgtNy0xNi01IDMtOC04LTgtMjUgMC0zNCAyOS01OCAzOS0zMiA2IDE2IDcgMTg0IDEgMTg0LTIgMC01LTYtOC0xMnpNMTYwMCAyNDM4YzAtMiAyOC0yOCA2My01OCAzNC0yOSA1MS00MSAzNy0yNi0yNSAyOC0xMDAgOTEtMTAwIDg0ek0xNTkxIDIzOTVjMi01IDMzLTM3IDY4LTcwczYwLTUzIDU1LTQ0Yy0xMSAxOS0xMjkgMTI5LTEyMyAxMTR6TTE2NDQgMjI4MmMzOS0zOSA3Mi02OSA3NS02NyA2IDctNzUgOTEtMTE0IDExNy0xNiAxMiAxLTExIDM5LTUwek0xNTkwIDIyODZjMC01IDI5LTQwIDY1LTc3czY1LTYyIDY1LTU1YzAgNi0yOSA0MS02NSA3NnMtNjUgNjAtNjUgNTZ6TTEzNCAyMjU2Yy0zLTgtMTItMTItMjAtOS05IDMtNi05IDEwLTM4IDE5LTMzIDIyLTQ3IDE1LTYyLTYtMTAtOC0yMS01LTI1IDMtMyA2IDAgNiA3IDAgOSA1IDkgMjMgMGwyMi0xMi0yMCAyM2MtMTggMjEtMTggMjMtMiAxNyAxMC00IDIyLTcgMjYtNyA1IDAgNi0xMiAzLTI2LTMtMTYtOS0yMy0xOC0yMC0yMiA4LTE2LTggNy0yMyAxNy0xMCAxOS0xNSA5LTIxLTExLTctMTEtMTQtMi0zNSA3LTE2IDE3LTIzIDI0LTE5czggMyA0LTRjLTktMTUgMzctODkgODQtMTMyIDQzLTQxIDUwLTU1IDM5LTkyLTctMjYtNi0yNiAxOC0xNSAxNCA2IDIxIDEzIDE2IDE0LTE1IDUtMyA1NiAxNiA3MiAxNCAxMiAxMyAxMy0xMCA3LTI2LTYtNjAgMTctNDYgMzAgMTAgMTAtNDEgMTM0LTgzIDIwNi0yMiAzNi00MCA3Mi00MCA3OCAwIDctMTEgMjYtMjUgNDJzLTIzIDM0LTIwIDM5YzQgNS0yIDYtMTEgMi0xMi00LTE1LTMtMTAgNSA0IDcgNSAxMiAxIDEyLTMgMC04LTYtMTEtMTR6bTEzMS0yMzRjLTItMy0xMyAxLTIyIDgtMTAgNy02IDEgOS0xMyAyNS0yMyAyNS0yNSA4LTMwLTExLTMtMTktMi0xOCAyIDEgMy0zIDE2LTEwIDI5LTcgMTItOSAyMi01IDIyczIgNS01IDEyYy0yNyAyNy0xMCAzMCAxOCAzIDE2LTE2IDI4LTMxIDI1LTMzelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE2MTEgMjIxNWMwLTYgMjItNTUgNDgtMTA5bDQ4LTk5LTEwNC01NGMtNjQtMzMtMTE2LTUzLTEzNy01My0zMyAwLTMzIDAtMzQgNDctMiA2NS0yNCAxNTEtMzMgMTI2LTYtMTYtOC0xNC0xOCAxMC04IDIwLTE3IDI3LTM5IDI3aC0yOGwyLTE3N2MzLTI5MiAzLTI5MCAyMC0zMDcgOC05IDIxLTE2IDI3LTE2IDcgMCA1MyA0MSAxMDIgOTAgNTAgNTAgMTA0IDEwMCAxMjAgMTEybDMwIDIxLTMwLTM0Yy0xNi0xOS02Ni03Mi0xMTAtMTE4LTY0LTY4LTcwLTc3LTMwLTQ0IDcxIDU4IDIxMiAyMDkgMjAzIDIxOC0zIDMtMzEtNi02Mi0yMC0zMi0xNC04My0yNy0xMTUtMzBsLTU4LTQtNyA2N2MtMyAzNy01IDk0LTUgMTI3IDEgNDggMyA1NCA5IDMwIDQtMTYgOS01OSAxMC05NXM0LTU5IDctNTJjMiA2IDIwIDEyIDQwIDEyIDIyIDAgNjkgMTggMTMxIDUwIDk1IDUwIDEyMiA1OSAxMjIgNDEgMC0xNi0yMDMtMTEyLTI0My0xMTYtNTItNC02MC0xNS0xMC0xNSAyOSAwIDcwIDE1IDE0MiA1MSA1NSAyOCAxMDkgNDkgMTE4IDQ3IDExLTItMTktMjEtNzItNDYtNDktMjQtOTktNDgtMTEwLTU0cy00NS0xNC03NS0xOGwtNTUtNyA0OC0yYzI3IDAgNjUgNiA4NSAxNiAyMSA5IDY2IDMwIDEwMiA0NiAzNiAxNyA3MiAzMCA4MCAzMHMxOCA1IDIyIDExIDEwIDcgMTQgM2M0LTMtMTAtMjUtMzAtNDdzLTM2LTQzLTM2LTQ4YzAtNCAxNyAxMyAzOCAzN2wzOSA0NSA0MS0yMWMyMy0xMSAzOC0yMyAzNS0yNy00LTQgMS00IDEyIDAgMTUgNiAxNyA0IDEyLTExLTYtMTUtNS0xNiA4LTUgMTIgMTAgMTUgMTAgMTUtNCAwLTE2LTg5LTEyMC05Ny0xMTMtMiAyIDEyIDIxIDMyIDQyIDE5IDIyIDM1IDQyIDM1IDQ3IDAgNi03NS03Mi04Ny05MS0yLTItNi0xLTEwIDItMyA0IDQgMjAgMTggMzUgMTMgMTUgMCAzLTI4LTI3LTI5LTMwLTU2LTUyLTU5LTQ4LTEwIDEwLTQ1LTEzLTM4LTI1IDQtNSAwLTE0LTctMTktMjAtMTMtMzEtMTEtMjMgNCA1IDggMiA4LTktMi0xOS0xNS0yMy0yNi01LTE1IDggNSA5IDIgNS0xMC01LTEzIDEwLTkgNjAgMjAgMzggMjAgNzEgNDIgNzUgNDhzMTIgMTIgMTggMTJjNSAxIDE0IDIgMTggMyA1IDAgMTcgOSAyOCAxOSAxMCA5IDI4IDE3IDM5IDE4IDIxIDEgMTU4IDY1IDE4NSA4NyAyMyAxOCA2MyA3NyA1NyA4NC00IDMtNTAgMjMtMTA0IDQ1LTg4IDM1LTEzMCA1NC0yNDEgMTA2LTE4IDgtNDEgMjktNTIgNDYtMjIgMzYtMTAwIDExNS05OSAxMDF6bTM5NC0yNzRjNDMtMTYgODEtMzQgODMtNDAgNS0xNC0xMTcgMjktMjI2IDgwLTQ1IDIxLTg1IDM5LTg5IDM5LTMgMC0xNSA3LTI1IDE3LTQwIDM2LTEzIDMwIDgwLTE3IDUzLTI3IDEzMy02MyAxNzctNzl6bS0xMjEtMTYwbC0zNy0zNiAzMSA0MGMxOCAyMiAzMyA0NiAzMyA1NSAxIDEwIDMgOSA2LTQgMy0xMi03LTMxLTMzLTU1em0tMzc0LTE0YzAtMS0yNy0yOS02MC02MS02NC02My04My02NS0yNi0zIDE4IDIwIDMxIDM3IDI3IDM4LTMgMCA4IDcgMjQgMTQgMzMgMTYgMzUgMTYgMzUgMTJ6bTIzNi02NmMtMTYtMTctMzgtMjgtNTMtMjgtMTYgMC0yMSAyLTEyIDcgNiA1IDE3IDYgMjQgNCA2LTMgMjIgNyAzNSAyMXMyNiAyNSAyOSAyNWMyIDAtOC0xMy0yMy0yOXpNMTg2MCAyMTQ1YzI1LTE0IDU4LTMwIDEzNS02NSAxMDEtNDUgMTU4LTcwIDE2My03MCAxOSAwLTI1IDIzLTExMyA2MC01NSAyMy0xMTkgNTMtMTQyIDY2cy00OCAyNC01NSAyNC0yLTcgMTItMTV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTc0MCAyMTE2YzAtNyA5OS01OCAyMDgtMTA4IDk4LTQ0IDE4Mi03MSAxODItNTcgMCA1LTUgOS0xMSA5LTE0IDAtMTQ5IDU0LTIyNCA5MC0zMyAxNi03OCAzNy0xMDAgNDYtMjIgMTAtNDMgMjAtNDcgMjItNSAyLTggMS04LTJ6TTE4NTUgMjEwMmMzNy0yMyAxNzgtODcgMjM1LTEwNyA4MS0yOSA1MC04LTUyIDM1LTU3IDIzLTEyMiA1My0xNDUgNjYtNDkgMjgtODIgMzMtMzggNnpNMTI4MiAxOTE1YzAtMTEwIDMtMjE2IDgtMjM1IDEwLTQ1IDEyIDMyNiAxIDM5MC01IDI4LTgtMzAtOS0xNTV6TTEyNDggMTkyN2M0LTI0MiA5LTI1NSAxMS0zMCAwIDEwNS0yIDE5NC03IDE5Ny00IDItNi03My00LTE2N3pNMTIxMyAyMDUwYzAtMjUgMi0zNSA0LTIyIDIgMTIgMiAzMiAwIDQ1LTIgMTItNCAyLTQtMjN6TTE1NzggMTk4NGMtMzgtMjAtMzYtMjggMi05IDE3IDkgMzAgMTggMzAgMjAgMCA3LTEgNi0zMi0xMXpNMTY5OSAxODgzYy0xNC0xNi00My01MC02NC03OC0yMS0yNy03Ny04OC0xMjQtMTM0LTQ4LTQ2LTc3LTc5LTY2LTczIDMzIDE3IDIxMiAyMDYgMjYzIDI4MCAyOCAzOSAyNCA0MS05IDV6TTEyMTMgMTgzNWMwLTM4IDItNTMgNC0zMiAyIDIwIDIgNTIgMCA3MC0yIDE3LTQgMS00LTM4ek01MjQgMTg2NmMtMy04LTQtMjMtMi0zMyAzLTEzIDctOSAxNSAxNSAxMiAzMS0xIDQ4LTEzIDE4ek0xNTg1IDE3MDdjLTEwMy0xMDYtMTAwLTEwOCA4LTcgNDMgMzkgMTE1IDEyMSAxMDUgMTE5LTEgMC01Mi01MS0xMTMtMTEyek0xNTQwIDE1NThjLTE0LTUtNTgtMTAtOTktMTAtNTQgMC03MC0zLTYyLTExIDE3LTE3IDE0LTQwLTQtMzMtMTMgNS0zNS0zLTY1LTIyLTItMiAyLTcgOS0xMiAxMS02IDktMTMtMTEtMzMtMjctMjctMjctNDAgMC0zMCAxMCA0IDEzIDIgOC01LTEzLTIxIDEyLTEzIDM5IDEyIDE4IDE3IDIyIDI2IDEzIDI5LTkgNC05IDYtMSA2IDM0IDIgMjEtNTQtMTYtNjgtMTctNi0yMC0xMC04LTEwIDIwLTEgMjMtMjkgNC0zNy03LTItMTMtMTMtMTQtMjItMS0xNSA3LTE5IDQxLTIxIDU0LTIgOTIgMjYgMTA2IDgwIDYgMjIgMzEgNjYgNTYgOTggNjUgODQgNjcgMTE1IDQgODl6TTQ4NSAxMjg0Yy01Ny0yMS02OS0zMi0xMDAtOTQtMTUtMzAtNDUtNzUtNjctOTktMjEtMjQtNDEtNTYtNDUtNzAtMTAtNDMtMzItODEtNjktMTE2LTMyLTMxLTM0LTM4LTM0LTk3IDAtMzUgNC03OSAxMC05NyA1LTE5IDExLTQ5IDEyLTY3IDEtMjEgNi0zMCAxNC0yNyAxNCA1IDczLTU1IDc0LTc0IDAtNyAzLTEzIDgtMTMgNCAwIDMzLTI1IDY2LTU1IDMyLTMwIDYzLTU2IDcwLTU2IDYtMSAxNi0yIDIzLTMgNyAwIDE5LTEwIDI3LTIxIDEzLTE3IDE3LTE4IDQwLTYgMTQgOCAyNCAxNyAyMiAyMHM0OCA3IDExMiA5YzIzMiA2IDI2OCA4IDI4MCAxNiA3IDQgMTIgMSAxMi04IDAtMjEgMTktMjAgNTUgNCA1MCAzMyA1NyAyMyAyMC0yOS00NC02MS0yOS03OCAyMi0yNGwzNSAzOC0xNy0zM2MtOS0xOS0xNC0zNi0xMS0zOSA3LTcgNDIgNjUgNTAgMTAzIDQgMTcgMjkgNTQgNTYgODMgNTMgNTYgMTE1IDE2OSAxMjYgMjI4IDExIDU2LTE4IDEyOS03OSAyMDMtMzAgMzYtNTggNzgtNjMgOTQtOSAyNy0xMSAyOC0yNyAxMi05LTEwLTE3LTE0LTE3LTkgMCA0LTQgMy04LTMtNC03LTE4LTE0LTMxLTE1LTIwLTMtMjYgMi0zNSAzMC0xNSA0My0zNSA1Ny05NCA2NS0zNiA1LTY3IDIxLTEzNyA3MS00OSAzNS05OCA2NS0xMDggNjVzLTI2IDQtMzYgOWMtMzQgMTgtMTE0IDIxLTE1NiA1em0xNTMtMjA4YzYxLTUgMTEyLTE0IDExMi0xOSAwLTExLTE1MC0yLTE5OSAxMy0xOCA1LTM4IDgtNDMgNy02LTEtMTMgNC0xNiAxMi0zIDExIDAgMTIgMTQgNiAxMS01IDcwLTEzIDEzMi0xOXptLTMyMy04MWMtMjYtODUtMTEtMTUyIDMzLTE0OCAxNiAyIDI1LTQgMzEtMjEgNy0xNiAyNS0yOCA2MC00MCAyNy05IDU3LTE2IDY2LTE2IDIyIDAgMTQtMjItMTMtMzYtMjktMTQtNDItMjktMTktMjEgMjAgNyAyMy0xMyA2LTMwLTktOS01LTE0IDE0LTE4IDE1LTQgMjktMTYgMzItMjYgNC0xMSAxOS0yNyAzMy0zNiAxNS05IDUxLTMyIDc5LTUxIDQ4LTMyIDU2LTM0IDk1LTI2IDU4IDEyIDY0IDQwIDExIDQ5LTQ5IDgtNjggMTktNTggMzUgNiA5IDMwIDExIDk1IDYgODUtNiA4OS02IDEyMCAyMSAzMSAyNSAzMiAyNiAyNiA1LTEyLTM3IDE5LTE2IDU5IDM5IDI4IDM5IDM4IDY2IDQ3IDEyNiAxMCA2MCAxNiA3NyAzMSA4MSAxMyAzIDE4IDExIDE0IDI4LTIgMTMgMSAyNSA3IDI3IDE4IDYgMzYtNCAzNi0yMCAwLTktNi0xMy0xNS05LTEyIDQtMTUtNC0xNS00NSAwLTY1IDEyLTg1IDU1LTkzIDM5LTggNDgtMjMgMTMtMjMtNDEtMS00OC0zLTQ4LTE0IDAtNiAxMS0yMCAyNi0zMSAxNC0xMSAyMi0yMyAxOS0yNi0zLTQtMTAtMS0xNCA2LTcgMTItMzMgMTctNzQgMTMtMTAgMC0xNS01LTEyLTExIDMtNS0yLTEwLTEyLTExLTEwIDAtMTMtMy02LTYgNy0yIDEzLTEyIDEzLTIxIDAtMTMtMi0xNC05LTMtNiA5LTExIDEwLTE1IDMtNC02LTEzLTktMjAtNnMtMTgtMi0yNS0xMGMtOS0xMS03LTE5IDE0LTQxIDI5LTMzIDI5LTMyIDEwLTMyLTggMC0xMiA0LTEwIDggNiA4LTE5IDE5LTQ0IDE5LTkgMC0yNi02LTM3LTE0LTE1LTEyLTE3LTE3LTYtMjcgMTYtMTcgMTYtMzQtMS0yMC0xMyAxMC03OSA3LTk4LTQtNC0zLTYtMTItMi0yMCAzLTggMC0xNS03LTE1LTYgMC04IDQtNSAxMHMtOSA4LTMyIDZjLTY4LTYtMTEzLTE4LTExMy0zMCAwLTgtMi04LTggMC0xMCAxNy0xMDggMTMtMTA0LTQgMS04LTItMTEtOC03cy05IDEzLTYgMjFjMyA5LTIgMTQtMTcgMTQtNjkgMi04NyA2LTgyIDE4IDQgMTAtNCAxMy0zMCAxMi0zLTEtMTIgNi0yMSAxNC04IDgtMjEgMTMtMjkgOS0xMS00LTEzLTEtOSAxMSA0IDEwIDEgMTYtNyAxNi03IDAtOSAzLTYgNiA0IDQtMyAxNS0xNCAyNS0xMiAxMC0xOCAyMy0xNCAyOCAzIDYgMiAxMS00IDExcy04IDYtNSAxNC00IDE5LTE2IDI2Yy0yMCAxMC0yMCAxMy01IDI0IDExIDggMTQgMTggOCAzMy00IDEyLTExIDIyLTE1IDIyLTUgMS0xNCAxLTIwIDItNyAwLTQgNCA2IDggMjEgOCAzMyA1MSAxNSA1MS04IDAtOCA0IDAgMTMgNiA4IDEzIDQyIDE3IDc3IDMgMzkgMTMgNzUgMjcgOTUgMTIgMTkgMjMgMzMgMjQgMzEgMS0xLTQtMjQtMTItNTF6bTI0Ni00MWMxMC0xMyAxMC0xNy0yLTI1LTIyLTE0LTMyLTExLTI2IDExIDMgMTAgMCAyMS03IDI0LTYgMi00IDUgNSA1IDkgMSAyMi02IDMwLTE1em0xMTktNGMxMi04IDEyLTEwIDEtMTAtOCAwLTE5LTctMjYtMTdzLTE5LTE0LTI5LTEwYy0xNSA2LTE1IDggMSAyNyAxOSAyMiAzMSAyNCA1MyAxMHptNTE1LTk4YzQtMjAgMy0zMi00LTMyLTE1IDAtMzEgMzQtMzEgNjUgMCAyMiAyIDI0IDE0IDEzIDctOCAxNy0yOSAyMS00NnptMjUgMTFjMC0xMiA2LTI4IDEzLTM1IDEyLTE0IDI0LTQ4IDEyLTM2LTQgNC0xOCAyLTMyLTMtMjItOC0yNC03LTE3IDggNSAxMCA4IDQwIDggNjYtMSAzMCAyIDQzIDcgMzUgNS03IDktMjMgOS0zNXpNODE4IDczNGMyOC00IDUyLTExIDUyLTE2IDAtMTctNzEtMzktMTA0LTMyLTMyIDYtNjYgMzAtNjYgNDYgMCAxMCA0NSAxMCAxMTggMnptMjc1LTEyNGMtNi02LTMzIDMwLTMzIDQ0IDAgNiA5IDAgMjAtMTQgMTAtMTQgMTYtMjcgMTMtMzB6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM5MzVhM2JcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE2NDIgMjE1OGM2LTE4IDIyLTU3IDM2LTg3IDE0LTI5IDI1LTU5IDI1LTY3IDAtNyA0LTExIDktOCA0IDMgOC0xIDgtOSAwLTIxLTE5NC0xMTgtMjQyLTEyMi01Mi00LTYxLTE1LTEzLTE1IDI3IDAgNzIgMTYgMTQyIDUxIDU3IDI4IDExMSA0OSAxMjEgNDdzLTIwLTIxLTczLTQ2Yy00OS0yNC05OS00OC0xMTAtNTRzLTQ1LTE0LTc1LTE4bC01NS03IDQ4LTJjMjcgMCA2NSA2IDg1IDE2IDIxIDkgNjYgMzAgMTAyIDQ2IDM2IDE3IDczIDMwIDgzIDI5IDEwIDAgMTcgNiAxNyAxNiAwIDEyIDMgMTMgMTIgNCA4LTggMi0yMS0yNS01Mi0yMS0yMi0zNy00My0zNy00N3MxOSAxNCA0MyA0MWw0MiA0OCAyNC0yMWMxMy0xMiAzMC0yMSAzOC0yMXMxMS00IDgtMTBjLTQtNiAxLTcgMTEtMyAxNCA1IDE2IDMgMTEtMTItNi0xNC01LTE2IDctNiAxOSAxNiA0NSA0IDM5LTE5LTMtMTAtMjEtMzMtNDEtNTFsLTM2LTM0IDMyIDQwYzE4IDIyIDMyIDQ2IDMyIDU1IDAgOC04IDItMTktMTUtMTktMzAtOTEtMTA0LTkxLTkzIDAgMyAxNiAyMyAzNSA0NHMzNSA0MSAzNSA0NmMwIDYtNzUtNzItODctOTEtMi0yLTYtMS0xMCAyLTMgNCA0IDIwIDE4IDM1IDEzIDE1IDAgMy0yOC0yNy0yOS0zMC01Ni01Mi01OS00OC0xMCAxMC00NS0xMy0zOC0yNSA0LTUgMC0xNC03LTE5LTIwLTEzLTMxLTExLTIzIDQgNSA4IDIgOC05LTItMTktMTUtMjMtMjYtNS0xNSA4IDUgOSAyIDUtMTAtNS0xMyAxMC05IDYwIDIwIDM4IDIwIDcxIDQyIDc1IDQ4czEyIDEyIDE4IDEyYzUgMSAxNCAyIDE4IDMgNSAwIDE3IDkgMjggMTkgMTAgOSAyOCAxNyAzOSAxOCAyMSAxIDE1OCA2NSAxODUgODcgMjYgMjAgNTcgNzEgNTMgODUtMyA2LTExIDEyLTE4IDEyLTE3IDAtNjkgMjEtMjA4IDg1LTMxIDE1LTYzIDI1LTY5IDIzLTE1LTUgMTE1LTY4IDIxNi0xMDMgNDEtMTUgNzMtMzEgNzEtMzUtOC0xMy0xNTcgNDAtMjUzIDkwLTQ0IDIzLTcyIDIxLTcyLTUgMC04LTQtMTUtMTAtMTUtOSAwLTE0IDE3LTEzIDQ3IDEgNy00IDEwLTEwIDZzLTggMC00IDEwYzMgOSAyIDE5LTMgMjItNiA0LTEwIDE2LTEwIDI5IDAgMTktNjkgMTA2LTg0IDEwNi0zIDAgMC0xNSA2LTMyem0xMDQtNDU3Yy0xNi0xNy0zOC0yOC01My0yOC0xNiAwLTIxIDItMTIgNyA2IDUgMTcgNiAyNCA0IDYtMyAyMiA3IDM1IDIxczI2IDI1IDI5IDI1YzIgMC04LTEzLTIzLTI5ek01MDYgMTI4M2MtNC00LTEyLTgtMTktOS01Mi04LTcyLTI3LTEwNy05NS0xNi0zMC0zNi02MS00NS02OS05LTctMjUtMjYtMzYtNDJsLTIwLTI4aDIxYzEyIDAgMTkgNCAxNSA5LTMgNS0xIDEyIDUgMTYgMTQgOSAxMy0xNC01LTcxLTgtMjctMTUtNTgtMTUtNjkgMC0zMiAyNC03MCA0NS03MiAzOS01IDExNS0yOCAxMTUtMzUgMC00IDE2LTEwIDM1LTE0IDI2LTUgNDAtMTUgNTEtMzYgMTQtMjcgMTItNjktMy01NC03IDctNDMtMjMtNDMtMzcgMC01IDctNiAxNS0zIDExIDQgMTctMyAyMS0yMyA0LTIxIDIwLTM5IDUzLTYwIDI1LTE3IDU2LTM4IDY5LTQ3IDE5LTE1IDI4LTE1IDY5LTQgNDMgMTMgNDQgMTQgMjIgMjMtMTMgNS0yOCAxMC0zNCAxMS0yOCA2LTU2IDI5LTUzIDQ0IDMgMTMgMTIgMTYgNDMgMTNsNDAtMy0zNyAzN2MtMjEgMjAtMzggNDAtMzggNDUgMCA0IDE0IDIwIDMxIDM0IDIzIDE5IDQxIDI2IDcyIDI1IDIzIDAgMzYtMyAyOS02LTI1LTEwIDEtMjMgNDgtMjMgMzkgMCA0OC0zIDQ0LTE1LTgtMjAtODgtNDgtMTIzLTQzLTI2IDQtMjkgMi0yMC0xNCA1LTEwIDE5LTE4IDMwLTE4IDEzIDAgMTktNSAxNi0xMy0zLTkgNi0xNCAzMy0xNSAyOC0yIDQ1IDQgNjggMjMgMTYgMTQgMzkgMjUgNTEgMjUgMzUgMCA3MSA2NyA4MCAxNTEgNiA1MSA1IDc4LTMgODgtMTEgMTUtMTEgMTUgMzktNSA4LTMgMTUtMSAxNSA0IDAgMTUtMzAgNDMtNDAgMzctNS0zLTEyIDAtMTYgNi00IDctMyA5IDQgNSA1LTMgMTItMSAxNCA1IDYgMTcgNTgtMSA3NS0yNyAxMS0xOCAxMi0yOCA1LTM3LTctOC05LTI5LTUtNTIgNC0yNyAzLTM2LTUtMzEtMTYgOS0xNS03IDAtMjIgMjgtMjggMzgtMTMgMzggNTggMCA4MSAxMiA4OSA0MCAyOCAxNi0zNSAxOC0zNyAxMy0xMy0zIDE3LTE0IDQ0LTI0IDYxLTExIDE3LTE5IDM4LTE5IDQ1IDEgOCA3IDAgMTQtMTcgMTUtMzMgNDEtNTAgNTItMzMgMyA2LTMgMTMtMTUgMTYtMTEgMy0yMyAxNC0yNiAyNC00IDExLTE3IDMyLTMwIDQ3cy0yNSAzOS0yNyA1MmwtMyAyNS0yMC0yMWMtMTEtMTItMzAtMjUtNDItMjgtMTQtNS0yMy0xNi0yNC0yOSAwLTEyLTkgNS0xOSAzNy0yNCA3Ni0zNSA4My0xMzkgODctNDkgMi01NCA1LTYzIDMxLTYgMTUtMTMgMjgtMTcgMjgtNSAwLTIxIDExLTM3IDI1LTMyIDI4LTY2IDQwLTg5IDMxLTktMy0xNC0yLTExIDMgOCAxMy0xNDYgNDYtMTU4IDM0em0yNi0xOTJjMTMtNCA1Ny0xMSA5OC0xNSA3MC02IDc0LTUgNTUgMTAtMjAgMTYtMTkgMTYgNSA5IDQyLTExIDgwLTI3IDgwLTM0IDAtOC0xMTItNDEtMTQwLTQxLTExIDAtMjAtNy0yMC0xNXMtNS0xNS0xMS0xNS05IDktNiAyMGM0IDE2IDEgMjAtMTMgMTgtMTktMy0xMTAgNDktMTEwIDYzIDAgMTEgMzIgMTEgNjIgMHptMTEzLTEyOGM1MS03IDY1LTE5IDY0LTUybC0xLTI2LTcgMjRjLTggMzAtMjQgMzYtNDEgMTYtMTgtMjEtMzUtMTktNTMgOC0xNCAyMi0xNSAyMi0zNSAzLTI0LTIxLTU3LTE1LTQ4IDkgMyA4IDEgMTUtNSAxNXMtOCA0LTQgOWM1IDkgMzggOCAxMzAtNnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0yNTIgOTI0bDQtMzUtMTkgMjNjLTEwIDEzLTE2IDE3LTEyIDExIDMtNyAxLTEzLTUtMTMtNyAwLTIwLTEwLTMxLTIyLTIzLTI5LTI1LTEyMy01LTE5MyA4LTI2IDE0LTUzIDEzLTU5LTEtNSAzLTEwIDktMTEgMTEgMCA3NC01OSA3NC03MCAwLTEwIDQ4LTU1IDU5LTU1IDUgMCAxMi04IDE1LTE4IDctMjEgNjYtNTkgNjYtNDIgMCA2IDEyIDIgMjYtOSAxNS0xMiAzMy0yMSA0MS0yMXMxMS01IDgtMTJjLTQtNyAwLTUgOCA0IDggMTAgMTggMTQgMjIgMTAgNS00IDUgMiAxIDEyLTUgMTYtNCAxNyA5IDYgOC03IDIyLTEwIDMwLTYgOCAzIDE1IDIgMTUtMnMxNi03IDM1LThjMjUgMCAzNSA0IDM1IDE1czMgMTIgOCA0IDI2LTEwIDY3LTdjMzMgMyA5MiA2IDEzMCA2IDQyIDAgNzMgNSA3NyAxMSA1IDggOCA2IDgtNSAwLTIzIDQyLTI0IDYwLTMgNyA4IDIxIDE1IDMyIDE1IDIyIDAgMjUgNy0yOC03NS0zNC01MiAxMy0yMiA2MiA0MCAxMyAxNiAxNSAxNyAxMCAzLTE2LTQ4LTE2LTUxLTMtMjggOCAxNCAxOCAzOSAyMSA1NiA0IDE3IDI5IDU1IDU3IDg0IDI3IDI5IDY2IDg3IDg2IDEyOCAzOCA3OSA1NSAxNjIgMzQgMTYyLTcgMC05IDUtNiAxMCAzIDYgMSAxMC00IDEwLTYgMC0xMSA4LTExIDE4IDAgMTQtMiAxNC05IDMtNi05LTYtMjIgMC0zMiAxMy0yNSAxMS0zOS02LTM5LTggMC0xNS01LTE1LTExIDAtNS00LTctMTAtNC01IDMtMTAgMi0xMC00IDAtNSA0LTEzIDEwLTE2IDUtMyAxNS0xNiAyMS0yOCAxMS0yMSAxMS0yMS03LTYtMjMgMTktODQgMzMtODQgMTkgMC02LTYtMTAtMTQtMTBzMS0xNSAyMC0zNmMxOS0xOSAzNC00MSAzNC00N3MtNy0xLTE2IDExYy04IDEyLTIwIDIwLTI1IDE2LTUtMy04IDAtNyA3IDIgNi05IDE1LTIzIDE5LTIwIDYtMzEgMy00My0xMi0xNy0xOS0xNi0xOSA2LTEyIDE5IDYgMjEgNSAxMS04LTE3LTIwLTQtMzEgMTYtMTUgMTQgMTEgMTQgMTAgMi01LTExLTE1LTExLTIxLTEtMzMgMTEtMTMgMTAtMTQtNC05LTkgMy0yMSAxNC0yNiAyNHMtMTkgMTYtMzIgMTUtMjktMy0zNi00Yy03IDAtMTAtNi03LTExczEtMTAtNS0xMGMtNyAwIDAtMTQgMTQtMzFzMjYtMzYgMjYtNDJjMC03LTUtNC0xMSA1LTUgOS0xNiAxNS0yNCAxMi04LTQtMTItMTEtOC0xNyAzLTYgMS03LTYtMy04IDYtOSAxMi0yIDIwIDExIDEzIDUgMjYtMTEgMjYtNSAwLTctNC00LTkgMy00LTYtNi0xOS0zLTE5IDMtMjUgMC0yNS0xMiAwLTExLTQtMTQtMTItMTAtNyA0LTItNyAxMS0yNCAxMi0xOCAxOC0zMiAxMy0zMi02IDAtMTMgNy0xNiAxNi0zIDgtMTEgMTItMTcgOC03LTQtOS0zLTUgNCA4IDEzLTQ4IDUtODktMTMtMjUtMTItODEtMjEtMTQ0LTI0LTgtMS0xMS04LTgtMjEgMy0xMSAxLTIwLTQtMjBzLTkgOS05IDIwLTcgMjAtMTYgMjAtMTItNS04LTEyYzYtMTAgNS0xMC03LTEtMTMgMTAtMjEgMTAtNDIgMC0yOC0xMi0zOC0zNC0xMy0yNCAxMCA0IDEzIDEgMTAtOC01LTExLTEwLTEyLTI0LTMtMTAgNy0xNyAxNS0xNSAxOHMtMSAxMi02IDIwYy04IDEzLTEwIDEzLTE5IDAtOC0xMy0xMC0xMi0xMCA0IDAgMTUtNSAxNy0yNiAxMi0xNi00LTIzLTMtMTkgMyAzIDcgMCA4LTkgNXMtMTMtMTEtOS0xN2MzLTYgMS03LTYtMy03IDUtOSAxNi01IDI4IDUgMTYgMyAyMC0xMCAxNS04LTMtMTgtMi0yMSAyLTMgNS0xNSA3LTI4IDQtMTgtNC0xOS0zLTcgNiAxMyA5IDEyIDExLTQgMTEtMTMgMC0xNiA1LTEyIDE2IDUgMTIgMiAxNS05IDEwLTktMy0xMy0yLTEwIDQgNyAxMi0xOCA0MC0zNiA0MC05IDAtOCA0IDEgMTUgOSAxMCA5IDE1IDEgMTUtNiAwLTEwIDMtMTAgOCAzIDE4LTIgMzItMTIgMzItNSAwLTctNC00LTEwIDMtNSAwLTctOC00LTE3IDYtMTggMzQtMSAzNCA2IDAgMTUgOCAxOCAxNyA4IDE5LTIwIDQ2LTM3IDM2LTYtMy03LTEtMyA1IDQgNyAxNCAxMiAyMSAxMiAxMiAwIDEyIDUgNCAyNC04IDE3LTggMjkgMCA0NSAxMCAxNyA5IDIxLTQgMjEtOCAwLTE1IDQtMTUgOXM5IDcgMTkgNGMyMS01IDMwIDE2IDIzIDU1LTcgMzctMjUgMjUtMjAtMTR6bTU1NC00MzZjLTEtMTMtNi0yMi05LTIwLTQgMS0xNCAyLTIyIDJzLTE1IDUtMTUgMTFjMCA1IDQgOCA5IDVzMTQgMSAyMSA5YzE3IDIwIDIwIDE5IDE2LTd6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM3NTY3NWFcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE2NjkgMjMxN2MzNi0zOSA0MS00MiA0MS0yOSAwIDQtMTcgMjAtMzggMzZsLTM3IDI5IDM0LTM2ek0xNjU3IDIyNzBjMTAtMTEgMjEtMjAgMjUtMjBzMCA5LTkgMjBjLTEwIDExLTIxIDIwLTI1IDIwczAtOSA5LTIwek0xNjAwIDIyNzNjMC00IDIwLTI3IDQ0LTUwIDI1LTIzIDUyLTUzIDYwLTY1IDExLTE2IDE2LTE4IDE2LTcgMCA5LTI3IDQxLTYwIDczcy02MCA1NC02MCA0OXpNMTM0IDIyNTZjLTMtOC0xMi0xMi0yMC05LTkgMy02LTkgMTAtMzggMTktMzMgMjItNDcgMTUtNjItNi0xMC04LTIxLTUtMjUgMy0zIDYgMCA2IDYgMCA3IDcgOSAxOCA1IDE1LTYgMTYtNSAyIDEycy0xMyAxOCAzIDEyYzEwLTQgMjItNyAyNi03IDUgMCA2LTEyIDMtMjYtMy0xNi05LTIzLTE4LTIwLTIyIDgtMTYtOCA3LTIzIDE3LTEwIDE5LTE1IDgtMjEtMTEtNy0xMS0xMyAwLTM0IDgtMTQgMTktMjMgMjQtMTkgNiA0IDcgMSAzLTYtNS03LTItMjAgNi0yOXMyMC0zMCAyOC00NWM4LTE2IDI3LTM2IDQyLTQ1czI4LTIyIDI4LTI5IDQtMTMgOS0xM2MxNCAwIDE4LTMxIDEwLTYyLTctMjYtNi0yNiAxOC0xNSAxNCA2IDIxIDEzIDE2IDE0LTE1IDUtMyA1NiAxNiA3MiAxNCAxMiAxMyAxMy0xMCA3LTE5LTQtMzEgMC00NCAxNC0xMCAxMS0xMyAyMC03IDIwIDE3IDAtMzAgMTIxLTc4IDIwMi0yMiAzNi00MCA3Mi00MCA3OCAwIDctMTEgMjYtMjUgNDJzLTIzIDM0LTIwIDM5YzQgNS0yIDYtMTEgMi0xMi00LTE1LTMtMTAgNSA0IDcgNSAxMiAxIDEyLTMgMC04LTYtMTEtMTR6bTkxLTE3NWMtMi01IDctMTkgMjAtMzEgMzEtMjkgMzMtNTAgMy0yNC0xMyAxMC02IDEgMTUtMjAgNDUtNDYgNDgtNjIgNy00MS0xNiA4LTI5IDE5LTI4IDIzcy0zIDE3LTEwIDMwYy03IDEyLTEwIDIyLTYgMjIgMyAwIDIgNi0zIDEzLTEyIDE1LTEzIDQ4LTEgNDEgNS0zIDYtOSAzLTEzelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE2NDIgMjE1OGM2LTE4IDIyLTU3IDM2LTg3IDE0LTI5IDI1LTU5IDI1LTY3IDAtNyA0LTExIDktOCA0IDMgOC0xIDgtOSAwLTIxLTE5NC0xMTgtMjQyLTEyMi01Mi00LTYxLTE1LTEzLTE1IDI3IDAgNzIgMTYgMTQyIDUxIDU3IDI4IDExMSA0OSAxMjEgNDdzLTIwLTIxLTczLTQ2Yy00OS0yNC05OS00OC0xMTAtNTRzLTQ1LTE0LTc1LTE4bC01NS03IDQ4LTJjMjcgMCA2NSA2IDg1IDE2IDIxIDkgNjYgMzAgMTAyIDQ2IDM2IDE3IDczIDMwIDgzIDI5IDEwIDAgMTcgNiAxNyAxNiAwIDEyIDMgMTMgMTIgNCA4LTggMi0yMS0yNS01Mi0yMS0yMi0zNy00My0zNy00N3MxOSAxNCA0MyA0MWw0MiA0OCAyNC0yMWMxMy0xMiAzMC0yMSAzOC0yMXMxMS00IDgtMTBjLTQtNiAxLTcgMTEtMyAxNCA1IDE2IDMgMTEtMTItNi0xNC01LTE2IDctNiAxOSAxNiA0NSA0IDM5LTE5LTMtMTAtMjEtMzMtNDEtNTFsLTM2LTM0IDMyIDQwYzE4IDIyIDMyIDQ2IDMyIDU1IDAgOC04IDItMTktMTUtMTktMzAtOTEtMTA0LTkxLTkzIDAgMyAxNiAyMyAzNSA0NHMzNSA0MSAzNSA0NmMwIDYtNzUtNzItODctOTEtMi0yLTYtMS0xMCAyLTMgNCA0IDIwIDE4IDM1IDEzIDE1IDAgMy0yOC0yNy0yOS0zMC01Ni01Mi01OS00OC0xMCAxMC00NS0xMy0zOC0yNSA0LTUgMC0xNC03LTE5LTIwLTEzLTMxLTExLTIzIDQgNSA4IDIgOC05LTItMTktMTUtMjMtMjYtNS0xNSA4IDUgOSAyIDUtMTAtNS0xMyAxMC05IDYwIDIwIDM4IDIwIDcxIDQyIDc1IDQ4czEyIDEyIDE4IDEyYzUgMSAxNCAyIDE4IDMgNSAwIDE3IDkgMjggMTkgMTAgOSAyOCAxNyAzOSAxOCAyMSAxIDE1OCA2NSAxODUgODcgMjYgMjAgNTcgNzEgNTMgODUtMyA2LTExIDEyLTE4IDEyLTE3IDAtNjkgMjEtMjA4IDg1LTMxIDE1LTYzIDI1LTY5IDIzLTE1LTUgMTE1LTY4IDIxNi0xMDMgNDEtMTUgNzMtMzEgNzEtMzUtOC0xMy0xNTcgNDAtMjUzIDkwLTQ0IDIzLTcyIDIxLTcyLTUgMC00MS0zMiA3LTM1IDUyIDAgNi00IDE1LTggMTlzLTcgMTctNyAyOWMwIDE4LTY5IDEwNS04NCAxMDUtMyAwIDAtMTUgNi0zMnptMTA0LTQ1N2MtMTYtMTctMzgtMjgtNTMtMjgtMTYgMC0yMSAyLTEyIDcgNiA1IDE3IDYgMjQgNCA2LTMgMjIgNyAzNSAyMXMyNiAyNSAyOSAyNWMyIDAtOC0xMy0yMy0yOXpNMTg3NiAyMTM5YzYtMTEgNjYtMzkgODEtMzkgNCAwLTEyIDExLTM2IDI1LTQ4IDI4LTU1IDMwLTQ1IDE0ek0xODQ2IDIxMTBjMTItNSAyNS0xMyAyOS0xOSAzLTYgMTItMTEgMTgtMTEgNyAxIDEgMTAtMTIgMjAtMTMgMTEtMzEgMjAtNDAgMTktMTEgMC0xMC0zIDUtOXpNMTI4NCAxOTAzYzEtMTE2IDQtMjE0IDctMjE3IDgtOSA4IDMzMSAwIDM4NC00IDI1LTctNTAtNy0xNjd6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTMxNyAxODkzYzEtMTIwIDUtMjI4IDgtMjQwczE1LTI3IDI2LTM0YzE4LTkgMzAtMiA5OSA2NyA0NCA0MyA3OCA4MCA3NiA4M3MyMCAyMSA0OCA0MGw1MSAzNC0zNS0zOWMtMTktMjItNzEtNzctMTE1LTEyMy01Ni01OS02Ny03My0zNS00OCA0MiAzNCA2NyA1OSAxNzQgMTc0IDM2IDM4IDM3IDQxIDE1IDM4LTEzLTItNDgtMTMtNzctMjQtMzItMTMtNzItMjEtMTAwLTIwbC00NyAyLTMgMTE1Yy01IDE0NC0xOCAxODYtNTkgMTkwbC0zMCAzIDQtMjE4em0xNTctMTY2Yy0yNC0yNy00My00MC00OS0zNS02IDYtMSAxNyAxNSAzMCAxNCAxMiAxOCAxOSAxMCAxNi00Ny0xOC00OS0xNS01IDYgNzAgMzQgNzMgMzIgMjktMTd6bS01NC00NmMwLTUtNy0xNC0xNS0yMS0xNi0xNC0xOC0xMC05IDE0IDYgMTcgMjQgMjIgMjQgN3pNMTI0OCAxOTI3YzQtMjM3IDktMjQ5IDExLTI1IDAgMTAzLTIgMTg5LTcgMTkyLTQgMi02LTczLTQtMTY3elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE0MjQgMjA4MGMzLTE0IDYtMzEgNi0zNyAwLTcgNS0xMyAxMC0xMyAxMiAwIDIgNTAtMTMgNjUtNiA3LTggMi0zLTE1ek0xOTcwIDIwOTZjMC03IDExMi01NyAxMTctNTIgMyAzLTIwIDE3LTUyIDMxLTU5IDI2LTY1IDI4LTY1IDIxek0xODEwIDIwODJjMC04IDM3LTI4IDExNS02MiAyOC0xMiA1OC0yNiA2OC0zMSAzMi0xNyAxMzctNDcgMTM3LTM5IDAgNC0xMiAxMS0yNyAxNC0zMSA4LTIxMiA4NC0yMjggOTctMTggMTMtNjUgMjktNjUgMjF6TTE5NjQgMjA1MGM2Ni0zMyAxNjctNzIgMTcyLTY3IDQgNC0yMTEgOTctMjIzIDk2LTQgMCAxOC0xMyA1MS0yOXpNMTQwNSAyMDUyYzQtOCAxMS00NiAxNS04NWw5LTcyLTMgNzNjLTIgNDMtOSA3OC0xNiA4NS0xMCA5LTExIDktNS0xek0yMTI0IDIwMjVjMzYtMTkgNDUtMTkgMjAgMC0xMCA4LTI2IDE0LTM0IDE1LTggMC0yLTcgMTQtMTV6TTE1NzggMTkzOWMtMjEtMTEtMzgtMjItMzgtMjQgMC0zIDE4IDQgNDAgMTVzNDAgMjMgNDAgMjVjMCA3IDAgNy00Mi0xNnpNMTY5OSAxODgzYy0xNC0xNi00Mi01MC02My03OC0yMS0yNy03Ny04Ny0xMjUtMTMyLTQ3LTQ2LTgyLTgzLTc3LTgzIDIyIDAgMTk5IDE4OCAyODkgMzA4IDE3IDIyIDEgMTItMjQtMTV6TTUzMCAxODY1Yy02LTgtMTAtMTktOC0yNiAyLTYgOSAwIDE2IDE1IDEzIDI5IDEwIDMzLTggMTF6TTUwNiAxMjgzYy00LTQtMTItOC0xOS05LTUyLTgtNzItMjctMTA3LTk1LTE2LTMwLTM2LTYxLTQ1LTY5LTktNy0yNS0yNi0zNi00MmwtMjAtMjhoMjFjMTIgMCAxOSA0IDE1IDktMyA1LTEgMTIgNSAxNiAxNCA5IDEzLTE0LTUtNzEtOC0yNy0xNS01OC0xNS02OSAwLTMyIDI0LTcwIDQ1LTcyIDM5LTUgMTE1LTI4IDExNS0zNSAwLTQgMTYtMTAgMzUtMTQgMjYtNSA0MC0xNSA1MS0zNiAxNC0yNyAxMi02OS0zLTU0LTcgNy00My0yMy00My0zNyAwLTUgNy02IDE1LTMgMTEgNCAxNy0zIDIxLTIzIDQtMjEgMjAtMzkgNTMtNjAgMjUtMTcgNTYtMzggNjktNDcgMTktMTUgMjgtMTUgNjktNCA0MyAxMyA0NCAxNCAyMiAyMy0xMyA1LTI4IDEwLTM0IDExLTI4IDYtNTYgMjktNTMgNDQgMyAxMyAxMiAxNiA0MyAxM2w0MC0zLTM3IDM3Yy0yMSAyMC0zOCA0MC0zOCA0NSAwIDQgMTQgMjAgMzEgMzQgMjMgMTkgNDEgMjYgNzIgMjUgMjMgMCAzNi0zIDI5LTYtMjUtMTAgMS0yMyA0OC0yMyAzOSAwIDQ4LTMgNDQtMTUtOC0yMC04OC00OC0xMjMtNDMtMjYgNC0yOSAyLTIwLTE0IDUtMTAgMTktMTggMzAtMTggMTMgMCAxOS01IDE2LTEzLTMtOSA2LTE0IDMzLTE1IDI4LTIgNDUgNCA2OCAyMyAxNiAxNCAzOSAyNSA1MSAyNSAzNSAwIDcxIDY3IDgwIDE1MSA2IDUxIDUgNzgtMyA4OC0xMSAxNS0xMSAxNSAzOS01IDgtMyAxNS0xIDE1IDQgMCAxNS0zMCA0My00MCAzNy01LTMtMTIgMC0xNiA2LTQgNy0zIDkgNCA1IDUtMyAxMi0xIDE0IDUgNiAxNyA1OC0xIDc1LTI3IDExLTE4IDEyLTI4IDUtMzctNy04LTktMjktNS01MiA0LTI3IDMtMzYtNS0zMS0xNiA5LTE1LTcgMC0yMiAyOC0yOCAzNy0xMyA0MCA3MWwzIDgyIDI4LTU1YzE5LTM4IDI1LTQ2IDIxLTI1LTQgMTctMTUgNDQtMjUgNjEtMjMgMzktMjYgNjYtMyAzOCAxNC0xOCAxNC0xOCAzIDYtNiAxNC0yMCAzNC0yOSA0NS0xMCAxMS0yMCAzMS0yMiA0NWwtMyAyNS0yMC0yMWMtMTEtMTItMzAtMjUtNDItMjgtMTQtNS0yMy0xNi0yNC0yOSAwLTEyLTkgNS0xOSAzNy0yNCA3Ni0zNSA4My0xMzkgODctNDkgMi01NCA1LTYzIDMxLTYgMTUtMTMgMjgtMTcgMjgtNSAwLTIxIDExLTM3IDI1LTMyIDI4LTY2IDQwLTg5IDMxLTktMy0xNC0yLTExIDMgOCAxMy0xNDYgNDYtMTU4IDM0em0yNi0xOTJjMTMtNCA1Ny0xMSA5OC0xNSA3MC02IDc0LTUgNTUgMTAtMjAgMTYtMTkgMTYgNSA5IDQyLTExIDgwLTI3IDgwLTM0IDAtOC0xMTItNDEtMTQwLTQxLTExIDAtMjAtNy0yMC0xNXMtNS0xNS0xMS0xNS05IDktNiAyMGM0IDE2IDEgMjAtMTMgMTgtMTktMy0xMTAgNDktMTEwIDYzIDAgMTEgMzIgMTEgNjIgMHptMTEzLTEyOGM1MS03IDY1LTE5IDY0LTUybC0xLTI2LTcgMjRjLTggMzAtMjQgMzYtNDEgMTYtMTgtMjEtMzUtMTktNTMgOC0xNCAyMi0xNSAyMi0zNSAzLTI0LTIxLTU3LTE1LTQ4IDkgMyA4IDEgMTUtNSAxNXMtOCA0LTQgOWM1IDkgMzggOCAxMzAtNnpNMjUyIDkyNGw0LTM1LTE5IDIzYy0xMCAxMy0xNiAxNy0xMiAxMSAzLTcgMS0xMy01LTEzLTcgMC0yMC0xMC0zMS0yMi0yMy0yOS0yNS0xMjMtNS0xOTMgOC0yNiAxNC01MyAxMy01OS0xLTUgMy0xMCA5LTExIDExIDAgNzQtNTkgNzQtNzAgMC00IDYtMTMgMTQtMjAgMTItMTIgMTUtMTIgMjAgMSAzIDgtMSAxNy05IDIxLTkgMy0xNCAxMy0xMyAyMiAyIDEwLTMgMTUtMTUgMTQtMTQtMS0xNyA0LTE0IDE4IDMgMTAgMSAyMi01IDI1LTUgMy03IDEyLTQgMTkgMiA3LTIgMTYtOSAxOS04IDMtMTIgMTQtMTAgMjYgMiAxMS0xIDIwLTcgMjBzLTUgNyAzIDE3YzEyIDE1IDEyIDE2LTMgMTAtMjEtNy0yNCAxMy02IDMxIDYgNiAxMiAyMSAxMyAzMiAyIDE5IDAgMTktMjQgNS0xNS05LTktMSAxNCAyMCAyMiAyMCAzNiAzNSAzMCAzNC0yNi00LTQyIDItNDIgMTYgMCAxOCAyIDE4IDI3IDMgMjEtMTMgMjctMTEgMzAgMTIgNSAzMiAwIDYwLTExIDYwLTcgMC0xMC0xNC03LTM2ek0zNjMgNDkwYzAtMTkgMi0yOSA0LTIyIDMgNiA4IDEwIDEzIDcgNC0zIDEzIDIgMTkgOSAxMCAxMiA5IDE0LTYgMTItMTAtMi0yMSA0LTI0IDEzLTQgOS03IDEtNi0xOXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzY5NzE3NVwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTk0MyAyNzA0YzAtMTUgNDgtMjkgNTYtMTYgMyA0IDE0IDExIDI0IDE1IDE0IDUgMTcgMSAxNy0yMyAwLTE5IDYtMzEgMTgtMzQgMzItMTAgNzIgNSA3MiAyNyAwIDYtNiAyLTE0LTktMTQtMTgtMTUtMTgtMTMgNCAxIDEyIDUgMjIgOSAyMnM1IDYgMiAxNGMtOCAyMC0xNzEgMTktMTcxIDB6TTIxNTAgMjY3N2MtMTgtMzctMTUtNjcgNi02NyAxMCAwIDE0IDEzIDE0IDUwIDAgMjgtMSA1MC0yIDUwLTItMS0xMC0xNS0xOC0zM3pNMjU1IDI2NzZjLTItMTEtNi0zNC05LTUxLTMtMTYtOC00My0xMS02MC01LTIzLTQtMjYgNC0xNSA4IDEyIDExIDggMTEtMTcgMC0yOCA0LTMzIDIzLTMyIDE2IDEgMTggMiA1IDYtMzUgOS0xOCAyNCAyMCAxNyAzNC03IDM2LTYgMjMgOS03IDEwLTEwIDE3LTYgMTcgNSAwIDEgOC03IDE4LTIwIDIzLTMwIDUyLTE4IDUyIDYgMCAxMC01IDEwLTExIDAtNSA0LTcgMTAtNCA1IDMgMTItNiAxNi0yMCAzLTE0IDktMjQgMTItMjFzLTMgMzItMTMgNjVjLTE0IDQ4LTIyIDYwLTQxIDY0LTE5IDMtMjUtMS0yOS0xN3pNMTk1NSAyNjUwYzI4LTEyIDM3LTEyIDMwIDAtMyA2LTE2IDEwLTI4IDktMjEgMC0yMS0xLTItOXpNMjA0MCAyNjIxYzAtMTAgMzAtMjQgMzctMTcgMyAyLTUgOS0xNiAxNi0xMiA2LTIxIDctMjEgMXpNMTk5OSAyNTkwYzM1LTE3IDY2LTI4IDY5LTI1IDUgNS02NyAzOC0xMDggNDktMTQgNCA0LTcgMzktMjR6TTIxNTcgMjQ5OGMtMi03LTQtMjgtMy00NiAxLTE3LTEtMzItNC0zMnMtMTEtMTktMTctNDJjLTEwLTM3LTEwLTQ1IDQtNTUgMjYtMjAgMzMgMSAzMiAxMDAtMSA4Ny0zIDk4LTEyIDc1ek0xOTQyIDI0NjhjLTctNy0xMi0xOS0xMi0yNyAwLTE5IDIzIDEgMjYgMjQgMyAxOCAxIDE4LTE0IDN6TTI1OSAyNDQxYy0xLTEyLTItMzEtMy00MyAwLTEzLTExLTI3LTIzLTMzLTI1LTExLTMyLTI4LTgtMTkgMTAgNCAxNSAwIDE1LTEyIDAtMTUgMi0xNiA5LTUgNiAxMCAxMi0zIDE4LTQwbDktNTQgMTEgMzdjNiAyMSAxMCA0OSA5IDYzLTIgMTQgMSAyNSA1IDI1IDEwIDAtMTAgNDEtMjUgNTEtNSA0LTYgMTQtMyAyMyAzIDggMiAxOC0zIDIxLTYgNC0xMS0zLTExLTE0ek00MzYgMjQ0NGMtOS0yNS03LTY0IDQtNjQgNiAwIDEwIDE4IDEwIDQwIDAgNDMtNCA1MC0xNCAyNHpNNTkwIDI0MDZjMC0xMCA0MC03NiA0Ni03NiAzIDAtMiAxMi0xMCAyOC0yMiA0MC0zNiA1OC0zNiA0OHpNMTI2MCAyMzUzYy0zMi02LTUxLTIzLTI0LTIyIDEwIDAgNDAgNCA2NyA4IDI2IDQgNDcgNCA0NyAwcy0yMS0xMS00Ny0xNWMtNzQtMTEtOTctMjMtNDMtMjIgNjcgMCA5NSAxMCA5OCAzNiAzIDIwLTEgMjItMzUgMjEtMjEtMS00OS00LTYzLTZ6TTE4OSAyMzMwYy0xLTUtMi0xNC0zLTE5IDAtNS00LTEzLTgtMTctNS00LTgtMTItOC0xOCAwLTcgMy03IDEwIDAgMTIgMTIgMjQgNjQgMTUgNjQtMyAwLTYtNC02LTEwek0xMTE1IDIzMzBsLTQwLTcgNDItMmMyMyAwIDQ1IDQgNDggOSAzIDYgMyA5LTIgOS00LTEtMjYtNS00OC05ek0xMTE1IDIyOTBsLTMwLThoMzBjMTcgMCAzOSAzIDUwIDhsMjAgOS0yMC0xYy0xMSAwLTMzLTQtNTAtOHpNMTM0IDIyNTZjLTMtOC0xMi0xMi0yMC05LTkgMy01LTEwIDExLTM5IDE3LTMwIDIxLTQ4IDE1LTU4LTE0LTIyLTEyLTMzIDQtMTggOCA3IDEyIDE2IDEwIDE5LTIgNCA3IDYgMjEgNSAxNCAwIDI1LTEgMjUtMXMtNC0xNC05LTMxLTUtMzcgMC00NSAzLTE2LTQtMjFjLTgtNS04LTEzIDItMzIgOC0xNCAxOC0yMyAyMi0yMCA1IDMgNi0xIDMtOXMyLTIwIDExLTI3YzgtNyAxNS0xNyAxNS0yMiAwLTE5IDM5LTQ5IDY4LTUzbDMxLTQtMjUgNjdjLTE0IDM3LTQzIDk3LTY0IDEzNC0yMiAzNi00MCA3Mi00MCA3OCAwIDctMTEgMjYtMjUgNDJzLTIzIDM0LTIwIDM5YzQgNS0yIDYtMTEgMi0xMi00LTE1LTMtMTAgNSA0IDcgNSAxMiAxIDEyLTMgMC04LTYtMTEtMTR6bTkxLTE3NWMtMi01IDctMTkgMjAtMzEgMjgtMjcgMzQtNDkgOC0yOS0xMCA3LTMtMiAxNS0yMCA0MC00MiA0MS01NiAyLTM2LTE2IDgtMjkgMTktMjggMjNzLTMgMTctMTAgMzBjLTcgMTItOSAyMi01IDIyczIgNS01IDEyYy0xNSAxNS0xNiA1Mi0yIDQzIDYtNCA4LTEwIDUtMTR6TTY4NCAyMjQ1YzExLTggMjQtMTUgMzAtMTUgNSAwIDEgNy0xMCAxNS0xMCA4LTIzIDE0LTI5IDE0LTUgMC0xLTYgOS0xNHpNMTY1MCAyMTQwYzYtMTEgOC0yMCA1LTIwczMtMTAgMTUtMjJjMTEtMTIgMjAtMjggMjAtMzUgMC0yMiA0NC0xMDcgNjUtMTI0IDE5LTE2IDE5LTE4LTE4LTU4LTIwLTIzLTM3LTQ0LTM3LTQ4czE5IDE0IDQzIDQxYzM5IDQ1IDQ0IDQ4IDU5IDMzIDgtOSAxOC0xMyAyMi0xMCAzIDQgNiAxIDYtNSAwLTcgMy0xMSA4LTkgNCAxIDI2LTYgNDktMTYgNDktMjMgNDgtMzktNS04OGwtMzYtMzQgMzIgNDBjMTggMjIgMzIgNDYgMzIgNTUgMCA4LTggMi0xOS0xNS0xOS0zMC05MS0xMDQtOTEtOTMgMCAzIDE2IDIzIDM1IDQ0czM1IDQxIDM1IDQ2YzAgNi03NS03Mi04Ny05MS0yLTItNi0xLTEwIDItMyA0IDQgMjAgMTggMzUgMTMgMTUgMCAzLTI4LTI3LTI5LTMwLTU2LTUyLTU5LTQ4LTEwIDEwLTQ1LTEzLTM4LTI1IDQtNSAwLTE0LTctMTktMjAtMTMtMzEtMTEtMjMgNCA1IDggMiA4LTktMi0xOS0xNS0yMy0yNi01LTE1IDggNSA5IDIgNS0xMC01LTEzIDEwLTkgNjAgMjAgMzggMjAgNzEgNDIgNzUgNDhzMTIgMTIgMTggMTJjNSAxIDE0IDIgMTggMyA1IDAgMTcgOSAyOCAxOSAxMCA5IDI4IDE3IDM5IDE4IDI3IDEgMTY3IDcwIDE5NCA5NSAyNiAyNCAyNyA0OCA0IDU1LTEwIDQtMzMgMTMtNTIgMjEtMTggOC0zOSAxNi00NSAxOC0yMyA1LTkwIDM0LTE0MCA2Mi0yOSAxNS0zMCAxNS01MS0xMS0yNS0zMi0yOS0zMi0zMi0zLTYgNjQtNDAgMTUxLTY3IDE2OS0yMyAxNi0zNyA5LTI2LTEyem05Ni00MzljLTE2LTE3LTM4LTI4LTUzLTI4LTE2IDAtMjEgMi0xMiA3IDYgNSAxNyA2IDI0IDQgNi0zIDIyIDcgMzUgMjFzMjYgMjUgMjkgMjVjMiAwLTgtMTMtMjMtMjl6TTgzMSAyMTM1Yy0xLTE0IDEyLTMwIDI1LTMyIDYtMSAxMSA1IDExIDEzcy02IDEzLTEzIDEwLTE1IDAtMTggN2MtMiA3LTUgOC01IDJ6TTg4MyAyMTI2YzQtMTAgNy0yMiA3LTI3czUtOSAxMS05YzE1IDAgNyA0My0xMCA0OC0xMCAzLTEyIDAtOC0xMnpNMTI4MCAyMDc5YzAtMTkgNC00MSA5LTQ4IDYtMTAgOCAxIDQgMzAtNyA1NS0xMyA2My0xMyAxOHpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xMzE3IDE5MzJjMy0yMzggNS0yNzkgMTQtMjk0IDUtNyA5LTkgOS00IDAgNiA2IDIgMTMtOCAxMy0xNyAxNi0xNyA0NSAxNSAxOSAyMSAzMCA0MSAyNiA1MS0zIDEwIDQgMjIgMTggMzIgMjYgMTkgMTkgMjEtMTYgNS0yMS0xMC0yMy0xNS0xNS0zMiA4LTE0IDctMjMtMy0zMy0xMi0xMi0xNC04LTEyIDI4IDEgMjQgMiA1NiAzIDcxIDEgMTYgNSAyNiAxMCAyMyA1LTQgMTIgMCAxNCA2IDQgOSA2IDEwIDYgMSAxLTYtMy0xNS05LTE4LTUtMy0xMC0xMy0xMC0yMiAwLTExIDYtMTQgMjMtOSAzMiA4IDEyNyA1MiAxNTcgNzMgMjEgMTUgMTkgMTEtOS0yMi0xOC0yMi02MC02OC05My0xMDItNzYtNzktNjktODIgOS01IDU3IDU1IDE3MiAxODAgMTQzIDE1NS0xNi0xNS0zNC0xNy0yNi00IDMgNS0yMC0yLTUyLTE1LTM3LTE2LTc1LTIzLTEwOC0yMmwtNTEgMSAzIDQwYzIgMjIgMCA0NS0zIDUxLTQgNi02IDM2LTUgNjZzLTQgNzUtMTEgMTAwYy0xMiAzOS0xOCA0NS00MyA0N2wtMjkgMSAyLTE3NnpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xNDI0IDIwODdjMy0xMCA2LTI3IDYtMzggMC0xMCA1LTE5IDEwLTE5IDEyIDAgMiA1MC0xMyA2NS03IDctOCA0LTMtOHpNMTgzMCAyMDY5YzAtNSA2LTkgMTQtOXMxNy02IDE5LTEyYzQtOCA2LTcgNiAzIDEgOS04IDE5LTE5IDIycy0yMCAxLTIwLTR6TTE4MjAgMjAyOWMxNC0xMyA2NC0zOSA3NS0zOSAzIDAgNSA0IDUgOHMtMTcgMTQtMzcgMjJjLTIxIDgtNDIgMTctNDggMTktNSAyLTMtMiA1LTEwek0xOTM0IDIwMjFjMTEtMTIgMjctMjEgMzctMjFzMjEtNCAyNC0xMGMzLTUgMjQtMTQgNDYtMjBzNDctMTQgNTYtMTdjMTEtNCAxNC0yIDkgNS00IDctMTQgMTItMjMgMTItMTYgMC03NyAyNS0xMzggNTZsLTMwIDE2IDE5LTIxek0yMDA2IDIwMjhjMy01IDgtNyAxMS00czE1LTEgMjctOWMxMS04IDI3LTE1IDM2LTE0IDggMC0xIDgtMjAgMTctNDQgMTktNjIgMjMtNTQgMTB6TTE5MjQgMTk3NWMxMS04IDI2LTE1IDMzLTE1czIxLTQgMzEtMTBjMzEtMTggMTAyLTM4IDEwMi0yOSAwIDUtNSA5LTExIDktMTAgMC0yMiA1LTEwNCA0MC0xNiA3LTM5IDE1LTUwIDE3LTIwIDMtMjAgMy0xLTEyek0xNjE4IDE5MThjLTUzLTM1LTQ0LTM2IDE4LTMgNTYgMzAgNTggMzIgMzkgMzItOCAwLTM0LTEzLTU3LTI5ek0xNzI2IDE5MzNjLTQtNS0xMS04LTE0LTgtNC0xLTIwLTktMzctMTktMjktMTctMjctMTcgMjUtMWwyNSA4LTIwLTI0Yy0xMS0xMy0yMi0yNi0yNS0yOXMtMjEtMjUtMzktNTAtNzQtODQtMTI1LTEzMmMtNTAtNDktODctODgtODItODggMTUgMCAxNTYgMTQyIDIxOSAyMjAgMzMgNDEgNjkgODMgODAgOTMgMTMgMTIgMTcgMjEgMTAgMjgtNSA1LTEzIDYtMTcgMnpNMzAwIDE4ODBjMC01IDUtMTAgMTAtMTAgNiAwIDEwLTcgMTAtMTVzNC0xNSA5LTE1YzE0IDAgMTgtMzEgMTAtNjItNy0yNi02LTI2IDE4LTE1IDE0IDYgMjEgMTMgMTYgMTQtMTUgNS0zIDU2IDE2IDcyIDE0IDEyIDEzIDEzLTEwIDctMTktNC0zMSAwLTQ0IDE0LTIwIDIyLTM1IDI2LTM1IDEwek0xNjA2IDE4NzVjLTExLTgtMjctMTUtMzUtMTUtOSAwLTI3LTktNDEtMjAtMTgtMTUtMjAtMTgtNi0xMyAzNSAxMiAxMTYgNTMgMTE2IDU4IDAgOS0xNSA1LTM0LTEwek0xNDM4IDE4MjNjMTItMiAzMC0yIDQwIDAgOSAzLTEgNS0yMyA0LTIyIDAtMzAtMi0xNy00ek0xNTg1IDE3MDdjLTEwMy0xMDYtMTAwLTEwOCA4LTcgNDIgMzkgMTE1IDEyMiAxMDUgMTE5LTEgMC01Mi01MS0xMTMtMTEyek0xNDkwIDE3NDVjLTEzLTE0LTIxLTI3LTE4LTMwIDItMyAxNyA5IDMzIDI1IDE2IDE3IDI0IDMwIDE5IDMwLTYgMC0yMS0xMS0zNC0yNXpNMzYwIDE3NTFjMC0xNyAyOS0yMCA0Mi0zIDEyIDE1IDExIDE2LTQgMy0xMi05LTE4LTEwLTE4LTIgMCA2LTQgMTEtMTAgMTEtNSAwLTEwLTQtMTAtOXpNMTU0MCAxNTU4Yy0xNC01LTU4LTEwLTk5LTEwLTU0IDAtNzAtMy02Mi0xMSAxNy0xNyAxNC00MC00LTMzLTEzIDUtMzUtMy02NS0yMi0yLTIgMi03IDktMTIgMTEtNiA5LTEzLTExLTMzLTI3LTI3LTI3LTQwIDAtMzAgMTAgNCAxMyAyIDgtNS0xMy0yMSAxMi0xMyAzOSAxMiAxOCAxNyAyMiAyNiAxMyAyOS05IDQtOSA2LTEgNiAzNCAyIDIxLTU0LTE2LTY4LTE3LTYtMjAtMTAtOC0xMCAyMC0xIDIzLTI5IDQtMzctNy0yLTEzLTEzLTE0LTIyLTEtMTUgNy0xOSA0MS0yMSA1NC0yIDg4IDIzIDEwNSA3OSA3IDIzIDMyIDY3IDU1IDk4IDY2IDg2IDY3IDExNiA2IDkwek00ODggMTI2M2MtMTYtMy0yOC05LTI4LTE0cy0xMC05LTIzLTljLTE3IDAtMzAtMTQtNTUtNTktMTctMzItMzktNjQtNDctNzEtOS03LTI1LTI2LTM2LTQybC0yMC0yOGgyMWMxMiAwIDE5IDQgMTYgOXMyIDE1IDExIDIyYzE0IDEyIDE2IDEyIDExLTEtMy04LTEzLTQ2LTIzLTg1LTIxLTg0LTEyLTEyMCAzMi0xMjggMzQtNiA4OC0yNCAxMjYtNDMgMTYtOCAzNS0xNCA0My0xNCAxMyAwIDQ0LTQ4IDQ0LTY5IDAtNi05LTE5LTIxLTMwLTEzLTEyLTE3LTIxLTEwLTI2IDYtMyAxMS0xNSAxMS0yNiAwLTEwIDQtMTkgOS0xOSA0IDAgMjgtMTcgNTItMzggNTgtNTIgODMtNjQgMTE0LTU2IDI5IDcgMjggMjctMSAzMy0xMCAyLTMxIDEzLTQ1IDI2LTM1IDI5LTIzIDU3IDIxIDQ4IDE5LTMgMzAtMSAzMCA2IDAgNi00IDExLTkgMTFzLTE3IDEyLTI2IDI3Yy0xOCAyNi0xOCAyNyAxNCA1NSAyNCAyMiA0MSAyOCA3NCAyNyAyMyAwIDM2LTMgMjktNi0yNS0xMCAxLTIzIDQ4LTIzIDM5IDAgNDgtMyA0NC0xNC03LTE5LTc2LTQ2LTExNC00Ni0zMyAwLTQxLTE3LTEyLTI2IDktMyAyNS0xMCAzNC0xNSAzMS0xNiA4NC0xMCAxMDMgMTEgMTAgMTEgMjggMjAgNDAgMjAgMTUgMCAzMiAxNCA1MSA0MiAyNiAzNyAyOSA0OSAyOSAxMjItMSA0NS00IDk2LTcgMTE0LTQgMTktMiAzMiA0IDMyczggMTQgMyAzNmMtOSA1Mi0yNSA4My00NyA5MC0xMCAzLTE2IDgtMTQgMTJzLTI2IDgtNjMgMTBjLTU2IDItNjkgNi04NiAyNy0xMiAxNC0yNiAyNS0zMSAyNS02IDAtMTkgOS0zMCAyMS0yMiAyNS02OSA1MS03NyA0My0zLTMtMTYgMC0yOSA3LTIzIDEzLTExMSAxOS0xNjAgMTJ6bTQ0LTE3MmMxMy00IDU3LTExIDk4LTE1IDcwLTYgNzQtNSA1NSAxMC0yMCAxNi0xOSAxNiA1IDkgNDItMTEgODAtMjcgODAtMzQgMC04LTExMi00MS0xNDAtNDEtMTEgMC0yMC03LTIwLTE1cy01LTE1LTExLTE1LTkgOS02IDIwYzQgMTYgMSAyMC0xMyAxOC0xOS0zLTExMCA0OS0xMTAgNjMgMCAxMSAzMiAxMSA2MiAwem0xMTMtMTI4YzUxLTcgNjUtMTkgNjQtNTJsLTEtMjYtNyAyNGMtOCAzMC0yOSAzOS0zNyAxNy04LTIwLTU0LTIxLTU0LTIgMCAyNC0yMCAyOS00MCAxMS0yMi0yMC01NS0xMy00NiAxMCAzIDggMSAxNS01IDE1cy04IDQtNCA5YzUgOSAzOCA4IDEzMC02ek0xMTA1IDEwNjNjLTExLTExLTMwLTI0LTQyLTI3LTE3LTUtMjMtMTUtMjMtMzYgMC0yNCA1LTMwIDMwLTM1IDM3LTggNjgtNDkgNTItNjgtNy04LTktMjktNS01MiA0LTI3IDMtMzYtNS0zMS0xNiA5LTE1LTcgMC0yMiAyOC0yOCAzNy0xMyA0MCA3MWwzIDgyIDI4LTU1YzE5LTM4IDI1LTQ2IDIxLTI1LTQgMTctMTUgNDQtMjUgNjEtMjMgMzgtMjYgNjYtNCAzOCAxNC0xNyAxNS0xNiAxIDEzLTkgMTctMjEgMzMtMjcgMzVzLTE0IDE5LTE4IDM4bC03IDM0LTE5LTIxek0yMjUgOTIzYzMtNyAxLTEzLTUtMTMtNyAwLTIwLTEwLTMxLTIyLTIzLTI5LTI1LTEyMy00LTE5MyA4LTI3IDEyLTUyIDktNTctMy00IDAtOCA3LTggMTIgMCA3OS02NCA3OS03NSAwLTQgNi0xMyAxNC0yMCAxMi0xMiAxNS0xMiAyMCAxIDMgOC0xIDE3LTkgMjEtOSAzLTE0IDEzLTEzIDIyIDIgMTAtMyAxNS0xNSAxNC0xNC0xLTE3IDQtMTQgMTggMyAxMCAxIDIyLTUgMjUtNSAzLTcgMTItNCAxOSAyIDctMiAxNi05IDE5LTggMy0xMiAxNC0xMCAyNiAyIDExLTEgMjAtNyAyMHMtNSA3IDMgMTdjMTIgMTUgMTIgMTYtMyAxMC0yMS03LTI0IDEzLTYgMzEgNiA2IDEyIDIxIDEzIDMyIDIgMTkgMCAxOS0yNCA1LTE1LTktOS0xIDE0IDIwIDIyIDIwIDM2IDM1IDMwIDM0LTI2LTQtNDIgMi00MiAxNiAwIDE4IDkgMTkgMjUgMyAyMS0yMSAyMS00IDAgMjItMTEgMTQtMTcgMTktMTMgMTN6TTEyNDYgNzY4YzMtNC0yLTgtMTAtOC0xMCAwLTEzLTYtMTAtMTUgNC04IDEwLTEzIDE0LTEwIDUgMyAzLTgtMy0yNC05LTI1LTE0LTI4LTI5LTIwLTEzIDctMTggNi0xNi0zIDItNy00LTEyLTEyLTEwLTEzIDItMTMgMSAwLTEwIDgtNyAxNC0yMyAxMi0zNS0yLTE2LTExLTIzLTM1LTI1LTMwLTMtMzItNS0yOS0zOCAyLTI5IDAtMzItOC0xNy02IDktMTcgMTctMjUgMTdzLTE5IDktMjUgMjFjLTEwIDE4LTI1IDE5LTI1IDEgMC00LTMtMTItNy0xOHMtMy0yNiAyLTQ1YzEyLTQyIDEyLTcyIDAtNDEtNiAxMy0xOCAyMi0zMSAyMi0xNSAwLTE5IDQtMTUgMTYgMyA5IDIgMTItNSA5LTYtNC04LTEzLTUtMjFzMi0xMy0yLTEzYy0yOSA1LTM3LTMtMzctNDAtMS0zNCAxLTM3IDEyLTIzIDEyIDE2IDEzIDE2IDcgMC04LTIzIDE4LTI0IDM2LTMgNyA4IDIxIDE1IDMyIDE1IDIyIDAgMjUgNy0yOC03NS0zNC01MiAxMy0yMiA2MiA0MGwxNiAyMC03LTIwYy0xNS00NS0xNi00OS0yLTI1IDggMTQgMTggMzkgMjEgNTYgNCAxNyAyNiA1MiA1MCA3NiA1MCA1MiA5MyAxMjUgMTA5IDE4NiA2IDIzIDE1IDQyIDE5IDQyczUgNiAyIDEzYy0zIDgtMTEgMTQtMTkgMTRzLTEyLTQtOS05em0tMTYxLTIwMmMxNC04IDIyLTE3IDE2LTIwLTUtNC0xMy0xLTE3IDUtNCA4LTkgNy0xNS0yLTYtMTEtMTEtMTEtMjAtMi02IDYtOCAxNi01IDIyIDkgMTQgOCAxNCA0MS0zek0xNjAgNDk4YzAtMyA3LTE4IDE1LTM0IDEwLTIxIDExLTMxIDMtNDFzLTgtMjggMS02NmMxMi01NCA3Mi0xODMgODEtMTc2IDMgMiAyNC0xMCA0NS0yNyA1MC0zOSA3My01MSAxNDMtNzUgMTY0LTU2IDMxMC0zNyA0MjEgNTYgMzMgMjggNDIgMjQgMTUtNnMxMS0xOCA0NCAxNGMyNiAyNSA0NCA4NiAyMiA3Mi02LTMtMTAtMTctMTAtMzBzLTUtMjctMTAtMzBjLTYtNC0xMCA5LTEwIDMyIDAgMjgtMyAzNC0xMCAyMy04LTEyLTE0LTEwLTM3IDE2LTM0IDM4LTEwMiA1NC0yMzIgNTQtODQgMC04Ny0xLTE1Ni00NS04NC01My04OS01MS0xNTIgNTEtMjMgMzgtNjIgODgtODcgMTExcy00NiA0Ni00NiA1M2MwIDYtOSAyMC0yMCAzMnMtMjAgMTktMjAgMTZ6TTI3MCAxNjNjMC0xNiA2My02OSAxMTAtOTMgMjItMTEgNDAtMTggNDAtMTUgMCAyLTE1IDEyLTMyIDIxLTE4IDktNTIgMzUtNzUgNTctMjQgMjMtNDMgMzYtNDMgMzB6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNNzg1IDU1Yy0yOS0xNC04Ni0yOC0xMzUtMzRsLTg1LTEwIDg0IDRjNjAgMyA5OCAxMSAxMzcgMjkgMzAgMTQgNTQgMjcgNTQgMzAgMCA3IDUgOS01NS0xOXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzliNWE1ZlwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNNDg4IDEyNjNjLTE2LTMtMjgtOS0yOC0xNHMtNy05LTE2LTljLTIxIDAtMzgtMTgtNzgtODctMTktMzItNDQtNjYtNTUtNzUtMjUtMjEtMjctMzgtNS0zOCA4IDAgMTMgNCAxMCA5czIgMTUgMTEgMjJjMTQgMTIgMTYgMTIgMTEtMS0zLTgtMTMtNDctMjItODUtMjEtODUtMTItMTIwIDMxLTEyOCAzNC02IDg4LTI0IDEyNi00MyAxNi04IDM1LTE0IDQzLTE0IDEzIDAgNDQtNDggNDQtNjkgMC02LTktMTktMjEtMzAtMTMtMTItMTctMjEtMTAtMjYgNi0zIDExLTE1IDExLTI2IDAtMTAgNC0xOSA5LTE5IDQgMCAyOC0xNyA1Mi0zOCA1OC01MiA4My02NCAxMTQtNTYgMjkgNyAyOCAyNy0xIDMzLTEwIDItMzEgMTMtNDUgMjYtMzUgMjktMjMgNTcgMjEgNDggMTktMyAzMC0xIDMwIDYgMCA2LTQgMTEtOSAxMXMtMTcgMTItMjYgMjdjLTE4IDI2LTE4IDI3IDE0IDU1IDI0IDIyIDQxIDI4IDc0IDI3IDIzIDAgMzYtMyAyOS02LTI1LTEwIDEtMjMgNDgtMjMgMzkgMCA0OC0zIDQ0LTE0LTctMTktNzYtNDYtMTE0LTQ2LTMzIDAtNDEtMTctMTItMjYgOS0zIDI1LTEwIDM0LTE1IDMxLTE2IDg0LTEwIDEwMyAxMSAxMCAxMSAyOCAyMCA0MCAyMCAxNSAwIDMyIDE0IDUxIDQyIDI2IDM3IDI5IDQ5IDI5IDEyMi0xIDQ1LTQgOTYtNyAxMTQtNCAxOS0yIDMyIDQgMzJzOCAxNCAzIDM2Yy0xNSA4My0zNyAxMDAtMTM3IDExMS00NyA1LTYzIDExLTc1IDMwLTggMTItMjEgMjMtMjggMjMtNiAwLTIwIDktMzEgMjEtMjIgMjUtNjkgNTEtNzcgNDMtMy0zLTE2IDAtMjkgNy0yMyAxMy0xMTEgMTktMTYwIDEyem00NC0xNzJjMTMtNCA1Ny0xMSA5OC0xNSA3MC02IDc0LTUgNTUgMTAtMjAgMTYtMTkgMTYgNSA5IDQyLTExIDgwLTI3IDgwLTM0IDAtOC0xMTItNDEtMTQwLTQxLTExIDAtMjAtNy0yMC0xNXMtNS0xNS0xMS0xNS05IDktNiAyMGM0IDE2IDEgMjAtMTMgMTgtMTktMy0xMTAgNDktMTEwIDYzIDAgMTEgMzIgMTEgNjIgMHptMTEzLTEyOGM1MS03IDY1LTE5IDY0LTUybC0xLTI2LTcgMjRjLTggMzAtMjkgMzktMzcgMTctOC0yMC01NC0yMS01NC0yIDAgMjQtMjAgMjktNDAgMTEtMjItMjAtNTUtMTMtNDYgMTAgMyA4IDEgMTUtNSAxNXMtOCA0LTQgOWM1IDkgMzggOCAxMzAtNnpNMTA2OCAxMDM4Yy0yMi04LTI4LTE2LTI4LTM4IDAtMjQgNS0zMCAzMC0zNSAzNy04IDY4LTQ5IDUyLTY4LTctOC05LTI5LTUtNTIgNC0yNyAzLTM2LTUtMzEtMTYgOS0xNS03IDAtMjIgMjgtMjggMzctMTMgNDAgNzFsMyA4MiAyOC01NWMxOS0zOCAyNS00NiAyMS0yNS00IDE3LTE1IDQ0LTI1IDYxLTIzIDM5LTI2IDY2LTMgMzggMTQtMTggMTQtMTggMyA2LTE0IDI5LTQ4IDY0LTY5IDcyLTggMy0yNyAxLTQyLTR6TTI1NyA5NTNjLTExLTEwLTgtNTMgMy01MyA2IDAgMTAgMTQgMTAgMzAgMCAzMS0yIDM1LTEzIDIzek0xMjQ2IDc2OGMzLTQtMi04LTEwLTgtMTAgMC0xMy02LTEwLTE1IDQtOCAxMC0xMyAxNC0xMCA1IDMgMy04LTMtMjQtOS0yNS0xNC0yOC0yOS0yMC0xMyA3LTE4IDYtMTYtMyAyLTctNC0xMi0xMi0xMC0xMyAyLTEzIDEgMC0xMCA4LTcgMTQtMjMgMTItMzUtMi0xNi0xMS0yMy0zNS0yNS0zMC0zLTMyLTUtMjktMzggMi0yOSAwLTMyLTgtMTctNiA5LTE3IDE3LTI1IDE3cy0xOSA5LTI1IDIxYy0xMCAxOC0yNSAxOS0yNSAxIDAtNC0zLTEyLTctMThzLTMtMjYgMi00NWMxMi00MiAxMi03MiAwLTQxLTYgMTMtMTggMjItMzEgMjItMTUgMC0xOSA0LTE1IDE2IDMgOSAyIDEyLTUgOS02LTQtOC0xMy01LTIxczItMTMtMi0xM2MtMjkgNS0zNy0zLTM3LTQwLTEtMzQgMS0zNyAxMi0yMyAxMiAxNiAxMyAxNiA3IDAtOC0yMyAxOC0yNCAzNi0zIDEyIDE0IDUwIDIxIDUwIDEwIDAtMy0xNC0yNC0zMC00Ny00Mi01Ny0yNy02MyAyMi04IDM0IDM3IDM5IDQxIDM0IDIwLTUtMTctNC0yMCAyLTEwIDYgOCAxMyAyOSAxNiA0NiA0IDE3IDI2IDUyIDUwIDc2IDUwIDUyIDkzIDEyNSAxMDkgMTg2IDYgMjMgMTUgNDIgMTkgNDJzNSA2IDIgMTNjLTMgOC0xMSAxNC0xOSAxNHMtMTItNC05LTl6bS0xNjEtMjAyYzE0LTggMjItMTcgMTYtMjAtNS00LTEzLTEtMTcgNS00IDgtOSA3LTE1LTItNi0xMS0xMS0xMS0yMC0yLTYgNi04IDE2LTUgMjIgOSAxNCA4IDE0IDQxLTN6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgZmlsbD1cIiM1OTgyOTFcIlxuICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgZD1cIk02MjggMTNjMTItMiAzMC0yIDQwIDAgOSAzLTEgNS0yMyA0LTIyIDAtMzAtMi0xNy00elwiXG4gICAgICA+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiIzlkNzg2YlwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTQ2IDIyMjVjNC05IDIwLTMxIDM2LTQ4bDI5LTMyLTEzIDM0Yy04IDE5LTI0IDQxLTM2IDQ5LTIwIDEzLTIyIDEzLTE2LTN6TTE2NjMgMjExM2MxNC0yNyAzMy02OCA0My05MnMyNy01NSAzNy02OGMyMi0yNyAxNzQtMTA3IDIyNy0xMTggMTktNCAzOC0xMiA0MS0xNyA4LTEzIDcxIDQyIDY3IDU5LTIgOC0zNCAyNi03MyAzOS0zOCAxNC0xMDEgNDAtMTQwIDYwbC03MCAzNS0yMC0yNmMtMjUtMzEtMzAtMzEtMzEtMi01IDczLTU3IDE3Ny05MCAxNzctMTIgMC0xMS05IDktNDd6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMjEwIDIxMzZjMC0zIDIwLTQ1IDQ1LTkyIDI1LTQ2IDQ1LTg3IDQ1LTg5IDAtMTQtMjYtMS01MSAyNi0zNSAzNy0zNiAzNC02LTI0IDIxLTQxIDk3LTEyMCA5Ny0xMDAgMCA1LTMgMTMtNyAxNi0zIDQtNyAxOC05IDMxLTUgNDgtMTE0IDI3MC0xMTQgMjMyek0xMzE5IDIwOTd2LTE5N2MyLTE4MSA4LTI3NiAxOS0yNjYgMyAzIDEwLTEgMTYtMTAgMTAtMTMgMTYtOSA0NiAyMyAxOSAyMSAyNiAzMCAxNCAyMC0yNi0yMi0zNy0yMi0yNSAxIDEzIDI0IDEzIDI4My0xIDM2Ny04IDUyLTEzIDY1LTE5IDUwcy04LTE2LTgtNGMtMSAxOS00MSAzMy00MiAxNnpNMTgyNyAyMDI1YzI0LTE3IDczLTM3IDczLTMwIDAgNi03NiA0NS04NyA0NS00IDAgMi03IDE0LTE1ek0xOTM1IDIwMjFjMTMtMTIgMTM2LTYzIDE0MS01OCAyIDItMzEgMTgtNzQgMzUtNDIgMTgtNzIgMjgtNjcgMjN6TTE5MTAgMTk4NmMwLTYgMTU3LTY2IDE3Mi02NiAxMSAxLTE1NiA3MC0xNjggNzAtMiAwLTQtMi00LTR6TTE2OTAgMTkxNWMtMjUtMTMtNDItMjQtMzktMjQgMTMtMiA3OCAyOSA4NCAzOSA4IDEyIDEwIDEzLTQ1LTE1ek0xNTczIDE4NjFjLTI4LTE0LTU1LTMwLTU5LTM0LTExLTEwIDg2IDMyIDExMSA0OSAzMCAyMSA2IDE0LTUyLTE1elwiPjwvbW90aW9uLnBhdGg+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTE1NTUgMTgxOWMtMjctMTAtNjYtMTgtODYtMTktMjggMC0zOS02LTQ5LTI1LTctMTQtMTAtMjgtNy0zMiA5LTggMTMzIDQyIDE2NSA2NyAxMyAxMSAyOSAxNyAzNSAxMyA2LTMgNy0xIDMgNS00IDctOCAxMS05IDExLTEtMS0yNC0xMC01Mi0yMHpNMTQ0MyAxODIzYzktMiAyNS0yIDM1IDAgOSAzIDEgNS0xOCA1cy0yNy0yLTE3LTV6TTE1NzAgMTc3NWMtMTMtMTQtMTktMjUtMTQtMjUgOCAxIDUwIDUwIDQxIDUwLTIgMC0xNC0xMS0yNy0yNXpNMTQ5MSAxNzQ1Yy0xMy0xNC0yMi0yOC0xOS0zMCAzLTMgMTcgOCAzMSAyNSAzMyAzNiAyMiA0MC0xMiA1ek0xNDIxIDE3MjZjLTEzLTctMTktMTYtMTQtMTkgNi00IDE4IDIgMjggMTMgMjEgMjMgMTkgMjQtMTQgNnpNMTQ5NSAxNjk4bC00MC00MyA0MyA0MGMzOSAzNiA0NyA0NSAzOSA0NS0yIDAtMjEtMTktNDItNDJ6TTQ4OCAxMjYzYy0xNi0zLTI4LTktMjgtMTRzLTctOS0xNi05Yy0yMSAwLTM4LTE4LTc4LTg3LTE5LTMyLTQ0LTY2LTU1LTc1LTEyLTEwLTIxLTIyLTIxLTI4IDAtNSA5LTEgMjEgMTEgMTEgMTEgMjIgMTkgMjQgMTdzLTUtMzgtMTYtODFjLTI1LTkzLTE4LTEyOCAyNy0xMzggNDAtMTAgOTMtMjggMTI3LTQ1IDE2LTggMzUtMTQgNDMtMTQgMTMgMCA0NC00OCA0NC02OSAwLTYtOS0xOS0yMS0zMC0xMy0xMi0xNy0yMS0xMC0yNiA2LTMgMTEtMTUgMTEtMjYgMC0xMCA0LTE5IDktMTkgNCAwIDI4LTE3IDUyLTM4IDU4LTUyIDgzLTY0IDExNC01NiAyOSA3IDI4IDI3LTEgMzMtMTAgMi0zMSAxMy00NSAyNi0zNSAyOS0yMyA1NyAyMSA0OCAxOS0zIDMwLTEgMzAgNiAwIDYtNCAxMS05IDExcy0xNyAxMi0yNiAyN2MtMTggMjYtMTggMjcgMTQgNTUgMjQgMjIgNDEgMjggNzQgMjcgMjMgMCAzNi0zIDI5LTYtMjUtMTAgMS0yMyA0OC0yMyAzOSAwIDQ4LTMgNDQtMTQtNy0xOS03Ni00Ni0xMTQtNDYtMzMgMC00MS0xNy0xMi0yNiA5LTMgMjUtMTAgMzQtMTUgMzEtMTYgODQtMTAgMTAzIDExIDEwIDExIDI4IDIwIDQwIDIwIDE1IDAgMzIgMTQgNTEgNDIgMjYgMzcgMjkgNDkgMjkgMTIyLTEgNDUtNCA5Ni03IDExNC00IDE5LTIgMzIgNCAzMnM4IDE0IDMgMzZjLTE1IDgzLTM3IDEwMC0xMzcgMTExLTQ3IDUtNjMgMTEtNzUgMzAtOCAxMi0yMSAyMy0yOCAyMy02IDAtMjAgOS0zMSAyMS0yMiAyNS02OSA1MS03NyA0My0zLTMtMTYgMC0yOSA3LTIzIDEzLTExMSAxOS0xNjAgMTJ6bTE2NS0xNTNjMTAgMCA0MS0xMCA2OC0yMSA0OC0yMSA2NC0zOSAzMy0zOS04IDAtNDAtMTEtNzAtMjUtMzEtMTQtNTktMjMtNjQtMjAtNCAzLTExLTEtMTMtNy00LTktOC0xMC0xNC0zLTQgNi0zNCAyOC02NSA0OS02MCA0MS03MSA1Ni00MCA1NiAxMCAwIDIyIDQgMjggOSAxMiAxMiA5NiAxOSAxMDkgOSA1LTUgMTctOCAyOC04em0tOC0xNDdjNTEtNyA2NS0xOSA2NC01MmwtMS0yNi03IDI0Yy04IDMwLTI5IDM5LTM3IDE3LTgtMjAtNTQtMjEtNTQtMiAwIDI0LTIwIDI5LTQwIDExLTIyLTIwLTU1LTEzLTQ3IDEwIDQgMTAgMSAxMi0xMSA4LTE1LTYtMTUtNC00IDkgMTMgMTcgMzAgMTcgMTM3IDF6TTEwOTAgMTA0MGMwLTUtMTAtMTAtMjItMTItMTYtMi0yNC0xMS0yNi0yOS0zLTIyIDItMjcgMjYtMzIgNDUtOSA2MS0zMSA1OC04MC01LTc1LTYtNzgtMTYtNzItNSAzLTEwIDItMTAtNCAwLTEzIDQwLTM1IDQ4LTI2IDQgMyAwIDEwLTggMTUtMTIgOC0xMiAxMC0xIDEwIDIwIDAgMTEgMTIzLTEyIDE0OC05IDEwLTE0IDIyLTEwIDI1IDEyIDEzIDIxIDcgMzMtMjMgNy0xNyAxNy0zMyAyMi0zNiA2LTQgNSAzLTEgMTQtMTYgMzEtMTMgNDkgNSAyNiAxNC0xOCAxNC0xOCAzIDYtMjEgNDMtODkgOTctODkgNzB6TTI1OCA5MjVjMi0xNCA2LTI1IDgtMjVzNCAxMSA0IDI1LTQgMjUtOSAyNWMtNCAwLTYtMTEtMy0yNXpcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xMDYwIDkxOWM3LTExIDE0LTE5IDE2LTE2IDcgNy03IDM3LTE3IDM3LTYgMC01LTkgMS0yMXpNMjE5IDkxM2MtNDUtMTAtNjMtMTIyLTM0LTIxOCA4LTI3IDEyLTUyIDktNTctMy00IDAtOCA3LTggMTIgMCA3OS02NCA3OS03NSAwLTQgNi0xMyAxNC0yMCAxMi0xMiAxNS0xMiAyMCAxIDMgOC0xIDE3LTkgMjEtOSAzLTE0IDEzLTEzIDIyIDIgMTAtMyAxNS0xNSAxNC0xNC0xLTE3IDQtMTQgMTggMyAxMCAxIDIyLTUgMjUtNSAzLTcgMTItNCAxOSAyIDctMiAxNi05IDE5LTggMy0xMiAxNC0xMCAyNiAyIDExLTEgMjAtNyAyMHMtNSA3IDMgMTdjMTIgMTUgMTIgMTYtMyAxMC0yMS03LTI0IDEzLTYgMzEgNiA2IDEyIDIxIDEzIDMyIDIgMTkgMCAxOS0yNCA1LTE1LTktOS0xIDE0IDIwIDIyIDIwIDM2IDM1IDMwIDM0LTI2LTQtNDIgMi00MiAxNiAwIDE4IDkgMTkgMjUgM3MyMy03IDkgMTJjLTcgOS0xOSAxNC0yOCAxM3pNMTI1MyA4MTZjMC0xOCAzLTI0IDktMTggNyA3IDcgMTYgMCAyOC04IDE0LTkgMTMtOS0xMHpNMTI0NiA3NjhjMy00LTItOC0xMC04LTEwIDAtMTMtNi0xMC0xNSA0LTggMTAtMTMgMTQtMTAgNSAzIDMtOC0zLTI0LTktMjUtMTQtMjgtMjktMjAtMTMgNy0xOCA2LTE2LTMgMi03LTQtMTItMTItMTAtMTMgMi0xMyAxIDAtMTAgOC03IDE0LTIzIDEyLTM1LTItMTYtMTEtMjMtMzUtMjUtMzAtMy0zMi01LTI5LTM4IDItMjkgMC0zMi04LTE3LTYgOS0xNyAxNy0yNSAxN3MtMTkgOS0yNSAyMWMtMTAgMTgtMjUgMTktMjUgMSAwLTQtMy0xMi03LTE4cy0zLTI2IDItNDVjMTItNDIgMTItNzIgMC00MS02IDEzLTE4IDIyLTMxIDIyLTE1IDAtMTkgNC0xNSAxNiAzIDkgMiAxMi01IDktNi00LTgtMTMtNS0yMXMyLTEzLTItMTNjLTI5IDUtMzctMy0zNy00MC0xLTM0IDEtMzcgMTItMjMgMTIgMTYgMTMgMTYgNyAwLTgtMjMgMTgtMjQgMzYtMyAxNyAyMCA2MCAxOSA3NS0xIDEwLTE1IDEzLTEzIDE4IDEyIDMgMTYgMjcgNTIgNTMgNzkgNDYgNDkgMTE0IDE3MiAxMTQgMjA3IDAgMTAgNCAxOCAxMCAxOCA1IDAgNyA2IDQgMTMtMyA4LTExIDE0LTE5IDE0cy0xMi00LTktOXptLTE2MS0yMDJjMTQtOCAyMi0xNyAxNi0yMC01LTQtMTMtMS0xNyA1LTQgOC05IDctMTUtMi02LTExLTExLTExLTIwLTItNiA2LTggMTYtNSAyMiA5IDE0IDggMTQgNDEtM3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgICA8bW90aW9uLnBhdGggZD1cIk0xMTI4IDY0M2MxMC00IDktOC01LTE5LTIwLTE1LTYtMTkgMTYtNSAxNSAxMCA3IDMxLTEyIDMwLTggMC04LTIgMS02ek0zNjMgNDk5YzEtMjcgMTgtMzIgMzgtMTIgOSA5IDcgMTEtNyA5LTExLTItMjIgNC0yNiAxMy00IDExLTYgNy01LTEwek04NzAgNDc2YzAtMTEtNS0xNi0xNC0xMy04IDMtMTcgMC0yMC04LTYtMTcgMjUtMzAgMzQtMTQgNiA4IDkgNyAxMy0yIDMtOSA2LTcgNiA2IDAgMTEtNCAyNy05IDM1LTggMTMtMTAgMTItMTAtNHpNODk3IDQ2OGM3LTggMTAtMTggNi0yMS0xMC0xMCAxMC04IDI3IDNzMTQgMTUtMjAgMjVjLTIxIDctMjMgNi0xMy03ek0xMDQwIDQyNWMtNy04LTktMTUtNC0xNXMtMi05LTE2LTIwYy0xNC0xMC0yMS0yMi0xNy0yNiA4LTggNDQgMjIgNTggNDggMTIgMjItNSAzMi0yMSAxM3pcIj48L21vdGlvbi5wYXRoPlxuICAgICAgPC9tb3Rpb24uZz5cbiAgICAgIDxtb3Rpb24uZyBmaWxsPVwiI2IyODU1Y1wiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPG1vdGlvbi5wYXRoIGQ9XCJNMTk4IDg2M2MtMjQtNi0zMy00OC0xOS04MCA2LTE0IDktMzQgNS00NS00LTE0LTMtMTggNi0xMyA3IDQgMTAgMiA5LTZzMC0yMSA0LTI5YzMtOCA4LTIyIDExLTMwczQgNSAzIDMwLTYgNDgtMTEgNTFjLTUgNC03IDEzLTQgMjAgMyA4IDYgMTkgOCAyNCAxIDYgNyAxNyAxMyAyNXMyIDYtMTEtNGMtMjgtMjQtMjgtMTMtMSAzMCAyMSAzNCAyMCAzNi0xMyAyN3pNMTIxNCA2NjVjMy04IDAtMTQtNi0xMi03IDEtMTQtOS0xNy0yM3MtMTItMjUtMTgtMjZjLTI3LTItMzMtNC0zMi0xMSAxLTUgMC0xMS0xLTE1LTUtMTUtOC0yOC0xMC00NS0xLTExLTMtMTMtNy02LTMgMTAtOSA5LTIwLTMtOS04LTI0LTEzLTM0LTExLTExIDMtMTkgMS0xOS00czUtOSAxMS05IDQtNy01LTE1Yy04LTgtMTktMTUtMjUtMTVzLTExLTUtMTEtMTBjMC02IDE0LTQgMzUgNCA0MSAxNyA3MyAzNSA2MyAzNi0zIDAgNyAxNCAyMyAzMXMyNiAzNSAyMyA0MCAwIDggNiA3YzctMiAyNSAyMSA0MiA1MCAyNSA0NCAyNyA1MiAxMyA1Mi0xMSAwLTE1LTUtMTEtMTV6TTIzMCA2MzJjMC01IDctMTUgMTUtMjJzMTUtOCAxNS0yYzAgNS03IDE1LTE1IDIycy0xNSA4LTE1IDJ6TTk3NSA0NjVjLTMtOC03LTIyLTEwLTMwLTYtMjAgMi0xOSAyNyA0IDExIDExIDE4IDI1IDE1IDMzLTQgOC02IDctNi01LTEtMTAtNi0xNS0xMS0xMi02IDQtOCAxMS01IDE2IDQgNSA0IDkgMCA5LTMgMC04LTctMTAtMTV6XCI+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDwvbW90aW9uLmc+XG4gICAgICA8bW90aW9uLnBhdGhcbiAgICAgICAgZmlsbD1cIiNhMjdiOGFcIlxuICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgZD1cIk0xMDcwIDQ0NGMwLTEwLTMtMTQtNy0xMS04IDktMzQtMTMtMjgtMjQgMy00LTQtMTMtMTUtMTktMjAtMTEtMjctMzAtMTEtMzAgMTUgMCA4MiA4OCA3MSA5NS01IDMtMTAtMi0xMC0xMXpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgICA8bW90aW9uLmcgZmlsbD1cIiM4Zjk0OWJcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxtb3Rpb24ucGF0aCBkPVwiTTM0MCAxNzgzYzAtMTMgNS0yMyAxMC0yMyAxMyAwIDEzIDExIDAgMzAtOCAxMi0xMCAxMS0xMC03ek0xMDQyIDQxOWMtNi0xNS0xOC0yOS0yNi0zMi05LTQtMTYtMTEtMTYtMTcgMC0xNiAzNyA3IDUwIDMxIDYgMTEgOSAyNSA3IDMyLTMgNy05IDAtMTUtMTR6TTE5MyA0MTRjLTE2LTQwLTctOTkgMjYtMTY2IDE4LTM3IDQwLTczIDQ5LTgwIDEyLTEwIDExLTctMyAxNy0xNyAyNy0xNCAyNiAyNi0xMSA2MS01NiAxMDItNzkgMTkwLTEwMyAxMzMtMzcgMjYyLTIyIDM1MyA0MCA1MiAzNiA2MiA1OSA0MSAxMDItMTQgMzEtMjQgMzctNjYgNDYtMjggNi05NiAxMS0xNTIgMTEtMTAwIDAtMTA0LTEtMTU0LTM0LTk1LTYyLTEwNi02MC0xNjIgMzItMjIgMzctNjMgODktOTAgMTE2LTQ1IDQ0LTUxIDQ4LTU4IDMwelwiPjwvbW90aW9uLnBhdGg+XG4gICAgICA8L21vdGlvbi5nPlxuICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgIGZpbGw9XCIjY2RhYmM1XCJcbiAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgIGQ9XCJNMTA0MSA0MTZjLTYtMTQtMTUtMjYtMjAtMjZzLTExLTctMTUtMTVjLTQtMTItMi0xMyAxMi02IDIxIDExIDQ4IDU4IDM5IDY3LTQgNC0xMS01LTE2LTIwelwiXG4gICAgICA+PC9tb3Rpb24ucGF0aD5cbiAgICAgIDxtb3Rpb24ucGF0aFxuICAgICAgICBmaWxsPVwiI2IyYmNjMlwiXG4gICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICBkPVwiTTE5NSAzOTFjLTQtMjYtMS01MSAxMC03NyA4LTIxIDEzLTQ0IDExLTUxLTMtNyAwLTE1IDYtMTkgNy01IDktMiA0IDctNCA4LTEgNSA2LTUgNTktODkgMTUxLTE1MCAyNzMtMTgxIDEzMC0zMyAyNzEtNyAzNDYgNjUgMzkgMzcgNDAgMzggMjYgNzEtMTkgNDgtNTIgNjAtMTgwIDY2LTExOSA2LTE0Ny0xLTIyOS01OC00Ny0zNC03NC0yNS0xMTQgMzYtMjAgMzAtNDQgNTUtNTMgNTUtMjggMS01OCAzMy03NiA4My0xMCAyNi0xOSA0Ny0yMCA0Ny0yIDAtNi0xNy0xMC0zOXpcIlxuICAgICAgPjwvbW90aW9uLnBhdGg+XG4gICAgPC9tb3Rpb24uc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU3ZnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGVMYWJlbCh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtZ3JheS04MDAgZm9udC1ib2xkICR7Y2xhc3NOYW1lfWB9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxNZXRhKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbWFnZSxcbiAgdXJsLFxuICBrZXl3b3Jkcyxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtgQFRlcHlUaGFpYH0gLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIlxuICAgICAgICBjb250ZW50PXtpbWFnZSA/ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyA6ICdzdW1tYXJ5J31cbiAgICAgIC8+XG4gICAgICB7dGl0bGUgJiYgKFxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICl9XG4gICAgICB7Lyoge3VybCAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz59ICovfVxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz59XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YGh0dHBzOi8vdGVweS5kZXYke2ltYWdlfWB9IC8+XG4gICAgICApfVxuICAgICAge2tleXdvcmRzICYmIDxtZXRhIHByb3BlcnR5PVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3Jkc30gLz59XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJUZXB5IFRoYWkncyBQZXJzb25hbCBTaXRlXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlOmFsdFwiXG4gICAgICAgIGNvbnRlbnQ9XCJUZXB5IFRoYWkncyBQZXJzb25hbCBTaXRlIEltYWdlIENhcmRcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBTa2lwTmF2Q29udGVudCB9IGZyb20gJ0ByZWFjaC9za2lwLW5hdic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZSc7XG5pbXBvcnQgUG9zdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0SXRlbSc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2xpYi9hcGknO1xuaW1wb3J0IFNvY2lhbE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9tZXRhJztcbmltcG9ydCBUaXRsZUxhYmVsIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVMYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgYWxsUG9zdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8U29jaWFsTWV0YVxuICAgICAgICBpbWFnZT1cIi9pbWFnZXMvb2ctaW1hZ2UuanBnXCJcbiAgICAgICAgdGl0bGU9XCJUZXB5IFRoYWkncyBQZXJzb25hbCBTaXRlXCJcbiAgICAgICAgdXJsPVwiaHR0cHM6Ly90ZXB5LmRldlwiXG4gICAgICAgIGRlc2NyaXB0aW9uPXtgUGVyc29uYWwgd2Vic2l0ZSBmb3IgVGVweSBUaGFpLiBIZSB3cml0ZXMgYWJvdXQgRnJvbnRlbmQgYW5kIEdlbmVyYWwgUHJvZ3JhbW1pbmcuYH1cbiAgICAgICAga2V5d29yZHM9XCJUZXB5IFRoYWksIHRlcHksIHRlcHl0aGFpLHRlcHl0aGFpIHJlYWN0LCB0ZXB5dGhhaSBibG9nLCByZWFjdGpzLCByZWFjdC5qcywgbmV4dC5qcywgZ2F0c2J5LmpzLGZyb250ZW5kXCJcbiAgICAgIC8+XG4gICAgICA8U2tpcE5hdkNvbnRlbnQgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgICA8UHJvZmlsZSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaXRsZUxhYmVsPlJlY2VudCBXcml0aW5nOjwvVGl0bGVMYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgICB7YWxsUG9zdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgIGFsbFBvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBvc3RJdGVtIHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5zbHVnfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy14cyBtdC04IG1kOm10LTBcIj5cbiAgICAgICAgICAgIDxUaXRsZUxhYmVsIGNsYXNzTmFtZT1cIm1kOnRleHQtY2VudGVyXCI+UG9ydGZvbGlvOjwvVGl0bGVMYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS04IGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90aXR1eS1jbGllbnQubm93LnNoL1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6LXRyYW5zbGF0ZS15LTIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktOCBweC00IG1pbi13LXhzIG1heC13LXNtIGJvcmRlciBib3JkZXItcHJpbWFyeSByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktMTAwIGJnLXdoaXRlIFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMC44KScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwYi00IHRleHQteGwgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFRpdHV5XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgIFJlYWRpbmcsIFdyaXRpbmcsIFNoYXJpbmcgb25saW5lIHBsYXRmb3JtIGZvciBDYW1ib2RpYW5cbiAgICAgICAgICAgICAgICAgICAgcGVvcGxlLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdGl0dXkuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00OCBoLTQ4IHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgbXQtNFwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlNjcmVlbnNob3QgZm9yIFRpdHV5XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoWyd0aXRsZScsICdkYXRlJywgJ3NsdWcnLCAnaXNQdWJsaXNoZWQnXSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjaC9za2lwLW5hdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==