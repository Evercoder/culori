/*
	This RGB to Cubehelix conversion is based on 
	Mike Bostock's work in d3-color.

	Reference: 
	https://github.com/d3/d3-color/blob/master/src/cubehelix.js
 */

import { radToDeg, M } from './constants';
import normalizeHue from '../util/normalizeHue';

let A = M[0],
	B = M[1],
	C = M[2],
	D = M[3],
	E = M[4];

let ED = E * D,
	EB = E * B,
	BC_DA = B * C - D * A;

export default ({ r, g, b, alpha }) => {

	let l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB);
	let bl = b - l;
	let k = (E * (g - l) - C * bl) / D;

	let res = { 
		mode: 'cubehelix',
		l: l,
		s: (l === 0 || l === 1) ? undefined : Math.sqrt(k * k + bl * bl) / (E * l * (1 - l))
	};

	if (res.s) res.h = Math.atan2(k, bl) * radToDeg - 120;
	if (alpha !== undefined) res.alpha = alpha;

	return res;
}