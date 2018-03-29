// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
export default function ({h, s, i, a}) {
	let f = Math.abs(h/60 % 2 - 1);
	switch (Math.floor(h/60)) {
		case 0: 
			return {
				r: i * (1 + s * (3 / (2 - f) - 1)), 
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				b: i * (1 - s), 
				a: a
			};
		case 1: 
			return {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				g: i * (1 + s * (3 / (2 - f) - 1)), 
				b: i * (1 - s), 
				a: a
			};
		case 2: 
			return {
				r: i * (1 - s), 
				g: i * (1 + s * (3 / (2 - f) - 1)), 
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				a: a
			};
		case 3: 
			return {
				r: i * (1 - s), 
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				b: i * (1 + s * (3 / (2 - f) - 1)), 
				a: a
			};
		case 4: 
			return {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				g: i * (1 - s), 
				b: i * (1 + s * (3 / (2 - f) - 1)), 
				a: a
			};
		case 5: 
			return {
				r: i * (1 + s * (3 / (2 - f) - 1)), 
				g: i * (1 - s), 
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				a: a
			};
	}
}