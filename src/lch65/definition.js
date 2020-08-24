import convertLabToLch from '../lch/convertLabToLch';
import convertLchToLab from '../lch/convertLchToLab';
import convertLab65ToRgb from '../lab65/convertLab65ToRgb';
import convertRgbToLab65 from '../lab65/convertRgbToLab65';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

export default {
	mode: 'lch65',
	alias: ['lch-d65'],
	output: {
		lab65: convertLchToLab,
		rgb: c => convertLab65ToRgb(convertLchToLab(c, 'lab65'))
	},
	input: {
		rgb: c => convertLabToLch(convertRgbToLab65(c), 'lch65'),
		lab65: convertLabToLch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	ranges: {
		l: [0, 100],
		c: [0, 131.008],
		h: [0, 360]
	},
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
