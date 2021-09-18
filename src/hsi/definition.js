import convertHsiToRgb from './convertHsiToRgb.js';
import convertRgbToHsi from './convertRgbToHsi.js';
import { fixupHueShorter } from '../fixup/hue.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { differenceHueSaturation } from '../difference.js';
import { averageAngle } from '../average.js';

const definition = {
	mode: 'hsi',

	output: {
		rgb: convertHsiToRgb
	},

	parsers: ['--hsi'],
	serialize: 'color(--hsi ',

	input: {
		rgb: convertRgbToHsi
	},

	channels: ['h', 's', 'i', 'alpha'],

	ranges: {
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		s: interpolatorLinear,
		i: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueSaturation
	},

	average: {
		h: averageAngle
	}
};

export default definition;
