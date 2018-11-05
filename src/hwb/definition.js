import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'hwb',
	output: {
		rgb: convertHwbToRgb
	},
	input: {
		rgb: convertRgbToHwb
	},
	channels: ['h', 'w', 'b', 'alpha'],
	parsers: [parseHwb],
	interpolate: {
		h: interpolateLinear(interpolateHue()),
		w: interpolateLinear(interpolateNumber()),
		b: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
