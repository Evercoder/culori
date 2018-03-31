/*
	CIE XYZ values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const lrgb_to_rgb = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1/2.4) - 0.055 : 12.92 * c;

export default ({ x, y, z }) => ({
	r: lrgb_to_rgb(x * 3.2404542 - y * 1.5371385 - 0.4985314 * z),
	g: lrgb_to_rgb(x * -0.9692660 + y * 1.8760108 + 0.0415560 * z),
	b: lrgb_to_rgb(x * 0.0556434 - y * 0.2040259 + 1.0572252 * z)
});