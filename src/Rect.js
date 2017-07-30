import React from 'react';

const Rect = ({
	width, height, fill, label, id, 
	altId, altLabel, borderradius,
	onClick
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
			className={ className }
			fill={ fill }
			width={ width }
			height={ height }
			data-id={ id }
			data-label={ label }
			data-altId={ altId }
			data-altLabel={ altLabel }
			rx={ borderradius }
		></rect>
	);
};

Rect.defaultProps = {
	altId: '', 
	altLabel: '', 
	borderradius: 4,
	onClick: () => {}
};

export default Rect;