import React from 'react';

var Text = function Text(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    fontName = _ref.fontName,
	    x = _ref.x,
	    y = _ref.y,
	    children = _ref.children;

	return React.createElement(
		"text",
		{
			transform: "translate(" + x + ", " + y + ")",
			dominantBaseline: "middle",
			textAnchor: "middle",
			fontSize: size,
			fontFamily: fontName,
			fontWeight: "500",
			fill: color },
		React.createElement(
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

export default Text;