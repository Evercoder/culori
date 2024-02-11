/**
 * Implements DIN99d
 */

import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65.js';
import convertXyz65ToD99d from './convertXyz65ToD99d.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'd99d',

	parse: ['--din99d-labch'],
	serialize: '--din99d-labch',

	fromMode: {
		xyz65: convertXyz65ToD99d,
		rgb: c => convertXyz65ToD99d(convertRgbToXyz65(c))
	},

	channels: ['l', 'a', 'b', 'alpha'],

	// TODO: check ranges
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};

export default definition;
