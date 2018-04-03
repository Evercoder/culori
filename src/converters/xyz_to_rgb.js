/*
	CIE XYZ D50 values to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
*/

const lrgb_to_rgb = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1/2.4) - 0.055 : 12.92 * c;

export default ({ x, y, z }) => ({
	r: lrgb_to_rgb(x * 3.1338561 - y * 1.6168667 - 0.4906146 * z),
	g: lrgb_to_rgb(x * -0.9787684 + y * 1.9161415 + 0.0334540 * z),
	b: lrgb_to_rgb(x * 0.0719453 - y * 0.2289914 + 1.4052427 * z)
});