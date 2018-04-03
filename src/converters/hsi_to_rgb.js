// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB

export default function ({ h, s, i, alpha }) {
	h = (h < 0 ? h + 360 : h) % 360;
	let f = Math.abs(h/60 % 2 - 1);
	let res;
	switch (Math.floor(h/60)) {
		case 0: 
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)), 
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				b: i * (1 - s)
			};
			break;
		case 1: 
			res = {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				g: i * (1 + s * (3 / (2 - f) - 1)), 
				b: i * (1 - s)
			};
			break;
		case 2: 
			res = {
				r: i * (1 - s), 
				g: i * (1 + s * (3 / (2 - f) - 1)), 
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1))
			};
			break;
		case 3: 
			res = {
				r: i * (1 - s), 
				g: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 4: 
			res = {
				r: i * (1 + s * (3 * (1 - f) / (2 - f) - 1)), 
				g: i * (1 - s), 
				b: i * (1 + s * (3 / (2 - f) - 1))
			};
			break;
		case 5: 
			res = {
				r: i * (1 + s * (3 / (2 - f) - 1)), 
				g: i * (1 - s), 
				b: i * (1 + s * (3 * (1 - f) / (2 - f) - 1))
			};
			break;
	}

	res.mode = 'rgb';
	if (alpha !== undefined) res.alpha = alpha;
	return res;
}