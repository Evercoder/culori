import convertHsiToRgb from './convertHsiToRgb';
import convertRgbToHsi from './convertRgbToHsi';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'hsi',
	output: {
		rgb: convertHsiToRgb
	},
	input: {
		rgb: convertRgbToHsi
	},
	channels: ['h', 's', 'i', 'alpha'],
	ranges: {
		h: [0, 360]
	},
	interpolate: {
		h: interpolateLinear(fixupHueShorter),
		s: interpolateLinear(),
		i: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
