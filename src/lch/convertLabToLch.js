import normalizeHue from '../util/normalizeHue';
import round from '../round';

let round_chroma = round(4);

/* 
	References: 
		* https://drafts.csswg.org/css-color/#lab-to-lch
		* https://drafts.csswg.org/css-color/#color-conversion-code
*/
export default ({ l, a, b, alpha }) => {
	// Fixes achromatic colors having a _slight_ chroma due to floating-point errors
	// and approximated computations in sRGB <-> CIELab.
	let c = round_chroma(Math.sqrt(a * a + b * b));
	let res = {
		mode: 'lch',
		l: l,
		c: c
	}
	if (c) res.h = normalizeHue(Math.atan2(b, a) * 180 / Math.PI);
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};