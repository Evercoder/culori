import convertOklabToLrgb from './convertOklabToLrgb.js';
import convertLrgbToOklab from './convertLrgbToOklab.js';
import convertRgbToOklab from './convertRgbToOklab.js';
import convertOklabToRgb from './convertOklabToRgb.js';

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

	parse: ['--oklab'],
	serialize: '--oklab'
};

export default definition;
