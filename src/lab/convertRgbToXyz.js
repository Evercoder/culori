/*
	Convert sRGB values to CIE XYZ D65

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

import convertRgbToLrgb from '../lrgb/convertRgbToLrgb';

export default (rgb) => {
	let { r, g, b } = convertRgbToLrgb(rgb);
	return {
		x: 0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
		y: 0.2126729 * r + 0.7151522 * g + 0.0721750 * b,
		z: 0.0193339 * r + 0.1191920 * g + 0.9503041 * b
	};
}