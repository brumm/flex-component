(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactFlexComponent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var Flex = (function (_React$Component) {
  _inherits(Flex, _React$Component);

  function Flex() {
    _classCallCheck(this, Flex);

    _get(Object.getPrototypeOf(Flex.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Flex, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var display = _props.display;
      var direction = _props.direction;
      var justifyContent = _props.justifyContent;
      var wrap = _props.wrap;
      var alignItems = _props.alignItems;
      var alignContent = _props.alignContent;
      var basis = _props.basis;
      var grow = _props.grow;
      var shrink = _props.shrink;
      var order = _props.order;
      var alignSelf = _props.alignSelf;
      var tagName = _props.tagName;
      var children = _props.children;
      var style = _props.style;

      var props = _objectWithoutProperties(_props, ['display', 'direction', 'justifyContent', 'wrap', 'alignItems', 'alignContent', 'basis', 'grow', 'shrink', 'order', 'alignSelf', 'tagName', 'children', 'style']);

      return _react2['default'].createElement(tagName, _extends({}, props, {
        style: _extends({
          flexDirection: direction,
          flexWrap: wrap,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          display: display, justifyContent: justifyContent,
          alignItems: alignItems, alignContent: alignContent,
          order: order, alignSelf: alignSelf
        }, style)
      }), children);
    }
  }]);

  return Flex;
})(_react2['default'].Component);

Flex.defaultProps = {
  tagName: "div",
  // parent defaults
  display: 'flex'
};

// direction: 'row',
// justifyContent: 'flex-start',
// wrap: 'nowrap',
// alignItems: 'stretch',
// alignContent: 'stretch',
// child defaults
// basis: 'auto',
// grow: 0,
// shrink: 1,
// order: 0,
// alignSelf: 'flex-start'
Flex.propTypes = {
  tagName: _react2['default'].PropTypes.string,
  // parent
  display: _react2['default'].PropTypes.string,
  direction: _react2['default'].PropTypes.string,
  justifyContent: _react2['default'].PropTypes.string,
  wrap: _react2['default'].PropTypes.string,
  alignItems: _react2['default'].PropTypes.string,
  alignContent: _react2['default'].PropTypes.string,
  // child
  basis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
  grow: _react2['default'].PropTypes.number,
  shrink: _react2['default'].PropTypes.number,
  order: _react2['default'].PropTypes.number,
  alignSelf: _react2['default'].PropTypes.number
};

exports['default'] = Flex;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});