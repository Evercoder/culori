/*
	Convert linear-light sRGB values to CIE XYZ
	using sRGB’s own white, D65 (no chromatic adaptation)

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

export default ({ r, g, b }) => ({
	x: 0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
	y: 0.2126729 * r + 0.7151522 * g + 0.0721750 * b,
	z: 0.0193339 * r + 0.1191920 * g + 0.9503041 * b
});