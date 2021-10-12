import hueToDeg from '../util/hue.js';
import {
	hue_none,
	num_none,
	per_none,
	num_per_none,
	s
} from '../util/regex.js';

const lch = new RegExp(
	`^lch\\(\\s*${per_none}${s}${num_none}${s}${hue_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseLch = color => {
	let match = color.match(lch);

	if (!match) {
		return undefined;
	}

	let res = { mode: 'lch' };

	if (match[1] !== undefined) {
		res.l = +match[1];
	}

	if (match[2] !== undefined) {
		res.c = Math.max(0, +match[2]);
	}

	if (match[5] !== undefined) {
		res.h = +match[5];
	} else if (match[3] !== undefined && match[4] !== undefined) {
		res.h = hueToDeg(match[3], match[4]);
	}

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}

	return res;
};

export default parseLch;
