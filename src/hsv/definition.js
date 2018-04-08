import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';

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
		h: interpolateHue(),
		s: interpolateNumber(),
		v: interpolateNumber(),
		alpha: interpolateAlpha()
	}
};