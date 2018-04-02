/*
	CIE XYZ values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const lrgb_to_rgb = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1/2.4) - 0.055 : 12.92 * c;

export default ({ x, y, z }) => ({
	r: lrgb_to_rgb(x * 3.2406255 - y * 1.537208 - 0.4986286 * z),
	g: lrgb_to_rgb(x * -0.9689307 + y * 1.8757561 + 0.0415175 * z),
	b: lrgb_to_rgb(x * 0.0557101 - y * 0.2040211 + 1.0569959 * z)
});