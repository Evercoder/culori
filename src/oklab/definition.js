import convertOklabToLrgb from './convertOklabToLrgb.js';
import convertLrgbToOklab from './convertLrgbToOklab.js';
import convertRgbToOklab from './convertRgbToOklab.js';
import convertOklabToRgb from './convertOklabToRgb.js';
import parseOklab from './parseOklab.js';

import lab from '../lab/definition.js';

/*
	Oklab, a perceptual color space for image processing by Björn Ottosson
	Reference: https://bottosson.github.io/posts/oklab/
 */

const definition = {
	...lab,
	mode: 'oklab',

	toMode: {
		lrgb: convertOklabToLrgb,
		rgb: convertOklabToRgb
	},

	fromMode: {
		lrgb: convertLrgbToOklab,
		rgb: convertRgbToOklab
	},

	ranges: {
		l: [0, 0.999],
		a: [-0.233, 0.276],
		b: [-0.311, 0.198]
	},

	parse: [parseOklab, '--oklab'],
	serialize: c =>
		`oklab(${c.l !== undefined ? c.l : 'none'} ${
			c.a !== undefined ? c.a : 'none'
		} ${c.b !== undefined ? c.b : 'none'}${
			c.alpha < 1 ? ` / ${c.alpha}` : ''
		})`
};

export default definition;
