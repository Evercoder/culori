import convertLabToRgb from './convertLabToRgb';
import convertRgbToLab from './convertRgbToLab';
import parseLab from './parseLab';
import interpolateLinear from '../interpolate/linear';
import interpolateAlpha from '../interpolate/alpha';

export default {
	mode: 'lab',
	output: {
		rgb: convertLabToRgb
	},
	input: {
		rgb: convertRgbToLab
	},
	channels: ['l', 'a', 'b', 'alpha'],
	bounds: {
		l: [0, 100],
		a: [-79.2872, 93.55],
		b: [-112.0294, 93.3884]
	},
	parsers: [parseLab],
	interpolate: {
		l: interpolateLinear(),
		a: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(interpolateAlpha)
	}
};
