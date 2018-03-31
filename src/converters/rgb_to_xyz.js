/*
	Convert sRGB values to CIE XYZ
	using sRGB’s own white, D65 (no chromatic adaptation)

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const rgb_to_lrgb = c => c < 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

export default ({ r, g, b }) => ({
	x: rgb_to_lrgb(0.4124564 * r + 0.3575761 * g + 0.1804375 * b),
	y: rgb_to_lrgb(0.2126729 * r + 0.7151522 * g + 0.0721750 * b),
	z: rgb_to_lrgb(0.0193339 * r + 0.1191920 * g + 0.9503041 * b)
});