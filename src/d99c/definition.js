/**
 * Implements DIN99c
 */

import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65.js';
import convertXyz65ToD99c from './convertXyz65ToD99c.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';
import { fixupHueShorter } from '../fixup/hue.js';

const definition = {
	mode: 'd99c',

	parse: ['--din99c-labch'],
	serialize: '--din99c-labch',

	fromMode: {
		xyz65: convertXyz65ToD99c,
		rgb: c => convertXyz65ToD99c(convertRgbToXyz65(c))
	},

	channels: ['l', 'a', 'b', 'c', 'h', 'alpha'],

	// TODO: check ranges
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344],
		c: [0, 51.484],
		h: [0, 360]
	},

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		c: interpolatorLinear,
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};

export default definition;
