import convertRgbToLrgb from './convertRgbToLrgb';
import convertLrgbToRgb from './convertLrgbToRgb';
import { interpolateNumber, interpolateAlpha, interpolateHue } from '../interpolate';

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