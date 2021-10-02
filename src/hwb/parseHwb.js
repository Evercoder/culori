import { hue, per, num_per, s } from '../util/regex.js';
import hueToDeg from '../util/hue.js';

/*
	hwb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hwb-notation
 */
const hwb = new RegExp(
	`^hwb\\(\\s*${hue}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const parseHwb = color => {
	let match = color.match(hwb);
	if (!match) return undefined;
	let res = {
		mode: 'hwb',
		h: match[3] === undefined ? hueToDeg(match[1], match[2]) : +match[3],
		w: match[4] / 100,
		b: match[5] / 100
	};

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

export default parseHwb;
