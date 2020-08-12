/*
	CIELChuv color space
	--------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

import convertLuvToLchuv from './convertLuvToLchuv';
import convertLchuvToLuv from './convertLchuvToLuv';
import convertLchuvToRgb from './convertLchuvToRgb';
import convertRgbToLchuv from './convertRgbToLchuv';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueChroma } from '../difference';
import { averageAngle } from '../average';

export default {
	mode: 'lchuv',
	output: {
		luv: convertLchuvToLuv,
		rgb: convertLchuvToRgb
	},
	input: {
		rgb: convertRgbToLchuv,
		luv: convertLuvToLchuv
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
