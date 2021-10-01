/*
	CIELUV color space
	------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

import convertXyzToLuv from './convertXyzToLuv.js';
import convertRgbToLuv from './convertRgbToLuv.js';
import convertLuvToXyz from './convertLuvToXyz.js';
import convertLuvToRgb from './convertLuvToRgb.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'luv',

	toMode: {
		xyz: convertLuvToXyz,
		rgb: convertLuvToRgb
	},

	fromMode: {
		xyz: convertXyzToLuv,
		rgb: convertRgbToLuv
	},

	channels: ['l', 'u', 'v', 'alpha'],

	parse: ['--luv'],
	serialize: '--luv',

	ranges: {
		l: [0, 100],
		u: [-84.936, 175.042],
		v: [-125.882, 87.243]
	},

	interpolate: {
		l: interpolatorLinear,
		u: interpolatorLinear,
		v: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
