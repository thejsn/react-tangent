/**
 * Utility functions for the Tangent class.
 * 
 * @class TangentUtils
 */
export default class TangentUtils {

	get defaultOptions() {
		return {
			cellWidth: 20,
			cellHeight: 20,
			innerPadding: 2,
			maxCols: -1
		}
	}

	get options() {
		return this._options;
	}

	constructor(options) {
		this._options = Object.assign(
			this.defaultOptions,
			options || {}
		);
	}

	/**
	 * Takes the raw key map data and returns the pixel position of the key.
	 * Should sanitize and throw errors if something is wrong.
	 * 
	 * @param {object} key 
	 * @returns {object}
	 * 
	 * @memberOf TangentUtils
	 */
	getCoordinates(key, i) {
		if(typeof key === 'string' || 
		  (typeof key === 'object' && 
			!key.position && 
			!key.x && !key.y)
		) {
			const maxKeysOnRow = Math.floor(this.options.maxCols / this.options.defaultKeyWidth) || 1;
			
			const col = this.options.maxCols > 0 ? 
						(i % maxKeysOnRow) * this.options.defaultKeyWidth : 
						i * this.options.defaultKeyWidth;

			const row = this.options.maxCols > 0 ? 
				Math.floor(i / maxKeysOnRow) * this.options.defaultKeyHeight : 0;

			return {
				x: col * this.options.cellWidth,
				y: row * this.options.cellHeight
			};

		} else if(key.position) {

			return {
				x: key.position[0] * this.options.cellWidth,
				y: key.position[1] * this.options.cellHeight
			};
			
		} else {

			return {
				x: (key.x || 0) * this.options.cellWidth,
				y: (key.y || 0) * this.options.cellHeight
			};
		}
	}

	/**
	 * Takes the size of a key in number of grid cells and returns an object with dimensions, padding included.
	 * 
	 * @param {number} cols Number of columns the key covers.
	 * @param {number} rows Number of rows the key covers.
	 * @returns {object}
	 * 
	 * @memberOf TangentUtils
	 */
	toDimensions(cols, rows) {

		return {
			x: this.options.innerPadding,
			y: this.options.innerPadding,
			width: (cols * this.options.cellWidth) - (this.options.innerPadding * 2),
			height: (rows * this.options.cellHeight) - (this.options.innerPadding * 2)
		}
	}

	/**
	 * Get width of an irregular shape. Takes the segment property of the map object.
	 * 
	 * @param {array} segments 
	 * @returns {number}
	 * 
	 * @memberOf TangentUtils
	 */
	getKeyWidth(segments) {
		return segments
			.map(segment => typeof segment === 'number' ? segment :
							typeof segment === 'object' && 
								segment.length ? 
								segment[0] + segment[1] : 
							0)
			.reduce((prev, width) => Math.max(prev, width), 0);
	}

	/**
	 * Takes key data from map object and returns an object with x, y, width and height properties.
	 * 
	 * @param {object} key 
	 * @returns {object}
	 * 
	 * @memberOf TangentUtils
	 */
	getDimensions(key) {
		if(typeof key === 'string') {

			return this.toDimensions(
				this.options.defaultKeyWidth,
				this.options.defaultKeyHeight
			);

		} else if(key.dimensions) {

			return this.toDimensions(
				key.dimensions[0],
				key.dimensions[1]
			);

		} else if(key.segments) {
			
			return this.toDimensions(
				this.getKeyWidth(key.segments),
				key.segments.length
			);

		} else {
			
			return this.toDimensions(
				key.width || this.options.defaultKeyWidth,
				key.height || this.options.defaultKeyHeight
			);
		}
	}

	/**
	 * Takes the raw keys array and returns an array with proper positions and dimensions.
	 * 
	 * @param {array} keys 
	 * @returns {array}
	 * 
	 * @memberOf TangentUtils
	 */
	parseKeys(keys) {

		let coords = null;
		let dimensions = null;
		let label = null;

		return keys.map((key, i) => {

			coords = this.getCoordinates(key, i);
			dimensions = this.getDimensions(key, i);
			label = typeof key === 'string' ? key : key.label;

			return {
				x: dimensions.x + coords.x,
				y: dimensions.y + coords.y,
				width: dimensions.width,
				height: dimensions.height,
				id: key.id || '',
				label: label,
				altId: key.altId || '',
				altLabel: key.altLabel || '',
			}
		});
	}

	/**
	 * Returns the total width and height of keys.
	 * 
	 * @param {any} keys 
	 * @returns 
	 * 
	 * @memberOf TangentUtils
	 */
	getMapDimensions(keys) {
		
		if(typeof keys[0] === 'string') {
			const columns = Math.max(this.options.maxCols, keys.length * this.options.defaultKeyWidth)
			
			const rows = 	this.options.maxCols < 0 ? 
							this.options.defaultKeyHeight : 
							Math.ceil(keys.length / this.options.maxCols)

			
			return {
				width: columns * this.options.cellWidth,
				height: rows * this.options.cellHeight
			}

		} else {

			const maxWidth = keys.map(key => key.x + key.width)
								.reduce((prev, next) => Math.max(prev, next));
			
			const maxHeight = keys.map(key => key.y + key.height)
								.reduce((prev, next) => Math.max(prev, next));

			return {
				width: maxWidth + this.options.innerPadding,
				height: maxHeight + this.options.innerPadding
			}
		}
	}
}