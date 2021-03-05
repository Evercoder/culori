/*
	The XYZ D50 color space
	-----------------------
 */

import convertXyzToRgb from './convertXyzToRgb';
import convertXyzToLab from '../lab/convertXyzToLab';
import convertRgbToXyz from './convertRgbToXyz';
import convertLabToXyz from '../lab/convertLabToXyz';
import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

const definition = {
	mode: 'xyz',
	alias: ['xyz-d50'],

	output: {
		rgb: convertXyzToRgb,
		lab: convertXyzToLab
	},

	input: {
		rgb: convertRgbToXyz,
		lab: convertLabToXyz
	},

	channels: ['x', 'y', 'z', 'alpha'],

	ranges: {
		x: [0, 0.962],
		y: [0, 0.997],
		z: [0, 0.823]
	},

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
