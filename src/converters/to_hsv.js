// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
export default function(r, g, b) {
	let M = Math.max(r, g, b), m = Math.min(r, g, b), C = M - m;
	return [
		C === 0 ? NaN : (M == r ? ((g-b)/C) % 6 : M == g ? ((b-r)/C) + 2 : ((r-g)/C) + 4) * 60,
		M === 0 ? 0 : C / M,
		M
	];
}