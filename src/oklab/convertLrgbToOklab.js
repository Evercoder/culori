const convertLrgbToOklab = ({ r, g, b, alpha }) => {
	if (r === undefined) r = 0;
	if (g === undefined) g = 0;
	if (b === undefined) b = 0;

	let L = Math.cbrt(
		0.412221469470763 * r + 0.5363325372617348 * g + 0.0514459932675022 * b
	);
	let M = Math.cbrt(
		0.2119034958178252 * r + 0.6806995506452344 * g + 0.1073969535369406 * b
	);
	let S = Math.cbrt(
		0.0883024591900564 * r + 0.2817188391361215 * g + 0.6299787016738222 * b
	);

	let res = {
		mode: 'oklab',
		l:
			0.210454268309314 * L +
			0.7936177747023054 * M -
			0.0040720430116193 * S,
		a:
			1.9779985324311684 * L -
			2.4285922420485799 * M +
			0.450593709617411 * S,
		b:
			0.0259040424655478 * L +
			0.7827717124575296 * M -
			0.8086757549230774 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertLrgbToOklab;
