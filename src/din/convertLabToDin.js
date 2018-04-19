import { kCH, kE, cosθ, sinθ, θ } from './constants';

export default ({ l, a, b, alpha }) => {

	let res = { 
		mode: 'din',
		l: 303.67 / kE * Math.log(1 + 0.0039 * l) 
	};

	if (a === 0 && b === 0) {
		res.a = res.b = 0;
	} else {
		let e = a * cosθ + b * sinθ;
		let f = 0.83 * (b * cosθ - a * sinθ);
		let h = Math.atan2(f, e);
		let G = Math.sqrt(e * e + f * f);
		let C = Math.log(1 + 0.075 * G) / (0.0435 * kCH * kE);
		let h99o = h + θ;
		res.a = C * Math.cos(h99o);
		res.b = C * Math.sin(h99o);
	}

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};