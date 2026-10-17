/*
	CIE XYZ D65 values to Display P3.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertLrgbToRgb from '../lrgb/convertLrgbToRgb.js';
import convertXyz65ToLp3 from '../lp3/convertXyz65ToLp3.js';

const convertXyz65ToP3 = color =>
	convertLrgbToRgb(convertXyz65ToLp3(color), 'p3');

export default convertXyz65ToP3;
