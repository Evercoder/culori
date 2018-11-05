import parseNamed from './parseNamed';
import parseHex from './parseHex';
import parseRgb from './parseRgb';
import parseTransparent from './parseTransparent';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'rgb',
	channels: ['r', 'g', 'b', 'alpha'],
	parsers: [parseHex, parseRgb, parseNamed, parseTransparent],
	interpolate: {
		r: interpolateLinear(interpolateNumber()),
		g: interpolateLinear(interpolateNumber()),
		b: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
