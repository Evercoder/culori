import { kCH, kE, sinθ, cosθ, θ, factor } from './constants';

/*
	Convert CIELab D65 to DIN99o LCh
	================================
 */

export default ({ l, a, b, alpha }) => {
	let e = a * cosθ + b * sinθ;
	let f = 0.83 * (b * cosθ - a * sinθ);
	let G = Math.sqrt(e * e + f * f);
	let res = {
		mode: 'dlch',
		l: (factor / kE) * Math.log(1 + 0.0039 * l),
		c: Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE)
	};

	if (res.c) {
		res.h = ((Math.atan2(f, e) + θ) / Math.PI) * 180;
	}

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};
