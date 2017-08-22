"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    fontName = _ref.fontName,
	    x = _ref.x,
	    y = _ref.y,
	    children = _ref.children;

	return _react2.default.createElement(
		"text",
		{
			transform: "translate(" + x + ", " + y + ")",
			dominantBaseline: "middle",
			textAnchor: "middle",
			fontSize: size,
			fontFamily: fontName,
			fontWeight: "500",
			fill: color },
		_react2.default.createElement(
			"tspan",
			{
				x: 0,
				y: size / 10,
				alignmentBaseline: "middle" },
			children
		)
	);
};

Text.defaultProps = {
	x: 0,
	y: 0
};

exports.default = Text;
module.exports = exports["default"];