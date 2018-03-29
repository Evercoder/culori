import rgb_to_hsl from '../converters/rgb2hsl';
import rgb_to_hsv from '../converters/rgb2hsv';

class Color {

	constructor(c) {
		this._color = c;
	}

	to(format) {
		switch(format) {
			case 'hsl':
				return rgb_to_hsl(...this._color);
			case 'hsv':
				return rgb_to_hsv(...this._color);
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
		return { ...this._color };
	}

	toString() {
		return this.serialize();
	}
}

export default Color;