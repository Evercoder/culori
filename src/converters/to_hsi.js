// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
export default function(r, g, b) {
	let M = Math.max(r, g, b), m = Math.min(r, g, b), C = M - m;
	return [
		C === 0 ? NaN : (M == r ? ((g-b)/C) % 6 : M == g ? ((b-r)/C) + 2 : ((r-g)/C) + 4) * 60,
		r + g + b === 0 ? 0 : 1 - 3 * m / (r + g + b),
		(r + g + b) / 3
	];
}