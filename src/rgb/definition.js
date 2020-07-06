import parseNamed from './parseNamed';
import parseHex from './parseHex';
import parseRgb from './parseRgb';
import parseTransparent from './parseTransparent';
import interpolateLinear from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

export default {
	mode: 'rgb',
	channels: ['r', 'g', 'b', 'alpha'],
	parsers: [parseHex, parseRgb, parseNamed, parseTransparent],
	interpolate: {
		r: interpolateLinear(),
		g: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
