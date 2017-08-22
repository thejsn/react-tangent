import React from 'react';

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

	return React.createElement('rect', {
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

export default Rect;