// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default function (h, s, i) {
	let f = Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: return [i * (1 + s * (3 / (2 - f) - 1)), i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), i * (1 - s)];
		case 1: return [i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), i * (1 + s * (3 / (2 - f) - 1)), i * (1 - s)];
		case 2: return [i * (1 - s), i * (1 + s * (3 / (2 - f) - 1)), i * (1 + s * (3 * (1 - f) / (2 - f) - 1))];
		case 3: return [i * (1 - s), i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), i * (1 + s * (3 / (2 - f) - 1))];
		case 4: return [i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), i * (1 - s), i * (1 + s * (3 / (2 - f) - 1))];
		case 5: return [i * (1 + s * (3 / (2 - f) - 1)), i * (1 - s), i * (1 + s * (3 * (1 - f) / (2 - f) - 1))];
	}
}