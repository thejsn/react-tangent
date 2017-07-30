import React from 'react';

const Text = ({ color, size, fontName, x, y, children }) => {
	return (
		<text 
			transform={`translate(${ x }, ${ y })`}
			dominantBaseline="middle"
			textAnchor="middle"
			fontSize={ size }
			fontFamily={ fontName }
			fontWeight="500"
			fill={ color }>
			<tspan 
				x={ 0 }
				y={ size / 10 }
				alignmentBaseline="middle">
				{ children }
			</tspan>
		</text>
	);
};

Text.defaultProps = {
	x: 0, 
	y: 0
}

export default Text;