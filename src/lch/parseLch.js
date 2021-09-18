import { lch } from '../util/regex.js';
import { hue } from '../util/hue.js';

const parseLch = color => {
	let match = color.match(lch);

	if (!match) {
		return undefined;
	}

	let res = {
		mode: 'lch',
		l: +match[1],
		c: Math.max(0, +match[2]),
		h: match[5] === undefined ? hue(match[3], match[4]) : +match[5]
	};

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}

	return res;
};

export default parseLch;
