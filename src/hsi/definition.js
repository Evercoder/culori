import convertHsiToRgb from './convertHsiToRgb';
import convertRgbToHsi from './convertRgbToHsi';
import { interpolateLinear, interpolateAlpha, interpolateHue } from '../interpolate';

export default {
	mode: 'hsi',
	output: { 
		rgb: convertHsiToRgb 
	},
	input: {
		rgb: convertRgbToHsi
	},
	channels: ['h', 's', 'i', 'alpha'],
	interpolate: {
		h: interpolateHue,
		s: interpolateLinear,
		i: interpolateLinear,
		alpha: interpolateAlpha
	}
}