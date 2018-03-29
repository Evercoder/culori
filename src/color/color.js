import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';

class Color {

	constructor(c) {
		this._color = c;
	}

	to(format) {
		switch(format) {
			case 'hsl':
				return to_hsl(...this._color);
			case 'hsv':
				return to_hsv(...this._color);
		}
	}

	nice(format) {}

	css(format) {
		let nice = this.to(format);
		switch(format) {
			case 'hsl':
				return `hsl(${nice[0]}, ${nice[1]}, ${nice[2]}, ${nice[3]})`;
			case 'rgb':
				return `rgb(${nice[0]}, ${nice[1]}, ${nice[2]}, ${nice[3]})`;
		}
	}

	serialize() {
		return this._color;
	}

	toString() {
		return this.serialize();
	}
}

export default Color;