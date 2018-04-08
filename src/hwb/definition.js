import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';

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
		h: interpolateHue(),
		w: interpolateNumber(),
		b: interpolateNumber(),
		alpha: interpolateAlpha()
	}
};