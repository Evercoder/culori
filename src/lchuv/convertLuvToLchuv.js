import normalizeHue from '../util/normalizeHue';

export default ({ l, u, v, alpha }) => {
	let c = Math.sqrt(u * u + v * v);
	let res = {
		mode: 'lchuv',
		l: l,
		c: c
	};
	if (c) {
		res.h = normalizeHue((Math.atan2(v, u) * 180) / Math.PI);
	}
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};
