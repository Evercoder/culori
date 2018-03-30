// Based on: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
import { IS_CULORI, IS_HSV, IS_ALPHA_IMPLIED, IS_NORMALIZED, IS_HUE_UNDEFINED } from '../api/flags';

export default function({ r, g, b, a }, additional_flags = 0) {
	if (flags & IS_CULORI && flags & IS_HSV) return arguments[0];
	let M = Math.max(r, g, b), m = Math.min(r, g, b);
	let res = {
		s: M === 0 ? 0 : 1 - m / M,
		v: M
	};
	res['flags'] = IS_CULORI | IS_HSV | IS_NORMALIZED | additional_flags;
	if (M - m !== 0) {
		res['h'] = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
	} else {
		res['flags'] |= IS_HUE_UNDEFINED;
	}
	if (a !== undefined) {
		res['a'] = a;
	} else {
		res['flags'] |= IS_ALPHA_IMPLIED;
	}
	return res;
}