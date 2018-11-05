import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLchToRgb from './convertLchToRgb';
import convertRgbToLch from './convertRgbToLch';
import parseLch from './parseLch';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'lch',
	output: {
		lab: convertLchToLab,
		rgb: convertLchToRgb
	},
	input: {
		rgb: convertRgbToLch,
		lch: convertLabToLch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	parsers: [parseLch],
	interpolate: {
		h: interpolateLinear(interpolateHue()),
		c: interpolateLinear(interpolateNumber()),
		l: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
