/*
	CIE XYZ values to linear-light sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

export default ({ x, y, z }) => ({
	r: 3.2404542 * x - 1.5371385 * y - 0.4985314 * z,
    g: -0.9692660 * x + 1.8760108 * y + 0.0415560 * z,
    b: 0.0556434 * x - 0.2040259 * y + 1.0572252 * z
});