import hueToDeg from '../util/hue.js';
import { hue_none, num_none, num_per_none, s } from '../util/regex.js';

const lch = new RegExp(
	`^lch\\(\\s*${num_per_none}${s}${num_none}${s}${hue_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseLch = color => {
	let match = color.match(lch);

	if (!match) {
		return undefined;
	}

	let res = { mode: 'lch' };

	if (match[1] !== undefined) {
		res.l = +match[1];
	} else if (match[2] !== undefined) {
		res.l = +match[2];
	}

	if (match[3] !== undefined) {
		res.c = Math.max(0, +match[3]);
	}

	if (match[6] !== undefined) {
		res.h = +match[6];
	} else if (match[4] !== undefined && match[5] !== undefined) {
		res.h = hueToDeg(match[4], match[5]);
	}

	if (match[7] !== undefined) {
		res.alpha = match[7] / 100;
	} else if (match[8] !== undefined) {
		res.alpha = +match[8];
	}

	return res;
};

export default parseLch;
