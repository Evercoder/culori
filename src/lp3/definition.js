import rgb from '../rgb/definition.js';
import convertLp3ToXyz65 from './convertLp3ToXyz65.js';
import convertXyz65ToLp3 from './convertXyz65ToLp3.js';
import convertRgbToXyz65 from '../xyz65/convertRgbToXyz65.js';
import convertXyz65ToRgb from '../xyz65/convertXyz65ToRgb.js';
import convertRgbToLrgb from '../lrgb/convertRgbToLrgb.js';
import convertLrgbToRgb from '../lrgb/convertLrgbToRgb.js';

/*
	The linear-light form of the Display P3 color space.
	It shares the sRGB transfer function with `p3`.
 */

const definition = {
	...rgb,
	mode: 'lp3',
	parse: ['display-p3-linear'],
	serialize: 'display-p3-linear',

	fromMode: {
		p3: color => ({ ...convertRgbToLrgb(color), mode: 'lp3' }),
		rgb: color => convertXyz65ToLp3(convertRgbToXyz65(color)),
		xyz65: convertXyz65ToLp3
	},

	toMode: {
		p3: color => convertLrgbToRgb(color, 'p3'),
		rgb: color => convertXyz65ToRgb(convertLp3ToXyz65(color)),
		xyz65: convertLp3ToXyz65
	}
};

export default definition;
