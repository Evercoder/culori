/*
	CIE XYZ D65 values to Display P3.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertLrgbToRgb from '../lrgb/convertLrgbToRgb.js';

const convertXyz65ToP3 = ({ x, y, z, alpha }) => {
	let res = convertLrgbToRgb(
		{
			r: x * 2.4934969 - y * 0.9313836 - 0.4027107 * z,
			g: x * -0.8294889 + y * 1.762664 + 0.0236246 * z,
			b: x * 0.0358458 - y * 0.0761723 + 0.9568845 * z
		},
		'p3'
	);
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertXyz65ToP3;
