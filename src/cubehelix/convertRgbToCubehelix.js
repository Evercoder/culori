/*
	Convert a RGB color to the Cubehelix HSL color space.

	This computation is not present in Green's paper:
	https://arxiv.org/pdf/1108.5083.pdf

	...but can be derived from the inverse, HSL to RGB conversion.

	It matches the math in Mike Bostock's D3 implementation:
	
	https://github.com/d3/d3-color/blob/master/src/cubehelix.js
 */

import { radToDeg, M } from './constants';
import normalizeHue from '../util/normalizeHue';

let DE = M[3] * M[4];
let BE = M[1] * M[4];
let BC = M[1] * M[2];
let AD = M[0] * M[3];

export default ({ r, g, b, alpha }) => {

	let l = (r * DE - g * BE + (BC - AD) * b) / (BC - AD + DE - BE));
	let y = b - l;
	let x = ((g - l) * M[4] - M[2] * (b - l)) / M[3];

	let res = { 
		mode: 'cubehelix',
		l: l,
		s: (l === 0 || l === 1) ? undefined : Math.sqrt(x * x + y * y) / (E * l * (1 - l))
	};

	if (res.s) res.h = Math.atan2(y, x) * radToDeg - 120;
	if (alpha !== undefined) res.alpha = alpha;

	return res;
}