import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'lrgb',
	output: {
		rgb: convertLrgbToRgb
	},
	input: {
		rgb: convertRgbToLrgb
	},
	channels: ['r', 'g', 'b', 'alpha'],
	interpolate: {
		r: interpolateLinear(interpolateNumber()),
		g: interpolateLinear(interpolateNumber()),
		b: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
