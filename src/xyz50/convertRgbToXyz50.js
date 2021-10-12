/*
	Convert sRGB values to CIE XYZ D50

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
	
*/

import convertRgbToLrgb from '../lrgb/convertRgbToLrgb.js';

const convertRgbToXyz50 = rgb => {
	let { r, g, b, alpha } = convertRgbToLrgb(rgb);
	let res = {
		mode: 'xyz50',
		x: 0.4360747 * r + 0.3850649 * g + 0.1430804 * b,
		y: 0.2225045 * r + 0.7168786 * g + 0.0606169 * b,
		z: 0.0139322 * r + 0.0971045 * g + 0.7141733 * b
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertRgbToXyz50;
