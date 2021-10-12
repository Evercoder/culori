import { num_none, num_per_none, s } from '../util/regex.js';

/*
	lab() and lch() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#lab-colors
 */
const lab = new RegExp(
	`^lab\\(\\s*${num_per_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseLab = color => {
	let match = color.match(lab);
	if (!match) {
		return undefined;
	}

	let res = { mode: 'lab' };

	if (match[1] !== undefined) {
		res.l = +match[1];
	} else if (match[2] !== undefined) {
		res.l = +match[2];
	}

	if (match[3] !== undefined) {
		res.a = +match[3];
	}

	if (match[4] !== undefined) {
		res.b = +match[4];
	}

	if (match[5] !== undefined) {
		res.alpha = match[5] / 100;
	} else if (match[6] !== undefined) {
		res.alpha = +match[6];
	}

	return res;
};

export default parseLab;
