// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default function(h, s, l) {
	let m1 = l + s * (l < 0.5 ? l : 1 - l);
	let m2 = m1 - (m1 - l) * 2 * Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: return [m1, m2, 2 * l - m1];
		case 1: return [m2, m1, 2 * l - m1];
		case 2: return [2 * l - m1, m1, m2];
		case 3: return [2 * l - m1, m2, m1];
		case 4: return [m2, 2 * l - m1, m1];
		case 5: return [m1, 2 * l - m1, m2];
	}
};