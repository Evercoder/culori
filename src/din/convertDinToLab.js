import { kCH, kE, cosθ, sinθ, θ } from './constants';

export default ({ l, a, b, alpha }) => {

	let res = { 
		mode: 'lab',
		l: (Math.exp(l * kE / 303.67) - 1) / 0.0039
	};

	let h = Math.atan2(b, a) - θ;
	let C = Math.sqrt(a * a + b * b);
	let G = (Math.exp(0.0435 * C * kCH * kE) - 1) / 0.075;
	let e = G * Math.cos(h);
	let f = G * Math.sin(h);

	res.a = e * cosθ - (f / 0.83) * sinθ;
	res.b = e * sinθ + (f / 0.83) * cosθ;

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};