const convertOklabToLrgb = ({ l, a, b, alpha }) => {
	let L = Math.pow(l + 0.3963377774 * a + 0.2158037573 * b, 3);
	let M = Math.pow(l - 0.1055613458 * a - 0.0638541728 * b, 3);
	let S = Math.pow(l - 0.0894841775 * a - 1.291485548 * b, 3);

	let res = {
		mode: 'lrgb',
		r: +4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
		g: -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
		b: -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertOklabToLrgb;
