import React, { Component } from 'react';

const TOUCH = 'touch';
const MOUSE = 'mouse';

class Rect extends Component {
	constructor(props) {
		super(props);

		this.clicked = this.clicked.bind(this);
		this.pressed = this.pressed.bind(this);
		this.released = this.released.bind(this);

		this.state = {
			pressed: false,
			released: false
		}
	}

	clicked(data) {
		this.props.onClick(data);
	}

	pressed(data) {
		
		this.setState({ pressed: true });
		setTimeout( () => this.setState({ pressed: false }), 300 );
		
		this.props.onPress(data);
	}

	released(data) {
		
		this.setState({ released: true });
		setTimeout( () => this.setState({ released: false }), 300 );
		
		this.props.onRelease(data);
	}

	render() {
		const {
			width,
			height,
			fill,
			label,
			id,
			index,
			altId,
			altLabel,
			borderradius,
			onClick,
			onPress,
			onRelease
		} = this.props;

		const class_id = ('' + id) ||
			('' + label) ||
			('' + altId) ||
			('' + altLabel);

		const keyStateClass = (
			this.state.pressed ? ' tangent-key--pressed' : 
			this.state.released ? ' tangent-key--released' :
			' tangent-key--idle'
		);

		const className = 'tangent-key' +
			keyStateClass +
			(this.state.pressed ? ' tangent-key--pressed' : '') +
			' tangent-key--index-' + index +
			' tangent-key--' +
			class_id.replace(/[\~\!\@\$\%\^\&\*\(\)\+\=\,\.\/\'\;\:\"\?\>\<\[\]\\\{\}\|\`\#\s]/g, '-')

		return (
			<rect
				onClick={() => this.clicked({
					label,
					id,
					index
				})}
				onTouchStart={() => this.pressed({
					type: TOUCH,
					label,
					id,
					index
				})}
				onTouchEnd={() => this.released({
					type: TOUCH,
					label,
					id,
					index
				})}
				onMouseDown={() => this.pressed({
					type: MOUSE,
					label,
					id,
					index
				})}
				onMouseUp={() => this.released({
					type: MOUSE,
					label,
					id,
					index
				})}
				className={className}
				fill={fill}
				width={width}
				height={height}
				data-id={id}
				data-label={label}
				data-altid={altId}
				data-altlabel={altLabel}
				rx={borderradius}
			></rect>
		);
	}
}

Rect.defaultProps = {
	altId: '',
	altLabel: '',
	borderradius: 4,
	onClick: () => { },
	onPress: () => { },
	onRelease: () => { }
};

export default Rect;