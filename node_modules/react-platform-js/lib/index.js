'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uaParserJs = require('ua-parser-js');

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parser = new _uaParserJs2.default();
var result = parser.getResult();

var OS = result.os.name;
var OSVersion = result.os.version;
var Browser = result.browser.name;
var BrowserVersion = result.browser.version;
var DeviceType = result.device.type;
var DeviceModel = result.device.model;
var DeviceVendor = result.device.vendor;
var Engine = result.engine.name;
var EngineVersion = result.engine.version;
var CPU = result.cpu.architecture;
var UA = result.ua;

var props = {
  OS: OS,
  OSVersion: OSVersion,
  Browser: Browser,
  BrowserVersion: BrowserVersion,
  DeviceType: DeviceType,
  DeviceModel: DeviceModel,
  DeviceVendor: DeviceVendor,
  Engine: Engine,
  EngineVersion: EngineVersion,
  CPU: CPU,
  UA: UA
};

var Platform = function (_Component) {
  _inherits(Platform, _Component);

  function Platform() {
    _classCallCheck(this, Platform);

    return _possibleConstructorReturn(this, (Platform.__proto__ || Object.getPrototypeOf(Platform)).apply(this, arguments));
  }

  _createClass(Platform, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rules = _props.rules,
          className = _props.className,
          style = _props.style;

      if (typeof children === 'function') return children(props);
      var illegal = Object.keys(rules).find(function (key) {
        return props[key] !== rules[key];
      });
      if (illegal) return null;
      if (typeof children === 'string' || children instanceof Array) return _react2.default.createElement('div', { className: className, style: style }, children);
      return _react2.default.cloneElement(children);
    }
  }]);

  return Platform;
}(_react.Component);

Platform.OS = OS;
Platform.OSVersion = OSVersion;
Platform.Browser = Browser;
Platform.BrowserVersion = BrowserVersion;
Platform.DeviceType = DeviceType;
Platform.DeviceModel = DeviceModel;
Platform.DeviceVendor = DeviceVendor;
Platform.Engine = Engine;
Platform.EngineVersion = EngineVersion;
Platform.CPU = CPU;
Platform.UA = UA;
Platform.defaultProps = {
  rules: {},
  className: '',
  style: {}
};

Platform.select = function (selectMap) {
  return Object.keys(selectMap).find(function (key) {
    return key === undefined.OS;
  });
};

exports.default = Platform;