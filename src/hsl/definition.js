import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'hsl',
	output: {
		rgb: convertHslToRgb
	},
	input: {
		rgb: convertRgbToHsl
	},
	channels: ['h', 's', 'l', 'alpha'],
	parsers: [parseHsl],
	interpolate: {
		h: interpolateLinear(interpolateHue()),
		s: interpolateLinear(interpolateNumber()),
		l: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
