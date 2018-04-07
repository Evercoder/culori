import convertLabToRgb from './convertLabToRgb';
import convertRgbToLab from './convertRgbToLab';
import parseLab from './parseLab';
import { interpolateNumber, interpolateAlpha, interpolateHue } from '../interpolate';

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
		l: interpolateNumber(),
		a: interpolateNumber(),
		b: interpolateNumber(),
		alpha: interpolateAlpha()
	}
};