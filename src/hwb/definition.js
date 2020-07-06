import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
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
	ranges: {
		h: [0, 360]
	},
	parsers: [parseHwb],
	interpolate: {
		h: interpolateLinear(fixupHueShorter),
		w: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
