const convertLrgbToOklab = ({ r, g, b, alpha }) => {
	let L = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
	let M = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
	let S = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

	let res = {
		mode: 'oklab',
		l: 0.2104542553 * L + 0.793617785 * M - 0.0040720468 * S,
		a: 1.9779984951 * L - 2.428592205 * M + 0.4505937099 * S,
		b: 0.0259040371 * L + 0.7827717662 * M - 0.808675766 * S
	};

	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertLrgbToOklab;
