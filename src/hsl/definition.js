import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'hsl',
	output: { 
		rgb: convertHslToRgb 
	},
	input: {
		rgb: convertRgbToHsl
	},
	channels: ['h', 's', 'l', 'alpha'],
	parsers: [ parseHsl ],
	interpolate: {
		h: interpolateHue,
		s: interpolateLinear,
		l: interpolateLinear,
		alpha: interpolateAlpha
	}
};