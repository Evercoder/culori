import hueToDeg from '../util/hue.js';
import {
	hue,
	per,
	num_per,
	hue_none,
	per_none,
	num_per_none,
	c,
	s
} from '../util/regex.js';

/*
	hsl() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hsl-notation
 */
const hsl_old = new RegExp(
	`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);
const hsl_new = new RegExp(
	`^hsla?\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseHsl = color => {
	let match = color.match(hsl_old) || color.match(hsl_new);
	if (!match) return;
	let res = { mode: 'hsl' };

	if (match[3] !== undefined) {
		res.h = +match[3];
	} else if (match[1] !== undefined && match[2] !== undefined) {
		res.h = hueToDeg(match[1], match[2]);
	}

	if (match[4] !== undefined) {
		res.s = Math.min(Math.max(0, match[4] / 100), 1);
	}

	if (match[5] !== undefined) {
		res.l = Math.min(Math.max(0, match[5] / 100), 1);
	}

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

export default parseHsl;
