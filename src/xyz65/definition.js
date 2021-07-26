/*
	The XYZ D65 color space
	-----------------------
 */

import convertXyz65ToRgb from './convertXyz65ToRgb';
import convertRgbToXyz65 from './convertRgbToXyz65';

import convertXyz65ToXyz from './convertXyz65ToXyz';
import convertXyzToXyz65 from './convertXyzToXyz65';

import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

const definition = {
	mode: 'xyz65',
	alias: ['xyz-d65'],

	output: {
		rgb: convertXyz65ToRgb,
		xyz: convertXyz65ToXyz
	},

	input: {
		rgb: convertRgbToXyz65,
		xyz: convertXyzToXyz65
	},

	ranges: {
		x: [0, 0.95],
		y: [0, 1],
		z: [0, 1.088]
	},

	channels: ['x', 'y', 'z', 'alpha'],

	interpolate: {
		x: interpolatorLinear,
		y: interpolatorLinear,
		z: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
