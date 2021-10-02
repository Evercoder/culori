import { num, per, num_per, c, s } from '../util/regex.js';

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
	`^rgba?\\(\\s*${num}${s}${num}${s}${num}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);
const rgb_per_new = new RegExp(
	`^rgba?\\(\\s*${per}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const parseRgb = color => {
	let match, res;

	if ((match = color.match(rgb_num_old) || color.match(rgb_num_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 255,
			g: match[2] / 255,
			b: match[3] / 255
		};
	} else if ((match = color.match(rgb_per_old) || color.match(rgb_per_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 100,
			g: match[2] / 100,
			b: match[3] / 100
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
