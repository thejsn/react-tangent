'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rect = function Rect(_ref) {
	var width = _ref.width,
	    height = _ref.height,
	    fill = _ref.fill,
	    label = _ref.label,
	    id = _ref.id,
	    altId = _ref.altId,
	    altLabel = _ref.altLabel,
	    borderradius = _ref.borderradius,
	    _onClick = _ref.onClick;

	var class_id = '' + id || '' + label || '' + altId || '' + altLabel;

	var className = 'tangent-key tangent-key--' + class_id.replace(/[\~\!\@\$\%\^\&\*\(\)\+\=\,\.\/\'\;\:\"\?\>\<\[\]\\\{\}\|\`\#\s]/g, '-');

	return _react2.default.createElement('rect', {
		onClick: function onClick() {
			return _onClick({
				label: label,
				id: id
			});
		},
		className: className,
		fill: fill,
		width: width,
		height: height,
		'data-id': id,
		'data-label': label,
		'data-altId': altId,
		'data-altLabel': altLabel,
		rx: borderradius
	});
};

Rect.defaultProps = {
	altId: '',
	altLabel: '',
	borderradius: 4,
	onClick: function onClick() {}
};

exports.default = Rect;
module.exports = exports['default'];