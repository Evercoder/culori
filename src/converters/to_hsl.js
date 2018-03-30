// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
import { IS_CULORI, IS_HSL, ALPHA_IMPLIED } from '../api/flags';

export default function({ r, g, b, a, flags }, additional_flags = 0) {
	if (flags & IS_CULORI && flags & IS_HSL) return arguments[0];
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	let res = {
		s: M === m ? 0 : (M - m) / (1 - Math.abs(M + m - 1)),
		l: 0.5 * (M + m)
	};
	if (M - m !== 0) {
		res['h'] = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
	}
	res['flags'] = IS_CULORI | IS_HSL | additional_flags;
	if (a !== undefined) {
		res['a'] = a;
	} else {
		res['flags'] |= ALPHA_IMPLIED;
	}
	return res;
}