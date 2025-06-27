const convertOklabToLrgb = ({ l, a, b, alpha }) => {
	if (l === undefined) l = 0;
	if (a === undefined) a = 0;
	if (b === undefined) b = 0;

	let L = Math.pow(l + 0.3963377773761749 * a + 0.2158037573099136 * b, 3);
	let M = Math.pow(l - 0.1055613458156586 * a - 0.0638541728258133 * b, 3);
	let S = Math.pow(l - 0.0894841775298119 * a - 1.2914855480194092 * b, 3);

	let res = {
		mode: 'lrgb',
		r:
			4.0767416360759574 * L -
			3.3077115392580616 * M +
			0.2309699031821044 * S,
		g:
			-1.2684379732850317 * L +
			2.6097573492876887 * M -
			0.3413193760026573 * S,
		b:
			-0.0041960761386756 * L -
			0.7034186179359362 * M +
			1.7076146940746117 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertOklabToLrgb;
