import React from 'react';

const TOUCH = 'touch';
const MOUSE = 'mouse';


const Rect = ({
	width, height, fill, label, id, 
	altId, altLabel, borderradius,
	onClick, onPress, onRelease
}) => {
	const class_id = ('' + id) 		||
					 ('' + label) 	||
					 ('' + altId) 	||
					 ('' + altLabel);
	
	const className = 'tangent-key tangent-key--' + 
		class_id.replace(/[\~\!\@\$\%\^\&\*\(\)\+\=\,\.\/\'\;\:\"\?\>\<\[\]\\\{\}\|\`\#\s]/g, '-')
	
	return (
		<rect
			onClick={ () => onClick({
				label,
				id
			}) }
			onTouchStart={ () => onPress({
				type: TOUCH,
				label,
				id
			}) }
			onTouchEnd={ () => onRelease({
				type: TOUCH,
				label,
				id
			}) }
			onMouseDown={ () => onPress({
				type: MOUSE,
				label,
				id
			}) }
			onMouseUp={ () => onRelease({
				type: MOUSE,
				label,
				id
			}) }
			className={ className }
			fill={ fill }
			width={ width }
			height={ height }
			data-id={ id }
			data-label={ label }
			data-altid={ altId }
			data-altlabel={ altLabel }
			rx={ borderradius }
		></rect>
	);
};

Rect.defaultProps = {
	altId: '', 
	altLabel: '', 
	borderradius: 4,
	onClick: () => {},
	onPress: () => {},
	onRelease: () => {}
};

export default Rect;