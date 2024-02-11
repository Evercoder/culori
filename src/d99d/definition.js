/**
 * Implements DIN99d
 */

import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65.js';
import convertXyz65ToD99d from './convertXyz65ToD99d.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { differenceEuclidean } from '../difference.js';

const definition = {
	mode: 'd99d',

	parse: ['--din99d-labch'],
	serialize: '--din99d-labch',

	fromMode: {
		xyz65: convertXyz65ToD99d,
		rgb: c => convertXyz65ToD99d(convertRgbToXyz65(c))
	},

	channels: ['l', 'a', 'b', 'alpha'],

	ranges: {
		l: [0, 100],
		a: [-55, 55],
		b: [-55, 55],
		c: [0, 55],
		h: [0, 360]
	},

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},

	difference: {
		h: differenceEuclidean
	}
};

export default definition;
