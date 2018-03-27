
// Based on:
// https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
const toRGB = (H, S, L) => {
	let m1 = L + S * (L < 0.5 ? L : (1 - L));
	let m2 = L - S * (L < 0.5 ? L : (1 - L));
	let m3 = L + S * (L < 0.5 ? L : (1 - L)) * (1 - 2 * Math.abs(H/60 % 2 - 1));
	switch (Math.floor(H/60)) {
		case 0:
			return [m1, m3, m2];
		case 1:
			return [m3, m1, m2];
		case 2:
			return [m2, m1, m3];
		case 3:
			return [m2, m3, m1];
		case 4:
			return [m3, m2, m1];
		case 5:
			return [m1, m2, m3];
	}
};

export default hsl = {};