import convertLabToRgb from './convertLabToRgb';
import convertRgbToLab from './convertRgbToLab';
import parseLab from './parseLab';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'lab',
	output: {
		rgb: convertLabToRgb
	},
	input: {
		rgb: convertRgbToLab
	},
	channels: ['l', 'a', 'b', 'alpha'],
	parsers: [parseLab],
	interpolate: {
		l: interpolateLinear(interpolateNumber()),
		a: interpolateLinear(interpolateNumber()),
		b: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
