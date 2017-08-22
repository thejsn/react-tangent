'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TangentUtils = require('./TangentUtils');

var _TangentUtils2 = _interopRequireDefault(_TangentUtils);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Rect = require('./Rect');

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FONT_BLOB = '';
var FONT_NAME = '';

var Tangent = function (_Component) {
  _inherits(Tangent, _Component);

  function Tangent() {
    _classCallCheck(this, Tangent);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tangent.prototype.getBase64FontBlob = function getBase64FontBlob(name, base64blob) {
    if (name && base64blob) {

      // Hack to get around styled-jsx dogma.
      FONT_NAME = name;
      FONT_BLOB = base64blob;

      return _react2.default.createElement(
        'style',
        { jsx: true },
        '\n        @font-face {\n          font-family: \'' + FONT_NAME + '\';\n          src: url(data:application/font-woff;charset=utf-8;base64,' + FONT_BLOB + ') format(\'woff\');\n        }\n      '
      );
    } else {
      return '';
    }
  };

  Tangent.prototype.clickedKey = function clickedKey(data) {
    this.props.onKeyPress(data);
  };

  Tangent.prototype.render = function render() {
    var _this2 = this;

    var util = new _TangentUtils2.default(this.props);
    var keys = util.parseKeys(this.props.keys);

    var _util$getMapDimension = util.getMapDimensions(keys),
        width = _util$getMapDimension.width,
        height = _util$getMapDimension.height;

    return _react2.default.createElement(
      'svg',
      {
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 ' + width + ' ' + height,
        width: width,
        height: height },
      this.getBase64FontBlob(),
      keys.map(function (key, i) {
        return _react2.default.createElement(
          _Group2.default,
          { x: key.x, y: key.y, key: i },
          _react2.default.createElement(_Rect2.default, {
            width: key.width,
            height: key.height,
            fill: _this2.props.keyColor,
            id: key.id,
            label: key.label,
            altId: key.altId,
            altLabel: key.altLabel,
            borderradius: _this2.props.borderRadius,
            onClick: _this2.clickedKey.bind(_this2)
          }),
          _react2.default.createElement(
            _Text2.default,
            {
              color: _this2.props.textColor,
              size: _this2.props.fontSize,
              fontName: _this2.props.fontName,
              x: Math.round(key.width / 2),
              y: Math.round(key.height / 2) },
            key.label
          )
        );
      })
    );
  };

  return Tangent;
}(_react.Component);

exports.default = Tangent;


Tangent.defaultProps = {
  cellWidth: 20,
  cellHeight: 20,
  innerPadding: 1,
  borderRadius: 10,
  defaultKeyWidth: 4,
  defaultKeyHeight: 4,
  maxCols: -1,
  keyColor: '#333',
  textColor: '#eee',
  fontName: 'Open Sans',
  fontSize: '30',
  fontEmbed: null,
  keys: [],
  onKeyPress: function onKeyPress() {}
};
module.exports = exports['default'];