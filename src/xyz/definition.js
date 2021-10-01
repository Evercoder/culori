/*
	The XYZ D50 color space
	-----------------------
 */

import convertXyzToRgb from './convertXyzToRgb.js';
import convertXyzToLab from '../lab/convertXyzToLab.js';
import convertRgbToXyz from './convertRgbToXyz.js';
import convertLabToXyz from '../lab/convertLabToXyz.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'xyz',
	parse: ['xyz', '--xyz-d50'],
	serialize: '--xyz-d50',

	toMode: {
		rgb: convertXyzToRgb,
		lab: convertXyzToLab
	},

	fromMode: {
		rgb: convertRgbToXyz,
		lab: convertLabToXyz
	},

	channels: ['x', 'y', 'z', 'alpha'],

	ranges: {
		x: [0, 0.964],
		y: [0, 0.999],
		z: [0, 0.825]
	},

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
