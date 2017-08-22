import React from 'react';

var Group = function Group(_ref) {
	var x = _ref.x,
	    y = _ref.y,
	    children = _ref.children;

	return React.createElement(
		'g',
		{ transform: 'translate(' + x + ', ' + y + ')' },
		children
	);
};

export default Group;