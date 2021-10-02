import { num, num_per, s } from '../util/regex.js';

/*
	lab() and lch() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#lab-colors
 */
const lab = new RegExp(
	`^lab\\(\\s*${num}%?${s}${num}${s}${num}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const parseLab = color => {
	let match = color.match(lab);
	if (!match) {
		return undefined;
	}

	let res = {
		mode: 'lab',
		l: +match[1],
		a: +match[2],
		b: +match[3]
	};

	if (match[4] !== undefined) {
		res.alpha = match[4] / 100;
	} else if (match[5] !== undefined) {
		res.alpha = +match[5];
	}

	return res;
};

export default parseLab;
