/*
	HWB to RGB converter
	--------------------

	References:
		* https://drafts.csswg.org/css-color/#hwb-to-rgb
		* https://en.wikipedia.org/wiki/HWB_color_model
		* http://alvyray.com/Papers/CG/HWB_JGTv208.pdf
 */

import from_hsv from './from_hsv';

export default function ({ h, w, b, a }) {
	// normalize w + b to 1
	if (w + b > 1) {
		let s = w + b;
		w /= s; 
		b /= s;
	}
	return from_hsv({ 
		h: h, 
		s: b === 1 ? 1 : 1 - w / (1 - b), 
		v: 1 - b,
		a: a
	}); 
};