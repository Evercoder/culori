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
		r + g + b === 0 ? 0 : 1 - 3 * m / (r + g + b),
		(r + g + b) / 3
	];
}