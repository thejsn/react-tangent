'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
	var x = _ref.x,
	    y = _ref.y,
	    children = _ref.children;

	return _react2.default.createElement(
		'g',
		{ transform: 'translate(' + x + ', ' + y + ')' },
		children
	);
};

exports.default = Group;
module.exports = exports['default'];