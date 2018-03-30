import { 
	IS_RGB,
	IS_HSL,
	IS_HSI,
	IS_HSV,
	IS_LAB,
	IS_LCH,
	IS_CUBEHELIX,
	IS_GRAY,
	IS_HWB
} from './flags';

import from_hsl from '../converters/from_hsl';
import from_hsv from '../converters/from_hsv';
import from_hsi from '../converters/from_hsi';

export default function(color, mode) {
	if (typeof color !== 'object') {
		return undefined;
	}

	if (color.flags & IS_RGB || mode === 'rgb') {
		return color;
	} else if (color.flags & IS_HSL || mode === 'hsl') {
		return from_hsl(color);
	} else if (color.flags & IS_HSV || mode === 'hsv') {
		return from_hsv(color);
	} else if (color.flags & IS_HSI || mode === 'hsi') {
		return from_hsi(color);
	} else {
		// unknown format
		return undefined;
	}
}