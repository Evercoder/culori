import parseNamed from './parseNamed.js';
import parseHex from './parseHex.js';
import parseRgb from './parseRgb.js';
import parseTransparent from './parseTransparent.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

/*
	sRGB color space
 */

const definition = {
	mode: 'rgb',
	channels: ['r', 'g', 'b', 'alpha'],
	parse: [parseHex, parseRgb, parseNamed, parseTransparent, 'srgb'],
	serialize: 'srgb',

	interpolate: {
		r: interpolatorLinear,
		g: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
