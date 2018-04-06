import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'hsv',
	output: { 
		rgb: convertHsvToRgb 
	},
	input: {
		rgb: convertRgbToHsv
	},
	channels: ['h', 's', 'v', 'alpha'],
	interpolate: {
		h: interpolateHue,
		s: interpolateLinear,
		v: interpolateLinear,
		alpha: interpolateAlpha
	}
};