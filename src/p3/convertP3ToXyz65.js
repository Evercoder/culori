/*
	Convert Display P3 values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertRgbToLrgb from '../lrgb/convertRgbToLrgb.js';
import convertLp3ToXyz65 from '../lp3/convertLp3ToXyz65.js';

const convertP3ToXyz65 = rgb => convertLp3ToXyz65(convertRgbToLrgb(rgb));

export default convertP3ToXyz65;
