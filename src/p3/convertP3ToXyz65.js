/*
	Convert Display P3 values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertRgbToLrgb from '../lrgb/convertRgbToLrgb.js';

const convertP3ToXyz65 = rgb => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: 'xyz65',
		x: 0.4865709 * r + 0.2656676 * g + 0.1982172 * b,
		y: 0.2289745 * r + 0.6917385 * g + 0.0792869 * b,
		z: 0.0 * r + 0.0451133 * g + 1.0439443 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertP3ToXyz65;
