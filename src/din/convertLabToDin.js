import { kE, cos16, sin16 } from './constants';

export default ({ l, a, b, alpha }) => {

	let res = { 
		mode: 'din',
		l: (1/kE) * 105.51 * Math.log(1 + 0.0158 * l) 
	};

	if (a === 0 && b === 0) {
		res.a = res.b = 0;
	} else {
		let e = a * cos16 + b * sin16;
		let f = 0.7 * (b * cos16 - a * sin16);
		let G = Math.sqrt(e * e + f * f);
		let k = Math.log(1 + 0.045 * G) / 0.045;
		res.a = k * e / G;
		res.b = k * f / G;
	}

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};