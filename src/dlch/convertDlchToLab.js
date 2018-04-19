import { kCH, kE, sinθ, cosθ, θ } from './constants';

/*
	Convert DIN99oLCh to CIELab
	---------------------------
 */

export default ({ l, c, h, alpha }) => {

	let res = {
		mode: 'lab',
		l: (Math.exp(l * kE / 303.67) - 1) / 0.0039
	}

	if (h === undefined) {
		res.a = res.b = 0;
	} else {
		let G = (Math.exp(0.0435 * c * kCH * kE) - 1) / 0.075;
		let e = G * Math.cos((h - θ) / Math.PI * 180);
		let f = G * Math.sin((h - θ) / Math.PI * 180);
		res.a = e * cosθ - (f / 0.83) * sinθ;
		res.b = e * sinθ + (f / 0.83) * cosθ;
	};

	if (alpha !== undefined) res.alpha = alpha;
	return res;
}