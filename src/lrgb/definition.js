import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';
import interpolateLinear from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

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
		r: interpolateLinear(),
		g: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
