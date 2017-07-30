import React from 'react';

const Group = ({x, y, children}) => {
	return (
		<g transform={`translate(${ x }, ${ y })`}>
			{ children }
		</g>
	);
};

export default Group;