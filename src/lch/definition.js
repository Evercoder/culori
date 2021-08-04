import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLabToRgb from '../lab/convertLabToRgb';
import convertRgbToLab from '../lab/convertRgbToLab';
import parseLch from './parseLch';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

const definition = {
	mode: 'lch',

	output: {
		lab: convertLchToLab,
		rgb: c => convertLabToRgb(convertLchToLab(c))
	},

	input: {
		rgb: c => convertLabToLch(convertRgbToLab(c)),
		lab: convertLabToLch
	},

	channels: ['l', 'c', 'h', 'alpha'],

	ranges: {
		l: [0, 100],
		c: [0, 131.207],
		h: [0, 360]
	},

	parsers: [parseLch],
	serialize: 'lch(',

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		l: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},

	difference: {
		h: differenceHueChroma
	},

	average: {
		h: averageAngle
	}
};

export default definition;
