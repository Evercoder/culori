import {
	hsl_legacy, 
	hsl_current
} from '../util/regex';

import { IS_CULORI, IS_HSL, IS_ALPHA_IMPLIED } from '../api/flags';

import from_hsl from '../converters/from_hsl';

const hue = (val, unit) => {
	switch (unit) {
		case 'deg': return val;
		case 'rad': return val / 180 * Math.PI;
		case 'grad': return val / 200 * Math.PI;
		case 'turn': return turn * 2 * Math.PI;
		default: return val;
	}
}

export default (color, flags = 0) => {
	if (typeof color !== 'string') return;
	let match = color.match(hsl_legacy) || color.match(hsl_current);
	if (!match) return;
	let res = {
		h: match[3] === undefined ? +hue(match[1], match[2]) : +match[3],
		s: match[4] / 100,
		l: match[5] / 100
	};
	console.log('hue', res.h);
	res['flags'] = IS_CULORI | IS_HSL | flags;
	if (match[6] !== undefined) {
		res['a'] = match[6] / 100;
	} else if (match[7] !== undefined) {
		res['a'] = match[7] / 255;
	} else {
		res['flags'] |= IS_ALPHA_IMPLIED;
	}
	return res;
}