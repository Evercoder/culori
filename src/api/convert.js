import { 
	IS_CULORI,
	IS_RGB,
	IS_HSL,
	IS_HSI,
	IS_HSV,
	IS_LAB,
	IS_LCH,
	IS_CUBEHELIX,
	IS_GRAY,
	IS_HWB,
	IS_NORMALIZED,
	IS_ALPHA_IMPLIED
} from './flags';

import with_flags from '../util/with_flags';

import from_hsl from '../converters/from_hsl';
import from_hsv from '../converters/from_hsv';
import from_hsi from '../converters/from_hsi';
import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';
import to_hsi from '../converters/to_hsi';

import toMode from './toMode';
import parse from './parse';

const convert = (color, mode = 'rgb') => {
	
	// Strings/Numbers need to be parsed to culori objects
	if (typeof color !== 'object') {
		color = parse(color);
	}

	// Convert culori objects to mode
	if (color.flags & IS_CULORI && color.flags & IS_NORMALIZED) {

		let culori_mode = toMode(color);

		// If the color's in the same mode as needed, just return the color.
		if (culori_mode === mode) {
			return color;
		}

		let rgb;
		switch(culori_mode) {
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
		let flags = IS_CULORI | IS_NORMALIZED | (color['a'] === undefined && IS_ALPHA_IMPLIED);
		switch(mode) {
			case 'rgb': return with_flags(color, flags | IS_RGB);
			case 'hsl': return with_flags(color, flags | IS_HSL);
			case 'hsv': return with_flags(color, flags | IS_HSV);
			case 'hsi': return with_flags(color, flags | IS_HSI);
			default: return undefined;
		}
	}
};

export default convert;