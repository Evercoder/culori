import convertHsvToRgb from './convertHsvToRgb';
import convertRgbToHsv from './convertRgbToHsv';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueSaturation } from '../difference';
import { averageAngle } from '../average';

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
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		v: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},
	difference: {
		h: differenceHueSaturation
	},
	average: {
		h: averageAngle
	}
};
