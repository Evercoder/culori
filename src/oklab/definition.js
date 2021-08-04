import convertOklabToLrgb from './convertOklabToLrgb';
import convertLrgbToOklab from './convertLrgbToOklab';
import convertRgbToOklab from './convertRgbToOklab';
import convertOklabToRgb from './convertOklabToRgb';

import lab from '../lab/definition';

/*
	Oklab, a perceptual color space for image processing by Björn Ottosson
	Reference: https://bottosson.github.io/posts/oklab/
 */

const definition = {
	...lab,
	mode: 'oklab',

	output: {
		lrgb: convertOklabToLrgb,
		rgb: convertOklabToRgb
	},

	input: {
		lrgb: convertLrgbToOklab,
		rgb: convertRgbToOklab
	},

	ranges: {
		l: [0, 0.999],
		a: [-0.233, 0.276],
		b: [-0.311, 0.198]
	},

	parsers: ['--oklab']
};

export default definition;
