/*
	Convert sRGB values to CIE XYZ D50

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const rgb_to_lrgb = c => c < 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

export default ({ r, g, b }) => {
	r = rgb_to_lrgb(r), g = rgb_to_lrgb(g), b = rgb_to_lrgb(b);
	return {
		x: 0.4360747 * r + 0.3850649 * g + 0.1430804 * b,
		y: 0.2225045 * r + 0.7168786 * g + 0.0606169 * b,
		z: 0.0139322 * r + 0.0971045 * g + 0.7141733 * b
	};
}