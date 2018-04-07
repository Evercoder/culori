/*
	CIE XYZ D50 values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertLrgbToRgb from '../lrgb/convertLrgbToRgb';

export default ({ x, y, z }) => convertLrgbToRgb({
	r: x * 3.1338561 - y * 1.6168667 - 0.4906146 * z,
	g: x * -0.9787684 + y * 1.9161415 + 0.0334540 * z,
	b: x * 0.0719453 - y * 0.2289914 + 1.4052427 * z
});