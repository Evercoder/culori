/*
	CIELUV color space
	------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

import convertXyzToLuv from './convertXyzToLuv';
import convertRgbToLuv from './convertRgbToLuv';
import convertLuvToXyz from './convertLuvToXyz';
import convertLuvToRgb from './convertLuvToRgb';
import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

export default {
	mode: 'luv',
	output: {
		xyz: convertLuvToXyz,
		rgb: convertLuvToRgb
	},
	input: {
		xyz: convertXyzToLuv,
		rgb: convertRgbToLuv
	},
	channels: ['l', 'u', 'v', 'alpha'],
	ranges: {
		l: [0, 100],
		u: [-84.86, 174.87],
		v: [-125.744, 87.165],
		alpha: [0, 1]
	},
	interpolate: {
		l: interpolatorLinear,
		u: interpolatorLinear,
		v: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};
