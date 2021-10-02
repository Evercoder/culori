import {
	num,
	per,
	num_per,
	num_none,
	per_none,
	num_per_none,
	c,
	s
} from '../util/regex.js';

/*
	rgb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#rgb-functions
 */
const rgb_num_old = new RegExp(
	`^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);

const rgb_per_old = new RegExp(
	`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);

const rgb_num_new = new RegExp(
	`^rgb\\(\\s*${num_none}${s}${num_none}${s}${num_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const rgb_per_new = new RegExp(
	`^rgb\\(\\s*${per_none}${s}${per_none}${s}${per_none}\\s*(?:\\/\\s*${num_per_none}\\s*)?\\)$`
);

const parseRgb = color => {
	let match, res;

	if ((match = color.match(rgb_num_old) || color.match(rgb_num_new))) {
		res = {
			mode: 'rgb',
			r: match[1] !== undefined ? match[1] / 255 : 0,
			g: match[2] !== undefined ? match[2] / 255 : 0,
			b: match[3] !== undefined ? match[3] / 255 : 0
		};
	} else if ((match = color.match(rgb_per_old) || color.match(rgb_per_new))) {
		res = {
			mode: 'rgb',
			r: match[1] !== undefined ? match[1] / 100 : 0,
			g: match[2] !== undefined ? match[2] / 100 : 0,
			b: match[3] !== undefined ? match[3] / 100 : 0
		};
	} else {
		return undefined;
	}

	if (match[4] !== undefined) {
		res.alpha = match[4] / 100;
	} else if (match[5] !== undefined) {
		res.alpha = +match[5];
	}

	return res;
};

export default parseRgb;
