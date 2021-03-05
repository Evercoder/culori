import parseNamed from './parseNamed';
import parseHex from './parseHex';
import parseRgb from './parseRgb';
import parseTransparent from './parseTransparent';
import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

/*
	sRGB color space
 */

const definition = {
	mode: 'rgb',
	channels: ['r', 'g', 'b', 'alpha'],
	alias: ['srgb'],
	parsers: [parseHex, parseRgb, parseNamed, parseTransparent],

	interpolate: {
		r: interpolatorLinear,
		g: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
