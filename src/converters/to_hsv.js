// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
export default function(r, g, b) {
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	return [
		M - m === 0 ? 
			undefined : 
			(
				M === r ? 
					(g - b) / (M - m) + (g < b) * 6
					: M === g ? 
						(b - r) / (M - m) + 2 
						: (r - g) / (M - m) + 4
			) * 60,
		M === 0 ? 0 : 1 - m / M,
		M
	];
}