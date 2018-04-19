import { kE, kCH, cos16, sin16 } from './constants';

export default ({ l, a, b, alpha }) => {

	let res = { 
		mode: 'lab',
		l: (Math.exp(l * kE / 105.51) - 1) / 0.0158
	};

	let h = Math.atan2(b, a);
	let c = Math.sqrt(a * a + b * b);
	let G = (Math.exp(0.045 * c * kCH * kE) - 1) / 0.045;
	let e = G * Math.cos(h);
	let f = G * Math.sin(h);

	res.a = e * cos16 - (f / 0.7) * sin16;
	res.b = e * sin16 + (f / 0.7) * cos16;

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};