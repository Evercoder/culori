// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
export default function(r, g, b) {
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	return [
		M === m ? 
			undefined : 
			(
				M === r ? 
					(g - b) / (M - m) + (g < b) * 6
					: M === g ? 
						(b - r) / (M - m) + 2 
						: (r - g) / (M - m) + 4
			) * 60,
		M === m ? 0 : (M - m) / (1 - Math.abs(M + m - 1)),
		0.5 * (M + m)
	];
}