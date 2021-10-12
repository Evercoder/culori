import { hue_none, per_none, num_per_none, s } from '../util/regex.js';
import hueToDeg from '../util/hue.js';

/*
	hwb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hwb-notation
 */
const hwb = new RegExp(
	`^hwb\\(\\s*${hue_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseHwb = color => {
	let match = color.match(hwb);
	if (!match) {
		return undefined;
	}

	let res = { mode: 'hwb' };

	if (match[3] !== undefined) {
		res.h = +match[3];
	} else if (match[1] !== undefined && match[2] !== undefined) {
		res.h = hueToDeg(match[1], match[2]);
	}

	if (match[4] !== undefined) {
		res.w = match[4] / 100;
	}
	if (match[5] !== undefined) {
		res.b = match[5] / 100;
	}

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

export default parseHwb;
