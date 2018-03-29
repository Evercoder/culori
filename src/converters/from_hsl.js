// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default function({ h, s, l, a }) {
	let m1 = l + s * (l < 0.5 ? l : 1 - l);
	let m2 = m1 - (m1 - l) * 2 * Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: return { r: m1, g: m2, b: 2 * l - m1, a: a };
		case 1: return { r: m2, g: m1, b: 2 * l - m1, a: a };
		case 2: return { r: 2 * l - m1, g: m1, b: m2, a: a };
		case 3: return { r: 2 * l - m1, g: m2, b: m1, a: a };
		case 4: return { r: m2, g: 2 * l - m1, b: m1, a: a };
		case 5: return { r: m1, g: 2 * l - m1, b: m2, a: a };
	}
};