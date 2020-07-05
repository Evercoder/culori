import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';
import { fixupHueShorter } from '../fixup/hue';
import interpolateAlpha from '../interpolate/alpha';
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
	ranges: {
		h: [0, 360]
	},
	parsers: [parseHsl],
	interpolate: {
		h: interpolateLinear(fixupHueShorter),
		s: interpolateLinear(),
		l: interpolateLinear(),
		alpha: interpolateLinear(interpolateAlpha)
	}
};
