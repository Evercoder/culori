/*
	CIELUV color space
	------------------

	Reference: 

		https://en.wikipedia.org/wiki/CIELUV
 */

import convertXyzToLuv from './convertXyzToLuv.js';
import convertLuvToXyz from './convertLuvToXyz.js';
import convertXyzToRgb from '../xyz/convertXyzToRgb.js';
import convertRgbToXyz from '../xyz/convertRgbToXyz.js';

import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'luv',

	toMode: {
		xyz: convertLuvToXyz,
		rgb: luv => convertXyzToRgb(convertLuvToXyz(luv))
	},

	fromMode: {
		xyz: convertXyzToLuv,
		rgb: rgb => convertXyzToLuv(convertRgbToXyz(rgb))
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
