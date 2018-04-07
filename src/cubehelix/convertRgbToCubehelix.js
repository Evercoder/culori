/*
	This RGB to Cubehelix conversion is based on 
	Mike Bostock's work in d3-color.

	Reference: 
	https://github.com/d3/d3-color/blob/master/src/cubehelix.js
 */

import { radToDeg, M } from './constants';
import normalizeHue from '../util/normalizeHue';

let x = M[1] * M[2] - M[3] * M[0];
let y = M[4] * M[3];
let z = M[4] * M[1];

export default ({ r, g, b, alpha }) => {

	let l = (x * b + y * r - z * g) / (x + y - z);
	let bl = b - l;
	let k = (M[4] * (g - l) - M[2] * bl) / M[3];

	let res = { 
		mode: 'cubehelix',
		l: l,
		s: (l === 0 || l === 1) ? undefined : Math.sqrt(k * k + bl * bl) / (M[4] * l * (1 - l))
	};

	if (res.s) res.h = normalizeHue(Math.atan2(k, bl) * radToDeg - 120);
	if (alpha !== undefined) res.alpha = alpha;

	return res;
}