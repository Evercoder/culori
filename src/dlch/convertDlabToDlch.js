import normalizeHue from '../util/normalizeHue';

export default ({ l, a, b, alpha }) => {
	let c = Math.sqrt(a * a + b * b);
	let res = {
		mode: 'dlch',
		l: l,
		c: c
	};
	if (c) res.h = normalizeHue((Math.atan2(b, a) * 180) / Math.PI);
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};
