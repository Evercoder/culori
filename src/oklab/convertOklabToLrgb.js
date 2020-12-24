export default ({ l, a, b, alpha }) => {
	let L = Math.pow(l + 0.3963377774 * a + 0.2158037573 * b, 3);
	let M = Math.pow(l - 0.1055613458 * a - 0.0638541728 * b, 3);
	let S = Math.pow(l - 0.0894841775 * a - 1.291485548 * b, 3);

	let res = {
		mode: 'lrgb',
		r: +4.0767245293 * L - 3.3072168827 * M + 0.2307590544 * S,
		g: -1.2681437731 * L + 2.6093323231 * M - 0.341134429 * S,
		b: -0.0041119885 * L - 0.7034763098 * M + 1.7068625689 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};
