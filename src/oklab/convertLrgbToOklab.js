const convertLrgbToOklab = ({ r, g, b, alpha }) => {
	let L = Math.cbrt(0.412165612 * r + 0.536275208 * g + 0.0514575653 * b);
	let M = Math.cbrt(0.211859107 * r + 0.6807189584 * g + 0.107406579 * b);
	let S = Math.cbrt(0.0883097947 * r + 0.2818474174 * g + 0.6302613616 * b);

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
