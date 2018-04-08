import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';

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
		r: interpolateNumber(),
		g: interpolateNumber(),
		b: interpolateNumber(),
		alpha: interpolateAlpha()
	}
};