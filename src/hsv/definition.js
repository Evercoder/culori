import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateHue from '../interpolate/hue';
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
	interpolate: {
		h: interpolateLinear(interpolateHue()),
		s: interpolateLinear(interpolateNumber()),
		v: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
