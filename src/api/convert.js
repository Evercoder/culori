import from_hsl from '../converters/from_hsl';
import from_hsv from '../converters/from_hsv';
import from_hsi from '../converters/from_hsi';
import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';
import to_hsi from '../converters/to_hsi';

import parse from './parse';

const convert = (color, mode = 'rgb') => {
	
	// Strings/Numbers need to be parsed to culori objects
	if (typeof color !== 'object') {
		color = parse(color);
	}

	// Convert culori objects to mode
	if (color.mode) {

		// If the color's in the same mode as needed, just return the color.
		if (color.mode === mode) {
			return color;
		}

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
		}

	} else {
		// We assume plain objects are in the correct format, and normalized
		switch(mode) {
			case 'rgb': return { ...color, mode: 'rgb' };
			case 'hsl': return { ...color, mode: 'hsl' };
			case 'hsv': return { ...color, mode: 'hsv' };
			case 'hsi': return { ...color, mode: 'hsi' };
			default: return undefined;
		}
	}
};

export default convert;