import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import interpolateHue from '../interpolate/hue';
import interpolateAlpha from '../interpolate/alpha';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'hsv',
	output: {
		rgb: convertHsvToRgb
	},
	input: {
		rgb: convertRgbToHsv
	},
	channels: ['h', 's', 'v', 'alpha'],
	ranges: {
		h: [0, 360]
	},
	interpolate: {
		h: interpolateLinear(interpolateHue),
		s: interpolateLinear(),
		v: interpolateLinear(),
		alpha: interpolateLinear(interpolateAlpha)
	}
};
