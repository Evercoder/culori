import hueToDeg from '../util/hue.js';
import { hue, per, num_per, c, s } from '../util/regex.js';

/*
	hsl() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hsl-notation
 */
const hsl_old = new RegExp(
	`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);
const hsl_new = new RegExp(
	`^hsla?\\(\\s*${hue}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const parseHsl = color => {
	let match = color.match(hsl_old) || color.match(hsl_new);
	if (!match) return;
	let res = {
		mode: 'hsl',
		h: match[3] === undefined ? hueToDeg(match[1], match[2]) : +match[3],
		s: Math.min(Math.max(0, match[4] / 100), 1),
		l: Math.min(Math.max(0, match[5] / 100), 1)
	};
	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

export default parseHsl;
