/*
	Convert sRGB values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertRgbToLrgb from '../lrgb/convertRgbToLrgb.js';

const convertRgbToXyz65 = rgb => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: 'xyz65',
		x: 0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
		y: 0.2126729 * r + 0.7151522 * g + 0.072175 * b,
		z: 0.0193339 * r + 0.119192 * g + 0.9503041 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertRgbToXyz65;
