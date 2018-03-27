// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default hsv2rgb = (h, s, v) => {
	let f = Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: return [v, v * (1 - s * f), v * (1 - s)];
		case 1: return [v * (1 - s * f), v, v * (1 - s)];
		case 2: return [v * (1 - s), v, v * (1 - s * f)];
		case 3: return [v * (1 - s), v * (1 - s * f), v];
		case 4: return [v * (1 - s * f), v * (1 - s), v];
		case 5: return [v, v * (1 - s), v * (1 - s * f)];
	}
};