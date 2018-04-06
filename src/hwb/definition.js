import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'hwb',
	output: { 
		rgb: convertHwbToRgb 
	},
	input: {
		rgb: convertRgbToHwb
	},
	channels: ['h', 'w', 'b', 'alpha'],
	parsers: [ parseHwb ],
	interpolate: {
		h: interpolateHue,
		w: interpolateLinear,
		b: interpolateLinear,
		alpha: interpolateAlpha
	}
};