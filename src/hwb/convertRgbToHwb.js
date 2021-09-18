/*
	RGB to HWB converter
	--------------------

	References:
		* https://drafts.csswg.org/css-color/#hwb-to-rgb
		* https://en.wikipedia.org/wiki/HWB_color_model
		* http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
 */

import convertRgbToHsv from '../hsv/convertRgbToHsv.js';

export default function convertRgbToHwb(rgba) {
	let hsv = convertRgbToHsv(rgba);
	if (hsv === undefined) return undefined;
	let res = {
		mode: 'hwb',
		w: (1 - hsv.s) * hsv.v,
		b: 1 - hsv.v
	};
	if (hsv.h !== undefined) res.h = hsv.h;
	if (hsv.alpha !== undefined) res.alpha = hsv.alpha;
	return res;
}
