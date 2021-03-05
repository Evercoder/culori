import convertJabToJch from './convertJabToJch';
import convertJchToJab from './convertJchToJab';
import convertJabToRgb from '../jab/convertJabToRgb';
import convertRgbToJab from '../jab/convertRgbToJab';

import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

const definition = {
	mode: 'jch',

	output: {
		lab: convertJchToJab,
		rgb: c => convertJabToRgb(convertJchToJab(c))
	},

	input: {
		rgb: c => convertJabToJch(convertRgbToJab(c)),
		lab: convertJabToJch
	},

	channels: ['j', 'c', 'h', 'alpha'],

	ranges: {
		j: [0, 0.221],
		c: [0, 0.19],
		h: [0, 360]
	},

	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		c: interpolatorLinear,
		j: interpolatorLinear,
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
