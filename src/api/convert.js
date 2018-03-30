import from_hsl from '../converters/from_hsl';
import from_hsv from '../converters/from_hsv';
import from_hsi from '../converters/from_hsi';
import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';
import to_hsi from '../converters/to_hsi';

const convert = (color, mode) => {

	if (color === undefined) {
		return undefined;
	}

	// If the color's in the same mode as needed, just return the color.
	if (color.mode === mode) {
		return color;
	}

	// Otherwise convert it to RGB, which is the intermediary format
	// for converting between formats.
	let rgb;
	switch(color.mode) {
		case 'rgb': rgb = color; break;
		case 'hsl': rgb = from_hsl(color); break;
		case 'hsv': rgb = from_hsv(color); break;
		case 'hsi': rgb = from_hsi(color); break;
		default: return undefined;
	}

	switch(mode) {
		case 'rgb': return rgb;
		case 'hsl': return to_hsl(rgb);
		case 'hsv': return to_hsv(rgb);
		case 'hsi': return to_hsi(rgb);
		default: return undefined;
	};

};

export default convert;