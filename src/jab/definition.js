/*
	The JzAzBz color space.

	Based on:

	Muhammad Safdar, Guihua Cui, Youn Jin Kim, and Ming Ronnier Luo, 
	"Perceptually uniform color space for image signals 
	including high dynamic range and wide gamut," 
	Opt. Express 25, 15131-15151 (2017) 

	https://doi.org/10.1364/OE.25.015131
 */

import convertXyz65ToJab from './convertXyz65ToJab';
import convertJabToXyz65 from './convertJabToXyz65';
import convertRgbToJab from './convertRgbToJab';
import convertJabToRgb from './convertJabToRgb';

import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

const definition = {
	mode: 'jab',
	channels: ['j', 'a', 'b', 'alpha'],

	input: {
		rgb: convertRgbToJab,
		xyz65: convertXyz65ToJab
	},

	output: {
		rgb: convertJabToRgb,
		xyz65: convertJabToXyz65
	},

	ranges: {
		j: [0, 0.221],
		a: [-0.108, 0.129],
		b: [-0.185, 0.134]
	},

	interpolate: {
		j: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
