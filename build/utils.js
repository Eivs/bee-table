'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryParseInt = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.measureScrollbar = measureScrollbar;
exports.debounce = debounce;
exports.warningOnce = warningOnce;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.ObjectAssign = ObjectAssign;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _parseInt = require('lodash/parseInt');

var _parseInt2 = _interopRequireDefault(_parseInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = void 0;

// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function measureScrollbar() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }
  if (scrollbarWidth) {
    return scrollbarWidth;
  }
  var scrollDiv = document.createElement('div');
  for (var scrollProp in scrollbarMeasure) {
    if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
      scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
    }
  }
  document.body.appendChild(scrollDiv);
  var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  scrollbarWidth = width;
  return scrollbarWidth;
}

function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function debounceFunc() {
    var context = this;
    var args = arguments;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

var warned = {};
function warningOnce(condition, format, args) {
  if (!warned[format]) {
    (0, _warning2["default"])(condition, format, args);
    warned[format] = true;
  }
}

var tryParseInt = exports.tryParseInt = function tryParseInt(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var resultValue = (0, _parseInt2["default"])(value);

  if (isNaN(resultValue)) {
    return defaultValue;
  }
  return resultValue;
};

function addClass(elm, className) {
  if (!className) return;

  var els = Array.isArray(elm) ? elm : [elm];

  els.forEach(function (el) {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += ' ' + className;
    }
  });
}

function removeClass(elm, className) {
  if (!className) return;

  var els = Array.isArray(elm) ? elm : [elm];

  els.forEach(function (el) {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
}

/**
 * 简单数组数据对象拷贝
 * @param {*} obj 要拷贝的对象 
 */
function ObjectAssign(obj) {
  var b = obj instanceof Array;
  var tagObj = b ? [] : {};
  if (b) {
    //数组
    obj.forEach(function (da) {
      var _da = {};
      _extends(_da, da);
      tagObj.push(_da);
    });
  } else {
    _extends(tagObj, obj);
  }
  return tagObj;
}