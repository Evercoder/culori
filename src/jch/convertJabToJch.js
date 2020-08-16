import normalizeHue from '../util/normalizeHue';

export default ({ j, a, b, alpha }) => {
	let c = Math.sqrt(a * a + b * b);
	let res = {
		mode: 'jch',
		j,
		c
	};
	if (c) {
		res.h = normalizeHue((Math.atan2(b, a) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};
