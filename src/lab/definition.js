import convertLabToRgb from './convertLabToRgb';
import convertRgbToLab from './convertRgbToLab';
import parseLab from './parseLab';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'lab',
	output: { 
		rgb: convertLabToRgb 
	},
	input: {
		rgb: convertRgbToLab
	},
	channels: ['l', 'a', 'b', 'alpha'],
	parsers: [ parseLab ],
	interpolate: {
		l: interpolateLinear,
		a: interpolateLinear,
		b: interpolateLinear,
		alpha: interpolateAlpha
	}
};