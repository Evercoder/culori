/*
	Convert sRGB to linear light (un-companded) form.

	References:
		* https://drafts.csswg.org/css-color/#color-conversion-code
		* https://en.wikipedia.org/wiki/SRGB

 */
export default ({ r, g, b }) => ({
	r: r < 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
	g: g < 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
	b: b < 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
});