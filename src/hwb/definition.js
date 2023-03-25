import convertHwbToRgb from './convertHwbToRgb.js';
import convertRgbToHwb from './convertRgbToHwb.js';
import parseHwb from './parseHwb.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueNaive } from '../difference.js';
import { averageAngle } from '../average.js';

const definition = {
	mode: 'hwb',

	toMode: {
		rgb: convertHwbToRgb
	},

	fromMode: {
		rgb: convertRgbToHwb
	},

	channels: ['h', 'w', 'b', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	gamut: 'rgb',

	parse: [parseHwb],
	serialize: c =>
		`hwb(${c.h || 0} ${c.w * 100}% ${c.b * 100}%${
			c.alpha < 1 ? ` / ${c.alpha}` : ''
		})`,

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		w: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueNaive
	},

	average: {
		h: averageAngle
	}
};

export default definition;
