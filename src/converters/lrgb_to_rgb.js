/*
	Convert linear light (un-companded) sRGB to sRGB.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* https://en.wikipedia.org/wiki/SRGB

 */
export default ({ r, g, b }) => ({
	r: r > 0.0031308 ? 1.055 * Math.pow(r, 1/2.4) - 0.055 : 12.92 * r,
	g: g > 0.0031308 ? 1.055 * Math.pow(g, 1/2.4) - 0.055 : 12.92 * g,
	b: b > 0.0031308 ? 1.055 * Math.pow(b, 1/2.4) - 0.055 : 12.92 * b
});