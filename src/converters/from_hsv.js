// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default function({ h, s, v, a }) {
	let f = Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: return { r: v, g: v * (1 - s * f), b: v * (1 - s), a: a };
		case 1: return { r: v * (1 - s * f), g: v, b: v * (1 - s), a: a };
		case 2: return { r: v * (1 - s), g: v, b: v * (1 - s * f), a: a };
		case 3: return { r: v * (1 - s), g: v * (1 - s * f), b: v, a: a };
		case 4: return { r: v * (1 - s * f), g: v * (1 - s), b: v, a: a };
		case 5: return { r: v, g: v * (1 - s), b: v * (1 - s * f), a: a };
	}
};