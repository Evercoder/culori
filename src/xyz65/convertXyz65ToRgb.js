/*
	CIE XYZ D65 values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertLrgbToRgb from '../lrgb/convertLrgbToRgb.js';

const convertXyz65ToRgb = ({ x, y, z, alpha }) => {
	let res = convertLrgbToRgb({
		r: x * 3.2404542 - y * 1.5371385 - 0.4985314 * z,
		g: x * -0.969266 + y * 1.8760108 + 0.041556 * z,
		b: x * 0.0556434 - y * 0.2040259 + 1.0572252 * z
	});
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz65ToRgb;
